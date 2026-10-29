// Courses and lessons that moved (29 Oct 2026: science chemistry split by year, as ACARA does).
// One list, used three ways:
//   - build-site writes a small forwarding page at each old address (and its teacher guide), plus a 404 page that
//     forwards anything else under an old course (recap, practice, reference, cheat sheets).
//   - render.mjs and render-pictures.mjs look for a moved lesson's clips and pictures at its old address on the live
//     site, so moving a lesson re-records nothing.
// Add a line here whenever a course or lesson folder is renamed or moved. Old addresses stay forwarded for good.

const CHEM_9 = ['inside-atom', 'isotopes', 'decay', 'half-life', 'decay-chains', 'word-equations', 'rearranging-atoms', 'balancing', 'conservation-of-mass'];
const CHEM_10 = ['shells', 'groups', 'trends', 'predict-from-table', 'reaction-types', 'collision-theory'];

// Whole courses: old course path -> new course path (every lesson keeps its folder name).
export const MOVED_COURSES = {
  'science/chemistry': 'science/chemistry-7',
};

// Courses split in two or more: old course path -> where its course page goes, plus each lesson's new home.
export const SPLIT_COURSES = {
  'science/chemistry-9-10': {
    to: 'science/chemistry-9',
    lessons: Object.fromEntries([...CHEM_9.map((l) => [l, 'science/chemistry-9']), ...CHEM_10.map((l) => [l, 'science/chemistry-10'])]),
  },
};

// Every moved lesson: old slug -> new slug.
export function movedLessons(lessonSlugs) {
  const out = {};
  for (const [from, to] of Object.entries(MOVED_COURSES))
    for (const s of lessonSlugs) if (s.startsWith(`${to}/`)) out[`${from}/${s.slice(to.length + 1)}`] = s;
  for (const [from, { lessons }] of Object.entries(SPLIT_COURSES))
    for (const [l, to] of Object.entries(lessons)) out[`${from}/${l}`] = `${to}/${l}`;
  return out;
}

// Where a lesson used to live, if it moved (for reusing its live clips and pictures).
export function oldSlug(slug) {
  for (const [from, to] of Object.entries(MOVED_COURSES)) if (slug.startsWith(`${to}/`)) return `${from}/${slug.slice(to.length + 1)}`;
  for (const [from, { lessons }] of Object.entries(SPLIT_COURSES)) {
    const l = slug.split('/').pop();
    if (lessons[l] && slug === `${lessons[l]}/${l}`) return `${from}/${l}`;
  }
  return null;
}

// A picture or clip id "<slug>/<key>": the same id at the lesson's old address, or null.
export function oldId(id) {
  const parts = id.split('/');
  for (let n = parts.length - 1; n >= 2; n--) {
    const o = oldSlug(parts.slice(0, n).join('/'));
    if (o) return [o, ...parts.slice(n)].join('/');
  }
  return null;
}

// Prefix rules [from, to] (paths ending in /), most specific first: lessons, then courses, each also under teach/.
export function forwardRules(lessonSlugs) {
  const rules = [];
  for (const [o, n] of Object.entries(movedLessons(lessonSlugs))) rules.push([`${o}/`, `${n}/`]);
  for (const [from, { to }] of Object.entries(SPLIT_COURSES)) rules.push([`${from}/`, `${to}/`]);
  for (const [from, to] of Object.entries(MOVED_COURSES)) rules.push([`${from}/`, `${to}/`]);
  return [...rules, ...rules.map(([a, b]) => [`teach/${a}`, `teach/${b}`])].sort((a, b) => b[0].length - a[0].length);
}

// A tiny page that forwards to `to` (a path from the site root), keeping any ?query and #hash.
export function forwardPage(to) {
  const href = `/${to}`;
  return `<!doctype html><html lang="en"><head><meta charset="utf-8"><title>Moved</title><meta name="robots" content="noindex"><link rel="canonical" href="${href}"><meta http-equiv="refresh" content="0; url=${href}"><script>location.replace(${JSON.stringify(href)} + location.search + location.hash)</script></head><body><p>This page has moved: <a href="${href}">${href}</a></p></body></html>\n`;
}

// The site's 404 page: forwards anything under an old address, else says the page was not found.
export function notFoundPage(rules) {
  return `<!doctype html><html lang="en"><head><meta charset="utf-8"><title>Page not found</title><meta name="robots" content="noindex"><meta name="viewport" content="width=device-width, initial-scale=1"><script>(function(){var p=location.pathname.replace(/^\\//,'');if(!/\\/$/.test(p)&&!/\\.[a-z0-9]+$/i.test(p))p+='/';var r=${JSON.stringify(rules)};for(var i=0;i<r.length;i++)if(p.indexOf(r[i][0])===0){location.replace('/'+r[i][1]+p.slice(r[i][0].length)+location.search+location.hash);return;}})()</script><style>body{font:16px/1.5 system-ui,sans-serif;max-width:40em;margin:4em auto;padding:0 16px;color:#1f2328;background:#fff}@media (prefers-color-scheme:dark){body{color:#e6e6e6;background:#16181c}a{color:#7cc4b4}}</style></head><body><h1>Page not found</h1><p>This page doesn't exist, or it has moved. <a href="/">Go to the tutorials home page</a> and search for the lesson.</p></body></html>\n`;
}

// Forward any old address (path without the leading slash, ending in /) to its new one, or null.
// Used by the 404 page (as source text) and by the build.
export function forward(path) {
  for (const [from, { to, lessons }] of Object.entries(SPLIT_COURSES)) {
    for (const pre of [`${from}/`, `teach/${from}/`]) {
      if (!path.startsWith(pre)) continue;
      const rest = path.slice(pre.length), l = rest.split('/')[0];
      const base = pre.startsWith('teach/') ? 'teach/' : '';
      return lessons[l] ? `${base}${lessons[l]}/${rest}` : `${base}${to}/${rest}`;
    }
  }
  for (const [from, to] of Object.entries(MOVED_COURSES))
    for (const pre of [`${from}/`, `teach/${from}/`]) if (path.startsWith(pre)) return `${pre.startsWith('teach/') ? 'teach/' : ''}${to}/${path.slice(pre.length)}`;
  return null;
}
