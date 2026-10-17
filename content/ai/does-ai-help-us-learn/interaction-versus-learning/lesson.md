---
title: Does more interaction mean better learning?
summary: Try one maths question, compare four kinds of help with it, and tell clicking from thinking and from learning.
language: science
shape: 5e
unit: choosing-assistance
order: 2
voice: { name: af_heart, speed: 1.1 }
---
You can click a lot, get lots of feedback or chat for a long time without learning much. But these things can also help. **What does each kind of interaction add to learning?**

## Engage: a busy activity

```step
stage: predict
check:
  type: predict
  q: "One learner answers twenty quick quiz questions. Another explains one worked example. Who learns more?"
  options: ["The quiz learner: more practice", "The explaining learner: deeper thinking", "It depends on what each needs to learn and what we check afterwards"]
  actual: "Counting answers or clicks doesn't show what someone learned. The two activities ask for different thinking, and suit different needs."
```

Fast quiz games can be lively and good for remembering. When is that enough, and when is it not?

## Explore: four kinds of help

```step
stage: run
tasks:
  - check:
      type: question
      q: "Work it out: what is (-3) × (-4)?"
      options: ["12", "-12", "-7", "7"]
      answer: 0
      feedback: [null, "A common slip: two negatives multiplied make a positive.", "That's adding, not multiplying.", "Check: is this adding or multiplying?"]
  - check:
      type: match
      q: "Match each kind of help to what it makes the learner do."
      pairs:
        - ["A: the quiz game", "Shows the right answer, then moves on"]
        - ["B: the number pattern", "Spot a pattern and explain it"]
        - ["C: the computer tutorial", "Look at your exact mistake, then try again"]
        - ["D: the chat", "Ask your own question and choose how to learn"]
```

Imagine a learner answers **-12** to (-3) × (-4). Here are four kinds of help they might get. They are made-up examples, not real apps or a real AI.

**A: a quiz game.** "Incorrect! The answer is 12." Next question.

**B: a number pattern.** (-3) × 2 = -6, (-3) × 1 = -3, (-3) × 0 = 0. What comes next for (-3) × (-1)? Explain what changes each time.

**C: a computer tutorial, no AI.** "You might be using the rule for one negative number. Predict the next value in this pattern, then try again." This is a prepared message for this exact mistake.

**D: a chat with an AI-style tutor.** *Learner:* "I know the rule, but why does it work?" *Tutor:* "Would a pattern, a picture or some algebra help you see why?"

### Try it yourself

Answer the question before you look at the help.

### Compare the help

What does each kind of help make the learner do?

## Explain: clicking, thinking, responding, learning

```step
stage: investigate
tasks:
  - check:
      type: question
      q: "Jo answered 40 quiz questions in ten minutes, mostly by guessing. Ana answered 5 and explained each one. Which tells you more about what they understand?"
      options: ["Ana's explanations", "Jo's 40 answers", "Neither: you can only tell from a test"]
      answer: 0
      feedback: [null, "Lots of clicks, mostly guesses, show very little.", "A test is one way, but explanations are evidence too."]
  - check:
      type: question
      q: "Which kind of help responded to the learner's exact mistake without any AI?"
      options: ["C: the computer tutorial", "A: the quiz game", "D: the chat"]
      answer: 0
      feedback: [null, "The quiz only said the answer was wrong.", "The chat used AI-style replies. Look for one that didn't."]
  - check:
      type: question
      q: "What can AI chat add that the others can't?"
      options: ["An answer to a question nobody prepared for, though that answer can be wrong", "Explanations that are always correct", "Proof that you'll remember it later"]
      answer: 0
      feedback: [null, "AI explanations can be wrong or confusing.", "No kind of help proves that on its own."]
```

Four different things are going on.

- **What you do:** clicking, tapping, answering. Easy to count, but it doesn't show what you understand.
- **What you think about:** remembering, explaining, predicting, fixing. This is where learning can happen. Even lots of thinking during an activity doesn't prove you'll remember it.
- **How the help responds to you:** the same message for everyone, a prepared message for a common mistake, or a reply to your own question. More responsive isn't always better.
- **Evidence you learned:** a good explanation, a new question you can do, a check a week later.

### Jo and Ana

Who showed their thinking?

### No AI needed

Look back at A to D.

### What AI adds

What can chat do that a prepared message can't, and what is the catch?

## Elaborate: change the learner

```step
stage: make
tier: typical
check: { type: reflect, text: "I chose different help for two learners and explained why." }
```

Two learners need help with negative numbers:

- **Learner 1** already understands why, but needs to get quicker.
- **Learner 2** keeps using the wrong sign rule with confidence, and needs to see why it works.

Which kind of help (A, B, C or D) would you choose for each? What if the AI's explanation is wrong? What if a non-AI tutorial already fixes the mistake?

Think of a learning app or game you have used. What does it make you do: click, think, or both? How does it respond to your mistakes?

## Evaluate: what does interaction prove?

```step
stage: info
check:
  type: question
  q: "An app says: 'Students using our app answer 500 questions a week!' What does that show?"
  options: ["That students are busy in the app, not what they learned", "That the app teaches better than a worked example", "That students will remember it next month"]
  answer: 0
  feedback: [null, "Busy isn't the same as learning. You'd need evidence like a new question or a later check.", "Number of answers doesn't tell us that."]
```

**Next lesson:** if *how* help is given matters, how should we design it?
