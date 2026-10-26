// How coding ideas build (roadmap/code.md › How coding ideas build): bands, what each core idea needs first,
// the hinge ideas, plain words for teachers who don't code, and a tiny example per tool. Pure data and helpers;
// tools/ideas-page.mjs draws the page, tools/check-concepts.mjs checks this file.
import { CORE_IDEAS } from './concepts-core.mjs';

/** Bands in reading order. A band is a reading group, not a timetable: the arrows (needs) are what is fixed. */
export const BANDS = [
  { id: 'steps', title: 'Steps in order', intro: 'Where every pathway starts: the computer follows instructions exactly, in order.' },
  { id: 'remember', title: 'Remembering things', intro: 'Variables let a program keep a value and change it as it runs.' },
  { id: 'repeat', title: 'Repeating', intro: 'Loops save writing the same steps again, and the counter lets each time round be different.' },
  { id: 'decide', title: 'Deciding', intro: 'A yes-or-no question lets the program choose what to do.' },
  { id: 'until', title: 'Repeating until something changes', intro: 'A loop that keeps going while a question is yes: repeating and deciding together.' },
  { id: 'events', title: 'Reacting to events', intro: 'Code that waits for a press, a click or a message. Early in MakeCode, later in Python and Web.' },
  { id: 'lists', title: 'Lists', intro: 'Keeping many values under one name, then working through them.' },
  { id: 'blocks', title: 'Building blocks', intro: 'Naming a set of steps so it can be reused, given values and hand back answers.' },
  { id: 'toolkit', title: 'Toolkit: use when a task needs it', toolkit: true, intro: 'Handy techniques that nothing else builds on. Bring them in whenever a task needs them.' },
];

// MakeCode examples are block shapes, one per line: "category: text", indented two spaces per level inside the
// block above. Categories use MakeCode's own toolbox colours (BLOCK_COLOURS).
export const BLOCK_COLOURS = { basic: '#1E90FF', input: '#D400D4', loops: '#00AA00', logic: '#00A4A6', variables: '#DC143C',
  math: '#9400D3', functions: '#3455DB', arrays: '#E65722', text: '#B8860B',
  radio: '#E3008C', sprites: '#4B7BEC', controller: '#D54322', game: '#8854D0', info: '#CF6A87' };

/** Per idea: band, needs (ids that must come first), hinge, plain words, an optional note, and examples by tool
 *  (makecode: block lines; python and javascript: code; html: code, used when a pathway's example is HTML).
 *  `first: true` takes each pathway's first lesson; `fallback` is the idea whose lesson stands in when a
 *  pathway has no tag for this one. */
