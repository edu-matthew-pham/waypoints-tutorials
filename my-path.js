// My path (/my-path/): a teacher's own sequence of lessons with a note, kept in the link's # part (nothing is sent
// anywhere, no account). Form: #t=<title>&n=<note>&l=<slug>,<slug>. The draft being edited lives in localStorage
// "wp-mypath" ({t,n,l}). search.js and the lesson page button add to it (window.wpPathAdd / ?add=<slug>).
(function () {
  var KEY = 'wp-mypath', $ = function (id) { return document.getElementById(id); };
  var box = $('wpt-path');
  function load() { try { var d = JSON.parse(localStorage.getItem(KEY)); if (d && Array.isArray(d.l)) return d; } catch (e) { /* ignore */ } return { t: '', n: '', l: [] }; }
  function save(d) { try { localStorage.setItem(KEY, JSON.stringify(d)); } catch (e) { /* ignore */ } }
  function okSlug(s) { return /^[a-z0-9][a-z0-9-]*(\/[a-z0-9][a-z0-9-]*)+$/.test(s); }
  function parse(hash) {
    var out = { t: '', n: '', l: [] };
    String(hash || '').replace(/^#/, '').split('&').forEach(function (p) {
      var i = p.indexOf('='); if (i < 0) return;
      var k = p.slice(0, i), v = p.slice(i + 1);
      try { v = decodeURIComponent(v.replace(/\+/g, ' ')); } catch (e) { return; }
      if (k === 't') out.t = v.slice(0, 80); else if (k === 'n') out.n = v.slice(0, 600);
      else if (k === 'l') out.l = v.split(',').filter(okSlug).slice(0, 60);
    });
    return out;
  }
  function hashOf(d) {
    var h = [];
    if (d.t) h.push('t=' + encodeURIComponent(d.t));
    if (d.n) h.push('n=' + encodeURIComponent(d.n));
    h.push('l=' + d.l.join(','));
    return '#' + h.join('&');
  }
  // Used by search.js and the lesson page: add a lesson to the draft (no duplicates).
  window.wpPathAdd = function (slug) {
    if (!okSlug(slug)) return 0;
    var d = load(); if (d.l.indexOf(slug) < 0) d.l.push(slug); save(d);
    try { window.dispatchEvent(new Event('wp-mypath')); } catch (e) { /* ignore */ }
    return d.l.length;
  };
  if (!box) return;
  var root = box.dataset.root, titles = {}, loaded = null;
  function names() {
    if (loaded) return loaded;
    loaded = fetch(root + 'search-index.json').then(function (r) { return r.json(); }).then(function (l) {
      l.forEach(function (e) { if (e.ty === 'lesson') titles[e.u.replace(/\/$/, '')] = e; });
    }).catch(function () { /* titles fall back to the address */ });
    return loaded;
  }
  function item(slug, extra) {
    var e = titles[slug], li = document.createElement('li'), row = document.createElement('div'), a = document.createElement('a');
    row.className = 'wpt-path-row';
    a.href = root + slug + '/'; a.textContent = e ? e.t : slug;
    row.appendChild(a); li.appendChild(row);
    if (e) { var s = document.createElement('span'); s.textContent = [e.s, e.c, e.y].filter(Boolean).join(' › '); li.appendChild(s); }
    if (extra) extra(row);
    return li;
  }
  var view = $('wpt-path-view'), edit = $('wpt-path-edit');
  function btn(label, fn, aria) { var b = document.createElement('button'); b.type = 'button'; b.textContent = label; b.setAttribute('aria-label', aria); b.addEventListener('click', fn); return b; }
  function renderEdit() {
    var d = load(), list = $('wpt-path-list');
    if (document.activeElement !== $('wpt-path-title')) $('wpt-path-title').value = d.t;
    if (document.activeElement !== $('wpt-path-note')) $('wpt-path-note').value = d.n;
    list.replaceChildren();
    d.l.forEach(function (slug, i) {
      list.appendChild(item(slug, function (row) {
        if (i > 0) row.appendChild(btn('Up', function () { d.l.splice(i - 1, 0, d.l.splice(i, 1)[0]); save(d); renderEdit(); }, 'Move up'));
        if (i < d.l.length - 1) row.appendChild(btn('Down', function () { d.l.splice(i + 1, 0, d.l.splice(i, 1)[0]); save(d); renderEdit(); }, 'Move down'));
        row.appendChild(btn('Remove', function () { d.l.splice(i, 1); save(d); renderEdit(); }, 'Remove from path'));
      }));
    });
    $('wpt-path-empty').hidden = d.l.length > 0;
    var link = d.l.length ? location.origin + location.pathname + hashOf(d) : '';
    $('wpt-path-link').value = link; $('wpt-path-copy').disabled = !link;
    $('wpt-path-size').textContent = link ? 'Link length: ' + link.length + ' characters.' + (link.length > 1800 ? ' That is long; some messaging apps may cut it. Use fewer lessons.' : '') : '';
  }
  function renderView(d) {
    $('wpt-path-vtitle').textContent = d.t || 'A path of lessons';
    $('wpt-path-vnote').textContent = d.n; $('wpt-path-vnote').hidden = !d.n;
    var list = $('wpt-path-vlist'); list.replaceChildren();
    d.l.forEach(function (slug) { list.appendChild(item(slug)); });
  }
  function show() {
    var h = parse(location.hash);
    if (h.l.length) { view.hidden = false; edit.hidden = true; renderView(h); names().then(function () { renderView(h); }); document.title = (h.t || 'My path') + ' – Waypoints tutorials'; }
    else { view.hidden = true; edit.hidden = false; renderEdit(); names().then(renderEdit); }
  }
  var m = location.search.match(/[?&]add=([^&]+)/);
  if (m) { window.wpPathAdd(decodeURIComponent(m[1])); history.replaceState(null, '', location.pathname + location.hash); }
  ['wpt-path-title', 'wpt-path-note'].forEach(function (id) {
    $(id).addEventListener('input', function () { var d = load(); d.t = $('wpt-path-title').value; d.n = $('wpt-path-note').value; save(d); renderEdit(); });
  });
  function copy(text, b) {
    var done = function () { var o = b.textContent; b.textContent = 'Copied'; setTimeout(function () { b.textContent = o; }, 1500); };
    if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(text).then(done, function () { $('wpt-path-link').select(); });
    else { $('wpt-path-link').select(); }
  }
  $('wpt-path-copy').addEventListener('click', function () { copy($('wpt-path-link').value, $('wpt-path-copy')); });
  $('wpt-path-clear').addEventListener('click', function () { save({ t: '', n: '', l: [] }); renderEdit(); });
  $('wpt-path-copyview').addEventListener('click', function () { save(parse(location.hash)); history.pushState(null, '', location.pathname); show(); });
  window.addEventListener('wp-mypath', function () { if (!edit.hidden) renderEdit(); });
  window.addEventListener('hashchange', show);
  show();
})();
