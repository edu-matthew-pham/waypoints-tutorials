---
title: Ask for the right kind of help
summary: Compare hints, worked examples and independent attempts to select assistance that develops understanding.
language: science
shape: 5e
unit: learning-effectively-with-ai
order: 1
voice: { name: af_heart, speed: 1.1 }
app:
  command: node "$REPO_ROOT/tools/serve.mjs" "$REPO_ROOT/dist/_playground-board" 8241
  url: http://127.0.0.1:8241/index.html
  readySelector: "#gpanel"
  layout: full
explainClip:
  query: { code: "@boards.yml#explain", fresh: 1, id: explain }
  caption: "Choose how much help to request"
  say: "Good assistance depends on what you are trying to learn."
  clip:
    - caption: { text: "Try a learning challenge independently first." }
    - wait: 1000
    - caption: { text: "Request a hint, or inspect a worked example when needed." }
    - wait: 1000
    - caption: { text: "Then try a new question to test your own understanding." }
    - wait: 1000
---
Earlier you saw that AI writes by predicting likely next words, one at a time. That makes it fast at producing finished answers, but a finished answer can skip the thinking you came to practise. In the previous unit, you learned how to ask and follow up. Now consider **what kind of help actually develops your understanding**. AI might explain, question, offer hints, provide feedback or complete the task. The best choice depends on what you need to learn.

## Engage: what kind of help?

```step
stage: predict
check:
  type: predict
  q: "You are learning to add unlike fractions. Which assistance is most likely to let you practise the method yourself?"
  options: ["Copy a finished answer immediately", "Ask for one hint, then attempt the next step", "Avoid checking errors"]
  actual: "A hint can support practice while leaving the next step to the learner, though sometimes a worked example is appropriate."
```

## Explore: try different amounts of help

```step
stage: run
try: { playground: board, starter: "boards.yml#explore", height: 690 }
check: { type: board, text: "Complete an independent transfer attempt after inspecting the available assistance.", when: "t >= 1" }
```

The board contains **prepared hints and worked examples**, not a live AI tutor. Begin with a maths or science challenge, **write an attempt**, then ask for a hint if you need one. When you are ready, press **Try a new question** and attempt it without looking back. Say how sure you are, record it, then compare with the model answer. Try it once with a hint and once with the worked example: which left more of the thinking to you? A worked example is not inherently bad; it may be useful when you are new to the method or genuinely stuck.

## Explain: help or replacement?

```step
stage: investigate
tasks:
  - check:
      type: question
      q: "On the board, you asked for one hint and then wrote the rest yourself. Your friend pressed Show worked example straight away. Who did more of the thinking?"
      options: ["You: the hint left the next steps to you", "Your friend: the worked example has more steps in it", "The same: you both saw the method"]
      answer: 0
      feedback: [null, "More steps on the screen isn't more thinking by your friend.", "Seeing a method isn't the same as working it out."]
  - check:
      type: question
      q: "After using the worked example for 1/2 + 1/4, which result is the best evidence you learned the method?"
      options: ["You get the new question, 1/3 + 1/6, right without looking back", "You understood the worked example while reading it", "You chose high confidence"]
      answer: 0
      feedback: [null, "Understanding while reading can feel like learning. A new question tests it.", "Confidence is a guess. The model answer checks it."]
  - check: { type: reflect, text: "I can explain when hints, feedback or worked examples support my learning." }
```

### Choose

What were you able to attempt before asking for help?

### Compare

Which type of assistance was useful, and why did it suit your current knowledge?

### Transfer

Could you complete a related task without copying the example? What still needs practice?

## Elaborate: design a helpful request

```step
stage: make
tier: typical
check: { type: reflect, text: "I completed and explained an independent application of this lesson." }
```

Choose something you are currently learning. Write three possible AI requests: **a hint**, **feedback on your attempt** and **a worked example**. Decide when each might be useful. Then write a fourth request that asks for a new question so you can test whether you learned the skill.

## Evaluate: decide independently

```step
stage: info
check:
  type: question
  q: "When is a completed worked example useful for learning?"
  options: ["Never; examples stop all learning", "When it helps you understand a method and you then practise independently", "Only when you can copy it directly"]
  answer: 1
```

Without the board, explain the difference between *completing a task* and *learning to complete that kind of task*. Include one example of appropriate assistance.

## Learning with AI: keep the learner active

```step
stage: info
check: { type: reflect, text: "I can say which kind of help I need right now, and why." }
```

Before asking AI for help, consider what you already know and what you need to practise. A useful assistant may give a question or feedback rather than the answer. But requiring struggle without support is not the goal either. Adjust the assistance as your understanding changes.
