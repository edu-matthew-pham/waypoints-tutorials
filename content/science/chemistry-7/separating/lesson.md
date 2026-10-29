---
order: 7
node: AC9S7U06 n2
assumes: [AC9S6U04 n1]
woven: [AC9S7H04, AC9S7I06]
unit: mixtures
title: How do you separate a mixture?
summary: Every separation technique uses a difference in a physical property between the parts of a mixture. Match property differences to techniques, and choose the order.
language: science
voice: { name: af_heart, speed: 1.1 }
app:
  command: node "$REPO_ROOT/tools/serve.mjs" "$REPO_ROOT/dist/_playground-science" 8251
  url: http://127.0.0.1:8251/index.html
  readySelector: "#board svg"
  layout: full
explainPicture: { ref: boards.yml#explain, caption: "A mixture of water, dissolved salt, sand and iron filings: each part is separated by a different property." }
explainClip:
  query: { code: "@boards.yml#explain", id: explain }
  caption: "Separating mixtures"
  say: "Each separation technique uses a difference in a property."
  clip:
    - caption: { text: "Water, salt, sand and iron filings. Each tool uses a different property.", say: "Water, salt, sand and iron: each tool uses a different property." }
    - wait: 3280
    - click: "Magnet"
    - wait: 1500
    - caption: { text: "A magnet pulls out the iron: it's magnetic.", say: "A magnet pulls out the iron, because it's magnetic." }
    - wait: 2620
    - click: "Filter paper"
    - wait: 2000
    - caption: { text: "Filter paper keeps the sand: its grains are too big.", say: "Filter paper keeps the sand: its grains are too big to pass." }
    - wait: 3610
    - click: "Evaporate"
    - wait: 2500
    - caption: { text: "Evaporating leaves the dissolved salt.", say: "Evaporating the water leaves the dissolved salt behind." }
    - wait: 800
hook: "A recycling plant lifts steel cans out of the rubbish with a giant magnet and leaves everything else behind. Every way of separating a mixture works like that: it uses a difference between the parts."
---
Separating doesn't change the particles: you get back the same substances you mixed. The trick is to find a **property** where the parts differ.

## Engage: the recycling magnet

```step
stage: predict
insight: "Students often explain separation by weight or size by default; magnetism is a clean property that exposes this."
check:
  type: predict
  q: "A magnet lifts steel cans but leaves aluminium cans behind. Why?"
  options: ["The magnet only lifts heavier things", "Steel is attracted to magnets and aluminium isn't", "Aluminium cans are too light to be picked up", "Steel cans are bigger"]
  actual: "Magnetism: steel is attracted to magnets and aluminium isn't. Every separation uses a difference in a property like this."
```

## Explore: the separation bench

```step
stage: run
insight: "Choosing tools on a real mixture, where order matters, turns property-technique pairs into reasoning instead of a list."
try: { playground: science, starter: "boards.yml#bench", height: 560 }
check: { type: board, text: "Get iron, sand and salt each on its own.", expect: { done: true } }
hint: ["Think about which part you could pick out on its own first, and what each tool does to the parts it isn't meant for.", "If a tool catches two things together, the line under the board says so, and Start again lets you try a different order."]
```

The beaker holds water with dissolved salt, sand and iron filings. Use the tools to get **iron, sand and salt each on its own**. The order matters, and you can start again.

## Explain: why each technique works

```step
stage: investigate
insight: "Naming the property behind each technique, and why the order mattered, is the node's checkpoint."
tasks:
  - check:
      type: sort
      q: "Which technique uses each property difference?"
      options: ["Magnet", "Filtration", "Evaporation", "Sieving", "Letting it settle, then pouring off"]
      items:
        - ["Iron is magnetic; sand isn't.", "Magnet", "A magnet can pick out the iron because magnetism is the property that differs."]
        - ["Sand grains are too big to pass through filter paper; water and dissolved salt pass through.", "Filtration", "Filter paper separates them because the particles differ in size."]
        - ["Water turns to vapour easily when heated; salt barely does at all, even in a hot dish.", "Evaporation", "Water vaporises much more easily than salt does, so evaporation separates them."]
        - ["Pebbles are much bigger than grains of rice.", "Sieving", "A sieve works like filter paper, using particle size, but with bigger holes."]
        - ["Oil is less dense than water, so it floats on top.", "Letting it settle, then pouring off", "Oil is less dense than water, so the oil settles on top and can be poured off."]
      explain: "Each technique works because it uses one property difference between the parts."
    hint: ["For each one, ask what is different about the two parts that the technique makes use of.", "Think about whether it comes down to how big the bits are, how hot it has to get before they change, whether they float or sink, or whether a magnet notices them."]
  - check:
      type: question
      q: "Why does filter paper catch the sand but not the salt?"
      options: ["Salt is lighter than sand", "Sand grains are too big for the tiny holes; dissolved salt is spread out as single particles small enough to pass through", "The salt has disappeared", "Sand sticks to the paper"]
      answer: 1
      feedback: ["Weight isn't what a filter tests, because the holes in the paper test something else about the particles.", null, "The salt is still in the water, and if you evaporate the water it comes back.", "Sand doesn't get caught by sticking to the paper, so think about what the holes do."]
      explain: "Filter paper sorts the particles by size, so the big sand grains stay behind and the tiny dissolved salt particles pass through."
    hint: ["What is the filter paper actually testing, how heavy something is or something else about it?", "Try Filter paper on the bench and read the line under the board about the holes and what gets through."]
  - check:
      type: question
      q: "Why did the magnet have to come before the filter paper?"
      options: ["Iron and sand are both too big for the filter, so filtering first would trap them together", "Magnets don't work underwater", "It's the rule for separating"]
      answer: 0
      feedback: [null, "Magnets work fine through water, so that isn't why the order matters.", "There is no fixed rule, because the order depends on the mixture and its properties."]
      explain: "The magnet picks out just the iron first, so the filter then only has to catch the sand."
    hint: ["Try the filter paper on the bench before the magnet and see where the iron ends up.", "Then ask yourself whether you could still pull the iron away from the sand afterwards."]
  - check:
      type: question
      q: "What do all separation techniques have in common?"
      options: ["Each one uses a difference in a physical property between the parts of the mixture", "Each one turns the mixture into new substances", "Each one separates the heavier part from the lighter part", "Each one needs heat"]
      answer: 0
      feedback: [null, "You get back the same substances you mixed, because the particles don't change.", "Weight is only one possibility, since the magnet used magnetism and the filter used particle size.", "The magnet and the filter paper needed no heat, and only evaporation did."]
      explain: "You find a property where the parts differ and then choose the technique that uses it."
  - check: { type: reflect, text: "I explained how I separated the iron, sand and salt, naming the property difference for each step." }
```

### Property to technique

### Filter paper

### The order

### What they share

### In your own words

In your book: explain how you separated the iron, sand and salt. For each step, name the property difference you used.

## Mix it up

```step
stage: practise
insight: "Density is one of the property differences that separation uses, and the particle explanation of density comes from the squashing lesson."
check:
  type: question
  q: "Looking back at density: air is much less dense than water. Why?"
  options: ["Air particles are far apart, so there are far fewer in each cm³", "Each air particle is lighter than a water particle", "Air particles are smaller", "Air has no mass"]
  answer: 0
  feedback: [null, "Surprisingly, an average air particle is heavier than a water particle, so that isn't the reason.", "Particles don't change size between states, so air particles aren't smaller.", "Air does have mass, about 1.2 g in every litre, so that can't be the reason."]
  explain: "Fewer particles in each cm³ means less mass in each cm³, which is a lower density, and density is one of the property differences a separation can use."
```

## Elaborate: choose, and rule out

```step
stage: modify
tier: typical
insight: "Justifying a choice includes saying why the other techniques would not work."
check:
  type: sort
  q: "You need to get chalk dust back out of chalky water. Chalk doesn't dissolve. Judge each technique."
  options: ["Best choice", "Works, but not the best", "Won't work"]
  items:
    - ["Filtration", "Best choice", "Chalk particles don't dissolve and are too big for the filter paper."]
    - ["Evaporation", "Works, but not the best", "It leaves the chalk, but takes a lot of energy and also leaves any dissolved minerals mixed in."]
    - ["A magnet", "Won't work", "Chalk isn't magnetic."]
    - ["A kitchen sieve", "Won't work", "Chalk dust is far smaller than the holes."]
  explain: "Name the property difference first, and then rule out the techniques that can't use it."
hint: ["For each technique, picture chalk dust in water going through it and ask what the technique needs to be different about the chalk.", "Then think about whether a technique that does work might also bring other things along, or take far more effort than the job needs."]
```

## Elaborate: size, density and boiling point

```step
stage: modify
tier: wider
insight: "The same few properties sit behind techniques students already know from home."
check:
  type: sort
  q: "Which property difference does each one use?"
  options: ["Particle size", "Density", "Boiling point", "Magnetism"]
  items:
    - ["Panning for gold: swirling water washes away gravel and leaves gold flakes in the pan.", "Density", "Gold is very dense, so it stays at the bottom."]
    - ["Making fresh water from seawater by boiling it and cooling the steam.", "Boiling point", "Water boils at a far lower temperature than salt does, so only the water turns to steam."]
    - ["Sifting flour to remove lumps.", "Particle size", "Lumps are too big for the mesh."]
    - ["Leaving fresh milk to stand so the cream rises to the top.", "Density", "Cream is less dense than the rest of the milk."]
```

## Elaborate: home, recycling and clean water

```step
stage: modify
tier: wider
insight: "Recognising the property in industrial and environmental contexts shows the principle transfers."
check:
  type: sort
  q: "Which property difference does each one use?"
  options: ["Particle size", "Density", "Boiling point", "Magnetism"]
  items:
    - ["Home: a tea bag keeps the leaves out of your cup.", "Particle size", "The leaves are too big for the bag's tiny holes."]
    - ["Recycling: overhead magnets pull steel cans off the conveyor belt.", "Magnetism", "Steel is magnetic, so the magnets pull the cans out."]
    - ["Recycling: air jets blow light paper and plastic film off heavier glass and metal.", "Density", "Light, thin materials are carried off by the air, while the heavier glass and metal stay where they are."]
    - ["Water treatment: water sits in big tanks so mud sinks to the bottom.", "Density", "Mud particles are denser than water."]
    - ["Water treatment: water trickles through deep beds of sand.", "Particle size", "Small particles get trapped between the sand grains as the water trickles past."]
```

## Elaborate: muddy creek water

```step
stage: modify
tier: wider
insight: "Real choices weigh effectiveness and practicality, and often combine techniques."
check:
  type: parsons
  code: "creek.txt#order"
  text: "On a camping trip, the only water is from a muddy creek, and it may contain germs. Order these plans from most effective to least effective at making it safe to drink."
  explain: "Filtering removes the mud because of its particle size and boiling kills germs, so combining them is best, while boiling alone makes it safer but leaves the mud, and a cloth alone removes some mud but not germs."
```

## Elaborate: a boil water alert

```step
stage: modify
tier: typical
insight: "A boil water alert turns test results into one clear action for a whole town: science communication shaping what people do."
tasks:
  - check:
      type: question
      q: "An alert says: \"Boil water, then let it cool, before drinking. A jug filter is not enough.\" Why include the jug filter line?"
      options: ["Many homes own jug filters and might trust them, but most aren't designed to remove germs", "Jug filters make the water less safe", "Filtering removes germs better than boiling, so the alert has it wrong"]
      answer: 0
      feedback: [null, "The filter doesn't make the water worse, but it doesn't do the job that is needed here.", "Most jug filters are made to improve taste and remove some chemicals rather than germs, whereas boiling kills germs."]
      explain: "Good science communication answers the question its audience will actually have, and heads off the mistake they are likely to make."
  - check:
      type: sort
      q: "Does each choice help the alert reach and protect everyone?"
      options: ["Helps", "Gets in the way"]
      items:
        - ["Short, plain instructions: boil, cool, then drink", "Helps"]
        - ["Naming the suburbs affected and when it started", "Helps"]
        - ["Versions in the main languages spoken in the town", "Helps"]
        - ["Only a long table of lab results, with no instructions", "Gets in the way", "The results matter to the health department, but households need to know what to do."]
        - ["Posting it only in a technical report on the water company's website", "Gets in the way", "People need it where they already look: text messages, radio, social media, the local news."]
```

After a flood, or a fault at a treatment plant, tests sometimes find germs in a town's water. The health department and the water company then issue a **boil water alert**. The tests are science; the alert is **science communication**. It turns the results into something every household can act on, and it is lifted only when new tests show the water is safe again.

### The jug filter

### Reaching everyone

## Evaluate: look back

```step
stage: info
check: { type: reflect, text: "I compared my first prediction with what I found and can say what changed in my thinking." }
```

Why did you think the magnet worked? Write one sentence: "At first I thought… Now I think… because…"

**Revision summary**

- Every separation technique uses a difference in a physical property between the parts of a mixture.
- Magnetism → magnet. Particle size → sieving or filtration. Boiling point → evaporation. Density → letting it settle and pouring off.
- Separating doesn't change the particles: you get back the same substances you mixed.
- Order matters: use the technique that picks out one part before one that traps several together.
