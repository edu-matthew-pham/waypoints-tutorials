---
order: 9
unit: pythagoras
node: AC9M8M06 n1
uses: [AC9M7N01 n2, AC9M7SP02 n1]   # squares and square roots; right-angled triangles
title: Pythagoras' theorem
summary: "Draw a square on each side of a right-angled triangle. The two smaller squares together have exactly the same area as the biggest: a² + b² = c², where c is the hypotenuse, the side opposite the right angle."
language: maths
voice: { name: af_heart, speed: 1.1 }
hook: "Every lawn has one: the worn path straight across the corner, where people skip the footpath. How much does it save?"
connection: grass-shortcut   # data/connections/maths.yml (opening situation and Make; documentation only)
app:
  command: node "$REPO_ROOT/tools/serve.mjs" "$REPO_ROOT/dist/_playground-board" 8284
  url: http://127.0.0.1:8284/index.html
  readySelector: "#sl-b"
  layout: full
explainPicture: { ref: tri.yml#explain-pic, caption: "Squares on the sides of a 3-4-5 right-angled triangle: $9 + 16 = 25$. The two smaller squares exactly make the biggest." }
explainClip:
  query: { code: "@tri.yml#explain", fresh: 1, id: explain }
  caption: "Squares on the sides"
  say: "Draw a square on each side."
  clip:
    - caption: { text: "Sides 3 and 3 at the right angle: 9 + 9 = 18.", say: "Sides three and three: nine and nine make eighteen." }
    - wait: 1200
    - caption: { text: "Make b = 4: 9 + 16 = 25, the big square exactly.", say: "Make one side four. Nine and sixteen make twenty-five." }
    - click: Make side b longer
    - expect: { selector: "#gsum", contains: "= 5²" }
    - wait: 600
    - caption: { text: "a² + b² = c², so c = √25 = 5.", say: "So the long side is the square root: five." }
    - wait: 1200
---
The footpath round this corner of the lawn is 24 m one way and 10 m the other, so 34 m in all. People cut straight across the grass instead. How long is the shortcut, and how much does it save? Have a guess, and we'll come back to it at the end.

<figure class="situation" role="img" aria-label="A rectangular lawn seen from above. A footpath runs along two edges, 24 m and 10 m, and a worn dashed path cuts straight across the corner between the same two points, marked with a question mark."><svg viewBox="0 0 520 230" width="520" style="max-width:100%;height:auto" fill="none" stroke="currentColor" font-family="inherit" font-size="14"><rect x="60" y="30" width="360" height="150" fill="#97C459" fill-opacity="0.25" stroke="none"/><path d="M60 30 L60 180 L420 180" stroke-width="6" stroke-opacity="0.35"/><line x1="60" y1="30" x2="420" y2="180" stroke="#BA7517" stroke-width="2" stroke-dasharray="7 5"/><circle cx="60" cy="30" r="5" fill="#D85A30" stroke="none"/><circle cx="420" cy="180" r="5" fill="#D85A30" stroke="none"/><text x="48" y="110" text-anchor="end" fill="currentColor" stroke="none">10 m</text><text x="240" y="202" text-anchor="middle" fill="currentColor" stroke="none">24 m</text><text x="250" y="96" text-anchor="middle" fill="currentColor" stroke="none" font-size="18">?</text><text x="436" y="110" fill="currentColor" stroke="none">the shortcut</text><text x="60" y="224" fill="currentColor" stroke="none">Footpath round the corner: 24 + 10 = 34 m. Across the grass: ?</text></svg></figure>

The two footpaths and the shortcut make a right-angled triangle, and the shortcut is its longest side. This lesson is about how that side is linked to the other two.

In a right-angled triangle, the longest side is opposite the right angle. It is called the **hypotenuse**, $c$. The two sides that meet at the right angle are $a$ and $b$.

**Pythagoras' theorem** says that the squares on the two shorter sides add up to the square on the hypotenuse:

$$a^2 + b^2 = c^2$$

To find the hypotenuse: square the two shorter sides, add, then take the square root.

## Predict: sides 3 and 4

```step
stage: predict
insight: "Committing to a hypotenuse for legs 3 and 4 shows whether they add the sides (7), add the squares without rooting (25), or expect 5."
check:
  type: predict
  q: "A right-angled triangle has sides 3 cm and 4 cm at the right angle. How long is the hypotenuse?"
  options: ["5 cm", "7 cm", "25 cm", "12 cm"]
  actual: "5 cm. 3² + 4² = 9 + 16 = 25 = 5². Adding the sides (7) is too long: the straight route across is shorter than going round the corner."
```

Is the hypotenuse shorter or longer than going round the corner, 3 + 4?

## Run: squares on the sides

```step
stage: run
insight: "Building a 3-4-5 triangle with squares on its sides shows the two small squares' areas add exactly to the big one."
try: { playground: board, starter: "tri.yml#run", height: 620 }
check: { type: board, text: "Make a = 3 and b = 4. Do the two smaller squares add up to the biggest? Was your prediction right?", when: "a = 3 and b = 4", explain: "9 + 16 = 25: the biggest square, so c = 5 cm." }
```

Count the unit squares in each square, or read the numbers inside them.

## Investigate: square, add, root

```step
stage: investigate
insight: "Square both shorter sides, add, then root; Leah adds the sides, which is always too long. The hypotenuse is opposite the right angle."
tasks:
  - check:
      type: answer
      q: "A right-angled triangle has sides 12 cm and 16 cm at the right angle. How long is the hypotenuse, in cm?"
      answer: "20"
      feedback:
        - ["28", "That adds the sides. Square them first: 144 + 256."]
        - ["400", "That is c². Take the square root."]
      explain: "12² + 16² = 144 + 256 = 400, so c = √400 = 20 cm."
  - check:
      type: bug
      code: "working.txt#leah"
      text: "Leah finds the hypotenuse. Click the line where her method goes wrong."
      answer: 2
      fault: logic
      misconception: pyth-no-squares
      explain: "Line 2: it is the squares that add: 36 + 64 = 100, so c = 10 cm. 14 cm would be longer than going round the corner."
  - check:
      type: question
      q: "Which side of a right-angled triangle is the hypotenuse?"
      options: ["The side opposite the right angle, the longest", "The side along the bottom", "Either side at the right angle", "The shortest side"]
      answer: 0
      feedback: [null, "Triangles can be turned any way: it depends on the right angle, not the bottom.", "Those are a and b.", "The hypotenuse is always the longest."]
      explain: "The hypotenuse faces the right angle and is always the longest side."
```

### Square, add, root

Here is the method.

```worked
c \text{ is opposite the right angle} :: Find the hypotenuse first.
a^2 + b^2 = 6^2 + 8^2 = 36 + 64 = 100 :: Square the two shorter sides and add.
c = \sqrt{100} = 10 \text{ cm} :: Take the square root.
6 < 10 < 6 + 8 :: Check: longer than each shorter side, shorter than both together.
```

Now try one: sides 12 cm and 16 cm.

### Find the mistake

Read Leah's working. Which is shorter: across or round the corner?

### The hypotenuse

## Modify: one change at a time

```step
stage: modify
insight: "One change at a time: another whole-number triangle on the board, a new pair of sides, a hypotenuse that is not a whole number, then why the hypotenuse is always the longest."
try: { playground: board, starter: "tri.yml#twelve", height: 620 }
tasks:
  - starter: "tri.yml#twelve"
    hint: "Set a = 5 and b = 12, then read the biggest square and c."
    check: { type: board, text: "Make a right-angled triangle with sides 5 and 12 at the right angle. How long is the hypotenuse?", when: "a = 5 and b = 12", explain: "25 + 144 = 169 = 13²: c = 13." }
  - check:
      type: answer
      q: "The sides at the right angle are 9 m and 12 m. How long is the hypotenuse, in m?"
      answer: "15"
      feedback:
        - ["21", "That adds the sides."]
        - ["225", "That is c². Take the square root."]
      explain: "81 + 144 = 225, √225 = 15 m."
  - check:
      type: number
      q: "The sides at the right angle are both 1 m. How long is the hypotenuse, in m, to two decimal places?"
      answer: 1.41
      tolerance: 0.005
      explain: "1 + 1 = 2, so c = √2 ≈ 1.41 m: between 1 and 2, as it must be."
  - check:
      type: question
      q: "Edge case: why is the hypotenuse always the longest side?"
      options: ["c² = a² + b² is bigger than a² and bigger than b²", "It is always drawn longest", "Because it is at the bottom"]
      answer: 0
      feedback: [null, "Drawings can mislead; the theorem decides.", "The hypotenuse can point any way."]
      explain: "c² is a² plus something, so c² > a², and c > a; the same for b."
```

### 5 and 12

Each task changes one thing.

### 9 and 12

### Not a whole number

### Always the longest

## Practise: the hypotenuse

```step
stage: practise
insight: "Whole-number and decimal hypotenuses and a real context, mixed; adding the sides is the planted slip; the review keeps square roots fresh."
tasks:
  - check:
      type: answer
      q: "The sides at the right angle are 8 cm and 15 cm. Hypotenuse, in cm?"
      answer: "17"
      feedback:
        - ["23", "That adds the sides."]
        - ["289", "That is c²: take the square root."]
      explain: "64 + 225 = 289, √289 = 17 cm."
  - check:
      type: number
      q: "The sides at the right angle are 2 cm and 3 cm. Hypotenuse, in cm, to two decimal places?"
      answer: 3.61
      tolerance: 0.005
      explain: "4 + 9 = 13, √13 ≈ 3.61 cm."
  - check:
      type: answer
      q: "A park is a rectangle 30 m by 40 m. How long is the path straight across, corner to corner, in m?"
      answer: "50"
      feedback:
        - ["70", "That is walking round two sides."]
      explain: "The diagonal is a hypotenuse: 900 + 1600 = 2500, √2500 = 50 m."
  - check:
      type: answer
      q: "Review: work out $\\sqrt{144}$."
      answer: "12"
      feedback:
        - ["72", "That is half of 144."]
      explain: "12 × 12 = 144."
```

### 8 and 15

### A decimal

### A shortcut across

### Review: roots

## Make: back to the shortcut

```step
stage: make
insight: "Coming back to the opening question: the shortcut is the hypotenuse of the two footpaths, and the saving is what makes the answer mean something."
tasks:
  - hint: ["The two footpaths are the sides at the right angle.", "24² + 10² = 576 + 100."]
    check:
      type: answer
      q: "The footpaths round the corner are 24 m and 10 m. How long is the shortcut straight across the grass, in m?"
      answer: "26"
      feedback:
        - ["34", "That is the footpath round the corner. The shortcut is shorter: square, add, then take the square root."]
        - ["676", "That is the square on the shortcut. Take the square root."]
        - ["14", "That subtracts the sides. The squares add: 576 + 100."]
      explain: "24² + 10² = 576 + 100 = 676, and √676 = 26 m."
  - check:
      type: answer
      q: "How much shorter is the shortcut than the footpath, in m?"
      answer: "8"
      feedback:
        - ["26", "That is the shortcut itself. Compare it with the 34 m round the corner."]
        - ["10", "That is one footpath. Take the shortcut from the whole way round, 34 m."]
      explain: "34 − 26 = 8 m. On a 34 m walk that is about a quarter saved, which is why the path gets worn."
```

### The shortcut

Back to the lawn from the start. Sketch the triangle and mark the right angle before you work anything out.

### What it saves

Stretch: on a board, make a right-angled triangle with whole-number sides whose longest side is exactly 10. Is it a new triangle, or 3-4-5 made bigger?

**Also used in**

- **Screen sizes.** A TV or phone is sold by its diagonal, the longest side of the screen. Will it fit the cabinet?
- **Ladders.** How high up a wall a ladder reaches, when you know its length and how far out its foot is (next lesson).
- **Square corners.** Builders check a corner with a 3-4-5 triangle of string: the theorem run backwards (two lessons on).
