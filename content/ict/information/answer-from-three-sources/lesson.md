---
order: 9
unit: challenge
title: "Challenge: answer it from three sources"
summary: "Put the whole course together on one small question: do bean seeds sprout faster in warm soil? Read three made-up sources, find who made each one, why and when, check what they agree on, say how far you trust each, write a short answer that says no more than the sources show, and credit all three."
language: science
shape: 5e
hook: "Your class is planting beans next week, and someone asks whether to put the trays somewhere warm. You have three sources and ten minutes. What do you tell them?"
---
The question: **do bean seeds sprout faster in warm soil?**

Here are three made-up sources. Use everything from this course: who made it, why, when, what it is based on, and whether the sources agree without copying each other.

> **Source 1** · riverbend-garden-club.example · Growing guide, updated September 2025
>
> **Sowing beans**
>
> Bean seeds need warm soil to sprout. In soil around 20 °C they usually sprout in about a week; in cold soil (below about 12 °C) they are slow and may rot. Source: the state agriculture department's vegetable guide.
>
> *Written by Joan Lee, club secretary.*

> **Source 2** · heatmat-shop.example
>
> **WARM ROOTS = FAST SHOOTS!**
>
> Our HeatMat Pro makes every seed sprout in 24 hours, guaranteed! Thousands of gardeners agree. Only $39.
>
> *No author or date.*

> **Source 3** · hilltop-primary-year6.example · Class blog, 14 March 2026
>
> **Our bean experiment**
>
> We planted 5 beans on a warm windowsill and 5 in a cold shed. After 8 days, 4 warm beans had sprouted and 1 cold bean had. We think warmth helps, but we only tried 10 beans, so we would like to test more.
>
> *Posted by Ms Patel's Year 6 class.*

## Engage: your first answer

```step
stage: predict
insight: "Committing to an answer before weighing the sources shows students what the sources add."
check:
  type: predict
  q: "Before you read closely: do bean seeds sprout faster in warm soil?"
  options: ["Yes, probably", "No", "Not sure yet"]
  actual: "The two sources you can check (the garden club, which names its source, and the class experiment) both point to yes, within limits: warm soil, about 20 °C, sprouts in about a week. The shop agrees too, but its 24 hours guaranteed is a sales line with nothing behind it."
```

## Explore: how far do you trust each?

```step
stage: run
insight: "Rating each source settles the prediction: the answer rests on the sources you can check."
check:
  type: sort
  q: "How far would you trust each source on this question?"
  options: ["Trust a lot", "Trust a little: it is small or limited", "Don't rely on it"]
  items:
    - ["Source 1: the garden club guide", "Trust a lot", "Named author, a date, people who grow beans, and a source you can check."]
    - ["Source 2: the heat mat shop", "Don't rely on it", "It sells heat mats, has no author or date, and 24 hours guaranteed has nothing behind it."]
    - ["Source 3: the Year 6 class blog", "Trust a little: it is small or limited", "A real test, honestly reported, but only 10 beans, as they say themselves."]
```

## Explain: what do they agree on?

```step
stage: investigate
insight: "Separating what the sources agree on from what only one claims explains how far the answer can go."
tasks:
  - check:
      type: question
      q: "Which claim can you make from the sources you trust?"
      options: ["Warm soil, around 20 °C, helps bean seeds sprout faster than cold soil", "Every bean seed sprouts in 24 hours on a heat mat", "Beans will not grow at all in cold soil", "Heat makes beans grow taller too"]
      answer: 0
      feedback: [null, "Only the shop says that, and it wants a sale.", "Source 1 says slow and may rot, not never. Source 3 had one cold bean sprout.", "None of the sources measured height."]
      explain: "The garden club and the class test agree that warmth helps sprouting. No source you trust says more than that."
  - check:
      type: bug
      code: "working.txt#tom"
      text: "Tom's answer says more than the sources show. Click the line where Tom first goes wrong."
      answer: 3
      fault: logic
      misconception: one-source-is-enough
      explain: "Line 3: Tom used the shop's 24 hours as his answer, because it was the most exciting number. It comes from one source, which sells mats and gives no evidence. The sources he could check say about a week."
    smaller:
      check: { type: question, q: "Which source says 24 hours?", options: ["Only the heat mat shop", "All three", "The garden club"], answer: 0, explain: "Only the shop, which sells mats. The garden club says about a week." }
```

### What you can claim

### Find Tom's mistake

## Elaborate: credit your sources

```step
stage: modify
insight: "Writing credits for the sources links back to Documents and slides: who, where and when."
check:
  type: match
  q: "Match each source to its credit line."
  pairs:
    - ["Source 1", "Joan Lee, riverbend-garden-club.example, September 2025"]
    - ["Source 3", "Ms Patel's Year 6 class, hilltop-primary-year6.example, 14 March 2026"]
    - ["Source 2", "Heat mat shop, heatmat-shop.example, no date"]
```

A credit says **who**, **where** and **when**, so a reader can check it. You practised this for pictures in [Documents and slides › Whose is it?](../../documents/whose-is-it/).

## Make: write your answer

```step
stage: make
insight: "Writing a short answer that says how far each source is trusted has students use every move in the course."
check:
  type: reasoning
  q: "Write a short answer to the question for your class (three or four sentences). Say what the sources show, how far you trust each, and what you could not check."
  models:
    - title: "A strong answer"
      text: "Probably yes: warm soil helps bean seeds sprout faster. A garden club guide that names its source says beans sprout in about a week at around 20 °C and are slow in cold soil, and a Year 6 class test found 4 of 5 warm beans sprouted against 1 of 5 cold ones. That test was small. I did not rely on the heat mat shop's claim of 24 hours, because it sells mats and gives no evidence."
    - title: "A different view that also works"
      text: "The garden club, which names the state agriculture guide, says warm soil helps, and a small class test agrees. I would check the agriculture guide itself before telling the class a number like a week. The shop's claim is an advert, so I left it out."
  criteria: ["I gave an answer to the question.", "I said how far I trust each source, with a reason.", "My answer says no more than the sources I trust show.", "I said what I could not check."]
  explain: "A good answer rests on the sources you can check, says how far they go, and is honest about what is still unknown."
```

## Make: in a document

```step
stage: make
tier: typical
insight: "Writing the answer and credits in the school's own document app joins this course to Documents and slides."
check: { type: reflect, text: "In the document app my school uses, I wrote my answer with a heading, a short paragraph and a list of the three sources, each credited with who, where and when." }
```

Use a Heading 1 for the question, a paragraph for your answer, and a bulleted list for the sources. If your class grows its own beans, add your results as a fourth source.

## Evaluate: the whole course

```step
stage: info
check: { type: reflect, text: "I answered a question from three sources: I found who made each, why and when, checked what they agreed on, said how far I trust each, and credited them." }
```

Which move from this course will you use most outside school: strong search words, who made it, reading sideways, fact or opinion, checking charts and pictures, or treating AI answers as leads?
