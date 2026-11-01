---
order: 4
unit: response
title: Costs and benefits
node: AC9HE7S04 n1
summary: "Costs are what you give up: money, time, and the other options you can't take. Benefits are what you gain: money, time, skills, enjoyment, and good for the community. Both come in financial and non-financial kinds, and the opportunity cost of a choice is always one of its costs."
language: maths
hook: "Sam has been offered Saturday morning shifts at Riverbend Bakery. The pay is good and the bus is cheap. Is that the whole story?"
---
Riverbend is a made-up town, and so are its people.

Every economic decision has **costs** and **benefits**.

- **Costs** are what you give up: money, time, and the other things you could have done instead.
- **Benefits** are what you gain: money, time saved, skills, enjoyment, friendships, or good for the community.

Both come in two kinds:

- **Financial:** counted in money (pay, fares, prices).
- **Non-financial:** not counted in money, but still real (time, tiredness, skills, enjoyment).

The **opportunity cost** of a choice (the next best thing you give up) is always one of its costs, and it is often non-financial.

## Predict: what does it cost?

```step
stage: predict
insight: "Committing first shows whether students count only money as a cost."
check:
  type: predict
  q: "Sam would earn $90 each Saturday, and the bus costs $8. What are the costs of taking the shifts?"
  options:
    - "The bus fare, and his Saturday mornings he can't spend on anything else"
    - "Only the $8 bus fare"
    - "Nothing: he earns more than the fare, so there's no cost"
    - "Only the $90 he earns"
  actual: "The bus fare is a financial cost. Giving up his Saturday mornings is a non-financial cost. His next best choice for that time, his Saturday netball game, is his opportunity cost."
```

## Try: sort Sam's costs and benefits

```step
stage: run
insight: "Sorting into four boxes shows that costs and benefits both come in financial and non-financial kinds."
check:
  type: sort
  q: "Sort each thing about Sam's Saturday shifts."
  options: ["Financial cost", "Non-financial cost", "Financial benefit", "Non-financial benefit"]
  items:
    - ["Pay of $90 each Saturday", "Financial benefit", "Money gained."]
    - ["An $8 bus fare there and back", "Financial cost", "Money given up."]
    - ["Saturday mornings he can't spend with friends", "Non-financial cost", "Time with friends given up, though it isn't money."]
    - ["Missing his Saturday netball game", "Non-financial cost", "His next best choice for Saturday mornings: his opportunity cost."]
    - ["Learning to serve customers and run the till", "Non-financial benefit", "A skill gained, not money."]
    - ["A reference from the bakery for future jobs", "Non-financial benefit", "Useful later, but not money now."]
```

## Worked example: more than money

```step
stage: investigate
insight: "This is the hinge: if only money counts as a cost or benefit, every later decision is weighed wrongly. Nib's planted mistake is counting only money."
tasks:
  - check:
      type: bug
      code: "working.txt#nib"
      text: "Nib is weighing up Sam's Saturday shifts. Click the first line where Nib's thinking goes wrong."
      answer: 3
      fault: logic
      misconception: costs-are-only-money
      explain: "Line 3: the bus fare is a cost, but not the only one. Sam also gives up his Saturday mornings, his netball game and time with friends. So line 4 leaves out real costs."
    smaller:
      check:
        type: question
        q: "What will Sam not be able to do on Saturday mornings if he takes the shifts?"
        options: ["Play netball or see friends then", "Nothing, since he's getting paid", "Earn any money on Saturdays", "Catch the bus on Saturdays"]
        answer: 0
        feedback:
          - null
          - "Being paid doesn't give him back the time."
          - "He earns $90 on Saturdays. That's a benefit."
          - "He catches the bus to get there. The fare is a cost, but it isn't what he misses."
        explain: "That's time he gives up. It's a cost, even though it isn't money."
  - check:
      type: question
      q: "What is Sam's opportunity cost of taking the shifts?"
      options:
        - "His Saturday netball game, his next best choice"
        - "The $8 bus fare he pays to get there and back"
        - "The $90 he earns at the bakery each Saturday"
        - "Nothing, because he is earning money for it"
      answer: 0
      feedback:
        - null
        - "The fare is a financial cost, but the opportunity cost is the next best use of his time."
        - "That's a benefit, not a cost."
        - "Earning money doesn't remove what he gives up."
      explain: "Opportunity cost is the one next best alternative given up: here, his Saturday netball game. Less time with friends is another non-financial cost."
  - check:
      type: question
      q: "Which of these is a non-financial benefit?"
      options:
        - "Making new friends among the bakery staff"
        - "The $90 pay he takes home each Saturday"
        - "The bus fare he pays to get to work"
        - "Missing his Saturday netball game"
      answer: 0
      feedback:
        - null
        - "Pay is a financial benefit."
        - "That's a financial cost."
        - "That's a non-financial cost."
      explain: "Friendships aren't counted in money, but they are something gained."
```

