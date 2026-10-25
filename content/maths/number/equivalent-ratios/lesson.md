---
order: 21
unit: ratio
node: AC9M7N08 n2
uses: [AC9M7N04 n1]   # equivalent fractions: multiplying or dividing top and bottom by the same number
title: Equivalent and simplest ratios
summary: "2 : 3 = 4 : 6 = 6 : 9: multiply or divide both numbers by the same number. 12 : 18 simplifies to 2 : 3 by dividing both by 6."
language: maths
voice: { name: af_heart, speed: 1.1 }
connection: screen-ratio   # data/connections/maths.yml
hook: "A recipe for 4 uses 3 cups of flour and 5 of milk. How much milk do you need for 9 cups of flour?"
app:
  command: node "$REPO_ROOT/tools/serve.mjs" "$REPO_ROOT/dist/_playground-board" 8291
  url: http://127.0.0.1:8291/index.html
  readySelector: "#sl-k"
  layout: full
explainPicture: { ref: eq.yml#explain-pic, caption: "Three copies of 2 : 3 give 6 : 9. The groups repeat, so the ratio is the same." }
explainClip:
  query: { code: "@eq.yml#explain", fresh: 1, id: explain }
  caption: "Copies of the same ratio"
  say: "More copies keep the ratio."
  clip:
    - caption: { text: "2 flour to 3 milk.", say: "Two flour to three milk." }
    - wait: 1200
    - click: Make the number of copies bigger
    - expect: { selector: "#gsum", contains: "4 : 6" }
    - caption: { text: "Two copies: 4 : 6.", say: "Two copies makes four to six." }
    - wait: 1000
    - click: Make the number of copies bigger
    - expect: { selector: "#gsum", contains: "6 : 9" }
    - caption: { text: "Three copies: 6 : 9. Same ratio.", say: "Three copies makes six to nine, the same ratio." }
    - wait: 1400
---
Doubling a recipe keeps the taste the same. Two ratios are **equivalent** when one is the other with *both* numbers multiplied (or both divided) by the same number:

$$3 : 5 = 6 : 10 = 9 : 15 \qquad (\times 2,\ \times 3)$$

A ratio is in **simplest form** when no number greater than 1 divides both terms. To simplify, divide both by their highest common factor: $12 : 20$, divide by 4, gives $3 : 5$. It is the same idea as equivalent fractions.

Adding the same number to both terms does **not** keep the ratio: $3 : 5$ is not $5 : 7$.

## Predict: which is the same as 2 : 3?

<figure class="situation" role="img" aria-label="A row of blocks: 2 blue then 3 green, the ratio 2 to 3. Underneath, a dashed row of more blocks marked with question marks: an equivalent ratio."><svg viewBox="0 0 400 130" width="400" style="max-width:100%;height:auto" fill="none" stroke="currentColor" font-family="inherit" font-size="14"><rect x="60" y="20" width="36" height="30" fill="#378ADD" fill-opacity="0.45" stroke="#185FA5"/><rect x="100" y="20" width="36" height="30" fill="#378ADD" fill-opacity="0.45" stroke="#185FA5"/><rect x="140" y="20" width="36" height="30" fill="#1D9E75" fill-opacity="0.45" stroke="#0F6E56"/><rect x="180" y="20" width="36" height="30" fill="#1D9E75" fill-opacity="0.45" stroke="#0F6E56"/><rect x="220" y="20" width="36" height="30" fill="#1D9E75" fill-opacity="0.45" stroke="#0F6E56"/><text x="40" y="41" text-anchor="end" fill="currentColor" stroke="none">2 : 3</text><rect x="60" y="80" width="260" height="30" stroke-dasharray="5 4"/><text x="40" y="101" text-anchor="end" fill="currentColor" stroke="none">? : ?</text><text x="190" y="101" text-anchor="middle" fill="currentColor" stroke="none">the same pattern, with more blocks</text></svg></figure>

```step
stage: predict
insight: "Committing shows whether they multiply both terms (4 : 6) or add the same amount to both (4 : 5)."
check:
  type: predict
  q: "Which ratio is equivalent to $2 : 3$?"
  options: ["4 : 6", "4 : 5", "3 : 4", "5 : 6"]
  actual: "4 : 6. Both terms are doubled. 4 : 5 and 3 : 4 each add the same number to both terms, which changes the ratio."
```

What do you do to 2 and 3 to get 4 and 6?

## Run: copies of a ratio

```step
stage: run
insight: "Copies of the same pattern of blocks keep the ratio; the number of copies is the multiplier."
try: { playground: board, starter: "eq.yml#run", height: 420 }
check: { type: board, text: "Make 3 copies of 2 : 3. What is the new ratio?", when: "k = 3 and p = 6 and q = 9", explain: "Three copies give 6 : 9. Each term is multiplied by 3." }
```

The groups of blocks repeat, so the ratio stays the same.

## Investigate: multiply or divide both

```step
stage: investigate
insight: "Equivalent ratios multiply both terms by the same factor; Ana adds. Simplifying divides both terms by the same factor."
tasks:
  - check:
      type: answer
      q: "Fill in the blank: $2 : 3 = 10 : ?$"
      answer: "15"
      feedback:
        - ["11", "That adds 8 to both terms. Multiply both: 2 → 10 is × 5, so 3 × 5."]
        - ["13", "13 is 3 + 10. 2 → 10 is × 5, so multiply 3 by 5."]
      explain: "2 → 10 is × 5, so 3 → 3 × 5 = 15."
  - check:
      type: bug
      code: "working.txt#ana"
      text: "Ana scales a recipe. Click the line where her working goes wrong."
      answer: 4
      fault: logic
      misconception: ratio-add-not-multiply
      explain: "Line 4: adding 4 to the milk too is wrong. Flour went × 3 (2 to 6), so milk goes × 3: 3 × 3 = 9 cups."
  - check:
      type: answer
      q: "Simplify $12 : 18$. It is $2 : ?$"
      answer: "3"
      feedback:
        - ["9", "Both terms must be divided by the same number. 12 ÷ 6 = 2, so 18 ÷ 6 = 3."]
        - ["6", "12 ÷ 6 = 2 and 18 ÷ 6 = 3."]
      explain: "The highest common factor of 12 and 18 is 6. 12 ÷ 6 = 2 and 18 ÷ 6 = 3."
```

### Fill in the blank

Find what the first term was multiplied by.

### Find the mistake

### Simplify

## Modify: scale and simplify

```step
stage: modify
insight: "Simplifying on the board, simplifying by hand, scaling a recipe and spotting an impostor use the same rule from several angles."
try: { playground: board, starter: "eq.yml#modify", height: 420 }
tasks:
  - check: { type: board, text: "The board shows 4 : 6. Change it to the simplest ratio equal to 4 : 6.", when: "a = 2 and b = 3 and s = 1", explain: "4 : 6, divide both by 2, gives 2 : 3." }
  - check:
      type: answer
      q: "Simplify $20 : 30$. It is $2 : ?$"
      answer: "3"
      feedback:
        - ["5", "Divide both by 10: 20 ÷ 10 = 2 and 30 ÷ 10 = 3."]
      explain: "Divide both terms by 10: 2 : 3."
  - check:
      type: answer
      q: "A recipe uses 2 cups of flour for every 3 cups of milk. How many cups of milk go with 10 cups of flour?"
      answer: "15"
      feedback:
        - ["11", "That adds 8 to the milk too. Flour was multiplied by 5."]
      explain: "× 5: 2 : 3 = 10 : 15."
  - check:
      type: question
      q: "Which of these is NOT equivalent to $6 : 8$?"
      options: ["3 : 4", "12 : 16", "9 : 11", "24 : 32"]
      answer: 2
      feedback: ["3 : 4 is 6 : 8 divided by 2.", "12 : 16 is 6 : 8 times 2.", null, "24 : 32 is 6 : 8 times 4."]
      explain: "6 : 8 → 9 : 11 adds 3 to both terms. 6 → 9 is × 1.5, but 8 × 1.5 = 12, not 11."
```

### Simplest form

### Divide by ten

### Scale the recipe

### Spot the impostor

## Practise: equivalent ratios

```step
stage: practise
insight: "Simplify, scale up, and scale by a factor found from one term; the review keeps part to whole fresh."
tasks:
  - check:
      type: answer
      q: "Simplify $15 : 25$. It is $3 : ?$"
      answer: "5"
      feedback:
        - ["8", "That is 3 + 5. Divide both terms by 5: 25 ÷ 5 = 5."]
      explain: "Divide both by 5: 3 : 5."
  - check:
      type: answer
      q: "Fill in the blank: $5 : 2 = ? : 8$"
      answer: "20"
      feedback:
        - ["11", "That adds 6 to the 5. 2 → 8 is × 4, so 5 × 4."]
      explain: "2 → 8 is × 4, so 5 × 4 = 20."
    smaller:
      check: { type: number, q: "What do you multiply 2 by to get 8?", answer: 4, explain: "2 × 4 = 8. Whatever happens to one side of the ratio has to happen to the other." }
  - check:
      type: answer
      q: "Pink paint is 3 parts red to 1 part white. How many parts of white go with 12 parts of red?"
      answer: "4"
      feedback:
        - ["10", "That adds 9 to the white, because red went up by 9. Red went × 4 (3 to 12), so white is × 4."]
      explain: "3 → 12 is × 4, so white is 1 × 4 = 4."
  - check:
      type: answer
      q: "Review: the ratio of blue to yellow is $3 : 4$. Blue to the whole is $3 : ?$"
      answer: "7"
      feedback:
        - ["4", "That is blue to yellow. Add the parts for the whole."]
      explain: "3 + 4 = 7, so blue to the whole is 3 : 7."
```

### Divide by five

### Multiply

### Pink paint

### Review: part to whole

## Make: big copies of 3 : 5

```step
stage: make
insight: "Finding copies of 3 : 5 with both terms over 20 shows the multiplier is what keeps the ratio, and many copies work."
try: { playground: board, starter: "eq.yml#make", height: 420 }
hint: ["Set a = 3 and b = 5 first.", "Try 7 copies."]
check: { type: board, text: "Make a ratio equal to 3 : 5 with both terms bigger than 20.", when: "a = 3 and b = 5 and p > 20 and q > 20", explain: "7 copies give 21 : 35, 8 copies give 24 : 40." }
```

Then explain how you know 24 : 40 is the same ratio as 3 : 5.

## Make: a screen shape on paper

```step
stage: make
insight: "The ratio of a screen is simplified once, then scaled; the paper task makes them multiply the second term, not add to it."
hint: ["Simplify 1920 : 1080 first. What goes into both?", "How many times bigger is 3200 than the first number of the simplified ratio?"]
check:
  type: reasoning
  paper: true
  q: "A TV screen is 1920 pixels wide and 1080 pixels high. A new display is 3200 pixels wide (the pixel counts are made up for the task). How many pixels high must it be to be exactly the same shape as the TV?"
  steps:
    - ["$1920 : 1080 = 16 : 9$", "divide both terms by their highest common factor, 120"]
    - ["The width goes from $16$ to $3200$, which is $\\times 200$", "3200 ÷ 16 = 200"]
    - ["The height is $9 \\times 200 = 1800$", "whatever happens to one term must happen to the other"]
    - ["$3200 : 1800 = 16 : 9$", "check: divide both terms by 200 and the TV's shape comes back"]
  picks:
    - step: 3
      q: "Why multiply 9 by 200?"
      options:
        - "The width was multiplied by 200, so the height has to be as well"
        - "The width grew by 3184, so the height grows by 3184"
        - "The height is always 9 times the width"
      answer: 0
      feedback: [null, "Adding the same amount to both terms changes the shape. Multiply both by the same number.", "It is 9 parts for every 16 parts of width, not 9 times."]
  answer: "1800"
  feedback:
    - ["3184", "That adds the same number to the height. Multiply instead: both terms go × 200."]
    - ["1920", "That is the TV's width. Scale 9 by the same number as the width."]
  criteria:
    - "I simplified 1920 : 1080 before I scaled."
    - "I found what the first term was multiplied by."
    - "I multiplied the other term by the same number."
    - "I checked that the new screen simplifies to 16 : 9."
  explain: "1920 : 1080 = 16 : 9. From 16 to 3200 is × 200, so the height is 9 × 200 = 1800 pixels. Check: 3200 : 1800 = 16 : 9."
```

Do this one in your book, not on the screen. The pixel counts are made up for the task, but the question is real: a screen, a photo or a video keeps its shape only if both sides scale together. Simplify first, then scale, and type the height.

**Also used in**

- **Screens.** A phone of 2400 by 1080 simplifies to 20 : 9, so it is a different shape from a 16 : 9 TV, and a video shows black bars.
- **Photos.** A print has to keep the picture's ratio, or it must be cropped.
- **Models.** A scale model or a map keeps the ratio between every pair of lengths, and similar shapes follow in Years 8 and 9.
