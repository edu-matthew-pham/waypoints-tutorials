---
title: Living or not?
summary: "A living thing does several things together: it needs food or energy, grows, has young and reacts to what is around it. Moving alone does not make something alive."
language: science
shape: primer
unit: living
order: 1
node: AC9S3U01 n1
hook: "A flame moves, grows and uses up fuel. So why isn't it alive?"
---
Is a flame alive? Is a seed sitting on a shelf? You'll make up your mind with a short list of things that living things do.

## Think first

```step
stage: predict
insight: "Students who think moving means alive pick the first option. The lesson names the whole list so one trait never decides it."
check:
  type: predict
  q: "A candle flame moves, grows bigger when it gets more air, and uses up the wax. Is it alive?"
  options: ["Yes, because it moves and grows", "No, because it doesn't do everything that living things do", "Yes, because it needs air", "You can't tell"]
  actual: "No. A flame moves, grows and needs air, but it doesn't have young or react to its surroundings the way a living thing does. To be alive, a thing needs to do all of them together."
```

Lock in a guess. A wrong guess is fine, because the next step shows what to look for.

## The idea

```step
stage: investigate
insight: "Four things a living thing does together, then the third group (once living) that stops students sorting everything into two."
tasks:
  - insight: "A car moves and uses fuel but cannot grow or have young: moving alone is not enough."
    check:
      type: question
      q: "A car moves along, uses fuel and makes noise. Is it alive?"
      options: ["No: it doesn't grow or have young", "Yes: it moves by itself", "Yes: it uses fuel like food", "Only when the engine is running"]
      answer: 0
      feedback: [null, "Moving is only one thing a living thing does. A car moves but never grows or has young.", "A car uses fuel, but it doesn't grow, have young or sense its surroundings, and living things do all of these together.", "A car is just as not-alive when it is switched off, so what matters is what the thing is, not whether it's running."]
      explain: "A living thing needs food or energy, grows, has young and reacts to what is around it. A car does only one of those."
  - insight: "A seed that does nothing is still alive: living things can be still. This is the other half of the 'moves means alive' mistake."
    check:
      type: question
      q: "A dry seed sits still on a shelf. It doesn't seem to be doing anything. Is it alive?"
      options: ["Yes: it can grow when it gets water and warmth", "No: it isn't moving", "No: it doesn't eat", "Yes, but only after it has grown"]
      answer: 0
      feedback: [null, "Not moving doesn't mean not alive. Many living things stay still for a long time.", "Seeds use stored food to start growing, so they do take in energy, just not by eating.", "It is alive now, and growing is something it will do when it has water and warmth."]
      explain: "A seed is alive but waiting. It is a living thing that can grow when it gets water and warmth."
  - insight: "Once-living things (wood, paper, a dry leaf) are made from living things but are not alive now."
    check:
      type: question
      q: "A wooden spoon was made from a tree. Which group is it in?"
      options: ["Once living: it came from a living thing but is not alive now", "Living: it's made of tree", "Non-living: it never had anything to do with living things"]
      answer: 0
      feedback: [null, "The tree was alive. The spoon is only the wood left over, and it can't grow, have young or sense anything.", "It came from a tree, so it is more than just non-living. There is a group for things like this."]
      explain: "Things like wood, paper and dry leaves are called once living. They come from living things but are not alive now."
```

A living thing needs **food or energy**, **grows**, **has young** and **reacts to what is around it**. It does all of these together. Things that are **once living** (wood, paper, a dry leaf) came from something alive. Things that are **non-living** (a rock, a car, a flame) were never alive.

Now try the three questions below.

### A car

### A seed

### A wooden spoon

## Check

```step
stage: practise
insight: "Sorting into three groups applies the whole list, and the 'why' text names the trait that rules each one in or out."
check:
  type: sort
  q: "Which group is it in?"
  options: ["Living", "Once living", "Non-living"]
  items:
    - ["A kangaroo", "Living"]
    - ["A flame", "Non-living", "It moves and grows, but it doesn't have young or react to its surroundings."]
    - ["A fallen gum leaf, dry and brown", "Once living", "It came from a tree, but it is not alive now."]
    - ["A tree in winter with no leaves", "Living", "It looks still, but it is alive and will grow again."]
    - ["A rock", "Non-living"]
    - ["A cotton T-shirt", "Once living", "Cotton comes from a plant."]
```

Put each one in a group. Use the list of what living things do.

## Apply

```step
stage: make
insight: "Choosing a thing the student cares about and using the list to defend a group shows they can apply it, not recite it."
check:
  type: reasoning
  q: "Pick one thing you can see right now that you aren't sure about, such as a pot plant, a pencil or a mushroom. Which group is it in, and which things on the list help you decide?"
  placeholder: "My thing is … It is living / once living / non-living because …"
  models:
    - title: "A pot plant"
      text: "Living. It needs water and light (food or energy), it grows new leaves, it can make seeds (young), and it turns its leaves towards the window (reacts to its surroundings)."
    - title: "A pencil"
      text: "Once living. The wood came from a tree, but the pencil can't grow, make young or react to anything now."
  criteria:
    - "I named at least two things from the list."
    - "My answer isn't just 'it moves' or 'it doesn't move'."
```

Write your answer, then compare it with the examples.

```teacher
summary: "Students decide whether things are living, once living or non-living by checking a short list of what living things do, and drop the idea that moving means alive."
time: 18
timing: "Think first 3 min · The idea 6 min · Check 5 min · Apply 4 min"
goals:
  - "I can say what a living thing does."
  - "I can sort things into living, once living and non-living."
  - "I can say why a flame or a car isn't alive."
before: |
  The one idea: living things need energy, grow, have young and react to their surroundings, and do all of these together. The common mistake is that moving means alive (and, the other way round, that a still seed or a bare tree is not). The car and the seed questions meet each half.

  Plain wording is on purpose for students who are not confident readers. The Year 7 lessons *Why sort living things?* and *Plant, animal or something else?* use a longer list (cells, breathing, getting rid of waste); here we stay with four things a Year 3 student can check. If you need more, add "breathes" or "gets rid of waste" yourself.

  Not yet tried with a class.
running:
  - "Think first: ask for a show of hands for each option before anyone reveals the answer."
  - "The idea: take the three questions as a class. For the seed, ask what it would do if you gave it water."
  - "Check: students sort alone, then compare the ones that made them stop (the flame, the T-shirt)."
  - "Apply: take two or three answers and ask the class to find the list items each one used."
struggle: "Students find fire hard because it seems alive. Don't rule it out for them: ask which of the four things it does and which it doesn't."
stuck:
  - see: "A student says a flame is alive because it moves and grows."
    ask: "Does a flame have young? Does it react to its surroundings the way an animal does?"
    fix: "Go through the four things one at a time. It needs air, but it doesn't have young or react to its surroundings."
  - see: "A student puts a tree in winter in the non-living group."
    ask: "What will it do in spring?"
    fix: "It will grow new leaves. Still doesn't mean not alive."
exit:
  q: "A student says: 'A robot vacuum moves around by itself, so it's alive.' What would you say?"
  a: "Moving isn't enough. A robot vacuum doesn't grow, have young or need food. A living thing does all of these together."
leads: |
  Leads into Year 7 Biology: *Why sort living things?* and *Plant, animal or something else?*, where students sort living things into groups by what they share.
```
