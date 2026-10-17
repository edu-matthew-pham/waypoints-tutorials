---
sources:
  - { title: "Swift (2026), LLMs Unplugged (peer-reviewed conference paper)", url: "https://doi.org/10.1145/3786228.3786237", checked: 2026-10-15 }
  - { title: "LLMs Unplugged teaching resources (CC BY-SA 4.0)", url: "https://www.llmsunplugged.org/", checked: 2026-10-15 }
title: Build a text generator with dice
summary: Turn word frequencies into dice outcomes, then sample words without always picking the most common one.
language: science
shape: 5e
explainClip:
  query: { code: "@boards.yml#explain", fresh: 1, id: explain }
  caption: "One roll, one possible word"
  say: "Sampling with a die."
  clip:
    - caption: { text: "Three faces mean mat, two mean chair and one means roof.", say: "Three faces mean mat, two mean chair and one means roof." }
    - wait: 1200
    - caption: { text: "Each roll chooses one face, so even roof can appear.", say: "Each roll chooses one face, so even roof can appear." }
    - wait: 1200
    - caption: { text: "Ten rolls may not match the expected counts exactly.", say: "Ten rolls may not match the expected counts exactly." }
    - wait: 1200
app:
  command: node "$REPO_ROOT/tools/serve.mjs" "$REPO_ROOT/dist/_playground-board" 8241
  url: http://127.0.0.1:8241/index.html
  readySelector: "#gpanel"
  layout: full
unit: text-generation
order: 2
---
Last lesson, we counted six endings: **mat, mat, mat, chair, chair, roof**. Now we will use a six-sided die to choose one of those endings.

This is a **toy probabilistic text generator**, not a miniature LLM. You can do it with paper and a physical die.

## Engage: is the most likely outcome certain?

```step
stage: predict
check:
  type: predict
  q: "If three faces on a die mean 'mat', two mean 'chair' and one means 'roof', what happens when you roll?"
  options: ["You always get mat", "You could get any of the three words", "You always get roof"]
  actual: "Any of the three words can occur. Mat is most likely, but no outcome is guaranteed."
```

## Explore: build the lookup table

```step
stage: run
check:
  type: question
  q: "Which assignment matches the counts mat = 3, chair = 2, roof = 1?"
  options: ["1–3 mat; 4–5 chair; 6 roof", "1 mat; 2 chair; 3–6 roof", "1–2 mat; 3–4 chair; 5–6 roof"]
  answer: 0
```

## Explore: roll the die

Use the interactive board to roll a virtual die and record your outcomes. You can also use a physical die and compare the results.

```step
stage: run
try: { playground: board, starter: "boards.yml#explore", height: 590 }
check: { type: board, text: "Roll the virtual die at least ten times.", when: "c >= 10" }
```

Copy this table into your book:

| Die result | Next word |
|---|---|
| 1, 2, 3 | mat |
| 4, 5 | chair |
| 6 | roof |

Roll a die **ten times**, recording each result and the chosen word. Use the board's virtual die if you do not have a physical die: it shows each roll, such as **Rolled 4 → chair**, and your last ten rolls. Keep the lookup table unchanged.

Compare with a partner. Did you get identical results? Does a short run always match the expected 3:2:1 ratio?

## Explain: sampling

```step
stage: investigate
tasks:
  - check:
      type: question
      q: "What is the chance of getting 'chair' on one roll?"
      options: ["1/6", "2/6", "3/6", "5/6"]
      answer: 1
  - check:
      type: question
      q: "You and a friend each roll the board's die 10 times. Your friend gets roof 3 times. You get roof 0 times. What is true?"
      options: ["Both results can happen with the same die and table", "Your friend's die must be unfair", "Roof's chance went down for you"]
      answer: 0
      feedback: [null, "Ten rolls is a small sample. Short runs vary a lot.", "The table didn't change: roof is still 1 face out of 6."]
  - check: { type: reflect, text: "I can map a frequency to dice faces and explain why sampled results vary." }
```

### Read the dice table

Count how many faces select chair out of six.

### Explain an unexpected sample

Consider why ten rolls might contain no roof outcomes.

### Explain sampling

Connect probabilities with the different results of repeated rolls.

Choosing an outcome according to its assigned probability is called **sampling**. A model can use sampling instead of always selecting the single most frequent word.

A generator that **always picks the top word** would write "mat" every single time. Rolling lets it write "chair" or "roof" sometimes. This is one reason a chatbot can give different answers to the same question.

Our model only chooses **one word after one fixed phrase**. A larger word-transition model would use the newly chosen word to look up another set of possible next words. That is still far simpler than a modern LLM.

## Elaborate: change the model

```step
stage: modify
check:
  type: question
  q: "A new collection has 2 mat, 3 chair and 1 roof. Which assignment matches it?"
  options: ["1–2 mat; 3–5 chair; 6 roof", "1–3 mat; 4–5 chair; 6 roof", "1 mat; 2–3 chair; 4–6 roof"]
  answer: 0
```

Make a new lookup table and roll five times. Explain what changed: the die, the sampling procedure or the model's examples?

## Evaluate: explain an unexpected outcome

```step
stage: info
check:
  type: question
  q: "Your model produces 'roof' twice in a row. What is the chance of roof on the next roll?"
  options: ["Still 1 in 6", "Higher, because roof is on a streak", "Lower, because roof is due a rest"]
  answer: 0
  feedback: [null, "The die doesn't remember earlier rolls.", "The die doesn't remember earlier rolls."]
```

Write one sentence distinguishing **probability** from **what actually happened** in your rolls.

## Learning with AI: plausible is not the same as correct

A writing assistant produces “The cat sat on the roof.” The sentence is plausible, but that does **not** tell us whether a real cat sat there. Compare two prepared AI responses to a learner asking, “Is this sentence true?”

- **Response A:** “Yes. The sentence sounds natural, so it is true.”
- **Response B:** “I can judge whether the sentence sounds plausible, but I would need evidence to know whether it happened.”

Which response better distinguishes **generation** from **verification**? What evidence would you need to establish whether the event happened?

```step
stage: investigate
check:
  type: question
  q: "The generator writes 'The cat sat on the roof.' What would tell you whether a real cat sat on a roof?"
  options: ["Someone who saw it, or a photo", "Rolling again and getting roof", "The sentence sounding natural"]
  answer: 0
  feedback: [null, "Another roll only shows the die again, not the cat.", "Sounding natural is what the generator is built to do. It isn't evidence."]
```

**Next:** let a computer repeat this same sampling procedure, and decide what understanding you must keep.
