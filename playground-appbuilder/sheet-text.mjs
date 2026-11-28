// Built from edu-matthew-pham/waypoints-tools app-builder/src/core/sheet-text.js at 8ff839f (App Builder 1.13.0, tag app-builder-v1.13.0 to be created). Do not edit: see playground-appbuilder/README.md.
// src/core/embed-bridge.js
var MAX_TEXT = 1e3;
var NAME = /^[A-Za-z][A-Za-z0-9_]{0,31}$/;
var RESERVED = /* @__PURE__ */ new Set(["text", "x", "y", "w", "h", "visible", "page", "sends", "listens"]);
function messageNames(s) {
  const out = [];
  for (const n of String(s ?? "").split(/[\s,;]+/)) if (NAME.test(n) && !RESERVED.has(n) && !out.includes(n)) out.push(n);
  return out;
}
function plainValue(v) {
  if (typeof v === "number") return Number.isFinite(v) ? v : void 0;
  if (typeof v === "boolean") return v;
  if (typeof v === "string") return v.length <= MAX_TEXT ? v : void 0;
  return void 0;
}

// src/core/components.js
var COMPONENTS = {
  button: { id: "button", label: "Button", category: "Basics", hint: "Something to tap or click.", base: "Button", props: { text: "Button", w: 150, h: 46 }, extra: { color: "" } },
  text: { id: "text", label: "Text", category: "Basics", hint: "Words on the screen. Events can change them.", base: "Text", props: { text: "Text", w: 220, h: 32 }, extra: { color: "" } },
  input: { id: "input", label: "Text input", category: "Basics", hint: "A box where the user types.", base: "Input", props: { text: "", w: 220, h: 42 } },
  shape: { id: "shape", label: "Box", category: "Basics", hint: "A coloured rectangle: bars, backgrounds, dividers.", base: "Box", props: { text: "", w: 200, h: 24 }, extra: { color: "#2f6fdd" } },
  image: { id: "image", label: "Image", category: "Media", hint: "A picture: upload one or pick a built-in.", base: "Image", props: { text: "", w: 120, h: 120 }, extra: { image: "star" } },
  sound: { id: "sound", label: "Sound", category: "Media", hint: "Music or a sound effect, with a play button.", base: "Sound", props: { text: "", w: 260, h: 52 }, extra: { sound: "calm", player: true }, exposes: ["playing"] },
  video: { id: "video", label: "Video", category: "Media", hint: "Plays a video from a link, e.g. Wikimedia Commons.", base: "Video", props: { text: "", w: 320, h: 200 }, extra: { link: "" }, exposes: ["playing"] },
  // made while the app runs: picture is a media reference (core/media.js), '' until there is one
  drawing: { id: "drawing", label: "Drawing", category: "Media", hint: "A space to draw on with a finger or the mouse.", base: "Drawing", props: { text: "", w: 300, h: 300 }, extra: { color: "#222222", pen: 4, background: "" }, exposes: ["picture", "lines"] },
  photo: { id: "photo", label: "Photo", category: "Media", hint: "The camera: take a photo of something (camera on for this app only).", base: "Photo", props: { text: "", w: 300, h: 225 }, extra: { shutter: true }, exposes: ["picture", "ready"] },
  recorder: { id: "recorder", label: "Recorder", category: "Media", hint: "Record a short sound with the microphone (mic on for this app only).", base: "Recorder", props: { text: "", w: 300, h: 104 }, exposes: ["sound", "length", "recording"] },
  // a web page (a simulation someone made, as one .html file) or a website, sandboxed; page: a name in project.pages or a link
  embed: { id: "embed", label: "Embed", category: "Media", hint: "A simulation or web page: paste its HTML, upload it, or link a site like PhET.", base: "Embed", props: { text: "", w: 480, h: 320 }, extra: { page: "", sends: "", listens: "" } },
  list: { id: "list", label: "List", category: "Data", hint: "Shows the items of a list, one per row.", base: "List", props: { text: "", w: 342, h: 220 }, extra: { source: "" } },
  table: { id: "table", label: "Table", category: "Data", hint: "Shows a table: a row for each record, a column for each field.", base: "Table", props: { text: "", w: 460, h: 240 }, extra: { source: "", columns: "" } },
  toggle: { id: "toggle", label: "Toggle", category: "Choices", hint: "An on/off switch with a label.", base: "Toggle", props: { text: "Switch", w: 180, h: 32 }, extra: { on: false, look: "switch" }, exposes: ["on"] },
  // look: 'switch' or 'tick' (a tick box), the same on/off
  slider: { id: "slider", label: "Slider", category: "Choices", hint: "Drag to pick a number.", base: "Slider", props: { text: "", w: 240, h: 32 }, extra: { min: 0, max: 100, value: 50 }, exposes: ["value", "min", "max"] }
};

