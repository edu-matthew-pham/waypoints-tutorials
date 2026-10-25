---
order: 4
node: AC9S7U02 n1
assumes: [AC9S4U01 n1, AC9S4U01 n4]
woven: [AC9S7I04]
unit: foodwebs
title: Who eats whom?
summary: A food web joins all the food chains in an ecosystem. Arrows point the way energy flows, from the food to the eater. Every organism is a producer, a consumer or a decomposer, and decomposers include microorganisms.
language: science
voice: { name: af_heart, speed: 1.1 }
app:
  command: node "$REPO_ROOT/tools/serve.mjs" "$REPO_ROOT/dist/_playground-board" 8209
  url: http://127.0.0.1:8209/index.html
  readySelector: "#gpanel"
  layout: full
explainPicture: { ref: boards.yml#explain-pic, caption: "Arrows point from the food to the eater: the way energy flows." }
explainClip:
  query: { code: "@boards.yml#explain", fresh: 1, id: explain }
  caption: "Arrows in a food web"
  say: "Arrows in a food web point the way energy flows, from food to eater."
  clip:
    - caption: { text: "A kangaroo eats grass. Click the food, then the eater.", say: "A kangaroo eats grass. Click the food first, then the eater." }
    - click: "Grass"
    - click: "Kangaroo"
    - caption: { text: "The arrow points from grass to kangaroo: the energy goes into the kangaroo.", say: "The arrow points from the grass to the kangaroo, the way the energy goes." }
    - click: "Kangaroo"
    - click: "Dingo"
    - caption: { text: "A dingo eats kangaroos: kangaroo → dingo.", say: "A dingo eats kangaroos, so the next arrow points from kangaroo to dingo." }
    - wait: 1000
hook: "A kookaburra eats lizards, grasshoppers, even small snakes. A food chain can only show one of those meals. How do you show all of them?"
---
A food chain is a good start, and here you'll join lots of them together into one web.

## Engage: which way do arrows go?

```step
stage: predict
insight: "Students often draw arrows from eater to food ('eats'); committing first makes the energy-flow convention stick."
check:
  type: predict
  q: "In a food web, grass is eaten by a grasshopper. Which way should the arrow point?"
  options: ["From the grasshopper to the grass (the grasshopper eats it)", "From the grass to the grasshopper (energy goes into the grasshopper)", "Either way, as long as it's labelled"]
  actual: "From the grass to the grasshopper. Arrows show the way energy flows: from the food into the eater."
```

## Explore: build a bush food web

```step
stage: run
insight: "Drawing each link, with wrong-way arrows flagged, builds the web structure and the arrow convention together."
try: { playground: board, starter: "boards.yml#bush", height: 600 }
check: { type: board, text: "Draw every feeding link, each arrow from the food to the eater.", when: "c = k and x = 0" }
hint: ["Click the food first and then the organism that eats it, so ask where the energy in the grasshopper comes from.", "The line under the board counts your links and turns an arrow red if it isn't right, and if the fungi and bacteria have no arrows yet, think about what happens to a dead dingo."]
```

Click a **food**, then the organism that **eats** it. The board tells you how many links there are. Don't forget the **decomposers**: what do fungi and bacteria feed on?

## Explain: roles in the web

```step
stage: investigate
insight: "Assigning every organism a role, including microorganisms as decomposers, is the node's checkpoint."
tasks:
  - check:
      type: sort
      q: "What is each organism's role in the bush web?"
      options: ["Producer", "Primary consumer", "Secondary consumer", "Decomposer"]
      items:
        - ["Grass", "Producer", "It makes its own food using sunlight, so it's a producer."]
        - ["Grasshopper", "Primary consumer", "It eats a producer, so it's a primary consumer."]
        - ["Kangaroo", "Primary consumer"]
        - ["Lizard", "Secondary consumer", "It eats a primary consumer, so it's a secondary consumer."]
        - ["Dingo", "Secondary consumer"]
        - ["Fungi and bacteria", "Decomposer", "They break down dead grass, dead dingoes and droppings, so they're decomposers."]
    hint: ["For each one, ask what it eats and whether that food is a producer or another consumer.", "Use the web you drew and follow the arrows back from each animal to see what feeds it."]
  - check:
      type: question
      q: "The kookaburra eats both lizards and grasshoppers. What does that make it?"
      options: ["A secondary consumer when it eats grasshoppers, and a tertiary consumer when it eats lizards", "A producer", "A primary consumer"]
      answer: 0
      feedback: [null, "A producer makes its own food, and the kookaburra can't do that, so that label doesn't fit.", "A primary consumer eats plants, but this kookaburra eats lizards and grasshoppers, so that label doesn't fit either."]
      explain: "In a web, one animal can feed at more than one level, depending on what it's eating at the time."
  - check:
      type: question
      q: "Why do decomposers belong in a food web?"
      options: ["They feed on dead organisms and wastes from every level, returning nutrients to the soil", "They don't; only animals that hunt belong", "They make food from sunlight"]
      answer: 0
      feedback: [null, "Decomposers aren't hunters, but they still have a part in the web, so think about what happens to everything that dies.", "Making food from sunlight is what producers do, and decomposers get their food a different way."]
    hint: ["What would happen to a dead dingo or a patch of dead grass if nothing ever broke it down?", "Think about what the grass needs from the soil to grow, and where that could come from."]
  - check: { type: reflect, text: "I can name the producer, consumers and decomposers in a food web, and say which way the arrows point and why." }
```

### Roles

### More than one level

### Decomposers

### In your own words

In your book: copy the bush web, with every arrow, and label each organism's role.

## Mix it up

```step
stage: practise
insight: "Where organisms get their food decides their role in a web. Fungi absorb food from dead material, which makes them decomposers."
check:
  type: question
  q: "Looking back at the kingdoms: a mushroom grows on a dead log. How does it get its food?"
  options: ["It absorbs food from the dead log: it is a fungus, so it is a decomposer", "It makes food from sunlight, like a plant", "It hunts and eats small animals", "It makes food from the soil, like a plant"]
  answer: 0
  feedback: [null, "A mushroom isn't green and can't make food from sunlight, so it doesn't feed the way a plant does.", "Mushrooms can't catch or chase anything, so think about how a fungus feeds while staying in one place.", "Plants make food from sunlight, and fungi aren't plants, so they must feed in a different way."]
  explain: "Fungi absorb food from dead material, and in a food web that makes them decomposers."
```

## Elaborate: chain or web?

```step
stage: modify
tier: typical
insight: "Comparing the simpler model with the fuller one shows what each representation keeps and loses."
check:
  type: question
  q: "The food chain grass → grasshopper → lizard → kookaburra is part of the web. What does the chain leave out?"
  options: ["Other foods each animal eats, and other animals that eat the same food", "Nothing: a chain and a web show the same thing", "The direction of energy flow"]
  answer: 0
  feedback: [null, "The web shows more than the chain does, since the kookaburra eats grasshoppers too and kangaroos eat grass as well.", "A chain has arrows too, so it does show the direction of energy flow."]
  explain: "A chain shows one path, but a web shows every path, which is why it can predict what happens when one population changes."
```

## Elaborate: an Antarctic web

```step
stage: modify
tier: wider
insight: "Building a second, unfamiliar web (marine) tests the structure rather than a memorised example."
try: { playground: board, starter: "boards.yml#sea", height: 600 }
check: { type: board, text: "Build the Antarctic food web. Phytoplankton are tiny drifting producers; krill eat them; the rest you can work out from the list.", when: "c = k and x = 0" }
hint: ["Start from the producer and work upwards, and for each animal ask what it eats from the list.", "Some animals eat more than one food, so read each sentence for every food it names, and the line under the board will count your links and turn a wrong one red."]
```

Krill eat phytoplankton. Small fish eat krill. Squid eat small fish and krill. Penguins eat small fish, krill and squid. Leopard seals eat penguins and small fish. Bacteria break down dead phytoplankton and dead leopard seals.

## Evaluate: look back

```step
stage: info
check: { type: reflect, text: "I compared my first answer about arrow direction with what I now know." }
```

Write one sentence: "At first I thought… Now I think… because…"

**Revision summary**

- A **food web** joins all the food chains in an ecosystem.
- **Arrows point the way energy flows**: from the food to the eater.
- **Producers** make their own food; **consumers** eat other organisms (primary, secondary…); **decomposers** (fungi and bacteria, microorganisms) break down dead matter and wastes.
- One animal can feed at more than one level.
