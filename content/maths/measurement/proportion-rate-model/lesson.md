---
order: 34
unit: models9
node: AC9M9M05 n1
uses: [AC9M8N04 n1]
assumes: [AC9M8N04 n1]
connection: bushwalk-time
title: Set up a rate model
summary: "A rate is an amount per unit. To set up a model, say what each part of the situation adds to the answer, and match the units: kilometres at a speed, and climb at its own rate."
language: maths
voice: { name: af_heart, speed: 1.1 }
hook: "How long will the walk to the lookout take? The map gives the distance and the climb."
---
A bushwalking rule of thumb, Naismith's rule, says walkers go about 5 km/h on level ground, plus 1 hour for every 600 m of climb ([bushwalk.com navigation FAQ](https://faq.bushwalk.com/FAQ_Navigation.htm), checked 25 October 2026). The track to the lookout is 8 km with 450 m of climb (made up for the task). How long will it take? Have a guess, and we'll come back to it at the end.

<figure class="situation" role="img" aria-label="A walking track on a side-on map: 8 kilometres long, climbing 450 metres to a lookout."><svg viewBox="0 0 360 150" width="360" style="max-width:100%;height:auto" fill="none" stroke="currentColor" font-family="inherit" font-size="13"><path d="M20 120 H100 L260 50 H340" stroke-width="2.5"/><path d="M260 50 v70" stroke-width="1" stroke-dasharray="4 3"/><path d="M20 130 H340" stroke-width="1"/><text x="140" y="148" fill="currentColor" stroke="none">8 km</text><text x="268" y="92" fill="currentColor" stroke="none">450 m climb</text><text x="300" y="42" fill="currentColor" stroke="none">lookout</text></svg></figure>

## Predict: easy numbers first

```step
stage: predict
insight: "Choosing a time for 10 km with 600 m of climb shows whether students add the two parts or count the climb as distance."
check:
  type: predict
  q: "By Naismith's rule, how long does a walk of 10 km with 600 m of climb take?"
  options:
    - "3 hours"
    - "2 hours"
    - "2.1 hours"
    - "12 hours"
  actual: "3 hours. 10 km at 5 km/h is 2 hours, and 600 m of climb adds 1 hour more. 2.1 hours counts the climb as extra kilometres, which it isn't."
```

## Run: the two parts

```step
stage: run
insight: "The model has two rates added together: time on the flat is distance ÷ 5, and time for climbing is climb ÷ 600."
check: { type: number, q: "How many hours does 10 km take at 5 km/h?", answer: 2, explain: "10 ÷ 5 = 2 hours." }
```

## Investigate: build the model

```step
stage: investigate
insight: "Each part of the walk has its own rate and unit, and the total is their sum: time = distance ÷ 5 + climb ÷ 600."
tasks:
  - check:
      type: number
      q: "For the lookout walk, how many hours does the 8 km take at 5 km/h? (hours)"
      answer: 1.6
      tolerance: 0.001
      explain: "8 ÷ 5 = 1.6 hours."
    smaller:
      check: { type: "number", q: "What is $8 \\div 5$?", answer: 1.6, tolerance: 0.001, explain: "8 ÷ 5 = 1.6." }
  - check:
      type: number
      q: "How many hours does the 450 m of climb add? (hours, 2 decimal places)"
      answer: 0.75
      tolerance: 0.005
      explain: "450 ÷ 600 = 0.75 hours."
  - check:
      type: bug
      code: "working.txt#kai"
      text: "Kai works out the lookout walk's time. Click the line where his working goes wrong."
      answer: 3
      fault: logic
      misconception: climb-as-distance
      explain: "Line 3: the climb is metres of height, not kilometres of walking. It has its own rate: 600 m per hour."
```

### Two rates

```worked
\text{time} = \dfrac{\text{distance (km)}}{5} + \dfrac{\text{climb (m)}}{600} :: Naismith's rule: two parts, two units.
\dfrac{8}{5} = 1.6 :: Hours for the distance.
\dfrac{450}{600} = 0.75 :: Hours for the climb.
1.6 + 0.75 = 2.35 :: Total hours: about 2 hours 21 minutes.
```

### Add the parts

### Find the mistake

Read Kai's working. Which line treats the climb as distance?

## Modify: other walks

