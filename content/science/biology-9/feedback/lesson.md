---
order: 5
node: AC9S9U01 n5
unit: control
title: How does your body stay at 37 °C?
summary: "Homeostasis keeps internal conditions near a set point by negative feedback: a change away from the set point is detected, and the response reverses it. Body temperature is controlled by the hypothalamus through sweating, shivering and blood flow."
language: science
voice: { name: af_heart, speed: 1.1 }
app:
  command: node "$REPO_ROOT/tools/serve.mjs" "$REPO_ROOT/dist/_playground-board" 8216
  url: http://127.0.0.1:8216/index.html
  readySelector: "#gpanel"
  layout: full
explainClip:
  query: { code: "@boards.yml#explain", fresh: 1, id: explain }
  caption: "Negative feedback"
  say: "Negative feedback keeps body temperature near its set point."
  clip:
    - caption: { text: "Body temperature stays near 37 °C, its set point.", say: "Body temperature stays near thirty seven degrees, its set point." }
    - wait: 2950
    - click: { selector: "#air" }
    - press: "End"
    - caption: { text: "Very hot air: the body starts to warm.", say: "In very hot air, the body starts to warm." }
    - wait: 2500
    - caption: { text: "Sweating and flushed skin bring it back down: negative feedback.", say: "Sweating and flushed skin bring it back down: negative feedback." }
    - wait: 2500
    - press: "Home"
    - caption: { text: "Cold air: shivering warms it back up.", say: "In cold air, shivering warms it back up." }
    - wait: 3000
hook: "On a 45 °C day in Marble Bar or a frosty morning in Canberra, your body stays within about half a degree of 37 °C. Something is constantly correcting it."
---
You've followed a response from the stimulus all the way to the action, so now look at what happens when the response changes the very thing that set it off.

## Engage: what keeps it steady?

```step
stage: predict
insight: "Students who think the body is simply 'at 37' don't expect constant correction; the board shows temperature wobble and recover."
check:
  type: predict
  q: "You walk from air-conditioning into a 42 °C day. What happens to your body temperature?"
  options: ["It stays exactly 37 °C because that's your temperature", "It starts to rise, the body detects it and responds, and it comes back near 37 °C", "It rises to 42 °C", "It drops"]
  actual: "It starts to rise, receptors detect it, the hypothalamus switches on sweating and sends more blood to the skin, and it comes back near 37 °C. It is corrected, not fixed."
```

## Explore: push it and watch it recover

```step
stage: run
insight: "Driving the temperature off the set point twice and watching the effectors switch on and ease off makes negative feedback a loop students have operated."
try: { playground: board, starter: "boards.yml#temp", height: 600 }
check: { type: board, text: "Push the body temperature away from 37 °C and let it recover, twice (once hot, once cold).", when: "r >= 2" }
smaller:
  starter: "boards.yml#hot-only"
  height: 560
  check:
    type: question
    q: "This board only gets hotter. Turn the air right up and wait until your temperature is back near 37 °C. With the air still hot, is the sweating on, off, or somewhere in between?"
    options: ["Still on, but not as hard as at first, just enough to hold you near 37 °C", "Off, because you're back at 37 °C", "On full, as strong as at the start", "It has turned into shivering"]
    answer: 0
    feedback: [null, "Read the line under the loop while the air is still high: the sweating hasn't stopped.", "If it were still full strength, you'd keep cooling below 37 °C, but the graph levels off instead.", "Shivering only starts when you get too cold."]
    explain: "The response matches how far you are from 37 °C, so it eases off as you come back, and it only stops once the heat has gone. That's what lets the body recover from either direction on the main board."
hint: ["Have you dragged the slider a long way and then left it there for a bit, so the body has time to respond?", "A small nudge doesn't count, so push the Air right to one end, keep your eye on the graph and the line under the loop, and wait for the temperature to come back towards the set point before you try the other way."]
```

Drag the **Air** slider far up or down. Watch the body temperature on the graph, and the message under the loop saying which corrective response is on. When the body has recovered, push it the other way.

## Explain: negative feedback

