---
order: 9
node: [AC9S8U07 n4, AC9S8U07 n5]
unit: changes
title: Hotter or colder?
summary: "Some reactions give out energy to their surroundings, so the surroundings get hotter: they are exothermic (burning, respiration, hand warmers). Others take in energy, so the surroundings get colder: they are endothermic (citric acid and bicarb soda, photosynthesis, cooking)."
language: science
voice: { name: af_heart, speed: 1.1 }
app:
  command: node "$REPO_ROOT/tools/serve.mjs" "$REPO_ROOT/dist/_playground-science" 8280
  url: http://127.0.0.1:8280/index.html
  readySelector: "#board svg"
  layout: full
explainPicture: { ref: boards.yml#explain, caption: "Hydrogen and oxygen reacting: each reaction gives out energy, so the particles speed up and the temperature rises. Exothermic." }
explainClip:
  query: { code: "@boards.yml#explain", id: explain }
  caption: "Exothermic and endothermic"
  say: "Exothermic reactions give out energy; endothermic reactions take it in."
  clip:
    - caption: { text: "Hydrogen and oxygen react to make water. Watch the temperature.", say: "Hydrogen and oxygen react to make water. Watch the temperature." }
    - wait: 3200
    - caption: { text: "Each reaction gives out energy: the particles speed up and it gets hotter.", say: "Each reaction gives out energy, so the particles speed up: hotter." }
    - wait: 3800
    - caption: { text: "Energy out to the surroundings: exothermic. Energy in: endothermic, and it gets colder.", say: "Energy out is exothermic. Energy in is endothermic, and it gets colder." }
    - wait: 1200
hook: "Mix citric acid and bicarb soda in water and it fizzes and goes cold. Shake a hand warmer and it gets hot. Neither is plugged in. Where does the heat go, and where does it come from?"
---
A change in temperature is one sign that a reaction has happened, so which way does it go, and why?

## Engage: the cold fizz

```step
stage: predict
insight: "Students often think cold is something added ('cold energy'); the endothermic idea needs energy taken in from the surroundings."
check:
  type: predict
  q: "Citric acid and bicarb soda react when you mix them in a cup of water. It fizzes and the cup goes cold. What is happening?"
  options: ["The reaction takes in energy from the water, the cup and your hand", "The reaction makes 'cold', which flows into your hand", "The powders were stored in a freezer", "The reaction gives out energy, so the cup cools down"]
  actual: "The reaction takes in energy from its surroundings (the water, the cup, the air, your hand), so they get colder. A reaction that takes in energy is endothermic. There is no 'cold energy': cold just means less thermal energy."
```

## Explore: hotter and colder

```step
stage: run
insight: "Watching the temperature rise in one reaction and fall in another, with the same kind of particle model, makes the direction of energy transfer the difference."
try: { playground: science, starter: "boards.yml#exo", height: 520 }
tasks:
  - starter: "boards.yml#exo"
    check: { type: board, text: "Run the hydrogen and oxygen reaction. Note the temperature before and after.", expect: { done: true } }
  - starter: "boards.yml#endo"
    check: { type: board, text: "Now nitrogen and oxygen at 1800 K, about as hot as the flame inside a car engine. Note the temperature before and after.", expect: { done: true } }
```

### Energy out

The temperature is under the board.

### Energy in

This reaction only goes when it's hot already: it needs energy to keep going.

## Explain: exothermic and endothermic

```step
stage: investigate
insight: "Naming the two directions of energy transfer and sorting everyday reactions by them is the node; 'the surroundings' is the word that makes it precise."
tasks:
  - check:
      type: question
      q: "In an exothermic reaction, where does the energy go?"
      options: ["Out to the surroundings, so they get hotter", "Into the reaction mixture, so it gets colder", "It is destroyed"]
      answer: 0
      feedback: [null, "That's endothermic.", "Energy is never destroyed; it moves."]
      explain: "Exo = out. Energy stored in the reactants is released to the surroundings."
    hint: "If you put a thermometer right next to this reaction, what would it show, and what does that tell you about the energy?"
  - check:
      type: sort
      q: "Exothermic or endothermic?"
      options: ["Exothermic (gives energy out)", "Endothermic (takes energy in)"]
      items:
        - ["Wood burning", "Exothermic (gives energy out)"]
        - ["Respiration in your cells", "Exothermic (gives energy out)", "That's how you stay at 37 °C."]
        - ["A hand warmer (iron rusting quickly)", "Exothermic (gives energy out)"]
        - ["Citric acid and bicarb soda fizzing in water", "Endothermic (takes energy in)", "Hold the cup: it gets noticeably colder."]
        - ["Photosynthesis (taking in light energy)", "Endothermic (takes energy in)", "It takes in energy from sunlight to make glucose."]
        - ["Bicarb soda reacting with vinegar and fizzing", "Endothermic (takes energy in)", "Feel the cup: it cools a little."]
    hint: ["For each one, ask whether the reaction gives energy out to what's around it or takes energy in from it.", "Getting colder doesn't mean cold is being added but that energy is being taken from the surroundings, and for a plant, think about which way the sunlight's energy goes."]
  - check:
      type: question
      q: "An instant ice pack goes cold when you snap it: it takes in heat. Is it a chemical reaction?"
      options: ["No: a salt dissolves in water, which is a physical change", "Yes: anything that takes in heat is a chemical reaction", "Yes: a change in temperature proves a new substance was made"]
      answer: 0
      feedback: [null, "Taking in heat isn't enough: dissolving can take heat in too, and no new substance is made.", "A temperature change is a sign to check, not proof. Ask whether the particles are still the same."]
      explain: "Inside the pack, a salt (usually ammonium nitrate or urea) dissolves in water. The particles spread out but stay the same, so it is a physical change, as in Physical change. Dissolving can still take in energy from the surroundings, which is why the pack gets cold."
    hint: "Think back to Physical change: when a salt dissolves, are the particles still the same?"
  - check:
      type: question
      q: "On the board, the nitrogen and oxygen only reacted at 1800 K, and the temperature fell. Why might an endothermic reaction stop on its own?"
      options: ["It cools down, so fewer collisions have enough energy", "It runs out of atoms", "Endothermic reactions are always slow"]
      answer: 0
      feedback: [null, "The atoms are all still there.", "Some endothermic reactions are fast; it's the cooling that slows them."]
      explain: "It takes in energy and cools its surroundings, so fewer collisions have enough energy to react. Unless energy keeps coming in (a hot engine, sunlight for photosynthesis), an endothermic reaction cools itself down."
  - check:
      type: question
      q: "Burning gas in a stove gives out a lot of energy. Where was that energy before?"
      options: ["Stored in the gas and oxygen as chemical energy", "In the match or spark that lit it", "In the air around the flame", "Nowhere: burning makes new energy"]
      answer: 0
      feedback: [null, "The spark only starts it. The flame goes on giving out far more energy than the spark ever had.", "The air gets hotter: it receives the energy, it isn't where the energy came from.", "Energy is never made or destroyed. It was stored in the chemicals all along."]
      explain: "A fuel and oxygen together store chemical energy. In an exothermic reaction their atoms rearrange into new particles that store less, and the difference is given out to the surroundings."
  - check: { type: reflect, text: "I can explain exothermic and endothermic reactions as energy given out or taken in, with an example of each." }
```

### Energy out

### Sort them

### Cold, but is it a reaction?

### Stopping on its own

### Where the energy comes from

### In your own words

In your book: draw two thermometers, one for an exothermic and one for an endothermic reaction, with arrows showing which way energy moves between the reaction and its surroundings. Add an example under each.

## Elaborate: hand warmers and ice packs

```step
stage: modify
tier: typical
insight: "Matching a reaction's energy direction to a product's job turns the idea into design reasoning."
try: { playground: science, starter: "boards.yml#exo", height: 520 }
tasks:
  - check: { type: board, text: "Run the exothermic reaction again.", expect: { done: true } }
  - check:
      type: question
      q: "A sports trainer needs something to reduce swelling on a sprained ankle, at a game far from a freezer. Which product, and why?"
      options: ["An instant ice pack: it takes in energy", "A hand warmer: its reaction is exothermic", "Either: both change temperature"]
      answer: 0
      feedback: [null, "Warming would increase swelling.", "Their energy goes opposite ways."]
      explain: "As the ice pack's salt dissolves, it takes in energy from the ankle. Taking energy in for cooling, giving it out for warming: the direction of energy transfer is the design choice. (The ice pack does this by dissolving, a physical change; the hand warmer by a reaction.)"
    hint: "Does a swollen ankle need energy taken away from it or added to it? Then think about which way each pack's energy goes."
```

### Run it again

### Which product

## Elaborate: why burning keeps going

```step
stage: modify
tier: wider
insight: "Activation energy explains why exothermic reactions need a start (a match) and then keep themselves going."
check:
  type: question
  q: "Wood is exothermic when it burns, yet a log doesn't catch fire on its own. You need a match. Why, and why does it keep burning once lit?"
  options: ["It needs energy to start; its own heat then keeps it going", "The match adds enough fuel to keep it going", "Wood only turns exothermic once it is hot"]
  answer: 0
  feedback: [null, "A match flame is tiny compared with the log.", "Burning wood gives out energy throughout."]
  explain: "Reactions need enough energy to start; once lit, the energy given out heats the next bit enough to react. Collisions need enough energy to react (activation energy, Year 10). An exothermic reaction supplies that energy to its own next steps, so it keeps going."
```

## Evaluate: look back

```step
stage: info
check: { type: reflect, text: "I compared my prediction about the cold fizz with what endothermic means." }
```

Write one sentence: "At first I thought… Now I think… because…"

**Revision summary**

- **Exothermic** reactions give out energy to their surroundings, so the surroundings get hotter: burning, respiration, hand warmers.
- **Endothermic** reactions take in energy from their surroundings, so the surroundings get colder: citric acid and bicarb soda, photosynthesis, bicarb and vinegar.
- Energy is never made or destroyed; it moves between the reaction and its surroundings.
- There is no "cold energy": colder means less thermal energy.
