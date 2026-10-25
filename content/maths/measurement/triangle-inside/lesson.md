---
order: 39
unit: trig10
node: AC9M10M03 n3
uses: [AC9M10M03 n1, AC9M8M06 n1]
assumes: [AC9M8M06 n1, AC9M8M06 n2, AC9M9M03 n2]
connection: box-diagonal
title: The triangle inside
summary: "To find a length inside a box, find a right-angled triangle in it: the floor first, then the one standing up on the floor diagonal. Pythagoras twice, or trigonometry for an angle."
language: maths
voice: { name: af_heart, speed: 1.1 }
hook: "The umbrella is longer than any side of the suitcase. Will it go in?"
app:
  command: node "$REPO_ROOT/tools/serve.mjs" "$REPO_ROOT/dist/_playground-board" 8396
  url: http://127.0.0.1:8396/index.html
  readySelector: "#board"
  layout: full
---
A suitcase is 80 cm long, 50 cm wide and 30 cm deep inside (made up for the task). You have a 120 cm umbrella. Will it fit in the suitcase? Have a guess before you read on, and we'll come back to it at the end.

<figure class="situation" role="img" aria-label="A box drawn in 3D, 80 centimetres long, 50 wide and 30 high. A dashed line runs from a bottom corner at the back to the opposite top corner at the front, labelled with a question mark."><svg viewBox="0 0 360 200" width="360" style="max-width:100%;height:auto" fill="none" stroke="currentColor" font-family="inherit" font-size="13"><path d="M60 150 L220 150 L290 110 L130 110 Z" stroke-width="1.5" stroke-dasharray="4 3"/><path d="M60 150 L220 150 L220 90 L60 90 Z" stroke-width="2" fill="#888780" fill-opacity="0.12"/><path d="M220 150 L290 110 L290 50 L220 90" stroke-width="2"/><path d="M60 90 L130 50 L290 50 L220 90" stroke-width="2"/><path d="M60 150 L60 90 M130 110 L130 50" stroke-width="1.5" stroke-dasharray="4 3"/><line x1="130" y1="110" x2="220" y2="90" stroke="#D85A30" stroke-width="2.5"/><text x="130" y="170" fill="currentColor" stroke="none">80 cm</text><text x="258" y="145" fill="currentColor" stroke="none">50 cm</text><text x="20" y="125" fill="currentColor" stroke="none">30 cm</text><text x="150" y="86" fill="currentColor" stroke="none" font-size="16">?</text><text x="250" y="195" fill="currentColor" stroke="none" font-size="11" opacity="0.8">Not to scale.</text></svg></figure>

## Predict: will it fit

```step
stage: predict
insight: "Committing to yes or no shows who thinks the longest line in a box is its longest side, and who knows a corner-to-corner line can be longer."
check:
  type: predict
  q: "The umbrella is 120 cm long. The suitcase is 80 cm long, 50 cm wide and 30 cm deep inside. Will the umbrella fit?"
  options:
    - "No: even corner to corner it's too short"
    - "Yes: it fits corner to corner"
    - "No: it's longer than every side, so it can't"
    - "Yes: 80 + 50 + 30 is more than 120"
  actual: "No. The longest line inside a box runs from one bottom corner to the opposite top corner. That's longer than any side, but here it's still shorter than 120 cm. We'll find out how much."
```

## Run: the line corner to corner

```step
stage: run
insight: "The board draws two right-angled triangles in the box: one flat on the floor, and one standing up on the floor diagonal. The long line is the longest side of the second."
try: { playground: board, starter: "box.yml#run", height: 600 }
check: { type: board, text: "Make the box $2$ by $3$ by $6$. Read the floor diagonal and the space diagonal.", when: "x = 2 and y = 3 and z = 6" }
```

Slide the sides. The grey triangle lies on the floor. The red triangle stands up on the floor diagonal. Which sides of each are known?

## Investigate: two triangles

