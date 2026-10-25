---
order: 2
node: AC9S7U05 n2
woven: [AC9S7H01, AC9S7I05]
unit: particles
title: Why does a gas fill its container?
summary: Describe the arrangement, motion and attraction of particles in a solid, a liquid and a gas, and use them to explain why solids keep their shape and gases fill their containers.
language: science
voice: { name: af_heart, speed: 1.1 }
app:
  command: node "$REPO_ROOT/tools/serve.mjs" "$REPO_ROOT/dist/_playground-science" 8252
  url: http://127.0.0.1:8252/index.html
  readySelector: "#board svg"
  layout: full
explainPicture: { ref: boards.yml#explain, caption: "A gas in a jar: particles far apart and moving fast. Remove the jar and it spreads to fill the whole box." }
explainClip:
  query: { code: "@boards.yml#explain", id: explain }
  caption: "States of matter"
  say: "Each state is described by arrangement, motion and attraction of particles."
  clip:
    - click: "Solid"
    - wait: 600
    - caption: { text: "A solid: particles close, fixed, vibrating in place.", say: "In a solid, particles are close and fixed, vibrating in place." }
    - wait: 3280
    - click: "Liquid"
    - caption: { text: "A liquid: still close, but free to slide past each other.", say: "In a liquid, they are still close but slide past each other." }
    - wait: 3610
    - click: "Gas"
    - wait: 1000
    - click: "Remove the jar"
    - wait: 1500
    - caption: { text: "A gas: far apart and fast, spreading to fill any space.", say: "In a gas, they are far apart and fast, spreading to fill any space." }
    - wait: 1500
hook: "Tip a sugar cube out of its box and it stays a cube. Tip out juice and it spreads across the table. Open perfume and soon the whole room smells. Same particles idea, three behaviours."
---
The particle model is not just a picture to label. In this lesson you use it to **explain** what solids, liquids and gases do.

## Engage: a jar of gas

```step
stage: predict
insight: "Students who think gases rise because they are light will predict the top; the jar shows spreading in every direction."
check:
  type: predict
  q: "A small jar of gas sits in the middle of a large, empty, sealed box. The jar is removed. A few seconds later, where is the gas?"
  options: ["Mostly at the top of the box", "Mostly at the bottom of the box", "Still in a jar-shaped clump", "Spread through the whole box"]
  actual: "Spread through the whole box: up, down and sideways. Its particles move fast in every direction."
```

The box has no air in it. Decide before you look.

## Explore: remove the jar

```step
stage: run
insight: "Releasing each state from the same jar makes the three behaviours directly comparable."
try: { playground: science, starter: "boards.yml#jar", height: 520 }
check: { type: board, text: "Remove the jar for the solid, the liquid and the gas.", expect: { done: true } }
```

Choose a state, then remove the jar. Do all three, and watch the particles each time.

## Explain: arrangement, motion, attraction

```step
stage: investigate
insight: "Describing each state by all three features, then explaining behaviour from them, is what stops diagrams being decorative."
tasks:
  - check:
      type: sort
      q: "Which state does each description belong to?"
      options: ["Solid", "Liquid", "Gas"]
      items:
        - ["Particles close together in a fixed pattern", "Solid"]
        - ["Particles close together with no pattern", "Liquid"]
        - ["Particles far apart", "Gas"]
        - ["Particles vibrate in place", "Solid"]
        - ["Particles slide past each other", "Liquid"]
        - ["Particles move fast in all directions", "Gas"]
        - ["Strong attraction between particles", "Solid"]
        - ["Weaker attraction: particles stay close but can move", "Liquid"]
        - ["Very weak attraction", "Gas"]
        - ["Keeps its shape", "Solid"]
        - ["Spreads across the bottom of its container", "Liquid"]
        - ["Fills its whole container", "Gas"]
  - check:
      type: question
      q: "Why does a gas spread to fill its whole container?"
      options: ["Gas particles are light and float", "Its particles move fast in all directions and barely attract each other", "Its particles expand to fill the space", "Air pushes it around"]
      answer: 1
      feedback: ["The gas spread downwards and sideways as well as up, so being light and floating isn't the explanation.", null, "Particles never change size, so they can't expand to fill the space.", "There was no air in the box and the gas still spread, so air can't be doing the pushing."]
      explain: "Nothing holds gas particles together, so they spread in every direction until they fill the space."
    hint: ["When you removed the jar from the gas, which way did the particles go, and what do you think that says about what's holding them?", "Take the jar off the gas again and watch where the particles end up, up, down or sideways."]
  - check:
      type: question
      q: "Why does a solid keep its shape?"
      options: ["Its particles don't move", "Strong attraction holds its particles in fixed positions, where they vibrate", "Its particles are bigger", "It is heavier than a liquid"]
      answer: 1
      feedback: ["Solid particles do move, because they vibrate, but they don't leave their positions.", null, "Particles of a substance are the same size in every state, so size can't explain the shape.", "Mass doesn't decide shape, because ice keeps its shape and is lighter than the same volume of water."]
      explain: "Each particle vibrates but stays in its place, so the whole solid keeps its shape."
    hint: ["Watch the solid's particles for a few seconds: are they still, or doing something, and what keeps them from wandering off?", "Choose Solid and remove the jar, and look at whether any particle leaves its spot."]
  - check: { type: reflect, text: "I wrote why juice spreads across a table but a sugar cube keeps its shape, using arrangement, motion and attraction, and I could point to a particle diagram for each sentence." }
```

### Describe each state

Watch the board while you sort, because every description fits exactly one state.

### Why gases fill

### Why solids keep their shape

### In your own words

In your book: explain why juice spreads across a table when a sugar cube keeps its shape. Use arrangement, motion and attraction, not just "because it's a liquid".

## Mix it up

```step
stage: practise
insight: "Bringing back the four key ideas of the particle model, which this lesson uses to explain solids, liquids and gases."
check:
  type: question
  q: "Looking back at the particle model: which statement about particles is true?"
  options: ["Particles are always moving, even in a solid", "The particles in a solid have stopped moving", "There is air between the particles of water", "Particles get bigger when they are heated"]
  answer: 0
  feedback: [null, "Solid particles vibrate in place, so they never stop moving.", "Air is made of particles too, so there is nothing at all between the particles of water.", "Particles never change size, and heated particles just move faster and spread out."]
  explain: "This is the third key idea, that particles are always moving, and in a solid they vibrate in place, held there by strong attraction."
```

## Elaborate: six substances

```step
stage: modify
tier: typical
insight: "Ranking substances by spacing, then checking real densities, shows what the model predicts well (the big gaps) and what it needs added (particle mass)."
try: { playground: science, starter: "boards.yml#six", height: 520 }
tasks:
  - check:
      type: sort
      q: "Using the spacing only, where does each substance belong?"
      options: ["Densest pair", "Middle pair", "Least dense pair"]
      items:
        - ["Iron (real density 7.87 g/cm³)", "Densest pair"]
        - ["Aluminium (2.70 g/cm³)", "Densest pair"]
        - ["Water (1.00 g/cm³)", "Middle pair"]
        - ["Cooking oil (0.92 g/cm³)", "Middle pair"]
        - ["Carbon dioxide (0.0018 g/cm³)", "Least dense pair"]
        - ["Air (0.0012 g/cm³)", "Least dense pair"]
      explain: "Spacing predicts the groups, with the solids and liquids close together and then a huge drop to the gases."
    hint: ["Count the particles in each window, since they all show the same small volume, and think about what more particles in the same space means for density.", "The two gases are easy to spot because their windows are almost empty, so it's the solids and liquids you need to compare."]
  - check:
      type: question
      q: "Iron and aluminium have the same spacing, but iron is almost three times denser. Why?"
      options: ["Each iron particle is heavier", "Iron particles are bigger", "Aluminium has air gaps in it"]
      answer: 0
      feedback: [null, "Bigger particles at the same spacing would mean fewer per cm³, not more mass.", "Solid aluminium has no air gaps in it, so that can't explain the difference."]
      explain: "Spacing explains the big groups, and the mass of each particle explains the differences within a group, as it does for carbon dioxide and air."
    hint: ["Look at the iron and aluminium windows on the board and see whether the spacing can explain a difference in density.", "If it can't, think about what else is in the same volume, and what could differ between one iron particle and one aluminium particle."]
```

### Rank by spacing

### Inside a pair

## Elaborate: heating one substance

```step
stage: modify
tier: wider
insight: "The same particles at different temperatures connect motion and energy to spacing."
try: { playground: science, starter: "boards.yml#heat", height: 500 }
tasks:
  - check: { type: board, text: "Heat the water from ice, through liquid, to steam.", expect: { done: true } }
    hint: "Slide the temperature slowly from the far left to the far right, and read the line under the board each time the particles change how they move."
  - check:
      type: question
      q: "When liquid water becomes steam, the space between the particles…"
      options: ["stays the same", "increases a lot", "decreases"]
      answer: 1
      feedback: ["Look at the steam on the board again and compare how far apart its particles are with the liquid.", null, "Think about what heating does to the speed of the particles, and what that does to the gaps between them."]
      explain: "The space between the particles increases a lot, and that is why steam takes up roughly 1,700 times the volume of the same mass of liquid water."
  - check:
      type: question
      q: "What lets particles move further apart as water is heated?"
      options: ["They gain energy, so they can overcome the attraction", "The attraction disappears", "The particles shrink"]
      answer: 0
      feedback: [null, "The attraction doesn't disappear, but faster-moving particles can overcome it.", "Particles never change size when they're heated, so that isn't it."]
```

### From ice to steam

Drag the temperature slowly from −20 °C to 120 °C, and watch the motion and the spacing as you go.

### Spacing

### Energy

## Elaborate: comparing attraction

```step
stage: modify
tier: wider
insight: "Boiling points are evidence for attraction strength: particles need more energy to pull apart when they attract more strongly."
check:
  type: parsons
  code: "attraction.txt#order"
  text: "Put the substances in order of attraction between their particles, strongest first."
  explain: "A higher boiling point means stronger attraction, so salt, which needs over 1400 °C, is at one end and oxygen, which is already a gas at −183 °C, is at the other."
```

To boil, a substance's particles need enough energy to pull completely away from each other. The stronger the attraction, the hotter it has to get.

## Elaborate: the odd one out, ice

```step
stage: modify
tier: wider
insight: "An anomaly is a chance to evaluate the model: water needs an extra detail, not a new model."
try: { playground: science, starter: "boards.yml#ice", height: 440 }
check:
  type: question
  q: "Most solids sink in their own liquid (solid wax sinks in melted wax), but ice floats on water. What does this mean for the particle model?"
  options:
    - "The model is wrong and should be thrown out"
    - "Water is a special case: frozen water particles lock into an open pattern with more space than in the liquid, so the model needs this extra detail"
    - "Ice floats because of air bubbles trapped inside it"
    - "Solid particles are always further apart than liquid particles"
  answer: 1
  feedback: ["A model that explains most cases is still useful, and scientists refine a model when they meet an exception.", null, "Clear ice with no bubbles in it still floats, so bubbles can't be the reason.", "For almost every substance the solid is packed slightly more closely than the liquid, so that statement isn't true in general."]
  explain: "The model keeps its core ideas and gains one extra detail for water. (The diagram exaggerates the gap: ice takes up about 9% more space than the same mass of water.)"
```

## Evaluate: look back

```step
stage: info
check: { type: reflect, text: "I compared my first prediction with what happened and can say what changed in my thinking." }
```

Where did you think the gas would be? Write one sentence: "At first I thought… Now I think… because…"

**Revision summary**

- **Solid:** close together, fixed pattern, vibrating in place, strong attraction. It keeps its shape.
- **Liquid:** close together, no pattern, sliding past each other, weaker attraction. It flows and spreads across the bottom of its container.
- **Gas:** far apart, moving fast in all directions, very weak attraction. It spreads to fill its whole container.
- A gas spreads in every direction, including down. It is not floating up.
