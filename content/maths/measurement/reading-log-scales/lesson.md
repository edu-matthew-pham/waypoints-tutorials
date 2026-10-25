---
order: 20
unit: logs10
node: [AC9M10M02 n2, AC9M10M02 n3]
uses: [AC9M9M02 n1, AC9M9M02 n2]   # powers of ten and sizes in scientific notation
assumes: [AC9M8N02 n1, AC9M8N02 n2]
connection: noise-dose
title: Reading log scales
summary: "On a log scale, equal steps are equal multipliers. Each 3 dB step halves the safe time, and one ruler of powers of 10 fits a blood cell, a hair and the Sun's distance."
language: maths
voice: { name: af_heart, speed: 1.1 }
hook: "A sound meter creeping from 85 to 88 hardly looks like a change. Is it?"
app:
  command: node "$REPO_ROOT/tools/serve.mjs" "$REPO_ROOT/dist/_playground-board" 8611
  url: http://127.0.0.1:8611/index.html
  readySelector: "#sl-d"
  layout: full
explainPicture: { ref: noise.yml#explain-pic, caption: "Three decibels up, from 85 to 88: the safe time halves, from 8 hours to 4." }
explainClip:
  query: { code: "@noise.yml#explain", fresh: 1, id: explain }
  caption: "Every 3 dB halves the time"
  say: "Every three decibels up halves the safe time."
  clip:
    - caption: { text: "85 dB: 8 hours.", say: "At eighty five decibels, eight hours." }
    - wait: 700
    - caption: { text: "88 dB: half as long, 4 hours.", say: "Three more decibels, and it is half as long." }
    - click: Make d bigger
    - wait: 900
    - caption: { text: "91 dB: half again, 2 hours.", say: "Three more, and it halves again." }
    - click: Make d bigger
    - wait: 900
---
A worker's sound meter sits on 85 and then creeps up to 88. Three notches on a dial doesn't sound like much, but a sound meter isn't a ruler.

## Predict: three decibels more

```step
stage: predict
insight: "Committing to the safe time at 88 dB shows who takes off three hours (an addition) and who halves it (a multiplication)."
check:
  type: predict
  q: "A workplace is allowed to expose a worker to 85 dB for 8 hours a day. Every 3 dB more doubles the risk of hearing damage. How many hours is it safe to stay at 88 dB?"
  options:
    - "4 hours"
    - "5 hours"
    - "6 hours"
    - "2 hours"
  actual: "4 hours. Every 3 dB doubles the risk, so you can stay half as long for the same risk: 8 hours, then 4. It's a multiplication each step, not three hours taken off."
```

<figure class="situation" role="img" aria-label="A decibel ruler with two marks three decibels apart. The mark at 85 dB has a clock above it saying 8 hours. The mark at 88 dB has a clock above it with a question mark for the hours."><svg viewBox="0 0 400 170" width="400" style="max-width:100%;height:auto" fill="none" stroke="currentColor" font-family="inherit" font-size="14"><rect x="50" y="20" width="100" height="44" rx="8" fill="#1D9E75" fill-opacity="0.25" stroke="#0F6E56"/><text x="100" y="48" text-anchor="middle" fill="currentColor" stroke="none" font-size="16">8 hours</text><rect x="250" y="20" width="100" height="44" rx="8" fill="#378ADD" fill-opacity="0.2" stroke="#185FA5"/><text x="300" y="48" text-anchor="middle" fill="currentColor" stroke="none" font-size="16">? hours</text><path d="M100 68 V104 M300 68 V104" stroke-dasharray="4 3"/><path d="M30 110 H370" stroke-width="1.6"/><path d="M100 104 v12 M300 104 v12"/><text x="100" y="134" text-anchor="middle" fill="currentColor" stroke="none">85 dB</text><text x="300" y="134" text-anchor="middle" fill="currentColor" stroke="none">88 dB</text><text x="200" y="158" text-anchor="middle" fill="currentColor" stroke="none" font-size="12" opacity="0.85">3 dB more</text></svg></figure>

The safe time at 85 dB is 8 hours. What is it three decibels louder?

## Run: up the dial

```step
stage: run
insight: "Equal steps along the decibel axis are equal multipliers on the time, so the graph bends down instead of falling in a straight line."
try: { playground: board, starter: "noise.yml#run", height: 560 }
check: { type: board, text: "Slide the level from 85 up to 88. Read the hours in the table. Was your prediction right?", when: "d = 88" }
```

Slide up another 3 dB, and another. Look at the table and then at the graph. What does the graph do?

## Investigate: halving, and a ruler for sizes

```step
stage: investigate
insight: "Each equal step on a log scale is the same multiplier. Several steps multiply that multiplier over and over, and the middle of a log ruler is not the average of its ends. Priya averages the ends."
tasks:
  - check:
      type: reasoning
      paper: true
      q: "How many hours is it safe to stay at 97 dB? Use 8 hours at 85 dB, and halve the time for every 3 dB more."
      steps:
        - ["$97 - 85 = 12$ dB more", "how far above 85"]
        - ["$12 \\div 3 = 4$ steps", "each 3 dB is one step"]
        - ["$8 \\div 2 \\div 2 \\div 2 \\div 2 = 8 \\div 16$", "halve once for each step, four times"]
        - ["$8 \\div 16 = 0.5$ hours", "half an hour, or 30 minutes"]
      answer: "0.5"
      answerLabel: "Hours"
      feedback:
        - ["4", "That's 4 steps, but the question wants the hours: halve 8 four times."]
        - ["0.8", "Halving 4 times divides by 2 × 2 × 2 × 2 = 16, not by 10."]
        - ["1", "Halving 4 times is dividing by 16."]
      criteria:
        - "I found how many 3 dB steps above 85."
        - "I halved the time once for every step."
        - "My answer is under 1 hour."
      explain: "12 dB is 4 steps: 8 ÷ 16 = 0.5 hours, which is 30 minutes."
  - check:
      type: question
      q: "The ruler shows a red blood cell, a hair and the distance to the Sun. Why are its marks 10 times apart each time instead of 1 metre apart?"
      options:
        - "The sizes cover so many powers of 10 that 1 metre apart would squash the cell and the hair together, and the Sun off the page"
        - "Because 10 is an easier number than 1"
        - "Because the Sun is exactly 10 times bigger than a hair"
        - "It's only a style: either ruler shows the same picture"
      answer: 0
      feedback:
        - null
        - "It isn't about easy numbers. It's that the sizes differ by many powers of 10."
        - "The Sun's distance is billions of billions of times a hair."
        - "Equal metre steps would put the cell and hair on top of each other."
      explain: "A log ruler gives every power of 10 the same space, so tiny and enormous sizes both fit on one page."
  - check:
      type: bug
      code: "working.txt#priya"
      text: "Priya finds the number halfway between 10 m and 1000 m on a ruler like this. Click the line where her working goes wrong."
      answer: 3
      fault: logic
      misconception: log-midpoint-average
      explain: "Line 3: on a ruler with equal steps of ×10 the halfway mark is one ×10 step from each end, 100 m, not the average, 505 m."
```

### Halving steps

Here's one the other way up. 94 dB is the same as 85 dB plus three steps.

```worked
94 - 85 = 9 :: How far above 85 dB.
9 \div 3 = 3 :: Each 3 dB is one step, so 3 steps.
8 \div 2 \div 2 \div 2 :: Each step halves the safe time, so halve 3 times.
8 \div 8 = 1 :: Halving 3 times is dividing by 2 × 2 × 2 = 8: 1 hour.
```

Now try one on paper: 97 dB. Work out the steps first, then type the hours.

### One ruler for sizes

Here's a ruler with a mark for every power of 10. Look at where each thing sits.

<figure class="situation" role="img" aria-label="A ruler with marks every power of 10 from 10 to the minus 6 metres up to 10 to the 12 metres, the marks equally far apart. A red blood cell sits just before the 10 to the minus 5 mark, a hair just before 10 to the minus 4, and the distance from the Earth to the Sun just after 10 to the 11."><svg viewBox="0 0 400 190" width="400" style="max-width:100%;height:auto" fill="none" stroke="currentColor" font-family="inherit" font-size="13"><path d="M20 100 H380" stroke-width="1.6"/><path d="M20 100 v12"/><path d="M40 100 v6"/><path d="M60 100 v6"/><path d="M80 100 v12"/><path d="M100 100 v6"/><path d="M120 100 v6"/><path d="M140 100 v12"/><path d="M160 100 v6"/><path d="M180 100 v6"/><path d="M200 100 v12"/><path d="M220 100 v6"/><path d="M240 100 v6"/><path d="M260 100 v12"/><path d="M280 100 v6"/><path d="M300 100 v6"/><path d="M320 100 v12"/><path d="M340 100 v6"/><path d="M360 100 v6"/><path d="M380 100 v12"/><text x="20" y="128" text-anchor="middle" fill="currentColor" stroke="none" font-size="12">10⁻⁶</text><text x="80" y="128" text-anchor="middle" fill="currentColor" stroke="none" font-size="12">10⁻³</text><text x="140" y="128" text-anchor="middle" fill="currentColor" stroke="none" font-size="12">10⁰</text><text x="200" y="128" text-anchor="middle" fill="currentColor" stroke="none" font-size="12">10³</text><text x="260" y="128" text-anchor="middle" fill="currentColor" stroke="none" font-size="12">10⁶</text><text x="320" y="128" text-anchor="middle" fill="currentColor" stroke="none" font-size="12">10⁹</text><text x="380" y="128" text-anchor="middle" fill="currentColor" stroke="none" font-size="12">10¹²</text><path d="M57 96 V58" stroke="#0F6E56" stroke-width="1.6"/><circle cx="57" cy="96" r="3.5" fill="#1D9E75" stroke="none"/><text x="63" y="52" fill="currentColor" stroke="none">hair</text><path d="M38 104 V148" stroke="#185FA5" stroke-width="1.6"/><circle cx="38" cy="100" r="3.5" fill="#378ADD" stroke="none"/><text x="20" y="164" fill="currentColor" stroke="none">red blood cell</text><path d="M363 96 V58" stroke="#0F6E56" stroke-width="1.6"/><circle cx="363" cy="96" r="3.5" fill="#1D9E75" stroke="none"/><text x="372" y="52" text-anchor="end" fill="currentColor" stroke="none">Earth to the Sun</text><text x="200" y="182" text-anchor="middle" fill="currentColor" stroke="none" font-size="12" opacity="0.85">metres: each mark is 10 times the one before</text></svg></figure>

A red blood cell is about $8 \times 10^{-6}$ m, a hair about $7 \times 10^{-5}$ m, and the Earth to the Sun about $1.5 \times 10^{11}$ m. On a ruler with 1 m between marks, the Sun would be miles off the page.

### Find the mistake

Read Priya's working. Is the middle of a ruler of ×10 steps the average of its ends?

## Modify: change the level

```step
stage: modify
insight: "One change at a time: a louder level, a level a long way up the dial, and a level below 85 where the multiplier goes the other way."
try: { playground: board, starter: "noise.yml#vary", height: 600 }
tasks:
  - hint: ["Use the table for 97 dB.", "A quarter of an hour is 15 minutes."]
    check: { type: number, q: "How many minutes is it safe to stay at 97 dB?", answer: 30, explain: "97 dB is 4 steps above 85: 8 ÷ 16 = 0.5 hours, which is 30 minutes." }
  - hint: ["103 − 85 = 18 dB.", "How many 3 dB steps is that?"]
    check: { type: number, q: "How many minutes is it safe to stay at 103 dB? Give a decimal.", answer: 7.5, explain: "18 dB is 6 steps: 8 ÷ 64 = 0.125 hours, which is 7.5 minutes." }
    smaller:
      check: { type: "number", q: "Just the steps: how many 3 dB steps is it from 85 up to 103?", answer: 6, explain: "103 − 85 = 18 dB, and 18 ÷ 3 = 6 steps." }
  - hint: ["82 is 3 dB below 85.", "Going down a step does the opposite of going up."]
    check: { type: number, q: "Edge case: how many hours is it safe at 82 dB, one step below 85?", answer: 16, explain: "A step down undoes a halving: it doubles the time, 8 × 2 = 16 hours." }
```

### Thirty minutes

### Further up

### Below the line

## Practise: steps and ruler

```step
stage: practise
insight: "Reading a 3 dB step as a halving, finding the middle and the gap on a ruler of powers of 10; the review keeps scientific notation fresh."
tasks:
  - check:
      type: number
      q: "How many hours is it safe to stay at 91 dB?"
      answer: 2
      feedback:
        - ["5", "Each 3 dB halves the time. It doesn't take off an hour."]
      explain: "91 dB is 2 steps above 85: 8 ÷ 4 = 2 hours."
  - check:
      type: answer
      q: "A ruler has marks at 100 and 10 000, with equal steps of ×10 between them. What number is halfway along?"
      answer: "1000"
      form: simplified
      feedback:
        - ["5050", "That's the average. On this ruler each equal step multiplies by 10."]
      explain: "From 100, one step is 1000 and the next step is 10 000. Halfway is 1000."
    smaller:
      check: { type: "number", q: "Count the ×10 steps from 100 up to 10 000. How many steps is that?", answer: 2, explain: "100 to 1000 to 10 000: two steps, so halfway is one step in." }
  - check:
      type: number
      q: "On the sizes ruler a hair is near $10^{-4}$ m and the Earth to the Sun is near $10^{11}$ m. The Sun's distance is about $10^{k}$ times a hair. What's $k$?"
      answer: 15
      explain: "From -4 to 11 is 15 steps along the ruler, each ×10, so 10¹⁵."
  - check:
      type: number
      q: "Review: $0.000008$ m written as $8 \\times 10^{k}$ m. What's $k$?"
      answer: -6
      explain: "The point moves 6 places right to reach 8: k = −6."
```

### Hours

### The middle

### The gap

### Review

Scientific notation, from Year 9.

## Make: back to the concert

```step
stage: make
insight: "Coming back to the noise limit: a loud concert is five 3 dB steps above 85, so the safe time is halved five times, and the comparison with 8 hours is a ratio of 32."
tasks:
  - hint: ["How many dB above 85 is 100?", "Halve the 8 hours once for each 3 dB step."]
    check:
      type: reasoning
      paper: true
      q: "A concert is 100 dB. Using 8 hours at 85 dB and halving the time for every 3 dB more, how many minutes is it safe to stand there?"
      steps:
        - ["$100 - 85 = 15$ dB more", "how far above 85"]
        - ["$15 \\div 3 = 5$ steps", "each 3 dB is one step"]
        - ["$8 \\times 60 = 480$ minutes at 85 dB", "turn the hours into minutes"]
        - ["$480 \\div 2 \\div 2 \\div 2 \\div 2 \\div 2 = 480 \\div 32 = 15$", "halve once for each of the 5 steps"]
      answer: "15"
      answerLabel: "Minutes"
      feedback:
        - ["0.25", "That's hours. The question wants minutes: × 60."]
        - ["48", "Halving 5 times is dividing by 2 × 2 × 2 × 2 × 2 = 32, not by 10."]
      criteria:
        - "I found the 5 steps from 85 to 100."
        - "I halved once for every step, not once in all."
        - "My answer is in minutes."
      explain: "5 steps: 480 ÷ 32 = 15 minutes."
  - check:
      type: number
      q: "The safe time at 100 dB is how many times shorter than the safe time at 85 dB?"
      answer: 32
      feedback:
        - ["5", "5 is the number of steps. Each step halves, so 2 × 2 × 2 × 2 × 2."]
        - ["10", "Five halvings is 2⁵ = 32, not 5 × 2."]
      explain: "5 steps, each halving: 2⁵ = 32 times shorter. 15 minutes against 8 hours (480 minutes) is 480 ÷ 15 = 32."
```

### Standing at the concert

Back to the concert. Work this out on paper first, then type your answer.

### How many times shorter?

85 dB(A) averaged over 8 hours is the workplace exposure standard, and every 3 dB(A) increase doubles the risk of hearing damage: [Workplace exposure standards for noise, SafeWork SA](https://safework.sa.gov.au/workers/your-health-and-safety-at-work/hazardous-noise/workplace-exposure-standards). Halving the time for each step is the lesson's reading of "doubles the risk" (the same total risk in half the time). Sizes: a red blood cell 6 to 8 micrometres and a hair 20 to 200 (we use 70), from [Micrometre, Wikipedia](https://en.wikipedia.org/wiki/Micrometre). The Earth's average distance from the Sun, 150 million km: [NASA](https://science.nasa.gov/earth/facts/).

**Also used in**

- **Earthquakes.** The last lesson: each step up the magnitude scale multiplies the energy by about 32.
- **Computing.** Kilo, mega and giga are each 1000 times the one before, so each is an equal step on a ruler of data sizes.
