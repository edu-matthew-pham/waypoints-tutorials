---
order: 1
unit: water
title: Renewable, non-renewable or continuous?
node: AC9HG7K01 n1
summary: "An environmental resource is something from nature that people use. Geographers sort resources into three kinds. Renewable resources, such as timber, fish and river water, come back by themselves but can be used up if people take them faster than they return. Continuous resources, such as sunlight and wind, are always there whatever people do. Non-renewable resources, such as coal and oil, do not come back in any time that matters to us. This is the first step to thinking about water as a resource that can run short."
language: maths
hook: "The sun comes up every day and a forest grows back, so are they the same kind of resource? Only one of them can run out."
---
A **resource** is something from the environment that people use. Geographers sort resources into three kinds, and the difference between them matters a lot when we ask whether something can run out.

- **Renewable**: it comes back by itself within a human lifetime, but only if we take no more than comes back. Timber, fish and river water are examples.
- **Continuous**: it is always there, whatever we do. We cannot use it up. Sunlight and wind are examples.
- **Non-renewable**: it takes so long to form that, once used, it does not come back in any time that matters to us. Coal and oil are examples.

## Predict: what can run out?

```step
stage: predict
insight: "Committing to an answer shows the key question: could our use make it run out?"
check:
  type: predict
  q: "Which of these can never run out, however much people use?"
  options: ["Sunlight", "The fish in a river", "Coal", "Timber from a forest"]
  actual: "Sunlight. People's use makes no difference to how much arrives. Fish and timber come back, but not if we take them too fast, and coal does not come back at all."
```

## Try: sort them

```step
stage: run
insight: "Sorting makes the question usable: does it come back, and can our use make it run out?"
check:
  type: sort
  q: "Is each resource renewable, continuous or non-renewable?"
  options: ["Renewable", "Continuous", "Non-renewable"]
  items:
    - ["Timber from a planted forest", "Renewable", "Trees regrow, as long as new ones are planted as fast as old ones are cut."]
    - ["Sunlight", "Continuous", "It arrives every day and nothing we do can use it up."]
    - ["Coal", "Non-renewable", "It took a very long time to form, so once burned it is gone for us."]
    - ["Fish in a river", "Renewable", "Fish breed and the population comes back, unless too many are caught."]
    - ["Wind", "Continuous", "It keeps blowing whatever we do with it."]
    - ["Oil", "Non-renewable", "Like coal, it took a very long time to form and does not come back in our time."]
```

Was your guess right? The two groups people mix up most are renewable and continuous. Both are "there tomorrow", but only one of them can be used up.

## Worked example: two ways of coming back

```step
stage: investigate
insight: "Asking 'can our use make it run out?' separates renewable from continuous. Nib's reasoning is planted as the mistake."
tasks:
  - check:
      type: question
      q: "A fishing company catches fish faster than they breed. Over the years the fish get harder to find. What does this show?"
      options: ["A renewable resource can be used up if it is used faster than it comes back", "Fish are a non-renewable resource", "Fish are a continuous resource", "Nothing, because fish always come back"]
      answer: 0
      feedback: [null, "Fish do breed and come back. The problem is the speed they are taken.", "Continuous resources, like sunlight, cannot be used up by what we do. Fish can.", "They come back only if enough are left to breed."]
      explain: "Renewable does not mean it can never run out. It means it comes back, and only if we do not take it faster than it does."
  - check:
      type: bug
      code: "working.txt#nib"
      text: "Nib is explaining Sam's sort. Click the line where Nib's thinking goes wrong."
      answer: 3
      fault: logic
      misconception: continuous-is-renewable
      explain: "Line 3: Nib says both 'come back'. Timber comes back by growing, and we can cut it faster than it grows. Sunlight does not come back, it is simply always there, and nothing we do can use it up. That is why they are different kinds."
    smaller:
      check: { type: question, q: "Which can people use up by taking too much of it?", options: ["A planted forest", "Sunlight"], answer: 0, explain: "A forest has to regrow, so it can be cut too fast. Sunlight is always there." }
  - check:
      type: question
      q: "What is the main difference between a renewable and a continuous resource?"
      options: ["A renewable one can be used up if we take it too fast, a continuous one cannot", "A renewable one is cheaper", "A renewable one is found only on land", "There is no difference"]
      answer: 0
      feedback: [null, "Cost does not decide the kind of resource.", "Both kinds are found in many places, on land and at sea.", "They are different: one can run out if we over-use it and the other cannot."]
      explain: "The question that separates them is: can our use make it run out?"
```

### Two ways of coming back

```worked
\text{Ask: can our use make it run out?} :: Sunlight and wind, no. They keep coming whatever we do. That is continuous.
\text{Ask: does it come back by itself?} :: Timber, fish and river water, yes. That is renewable, but only if we take no more than comes back.
\text{If it does not come back in our time} :: Coal and oil took a very long time to form. Once burned they are gone for us. That is non-renewable.
\text{So} :: Renewable resources can be used up if we take them too fast. Continuous ones cannot.
```

Now: how many kinds of resource are there, and which one can be over-used?

### Find Nib's mistake

### Renewable or continuous?

## Vary: water in different forms

