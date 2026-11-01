---
order: 1
unit: data
title: From information to an issue
node: AC9HE7S03 n1
summary: "Information shows that something happened. An economic or business issue is the problem or question it points to. The move is: the data shows X, this suggests Y, so the issue is Z. A good inference goes one step beyond the data, not ten, and repeating the numbers isn't an inference at all."
language: maths
hook: "Fewer shoppers walk down Riverbend's main street every Saturday. More parcels arrive in town every week. What problem do these two facts point to?"
---
Riverbend is a made-up town, and this is made-up data.

**Information** tells you what happened. An **issue** is the problem or question it points to: something people or businesses need to think about or decide.

To get from one to the other, make an **inference**: a reasonable step beyond what the data says. One way to write it:

> The data shows ___. This suggests ___. So the issue is ___.

| | Year 1 | Year 2 | Year 3 |
|---|---|---|---|
| Shoppers counted on the main street on a Saturday | 900 | 750 | 600 |
| Parcels delivered in Riverbend each week | 1200 | 1650 | 2100 |

## Predict: what's the issue?

```step
stage: predict
insight: "Committing first shows whether students repeat the data, infer from it, or leap too far."
check:
  type: predict
  q: "Which of these is the best statement of the issue?"
  options:
    - "More people may be shopping online, so main-street shops could be losing customers"
    - "Shopper numbers fell from 900 to 600"
    - "Every shop on the main street will close next year"
    - "People in Riverbend don't like shopping any more"
  actual: "The data shows fewer shoppers and more parcels. That suggests people are shopping online more, so the issue is that main-street shops may be losing customers. 'Fell from 900 to 600' only repeats the data. 'Every shop will close' goes much further than the data does."
```

## Try: show, infer, or too far?

```step
stage: run
insight: "Sorting statements into three kinds makes the inference step visible."
check:
  type: sort
  q: "Sort each statement about the main street."
  options: ["What the data shows", "A reasonable inference", "Goes too far"]
  items:
    - ["Saturday shopper numbers fell each year for three years", "What the data shows", "This is in the table."]
    - ["Parcels delivered each week went up by 900", "What the data shows", "2100 − 1200 = 900. It's in the table."]
    - ["Some people may be buying online instead of in the shops", "A reasonable inference", "One step beyond the data, and it fits both rows."]
    - ["Main-street shops may be taking less money than before", "A reasonable inference", "Fewer shoppers suggests less spending in the shops, though the data doesn't show sales."]
    - ["Every main-street shop will close within a year", "Goes too far", "The data doesn't show any shop closing."]
    - ["The internet is ruining the town", "Goes too far", "That's a strong opinion, much further than the numbers."]
```

## Worked example: the three-part move

```step
stage: investigate
insight: "This is the hinge: students who repeat the data and call it the issue can't use data to say anything. Nib's planted mistake is exactly that."
tasks:
  - check:
      type: bug
      code: "working.txt#nib"
      text: "Nib is working out the issue on the main street. Click the first line where Nib's thinking goes wrong."
      answer: 3
      fault: logic
      misconception: data-is-the-issue
      explain: "Line 3: that only repeats the data. An issue says what the data points to, such as main-street shops losing customers to online shopping."
    smaller:
      check:
        type: question
        q: "What might fewer shoppers mean for the main-street shops?"
        options: ["They may sell less", "Nothing at all", "They will all close next week", "They will sell more"]
        answer: 0
        explain: "That is the step beyond the data. It points to the issue."
  - check:
      type: question
      q: "Which sentence follows the three-part move?"
      options:
        - "The data shows more parcels, which suggests more online shopping, so the issue is main-street shops losing customers"
        - "The data shows more parcels and fewer shoppers, and the numbers are 2100 and 600"
        - "The issue is that online shopping is bad and should be banned"
        - "The data shows the shops will all close, so the issue is they will close"
      answer: 0
      feedback:
        - null
        - "That repeats the data twice. There's no inference and no issue."
        - "That's an opinion about what should happen, not an issue drawn from the data."
        - "The data doesn't show closures. That leaps too far."
      explain: "Data, then a reasonable inference, then the issue it points to."
  - check:
      type: question
      q: "Why is 'every shop will close next year' a weak inference?"
      options:
        - "The data shows a fall, not closures, so it goes much further than the evidence"
        - "Because inferences should never go beyond the data at all"
        - "Because shops never close"
        - "Because it uses the word 'year'"
      answer: 0
      feedback:
        - null
        - "Inferences do go beyond the data. A good one goes one step, not a leap."
        - "Shops can close. The data just doesn't show it."
        - "The word isn't the problem. The size of the leap is."
      explain: "A good inference goes one reasonable step beyond the data."
```

