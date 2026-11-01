---
order: 2
node: AC9S10U03 n3
woven: [AC9S9I04, AC9S9I05, AC9S9I06]
unit: universe
title: How do we know the universe is expanding?
summary: "Light from distant galaxies is redshifted: shifted to longer wavelengths, so they are moving away. Farther galaxies move away faster (Hubble's law, now also called the Hubble–Lemaître law; Hubble used Vesto Slipher's redshift measurements), exactly what an expanding universe predicts, from any galaxy. Run backwards, everything was once together: evidence for the big bang."
language: science
voice: { name: af_heart, speed: 1.1 }
app:
  command: node "$REPO_ROOT/tools/serve.mjs" "$REPO_ROOT/dist/_playground-board" 8237
  url: http://127.0.0.1:8237/index.html
  readySelector: "#gpanel"
  layout: full
explainPicture: { ref: boards.yml#explain, caption: "A field of galaxies. When space expands, every galaxy moves away from every other, farther ones faster." }
explainClip:
  query: { code: "@boards.yml#explain", fresh: 1, id: explain }
  caption: "An expanding universe"
  say: "Space is expanding, so farther galaxies move away faster, from anywhere."
  clip:
    - caption: { text: "A field of galaxies. Now let space expand.", say: "Here is a field of galaxies. Now let space expand." }
    - wait: 2950
    - click: "Let space expand"
    - wait: 3000
    - caption: { text: "Every distance stretches, so farther galaxies move away faster.", say: "Every distance stretches, so farther galaxies move away faster." }
    - caption: { text: "Their light is stretched too: redshift. And it looks the same from any galaxy.", say: "Their light is stretched too: redshift. It looks the same from any galaxy." }
    - wait: 600
hook: "In 1929 Edwin Hubble found that almost every galaxy is moving away from us. Does that put us at the centre of the universe?"
---
The big bang model says the universe should be getting bigger, and that's a prediction you can check against what astronomers actually see.

## Engage: the centre?

```step
stage: predict
insight: "Students who picture galaxies flying away from a centre conclude we are at the centre; changing the home galaxy in the board removes it."
check:
  type: predict
  q: "Almost every galaxy is moving away from the Milky Way. What do you predict that means?"
  options: ["We are at the centre of the universe", "Space is expanding, and every galaxy would see the others moving away", "Galaxies are scared of us", "The Milky Way is shrinking"]
  actual: "Space is expanding, so from any galaxy, the others move away. There is no centre: the same pattern appears wherever you live."
```

## Explore: stretch space

```step
stage: run
insight: "Stretching space and measuring several galaxies shows speed growing with distance, the pattern Hubble found."
try: { playground: board, starter: "boards.yml#expand", height: 760 }
tasks:
  - check:
      type: question
      q: "First, reading light. A galaxy's spectrum runs from violet (short wavelengths) to red (long wavelengths). Its dark hydrogen lines sit further towards the red end than the same lines measured in a lab. What has happened to its light?"
      options: ["It has been stretched to longer wavelengths", "It has been squashed to shorter wavelengths", "The whole galaxy has turned red", "It has become hotter"]
      answer: 0
      feedback: [null, "Shorter wavelengths are at the violet end. Which way did the lines move?", "The colours across the spectrum are the same; only the dark lines have moved.", "Temperature changes the overall glow, not where hydrogen's lines sit."]
      explain: "Hydrogen always leaves its dark lines at the same wavelengths. Lines moved towards the red mean longer wavelengths: the light has been stretched. That is a redshift."
  - check: { type: board, text: "Let space expand, then measure at least three galaxies at different distances.", when: "e = 1 and q = 1" }
    hint: "Press Let space expand first and wait for it to finish, then click one galaxy close to Home and a couple out near the edges, and each one you click adds a dot to the graph under the board."
```

### Reading a spectrum

Spread a galaxy's light out and you get a **spectrum**, a rainbow from violet (short wavelengths) to red (long wavelengths). Hydrogen gas leaves dark lines in it at fixed wavelengths, a fingerprint you can compare with the same lines measured in a lab.

### Stretch space

Press **Let space expand**. Then click galaxies near and far: compare their distances, speeds and light.

## Explain: redshift and Hubble's law

```step
stage: investigate
insight: "Linking redshift to motion away, and the distance–speed pattern to expansion, is the evidence chain."
tasks:
  - check:
      type: question
      q: "What does a redshift in a galaxy's light tell us?"
      options: ["The galaxy is moving away from us", "The galaxy's stars are red", "The galaxy is moving towards us", "The galaxy is very hot"]
      answer: 0
      feedback: [null, "It's the dark lines' positions that shift, not the galaxy's colour.", "That would be a blueshift.", "Temperature changes the overall colour, not where the lines sit."]
      explain: "As the galaxy moves away, its light is stretched to longer, redder wavelengths."
  - check:
      type: question
      q: "On your graph, how does speed depend on distance?"
      options: ["Farther galaxies move away faster, in proportion", "All galaxies move at the same speed", "Nearer galaxies move away faster", "There's no pattern"]
      answer: 0
      feedback: [null, "Look at the points: they climb.", "The points go the other way.", "The points lie close to a straight line through the origin."]
      explain: "Double the distance, double the speed: the points lie close to a straight line through the origin."
  - check:
      type: question
      q: "How does an expanding universe support the big bang theory?"
      options: ["Run backwards, all galaxies were once together, hot and dense", "It proves the universe is shrinking", "It shows we are at the centre of the universe", "It doesn't: expansion and the big bang are unrelated"]
      answer: 0
      feedback: [null, "The redshifts say the opposite.", "Expansion looks the same from everywhere.", "It's one of the main lines of evidence."]
  - check: { type: reflect, text: "I can explain redshift as evidence that galaxies are moving away, and connect Hubble's observations to an expanding universe and the big bang." }
```

### Redshift

### The pattern

### Back in time

### In your own words

In your book: sketch your distance–speed graph and write two sentences linking it to the big bang.

## Elaborate: no centre

```step
stage: modify
tier: typical
insight: "Seeing the same pattern from two home galaxies shows expansion has no centre."
try: { playground: board, starter: "boards.yml#expand", height: 760 }
tasks:
  - check: { type: board, text: "Live in two different galaxies and let space expand from each.", when: "x >= 2" }
    hint: ["Press Back to the start if space has already stretched, then press Live in a different galaxy and click the one you want to move to.", "Once you've moved, press Let space expand again, and the orange lines show how far each galaxy moved as seen from your new home."]
  - check:
      type: question
      q: "From the second home galaxy, what did the other galaxies do?"
      options: ["They all moved away, farther ones faster", "They moved towards the new home", "Only the nearest ones moved away", "They stayed where they were"]
      answer: 0
      feedback: [null, "In an expanding universe they don't, from any home.", "Watch again: every galaxy moved away, the far ones most.", "Watch the orange lines from the new home."]
      explain: "The same pattern as from your first home: expansion looks the same from every galaxy, so it has no centre."
    hint: ["Look at the orange lines from your new home and compare how long they are for the galaxies close by and the ones far away.", "Then think back to what the lines looked like from your first home, and ask whether anything about the pattern was different."]
```

### Two homes

### Same pattern

## Elaborate: a blueshift

```step
stage: modify
tier: wider
insight: "A local exception shows the difference between a galaxy's own motion and the expansion of space."
check:
  type: question
  q: "The Andromeda galaxy, our nearest big neighbour, is blueshifted. Does this disprove the expanding universe?"
  options: ["No: a nearby galaxy's own motion under gravity can beat the expansion", "Yes: one blueshift shows the universe is shrinking", "Yes: it shows Hubble's pattern was wrong", "No: a blueshift also means moving away"]
  answer: 0
  feedback: [null, "One nearby galaxy doesn't change the pattern of millions.", "The pattern holds for distant galaxies.", "Blueshift means moving towards us."]
  explain: "Andromeda and the Milky Way are pulled together by gravity. Over large distances, the redshift pattern is clear."
```

## Evaluate: look back

```step
stage: info
check: { type: reflect, text: "I compared my first answer about the centre of the universe with what I now know." }
```

Write one sentence: "At first I thought… Now I think… because…"

**Revision summary**

- **Redshift:** light from distant galaxies is shifted to longer wavelengths: they are moving **away**. (Strictly, space stretches the light on its way to us; it isn't a Doppler shift from galaxies moving through space.)
- **Hubble's law** (built on Vesto Slipher's redshift measurements): farther galaxies move away **faster**, in proportion to distance.
- This is what an **expanding universe** looks like from any galaxy (no centre). Run backwards, everything was once together: evidence for the **big bang**.
