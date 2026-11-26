// Writes the App Builder projects (app.json regions) for the Data apps course (content/code/data-apps/).
// Each lesson's projects are built here from small helpers, so a change to one starter carries through the solutions
// that follow it. Run after editing: node experiments/data-apps-projects.mjs  (then npm run check-appbuilder data-apps)
import { writeFileSync } from 'node:fs';

const DIR = new URL('../content/code/data-apps/', import.meta.url);
const clone = (x) => structuredClone(x);

// ---------- helpers ----------
const inst = (id, x, y, w, h, text = '', extra = {}) => ({ id, x, y, w, h, text, visible: true, vars: {}, ...extra });
const o = (name, kind, id, x, y, w, h, text = '', extra = {}) => ({ name, kind, instanceVars: [], instances: [inst(id, x, y, w, h, text, extra)] });
const ev = (id, conds, actions, children = [], extra = {}) => ({ id, else: false, conds, actions, children, ...extra });
const clicked = (target) => ({ type: 'onClicked', target });
const itemClicked = (target) => ({ type: 'onItemClicked', target });
const eachRow = (table) => ({ type: 'forEachRow', table });
const compare = (left, op, right) => ({ type: 'compareValues', left, op, right });
const setText = (target, value) => ({ type: 'setText', target, value });
const setVar = (v, value) => ({ type: 'setVar', var: v, value });
const addTo = (v, value) => ({ type: 'addTo', var: v, value });
const addRow = (table, values) => ({ type: 'tableAdd', table, values });
const removeRow = (table, index) => ({ type: 'tableRemove', table, index });
const clear = (table) => ({ type: 'tableClear', table });
const sort = (table, field, dir) => ({ type: 'tableSort', table, field, dir });
const listAdd = (list, value) => ({ type: 'listAdd', list, value });
const listRemoveAt = (list, index) => ({ type: 'listRemoveAt', list, index });
const table = (name, fields, rows, extra = {}) => ({ name, table: { fields: fields.map(([n, t, to]) => ({ name: n, type: t || 'text', ...(to ? { to } : {}) })) }, value: rows, ...extra });
const SONG = [['title'], ['artist'], ['length', 'number']];
const songs = (rows) => rows.map(([title, artist, length]) => ({ title, artist, length }));
const project = (name, level, variables, objects, events = [], screen = 'Home') =>
  ({ version: 1, name, device: 'web', features: { level }, variables, screens: [{ id: 'home', name: screen, objects, events }] });
const label = (name, id, x, y, text, w = 90) => o(name, 'text', id, x, y, w, 36, text);
const heading = (text, id = 'h1') => o('Title', 'text', id, 24, 16, 500, 40, text);

const FOUR = songs([['Blue Sky', 'Kai', 3], ['Arc', 'Mo', 5], ['Cove', 'Lu', 4], ['Nova', 'Kai', 2]]);
const SIX = songs([['Blue Sky', 'Kai', 3], ['Arc', 'Mo', 5], ['Cove', 'Lu', 4], ['Nova', 'Kai', 2], ['Tidal', 'Rae', 7], ['Lanterns', 'Mo', 3]]);

function write(slug, title, regions) {
  const names = Object.keys(regions);
  const body = [`// Projects for "${title}". Made by experiments/data-apps-projects.mjs: edit that, not this file.`,
    `// One App Builder project per region, as JSON (playground-appbuilder/README.md). Regions: ${names.join(', ')}.`, ''];
  for (const [k, p] of Object.entries(regions)) body.push(`// region: ${k}`, JSON.stringify(p), '// endregion', '');
  writeFileSync(new URL(`${slug}/app.json`, DIR), body.join('\n'));
}