### Find Nib's mistake

```worked
\text{The data shows} :: Fewer shoppers on the main street, and more parcels delivered.
\text{This suggests} :: More people may be shopping online.
\text{So the issue is} :: Main-street shops may be losing customers.
\text{Not} :: "Shoppers fell from 900 to 600" (only the data) or "every shop will close" (too far).
```

Now: where does Nib go wrong?

### Data, inference, issue

### Too far

## Vary: new information

```step
stage: modify
insight: "Two new pieces of information check the move works beyond the main street."
tasks:
  - check:
      type: question
      q: "Riverbend Bakery's flour cost has gone up three times this year, but its bread price hasn't changed. What issue does this point to?"
      options:
        - "The bakery's profit on each loaf is shrinking, so it may need to raise prices or cut costs"
        - "The flour cost went up three times this year"
        - "The bakery will definitely go out of business"
        - "Bread is too expensive in Riverbend"
      answer: 0
      feedback:
        - null
        - "That repeats the information. What does it mean for the bakery?"
        - "The information shows rising costs, not that the bakery will fail."
        - "The bread price hasn't changed, so the information doesn't point to that."
      explain: "Costs up, price the same, so less left over on each loaf: that's the issue."
  - check:
      type: question
      q: "Riverbend's only bus to the shopping centre now runs every two hours instead of every hour. What issue does this point to?"
      options:
        - "People without cars may find it harder to get to the shops and jobs there"
        - "The bus now runs every two hours"
        - "Nobody will ever catch the bus again"
        - "The shopping centre should be closed"
      answer: 0
      feedback:
        - null
        - "That repeats the information."
        - "That goes much further than the information."
        - "That's an opinion about what should happen, not the issue."
      explain: "Fewer buses suggests it's harder to get there without a car. That's the issue."
```

### The bakery's flour

### The bus

## Practise: spot the inference

```step
stage: practise
insight: "Quick cases sharpen the line between repeating, inferring and leaping."
tasks:
  - check:
      type: question
      q: "Rosa's Car Yard sold 40 cars last year and 25 this year. Which is an inference, not just the data?"
      options:
        - "Fewer people may be buying cars, or buying them elsewhere"
        - "Rosa sold 15 fewer cars this year"
        - "Rosa sold 25 cars this year"
        - "Rosa sold 40 cars last year"
      answer: 0
      feedback:
        - null
        - "That's worked out from the data, but it's still only what the data shows."
        - "That's in the data."
        - "That's in the data."
      explain: "An inference says what the data might mean, one step beyond it."
  - check:
      type: question
      q: "Which is the best order for the three-part move?"
      options: ["Data shows, this suggests, so the issue is", "The issue is, this suggests, data shows", "This suggests, the issue is, data shows", "Data shows, the issue is, so this suggests"]
      answer: 0
      feedback:
        - null
        - "Start from the data, not the issue."
        - "Start from what the data shows."
        - "The inference comes before the issue it leads to."
      explain: "Start from the data, step to an inference, then name the issue."
```

### Rosa's sales

### The order of the move

## Make: your own three-part sentence

```step
stage: make
insight: "Writing the move for new information on your own is the skill this standard asks for."
check:
  type: reflect
  text: "In my own book I wrote a three-part sentence (the data shows, this suggests, so the issue is) for this made-up information: Riverbend Pool's entry numbers fell by a third after the price went up. A partner read it and gave feedback."
```

Write it in your own book or document, not on this page. Your partner or teacher reads it.

## Typical: two sources, one issue

```step
stage: make
tier: typical
insight: "Two sources about the same issue can show different sides of it."
check:
  type: question
  q: "A main-street shop's records show its sales falling. A survey of Riverbend shoppers says most like buying online because it saves the trip. What does the survey add?"
  options:
    - "A possible reason for the fall: people choosing online for convenience"
    - "Nothing: it says the same as the sales records"
    - "Proof that the shop will close"
    - "The exact amount the shop has lost"
  answer: 0
  feedback:
    - null
    - "The sales records show what happened. The survey suggests why."
    - "Neither source shows the shop closing."
    - "The survey is about why people shop, not how much the shop lost."
  explain: "One source shows what happened; the other suggests why. Together they give a fuller picture of the issue."
```

## Wider: two issues in one report

```step
stage: make
tier: wider
insight: "One piece of information can raise more than one issue, and separating them is a skill of its own."
check:
  type: reflect
  text: "I read this made-up news line: 'Riverbend's new supermarket opened last month, bringing 30 jobs, and two corner shops nearby have cut their hours.' I wrote down two separate issues it raises, each with its own three-part sentence."
```

Typical and wider steps are extras on the same idea. You do not need them to finish the lesson.