export const IDEAS = {
  sequence: { band: 'steps', needs: [], first: true,
    plain: 'The computer does each step in the order you write it, one at a time, like following a recipe.',
    makecode: ['basic: show icon ♥', 'basic: pause 500 ms', 'basic: show string "Hi"'],
    python: 'forward(100)\nleft(90)\nforward(100)',
    html: '<h1>My page</h1>\n<p>First paragraph</p>\n<p>Second paragraph</p>' },
  variable: { band: 'remember', needs: ['sequence'],
    plain: 'A named box that holds a value, such as a score, so the program can use it later.',
    makecode: ['variables: set score to 0'], python: 'score = 0', javascript: 'let score = 0;' },
  'variable-update': { band: 'remember', needs: ['variable'], hinge: true,
    plain: 'Working out a new value from the old one, such as adding 1 to the score. The box changes as the program runs.',
    note: 'Students who read = as "equals, for ever" get stuck here.',
    makecode: ['variables: change score by 1'], python: 'score = score + 1', javascript: 'score = score + 1;' },
  'text-join': { band: 'remember', needs: ['variable'],
    plain: 'Sticking text and values together to make a message, like "Score: 5".',
    makecode: ['basic: show string (join "Score: " score)'], python: 'print("Score: " + str(score))', javascript: '"Score: " + score' },
  input: { band: 'remember', needs: ['variable'],
    plain: 'Asking the person using the program for something, and keeping their answer in a variable.',
    python: 'name = input("Your name? ")', javascript: 'const name = box.value;' },
  repeat: { band: 'repeat', needs: ['sequence'],
    plain: 'Doing the same steps a set number of times, without writing them out again.',
    makecode: ['loops: repeat 4 times', '  basic: show icon ♥', '  basic: clear screen'],
    python: 'for i in range(4):\n    forward(100)\n    left(90)', javascript: 'for (let i = 0; i < 4; i++) {\n  …\n}' },
  'loop-index': { band: 'repeat', needs: ['repeat', 'variable-update'], hinge: true,
    plain: 'A variable that counts which time round the loop it is, like lap 3 of 5, so each time round can be a bit different.',
    note: 'Students often expect it to start at 1. It starts at 0.',
    makecode: ['loops: for index from 0 to 4', '  basic: show number index'],
    python: 'for i in range(5):\n    forward(i * 20)', javascript: 'for (let i = 0; i < 5; i++) {\n  circle(i * 40, 50, 30);\n}' },
  compare: { band: 'decide', needs: ['variable'], hinge: true, fallback: 'if',
    plain: 'A question with a yes-or-no answer, such as "is the score more than 10?". Every decision is built on one.',
    note: 'Most mistakes are in the question itself, often at the edge: does "more than 10" include 10? (It doesn\u2019t.)',
    makecode: ['logic: score > 10'], python: 'score > 10', javascript: 'score > 10' },
  if: { band: 'decide', needs: ['compare'],
    plain: 'Run some steps only when the answer to a question is yes.',
    makecode: ['logic: if score > 10 then', '  basic: show icon ☺'], python: 'if score > 10:\n    print("You win!")',
    javascript: 'if (score > 10) {\n  message = "You win!";\n}' },
  else: { band: 'decide', needs: ['if'],
    plain: 'What to do instead when the answer is no.',
    makecode: ['logic: if score > 10 then', '  basic: show icon ☺', 'logic: else', '  basic: show icon ☹'],
    python: 'if score > 10:\n    print("You win!")\nelse:\n    print("Keep going")',
    javascript: 'if (score > 10) {\n  message = "You win!";\n} else {\n  message = "Keep going";\n}' },
  'and-or': { band: 'decide', needs: ['if'],
    plain: 'Joining two questions: both must be yes (and), or either one can be (or).',
    makecode: ['logic: if (score > 10) and (lives > 0) then'], python: 'if score > 10 and lives > 0:',
    javascript: 'if (score > 10 && lives > 0) {' },
  'bool-value': { band: 'decide', needs: ['compare', 'variable'],
    plain: 'Keeping a yes-or-no answer in a variable, such as whether the game is over.',
    makecode: ['variables: set gameOver to false'], python: 'game_over = False', javascript: 'let gameOver = false;' },
  while: { band: 'until', needs: ['repeat', 'compare'],
    plain: 'Keep repeating as long as the answer to a question is yes: for when you don’t know how many times.',
    makecode: ['loops: while lives > 0', '  basic: show icon ♥'], python: 'while lives > 0:\n    play_round()',
    javascript: 'while (lives > 0) {\n  playRound();\n}' },
  callback: { band: 'events', needs: ['sequence'],
    plain: 'Steps that wait, then run when something happens, such as a button press or a click.',
    makecode: ['input: on button A pressed', '  variables: change score by 1'], python: 'onscreenclick(jump)',
    javascript: 'button.addEventListener("click", jump);' },
  list: { band: 'lists', needs: ['variable'],
    plain: 'One name for a whole set of values, kept in order, like a class roll.',
    makecode: ['arrays: set pets to array of "cat" "dog"'], python: 'pets = ["cat", "dog", "fish"]',
    javascript: 'const pets = ["cat", "dog", "fish"];' },
  'list-index': { band: 'lists', needs: ['list'],
    plain: 'Getting one item by its place in the list. The first place is 0, not 1.',
    makecode: ['arrays: pets get value at 0'], python: 'pets[0]', javascript: 'pets[0]' },
  'for-of': { band: 'lists', needs: ['list', 'repeat'],
    plain: 'Doing the same steps once for each item in a list, however long it is.',
    makecode: ['loops: for element pet of pets', '  basic: show string pet'], python: 'for pet in pets:\n    print(pet)',
    javascript: 'for (const pet of pets) {\n  console.log(pet);\n}' },
  function: { band: 'blocks', needs: ['sequence'],
    plain: 'Giving a set of steps a name, so you can use them again with one line.',
    note: 'Can come early: a named chunk such as square() needs nothing but steps in order.',
    makecode: ['functions: function drawSmile', '  basic: show icon ☺', 'functions: call drawSmile'],
    python: 'def square():\n    for i in range(4):\n        forward(50)\n        left(90)', javascript: 'function drawSmile() {\n  …\n}\ndrawSmile();' },
  param: { band: 'blocks', needs: ['function', 'variable'],
    plain: 'A value you hand to a function so it does the job a little differently each time, like a square of size 50.',
    makecode: ['functions: function showScore (points)', 'functions: call showScore 5'],
    python: 'def square(size):\n    ...\nsquare(50)', javascript: 'function square(size) { … }\nsquare(50);' },
  'return-value': { band: 'blocks', needs: ['function'],
    plain: 'A function working something out and handing the answer back, like a calculator button.',
    makecode: ['functions: function double (n)', '  functions: return n × 2'], python: 'def double(n):\n    return n * 2',
    javascript: 'function double(n) {\n  return n * 2;\n}' },
  random: { band: 'toolkit', needs: [],
    plain: 'A different number each time the program runs, for dice, games and surprises.',
    makecode: ['math: pick random 1 to 6'], python: 'randint(1, 6)', javascript: 'Math.random()' },
  remainder: { band: 'toolkit', needs: [],
    plain: 'What’s left over after dividing. Handy for doing something every second (or third) time.',
    makecode: ['math: remainder of count ÷ 2'], python: 'if i % 2 == 0:', javascript: 'if (i % 2 === 0) {' },
};

