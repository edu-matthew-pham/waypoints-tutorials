// The maths evaluator shared by validate, lesson pages, the maths board and the create page. No imports, and
// makeMath() closes over nothing, because its source is also inlined into pages (MATH_JS): the same code checks
// answers in the browser and in validate. It reads what students type: 2x + 3, 3(x - 1), x^2, 3/4, and the
// symbols ×, ÷ and −. Mixed numbers (1 1/2) are not supported: write 3/2. Equivalence is tested by evaluating
// both sides at several values of each variable, so "2(x + 1)" matches "2x + 2" without a computer algebra system.

export function makeMath() {
  function tokens(s) {
    s = String(s).replace(/[−–]/g, '-').replace(/×|·/g, '*').replace(/÷/g, '/').replace(/\s+/g, '');
    var out = [], i = 0;
    while (i < s.length) {
      var c = s[i], m;
      if ((m = /^\d+(\.\d+)?|^\.\d+/.exec(s.slice(i)))) { out.push({ t: 'n', v: parseFloat(m[0]) }); i += m[0].length; }
      else if (/[a-zA-Z]/.test(c)) { out.push({ t: 'v', v: c }); i++; }
      else if ('+-*/^()='.indexOf(c) >= 0) { out.push({ t: c }); i++; }
      else throw new Error('I do not understand "' + c + '".');
    }
    // Implicit multiplication: 2x, 2(x + 1), (x + 1)(x - 1), x(3), xy
    var r = [];
    for (var k = 0; k < out.length; k++) {
      var a = r[r.length - 1], b = out[k];
      if (a && (a.t === 'n' || a.t === 'v' || a.t === ')') && (b.t === 'n' || b.t === 'v' || b.t === '(') && !(a.t === 'n' && b.t === 'n')) r.push({ t: '*' });
      r.push(b);
    }
    return r;
  }
  // Recursive descent: expr = term (+|- term)*, term = unary (*|/ unary)*, unary = -unary | power, power = atom (^ unary)?
  function parse(s) {
    var tk = tokens(s), p = 0;
    function peek() { return tk[p] && tk[p].t; }
    function expr() { var n = term(); while (peek() === '+' || peek() === '-') { var o = tk[p++].t; n = { o: o, a: n, b: term() }; } return n; }
    function term() { var n = unary(); while (peek() === '*' || peek() === '/') { var o = tk[p++].t; n = { o: o, a: n, b: unary() }; } return n; }
    function unary() { if (peek() === '-') { p++; return { o: 'neg', a: unary() }; } if (peek() === '+') { p++; return unary(); } return power(); }
    function power() { var n = atom(); if (peek() === '^') { p++; n = { o: '^', a: n, b: unary() }; } return n; }
    function atom() {
      var t = tk[p++];
      if (!t) throw new Error('Something is missing at the end.');
      if (t.t === 'n') return { n: t.v };
      if (t.t === 'v') return { v: t.v };
      if (t.t === '(') { var n = expr(); if (peek() !== ')') throw new Error('A bracket is not closed.'); p++; return n; }
      throw new Error('Something is missing before "' + t.t + '".');
    }
    if (!tk.length) throw new Error('Type an answer first.');
    var tree = expr();
    if (p < tk.length) throw new Error(tk[p].t === '=' ? 'Use only one = sign.' : 'Check the end of your answer.');
    return tree;
  }
  function ev(n, vars) {
    if (n.n !== undefined) return n.n;
    if (n.v !== undefined) { if (!(n.v in vars)) throw new Error('What is ' + n.v + '?'); return vars[n.v]; }
    var a = ev(n.a, vars);
    if (n.o === 'neg') return -a;
    var b = ev(n.b, vars);
    return n.o === '+' ? a + b : n.o === '-' ? a - b : n.o === '*' ? a * b : n.o === '/' ? a / b : Math.pow(a, b);
  }
  function names(n, set) { set = set || {}; if (n.v !== undefined) set[n.v] = 1; if (n.a) names(n.a, set); if (n.b) names(n.b, set); return set; }
  function evaluate(s, vars) { return ev(parse(s), vars || {}); }
  var close = function (a, b) { return Math.abs(a - b) <= 1e-9 * Math.max(1, Math.abs(a), Math.abs(b)); };
  // Same value for every tested value of each variable (both directions, so extra variables are caught).
  function equivalent(a, b) {
    var ta = parse(a), tb = parse(b), vs = Object.keys(Object.assign(names(ta), names(tb)));
    var pts = [-2.5, -1, 0.5, 1.75, 3, 7.25];
    for (var i = 0; i < pts.length; i++) {
      var vars = {};
      vs.forEach(function (v, j) { vars[v] = pts[(i + j * 2) % pts.length] + j * 0.37; });
      var x = ev(ta, vars), y = ev(tb, vars);
      if (!isFinite(x) || !isFinite(y)) continue;
      if (!close(x, y)) return false;
    }
    return true;
  }
  // "x = 4" -> { name: 'x', value: '4' }; "4" -> { name: null, value: '4' }
  function splitAnswer(s) { var m = /^\s*([a-zA-Z])\s*=\s*(.+)$/.exec(String(s)); return m ? { name: m[1], value: m[2] } : { name: null, value: String(s) }; }
  // An equation's two sides, or null if there is not exactly one "=".
  function sides(s) { var parts = String(s).split('='); return parts.length === 2 && parts[0].trim() && parts[1].trim() ? parts : null; }
  // Does this value make the equation true?
  function satisfies(eq, vars) { var sd = sides(eq); if (!sd) throw new Error('An equation needs one = sign with something on each side.'); return close(evaluate(sd[0], vars), evaluate(sd[1], vars)); }
  return { parse: parse, evaluate: evaluate, equivalent: equivalent, splitAnswer: splitAnswer, sides: sides, satisfies: satisfies, vars: function (s) { return Object.keys(names(parse(s))); } };
}

export const MATH = makeMath();

/** Source to inline in a page or playground: defines `var WPM`. */
export const MATH_JS = `var WPM=(${makeMath.toString()})();`;
