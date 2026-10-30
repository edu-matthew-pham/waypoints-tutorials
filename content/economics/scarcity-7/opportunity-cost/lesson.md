---
order: 3
unit: choice
title: Opportunity cost - what you give up
node: AC9HE7K01 n3
summary: "Because of scarcity, choosing one thing means not choosing another. The opportunity cost of a choice is the next best alternative you gave up. It is not the price paid, and it is not everything you did not choose, only the one next best thing. People, businesses and governments all face opportunity costs, with money, time or land."
language: maths
hook: "Mia has a free Saturday and $20. She could go to the pool, buy a book or save the money. She picks the pool. What did that choice cost her, apart from the ticket?"
---
Scarcity means we cannot have everything, so we have to choose. Every choice leaves something behind.

The **opportunity cost** of a choice is the next best alternative you gave up when you made it. It is one thing: the option you would have picked if the one you chose had not been there.

## Predict: what did it cost?

```step
stage: predict
insight: "Committing first shows the most common idea: that cost means the price you pay."
check:
  type: predict
  q: "Mia picks the pool (ticket $8) over a book ($12) and saving. She likes the book more than saving. What is her opportunity cost?"
  options: ["The $8 ticket", "The book she gave up", "The book and the savings", "Nothing, because she got what she chose"]
  actual: "The book. It was her next best choice, and she gave it up. The $8 is the price, not the opportunity cost, and the savings was a worse option than the book."
```

## Try: match the choice to what is given up

```step
stage: run
insight: "Matching each choice to the next best option makes the definition usable."
check:
  type: match
  q: "Each person ranked their options. Match each choice to its opportunity cost, the next best option they gave up."
  pairs:
    - ["Sam picks football (over drawing, then reading)", "Drawing"]
    - ["Dev picks a sleep-in (over a bike ride, then chores)", "The bike ride"]
    - ["Mia picks a new bag (over a jumper, then saving)", "The jumper"]
    - ["Ana picks the library (over a cafe, then a walk)", "The cafe"]
```

Notice that each answer is one thing: the second on the list.

## Worked example: price or opportunity cost

```step
stage: investigate
insight: "The price and the opportunity cost are different things. Nib's two mistakes are planted."
tasks:
  - check:
      type: question
      q: "Mia picks the pool. Her ranking was pool, then book, then saving. What did she give up?"
      options: ["The book, her next best option", "The $8 ticket price", "Everything else she could have done", "Nothing"]
      answer: 0
      feedback: [null, "The ticket is what she paid. The opportunity cost is the best thing she did not do.", "That includes lower options. Opportunity cost is the next best one only.", "She did give something up, even though she is happy with her choice."]
      explain: "The opportunity cost is the next best alternative, the book."
  - check:
      type: bug
      code: "working.txt#nib"
      text: "Nib is working out Mia's opportunity cost. Click the line where Nib's thinking goes wrong."
      answer: 3
      fault: logic
      misconception: opportunity-cost-is-price
      explain: "Line 3: the $8 is the price Mia paid. Opportunity cost is what she gave up, the book. Line 4 makes a second mistake: it counts everything she did not do, when only the next best option counts."
    smaller:
      check: { type: question, q: "Mia paid $8 and went to the pool. Is the $8 what she gave up, or what she paid?", options: ["What she paid", "What she gave up", "Both", "Neither"], answer: 0, explain: "The $8 is the price. What she gave up is the next best thing she could have done with the day." }
  - check:
      type: question
      q: "Why is the opportunity cost not 'the book, the savings and the sleep-in'?"
      options: ["Only the next best option counts, because you could only have chosen one", "Because those are cheap", "Because Mia did not want them", "Because opportunity cost is always money"]
      answer: 0
      feedback: [null, "Price does not matter here. What matters is that you could only choose one.", "She may have wanted all of them, but she could only pick one instead.", "Opportunity cost can be time, land or anything given up, not only money."]
      explain: "You could only have made one different choice, so the cost is the best of the ones you did not pick."
```

### Mia's choice

```worked
\text{List the options} :: Pool, book, saving.
\text{Rank them} :: Pool first (chosen), book second, saving third.
\text{Find the next best} :: The book.
\text{So} :: The opportunity cost of the pool is the book, not the $8 and not everything else.
```

