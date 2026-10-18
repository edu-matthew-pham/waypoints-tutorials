---
title: Does it help learning?
summary: "A company pitches StudyPal, a made-up AI study app, to the school. What problem would it solve, what kind of AI is it, and does its evidence show learning? Plan a small fair trial."
language: science
shape: 5e
unit: tool
order: 4
voice: { name: af_heart, speed: 1.1 }
---
Someone proposes a tool. Before anyone asks "is it safe?", the committee asks: **what are we deciding, and does it help the learning we care about?** Test it against the charter's first principle.

> **StudyPal (made up): the pitch**
> *Your AI study buddy! Ask any homework question and get an instant, step-by-step answer, 24/7. Students using StudyPal scored **30% higher**! Free for schools.*
>
> **StudyPal's study (from the company's website)**
> 40 students at one school used StudyPal for two weeks. Students **chose** whether to use it. Those who did scored 30% higher on their **homework** in those two weeks, and finished it faster. There was no test without StudyPal.

## Engage: 30% higher

```step
stage: predict
check:
  type: predict
  q: "StudyPal's users scored 30% higher on homework. Does that show StudyPal helps students learn?"
  options: ["Yes: higher scores mean more learning", "Not yet: it shows better homework while using it, not what students can do without it", "No: AI never helps learning"]
  actual: "Not yet. Homework done with an app that gives step-by-step answers will score higher, whether or not anyone learned. Learning shows up later, on a task without the help. And the students chose to use it, so they may differ from those who didn't."
```

## Explore: read the pitch like a committee

```step
stage: run
tasks:
  - check:
      type: sort
      q: "What does each fact about StudyPal's study tell you?"
      options: ["Shows the task got done", "Could show learning", "Makes the result hard to trust"]
      items:
        - ["Homework scores went up while students used StudyPal", "Shows the task got done", "The app helped finish the homework. That's not the same as learning."]
        - ["Students finished homework faster", "Shows the task got done", "Faster can mean the app did the thinking."]
        - ["Students chose whether to use it", "Makes the result hard to trust", "Keen students may have chosen it, and scored higher anyway."]
        - ["There was no test without StudyPal", "Makes the result hard to trust", "Nobody checked what students could do alone."]
        - ["A test a month later, without the app, on new questions", "Could show learning", "That's what a fair trial would add."]
        - ["Only 40 students, at one school, for two weeks", "Makes the result hard to trust", "Small, short and in one place: it may not hold for us."]
  - check:
      type: reasoning
      q: "Plan a small fair trial of StudyPal for Westbrook. Compared with what? Who, and for how long? What would you measure, and when?"
      placeholder: "Compare with: … Who and how long: … Measure: … When: …"
      models:
        - title: "A strong answer"
          text: "Compare with: two classes doing the same homework with the teacher's usual hints. Who and how long: two Year 8 classes, four weeks; the teacher picks which class, not the students. Measure: a short quiz on new questions without any app. When: at the end, and again a month later."
        - title: "A different view that also works"
          text: "Compare with: StudyPal in hint-only mode versus no app. Who: one class split by the teacher. Measure: whether students can explain their answer in their own words, plus how long homework takes. When: after two weeks and after six."
      criteria: ["I compared StudyPal with something.", "I measured learning without the app, not homework scores.", "I measured later, not only during the trial."]
      explain: "A fair trial compares with something, measures learning without the tool, and checks later. A pitch rarely does all three."
```

### What does it show?

Sort each fact about the study.

### Plan a fair trial

Compared with what? Measured when?

## Explain: four questions before trust

```step
stage: investigate
tasks:
  - check:
      type: question
      q: "Westbrook's maths teachers say their real problem is students who give up when stuck at home. Does StudyPal's instant step-by-step answer solve that problem?"
      options: ["Partly: students won't give up, but they may copy instead of learning; a hint would fit the problem better", "Yes, completely", "No: the problem isn't real"]
      answer: 0
      feedback: [null, "It stops the giving up, but does it keep the thinking? Check against 'learning first'.", "The teachers named it: it's the problem you're deciding about."]
  - check: { type: reflect, text: "I can ask what problem a tool solves, what kind of AI it is, and whether its evidence shows learning." }
```

Before anything else, a committee asks:

1. **What problem are we solving?** Name it first. A tool looking for a problem is a warning sign.
2. **What kind of AI is it?** StudyPal **makes new content** (it writes answers). That tells you how it can go wrong: made-up steps that look right.
3. **Does the evidence show learning?** Compared with what? Measured when, and without the tool? Who chose to use it?
4. **What would a small fair trial look like?** If the evidence is thin, a trial can find out.

Test the answers against the charter, starting with **learning first**.

### The real problem

Does StudyPal fit it?

### Explain it

Name the four questions.

## Elaborate: hint mode

```step
stage: modify
tier: typical
check:
  type: question
  q: "StudyPal has a setting, off by default: 'Hint mode: give a hint, not the answer.' How does that change the decision?"
  options: ["It may fit 'learning first' better, if the school can switch it on for every student and check it stays on", "No difference: it's the same app", "It makes the app perfect"]
  answer: 0
  feedback: [null, "A setting can change a lot. But who controls it?", "One setting doesn't settle data, cost or fairness. Lesson 5 checks those."]
```

A tool can be a poor fit as it comes, and a better fit with a different setting. Ask:

- Can the **school** switch it on, or only each student?
- Does it **stay** on?
- Has anyone tested hint mode, or only answer mode?

## Elaborate: who chose to use it?

```step
stage: make
tier: wider
check: { type: reflect, text: "I explained why students choosing for themselves makes a study hard to trust, and how a fair trial avoids it." }
```

In StudyPal's study, students **chose** whether to use the app. Students who choose a study app may already be the ones who do their homework carefully, so they'd score higher with or without it.

A fairer study decides **who uses it before anyone starts** (for example, by class or at random), measures learning **without the tool**, and checks again **later**. Does AI Help Us Learn? looks at this in [Are researchers asking the right questions?](../../does-ai-help-us-learn/research-design/)

Look at an education product's claims in an ad or on a website (your teacher may give you one). Which of these questions does its evidence answer?

## Evaluate: recommendation, part 1

```step
stage: info
check:
  type: question
  q: "A tool's company says 'Students love it: 95% would use it again.' Which charter principle does that claim NOT answer?"
  options: ["Learning first: liking a tool isn't evidence it helps learning", "Fair for everyone", "None: it answers them all"]
  answer: 0
  feedback: [null, "Fairness isn't answered either, but the bigger gap is learning.", "Liking a tool is useful to know, but it isn't evidence of learning."]
```

On paper, start the **recommendation** for StudyPal (or your own tool).

| Recommendation, part 1 | |
|---|---|
| Tool, and date we checked: | |
| The problem it would solve: | |
| Kind of AI: | |
| What the evidence shows (and doesn't): | |
| A small fair trial would… | |
| Principles tested so far: | |

**Next lesson:** can we trust it, and who does it affect?
