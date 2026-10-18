---
title: Does research show that AI improves learning?
summary: Compare two real studies with different results, find what each one compared, and spot headlines that go too far.
language: science
shape: 5e
unit: evaluating-evidence
order: 4
voice: { name: af_heart, speed: 1.1 }
---
Researchers have tested whether AI helps students. Some studies found big gains. Others found that students who practised with AI did worse later without it. **Can both kinds of study be trustworthy?**

## Engage: two headlines

```step
stage: predict
check:
  type: predict
  q: "One study says an AI tutor raised test scores. Another says practising with AI lowered later test scores. What should you do first?"
  options: ["Decide which study is wrong", "Find out who took part, what each group did, and what was tested", "Trust the newer study"]
  actual: "Studies can test different people, different kinds of help and different outcomes. You need to know what each one did before comparing them."
```

Which would convince you more: a big jump in marks, or knowing *why* the marks changed?

## Explore: a claim close to home

```step
stage: run
tasks:
  - check:
      type: question
      q: "Mia says: 'I used an AI helper for my spelling homework and got 10/10 every night. It works!' What would tell you most about whether she learned the spellings?"
      options: ["A spelling test next week, without the helper", "Her 10/10 scores with the helper", "How much she enjoyed using it"]
      answer: 0
      feedback: [null, "Those scores show what she did with help. They don't show what she can do alone.", "Enjoying it matters, but it isn't the same as learning the spellings."]
  - check:
      type: question
      q: "Mia's friend Ben practised from a paper list and got 7/10 on the test. Mia got 9/10. Before you say the AI helper made the difference, what should you ask?"
      options: ["Was anything else different, like how long each of them practised?", "Which app Mia used", "Nothing: 9 is more than 7"]
      answer: 0
      feedback: [null, "Knowing the app doesn't tell you whether it caused the difference.", "Other differences, like time spent or which words they had, could explain it."]
```

When anyone says help **works**, ask three questions:

1. **Measured when?** With the help, straight after, or a week later without it?
2. **Compared with what?** No help? A paper list? A good teacher?
3. **Does the claim fit?** "It works" can say more than the scores show.

### Measured when?

Mia's 10/10 scores happened while she used the helper.

### Compared with what?

Ben used a paper list. What else might have been different?

## Explore: what did each study do?

```step
stage: run
tier: typical
tasks:
  - check:
      type: sort
      q: "Which study does each fact describe?"
      options: ["Study A: high school maths", "Study B: university physics"]
      items:
        - ["Some students practised with books and notes, and no AI", "Study A: high school maths"]
        - ["One group used a plain AI chatbot; another used an AI tutor with teacher-written hints", "Study A: high school maths"]
        - ["Students were tested later, without any AI", "Study A: high school maths"]
        - ["Every student learned one topic with an AI tutor and another in a teacher-led class", "Study B: university physics"]
        - ["Students were tested straight after each topic", "Study B: university physics"]
        - ["The AI was compared with a lively class run by a teacher, not with no help", "Study B: university physics"]
  - check:
      type: question
      q: "In Study A, which group did worst on the later test without AI?"
      options: ["The group that practised with the plain AI chatbot", "The group that practised with books and notes", "The group that practised with the AI tutor"]
      answer: 0
      feedback: [null, "The books-and-notes group was the comparison. One AI group scored about 17% below it.", "The AI tutor group's later score was close to the books-and-notes group."]
```

