---
order: 1
unit: layers
title: Reading the layers
node: AC9HH7K08 n1
assumes:
  - AC9HH7K01
  - AC9HH7K07
summary: Read an excavation as a sequence of layers. Use the position of a find and the evidence beside it to explain what may have changed, while keeping relative age separate from an exact date.
language: maths
voice: { name: af_heart, speed: 1.1 }
app:
  command: node "$REPO_ROOT/tools/serve.mjs" "$REPO_ROOT/dist/_playground-board" 8720
  url: http://127.0.0.1:8720/index.html
  readySelector: "#gpanel"
  layout: full
explainClip:
  query: { code: "@dig.yml#explain", fresh: 1, id: explain }
  caption: "How layers build up"
  say: "How layers build up at a site."
  clip:
    - caption: { text: "At a site, layers build up over time.", say: "At a site, layers of soil and rubbish build up over time." }
    - wait: 600
    - click: Lay down the next layer
    - caption: { text: "Layer A goes down first.", say: "Layer A goes down first." }
    - wait: 700
    - click: Lay down the next layer
    - caption: { text: "Then B on top of it.", say: "Then layer B goes on top of it." }
    - wait: 700
    - click: Lay down the next layer
    - caption: { text: "Then C. The top layer is the youngest.", say: "Then layer C. The top layer is the youngest." }
    - expect: { selector: "#gsum", contains: "bottom one formed first" }
    - wait: 900
    - click: Dig the pit
    - caption: { text: "Later, someone digs a pit down into A.", say: "Later, someone digs a pit down through the layers into A." }
    - expect: { selector: "#gsum", contains: "younger than the layers it cuts" }
    - wait: 700
    - caption: { text: "The coin in the pit is deep, but it is young.", say: "The coin in the pit is deep, but it is younger than those layers." }
    - wait: 1500
hook: Two pieces of pottery look alike. One is in the bottom layer and one is near the surface. What would you need to know before calling one older?
---
When soil, rubbish and building rubble pile up at a place over time, they form layers. Studying those layers is called **stratigraphy**. If nothing has dug into the layers or mixed them up, the lower ones were laid down first. So the layers tell you an order (this one is older than that one), but not a date in years. That is why archaeologists write down exactly where each thing was found, not just what it is.

