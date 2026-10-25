---
order: 1
node: AC9S7U04 n1
assumes: [AC9S4U03 n1]
woven: [AC9S7H02, AC9S7I04]
unit: forces
title: How big, which way?
introduces: [force-arrows]
summary: A force has a size and a direction, so we draw it as an arrow. In a force diagram every force on an object gets an arrow of the right length, pointing the right way, with its name.
language: science
voice: { name: af_heart, speed: 1.1 }
app:
  command: node "$REPO_ROOT/tools/serve.mjs" "$REPO_ROOT/dist/_playground-board" 8200
  url: http://127.0.0.1:8200/index.html
  readySelector: "#gpanel"
  layout: full
explainPicture: { ref: boards.yml#explain-pic, caption: "A force diagram: each force on the box as a named arrow, its length showing the size." }
explainClip:
  query: { code: "@boards.yml#explain", fresh: 1, id: explain }
  caption: "Forces as arrows"
  say: "A force has a size and a direction, so we draw it as an arrow."
  clip:
    - caption: { text: "Each force is an arrow: its length is the size, it points the way the force acts.", say: "Each arrow's length shows the size, and it points the way the force acts." }
    - click: "Push: more"
    - click: "Push: more"
    - caption: { text: "A bigger push: a longer arrow.", say: "A bigger push gets a longer arrow." }
    - expect: { selector: "body", contains: "Push 30 N" }
    - caption: { text: "Every force on the box is drawn and named: weight, support, push.", say: "A force diagram shows every force on the object, each one named." }
    - wait: 1200
hook: "Push a shopping trolley gently, then hard. Same direction, different force. Push it from the other side: same size, different force. Two things to get right every time."
---
Forces are invisible, so scientists draw them, and here you'll learn to draw them precisely.

## Engage: what does an arrow tell you?

```step
stage: predict
insight: "Students who think only direction matters, or only size, will choose those options; the board shows the arrow carrying both."
check:
  type: predict
  q: "In a force diagram, each force is drawn as an arrow. What do you predict the arrow shows?"
  options: ["Only which way the force acts", "Only how big the force is", "Both how big it is (its length) and which way it acts (its direction)", "Which way the object will move"]
  actual: "Both. The arrow's length shows the size of the force and it points the way the force acts. (It does not always point the way the object moves.)"
```

## Explore: push the trolley

```step
stage: run
insight: "Changing one force and watching its arrow grow makes 'length = size' concrete before any rules are stated."
try: { playground: board, starter: "boards.yml#trolley", height: 600 }
check: { type: board, text: "Make the push 30 N.", when: "P = 30" }
```

Use the **Push** slider. Watch the push arrow, and watch friction too.

## Explain: reading a force diagram

```step
stage: investigate
insight: "Naming each force and reading size and direction from arrows is the precision skill every later node uses."
tasks:
  - check:
      type: question
      q: "When you made the push bigger, what happened to its arrow?"
      options: ["It got longer, pointing the same way", "It changed direction", "It stayed the same; only the number changed"]
      answer: 0
      feedback: [null, "The push still acts to the right, so the arrow keeps its direction and it's only the size that changed.", "Have another look, because the arrow's length does change when the force does."]
      explain: "The length of an arrow shows the size of the force, so a force twice as big gets an arrow twice as long."
  - check:
      type: match
      q: "Match each force to what causes it."
      pairs:
        - ["Weight", "Earth's gravity pulling the object down"]
        - ["Support (normal force)", "A surface pushing back up on the object"]
        - ["Friction", "Surfaces rubbing, acting against sliding"]
        - ["Air resistance", "Air pushing against a moving object"]
        - ["Push or pull", "Something in contact pushing or pulling"]
  - check:
      type: question
      q: "The trolley's weight is 49 N and the support is 49 N. How should their arrows look?"
      options: ["The same length, pointing in opposite directions", "Weight longer, because it is heavier", "Both pointing down"]
      answer: 0
      feedback: [null, "When two forces are equal, their arrows are drawn the same length, so this doesn't match what the numbers say.", "The ground pushes up on the trolley, because support always points away from the surface."]
      explain: "The two forces are equal in size, so their arrows are the same length, and since weight points down while the support from the ground points up, the arrows point in opposite directions."
    hint: ["If two forces are exactly the same size, how would you show that in a drawing?", "And think about which way the ground pushes back on something sitting on it, then check the Support arrow on the trolley board."]
  - check: { type: reflect, text: "I can say what an arrow's length and direction show, and name the forces on the trolley." }
```

### Length is size

### Naming forces

### Two equal forces

### In your own words

In your book: draw the trolley with all four forces, each arrow the right length, labelled.

## Practise: draw it right

```step
stage: practise
insight: "Repeated diagrams with immediate feedback build precision: correct direction, relative size and a name for every force."
try: { playground: board, starter: "boards.yml#book", height: 560 }
tasks:
  - starter: "boards.yml#book"
    check: { type: board, text: "A 5 kg pile of books rests on a table (its weight is 5 × 9.8 = 49 N). Set the table's push so the diagram is right.", when: "N = 49" }
    hint: ["The books aren't sinking into the table or lifting off it, so what must the table's push be doing compared with their weight?", "Slide the table's push and keep an eye on the line under the board, which tells you when the forces on the books balance."]
  - starter: "boards.yml#tug"
    check: { type: board, text: "In a tug of war, Team A pulls with 300 N and Team B with 300 N. Set both pulls.", when: "L = 300 and R = 300" }
    hint: ["Team A's pull is already set, so think about what the two arrows would have to look like for neither team to win.", "Slide Team B's pull and watch the line under the board, which tells you when the rope isn't being pulled either way."]
  - starter: "boards.yml#skydiver"
    check: { type: board, text: "A 50 kg skydiver (weight 490 N) has reached a steady speed: air resistance now equals her weight. Set it.", when: "A = 490" }
    hint: "Her weight is already worked out and drawn as an arrow, so slide the air resistance until its arrow and the line under the board say the forces on her are balanced."
```

### A book on a table

The book isn't moving up or down. What does that tell you about the table's push?

### A tug of war

### A skydiver

## Elaborate: four situations

```step
stage: modify
tier: typical
insight: "Matching diagrams to situations (at rest, speeding up, slowing down, falling) uses arrows as reasoning, not decoration."
check:
  type: sort
  q: "Which diagram fits each situation? (Forward is the way the object moves.)"
  options: ["Forward arrow longer than backward arrow", "Forward and backward arrows equal", "Backward arrow longer than forward arrow"]
  items:
    - ["A cyclist speeding up", "Forward arrow longer than backward arrow"]
    - ["A car driving at a steady 60 km/h", "Forward and backward arrows equal", "The speed is steady, so the forces cancel."]
    - ["A sled slowing down on flat snow", "Backward arrow longer than forward arrow"]
    - ["A box being pushed but not moving", "Forward and backward arrows equal", "Friction matches the push, so the forces cancel."]
    - ["A runner speeding up out of the blocks", "Forward arrow longer than backward arrow"]
hint: "For each one, ask whether it is speeding up, slowing down or staying at the same speed, and what the forward and backward forces would have to be doing to make that happen."
```

## Elaborate: a boomerang

```step
stage: modify
tier: wider
insight: "A shaped object in flight shows forces that aren't pushes in contact, extending the list of forces students can name."
check:
  type: question
  q: "First Peoples of Australia shaped boomerangs with a curved upper surface, like an aircraft wing. In flight, as air moves over it, which force does that shape mainly create?"
  options: ["Lift: air pushing the boomerang up (and sideways, which curves its path)", "Thrust: the shape keeps pushing it forward, like an engine", "More weight"]
  answer: 0
  feedback: [null, "Nothing pushes it forward once it leaves the hand, so it keeps moving because it was thrown, and it's the shape that makes the air push on it.", "Weight depends only on mass and gravity, so the shape can't change it."]
  explain: "The aerofoil shape makes the air push on it, and that push is lift. Because the boomerang is spinning, the lift tilts it so it curves back, and its force diagram shows weight down, lift, and air resistance against its motion."
hint: ["Think about what a wing does to the air going over it, and what the air then does to the wing.", "Once the boomerang has left the hand, ask what is still touching it."]
```

## Evaluate: look back

```step
stage: info
check: { type: reflect, text: "I compared my first answer about what an arrow shows with what I now know." }
```

Write one sentence: "At first I thought… Now I think… because…"

**Revision summary**

- A force has a **size** (newtons, N) and a **direction**, so it is drawn as an **arrow**.
- The arrow's **length** shows the size; it **points** the way the force acts.
- A **force diagram** shows every force on one object, each one named.
- Common forces: weight (down), support (up from a surface), friction (against sliding), air resistance (against motion through air), pushes and pulls.
