// Site search (tools/search-index.mjs, tools/search-view.mjs). Loads search-index.json on first use and searches it
// in the browser: no server, nothing sent anywhere. Every word typed must start a word of the entry, so "year 8
// chemistry", "python", "makecode" and "AC9TDI8P05" all work. "year 8", "yr 8" and "y8" mean the same.
// Filters (20 Nov 2026, roadmap/student-nav.md): Subject, Year and Show (for students or everything), shown once
// something is typed and kept in the address (?q=&subject=&year=&show=) so a teacher can share a filtered search.
// Question words are dropped ("how do I make a sprite"), a whole-word match beats a match at the start of a longer
// word, and when nothing is found a one-letter slip is tried ("fracions").
(function () {
  var forms = [].slice.call(document.querySelectorAll('.wp-search'));
  if (!forms.length) return;
  var idx = null, loading = null, vocab = null, root = forms[0].dataset.root || '';
  function norm(s) {
    return String(s || '').toLowerCase()
      .replace(/micro\s*:?\s*bit/g, 'microbit')
      .replace(/\b(?:years?|yrs?|y)\s*(\d{1,2})\s*(?:-|–|to|and)\s*(\d{1,2})\b/g, function (_, a, b) { var o = ''; for (var y = +a; y <= +b; y++) o += ' year' + y; return o; })
      .replace(/\b(?:year|yr|y)\s*(\d{1,2})\b/g, 'year$1')
      .replace(/[^a-z0-9. ]+/g, ' ').replace(/\s+/g, ' ').trim();
  }
  // "fractions" finds "fraction" and the reverse: drop a plural s from words longer than three letters.
  function stem(w) { return w.length > 3 && w.slice(-1) === 's' && w.slice(-2) !== 'ss' ? w.slice(0, -1) : w; }
  function words(s) { return norm(s).split(' ').filter(Boolean).map(stem); }
  var STOP = { how: 1, do: 1, does: 1, i: 1, a: 1, an: 1, the: 1, to: 1, what: 1, is: 1, are: 1, of: 1, my: 1, me: 1, can: 1, you: 1, about: 1, on: 1, in: 1, with: 1, for: 1 };
  function query(q) { var t = words(q), k = t.filter(function (w) { return !STOP[w]; }); return k.length ? k : t; }
  // An entry's years as [lo, hi] (Foundation is 0); Before Year 7 courses count as before 7.
  function years(e) {
    if (/before-year-7/.test(e.u) || /^before year 7/i.test(e.c || '') || /^before year 7/i.test(e.t)) return [0, 6];
    if (/foundation/i.test(e.y)) { var f = String(e.y).match(/(\d{1,2})/); return [0, f ? +f[1] : 0]; }
    var m = String(e.y || '').match(/(\d{1,2})(?:\s*[–-]\s*(\d{1,2}))?/);
    return m ? [+m[1], +(m[2] || m[1])] : null;
  }
  function prep(list) {
    list.forEach(function (e) { e._t = words(e.t); e._c = words(e.c + ' ' + e.s); e._k = words(e.k + ' ' + e.t); e._y = years(e); });
    return list;
  }
  function load() {
    if (idx) return Promise.resolve(idx);
    if (!loading) loading = fetch(root + 'search-index.json').then(function (r) { if (!r.ok) throw new Error(r.status); return r.json(); }).then(function (l) { idx = prep(l); return idx; });
    return loading;
  }
  // 2: a whole word; 1: the start of a longer word ("game" in "gamete" counts for less); 0: none.
  function has(ws, tok) { var best = 0; for (var i = 0; i < ws.length; i++) { if (ws[i] === tok) return 2; if (!best && ws[i].indexOf(tok) === 0) best = 1; } return best; }
  var BONUS = { course: 3, unit: 1, standard: 1, page: 2, lesson: 0, card: 0, howto: 0, refresher: 1, recap: 1 }, LABEL = { howto: 'How-to', refresher: 'Refresher', card: 'Card', course: 'Course', unit: 'Unit', lesson: 'Lesson', standard: 'Standard', page: 'Teacher page', recap: 'Recap' };
  // For students: lessons, courses, units, recaps, refreshers, cards, how-tos. Everything adds standards and teacher pages.
  function forStudents(e) { return e.ty !== 'standard' && e.ty !== 'page' && e.sp !== 'teachers'; }
  function fits(e, f) {
    if (f.subject && e.sp !== f.subject) return false;
    if (f.show !== 'all' && !forStudents(e)) return false;
    if (f.year !== '') { var y = e._y; if (!y) return false; if (f.year === 'b7' ? y[1] >= 7 : (y[0] > +f.year || y[1] < +f.year)) return false; }
    return true;
  }
  function search(toks, f) {
    if (!toks.length) return null;
    var out = [];
    idx.forEach(function (e) {
      if (!fits(e, f)) return;
      var s = 0;
      for (var i = 0; i < toks.length; i++) {
        var t = toks[i], m;
        if ((m = has(e._t, t))) s += m === 2 ? 7 : 5; else if ((m = has(e._c, t))) s += m === 2 ? 3 : 2; else if ((m = has(e._k, t))) s += m === 2 ? 2 : 0.5; else return;
      }
      out.push({ e: e, s: s + (e.ty === 'standard' ? (e.n ? 2 : -2) : (BONUS[e.ty] || 0)) });
    });
    out.sort(function (a, b) { return b.s - a.s || a.e.t.localeCompare(b.e.t); });
    return out;
  }
  // One-letter slips (a letter missing, extra, changed or two swapped), tried only when nothing was found.
  function near(a, b) {
    if (Math.abs(a.length - b.length) > 1 || a === b) return false;
    var i = 0; while (i < a.length && a[i] === b[i]) i++;
    if (a.length === b.length) return a.slice(i + 1) === b.slice(i + 1) || (a[i] === b[i + 1] && a[i + 1] === b[i] && a.slice(i + 2) === b.slice(i + 2));
    return a.length > b.length ? a.slice(i + 1) === b.slice(i) : a.slice(i) === b.slice(i + 1);
  }
  function fix(toks) {
    if (!vocab) { vocab = {}; idx.forEach(function (e) { e._t.concat(e._c, e._k).forEach(function (w) { if (w.length > 3) vocab[w] = (vocab[w] || 0) + 1; }); }); }
    var changed = false, out = toks.map(function (t) {
      if (t.length < 5 || idx.some(function (e) { return has(e._k, t); })) return t;
      var best = null; for (var w in vocab) if (near(t, w) && (!best || vocab[w] > vocab[best])) best = w;
      if (best) { changed = true; return best; } return t;
    });
    return changed ? out : null;
  }
  // "Add to my path" (/my-path/): the path code is loaded once, on the first press.
  var pathLoading = null;
  function pathAdd(slug) {
    if (window.wpPathAdd) return Promise.resolve(window.wpPathAdd(slug));
    if (!pathLoading) pathLoading = new Promise(function (ok, no) { var s = document.createElement('script'); s.src = root + 'my-path.js'; s.onload = ok; s.onerror = no; document.head.appendChild(s); });
    return pathLoading.then(function () { return window.wpPathAdd(slug); });
  }
  function pathButton(slug) {
    var li = document.createElement('div'), b = document.createElement('button');
    b.type = 'button'; b.className = 'wpt-path-add'; b.textContent = 'Add to my path'; li.style.padding = '0 12px 8px';
    b.addEventListener('click', function () {
      pathAdd(slug).then(function (n) { li.replaceChildren(); var a = document.createElement('a'); a.href = root + 'my-path/'; a.textContent = 'Added. My path has ' + n + (n === 1 ? ' lesson' : ' lessons') + ' – open it'; a.style.display = 'inline'; li.appendChild(a); }, function () { b.textContent = 'Not available'; });
    });
    li.appendChild(b); return li;
  }
  function el(tag, cls, text) { var x = document.createElement(tag); if (cls) x.className = cls; if (text != null) x.textContent = text; return x; }
  var YEARS = [['', 'Any'], ['b7', 'Before 7'], ['7', '7'], ['8', '8'], ['9', '9'], ['10', '10']];
  forms.forEach(function (form, fi) {
    form.hidden = false;
    var input = form.querySelector('input'), list = form.querySelector('.wp-results'), shown = [];
    // A subject page starts on its subject.
    // Defaults by page: the Teachers page and My path (teacher tools) and teacher view start on Everything.
    var page = form.dataset.subject || '', forTeachers = page === 'teachers' || /\/my-path\/$/.test(location.pathname);
    var base = { subject: page === 'teachers' ? '' : page, year: '', show: forTeachers || (window.wptView && window.wptView()) ? 'all' : 'students' };
    var f = { subject: base.subject, year: base.year, show: base.show }, built = false, bar = null, auto = '';
    var params = fi === 0 ? new URLSearchParams(location.search) : null;
    if (params && params.get('q') != null) {
      input.value = params.get('q');
      if (params.get('subject') != null) f.subject = params.get('subject') === 'all' ? '' : params.get('subject');
      if (params.get('year') != null) f.year = params.get('year');
      if (params.get('show') === 'all' || params.get('show') === 'students') f.show = params.get('show');
    }
    function esc(s) { return String(s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); }
    function buildBar() {
      if (built) return; built = true;
      bar = el('div', 'wpt-sf'); bar.setAttribute('role', 'group'); bar.setAttribute('aria-label', 'Filter results');
      var subjects = {}; idx.forEach(function (e) { if (e.ty === 'course' && e.sp && e.sp !== 'teachers') subjects[e.sp] = e.s; });
      var sl = el('label', 'wpt-sf-l'), ss = el('select'); sl.append('Subject ');
      ss.appendChild(new Option('All subjects', ''));
      Object.keys(subjects).sort(function (a, b) { return subjects[a].localeCompare(subjects[b]); }).forEach(function (k) { ss.appendChild(new Option(subjects[k], k)); });
      ss.value = f.subject; sl.appendChild(ss);
      var yg = el('span', 'wpt-sf-y'); yg.setAttribute('role', 'group'); yg.setAttribute('aria-label', 'Year'); yg.appendChild(el('span', 'wpt-sf-yl', 'Year'));
      YEARS.forEach(function (y) { var b = el('button', null, y[1]); b.type = 'button'; b.dataset.y = y[0]; if (y[0] === 'b7') b.title = 'Before Year 7: catch-up lessons'; else if (y[0]) b.title = 'Year ' + y[0]; yg.appendChild(b); });
      var shl = el('label', 'wpt-sf-l'), sh = el('select'); shl.append('Show ');
      sh.appendChild(new Option('For students', 'students')); sh.appendChild(new Option('Everything', 'all')); sh.value = f.show; shl.appendChild(sh);
      bar.append(sl, yg, shl);
      ss.addEventListener('change', function () { f.subject = ss.value; go(); });
      sh.addEventListener('change', function () { f.show = sh.value; go(); });
      yg.addEventListener('click', function (ev) { var b = ev.target.closest('button'); if (!b) return; f.year = b.dataset.y; auto = ''; go(); });
      form.insertBefore(bar, list);
    }
    function marks() { if (!bar) return; [].forEach.call(bar.querySelectorAll('.wpt-sf-y button'), function (b) { b.setAttribute('aria-pressed', String(b.dataset.y === f.year)); }); bar.querySelector('select').value = f.subject; bar.querySelectorAll('select')[1].value = f.show; }
    function url() {
      if (!params) return;
      var p = new URLSearchParams(location.search);
      ['q', 'subject', 'year', 'show'].forEach(function (k) { p.delete(k); });
      if (input.value.trim()) {
        p.set('q', input.value.trim());
        if (f.subject !== base.subject) p.set('subject', f.subject || 'all');
        if (f.year) p.set('year', f.year);
        if (f.show !== base.show) p.set('show', f.show);
      }
      var s = p.toString();
      try { history.replaceState(history.state, '', location.pathname + (s ? '?' + s : '') + location.hash); } catch (e) { /* ignore */ }
    }
    function yearName(y) { return y === 'b7' ? 'Before Year 7' : 'Year ' + y; }
    function none(text) { var li = el('li', 'wp-none', text); list.appendChild(li); return li; }
    function render() {
      list.replaceChildren(); shown = [];
      var q = input.value, toks = query(q);
      // Typing "year 8" with Any picked moves the Year filter to 8 (one year only).
      var yt = toks.filter(function (t) { return /^year\d{1,2}$/.test(t); });
      // A year set this way goes back to Any once the words "year 8" are deleted again.
      if (auto && f.year === auto && yt.indexOf('year' + auto) < 0) { f.year = ''; auto = ''; }
      if (yt.length === 1 && f.year === '' && toks.length > 1) { f.year = auto = yt[0].slice(4); toks = toks.filter(function (t) { return t !== yt[0]; }); }
      else if (yt.length === 1 && f.year === yt[0].slice(4)) toks = toks.length > 1 ? toks.filter(function (t) { return t !== yt[0]; }) : toks;
      url();
      if (!toks.length) { if (bar) bar.hidden = true; return; }
      buildBar(); bar.hidden = false; marks();
      var res = search(toks, f), fixed = null;
      if (res && !res.length) { var ft = fix(toks); if (ft) { var r2 = search(ft, f); if (r2.length) { res = r2; fixed = ft; } } }
      if (fixed) none('Showing results for “' + fixed.join(' ') + '”.');
      if (!res.length) {
        var open = search(toks, { subject: '', year: '', show: 'all' }) || [];
        var why = [f.year ? yearName(f.year) : '', f.subject ? 'this subject' : '', f.show !== 'all' ? 'student pages' : ''].filter(Boolean).join(', ');
        if (open.length && why) {
          var li = none('Nothing found in ' + why + '. ' + open.length + (open.length === 1 ? ' result' : ' results') + ' with every filter cleared. ');
          var b = el('button', 'wpt-sf-clear', 'Clear filters'); b.type = 'button';
          b.addEventListener('click', function () { f.subject = ''; f.year = ''; f.show = 'all'; go(); }); li.appendChild(b);
        } else none('Nothing found. Try a topic, a year (Year 8), a tool (Python, MakeCode) or a curriculum code.');
        return;
      }
      // At most three lessons or units per course; the rest are counted under the third.
      var per = {}, more = {}, count = 0;
      res.forEach(function (r) {
        var e = r.e, key = (e.ty === 'lesson' || e.ty === 'unit') ? e.sp + '|' + e.c : null;
        if (key) { per[key] = (per[key] || 0) + 1; if (per[key] > 3) { more[key] = (more[key] || 0) + 1; return; } }
        if (count >= 12) return; count++;
        var li = el('li'), a = el('a');
        a.href = root + e.u;
        var meta = [LABEL[e.ty], e.ty === 'course' || e.ty === 'standard' || e.ty === 'page' || !e.c ? e.s : e.s + ' › ' + e.c, e.y].filter(Boolean).join(' · ');
        a.innerHTML = '<b>' + esc(e.t) + '</b><span>' + esc(meta) + '</span>' + (e.d ? '<span>' + esc(e.d) + '</span>' : '');
        li.appendChild(a); list.appendChild(li); shown.push(a);
        if (key && per[key] === 3) li.dataset.course = key;
        if (e.ty === 'lesson' && f.show === 'all') li.appendChild(pathButton(e.u.replace(/\/$/, '')));
      });
      [].forEach.call(list.querySelectorAll('li[data-course]'), function (li) { var n = more[li.dataset.course]; if (n) li.appendChild(el('small', 'wpt-sf-more', '+ ' + n + ' more in ' + li.dataset.course.split('|')[1])); });
      var hidden = res.length - count - Object.keys(more).reduce(function (n, k) { return n + more[k]; }, 0);
      if (hidden > 0) none('Showing the first ' + count + ' of ' + (res.length) + '. Add a word or pick a year to narrow it down.');
    }
    function go() { load().then(render, function () { list.replaceChildren(); none('Search is not available right now. You can still browse by subject.'); }); }
    input.addEventListener('input', go);
    input.addEventListener('focus', function () { load().catch(function () {}); });
    input.addEventListener('keydown', function (ev) {
      if (ev.key === 'Escape') { input.value = ''; list.replaceChildren(); if (bar) bar.hidden = true; url(); }
      if (ev.key === 'ArrowDown' && shown.length) { ev.preventDefault(); shown[0].focus(); }
    });
    list.addEventListener('keydown', function (ev) {
      var i = shown.indexOf(document.activeElement);
      if (ev.key === 'ArrowDown' && i >= 0 && i < shown.length - 1) { ev.preventDefault(); shown[i + 1].focus(); }
      if (ev.key === 'ArrowUp' && i >= 0) { ev.preventDefault(); (i ? shown[i - 1] : input).focus(); }
      if (ev.key === 'Escape') input.focus();
    });
    form.addEventListener('submit', function (ev) { ev.preventDefault(); if (shown[0]) location.href = shown[0].href; else go(); });
    if (input.value) go();
  });
})();
