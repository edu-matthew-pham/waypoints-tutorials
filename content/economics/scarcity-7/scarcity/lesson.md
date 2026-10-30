---
order: 2
unit: scarcity
title: Scarcity - not enough for everything
node: AC9HE7K01 n2
summary: "Scarcity is the gap between unlimited wants and limited resources. It is not the same as a shop running out of something for a day: a shortage can be fixed by ordering more, but scarcity is always there, because there is never enough land, workers and equipment to make everything everyone wants. So every community has to decide what to make, how to make it and who gets it."
language: maths
hook: "The school tuckshop has one oven, two helpers and a Friday lunch rush. Everyone wants a hot pie. What happens, and is that the same as 'running out'?"
---
Last lesson showed that wants never run out. This lesson asks what happens when those wants meet a limited amount of stuff.

**Scarcity** is the problem that there are not enough resources to make everything people want. **Resources** are the things used to make goods and services: land and natural things (**land**), people's work (**labour**) and tools and equipment (**capital**).

Scarcity is always there, even when the shelves are full. That is the difference from a **shortage**, which is a shop running out of something for a short time.

## Predict: is it scarcity?

```step
stage: predict
insight: "Committing first shows the idea most people hold: that scarcity means something ran out."
check:
  type: predict
  q: "The tuckshop runs out of pies at 11:10 today and gets more tomorrow. Is that scarcity?"
  options: ["Yes, they ran out", "No, it is a shortage that gets fixed", "Only if the pies were expensive", "Only if nobody got a pie"]
  actual: "It is a shortage: a short-term run-out that more stock fixes. Scarcity is the longer-lasting gap between what people want and the land, labour and equipment there is to make it. We will see the difference over this lesson."
```

## Try: sort the resources

```step
stage: run
insight: "Sorting makes the three kinds of resource usable before we use them."
check:
  type: sort
  q: "Which kind of resource is each thing for the tuckshop?"
  options: ["Land", "Labour", "Capital"]
  items:
    - ["The paddock where the school grows herbs", "Land", "Land is the ground and natural things."]
    - ["The two helpers who bake and serve", "Labour", "Labour is people's work."]
    - ["The oven", "Capital", "Capital is tools and equipment used to make things."]
    - ["The water the tuckshop uses", "Land", "Water is a natural resource, so it counts as land."]
    - ["The till and the pie warmer", "Capital", "Equipment used to make and sell."]
    - ["The Year 11 student who comes in to help on Fridays", "Labour", "Work done by a person."]
```

Notice that every one of these is limited. The tuckshop has one oven and two helpers, however many pies are wanted.

## Worked example: shortage or scarcity

```step
stage: investigate
insight: "Running out for a day is a shortage. The tuckshop shows both: a shortage today, and scarcity every day. Nib's reasoning is planted as the mistake."
tasks:
  - check:
      type: question
      q: "The tuckshop runs out of pies today and gets a new batch tomorrow. What is the best way to describe that?"
      options: ["A shortage: it is short-term and more stock fixes it", "Scarcity, because pies ran out", "Neither, because the pies sold well", "A want that was met"]
      answer: 0
      feedback: [null, "Running out is not enough. Scarcity does not go away when stock arrives.", "Selling well is not the issue. The question is what kind of problem running out is.", "The pies are a want. The question is what to call running out."]
      explain: "It is a shortage. A shortage is a short-term run-out that can be fixed by getting more. Scarcity is bigger: it is there on the days the shelves are full as well."
  - check:
      type: bug
      code: "working.txt#nib"
      text: "Nib is explaining the pies. Click the line where Nib's thinking goes wrong."
      answer: 4
      fault: logic
      misconception: shortage-vs-scarcity
      explain: "Line 4: ordering more pies fixes the shortage, but not scarcity. The oven can still bake only so many pies in a day, and the helpers can only serve so many. Scarcity remains because the resources are limited."
    smaller:
      check: { type: question, q: "Even after the new batch comes in, the tuckshop still has one oven and two helpers. Can it make unlimited pies?", options: ["No, the oven and helpers are limited", "Yes, as long as it orders enough", "Yes, if the pies are cheap", "Yes, if students ask politely"], answer: 0, explain: "The oven and the helpers limit how much can be made. That limit is what scarcity is." }
  - check:
      type: question
      q: "Which best explains why scarcity is always there?"
      options: ["Wants are unlimited, but resources are limited", "Shops forget to order enough", "People waste money", "Prices are too high"]
      answer: 0
      feedback: [null, "Shops sometimes do run short, but scarcity is there even when they order well.", "People can spend well or badly, and there is still not enough for everything.", "Prices come from scarcity. They are not the cause of it."]
      explain: "Unlimited wants meet limited land, labour and capital, so there is never enough for everything."
```

### Shortage or scarcity

```worked
\text{Wants} :: Every student wants a hot pie on Friday, and next week they will want something more.
\text{Resources} :: One oven (capital), two helpers (labour), a limited amount of ingredients (land).
\text{Compare} :: The wants are larger than what the resources can make.
\text{So} :: That gap is scarcity. Running out for a day is only how it can show up.
```

Now: what is the difference between a shortage and scarcity?

### Find Nib's mistake

