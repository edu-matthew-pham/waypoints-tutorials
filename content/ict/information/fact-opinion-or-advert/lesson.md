---
order: 5
unit: claims
title: Fact, opinion or advert?
summary: "A fact is a statement that can be checked, and it can turn out right or wrong. An opinion is a view, which people can disagree with; a good one gives reasons. An advert is a line that wants you to buy, often dressed up as a fact. Telling them apart tells you what to do next: check a fact, weigh an opinion's reasons, and know what an advert wants."
language: science
shape: 5e
hook: "\"Kestrel helmets are the best helmets in the world.\" Is that a fact, an opinion or an advert? Does it matter which?"
---
Three kinds of statement can look alike:

- A **fact** is a statement you can **check**. It might be right or wrong, but there is a way to find out. *The Riverbend pool is 25 metres long.*
- An **opinion** is a **view**. People can disagree, and a good opinion gives reasons. *The Riverbend pool is the best place to spend a Saturday.*
- An **advert** wants you to **buy** or sign up. It often sounds like a fact. *Kestrel helmets: the safest choice for every rider!*

A fact is not always true: *The pool is 100 metres long* is a fact-type statement, and it is wrong. You find out by checking.

## Engage: which kind?

```step
stage: predict
insight: "Committing to a kind tests the move: a fact is something you could check, not something that sounds sure."
check:
  type: predict
  q: "\"Kestrel helmets are the best helmets in the world.\" Which kind is it?"
  options: ["An advert, or an opinion if a rider says it", "A fact", "It depends on who says it", "None of them"]
  actual: "Best in the world can't be measured, so it isn't a fact you can check. On a Kestrel page it is an advert. If a friend says it, it is an opinion, and you can ask their reasons. 'It depends on who says it' is a good answer: who says it changes what it is for."
```

## Explore: sort the statements

```step
stage: run
insight: "Sorting statements settles the prediction: the test for a fact is whether you could check it."
check:
  type: sort
  q: "Is each statement a fact (you could check it), an opinion or an advert?"
  options: ["Fact", "Opinion", "Advert"]
  items:
    - ["The Riverbend library has 12,000 books.", "Fact", "You could count them or ask the library."]
    - ["Reading is the best way to spend a rainy day.", "Opinion", "People can disagree. Best is a view."]
    - ["Get BeanBoost now: your plants will thank you!", "Advert", "It wants you to buy, and get it now is a sales line."]
    - ["The bus to Hilltop takes 20 minutes.", "Fact", "You could check the timetable or time it."]
    - ["Netball is more fun than soccer.", "Opinion", "Fun is a view. Others will disagree."]
    - ["Only $9.99 this week, so don't miss out!", "Advert", "A price and hurry up: it wants a sale."]
    - ["Bean plants need water to grow.", "Fact", "You could check it in a science book, or try it."]
```

Was your guess right? Ask: **could I check this?** If yes, it is a fact, right or wrong. If people could reasonably disagree, it is an opinion. If it wants your money, it is an advert.

## Explain: what to do with each

```step
stage: investigate
insight: "Matching each kind to what you do next, then a mistake planted after it, explains why the label matters."
tasks:
  - check:
      type: match
      q: "Match each kind of statement to what you do next."
      pairs:
        - ["A fact", "Check it in a place that would know"]
        - ["An opinion", "Look at the reasons, and other views"]
        - ["An advert", "Remember it wants you to buy"]
  - check:
      type: bug
      code: "working.txt#ava"
      text: "Ava's science report has a mistake in it. Click the line where Ava first goes wrong."
      answer: 2
      fault: logic
      misconception: sure-sounding-is-fact
      explain: "Line 2: Ava treated 'the safest choice for every rider' as a fact because it sounded sure. It is an advert, and there is no way to check 'safest for every rider'. Sounding sure does not make a statement a fact."
```

### What to do next

### Find Ava's mistake

## Elaborate: mixed statements

```step
stage: modify
insight: "Statements that mix kinds change the task: pulling out the part you could check."
tasks:
  - check:
      type: question
      q: "\"The Riverbend pool is 25 metres long, so it's the best pool for training.\" Which part could you check?"
      options: ["That it is 25 metres long", "That it is the best pool for training", "Both parts", "Neither part"]
      answer: 0
      feedback: [null, "Best for training is a view. Swimmers could disagree.", "Only the length can be measured.", "The length can be measured."]
      explain: "The length is a fact you could check. Best for training is an opinion built on it."
  - check:
      type: question
      q: "A good opinion gives reasons. Which opinion gives the best reason?"
      options: ["The library is a good place to study because it is quiet and has free computers", "The library is a good place to study because it is the best", "The library is a good place to study, trust me", "The library is a good place to study!!!"]
      answer: 0
      feedback: [null, "Because it is the best repeats the opinion. It is not a reason.", "Trust me is not a reason.", "Exclamation marks are not reasons."]
      explain: "Quiet and free computers are reasons you could check. You might still disagree, but you know why they think so."
```

### Pull out the fact

### A reason

## Practise: a made-up review

```step
stage: practise
insight: "Sorting the sentences of one made-up review repeats the habit on a new text."
check:
  type: sort
  q: "Sort each sentence from a made-up review of a café."
  options: ["Fact", "Opinion", "Advert"]
  items:
    - ["The café opens at 7 am.", "Fact", "You could check the sign or the website."]
    - ["The pancakes are the tastiest in town.", "Opinion", "Tastiest is a view."]
    - ["Use code BEAN10 for 10% off your first order!", "Advert", "A discount code wants a sale."]
    - ["It has six tables and a garden.", "Fact", "You could count them."]
```

## Elaborate: an advert that looks like a story

```step
stage: make
tier: wider
insight: "An advert written like a news story adds a context: spotting the clues that it is selling."
check:
  type: question
  q: "A page looks like a news story: Local kids grow giant beans! Halfway down it says Sponsored by BeanBoost and has a Buy now button. What is it?"
  options: ["An advert written to look like news", "A news story", "An opinion", "A fact"]
  answer: 0
  feedback: [null, "Sponsored and Buy now show who paid for it and why.", "Someone may have their own view of beans, but the page is paid for.", "A whole page can contain facts and still be an advert."]
  explain: "Sponsored, paid or Buy now are the clues. Read it as an advert: it may contain facts, and it wants a sale."
```

## Evaluate: could I check it?

```step
stage: info
check: { type: reflect, text: "I can tell a fact I could check from an opinion or an advert, and say what I would do with each." }
```

Find one sentence you read today that sounded like a fact. Could you check it? How?
