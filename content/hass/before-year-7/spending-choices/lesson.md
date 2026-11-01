---
order: 4
unit: economics
title: Spending choices
node: AC9HS6K08 n1
summary: "Lots of things influence what we buy, not just what we like: how much money we have, what friends have, advertising, and what we care about (such as the environment or fairness). Noticing the influences helps you choose on purpose, and every choice still gives something up."
language: science
shape: primer
hook: "Mia picked a new drink bottle in under a minute. Was it really just because she liked it?"
---
When we buy something, lots of things push and pull on the choice. These are **influences**:

- **Money:** how much it costs, and how much you have.
- **People:** what friends and family have, use or say.
- **Advertising:** ads, packaging and displays made to catch your eye.
- **What you care about:** the environment, fairness, quality, or what your family or culture values.

You still choose. Noticing the influences helps you choose **on purpose**. And every choice gives something up: the money you spend on one thing can't buy another.

Mia and the shop are made up. Riverbend is a made-up town.

## Think first

```step
stage: predict
insight: "Committing shows whether students think a choice is 'just liking it'."
check:
  type: predict
  q: "Mia chose a 20-dollar metal drink bottle over a 6-dollar plastic one. Her best friend has the same metal one, she saw an ad for it last week, and she wants to stop buying plastic. Why did she choose it?"
  options: ["Several influences together: a friend, an ad and what she cares about", "Only because she liked it", "Only because it was the cheapest", "Nothing influenced her"]
  actual: "Several things pushed the same way: her friend has one, she'd seen an ad, and she cares about using less plastic. It wasn't the cheapest, so money pulled the other way."
```

## Try: sort the influences

```step
stage: run
insight: "Sorting puts names on the push and pull behind one choice."
check:
  type: sort
  q: "Sort each thing that influenced Mia's choice."
  options: ["Money", "People", "Advertising", "What she cares about"]
  items:
    - ["The metal bottle cost 14 dollars more", "Money", "The price pulled her towards the cheaper one."]
    - ["Her best friend has the same one", "People", "Friends' choices influence ours."]
    - ["She saw an ad for it last week", "Advertising", "The ad was made to catch her eye."]
    - ["She wants to stop buying plastic", "What she cares about", "Her values about the environment."]
```

## The idea: noticing the influences

```step
stage: investigate
insight: "Seeing Nib deny any influence shows why naming influences matters."
tasks:
  - check:
      type: bug
      code: "working.txt#nib"
      text: "Click the first line where Nib's thinking goes wrong."
      answer: 3
      fault: logic
      misconception: choices-uninfluenced
      explain: "Line 3: half the class having the same shoes, and the ads everywhere, are influences. Nib still chose, but not from nowhere."
    smaller:
      check: { type: question, q: "If half your class wore the same shoes, might that affect what you notice in a shop?", options: ["Yes, it might", "No, never"], answer: 0, explain: "What friends have is an influence, even when we don't notice it." }
  - check:
      type: question
      q: "Which of these is an influence from advertising?"
      options: ["A bright display at the shop door", "Having 30 dollars to spend", "A friend's new shoes", "Wanting things that last"]
      answer: 0
      explain: "Displays are made to catch your eye. The others are money, people and what you care about."
  - check:
      type: question
      q: "Mia spends her 20 dollars on the bottle. What does she give up?"
      options: ["The next best thing she could have bought with that 20 dollars", "Nothing, because she wanted it", "The plastic bottle she didn't buy, and everything else in the shop", "Her friend"]
      answer: 0
      explain: "Every choice gives something up: the next best thing that money could have bought."
```

### Find Nib's mistake

### Advertising

### What she gives up

## Check: before you move on

```step
stage: practise
insight: "A last sort on a new choice checks the four kinds of influence."
check:
  type: sort
  q: "Dev is choosing a phone case. Sort each influence."
  options: ["Money", "People", "Advertising", "What he cares about"]
  items:
    - ["He has 15 dollars saved", "Money", "What he can afford."]
    - ["His brother says one brand breaks easily", "People", "Advice from family."]
    - ["An ad showed one case surviving a drop from a roof", "Advertising", "Made to make that case look tough."]
    - ["He wants one made from recycled plastic", "What he cares about", "His values about the environment."]
```

## Evaluate

```step
stage: info
check: { type: reflect, text: "I can name four kinds of influence on a spending choice, and I know that every choice gives something up." }
```

## Make: your own

```step
stage: make
insight: "Naming the influences on a made-up purchase makes the idea your own."
check: { type: reflect, text: "In my own book I chose a made-up purchase (a lunchbox, a game, a pair of shoes), wrote three influences on it, and one thing the buyer would give up. A partner read it." }
```