// ---------- 1. Two lists that must agree (level 3) ----------
{
  const objects = [
    heading('My playlist'),
    label('TitleLabel', 'l1', 24, 70, 'Title'), o('TitleInput', 'input', 'i1', 110, 66, 200, 42),
    label('ArtistLabel', 'l2', 330, 70, 'Artist'), o('ArtistInput', 'input', 'i2', 410, 66, 200, 42),
    o('AddButton', 'button', 'b1', 630, 64, 140, 46, 'Add song'),
    o('Hint', 'text', 't1', 24, 124, 600, 30, 'Click a title to remove that song.'),
    o('TitleList', 'list', 'L1', 24, 162, 360, 300, '', { source: 'Titles' }),
    o('ArtistList', 'list', 'L2', 400, 162, 360, 300, '', { source: 'Artists' }),
  ];
  const vars = () => [{ name: 'Titles', value: ['Blue Sky', 'Arc', 'Cove'] }, { name: 'Artists', value: ['Kai', 'Mo', 'Lu'] }];
  const add = ev('e1', [clicked('AddButton')], [listAdd('Titles', 'TitleInput.text'), listAdd('Artists', 'ArtistInput.text')]);
  const remove = ev('e2', [itemClicked('TitleList')], [listRemoveAt('Titles', 'ClickedIndex'), listRemoveAt('Artists', 'ClickedIndex')]);
  const start = project('Two lists', 3, vars(), objects);
  const s2 = project('Two lists', 3, vars(), clone(objects), [clone(add)]);
  const s3 = project('Two lists', 3, vars(), clone(objects), [clone(add), clone(remove)]);
  // Modify: a third list, Lengths
  const withLength = clone(objects);
  withLength.splice(5, 0, label('LengthLabel', 'l3', 24, 116, 'Minutes'), o('LengthInput', 'input', 'i3', 110, 112, 200, 42));
  withLength.find((x) => x.name === 'Hint').instances[0].y = 160;
  for (const n of ['TitleList', 'ArtistList']) { const i = withLength.find((x) => x.name === n).instances[0]; i.y = 200; i.h = 260; i.w = 240; }
  withLength.find((x) => x.name === 'ArtistList').instances[0].x = 280;
  withLength.push(o('LengthList', 'list', 'L3', 536, 200, 240, 260, ''));
  const built = project('Two lists', 3, vars(), withLength, [clone(add), clone(remove)]);
  const three = clone(built);
  three.variables.push({ name: 'Lengths', value: [3, 5, 4] });
  three.screens[0].objects.find((x) => x.name === 'LengthList').instances[0].source = 'Lengths';
  three.screens[0].events[0].actions.push(listAdd('Lengths', 'int(LengthInput.text)'));
  three.screens[0].events[1].actions.push(listRemoveAt('Lengths', 'ClickedIndex'));
  write('two-lists', 'Two lists that must agree', { try: s3, start, 'sol-step-2': s2, 'sol-step-3': s3, built, 'sol-lengths': three });
}

// ---------- shared playlist screen for lessons 2-4 ----------
const inputs = () => [
  heading('My playlist'),
  label('TitleLabel', 'l1', 24, 64, 'Title', 60), o('TitleInput', 'input', 'i1', 84, 60, 170, 42),
  label('ArtistLabel', 'l2', 268, 64, 'Artist', 60), o('ArtistInput', 'input', 'i2', 328, 60, 150, 42),
  label('LengthLabel', 'l3', 492, 64, 'Minutes', 70), o('LengthInput', 'input', 'i3', 566, 60, 70, 42),
  o('AddButton', 'button', 'b1', 650, 58, 130, 46, 'Add song'),
];
const songTable = (y = 120, h = 280, source = 'Songs') => o('SongTable', 'table', 'T1', 24, y, 560, h, '', { source, columns: '' });
const addSong = (id = 'e1') => ev(id, [clicked('AddButton')], [addRow('Songs', { title: 'TitleInput.text', artist: 'ArtistInput.text', length: 'int(LengthInput.text)' })]);

// ---------- 2. One table instead (level 4) ----------
{
  const objs = () => [...inputs(), songTable(), o('Hint', 'text', 't1', 24, 410, 560, 30, 'Click a song to remove it.')];
  const start = project('Playlist table', 4, [], objs().map((x) => (x.name === 'SongTable' ? { ...x, instances: [{ ...x.instances[0], source: '' }] } : x)));
  const tbl = () => table('Songs', SONG, songs([['Blue Sky', 'Kai', 3], ['Arc', 'Mo', 5]]));
  const s2 = clone(start); s2.variables.push(tbl());
  const s3 = project('Playlist table', 4, [tbl()], objs());
  const s4 = project('Playlist table', 4, [tbl()], objs(), [addSong()]);
  const remove = ev('e2', [itemClicked('SongTable')], [removeRow('Songs', 'ClickedIndex')]);
  const s5 = project('Playlist table', 4, [tbl()], objs(), [addSong(), remove]);
  // Modify: a genre field
  const g = clone(s5);
  const o2 = g.screens[0].objects;
  o2.splice(o2.findIndex((x) => x.name === 'AddButton'), 0, label('GenreLabel', 'l4', 24, 108, 'Genre', 60), o('GenreInput', 'input', 'i4', 84, 104, 170, 42));
  o2.find((x) => x.name === 'SongTable').instances[0].y = 160;
  o2.find((x) => x.name === 'Hint').instances[0].y = 450;
  const built = g;
  const genre = clone(built);
  genre.variables[0].table.fields.push({ name: 'genre', type: 'text' });
  for (const r of genre.variables[0].value) r.genre = '';
  genre.screens[0].events[0].actions[0].values.genre = 'GenreInput.text';
  write('one-table', 'One table instead', { try: s5, start, 'sol-step-2': s2, 'sol-step-3': s3, 'sol-step-4': s4, 'sol-step-5': s5, built, 'sol-genre': genre });
}