```step
stage: modify
insight: "Changing the distance or the climb reruns the same two parts, and the model also tells you which one matters more."
tasks:
  - hint: ["Distance ÷ 5.", "Climb ÷ 600."]
    check: { type: number, q: "A walk is 5$ km with 00$ m of climb. How many hours does the rule give?", answer: 3.5, tolerance: 0.01, explain: "15 ÷ 5 = 3 and 300 ÷ 600 = 0.5, so 3.5 hours." }
  - hint: ["No climb: only the distance part.", "20 ÷ 5."]
    check: { type: number, q: "A level walk is 0$ km. How many hours does the rule give?", answer: 4, explain: "20 ÷ 5 = 4 hours, with no climb to add." }
  - hint: ["Compare the two parts for a steep short walk.", "2 ÷ 5 and 900 ÷ 600."]
    check: { type: question, q: "A track is $ km long but climbs 00$ m. Which part of the time is bigger?", options: ["The climb: 1.5 hours against 0.4 hours", "The distance: it has a rate of 5", "They are equal", "Can't tell"], answer: 0, feedback: [null, "0.4 hours for the distance is less than 1.5 for the climb.", "1.5 and 0.4 aren't equal.", "You can work out both."], explain: "2 ÷ 5 = 0.4 hours, 900 ÷ 600 = 1.5 hours: for steep tracks the climb dominates." }
```

### A longer walk

### A level walk

### A steep track

## Practise: set up and use the model

```step
stage: practise
insight: "Using both parts of the rule with the right units."
tasks:
  - check:
      type: number
      q: "A walk is 12 km with no climb. How many hours? (hours)"
      answer: 2.4
      tolerance: 0.01
      explain: "12 ÷ 5 = 2.4."
  - check:
      type: number
      q: "A walk is 5 km with 1200 m of climb. How many hours?"
      answer: 3
      tolerance: 0.01
      explain: "5 ÷ 5 = 1 and 1200 ÷ 600 = 2, so 3 hours."
    smaller:
      check: { type: "number", q: "What is $1200 \\div 600$?", answer: 2, explain: "1200 ÷ 600 = 2." }
  - check:
      type: number
      q: "Review: a length is 40 cm and out by 1 cm. What is the percentage error? (%)"
      answer: 2.5
      tolerance: 0.01
      explain: "1 ÷ 40 × 100 = 2.5%."
```

### No climb

### Steep

### Review

## Make: the lookout walk

```step
stage: make
insight: "Returning to the lookout: build the model for the walk and say what the result means."
tasks:
  - hint: ["8 ÷ 5 and 450 ÷ 600.", "Add them."]
    check:
      type: reasoning
      paper: true
      q: "The lookout track is 8 km with 450 m of climb. By Naismith's rule how many hours does the walk to the lookout take? (2 decimal places. Numbers are made up for the task.)"
      steps:
        - ["distance: $8 \\div 5 = 1.6$", "hours on the flat"]
        - ["climb: $450 \\div 600 = 0.75$", "hours for the climb"]
        - ["$1.6 + 0.75 = 2.35$", "total hours"]
      answer: "2.35"
      answerLabel: "Time (hours)"
      tolerance: 0.01
      feedback:
        - ["1.6", "That's only the distance part. Add the climb."]
        - ["2.12", "That treats the climb as 0.6 km. It has its own rate."]
      criteria:
        - "I used 5 km/h for the distance."
        - "I used 600 m per hour for the climb."
        - "I added the two parts."
      explain: "1.6 + 0.75 = 2.35 hours, about 2 hours 21 minutes."
  - check:
      type: question
      q: "Is 2.35 hours a precise answer, or a rule-of-thumb estimate?"
      options: ["An estimate: a rule of thumb built for walkers on good tracks", "Exact", "A measurement", "Wrong"]
      answer: 0
      feedback: [null, "Rules of thumb are only approximate.", "It's a model's output, not something measured.", "It's a fair estimate, not wrong."]
      explain: "The rule says 'about 5 km/h'. The answer is a good first estimate, not a promise."
```

### The time

### How sure

The rule is from the [bushwalk.com navigation FAQ](https://faq.bushwalk.com/FAQ_Navigation.htm) (checked 25 October 2026). The track is made up for the task.

**Also used in**

- **Travel.** Journey time from a distance and a speed.
- **Cooking.** Cooking time for a roast is often rate times mass plus a fixed time.
- **Next lesson.** Using the model to plan when to leave.