### Find Nib's mistake

```worked
\text{Financial benefit} :: $90 pay each Saturday.
\text{Financial cost} :: $8 bus fare.
\text{Non-financial costs} :: Netball (his next best choice, so his opportunity cost), and less time with friends.
\text{Non-financial benefits} :: Skills, a reference, new friends.
\text{So} :: Money is part of the picture, not all of it.
```

Now: where does Nib go wrong?

### Sam's opportunity cost

### A non-financial benefit

## Vary: a community decision

```step
stage: modify
insight: "A council decision checks that the same four kinds apply to a community, not only a person."
tasks:
  - check:
      type: sort
      q: "Riverbend Council is deciding whether to build a new playground in the park. Sort each point."
      options: ["Cost", "Benefit"]
      items:
        - ["The money to build it, which can't then be spent on fixing roads", "Cost", "Money given up, and its opportunity cost: the roads."]
        - ["A safe place for young children to play", "Benefit", "Something the community gains."]
        - ["Losing part of the grass where people kick a ball", "Cost", "Something given up, though it isn't money."]
        - ["Families meeting each other at the park", "Benefit", "A non-financial benefit for the community."]
  - check:
      type: question
      q: "Which of the council's costs is non-financial?"
      options:
        - "Losing part of the grass where people kick a ball"
        - "The money to build the playground"
        - "Families meeting each other at the park"
        - "Yearly repairs to the swings and slides"
      answer: 0
      feedback:
        - null
        - "That's counted in money, so it's financial."
        - "That's non-financial, but it's a benefit, not a cost."
        - "Repairs are paid for in money, so they're a financial cost."
      explain: "Losing open grass isn't money, but it is something the community gives up."
```

### The playground

### Non-financial cost

## Practise: costs and benefits

```step
stage: practise
insight: "Quick cases with a common slip each build fluency."
tasks:
  - check:
      type: question
      q: "Mia is deciding whether to join the school band. Lessons are free. Dev says, 'It's free, so there are no costs.' What is the best reply?"
      options:
        - "Still costs: the time she gives up to practise"
        - "Dev is right: no money means no costs"
        - "The only cost is buying an instrument"
        - "There's no cost, since she'll enjoy it"
      answer: 0
      feedback:
        - null
        - "Free in money isn't free in time. Practice uses up time she could spend on something else."
        - "That might be one cost, but time is a cost too."
        - "Enjoying it is a benefit, but the time is still given up."
      explain: "Non-financial costs, like time, count even when something is free."
  - check:
      type: question
      q: "Which is a benefit, not a cost?"
      options:
        - "Getting better at an instrument"
        - "Giving up Tuesday afternoons"
        - "The bus fare to rehearsals"
        - "Missing a friend's birthday party for a concert"
      answer: 0
      feedback:
        - null
        - "Time given up is a cost."
        - "A fare is a money cost."
        - "Missing something is a cost."
      explain: "A skill gained is a non-financial benefit."
```

### Free isn't costless

### Benefit or cost?

## Make: your own table

```step
stage: make
insight: "Building a full costs and benefits table for a new decision is the skill this standard asks for."
check:
  type: reflect
  text: "In my own book I made a table for a made-up decision (joining a team, getting a pet, taking a weekend job) with at least one financial cost, one non-financial cost, one financial benefit and one non-financial benefit, and I named the opportunity cost. A partner read it and gave feedback."
```

Write it in your own book or document, not on this page. Your partner or teacher reads it.

## Typical: direct and indirect

```step
stage: make
tier: typical
insight: "Some costs and benefits are direct (from the decision itself) and some are indirect (knock-on effects)."
check:
  type: question
  q: "After the playground opens, more families visit the park, and the cafe next door sells more. What kind of benefit is the cafe's extra sales?"
  options:
    - "An indirect benefit: a knock-on effect of the playground"
    - "A direct benefit: the playground sells coffee"
    - "A cost, because the cafe is busier"
    - "Not a benefit, because the council doesn't get the money"
  answer: 0
  feedback:
    - null
    - "The playground doesn't sell anything. The cafe benefits because more people come."
    - "More customers is a gain for the cafe."
    - "A benefit can go to someone other than the decision-maker."
  explain: "Indirect benefits come from knock-on effects of a decision."
```

## Wider: who gains, who pays?

```step
stage: make
tier: wider
insight: "Costs and benefits often fall on different people, which is why community decisions can be hard."
check:
  type: reflect
  text: "For the playground, I wrote down who gains the most, who pays or gives up the most, and whether I think that is fair, with a reason."
```

Typical and wider steps are extras on the same idea. You do not need them to finish the lesson.
