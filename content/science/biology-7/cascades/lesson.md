---
order: 6
node: AC9S7U02 n4
woven: [AC9S7H03, AC9S7I01]
assumes: [AC9S7U02 n3, AC9S6U01 n2]   # abiotic factors and population effects: taught in class (no tutorial yet)
unit: foodwebs
title: What if the dingo disappeared?
summary: A biotic factor is a living part of an ecosystem. When one population changes, the effect ripples along the food web, beyond the species directly linked to it. Tracing the links lets you predict the cascade.
language: science
voice: { name: af_heart, speed: 1.1 }
app:
  command: node "$REPO_ROOT/tools/serve.mjs" "$REPO_ROOT/dist/_playground-board" 8211
  url: http://127.0.0.1:8211/index.html
  readySelector: "#gpanel"
  layout: full
explainPicture: { ref: boards.yml#explain-pic, caption: "Remove the foxes: more rabbits survive, so they eat more grass. The change passes along the web." }
explainClip:
  query: { code: "@boards.yml#explain", fresh: 1, id: explain }
  caption: "A cascade"
  say: "A change in one population passes along the food web, one link at a time."
  clip:
    - caption: { text: "Foxes eat rabbits; rabbits eat grass. Remove the foxes.", say: "Foxes eat rabbits, and rabbits eat grass; now remove the foxes." }
    - click: "Remove the fox"
    - caption: { text: "Fewer predators: more rabbits.", say: "With no foxes eating them, there are more rabbits." }
    - click: "Rabbit"
    - caption: { text: "More rabbits eat more grass: less grass.", say: "More rabbits eat more grass, so there is less grass." }
    - click: "Grass"
    - click: "Grass"
    - click: "Check my predictions"
    - caption: { text: "The effect passed along the web, link by link: a cascade.", say: "The effect passed along the web one link at a time: a cascade." }
    - wait: 1200
hook: "Where dingoes were removed to protect sheep, kangaroos and foxes boomed, and some small native animals nearly vanished. How could removing one predator harm small animals it rarely ate?"
---
You can build a web and follow the energy through it, so now you'll use it to predict what happens when one animal disappears.

## Engage: remove the dingo

```step
stage: predict
insight: "Students usually predict only the immediate effect (prey increase); the cascade to bandicoots is the reasoning the node targets."
check:
  type: predict
  q: "In a web where dingoes eat kangaroos, rabbits and foxes, and foxes eat rabbits and bandicoots, the dingoes are removed. What do you predict happens to the bandicoots?"
  options: ["They increase: one less predator in the area", "They decrease", "No change: dingoes didn't eat them", "They disappear immediately"]
  actual: "They decrease. Without dingoes, foxes increase, and foxes eat bandicoots. The effect travels along the web, two links away."
```

## Explore: predict, then check

```step
stage: run
insight: "Committing to a prediction for every population before seeing the model's reasons makes students trace each link themselves."
try: { playground: board, starter: "boards.yml#dingo", height: 620 }
check: { type: board, text: "Remove the dingo, predict every other population, then check.", when: "h = 1" }
hint: ["Press the button, then for each organism ask what it eats and what eats it, and whether either of those was affected by the dingo going.", "Work outwards from the dingo one link at a time, because the species next to it change first and then push on the ones next to them, and the line under the board counts how many you still have to predict."]
```

Press **Remove the dingo**. Then click each organism to choose **↑ more**, **↓ fewer** or **– little change**. When you have predicted all of them, press **Check my predictions** and read the reason for each.

## Explain: tracing a cascade

```step
stage: investigate
insight: "Naming biotic factors and tracing a cascade step by step turns the board's reasons into the student's own reasoning."
tasks:
  - check:
      type: sort
      q: "Biotic or abiotic?"
      options: ["Biotic (living)", "Abiotic (non-living)"]
      items:
        - ["A new predator arriving", "Biotic (living)"]
        - ["A disease spreading through rabbits", "Biotic (living)"]
        - ["A drought", "Abiotic (non-living)"]
        - ["Competition between kangaroos and rabbits for grass", "Biotic (living)"]
        - ["The temperature dropping", "Abiotic (non-living)"]
        - ["A plant species dying out", "Biotic (living)"]
  - check:
      type: parsons
      code: "steps.txt#cascade"
      text: "Put the cascade in order."
      explain: "Each step follows one link in the web: that's how an effect reaches species that never met the dingo."
    hint: ["Start with what happens first, and then ask at each line what that change does to the next animal along the web.", "Each line should cause the one after it, so check that every line follows on from the one above."]
  - check:
      type: question
      q: "On the board, the insects could go either way. Why?"
      options: ["Two effects pull opposite ways: less grass (their food) but fewer bandicoots (which eat them)", "Insects aren't in the food web", "The board can't tell"]
      answer: 0
      feedback: [null, "They are in the web, since they eat grass and bandicoots eat them, so look at how they're connected.", "The board can tell you something here, because it lists its reasons for the insects and you can see whether they agree."]
      explain: "Real outcomes depend on which effect is stronger, so scientists would need to measure it to know."
    hint: ["Look at what the insects eat and what eats them, and see which way each of those changed.", "Read the board's reasons for the insects, because it lists more than one, and ask whether they push the same way."]
  - check: { type: reflect, text: "I traced one cascade, link by link, from the dingo to a species it never ate." }
```

### Biotic factors

### The chain of effects

### Either way

### In your own words

In your book: explain why removing dingoes can lead to fewer bandicoots, one link at a time.

## Mix it up

```step
stage: practise
insight: "A cascade is followed along the arrows, so the rule for which way an arrow points has to be secure."
check:
  type: question
  q: "Looking back at food webs: a fox eats a rabbit. Which arrow is drawn correctly?"
  options: ["From the rabbit to the fox", "From the fox to the rabbit", "Either way, as long as it is labelled"]
  answer: 0
  feedback: [null, "Think about where the energy goes when a fox eats a rabbit, because the arrow follows that energy.", "Arrows in a food web all follow the same rule, so the direction matters and a label can't fix it."]
  explain: "Arrows point from the food to the eater, the way energy flows, so tracing a cascade means following them one link at a time."
```

## Elaborate: wolves in Yellowstone

```step
stage: modify
tier: typical
insight: "A famous real cascade, with evidence, connects the model to observed ecology."
check:
  type: question
  q: "Wolves were returned to Yellowstone National Park (USA) in 1995. Elk numbers fell and elk stopped grazing near rivers. Willow and aspen trees then grew back along the rivers, and beavers returned. Which explains the beavers?"
  options: ["Fewer elk eating young trees meant more trees, which beavers use for food and dams", "Wolves protect the beavers from their predators", "Beavers followed the wolves"]
  answer: 0
  feedback: [null, "Wolves don't protect beavers, and the link scientists describe is about what the beavers need for food and dams.", "Beavers don't follow wolves around, so look at what changed along the river that they depend on."]
  explain: "Wolves led to fewer elk, which meant more trees, which meant more beavers: a three-link cascade seen in the field, although scientists still debate how strong each link was."
```

## Elaborate: your own removal

```step
stage: modify
tier: wider
insight: "Choosing which species to remove and predicting the whole web tests transfer to an unfamiliar web."
try: { playground: board, starter: "boards.yml#choose", height: 620 }
check: { type: board, text: "Choose a species to remove, predict every other population, then check.", when: "h = 1" }
hint: "Work outwards from the one you pick, one link at a time, and use 'Start again' afterwards to try a producer and then a top predator."
```

Pick any plant or animal to remove. Which removal do you think changes the most populations? Try a producer and a top predator.

## Elaborate: the dingo fence

```step
stage: modify
tier: typical
insight: "Weighing a real Australian choice against several kinds of consideration shows that a scientific response helps some people and costs others."
tasks:
  - check:
      type: sort
      q: "Some ecologists propose letting dingoes back into parts of the land inside the fence. What kind of consideration is each point?"
      options: ["Environmental", "Economic", "Social", "Ethical"]
      items:
        - ["Small native mammals could recover as dingoes keep foxes in check", "Environmental"]
        - ["Sheep graziers could lose stock, and income, to dingo attacks", "Economic"]
        - ["Keeping thousands of kilometres of fence in repair costs a lot every year", "Economic", "Money spent or saved is an economic consideration, even when the spender is a government."]
        - ["Dingoes matter in many First Nations cultures, and Traditional Owners want a say in how they are managed", "Social", "Who is heard, and whose culture is affected, is a social consideration."]
        - ["Is it fair to kill a native predator to protect introduced livestock?", "Ethical", "A question about what is right or fair is ethical, even when it also has costs."]
  - check:
      type: question
      q: "A report recommends one plan for the fence. What is the best way to judge it?"
      options: ["Weigh its likely effects on native animals, farmers' incomes, communities and fairness, using evidence from places where it has been tried", "Pick whatever helps native animals most; the other points don't matter", "Pick whatever costs the least", "Pick the plan the biggest farm wants"]
      answer: 0
      feedback: [null, "The environment matters, but a plan that ignores farmers' livelihoods and other views is unlikely to work or be fair.", "Cost matters, but it isn't the only thing to weigh, since the cheapest plan might harm native animals or communities.", "Going with one group's wishes would leave out the evidence and everybody else affected."]
      explain: "Scientific responses to an issue affect many groups, so good decisions use evidence and weigh environmental, economic, social and ethical considerations together."
```

The **Dingo Fence** runs about 5,600 km across inland Queensland, New South Wales and South Australia to keep dingoes away from sheep. Studies comparing the two sides found more foxes and kangaroos, and fewer small native mammals, where dingoes are kept out: the cascade you traced. So should the fence stay, move, or let dingoes back in some places?

### Four kinds of consideration

### Judging a plan

## Evaluate: look back

```step
stage: info
check: { type: reflect, text: "I compared my prediction about the bandicoots with the model's reasons." }
```

Write one sentence: "At first I thought… Now I think… because…"

**Revision summary**

- A **biotic factor** is a living part of an ecosystem: predators, prey, competitors, disease.
- Changing one population affects the species linked to it, and then the species linked to those: a **cascade**.
- Trace it **one link at a time**: fewer predators → more prey → less of what the prey eats…
- When two effects pull opposite ways, the result could go either way; scientists measure to find out.
