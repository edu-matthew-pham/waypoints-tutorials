---
order: 4
unit: planning
title: Plan before you buy
node: AC9HE7K05 n4
summary: "A budget lists the money coming in and going out, so you can see what is left over, what you can afford, and how long saving for something will take, before you commit. Paying later still has an opportunity cost: each repayment is money you can't use for something else then. Knowing your rights and responsibilities is the other half of a good decision: check what you are agreeing to, and keep the receipt."
language: maths
hook: "Sam wants a $240 bike. A sign says he can take it home today and pay later. Should he?"
---
Riverbend is a made-up town, and Sam's budget is made up.

A **budget** is a plan for your money: what comes **in**, what goes **out**, and what is **left over**. A **savings plan** uses what is left over to save for something over time.

A budget helps you decide **before** you commit: can you afford this, and how long will it take?

Some shops let you take something home now and **pay later** in parts. Paying later still has an opportunity cost: each repayment is money you can't use for something else then. Borrowing can be useful or costly, depending on what it's for. You'll look at that later.

## Predict: buy it today?

```step
stage: predict
insight: "Committing first brings out the habit of deciding first and checking the money later."
check:
  type: predict
  q: "Sam can take the $240 bike home today and pay $60 every two weeks. What should he do first?"
  options:
    - "Check his budget to see whether $60 every two weeks fits"
    - "Take it today: he'll work out the money later"
    - "Ask a friend what they think of the bike"
    - "Nothing: paying later means it costs nothing now"
  actual: "Checking the budget first shows whether the payments fit. Sam can then decide with his eyes open, and know what else he'll give up."
```

## Try: read Sam's budget

```step
stage: run
insight: "Reading a real-looking budget shows how the totals and the left-over amount are worked out."
try: { playground: board, starter: "budget.yml#run", height: 380 }
tasks:
  - check:
      type: number
      q: "How much does Sam spend each week (Total out)?"
      answer: 80
      explain: "$25 + $15 + $40 = $80, the formula in B9."
  - check:
      type: number
      q: "How much does Sam have left over each week?"
      answer: 30
      explain: "$110 in, $80 out, so $30 left over."
```

### Total out

### Left over

Click B11 and look at the bar above the sheet. It holds a formula, `=B4-B9`: total in, take away total out.

## Worked example: Nib's pay-later plan

```step
stage: investigate
insight: "Nib's planted mistake is committing first and budgeting later. Writing the left-over formula is the move a budget needs."
try: { playground: board, starter: "budget.yml#investigate", height: 380 }
tasks:
  - check:
      type: bug
      code: "working.txt#nib"
      text: "Nib is giving Sam advice. Click the first line where Nib's thinking goes wrong."
      answer: 3
      fault: logic
      misconception: buy-then-budget
      explain: "Line 3: Sam should check his budget before he commits. He has $30 left over a week, which is $60 every two weeks: exactly the payment, with nothing spare. If a shift is cancelled, he could miss a payment, and missed payments can add fees. Line 4 hopes the money appears."
    smaller:
      check:
        type: number
        q: "Sam has $30 left over each week. How much is that every two weeks?"
        answer: 60
        explain: "$30 + $30 = $60, exactly one payment, with nothing spare."
  - check:
      type: board
      text: "B11 is empty. Write a formula in B11 that works out what Sam has left over."
      when: "f_B11 = 1 and c_B11 = 30"
      explain: "=B4-B9 takes the total out from the total in: $110 − $80 = $30."
  - check:
      type: question
      q: "If Sam buys the bike on the pay-later deal, what is the opportunity cost?"
      options:
        - "What else he could have done with $60 every two weeks"
        - "Nothing, because he doesn't pay it all today"
        - "The whole $240, paid on the first day"
        - "Only the bike shop's costs"
      answer: 0
      feedback:
        - null
        - "Paying later still gives something up. It just happens later."
        - "He pays it in parts, not all on the first day. Each part is money he can't use for something else."
        - "The shop's costs aren't Sam's opportunity cost."
      explain: "Each repayment is money Sam can't spend or save for something else then. That is the opportunity cost of paying later."
```

### Find Nib's mistake

```worked
\text{In} :: $90 + $20 = $110 a week.
\text{Out} :: $25 + $15 + $40 = $80 a week.
\text{Left over} :: $110 − $80 = $30 a week, or $60 every two weeks.
\text{Pay-later deal} :: $60 every two weeks: all of it, with nothing spare.
\text{So} :: The budget shows the deal would use everything Sam has left. He should decide with that in view.
```

Now: where does Nib go wrong?

### Write the left-over formula

### The cost of paying later

## Vary: change the plan

