// Binary cards (after CS Unplugged's dot cards): a row of cards, each worth double the one on its right (…8, 4, 2, 1),
// shown as that many dots. A card face up is a 1, face down a 0; the number is the sum of the cards face up.
//   widget: bits
//   bits: 4            how many cards (1 to 8)
//   n: 11              the starting number (or start: 1011, the starting pattern in binary)
//   number: off        hide the sum and the number (students work it out); the 1s and 0s still show
//   count: on          + 1 and − 1 buttons: counting past the largest number wraps round to 0 (overflow)
//   grow: on           Add a card and Take away a card (1 to 8 cards)
//   lock: on           the cards cannot be flipped (a pattern to read)
//   hex: on            cards grouped in fours from the right, each group's hex digit (0 to F) under it, and the
//                      number in hex on the panel (styles inline here, so other board clips keep their hash)
// state: { scope: { vars: { n (the number), c (cards face up), b (cards), m (the largest number, 2^b − 1),
//          o (1 once the count has wrapped round past the largest number, else 0), h (hex digits shown, with hex: on) } } }
// Checks: "n = 11", "n = 28 and c = 3", "b = 6 and n = 39", "o = 1". (Board variables are single letters.)
(function (B) {
  'use strict';
  var spec = null, n = 0, b = 4, over = 0, ui = {};
  var on = function (s) { return /^on$/i.test(s || ''); };
  var bin = function (v, k) { var s = v.toString(2); while (s.length < k) s = '0' + s; return s; };

  function parse(s) {
    s.k = s.bits === undefined ? 4 : Number(s.bits);
    if (!(s.k >= 1 && s.k <= 8 && s.k === Math.round(s.k))) throw new Error('bits: a whole number from 1 to 8.');
    if (s.start !== undefined) {
      if (!/^[01]{1,8}$/.test(s.start)) throw new Error('start: a pattern of 0s and 1s, such as 1011.');
      if (s.start.length > s.k) throw new Error('start: ' + s.start.length + ' digits will not fit on ' + s.k + ' cards.');
      s.n0 = parseInt(s.start, 2);
    } else s.n0 = s.n === undefined ? 0 : Number(s.n);
    if (!(s.n0 >= 0 && s.n0 === Math.round(s.n0) && s.n0 < Math.pow(2, s.k))) throw new Error('n: a whole number from 0 to ' + (Math.pow(2, s.k) - 1) + ' (the most ' + s.k + ' cards can show).');
    s.hideNum = /^off$/i.test(s.number || '');
    s.count = on(s.count); s.grow = on(s.grow); s.lock = on(s.lock); s.hex = on(s.hex);
  }

  // Dots for a card worth v: a grid that keeps the doubling visible (2 = 2×1, 4 = 2×2, 8 = 4×2, 16 = 4×4, 32 = 8×4).
  // From 64 the dots would be too small to count, so the card shows its value as a number instead.
  function dots(v) {
    var NS = 'http://www.w3.org/2000/svg', svg = document.createElementNS(NS, 'svg');
    svg.setAttribute('viewBox', '0 0 100 100'); svg.setAttribute('class', 'bdots'); svg.setAttribute('aria-hidden', 'true');
    if (v >= 64) {
      var t = document.createElementNS(NS, 'text'); t.setAttribute('x', '50'); t.setAttribute('y', '62'); t.setAttribute('text-anchor', 'middle'); t.setAttribute('class', 'bbig'); t.textContent = v; svg.appendChild(t);
      return svg;
    }
    var p = Math.log2(v), cols = Math.pow(2, Math.ceil(p / 2)), rows = v / cols;
    var cell = 84 / Math.max(cols, rows), r = Math.min(cell * 0.36, 13);
    var x0 = 50 - (cols * cell) / 2 + cell / 2, y0 = 50 - (rows * cell) / 2 + cell / 2;
    for (var i = 0; i < v; i++) {
      var c = document.createElementNS(NS, 'circle');
      c.setAttribute('cx', (x0 + (i % cols) * cell).toFixed(2)); c.setAttribute('cy', (y0 + Math.floor(i / cols) * cell).toFixed(2)); c.setAttribute('r', r.toFixed(2));
      svg.appendChild(c);
    }
    return svg;
  }

  function draw() {
    var el = B.el('board'); el.replaceChildren();
    var row = document.createElement('div'); row.className = 'brow'; row.setAttribute('role', 'group'); row.setAttribute('aria-label', b + ' binary cards');
    var groups = {};
    if (spec.hex) {
      row.style.gap = '18px';
      for (var g = Math.floor((b - 1) / 4); g >= 0; g--) {
        var box = document.createElement('div'); box.style.cssText = 'flex:' + Math.min(4, b - 4 * g) + ' 1 0;min-width:0;display:flex;flex-direction:column;align-items:center;gap:8px;';
        var cards = document.createElement('div'); cards.style.cssText = 'display:flex;gap:8px;width:100%;justify-content:center;border-bottom:3px solid var(--accent);padding-bottom:8px;';
        var hd = document.createElement('div'); hd.id = 'bh-' + g; hd.style.cssText = 'font:700 26px/1 ui-monospace,Menlo,Consolas,monospace;color:var(--accent);';
        box.append(cards, hd); row.appendChild(box); groups[g] = cards;
      }
    }
    for (var i = b - 1; i >= 0; i--) (function (i) {
      var v = Math.pow(2, i);
      var col = document.createElement('div'); col.className = 'bcol';
      var lab = document.createElement('div'); lab.className = 'bval'; lab.textContent = v;
      var card = document.createElement(spec.lock ? 'div' : 'button'); card.className = 'bcard'; card.id = 'bc-' + i;
      if (!spec.lock) { card.type = 'button'; card.addEventListener('click', function () { n ^= v; B.moved = true; report(); }); }
      card.appendChild(dots(v));
      var dg = document.createElement('div'); dg.className = 'bdig'; dg.id = 'bd-' + i;
      col.append(lab, card, dg); (spec.hex ? groups[Math.floor(i / 4)] : row).appendChild(col);
    })(i);
    el.appendChild(row);
  }

  function btn(text, label, fn) {
    var e = document.createElement('button'); e.type = 'button'; e.textContent = text; if (label) e.setAttribute('aria-label', label);
    e.addEventListener('click', fn); return e;
  }
  function paintPanel() {
    var panel = B.el('gpanel'); panel.replaceChildren(); ui = {};
    ui.work = document.createElement('p'); ui.work.className = 'bwork'; ui.work.id = 'gsum'; ui.work.setAttribute('aria-live', 'polite'); panel.appendChild(ui.work);
    ui.note = document.createElement('p'); ui.note.className = 'tcount'; ui.note.id = 'gnote'; ui.note.setAttribute('aria-live', 'polite'); panel.appendChild(ui.note);
    var bar = document.createElement('div'); bar.className = 'gbar bbar';
    if (spec.count) {
      bar.appendChild(btn('− 1', 'Count down one', function () { n = n === 0 ? Math.pow(2, b) - 1 : n - 1; B.moved = true; report(n === Math.pow(2, b) - 1 ? 'Counting down past 0 wraps round to the largest number.' : ''); }));
      bar.appendChild(btn('+ 1', 'Count up one', function () {
        B.moved = true;
        if (n === Math.pow(2, b) - 1) { n = 0; over = 1; report('Overflow: ' + b + (b === 1 ? ' card' : ' cards') + ' cannot show ' + Math.pow(2, b) + ', so every card went face down and the count wrapped round to 0.'); }
        else { n++; report(); }
      }));
    }
    if (spec.grow) {
      bar.appendChild(btn('Add a card', 'Add a card on the left', function () { if (b >= 8) return report('This board stops at 8 cards (a byte).'); b++; B.moved = true; draw(); report('The new card is worth ' + Math.pow(2, b - 1) + ': double the card on its right.'); }));
      bar.appendChild(btn('Take away a card', 'Take away the card on the left', function () {
        if (b <= 1) return report('One card is the fewest.');
        var top = Math.pow(2, b - 1), lost = n >= top; b--; n %= top; B.moved = true; draw();
        report(lost ? 'The ' + top + ' card was face up, so its ' + top + ' is lost.' : '');
      }));
    }
    var again = btn('Start again', null, B.restart); again.className = 'quiet'; bar.appendChild(again);
    panel.appendChild(bar);
  }

  function report(note) {
    var ups = [], c = 0;
    for (var i = b - 1; i >= 0; i--) {
      var up = !!(n & Math.pow(2, i));
      var card = B.el('board').querySelector('#bc-' + i), dg = B.el('board').querySelector('#bd-' + i);
      if (card) {
        card.classList.toggle('up', up);
        if (!spec.lock) { card.setAttribute('aria-pressed', String(up)); card.setAttribute('aria-label', 'Card ' + Math.pow(2, i) + ', ' + (up ? 'face up (1)' : 'face down (0)')); }
        else card.setAttribute('aria-label', 'Card ' + Math.pow(2, i) + ', ' + (up ? 'face up' : 'face down'));
      }
      if (dg) dg.textContent = up ? '1' : '0';
      if (up) { c++; ups.push(Math.pow(2, i)); }
    }
    var pat = bin(n, b), m = Math.pow(2, b) - 1, hx = '', hn = Math.ceil(b / 4);
    if (spec.hex) {
      for (var g = 0; g < hn; g++) { var d = Math.floor(n / Math.pow(16, g)) % 16, he = B.el('board').querySelector('#bh-' + g); if (he) he.textContent = d.toString(16).toUpperCase(); }
      hx = n.toString(16).toUpperCase(); while (hx.length < hn) hx = '0' + hx;
      pat = pat.replace(/(?=(?:[01]{4})+$)/g, ' ').trim();
    }
    var sum = spec.hideNum ? '' : (ups.length > 1 ? ups.join(' + ') + ' = ' + n : String(n));
    ui.work.textContent = 'Binary ' + pat + (spec.hex ? '  →  hex ' + hx : '') + (spec.hideNum ? '' : '  →  ' + sum);
    ui.note.textContent = note || (spec.count || spec.grow ? b + (b === 1 ? ' card' : ' cards') + ': 0 to ' + m + (spec.hideNum ? '' : ', ' + (m + 1) + ' patterns') + '.' : '');
    B.say((spec.hideNum ? c + (c === 1 ? ' card' : ' cards') + ' face up: ' + pat : pat + ' in binary is ' + n) + (spec.hex ? ', hex ' + hx.split('').join(' ') : ''));
    B.save({ n: n, b: b, o: over });
    B.post({ scope: { vars: { n: n, c: c, b: b, m: m, o: over, h: spec.hex ? hn : 0 }, points: {} } }, 'Binary ' + pat + (spec.hex ? ', hex ' + hx : '') + (spec.hideNum ? '' : ' = ' + n) + (note ? '. ' + note : ''));
  }

  B.widget('bits', {
    sections: ['board', 'gpanel'],
    label: function (s) { return 'Binary cards: each card is worth double the one on its right'; },
    parse: parse,
    redraw: function () { if (spec) { draw(); report(); } },
    start: function (fresh) {
      spec = B.spec;
      var sv = fresh ? null : B.saved();
      b = sv && sv.b >= 1 && sv.b <= 8 && (spec.grow || sv.b === spec.k) ? sv.b : spec.k;
      n = sv && sv.n >= 0 && sv.n < Math.pow(2, b) ? sv.n : (spec.n0 < Math.pow(2, b) ? spec.n0 : 0);
      over = sv && sv.o ? 1 : 0;
      paintPanel(); draw(); report();
    },
  });
})(WPB);
