---
order: 3
unit: sources
title: Two pages, one question
summary: "When two pages disagree, compare what you can find out about them, not how they look. Who made each one, and would they know? Does it say where its facts came from? Is it up to date? What does it want? A smart design, big numbers and confident words are not reasons to trust a page. Sometimes the honest answer is that you need a third source."
language: science
shape: 5e
hook: "Two pages answer the same question and disagree. One is bright and polished, the other is plain. Which do you believe, and why?"
---
Here is the question: **should you water a bean seedling every day?** Two made-up pages answer it, and they disagree.

> **Page A** · bean-boost.example
>
> **THE #1 SECRET TO GIANT BEANS!!!**
>
> Water your beans three times a day, every day. Our BeanBoost drops make them grow 300% faster. Thousands of happy growers can't be wrong!
>
> *No author named. No date. Buy BeanBoost now.*

> **Page B** · riverbend-garden-club.example · Growing guide, updated September 2025
>
> **Watering bean seedlings**
>
> Water when the top of the soil feels dry, usually every one or two days. Too much water can rot the roots. Advice checked by our members, who have grown beans in Riverbend for 20 years. Source: the state agriculture department's vegetable guide.
>
> *Written by Joan Lee, club secretary.*

## Engage: which would you trust?

```step
stage: predict
insight: "Committing to a page before comparing tests the move: how a page looks is not a reason to trust it."
check:
  type: predict
  q: "Which page would you trust more on watering beans?"
  options: ["Page B", "Page A", "Both the same", "Neither, yet"]
  actual: "Most people trust Page B more, and there are reasons you can point to: a named author, a date, a source and people who grow beans. Page A names no one, gives no date and wants to sell drops. 'Neither, yet' is a careful answer too: you could check both against a third source."
```

## Explore: sort the clues

```step
stage: run
insight: "Sorting clues into ones that are reasons and ones that are not settles the prediction."
check:
  type: sort
  q: "Is each clue a good reason to trust a page more, or not a reason at all?"
  options: ["A good reason", "Not a reason"]
  items:
    - ["It names who wrote it", "A good reason", "You can find out who they are and whether they would know."]
    - ["It has big, bright headings", "Not a reason", "Anyone can make a page look good."]
    - ["It says where its facts came from", "A good reason", "You can go and check the source."]
    - ["It uses lots of exclamation marks", "Not a reason", "Excitement is not evidence."]
    - ["It has a recent date", "A good reason", "Advice is up to date."]
    - ["It says thousands of people agree", "Not a reason", "You cannot check who they are, and many people can be wrong."]
    - ["The makers have done this for years", "A good reason", "Experience with the thing is a reason they might know."]
```

Was your guess right? Every good reason is something you can **find out or check**. The others are about how the page looks or sounds.

## Explain: rate each page

```step
stage: investigate
insight: "Rating each page by the same questions, then a mistake planted after it, explains the move."
tasks:
  - check:
      type: question
      q: "Page A says its drops make beans grow 300% faster. What is the best reason to doubt it?"
      options: ["It sells the drops and gives no source for the number", "300 is too big a number", "It uses capital letters", "Nobody likes beans that big"]
      answer: 0
      feedback: [null, "Big numbers can be true. The problem is that nothing says where it came from.", "Capitals are a style, not evidence either way.", "That is about taste, not evidence."]
      explain: "The page wants to sell the drops, and it gives no source you can check for the number."
  - check:
      type: bug
      code: "working.txt#zoe"
      text: "Zoe's beans start to rot. Click the line where Zoe first goes wrong."
      answer: 2
      fault: logic
      misconception: looks-mean-trust
      explain: "Line 2: Zoe trusted Page A because it looked exciting and professional. Looks are not a reason. She never asked who made it, when or where its facts came from."
    smaller:
      check: { type: question, q: "What on Page A could Zoe have looked up or checked?", options: ["Almost nothing: it has no author, no date and no source", "Its big headings", "Its exclamation marks"], answer: 0, explain: "Page A gives nothing you can check. Page B gives an author, a date and a source." }
```

### Page A's number

### Find Zoe's mistake

## Elaborate: a closer call

```step
stage: modify
insight: "Two pages that are both reasonable change the task: the answer is to weigh them, or to find a third source."
check:
  type: question
  q: "Page C, from a plant nursery, says water every day. Page B, the garden club, says every one or two days. Both name an author and a date. What is the best next move?"
  options: ["Check a third source, such as the state agriculture guide Page B names", "Pick the one with the nicer design", "Average them: every one and a half days", "Give up: nobody knows"]
  answer: 0
  feedback: [null, "Design is not a reason.", "Averaging two claims is not checking either of them.", "You can find out: there is a source to check."]
  explain: "When two good pages disagree, a third source can settle it. Page B names one. Both pages may also be right for different soils or weather."
```

## Practise: what would you ask?

```step
stage: practise
insight: "Choosing the most useful question about a new page repeats the habit."
check:
  type: question
  q: "A page about Riverbend's history has a smart design and lots of photos, but no author and no date. Which question would help you most?"
  options: ["Who made this, and where did they get the facts?", "Are the photos in colour?", "How many pages does the site have?", "Is the font easy to read?"]
  answer: 0
  feedback: [null, "Colour says nothing about whether the history is right.", "A big site can still be wrong.", "Easy to read is good, but it is not evidence."]
  explain: "Who made it and where the facts came from are what let you check it."
```

## Elaborate: argue it

```step
stage: make
tier: typical
insight: "Writing the case for one page, with reasons that can be checked, has students use the move on their own."
check:
  type: reasoning
  q: "Which page would you use for a school poster on growing beans, A or B? Give two reasons you could check."
  models:
    - title: "A strong answer"
      text: "Page B. It names its author and says where its advice came from, so I could check it. It is also dated 2025, so it is up to date. Page A has no author or date and wants to sell drops."
    - title: "A different view that also works"
      text: "I would not use either page on its own yet. Page B looks better because it names a source, so I would check that source and use it instead, since it is where Page B's advice came from."
  criteria: ["I chose a page, or said why I would check further.", "Each reason is something I could find out or check.", "I did not use how the page looks as a reason."]
  explain: "Good reasons are things you can check: who, when, where the facts came from, and what the page wants."
```

## Evaluate: looks or reasons?

```step
stage: info
check: { type: reflect, text: "I can compare two pages by what I can check about them, not by how they look." }
```

Think of a page you trusted because it looked good. What could you have checked instead?
