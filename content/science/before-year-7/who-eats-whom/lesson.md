---
title: Who eats whom? A first look
summary: "A food chain shows who eats whom. Each arrow points from the food to the one that eats it, so it shows which way the energy goes. Plants (producers) make their own food and start every chain."
language: science
shape: primer
unit: living
order: 3
node: [AC9S4U01 n1, AC9S4U01 n4]
assumes: [AC9S4U01 n3]   # earlier node, taught in class
hook: "Grass doesn't eat anything, but a kangaroo eats grass. So where does the grass get its energy?"
---
Every living thing needs energy. A food chain shows where it comes from. The tricky part is the arrows: which way should they point?

## Think first

```step
stage: predict
insight: "Many students draw the arrow from the eater to the food (in the direction of the eating). The arrow shows where the energy goes, so it points from the food to the eater."
check:
  type: predict
  q: "A lizard eats a grasshopper. Which way should the arrow point in a food chain?"
  options: ["From the grasshopper to the lizard", "From the lizard to the grasshopper", "Either way, it doesn't matter", "There is no arrow, only a line"]
  actual: "From the grasshopper to the lizard. The arrow shows where the energy goes: the lizard gets energy from the grasshopper."
```

Lock in a guess before you read on.

## Try: build a chain

```step
stage: run
insight: "Building the chain and seeing wrong arrows turn red gives immediate feedback on the direction."
try: { playground: board, starter: "boards.yml#chain", height: 460 }
check: { type: board, text: "Draw every arrow in the chain, from the food to the one that eats it.", when: "c = k and x = 0" }
hint: ["Click the food first, then the animal that eats it.", "Start with the grass: who eats it? Then who eats that animal?"]
```

Click the food first, then what eats it. A wrong arrow turns red.

## The idea

```step
stage: investigate
insight: "Producers start every chain (they make their own food from sunlight), consumers eat other living things, and the arrow shows energy moving."
tasks:
  - insight: "Producers make their own food, so they start a chain."
    check:
      type: question
      q: "Which one makes its own food, so it starts a food chain?"
      options: ["Grass", "Grasshopper", "Lizard", "Kookaburra"]
      answer: 0
      feedback: [null, "A grasshopper eats grass, so it gets its energy from something else.", "A lizard eats animals, so it gets its energy from something else.", "A kookaburra eats animals, so it gets its energy from something else."]
      explain: "Grass is a producer. It makes its own food using sunlight, and the rest of the chain gets its energy from it."
  - insight: "A consumer eats other living things. Reading a chain from the producer to the top."
    check:
      type: question
      q: "In the chain grass → grasshopper → lizard → kookaburra, what does the arrow from lizard to kookaburra mean?"
      options: ["The kookaburra eats the lizard, and energy goes to the kookaburra", "The lizard eats the kookaburra", "The kookaburra and lizard are friends", "The lizard is bigger than the kookaburra"]
      answer: 0
      feedback: [null, "The arrow shows where the energy goes. It goes to the one that eats.", "An arrow shows eating and energy, nothing else.", "The arrow doesn't say anything about size."]
      explain: "An arrow goes from the food to the eater: the kookaburra eats the lizard, so the energy moves from the lizard to the kookaburra."
```

Every food chain starts with a **producer**: a plant that makes its own food from sunlight. A **consumer** is an animal that eats other living things. Read the arrows as "gives energy to": the arrow goes from the food to the one that eats it.

### Where a chain starts

### Reading an arrow

## Check

```step
stage: practise
insight: "Checking direction on a new chain and spotting a swapped arrow are the move Year 7 food webs depend on."
tasks:
  - check:
      type: question
      q: "Which food chain has its arrows the right way round?"
      options: ["Seaweed → fish → seal", "Seal → fish → seaweed", "Fish → seaweed → seal", "Seaweed → seal → fish"]
      answer: 0
      feedback: [null, "These arrows run from the eater back to its food, so they are the wrong way round.", "The seaweed is a plant, so it should start the chain.", "A seal eats the fish, so the arrow should go from the fish to the seal."]
      explain: "Seaweed is the producer, a fish eats it, and a seal eats the fish. Each arrow goes from the food to the eater."
  - check:
      type: sort
      q: "Is it a producer or a consumer?"
      options: ["Producer", "Consumer"]
      items:
        - ["A gum tree", "Producer"]
        - ["A kangaroo", "Consumer", "It eats grass, so it gets its energy from eating."]
        - ["Seaweed", "Producer"]
        - ["A fish that eats seaweed", "Consumer"]
        - ["A lizard", "Consumer"]
        - ["Grass", "Producer"]
```

### Which way?

### Producer or consumer

## Apply

```step
stage: make
insight: "Writing their own chain with arrows from food to eater is the transfer task."
check:
  type: reasoning
  q: "Write a food chain of at least three living things for a place you know, such as a pond, a garden or the bush. Put the arrows the right way round and say what each arrow means."
  placeholder: "Leaf → caterpillar → bird. The arrow from leaf to caterpillar means …"
  models:
    - title: "A garden"
      text: "Lettuce → snail → blackbird. The first arrow means the snail eats the lettuce and gets its energy. The second means the blackbird eats the snail."
    - title: "A pond"
      text: "Pond weed → tadpole → fish. The arrows show energy moving from the weed to the tadpole and then to the fish."
  criteria:
    - "My chain starts with a producer."
    - "Every arrow goes from the food to the one that eats it."
```

```teacher
summary: "Students build a short food chain, name the producer, and say which way the arrows point and why."
time: 18
timing: "Think first 3 min · Try 5 min · The idea 5 min · Check 3 min · Apply 3 min"
goals:
  - "I can say what a producer and a consumer are."
  - "I can draw a food chain with the arrows the right way round."
  - "I can say what an arrow in a food chain means."
before: |
  The one idea: an arrow shows where the energy goes, so it points from the food to the eater. The common mistake is drawing the arrow the way the eating happens ('the lizard eats the grasshopper' → lizard → grasshopper). The Think first question and the board's red arrows both meet it.

  The Year 7 lesson *Who eats whom?* uses the same board with a bigger web. Decomposers (Year 4 node 3) and what happens if a link goes (node 5) are left to Year 7, where *What if the dingo disappeared?* covers it.

  Not yet tried with a class.
running:
  - "Think first: ask students to explain the direction they chose before showing the answer."
  - "Try: if the board turns arrows red, ask 'Which way does the energy go?'"
  - "Apply: look for chains that start with an animal. Ask what the animal eats."
struggle: "Students feel they've been told the arrow 'backwards'. Say 'the arrow shows where the energy goes, not who eats whom'."
stuck:
  - see: "A student draws arrows from the eater to the food."
    ask: "Where does the lizard's energy come from?"
    fix: "From the grasshopper, so the arrow goes grasshopper → lizard."
  - see: "A student puts an animal at the start of the chain."
    ask: "What does that animal eat?"
    fix: "Keep going back until you reach something that makes its own food."
exit:
  q: "A fish eats seaweed and a seal eats the fish. Draw the chain with arrows."
  a: "Seaweed → fish → seal."
leads: |
  Leads into Year 7 Biology: *Who eats whom?* and *Where does the energy go?*, where students build whole food webs and follow the energy through them.
```