```step
stage: investigate
diagram:
  ref: diagrams.mmd#loop
  alt: "A negative feedback loop for getting too hot. Body temperature rises above 37 °C. Receptors in the skin detect it. The hypothalamus compares it with the set point, 37 °C. Effectors respond: sweat glands sweat and skin blood vessels widen. Temperature falls back. Receptors keep checking, and as it gets back near 37 °C the response eases off."
  caption: "Negative feedback: the response reverses the change"
  role: explain
insight: "Naming each part of the loop and why it is 'negative' is the hinge."
tasks:
  - check:
      type: sort
      q: "Too hot or too cold: which responses switch on?"
      options: ["Too hot", "Too cold"]
      items:
        - ["Sweating", "Too hot"]
        - ["Shivering", "Too cold"]
        - ["Blood vessels near the skin widen (skin flushes)", "Too hot"]
        - ["Blood vessels near the skin narrow (skin goes pale)", "Too cold"]
        - ["Hairs stand up (goosebumps)", "Too cold"]
  - check:
      type: question
      q: "Why is it called negative feedback?"
      options: ["The response reverses the change: a rise causes a fall, a fall causes a rise", "It is bad for the body", "It makes the temperature go down only", "The receptors stop working"]
      answer: 0
      feedback: [null, "Negative means 'opposing the change', not harmful.", "It also brings a low temperature up.", "Receptors keep detecting all the time."]
    hint: ["Think about what happened on the board when you made the air very cold, and compare it with what happened when you made it very hot.", "In each case, look at which way the temperature was pushed and which way the body's response took it."]
  - diagram:
      ref: diagrams.mmd#oneway
      alt: "A student's drawing. Body temperature rises. Receptors detect it. The hypothalamus starts sweating. Temperature falls, and keeps falling. Nothing checks the temperature again or switches the sweating off."
      caption: "One student drew the loop like this: what is missing?"
      role: misconception
    check:
      type: question
      q: "On the board, what happens to sweating as body temperature comes back towards 37 °C?"
      options: ["It eases off as the temperature comes back, and stops once the heat has gone", "It keeps going at full strength all day", "It gets stronger", "It turns into shivering"]
      answer: 0
      feedback: [null, "Full-strength sweating would cool you below 37 °C.", "Stronger sweating would overshoot.", "Shivering only starts if you get too cold."]
      explain: "The response matches how far you are from 37 °C. While the air stays hot, a little sweating keeps going to hold you near 37 °C (watch the board with the air still high), and it stops once you're out of the heat."
    hint: ["The student's drawing has nothing that checks the temperature again, so think about what full-strength sweating would do to you if nothing ever turned it down.", "Push the Air high on the board, wait for the temperature to come back, then read the line under the loop while the air is still hot, and again after you bring the slider back down."]
  - check:
      type: match
      q: "Match each part of a negative feedback loop to what it is in body temperature control."
      pairs:
        - ["Set point", "The value the body keeps conditions near: about 37 °C"]
        - ["Deviation", "A change away from the set point, such as body temperature rising on a hot day"]
        - ["Corrective response", "What the effectors do to reverse the change, such as sweating"]
        - ["Return detection", "Receptors sense the temperature is back near 37 °C, so the response eases off"]
  - check: { type: reflect, text: "I can explain how negative feedback brings body temperature back towards the set point from either direction." }
```

### Hot or cold

### Negative

### Switching off

### Four parts

### In your own words

In your book: draw the feedback loop for body temperature with the receptors, the hypothalamus and the effectors, and arrows showing what happens when you get too hot. Label the set point, the deviation, the corrective response and the return detection.

## Elaborate: blood sugar

```step
stage: modify
tier: typical
insight: "The same loop with a hormone as the message shows negative feedback is a pattern."
check:
  type: sort
  q: "Order the steps when blood sugar rises after lunch."
  options: ["1st", "2nd", "3rd", "4th"]
  items:
    - ["Blood sugar rises above the set point", "1st"]
    - ["Cells in the pancreas detect it and release insulin", "2nd"]
    - ["Liver and muscle cells take up glucose", "3rd"]
    - ["Blood sugar falls, so the pancreas releases less insulin", "4th"]
```

## Elaborate: break the loop

```step
stage: modify
tier: wider
insight: "Breaking one part of the loop and watching control fail shows every part is needed."
try: { playground: board, starter: "boards.yml#broken", height: 640 }
tasks:
  - check: { type: board, text: "Break one part of the loop, then push the temperature off 37 °C.", when: "b = 1 and d > 1" }
    hint: ["Once a part is broken, ask what's left to notice the change or do anything about it.", "Press one Break button, then drag the Air a long way and watch the graph, because with the air left at 22 °C nothing much moves even when the loop is broken."]
  - check:
      type: question
      q: "If the sweat glands couldn't work (as in some burns patients), what would happen on a hot day?"
      options: ["The body couldn't cool down enough and could overheat, even though the brain detects the rise", "Nothing: the brain would fix it", "The body would get cold"]
      answer: 0
      feedback: [null, "The brain can detect but needs effectors to respond.", "Losing a cooling effector makes overheating more likely, not cooling."]
```

### Break it

### Real failure

## Evaluate: look back

```step
stage: info
check: { type: reflect, text: "I compared my first answer about walking into the heat with what I now know." }
```

Write one sentence: "At first I thought… Now I think… because…"

**Revision summary**

- **Homeostasis:** keeping internal conditions (temperature, blood sugar, water) near a **set point**.
- **Negative feedback** has four parts around a **set point**: a **deviation** (a change away from it) is detected; a **corrective response** reverses it; **return detection** (receptors sensing it is back near the set point) eases the response off, and it stops once the stimulus has gone. "Negative" means it opposes the change.
- Too hot: sweating, skin blood vessels widen. Too cold: shivering, skin blood vessels narrow, goosebumps. The **hypothalamus** is the control centre.

```code diagrams.mmd#loop
flowchart TD
  D[Temperature rises above 37 °C] --> R[Skin receptors detect it]
  R --> H[Hypothalamus compares with 37 °C]
  H --> E[Sweat, skin vessels widen]
  E --> C[Temperature falls back]
  C -- receptors keep checking --> R
  C -- near 37 °C --> O[Response eases off]
  class C new
```

```code diagrams.mmd#oneway
flowchart TD
  D[Temperature rises] --> R[Receptors detect it]
  R --> H[Hypothalamus starts sweating]
  H --> C[Temperature falls]
  C --> X[Keeps falling]
  class X wrong
```
