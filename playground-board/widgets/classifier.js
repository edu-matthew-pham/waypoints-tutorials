// Classifier: test an image model that students trained in Teachable Machine on a fixed test set, and optionally send
// its predictions to a micro:bit over USB (Web Serial).
//   widget: classifier
//   testset: recycling          the test set in media/classifier/<name>/test.json (images with a label and a group)
//   model: ask                  students paste their shareable link (default); or a link or a path to a model folder
//                               (relative to the board, e.g. media/classifier/recycling/demo/) for a demo or fallback
//   classes: Paper, Plastic     the labels the test set expects (default: the test set's classes)
//   groups: plain, messy        which groups to test (default all, in the test set's order)
//   webcam: on                  a live webcam preview with the top label (not checked)
//   serial: on                  "Connect a micro:bit": sends the top webcam label (or a clicked test image's label)
//                               as a line of text, and reads lines back
//   threshold: 0.8              confidence needed before the webcam sends a label (default 0.8)
// state: { scope: { vars }, model, loaded, labels }. vars (every name has an underscore, so checks can use them):
//   acc_all, acc_<group> (0-1), n_correct, n_total, n_classes, has_<label> (1 or 0; lower case, spaces as _),
//   with serial: n_sent, n_replies, and in_<key> for each "key:number" line the micro:bit sent (dist:23 -> in_dist).
// The Teachable Machine library and TensorFlow.js (the versions its export uses) load only when this widget is used.
(function (B) {
  'use strict';
  var spec = null, set = null, model = null, modelUrl = '', results = null, st = null;
  var cache = {}, libs = null;
  var LAST = 'wp-classifier-link';   // the last model a student loaded: later steps start with it (they paste a new one after retraining)
  var TM = /^https:\/\/teachablemachine\.withgoogle\.com\/models\/[\w-]+\/?$/;

  function el(tag, cls, text) { var e = document.createElement(tag); if (cls) e.className = cls; if (text !== undefined) e.textContent = text; return e; }
  function key(s) { return String(s).trim().toLowerCase().replace(/\s+/g, '_').replace(/[^\w]/g, ''); }
  function list(v) { return String(v || '').split(',').map(function (t) { return t.trim(); }).filter(Boolean); }
  function pct(x) { return Math.round(x * 100) + '%'; }

  function parse(s) {
    if (!s.testset || !/^[\w-]+$/.test(s.testset)) throw new Error('Name a test set, such as "testset: recycling".');
    s.model = s.model || 'ask';
    if (s.model !== 'ask' && !TM.test(s.model) && /^[a-z]+:/i.test(s.model)) throw new Error('model: use "ask", a Teachable Machine link, or a folder on this site.');
    s.threshold = s.threshold === undefined ? 0.8 : Number(s.threshold);
    if (!(s.threshold > 0 && s.threshold <= 1)) throw new Error('threshold: a number from 0 to 1, such as 0.8.');
    s.webcamOn = s.webcam === 'on'; s.serialOn = s.serial === 'on';
  }

  function script(src) {
    return new Promise(function (ok, no) { var e = document.createElement('script'); e.src = src; e.onload = ok; e.onerror = function () { no(new Error('Could not load ' + src)); }; document.head.appendChild(e); });
  }
  function loadLibs() { return libs = libs || script('vendor/tf.min.js').then(function () { return script('vendor/teachablemachine-image.min.js'); }); }

  /** A pasted link or a path, as the folder holding model.json and metadata.json; or a message saying what is wrong. */
  function folder(text) {
    var t = String(text || '').trim();
    if (!t) return { error: 'Paste your model\'s shareable link first.' };
    if (TM.test(t)) return { url: t.replace(/\/?$/, '/') };
    if (/^https?:/i.test(t)) return { error: 'That is not a Teachable Machine link. In Teachable Machine choose Export Model, then Upload my model, and copy the link it gives you.' };
    if (/^[\w./-]+$/.test(t) && t.indexOf('..') < 0) return { url: t.replace(/\/?$/, '/') };
    return { error: 'That does not look like a model link.' };
  }

  function testSet() {
    return fetch('media/classifier/' + spec.testset + '/test.json', { cache: 'no-cache' }).then(function (r) {
      if (!r.ok) throw new Error('There is no test set called "' + spec.testset + '".');
      return r.json();
    }).then(function (j) {
      var groups = spec.groups ? list(spec.groups) : Object.keys(j.groups);
      groups.forEach(function (g) { if (!j.groups[g]) throw new Error('The test set has no group "' + g + '" (it has ' + Object.keys(j.groups).join(', ') + ').'); });
      var classes = spec.classes ? list(spec.classes) : j.classes;
      return { title: j.title, credit: j.credit, classes: classes, groups: groups, names: j.groups, base: 'media/classifier/' + spec.testset + '/',
        images: j.images.filter(function (im) { return groups.indexOf(im.group) >= 0; }) };
    });
  }

  function image(src) {
    return new Promise(function (ok, no) { var im = new Image(); im.onload = function () { ok(im); }; im.onerror = function () { no(new Error('A test image is missing: ' + src)); }; im.src = src; });
  }

  function loadModel(text) {
    var f = folder(text);
    if (f.error) { st.msg = f.error; st.bad = true; paint(); return; }
    st.msg = 'Loading the model…'; st.bad = false; st.busy = true; paint();
    loadLibs().then(function () {
      return fetch(f.url + 'metadata.json', { cache: 'no-cache' }).then(function (r) { if (!r.ok) throw new Error('nometa'); return r.json(); });
    }).then(function (meta) {
      if (meta.packageName && !/image/.test(meta.packageName)) throw new Error('This is a ' + meta.packageName.replace(/^@teachablemachine\//, '') + ' model. This board tests image models: in Teachable Machine start an Image Project.');
      return window.tmImage.load(f.url + 'model.json', f.url + 'metadata.json');
    }).then(function (m) {
      model = m; modelUrl = f.url; st.link = String(text).trim(); st.busy = false;
      B.save({ link: st.link });
      try { if (spec.model === 'ask') localStorage.setItem(LAST, st.link); } catch (e) { /* private mode */ }
      return run();
    }).catch(function (e) {
      if (window.console) console.warn('classifier: could not load', f.url, e);
      st.busy = false; st.bad = true; model = null;
      st.msg = e.message === 'nometa' || /fetch|network|404/i.test(e.message) ? 'Could not load a model from that link. Check that you copied the whole link after Upload my model, and that this computer can reach Teachable Machine.' : e.message;
      paint(); report();
    });
  }

  /** Every test image once per model; results are kept per model link. */
  function run() {
    var labels = model.getClassLabels();
    if (cache[modelUrl]) { results = cache[modelUrl]; st.msg = ''; paint(); report(); return Promise.resolve(); }
    st.msg = 'Testing ' + set.images.length + ' images…'; paint();
    var out = [];
    return set.images.reduce(function (p, im) {
      return p.then(function () { return image(set.base + im.src); }).then(function (img) { return model.predict(img); }).then(function (pred) {
        pred.sort(function (a, b) { return b.probability - a.probability; });
        out.push({ im: im, label: pred[0].className, p: pred[0].probability, ok: key(pred[0].className) === key(im.label) });
      });
    }, Promise.resolve()).then(function () {
      cache[modelUrl] = results = out; B.moved = true;
      var missing = set.classes.filter(function (c) { return !labels.some(function (l) { return key(l) === key(c); }); });
      st.msg = missing.length ? 'Your model has no class called "' + missing[0] + '". Rename the class in Teachable Machine, export again and paste the new link.' : '';
      st.bad = !!missing.length;
      paint(); report();
    });
  }

  function scores() {
    var by = {}, all = { c: 0, n: 0 };
    set.groups.forEach(function (g) { by[g] = { c: 0, n: 0 }; });
    (results || []).forEach(function (r) { by[r.im.group].n++; all.n++; if (r.ok) { by[r.im.group].c++; all.c++; } });
    return { by: by, all: all };
  }

  function report() {
    var v = {}, out = 'No model yet';
    if (model && results) {
      var s = scores(), labels = model.getClassLabels();
      v.acc_all = s.all.n ? s.all.c / s.all.n : 0; v.n_correct = s.all.c; v.n_total = s.all.n; v.n_classes = labels.length;
      set.groups.forEach(function (g) { var x = s.by[g]; v['acc_' + key(g)] = x.n ? x.c / x.n : 0; });
      set.classes.concat(['Neither']).forEach(function (c) { v['has_' + key(c)] = 0; });
      labels.forEach(function (l) { v['has_' + key(l)] = 1; });
      out = labels.join('/') + ' model: ' + s.all.c + '/' + s.all.n + ' (' + pct(v.acc_all) + '). ' + set.groups.map(function (g) { var x = s.by[g]; return g + ' ' + (x.n ? pct(x.c / x.n) : '–'); }).join(', ');
    }
    if (spec.serialOn) { v.n_sent = st.sent; v.n_replies = st.replies; Object.keys(st.inVals).forEach(function (k) { v['in_' + k] = st.inVals[k]; }); }
    Object.keys(v).forEach(function (k) { v[k] = Math.round(v[k] * 1000) / 1000; });
    B.say(model && results ? out : (spec.model === 'ask' && !st.busy ? 'Paste your model link, then Load.' : ''), false);
    B.post({ scope: { vars: v, points: {} }, model: modelUrl, loaded: !!model, labels: model ? model.getClassLabels() : [] }, out);
  }

  // ---- Web Serial: one line per message, 115200 baud (MakeCode's default over USB). ----
  function connect() {
    if (!('serial' in navigator)) { st.serialMsg = 'This browser cannot talk to a micro:bit. Use Chrome or Edge on a laptop or Chromebook.'; paint(); return; }
    navigator.serial.requestPort({ filters: [{ usbVendorId: 0x0d28 }] }).then(function (port) {
      return port.open({ baudRate: 115200 }).then(function () { return port; });
    }).then(function (port) {
      st.port = port; st.serialMsg = 'Connected.'; paint();
      var enc = new TextEncoderStream(); enc.readable.pipeTo(port.writable); st.writer = enc.writable.getWriter();
      var dec = new TextDecoderStream(); port.readable.pipeTo(dec.writable); var reader = dec.readable.getReader(), buf = '';
      (function pump() {
        reader.read().then(function (r) {
          if (r.done) return;
          buf += r.value; var lines = buf.split(/\r?\n/); buf = lines.pop();
          lines.forEach(function (l) { if (l.trim()) heard(l.trim()); });
          pump();
        }).catch(function () { st.port = null; st.writer = null; st.serialMsg = 'The micro:bit was disconnected.'; paint(); });
      })();
    }).catch(function (e) {
      if (e && e.name === 'NotFoundError') return;   // the student closed the chooser
      st.serialMsg = e && /open|busy|InvalidState|NetworkError/i.test(e.name + e.message) ? 'The micro:bit is busy. If MakeCode is connected to it in another tab, disconnect it there (or close that tab) and try again.' : 'Could not connect: ' + (e && e.message);
      paint();
    });
  }
  function send(text) {
    if (!st.writer) return;
    st.writer.write(text + '\n'); st.sent++; st.log.unshift('→ ' + text); st.log.length = Math.min(st.log.length, 6); B.moved = true;
    paint(); report();
  }
  function heard(line) {
    st.replies++; st.log.unshift('← ' + line); st.log.length = Math.min(st.log.length, 6);
    var m = /^([a-zA-Z]\w*)\s*[:=]\s*(-?\d+(?:\.\d+)?)$/.exec(line);
    if (m) st.inVals[key(m[1])] = Number(m[2]);
    B.moved = true; paint(); report();
  }

  // ---- Webcam preview: the top label live; with serial, sends a label once it holds steady. ----
  function webcam() {
    if (st.cam) { stopCam(); paint(); return; }
    if (!model) return;
    navigator.mediaDevices.getUserMedia({ video: { width: 224, height: 224 } }).then(function (stream) {
      var v = document.createElement('video'); v.muted = true; v.playsInline = true; v.srcObject = stream; v.play();
      st.cam = { stream: stream, video: v, top: '', p: 0, since: 0, timer: 0 };
      paint();
      st.cam.timer = setInterval(function () {
        if (!st.cam || v.readyState < 2) return;
        model.predict(v).then(function (pred) {
          if (!st.cam) return;
          pred.sort(function (a, b) { return b.probability - a.probability; });
          var c = st.cam, top = pred[0].className, now = Date.now();
          if (top !== c.top) { c.top = top; c.since = now; }
          c.p = pred[0].probability;
          var lab = B.el('cltop'); if (lab) lab.textContent = top + ' ' + pct(c.p);
          // Send only a label that has held for 300 ms above the threshold, and only when it changes.
          if (spec.serialOn && c.p >= spec.threshold && now - c.since >= 300 && top !== st.lastSent) { st.lastSent = top; send(top); }
        });
      }, 150);
    }).catch(function () { st.serialMsg = ''; st.msg = 'The webcam is blocked or missing. You can still test with the photos below.'; paint(); report(); });
  }
  function stopCam() { if (!st || !st.cam) return; clearInterval(st.cam.timer); st.cam.stream.getTracks().forEach(function (t) { t.stop(); }); st.cam = null; }

  function paint() {
    var panel = B.el('gpanel'); panel.replaceChildren();
    var wrap = el('div', 'clwrap');
    // Load a model.
    if (spec.model === 'ask') {
      var row = el('div', 'clrow');
      var inp = el('input', 'cllink'); inp.type = 'url'; inp.id = 'cllink'; inp.placeholder = 'https://teachablemachine.withgoogle.com/models/…/'; inp.value = st.link || '';
      inp.setAttribute('aria-label', 'Your model\'s shareable link');
      var go = el('button', 'go', st.busy ? 'Loading…' : 'Load'); go.type = 'button'; go.disabled = st.busy;
      go.addEventListener('click', function () { loadModel(inp.value); });
      inp.addEventListener('keydown', function (e) { if (e.key === 'Enter') loadModel(inp.value); });
      row.append(inp, go); wrap.appendChild(row);
    }
    if (st.msg) wrap.appendChild(el('p', 'clmsg' + (st.bad ? ' bad' : ''), st.msg));
    // Scores by group.
    if (model && results) {
      var s = scores(), sc = el('div', 'clscores');
      var tot = el('div', 'clscore all'); tot.append(el('b', '', 'Overall'), el('span', '', s.all.c + ' / ' + s.all.n + ' (' + pct(s.all.n ? s.all.c / s.all.n : 0) + ')')); sc.appendChild(tot);
      set.groups.forEach(function (g) {
        var x = s.by[g], f = x.n ? x.c / x.n : 0, d = el('div', 'clscore');
        var bar = el('i'); bar.style.setProperty('--f', f);
        d.append(el('b', '', set.names[g]), bar, el('span', '', x.c + ' / ' + x.n));
        sc.appendChild(d);
      });
      wrap.appendChild(sc);
    }
    // Webcam and serial.
    if ((spec.webcamOn && model) || spec.serialOn) {
      var tools = el('div', 'clrow');
      if (spec.webcamOn && model) { var cb = el('button', st.cam ? 'go' : 'quiet', st.cam ? 'Stop the webcam' : 'Try it on the webcam'); cb.type = 'button'; cb.addEventListener('click', webcam); tools.appendChild(cb); }
      if (spec.serialOn) {
        var sb = el('button', st.port ? 'quiet' : 'go', st.port ? 'micro:bit connected' : 'Connect a micro:bit'); sb.type = 'button'; sb.disabled = !!st.port;
        sb.addEventListener('click', connect); tools.appendChild(sb);
      }
      wrap.appendChild(tools);
      if (st.cam) { var cam = el('div', 'clcam'); cam.append(st.cam.video, el('b', '', '')); cam.lastChild.id = 'cltop'; wrap.appendChild(cam); }
      if (spec.serialOn) {
        if (st.serialMsg) wrap.appendChild(el('p', 'clmsg', st.serialMsg));
        if (st.log.length) { var lg = el('ol', 'cllog'); lg.setAttribute('aria-label', 'Messages to and from the micro:bit'); st.log.forEach(function (l) { lg.appendChild(el('li', '', l)); }); wrap.appendChild(lg); }
      }
    }
    // The test images.
    var grid = el('div', 'clgrid');
    set.images.forEach(function (im, i) {
      var r = results && results[i], card = el(spec.serialOn ? 'button' : 'div', 'clcard' + (r ? (r.ok ? ' ok' : ' no') : ''));
      if (spec.serialOn) { card.type = 'button'; card.title = 'Send this prediction to the micro:bit'; card.addEventListener('click', function () { if (r) send(r.label); }); }
      var pic = el('img'); pic.src = set.base + im.src; pic.alt = im.label + ', ' + set.names[im.group].toLowerCase(); pic.loading = 'lazy';
      card.appendChild(pic);
      var cap = el('span', 'clcap');
      if (r) { cap.append(el('b', '', (r.ok ? '✓ ' : '✗ ') + r.label)); var bar = el('i'); bar.style.setProperty('--f', r.p); cap.append(bar); }
      else cap.append(el('b', '', im.label));
      card.appendChild(cap); grid.appendChild(card);
    });
    wrap.appendChild(grid);
    if (set.credit) wrap.appendChild(el('p', 'clcredit', set.credit));
    panel.appendChild(wrap);
  }

  B.widget('classifier', {
    sections: ['gpanel'],
    label: function () { return 'Test an image model'; },
    parse: parse,
    start: function (fresh) {
      spec = B.spec; stopCam(); model = null; results = null; modelUrl = '';
      var saved = fresh ? null : B.saved(), last = '';
      try { last = B.q.get('fresh') === '1' ? '' : localStorage.getItem(LAST) || ''; } catch (e) { /* private mode */ }
      st = { link: saved && saved.link || last, msg: 'Loading the test photos…', bad: false, busy: false, cam: null, port: st && st.port, writer: st && st.writer, serialMsg: '', sent: 0, replies: 0, inVals: {}, log: [], lastSent: '' };
      var p = B.el('gpanel'); p.replaceChildren();
      testSet().then(function (s) {
        set = s; st.msg = ''; paint(); report();
        var start = spec.model !== 'ask' ? spec.model : st.link;
        if (start) loadModel(start);
      }).catch(function (e) { B.fail(e.message); });
    },
  });
})(WPB);
