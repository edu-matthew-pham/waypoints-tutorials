---
title: Why does AI make mistakes?
summary: Break a fruit sorter on purpose with a wrong label and with missing examples, then fix it.
language: science
shape: 5e
unit: how-ai-learns
order: 2
voice: { name: af_heart, speed: 1.1 }
app:
  command: node "$REPO_ROOT/tools/serve.mjs" "$REPO_ROOT/dist/_playground-board" 8241
  url: http://127.0.0.1:8241/index.html
  readySelector: "#gpanel"
  layout: full
explainClip:
  query: { code: "@boards.yml#explain", fresh: 1, id: explain }
  caption: "Investigate the model's decision"
  say: "Inspect the clues, then test the prediction."
  clip:
    - caption: { text: "This simple model uses only colour and shape." }
    - wait: 1100
    - caption: { text: "Its prediction is something to check, not automatically accept." }
    - wait: 1100
---
Last lesson you taught a fruit sorter with labelled examples. Today you will **break it on purpose**. Finding out how a model goes wrong is one of the best ways to understand it.

The sorter is a simple teaching model, not a neural network. It looks at the examples closest to a new fruit and copies their label.

## Engage: what could go wrong?

```step
stage: predict
check:
  type: predict
  q: "The sorter's program works perfectly. Can it still give a wrong answer?"
  options: ["No: if the program works, the answer is right", "Yes: if its examples or labels are wrong or missing", "Only if the computer is broken"]
  actual: "Yes. The program can follow its steps perfectly and still be wrong, because it learns from examples, and examples can be wrong or missing."
```

## Explore: fool the sorter

```step
stage: run
try: { playground: board, starter: "boards.yml#explore", height: 680 }
tasks:
  - check: { type: board, text: "Make the sorter call a yellow, long fruit an apple.", when: "a = 1" }
    hint: ["Which examples are closest to a yellow, long fruit?", "Press Swap label on the yellow, long examples, then test a yellow, long fruit."]
  - check: { type: board, text: "With every label correct, make the sorter get a fruit wrong or unsure.", when: "b = 1" }
    hint: ["Press Restore original examples first, so every label is correct. Which kind of fruit has only one example?", "Remove the yellow, round apple, then test a yellow, round fruit."]
  - check: { type: board, text: "Fix the sorter so it gets a fruit right that it got wrong.", when: "x = 1" }
    hint: "Press Restore original examples, then test the same fruit again."
```

In the board's pretend world, every **long** fruit is a banana and every **round** fruit is an apple. The board tells you when the sorter is right or wrong.

### A wrong label

Use **Swap label** to give some examples the wrong answer. Then test a yellow, long fruit. Rows with a wrong label turn pink.

### Missing examples

Press **Restore original examples**, so every label is correct. Now use **Remove** to take examples away. Can you make the sorter wrong, or unsure, without any wrong labels?

### Fix it

Put the examples right again. Test the fruit it got wrong. Is it right now?

## Explain: two kinds of mistake

```step
stage: investigate
tasks:
  - check:
      type: question
      q: "You swapped two banana labels to 'apple'. Now the sorter calls a yellow, long fruit an apple. What caused the mistake?"
      options: ["Wrong labels: it copied the answers it was taught", "Missing examples: it had nothing close to compare with", "The program has a bug"]
      answer: 0
      feedback: [null, "The yellow, long examples were still there. Their labels were wrong.", "The program did exactly what it always does. The examples changed."]
  - check:
      type: question
      q: "You removed the only yellow, round example. Every label is still correct. Now a yellow, round fruit is called a banana. What caused it?"
      options: ["Missing examples: its closest examples were now yellow bananas", "Wrong labels: some answers were wrong", "Yellow, round fruit can't be sorted"]
      answer: 0
      feedback: [null, "Every label was correct. Something else was missing.", "With the yellow, round apple back, it sorts these fine."]
  - check: { type: reflect, text: "I can explain one mistake caused by a wrong label and one caused by missing examples." }
```

A model can go wrong in at least two ways.

- **Wrong labels.** If examples are labelled wrongly, the model learns the wrong answer. Real AI is often trained on labels made quickly by people, and some are wrong.
- **Missing examples.** If no examples are like the new case, the model guesses from ones that are not really similar. Real AI can struggle with things that were rare or missing in its training data. Generalising to new cases only works as well as the examples it learned from.

In both cases, the program worked. The **examples** were the problem.

### The swapped labels

Which kind of mistake was this?

### The removed examples

Which kind of mistake was this?

### Explain it

Use one of your own board tests as an example.

## Elaborate: more examples, fewer mistakes?

```step
stage: modify
tier: typical
try: { playground: board, starter: "boards.yml#explore", height: 680 }
check: { type: reflect, text: "I tested whether more examples fix both kinds of mistake, and explained what I found." }
```

Swap two banana labels to apple, so the sorter calls a yellow, long fruit an apple. Then **add** three more correct yellow, long banana examples. Test again. Did more correct examples outvote the wrong ones?

Press **Restore original examples**. Remove the yellow, round apple and add three more yellow, long bananas. Test a yellow, round fruit. Did more examples help this time?

**Wider investigation:** a real fruit can be green **and** long: an unripe banana. What extra clue, or what kind of example, would help? Would it guarantee the right answer?

## Evaluate: what would you check?

```step
stage: info
check:
  type: question
  q: "A photo app labels a photo of a husky as 'wolf'. Every training label was checked by experts. What is the most likely cause?"
  options: ["It had few examples like this one, so it compared it with wolves", "Some of its labels were wrong", "The app's program crashed"]
  answer: 0
  feedback: [null, "The labels were checked. Think about which examples it may have been missing.", "A crash would give no answer, not a wrong one."]
```

Without the board, write: **The sorter got it wrong when … because … . To fix it, I would … .**

## Learning with AI: when the answer is wrong

When an AI assistant gives you a wrong answer, it isn't always because it is "broken". It may have learned from wrong examples, or seen few examples like your question. So ask: *Is my question unusual? Could it have learned this wrong?* Then check with a source you trust.

```step
stage: info
check: { type: reflect, text: "I can name two reasons an AI could be wrong even when its program works." }
```