// ---------- 3. Records and fields (level 4) ----------
{
  const objs = () => [
    ...inputs(), songTable(120, 230),
    o('NowText', 'text', 't1', 24, 360, 560, 32, 'Click a song to play it'),
    o('TotalButton', 'button', 'b2', 600, 130, 180, 46, 'Total length'), o('TotalText', 'text', 't2', 600, 182, 180, 32, ''),
    o('LongestButton', 'button', 'b3', 600, 230, 180, 46, 'Longest song'), o('LongestText', 'text', 't3', 600, 282, 180, 50, ''),
  ];
  const vars = () => [table('Songs', SONG, clone(FOUR)), { name: 'total', value: 0 }, { name: 'longest', value: '' }];
  const now = ev('e2', [itemClicked('SongTable')], [setText('NowText', '"Now playing: " & ClickedItem.title & " by " & ClickedItem.artist')]);
  const total = ev('e3', [clicked('TotalButton')], [setVar('total', '0')], [
    ev('e3a', [eachRow('Songs')], [addTo('total', 'LoopItem.length')]),
    ev('e3b', [], [setText('TotalText', '"Total: " & total & " min"')]),
  ]);
  const longest = ev('e4', [clicked('LongestButton')], [setVar('longest', 'item(Songs, 1)')], [
    ev('e4a', [eachRow('Songs'), compare('LoopItem.length', '>', 'longest.length')], [setVar('longest', 'LoopItem')]),
    ev('e4b', [], [setText('LongestText', '"Longest: " & longest.title')]),
  ]);
  const P = (events, extraVars = [], extraObjs = []) => project('Playlist records', 4, [...vars(), ...extraVars], [...objs(), ...extraObjs], events);
  const start = P([addSong()]);
  const s2 = P([addSong(), now]);
  const s3 = P([addSong(), now, total]);
  const s4 = P([addSong(), now, total, longest]);
  const built = P([addSong(), now, total, longest], [{ name: 'shortest', value: '' }],
    [o('ShortestButton', 'button', 'b4', 600, 340, 180, 46, 'Shortest song'), o('ShortestText', 'text', 't4', 600, 392, 180, 50, '')]);
  const avg = clone(built);
  avg.screens[0].events[2].children[1].actions[0].value = '"Total: " & total & " min, average " & round(total / count(Songs))';
  const shortest = clone(built);
  shortest.screens[0].events.push(ev('e5', [clicked('ShortestButton')], [setVar('shortest', 'item(Songs, 1)')], [
    ev('e5a', [eachRow('Songs'), compare('LoopItem.length', '<', 'shortest.length')], [setVar('shortest', 'LoopItem')]),
    ev('e5b', [], [setText('ShortestText', '"Shortest: " & shortest.title')]),
  ]));
  write('records-and-fields', 'Records and fields', { try: s4, start, 'sol-step-2': s2, 'sol-step-3': s3, 'sol-step-4': s4, built, 'sol-average': avg, 'sol-shortest': shortest });
}