### Why scarcity stays

## Decide: what, how and for whom

Because there is not enough for everything, the tuckshop has to decide three things. These are the **allocation questions**.

- **What** to make: pies, wraps or salads?
- **How** to make it: using more helpers, or a bigger oven?
- **For whom**: who gets the pies first, and who waits?

```step
stage: modify
insight: "Scarcity forces choices. Putting each choice under one of the three allocation questions makes the questions usable."
tasks:
  - check:
      type: sort
      q: "Which allocation question is each decision answering?"
      options: ["What", "How", "For whom"]
      items:
        - ["Bake pies or sell wraps on Friday?", "What", "It is a choice about which good to make."]
        - ["Hire a second oven or add a helper?", "How", "It is a choice about the resources used to make it."]
        - ["Year 7 get served first because they have the shortest lunch", "For whom", "It decides who gets the goods."]
        - ["Make a vegetarian option or not?", "What", "It is a choice about what is made."]
        - ["Bake in two batches instead of one big one?", "How", "It is a choice about how it is made."]
  - check:
      type: question
      q: "A community has one empty block of land. People want a garden, a car park and a playground. Which is the 'what' question?"
      options: ["Which of these to put on the land", "Who gets to use it", "Whether to dig by hand or with a digger", "How much it costs"]
      answer: 0
      feedback: [null, "That is the 'for whom' question.", "That is the 'how' question.", "Cost is part of the choice, but the 'what' question is about which good to make."]
      explain: "Deciding which of the things to make with the limited land is the 'what' question."
  - check:
      type: question
      q: "There is only enough water in a dry year for half the town's gardens. Which of these is a 'for whom' decision?"
      options: ["Which gardens get water", "Which crops to plant", "Whether to use sprinklers or buckets", "How much to charge"]
      answer: 0
      feedback: [null, "That is a 'what' decision.", "That is a 'how' decision.", "Price could be one way to decide, but the 'for whom' question is about who gets the water."]
      explain: "Deciding who gets the limited water is the 'for whom' question."
```

### Which question

### The empty block

### Water in a dry year

## Vary: a new place

```step
stage: practise
insight: "Same idea in a new setting so that it becomes a habit rather than a tuckshop fact."
tasks:
  - check:
      type: question
      q: "A rich town has shops with full shelves every day. Is there scarcity there?"
      options: ["Yes: the land, workers and equipment are still limited, and people still want more than can be made", "No, because the shelves are full", "Only in poor towns", "Only on days when a shop sells out"]
      answer: 0
      feedback: [null, "Full shelves today do not remove the limits. Think about the oven and the helpers.", "Scarcity affects every community, rich or poor.", "A shop selling out is a shortage. Scarcity is there on the days nothing sells out too."]
      explain: "Every town has limited land, labour and capital, and wants keep growing. Full shelves show that this week's shortage is fixed, not that scarcity is gone."
  - check:
      type: question
      q: "A bakery has a big sale and sells out by noon. Next morning it is full again. This is..."
      options: ["A shortage that was fixed with more stock", "Proof there is no scarcity", "Scarcity that has gone away", "A want that never existed"]
      answer: 0
      feedback: [null, "The bakery still has limited ovens and workers, so scarcity is still there.", "Stock is back, but the limits on what it can make are still there.", "People wanted the bread, so the wants were real."]
      explain: "The run-out is a shortage. The bakery is still limited by its ovens and workers, which is scarcity."
```

### A town with full shelves

### Selling out

## Make: your own example

```step
stage: make
insight: "Finding scarcity in your own school is how the idea becomes yours."
check: { type: reflect, text: "In my own book I wrote one place at school where there is scarcity (not just a shortage), named the limited resource, and used one allocation question to say how the choice gets made. A partner read it and agreed." }
```

Write it in your own book or document, not on this page. Your partner or teacher reads it.

## Typical: a community garden

```step
stage: make
tier: typical
insight: "Applying all three allocation questions to one place shows how the ideas work together."
check:
  type: reasoning
  q: "A community has one empty block, ten volunteers and some spades and seeds, and wants to start a garden. Say what the land, the labour and the capital are, and then give one example each of a 'what', a 'how' and a 'for whom' decision."
  paper: true
  models:
    - title: "A strong answer"
      text: "Land: the block. Labour: the ten volunteers. Capital: spades and seeds. What: vegetables or flowers? How: digging by hand, or hiring a small machine? For whom: families who live nearby first, or anyone who signs up?"
    - title: "A different answer that also works"
      text: "Land: the block and the water. Labour: the volunteers' time. Capital: the spades and a shed. What: a food garden or a play space? How: one big working bee or small shifts? For whom: the school next door, or the whole street?"
  criteria: ["I named the land, labour and capital.", "I gave one decision for each of what, how and for whom.", "My decisions are about the same garden."]
```

## Wider: plenty that is still scarce

```step
stage: make
tier: wider
insight: "Something can be plentiful and still scarce in the economic sense, because of the cost of making it available."
check: { type: reflect, text: "I thought about why tap water is plentiful in a town yet still counts as scarce (pipes, treatment, workers), and said what would have to be given up to supply more." }
```

Typical and wider steps are extras on the same idea. You do not need them to finish the lesson.
