// Site search (tools/search-index.mjs, tools/search-view.mjs). Loads search-index.json on first use and searches it
// in the browser: no server, nothing sent anywhere. Every word typed must start a word of the entry, so "year 8
// chemistry", "python", "makecode" and "AC9TDI8P05" all work. "year 8", "yr 8" and "y8" mean the same.
(function () {
  var forms = [].slice.call(document.querySelectorAll('.wp-search'));
  if (!forms.length) return;
  var idx = null, loading = null, root = forms[0].dataset.root || '';
  function norm(s) {
    return String(s || '').toLowerCase()
      .replace(/\b(?:years?|yrs?|y)\s*(\d{1,2})\s*(?:-|–|to|and)\s*(\d{1,2})\b/g, function (_, a, b) { var o = ''; for (var y = +a; y <= +b; y++) o += ' year' + y; return o; })
      .replace(/\b(?:year|yr|y)\s*(\d{1,2})\b/g, 'year$1')
      .replace(/[^a-z0-9. ]+/g, ' ').replace(/\s+/g, ' ').trim();
  }
  // "fractions" finds "fraction" and the reverse: drop a plural s from words longer than three letters.
  function stem(w) { return w.length > 3 && w.slice(-1) === 's' && w.slice(-2) !== 'ss' ? w.slice(0, -1) : w; }
  function words(s) { return norm(s).split(' ').filter(Boolean).map(stem); }
  function prep(list) {
    list.forEach(function (e) { e._t = words(e.t); e._c = words(e.c + ' ' + e.s); e._k = words(e.k + ' ' + e.t); });
    return list;
  }
  function load() {
    if (idx) return Promise.resolve(idx);
    if (!loading) loading = fetch(root + 'search-index.json').then(function (r) { if (!r.ok) throw new Error(r.status); return r.json(); }).then(function (l) { idx = prep(l); return idx; });
    return loading;
  }
  function has(ws, tok) { for (var i = 0; i < ws.length; i++) if (ws[i].indexOf(tok) === 0) return true; return false; }
  var BONUS = { course: 3, unit: 1, standard: 1, page: 2, lesson: 0 }, LABEL = { course: 'Course', unit: 'Unit', lesson: 'Lesson', standard: 'Standard', page: 'Page' };
  function search(q, subject) {
    var toks = words(q);
    if (!toks.length) return null;
    var out = [];
    idx.forEach(function (e) {
      if (subject && e.sp !== subject) return;
      var s = 0;
      for (var i = 0; i < toks.length; i++) {
        var t = toks[i];
        if (has(e._t, t)) s += 6; else if (has(e._c, t)) s += 3; else if (has(e._k, t)) s += 1; else return;
      }
      out.push({ e: e, s: s + (e.ty === 'standard' ? (e.n ? 2 : -2) : (BONUS[e.ty] || 0)) });
    });
    out.sort(function (a, b) { return b.s - a.s || a.e.t.localeCompare(b.e.t); });
    return out;
  }
  forms.forEach(function (form) {
    form.hidden = false;
    var input = form.querySelector('input'), list = form.querySelector('.wp-results'), subject = form.dataset.subject || '', shown = [];
    function esc(s) { return String(s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); }
    function render() {
      var q = input.value;
      list.replaceChildren();
      shown = [];
      var res;
      try { res = search(q, subject); } catch (e) { res = null; }
      if (res === null) return;
      if (!res.length) { var li = document.createElement('li'); li.className = 'wp-none'; li.textContent = 'Nothing found. Try a topic, a year (Year 8), a tool (Python, MakeCode) or a curriculum code.'; list.appendChild(li); return; }
      res.slice(0, 12).forEach(function (r) {
        var e = r.e, li = document.createElement('li'), a = document.createElement('a');
        a.href = root + e.u;
        var meta = [e.ty === 'standard' ? 'Standard' : LABEL[e.ty], e.ty === 'course' || e.ty === 'standard' || e.ty === 'page' ? e.s : e.s + ' › ' + e.c, e.y].filter(Boolean).join(' · ');
        a.innerHTML = '<b>' + esc(e.t) + '</b><span>' + esc(meta) + '</span>' + (e.d ? '<span>' + esc(e.d) + '</span>' : '');
        li.appendChild(a); list.appendChild(li); shown.push(a);
      });
      if (res.length > 12) { var more = document.createElement('li'); more.className = 'wp-none'; more.textContent = 'Showing the first 12 of ' + res.length + '. Add a word to narrow it down.'; list.appendChild(more); }
    }
    function go() { load().then(render, function () { list.replaceChildren(); var li = document.createElement('li'); li.className = 'wp-none'; li.textContent = 'Search is not available right now. You can still browse by subject.'; list.appendChild(li); }); }
    input.addEventListener('input', go);
    input.addEventListener('focus', function () { load().catch(function () {}); });
    input.addEventListener('keydown', function (ev) {
      if (ev.key === 'Escape') { input.value = ''; list.replaceChildren(); }
      if (ev.key === 'ArrowDown' && shown.length) { ev.preventDefault(); shown[0].focus(); }
    });
    list.addEventListener('keydown', function (ev) {
      var i = shown.indexOf(document.activeElement);
      if (ev.key === 'ArrowDown' && i >= 0 && i < shown.length - 1) { ev.preventDefault(); shown[i + 1].focus(); }
      if (ev.key === 'ArrowUp' && i >= 0) { ev.preventDefault(); (i ? shown[i - 1] : input).focus(); }
      if (ev.key === 'Escape') input.focus();
    });
    form.addEventListener('submit', function (ev) { ev.preventDefault(); if (shown[0]) location.href = shown[0].href; else go(); });
  });
})();