// ---------- 4. Saving between visits (level 4) ----------
{
  const objs = () => [...inputs(), songTable(160, 280), o('WelcomeText', 'text', 't1', 24, 116, 560, 36, '')];
  const tbl = (remember) => table('Songs', SONG, songs([['Blue Sky', 'Kai', 3]]), remember ? { remember: true } : {});
  const welcome = ev('e2', [{ type: 'onStart' }], [], [
    ev('e2a', [compare('count(Songs)', '=', '0')], [setText('WelcomeText', '"Add your first song"')]),
    ev('e2b', [], [setText('WelcomeText', '"Welcome back. Songs saved: " & count(Songs)')], [], { else: true }),
  ]);
  const start = project('Saved playlist', 4, [tbl(false)], objs(), [addSong()]);
  const s2 = project('Saved playlist', 4, [tbl(true)], objs(), [addSong()]);
  const s3 = project('Saved playlist', 4, [tbl(true)], objs(), [addSong(), welcome]);
  const built = clone(s3);
  built.variables.push({ name: 'LastAdded', value: '' });
  const last = clone(built);
  last.variables[1].remember = true;
  last.screens[0].events[0].actions.push(setVar('LastAdded', 'TitleInput.text'));
  last.screens[0].events[1].children[1].actions[0].value = '"Welcome back. Songs saved: " & count(Songs) & ". Last added: " & LastAdded';
  write('saving', 'Saving between visits', { try: s3, start, 'sol-step-2': s2, 'sol-step-3': s3, built, 'sol-last-added': last });
}

// ---------- 5. Search, filter and sort (level 4) ----------
{
  const objs = () => [
    heading('Find a song'),
    o('SearchInput', 'input', 'i1', 24, 64, 260, 42), o('SearchButton', 'button', 'b1', 296, 62, 110, 46, 'Search'),
    o('ShortButton', 'button', 'b2', 418, 62, 160, 46, 'Short songs'),
    o('SortTitleButton', 'button', 'b3', 590, 62, 190, 46, 'Sort by title'),
    o('SortLengthButton', 'button', 'b4', 590, 114, 190, 46, 'Longest first'),
    label('AllLabel', 'l1', 24, 116, 'All songs', 200), o('SongTable', 'table', 'T1', 24, 150, 360, 300, '', { source: 'Songs', columns: '' }),
    label('ResultsLabel', 'l2', 400, 170, 'Found', 180), o('ResultsTable', 'table', 'T2', 400, 204, 380, 246, '', { source: 'Results', columns: '' }),
  ];
  const vars = () => [table('Songs', SONG, clone(SIX)), table('Results', SONG, [])];
  const sorts = [ev('e1', [clicked('SortTitleButton')], [sort('Songs', 'title', 'up')]), ev('e2', [clicked('SortLengthButton')], [sort('Songs', 'length', 'down')])];
  const copyRow = () => addRow('Results', { title: 'LoopItem.title', artist: 'LoopItem.artist', length: 'LoopItem.length' });
  const search = ev('e3', [clicked('SearchButton')], [clear('Results')], [
    ev('e3a', [eachRow('Songs'), compare('contains(lower(LoopItem.title), lower(SearchInput.text))', '=', 'true')], [copyRow()]),
  ]);
  const short = ev('e4', [clicked('ShortButton')], [clear('Results')], [
    ev('e4a', [eachRow('Songs'), compare('LoopItem.length', '≤', '3')], [copyRow()]),
  ]);
  const P = (events, extraObjs = []) => project('Find a song', 4, vars(), [...objs(), ...extraObjs], events);
  const start = P([]);
  const s2 = P(clone(sorts));
  const s3 = P([...clone(sorts), clone(search)]);
  const s4 = P([...clone(sorts), clone(search), clone(short)]);
  const built = P([...clone(sorts), clone(search), clone(short)], [o('AllButton', 'button', 'b5', 400, 114, 178, 46, 'Show all')]);
  const artist = clone(built);
  artist.screens[0].events[2].children[0].conds[1].left = 'contains(lower(LoopItem.title & " " & LoopItem.artist), lower(SearchInput.text))';
  const all = clone(built);
  all.screens[0].events.push(ev('e5', [clicked('AllButton')], [clear('Results')], [ev('e5a', [eachRow('Songs')], [copyRow()])]));
  // optional: a sound field per song, and clicking a song plays it (built-in sounds)
  const sound = clone(built);
  const SOUNDS = ['calm', 'upbeat', 'sleepy', 'beat', 'upbeat', 'calm'];
  sound.variables[0].table.fields.push({ name: 'sound', type: 'text' });
  sound.variables[0].value.forEach((r, i) => { r.sound = SOUNDS[i]; });
  sound.variables[1].table.fields.push({ name: 'sound', type: 'text' });
  sound.screens[0].objects.push(o('Music', 'sound', 's1', 24, 462, 360, 52, '', { sound: 'calm' }));
  for (const e of sound.screens[0].events) for (const c of e.children) for (const a of c.actions) if (a.type === 'tableAdd') a.values.sound = 'LoopItem.sound';
  const play = clone(sound);
  play.screens[0].events.push(ev('e6', [itemClicked('SongTable')], [{ type: 'setSoundNamed', target: 'Music', name: 'ClickedItem.sound' }, { type: 'playSound', target: 'Music' }]));
  write('search-filter-sort', 'Search, filter and sort', { try: s4, start, 'sol-step-2': s2, 'sol-step-3': s3, 'sol-step-4': s4, built, 'sol-artist': artist, 'sol-show-all': all, sound, 'sol-sound': play });
}