Now: how do you find the opportunity cost of a choice?

### Find Nib's mistake

### Only the next best

## Vary: time, money and land

```step
stage: modify
insight: "Opportunity cost is the same idea whether it is time, money or land."
tasks:
  - check:
      type: question
      q: "Dev has one free hour. Options in order: football, homework, a nap. He picks football. What is the opportunity cost?"
      options: ["Homework", "A nap", "Football", "Nothing, because time is free"]
      answer: 0
      feedback: [null, "The nap was third. The next best was homework.", "Football is what he chose, not what he gave up.", "Time is limited, so using it for one thing uses it up."]
      explain: "Homework was the next best option he gave up."
  - check:
      type: question
      q: "A council can use a block of land for a park, a car park or a shop. It picks the park. Its ranking was park, car park, shop. What is the opportunity cost?"
      options: ["The car park", "The shop", "The cost of building the park", "The park"]
      answer: 0
      feedback: [null, "That was third. The next best was the car park.", "Building cost is a price. Opportunity cost is what is given up.", "The park is what was chosen."]
      explain: "The car park was the next best use of the land."
  - check:
      type: question
      q: "Sam says: 'The opportunity cost of my $10 is the $10.' What is the best reply?"
      options: ["It is the next best thing the $10 could have bought", "That is right", "It is nothing if you do not spend it", "It is the price of everything"]
      answer: 0
      feedback: [null, "The $10 is the amount. The cost is the best other thing it could have bought.", "Saving is also a choice, with its own alternatives given up.", "Only one alternative counts."]
      explain: "The opportunity cost is the next best use, not the amount."
```

### Dev's hour

### The council's block

### Sam's ten dollars

## Practise: your turn

```step
stage: practise
insight: "Repeating with new cases until finding the next best option becomes automatic."
tasks:
  - check:
      type: question
      q: "A farmer can grow wheat, sheep or vegetables on one paddock, ranked in that order. She grows wheat. What is the opportunity cost?"
      options: ["Sheep", "Vegetables", "Wheat", "The cost of seed"]
      answer: 0
      feedback: [null, "Vegetables were third.", "Wheat is what she chose.", "Seed is a price she paid."]
      explain: "Sheep was the next best use of the paddock."
  - check:
      type: question
      q: "You have two hours and choose a film with friends instead of practising guitar or cleaning your room. You would rather practise. What is the opportunity cost?"
      options: ["Practising guitar", "Cleaning your room", "Both", "The ticket"]
      answer: 0
      feedback: [null, "You ranked practising higher.", "Only the next best one counts.", "The ticket is a price."]
      explain: "Practising guitar was your next best option."
```

### The paddock

### Two hours

## Make: your own choice

```step
stage: make
insight: "Describing one of your own choices and what it gave up makes the idea yours."
check: { type: reflect, text: "In my own book I wrote a choice I made this week, listed at least three options, ranked them, and named the opportunity cost. A partner read it and agreed." }
```

Write it in your own book or document, not on this page. Your partner or teacher reads it.

## Typical: a community and a business

```step
stage: make
tier: typical
insight: "The same idea with a community and a business shows that opportunity cost applies beyond one person."
check:
  type: reasoning
  q: "A bakery owner can use the shop's one oven to bake bread all morning or to bake cakes for a party order. She chooses the bread. Say what the opportunity cost is and why it is not the cost of the flour."
  paper: true
  models:
    - title: "A strong answer"
      text: "The opportunity cost is the party cakes, the next best use of the oven. The flour is a price she paid. Opportunity cost is what the oven could have done instead."
    - title: "A different answer that also works"
      text: "It is the money and the time the cakes would have brought, which is what she gave up using the oven for bread. The flour is a cost she pays either way."
  criteria: ["I named the alternative she gave up.", "I said why the price of the flour is a different thing.", "I used the word oven or time to explain."]
```

## Wider: time and the environment

```step
stage: make
tier: wider
insight: "Opportunity costs can be non-financial, like time or a natural place."
check: { type: reflect, text: "I thought of a choice where the opportunity cost is not money: for example, a council clearing bushland for a clinic, and said what is given up and who might care." }
```

Typical and wider steps are extras on the same idea. You do not need them to finish the lesson.
