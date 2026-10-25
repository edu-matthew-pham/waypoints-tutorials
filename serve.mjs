import { createServer } from 'node:http';
import { readFile, stat } from 'node:fs/promises';
import { join, extname, normalize } from 'node:path';
const root = process.argv[2];
const types = { '.html': 'text/html', '.js': 'text/javascript', '.css': 'text/css', '.json': 'application/json', '.svg': 'image/svg+xml', '.png': 'image/png', '.wasm': 'application/wasm', '.woff2': 'font/woff2', '.woff': 'font/woff', '.manifest': 'text/cache-manifest', '.hex': 'text/plain' };
const routes = { '/': 'index.html', '/--docs': 'docs.html', '/--run': 'run.html', '/--embed': 'embed.js' };
createServer(async (req, res) => {
  let p = decodeURIComponent(new URL(req.url, 'http://x').pathname);
  p = routes[p] || p;
  const file = join(root, normalize(p).replace(/^(\.\.[/\\])+/, ''));
  try {
    const s = await stat(file);
    const f = s.isDirectory() ? join(file, 'index.html') : file;
    res.writeHead(200, { 'content-type': types[extname(f)] || 'application/octet-stream', 'access-control-allow-origin': '*' });
    res.end(await readFile(f));
  } catch { console.log('404', req.url); res.writeHead(404); res.end(); }
}).listen(8300, () => console.log('serving', root));