// ---------- 6. Challenge: your own data app (level 4) ----------
{
  const empty = project('My data app', 4, [], [o('Title', 'text', 'h1', 24, 16, 500, 40, 'My data app')]);
  // an example answer: a reading log (one table, remembered, add, search with For each)
  const books = table('Books', [['title'], ['author'], ['pages', 'number']], [{ title: 'Holes', author: 'Louis Sachar', pages: 233 }, { title: 'The Hobbit', author: 'J. R. R. Tolkien', pages: 310 }], { remember: true });
  const results = table('Found', [['title'], ['author'], ['pages', 'number']], []);
  const ex = project('Reading log', 4, [books, results], [
    o('Title', 'text', 'h1', 24, 16, 500, 40, 'My reading log'),
    o('TitleInput', 'input', 'i1', 24, 64, 200, 42), o('AuthorInput', 'input', 'i2', 236, 64, 180, 42), o('PagesInput', 'input', 'i3', 428, 64, 80, 42),
    o('AddButton', 'button', 'b1', 520, 62, 130, 46, 'Add book'),
    o('BookTable', 'table', 'T1', 24, 120, 420, 300, '', { source: 'Books', columns: '' }),
    o('LongButton', 'button', 'b2', 460, 120, 200, 46, 'Books over 300 pages'),
    o('FoundTable', 'table', 'T2', 460, 176, 320, 244, '', { source: 'Found', columns: '' }),
  ], [
    ev('e1', [clicked('AddButton')], [addRow('Books', { title: 'TitleInput.text', author: 'AuthorInput.text', pages: 'int(PagesInput.text)' }), sort('Books', 'title', 'up')]),
    ev('e2', [clicked('LongButton')], [clear('Found')], [ev('e2a', [eachRow('Books'), compare('LoopItem.pages', '>', '300')], [addRow('Found', { title: 'LoopItem.title', author: 'LoopItem.author', pages: 'LoopItem.pages' })])]),
  ]);
  write('your-own-data-app', 'Challenge: your own data app', { start: empty, example: ex });
}