**Study A: high school maths.** In [Bastani and colleagues' 2025 study](https://doi.org/10.1073/pnas.2422633122), students practised maths in three groups:

- books and notes, with no AI;
- a plain AI chatbot that answered whatever they asked;
- an AI tutor that teachers had set up with hints and limits.

Both AI groups did better **while practising**. Later, everyone sat a test **without AI**. The plain chatbot group scored about **17% lower** than the books-and-notes group. The AI tutor group's score was **not clearly different** from the books-and-notes group.

**Study B: university physics.** In [Kestin and colleagues' 2025 study](https://doi.org/10.1038/s41598-025-97652-6), 194 university students each learned one topic with an AI tutor and another in a lively class run by a teacher. The order was random, and every student tried both. Tests **straight after** each topic favoured the AI tutor.

But many things were different between the two: the pace, the format, the feedback, and who was helping. The study did not test what students remembered months later.

### Sort the facts

Use the two study descriptions to sort each fact.

### Read the results

Look again at Study A's three groups.

## Explain: read a claim carefully

```step
stage: investigate
tier: typical
tasks:
  - check:
      type: question
      q: "In Study A, the AI tutor group's later score was not clearly different from the books-and-notes group. What can we say?"
      options: ["We can't tell them apart in this study; a small difference might still exist", "The AI tutor and books and notes work exactly as well as each other", "The AI tutor harmed learning"]
      answer: 0
      feedback: [null, "'Not clearly different' is not the same as 'exactly equal'. A bigger study might find a small difference.", "Its score was close to the books-and-notes group, not lower."]
  - check:
      type: question
      q: "A newspaper says: 'AI tutors beat teachers for good, study finds.' It is about Study B. Which part goes furthest beyond what the study found?"
      options: ["'for good': the study only tested straight after each topic", "'AI tutors': the study used an AI tutor", "'study finds': it was a real study"]
      answer: 0
      feedback: [null, "That part is true. Look for the part the study never tested.", "That part is true. Look for the part the study never tested."]
  - check: { type: reflect, text: "I can tell apart what a study found, what the researchers think it means, and a claim that goes further." }
```

When you read a claim about a study, ask three questions.

1. **Compared with what?** Better than no help? Better than books? Better than a good teacher?
2. **Measured how?** A score while practising, a test straight after, or a test weeks later without help?
3. **Does the claim fit?** A headline can say more than the study showed.

### Not clearly different

What does "not clearly different" mean, and what does it not mean?

### The headline

Check each part of the headline against what Study B did.

### Your own words

Study A and Study B asked different questions. Neither one, alone, tells us whether AI helps every kind of learning.

## Elaborate: two careful claims

```step
stage: make
tier: wider
check: { type: reflect, text: "I defended a careful claim about one study and named something it leaves open." }
```

Look at these two claims:

- "Study A is a good reason to be careful about plain AI chatbots during practice."
- "Study B is a good reason to keep testing well-designed AI tutors."

Could both be fair? Which bigger claims would **not** follow? Neither study compared AI with a really good non-AI computer tutor. Does that change how sure we should be?

**Inquiry record (optional):** write a headline for one study that is true and not misleading. Then name one limit you kept in view.

## Evaluate: what can we claim?

```step
stage: info
check:
  type: question
  q: "An advert says: 'Students who use our AI homework helper get higher marks!' Which question matters most before you believe it?"
  options: ["Higher than whom, and on what test: with the helper, or later without it?", "How many people have downloaded it?", "Does the advert look professional?"]
  answer: 0
  feedback: [null, "Lots of downloads shows it is popular, not that it helps anyone learn.", "A good-looking advert is not evidence."]
```

Write the question you would ask Mia, or the advert, before you believe "it works".

**Next lesson:** even when we know a student's score, do they know how well they are really doing?

## Evaluate: what can the two studies claim?

```step
stage: info
tier: typical
check:
  type: question
  q: "Which claim do these two studies support?"
  options: ["Practising with a plain AI chatbot can help in the moment but leave students worse off later, at least in some conditions", "AI has been proved to improve learning in every subject", "Study B proves that AI, and not the other changes, caused the better scores"]
  answer: 0
  feedback: [null, "Two studies in two subjects can't prove that.", "Many things changed at once in Study B, so we can't tell which one made the difference."]
```

A principal says: "Research proves we should replace our computer practice tasks with AI tutors." What comparison would you need to test that fairly?
