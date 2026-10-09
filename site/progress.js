// "My progress": a dialog that compares this browser's progress (localStorage "wp-progress") with
// progress-manifest.json, which the build writes. Nothing is sent anywhere. Opened by any element
// with data-progress-open. window.wpProgressSummary() returns the same data for export later.
(function () {
  var script = document.currentScript;
  var root = (script && script.dataset.root) || '';
  var cache = null;

  function load() { try { return JSON.parse(localStorage.getItem('wp-progress')) || {}; } catch (e) { return {}; } }
  function manifest() {
    if (cache) return Promise.resolve(cache);
    return fetch(root + 'progress-manifest.json').then(function (r) { return r.json(); }).then(function (m) { cache = m; return m; });
  }
  function count(prefix, suffix) {
    var n = 0;
    try { for (var i = 0; i < localStorage.length; i++) { var k = localStorage.key(i); if (k.indexOf(prefix) === 0 && (!suffix || k.slice(-suffix.length) === suffix)) n++; } } catch (e) { /* ignore */ }
    return n;
  }
  function tools(kind) { try { return (JSON.parse(localStorage.getItem('wp-mytools:' + kind)) || []).length; } catch (e) { return 0; } }
  function modules() {
    var n = 0;
    try {
      for (var i = 0; i < localStorage.length; i++) {
        var k = localStorage.key(i);
        if (k === 'wp-mymodules:turtle' || (k.indexOf('wp-playground:') === 0 && k.slice(-5) === ':mods')) n += Object.keys(JSON.parse(localStorage.getItem(k)) || {}).length;
      }
    } catch (e) { /* ignore */ }
    return n;
  }

  function summary(m) {
    var p = load(), done = p.done || {}, unlocked = p.unlocked || {};
    return m.paths.map(function (path) {
      var lessons = path.lessons.map(function (l) {
        var got = l.checks.filter(function (k) { return done[k]; }).length;
        return { title: l.title, order: l.order, href: l.href, checks: l.checks.length, done: got, complete: l.checks.length > 0 && got === l.checks.length };
      });
      var snips = (path.snippets || []).map(function (s) { return { id: s.id, label: s.label, lesson: s.lesson, step: s.step, got: !!(p.all || unlocked[path.kind + ':' + s.id]) }; });
      return { title: path.title, href: path.href, kind: path.kind, lessons: lessons, snippets: snips };
    });
  }
  window.wpProgressSummary = function () { return manifest().then(summary); };

  function el(tag, cls, text) { var e = document.createElement(tag); if (cls) e.className = cls; if (text != null) e.textContent = text; return e; }

  function render(m) {
    var p = load(), data = summary(m);
    var dlg = document.getElementById('wp-progress-dialog');
    if (dlg) dlg.remove();
    dlg = el('dialog', 'wp-progress'); dlg.id = 'wp-progress-dialog'; dlg.setAttribute('aria-labelledby', 'wp-progress-h');
    var style = el('style', null,
      '.wp-progress{max-width:min(94vw,560px);width:100%;border:1px solid #cfcac0;border-radius:14px;padding:20px 22px;background:var(--card,#fff);color:var(--ink,#1d2430);font:15px/1.5 system-ui,sans-serif}' +
      '.wp-progress::backdrop{background:rgba(0,0,0,.4)}.wp-progress h2{margin:0 0 4px;font-size:1.3rem}.wp-progress h3{margin:18px 0 6px;font-size:1.05rem}' +
      '.wp-progress ul{list-style:none;margin:6px 0;padding:0}.wp-progress li{display:flex;gap:8px;align-items:center;margin:3px 0}' +
      '.wp-progress .dot{flex:none;width:16px;height:16px;border-radius:50%;border:2px solid #b9b4a8}.wp-progress .dot.on{background:#16a05d;border-color:#16a05d}' +
      '.wp-progress .muted{color:#6b7684;font-size:14px}.wp-progress .bar{height:8px;border-radius:99px;background:#e4e1da;overflow:hidden;margin:6px 0}.wp-progress .bar i{display:block;height:100%;background:#16a05d}' +
      '.wp-progress button{font:inherit;font-weight:600;margin-top:16px;padding:6px 16px;border-radius:8px;border:1px solid #cfcac0;background:transparent;color:inherit;cursor:pointer}');
    dlg.append(style);
    var h = el('h2', null, 'My progress'); h.id = 'wp-progress-h'; dlg.append(h);
    dlg.append(el('p', 'muted', 'Saved in this browser only. Nothing is sent anywhere.'));
    if (p.all) dlg.append(el('p', 'muted', 'Teacher override is on: every snippet is unlocked in the lessons.'));
    if (p.free) dlg.append(el('p', 'muted', 'Free play has "unlock all" switched on. Lessons are not affected.'));

    data.forEach(function (path) {
      dlg.append(el('h3', null, path.title));
      var total = path.lessons.length, finished = path.lessons.filter(function (l) { return l.complete; }).length;
      dlg.append(el('p', 'muted', finished + ' of ' + total + ' lessons complete'));
      var ul = el('ul');
      path.lessons.forEach(function (l) {
        var li = el('li'), a = el('a', null, (l.order != null ? l.order + '. ' : '') + l.title);
        a.href = root + l.href; a.style.color = 'inherit';
        li.append(el('i', 'dot' + (l.complete ? ' on' : '')), a, el('span', 'muted', l.checks ? l.done + '/' + l.checks + ' checks' : 'no checks'));
        ul.append(li);
      });
      dlg.append(ul);
      if (path.snippets.length) {
        var got = path.snippets.filter(function (s) { return s.got; }).length;
        dlg.append(el('p', null, 'Snippets unlocked: ' + got + ' of ' + path.snippets.length));
        var b = el('div', 'bar'), fill = el('i'); fill.style.width = Math.round(100 * got / path.snippets.length) + '%'; b.append(fill); dlg.append(b);
        var next = path.snippets.filter(function (s) { return !s.got; })[0];
        if (next) dlg.append(el('p', 'muted', 'Next unlock: ' + next.label + ' (' + next.lesson + ': ' + next.step + ')'));
      }
      if (path.kind === 'turtle') {
        var t = tools('turtle'), mo = modules();
        dlg.append(el('p', 'muted', 'My tools: ' + t + ' · My modules: ' + mo));
      }
    });
    var close = el('button', null, 'Close'); close.addEventListener('click', function () { dlg.close(); });
    dlg.append(close);
    document.body.append(dlg);
    dlg.showModal();
  }

  // Course page: fill each lesson row from this browser's progress, pick what to continue, add the footer.
  function course() {
    var list = document.getElementById('course');
    if (!list) return;
    var p = load(), done = p.done || {}, rows = [].slice.call(list.querySelectorAll('.crow')), any = false;
    var info = rows.map(function (r) {
      var keys = r.dataset.keys ? r.dataset.keys.split('|') : [], hrefs = r.dataset.hrefs ? r.dataset.hrefs.split('|') : [], labels = r.dataset.labels ? r.dataset.labels.split('|') : [];
      var n = 0, first = -1;
      keys.forEach(function (k, i) { if (done[k]) n++; else if (first < 0) first = i; });
      [].forEach.call(r.querySelectorAll('.seg'), function (sg) { sg.classList.toggle('on', !!done[sg.dataset.key]); });
      var all = keys.length > 0 && n === keys.length;
      if (n) any = true;
      r.classList.toggle('started', n > 0 && !all); r.classList.toggle('done', all);
      var st = r.querySelector('.cstat');
      if (st && keys.length) st.textContent = all ? 'Done' : n ? n + '/' + keys.length : 'Not started';
      var a = document.createElement('a'); a.href = r.dataset.href;
      return { row: r, keys: keys, all: all, path: a.pathname, next: first >= 0 ? { href: hrefs[first], label: labels[first] } : null };
    });
    // Continue: the lesson last opened, if it is unfinished; otherwise the first unfinished lesson.
    var last = null; try { last = JSON.parse(localStorage.getItem('wp-last-lesson')); } catch (e) { /* ignore */ }
    var pick = info.filter(function (x) { return last && x.path === last.href && x.keys.length && !x.all; })[0] || info.filter(function (x) { return x.keys.length && !x.all; })[0];
    var c = document.getElementById('continue');
    if (c) {
      if (pick) {
        pick.row.classList.add('next');
        var started = any && pick.next;
        c.href = started && pick.keys.some(function (k) { return done[k]; }) ? pick.next.href : pick.row.dataset.href;
        c.querySelector('.ck').textContent = any ? 'Continue' : 'Start';
        c.querySelector('b').textContent = pick.row.dataset.title;
        c.querySelector('.cstep').textContent = any && pick.next ? 'Next: ' + pick.next.label : '';
      } else if (info.some(function (x) { return x.keys.length; })) {
        c.querySelector('.ck').textContent = 'All done';
        c.querySelector('b').textContent = 'Every lesson here is complete. Try the playground.';
        c.href = 'playground/'; c.querySelector('.cstep').textContent = '';
      }
    }
    var foot = document.getElementById('cfoot');
    if (foot) manifest().then(function (m) {
      var path = summary(m).filter(function (x) { return location.pathname.slice(-x.href.length) === x.href; })[0];
      if (!path) return;
      foot.replaceChildren();
      var bits = [];
      if (path.snippets.length) {
        var got = path.snippets.filter(function (x) { return x.got; }).length, nx = path.snippets.filter(function (x) { return !x.got; })[0];
        bits.push(['Snippets unlocked: ', got + ' of ' + path.snippets.length]);
        if (nx) bits.push(['Next unlock: ', nx.label]);
      }
      if (path.kind === 'turtle') { bits.push(['My tools: ', String(tools('turtle'))]); bits.push(['My modules: ', String(modules())]); }
      bits.forEach(function (b, i) { if (i) foot.append(' · '); foot.append(b[0]); foot.append(el('b', null, b[1])); });
      foot.append(el('br')); foot.append('Progress is saved in this browser only. Nothing is sent anywhere.');
    }).catch(function () { /* footer stays as built */ });
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', course); else course();
  window.addEventListener('pageshow', function (e) { if (e.persisted) course(); }); // back button from a lesson

  document.addEventListener('click', function (e) {
    var t = e.target.closest && e.target.closest('[data-progress-open]');
    if (!t) return;
    e.preventDefault();
    manifest().then(render).catch(function () { alert('Could not load progress.'); });
  });
})();