/** What each pathway adds (Part 2 of the ideas page): a few ideas of its own, which are often what a non-specialist
 *  finds hardest because they aren't general coding. Each names the shared ideas it builds on (`builds`, ids in IDEAS),
 *  plain words, a tiny example, and the lesson that first teaches it (`lesson`, a slug). `pathway` is the id in
 *  content/code/index.md that this section's pointer sits on (micro:bit and Arcade are both MakeCode). */
export const PATHWAY_IDEAS = [
  { id: 'web', pathway: 'web', title: 'Web', intro: 'Making pages: what each part is, how it looks, and how code can change it.', ideas: [
    { id: 'structure-style', label: 'What it is, and how it looks', builds: ['sequence'], lesson: 'code/html/selectors',
      plain: 'HTML says what each part of a page is (a heading, a list, a link). CSS says how it looks. You can change the whole look without touching the content.',
      code: { lang: 'html', text: '<h1>My club</h1>\n\nh1 { color: teal; }' } },
    { id: 'box-tree', label: 'Boxes inside boxes', builds: ['structure-style'], lesson: 'code/html/html-nesting',
      plain: 'Every part of a page is a box, and boxes sit inside other boxes, like folders inside folders. Laying out a page means arranging those boxes.',
      code: { lang: 'html', text: '<section>\n  <h2>News</h2>\n  <p>…</p>\n</section>' } },
    { id: 'fit-screens', label: 'One page, every screen', builds: ['box-tree'], lesson: 'code/css/flex-wrap',
      plain: 'The same page rearranges its boxes to fit a phone or a big screen, instead of making a page for each.',
      code: { lang: 'css', text: '.cards { display: flex;\n         flex-wrap: wrap; }' } },
    { id: 'change-page', label: 'Code can change the page', builds: ['box-tree', 'callback'], lesson: 'code/dom/dom-change',
      plain: 'JavaScript can find a part of the page and change it after the page has loaded, for example when someone clicks a button.',
      code: { lang: 'javascript', text: 'document.querySelector("h1")\n  .textContent = "Welcome back!";' } },
  ] },
  { id: 'microbit', pathway: 'makecode', title: 'MakeCode: micro:bit', intro: 'A small computer you can hold: it runs all the time, senses the world and talks to other micro:bits.', ideas: [
    { id: 'runs-forever', label: 'A program that never stops', builds: ['repeat'], lesson: 'code/microbit/microbit-forever',
      plain: 'A micro:bit program usually runs in a "forever" loop, checking and reacting again and again until it is switched off, instead of running once and finishing.',
      blocks: ['basic: forever', '  basic: show icon ♥', '  basic: show icon ♡'] },
    { id: 'sensors', label: 'Reading the real world', builds: ['variable', 'compare'], lesson: 'code/microbit/microbit-sensors',
      plain: 'Light, tilt and temperature arrive as numbers, so the program can store them, compare them and decide what to do.',
      blocks: ['basic: forever', '  logic: if light level < 50 then', '    basic: show icon ☾'] },
    { id: 'radio', label: 'Devices talking to each other', builds: ['callback'], lesson: 'code/microbit-play/microbit-radio',
      plain: 'One micro:bit sends a number or a word by radio, and every micro:bit in the same group can receive it and react.',
      blocks: ['radio: radio send number 1', 'radio: on radio received number', '  basic: show number'] },
  ] },
  { id: 'arcade', pathway: 'makecode', title: 'MakeCode: Arcade', intro: 'Making games: everything moves a little, many times a second.', ideas: [
    { id: 'sprites', label: 'Sprites', builds: ['variable'], lesson: 'code/arcade/arcade-sprites',
      plain: 'Each character or object in a game is a sprite: a small picture with a position and a speed that the game keeps track of.',
      blocks: ['sprites: set hero to sprite of kind Player', 'controller: move hero with buttons'] },
    { id: 'overlaps', label: 'When two sprites touch', builds: ['sprites', 'callback'], lesson: 'code/arcade/arcade-overlaps',
      plain: 'When two sprites overlap, an event runs: a coin is collected, a life is lost. The kind of each sprite decides which event.',
      blocks: ['sprites: on Player overlaps Food', '  info: change score by 1'] },
    { id: 'game-loop', label: 'Every frame', builds: ['repeat', 'if'], lesson: 'code/arcade/arcade-if',
      plain: 'Many times a second the game moves everything a little, checks what has happened and redraws the screen. Code can run on every one of those frames.',
      blocks: ['game: on game update', '  logic: if hero x > 150 then', '    game: game over'] },
  ] },
  { id: 'python', pathway: 'python', title: 'Python', intro: 'From drawing to text programs and data: what Python adds once students leave the turtle.', ideas: [
    { id: 'conversation', label: 'A program that talks', builds: ['input', 'text-join'], lesson: 'code/console/console-print',
      plain: 'Printing text out and reading what someone types in, so a program can hold a conversation instead of drawing a picture.',
      code: { lang: 'python', text: 'name = input("Your name? ")\nprint("Hi " + name)' } },
    { id: 'text-not-number', label: 'Text that looks like a number', builds: ['input', 'variable'], lesson: 'code/console/console-numbers', hinge: true,
      plain: 'Whatever someone types arrives as text, even "12". It has to be turned into a number before you can do sums with it.',
      note: 'Students are often surprised that "12" + "1" gives "121".',
      code: { lang: 'python', text: 'age = int(input("Age? "))\nprint(age + 1)' } },
    { id: 'data-lasts', label: 'Data that lasts', builds: ['list'], lesson: 'code/deeper/deeper-save',
      plain: 'Saving to a file so the data is still there after the program closes, like a game that remembers your progress.',
      code: { lang: 'python', text: 'with open("save.txt", "w") as f:\n    f.write(str(score))' } },
  ] },
];
export const pathwayIdea = (id) => PATHWAY_IDEAS.flatMap((g) => g.ideas.map((x) => ({ ...x, group: g }))).find((x) => x.id === id);

