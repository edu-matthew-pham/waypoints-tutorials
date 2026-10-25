---
order: 2
node: AC9S7U03 n4
woven: [AC9S7H02, AC9S7I06]
assumes: [AC9S7U03 n3]   # seasons needs only spin, orbit and tilt (n1); it comes straight after them, before phases and eclipses, on purpose
unit: earth
title: Why is summer hot?
summary: "Seasons are caused by the Earth's tilted axis, not its distance from the sun. Leaning towards the sun gives a higher noon sun (concentrated light) and longer days: summer. The two hemispheres have opposite seasons."
language: science
voice: { name: af_heart, speed: 1.1 }
app:
  command: node "$REPO_ROOT/tools/serve.mjs" "$REPO_ROOT/dist/_playground-board" 8227
  url: http://127.0.0.1:8227/index.html
  readySelector: "#gpanel"
  layout: full
explainPicture: { ref: boards.yml#explain, caption: "Earth's orbit from above, its axis always leaning the same way; from the side, Canberra tilted towards the sun in December." }
explainClip:
  query: { code: "@boards.yml#explain", fresh: 1, id: explain }
  caption: "Why summer is hot"
  say: "Seasons come from the Earth's tilt, not its distance from the sun."
  clip:
    - caption: { text: "December: Canberra leans towards the sun. Long days, high noon sun.", say: "In December, Canberra leans towards the sun: long days and a high noon sun." }
    - wait: 800
    - click: { selector: "#skyd" }
    - caption: { text: "July: Canberra leans away. Short days, low sun: winter.", say: "In July, Canberra leans away: short days, a low sun, winter." }
    - wait: 1200
    - caption: { text: "Earth is closest to the sun in January, so distance isn't the cause.", say: "Earth is closest to the sun in January, so distance isn't the cause." }
    - wait: 600
hook: "On 4 January the Earth is at its closest to the sun all year, five million kilometres closer than in July. That day it's summer in Canberra and winter in London."
---
You already know how the Earth spins and how it travels round the sun, and now you can use both to work out why Canberra swings between hot and cold across the year.

## Engage: why is it hotter?

```step
stage: predict
insight: "The distance misconception is persistent; students who hold it will choose 'closer', and the board's distance readout contradicts it."
check:
  type: predict
  q: "Why is it hotter in Canberra in December than in June?"
  options: ["The Earth is closer to the sun in December", "The Earth's tilt makes the Southern Hemisphere lean towards the sun in December", "The sun gives out more heat in December", "There are fewer clouds in December"]
  actual: "The tilt. In December the Southern Hemisphere leans towards the sun: the noon sun is high and the days are long. The Earth is in fact closest to the sun in early January, but that changes the sunlight by only about 7%."
```

## Explore: December and June

```step
stage: run
insight: "Reading daylight, noon sun height and distance for both solstices puts the evidence against distance in front of the student."
try: { playground: board, starter: "boards.yml#canberra", height: 640 }
check: { type: board, text: "Compare Canberra in late December and late June (daylight, noon sun and distance).", when: "g >= 4" }
```

Move the **Date** slider between December and June. Note the daylight, how high the sun is at noon, and the distance from the sun each time.

## Explain: tilt, not distance

```step
stage: investigate
insight: "Linking tilt to sun angle and day length, and confronting distance with evidence, is the hinge."
tasks:
  - check:
      type: question
      q: "In late December, when it's summer in Canberra, how far is the Earth from the sun compared with late June?"
      options: ["About 5 million km closer", "About 5 million km farther", "The same distance", "Twice as close"]
      answer: 0
      feedback: [null, "Check the distance on the board, which shows about 147 million km in December and 152 million km in June.", "The orbit is nearly a circle, but not quite, so the distance does change a little.", "It's nowhere near that much, because the orbit is almost a circle."]
    hint: ["What does the board say the distance is in late December, and what does it say in late June?", "The line under the board gives the distance in millions of kilometres, so you can compare the two numbers."]
  - check:
      type: question
      q: "If distance caused seasons, what would be true?"
      options: ["Both hemispheres would have summer at the same time", "Australia would have summer in December", "Seasons would be opposite in the two hemispheres", "Nothing would change"]
      answer: 0
      feedback: [null, "Australia does have summer in December, but London would too if distance were the cause.", "That's what really happens, and distance can't explain it.", "A change in distance would affect the whole Earth at once."]
    hint: "Think about what a change in the Earth's distance from the sun would do to everyone on Earth at the same time, and compare that with what London and Canberra really do in December."
  - check:
      type: sort
      q: "Which go with Canberra's summer, and which with its winter?"
      options: ["Summer", "Winter"]
      items:
        - ["Southern Hemisphere leans towards the sun", "Summer"]
        - ["Noon sun high in the sky", "Summer"]
        - ["About 9½ hours of daylight", "Winter"]
        - ["Sunlight hits the ground at a low angle, spread over a bigger area", "Winter"]
        - ["About 14½ hours of daylight", "Summer"]
    hint: ["For each one, ask whether it's about how long the sun is up, how high it climbs, or how the Earth is leaning, and whether that makes Canberra warmer or cooler.", "If you're unsure about one, set the Date slider to late December and then late June and see which it matches."]
  - check: { type: reflect, text: "I can explain seasons using tilt, sun height and day length, and explain why distance can't be the cause." }
```

### Distance

### A test of distance

### Summer and winter

### In your own words

In your book: draw a torch shining straight down and at a slant onto paper. Use it to explain why a high sun heats the ground more.

## Mix it up

```step
stage: practise
insight: "The tilt that causes the seasons only works because the axis keeps pointing the same way as the Earth goes round the sun."
check:
  type: question
  q: "Looking back at the Earth's spin and orbit: as the Earth goes round the sun, what does its tilted axis do?"
  options: ["It keeps pointing the same way in space", "It always leans towards the sun", "It flips over halfway through the year", "It stands straight up"]
  answer: 0
  feedback: [null, "Because the axis keeps pointing the same way, the north end leans towards the sun for half the year and away for the other half, so it can't always lean towards the sun.", "The axis never flips over, so that doesn't happen.", "It's tilted about 23.4°, so it isn't straight up."]
  explain: "The axis keeps pointing the same way in space, and that's why each hemisphere leans towards the sun for half the year."
```

## Practise: the other hemisphere

```step
stage: practise
insight: "Seeing opposite seasons on the same date in London and Canberra is the strongest evidence for the tilt explanation."
try: { playground: board, starter: "boards.yml#hemispheres", height: 640 }
tasks:
  - check: { type: board, text: "Pick one date and compare London with an Australian city.", when: "q = 2" }
  - check:
      type: question
      q: "On 22 June, London has about 16½ hours of daylight and Canberra about 9½. Why?"
      options: ["The Northern Hemisphere leans towards the sun in June, and the Southern Hemisphere leans away", "London is closer to the sun", "London is nearer the equator", "The sun is bigger in London"]
      answer: 0
      feedback: [null, "Both cities are the same distance from the sun, so that can't explain it.", "London is actually farther from the equator than Canberra is.", "It's the same sun shining on both cities."]
    hint: ["Both cities are the same distance from the sun on 22 June, so what could be different about how each one is facing it?", "Look at the side view on the board for each hemisphere, and at the hours of daylight for each city."]
```

### Same date

### Why opposite

## Elaborate: no tilt

```step
stage: modify
tier: wider
insight: "Removing the tilt in the model and watching the seasons disappear shows tilt is the cause, not just a correlation."
try: { playground: board, starter: "boards.yml#tilt", height: 680 }
tasks:
  - check: { type: board, text: "Set the tilt to 0° and look at three different months.", when: "t = 0 and m >= 3" }
  - check:
      type: question
      q: "With no tilt, what happens to Canberra's seasons?"
      options: ["They disappear: about 12 hours of daylight and the same noon sun all year", "They get stronger", "They swap", "Nothing changes"]
      answer: 0
      feedback: [null, "Check the daylight at three different dates.", "Try a bigger tilt, because that's what makes the seasons stronger.", "Look again, because the daylight stops changing through the year."]
    hint: ["With the tilt gone, what would make one month different from another?", "Set the tilt to 0° and slide the date through the year, watching the daylight hours and the noon sun in the line under the board."]
  - check:
      type: question
      q: "In Kakadu, Bininj people recognise six seasons, marked by changes in rain, wind, plants and animals, rather than four. Why can both systems be useful?"
      options: ["The tilt model explains why the year changes; a six-season calendar describes the changes people actually observe in that place", "Only the four-season model is science", "The six seasons are caused by a different tilt", "Kakadu has no seasons"]
      answer: 0
      feedback: [null, "Careful observation of local signs over many generations is knowledge too, so it isn't worth less.", "It's the same Earth with the same tilt, so the tilt doesn't change from place to place.", "Near the tropics the big change is between wet and dry, and a four-season calendar doesn't show that well."]
```

### No tilt

### Seasons without tilt

### Six seasons

## Evaluate: look back

```step
stage: info
check: { type: reflect, text: "I compared my first answer about summer with what I now know." }
```

Write one sentence: "At first I thought… Now I think… because…"

**Revision summary**

- Seasons are caused by the Earth's **tilt**, not its distance from the sun (we are closest in January).
- Leaning **towards** the sun: the noon sun is **higher** (light concentrated on a smaller area) and days are **longer**: summer.
- The two hemispheres have **opposite** seasons. Near the equator the changes are small.
