---
title: Are researchers asking the right questions?
summary: Find the differences that could spoil a comparison, choose tests that fit the claim, and design a fairer study of AI and learning.
language: science
shape: 5e
unit: evaluating-evidence
order: 6
voice: { name: af_heart, speed: 1.1 }
---
The last two lessons looked at results from studies, and at how sure people feel. But every study starts with two choices: **what to compare**, and **what to count as success**.

## Engage: a study that sounds convincing

```step
stage: predict
check:
  type: predict
  q: "A school compares an AI tutor with a printed worksheet. The AI group scores higher. What is still unclear?"
  options: ["Whether the AI did better than a good non-AI computer tutor would", "Whether the AI group scored higher", "Nothing: the AI clearly works best"]
  actual: "The AI group did score higher. But a printed worksheet is a weak comparison. We don't know if the AI adds anything over a good non-AI computer tutor."
```

Can a careful study still answer the wrong question?

## Explore: what else changed?

```step
stage: run
tasks:
  - check:
      type: sort
      q: "Is this difference the AI itself, or something else that changed?"
      options: ["The AI itself", "Something else that changed"]
      items:
        - ["The AI group could ask questions in their own words and get an answer", "The AI itself"]
        - ["The AI group had 40 minutes; the worksheet group had 20", "Something else that changed", "More time could explain a better score on its own."]
        - ["The AI group got feedback straight away; the worksheet group waited until the next lesson", "Something else that changed", "A non-AI computer tutor can also give instant feedback."]
        - ["The AI group worked on laptops; the worksheet group used paper", "Something else that changed"]
        - ["The AI wrote a new explanation for each mistake", "The AI itself"]
        - ["The AI group's teacher was new and very keen", "Something else that changed"]
  - check:
      type: question
      q: "Which comparison would best show what the AI itself adds to a computer maths tutorial?"
      options: ["The same tutorial, with and without an AI helper, with the same time", "The AI tutorial against students who don't study at all", "The AI tutorial for maths against a worksheet for science"]
      answer: 0
      feedback: [null, "Beating no study at all tells us very little.", "Different subjects and different tests mean we can't compare them."]
```

A school tried an AI maths tutor with one class and a printed worksheet with another. The AI class scored higher on the end-of-lesson quiz. Here is what each class got.

| | AI class | Worksheet class |
|---|---|---|
| Help | An AI tutor that answers questions | A printed worksheet |
| Time | 40 minutes | 20 minutes |
| Feedback | Straight away, on screen | Next lesson, from the teacher |
| Teacher | New and very keen | Usual teacher |

### Spot the differences

Sort each difference. Which ones are the AI, and which could explain the result without the AI?

### Fix the comparison

Change only one thing, and keep everything else the same.

## Explain: fair comparisons and fitting tests

```step
stage: investigate
tasks:
  - check:
      type: question
      q: "A study finds the AI group did better. Later you learn the AI group also had a better-rested class, tested in the morning. What is the problem?"
      options: ["Being tested in the morning could explain some of the result", "There is no problem: the AI group did better", "The study should have used more AI"]
      answer: 0
      feedback: [null, "They did better, but we can't tell how much was the AI.", "More AI wouldn't fix the comparison."]
  - check:
      type: question
      q: "A study wants to claim: 'Students still remember fractions a month later.' Which test fits that claim?"
      options: ["A fractions test a month later, without help", "Scores on fractions questions during the AI lesson", "A survey of how much students enjoyed the AI"]
      answer: 0
      feedback: [null, "That shows how they did with help, on the day.", "Enjoying it is worth knowing, but it isn't remembering fractions."]
  - check: { type: reflect, text: "I can explain why a study must keep other things the same, and why its test must fit its claim." }
```

**Keep everything else the same.** If two groups differ in several ways (time, feedback, teacher, AI), we can't tell which one made the difference. A difference that could explain the result instead is sometimes called a **confounding** difference.

**Make the test fit the claim.** A quiz during the lesson shows how students did with help. A test a month later shows what they remember. A new kind of problem shows whether they can use the idea. Researchers say a test is **valid** for a claim when it gives good evidence for that claim.

**Every study has limits.** Even a good study happens with certain students, tasks and tools. And some things matter that a test can't measure, like getting more done or enjoying learning. Deciding what matters most is a question about values, not only about measuring.

### Morning test

What else was different between the groups?

### Remembering fractions

Which test gives evidence for *remembering*?

### Put it in words

Name the two checks you would make on any study.

## Elaborate: design your own study

```step
stage: make
tier: typical
check: { type: reflect, text: "I designed a study, chose what to measure and named one thing it still couldn't tell me." }
```

Your school is deciding whether to add an AI helper to a computer maths tutorial it already uses. Design a study that answers **one clear question**.

- What should students learn?
- Which groups would you compare? What stays the same for both?
- What would you measure during the lesson, straight after, and a month later?
- What else might matter, like getting more done or enjoying it?
- What still couldn't you conclude?

Swap designs with someone who cares about a different outcome. Let them find a weakness. Improve your design if their point is good.

## Elaborate: a theory to test

```step
stage: make
tier: wider
check: { type: reflect, text: "I planned a test of the theory, and said what result would show my prediction was wrong." }
```

In 2026, Nakamura published a review called [*Augmentation or Erosion?*](https://doi.org/10.1007/s10648-026-10224-6). It is a **theory**, not an experiment. It suggests that handing thinking to AI hurts learning most when that thinking **is the skill you are learning**, and less when it is something **on the edge** of the skill.

- Formatting a table you have already checked is on the edge of learning to read results. Handing it over might free time to think.
- Asking AI to explain what the results mean could skip the very skill you are practising.

It isn't two boxes. The same job can be closer to the centre for one learner or goal, and closer to the edge for another. Nakamura's words are *constitutive* (part of the skill) and *peripheral* (on the edge).

How would you test this idea? Compare students who get full AI answers with students who get only hints. Predict what a test a month later would show. What result would prove your prediction wrong? Would a good non-AI computer tutor give the same benefit?

## Evaluate: read a made-up result

```step
stage: info
check:
  type: question
  q: "AI and non-AI tutorial groups score about the same on a test a month later. But the AI group finished more projects. What follows?"
  options: ["The AI group got more done, but this test showed no difference in what they learned", "AI has been proved to improve all learning", "Both groups learned nothing"]
  answer: 0
  feedback: [null, "Getting more done is not the same as learning more, and one test can't prove 'all learning'.", "Scoring the same doesn't mean scoring zero."]
```

Explain why this result still wouldn't fully settle whether AI helps people learn.

**End of Unit 2:** what research result would most change your mind about AI and learning? What would that study need to compare?

**Next unit:** when does handing thinking to AI help, and when does it get in the way?
