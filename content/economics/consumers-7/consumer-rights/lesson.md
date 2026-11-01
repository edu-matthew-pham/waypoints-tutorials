---
order: 2
unit: rights
title: Your rights when you buy
node: AC9HE7K05 n2
summary: "When you buy from a business in Australia, the consumer guarantees come with it automatically: products must be of acceptable quality and match their description, and services must be done with care and skill. A business can't take these away, and a 'no refunds' sign doesn't remove them. A warranty is an extra promise on top. Businesses don't have to refund a change of mind. After some sales you didn't ask for, such as a door-to-door sale, you have a cooling-off period to change your mind."
language: maths
hook: "Riverbend Appliances has a big sign: NO REFUNDS. Mia's new kettle stops working after a week. Is she stuck with it?"
---
Riverbend is a made-up town, and so are its people and shops. The rights in this lesson are real: they come from the Australian Consumer Law.

When you buy from a business in Australia, some rights come with every purchase, automatically. They are called the **consumer guarantees**:

- Products must be of **acceptable quality** (safe, free from faults, and lasting a reasonable time for what they are) and **match their description**.
- Services must be done with **care and skill**.

A business can't take these away. A "no refunds" sign doesn't remove them.

- A **warranty** is an **extra promise** a business or maker can choose to give, such as "12 months' warranty". It sits on top of the guarantees and doesn't replace them.
- **Change of mind** is different: if nothing is wrong and you just don't want it, the business doesn't have to give a refund, though many choose to.
- A **cooling-off period** gives you time to change your mind after some agreements you didn't ask for, such as a door-to-door sale. For those, it is 10 business days.
- **Returning goods:** start by contacting the business that sold it, and keep your receipt or proof of purchase.

## Predict: the NO REFUNDS sign

```step
stage: predict
insight: "Committing first brings out the belief that a shop's sign decides your rights."
check:
  type: predict
  q: "The shop's sign says NO REFUNDS. Mia's kettle stops working after a week. What are her rights?"
  options:
    - "She still has rights: the kettle must be of acceptable quality, whatever the sign says"
    - "None: the sign says no refunds, so she's stuck with it"
    - "She can only get a refund if she changed her mind"
    - "Only if she bought an extended warranty"
  actual: "The consumer guarantees come with every purchase from a business, and a sign can't take them away. A kettle that stops working after a week isn't of acceptable quality, so Mia can ask the shop to fix the problem."
```

## Try: which right fits?

```step
stage: run
insight: "Matching situations to the right that fits them shows that different rights do different jobs."
check:
  type: match
  q: "Match each Riverbend situation to the right that applies."
  pairs:
    - ["Mia's kettle stops heating after a week", "Consumer guarantee: acceptable quality"]
    - ["Dev orders a blue jumper online and a red one arrives", "Consumer guarantee: matches its description"]
    - ["A door-to-door seller signs up the Nguyens for solar panels, and they rethink it two days later", "Cooling-off period"]
    - ["The maker promises to fix any fault in Sam's speaker for two years", "Warranty: an extra promise"]
```

## Worked example: after the warranty

```step
stage: investigate
insight: "Nib's planted mistake is that your rights end when the warranty ends. The guarantees sit underneath and don't have a fixed end date."
tasks:
  - check:
      type: bug
      code: "working.txt#nib"
      text: "Nib is working out Mia's rights for an older kettle. Click the first line where Nib's thinking goes wrong."
      answer: 3
      fault: logic
      misconception: warranty-ends-rights
      explain: "Line 3: the warranty was an extra promise. The consumer guarantees are still there underneath, and a kettle should last a reasonable time. Whether Mia gets a repair, a replacement or a refund depends on the problem, but she does still have rights. So line 4 is wrong too."
    smaller:
      check:
        type: question
        q: "Is a warranty an extra promise, or is it the only protection you get?"
        options: ["An extra promise, on top of the consumer guarantees", "The only protection you get", "A promise that replaces the guarantees", "A kind of refund"]
        answer: 0
        explain: "The guarantees come with every purchase from a business. A warranty is extra."
  - check:
      type: question
      q: "Mia's kettle has a fault. What should she do first?"
      options:
        - "Contact the shop that sold it, with her receipt or proof of purchase"
        - "Throw it away and buy another one"
        - "Write to the government straight away"
        - "Post about it online and wait for the shop to see it"
      answer: 0
      feedback:
        - null
        - "She may be able to get it fixed, replaced or refunded. Throwing it out loses that."
        - "The first step is the business that sold it. Others can help if that doesn't work."
        - "Posting won't fix it. The shop needs to know first."
      explain: "The first step is to contact the business that sold it. The receipt shows when and where she bought it."
  - check:
      type: question
      q: "Dev buys a jumper with nothing wrong with it, then decides he doesn't like it. What are his rights?"
      options:
        - "The shop doesn't have to refund him, though it might choose to"
        - "He can always get a refund within 30 days"
        - "He gets a cooling-off period, because he changed his mind"
        - "He can claim under the consumer guarantees"
      answer: 0
      feedback:
        - null
        - "There's no law that says every shop must take back unwanted goods. Some shops choose to."
        - "Cooling-off periods are for certain sales you didn't ask for, such as door-to-door sales."
        - "The guarantees are about faulty or misdescribed products. Nothing is wrong with the jumper."
      explain: "A change of mind isn't covered by the guarantees. Some shops offer change-of-mind returns as their own policy."
```

