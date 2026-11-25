// Built from edu-matthew-pham/waypoints-tools app-builder/src/core/sheet-text.js at 6359984. Do not edit: see vendor/app-builder/README.md.
// src/core/components.js
var COMPONENTS = {
  button: { id: "button", label: "Button", category: "Basics", hint: "Something to tap or click.", base: "Button", props: { text: "Button", w: 150, h: 46 } },
  text: { id: "text", label: "Text", category: "Basics", hint: "Words on the screen. Events can change them.", base: "Text", props: { text: "Text", w: 220, h: 32 } },
  input: { id: "input", label: "Text input", category: "Basics", hint: "A box where the user types.", base: "Input", props: { text: "", w: 220, h: 42 } },
  shape: { id: "shape", label: "Box", category: "Basics", hint: "A coloured rectangle: bars, backgrounds, dividers.", base: "Box", props: { text: "", w: 200, h: 24 }, extra: { color: "#2f6fdd" } },
  image: { id: "image", label: "Image", category: "Media", hint: "A picture: upload one or pick a built-in.", base: "Image", props: { text: "", w: 120, h: 120 }, extra: { image: "star" } },
  list: { id: "list", label: "List", category: "Data", hint: "Shows the items of a list, one per row.", base: "List", props: { text: "", w: 342, h: 220 }, extra: { source: "" } },
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
function fmt(v) {
  if (Array.isArray(v)) return v.map(fmt).join(", ");
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
    params: [obj({ kinds: ["list"] })],
    help: "ClickedItem is the item that was clicked, and ClickedIndex is its number (from 1)."
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
    for (const p of e.params) if (p.type === "expr") p.help = PARAM_HELP[`${id}.${p.name}`] || 'A value: a number, "text in quotes", a variable, or a calculation.';
  }
}

// src/core/sheet-text.js
var SHOW = { showhide: { show: "Show", hide: "Hide" }, onoff: { on: "on", off: "off" }, posSize: { w: "width", h: "height", x: "x position", y: "y position" } };
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
    if (SHOW[prm.type]) return SHOW[prm.type][v] ?? v;
    return String(v);
  });
}
function sheetText(project) {
  const out = [];
  const val = (v) => JSON.stringify(v);
  for (const v of project.variables || []) out.push(Array.isArray(v.value) ? `list ${v.name} = ${val(v.value)}` : `variable ${v.name} = ${val(v.value)}`);
  for (const s of project.screens || []) {
    out.push(`screen ${s.name}`);
    for (const o of s.objects || []) {
      const i = o.instances[0] || {};
      out.push(`object ${o.name} (${COMPONENTS[o.kind]?.label.toLowerCase() ?? o.kind}) text ${val(i.text ?? "")}${o.kind === "list" && i.source ? ` shows ${i.source}` : ""}${o.instances.length > 1 ? ` copies ${o.instances.length}` : ""}`);
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
