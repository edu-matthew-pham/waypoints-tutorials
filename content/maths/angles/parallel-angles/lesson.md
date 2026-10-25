---
order: 2
unit: parallel
node: AC9M7M04 n2
title: Finding angles with parallel lines
summary: "When the lines are parallel, corresponding angles are equal, alternate angles are equal, and co-interior angles add to 180°. From one angle you can find all eight, giving a reason for each."
language: maths
voice: { name: af_heart, speed: 1.1 }
hook: "A carpenter measures one angle where a brace crosses two parallel shelves. Without measuring again, she knows every other angle. How?"
connection: periscope
app:
  command: node "$REPO_ROOT/tools/serve.mjs" "$REPO_ROOT/dist/_playground-board" 8170
  url: http://127.0.0.1:8170/index.html
  readySelector: ".pangles"
  layout: full
explainPicture: { ref: lines.yml#explain-pic, caption: "$b$ and $f$ are corresponding, so both are $70^\\circ$. From one angle, every other is $70^\\circ$ or $110^\\circ$." }
explainClip:
  query: { code: "@lines.yml#explain", fresh: 1, id: explain }
  caption: "Equal pairs, and a pair that adds to 180°"
  say: "With parallel lines, one angle gives all the others."
  clip:
    - caption: { text: "Corresponding angles are equal: b = f = 70°.", say: "Corresponding angles are equal: both seventy degrees." }
    - click: "Angle b, 70°"
    - click: "Angle f, 70°"
    - wait: 800
    - caption: { text: "Alternate angles are equal: c = f = 70°.", say: "Alternate angles are equal too." }
    - click: "Angle b, 70°"
    - click: "Angle c, 70°"
    - wait: 800
    - caption: { text: "Co-interior angles add to 180°: c + e = 70° + 110°.", say: "Co-interior angles add to one hundred and eighty degrees." }
    - click: "Angle f, 70°"
    - click: "Angle e, 110°"
    - expect: { selector: "#gsum", contains: "co-interior" }
    - wait: 1200
---
In Angles at parallel lines you named the pairs: corresponding, alternate and co-interior. Now the useful part: when the lines are parallel, each pair has a rule, so one angle tells you the rest.

You also learn to give a **reason** for each angle you find, such as "alternate angles are equal".

## Predict: a co-interior pair

```step
stage: predict
insight: "Committing to e when c = 65° tests whether they apply 'equal' to every pair, the most common slip with co-interior angles."
check:
  type: predict
  q: "Two parallel lines are crossed by a transversal. $c = 65^\\circ$, and $e$ is co-interior with $c$. What is $e$?"
  options:
    - "$115^\\circ$"
    - "$65^\\circ$"
    - "$25^\\circ$"
    - "$295^\\circ$"
  actual: "115°. Co-interior angles are not equal: they add to 180°, so e = 180° − 65° = 115°."
```

<figure class="situation" role="img" aria-label="Two parallel lines, marked with arrows, crossed by a slanted line. c is the angle between the lines on the left of the crossing line at the top crossing, marked 65 degrees. e is the angle between the lines on the left of the crossing line at the bottom crossing, marked with a question mark."><svg viewBox="0 0 340 270" width="340" style="max-width:100%;height:auto" fill="none" stroke="currentColor" font-family="inherit" font-size="14"><line x1="30" y1="80" x2="290" y2="80"/><line x1="30" y1="190" x2="290" y2="190"/><line x1="233.3" y1="30" x2="135.4" y2="240"/><path d="M250 80 l-6 -5 M250 80 l-6 5 M258 80 l-6 -5 M258 80 l-6 5" stroke-width="1.2"/><path d="M250 190 l-6 -5 M250 190 l-6 5 M258 190 l-6 -5 M258 190 l-6 5" stroke-width="1.2"/><path d="M188 80 A22 22 0 0 0 200.7 99.9" stroke-width="1.2"/><text x="178.7" y="101.1" text-anchor="end" fill="currentColor" stroke="none">c = 65°</text><path d="M168 170.1 A22 22 0 0 0 136.7 190" stroke-width="1.2"/><text x="136.6" y="169.7" text-anchor="end" fill="currentColor" stroke="none">e = ?</text></svg></figure>

Corresponding and alternate angles are equal. Is a co-interior pair the same?

## Run: test it

```step
stage: run
insight: "Setting c to 65° and picking c and e shows the co-interior pair adding to 180°, not equal; turning the line shows it holds for every angle."
try: { playground: board, starter: "lines.yml#run", height: 560 }
check: { type: board, text: "Turn the crossing line until $c = 65^\\circ$, then pick $c$ and $e$. Was your prediction right?", when: "c = 65 and r = 3" }
```

Then turn the crossing line again. Do $c$ and $e$ always add to $180^\circ$?

## Investigate: from one angle to all eight

```step
stage: investigate
insight: "Each angle follows from a known one by a named rule: corresponding or alternate (equal), co-interior or a straight line (add to 180°), vertically opposite (equal). Leo's mistake makes co-interior angles equal."
tasks:
  - picture: { ref: lines.yml#given-b, caption: "Two parallel lines. $b = 72^\\circ$." }
    check:
      type: answer
      q: "Find $f$."
      answer: "72"
      feedback:
        - ["108", "b and f are in the same place at each crossing: corresponding, so equal."]
      explain: "b and f are corresponding angles, so f = 72°."
  - check:
      type: bug
      code: "working.txt#leo"
      text: "Leo finds $f$ when $d = 110^\\circ$. Click the line where his working goes wrong."
      answer: 4
      fault: logic
      misconception: co-interior-equal
      explain: "Line 4: co-interior angles add to 180°, so f = 180° − 110° = 70°. Only corresponding and alternate angles are equal."
  - picture: { ref: lines.yml#given-d, caption: "Two parallel lines. $d = 110^\\circ$." }
    check:
      type: answer
      q: "Find $f$ correctly."
      answer: "70"
      feedback:
        - ["110", "d and f are co-interior: they add to 180°."]
      explain: "Co-interior angles add to 180°: f = 180° − 110° = 70°."
```

### Equal pairs

Here is how one angle gives all eight, with a reason for each.

```worked
b = 70^\circ :: Given.
c = 70^\circ :: Vertically opposite $b$: equal.
a = 110^\circ :: On a straight line with $b$: $180 - 70$.
f = 70^\circ :: Corresponding to $b$: equal.
e = 110^\circ :: Co-interior with $c$: they add to $180^\circ$.
g = 70^\circ,\; h = 110^\circ :: Corresponding to $c$ and to $d$ (or vertically opposite $f$ and $e$).
```

Then find $f$ in the picture.

### Find the mistake

Read Leo's working one line at a time. Which rule did he use?

### Co-interior

## Modify: one change at a time

```step
stage: modify
insight: "One change at a time: alternate, co-interior from the lower crossing, two steps, the board to check a chain, then the edge case where the lines are not parallel."
try: { playground: board, starter: "lines.yml#make", height: 560 }
tasks:
  - picture: { ref: lines.yml#given-c, caption: "Two parallel lines. $c = 50^\\circ$." }
    check:
      type: answer
      q: "Alternate: find $f$."
      answer: "50"
      feedback:
        - ["130", "c and f are alternate: equal."]
      explain: "Alternate angles are equal: f = 50°."
  - picture: { ref: lines.yml#given-e, caption: "Two parallel lines. $e = 125^\\circ$." }
    check:
      type: answer
      q: "Co-interior, starting at the bottom: find $c$."
      answer: "55"
      feedback:
        - ["125", "c and e are co-interior: they add to 180°."]
      explain: "Co-interior angles add to 180°: c = 180° − 125° = 55°."
  - picture: { ref: lines.yml#given-a, caption: "Two parallel lines. $a = 140^\\circ$." }
    hint: ["a and e are corresponding.", "Then e and g are on a straight line."]
    check:
      type: answer
      q: "Two steps: find $g$."
      answer: "40"
      feedback:
        - ["140", "g is not in the same place as a. Find e first, then use a straight line."]
      explain: "e = 140° (corresponding to a), then g = 180° − 140° = 40° (a straight line). Or: b = 40° (a straight line), f = 40° (corresponding), g = 40° (vertically opposite)."
    smaller:
      check:
        type: question
        q: "Which angle is the same size as $a$, and why?"
        options: ["$e$: it's in the same place at the other crossing", "$c$: it's just below $a$ at the same crossing", "$f$: it's next to $e$"]
        answer: 0
        feedback: [null, "c and a are side by side on the crossing line. Together they make a straight line.", "f is next to e, so it's the other size."]
        explain: "a and e are corresponding, so e is 140° too. Then g is one more step from e."
  - starter: "lines.yml#make"
    hint: ["h = 180° − t, so t = 50°.", "b is corresponding to f, and f is on a straight line with h."]
    check: { type: board, text: "Turn the crossing line until $h = 130^\\circ$. Work out $b$ first, then pick $h$ and $b$ to check.", when: "h = 130 and u = 2 and v = 8", explain: "f = 50° (a straight line with h), so b = 50° (corresponding)." }
  - picture: { ref: lines.yml#tilt-pic, caption: "The lower line is tilted: the lines are not parallel. $c = 60^\\circ$." }
    check:
      type: question
      q: "Edge case: can you use \"alternate angles are equal\" to find $f$ here?"
      options: ["No: the lines are not parallel", "Yes: c and f are alternate", "Yes, but only for co-interior angles"]
      answer: 0
      feedback: [null, "They are in alternate places, but the rule needs parallel lines. On the board, f was 45°.", "No pair rule works without parallel lines."]
      explain: "The rules hold only for parallel lines. Look for the arrow marks (>>) before you use them."
```

### Alternate

Each task changes one thing. Give the reason as well as the size.

### Co-interior from below

### Two steps

### Check a chain

### Not parallel

## Practise: angle and reason

```step
stage: practise
insight: "Finding angles with each rule and naming the reason, mixed, with the co-interior slip planted again; the review keeps the pair names fresh."
tasks:
  - picture: { ref: lines.yml#given-g, caption: "Two parallel lines. $g = 80^\\circ$." }
    check:
      type: answer
      q: "Find $c$."
      answer: "80"
      feedback:
        - ["100", "c and g are in the same place at each crossing: corresponding, so equal."]
      explain: "Corresponding angles are equal: c = 80°."
  - picture: { ref: lines.yml#given-f, caption: "Two parallel lines. $f = 62^\\circ$." }
    check:
      type: answer
      q: "Find $d$."
      answer: "118"
      feedback:
        - ["62", "d and f are co-interior: they add to 180°."]
      explain: "Co-interior angles add to 180°: d = 180° − 62° = 118°."
  - check:
      type: question
      q: "$e = 120^\\circ$ and $c = 60^\\circ$. Which reason links them?"
      options: ["Co-interior angles add to 180°", "Alternate angles are equal", "Corresponding angles are equal"]
      answer: 0
      feedback: [null, "They are not equal.", "They are not equal."]
      explain: "c and e are between the lines on the same side, and 60° + 120° = 180°."
  - picture: { ref: lines.yml#letters, caption: "The angles $a$ to $h$." }
    check:
      type: question
      q: "Review: which pair is alternate?"
      options: ["$d$ and $e$", "$d$ and $f$", "$d$ and $h$", "$a$ and $d$"]
      answer: 0
      feedback: [null, "Same side of the crossing line: co-interior.", "Same place at each crossing: corresponding.", "One crossing: vertically opposite."]
      explain: "d and e: between the lines, on opposite sides."
```

### Corresponding

### Co-interior

### The reason

### Review: names

## Make: equal co-interior angles

```step
stage: make
insight: "Making a co-interior pair equal reverses the rule: two angles that add to 180° are equal only when both are 90°."
try: { playground: board, starter: "lines.yml#make", height: 560 }
hint: ["c and e add to 180°. If they are equal, what is each?", "Turn until c = 90°."]
check: { type: board, text: "Turn the crossing line so that the co-interior angles $c$ and $e$ are equal.", when: "c = e", explain: "They add to 180°, so equal means 90° each: the crossing line is perpendicular to the parallel lines." }
```

Then: can alternate angles ever add to $180^\circ$? When?

## Make: the mirrors, on paper

```step
stage: make
insight: "The two mirrors of a periscope are parallel and the ray between them is the transversal, so the angles inside on the same side are co-interior."
hint: ["Sketch the two mirrors and the ray between them.", "Which two angles are inside, on the same side of the ray?"]
check:
  type: reasoning
  paper: true
  q: "In a tilted periscope, two parallel mirrors are crossed by the light ray between them. At the top mirror, the angle inside (between the mirrors) on the left of the ray is 50°. What is the angle inside, on the left of the ray, at the bottom mirror?"
  steps:
    - ["Sketch the two parallel mirrors with the ray crossing both, and mark the 50° inside on the left at the top", "the 50° is made up for the task"]
    - ["The two angles inside on the same side of the ray are co-interior, so they add to 180°", "the mirrors are parallel"]
    - ["180° − 50° = 130°", "take the 50° from the total"]
  picks:
    - step: 2
      q: "Why do the two angles add to 180°?"
      options:
        - "They are co-interior angles between parallel lines"
        - "They are alternate angles, so they are equal"
        - "They are corresponding angles, so they are equal"
      answer: 0
      feedback: [null, "Alternate angles are on opposite sides of the ray, and are equal. These are on the same side.", "Corresponding angles are in the same place at each crossing. These are both inside the lines."]
  answer: "130"
  tolerance: 0
  feedback:
    - ["50", "That would be an alternate pair, on opposite sides of the ray. These are on the same side."]
    - ["40", "That is 90° − 50°. The two angles together make 180°."]
  criteria:
    - "I sketched the mirrors and the ray, and marked both angles."
    - "I named the pair as co-interior and gave the reason: the mirrors are parallel."
    - "I checked that my two angles add to 180°."
  explain: "The angles inside on the same side are co-interior, so they add to 180°: 180° − 50° = 130°."
```

Do this one in your book, not on the screen. The 50° is made up for the task: a real periscope sets its mirrors at 45°. Sketch it, name the pair, then type the angle.

**Also used in**

- **Carpentry.** A stair stringer is cut so every tread is parallel, and the same angle is marked on each: [Reasoning with angles](../angle-reasoning/).
- **Light.** Light leaves a mirror at the angle it arrived, which a periscope uses twice.
