---
order: 1
unit: rights
title: Rights and responsibilities
node: AC9HE7K05 n1
assumes: [AC9HE7K04]
summary: "A right is something you can claim. A responsibility is something you must do. When someone buys from a business, both sides have rights and both sides have responsibilities, and they often pair up: the customer's right to a safe product is the business's responsibility to sell one."
language: maths
hook: "Mia buys a kettle at Riverbend Appliances. What can she expect from the shop? And what can the shop expect from her?"
---
Riverbend is a made-up town, and so are its people and shops.

A **consumer** is someone who buys goods or services for their own use.

- A **right** is something you can **claim**: something you are entitled to.
- A **responsibility** is something you **must do**: your part of the deal, which you owe to someone else.

In a sale, both sides have both. Often they pair up: what one side can claim is what the other side must do.

## Predict: who has what?

```step
stage: predict
insight: "Committing first brings out the common idea that customers have rights and businesses have responsibilities, and not the other way round."
check:
  type: predict
  q: "Mia buys a kettle at Riverbend Appliances. Which is true?"
  options:
    - "Mia and the shop both have rights and responsibilities"
    - "Mia has rights, and the shop has responsibilities"
    - "The shop has rights, and Mia has responsibilities"
    - "Only the shop has anything, because it sets the rules"
  actual: "Both sides have both. Mia can claim a kettle that is safe and works; she must pay for it and use it as the instructions say. The shop can claim payment; it must sell a safe kettle and tell the truth about it."
```

## Try: sort the kettle sale

```step
stage: run
insight: "Sorting statements into four groups makes the two words, and the two sides, clear."
check:
  type: sort
  q: "Sort each statement about Mia's kettle into the right group."
  options: ["Mia's right", "Mia's responsibility", "The shop's right", "The shop's responsibility"]
  items:
    - ["A kettle that works and is safe to use", "Mia's right", "This is something Mia can claim."]
    - ["Paying the price on the label", "Mia's responsibility", "This is something Mia must do."]
    - ["Being paid for the kettle", "The shop's right", "The shop can claim payment."]
    - ["Telling the truth about what the kettle can do", "The shop's responsibility", "The shop must not mislead customers."]
    - ["Using the kettle the way the instructions say", "Mia's responsibility", "Mia must use it properly."]
    - ["Selling only kettles that meet safety rules", "The shop's responsibility", "The shop must sell safe products."]
```

## Worked example: does Mia have responsibilities?

```step
stage: investigate
insight: "This is the hinge: if students think rights belong to customers and responsibilities to businesses, every later case gets assigned wrongly. Nib's planted mistake is that split."
tasks:
  - check:
      type: bug
      code: "working.txt#nib"
      text: "Nib is working out the rights and responsibilities in Mia's sale. Click the first line where Nib's thinking goes wrong."
      answer: 3
      fault: logic
      misconception: consumers-only-have-rights
      explain: "Line 3: both sides have rights and both have responsibilities. Mia must pay and use the kettle properly; the shop has a right to be paid. So line 4 is wrong too."
    smaller:
      check:
        type: question
        q: "Is reading the kettle's instructions before using it something Mia can claim, or something she should do?"
        options: ["Something she should do: a responsibility", "Something she can claim: a right", "Both a right and a responsibility", "Neither, it's the shop's job"]
        answer: 0
        feedback:
          - null
          - "Mia can't claim it from the shop. It's something she has to do herself."
          - "It's only something she does, not something she can claim."
          - "The shop gives her the instructions. Reading them is up to Mia."
        explain: "It's something she must do, so it's one of her responsibilities."
  - check:
      type: match
      q: "Rights and responsibilities often pair up. Match each right to the responsibility on the other side."
      pairs:
        - ["Mia's right to a safe kettle", "The shop's responsibility to sell safe kettles"]
        - ["The shop's right to be paid", "Mia's responsibility to pay the agreed price"]
        - ["Mia's right to honest information", "The shop's responsibility not to mislead her"]
  - check:
      type: question
      q: "Which of these is a right, not a responsibility?"
      options:
        - "Getting a product that matches how it was described"
        - "Using the product the way it is meant to be used"
        - "Reading the terms before you sign up"
        - "Paying the bill on time"
      answer: 0
      feedback:
        - null
        - "Using it as it's meant to be used is your part of the deal: damage from misuse isn't covered. That's a responsibility."
        - "Reading the terms is something you should do. That's a responsibility."
        - "Paying on time is something you must do, so it's a responsibility."
      explain: "Getting what was described is something you can claim. The others are things you must do."
```

### Find Nib's mistake

```worked
\text{Mia can claim} :: A kettle that works, is safe, and is as described.
\text{Mia must} :: Pay for it, and use it the way the instructions say.
\text{The shop can claim} :: Payment for the kettle.
\text{The shop must} :: Sell safe kettles and tell the truth about them.
\text{So} :: Both sides have rights and responsibilities, and many of them pair up.
```

Now: where does Nib go wrong?

### Rights that pair up

