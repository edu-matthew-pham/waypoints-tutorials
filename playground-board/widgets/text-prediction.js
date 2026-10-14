// Text prediction: inspect how examples determine a fixed-context next-word distribution.
// widget: text-prediction
// phrase: The cat sat on the
// ending: mat  (repeat ending lines to set example frequencies)
// state.scope.vars: n (total examples), k (distinct endings), m (largest count),
//   p (largest probability), c (number of edits), r (1 if most common ending changed).
// This intentionally models one fixed context, NOT a neural language model.
(function (B) {
  'use strict';
  var spec, originalTop = '', endings = [], edits = 0, panel;
  function el(tag, text) {
    var node = document.createElement(tag);
    if (text !== undefined) node.textContent = text;
    return node;
  }
  function counts() {
    var map = Object.create(null);
    endings.forEach(function (w) { map[w] = (map[w] || 0) + 1; });
    return Object.keys(map).map(function (w) { return { word: w, count: map[w] }; })
      .sort(function (a, b) { return b.count - a.count || a.word.localeCompare(b.word); });
  }
  function top(rows) { return rows.length ? rows[0].word : ''; }
  function render() {
    panel.replaceChildren();
    var h = el('h2', 'What word comes next?'); panel.appendChild(h);
    panel.appendChild(el('p', '“' + spec.phrase + ' …”'));
    panel.appendChild(el('p', 'These are invented example endings. Change the examples and inspect what the model would predict.'));
    var lab = el('label', 'Example endings (one word per line)');
    lab.htmlFor = 'tp-endings'; panel.appendChild(lab);
    var area = el('textarea'); area.id = 'tp-endings'; area.rows = 7; area.value = endings.join('\n');
    area.style.width = '100%'; area.style.maxWidth = '32rem'; panel.appendChild(area);
    var apply = el('button', 'Update examples'); apply.type = 'button';
    apply.addEventListener('click', function () {
      var lines = area.value.split(/\r?\n/).map(function (s) { return s.trim().toLowerCase(); }).filter(Boolean);
      if (!lines.length || lines.length > 100 || lines.some(function (w) { return !/^[a-z][a-z'-]{0,29}$/i.test(w); })) {
        B.say('Enter 1–100 endings, one word per line (letters, apostrophes or hyphens).'); return;
      }
      endings = lines; edits++; B.moved = true; render();
    });
    panel.appendChild(apply);
    var rows = counts(), n = endings.length, best = top(rows);
    var table = el('table'); table.style.marginTop = '1rem';
    var head = el('tr'); ['Possible next word', 'Count', 'Probability'].forEach(function (v) { head.appendChild(el('th', v)); }); table.appendChild(head);
    rows.forEach(function (row) {
      var tr = el('tr'); [row.word, String(row.count), row.count + '/' + n + ' (' + Math.round(row.count / n * 100) + '%)'].forEach(function (v) { tr.appendChild(el('td', v)); }); table.appendChild(tr);
    });
    panel.appendChild(table);
    panel.appendChild(el('p', 'Most frequent: ' + best + '. That does not make it certain.'));
    panel.appendChild(el('p', 'Try adding five more “roof” examples. Which word becomes most frequent?'));
    var vars = { n: n, k: rows.length, m: rows[0].count, p: Math.round(rows[0].count / n * 1000) / 1000, c: edits, r: Number(best !== originalTop) };
    B.say('Examples: ' + n + '. Most frequent ending: ' + best + '.');
    B.save({ endings: endings, edits: edits });
    B.post({ scope: { vars: vars, points: {} } }, 'Most frequent ending: ' + best + '; ' + n + ' examples.');
  }
  B.widget('text-prediction', {
    sections: ['gpanel'],
    label: function () { return 'Next-word examples and probabilities'; },
    parse: function (s) {
      s.phrase = s.phrase || 'The cat sat on the';
      s.initial = s.items.filter(function (i) { return i.kind === 'ending'; }).map(function (i) { return i.value.trim().toLowerCase(); });
      if (!s.initial.length) throw new Error('Add at least one ending: word line.');
      if (s.initial.length > 100 || s.initial.some(function (w) { return !/^[a-z][a-z'-]{0,29}$/i.test(w); })) throw new Error('Endings must be single words (maximum 100).');
    },
    start: function (fresh) {
      spec = B.spec; panel = B.el('gpanel');
      var sv = fresh ? null : B.saved();
      endings = sv && Array.isArray(sv.endings) && sv.endings.length ? sv.endings.slice() : spec.initial.slice();
      edits = sv && Number.isInteger(sv.edits) ? sv.edits : 0;
      var initial = Object.create(null);
      spec.initial.forEach(function (w) { initial[w] = (initial[w] || 0) + 1; });
      originalTop = Object.keys(initial).sort(function (a, b) { return initial[b] - initial[a] || a.localeCompare(b); })[0];
      render();
    },
    redraw: function () { if (panel) render(); },
  });
})(WPB);
