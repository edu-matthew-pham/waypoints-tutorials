import { CanvasTurtle, StopError } from './canvas-turtle.js';
import { mountSnippets } from './snippets.js';
import { createRunner, friendlyError } from './skulpt-bridge.js';

// URL parameters (set by the lesson page):
//   ?code=<starter code>   ?id=<key for autosaving this student's edits>
const params = new URLSearchParams(location.search);
const starter = params.get('code') ?? 'from turtle import *\n\nforward(100)\n';
const storeKey = params.get('id') ? `wp-playground:${params.get('id')}` : null;

const $ = (id) => document.getElementById(id);
const codeEl = $('code'), statusEl = $('status'), outEl = $('output'), stateEl = $('turtle-state');
const runBtn = $('run'), stopBtn = $('stop'), finishBtn = $('finish'), resetBtn = $('reset');
const speedEl = $('speed');

const read = () => { try { return storeKey ? localStorage.getItem(storeKey) : null; } catch { return null; } };
const write = (v) => { try { if (storeKey) (v === null ? localStorage.removeItem(storeKey) : localStorage.setItem(storeKey, v)); } catch { /* storage unavailable */ } };

codeEl.value = read() ?? starter;

// A small, stable surface for tests and tooling (defined before the renderer, which emits on creation).
window.__playground = { status: 'idle', output: '', error: null, turtle: null };

const turtle = new CanvasTurtle($('canvas'), {
  extent: Number(params.get('extent')) || undefined,
  onUpdate: (s) => { stateEl.textContent = `x ${s.x} · y ${s.y} · heading ${s.heading}°`; window.__playground.turtle = s; },
});
const run = createRunner({ turtle, onOutput: (t) => { outEl.append(document.createTextNode(t)); window.__playground.output += t; } });

function setStatus(state, text) {
  statusEl.dataset.state = state;
  statusEl.textContent = text;
  window.__playground.status = state;
}
function setRunning(on) {
  runBtn.disabled = on; stopBtn.disabled = !on; finishBtn.disabled = !on; resetBtn.disabled = on;
  speedEl.disabled = false;
}

if (params.get('speed')) { speedEl.value = params.get('speed'); $('speed-value').textContent = speedEl.value; }

speedEl.addEventListener('input', () => { $('speed-value').textContent = speedEl.value; turtle.speed = Number(speedEl.value); });
turtle.speed = Number(speedEl.value);

codeEl.addEventListener('input', () => write(codeEl.value));
codeEl.addEventListener('keydown', (e) => {
  if (e.key === 'Tab') { // keep focus in the editor; indent with spaces
    e.preventDefault();
    const { selectionStart: s, selectionEnd: en } = codeEl;
    codeEl.setRangeText('    ', s, en, 'end');
    write(codeEl.value);
  }
});

runBtn.addEventListener('click', async () => {
  outEl.textContent = '';
  turtle.resetAll();
  turtle.speed = Number(speedEl.value);
  turtle.beginRun();
  Object.assign(window.__playground, { output: '', error: null });
  setRunning(true); setStatus('running', 'Running…');
  try {
    await run(codeEl.value);
    setStatus('done', 'Finished');
  } catch (err) {
    if (err instanceof StopError || /Stopped/.test(String(err))) {
      setStatus('stopped', 'Stopped');
    } else {
      const msg = friendlyError(err);
      window.__playground.error = msg;
      const span = document.createElement('span'); span.className = 'err'; span.textContent = msg;
      outEl.append(span);
      setStatus('error', 'Error: ' + String(err).split('\n')[0]);
    }
  } finally {
    turtle.draw(); turtle.emit();
    setRunning(false);
  }
});

stopBtn.addEventListener('click', () => turtle.stop());
finishBtn.addEventListener('click', () => turtle.finish());
resetBtn.addEventListener('click', () => {
  codeEl.value = starter; write(null);
  outEl.textContent = ''; turtle.resetAll();
  setStatus('idle', 'Ready');
  window.__playground.output = ''; window.__playground.error = null;
});

mountSnippets({ toolbar: document.querySelector('.bar'), textarea: codeEl, before: document.querySelector('.speed') });
