---
order: 5
node: AC9S10U04 n3
unit: climate
title: How do greenhouse gases warm the Earth?
summary: "Earth gives off infrared. Greenhouse gases (water vapour, CO₂, methane, nitrous oxide) absorb some of it and send part back down, slowing the energy going out. Without them Earth would average about −18 °C. Adding more upsets the balance, and Earth warms until it is restored."
language: science
voice: { name: af_heart, speed: 1.1 }
app:
  command: node "$REPO_ROOT/tools/serve.mjs" "$REPO_ROOT/dist/_playground-board" 8236
  url: http://127.0.0.1:8236/index.html
  readySelector: "#gpanel"
  layout: full
explainPicture: { ref: boards.yml#explain, caption: "Sunlight in; infrared from the surface, part absorbed by greenhouse gases and sent back down." }
explainClip:
  query: { code: "@boards.yml#explain", fresh: 1, id: explain }
  caption: "The greenhouse effect"
  say: "Greenhouse gases slow the loss of infrared, keeping Earth warmer."
  clip:
    - caption: { text: "Greenhouse gases absorb infrared and send some back down.", say: "Greenhouse gases absorb infrared from the surface and send some back down." }
    - wait: 3610
    - click: "Remove all greenhouse gases"
    - click: "Run 50 years"
    - wait: 2500
    - caption: { text: "Without them, Earth would cool to about −18 °C.", say: "Without them, Earth would cool to about minus eighteen degrees." }
    - caption: { text: "Extra greenhouse gases do the opposite: Earth warms.", say: "Extra greenhouse gases do the opposite, and Earth warms." }
    - wait: 600
hook: "The moon is the same distance from the sun as Earth, but its average surface temperature is far below freezing. Earth's thin blanket of gases makes the difference."
---
You've seen that Earth only stays the same temperature while the energy coming in matches the energy going out, so where does the air come into it?

## Engage: what do greenhouse gases do?

```step
stage: predict
insight: "Students who think greenhouse gases trap incoming sunlight (or confuse them with the ozone hole) locate the mechanism wrongly; the board's arrows show it acts on outgoing infrared."
check:
  type: predict
  q: "How do greenhouse gases warm the Earth?"
  options: ["They let more sunlight in through a hole in the ozone layer", "They trap incoming sunlight", "They absorb infrared given off by Earth's surface and send some back down, slowing the energy going out", "They make the sun hotter"]
  actual: "They absorb outgoing infrared from the surface and send part of it back down, so energy leaves more slowly. Sunlight passes through them easily. The ozone hole is a different problem."
```

## Explore: remove them, then add more

```step
stage: run
insight: "Finding for themselves how cold Earth would be with no greenhouse gases (about −18 °C), then choosing the CO₂ that warms it by about 2 °C, shows the natural and the enhanced effect in one model, and that the warming takes years to settle."
try: { playground: board, starter: "boards.yml#gh", height: 720 }
tasks:
  - check: { type: board, text: "Take every greenhouse gas out of the air and run the years until the temperature stops changing.", when: "z = 1" }
    hint: ["Everything you need is in the buttons under the picture.", "Remove all greenhouse gases, then Run 50 years, and watch the graph until it flattens out."]
  - check:
      type: number
      q: "Where did Earth's average temperature settle, to the nearest degree?"
      answer: -18
      tolerance: 2
      explain: "About −18 °C, more than 30 degrees colder than the 15 °C we actually have. That difference is the natural greenhouse effect."
    hint: "Read the surface temperature written under the picture, or the end of the line on the graph."
  - check: { type: board, text: "Put the greenhouse gases back, then find a CO₂ level that leaves Earth about 2 °C warmer than it started, and run until it settles.", when: "t >= 16 and t <= 16.7 and d > -0.3 and d < 0.3" }
    smaller:
      starter: "boards.yml#gh-1"
      height: 620
      check:
        type: question
        q: "This board has no CO₂ slider, just the sunlight. Turn the sunlight up a little and run the years. While more energy is coming in than going out, what does the temperature do?"
        options: ["It rises, and the warmer surface gives off more infrared, until out matches in and it levels off", "It keeps rising for as long as you run it", "It stays the same, because the sun only changed a little", "It falls, because more of the light is reflected"]
        answer: 0
        feedback: [null, "Watch energy out under the picture as the surface warms: it climbs until it catches up.", "Run it and read the temperature under the picture: it does change.", "Reflected light only changes if you move the Reflected slider."]
        explain: "A warmer surface gives off more infrared, so the gap between in and out closes and the temperature settles at a new, higher level. Adding CO₂ does the same thing from the other side: it holds back some of the energy going out."
    hint: ["Earth starts at about 14 °C here, so you're aiming for about 16 °C once it stops changing.", "Somewhere between 400 and 500 ppm gets you there. If you overshoot, Start again: a warmer planet doesn't cool back down quickly."]
```

### No greenhouse gases

What would happen to Earth's temperature if the air had no greenhouse gases in it at all? Find out on the board, and wait until the temperature stops changing before you decide.

### How warm?

### Warm it by 2 °C

Now bring the greenhouse gases back and add CO₂ until Earth ends up about 2 °C warmer than where it started. Notice how long it takes to settle.

## Explain: natural and enhanced

```step
stage: investigate
insight: "Locating the mechanism on the outgoing flow, and separating natural from enhanced, is what explaining climate change requires."
tasks:
  - check:
      type: question
      q: "Greenhouse gases slow which flow of energy?"
      options: ["Infrared going out from Earth to space", "Sunlight coming in", "Heat from Earth's core", "Wind"]
      answer: 0
      feedback: [null, "Sunlight passes through them: watch the yellow arrow, it doesn't change.", "That's tiny compared with sunlight.", "Wind is moving air, not radiation."]
  - check:
      type: sort
      q: "Natural greenhouse effect or enhanced greenhouse effect?"
      options: ["Natural", "Enhanced"]
      items:
        - ["Keeps Earth about 33 °C warmer than it would be with no greenhouse gases", "Natural"]
        - ["Extra CO₂ from burning fossil fuels", "Enhanced"]
        - ["Water vapour and CO₂ that were in the air before 1800", "Natural"]
        - ["Methane from farming and landfill adding to the air", "Enhanced"]
  - check:
      type: question
      q: "When you raised CO₂, why did the temperature rise and then level off?"
      options: ["Less infrared escaped, so energy in exceeded energy out; the warmer surface then gave off more until out equalled in again", "The sun got hotter", "CO₂ is hot", "The ozone layer got thinner"]
      answer: 0
      feedback: [null, "Sunlight stayed the same.", "CO₂ isn't a heat source; it slows the escape of heat.", "Ozone isn't in this model and isn't the cause."]
  - check: { type: reflect, text: "I can explain how greenhouse gases slow outgoing infrared, the difference between the natural and enhanced greenhouse effect, and where this fits in the energy balance." }
```

### Which flow

### Natural or enhanced

Before about 1800 the air held around 280 parts per million (ppm) of CO₂, and today it's over 420, mostly from burning fossil fuels. Doubling it to 560 ppm is the level scientists often use to compare climate models, and this board's simple model gives about 3 °C of warming for that.

### Rise and level off

### In your own words

In your book: draw the energy-balance diagram again and add greenhouse gases absorbing and re-emitting infrared. Label natural and enhanced.

## Elaborate: the greenhouse gases

```step
stage: modify
tier: typical
insight: "Naming the gases and separating them from other air pollutants prevents the ozone confusion."
check:
  type: sort
  q: "Greenhouse gas or not?"
  options: ["Greenhouse gas", "Not a greenhouse gas"]
  items:
    - ["Carbon dioxide (CO₂)", "Greenhouse gas"]
    - ["Methane (CH₄)", "Greenhouse gas"]
    - ["Water vapour", "Greenhouse gas"]
    - ["Nitrous oxide (N₂O)", "Greenhouse gas"]
    - ["Nitrogen (N₂), 78% of the air", "Not a greenhouse gas", "Molecules with only two identical atoms barely absorb infrared."]
    - ["Oxygen (O₂)", "Not a greenhouse gas"]
```

## Elaborate: methane

```step
stage: modify
tier: wider
insight: "Comparing gases by their warming power applies the mechanism quantitatively."
check:
  type: question
  q: "There is about 200 times less methane than CO₂ in the air, yet it causes about a quarter as much extra warming. Why?"
  options: ["Kilogram for kilogram, methane absorbs far more infrared than CO₂ (it traps about 80 times as much heat over 20 years)", "Methane is hotter", "Methane lets more sunlight in", "Methane lasts forever"]
  answer: 0
  feedback: [null, "Gases warm the Earth by absorbing infrared, not by being hot.", "Greenhouse gases don't change the sunlight coming in.", "Methane breaks down in about 10 years; CO₂ lasts much longer."]
```

## Evaluate: look back

```step
stage: info
check: { type: reflect, text: "I compared my first answer about greenhouse gases with what I now know." }
```

Write one sentence: "At first I thought… Now I think… because…"

**Revision summary**

- Earth's surface gives off **infrared**. **Greenhouse gases** (water vapour, CO₂, methane, nitrous oxide) absorb some and send part back down: they slow energy **going out**, not sunlight coming in.
- **Natural greenhouse effect:** keeps Earth about 15 °C on average instead of about −18 °C.
- **Enhanced greenhouse effect:** extra greenhouse gases from human activity reduce the outgoing infrared, so energy in exceeds energy out and Earth **warms** until balance is restored.
- It is not the ozone hole.
