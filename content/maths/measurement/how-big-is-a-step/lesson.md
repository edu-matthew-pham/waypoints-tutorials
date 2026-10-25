---
order: 19
unit: logs10
node: AC9M10M02 n1
uses: [AC9M9M02 n1, AC9M9M02 n2]   # powers of ten and multiplying them; here the multiplier is 32, not 10
assumes: [AC9M8N02 n1, AC9M8N02 n2]
connection: quake-magnitude
title: How big is a step?
summary: "On the earthquake scale, one step up multiplies the energy by about 32. Two steps multiply it by 32 twice, about 1000, not by 2 × 32."
language: maths
voice: { name: af_heart, speed: 1.1 }
hook: "Magnitude 5 and magnitude 6 look like neighbours on the news. Are they?"
app:
  command: node "$REPO_ROOT/tools/serve.mjs" "$REPO_ROOT/dist/_playground-board" 8610
  url: http://127.0.0.1:8610/index.html
  readySelector: "#sl-m"
  layout: full
explainPicture: { ref: quake.yml#explain-pic, caption: "One step from magnitude 5 to 6: the energy is about 32 times as much, so the point is at 32." }
explainClip:
  query: { code: "@quake.yml#explain", fresh: 1, id: explain }
  caption: "One step up the scale is a multiplication"
  say: "One step up the magnitude scale multiplies the energy by about thirty two."
  clip:
    - caption: { text: "Magnitude 5: the energy we measure from.", say: "Magnitude five is where we start counting." }
    - wait: 700
    - caption: { text: "One step up, to 6: about 32 times as much energy.", say: "One step up, to six, is about thirty two times as much energy." }
    - click: Make m bigger
    - wait: 900
    - caption: { text: "The line shoots off the top. The scale hides how fast.", say: "The curve shoots off the top of the page." }
    - wait: 900
---
The news gives every earthquake one number, its magnitude, and the numbers are small: a 5, a 6, a 7. Small numbers like that usually mean small differences.

## Predict: a magnitude 6 against a 5

```step
stage: predict
insight: "Committing to how much more energy a magnitude 6 releases shows who reads one step on the scale as one more unit (or about twice as much), and who sees a multiplication."
check:
  type: predict
  q: "Geoscience Australia gives each earthquake a magnitude. About how many times as much energy does a magnitude 6 earthquake release than a magnitude 5?"
  options:
    - "About 32 times as much"
    - "About 2 times as much"
    - "About 10 times as much"
    - "Not much more: it's just one step up"
  actual: "About 32 times as much. Geoscience Australia says each step up the magnitude scale is about a 32-fold increase in the energy released. One step on the scale is a multiplication, not an extra unit."
```

<figure class="situation" role="img" aria-label="Two bars, one above the other. The top bar is short and labelled the energy of a magnitude 5 earthquake. The bottom bar is much longer, runs off the edge with a break mark, and is labelled with a question mark: how many times as much energy a magnitude 6 releases. A note says not to scale."><svg viewBox="0 0 400 170" width="400" style="max-width:100%;height:auto" fill="none" stroke="currentColor" font-family="inherit" font-size="14"><text x="20" y="26" fill="currentColor" stroke="none">Magnitude 5: its energy</text><rect x="20" y="36" width="40" height="22" fill="#1D9E75" fill-opacity="0.3" stroke="#0F6E56"/><text x="20" y="92" fill="currentColor" stroke="none">Magnitude 6: its energy</text><rect x="20" y="102" width="330" height="22" fill="#378ADD" fill-opacity="0.25" stroke="#185FA5" stroke-dasharray="6 4"/><path d="M344 98 l8 12 l-8 12" stroke-width="1.6"/><text x="190" y="118" text-anchor="middle" fill="currentColor" stroke="none" font-size="16">? times the top bar</text><text x="20" y="156" fill="currentColor" stroke="none" font-size="12" opacity="0.8">Not to scale.</text></svg></figure>

Up one step on the news. How much more energy is that?

## Run: one step up

```step
stage: run
insight: "Moving one step along the magnitude axis multiplies the energy by about 32, so the graph climbs far faster than the steps along the bottom."
try: { playground: board, starter: "quake.yml#run", height: 560 }
check: { type: board, text: "Slide the magnitude from 5 up to 6. The energy is measured in times a magnitude 5. Was your prediction right?", when: "m = 6" }
```

The board counts energy in "times a magnitude 5", so a magnitude 5 is 1. Slide up one step and read the table. Where does the curve go next?

## Investigate: more than one step

```step
stage: investigate
insight: "Each step multiplies by the same amount, so several steps multiply that amount over and over: three steps is 32 × 32 × 32, not 3 × 32. Maya adds steps' worth instead of multiplying."
tasks:
  - check:
      type: reasoning
      paper: true
      q: "How many times as much energy does a magnitude 4 release than a magnitude 2? Use about 32 times for each step."
      steps:
        - ["From 2 to 4 is 2 steps.", "count the steps first"]
        - ["$32 \\times 32$", "each step multiplies by 32, so multiply 32 by itself once for two steps"]
        - ["$32 \\times 32 = 1024$", "work it out"]
      answer: "1024"
      answerLabel: "Times as much energy"
      feedback:
        - ["64", "Two steps is 32 × 32, not 2 × 32."]
        - ["2", "2 is the number of steps. The question wants how many times the energy."]
      criteria:
        - "I counted the steps first."
        - "I multiplied by 32 once for each step."
        - "My answer is over 1000, not under 100."
      explain: "Two steps: 32 × 32 = 1024, so about a thousand times as much."
  - check:
      type: bug
      code: "working.txt#maya"
      text: "Maya works out how much more energy a magnitude 7 releases than a magnitude 4. Click the line where her working goes wrong."
      answer: 4
      fault: logic
      misconception: steps-added-not-multiplied
      explain: "Line 4: three steps multiply by 32 three times, 32 × 32 × 32 = 32 768, not 3 × 32 = 96."
  - check:
      type: question
      q: "The step from magnitude 4 to 5 and the step from magnitude 7 to 8 are both one step. What's the same about them?"
      options:
        - "Each one multiplies the energy by about the same number"
        - "Each one adds about the same amount of energy"
        - "Each one releases about the same energy"
        - "Nothing: the bigger quake is a bigger step"
      answer: 0
      feedback:
        - null
        - "The energy added by the step from 7 to 8 is far more than the step from 4 to 5. It's the multiplier that is the same."
        - "A magnitude 8 releases far more energy than a 5."
        - "Every step has the same size on the scale, and the same multiplier."
      explain: "Equal steps on the scale mean the same multiplier. That's what makes it a logarithmic scale."
```

### Steps multiply

Here is one with three steps.

```worked
3 \to 6 :: Magnitude 3 up to magnitude 6 is 3 steps.
32 \times 32 \times 32 :: Each step multiplies the energy by about 32, so multiply three 32s.
32 \times 32 = 1024 :: Two steps so far.
1024 \times 32 = 32\,768 :: Three steps: about 33 000 times the energy.
```

Now try one on paper: a magnitude 4 against a magnitude 2. Work out the steps first, then type how many times as much energy.

### Find the mistake

Read Maya's working. Is three steps three times 32?

### The same step

A scale where equal steps mean multiplying by the same number is called a logarithmic scale.

## Modify: change the step

```step
stage: modify
insight: "Changing one thing at a time: going down a step instead of up, counting steps from the energy given, and working back from a big multiplier to a number of steps."
try: { playground: board, starter: "quake.yml#vary", height: 600 }
tasks:
  - hint: ["Going up multiplies by 32.", "Going down is the other way."]
    check: { type: answer, q: "A magnitude 4 earthquake releases what fraction of the energy of a magnitude 5?", answer: "1/32", form: simplest, feedback: [["32", "Going down a step divides the energy by 32, so a magnitude 4 has a 32nd of it."], ["-32", "Energy is never negative. Going down a step divides."]], explain: "One step down divides the energy by 32: 1/32." }
    smaller:
      check:
        type: question
        q: "Going down one step on the scale, from 5 to 4. Does the energy get multiplied by 32 or divided by 32?"
        options: ["Divided by 32", "Multiplied by 32"]
        answer: 0
        feedback: [null, "Going up multiplies by 32. Going down undoes that."]
        explain: "Down is the opposite of up, so divide by 32."
  - hint: ["Count the steps from 5 up to 8.", "Multiply 32 that many times."]
    check: { type: number, q: "How many times as much energy does a magnitude 8 release than a magnitude 5? Type the number with no spaces.", answer: 32768, explain: "5 to 8 is 3 steps: 32 × 32 × 32 = 32768." }
  - hint: ["Try 32 × 32.", "How many 32s did you multiply?"]
    check:
      type: question
      q: "Edge case: one earthquake releases about 1000 times the energy of another. How many magnitude steps apart are they?"
      options: ["About 2 steps", "About 1000 steps", "About 3 steps", "About 30 steps"]
      answer: 0
      feedback: [null, "1000 is the multiplier, not the number of steps.", "Three steps is 32 768 times, not 1000.", "30 is about the multiplier for one step."]
      explain: "32 × 32 = 1024, so about 1000 times is 2 steps."
```

### Down a step

### Eight against five

### Back to steps

## Practise: steps and multipliers

```step
stage: practise
insight: "Counting the steps, then multiplying 32 that many times, in both directions, mixed; the review keeps scientific notation fresh."
tasks:
  - check:
      type: number
      q: "About how many times as much energy does a magnitude 7 earthquake release than a magnitude 6?"
      answer: 32
      explain: "One step up: 32."
  - check:
      type: number
      q: "About how many times as much energy does a magnitude 9 earthquake release than a magnitude 6? Type the number with no spaces."
      answer: 32768
      feedback:
        - ["96", "Three steps is 32 × 32 × 32, not 3 × 32."]
      explain: "6 to 9 is 3 steps: 32 × 32 × 32 = 32768."
    smaller:
      check: { type: "number", q: "Just the steps: how many steps is it from magnitude 6 up to magnitude 9?", answer: 3, explain: "7, 8, 9: three steps." }
  - check:
      type: answer
      q: "A magnitude 5 earthquake releases what fraction of the energy of a magnitude 7? Give a fraction."
      answer: "1/1024"
      form: simplest
      feedback:
        - ["1024", "That's how many times as much the magnitude 7 releases. The magnitude 5 has a fraction of it."]
        - ["1/64", "Two steps is 32 × 32 = 1024, not 2 × 32."]
      explain: "Two steps down divides by 32 twice: 1/1024."
  - check:
      type: number
      q: "Review: 32 768 written in scientific notation, rounded to one significant figure, is $3 \\times 10^{k}$. What's $k$?"
      answer: 4
      explain: "32 768 is about 30 000 = 3 × 10⁴: the point moves 4 places."
```

### One step

### Three steps

### The smaller one

### Review

Scientific notation, from Year 9.

## Make: back to the two quakes

```step
stage: make
insight: "Coming back to the magnitude 5 and 6 on the news: two steps is 32 × 32, about a thousand times the energy, and 'two points bigger' hides that."
tasks:
  - hint: ["How many steps from 5 to 7?", "Multiply 32 that many times."]
    check:
      type: reasoning
      paper: true
      q: "An aftershock is magnitude 5 and the main shock is magnitude 7. About how many times as much energy did the main shock release?"
      steps:
        - ["From 5 to 7 is 2 steps.", "count the steps"]
        - ["$32 \\times 32$", "each step multiplies by about 32, once for each step"]
        - ["$32 \\times 32 = 1024$", "work it out"]
        - ["About a thousand times as much", "the 32 is the source's 'about', so this is 'about' too"]
      answer: "1024"
      answerLabel: "Times as much energy"
      feedback:
        - ["64", "Two steps is 32 × 32, not 2 × 32."]
        - ["2", "2 is the number of steps."]
      criteria:
        - "I counted two steps from 5 to 7."
        - "I multiplied 32 by itself, once for each step."
        - "I said 'about', because 32 is only about right."
      explain: "5 to 7 is 2 steps: 32 × 32 = 1024, about a thousand times the energy."
  - check:
      type: question
      q: "A news headline says the magnitude 7 quake was 'only two points bigger' than the aftershock. What's the best reply?"
      options:
        - "Two steps on the scale is about a thousand times the energy"
        - "Two points is right: it's two extra units of energy"
        - "Two steps is about 64 times the energy"
        - "It's the same energy, because both are earthquakes"
      answer: 0
      feedback:
        - null
        - "Each step multiplies the energy. It doesn't add a unit."
        - "Two steps multiply by 32 twice: 32 × 32, not 2 × 32."
        - "A magnitude 7 releases about a thousand times what a 5 does."
      explain: "'Only two points' hides two multiplications of about 32: about 1000 times the energy."
```

### The main shock

Back to the two quakes. Work this out on paper first, then type your answer.

### The headline

"Each step up the magnitude scale is about a 32-fold increase in the energy released": [Australian earthquakes explained, Geoscience Australia](https://ga.gov.au/news/news-archive/australian-earthquakes-explained). "About" is the source's own word, so every answer here is "about" too.

**Also used in**

- **Sound.** Next lesson: the decibel scale also adds a step and multiplies the effect.
- **Powers of 10.** Scientific notation writes sizes by their power of 10; a log scale gives each power its own equal step.
