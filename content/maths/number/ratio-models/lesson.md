---
order: 24
unit: modelling
node: [AC9M7M06 n1, AC9M7M06 n2]
uses: [AC9M7N08 n3, AC9M7N09 n3]   # sharing a total in a ratio; modelling with money
title: Modelling with ratios
summary: "Mixes, scale drawings and models: say what is known and unknown, choose the ratio, solve, and answer in the units of the situation."
language: maths
connection: recipe-scaling   # data/connections/maths.yml
voice: { name: af_heart, speed: 1.1 }
hook: "A gardener mixes potting soil as 2 parts compost to 3 parts sand. She needs 40 litres of mix. How much of each does she need to buy?"
app:
  command: node "$REPO_ROOT/tools/serve.mjs" "$REPO_ROOT/dist/_playground-board" 8293
  url: http://127.0.0.1:8293/index.html
  readySelector: "#sl-total"
  layout: full
explainPicture: { ref: rm.yml#explain-pic, caption: "20 L of mortar in the ratio 1 : 3: 4 equal parts of 5 L. Cement 5 L, sand 15 L." }
explainClip:
  query: { code: "@rm.yml#explain", fresh: 1, id: explain }
  caption: "From a problem to a ratio"
  say: "Model it, then solve it."
  clip:
    - caption: { text: "Known: ratio 1 : 3. Unknown: litres of each.", say: "Say what you know and what you need." }
    - wait: 1400
    - click: Make the total bigger
    - expect: { selector: "#gsum", contains: "8 L ÷ 4 = 2 L" }
    - caption: { text: "4 equal parts: 8 L ÷ 4 = 2 L a part.", say: "Cut the total into four equal parts." }
    - wait: 1400
    - caption: { text: "Cement 2 L, sand 6 L. Say it with units.", say: "Answer with units." }
    - wait: 1400
---
**Modelling** means turning a real problem into maths you can solve, solving it, and turning the answer back into the real situation. Three steps keep you on track:

1. **Formulate:** What is *known* (the ratio, the total)? What is *unknown*? What is the *relationship* (parts of a ratio)?
2. **Solve:** Find one part, then each amount. Estimate first to know what to expect.
3. **Interpret:** Give the answer in the situation's own units, with a sensible amount of rounding, and check that it makes sense.

Ratios turn up in mixes (mortar, paint, fertiliser), scale drawings and maps (1 : 50), and models.

## Predict: how much sand?

```step
stage: predict
insight: "Committing shows whether they find the parts first (4 parts, so 15 L), multiply the total by 3 (60 L) or divide the total by 3 (6.7 L)."
check:
  type: predict
  q: "Mortar is cement and sand in the ratio 1 : 3. How many litres of sand are in 20 L of mix?"
  options: ["15 L", "60 L", "10 L", "6.7 L"]
  actual: "15 L. 1 + 3 = 4 parts, each 5 L, and sand is 3 parts. 60 L multiplies the total by 3; 6.7 L divides it by 3."
```

<figure class="situation" role="img" aria-label="A bar for 20 litres of mortar cut into four equal parts. The first part is labelled cement and the other three parts together are labelled sand, with a question mark for how many litres of sand."><svg viewBox="0 0 400 130" width="400" style="max-width:100%;height:auto" fill="none" stroke="currentColor" font-family="inherit" font-size="14"><rect x="20" y="40" width="90" height="50" fill="#BA7517" fill-opacity="0.3" stroke="#854F0B" stroke-width="1.5"/><rect x="110" y="40" width="270" height="50" fill="#1D9E75" fill-opacity="0.3" stroke="#0F6E56" stroke-width="1.5"/><path d="M200 40 V90 M290 40 V90" stroke="#0F6E56"/><text x="65" y="70" text-anchor="middle" fill="currentColor" stroke="none">cement</text><text x="245" y="70" text-anchor="middle" fill="currentColor" stroke="none">sand: ? litres</text><text x="200" y="28" text-anchor="middle" fill="currentColor" stroke="none">20 litres of mortar, cement : sand = 1 : 3</text><text x="65" y="112" text-anchor="middle" fill="currentColor" stroke="none" font-size="12">1 part</text><text x="245" y="112" text-anchor="middle" fill="currentColor" stroke="none" font-size="12">3 parts</text></svg></figure>

Is the sand more or less than half of the mix? How do you know?

## Run: a mix of 20 litres

```step
stage: run
insight: "The bar shows the whole as four equal parts, so the amounts are a share of the total, with units."
try: { playground: board, starter: "rm.yml#run", height: 420 }
check: { type: board, text: "Set the total to 20 litres. How much sand is needed?", when: "w = 20 and y = 15", explain: "4 equal parts of 5 L: cement 5 L, sand 15 L. 5 L + 15 L = 20 L." }
```

The same sharing as before: the context is new, and the units are litres.

## Investigate: formulate first

```step
stage: investigate
insight: "Scale is a ratio too (1 : 50); Raj divides by the water's number instead of the parts. Writing known, unknown and relationship first prevents the slip."
tasks:
  - check:
      type: answer
      q: "A scale drawing uses the ratio $1 : 50$. A wall is 3 cm long on the drawing. How long is the real wall, in cm?"
      answer: "150"
      feedback:
        - ["53", "That adds 50 to 3. The scale means every 1 cm on the drawing is 50 cm in real life: multiply."]
        - ["0.06", "That divides. The real wall is bigger than the drawing."]
      explain: "Each 1 cm is 50 cm, so 3 cm is 3 × 50 = 150 cm (1.5 m)."
  - check:
      type: bug
      code: "working.txt#raj"
      text: "Raj mixes fertiliser and water in the ratio 1 : 4 to make 2 L. Click the line where his working goes wrong."
      answer: 2
      fault: logic
      misconception: share-by-term
      explain: "Line 2: 2 ÷ 4 divides by the water's number. There are 1 + 4 = 5 parts, so one part is 2 ÷ 5 = 0.4 L: fertiliser 0.4 L and water 1.6 L."
  - check:
      type: question
      q: "Orange paint is red and yellow in the ratio 2 : 3. You need 10 L. What should you do first?"
      options: ["Say what is known (ratio, total 10 L) and what is unknown (litres of red and yellow)", "Multiply 2 × 3 × 10", "Divide 10 by 2", "Start mixing and see"]
      answer: 0
      feedback: [null, "That has no meaning in the situation. Decide what is known and unknown first.", "That gives 5, which is not an amount of anything yet.", "Mixing without a plan wastes paint."]
      explain: "Known: ratio 2 : 3 and total 10 L. Unknown: litres of each. Relationship: 5 equal parts of 2 L, so red is 4 L and yellow 6 L."
```

### Scale

A ratio such as 1 : 50 compares a length on the drawing with the real length.

### Find the mistake

### What first?

## Modify: new situations

```step
stage: modify
insight: "Maps, mixes and models all use the same two moves, find one part or find the multiplier, then give the answer in the situation's units."
try: { playground: board, starter: "rm.yml#paint", height: 420 }
tasks:
  - check: { type: board, text: "Make 12 L of orange paint in the ratio 2 : 3. How much red is needed?", when: "w = 12 and x = 4.8", explain: "5 equal parts of 2.4 L. Red is 2 parts: 4.8 L, and yellow 7.2 L." }
  - check:
      type: answer
      q: "A map has the scale $1 : 25\\,000$. Two towns are 4 cm apart on the map. How many metres apart are they really?"
      answer: "1000"
      feedback:
        - ["100000", "That is in centimetres. 100 cm = 1 m, so divide by 100."]
        - ["1", "That is 1 km. The question asks for metres."]
      explain: "4 × 25 000 = 100 000 cm = 1000 m, which is 1 km."
  - check:
      type: answer
      q: "Lemonade is 1 part cordial to 5 parts water. How many millilitres of cordial are in a 1.2 L jug (1200 mL)?"
      answer: "200"
      feedback:
        - ["240", "That divides 1200 by 5. There are 1 + 5 = 6 parts."]
        - ["1.2", "That is the litres. The question asks for millilitres."]
      explain: "1 + 5 = 6 parts. 1200 ÷ 6 = 200 mL of cordial."
  - check:
      type: answer
      q: "In the 1 : 3 mortar mix of 20 L, what fraction of the mix is cement? (part to whole)"
      answer: "1/4"
      form: simplest
      feedback:
        - ["1/3", "That compares cement to sand, part to part. The whole mix is 1 + 3 = 4 parts."]
      explain: "Cement is 1 part of 4, so $\\tfrac{1}{4}$ of the mix: 5 L of 20 L."
  - check:
      type: answer
      q: "A model car is built at the ratio $1 : 18$. The real car is 4.5 m (450 cm) long. How long is the model, in cm?"
      answer: "25"
      feedback:
        - ["8100", "That multiplies. The model is smaller: divide by 18."]
      explain: "450 ÷ 18 = 25 cm."
```

### Orange paint

### On the map

### The jug

### Part to whole

### The model car

## Practise: ratio models

```step
stage: practise
insight: "A mix, a plan and a model, each needing the right units; the review keeps sharing in a ratio fresh."
tasks:
  - check:
      type: answer
      q: "Mortar is cement and sand in the ratio $1 : 4$. How many kilograms of cement are in 30 kg of mortar?"
      answer: "6"
      feedback:
        - ["24", "That is the sand. Cement is 1 of the 5 parts."]
      explain: "1 + 4 = 5 parts. 30 ÷ 5 = 6 kg of cement."
  - check:
      type: answer
      q: "A plan uses the scale $1 : 200$. A room is 5 cm long on the plan. How long is the room, in metres?"
      answer: "10"
      feedback:
        - ["1000", "That is in centimetres. Divide by 100 to get metres."]
      explain: "5 × 200 = 1000 cm = 10 m."
  - check:
      type: answer
      q: "A model ship is built at the ratio $1 : 50$. The model is 24 cm long. How long is the real ship, in metres?"
      answer: "12"
      feedback:
        - ["1200", "That is in centimetres. Divide by 100."]
        - ["0.48", "That divides. The real ship is bigger than the model."]
      explain: "24 × 50 = 1200 cm = 12 m."
  - check:
      type: answer
      q: "Review: share $48 in the ratio $3 : 5$. What is the bigger share, in dollars?"
      answer: "30"
      feedback:
        - ["18", "That is the smaller share."]
      explain: "3 + 5 = 8 parts. 48 ÷ 8 = 6. The bigger share is 5 × 6 = 30."
```

### Mortar

### The plan

### The ship

### Review: sharing

## Make: exactly 3 litres

```step
stage: make
insight: "Choosing a ratio and a total so that one liquid is exactly 3 L shows the amount is its parts times one part, and many designs work."
try: { playground: board, starter: "rm.yml#make", height: 460 }
hint: ["The first liquid is a parts, each of total ÷ (a + b).", "Try 1 : 2 with a total of 9 L."]
check: { type: board, text: "Design a mix: choose a ratio and a total so that the first liquid is exactly 3 L.", when: "x = 3", explain: "For example 1 : 2 in 9 L, 1 : 1 in 6 L, 3 : 1 in 4 L, or 1 : 3 in 12 L." }
```

Then write what is known, what is unknown, and a check that your two amounts add to the total, with units.

## Make: cooking for the camp, on paper

```step
stage: make
insight: "Scaling a recipe is a ratio model: every ingredient grows by the same factor. The paper task makes them find it and say what does not scale."
hint: ["The recipe serves 4 and the camp needs 30.", "Find the factor first, then use it on the rice."]
check:
  type: reasoning
  paper: true
  q: "A recipe serves 4 and uses 300 g of rice. The camp needs 30 serves. How many kilograms of rice are needed?"
  steps:
    - ["Serves go from 4 to 30, a factor of $30 \\div 4 = 7.5$", "the ratio 30 : 4 is the scale factor"]
    - ["Every ingredient is scaled by the same factor 7.5", "keep the recipe's ratios the same"]
    - ["Rice: $300 \\times 7.5 = 2250$ g", "scale the amount in grams"]
    - ["$2250 \\text{ g} = 2.25$ kg", "give the answer in the unit the question asks for"]
  picks:
    - step: 2
      q: "Why scale every ingredient by 7.5?"
      options:
        - "The taste stays the same only if all the amounts stay in the same ratio"
        - "Because 7.5 is the number of cooks"
        - "Because bigger pots need more of everything, including cooking time"
      answer: 0
      feedback: [null, "7.5 is the factor from 4 serves to 30 serves, not a number of people.", "Cooking time and pan size do not scale in the same ratio. The amounts of food do."]
  answer: "2.25"
  answerLabel: "Rice needed (kg)"
  tolerance: 0.01
  feedback:
    - ["2250", "That is in grams. The question asks for kilograms."]
    - ["300", "That is the rice for 4 serves. Scale it up."]
    - ["1.2", "That is 300 g × 4 serves ÷ 1000. You need to scale to 30 serves."]
  criteria:
    - "I found the scale factor 30 ÷ 4 before using it."
    - "I used the same factor on the rice, and my answer is in kg."
    - "I said that cooking time and pan size do not scale by the same factor."
  explain: "30 ÷ 4 = 7.5, and 300 g × 7.5 = 2250 g = 2.25 kg. Amounts scale by the ratio, but cooking time and seasoning do not, so a caterer tastes and adjusts."
```

Do this one in your book, not on the screen. The recipe is made up for the task, but camp cooks and caterers scale recipes like this every time. Find the scale factor, scale the rice, change grams to kilograms, and type the answer.

**Also used in**

- **Murals.** A test colour mixed 2 parts blue to 3 parts white becomes 4 L blue and 6 L white when 10 L is needed.
- **Maps and models.** A scale such as 1 : 50 is a ratio you apply to every length the same way.
- **Garden and building mixes.** Mortar, potting mix and fertiliser are all parts of a total.
