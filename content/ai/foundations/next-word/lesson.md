---
sources:
  - { title: "Swift (2026), LLMs Unplugged (peer-reviewed conference paper)", url: "https://doi.org/10.1145/3786228.3786237", checked: 2026-10-15 }
  - { title: "AI4K12, Grade Band Progression Charts", url: "https://ai4k12.org/gradeband-progression-charts/", checked: 2026-10-15 }
  - { title: "UNESCO, AI Competency Framework for Students (2024)", url: "https://www.unesco.org/en/articles/ai-competency-framework-students", checked: 2026-10-15 }
title: Can you predict the next word?
summary: See how examples influence which words seem likely to come next, without assuming that the most likely word is certain.
language: science
shape: 5e
explainClip:
  query: { code: "@boards.yml#explain", fresh: 1, id: explain }
  caption: "How examples shape a prediction"
  say: "Patterns are not rules."
  clip:
    - caption: { text: "Three examples end in mat, two in chair and one in roof.", say: "Three examples end in mat, two in chair and one in roof." }
    - wait: 1200
    - caption: { text: "Mat is most frequent, but other endings remain possible.", say: "Mat is most frequent, but other endings remain possible." }
    - wait: 1200
    - caption: { text: "A next-word suggestion is a possibility, not a statement of your intention.", say: "A next-word suggestion is a possibility, not a statement of your intention." }
    - wait: 1200
app:
  command: node "$REPO_ROOT/tools/serve.mjs" "$REPO_ROOT/dist/_playground-board" 8241
  url: http://127.0.0.1:8241/index.html
  readySelector: "#gpanel"
  layout: full
unit: text-generation
hook: "A phone suggests the next word as you type. Is it predicting what you mean, or using patterns from examples?"
time: 20
misconceptions:
  - "Most likely means certain."
  - "The generator understands what the writer intends."
  - "Changing the examples cannot change the model's prediction."
leads: "Follow with the dice sampling lesson. Ask students to bring a physical die; no online AI account is needed."
exit: { q: "If the most common ending appears 3 times in 6 examples, must it be selected?", a: "No. It has probability 3/6 under our sampling rule; other endings remain possible." }
order: 1
---
A sentence can have more than one sensible next word. A text generator needs a way to choose between possibilities.

## Engage: finish the sentence

```step
stage: predict
check:
  type: predict
  q: "Which word must come next after 'The cat sat on the'?"
  options: ["mat", "chair", "roof", "There is no single word that must come next"]
  actual: "There is no single word that must come next. Several endings are possible, even if some are more familiar."
```

Write down one ending of your own **before looking at any examples**. Why did you choose it? Keep your answer to revisit later.

## Explore: change the examples

```step
stage: run
insight: "Students change example endings and inspect how word frequencies change the prediction."
try: { playground: board, starter: "boards.yml", height: 590 }
check: { type: board, text: "Add five roof examples and update the model.", when: "c >= 1 and r = 1 and n >= 11" }
```

Start with **mat = 3**, **chair = 2**, **roof = 1**. Predict the most frequent ending, then add five more lines containing **roof**. Press **Update examples** and explain why the prediction changes.

## Explain: patterns are not rules

```step
stage: investigate
tasks:
  - check:
      type: question
      q: "Which ending appears most often in the original six examples?"
      options: ["mat", "chair", "roof", "All appear equally often"]
      answer: 0
  - check:
      type: question
      q: "Does 'mat' being most common mean the next word must be 'mat'?"
      options: ["Yes, the most common word is always correct", "No, other endings are possible"]
      answer: 1
  - check: { type: reflect, text: "I can explain the difference between a frequent ending and a certain ending." }
```

### Find the most frequent ending

Look at the original six examples and identify the ending that occurs most often.

### Frequent does not mean certain

Explain why the most frequent ending is not guaranteed to be chosen.

### Put the distinction into words

Complete the reflection using the evidence from the examples.

A simple model can count which words followed a phrase in its examples. More examples of one ending make that ending **more frequent**, but not certain. Select **Show fractions and percentages** on the board if you want to describe these frequencies numerically: mat is 3 out of 6, chair 2 out of 6 and roof 1 out of 6. If a generator samples endings in proportion to these counts, those fractions become its probabilities.

A probability is not a promise. The most likely choice is not the only possible choice.

Modern language models use tokens, neural networks and much more complex learned representations of context. Our small counting model is a way to investigate one idea: **possible next words can have different probabilities**.

## Elaborate: change the evidence

```step
stage: modify
check:
  type: question
  q: "Five more 'roof' endings are added. Which ending is now most common?"
  options: ["mat", "chair", "roof", "They are still equal"]
  answer: 2
  feedback: ["Mat still occurs 3 times; roof now occurs 6.", "Chair still occurs twice.", null, "Count each ending after the new examples."]
```

Discuss: does changing the examples change the meaning of the sentence, or just the pattern our model has learned from them?

## Evaluate: a new pattern

```step
stage: info
check:
  type: question
  q: "A model sees 'I drink' followed by water four times and juice once. Which statement is justified?"
  options: ["Water is guaranteed to come next", "Water is more frequent in these examples, but juice remains possible", "Juice is impossible", "The model knows what the writer wants"]
  answer: 1
```

**Without looking at the table**, explain why a text generator might produce different endings for the same beginning. Then return to your first prediction: would you change it? Why?

## Learning with AI: question a suggestion

An AI writing assistant suggests **mat** to finish “The cat sat on the”. Compare these two reactions:

- **A:** “The AI suggested mat, so it must be right.”
- **B:** “Mat is plausible, but chair or roof might fit too. I should check the sentence and what I mean.”

Which reaction shows better judgement? Explain what you would check before accepting a suggested word. **You do not need an AI account**: the suggestion above is a prepared example, not a live AI response.

```step
stage: investigate
check:
  type: question
  q: "An AI suggests a likely next word. What should you do?"
  options: ["Accept it because AI knows the writer's intention", "Check whether it fits the meaning and purpose of your sentence", "Reject every AI suggestion"]
  answer: 1
```

**Looking ahead:** Our model uses one fixed phrase and a small set of examples, so we can see both why it favours an ending and where it struggles. Modern language models predict tokens using much richer context and learned patterns. Their responses can be far more useful and convincing, but they still have blind spots — often harder to identify or explain. **Treat an AI suggestion as something to evaluate, not automatically accept:** does it fit your purpose, and what would you need to check?

**For teachers:** Formal fractions and percentages are an optional extension, not a prerequisite. Start with counts and bars. This is an intentionally transparent, fixed-context frequency model. Ask learners to justify answers using *counts* rather than guesses about the writer's intentions. The next lesson introduces sampling; the interactive board lets students edit examples and immediately inspect the resulting counts. Do not describe this toy model as the mechanism used by a modern LLM.

**Next:** use dice to make a choice according to these probabilities.
