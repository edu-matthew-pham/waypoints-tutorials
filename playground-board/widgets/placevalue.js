// Place value columns: each column has a power of 10 (10⁰, 10¹, 10²…) and a digit 0 to 9 (also drawn as that many counters), so a number is "digit × power of 10"
// added up: expanded notation.
//   widget: placevalue
//   places: 5          how many columns (2 to 8: ones up to ten millions)
//   n: 4052            the starting number
//   shift: on          also give ×10 and ÷10 buttons (every digit moves one column)
//   names: off         hide the column names (ones, tens, …), so only the powers show
// state: { scope: { vars: { n (the number), z (how many digits are not 0), t (the highest power of 10 with a digit) } } }
// Checks: "n = 4052", "n = 60009", "z = 2 and t = 5". (Board variables are single letters.)
//
// mode: scientific (Year 9): a number written as a × 10ᵏ and the same number written out, with the decimal point
// moving k places. a is one place of decimals from 1 to 9.9.
//   mode: scientific
//   slider a: 1, 9.9, 3.2    optional; or a fixed "a: 3.2"; default 1, 9.9, 4.5
//   slider k: -9, 12, 4      optional; or a fixed "k: 4"; default -9, 12, 3
//   result: off              hide the written-out number (students work it out)
// state: { scope: { vars: { a, k, n (the value), d (digits after the decimal point in the written-out number) } } }
// Checks: "a = 3.2 and k = -4", "k = 6".
(function (B) {
  'use strict';
  var spec = null, dig = [], ui = {};
  var SUP = '⁰¹²³⁴⁵⁶⁷⁸⁹';
  var sup = function (n) { return String(n).split('').map(function (c) { return SUP[+c]; }).join(''); };
  var NAMES = ['ones', 'tens', 'hundreds', 'thousands', 'ten thousands', 'hundred thousands', 'millions', 'ten millions'];

  function parse(s) {
    if (/^scientific$/i.test(s.mode || '')) return parseSci(s);
    s.k = s.places === undefined ? 5 : Number(s.places);
    if (!(s.k >= 2 && s.k <= 8 && s.k === Math.round(s.k))) throw new Error('places: a whole number from 2 to 8.');
    s.start = s.n === undefined ? 0 : Number(s.n);
    if (!(s.start >= 0 && s.start === Math.round(s.start) && s.start < Math.pow(10, s.k))) throw new Error('n: a whole number that fits in ' + s.k + ' places.');
    s.shift = /^on$/i.test(s.shift || '');
    s.names = !/^off$/i.test(s.names || '');
  }
  function num() { var n = 0; for (var i = 0; i < dig.length; i++) n += dig[i] * Math.pow(10, i); return n; }
  function setN(n) { dig = []; for (var i = 0; i < spec.k; i++) { dig.push(n % 10); n = Math.floor(n / 10); } }
  function commas(n) { return String(n).replace(/\B(?=(\d{3})+(?!\d))/g, ' '); }

  function draw() {
    var el = B.el('board'); el.replaceChildren();
    var row = document.createElement('div'); row.className = 'pvrow'; row.setAttribute('role', 'group'); row.setAttribute('aria-label', 'Place value columns');
    for (var i = spec.k - 1; i >= 0; i--) (function (i) {
      var col = document.createElement('div'); col.className = 'pvcol';
      var pw = document.createElement('div'); pw.className = 'pvpow'; pw.innerHTML = '10<sup>' + i + '</sup>';
      col.appendChild(pw);
      var nm = document.createElement('div'); nm.className = 'pvname'; nm.textContent = spec.names ? NAMES[i] : ' '; col.appendChild(nm);
      var one = i === 0 ? '' : ' ' + NAMES[i].replace(/s$/, '');
      var up = document.createElement('button'); up.type = 'button'; up.textContent = '▲'; up.setAttribute('aria-label', 'Add one' + one + ' (10 to the power ' + i + ')');
      var dn = document.createElement('button'); dn.type = 'button'; dn.textContent = '▼'; dn.setAttribute('aria-label', 'Take one' + one + ' (10 to the power ' + i + ')');
      var dg = document.createElement('div'); dg.className = 'pvdig'; dg.id = 'pv-' + i;
      var val = document.createElement('div'); val.className = 'pvval'; val.id = 'pvv-' + i;
      var ct = document.createElementNS('http://www.w3.org/2000/svg', 'svg'); ct.setAttribute('viewBox', '0 0 54 54'); ct.setAttribute('width', '54'); ct.setAttribute('height', '54'); ct.setAttribute('class', 'pvdots'); ct.setAttribute('id', 'pvs-' + i); ct.setAttribute('aria-hidden', 'true');
      up.addEventListener('click', function () { if (dig[i] < 9) { dig[i]++; B.moved = true; report(); } });
      dn.addEventListener('click', function () { if (dig[i] > 0) { dig[i]--; B.moved = true; report(); } });
      col.append(up, dg, dn, ct, val); row.appendChild(col);
    })(i);
    el.appendChild(row);
  }

  function paintPanel() {
    var panel = B.el('gpanel'); panel.replaceChildren(); ui = {};
    ui.work = document.createElement('p'); ui.work.className = 'rulework'; ui.work.id = 'gsum'; ui.work.setAttribute('aria-live', 'polite'); panel.appendChild(ui.work);
    ui.note = document.createElement('p'); ui.note.className = 'tcount'; ui.note.id = 'gnote'; ui.note.setAttribute('aria-live', 'polite'); panel.appendChild(ui.note);
    var bar = document.createElement('div'); bar.className = 'gbar';
    if (spec.shift) {
      var t = document.createElement('button'); t.type = 'button'; t.textContent = '× 10'; t.setAttribute('aria-label', 'Times ten: every digit moves one column left');
      t.addEventListener('click', function () { if (dig[spec.k - 1] === 0) { setN(num() * 10); B.moved = true; report(); } else ui.note.textContent = 'There is no column left for that digit.'; });
      var d = document.createElement('button'); d.type = 'button'; d.textContent = '÷ 10'; d.setAttribute('aria-label', 'Divide by ten: every digit moves one column right');
      d.addEventListener('click', function () { if (dig[0] === 0) { setN(num() / 10); B.moved = true; report(); } else ui.note.textContent = 'A digit in the ones column would drop below the ones: this board keeps whole numbers.'; });
      bar.append(t, d);
    }
    var again = document.createElement('button'); again.type = 'button'; again.textContent = 'Start again'; again.addEventListener('click', B.restart);
    bar.appendChild(again); panel.appendChild(bar);
  }

  function report() {
    var n = num(), z = 0, top = 0, terms = [], parts = [];
    for (var i = dig.length - 1; i >= 0; i--) {
      var d = dig[i];
      var dgEl = B.el('board').querySelector('#pv-' + i), vEl = B.el('board').querySelector('#pvv-' + i);
      if (dgEl) dgEl.textContent = d;
      var ctEl = B.el('board').querySelector('#pvs-' + i);
      if (ctEl) { var dots = ''; for (var q = 0; q < d; q++) dots += '<circle cx="' + (12 + (q % 3) * 15) + '" cy="' + (12 + Math.floor(q / 3) * 15) + '" r="6" fill="var(--accent, #c2570a)" fill-opacity="0.55" stroke="var(--accent, #c2570a)" stroke-width="1.5"/>'; ctEl.innerHTML = dots; }
      if (vEl) vEl.textContent = d ? d + ' × ' + Math.pow(10, i) : '';
      if (d) { z++; if (!terms.length) top = i; terms.push(d + ' × 10' + sup(i)); parts.push(String(d * Math.pow(10, i))); }
    }
    ui.work.textContent = n === 0 ? '0' : terms.join(' + ');
    ui.note.textContent = n === 0 ? 'Every column is 0.' : (terms.length > 1 ? parts.join(' + ') + ' = ' : '') + commas(n);
    B.say(commas(n) + (n ? ' is ' + terms.join(' plus ') : ''));
    B.save({ n: n });
    var vars = { n: n, z: z, t: top };
    B.post({ scope: { vars: vars, points: {} } }, ui.work.textContent + '. ' + ui.note.textContent);
  }


  // ---- scientific notation ----
  var SUPM = '⁰¹²³⁴⁵⁶⁷⁸⁹';
  var supn = function (n) { return String(n).split('').map(function (c) { return c === '-' ? '⁻' : SUPM[+c]; }).join(''); };
  var mv = {};
  function parseSci(s) {
    s.sci = true; s.sl = {}; s.fix = {};
    (s.items || []).forEach(function (it) {
      if (it.kind !== 'slider') return;
      if (it.name !== 'a' && it.name !== 'k') throw new Error('Line ' + it.line + ': the board has sliders a (the number from 1 to 9.9) and k (the power of 10).');
      var v = String(it.value).split(',').map(function (x) { return Number(x.trim()); });
      if (v.length < 3 || v.some(function (x) { return !isFinite(x); }) || !(v[0] < v[1]) || v[2] < v[0] || v[2] > v[1]) throw new Error('slider ' + it.name + ': min, max, start.');
      if (it.name === 'a' && (v[0] < 1 || v[1] > 9.9)) throw new Error('slider a: between 1 and 9.9.');
      if (it.name === 'k' && (v[0] < -12 || v[1] > 12 || v.some(function (x) { return x !== Math.round(x); }))) throw new Error('slider k: whole numbers from −12 to 12.');
      s.sl[it.name] = { min: v[0], max: v[1], start: v[2] };
    });
    ['a', 'k'].forEach(function (nm) {
      if (s.sl[nm]) return;
      var d = nm === 'a' ? 4.5 : 3;
      s.fix[nm] = s[nm] !== undefined ? Number(s[nm]) : d;
    });
    if (s.fix.a !== undefined && !(s.fix.a >= 1 && s.fix.a <= 9.9)) throw new Error('a: between 1 and 9.9.');
    if (s.fix.k !== undefined && (s.fix.k !== Math.round(s.fix.k) || Math.abs(s.fix.k) > 12)) throw new Error('k: a whole number from −12 to 12.');
    s.res = !/^off$/i.test(s.result || '');
  }
  // The number written out, as text, from the digits (no floating point): D × 10^e with D a whole number.
  function written(a, k) {
    var D = Math.round(a * 10), e = k - 1;
    while (D > 0 && D % 10 === 0) { D /= 10; e++; }
    var ds = String(D), out;
    if (e >= 0) out = ds + new Array(e + 1).join('0');
    else if (ds.length > -e) out = ds.slice(0, ds.length + e) + '.' + ds.slice(ds.length + e);
    else out = '0.' + new Array(-e - ds.length + 1).join('0') + ds;
    var parts = out.split('.'), whole = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
    var frac = parts[1] ? parts[1].replace(/(\d{3})(?=\d)/g, '$1 ') : '';
    return { text: parts[1] ? whole + '.' + frac : whole, decimals: parts[1] ? parts[1].length : 0, value: D * Math.pow(10, e) };
  }
  var showA = function (a) { var t = a.toFixed(1); return t; };
  function sciSlider(nm, label, step) {
    var sl = spec.sl[nm], row = document.createElement('div'); row.className = 'srow';
    var lab = document.createElement('label'); lab.className = 'vname'; lab.textContent = nm; lab.htmlFor = 'sl-' + nm;
    var minus = document.createElement('button'); minus.type = 'button'; minus.textContent = '−'; minus.setAttribute('aria-label', 'Make ' + nm + ' smaller');
    var rr = document.createElement('input'); rr.type = 'range'; rr.id = 'sl-' + nm; rr.min = sl.min; rr.max = sl.max; rr.step = step; rr.value = mv[nm];
    var plus = document.createElement('button'); plus.type = 'button'; plus.textContent = '+'; plus.setAttribute('aria-label', 'Make ' + nm + ' bigger');
    var out = document.createElement('output'); out.htmlFor = rr.id;
    var set = function (v) { v = Math.max(sl.min, Math.min(sl.max, Math.round(v / step) * step)); mv[nm] = nm === 'a' ? Math.round(v * 10) / 10 : Math.round(v); B.moved = true; reportSci(); };
    rr.addEventListener('input', function () { set(Number(rr.value)); });
    minus.addEventListener('click', function () { set(mv[nm] - step); });
    plus.addEventListener('click', function () { set(mv[nm] + step); });
    row.append(lab, minus, rr, plus, out); ui.outs.push({ n: nm, out: out, r: rr });
    return row;
  }
  function paintSci() {
    var panel = B.el('gpanel'); panel.replaceChildren(); ui = { outs: [] };
    ui.work = document.createElement('p'); ui.work.className = 'rulework'; ui.work.id = 'gsum'; ui.work.setAttribute('aria-live', 'polite'); panel.appendChild(ui.work);
    ui.note = document.createElement('p'); ui.note.className = 'tcount'; ui.note.id = 'gnote'; ui.note.setAttribute('aria-live', 'polite'); panel.appendChild(ui.note);
    if (spec.sl.a) panel.appendChild(sciSlider('a', 'the number', 0.1));
    if (spec.sl.k) panel.appendChild(sciSlider('k', 'the power of 10', 1));
    var bar = document.createElement('div'); bar.className = 'gbar'; var again = document.createElement('button'); again.type = 'button'; again.textContent = 'Start again'; again.addEventListener('click', B.restart);
    bar.appendChild(again); panel.appendChild(bar);
  }
  function drawSci() {
    var el = B.el('board'); el.replaceChildren();
    var box = document.createElement('div'); box.setAttribute('role', 'img'); box.style.cssText = 'display:flex;flex-direction:column;justify-content:center;align-items:center;gap:14px;height:100%;padding:12px;text-align:center;font-family:system-ui,sans-serif';
    var big = document.createElement('div'); big.id = 'sci-form'; big.style.cssText = 'font-size:2.4rem;font-weight:700;color:' + (B.css('--accent') || '#c2570a');
    var eq = document.createElement('div'); eq.style.cssText = 'font-size:1.1rem;color:' + (B.css('--muted') || '#5d6675'); eq.textContent = 'the same number, written out';
    var long = document.createElement('div'); long.id = 'sci-long'; long.style.cssText = 'font-size:1.9rem;font-weight:600;overflow-wrap:anywhere;color:' + (B.css('--ink') || '#1d2430');
    var mvr = document.createElement('div'); mvr.id = 'sci-move'; mvr.style.cssText = 'font-size:1.05rem;color:' + (B.css('--right') || '#8a4fb8');
    box.append(big, eq, long, mvr); el.appendChild(box);
  }
  function reportSci() {
    ui.outs.forEach(function (o) { o.out.textContent = o.n + ' = ' + (o.n === 'a' ? showA(mv.a) : mv.k); o.r.value = mv[o.n]; });
    var a = mv.a, k = mv.k, W = written(a, k);
    var form = showA(a) + ' × 10' + supn(k);
    B.el('board').querySelector('#sci-form').textContent = form;
    B.el('board').querySelector('#sci-long').textContent = spec.res ? W.text : '?';
    B.el('board').querySelector('#sci-move').textContent = k === 0 ? 'The power is 0, so the decimal point does not move.' : 'The decimal point of ' + showA(a) + ' moves ' + Math.abs(k) + ' place' + (Math.abs(k) === 1 ? '' : 's') + (k > 0 ? ' right: a big number.' : ' left: a small number.');
    ui.work.textContent = form + (spec.res ? ' = ' + W.text : '');
    ui.note.textContent = k >= 0 ? 'A positive power makes a number of 1 or more: the point moves right.' : 'A negative power makes a number between 0 and 1: the point moves left. It is not a negative number.';
    B.say(ui.work.textContent + '. ' + ui.note.textContent);
    B.save({ a: a, k: k });
    B.post({ scope: { vars: { a: a, k: k, n: W.value, d: W.decimals }, points: {} } }, ui.work.textContent + '. ' + ui.note.textContent);
  }

  B.widget('placevalue', {
    sections: ['board', 'gpanel'],
    label: function () { return spec && spec.sci ? 'A number in scientific notation and written out' : 'Place value columns, each with a power of 10 and a digit'; },
    parse: parse,
    redraw: function () { if (spec) { if (spec.sci) { drawSci(); reportSci(); } else { draw(); report(); } } },
    start: function (fresh) {
      spec = B.spec;
      if (spec.sci) {
        var sv0 = fresh ? null : B.saved();
        mv = { a: spec.fix.a !== undefined ? spec.fix.a : (sv0 && sv0.a !== undefined ? sv0.a : spec.sl.a.start), k: spec.fix.k !== undefined ? spec.fix.k : (sv0 && sv0.k !== undefined ? sv0.k : spec.sl.k.start) };
        paintSci(); drawSci(); reportSci(); return;
      }
      var sv = fresh ? null : B.saved();
      setN(sv && sv.n !== undefined && sv.n < Math.pow(10, spec.k) ? sv.n : spec.start);
      paintPanel(); draw(); report();
    },
  });
})(WPB);
