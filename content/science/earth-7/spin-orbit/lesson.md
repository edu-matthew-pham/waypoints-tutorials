---
order: 1
node: AC9S7U03 n1
woven: [AC9S7I05]
unit: earth
title: Spinning and orbiting
summary: "The Earth rotates (spins on its axis) once a day, causing day and night, and revolves (goes round the sun) once a year. Its axis is tilted and always points the same way in space."
language: science
voice: { name: af_heart, speed: 1.1 }
app:
  command: node "$REPO_ROOT/tools/serve.mjs" "$REPO_ROOT/dist/_playground-board" 8228
  url: http://127.0.0.1:8228/index.html
  readySelector: "#gpanel"
  layout: full
explainPicture: { ref: boards.yml#explain, caption: "Earth's orbit round the sun, with its tilted axis, and the side view showing day and night." }
explainClip:
  query: { code: "@boards.yml#explain", fresh: 1, id: explain }
  caption: "Spinning and orbiting"
  say: "The Earth spins once a day and orbits the sun once a year."
  clip:
    - caption: { text: "The Earth spins on its axis once a day: day and night.", say: "The Earth spins on its axis once a day: day and night." }
    - wait: 3610
    - click: "Play a day"
    - wait: 3500
    - caption: { text: "It orbits the sun once a year, its axis always tilted the same way.", say: "It orbits the sun once a year, its axis always tilted the same way." }
    - wait: 4270
    - click: "Play a year"
    - wait: 4500
hook: "Right now you are spinning at about 1400 km/h (in Canberra) and flying round the sun at about 107 000 km/h. You don't feel either."
---
In Year 6 you modelled day and night, and here you'll put that together with the Earth's other big movement, its trip around the sun.

## Engage: what makes a day?

```step
stage: predict
insight: "Students who mix up rotation and revolution will choose the 'once round the sun' answer; the board separates the two cycles."
check:
  type: predict
  q: "What causes day and night?"
  options: ["The sun goes round the Earth once a day", "The Earth goes round the sun once a day", "The Earth spins on its axis once a day", "The moon blocks the sun at night"]
  actual: "The Earth spins (rotates) on its axis once a day. The half facing the sun has day. Going round the sun (revolving) takes a whole year."
```

## Explore: a day, then a year

```step
stage: run
insight: "Playing one day (one spin) and then one year (one trip round the sun, with 365 spins) side by side makes the two cycles distinct."
try: { playground: board, starter: "boards.yml#earth", height: 640 }
check: { type: board, text: "Play a day, then play a year.", when: "r >= 1 and o >= 1" }
```

Press **Play a day** and watch the orange person on the equator, and Canberra in the side view. Then press **Play a year**. Watch which way the axis (the white line marked N) points as the Earth goes round.

## Explain: rotation, revolution and tilt

```step
stage: investigate
insight: "Sorting effects to the right cycle, and noticing the axis keeps its direction, is the hinge to seasons and eclipses."
tasks:
  - check:
      type: sort
      q: "Rotation (spinning) or revolution (orbiting)?"
      options: ["Rotation", "Revolution"]
      items:
        - ["Takes about a day", "Rotation"]
        - ["Takes about 365¼ days", "Revolution"]
        - ["Causes day and night", "Rotation"]
        - ["The sun seems to rise in the east", "Rotation"]
        - ["Goes through the seasons once", "Revolution"]
        - ["Different stars are in the night sky in June and December", "Revolution", "Night faces a different part of space as we go round the sun."]
    hint: ["For each one, ask whether it repeats every day or only shows up as the Earth gets a long way round the sun.", "If you're not sure, press Play a day or Play a year on the board and see which one it shows up in."]
  - check:
      type: number
      q: "About how many sunrises (days) fit into one trip of the Earth round the sun?"
      answer: 365
      tolerance: 1
      explain: "About 365¼ days, which is why we add a leap day every four years. (Counted against the stars the Earth turns once more than that, because it has also moved round the sun.)"
    hint: ["How long did Play a day take on the board compared with Play a year?", "The board keeps count of the days you've played, so you can see how many days fit into one year."]
  - check:
      type: question
      q: "During Play a year, what did the Earth's axis do?"
      options: ["It kept pointing the same way in space, so sometimes the north end leans towards the sun and sometimes away", "It always leaned towards the sun", "It flipped over at midyear", "It stood straight up"]
      answer: 0
      feedback: [null, "Watch the N line in December and June: it points the same way, but the sun is on the other side.", "It never flips.", "It is tilted 23.4°."]
    hint: ["Which way did the white N line point in December, and which way in June?", "Use the Date slider to jump to those two dates and compare the line with the edges of the picture, not with the sun."]
  - check: { type: reflect, text: "I can explain the difference between rotation and revolution and what each one causes, and describe the tilted axis." }
```

### Which cycle

### Spins in a year

### The axis

### In your own words

In your book: draw the Earth in two places on its orbit, six months apart, with the axis tilted the same way in both. Label rotation, revolution and the axis.

## Elaborate: what a person notices across a year

```step
stage: modify
tier: typical
insight: "Describing what an observer experiences links the two cycles to everyday evidence."
check:
  type: question
  q: "A student in Canberra records sunset time every week for a year. What pattern will they find?"
  options: ["Sunset gets later until early January, then earlier until mid-June, then later again: a yearly cycle", "Sunset is at the same time every day", "Sunset is latest in June and earliest in December", "Sunset changes randomly"]
  answer: 0
  feedback: [null, "Use the date slider: daylight hours change with the date.", "That's the Northern Hemisphere pattern. In Canberra the long summer evenings come in December and January.", "The pattern repeats every year."]
hint: ["Think about how the hours of daylight in Canberra change across the year, and what that does to when the sun sets.", "Move the Date slider through the year and watch the daylight hours on the board."]
```

## Elaborate: different places

```step
stage: modify
tier: wider
insight: "Comparing places at the same date shows the tilt matters differently at different latitudes."
try: { playground: board, starter: "boards.yml#places", height: 640 }
tasks:
  - check: { type: board, text: "Look at the same date in at least three places, including one in the Northern Hemisphere.", when: "p >= 3 and q = 2" }
  - check:
      type: question
      q: "On 22 December, where is the day longest: Darwin, Canberra, Hobart or Davis station (Antarctica)?"
      options: ["Davis station: the sun doesn't set at all", "Darwin", "Canberra", "They are all 12 hours"]
      answer: 0
      feedback: [null, "Darwin is closest to the equator, where day length changes least.", "Try Hobart and Davis station.", "Only on two days a year (the equinoxes) are they all close to 12 hours."]
    hint: ["Think about which of these places gets the most sunshine on that date, and what the tilt does to a place near the pole.", "Set the board to that date and switch between the places to compare their hours of daylight."]
```

### Three places

### Longest day

## Evaluate: look back

```step
stage: info
check: { type: reflect, text: "I compared my first answer about day and night with what I now know." }
```

Write one sentence: "At first I thought… Now I think… because…"

**Revision summary**

- **Rotation:** the Earth spins on its axis once a day: day and night.
- **Revolution:** the Earth goes round the sun once a year (about 365¼ days, so about 365 sunrises).
- The **axis is tilted 23.4°** and always points the same way in space, so each hemisphere leans towards the sun for half the year.