/** The example a pathway shows: MakeCode blocks, else Python, else JavaScript (HTML when that's all an idea has). */
export const TOOL_OF = { python: 'python', web: 'javascript', makecode: 'makecode' };
export function exampleFor(id, pathwayId) {
  const x = IDEAS[id] || {}, tool = TOOL_OF[pathwayId];
  if (!tool) return null;
  if (tool === 'makecode') return x.makecode ? { kind: 'blocks', lines: x.makecode } : null;
  if (tool === 'javascript' && !x.javascript && x.html) return { kind: 'code', lang: 'html', code: x.html };
  return x[tool] ? { kind: 'code', lang: tool, code: x[tool] } : null;
}

/** Ideas that list `id` as a need. */
export const unlocks = (id) => Object.keys(IDEAS).filter((k) => IDEAS[k].needs.includes(id));

/** Every need of `id`, all the way back (not including `id`). */
export function ancestors(id, seen = new Set()) {
  for (const n of IDEAS[id]?.needs || []) if (!seen.has(n)) { seen.add(n); ancestors(n, seen); }
  return seen;
}

/** Problems with the data, as strings: unknown ids, CORE_IDEAS out of step, needs that loop or point forward. */
export function checkIdeas() {
  const out = [], core = CORE_IDEAS.map((c) => c.id), bandIds = BANDS.map((b) => b.id);
  for (const id of core) if (!IDEAS[id]) out.push(`${id}: in CORE_IDEAS but not in IDEAS`);
  for (const id of Object.keys(IDEAS)) if (!core.includes(id)) out.push(`${id}: in IDEAS but not in CORE_IDEAS`);
  let lastBand = 0;
  for (const id of core) {
    const x = IDEAS[id]; if (!x) continue;
    const b = bandIds.indexOf(x.band);
    if (b < 0) out.push(`${id}: unknown band ${x.band}`);
    if (b < lastBand) out.push(`${id}: CORE_IDEAS is not in band order`);
    lastBand = Math.max(lastBand, b);
    if (!x.plain) out.push(`${id}: no plain words`);
    for (const n of x.needs) {
      if (!IDEAS[n]) out.push(`${id}: needs unknown idea ${n}`);
      else if (core.indexOf(n) > core.indexOf(id)) out.push(`${id}: needs ${n}, which comes later in CORE_IDEAS`);
    }
    if (ancestors(id).has(id)) out.push(`${id}: its needs loop back to itself`);
    if (BANDS[b]?.toolkit && x.needs.length) out.push(`${id}: toolkit ideas need nothing`);
    for (const line of x.makecode || []) { const m = line.trim().match(/^(\w+):/); if (!m || !BLOCK_COLOURS[m[1]]) out.push(`${id}: block line "${line}" has no known category`); }
  }
  const seen = new Set(Object.keys(IDEAS));
  for (const g of PATHWAY_IDEAS) for (const x of g.ideas) {
    if (seen.has(x.id)) out.push(`${x.id}: pathway idea id used twice`);
    for (const b of x.builds) if (!seen.has(b) && !g.ideas.some((y) => y.id === b)) out.push(`${x.id}: builds on unknown idea ${b}`);
    seen.add(x.id);
    if (!x.plain || !x.lesson) out.push(`${x.id}: needs plain words and a lesson`);
    for (const line of x.blocks || []) { const m = line.trim().match(/^(\w+):/); if (!m || !BLOCK_COLOURS[m[1]]) out.push(`${x.id}: block line "${line}" has no known category`); }
  }
  return out;
}
