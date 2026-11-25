// Built from edu-matthew-pham/waypoints-tools app-builder/src/core/sheet-text.js at 365dde9. Do not edit: see vendor/app-builder/README.md.
// src/core/components.js
var COMPONENTS = {
  button: { id: "button", label: "Button", category: "Basics", hint: "Something to tap or click.", base: "Button", props: { text: "Button", w: 150, h: 46 } },
  text: { id: "text", label: "Text", category: "Basics", hint: "Words on the screen. Events can change them.", base: "Text", props: { text: "Text", w: 220, h: 32 } },
  input: { id: "input", label: "Text input", category: "Basics", hint: "A box where the user types.", base: "Input", props: { text: "", w: 220, h: 42 } },
  shape: { id: "shape", label: "Box", category: "Basics", hint: "A coloured rectangle: bars, backgrounds, dividers.", base: "Box", props: { text: "", w: 200, h: 24 }, extra: { color: "#2f6fdd" } },
  image: { id: "image", label: "Image", category: "Media", hint: "A picture: upload one or pick a built-in.", base: "Image", props: { text: "", w: 120, h: 120 }, extra: { image: "star" } },
  sound: { id: "sound", label: "Sound", category: "Media", hint: "Music or a sound effect, with a play button.", base: "Sound", props: { text: "", w: 260, h: 52 }, extra: { sound: "calm" }, exposes: ["playing"] },
  video: { id: "video", label: "Video", category: "Media", hint: "Plays a video from a link, e.g. Wikimedia Commons.", base: "Video", props: { text: "", w: 320, h: 200 }, extra: { link: "" }, exposes: ["playing"] },
  list: { id: "list", label: "List", category: "Data", hint: "Shows the items of a list, one per row.", base: "List", props: { text: "", w: 342, h: 220 }, extra: { source: "" } },
  table: { id: "table", label: "Table", category: "Data", hint: "Shows a table: a row for each record, a column for each field.", base: "Table", props: { text: "", w: 460, h: 240 }, extra: { source: "", columns: "" } },
  toggle: { id: "toggle", label: "Toggle", category: "Choices", hint: "An on/off switch with a label.", base: "Toggle", props: { text: "Switch", w: 180, h: 32 }, extra: { on: false }, exposes: ["on"] },
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
    help: "The name is worked out when the app runs, so a table can have a field naming each row's sound: ClickedItem.sound.",
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
  "subtractFrom.value": "How much to take away. " + NUM_OR_CALC
};
for (const table of [CONDITIONS, ACTIONS]) {
  for (const [id, e] of Object.entries(table)) {
    for (const p of e.params) if (p.type === "fields") p.help = 'One value for each field: "text in quotes", a number, or something like Title.text. An empty box gives empty text (or 0 for a number field).';
    for (const p of e.params) if (p.type === "expr") p.help = PARAM_HELP[`${id}.${p.name}`] || 'A value: a number, "text in quotes", a variable, or a calculation.';
  }
}

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
    if (SHOW[prm.type]) return SHOW[prm.type][v] ?? v;
    return String(v);
  });
}
function sheetText(project) {
  const out = [];
  const val = (v) => JSON.stringify(v);
  for (const v of project.variables || []) {
    const line = v.table ? `table ${v.name} = [${(v.table.fields || []).map((f) => f.type === "link" ? `${f.name} (links to ${f.to})` : f.name).join(", ")}] ${v.value.length} row${v.value.length === 1 ? "" : "s"}` : Array.isArray(v.value) ? `list ${v.name} = ${val(v.value)}` : `variable ${v.name} = ${val(v.value)}`;
    out.push(line + (v.remember ? " (remembered)" : ""));
  }
  for (const s of project.screens || []) {
    out.push(`screen ${s.name}`);
    for (const o of s.objects || []) {
      const i = o.instances[0] || {};
      out.push(`object ${o.name} (${COMPONENTS[o.kind]?.label.toLowerCase() ?? o.kind}) text ${val(i.text ?? "")}${(o.kind === "list" || o.kind === "table") && i.source ? ` shows ${i.source}` : ""}${o.kind === "sound" ? ` sound ${i.sound ?? ""}` : ""}${o.kind === "video" && i.link ? ` link ${val(i.link)}` : ""}${o.instances.length > 1 ? ` copies ${o.instances.length}` : ""}`);
      for (const iv of o.instanceVars || []) out.push(`object variable ${o.name}.${iv.name} = ${val(iv.value)}`);
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
    walk(s.events, []);
  }
  return out.join("\n");
}
export {
  sheetText
};