**A real site:** UNESCO's [page on the First Qin Emperor's mausoleum](https://whc.unesco.org/en/list/441) describes the clay figures, horses, chariots and weapons found there. The dig below is **made up**. It is not the record of that site or any real site in China. Read it from the surface down.

![A made-up excavation with three undisturbed layers: C at the top, B in the middle and A at the bottom.](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgMjc1IiByb2xlPSJpbWciIGFyaWEtbGFiZWxsZWRieT0idGl0bGUgZGVzYyI+PHRpdGxlIGlkPSJ0aXRsZSI+QSBtYWRlLXVwLCB1bmRpc3R1cmJlZCBleGNhdmF0aW9uPC90aXRsZT48ZGVzYyBpZD0iZGVzYyI+VG9wIGxheWVyIEMgY29udGFpbnMgYSBuZXcgZmxvb3IgYW5kIHBvdHMuIE1pZGRsZSBsYXllciBCIGNvbnRhaW5zIGNoYXJjb2FsIGFuZCBidXJudCByb29mIHdvb2QuIEJvdHRvbSBsYXllciBBIGNvbnRhaW5zIGFuIGVhcmxpZXIgZmxvb3IgYW5kIHBvdHRlcnkuIExvd2VyIGxheWVycyBmb3JtZWQgZmlyc3QuIE5vdCB0byBzY2FsZS48L2Rlc2M+PHJlY3Qgd2lkdGg9IjY0MCIgaGVpZ2h0PSIyNzUiIGZpbGw9IiNmYWY3ZjAiLz48ZyBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIyMCIgZmlsbD0iIzIwMjQyMiI+PHRleHQgeD0iMjIiIHk9IjI5Ij5TdXJmYWNlPC90ZXh0PjxyZWN0IHg9IjIwIiB5PSI0MCIgd2lkdGg9IjYwMCIgaGVpZ2h0PSI2NCIgcng9IjQiIGZpbGw9IiNlOGQ4YjAiLz48dGV4dCB4PSIzOCIgeT0iODAiPkM6IG5ldyBmbG9vciBhbmQgY29va2luZyBwb3RzPC90ZXh0PjxyZWN0IHg9IjIwIiB5PSIxMDgiIHdpZHRoPSI2MDAiIGhlaWdodD0iNjQiIHJ4PSI0IiBmaWxsPSIjNjM1YTUwIi8+PHRleHQgeD0iMzgiIHk9IjE0OCIgZmlsbD0id2hpdGUiPkI6IGNoYXJjb2FsIGFuZCBidXJudCByb29mIHdvb2Q8L3RleHQ+PHJlY3QgeD0iMjAiIHk9IjE3NiIgd2lkdGg9IjYwMCIgaGVpZ2h0PSI2NCIgcng9IjQiIGZpbGw9IiNjOGE3N2UiLz48dGV4dCB4PSIzOCIgeT0iMjE2Ij5BOiBlYXJsaWVyIGZsb29yIGFuZCBwb3R0ZXJ5PC90ZXh0Pjx0ZXh0IHg9IjIyIiB5PSIyNjUiIGZvbnQtc2l6ZT0iMTYiPlVuZGlzdHVyYmVkIGxheWVycy4gTWFkZS11cCBjYXNlLiBOb3QgdG8gc2NhbGUuPC90ZXh0PjwvZz48L3N2Zz4=)

| Layer | Finds |
|---|---|
| C, top | A new floor and cooking pots |
| B, middle | Charcoal and burnt roof wood |
| A, bottom | An earlier floor and pottery |

Nothing has dug into these layers or mixed them up.

## Predict: which came first?

```step
stage: predict
insight: Students commit to a rule for reading layers before they test it.
check:
  type: predict
  q: Which layer formed first?
  options:
    - C, the top layer
    - B, the middle layer
    - A, the bottom layer
  actual: A formed first. Nothing has disturbed these layers, so B was laid on top of A, then C on top of B.
```

## Try: order or date?

```step
stage: run
insight: Students separate claims about order from claims about dates before using layers as evidence.
check:
  type: sort
  q: Is each sentence about the order of the layers, or about an exact date?
  options:
    - Relative order
    - Exact date
  items:
    - - A formed before B
      - Relative order
      - It compares two layers.
    - - The fire happened in 220 BCE
      - Exact date
      - That needs a year, and the layers on their own cannot give you one.
    - - C formed after B
      - Relative order
      - The new floor is above the burnt material.
```

Was your guess right? Layers can tell you "before" and "after". They cannot tell you "how many years".

## Practise: dig it yourself

Now dig the same made-up site from the top down. You reach the newest layer first.

```step
stage: practise
insight: "Digging from the top down, then numbering the layers from the oldest, turns 'lower is older' into something students do, not only read."
try: { playground: board, starter: "dig.yml#dig", height: 520 }
hint: ["Which layer did you reach last?", "Nothing has disturbed these layers, so the one at the bottom was laid down before the others."]
check: { type: board, text: "Dig down to the bottom, then number the layers from the one that formed first.", when: "in_order = 1", explain: "A, at the bottom, formed first, then B, then C on top. You dug them in the opposite order: the newest comes off first." }
```

## Worked example: what happened here?

```step
stage: investigate
insight: Students make the main inference from the layers, then repair the planted misconception that depth gives an exact age.
tasks:
  - check:
      type: question
      q: Which story fits the layers best?
      options:
        - The new floor was laid before the earlier floor
        - A fire may have happened between two periods of use
        - An invading army burned the place down
      answer: 1
      explain: An earlier floor, then burnt material, then a new floor. That fits people using the place, a fire, then people using it again. What caused the fire is still an open question.
      feedback:
        - The earlier floor is in layer A, at the bottom, so it came first.
        - null
        - Charcoal shows something burned. It does not show who or what started the fire.
  - check:
      type: question
      q: "Nib writes: “B is deeper than C, so B is exactly 500 years older.” What needs changing?"
      options:
        - Keep the order but take out the 500 years
        - Swap the order, because deeper layers are newer
        - Keep the 500 years, because three layers prove it
      answer: 0
      explain: Being deeper tells you B is older here. It does not tell you by how many years.
      feedback:
        - null
        - Nothing has disturbed these layers, so the lower one formed first.
        - A layer can build up in a week or over centuries. Counting layers does not give years.
      fault: logic
      misconception: layers-give-exact-date
    smaller:
      check:
        type: question
        q: Can a stack of layers on its own tell you how many years passed?
        options:
          - Yes, count the layers
          - No, it only tells you the order
        answer: 1
        explain: The order is still useful, even when we do not know how long it took.
        feedback:
          - Some layers form fast (a flood) and some slowly. Counting them does not give years.
          - null
    hint:
      - Is Nib putting the layers in order, or measuring time?
      - What extra evidence would you need to put years on this sequence?
```

The earlier floor is below the burnt material, and a later floor is above it. A fire between two periods of use is one way to read that. The burnt material on its own does not show who started the fire or whether there was an attack.

### What can you say from the layers?

### Check Nib’s claim

Which part of Nib's claim says more than the layers can show?

## Vary: a pit cuts through

Now change one thing. Later on, someone digs a pit down through layers C and B into A. A recent coin falls into the soil that fills the pit. The coin ends up deep, but the pit is younger than every layer it cuts through.

```step
stage: modify
insight: Students see that the deeper-is-older rule only works when the layers have not been disturbed.
try: { playground: board, starter: "dig.yml#pit", height: 520 }
tasks:
  - check:
      type: board
      text: "Find the thing that is out of place. Click it and say how its age compares with the layer around it."
      when: "n_found = 1 and n_stray = 0"
      explain: "The coin fell into the pit, and the pit was dug after every layer it cuts through. So the coin is younger than layer A, even though it is just as deep."
    hint: ["Which find is not in a layer, but in the pit?", "The pit was dug after the layers. What does that make anything that fell into it?"]
  - check:
      type: question
      q: Before you use the coin's depth to say how old it is, what should you record?
      options:
        - What colour the coin is
        - That it was found inside the later pit
        - How heavy the coin feels
      answer: 1
      explain: The pit has disturbed the layers. If you only looked at depth, you would think the coin was old.
      feedback:
        - Colour does not tell you whether the layers were disturbed.
        - null
        - Weight does not tell you where the coin sits in the sequence.
```

### Find what is out of place

### What to record

## Practise: a new site

```step
stage: practise
insight: Students apply the same reasoning to a new case on their own.
check:
  type: question
  q: At a second made-up site, nothing has been disturbed. A floor lies under a layer of flood mud, and a rebuilt wall sits on top of the mud. Which story do the layers support?
  options:
    - Flooding came before any floor existed
    - The wall shows why the flood happened
    - People used the floor, then a flood came, then they rebuilt
  answer: 2
  explain: The positions give you an order. They do not tell you the cause or the year.
  feedback:
    - The floor is under the flood mud, so it came first.
    - A wall built afterwards cannot tell you what caused the flood.
    - null
```

## Make: explain it in your own book

```step
stage: make
insight: Students write an explanation that names evidence and a limit, read by a person.
check:
  type: reflect
  text: In my own book I drew three layers for a made-up site, put one find in each, and wrote two sentences about their order and one thing the layers cannot tell me. A partner read it and gave feedback.
```

Write in your own book or document. Say what you think happened, which layer shows it, and one thing the layers cannot tell you. Your partner or teacher reads it; this page only keeps your tick.

## Typical: weapons in the charcoal

```step
stage: make
tier: typical
insight: Students meet another find in the same sequence and keep the claim within the evidence.
check:
  type: question
  q: The charcoal layer also has broken weapons in it. Which sentence stays within the evidence?
  options:
    - An attack is possible, but you need more evidence to say so
    - Weapons in a burnt layer always mean the place was attacked
    - The weapons tell you the exact year of the fire
  answer: 0
  explain: Weapons and burning together make an attack worth looking into. They do not settle the cause.
  feedback:
    - null
    - Weapons could have been stored there, or dropped long before the fire.
    - Weapons need their own dating evidence. Finding them does not give a year.
```

## Typical: a coin in the layers

A coin can tell you something about when a layer formed, but only so much. Coins were used for years, so a coin can already be old when someone drops it.

```step
stage: make
tier: typical
insight: "A dated find gives the earliest its own layer could have formed, and the layers above it too, but says nothing certain about the layers below."
try: { playground: board, starter: "dig.yml#date", height: 560 }
hint: ["Could the coin have been dropped before it was made?", "Could the layers under the coin's layer have formed before 220 BCE, after it, or either?"]
check: { type: board, text: "For each layer, choose: formed in 220 BCE or later, or can't tell from the coin.", when: "n_right = 3 and n_wrong = 0", explain: "Layer B can't be older than the coin in it, so it formed in 220 BCE or later, and so did C on top of it. Layer A formed before B, but the coin doesn't say when: it could be from long before 220 BCE." }
```

## Wider: draw the pit

```step
stage: make
tier: wider
insight: Students test the limit of the deeper-is-older rule by drawing and explaining a disturbance.
check:
  type: reflect
  text: I added a later pit to my drawing, marked where it cuts older layers, and explained to a partner why a deep object in its filling could be recent.
```

Typical and wider steps are extras on the same idea. You do not need them to finish the lesson.
