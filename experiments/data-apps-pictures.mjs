// Draws the screen sketches (app.svg) for the Data apps course, in the same plain style as code/apps.
// node experiments/data-apps-pictures.mjs
import { writeFileSync } from 'node:fs';

const DIR = new URL('../content/code/data-apps/', import.meta.url);
const F = 'font-family="system-ui,-apple-system,Segoe UI,sans-serif"';
const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/"/g, '&quot;');
const text = (x, y, s, { size = 14, weight = 400, anchor = 'start', fill = '#1f2933' } = {}) =>
  `<text x="${x}" y="${y}" ${F} font-size="${size}" font-weight="${weight}" text-anchor="${anchor}" fill="${fill}">${esc(s)}</text>`;
const box = (x, y, w, h, s = '') => `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="4" fill="#fff" stroke="#7a8794" stroke-width="1.5"/>${s ? text(x + 8, y + h / 2 + 5, s, { fill: '#6b7785' }) : ''}`;
const button = (x, y, w, h, s) => `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="6" fill="#e8eef5" stroke="#7a8794" stroke-width="1.5"/>${text(x + w / 2, y + h / 2 + 5, s, { anchor: 'middle' })}`;
// a table: cols = [[header, width]], rows = [[cells]]
function grid(x, y, cols, rows, rowH = 24) {
  const w = cols.reduce((a, [, cw]) => a + cw, 0);
  let out = `<rect x="${x}" y="${y}" width="${w}" height="${rowH * (rows.length + 1)}" rx="6" fill="#fff" stroke="#9aa3ad" stroke-width="1.5"/>`;
  out += `<rect x="${x + 1}" y="${y + 1}" width="${w - 2}" height="${rowH - 1}" rx="5" fill="#f0f3f7"/>`;
  let cx = x;
  for (const [h, cw] of cols) { out += text(cx + 8, y + rowH - 8, h, { size: 13, weight: 700 }); cx += cw; }
  rows.forEach((r, i) => {
    const ry = y + rowH * (i + 1);
    out += `<line x1="${x}" y1="${ry}" x2="${x + w}" y2="${ry}" stroke="#e2e6eb"/>`;
    let c = x;
    r.forEach((cell, j) => { out += text(c + 8, ry + rowH - 8, cell, { size: 13 }); c += cols[j][1]; });
  });
  return out;
}
function list(x, y, w, items, rowH = 24) {
  let out = `<rect x="${x}" y="${y}" width="${w}" height="${rowH * items.length + 8}" rx="6" fill="#fff" stroke="#9aa3ad" stroke-width="1.5"/>`;
  items.forEach((it, i) => { out += text(x + 10, y + 4 + rowH * (i + 1) - 8, it, { size: 13 }); if (i) out += `<line x1="${x}" y1="${y + 4 + rowH * i}" x2="${x + w}" y2="${y + 4 + rowH * i}" stroke="#e2e6eb"/>`; });
  return out;
}
const svg = (title, w, h, body) => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${w} ${h}" width="${w}" height="${h}" role="img"><title>${esc(title)}</title><rect width="${w}" height="${h}" fill="#f3f5f7"/><rect x="16" y="16" width="${w - 32}" height="${h - 32}" rx="14" fill="#ffffff" stroke="#9aa3ad" stroke-width="2"/>${body}</svg>\n`;
const save = (slug, s) => writeFileSync(new URL(`${slug}/app.svg`, DIR), s);
const SONGS = [['Blue Sky', 'Kai', '3'], ['Arc', 'Mo', '5'], ['Cove', 'Lu', '4'], ['Nova', 'Kai', '2']];
const inputs = (y) => box(36, y, 110, 30, 'Title') + box(156, y, 100, 30, 'Artist') + box(266, y, 56, 30, 'Min') + button(332, y - 2, 100, 34, 'Add song');

save('two-lists', svg('Two lists: titles and artists side by side', 480, 280,
  text(36, 56, 'My playlist', { size: 22, weight: 700 }) + box(36, 74, 140, 30, 'Title') + box(186, 74, 140, 30, 'Artist') + button(336, 72, 108, 34, 'Add song') +
  text(36, 132, 'Titles', { size: 13, weight: 700 }) + list(36, 140, 190, ['Blue Sky', 'Arc', 'Cove']) +
  text(246, 132, 'Artists', { size: 13, weight: 700 }) + list(246, 140, 190, ['Kai', 'Mo', 'Lu']) +
  text(240, 248, 'Item 2 of Titles goes with item 2 of Artists', { size: 13, anchor: 'middle', fill: '#6b7785' })));

save('one-table', svg('A playlist table: one row per song', 480, 280,
  text(36, 56, 'My playlist', { size: 22, weight: 700 }) + inputs(72) +
  grid(36, 120, [['title', 170], ['artist', 150], ['length', 88]], SONGS.slice(0, 3)) +
  text(36, 238, 'One row per song, one column per field', { size: 13, fill: '#6b7785' })));

save('records-and-fields', svg('Playlist with Now playing, total and longest', 480, 280,
  text(36, 56, 'My playlist', { size: 22, weight: 700 }) +
  grid(36, 72, [['title', 110], ['artist', 80], ['length', 70]], SONGS) +
  text(36, 222, 'Now playing: Cove by Lu', { size: 15 }) +
  button(316, 72, 130, 32, 'Total length') + text(316, 126, 'Total: 14 min', { size: 14 }) +
  button(316, 144, 130, 32, 'Longest song') + text(316, 198, 'Longest: Arc', { size: 14 })));

save('saving', svg('The playlist welcomes the user back', 480, 280,
  text(36, 56, 'My playlist', { size: 22, weight: 700 }) + inputs(72) +
  text(36, 134, 'Welcome back. Songs saved: 3', { size: 16, weight: 600 }) +
  grid(36, 148, [['title', 170], ['artist', 150], ['length', 88]], SONGS.slice(0, 3))));

save('search-filter-sort', svg('Find a song: all songs and the songs found', 520, 300,
  text(36, 54, 'Find a song', { size: 22, weight: 700 }) + box(36, 68, 120, 30, 'an') + button(164, 66, 80, 34, 'Search') +
  button(252, 66, 104, 34, 'Short songs') + button(364, 66, 120, 34, 'Sort by title') +
  text(36, 126, 'All songs', { size: 13, weight: 700 }) +
  grid(36, 134, [['title', 92], ['artist', 60], ['length', 62]], [['Arc', 'Mo', '5'], ['Blue Sky', 'Kai', '3'], ['Cove', 'Lu', '4'], ['Lanterns', 'Mo', '3'], ['Nova', 'Kai', '2']]) +
  text(270, 126, 'Found', { size: 13, weight: 700 }) +
  grid(270, 134, [['title', 92], ['artist', 60], ['length', 62]], [['Lanterns', 'Mo', '3']])));

save('linked-tables', svg('Two linked tables: playlists and their songs', 520, 280,
  text(36, 54, 'Playlists', { size: 22, weight: 700 }) +
  grid(36, 72, [['name', 110]], [['Study'], ['Gym'], ['Chill']]) +
  text(176, 96, '→', { size: 22, fill: '#6b7785' }) +
  text(210, 62, 'Study (3 songs)', { size: 16, weight: 600 }) +
  grid(210, 72, [['title', 100], ['artist', 70], ['playlist', 104]], [['Blue Sky', 'Kai', 'Study'], ['Nova', 'Kai', 'Study'], ['Lanterns', 'Mo', 'Study']]) +
  text(36, 232, 'Each song names its playlist: that shared value links the tables.', { size: 13, fill: '#6b7785' })));
console.log('pictures written');
