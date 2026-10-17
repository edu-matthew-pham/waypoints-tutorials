---
title: Can we design AI to make us think?
summary: Sort tutor messages into three designs, then decide which design suits which learner, and design your own.
language: science
shape: 5e
unit: choosing-assistance
order: 3
voice: { name: af_heart, speed: 1.1 }
---
Last lesson showed that more interaction doesn't always mean more learning. If we could decide when a tutor explains, asks or hints, **how should we arrange that help?**

## Engage: two tutors

```step
stage: predict
check:
  type: predict
  q: "A beginner is learning a new kind of writing. Which tutor is better?"
  options: ["One that always gives the complete answer", "One that always asks questions first", "Neither every time: it depends on the learner and the goal"]
  actual: "Showing a model and asking questions can both help. Which works better depends on what the learner already knows and what they are trying to learn."
```

Why might showing someone how first help when they've never seen a method? When might letting them try first, with hints, work better?

## Explore: three tutor designs

```step
stage: run
tasks:
  - check:
      type: sort
      q: "Which tutor design does each message come from?"
      options: ["A: show a model first", "B: try first, with hints", "C: less help each time"]
      items:
        - ["Here is a model paragraph. Find the claim, the reason and the evidence.", "A: show a model first"]
        - ["Write your paragraph first. Which sentence is your claim?", "B: try first, with hints"]
        - ["Your evidence doesn't back up your claim yet. What could you add?", "B: try first, with hints"]
        - ["Here's a half-finished paragraph. Fill in the evidence.", "C: less help each time"]
        - ["Now write one on a new topic, without the model.", "C: less help each time"]
  - check: { type: reflect, text: "I thought of a skill I learned outside school, and whether someone showed me first or let me try first." }
```

Three tutors help a student learn to write a persuasive paragraph.

**Tutor A shows a model first.** It shows a short paragraph and points out the claim, the reason, the evidence and the explanation. The student finds each part, then writes one on a new topic.

**Tutor B lets the student try first, with hints.** The student writes a paragraph. The tutor asks which sentence is the claim, and gives a hint about evidence. This can show exactly where the student is stuck. But lots of questions can be frustrating if you don't know yet what a good paragraph looks like.

**Tutor C gives less help each time.** It shows a full model, then a half-finished one, then asks for a new paragraph with no model.

### Sort the messages

Which tutor would say each one?

### Your own experience

Think of a sport move, a recipe, a game or an instrument. Did someone show you first, or did you try first? Did the help get less over time?

## Explain: support that shrinks

```step
stage: investigate
tasks:
  - check:
      type: question
      q: "Two apps teach paragraph writing. App 1 adds badges, sounds and a timer. App 2 shows a model, then a half-finished paragraph, then asks for your own. Which one gives step-by-step support that shrinks?"
      options: ["App 2", "App 1", "Both, because both are interactive"]
      answer: 0
      feedback: [null, "Badges and timers make it lively, but they don't support the writing itself.", "Being interactive isn't the same as supporting the skill."]
  - check:
      type: question
      q: "Dev has never written a persuasive paragraph. His tutor only asks questions, and he gets frustrated. What would help most?"
      options: ["Show him a short model first, then let him try", "Ask him more questions", "Give him a finished paragraph to hand in"]
      answer: 0
      feedback: [null, "He doesn't know yet what a good paragraph looks like, so more questions may not help.", "That finishes the task but skips the learning."]
  - check:
      type: question
      q: "Which kind of struggle is most likely to help learning?"
      options: ["Stuck on one step, but with notes and a hint to try", "Stuck for 30 minutes with no idea where to start", "No struggle: a question that's too easy"]
      answer: 0
      feedback: [null, "Being completely stuck for that long usually isn't productive.", "Too easy means there is nothing new to learn."]
```

Support that helps you do something you can't yet do alone is called **scaffolding**, like the scaffolding around a building. It is meant to come down.

- **It isn't just making things lively.** Badges and sounds make an app interactive. Scaffolding supports the skill itself: a model, a question, a hint about your mistake.
- **Some struggle helps.** Effort helps when you have enough to make progress. Being completely stuck, for a long time, usually doesn't.
- **Take the support away.** Giving less help, then trying a new task alone, shows whether the skill is growing. Remember Unit 1: doing well straight away doesn't show you'll remember it.

### Two apps

Which app supports the writing itself?

### Dev

Dev is a beginner.

### Good struggle

Which struggle has a way forward?

## Elaborate: design a tutor

```step
stage: make
tier: typical
check: { type: reflect, text: "I designed a support plan, tested it against a different learner, and found a weakness." }
```

Choose something to learn: writing a paragraph, explaining a science idea, or solving a maths problem.

Plan the help:

1. What does your learner already know?
2. What help comes first: a model, a question, or a try?
3. When will the help get less?
4. What new task, without help, will show they can do it?

Now test your plan. What if the learner knows less than you thought? What if they ask for the answer and can't explain it?

Who should decide how much help to give: the **student**, the **teacher**, or **the app itself**? Give one reason for two of these.

## Evaluate: no single best design

```step
stage: info
check:
  type: match
  q: "Which tutor design probably suits each learner best?"
  pairs:
    - ["Dev has never seen a persuasive paragraph", "A: show a model first"]
    - ["Mei already writes good paragraphs", "B: try first, with hints"]
    - ["Sam has studied one model, but can't yet write one alone", "C: less help each time"]
  explain: "A model first helps a beginner see what good looks like. Someone who already writes well gains more from trying first. Help that shrinks moves a learner from the model to working alone."
```

**Unit question:** when should you keep the thinking, choose a tool, or ask for help?

**Next unit:** help can be useful while you learn. What changes when schools use your work to judge what you've achieved?
