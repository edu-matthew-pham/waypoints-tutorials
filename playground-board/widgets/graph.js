// Graph: axes with sliders, plotted relations, points (fixed, dragged, or following the sliders), lines and a table.
//   widget: graph
//   x: -1, 10              x range (default -10, 10)
//   y: -1, 20              y range (default -10, 10)
//   grid: 1                grid spacing (default 1; "off" for none)
//   snap: 1                dragged points land on multiples of this (default the grid spacing, or 1)
//   slider m: 0, 5, 2      a named value: min, max, start, step (default step 1); names are single letters
//   plot: y = mx + c       a relation y = (an expression in x and the sliders); up to 4
//   point A: 2, 5          a fixed point; coordinates may use sliders (point B: 0, c)
//   point P: 1, 3, drag    a point students drag (it snaps)
//   segment: A, B          a segment between two points;   line: A, B   the whole line through them
//   table: 0, 1, 2, 3      a table of values of each plot at these x values
//   step: 1                the "1 right, m up" triangle on the first plot, from this x (shows how steep it is)
// state: { scope: { vars: { m, c }, points: { A: [x, y] } } }   (checks are conditions on the scope)
(function (B) {
  'use strict';
  var spec = null, vars = {}, startAt = {}, objs = {}, dragged = {}, sliders = [], plots = [];
  var fmt = B.fmt;
  var show = function (n) { return fmt(n).replace(/^-/, '−'); };   // for display: a real minus sign
  var COLOURS = ['--left', '--right', '--accent', '--ok'];
  var nums = function (v, n, what) {
    var a = String(v).split(',').map(function (t) { return t.trim(); });
    if (a.length < n) throw new Error(what + ' needs ' + n + ' numbers separated by commas.');
    return a;
  };
  var num = function (t, what) { var v = WPM.evaluate(t, {}); if (!isFinite(v)) throw new Error(what + ': "' + t + '" is not a number.'); return v; };
  // A step for axis labels: about 8 labels across the range, at 1, 2 or 5 × a power of 10.
  var nice = function (span) { var r = span / 8, p = Math.pow(10, Math.floor(Math.log10(r))), m = r / p; return (m < 1.5 ? 1 : m < 3.5 ? 2 : m < 7.5 ? 5 : 10) * p; };

  // y = 2x + -3  ->  y = 2x − 3; 1x -> x; 0x terms dropped. For showing a relation with the slider values in it.
  function withValues(expr) {
    var s = expr.replace(/\s+/g, ' ').trim();
    // Every letter is a name (2mx is 2 × m × x), so each slider's letter is replaced wherever it appears.
    s = s.replace(/[A-Za-z]/g, function (n) { if (!(n in vars)) return n; var v = vars[n]; return v < 0 ? '(-' + fmt(-v) + ')' : fmt(v); });
    s = s.replace(/\*/g, '').replace(/(\d)\s+(?=[a-z(])/g, '$1');
    s = s.replace(/^\(-([\d.]+)\)/, '-$1').replace(/\+\s*\(-([\d.]+)\)/g, '- $1').replace(/-\s*\(-([\d.]+)\)/g, '+ $1');
    s = s.replace(/(^|[^\d.])1(?=[a-z(])/g, '$1');
    s = s.replace(/(^|[+-]\s*)0[a-z](\^\d+)?\s*/g, '$1').replace(/^\s*[+]\s*/, '').replace(/[+-]\s*0(?![\d.])\s*/g, '').trim();
    s = s.replace(/^-\s*/, '−').replace(/\s*-\s*/g, ' − ').replace(/\s*\+\s*/g, ' + ').replace(/^\s*$/, '0');
    return s;
  }

  function parse(s) {
    var g = s.grid === undefined ? 1 : s.grid;
    s.gridStep = /^off$/i.test(g) ? 0 : num(g, 'grid');
    s.snapStep = s.snap !== undefined ? num(s.snap, 'snap') : (s.gridStep || 1);
    s.xr = nums(s.x || '-10, 10', 2, 'x').map(function (t) { return num(t, 'x'); });
    s.yr = nums(s.y || '-10, 10', 2, 'y').map(function (t) { return num(t, 'y'); });
    if (!(s.xr[0] < s.xr[1]) || !(s.yr[0] < s.yr[1])) throw new Error('x: and y: need the smaller number first.');
    s.sliders = []; s.plots = []; s.points = []; s.lines = []; s.table = null; s.step = null;
    var known = {};
    s.items.forEach(function (it) {
      var where = 'Line ' + it.line + ' (' + it.kind + (it.name ? ' ' + it.name : '') + ')';
      if (it.kind === 'slider') {
        if (!/^[a-z]$/.test(it.name || '')) throw new Error(where + ': a slider needs a one-letter lower-case name, such as "slider m: 0, 5, 2".');
        if (it.name === 'x' || it.name === 'y') throw new Error(where + ': x and y are the axes; name the slider something else.');
        var a = nums(it.value, 3, where).map(function (t) { return num(t, where); });
        if (!(a[0] < a[1]) || a[2] < a[0] || a[2] > a[1]) throw new Error(where + ': needs min, max, start with min < max and start between them.');
        s.sliders.push({ name: it.name, min: a[0], max: a[1], start: a[2], step: a[3] || 1 });
        known[it.name] = 1;
      } else if (it.kind === 'plot') {
        var m = /^\s*y\s*=\s*(.+)$/.exec(it.value);
        if (!m) throw new Error(where + ': write the relation as "y = …", such as "plot: y = 2x + 1".');
        s.plots.push({ name: it.name, text: it.value.trim(), rhs: m[1], tree: WPM.compile(m[1]) });
      } else if (it.kind === 'point') {
        if (!/^[A-Z]$/.test(it.name || '')) throw new Error(where + ': a point needs a one-letter capital name, such as "point A: 2, 5".');
        var p = nums(it.value, 2, where), drag = /^drag$/i.test(p[2] || '');
        if (p[2] && !drag) throw new Error(where + ': the third part can only be "drag".');
        s.points.push({ name: it.name, x: p[0], y: p[1], drag: drag, fx: WPM.compile(p[0]), fy: WPM.compile(p[1]) });
      } else if (it.kind === 'segment' || it.kind === 'line') {
        var e = it.value.split(',').map(function (t) { return t.trim(); });
        if (e.length !== 2) throw new Error(where + ': name two points, such as "' + it.kind + ': A, B".');
        s.lines.push({ kind: it.kind, ends: e, where: where });
      } else if (it.kind === 'step') {
        s.step = num(it.value, where);
      } else if (it.kind === 'table') {
        s.table = it.value.split(',').map(function (t) { return num(t.trim(), where); });
      }
    });
    if (s.plots.length > 4) throw new Error('A graph shows at most 4 plots.');
    var names = s.points.map(function (p) { return p.name; });
    s.lines.forEach(function (l) { l.ends.forEach(function (n) { if (names.indexOf(n) < 0) throw new Error(l.where + ': there is no point ' + n + '.'); }); });
    // Every name used in a plot or point must be x or a slider (dragged points take numbers only).
    var check = function (text, allowed, where) {
      WPM.vars(text).forEach(function (v) { if (allowed.indexOf(v) < 0 && !known[v]) throw new Error(where + ': "' + v + '" is not a slider' + (allowed.length ? ' or x' : '') + '.'); });
    };
    s.plots.forEach(function (p) { check(p.rhs, ['x'], 'plot ' + p.text); });
    s.points.forEach(function (p) {
      if (p.drag) { num(p.x, 'point ' + p.name); num(p.y, 'point ' + p.name); } else { check(p.x, [], 'point ' + p.name); check(p.y, [], 'point ' + p.name); }
    });
    if (s.table && !s.plots.length) throw new Error('A table needs a plot to take its values from.');
    if (s.step !== null && !s.plots.length) throw new Error('A step needs a plot to draw on.');
  }

  function scope() {
    var p = {};
    Object.keys(objs).forEach(function (n) { p[n] = dragged[n] ? landing(objs[n]) : [round(objs[n].X()), round(objs[n].Y())]; });
    return { vars: Object.assign({}, vars), points: p };
  }
  var round = function (v) { return Math.round(v * 1e6) / 1e6; };

  function build() {
    var ink = B.css('--ink') || '#1d2430', muted = B.css('--muted') || '#5d6675', line = B.css('--line') || '#e4e1da';
    var xr = spec.xr, yr = spec.yr;
    var board = B.jsx({ boundingbox: [xr[0], yr[1], xr[1], yr[0]] });
    if (spec.gridStep) board.create('grid', [], { majorStep: [spec.gridStep, spec.gridStep], minorElements: 0, strokeColor: line, strokeOpacity: 1, highlight: false });
    var axis = function (p1, p2, span, name) {
      return board.create('axis', [p1, p2], {
        name: name, withLabel: true, strokeColor: muted, highlight: false, lastArrow: { size: 6 }, fixed: true,
        label: { position: name === 'x' ? 'rt' : 'urt', offset: name === 'x' ? [-14, 14] : [10, -8], cssClass: 'axisname', highlightCssClass: 'axisname', strokeColor: ink },
        ticks: { ticksDistance: spec.gridStep ? Math.max(nice(span), spec.gridStep) : nice(span), insertTicks: false, minorTicks: 0, majorHeight: 8, strokeColor: muted, drawZero: false, label: { cssClass: 'ticklabel', highlightCssClass: 'ticklabel', strokeColor: muted } },
      });
    };
    axis([0, 0], [1, 0], xr[1] - xr[0], 'x');
    axis([0, 0], [0, 1], yr[1] - yr[0], 'y');
    var scopeVars = function (x) { var v = Object.assign({}, vars); if (x !== undefined) v.x = x; return v; };
    plots = spec.plots.map(function (p, i) {
      var colour = B.css(COLOURS[i]) || '#2f6fb3';
      p.colour = colour;
      return board.create('functiongraph', [function (x) { try { return p.tree(scopeVars(x)); } catch (e) { return NaN; } }, xr[0], xr[1]], { strokeColor: colour, strokeWidth: 3, highlight: false, fixed: true });
    });
    objs = {}; dragged = {};
    spec.points.forEach(function (p) {
      var coords = p.drag ? (startAt[p.name] || [num(p.x), num(p.y)]) : [function () { return p.fx(scopeVars()); }, function () { return p.fy(scopeVars()); }];
      var colour = p.drag ? (B.css('--accent') || '#c2570a') : ink;
      objs[p.name] = board.create('point', coords, {
        name: p.name, size: p.drag ? 6 : 4, fillColor: colour, strokeColor: colour, highlightFillColor: colour, highlightStrokeColor: colour,
        fixed: !p.drag, showInfobox: false,
        label: { cssClass: 'ptlabel', highlightCssClass: 'ptlabel', strokeColor: ink, offset: [8, 10] },
      });
      if (p.drag) {
        dragged[p.name] = true;
        objs[p.name].on('drag', function () { B.moved = true; report(); });
        // Land where the pointer was let go (plus where on the point it was grabbed), so a quick flick does not
        // leave the point at its last drawn position, a square short.
        var grab = null, P = objs[p.name];
        P.on('down', function (e) { try { var u = board.getUsrCoordsOfMouse(e); grab = [P.X() - u[0], P.Y() - u[1]]; } catch (er) { grab = null; } });
        P.on('up', function (e) {
          try { if (grab) { var u = board.getUsrCoordsOfMouse(e); P.moveTo([u[0] + grab[0], u[1] + grab[1]]); } } catch (er) { /* keep the drawn position */ }
          grab = null; settle(P); report();
        });
      }
    });
    spec.lines.forEach(function (l) {
      board.create(l.kind, [objs[l.ends[0]], objs[l.ends[1]]], { strokeColor: muted, strokeWidth: 2, highlight: false, fixed: true, dash: l.kind === 'line' ? 0 : 0 });
    });
    // The step triangle: 1 to the right along the bottom, then up (or down) by however much y changes.
    if (spec.step !== null) {
      var f = function (x) { try { return spec.plots[0].tree(scopeVars(x)); } catch (e) { return NaN; } };
      var x0 = spec.step, acc = B.css('--accent') || '#c2570a';
      var hid = { visible: false, withLabel: false, fixed: true };
      var A = board.create('point', [x0, function () { return f(x0); }], hid);
      var Bp = board.create('point', [x0 + 1, function () { return f(x0); }], hid);
      var C = board.create('point', [x0 + 1, function () { return f(x0 + 1); }], hid);
      var seg = { strokeColor: acc, strokeWidth: 2.5, dash: 2, highlight: false, fixed: true };
      board.create('segment', [A, Bp], seg);
      board.create('segment', [Bp, C], seg);
      var lab = { cssClass: 'steplabel', highlightCssClass: 'steplabel', strokeColor: acc, highlightStrokeColor: acc, fixed: true, anchorX: 'middle' };
      board.create('text', [x0 + 0.5, function () { return f(x0); }, '1'], Object.assign({}, lab, { anchorY: 'top' }));
      board.create('text', [x0 + 1 + (spec.xr[1] - spec.xr[0]) * 0.015, function () { return (f(x0) + f(x0 + 1)) / 2; }, function () { var d = f(x0 + 1) - f(x0); return Math.abs(d) < 1e-9 ? '' : (d > 0 ? 'up ' : 'down ') + show(Math.abs(d)); }],
        Object.assign({}, lab, { anchorX: 'left', anchorY: 'middle' }));
    }
    board.update();
  }
  // A dragged point lands on the nearest multiple of snap, inside the axes. (Done here, not with JSXGraph's
  // snapToGrid, which can land a square away from the pointer when dragging upwards.)
  // While dragging, the point follows the pointer and reports where it will land; on release it moves there.
  function landing(P) {
    var st = spec.snapStep, near = function (v) { return round(Math.round(v / st) * st); };
    return [Math.max(spec.xr[0], Math.min(spec.xr[1], near(P.X()))), Math.max(spec.yr[0], Math.min(spec.yr[1], near(P.Y())))];
  }
  function settle(P) { var at = landing(P); if (at[0] !== P.X() || at[1] !== P.Y()) P.moveTo(at); }

  function paintPanel() {
    var panel = B.el('gpanel'); panel.replaceChildren();
    sliders = spec.sliders.map(function (sl) {
      var row = document.createElement('div'); row.className = 'srow';
      var lab = document.createElement('label'); lab.className = 'vname'; lab.textContent = sl.name; lab.htmlFor = 'sl-' + sl.name;
      var minus = document.createElement('button'); minus.type = 'button'; minus.textContent = '−'; minus.setAttribute('aria-label', 'Make ' + sl.name + ' smaller');
      var r = document.createElement('input'); r.type = 'range'; r.id = 'sl-' + sl.name; r.min = sl.min; r.max = sl.max; r.step = sl.step; r.value = vars[sl.name];
      var plus = document.createElement('button'); plus.type = 'button'; plus.textContent = '+'; plus.setAttribute('aria-label', 'Make ' + sl.name + ' bigger');
      var out = document.createElement('output'); out.htmlFor = r.id;
      var set = function (v) {
        v = Math.max(sl.min, Math.min(sl.max, Math.round(v / sl.step) * sl.step));
        vars[sl.name] = round(v); r.value = v; B.moved = true; B.jsxBoard.update(); report();
      };
      r.addEventListener('input', function () { set(Number(r.value)); });
      minus.addEventListener('click', function () { set(vars[sl.name] - sl.step); });
      plus.addEventListener('click', function () { set(vars[sl.name] + sl.step); });
      row.append(lab, minus, r, plus, out); panel.appendChild(row);
      return { sl: sl, out: out };
    });
    if (spec.plots.length) { var lg = document.createElement('ul'); lg.id = 'legend'; panel.appendChild(lg); }
    if (spec.table) { var tb = document.createElement('table'); tb.id = 'gtable'; panel.appendChild(tb); }
    if (spec.sliders.length || spec.points.some(function (p) { return p.drag; })) {
      var bar = document.createElement('div'); bar.className = 'gbar';
      var again = document.createElement('button'); again.type = 'button'; again.textContent = 'Start again';
      again.addEventListener('click', B.restart); bar.appendChild(again); panel.appendChild(bar);
    }
  }

  function report() {
    sliders.forEach(function (s) { s.out.textContent = s.sl.name + ' = ' + show(vars[s.sl.name]); });
    var lg = B.el('legend');
    if (lg) {
      lg.replaceChildren();
      spec.plots.forEach(function (p) {
        var li = document.createElement('li'); li.style.setProperty('--c', p.colour);
        li.textContent = 'y = ' + withValues(p.rhs);
        if (spec.sliders.length && withValues(p.rhs) !== p.rhs.replace(/\s+/g, ' ').trim()) { var gen = document.createElement('span'); gen.textContent = p.text; li.appendChild(gen); }
        lg.appendChild(li);
      });
    }
    var tb = B.el('gtable');
    if (tb) {
      var row = function (head, cells, th) {
        var tr = document.createElement('tr'), h = document.createElement('th'); h.textContent = head; tr.appendChild(h);
        cells.forEach(function (c) { var d = document.createElement(th ? 'th' : 'td'); d.textContent = c; tr.appendChild(d); }); return tr;
      };
      tb.replaceChildren(row('x', spec.table.map(show), true));
      spec.plots.forEach(function (p, i) {
        tb.appendChild(row(spec.plots.length > 1 ? 'y (' + (i + 1) + ')' : 'y', spec.table.map(function (x) { try { return show(p.tree(Object.assign({}, vars, { x: x }))); } catch (e) { return '—'; } })));
      });
    }
    var sc = scope(), parts = [];
    spec.sliders.forEach(function (s) { parts.push(s.name + ' = ' + show(vars[s.name])); });
    spec.points.forEach(function (p) { var c = sc.points[p.name]; parts.push(p.name + ' (' + show(c[0]) + ', ' + show(c[1]) + ')'); });
    var dragged = spec.points.filter(function (p) { return p.drag; }).map(function (p) { return p.name + ' is at (' + show(sc.points[p.name][0]) + ', ' + show(sc.points[p.name][1]) + ')'; });
    B.say(dragged.join('. ') + (dragged.length ? '.' : ''));
    B.save({ vars: vars, points: sc.points });
    B.post({ scope: sc }, parts.join('; '));
  }

  B.widget('graph', {
    sections: ['board', 'gpanel'],
    label: function (s) { return 'A graph' + (s.plots.length ? ' of ' + s.plots.map(function (p) { return p.text; }).join(' and ') : ''); },
    parse: parse,
    start: function (fresh) {
      spec = B.spec;
      var s = fresh ? null : B.saved();
      vars = {}; startAt = (s && s.points) || {};
      spec.sliders.forEach(function (sl) { vars[sl.name] = s && s.vars && s.vars[sl.name] !== undefined ? s.vars[sl.name] : sl.start; });
      paintPanel();
      build();
      report();
    },
    redraw: function () { startAt = scope().points; build(); report(); },
    resize: function () { var b = B.jsxBoard; b.resizeContainer(B.el('board').clientWidth, B.el('board').clientHeight); b.setBoundingBox([spec.xr[0], spec.yr[1], spec.xr[1], spec.yr[0]], false); },
  });
})(WPB);