```step
stage: investigate
insight: "The space diagonal is the longest side of a triangle whose shorter sides are the floor diagonal and the height. Sam adds those two sides instead of using Pythagoras again, and reaches the wrong decision."
tasks:
  - check:
      type: reasoning
      paper: true
      q: "A fish tank is 90 cm long, 40 cm wide and 50 cm high (made up for the task). What is the longest straight rod that fits inside? (1 decimal place)"
      steps:
        - ["Floor first: $\\sqrt{90^2 + 40^2} = \\sqrt{9700}$", "draw the triangle on the floor and find its hypotenuse"]
        - ["Then up: $\\sqrt{9700 + 50^2} = \\sqrt{12\\,200}$", "the floor diagonal and the height are the shorter sides of the second triangle"]
        - ["$\\sqrt{12\\,200} = 110.5$ cm", "work it out"]
      answer: "110.5"
      answerLabel: "Longest rod (cm)"
      tolerance: 0.2
      feedback:
        - ["180", "That adds the three sides. The rod takes a shortcut across the tank."]
        - ["103", "That leaves out the 40 cm width. The floor diagonal uses the length and the width, then the height goes in the second triangle."]
      criteria:
        - "I found the floor diagonal first."
        - "I used the floor diagonal and the height as the two shorter sides of the second triangle."
        - "My answer is longer than every side of the tank."
      explain: "Floor diagonal √(90² + 40²) = √9700. Then √(9700 + 50²) = √12 200 = 110.5 cm."
  - check:
      type: bug
      code: "working.txt#sam"
      text: "Sam checks whether the umbrella fits. Click the line where his working goes wrong."
      answer: 3
      fault: logic
      misconception: diagonal-legs-added
      explain: "Line 3: the floor diagonal and the height are the two shorter sides of a right-angled triangle, so Pythagoras again: √(94.3² + 30²) = 99.0 cm. Adding gives 124.3 cm, which is longer than the real diagonal, and makes the umbrella look as if it fits."
  - check:
      type: question
      q: "In the second triangle, the one standing up in the box, which two sides are the shorter sides?"
      options:
        - "The floor diagonal and the height"
        - "The length and the width"
        - "The length and the height"
        - "The floor diagonal and the width"
      answer: 0
      feedback:
        - null
        - "The length and the width are the shorter sides of the first triangle, the one on the floor."
        - "The length and the height don't meet at a right angle with the diagonal as the hypotenuse."
        - "The width is on the floor, so it isn't part of the standing triangle."
      explain: "The standing triangle has the floor diagonal along the bottom and the height up the side. The space diagonal is its hypotenuse."
```

### Two steps

Here is one with a room.

```worked
\text{floor} = \sqrt{6^2 + 4^2} = \sqrt{52} :: The first triangle lies flat on the floor. Its shorter sides are the length and the width.
\text{pole} = \sqrt{52 + 3^2} = \sqrt{61} :: The second triangle stands up. Its shorter sides are the floor diagonal and the height.
\sqrt{61} = 7.8 :: The longest pole that fits is about 7.8 m.
```

A storeroom is 6 m long, 4 m wide and 3 m high. The longest straight pole that fits from a floor corner to the opposite ceiling corner is about 7.8 m.

Now try one on paper: a fish tank, 90 cm by 40 cm by 50 cm. Draw the floor triangle first.

### Find the mistake

Read Sam's working. What kind of triangle is the second one?

### The standing triangle

## Modify: change the box

```step
stage: modify
insight: "Changing the box: a different suitcase, the angle the line makes with the floor (trigonometry in the second triangle), and a cube."
try: { playground: board, starter: "box.yml#vary", height: 600 }
tasks:
  - hint: ["Floor diagonal first.", "70² + 50² + 40² = 9000."]
    check: { type: number, q: "A box is $70$ cm by $50$ cm by $40$ cm. How long is the longest straight line inside it? (1 decimal place)", answer: 94.9, tolerance: 0.15, explain: "70² + 50² = 7400, plus 40² = 9000, and √9000 = 94.9 cm." }
  - hint: ["Draw the standing triangle.", "The height, 30 cm, is opposite the angle at the floor."]
    check: { type: number, q: "In the 80 by 50 by 30 suitcase, the floor diagonal is $94.3$ cm. At what angle to the floor does the longest line slope? (1 decimal place)", answer: 17.6, tolerance: 0.15, feedback: [["72.4", "That's the angle at the top. The angle to the floor has the 30 cm height opposite it."]], explain: "In the standing triangle the height 30 is opposite the angle at the floor and the floor diagonal 94.3 is adjacent: tan t = 30 ÷ 94.3, so t = 17.6°." }
    smaller:
      check: { type: "number", q: "In the standing triangle, what is opposite ÷ adjacent for the angle at the floor? (3 decimal places)", answer: 0.318, tolerance: 0.002, explain: "The height 30 is opposite and the floor diagonal 94.3 is adjacent: 30 ÷ 94.3 = 0.318." }
  - hint: ["A cube has all three sides equal.", "10² + 10² + 10² = 300."]
    check: { type: number, q: "Edge case: a cube has sides of $10$ cm. How long is its longest straight line? (1 decimal place)", answer: 17.3, tolerance: 0.1, explain: "10² + 10² + 10² = 300, and √300 = 17.3 cm: about 1.73 times a side." }
```

