---
order: 4
unit: claims
title: Check the claim
summary: "To check a claim, don't just read the page harder: leave it. Open a new tab, search for the claim or the page's maker, and see what other people say. If sources that don't copy each other agree, trust it more. If no one else says it, or the only other places copy the first, trust it less. Checkers call this reading sideways."
language: science
shape: 5e
hook: "A post says Riverbend Primary's netball team has never lost a game in ten years. How would you find out, without asking the person who posted it?"
---
Reading a page more carefully only tells you what **that page** says. To check a claim, **leave the page**: open a new tab, search for the claim or for the page's maker, and see what other places say. Checkers call this **reading sideways**.

Then ask: do the other places agree? Did they find it out for themselves, or did they copy the first page?

Here is a made-up claim and three other places you could look.

> **The claim** · riverbend-sport-fans.example (a fan blog, no author named)
>
> Riverbend Primary's netball team has **never lost a game in ten years**!

> **Place 1** · riverbend-junior-league.example · Results, 2016 to 2025
>
> Riverbend Primary: won 61, drew 4, lost 7.

> **Place 2** · riverbend-gazette.example · 12 June 2023
>
> Riverbend Primary's netball team lost its first game of the season to Hilltop, 14 to 12.

> **Place 3** · netball-legends.example
>
> Amazing fact: Riverbend Primary has never lost a game in ten years! *(No source given. Posted a week after the fan blog.)*

## Engage: how would you check?

```step
stage: predict
insight: "Committing to a way of checking tests the move: the strongest check leaves the page."
check:
  type: predict
  q: "What would you do first to check the claim?"
  options: ["Search for the team's results somewhere else", "Read the fan blog again more carefully", "Ask the blog's comments section", "Trust it: the blog is about netball"]
  actual: "Search somewhere else. Reading the same page again only tells you what it says. The league's own results page is where the scores are kept, and it shows seven losses."
```

## Explore: what does each place show?

```step
stage: run
insight: "Sorting the three places settles the prediction: two places that found it out disagree with the claim, and one only copies it."
check:
  type: sort
  q: "What does each place tell you about the claim?"
  options: ["Shows the claim is wrong", "Only repeats the claim", "Supports the claim"]
  items:
    - ["Place 1: the league's results, 2016 to 2025", "Shows the claim is wrong", "The league keeps the scores, and it lists seven losses."]
    - ["Place 2: the Gazette's report of a loss to Hilltop", "Shows the claim is wrong", "A dated report of one loss is enough to break never."]
    - ["Place 3: netball-legends.example", "Only repeats the claim", "It gives no source and appeared a week after the blog. It may have copied it."]
```

Was your guess right? The claim fell apart once you left the page. Place 3 agrees, but agreeing is not the same as checking: it may have copied the blog.

## Explain: the steps of reading sideways

```step
stage: investigate
insight: "Putting the checking steps in order, then a mistake planted after it, explains the move."
tasks:
  - check:
      type: parsons
      code: "steps.txt#sideways"
      text: "Put the steps for checking a claim in order."
  - check:
      type: bug
      code: "working.txt#raj"
      text: "Raj tells his class the claim is true. Click the line where Raj first goes wrong."
      answer: 3
      fault: logic
      misconception: many-copies-agree
      explain: "Line 3: Raj counted Place 3 as a second source, but it gave no source and appeared after the blog. A copy is not a check. Two places that found it out for themselves would be."
    smaller:
      check: { type: question, q: "Place 3 says the same as the blog. What does it say about where its fact came from?", options: ["Nothing: it gives no source, and it was posted after the blog", "It names the league", "It names the Gazette"], answer: 0, explain: "It gives no source and came after the blog, so it may have copied it." }
```

### Put the steps in order

### Find Raj's mistake

## Elaborate: when do you stop?

```step
stage: modify
insight: "A new claim changes the task: deciding when enough sources agree."
tasks:
  - check:
      type: question
      q: "A post says the Riverbend pool opens on 1 December. The council's page and the pool's own page both say 1 December. What now?"
      options: ["Trust it: two places that would know agree", "Keep searching for ten more pages", "Don't trust it: it was a post", "Ask the person who posted it"]
      answer: 0
      feedback: [null, "Two places that would know, and did not copy the post, are enough for a small fact like this.", "A post can be right. What matters is that others who would know agree.", "Asking the poster again does not check anything."]
      explain: "The council and the pool would know. When places like that agree, you can stop."
  - check:
      type: question
      q: "You search for a claim and find nothing about it anywhere else. What does that tell you?"
      options: ["Trust it less: no one else says it, so you cannot check it", "It must be a secret, so it is true", "It is true: no one has said it is wrong", "It is false"]
      answer: 0
      feedback: [null, "A secret no one can check is not a reason to believe it.", "No one saying it is wrong is not evidence it is right.", "You cannot tell it is false either. You just cannot check it yet."]
      explain: "If nothing else mentions it, you cannot check it. Hold off, and say you could not check it."
```

### The pool

### Nothing anywhere

## Practise: copy or check?

```step
stage: practise
insight: "Telling a copy from an independent source on new examples repeats the habit."
check:
  type: sort
  q: "A post says a new skate park opens in Riverbend in May. Is each place a separate check or only a copy?"
  options: ["A separate check", "Only a copy"]
  items:
    - ["The council's page: Skate park opens 3 May, with a building update", "A separate check", "The council is building it and would know."]
    - ["A share of the same post, word for word", "Only a copy", "Same words, no new source."]
    - ["The local paper: we spoke to the builders, who say May", "A separate check", "The paper found it out for itself."]
    - ["Another post: 'heard the skate park opens in May!'", "Only a copy", "Heard from where? It names no source."]
```

## Elaborate: a science claim

```step
stage: make
tier: wider
insight: "A science claim adds a context: who would know, and which places found it out for themselves."
check:
  type: reasoning
  q: "A made-up magazine, healthy-kids.example, says drinking eight glasses of cold water a day makes you smarter. How would you check it? Name two places you would look and why."
  models:
    - title: "A strong answer"
      text: "I would search the claim and see if a health department or a children's hospital says anything about water and thinking. They would know, and they do not sell water. I would also look for who wrote the magazine article and whether it names a study."
    - title: "A different view that also works"
      text: "I would ask my science teacher where to look, then check whether two places that would know say the same thing. If I found nothing except copies of the magazine, I would not use it."
  criteria: ["I named places that would know.", "I said why each would know.", "I said what I would do if I could not check it."]
  explain: "Leave the page, find places that would know, and see if they agree without copying."
```

## Evaluate: sideways, not harder

```step
stage: info
check: { type: reflect, text: "I can check a claim by leaving the page and seeing what places that would know say." }
```

Next time a claim surprises you, what will you do before you share it?
