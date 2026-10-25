---
order: 5
unit: rules
node: AC9M7A04 n2
title: Describing a relationship
summary: "Describe how one measurement changes as the other increases, one section of the graph at a time: it increases, decreases or stays constant."
language: maths
voice: { name: af_heart, speed: 1.1 }
hook: "A graph tells a story about how two things change together. Telling that story in words, section by section, is how scientists and journalists use graphs."
connection: heart-rate-recovery   # data/connections/maths.yml
app:
  command: node "$REPO_ROOT/tools/serve.mjs" "$REPO_ROOT/dist/_playground-board" 8149
  url: http://127.0.0.1:8149/index.html
  readySelector: "#sl-cursor"
  layout: full
explainPicture: { ref: data.yml#pic, caption: "A bike ride. 0 to 2 hours: the distance from home increases. 2 to 3 hours: it stays constant (stopped). 3 to 5 hours: it decreases (riding home)." }
explainClip:
  query: { code: "@data.yml#explain", fresh: 1, id: explain }
  caption: "Describe one section at a time"
  say: "Describe the graph one section at a time."
  clip:
    - caption: { text: "0 to 2 h: distance from home increases.", say: "From zero to two hours, the distance from home increases." }
    - click: Move the cursor right
    - click: Move the cursor right
    - wait: 400
    - expect: { selector: "#gread", contains: "Distance from home = 60 km" }
    - caption: { text: "2 to 3 h: it stays constant. The cyclist has stopped.", say: "From two to three hours it stays constant: the cyclist has stopped." }
    - click: Move the cursor right
    - wait: 400
    - expect: { selector: "#gread", contains: "Distance from home = 60 km" }
    - caption: { text: "3 to 5 h: it decreases, back to 0.", say: "From three to five hours it decreases, back to zero." }
    - click: Move the cursor right
    - click: Move the cursor right
    - wait: 400
    - expect: { selector: "#gread", contains: "Distance from home = 0 km" }
    - wait: 1200
---
A graph does not just give values. It shows how one measurement **changes** as the other changes. Look at one section at a time, and ask: as the time goes on, does the other measurement **increase**, **decrease**, or stay **constant** (not change)? The data on these graphs are examples.

## Predict: which story?

```step
stage: predict
insight: "Committing to a story for a line that rises, flattens and falls exposes reading the graph as a picture of hills instead of as distance changing with time."
check:
  type: predict
  q: "A graph shows a cyclist's distance from home against time. The line goes up, then is flat, then goes down. Which story fits?"
  options: ["Rides away, stops for a rest, rides home", "Rides up a hill, along the flat, then down a hill", "Rides away, then faster, then slower", "Rides away, then home, then away again"]
  actual: "Rides away, stops for a rest, rides home. Up means the distance from home is increasing, flat means it is not changing (stopped), and down means it is decreasing (riding back). The graph shows distance, not the shape of the road."
```

<figure class="situation" role="img" aria-label="A graph of distance from home against time. The line rises, goes flat, then falls back to the start. What story does it tell is a question mark."><svg viewBox="0 0 360 200" width="360" style="max-width:100%;height:auto" fill="none" stroke="currentColor" font-family="inherit" font-size="14"><path d="M50 20 V160 H330"/><text x="190" y="190" text-anchor="middle" fill="currentColor" stroke="none">time</text><text x="14" y="95" text-anchor="middle" fill="currentColor" stroke="none" transform="rotate(-90 14 95)">distance from home</text><path d="M50 160 L130 50 L210 50 L310 160" stroke="#185FA5" stroke-width="3"/><text x="260" y="60" fill="currentColor" stroke="none">what story?</text></svg></figure>

What is measured up the side? What would the line do if the cyclist stopped?

## Run: follow the ride

```step
stage: run
insight: "Moving the cursor section by section shows what the distance does while the time goes on, and that a flat line still has time passing."
try: { playground: board, starter: "data.yml#run", height: 560 }
check: { type: board, text: "Move the cursor $R$ along the whole ride, to 4 hours. Was your prediction right?", when: "x(R) = 4" }
```

Move the cursor a step at a time. For each section, say what the distance from home does as time goes on.

## Investigate: describing sections

```step
stage: investigate
insight: "Describe each section by comparing its start and end: the measurement increases, decreases or is constant as time increases; a line going down does not mean going downhill."
tasks:
  - picture: { ref: data.yml#ride-plain, caption: "The bike ride: distance from home (km) against time (h)." }
    check:
      type: question
      q: "Between 2 and 3 hours, which sentence is true?"
      options: ["As time increases, the distance from home stays constant", "As time increases, the distance from home increases", "As time increases, the distance from home decreases"]
      answer: 0
      explain: "The line is flat from 2 to 3 hours: the distance is 60 km at both times, so it does not change. The cyclist has stopped."
  - picture: { ref: data.yml#ride-plain, caption: "The same ride." }
    check:
      type: question
      q: "What is the cyclist doing between 3 and 5 hours?"
      options: ["Riding back towards home", "Riding down a hill", "Riding away from home"]
      answer: 0
      explain: "The distance from home decreases from 60 km to 0 km: the cyclist is riding back towards home."
  - check:
      type: bug
      code: "working.txt#omar"
      text: "Omar describes the ride from 3 to 5 hours. Click the line where his reasoning goes wrong."
      answer: 3
      fault: logic
      misconception: graph-as-picture
      explain: "Line 3: the graph does not show hills. The line goes down because the distance from home is getting smaller: the cyclist is riding home."
```

### A rest

Here is how to describe a graph, one section at a time.

```worked
\text{0 to 2 h: } 0 \to 60 \text{ km} :: Take one section at a time and compare its start and end. The distance increases.
\text{2 to 3 h: } 60 \to 60 \text{ km} :: The distance does not change. It is constant.
\text{3 to 5 h: } 60 \to 0 \text{ km} :: The distance decreases.
\text{increases} \to \text{constant} \to \text{decreases} :: Put the sections in order. Say it: "As time increases, the distance from home increases, then stays constant, then decreases."
```

### Riding home

### Find the mistake

Read Omar's working one line at a time. What is the line really showing?

## Modify: other stories

```step
stage: modify
insight: "One change at a time: a story with a turning point, two graphs on one set of axes, and a measurement that decreases at a slowing rate."
try: { playground: board, starter: "data.yml#bath", height: 560 }
tasks:
  - starter: "data.yml#bath"
    hint: "The water stops rising when the line goes flat. When does it start to go down?"
    check: { type: board, text: "Water in a bath (L) against time (min). Move $R$ to the moment the water starts to go down.", when: "x(R) = 6", explain: "The water is level from 4 to 6 minutes and starts to go down after 6 minutes (the plug is pulled)." }
  - picture: { ref: data.yml#walkers-plain, caption: "Ali and Beth walk to school: distance (m) against time (min)." }
    check:
      type: question
      q: "Beth waits for 5 minutes, then walks. What does the graph say at 10 minutes?"
      options: ["Beth has walked further than Ali", "Ali has walked further than Beth", "They are at the same place"]
      answer: 0
      explain: "At 10 minutes Beth is at 1000 m and Ali is at 800 m. Beth waited, then walked faster, and passed Ali."
  - picture: { ref: data.yml#cooling-plain, caption: "A hot drink cooling: temperature (°C) against time (min)." }
    check:
      type: question
      q: "Which sentence describes the graph?"
      options: ["As time increases, the temperature decreases, quickly at first and then more slowly", "As time increases, the temperature decreases at the same rate", "As time increases, the temperature decreases and then increases"]
      answer: 0
      explain: "The line always goes down, so the temperature decreases. It drops 30 degrees in the first 10 minutes but only 3 degrees in the last 10: it slows down."
```

### The bath

Each task loads a new graph. Describe the sections before you answer.

### Two walkers

### A cooling drink

## Practise: describe and match

```step
stage: practise
insight: "Describing and matching on new graphs, with one reading question mixed in so students must decide whether a question asks for a value or a description; the review is reading a value from the last lesson."
tasks:
  - picture: { ref: data.yml#ride-plain, caption: "The bike ride." }
    check:
      type: question
      q: "Which sentence describes the ride from 0 to 2 hours?"
      options: ["As time increases, the distance from home increases", "As time increases, the distance from home stays constant", "The cyclist rides up a hill"]
      answer: 0
      explain: "The line goes up from 0 to 60 km: the distance from home increases."
  - picture: { ref: data.yml#tank-plain, caption: "Water in a tank (L) against time (min)." }
    check:
      type: question
      q: "Which story fits the graph?"
      options: ["The tank fills slowly, the water is left, then it fills faster", "The tank fills, then drains, then fills again", "The tank fills at the same rate the whole time"]
      answer: 0
      explain: "From 0 to 3 min it rises (30 L). From 3 to 6 min it is flat (nothing added). From 6 to 9 min it rises 60 L, faster than before."
  - picture: { ref: data.yml#cooling-plain, caption: "The cooling drink." }
    check:
      type: answer
      q: "Review: what is the temperature at 20 minutes, in °C?"
      answer: "45"
      feedback:
        - ["20", "That is the time. Read the temperature up the side."]
      explain: "At 20 min the line is at 45 °C: the point is (20, 45)."
  - picture: { ref: data.yml#bath-plain, caption: "Water in a bath (L) against time (min)." }
    check:
      type: question
      q: "Between 6 and 8 minutes, the amount of water..."
      options: ["increases", "decreases", "stays constant"]
      answer: 1
      explain: "The line goes down from 80 L to 40 L: the water decreases (the plug is pulled)."
```

### The ride

### A tank

### Review

### The bath again

## Make: draw a bath

```step
stage: make
insight: "Making a graph from a story reverses describing: students choose each value to fit the words, and must keep the flat part flat."
try: { playground: board, starter: "data.yml#make", height: 560 }
hint: ["The bath starts empty: what is the water at 0 minutes?", "A flat part means two points at the same height."]
check: { type: board, text: "Draw this story: a bath is empty at 0 minutes. It fills until 4 minutes, stays the same from 4 to 6 minutes, then empties and is empty again at 10 minutes.", when: "y(A) = 0 and y(B) > y(A) and y(C) > y(B) and y(D) = y(C) and y(E) < y(D) and y(E) > y(F) and y(F) = 0", explain: "For example 0, 40, 80, 80, 40, 0: it rises, stays level, then falls back to zero." }
```

Drag each point up or down. Then describe your graph in a sentence.

Stretch: draw a bath that fills quickly at first, then slowly.

## Make: heart rate after a run, on paper

```step
stage: make
insight: "Describing sections by comparing start and end, then noticing that a decrease can slow down, is the judgement a fitness coach makes from a heart rate trace."
hint: ["Compare the heart rate at the start and end of each section.", "For the drop in the first 5 minutes of recovery, subtract the heart rate at 20 minutes from the heart rate at 15."]
check:
  type: reasoning
  paper: true
  q: "A runner wears a heart rate monitor. Heart rate in beats per minute (bpm) at 0, 10, 15, 20 and 30 minutes was 70, 160, 160, 110 and 80. The runner stops at 15 minutes. On paper, describe each section, then find how many bpm the heart rate dropped in the first 5 minutes after stopping."
  steps:
    - ["0 to 10 min: as time increases, the heart rate increases, from 70 to 160 bpm", "compare the start and end of the section"]
    - ["10 to 15 min: the heart rate is constant at 160 bpm", "time passes but the value does not change"]
    - ["15 to 20 min: it decreases from 160 to 110, a drop of 50 bpm. 20 to 30 min: it decreases from 110 to 80, a drop of 30 bpm in twice the time", "recovery is fast at first, then slows"]
  picks:
    - step: 3
      q: "What does the recovery section show?"
      options:
        - "The heart rate falls quickly at first, then more slowly"
        - "The heart rate falls by the same amount every minute"
        - "The heart rate falls, then rises again"
      answer: 0
      feedback: [null, "50 bpm in the first 5 minutes but only 30 in the next 10: the fall is not steady.", "Every value after 15 minutes is lower than the one before."]
  answer: "50"
  tolerance: 0
  feedback:
    - ["110", "110 is the heart rate at 20 minutes. How far did it fall from 160?"]
    - ["30", "30 is the drop from 20 to 30 minutes. The question asks about the first 5 minutes after stopping."]
  criteria:
    - "I named each section as increases, constant or decreases."
    - "I used the heart rates at the start and end of each section."
    - "I took the later value from the earlier one to find the drop."
  explain: "160 - 110 = 50, so the heart rate dropped 50 bpm in the first 5 minutes after stopping. It then fell only 30 bpm in the next 10 minutes."
```

Do this one in your book, not on the screen. The heart rates are made up for the task, and a real trace has bumps, so describe the trend. Name each section, then work out the drop and choose the reason.

**Also used in**

- **Fitness and sport.** Coaches look at how fast a heart rate comes down, not only how high it went.
- **Health.** A resting heart rate that returns to normal sooner usually points to a fitter heart.
- **Science.** The same words (increases, constant, decreases) describe temperature, water level or speed against time.