### Another box

### The slope of the line

### A cube

## Practise: lines inside boxes

```step
stage: practise
insight: "Floor first, then up, for rooms and boxes, and a bearing review."
tasks:
  - check:
      type: number
      q: "A room is $5$ m long, $4$ m wide and $3$ m high. How far is it from a floor corner to the opposite ceiling corner? (1 decimal place)"
      answer: 7.1
      tolerance: 0.05
      explain: "5² + 4² + 3² = 50, and √50 = 7.07, about 7.1 m."
    smaller:
      check: { type: "number", q: "First, what is the floor diagonal squared? $5^2 + 4^2$", answer: 41, explain: "25 + 16 = 41." }
  - check:
      type: number
      q: "A box is $12$ cm by $9$ cm by $8$ cm. How long is its longest straight line, in cm?"
      answer: 17
      explain: "12² + 9² = 225, so the floor diagonal is 15. Then 15² + 8² = 289, and √289 = 17 cm."
  - check:
      type: question
      q: "Review: which bearing is due south?"
      options: ["180°", "090°", "270°", "000°"]
      answer: 0
      feedback: [null, "090° is due east.", "270° is due west.", "000° is due north."]
      explain: "Bearings go clockwise from north: 090° east, 180° south, 270° west."
```

### The room

### The box

### Review

Bearings, from the last lesson.

## Make: the umbrella

```step
stage: make
insight: "Back to the suitcase: the longest line, then the decision, and what the number leaves out."
tasks:
  - hint: ["Floor diagonal, then the standing triangle.", "80² + 50² + 30²."]
    check:
      type: reasoning
      paper: true
      q: "The suitcase is 80 cm by 50 cm by 30 cm inside. How long is the longest straight line inside it? (1 decimal place. The sizes are made up for the task.)"
      steps:
        - ["Floor first: $\\sqrt{80^2 + 50^2} = \\sqrt{8900}$", "draw the triangle on the floor"]
        - ["Then up: $\\sqrt{8900 + 30^2} = \\sqrt{9800}$", "the floor diagonal and the height are the shorter sides of the standing triangle"]
        - ["$\\sqrt{9800} = 99.0$ cm", "work it out"]
      answer: "99.0"
      answerLabel: "Longest line (cm)"
      tolerance: 0.1
      feedback:
        - ["160", "That adds the sides. The line takes a shortcut across the box."]
        - ["124.3", "That adds 94.3 and 30. The second triangle needs Pythagoras too."]
      criteria:
        - "I found the floor diagonal first."
        - "I used the floor diagonal and the height in the second triangle."
        - "My answer is longer than the longest side, 80, but not as long as 80 + 50 + 30."
      explain: "√(80² + 50²) = √8900, then √(8900 + 30²) = √9800 = 99.0 cm."
  - check:
      type: question
      q: "The longest line inside the suitcase is 99 cm. What can you say about the 120 cm umbrella?"
      options:
        - "It doesn't fit, and it wouldn't even if the suitcase were completely empty"
        - "It fits, because 99 cm is nearly 120 cm"
        - "It fits if you bend it"
        - "It doesn't fit, but only because of the clothes"
      answer: 0
      feedback:
        - null
        - "99 cm is less than 120 cm. Nearly doesn't fit."
        - "A rigid umbrella can't be bent, and it needs to fit with its thickness as well."
        - "The empty suitcase has a 99 cm longest line. Clothes only make it worse."
      explain: "No straight line inside the suitcase is longer than 99 cm, so a rigid 120 cm umbrella can't fit. (A real umbrella also has some thickness, which only makes it harder.)"
```

### The longest line

Back to the suitcase. Work this out on paper first, then type your answer.

### The decision

**Also used in**

- **Packing and building.** The longest rod in a box, a cable across a room, a pole in a tent: each is a space diagonal.
- **Looking up, looking down.** The slope of the line in the standing triangle is an angle of elevation, from the floor corner.