// ---------- 7. Two tables that link (level 4, optional) ----------
{
  const lists = () => table('Playlists', [['name']], [{ name: 'Study' }, { name: 'Gym' }, { name: 'Chill' }]);
  const allSongs = () => table('Songs', [['title'], ['artist'], ['playlist', 'link', 'Playlists']], [
    { title: 'Blue Sky', artist: 'Kai', playlist: 'Study' }, { title: 'Arc', artist: 'Mo', playlist: 'Gym' },
    { title: 'Cove', artist: 'Lu', playlist: 'Chill' }, { title: 'Nova', artist: 'Kai', playlist: 'Study' },
    { title: 'Tidal', artist: 'Rae', playlist: 'Gym' }, { title: 'Lanterns', artist: 'Mo', playlist: 'Study' }]);
  const shown = () => table('Shown', [['title'], ['artist'], ['playlist']], []);
  const objs = () => [
    heading('Playlists'),
    o('PlaylistTable', 'table', 'T1', 24, 70, 200, 200, '', { source: 'Playlists', columns: '' }),
    o('Heading', 'text', 't1', 250, 70, 520, 36, 'Click a playlist'),
    o('ShownTable', 'table', 'T2', 250, 112, 520, 260, '', { source: 'Shown', columns: 'title, artist' }),
    o('AllLabel', 'text', 'l1', 24, 290, 200, 30, 'Every song is in Songs.'),
  ];
  const vars = () => [lists(), allSongs(), shown(), { name: 'Chosen', value: '' }];
  const pick = ev('e1', [itemClicked('PlaylistTable')], [setVar('Chosen', 'ClickedItem.name'), clear('Shown')], [
    ev('e1a', [eachRow('Songs'), compare('LoopItem.playlist', '=', 'Chosen')], [addRow('Shown', { title: 'LoopItem.title', artist: 'LoopItem.artist', playlist: 'LoopItem.playlist' })]),
    ev('e1b', [], [setText('Heading', 'Chosen & " (" & count(Shown) & " songs)"')]),
  ]);
  const P = (events, extraObjs = []) => project('Linked playlists', 4, vars(), [...objs(), ...extraObjs], events);
  const start = P([]);
  const s2 = P([(() => { const e = clone(pick); e.children = [e.children[0]]; return e; })()]);
  const s3 = P([clone(pick)]);
  const addObjs = [o('TitleInput', 'input', 'i1', 250, 390, 200, 42), o('ArtistInput', 'input', 'i2', 462, 390, 150, 42), o('AddButton', 'button', 'b1', 624, 388, 146, 46, 'Add to playlist')];
  const built = P([clone(pick)], addObjs);
  const add = clone(built);
  add.screens[0].events.push(ev('e2', [clicked('AddButton')], [addRow('Songs', { title: 'TitleInput.text', artist: 'ArtistInput.text', playlist: 'Chosen' })]));
  write('linked-tables', 'Two tables that link', { try: s3, start, 'sol-step-2': s2, 'sol-step-3': s3, built, 'sol-add': add });
}
console.log('written');

// ---------- 4b. A journal with drawings (level 4; after Saving, before Search) ----------
// Starts from App Builder apps › Draw how you showed it (its done region), so the two courses stay in step.
{
  const { readFileSync } = await import('node:fs');
  const src = readFileSync(new URL('../content/code/apps/draw-journal/app.json', import.meta.url), 'utf8');
  const done = JSON.parse(src.match(/\/\/ region: done\n(.*)\n\/\/ endregion/)[1]);
  const scr = (p, id) => p.screens.find((s) => s.id === id);
  const evById = (p, sid, id) => scr(p, sid).events.find((e) => e.id === id);
  const start = clone(done);
  start.name = 'Values journal (table)';
  start.features = { level: 4 };
  // Build 1: a table Entries (value, note, drawing as a picture field), no rows yet
  const s2 = clone(start);
  s2.variables.push(table('Entries', [['value'], ['note'], ['drawing', 'picture']], []));
  // Build 2: Add also adds a row (the old list and LastDrawing still work)
  const s3 = clone(s2);
  evById(s3, 'describe', 'jd2').actions.splice(2, 0, addRow('Entries', { value: 'Chosen', note: 'NoteInput.text', drawing: 'Drawing.picture' }));
  // Build 3: the Journal shows the table; clicking a row shows its drawing big
  const s4 = clone(s3);
  const jo = scr(s4, 'journal');
  jo.objects = jo.objects.filter((x) => x.name !== 'List');
  jo.objects.splice(2, 0, o('EntriesTable', 'table', 'jt1', 229, 110, 342, 210, '', { source: 'Entries', columns: '' }));
  const jStart = evById(s4, 'journal', 'jj1');
  jStart.actions = [setText('Count', '"Entries: " & count(Entries)')];
  jo.events.push(ev('jj3', [itemClicked('EntriesTable')], [{ type: 'setImageFrom', target: 'LastImage', value: 'ClickedItem.drawing' }]));
  // Build 4 (built): remembered, and the old list and LastDrawing tidied away
  const built = clone(s4);
  built.variables = built.variables.filter((v) => v.name !== 'Journal' && v.name !== 'LastDrawing');
  built.variables.find((v) => v.name === 'Entries').remember = true;
  const add = evById(built, 'describe', 'jd2');
  add.actions = add.actions.filter((a) => a.type !== 'listAdd' && !(a.type === 'setVar' && a.var === 'LastDrawing'));
  // Nib: the drawing field left as text (shown in the find-the-slip question, not a starter)
  write('journal-drawings', 'A journal with drawings', { try: built, start, 'sol-step-2': s2, 'sol-step-3': s3, 'sol-step-4': s4, 'sol-step-5': built, built });
}
