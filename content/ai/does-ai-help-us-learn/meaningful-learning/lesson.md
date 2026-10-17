---
title: What makes learning meaningful?
summary: Meet four learners, sort what we can and can't tell about their learning, and compare different views of what learning is worth.
language: science
shape: 5e
unit: what-is-learning
order: 3
voice: { name: af_heart, speed: 1.1 }
---
Last lesson asked whether doing well shows learning. That raises another question: **what kinds of learning should we care about?**

One student gets better at solving maths problems alone. Another uses tools to make something useful for their community. A third learns by working with a group. These are different. Are some worth more than others?

## Engage: a hard comparison

```step
stage: predict
check:
  type: predict
  q: "One student can now solve a problem alone. Another used tools to make something their group can use. Which learned more?"
  options: ["The one who can solve it alone", "The one who made something useful", "They learned different things, so it depends what we value"]
  actual: "Both may have learned something worthwhile, but different things. Deciding which matters more depends on the goal and on what we value."
```

Imagine you had to choose: learn a skill yourself, or make something useful with people and tools. Would you choose differently for an exam, a community project, or a hobby?

## Explore: four learners

```step
stage: run
tasks:
  - check:
      type: sort
      q: "Does this evidence show what the learner can do or understand?"
      options: ["Yes, it shows something they learned", "Not yet: we need more evidence"]
      items:
        - ["Maya solves a new kind of equation with no help", "Yes, it shows something they learned"]
        - ["Sam hands in a polished report that an AI wrote", "Not yet: we need more evidence", "The report is polished, but we can't tell what Sam understands."]
        - ["Jules changes a game three times after watching players get stuck", "Yes, it shows something they learned", "Jules's changes show what Jules learned about players."]
        - ["Aria's group hands in a strong garden plan", "Not yet: we need more evidence", "A good group plan doesn't show what each person did."]
        - ["Aria answers a neighbour's tricky question about her part of the plan", "Yes, it shows something they learned"]
        - ["Sam explains, without notes, why one source in the report can't be trusted", "Yes, it shows something they learned", "Now we have evidence of Sam's own thinking."]
  - check: { type: reflect, text: "I thought of something I learned this year, and whether I learned it alone, with tools, or with other people." }
```

**Maya** can now solve new equations on her own.

**Jules** uses a game maker, so he doesn't code every part. He makes three versions of a game and watches players try each one.

**Aria** works with classmates, neighbours and online maps on a plan for a community garden. She changes her ideas when others ask hard questions.

**Sam** asks an AI to write a whole research report. Sam hands it in after a quick read.

These are made-up learners for discussion, not research findings.

### Sort the evidence

Some evidence shows what a learner can do. Some only shows that work exists.

### Your own learning

Think of something you learned this year that you are proud of. Did you learn it alone, with tools, or with other people? How could someone else tell you learned it?

## Explain: different views of learning

```step
stage: investigate
tasks:
  - check:
      type: question
      q: "A teacher checks learning with one test, done alone, with no notes. Whose learning is it most likely to miss?"
      options: ["Aria's: much of it happened by working with other people", "Maya's: she learned to solve problems alone", "Nobody's: a test alone shows all learning"]
      answer: 0
      feedback: [null, "A test alone suits what Maya learned.", "Think about Aria. What did she learn that a test alone wouldn't show?"]
  - check:
      type: question
      q: "What can Jules's three game versions show best?"
      options: ["What Jules learned about designing a game players enjoy", "That Jules can write game code from nothing", "Nothing, because a game maker did the hard part"]
      answer: 0
      feedback: [null, "The game maker did much of the code, so this isn't strong evidence of coding.", "The game maker did the code. Jules did the designing and testing."]
  - check: { type: reflect, text: "I can explain two views of what learning is worth, and one weakness of each." }
```

There is more than one view of what learning is worth.

- **Doing it yourself.** One aim of school is to build knowledge and skills you can use on your own. Without them, it is harder to spot mistakes or decide whether to trust help.
- **Learning with people and tools.** Another view is that people learn by taking part: talking, working in groups and using shared tools. Learning isn't only what you can do alone. But a good group result doesn't show what each person learned.
- **Making choices.** People also value setting your own goals, coming up with ideas and choosing well. Feeling in control is not the same as choosing well, though.

These are ways of looking, not a checklist. Each one shows some learning and misses some.

### Aria and the test

Think about how Aria learned.

### Jules's three versions

Think about which part Jules did himself.

### Your view

Which view do you lean towards? What does it miss?

## Elaborate: argue both sides

```step
stage: make
tier: typical
check: { type: reflect, text: "I argued for a view I don't hold, and I named one question I still can't answer." }
```

In pairs, look at this claim:

**"Schools should care most about what students can do alone, even when tools could help them do more."**

One person argues for it. The other argues against it. Then swap. Use Maya, Jules, Aria and Sam as examples. Ask your partner one honest question before you answer them.

Then talk about:

- What could we lose if school only valued what you can make with tools?
- What could we lose if school only valued what you can do alone?
- Who decides which learning counts?

**Inquiry record (optional):** write one argument that got stronger as you talked, and one question you still can't answer.

## Evaluate: compare two learners

```step
stage: info
check:
  type: question
  q: "Which is the fairest way to judge what the four learners learned?"
  options: ["Look at what each was trying to learn, what they did, and more than one kind of evidence", "Give all four the same test, done alone, with no notes", "Judge their finished work, because that's what they made"]
  answer: 0
  feedback: [null, "One test alone would suit Maya, but miss much of what Jules and Aria learned.", "Finished work can hide who did the thinking, as Sam's report does."]
```

Choose **two** of the four learners. Write what each one may have learned, what evidence shows it, and what you still don't know. If you think one learned something more valuable, say why.

**End of Unit 1:** go back to the question *Does AI help us learn?* What do you now need to say about the word *learn* before you can answer it?

**Next unit:** researchers make claims about AI and learning. How do we know if the evidence backs them up?
