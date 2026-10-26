---
order: 2
unit: steer
title: Who's steering?
summary: "Choosing what to learn and steering how you learn it are two different skills. Self-directed learning is choosing your own goal and how to get there. Self-regulated learning is planning, checking and adjusting as you work, even on a task someone else set. Managing how you feel, like staying calm when you're stuck, helps both."
language: science
shape: 5e
hook: "Jun decided to teach herself guitar from online videos. Every day she plays the same easy song. She never checks whether she's getting better. Is she a great learner?"
---
Everyone here is made up. There's no right answer to some of these: the discussion is the point.

## Engage: is Jun a great learner?

```step
stage: predict
insight: "Committing to a view: choosing your own goal feels like the whole of being a good learner, and it isn't."
check:
  type: predict
  q: "Jun chose to learn guitar by herself, but she plays the same easy song every day and never checks whether she's improving. How good is she at steering her learning?"
  options: ["Great: she chose it herself", "Not so good: she isn't checking or adjusting", "Can't tell: it depends what she wants"]
  actual: "She's great at choosing a goal, but she isn't steering the learning: no plan to get better, no check, no change. Those are two different skills, and the next steps pull them apart."
```

## Explore: who chose, who checks?

```step
stage: run
insight: "Sorting by two questions at once: who chose the goal, and does the learner check how it's going?"
check:
  type: sort
  q: "For each made-up learner: who chose the goal, and are they checking how it's going?"
  options: ["Chose it, checks it", "Chose it, doesn't check", "Set by someone else, checks it", "Set by someone else, doesn't check"]
  items:
    - ["Kai picked his own history project on old trains and keeps a list of questions he still can't answer.", "Chose it, checks it", "His goal, and he keeps track of what's missing."]
    - ["Jun picked guitar herself and plays the same easy song every day.", "Chose it, doesn't check", "Her goal, but no checking or changing."]
    - ["Mei was set a maths worksheet and marks the first three answers before doing the rest.", "Set by someone else, checks it", "Someone else's task, but she's steering how she does it."]
    - ["Leo was set the same worksheet and races to the end without looking back.", "Set by someone else, doesn't check", "Done, but not steered."]
    - ["Ana decided to learn to code a game and tests each part before adding the next.", "Chose it, checks it", "Her goal, with checking built in."]
    - ["Tom was told to revise for a test and rereads his notes, feeling fine.", "Set by someone else, doesn't check", "Rereading feels fine but doesn't check what he can do without the notes."]
```

**Who chose the goal** and **whether you check how it's going** are separate questions. Mei didn't choose her worksheet, and she's still steering it well.

## Explain: three ideas that get mixed up

```step
stage: investigate
insight: "Naming the three ideas, then a planted mistake: choosing your goal means you're steering well."
tasks:
  - check:
      type: match
      q: "Match each idea to what it's mostly about."
      pairs:
        - ["Self-directed learning", "Choosing what to learn and why, and how to go about it"]
        - ["Self-regulated learning", "Planning, checking and adjusting while you learn"]
        - ["Self-regulation (everyday)", "Managing how you feel and act, like calming down when you're stuck"]
  - check:
      type: bug
      code: "working.txt#nib"
      text: "Nib is learning to juggle. Click the line where Nib's thinking first goes wrong."
      answer: 2
      fault: logic
      misconception: chose-it-so-regulated
      explain: "Line 2: choosing the goal doesn't mean the learning is going well. Nib still needs a plan and a check, like counting catches each day."
```

Three ideas sound alike, and people mix them up:

- **Self-directed learning** is about *what* and *why*: choosing your own goal, and how you'll go about it. Jun choosing guitar is self-directed.
- **Self-regulated learning** is about *how*: planning, checking and adjusting while you learn. It works on any task, even one someone else set. Mei checking her first three answers is self-regulated.
- **Self-regulation**, in the everyday sense, is managing how you feel and act: staying calm when you're stuck, getting back to work after a distraction. It helps with both of the others. Frustration is often the moment people stop checking and start guessing.

You can be good at one and not the others. At school, teachers often set the goal, so self-regulated learning is the one you'll use most. Outside school, you choose more, and you'll need both.

### Three ideas

### Nib's slip

## Elaborate: a bigger project

```step
stage: modify
tier: typical
insight: "Years 7 and 8: a long, self-chosen project needs both skills, and feelings come into it."
check:
  type: question
  q: "Priya chose to build a model bridge for a term-long project. Three weeks in, it keeps collapsing and she's fed up. What would help her most?"
  options: ["Take a break, then test one part at a time to find where it fails", "Start a completely new project she likes more", "Keep building the same design faster", "Decide she's just not good at building"]
  answer: 0
  feedback: [null, "Sometimes changing project is right, but she hasn't checked what's failing yet.", "Faster won't fix a design that fails.", "That's the frustration talking. Being stuck is part of the project, not proof she can't do it."]
  explain: "Calming down first (everyday self-regulation), then checking one part at a time (self-regulated learning), keeps her own goal (self-directed) on track."
```

## Evaluate: which skill?

```step
stage: info
tasks:
  - check:
      type: question
      q: "Ben's teacher sets an essay. Ben makes a plan, checks it against the task halfway, and changes his second paragraph. Which skill is he mostly using?"
      options: ["Self-regulated learning", "Self-directed learning", "Neither: the teacher chose the task"]
      answer: 0
      feedback: [null, "He didn't choose the essay, so it isn't mostly self-directed.", "Someone else chose the goal, but Ben is steering how he does it."]
      explain: "Planning, checking and adjusting on a task someone else set is self-regulated learning."
  - check: { type: reflect, text: "I can explain how choosing what to learn is different from steering how I learn it." }
```

### Ben's essay

### Look back

**A private think** (just for you): where are you better at choosing, and where are you better at steering?
