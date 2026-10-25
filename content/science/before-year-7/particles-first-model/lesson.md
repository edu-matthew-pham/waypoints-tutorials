---
title: "Particles: the first model"
summary: "Everything is made of tiny particles. In a solid they are packed together and shake in place, in a liquid they are close and slide past each other, and in a gas they are far apart and move fast. The particles don't change. How they are arranged and how they move changes."
language: science
shape: primer
unit: matter
order: 6
node: AC9S5U04 n2
assumes: [AC9S5U04 n1]   # earlier node, taught in class
hook: "You can't see the tiny pieces that ice, water and steam are made of. But picturing them helps to explain why they behave so differently."
---
A **model** is a picture that helps us explain what we can't see. The particle model says everything is made of very small pieces called **particles**. This lesson uses it to explain solids, liquids and gases.

## Think first

```step
stage: predict
insight: "Students often think the particles themselves change: melt, grow or get hot. The model says only their arrangement and movement change."
check:
  type: predict
  q: "Ice melts into water. What happens to the tiny particles it is made of?"
  options: ["They stay the same but move differently and can slide past each other", "They melt too", "They get bigger", "They disappear"]
  actual: "They stay the same but move differently. In ice the particles are packed together and shake in place. In water they can slide past each other. The particles don't melt or change size."
```

Lock in a guess before you read on.

## Try: zoom in

```step
stage: run
insight: "Zooming in on ice, water and steam shows the same particles arranged and moving differently."
try: { playground: science, starter: "boards.yml#zoom", height: 500 }
check: { type: board, text: "Look at all three samples: ice, liquid water and steam.", expect: { done: true } }
```

Look at each sample for a few seconds. Watch how close the particles are and how they move.

## The idea

```step
stage: investigate
insight: "Match each state to its arrangement and movement, then see that a change of state changes the arrangement, not the particles."
tasks:
  - insight: "Arrangement and movement for each state."
    check:
      type: match
      q: "Match each state to its particles."
      pairs: [["Solid", "Packed together, shaking in place"], ["Liquid", "Close together, sliding past each other"], ["Gas", "Far apart, moving fast in every direction"]]
      explain: "In a solid the particles stay in place. In a liquid they slide. In a gas they spread out to fill the space."
  - insight: "A change of state changes the arrangement and movement, not the particles."
    check:
      type: question
      q: "Water boils and becomes steam. What changes?"
      options: ["The particles spread far apart and move fast", "The particles turn into a different kind", "The particles get bigger", "The particles stop moving"]
      answer: 0
      feedback: [null, "The particles are still water particles. Only how they are arranged and moving has changed.", "The particles stay the same size. They move apart.", "In a gas the particles move fast, not slowly."]
      explain: "The particles are the same water particles. Heat makes them move faster, so they spread out and become a gas."
  - insight: "Why a solid keeps its shape and a gas fills its container."
    check:
      type: question
      q: "Why does a gas fill the whole space it is in?"
      options: ["Its particles move fast in every direction and spread out", "Its particles are packed tightly in place", "Its particles are stuck together", "Gases are lighter than air"]
      answer: 0
      feedback: [null, "In a gas the particles are far apart, not packed tightly.", "The particles in a gas aren't stuck together. That is more like a solid.", "Lighter or not, a gas fills its container because its particles spread out."]
      explain: "The particles of a gas move fast in all directions and aren't held in place, so they spread out to fill all the space."
```

The **particle model** says everything is made of tiny **particles**. In a **solid** they are packed together and shake in place. In a **liquid** they are close but slide past each other. In a **gas** they are far apart and move fast. When something melts or boils, the particles stay the same: only how they are arranged and how they move changes.

### The three states

### Boiling

### Gas

## Check

```step
stage: practise
insight: "Using the model on a new example, and spotting the 'the particles change' mistake."
tasks:
  - check:
      type: question
      q: "Which picture goes with a solid, such as an ice cube?"
      options: ["Particles packed close together in a pattern, shaking in place", "Particles spread far apart, moving fast", "Particles sliding past each other", "Particles that are bigger than in a liquid"]
      answer: 0
      feedback: [null, "That describes a gas.", "That describes a liquid.", "The particles are the same size in a solid, a liquid and a gas."]
      explain: "In a solid, particles are packed in a pattern and can only shake in place."
  - check:
      type: sort
      q: "Does the particle model say it changes when ice melts?"
      options: ["Changes", "Stays the same"]
      items:
        - ["How the particles move", "Changes"]
        - ["How close the particles are", "Changes"]
        - ["The size of each particle", "Stays the same", "A particle doesn't get bigger or smaller when it melts."]
        - ["What the particles are made of", "Stays the same"]
```

### A solid

### What changes

## Apply

```step
stage: make
insight: "Using the model to explain an everyday example in their own words."
check:
  type: reasoning
  q: "Use the particle model to explain why a puddle dries up on a warm day. Say what the particles do."
  placeholder: "The water particles … They …"
  models:
    - title: "A puddle"
      text: "The water particles in the puddle move around. In the warm air some have enough speed to leave the surface and spread out as a gas, so the puddle gets smaller. The particles stay the same. They spread out in the air."
  criteria:
    - "I said the particles move or spread out."
    - "I didn't say the particles themselves change or disappear."
```

```teacher
summary: "Students use a first particle model (arrangement and movement) to explain solids, liquids and gases, and see that a change of state does not change the particles."
time: 18
timing: "Think first 3 min · Try 4 min · The idea 5 min · Check 3 min · Apply 3 min"
goals:
  - "I can describe the particles in a solid, a liquid and a gas."
  - "I can say what changes, and what stays the same, when something melts or boils."
  - "I can use the particle model to explain something I can see."
before: |
  The one idea: a state is how particles are arranged and moving, and a change of state changes that, not the particles. The common mistake is that the particles melt, grow or get hot. The Think first question and the sort meet it.

  The board is the zoom lens used in the Year 7 lesson *What is everything made of?*, with the same three samples. In Year 7 students add attraction between particles and the model's limits. Here we use only arrangement and movement.

  The model is two-dimensional on the screen and the particles are drawn as dots: say so, because real particles aren't dots.

  Not yet tried with a class.
running:
  - "Think first: ask students to draw the particles in ice and in water on a whiteboard before reading."
  - "Try: pause the class on the gas and ask where the particles are going."
  - "Apply: look for answers that say the particles 'disappear' and ask where they went."
struggle: "Students may keep saying the particles melt. Ask 'Is a particle of ice a different thing from a particle of water?'"
stuck:
  - see: "A student says the particles in a liquid are bigger or hotter than in a solid."
    ask: "On the board, is a particle in the ice a different size from one in the steam?"
    fix: "Same size. It is how they are arranged and how fast they move that changes."
  - see: "A student says the particles in a solid are not moving."
    ask: "What are they doing on the screen?"
    fix: "They shake in place."
exit:
  q: "What changes when a liquid becomes a gas, and what doesn't?"
  a: "The particles spread apart and move faster. The particles themselves stay the same."
leads: |
  Leads into Year 7 Chemistry: *What is everything made of?* and *Why does a gas fill its container?*, where students go on to explain properties with the model.
```
