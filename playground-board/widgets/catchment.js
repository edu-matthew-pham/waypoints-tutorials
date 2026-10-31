// A made-up catchment (Kerrin, as in the Geography water-7 lessons): choose the ground cover on the high slope and the
// farm, turn a dam above the town on or off, then send a storm and see what reaches the town and the lake. A simple
// model on purpose: it shows which way things change (bare ground loses more soil; a dam traps soil and holds back
// water), never real amounts. Results are words (none, a little, some, a lot), reported as levels 0 to 3.
//   widget: catchment
//   slope: forest | grass | bare      the high slope's cover at the start (default forest)
//   farm: grazed | bare               the farm's cover at the start (default grazed)
//   dam: off | on                     a dam on the river above the town (default off)
//   controls: slope farm dam          which choices the student sees (default all three; Send a storm and Start
//                                     again are always there). "controls: farm" makes a one-choice lead-in.
//   storm: on                         show one storm's results at the start (for pictures; it reports nothing)
// state: { slope, farm, dam, scope: { vars: { n_storms (storms since the last change of choice), dam_on (1 or 0),
//   slope_bare, farm_bare (1 when bare), soil_lost (soil washed off the land), town_water, town_soil, lake_water,
//   lake_soil (soil settling at the lake entrance), dam_soil (soil settling behind the dam), town_steady (1 when the
//   dam evens out the town's supply), covers_tried (different slope covers sent a storm over) } } }
// Names have an underscore because board checks read a plain run of letters as letters multiplied together.
// Every result is 0 until a storm is sent with the current choices, so no check holds at the start.
// Checks: "n_storms >= 1 and town_soil >= 2", "dam_on = 1 and n_storms >= 1", "soil_lost >= 2 and lake_soil >= 1",
// "covers_tried >= 2".
(function (B) {
  'use strict';
  var NS = 'http://www.w3.org/2000/svg';
  var COVERS = {
    slope: { forest: { label: 'Forest', water: 1, soil: 0 }, grass: { label: 'Grass', water: 2, soil: 1 }, bare: { label: 'Bare soil', water: 3, soil: 3 } },
    farm: { grazed: { label: 'Grazed grass', water: 2, soil: 1 }, bare: { label: 'Ploughed bare', water: 3, soil: 3 } },
  };
  var WORD = ['none', 'a little', 'some', 'a lot'];

  /** The whole model: covers and the dam in, levels 0 to 3 out. Pure, so it can be tested without a page. */
  function model(slope, farm, dam) {
    var w = COVERS.slope[slope].water + COVERS.farm[farm].water, s = COVERS.slope[slope].soil + COVERS.farm[farm].soil;
    var water = w <= 4 ? 2 : 3, soil_lost = s <= 1 ? 1 : s <= 3 ? 2 : 3;
    if (!dam) return { soil_lost: soil_lost, town_water: water, town_soil: soil_lost, lake_water: water, lake_soil: soil_lost, dam_soil: 0, town_steady: 0 };
    var past = soil_lost === 3 ? 1 : 0;   // a dam traps most of the soil; only a very muddy storm sends a little past it
    return { soil_lost: soil_lost, town_water: 2, town_soil: past, lake_water: Math.max(1, water - 1), lake_soil: past, dam_soil: soil_lost, town_steady: 1 };
  }

  var spec = null, st = {}, res = null, tried = {}, storms = 0, anim = 0, ui = {};

  function parse(s) {
    var pick = function (key, def) {
      var v = String(s[key] || def).trim().toLowerCase();
      if (!COVERS[key][v]) throw new Error(key + ': one of ' + Object.keys(COVERS[key]).join(', ') + '.');
      return v;
    };
    s.start = { slope: pick('slope', 'forest'), farm: pick('farm', 'grazed'), dam: /^on$/i.test(String(s.dam || '').trim()) };
    if (s.dam && !/^(on|off)$/i.test(String(s.dam).trim())) throw new Error('dam: on or off.');
    var c = String(s.controls || 'slope farm dam').toLowerCase().split(/[\s,]+/).filter(Boolean);
    c.forEach(function (k) { if (['slope', 'farm', 'dam'].indexOf(k) < 0) throw new Error('controls: any of slope, farm, dam.'); });
    s.show = c;
    s.pre = /^on$/i.test(String(s.storm || '').trim());
  }

  // ---- The picture -------------------------------------------------------------------------------------------
  var font = 'system-ui, sans-serif';
  function mix(a, b, t) {   // two #rrggbb colours
    var p = function (h, i) { return parseInt(h.slice(1 + i * 2, 3 + i * 2), 16); };
    var c = [0, 1, 2].map(function (i) { return Math.round(p(a, i) + (p(b, i) - p(a, i)) * t).toString(16).padStart(2, '0'); });
    return '#' + c.join('');
  }
  var RIVER_UP = 'M100 150 Q150 175 200 182 T250 189', RIVER_DOWN = 'M250 189 Q275 192 300 196 L400 205';

  function draw() {
    var el = B.el('board'); el.replaceChildren(); el.style.position = 'relative';
    var svg = document.createElementNS(NS, 'svg');
    svg.setAttribute('viewBox', '0 0 480 300'); svg.setAttribute('width', '100%'); svg.setAttribute('height', '100%');
    svg.setAttribute('preserveAspectRatio', 'xMidYMid meet'); svg.setAttribute('role', 'img');
    svg.style.position = 'absolute'; svg.style.left = '0'; svg.style.top = '0';
    el.appendChild(svg);
    var add = function (tag, at, text, parent) { var e = document.createElementNS(NS, tag); Object.keys(at).forEach(function (k) { e.setAttribute(k, at[k]); }); if (text !== undefined) e.textContent = text; (parent || svg).appendChild(e); return e; };
    var dark = matchMedia('(prefers-color-scheme: dark)').matches;
    var ink = dark ? '#e6edf3' : '#162c38', sky = dark ? '#1b2a33' : '#f4f8fa', ground = dark ? '#3a4a37' : '#d7e7cb', edge = dark ? '#8fb08f' : '#49634b';
    var blue = '#187aa4', mud = '#9a6a3a', soilc = dark ? '#8a6440' : '#b98b5c', lakec = dark ? '#2f5f75' : '#a9dbef';
    add('rect', { x: 0, y: 0, width: 480, height: 300, fill: sky });
    add('path', { d: 'M0 150 L70 60 L170 130 L300 170 L480 190 L480 300 L0 300Z', fill: ground, stroke: edge, 'stroke-width': 2 });

    // The high slope's patch, coloured by its cover.
    var slope = 'M18 128 L70 62 L132 106 L104 144 L40 150Z', farm = 'M140 112 L172 131 L236 150 L226 168 L150 160Z';
    var cover = function (d, kind) {
      var fill = kind === 'forest' ? (dark ? '#2f6b3a' : '#4f8f4f') : kind === 'bare' ? soilc : kind === 'grass' ? (dark ? '#5f8a4a' : '#a8cf86') : (dark ? '#5f8a4a' : '#b9d99a');
      add('path', { d: d, fill: fill, stroke: edge, 'stroke-width': 1.5 });
    };
    cover(slope, st.slope); cover(farm, st.farm === 'bare' ? 'bare' : 'grazed');
    if (st.slope === 'forest') [[48, 120], [66, 96], [84, 116], [62, 136], [100, 122], [80, 78]].forEach(function (p) { add('circle', { cx: p[0], cy: p[1], r: 9, fill: dark ? '#1f4f2a' : '#2f6b34' }); });
    if (st.slope === 'bare') [[44, 132], [70, 110], [92, 128], [60, 90]].forEach(function (p) { add('circle', { cx: p[0], cy: p[1], r: 2.5, fill: mud }); });
    if (st.farm === 'bare') for (var i = 0; i < 4; i++) add('path', { d: 'M' + (152 + i * 6) + ' ' + (122 + i * 10) + ' l' + (70 - i * 6) + ' ' + (18 - i * 2), stroke: mud, 'stroke-width': 2, fill: 'none' });
    else [[170, 140], [200, 148]].forEach(function (p) { add('path', { d: 'M' + p[0] + ' ' + p[1] + ' l18 0 M' + p[0] + ' ' + (p[1] - 6) + ' l0 10 M' + (p[0] + 18) + ' ' + (p[1] - 6) + ' l0 10', stroke: edge, 'stroke-width': 1.5 }); });
    add('rect', { x: 186, y: 117, width: 20, height: 16, fill: '#ba8d5c' }); add('path', { d: 'M182 117 l14 -11 14 11', fill: '#8c533b' });

    // Gullies where a storm washed soil away.
    if (res && res.soil_lost >= 2) {
      if (st.slope !== 'forest') ['M60 80 l10 40 l-6 20', 'M92 100 l2 30'].forEach(function (d) { add('path', { d: d, stroke: mud, 'stroke-width': res.soil_lost === 3 ? 4 : 2.5, fill: 'none', 'stroke-linecap': 'round' }); });
      if (st.farm === 'bare') add('path', { d: 'M196 140 l4 22', stroke: mud, 'stroke-width': res.soil_lost === 3 ? 4 : 2.5, fill: 'none', 'stroke-linecap': 'round' });
    }

    // The river: thicker with more water, browner with more soil; the stretch below a dam carries what got past.
    var wUp = res ? 6 + 3 * res.town_water : 9, up = res ? mix(blue, mud, res.soil_lost / 3) : blue;
    var down = res ? mix(blue, mud, res.town_soil / 3) : blue, wDown = res ? 6 + 3 * (st.dam ? res.lake_water : res.town_water) : 9;
    if (st.dam) add('ellipse', { cx: 226, cy: 184, rx: 26, ry: 10, fill: lakec, stroke: blue, 'stroke-width': 2 });
    add('path', { d: RIVER_UP, fill: 'none', stroke: up, 'stroke-width': wUp, 'stroke-linecap': 'round' });
    add('path', { d: RIVER_DOWN, fill: 'none', stroke: down, 'stroke-width': wDown, 'stroke-linecap': 'round' });
    add('ellipse', { cx: 430, cy: 210, rx: 45, ry: 24, fill: lakec, stroke: blue, 'stroke-width': 2 });
    add('path', { d: 'M318 186 l14 4 -10 8 M360 192 l14 4 -10 8', fill: blue });
    if (st.dam) {
      if (res && res.dam_soil) add('ellipse', { cx: 236, cy: 188, rx: 4 + 4 * res.dam_soil, ry: 2 + res.dam_soil, fill: mud });
      add('rect', { x: 247, y: 172, width: 8, height: 32, rx: 2, fill: dark ? '#9aa5b4' : '#6b7280' });
    }
    if (res && res.lake_soil) add('path', { d: 'M392 206 q' + (6 + 6 * res.lake_soil) + ' ' + (-4 - 2 * res.lake_soil) + ' ' + (12 + 10 * res.lake_soil) + ' 0 q' + (-6 - 6 * res.lake_soil) + ' ' + (4 + 2 * res.lake_soil) + ' ' + (-12 - 10 * res.lake_soil) + ' 0Z', fill: mud });

    // The town.
    [[296, 164], [316, 160], [336, 166]].forEach(function (p) { add('rect', { x: p[0], y: p[1], width: 16, height: 18, fill: '#856cb0' }); });

    // Rain, after a storm.
    if (res) [[40, 30], [70, 26], [100, 34], [150, 60], [180, 56], [210, 64]].forEach(function (p) { add('path', { d: 'M' + p[0] + ' ' + p[1] + ' l-6 16', stroke: blue, 'stroke-width': 3, 'stroke-linecap': 'round' }); });

    // Labels.
    var g = add('g', { fill: ink, 'font-family': font, 'font-size': 18, 'font-weight': 600 });
    add('text', { x: 6, y: 20 }, 'High slope', g); add('text', { x: 160, y: 98 }, 'Farm', g);
    add('text', { x: 298, y: 150 }, 'Town', g); add('text', { x: 412, y: 254 }, 'Lake', g);
    if (st.dam) add('text', { x: 232, y: 228 }, 'Dam', g);
    add('text', { x: 6, y: 292, 'font-size': 14, 'font-weight': 400, fill: ink }, 'Made up and simple: which way things change, not amounts.');

    svg.setAttribute('aria-label', 'Made-up Kerrin catchment. High slope: ' + COVERS.slope[st.slope].label.toLowerCase() + '. Farm: ' + COVERS.farm[st.farm].label.toLowerCase() + '. ' + (st.dam ? 'A dam on the river above the town. ' : 'No dam. ') + (res ? summary() : 'No storm yet.'));
    return svg;
  }

  // Soil specks travelling down the river after a storm (skipped for pictures and reduced motion).
  function flow(svg) {
    if (B.id === 'picture' || matchMedia('(prefers-reduced-motion: reduce)').matches || !res || !res.soil_lost) return;
    var paths = [RIVER_UP, RIVER_DOWN].map(function (d) { var p = document.createElementNS(NS, 'path'); p.setAttribute('d', d); p.setAttribute('fill', 'none'); svg.appendChild(p); return p; });
    var L0 = paths[0].getTotalLength(), L1 = paths[1].getTotalLength(), stopAt = st.dam ? L0 : L0 + L1;
    var n = 2 + 3 * res.soil_lost, dots = [];
    for (var i = 0; i < n; i++) { var c = document.createElementNS(NS, 'circle'); c.setAttribute('r', 3.5); c.setAttribute('fill', '#7a4d24'); svg.appendChild(c); dots.push(c); }
    var t0 = performance.now(), me = ++anim, dur = 1800;
    (function step(now) {
      if (me !== anim) return;
      var t = (now - t0) / dur;
      dots.forEach(function (c, i) {
        var d = Math.min(stopAt, (t - i * 0.06) * (L0 + L1));
        if (d < 0) { c.setAttribute('opacity', 0); return; }
        var pt = d <= L0 ? paths[0].getPointAtLength(d) : paths[1].getPointAtLength(d - L0);
        c.setAttribute('cx', pt.x); c.setAttribute('cy', pt.y); c.setAttribute('opacity', 1);
      });
      if (t < 1 + n * 0.06) requestAnimationFrame(step); else dots.forEach(function (c) { c.remove(); });
    })(t0);
  }

  // ---- Words ---------------------------------------------------------------------------------------------------
  function summary() {
    var r = res, parts = ['Soil washed off the land: ' + WORD[r.soil_lost] + '.'];
    if (st.dam) parts.push('Behind the dam: ' + WORD[r.dam_soil] + ' soil settles, and the dam holds back some water.');
    parts.push('At the town: ' + (st.dam ? 'a steady supply of water' : WORD[r.town_water] + ' water') + ', ' + (r.town_soil ? WORD[r.town_soil] + ' soil in it.' : 'with almost no soil in it.'));
    parts.push('At the lake: ' + WORD[r.lake_water] + ' water arrives; ' + (r.lake_soil ? WORD[r.lake_soil] + ' soil settles where the river slows at the entrance.' : 'almost no soil settles at the entrance.'));
    return parts.join(' ');
  }
  function lines() {
    var r = res;
    if (!r) return [];
    var out = [['Soil washed off the land', WORD[r.soil_lost]]];
    if (st.dam) out.push(['Soil settling behind the dam', WORD[r.dam_soil]]);
    out.push(['Water reaching the town', st.dam ? 'steady' : WORD[r.town_water]], ['Soil in the river at the town', WORD[r.town_soil]],
      ['Water reaching the lake', WORD[r.lake_water]], ['Soil settling at the lake entrance', WORD[r.lake_soil]]);
    return out;
  }

  // ---- The panel -----------------------------------------------------------------------------------------------
  function choiceRow(name, label, opts) {
    var row = document.createElement('div'); row.className = 'wpt-cbar'; row.setAttribute('role', 'group'); row.setAttribute('aria-label', label);
    var lab = document.createElement('span'); lab.className = 'wpt-clab'; lab.textContent = label; row.appendChild(lab);
    opts.forEach(function (o) {
      var b = document.createElement('button'); b.type = 'button'; b.textContent = o[1];
      b.setAttribute('aria-pressed', String(String(st[name]) === String(o[0])));
      b.addEventListener('click', function () {
        if (String(st[name]) === String(o[0])) return;
        st[name] = o[0]; res = null; storms = 0; anim++; B.moved = true;
        row.querySelectorAll('button').forEach(function (x) { x.setAttribute('aria-pressed', String(x === b)); });
        report('Choices changed. Send a storm to see what happens.');
      });
      row.appendChild(b);
    });
    return row;
  }
  function paintPanel() {
    var panel = B.el('gpanel'); panel.replaceChildren(); ui = {};
    if (spec.show.indexOf('slope') >= 0) panel.appendChild(choiceRow('slope', 'High slope', Object.keys(COVERS.slope).map(function (k) { return [k, COVERS.slope[k].label]; })));
    if (spec.show.indexOf('farm') >= 0) panel.appendChild(choiceRow('farm', 'Farm', Object.keys(COVERS.farm).map(function (k) { return [k, COVERS.farm[k].label]; })));
    if (spec.show.indexOf('dam') >= 0) panel.appendChild(choiceRow('dam', 'Dam above the town', [[false, 'No dam'], [true, 'Dam']]));
    var bar = document.createElement('div'); bar.className = 'wpt-cbar';
    var go = document.createElement('button'); go.type = 'button'; go.className = 'go'; go.textContent = 'Send a storm';
    go.addEventListener('click', function () {
      res = model(st.slope, st.farm, st.dam); storms++; tried[st.slope] = 1; B.moved = true;
      report(null, true);
    });
    var again = document.createElement('button'); again.type = 'button'; again.className = 'quiet'; again.textContent = 'Start again';
    again.addEventListener('click', function () { tried = {}; B.restart(); });
    bar.append(go, again); panel.appendChild(bar);
    ui.out = document.createElement('dl'); ui.out.className = 'wpt-cres'; ui.out.setAttribute('aria-live', 'polite'); panel.appendChild(ui.out);
  }
  function report(msg, animate) {
    var svg = draw();
    if (animate) flow(svg);
    ui.out.replaceChildren();
    lines().forEach(function (l) { var dt = document.createElement('dt'); dt.textContent = l[0]; var dd = document.createElement('dd'); dd.textContent = l[1]; ui.out.append(dt, dd); });
    var text = msg || (res ? summary() : 'Choose the ground cover, then send a storm.');
    B.say(msg || (res ? 'Storm sent. The list above says what reached the town and the lake.' : text));
    var r = res && storms ? res : { soil_lost: 0, town_water: 0, town_soil: 0, lake_water: 0, lake_soil: 0, dam_soil: 0, town_steady: 0 };
    var vars = Object.assign({ n_storms: storms, dam_on: st.dam ? 1 : 0, slope_bare: st.slope === 'bare' ? 1 : 0, farm_bare: st.farm === 'bare' ? 1 : 0, covers_tried: Object.keys(tried).length }, r);
    B.save({ st: st, tried: tried });
    B.post({ slope: st.slope, farm: st.farm, dam: st.dam, scope: { vars: vars, points: {} } }, text);
  }

  var widget = {
    sections: ['board', 'gpanel'],
    label: function () { return 'A made-up catchment: choose ground cover and a dam, then send a storm'; },
    parse: parse,
    redraw: function () { if (spec) draw(); },
    resize: function () {},
    start: function (fresh) {
      spec = B.spec; var sv = fresh ? null : B.saved();
      st = Object.assign({}, spec.start, sv && sv.st ? sv.st : {});
      tried = sv && sv.tried ? sv.tried : {}; storms = 0; anim++;
      res = spec.pre ? model(st.slope, st.farm, st.dam) : null;
      paintPanel(); report();
    },
    model: model,
  };
  B.widget('catchment', widget);
})(WPB);
