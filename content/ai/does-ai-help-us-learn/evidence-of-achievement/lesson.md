---
title: How can we tell what we have learned?
summary: Match pieces of evidence to the goal they fit, and see how the same work can mean different things under different goals.
language: science
shape: 5e
unit: learning-and-society
order: 2
voice: { name: af_heart, speed: 1.1 }
---
Feedback helps you decide what to learn next. But schools also give marks and reports. **What can these judgements tell us about what someone has learned?**

## Engage: three good reports

```step
stage: predict
check:
  type: predict
  q: "Three students hand in equally good reports on cutting waste at school. Each had different help. What do we know?"
  options: ["They learned the same things", "The reports look alike, but what each student learned could be different", "Anyone who used help learned nothing"]
  actual: "A report shows what was made. What it tells us about the student depends on the goal and on how the work was done."
```

Should a test check what you can do alone, what you can do with tools, or both?

## Explore: match the evidence to the goal

```step
stage: run
tasks:
  - check:
      type: sort
      q: "Which goal does each piece of evidence fit best?"
      options: ["Goal 1: can judge evidence without help", "Goal 2: can run a good investigation using tools", "Not enough on its own for either"]
      items:
        - ["Judging a new source in class, without notes or AI", "Goal 1: can judge evidence without help"]
        - ["Explaining out loud why one source is weak, without notes", "Goal 1: can judge evidence without help"]
        - ["A log of which tools were used, what each one suggested, and what was kept", "Goal 2: can run a good investigation using tools"]
        - ["Notes showing how AI's suggestions were checked against the school's bin data", "Goal 2: can run a good investigation using tools"]
        - ["A polished final report", "Not enough on its own for either", "A polished report doesn't show who did the judging, or how."]
  - check:
      type: question
      q: "Learner C let AI write most of the report and didn't check it. Under Goal 2, what is missing?"
      options: ["Evidence that C checked the AI's work and made the decisions", "Nothing: Goal 2 allows tools", "A longer report"]
      answer: 0
      feedback: [null, "Goal 2 allows tools, but it's about using them well. That includes checking.", "Length isn't the problem."]
```

Three students investigate how to cut waste at school.

- **Learner A** researches, judges the information and writes the report with no AI.
- **Learner B** researches and judges the evidence, then uses AI to organise notes and tidy the writing.
- **Learner C** asks AI to do the investigation and write the report, and hands in most of it unchanged.

The teacher could be checking one of two goals:

- **Goal 1:** You can judge evidence about the environment *without help*.
- **Goal 2:** You can run a good investigation *using the right tools well*.

These learners are made up. How much AI they used doesn't, by itself, tell us what they learned.

### Match the evidence

Sort each piece of evidence by the goal it fits.

### Learner C

Check Learner C against Goal 2.

## Explain: purposes and fitting evidence

```step
stage: investigate
tasks:
  - check:
      type: question
      q: "At the end of term, a teacher uses a test to write your report card. What is this test mainly for?"
      options: ["Judging what you have achieved by then", "Giving you hints while you practise", "Showing you what to try next tomorrow"]
      answer: 0
      feedback: [null, "Hints during practice are for learning, not for a report card.", "It may help with that too, but a report card judges what was achieved."]
  - check:
      type: question
      q: "The goal is Goal 1: judge evidence without help. Learner B used AI to organise and tidy. What extra evidence would fit this goal?"
      options: ["Ask B to judge a new source in class, without AI", "Ask B for a neater copy of the report", "Nothing: B's report is good enough"]
      answer: 0
      feedback: [null, "Neatness isn't judging evidence.", "The report shows teamwork with a tool. Goal 1 is about B alone."]
  - check: { type: reflect, text: "I can explain why the same report can count as good evidence for one goal and weak evidence for another." }
```

**Two purposes.** Feedback that helps you improve during learning is **formative**. A judgement about what you've achieved at a point in time, like a report card, is **summative**. One task can do both, but what we can conclude from it is different.

**Evidence that fits.** A test or task is good evidence when it fits the claim being made. A polished report can show you communicate well. It may not show much about researching on your own.

**Both goals matter.** Often, using tools well is the skill. Sometimes, doing it yourself is the skill. Neither goal should quietly replace the other.

### Report cards

What is an end-of-term test mostly for?

### Learner B and Goal 1

What would show B's own judging?

### One report, two goals

Use Learner B's report as your example.

## Elaborate: design a fair task

```step
stage: make
tier: wider
check: { type: reflect, text: "I designed a task that allows AI and still shows what the student learned, and named its weak spot." }
```

Design one task for this unit that **allows AI** and still shows what the student learned.

- What is the goal?
- What would students hand in with the work: a log, drafts, a short talk, an unseen question?
- What would your task still miss?

## Optional: answer questions about your work

```step
stage: modify
tier: typical
prompt:
  title: "Ask me about my work"
  text: |
    Ask me questions about my work, one at a time, so I can show what I learned. Here is my work: [paste it or describe it].
    Don't rewrite it, fix it or add to it. After each answer, ask a follow-up question.
    At the end, tell me which of my answers showed my own thinking most clearly.
check: { type: reflect, text: "I answered questions about my own work, and noticed which answers showed my own thinking." }
```

Use the prompt below on a piece of your own work. Compare with the evidence you sorted: which of your answers showed your own decisions? Did the AI keep to asking, or start rewriting your work? Its summary is a guess, not a mark.

**No AI tool?** A partner can ask you three questions about your work.

## Evaluate: match evidence to a goal

```step
stage: info
tasks:
  - check:
      type: question
      q: "A teacher wants to know if students can explain the water cycle without help. Which evidence fits best?"
      options: ["Each student explains it out loud, without notes", "A poster made with AI images and text", "A class vote on whether they understand it"]
      answer: 0
      feedback: [null, "A poster could show design skills, but not who did the explaining.", "A vote shows how sure people feel, not what they can explain."]
  - check:
      type: reasoning
      q: "Your teacher says you may use AI for your science project, as long as you can show what you learned. Besides the finished project, what would you hand in or do, and why?"
      placeholder: "I would also … because it shows …"
      models:
        - title: "A strong answer"
          text: "I'd keep a short log: what I asked the AI, what it suggested, and what I kept or changed, and why. I'd also be ready to explain one part out loud without notes. The log shows how I used the tool; explaining shows what I understand."
        - title: "A different view that also works"
          text: "I'd hand in my first rough draft, written before I used any AI, next to the final one, with a few lines on what changed and why. The difference between them shows what I did and what I learned."
      criteria: ["I said what my extra evidence would show.", "It shows my own thinking, not only the finished work.", "It fits what the project is meant to show."]
      explain: "A finished project shows what was made. Evidence of your own decisions and explanations shows what you learned."
```

### The water cycle

Which evidence fits the goal?

### Your own project

How could you show what you learned?

**Next lesson:** if different goals need different evidence, who decides which goals matter most?