// src/core/expr.js
var ExprError = class extends Error {
  constructor(message) {
    super(message);
    this.name = "ExprError";
  }
};
function compare(a, op, b) {
  if (op === "=" || op === "\u2260") {
    const eq = typeof a === typeof b ? a === b : String(a) === String(b);
    return op === "=" ? eq : !eq;
  }
  if (typeof a !== typeof b) {
    throw new ExprError(`Can't compare ${typeof a === "number" ? "a number" : "text"} with ${typeof b === "number" ? "a number" : "text"} using ${op}. Use int(...) on text first.`);
  }
  switch (op) {
    case "<":
      return a < b;
    case "\u2264":
      return a <= b;
    case ">":
      return a > b;
    case "\u2265":
      return a >= b;
  }
  throw new ExprError(`Unknown comparison "${op}"`);
}
var isRecord = (v) => !!v && typeof v === "object" && !Array.isArray(v);
function fmt(v) {
  if (Array.isArray(v)) return v.map(fmt).join(", ");
  if (isRecord(v)) return Object.values(v).map(fmt).join(", ");
  if (typeof v === "number") return Number.isInteger(v) ? String(v) : String(Math.round(v * 1e6) / 1e6);
  return String(v);
}
function needNum(v) {
  if (typeof v !== "number") {
    throw new ExprError(`Maths needs numbers, but this is ${typeof v === "string" ? `text: "${v}"` : "not a number"}. Use int(...) to turn text into a number.`);
  }
  return v;
}
var FUNCS = {
  int: { n: 1, f: (v) => {
    if (typeof v === "number") return Math.trunc(v);
    const n = parseInt(String(v).trim(), 10);
    return Number.isNaN(n) ? 0 : n;
  } },
  float: { n: 1, f: (v) => {
    if (typeof v === "number") return v;
    const n = parseFloat(String(v).trim());
    return Number.isNaN(n) ? 0 : n;
  } },
  round: { n: 1, f: (v) => Math.round(needNum(v)) },
  floor: { n: 1, f: (v) => Math.floor(needNum(v)) },
  ceil: { n: 1, f: (v) => Math.ceil(needNum(v)) },
  abs: { n: 1, f: (v) => Math.abs(needNum(v)) },
  min: { n: 2, f: (a, b) => Math.min(needNum(a), needNum(b)) },
  max: { n: 2, f: (a, b) => Math.max(needNum(a), needNum(b)) },
  len: { n: 1, f: (v) => String(v).length },
  upper: { n: 1, f: (v) => String(v).toUpperCase() },
  lower: { n: 1, f: (v) => String(v).toLowerCase() },
  str: { n: 1, f: (v) => fmt(v) }
};
var needList = (v, fn) => {
  if (!Array.isArray(v)) throw new ExprError(`${fn}() needs a list, like ${fn}(myList${fn === "item" ? ", 1" : ""})`);
  return v;
};
FUNCS.count = { n: 1, f: (l) => needList(l, "count").length };
FUNCS.item = { n: 2, f: (l, i) => {
  needList(l, "item");
  needNum(i);
  if (i < 1 || i > l.length || !Number.isInteger(i)) throw new ExprError(`The list has ${l.length} item${l.length === 1 ? "" : "s"}, so there is no item ${fmt(i)}. Items are numbered from 1.`);
  return l[i - 1];
} };
FUNCS.contains = { n: 2, f: (t, part) => fmt(t).includes(fmt(part)) };
FUNCS.join = { n: 2, f: (l, sep) => needList(l, "join").map(fmt).join(fmt(sep)) };
FUNCS.uppercase = FUNCS.upper;
FUNCS.lowercase = FUNCS.lower;