### Right or responsibility?

## Vary: a different sale

```step
stage: modify
insight: "A service and a financial product check that the two words work beyond a kettle."
tasks:
  - check:
      type: sort
      q: "Dev pays Pedal Fix Workshop to service his bike. Sort each statement."
      options: ["Dev's right", "Dev's responsibility", "The workshop's right", "The workshop's responsibility"]
      items:
        - ["The service is done with care and skill", "Dev's right", "Dev can claim a careful, skilled service."]
        - ["Picking the bike up and paying when it's ready", "Dev's responsibility", "Dev must collect it and pay."]
        - ["Being paid the price they agreed", "The workshop's right", "The workshop can claim the agreed price."]
        - ["Telling Dev if the job will cost more than quoted, before doing it", "The workshop's responsibility", "The workshop should be honest about the cost before going ahead."]
  - check:
      type: question
      q: "Ana opens a savings account at a bank. Which of these is her responsibility?"
      options:
        - "Reading the account's terms before she signs up"
        - "Having her money kept safely by the bank"
        - "Getting the interest the bank promised her"
        - "Being told clearly what fees the account has"
      answer: 0
      feedback:
        - null
        - "That's something Ana can claim, so it's a right."
        - "Getting what was promised is a right."
        - "Being told clearly is something Ana can claim. It's the bank's responsibility to tell her."
      explain: "Reading the terms is something Ana should do. The others are things she can claim."
```

### Dev's bike service

### Ana's savings account

## Practise: spot the right

```step
stage: practise
insight: "Quick cases help students sort rights from responsibilities without the four-way table."
tasks:
  - check:
      type: question
      q: "Sam says: 'A right and a responsibility are the same thing.' What is the best reply?"
      options:
        - "A right is something you can claim; a responsibility is something you must do"
        - "Sam is right: both are rules about shopping"
        - "A right is for adults and a responsibility is for children"
        - "A right is the law, and a responsibility is just good manners"
      answer: 0
      feedback:
        - null
        - "Both are about shopping, but one is what you can claim and the other is what you must do."
        - "Age doesn't decide it. Children and adults both have rights and responsibilities."
        - "Some responsibilities are set by law too, like a shop selling safe products."
      explain: "A right is something you can claim. A responsibility is something you must do."
  - check:
      type: question
      q: "Which of these is NOT a consumer right?"
      options:
        - "Getting a discount if you ask nicely"
        - "A product that is safe"
        - "A product that matches its description"
        - "Honest information about what you are buying"
      answer: 0
      feedback:
        - null
        - "Safety is something you can claim."
        - "Getting what was described is something you can claim."
        - "Honest information is something you can claim."
      explain: "A shop may choose to give a discount, but you can't claim one."
```

### Same or different?

### Not a right

## Make: a list for both sides

```step
stage: make
insight: "Writing your own list for both sides of a sale is what the curriculum asks students to create."
check:
  type: reflect
  text: "In my own book I chose a made-up purchase (a phone case, a haircut, a concert ticket) and listed two rights and two responsibilities for the customer, and two rights and two responsibilities for the business. A partner read it and gave feedback."
```

Write it in your own book or document, not on this page. Your partner or teacher reads it.

## Typical: a business's list

```step
stage: make
tier: typical
insight: "Building the list from the business's side shows that businesses have rights too, not only duties."
check:
  type: sort
  q: "Riverbend Cafe sells lunches. Sort each statement into the cafe's rights and the cafe's responsibilities."
  options: ["The cafe's right", "The cafe's responsibility"]
  items:
    - ["Being paid for the food it serves", "The cafe's right", "The cafe can claim payment."]
    - ["Keeping food safe to eat", "The cafe's responsibility", "The cafe must serve safe food."]
    - ["Setting its own menu and prices", "The cafe's right", "The cafe can decide what to sell and for how much."]
    - ["Listing honestly what is in each dish", "The cafe's responsibility", "The cafe must not mislead customers about its food."]
```

## Wider: is it fair?

```step
stage: make
tier: wider
insight: "In Australia a business doesn't have to refund you just because you change your mind. Asking whether that's fair shows that rights are decided by people, and people can disagree."
check:
  type: reasoning
  q: "Dev buys a jumper, gets home and decides he doesn't like the colour. The jumper has nothing wrong with it. In Australia, the shop doesn't have to give him a refund (some shops choose to). Is that fair? Give a reason for your view, and one reason someone might disagree."
  paper: true
  models:
    - title: "One view"
      text: "It's fair. The jumper was exactly what Dev chose, and the shop did nothing wrong. If shops had to take back everything, they might have to charge everyone more."
    - title: "Another view"
      text: "It's a bit unfair, because it's hard to know if you'll like something until you get it home, especially online. That's why many shops choose to offer change-of-mind returns."
  criteria: ["I gave my view and a reason.", "I gave a reason someone might disagree.", "I used the word right or responsibility."]
```

Typical and wider steps are extras on the same idea. You do not need them to finish the lesson.