```step
stage: modify
insight: "The same test works on water. Each task changes the case: water in different forms, then a town that uses a river."
tasks:
  - check:
      type: sort
      q: "Is each form of water renewable, continuous or non-renewable? Use the question: can our use make it run out, and does it come back in our time?"
      options: ["Renewable", "Continuous", "Non-renewable"]
      items:
        - ["River water in the Murrumbidgee", "Renewable", "Rain and runoff refill it, but if people take more than comes back, the river can run low."]
        - ["Water vapour in the air", "Continuous", "The sun keeps the water cycle going whatever we do. People cannot use it up."]
        - ["Water in a deep underground store that refills extremely slowly", "Non-renewable", "If it takes far longer than a lifetime to refill, it does not come back in our time."]
  - check:
      type: question
      q: "A town takes water from a river faster than rain and runoff refill it. What should the town expect?"
      options: ["The river can run low, because river water is renewable but can be used up", "Nothing, because water is continuous", "The river will never be affected, because the sun refills it", "The river will turn into non-renewable water straight away"]
      answer: 0
      feedback: [null, "Water in a river is not the same as sunlight. People can use it up.", "Rain and runoff refill it at their own pace, not at the pace of the town.", "It is still renewable. The problem is the speed it is taken."]
      explain: "River water comes back, but only at the speed that rain and runoff refill it."
  - check:
      type: question
      q: "Which reason places a resource in the continuous group?"
      options: ["Nothing people do can use it up", "It is free", "It is found in the sky", "It comes back when it rains"]
      answer: 0
      feedback: [null, "Free does not mean continuous. Plenty of free things can run out.", "Where it is found does not decide it. Wind blows near the ground and is continuous, and the tides are continuous in the sea.", "A resource that comes back when something refills it is renewable."]
      explain: "Continuous means our use cannot make it run out."
```

### Sort the water

### Over-using a river

### The reason for continuous

## Practise: more resources

```step
stage: practise
insight: "Repeating the sort and the reason on new cases so the question becomes a habit."
tasks:
  - check:
      type: sort
      q: "Is each resource renewable, continuous or non-renewable?"
      options: ["Renewable", "Continuous", "Non-renewable"]
      items:
        - ["Wool from sheep", "Renewable", "Sheep grow new wool, as long as the flock is looked after."]
        - ["The tides", "Continuous", "They keep rising and falling whatever we do."]
        - ["Natural gas", "Non-renewable", "It took a very long time to form and does not come back in our time."]
        - ["Heat from the sun", "Continuous", "The sun keeps shining and we cannot use it up."]
  - check:
      type: question
      q: "Ben says: 'Timber is renewable, so we can cut as many trees as we like.' What is the best reply?"
      options: ["Renewable only works if new trees grow as fast as old ones are cut", "He is right, renewable means it never runs out", "Timber is actually continuous", "Trees are non-renewable"]
      answer: 0
      feedback: [null, "Think about the fishing company. Renewable did not mean it could not run out.", "Timber needs time to regrow, and we cannot use up sunlight. They are different.", "Trees do regrow, so they are not non-renewable."]
      explain: "Renewable means it comes back, not that it comes back no matter what we take."
```

### Which kind?

### Ben's timber

## Make: your own examples

```step
stage: make
insight: "Writing your own examples from where you live is how the idea becomes yours."
check: { type: reflect, text: "In my own book I wrote one renewable, one continuous and one non-renewable resource I use or see around me, with a reason for each, and one example of a renewable resource that could be used up if we took it too fast. A partner read it and agreed." }
```

Write it in your own book or document, not on this page. Your partner or teacher reads it.

## Typical: more resources

```step
stage: make
tier: typical
insight: "A wider mix of resources, including some from outside water, tests the same two questions."
check:
  type: sort
  q: "Is each resource renewable, continuous or non-renewable?"
  options: ["Renewable", "Continuous", "Non-renewable"]
  items:
    - ["Crops grown on a farm", "Renewable", "They regrow each season, as long as the soil is looked after."]
    - ["Solar energy", "Continuous", "The sun keeps shining and we cannot use it up."]
    - ["Iron ore", "Non-renewable", "It formed over a very long time and does not come back in ours."]
    - ["Fish in the sea", "Renewable", "They breed and the population comes back, unless too many are caught."]
```

## Wider: is deep groundwater renewable?

```step
stage: make
tier: wider
insight: "Some resources do not fit neatly into one group. How fast it comes back decides."
check: { type: reflect, text: "I read the card about the Great Artesian Basin and decided whether its groundwater is renewable, non-renewable, or somewhere in between, and I gave my reason." }
```

The **Great Artesian Basin** is a huge store of water in rock under inland Australia. CSIRO calls it the only reliable source of fresh water for inland Australia, used since the first bores were sunk in the 1800s. In the west, it refills slowly now compared with thousands of years ago, and in parts of New South Wales and south-east Queensland, more water is taken out than refills it. *Source: CSIRO, "Deep water: the health of the Great Artesian Basin" (checked 30 October 2026).*

## Wider: can a resource change group?

```step
stage: make
tier: wider
insight: "How a resource is used can change what happens to it."
check: { type: reflect, text: "I talked with a partner about whether a renewable resource, such as a forest, could behave like a non-renewable one if people used it fast enough, and what that tells us about the groups." }
```

Typical and wider steps are extras on the same idea. You do not need them to finish the lesson.