// src/core/colour.js
var NAMES = "black white red green blue yellow orange purple pink brown grey gray silver gold navy teal aqua cyan lime olive maroon magenta fuchsia violet indigo coral salmon tomato crimson khaki beige ivory lavender plum orchid tan chocolate turquoise skyblue lightblue darkblue lightgreen darkgreen lightgrey lightgray darkgrey darkgray dimgray dimgrey slategray slategrey whitesmoke gainsboro midnightblue royalblue steelblue dodgerblue deepskyblue seagreen forestgreen limegreen darkorange orangered hotpink deeppink lightpink lightyellow lemonchiffon mintcream honeydew aliceblue azure snow linen wheat peru sienna firebrick darkred darkviolet rebeccapurple transparent";
var KNOWN = new Set(NAMES.split(" "));
function colourValue(v) {
  const s = String(v ?? "").trim();
  if (/^#([0-9a-f]{3}|[0-9a-f]{6})$/i.test(s)) return s.toLowerCase();
  const name = s.toLowerCase().replace(/\s+/g, "");
  if (KNOWN.has(name)) return name;
  throw new ExprError(`"${s}" isn\u2019t a colour App Builder knows: try a name like "black" or "light blue", or a code like "#1c2333"`);
}

// src/core/catalog.js
var KEYS = [
  ["any", "Any key"],
  ["Enter", "Enter"],
  ["Space", "Space"],
  ["Escape", "Escape"],
  ["ArrowUp", "Up arrow"],
  ["ArrowDown", "Down arrow"],
  ["ArrowLeft", "Left arrow"],
  ["ArrowRight", "Right arrow"],
  ..."ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789".split("").map((c) => [c, c])
];
var obj = (extra = {}) => ({ name: "target", type: "object", ...extra });
var expr = (name = "value", def = "") => ({ name, type: "expr", default: def });
var CONDITIONS = {
  onStart: {
    category: "Screen",
    label: "On start of screen",
    trigger: "start",
    params: []
  },
  onClicked: {
    category: "Object",
    label: "{target} is clicked",
    trigger: "clicked",
    object: "target",
    params: [obj()]
  },
  onChanged: {
    category: "Object",
    label: "{target} text changes",
    trigger: "changed",
    object: "target",
    params: [obj({ kinds: ["input"] })]
  },
  onPressed: {
    category: "Object",
    label: "{target} is pressed",
    trigger: "pressed",
    object: "target",
    params: [obj()]
  },
  onReleased: {
    category: "Object",
    label: "{target} is released",
    trigger: "released",
    object: "target",
    params: [obj()]
  },
  onToggled: {
    category: "Object",
    label: "{target} is switched",
    trigger: "changed",
    object: "target",
    params: [obj({ kinds: ["toggle"] })]
  },
  onSlid: {
    category: "Object",
    label: "{target} is moved",
    trigger: "changed",
    object: "target",
    params: [obj({ kinds: ["slider"] })]
  },
  onSubmitted: {
    category: "Object",
    label: "Enter is pressed in {target}",
    trigger: "submitted",
    object: "target",
    params: [obj({ kinds: ["input"] })]
  },
  onDrawn: {
    category: "Object",
    label: "{target} is drawn on",
    trigger: "changed",
    object: "target",
    params: [obj({ kinds: ["drawing"] })],
    help: "Runs each time the user finishes a line. Drawing.lines is how many lines there are."
  },
  onPhotoTaken: {
    category: "Object",
    label: "A photo is taken with {target}",
    trigger: "changed",
    object: "target",
    params: [obj({ kinds: ["photo"] })],
    help: `Runs when the user taps the Photo's own take-photo button. Photo.picture is the photo. (A photo taken by the "Take a photo with" action doesn't run this: put what comes next in that same event.)`
  },
  onRecorded: {
    category: "Object",
    label: "{target} finishes a recording",
    trigger: "changed",
    object: "target",
    params: [obj({ kinds: ["recorder"] })],
    help: "Runs when the user stops recording (or it reaches 20 seconds). Recorder.sound is the recording, ready for a Sound or a table; Recorder.length is how long it is, in seconds."
  },
  onEmbedSends: {
    category: "Object",
    label: "{target} sends {message}",
    trigger: "embedSent",
    object: "target",
    message: "message",
    params: [obj({ kinds: ["embed"] }), { name: "message", type: "message", list: "sends" }],
    help: "Runs when the Embed's page sends this value (list the names it sends in its Properties). Sim.period is the latest value it sent."
  },
  onKey: {
    category: "Keyboard",
    label: "Key {key} is pressed",
    trigger: "keyDown",
    keyed: true,
    params: [{ name: "key", type: "key" }]
  },
  onKeyUp: {
    category: "Keyboard",
    label: "Key {key} is released",
    trigger: "keyUp",
    keyed: true,
    params: [{ name: "key", type: "key" }]
  },
  keyHeld: {
    category: "Keyboard",
    label: "Key {key} is held down",
    params: [{ name: "key", type: "key" }],
    test: (rt, ctx, p) => p.key === "any" ? rt.keysDown.size > 0 : rt.keysDown.has(p.key)
  },
  compareText: {
    category: "Object",
    label: "{target} text {op} {value}",
    params: [obj(), { name: "op", type: "operator" }, expr()],
    // Picking: keeps only the copies whose text matches.
    test: (rt, ctx, p) => {
      const keep = rt.pickList(ctx, p.target).filter((inst) => compare(inst.props.text, p.op, rt.evalExpr(p.value, rt.ctxWith(ctx, p.target, inst))));
      ctx.picked.set(p.target, keep);
      return keep.length > 0;
    }
  },
  isOn: {
    category: "Object",
    label: "{target} is {state}",
    params: [obj({ kinds: ["toggle"] }), { name: "state", type: "onoff" }],
    // Picking: keeps only the toggles in that state.
    test: (rt, ctx, p) => {
      const want = p.state !== "off";
      const keep = rt.pickList(ctx, p.target).filter((inst) => !!inst.props.on === want);
      ctx.picked.set(p.target, keep);
      return keep.length > 0;
    }
  },
  isPlaying: {
    category: "Object",
    label: "{target} is playing",
    params: [obj({ kinds: ["sound", "video"] })],
    // Picking: keeps only the sounds (or videos) that are playing.
    test: (rt, ctx, p) => {
      const keep = rt.pickList(ctx, p.target).filter((inst) => !!inst.props.playing);
      ctx.picked.set(p.target, keep);
      return keep.length > 0;
    }
  },
  onEnded: {
    category: "Object",
    label: "{target} finishes playing",
    trigger: "ended",
    object: "target",
    params: [obj({ kinds: ["sound", "video"] })]
  },
  onEvery: {
    category: "System",
    label: "Every {seconds} seconds",
    trigger: "timer",
    timer: "every",
    params: [expr("seconds", "1")]
  },
  onAfter: {
    category: "System",
    label: "After {seconds} seconds",
    trigger: "timer",
    timer: "after",
    params: [expr("seconds", "3")]
  },
  triggerOnce: {
    category: "System",
    label: "Trigger once while true",
    params: [],
    once: true,
    help: "Runs the event once when the conditions above become true, then waits until they are false again. Once for the whole event, not once per copy. Keep it last."
    // the runtime handles this one itself (it needs to remember the event between ticks)
  },
  onItemClicked: {
    category: "Object",
    label: "An item in {target} is clicked",
    trigger: "itemClicked",
    object: "target",
    params: [obj({ kinds: ["list", "table"] })],
    help: "ClickedItem is the item (or row) that was clicked, and ClickedIndex is its number (from 1). For a table, ClickedItem.title is one field of that row."
  },
  forEachRow: {
    category: "Tables",
    label: "For each row in table {table}",
    loop: "each",
    params: [{ name: "table", type: "table" }],
    help: "Runs the event once for every row. Inside it, LoopItem is the row (LoopItem.title is one field) and LoopIndex is its number (from 1)."
  },
  forEach: {
    category: "Lists",
    label: "For each item in list {list}",
    loop: "each",
    params: [{ name: "list", type: "list" }],
    help: "Runs the event once for every item. Inside it, LoopItem is the item and LoopIndex is its number (from 1)."
  },
  repeat: {
    category: "System",
    label: "Repeat {count} times",
    loop: "repeat",
    params: [expr("count", "3")],
    help: "Runs the event that many times. Inside it, LoopIndex counts 1, 2, 3 ..."
  },
  listHas: {
    category: "Lists",
    label: "List {list} contains {value}",
    params: [{ name: "list", type: "list" }, expr()],
    test: (rt, ctx, p) => rt.listOf(p.list).some((x) => compare(x, "=", rt.evalExpr(p.value, ctx)))
  },
  everyTick: {
    category: "System",
    label: "Every tick",
    params: [],
    test: () => true
  },
  compareVar: {
    category: "Variables",
    label: "Variable {var} {op} {value}",
    params: [{ name: "var", type: "variable" }, { name: "op", type: "operator" }, expr()],
    test: (rt, ctx, p) => compare(rt.getVar(p.var), p.op, rt.evalExpr(p.value, ctx))
  },
  compareValues: {
    category: "Variables",
    label: "Compare {left} {op} {right}",
    params: [expr("left"), { name: "op", type: "operator" }, expr("right")],
    test: (rt, ctx, p) => compare(rt.evalExpr(p.left, ctx), p.op, rt.evalExpr(p.right, ctx))
  },
  compareInst: {
    category: "Object",
    label: "{target}: {var} {op} {value}",
    params: [obj(), { name: "var", type: "instVar" }, { name: "op", type: "operator" }, expr()],
    // Picking: keeps only the copies that pass, so later actions affect just those.
    test: (rt, ctx, p) => {
      const keep = rt.pickList(ctx, p.target).filter((inst) => compare(rt.instVar(inst, p.var), p.op, rt.evalExpr(p.value, rt.ctxWith(ctx, p.target, inst))));
      ctx.picked.set(p.target, keep);
      return keep.length > 0;
    }
  }
};
var ACTIONS = {
  setText: {
    category: "Object",
    label: "Set {target} text to {value}",
    params: [obj(), expr()],
    run: (rt, ctx, p) => rt.each(ctx, p.target, (inst, c) => rt.setProp(inst, "text", fmt(rt.evalExpr(p.value, c))))
  },
  setImage: {
    category: "Object",
    label: "Set {target} picture to {image}",
    params: [obj({ kinds: ["image"] }), { name: "image", type: "picture" }],
    run: (rt, ctx, p) => rt.each(ctx, p.target, (inst) => rt.setProp(inst, "image", p.image))
  },
  setImageFrom: {
    category: "Object",
    label: "Set {target} picture to the one in {value}",
    params: [obj({ kinds: ["image"] }), expr("value", "ClickedItem.picture")],
    help: "Worked out when the app runs: a picture someone made (Drawing.picture, Photo.picture), a table field that holds one (ClickedItem.picture), or the name of a picture.",
    run: (rt, ctx, p) => rt.each(ctx, p.target, (inst, c) => rt.setProp(inst, "image", rt.pictureValue(rt.evalExpr(p.value, c))))
  },
  clearDrawing: {
    category: "Object",
    label: "Clear {target}",
    params: [obj({ kinds: ["drawing"] })],
    run: (rt, ctx, p) => rt.each(ctx, p.target, (inst) => rt.drawing(inst, "clear"))
  },
  undoDrawing: {
    category: "Object",
    label: "Undo the last line on {target}",
    params: [obj({ kinds: ["drawing"] })],
    run: (rt, ctx, p) => rt.each(ctx, p.target, (inst) => rt.drawing(inst, "undo"))
  },
  // Colours while the app runs (1.11): a Box's fill, a Text's letters, a Button's fill (its label stays readable).
  setColour: {
    category: "Object",
    label: "Set {target} colour to {value}",
    params: [obj({ kinds: ["shape", "text", "button"] }), expr("value", '"black"')],
    help: 'A colour name in quotes, like "black" or "light blue", or a code like "#1c2333". For a Text it is the colour of the words; for a Box or a Button, its fill.',
    run: (rt, ctx, p) => rt.each(ctx, p.target, (inst, c) => rt.setProp(inst, "color", colourValue(fmt(rt.evalExpr(p.value, c)))))
  },
  setBackground: {
    category: "Screen",
    label: "Set screen background to {value}",
    params: [expr("value", '"black"')],
    help: 'A colour name in quotes, like "black" or "white", or a code like "#1c2333". It stays until it is set again, on every screen.',
    run: (rt, ctx, p) => rt.setBackground(colourValue(fmt(rt.evalExpr(p.value, ctx))))
  },
  setPenColour: {
    category: "Object",
    label: "Set {target} pen colour to {value}",
    params: [obj({ kinds: ["drawing"] }), expr("value", '"red"')],
    help: 'A colour name in quotes, like "red" or "blue", or a code like "#2f6fdd". Lines already drawn keep their colour.',
    run: (rt, ctx, p) => rt.each(ctx, p.target, (inst, c) => rt.setProp(inst, "color", fmt(rt.evalExpr(p.value, c)).trim()))
  },
  setPenSize: {
    category: "Object",
    label: "Set {target} pen size to {value}",
    params: [obj({ kinds: ["drawing"] }), expr("value", "8")],
    help: "How thick the next lines are, in pixels: 1 to 40.",
    run: (rt, ctx, p) => rt.each(ctx, p.target, (inst, c) => {
      const n = Number(rt.evalExpr(p.value, c));
      if (!Number.isFinite(n)) throw new ExprError("The pen size must be a number, like 8");
      rt.setProp(inst, "pen", Math.max(1, Math.min(40, n)));
    })
  },
  setDrawingBackground: {
    category: "Object",
    label: "Set {target} background to the picture in {value}",
    params: [obj({ kinds: ["drawing"] }), expr("value", "Photo.picture")],
    help: 'A picture to draw on top of, such as a photo to label. Drawing.picture then includes it. Use "" for none.',
    run: (rt, ctx, p) => rt.each(ctx, p.target, (inst, c) => {
      const v = rt.evalExpr(p.value, c);
      rt.setProp(inst, "background", v === "" ? "" : rt.pictureValue(v));
      rt.drawing(inst, "changed");
    })
  },
  takePhoto: {
    category: "Object",
    label: "Take a photo with {target}",
    params: [obj({ kinds: ["photo"] })],
    help: "Photo.picture is then the photo, ready to show in an Image or keep in a table. The camera must be on first: the user taps the Photo to start it.",
    run: (rt, ctx, p) => rt.each(ctx, p.target, (inst) => rt.takePhoto(inst))
  },
  playSound: {
    category: "Object",
    label: "Play {target}",
    params: [obj({ kinds: ["sound", "video"] })],
    help: "Plays from the start. A browser only plays sound after the user has clicked or pressed something in the app.",
    run: (rt, ctx, p) => rt.each(ctx, p.target, (inst) => rt.media(inst, "play"))
  },
  stopSound: {
    category: "Object",
    label: "Stop {target}",
    params: [obj({ kinds: ["sound", "video"] })],
    run: (rt, ctx, p) => rt.each(ctx, p.target, (inst) => rt.media(inst, "stop"))
  },
  setSound: {
    category: "Object",
    label: "Set {target} sound to {sound}",
    params: [obj({ kinds: ["sound"] }), { name: "sound", type: "sound" }],
    run: (rt, ctx, p) => rt.each(ctx, p.target, (inst) => {
      rt.media(inst, "stop");
      rt.setProp(inst, "sound", p.sound);
    })
  },
  setSoundNamed: {
    category: "Object",
    label: "Set {target} sound to the one named {name}",
    params: [obj({ kinds: ["sound"] }), expr("name", "ClickedItem.sound")],
    help: "Worked out when the app runs: a recording (Recorder.sound), a table field that holds one or names a sound (ClickedItem.sound), or a sound's name.",
    run: (rt, ctx, p) => rt.each(ctx, p.target, (inst, c) => {
      const name = fmt(rt.evalExpr(p.name, c));
      if (!rt.hasSound(name)) throw new ExprError(`There is no sound called "${name}"`);
      rt.media(inst, "stop");
      rt.setProp(inst, "sound", name);
    })
  },
  setVideo: {
    category: "Object",
    label: "Set {target} video to {link}",
    params: [obj({ kinds: ["video"] }), expr("link", "ClickedItem.link")],
    help: "A link to a video file, such as one on Wikimedia Commons. The name is worked out when the app runs, so a table field can hold each row's link.",
    run: (rt, ctx, p) => rt.each(ctx, p.target, (inst, c) => {
      rt.media(inst, "stop");
      rt.setProp(inst, "link", fmt(rt.evalExpr(p.link, c)).trim());
    })
  },
  sendToEmbed: {
    category: "Object",
    label: "Send {message} = {value} to {target}",
    params: [obj({ kinds: ["embed"] }), { name: "message", type: "message", list: "listens" }, expr("value", "1")],
    help: "Sends one value (a number, text, true or false) to the Embed's page (list the names it listens for in its Properties). The page decides what to do with it.",
    run: (rt, ctx, p) => {
      if (!p.message) throw new ExprError("Choose what to send (list the names the Embed listens for in its Properties)");
      rt.each(ctx, p.target, (inst, c) => {
        const v = plainValue(rt.evalExpr(p.value, c));
        if (v === void 0) throw new ExprError("Send one value: a number, some text (up to 1000 letters), true or false");
        rt.sendToEmbed(inst, p.message, v);
      });
    }
  },
  openLink: {
    category: "System",
    label: "Open link {link} in a new tab",
    params: [expr("link", '"https://commons.wikimedia.org"')],
    help: "Opens a web page in a new browser tab (the app keeps running). Only http and https links open.",
    run: (rt, ctx, p) => {
      const link = fmt(rt.evalExpr(p.link, ctx)).trim();
      if (!/^https?:\/\//i.test(link)) throw new ExprError(`"${link}" isn't a web link (it should start with https://)`);
      rt.openLink(link);
    }
  },
  setSize: {
    category: "Object",
    label: "Set {target} {prop} to {value}",
    params: [obj(), { name: "prop", type: "posSize" }, expr()],
    run: (rt, ctx, p) => rt.each(ctx, p.target, (inst, c) => {
      const v = num(rt.evalExpr(p.value, c));
      rt.setProp(inst, p.prop, p.prop === "w" || p.prop === "h" ? Math.max(0, v) : v);
    })
  },
  setOn: {
    category: "Object",
    label: "Turn {target} {state}",
    params: [obj({ kinds: ["toggle"] }), { name: "state", type: "onoff" }],
    run: (rt, ctx, p) => rt.each(ctx, p.target, (inst) => rt.setProp(inst, "on", p.state !== "off"))
  },
  setSlider: {
    category: "Object",
    label: "Set {target} value to {value}",
    params: [obj({ kinds: ["slider"] }), expr()],
    run: (rt, ctx, p) => rt.each(ctx, p.target, (inst, c) => rt.setProp(inst, "value", clampTo(inst, num(rt.evalExpr(p.value, c)))))
  },
  setVisible: {
    category: "Object",
    label: "{visible} {target}",
    params: [{ name: "visible", type: "showhide" }, obj()],
    run: (rt, ctx, p) => rt.each(ctx, p.target, (inst) => rt.setProp(inst, "visible", p.visible !== "hide"))
  },
  setInst: {
    category: "Object",
    label: "Set {target} {var} to {value}",
    params: [obj(), { name: "var", type: "instVar" }, expr()],
    run: (rt, ctx, p) => rt.each(ctx, p.target, (inst, c) => rt.setInstVar(inst, p.var, rt.evalExpr(p.value, c)))
  },
  addToInst: {
    category: "Object",
    label: "Add {value} to {target} {var}",
    params: [expr(), obj(), { name: "var", type: "instVar" }],
    run: (rt, ctx, p) => rt.each(ctx, p.target, (inst, c) => rt.setInstVar(inst, p.var, num(rt.instVar(inst, p.var)) + num(rt.evalExpr(p.value, c))))
  },
  setVar: {
    category: "Variables",
    label: "Set variable {var} to {value}",
    params: [{ name: "var", type: "variable" }, expr()],
    run: (rt, ctx, p) => rt.setVar(p.var, rt.evalExpr(p.value, ctx))
  },
  addTo: {
    category: "Variables",
    label: "Add {value} to variable {var}",
    params: [expr(), { name: "var", type: "variable" }],
    run: (rt, ctx, p) => rt.setVar(p.var, num(rt.getVar(p.var)) + num(rt.evalExpr(p.value, ctx)))
  },
  subtractFrom: {
    category: "Variables",
    label: "Subtract {value} from variable {var}",
    params: [expr(), { name: "var", type: "variable" }],
    run: (rt, ctx, p) => rt.setVar(p.var, num(rt.getVar(p.var)) - num(rt.evalExpr(p.value, ctx)))
  },
  listAdd: {
    category: "Lists",
    label: "Add {value} to the end of list {list}",
    params: [expr(), { name: "list", type: "list" }],
    run: (rt, ctx, p) => rt.listChange(p.list, (l) => l.push(rt.evalExpr(p.value, ctx)))
  },
  listRemoveAt: {
    category: "Lists",
    label: "Remove item {index} from list {list}",
    params: [expr("index", "1"), { name: "list", type: "list" }],
    run: (rt, ctx, p) => {
      const i = num(rt.evalExpr(p.index, ctx));
      rt.listChange(p.list, (l) => {
        rt.checkIndex(l, i);
        l.splice(i - 1, 1);
      });
    }
  },
  listRemoveValue: {
    category: "Lists",
    label: "Remove {value} from list {list}",
    params: [expr(), { name: "list", type: "list" }],
    run: (rt, ctx, p) => {
      const v = rt.evalExpr(p.value, ctx);
      rt.listChange(p.list, (l) => {
        const i = l.findIndex((x) => compare(x, "=", v));
        if (i >= 0) l.splice(i, 1);
      });
    }
  },
  listSet: {
    category: "Lists",
    label: "Set item {index} of list {list} to {value}",
    params: [expr("index", "1"), { name: "list", type: "list" }, expr()],
    run: (rt, ctx, p) => {
      const i = num(rt.evalExpr(p.index, ctx));
      const v = rt.evalExpr(p.value, ctx);
      rt.listChange(p.list, (l) => {
        rt.checkIndex(l, i);
        l[i - 1] = v;
      });
    }
  },
  listClear: {
    category: "Lists",
    label: "Clear list {list}",
    params: [{ name: "list", type: "list" }],
    run: (rt, ctx, p) => rt.listChange(p.list, (l) => {
      l.length = 0;
    })
  },
  tableAdd: {
    category: "Tables",
    label: "Add a row to table {table}: {values}",
    params: [{ name: "table", type: "table" }, { name: "values", type: "fields" }],
    run: (rt, ctx, p) => {
      const row = {};
      for (const f of rt.fieldsOf(p.table)) {
        const src = p.values?.[f.name];
        row[f.name] = rt.toField(p.table, f.name, src == null || String(src).trim() === "" ? f.type === "number" ? 0 : "" : rt.evalExpr(src, ctx));
      }
      rt.tableChange(p.table, (t) => t.push(row));
    }
  },
  tableSet: {
    category: "Tables",
    label: "Set {field} of row {index} in table {table} to {value}",
    params: [{ name: "field", type: "field" }, expr("index", "1"), { name: "table", type: "table" }, expr()],
    run: (rt, ctx, p) => {
      const i = num(rt.evalExpr(p.index, ctx));
      const v = rt.toField(p.table, p.field, rt.evalExpr(p.value, ctx));
      rt.tableChange(p.table, (t) => {
        rt.checkRow(t, i, p.table);
        t[i - 1] = { ...t[i - 1], [p.field]: v };
      });
    }
  },
  tableRemove: {
    category: "Tables",
    label: "Remove row {index} from table {table}",
    params: [expr("index", "1"), { name: "table", type: "table" }],
    run: (rt, ctx, p) => {
      const i = num(rt.evalExpr(p.index, ctx));
      rt.tableChange(p.table, (t) => {
        rt.checkRow(t, i, p.table);
        t.splice(i - 1, 1);
      });
    }
  },
  tableClear: {
    category: "Tables",
    label: "Clear table {table}",
    params: [{ name: "table", type: "table" }],
    run: (rt, ctx, p) => rt.tableChange(p.table, (t) => {
      t.length = 0;
    })
  },
  tableSort: {
    category: "Tables",
    label: "Sort table {table} by {field} {dir}",
    params: [{ name: "table", type: "table" }, { name: "field", type: "field" }, { name: "dir", type: "sortdir" }],
    run: (rt, ctx, p) => {
      const type = rt.fieldType(p.table, p.field);
      const sign = p.dir === "down" ? -1 : 1;
      const key = (r) => r[p.field];
      const cmp = type === "number" ? (a, b) => (Number(key(a)) || 0) - (Number(key(b)) || 0) : (a, b) => String(key(a)).localeCompare(String(key(b)), void 0, { sensitivity: "base", numeric: true });
      rt.tableChange(p.table, (t) => {
        const sorted = [...t].sort((a, b) => sign * cmp(a, b));
        t.splice(0, t.length, ...sorted);
      });
    }
  },
  callFunction: {
    category: "Functions",
    label: "Call {fn} {args}",
    params: [{ name: "fn", type: "function" }, { name: "args", type: "args" }],
    help: "Runs the function's actions now, then carries on with this event. Each value you give is a parameter: a plain name inside the function.",
    run: (rt, ctx, p) => rt.callFunction(p.fn, rt.argValues(p.fn, p.args, ctx), ctx)
  },
  setReturn: {
    category: "Functions",
    label: "Set return value to {value}",
    params: [expr()],
    help: "Only inside a function. The value the function gives back when it is used in a value box, like Total(price, qty).",
    run: (rt, ctx, p) => rt.setReturn(ctx, rt.evalExpr(p.value, ctx))
  },
  goToScreen: {
    category: "Screen",
    label: "Go to screen {screen}",
    params: [{ name: "screen", type: "screen" }],
    run: (rt, ctx, p) => rt.goTo(p.screen)
  }
};
var clampTo = (inst, n) => Math.max(inst.props.min, Math.min(inst.props.max, n));
function num(v) {
  if (typeof v !== "number") throw new ExprError(`Adding needs numbers, but this is ${typeof v === "string" ? `text: "${v}"` : "not a number"}. Use int(...) to turn text into a number.`);
  return v;
}
var entryFor = (kind, type) => (kind === "cond" ? CONDITIONS : ACTIONS)[type];
var SORT_DIRS = [["up", "A to Z, smallest first"], ["down", "Z to A, biggest first"]];
var NUM_OR_CALC = "A number, a variable, or a calculation like score + 1.";
var PARAM_HELP = {
  "onEvery.seconds": "How many seconds between each time. A number like 2 or 0.5, or a variable.",
  "onAfter.seconds": "How many seconds to wait. A number like 3, or a variable.",
  "compareVar.value": 'What to compare the variable with: a number, "text in quotes", or another variable.',
  "compareValues.left": 'The first value: a variable, a number, "text in quotes", or Object.property.',
  "compareValues.right": "The value to compare it with.",
  "compareInst.value": 'What to compare with: a number, "text in quotes", or a variable.',
  "compareText.value": 'The text to compare with, in "quotes", e.g. "\u2B1C".',
  "listHas.value": 'The item to look for, e.g. "Milk" or a variable.',
  "listAdd.value": 'The item to add: "text in quotes", a number, or something like Name.text.',
  "listRemoveAt.index": "Which item: 1 is the first, count(list) is the last.",
  "listRemoveValue.value": "The item to remove (the first one that matches).",
  "listSet.index": "Which item: 1 is the first.",
  "listSet.value": "The new value for that item.",
  "tableSet.index": "Which row: 1 is the first, LoopIndex inside For each, ClickedIndex when a row is clicked.",
  "tableSet.value": 'The new value for that field: a number, "text in quotes", or something like Name.text.',
  "tableRemove.index": "Which row: 1 is the first, count(table) is the last, ClickedIndex is the clicked row.",
  "repeat.count": "How many times: a number or a variable.",
  "setSize.value": "A number of pixels, or a calculation like (water / goal) * 300.",
  "setText.value": 'The text to show. Put words in "quotes" and join pieces with &, e.g. "Total: " & minutes',
  "setSlider.value": "A number between the slider's smallest and largest. " + NUM_OR_CALC,
  "setInst.value": 'The new value: a number, "text in quotes", or a calculation like done + 1.',
  "addToInst.value": "How much to add. " + NUM_OR_CALC,
  "setVar.value": 'The new value: a number, "text in quotes", or a calculation like score + 1.',
  "addTo.value": "How much to add. " + NUM_OR_CALC,
  "subtractFrom.value": "How much to take away. " + NUM_OR_CALC,
  "setReturn.value": 'What the function gives back: a number, "text in quotes", or a calculation like price * qty.'
};
for (const table of [CONDITIONS, ACTIONS]) {
  for (const [id, e] of Object.entries(table)) {
    for (const p of e.params) if (p.type === "args") p.help = 'One value for each parameter of the function: a number, "text in quotes", a variable, or something like Entry.text.';
    for (const p of e.params) if (p.type === "fields") p.help = 'One value for each field: "text in quotes", a number, or something like Title.text. An empty box gives empty text (or 0 for a number field).';
    for (const p of e.params) if (p.type === "expr") p.help = PARAM_HELP[`${id}.${p.name}`] || 'A value: a number, "text in quotes", a variable, or a calculation.';
  }
}

// src/core/shared.js
var allScreensEvents = (project) => project?.allScreens?.events || [];

// src/core/assets.js
var svgUrl = (body, fill) => "data:image/svg+xml," + encodeURIComponent(
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><g fill="${fill}" stroke="none">${body}</g></svg>`
);
var BUILTIN_IMAGES = {
  star: svgUrl('<path d="M32 4l8.6 17.5 19.4 2.8-14 13.7 3.3 19.3L32 48.2 14.7 57.3 18 38 4 24.3l19.4-2.8z"/>', "#f5b301"),
  heart: svgUrl('<path d="M32 56S6 40 6 22a13 13 0 0 1 26-4 13 13 0 0 1 26 4c0 18-26 34-26 34z"/>', "#e5484d"),
  trophy: svgUrl('<path d="M18 6h28v14a14 14 0 0 1-28 0z"/><path d="M18 10H8v4a10 10 0 0 0 10 10zM46 10h10v4a10 10 0 0 1-10 10z" opacity=".7"/><rect x="28" y="34" width="8" height="12"/><rect x="18" y="46" width="28" height="8" rx="2"/>', "#e0a100"),
  tick: svgUrl('<circle cx="32" cy="32" r="28"/><path d="M18 33l9 9 19-20" fill="none" stroke="#fff" stroke-width="7" stroke-linecap="round" stroke-linejoin="round"/>', "#2fa36b"),
  cross: svgUrl('<circle cx="32" cy="32" r="28"/><path d="M22 22l20 20M42 22L22 42" stroke="#fff" stroke-width="7" stroke-linecap="round"/>', "#e5484d"),
  water: svgUrl('<path d="M32 4C22 20 12 30 12 42a20 20 0 0 0 40 0C52 30 42 20 32 4z"/>', "#2f8fdd"),
  music: svgUrl('<path d="M24 10l30-6v38a8 8 0 1 1-6-7.7V14l-18 3.6V48a8 8 0 1 1-6-7.7z"/>', "#7c3aed"),
  smile: svgUrl('<circle cx="32" cy="32" r="28"/><circle cx="23" cy="26" r="4" fill="#4a3500"/><circle cx="41" cy="26" r="4" fill="#4a3500"/><path d="M20 38a14 14 0 0 0 24 0" fill="none" stroke="#4a3500" stroke-width="4" stroke-linecap="round"/>', "#f5c400")
};

// src/core/functions.js
var functionsOf = (project) => project?.functions || [];

// src/core/sheet-text.js
var SHOW = { showhide: { show: "Show", hide: "Hide" }, onoff: { on: "on", off: "off" }, posSize: { w: "width", h: "height", x: "x position", y: "y position" }, sortdir: Object.fromEntries(SORT_DIRS) };
var KEY_NAMES = Object.fromEntries(KEYS);
function itemText(kind, item, screens) {
  const entry = entryFor(kind, item.type);
  if (!entry) return `(unknown ${item.type})`;
  return entry.label.replace(/\{(\w+)\}/g, (m, name) => {
    const prm = entry.params.find((p) => p.name === name);
    const v = item[name] ?? "";
    if (!prm) return m;
    if (prm.type === "screen") return screens.find((s) => s.id === v)?.name ?? v;
    if (prm.type === "key") return KEY_NAMES[v] ?? v;
    if (prm.type === "fields") return Object.entries(v || {}).filter(([, x]) => String(x).trim() !== "").map(([f, x]) => `${f} = ${x}`).join(", ");
    if (prm.type === "args") {
      const set = Object.entries(v || {}).filter(([, x]) => String(x).trim() !== "");
      return set.length ? "with " + set.map(([a, x]) => `${a} = ${x}`).join(", ") : "";
    }
    if (SHOW[prm.type]) return SHOW[prm.type][v] ?? v;
    return String(v);
  }).trim();
}
function sheetText(project) {
  const out = [];
  const val = (v) => JSON.stringify(v);
  for (const v of project.variables || []) {
    const line = v.table ? `table ${v.name} = [${(v.table.fields || []).map((f) => f.type === "link" ? `${f.name} (links to ${f.to})` : f.name).join(", ")}] ${v.value.length} row${v.value.length === 1 ? "" : "s"}` : Array.isArray(v.value) ? `list ${v.name} = ${val(v.value)}` : `variable ${v.name} = ${val(v.value)}`;
    out.push(line + (v.remember ? " (remembered)" : ""));
  }
  const walk = (events, path) => {
    for (const ev of events || []) {
      const conds = (ev.conds || []).map((c) => "when " + itemText("cond", c, project.screens));
      const here = [...ev.else ? ["else"] : [], ...conds].join(" and ") || "always";
      const full = [...path, here];
      const acts = (ev.actions || []).map((a) => itemText("act", a, project.screens)).join("; ");
      out.push(`event: ${full.join(" > ")} | do: ${acts}`);
      walk(ev.children, full);
    }
  };
  if (allScreensEvents(project).length) {
    out.push("all screens");
    walk(allScreensEvents(project), []);
  }
  for (const f of functionsOf(project)) {
    out.push(`function ${f.name}(${f.params.join(", ")})${f.copyPicked ? " (only the picked ones)" : ""}`);
    walk(f.events, []);
  }
  for (const s of project.screens || []) {
    out.push(`screen ${s.name}`);
    for (const o of s.objects || []) {
      const i = o.instances[0] || {};
      out.push(`object ${o.name} (${COMPONENTS[o.kind]?.label.toLowerCase() ?? o.kind}) text ${val(i.text ?? "")}${(o.kind === "list" || o.kind === "table") && i.source ? ` shows ${i.source}` : ""}${o.kind === "sound" ? ` sound ${i.sound ?? ""}${i.player === false ? " (no player)" : ""}` : ""}${o.kind === "toggle" && i.look === "tick" ? " (tick box)" : ""}${o.kind === "video" && i.link ? ` link ${val(i.link)}` : ""}${o.kind === "embed" && i.page ? ` page ${val(i.page)}` : ""}${o.kind === "embed" && messageNames(i.sends).length ? ` sends ${messageNames(i.sends).join(", ")}` : ""}${o.kind === "embed" && messageNames(i.listens).length ? ` listens ${messageNames(i.listens).join(", ")}` : ""}${o.instances.length > 1 ? ` copies ${o.instances.length}` : ""}`);
      for (const iv of o.instanceVars || []) out.push(`object variable ${o.name}.${iv.name} = ${val(iv.value)}`);
    }
    walk(s.events, []);
  }
  return out.join("\n");
}
export {
  itemText,
  sheetText
};
