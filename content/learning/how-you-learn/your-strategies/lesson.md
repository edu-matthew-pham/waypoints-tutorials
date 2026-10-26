---
order: 4
unit: use
title: Your strategies
summary: "There's no one strategy for everything: the right one depends on what kind of stuck you're in. Seven general strategies cover before, during and after a task, and each has a card to look up later. Then you pick one and try it on a real task from another subject this week."
language: science
shape: 5e
hook: "Lee has been staring at the same homework question for ten minutes. Reading it again hasn't helped. What should Lee try next?"
---
Everyone here is made up. In the last step you'll choose a real task of your own, but you don't need to share it.

## Engage: what should Lee try?

```step
stage: predict
insight: "Committing to one fix before seeing that the right fix depends on the kind of stuck."
check:
  type: predict
  q: "Lee has stared at the same homework question for ten minutes. What should Lee try next?"
  options: ["Read it again, more slowly", "Ask: what is it actually asking me to find?", "Skip it and never come back", "Look up the answer"]
  actual: "It depends what's wrong. If Lee doesn't understand the question, asking what it's asking helps most. If Lee understands it but has no plan, a smaller example might help. Reading it a third time rarely does. The next step matches strategies to kinds of stuck."
```

## Explore: match the stuck to the strategy

```step
stage: run
insight: "Matching kinds of stuck to strategies: different problems need different moves."
check:
  type: match
  q: "Match each made-up learner's problem to the strategy that fits best."
  pairs:
    - ["Sam isn't sure what the task wants him to hand in.", "What is it asking?"]
    - ["Ava understands the question but doesn't know where to start.", "Make a plan, or try a smaller version"]
    - ["Raj got an answer of 400 kg for the mass of an apple.", "Does it make sense?"]
    - ["Zoe has read the chapter and thinks she knows it, but isn't sure.", "Test yourself without the notes"]
    - ["Eli got a test back and keeps losing marks the same way.", "Look back: what would I change?"]
```

Did you pick "read it again" for Lee? It's the most common choice, and the one that helps least. **The trick is to work out what kind of stuck you're in first.**

## Explain: a toolkit, not a rule

```step
stage: investigate
insight: "Naming the general strategies by stage. The planted mistake is using one strategy for every kind of stuck."
tasks:
  - check:
      type: bug
      code: "working.txt#nib"
      text: "Nib has learned one strategy and loves it. Click the line where Nib's thinking first goes wrong."
      answer: 3
      fault: logic
      misconception: one-strategy-for-everything
      explain: "Line 3: Nib uses the same strategy for a different kind of stuck. Testing yourself checks what you remember, but Nib doesn't understand the question. Asking 'what is it asking?' fits better."
  - check:
      type: sort
      q: "Sort the strategies by when you'd usually use them."
      options: ["Before", "During", "After"]
      items:
        - ["What is it asking?", "Before"]
        - ["Make a plan", "Before"]
        - ["Predict first", "During"]
        - ["Check your confidence", "During"]
        - ["Explain it to yourself", "During"]
        - ["Look back", "After"]
```

Seven strategies cover most tasks, in any subject:

| When | Strategy | Ask yourself |
|---|---|---|
| Before | **What is it asking?** | What do I have to find, make or hand in? |
| Before | **Make a plan** | What's my first step? What's a smaller version I could try? |
| During | **Predict first** | What do I expect to happen, or roughly what answer? |
| During | **Check your confidence** | How sure am I, and how could I check? |
| During | **Explain it to yourself** | Can I say why each step works? |
| During | **When you're stuck** | What kind of stuck is this? |
| After | **Look back** | Did it work? What would I change next time? |

Each one has a card with steps and what it looks like in different subjects: [Strategy cards](../reference/). Code has its own cards there too.

You won't use all seven every time. Pick the one that fits, and if it doesn't help, try another. That's the "during" move again: checking whether your strategy is working.

### Nib's slip

### When to use them

## Elaborate: your own task

```step
stage: modify
insight: "The transfer step: one strategy, on a real task from another subject, planned now and used this week."
tasks:
  - check:
      type: reflect
      text: "I've chosen a real task from another subject this week (or one from the list below)."
  - check:
      type: reflect
      text: "I've picked one strategy that fits it, and I know when in the task I'll use it."
```

Choose a task you have this week in another subject: a maths homework set, a science write-up, an English paragraph, a coding task, revising for a test. If you have nothing on, pick one from the list:

- **Maths:** five questions from your current topic. Use *Predict first*: estimate each answer before working it out.
- **Science:** the method of your last experiment. Use *What is it asking?*: write in one line what the experiment was meant to find out.
- **English:** a paragraph you wrote recently. Use *Look back*: reread it as a reader, and change one sentence.
- **Any subject:** tomorrow's revision. Use *Explain it to yourself*: explain the idea out loud without your notes.

Write down (just for you) the task, the strategy and when you'll use it. Afterwards, look back: did it help?

### Choose a task

### Choose a strategy

## Evaluate: which strategy?

```step
stage: info
tasks:
  - check:
      type: question
      q: "Ivy finishes a coding task and it works, but she isn't sure why one line is needed. Which strategy fits best?"
      options: ["Explain it to yourself", "Make a plan", "What is it asking?", "Nothing: it works"]
      answer: 0
      feedback: [null, "The task's done; she needs to understand a line, not plan.", "She knows what the task asked.", "It works, but if she can't explain the line, she can't use it again."]
      explain: "Explaining each line, out loud or in a comment, shows what she understands and what she doesn't yet."
  - check: { type: reflect, text: "I can choose a strategy that fits the kind of stuck I'm in." }
```

### Ivy's line

### Look back

**A private think** (just for you): next week, when you notice you're stuck, what will you ask yourself first?
