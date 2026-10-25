---
title: What a habitat needs
summary: "A habitat has physical conditions such as temperature, light and water. Each kind of living thing can survive only within a range of them, so too little or too much of a condition can harm it."
language: science
shape: primer
unit: living
order: 4
node: [AC9S6U01 n1, AC9S6U01 n2]
hook: "Plants need water. So why does a pot plant die when you water it every day?"
---
A **habitat** is the place where a living thing lives. It has physical conditions, like how hot it is, how much light there is and how much water. Living things can only cope with some amounts of each.

## Think first

```step
stage: predict
insight: "The common mistake is that more of a good thing is always better. Each living thing has a range, and too much can harm it as much as too little."
check:
  type: predict
  q: "A pot plant is watered a little more every day. What happens to it?"
  options: ["It grows better and better the more water it gets", "It grows well with some water, but too much harms it", "Water makes no difference to it", "It only needs water if it is in the sun"]
  actual: "It grows well with some water, but too much harms it. Roots need air as well as water, and a soggy pot drowns them. Most living things can only cope with a range of any condition."
```

Lock in a guess before you read on.

## The idea

```step
stage: investigate
insight: "Name the physical conditions first, then use a range to see that both too little and too much are a problem."
tasks:
  - insight: "Physical conditions are measured things about a place, not the living things in it."
    check:
      type: sort
      q: "Is it a physical condition of a habitat?"
      options: ["A physical condition", "Not a physical condition"]
      items:
        - ["How hot or cold it is", "A physical condition"]
        - ["How much light reaches the ground", "A physical condition"]
        - ["How salty the water is", "A physical condition"]
        - ["A kookaburra", "Not a physical condition", "A kookaburra is a living thing in the habitat, not a condition of it."]
        - ["How much rain falls", "A physical condition"]
        - ["A snail", "Not a physical condition"]
  - insight: "Reading a range from a small table: a value outside it is a problem."
    check:
      type: question
      q: "A pond fish can survive when the water is between 5 °C and 30 °C. In a heatwave the pond water warms to 34 °C. What is likely to happen?"
      options: ["The fish is in danger, because the water is above its range", "Nothing, because fish like warm water", "The fish gets stronger", "It only matters if the pond freezes"]
      answer: 0
      feedback: [null, "Fish can only cope with a range. Past 30 °C is too hot for this one.", "Heat past a living thing's range doesn't make it stronger. It makes it struggle to survive.", "Too hot is as much of a problem for this fish as too cold."]
      explain: "34 °C is above the fish's range of 5 to 30 °C. A condition that is too high can harm a living thing, just like one that is too low."
  - insight: "A change in one condition can affect many living things in the habitat."
    check:
      type: question
      q: "A dry summer dries up half a creek. Which sentence is best?"
      options: ["Living things that need a lot of water will struggle", "Only the water itself is changed", "Every living thing there will do better", "Nothing else changes"]
      answer: 0
      feedback: [null, "Water is one condition, but living things depend on it, so they are changed too.", "Less water is a problem for the living things that need it.", "A habitat's conditions are connected to the living things in it."]
      explain: "When a condition changes, the living things that depend on it are affected."
```

A habitat's physical conditions include **temperature**, **light**, **water** and **how salty** the water is. Each living thing has a **range** it can cope with. Below the range or above it, it struggles to grow and survive.

### Conditions

### A hot pond

### A dry creek

## Check

```step
stage: practise
insight: "Applying the range idea to a new example makes the 'more is better' mistake visible."
tasks:
  - check:
      type: question
      q: "A fern grows best in shade. What happens if you move it into hot, full sun all day?"
      options: ["It dries out and may die, because there is too much light and heat", "It grows twice as fast", "Nothing changes", "It turns into a different plant"]
      answer: 0
      feedback: [null, "This fern grows best in shade, so more sun is a problem, not a help.", "A fern in the wrong conditions usually does change, because the conditions are outside its range.", "A plant stays the same kind of plant. It struggles when conditions are wrong."]
      explain: "More of a condition isn't always better. Too much sun and heat is outside this fern's range."
  - check:
      type: question
      q: "Which statement is true about the conditions in a habitat?"
      options: ["Each living thing can only cope with a range of them", "Every living thing needs exactly the same conditions", "More is always better", "Conditions never change"]
      answer: 0
      feedback: [null, "Different living things need different conditions. A cactus and a water lily are very different.", "Too much of a condition, like water or heat, can cause harm.", "Temperature, rain and light change all the time, by day and with the seasons."]
      explain: "Different living things have different ranges, and too much or too little is a problem."
```

### A fern

### Conditions in a habitat

## Apply

```step
stage: make
insight: "Choosing a living thing they know and a condition lets students use the range idea for themselves."
check:
  type: reasoning
  q: "Pick a plant or animal near you. Name one condition it needs (such as warmth, light or water) and say what would happen if there was too little or too much."
  placeholder: "My living thing is … It needs … Too little would … Too much would …"
  models:
    - title: "A tomato plant"
      text: "A tomato plant needs warmth. Too little warmth and the fruit won't ripen. Too much heat and the flowers can drop off."
    - title: "A frog"
      text: "A frog needs damp skin. In a dry spell its skin dries out and it can't survive. In a flood it may be swept away."
  criteria:
    - "I named one condition."
    - "I said what too little and too much would do."
```

```teacher
summary: "Students name the physical conditions of a habitat and see that a living thing can only cope with a range of each, so too much can be as harmful as too little."
time: 17
timing: "Think first 3 min · The idea 6 min · Check 4 min · Apply 4 min"
goals:
  - "I can name the physical conditions of a habitat."
  - "I can say why too much of a condition can harm a living thing."
  - "I can say what a change in one condition could do to living things."
before: |
  The one idea: each living thing survives within a range of each physical condition. The common mistake is thinking more of a good thing is always better (more water, more sun, more warmth). The pot plant and the fern meet it.

  This lesson uses Year 6 nodes 1 and 2 (conditions, and how changes affect growth and survival). Human activity (node 3) is left to Year 7, where *What if the dingo disappeared?* looks at what happens when something is lost.

  Not yet tried with a class.
running:
  - "Think first: ask students about a plant they have overwatered, or one that died in the sun."
  - "The idea: for the pond fish, draw the range on the board (5 to 30) and mark 34."
  - "Apply: ask for living things from different habitats so the class sees different ranges."
struggle: "Students who think more is better will say a plant in the sun is always happy. Ask what happens to a plant in a desert if you add a bucket of water every day."
stuck:
  - see: "A student says more sun or water always helps."
    ask: "Have you seen a plant wilt in the sun or rot in a wet pot?"
    fix: "Draw a range: too little, just right, too much."
  - see: "A student lists living things as conditions."
    ask: "Is that something you could measure, like a temperature?"
    fix: "Conditions are things like temperature, light and water, which you can measure."
exit:
  q: "Why can a plant die from too much water?"
  a: "It has a range it can cope with. A soggy pot leaves its roots without air."
leads: |
  Leads into Year 7 Biology: *What if the dingo disappeared?*, where students see how a change in one part of a habitat spreads to other living things.
```