### Find Nib's mistake

```worked
\text{Warranty} :: The maker promised 12 months. That extra promise is over.
\text{Consumer guarantee} :: Still there: a kettle should last a reasonable time.
\text{First step} :: Contact the shop that sold it, with the receipt.
\text{So} :: The warranty ending doesn't end Mia's rights. What she gets depends on the problem.
```

Now: where does Nib go wrong?

### What should Mia do first?

### Dev's jumper

## Vary: sort the situations

```step
stage: modify
insight: "Sorting new cases checks that each right is used for the right kind of problem."
tasks:
  - check:
      type: sort
      q: "Sort each situation by the right that fits it, or none."
      options: ["Consumer guarantee", "Cooling-off period", "No right to a refund"]
      items:
        - ["A phone case that cracks the first time it's dropped from a desk", "Consumer guarantee", "It isn't of acceptable quality."]
        - ["Shoes that fit, but you've decided you prefer a different colour", "No right to a refund", "That's a change of mind. Some shops may still choose to help."]
        - ["A gym membership signed up for after an unexpected sales call at home", "Cooling-off period", "A sale you didn't ask for gets a cooling-off period."]
        - ["A haircut where the hairdresser cuts off far more than you clearly asked for", "Consumer guarantee", "Services must be done with care and skill."]
        - ["A game you finished and no longer want", "No right to a refund", "Nothing is wrong with it."]
  - check:
      type: question
      q: "Ana buys a used bike from a neighbour's garage sale, and the brakes fail. Do the consumer guarantees apply?"
      options:
        - "Mostly not: most guarantees don't apply to a one-off sale between two people"
        - "Yes, the guarantees apply to anything you buy from anyone"
        - "Yes, but only if the neighbour gave her a receipt"
        - "No, because second-hand things never have any rights"
      answer: 0
      feedback:
        - null
        - "The guarantees are about buying from a business. A one-off private sale is different."
        - "A receipt helps prove a purchase, but it doesn't make a private sale into a business sale."
        - "Second-hand goods bought from a business can still have rights. Here, the seller isn't a business."
      explain: "Most consumer guarantees don't apply to a one-off sale where the seller isn't running a business."
```

### Five situations

### The garage sale bike

## Practise: what applies?

```step
stage: practise
insight: "Quick cases with a common slip each make the rights quick to use."
tasks:
  - check:
      type: question
      q: "Riverbend Appliances says Mia must buy an extended warranty, or she'll have no protection at all if the kettle breaks. Is that true?"
      options:
        - "No: the consumer guarantees come with the kettle anyway"
        - "Yes: without it she has no rights"
        - "Yes, but only for the first week"
        - "No, because kettles never break"
      answer: 0
      feedback:
        - null
        - "The guarantees come automatically. An extended warranty is an extra she can choose."
        - "The guarantees don't stop after a week."
        - "Kettles can break. The point is the guarantees apply either way."
      explain: "An extended warranty is an extra promise. It can't replace the consumer guarantees."
  - check:
      type: question
      q: "How long is the cooling-off period after a door-to-door sale?"
      options: ["10 business days", "24 hours", "There isn't one", "As long as the seller says"]
      answer: 0
      feedback:
        - null
        - "It's longer than that: 10 business days."
        - "Door-to-door sales are one of the cases that do have a cooling-off period."
        - "The law sets it, not the seller."
      explain: "For a door-to-door sale, the cooling-off period is 10 business days."
```

### The extended warranty

### Cooling off

## Make: a how-to-return guide

```step
stage: make
insight: "Writing a short guide for a faulty product puts the rights into steps someone could follow."
check:
  type: reflect
  text: "In my own book I wrote a short guide for returning a faulty product (made up): what right applies, what to bring, who to contact first, and what to say. A partner read it and gave feedback."
```

Write it in your own book or document, not on this page. Your partner or teacher reads it.

## Typical: a service you sign up for

```step
stage: make
tier: typical
insight: "Rights also apply to services and to agreements that run over time, like a phone plan."
check:
  type: question
  q: "Sam signs up for a phone plan with a 12-month contract. The coverage at his house is much worse than the company promised. Which of these is right?"
  options:
    - "The service must match what was promised and be done with care and skill, so he can ask the company to fix it"
    - "He signed a contract, so he has no rights for 12 months"
    - "He can only complain once the 12 months are up"
    - "Rights only apply to things you can touch, not services"
  answer: 0
  feedback:
    - null
    - "Signing a contract doesn't remove the consumer guarantees."
    - "He can raise the problem straight away."
    - "Services are covered too: they must be done with care and skill and match what was promised."
  explain: "The guarantees cover services as well as products. Reading the contract first is Sam's responsibility; getting what was promised is his right."
```

## Wider: buying digital things

```step
stage: make
tier: wider
insight: "Digital purchases raise new questions, because there may be nothing to bring back to a shop."
check:
  type: reflect
  text: "I thought about a digital purchase (an app, a game download or a subscription) and wrote down one way returning it is different from returning a kettle, and who I would contact first if it didn't work."
```

Typical and wider steps are extras on the same idea. You do not need them to finish the lesson.