```step
stage: modify
insight: "Changing one line and watching the left-over amount update shows what a budget is for: trying a plan before you live it."
try: { playground: board, starter: "budget.yml#modify", height: 380 }
tasks:
  - check:
      type: board
      text: "Sam decides to spend less on food and going out. Change B8 to 25 and watch what is left over."
      when: "c_B8 = 25 and c_B11 = 45"
      explain: "Total out drops to $65, so Sam has $45 left over each week."
  - check:
      type: number
      q: "Saving $45 a week, how many weeks will it take Sam to save $240 for the bike? (Count a part week as a whole week.)"
      answer: 6
      explain: "$45 × 5 = $225, which isn't quite enough. After 6 weeks Sam has $270, enough for the bike."
```

### Spend less

### Weeks to save

## Practise: budgets and rights together

```step
stage: practise
insight: "A good decision uses both halves of the course: the budget and your rights and responsibilities."
tasks:
  - check:
      type: question
      q: "Sam saves up and buys the bike. Which is his responsibility now?"
      options:
        - "Keeping the receipt, in case something goes wrong"
        - "Getting a bike that is safe and works"
        - "Getting a refund if he changes his mind"
        - "Getting a warranty from the shop"
      answer: 0
      feedback:
        - null
        - "That's something Sam can claim: a right, under the consumer guarantees."
        - "The shop doesn't have to refund a change of mind."
        - "A warranty is something the shop may choose to give. It isn't Sam's responsibility."
      explain: "Keeping the receipt is something Sam should do. It helps him use his rights if the bike is faulty."
  - check:
      type: question
      q: "Mia says: 'Budgets are only for people who are short of money.' What is the best reply?"
      options:
        - "Anyone can use a budget to see what they can afford and plan ahead"
        - "Mia is right: if you have enough, you don't need a plan"
        - "Budgets are only for businesses, not people"
        - "Budgets are only needed for things over $1000"
      answer: 0
      feedback:
        - null
        - "Even with plenty of money, a budget shows where it goes and helps you plan."
        - "People and businesses both use budgets."
        - "A budget helps with small decisions too, like Sam's bike."
      explain: "A budget is a tool for anyone who wants to plan, whatever the amount."
```

### After the purchase

### Mia's view of budgets

## Make: plan a purchase

```step
stage: make
insight: "Explaining how a budget and one right or responsibility would help someone decide is what this standard asks for."
try: { playground: board, starter: "budget.yml#make", height: 380 }
check:
  type: reasoning
  q: "Use the sheet to try a different plan for Sam (change what comes in or goes out). Then explain, in your book, how a budget helps Sam decide about the bike, and one right or responsibility he should know about before he buys."
  paper: true
  models:
    - title: "A strong answer"
      text: "The budget shows Sam has $30 left a week, so the pay-later payments would use all of it. If he cuts going out to $25, he can save the $240 in 6 weeks instead. Before he buys, he should know the bike must be of acceptable quality, and keep the receipt in case it isn't."
    - title: "A different plan that also works"
      text: "Sam could do two more lawns a week ($40 more), leaving $70 a week. Then the $60 payments would fit with $10 spare each week. He should still read the pay-later terms first, because that is his responsibility."
  criteria: ["I used the budget to show what Sam can afford.", "I said how long saving would take, or whether the payments fit.", "I named one right or responsibility."]
```

There is more than one good plan. Compare yours with the models, then talk it over with a partner.

## Typical: a business budget

```step
stage: make
tier: typical
insight: "Businesses budget too, and a savings plan helps them meet their responsibilities."
check:
  type: question
  q: "Riverbend Bakery puts $50 a week into a separate account for oven repairs. Why is that a good part of its budget?"
  options:
    - "If the oven breaks, it can fix it quickly and keep serving customers"
    - "So it never has to pay for anything else"
    - "Because the law says every bakery must save exactly $50 a week"
    - "So it can stop paying its staff"
  answer: 0
  feedback:
    - null
    - "The bakery still has other costs. This is one planned saving."
    - "No law sets that amount. It's the bakery's own plan."
    - "Paying staff is a responsibility. The savings plan is for repairs."
  explain: "A savings plan lets a business handle a known risk without stopping work."
```

## Wider: saving for a recall

```step
stage: make
tier: wider
insight: "A business that plans for problems is better placed to meet its responsibilities when something goes wrong."
check:
  type: question
  q: "A made-up toy maker keeps some money aside each year in case it has to run a recall. How does that connect to the last lesson?"
  options:
    - "It can afford to warn people and give refunds quickly if a toy is unsafe"
    - "It means the maker never has to recall anything"
    - "It lets the maker skip the mandatory standards"
    - "It's just extra profit for the owners"
  answer: 0
  feedback:
    - null
    - "Saving doesn't stop problems happening. It helps the maker respond."
    - "Mandatory standards still apply, whatever the maker saves."
    - "Money set aside for recalls isn't paid out as profit."
  explain: "Budgeting for possible recalls helps a business meet its responsibility to customers when a product turns out to be unsafe."
```

Typical and wider steps are extras on the same idea. You do not need them to finish the lesson.
