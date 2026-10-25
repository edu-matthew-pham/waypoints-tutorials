---
order: 35
unit: models9
node: AC9M9M05 n2
uses: [AC9M9M05 n1]
assumes: [AC9M9M05 n1]
connection: bushwalk-time
title: Solve the rate model
summary: "Use the model backwards and forwards: from the walk to the time, and from the time you have to the distance you can cover. Say what the answer means for the plan."
language: maths
voice: { name: af_heart, speed: 1.1 }
hook: "The walk takes about 3 hours by the rule. When do we need to leave to be back before dark?"
---
Naismith's rule says about 5 km/h on level ground plus 1 hour for every 600 m of climb ([bushwalk.com navigation FAQ](https://faq.bushwalk.com/FAQ_Navigation.htm), checked 25 October 2026). The lookout track is 8 km with 450 m of climb, which takes 2.35 hours to walk up. The way back has no climb to count. When should the group leave so they are back by 4:30 pm? Have a guess, and we'll come back to it at the end. (The times are made up for the task.)

<figure class="situation" role="img" aria-label="A timeline from morning to 4:30 pm showing the walk up, a lunch stop and the walk back, with the start time marked with a question mark."><svg viewBox="0 0 360 100" width="360" style="max-width:100%;height:auto" fill="none" stroke="currentColor" font-family="inherit" font-size="13"><path d="M20 55 H340" stroke-width="1.5"/><rect x="40" y="38" width="110" height="34" stroke-width="1.6" fill="#D85A30" fill-opacity="0.25"/><rect x="150" y="38" width="30" height="34" stroke-width="1.6" fill="#888780" fill-opacity="0.25"/><rect x="180" y="38" width="100" height="34" stroke-width="1.6" fill="#378ADD" fill-opacity="0.25"/><text x="40" y="30" fill="currentColor" stroke="none">start ?</text><text x="70" y="60" fill="currentColor" stroke="none">up</text><text x="152" y="60" fill="currentColor" stroke="none">stop</text><text x="215" y="60" fill="currentColor" stroke="none">back</text><text x="285" y="30" fill="currentColor" stroke="none">4:30 pm</text></svg></figure>

## Predict: the way back

```step
stage: predict
insight: "Choosing the return time shows whether students double the whole walk, including the climb, or only the part that repeats."
check:
  type: predict
  q: "Going up the lookout track (8 km, 450 m climb) takes 2.35 hours by the rule. About how long does walking back down take, with no climb to count?"
  options:
    - "1.6 hours"
    - "2.35 hours"
    - "4.7 hours"
    - "0.75 hours"
  actual: "1.6 hours. The way back is 8 km on a rule of 5 km/h, with no climb to add: 8 ÷ 5 = 1.6 hours. Doubling the whole walk would give 4.7 hours, counting the climb twice."
```

## Run: time from the model

```step
stage: run
insight: "The same model gives the return time: only the distance part is left."
check: { type: number, q: "How long does the walk back take by the rule? (hours)", answer: 1.6, tolerance: 0.001, explain: "8 ÷ 5 = 1.6 hours." }
```

## Investigate: put the times together

```step
stage: investigate
insight: "The whole outing is the walk up, any stop, and the walk back. Work back from the finish to find the start."
tasks:
  - check:
      type: number
      q: "Up takes $2.35$ hours and back takes $1.6$ hours. How long is the walk up and back? (hours)"
      answer: 3.95
      tolerance: 0.01
      explain: "2.35 + 1.6 = 3.95 hours."
    smaller:
      check: { type: "number", q: "What is $2.35 + 1.6$?", answer: 3.95, tolerance: 0.01, explain: "2.35 + 1.6 = 3.95." }
  - check:
      type: number
      q: "The group stops for $0.5$ hours at the lookout. How long is the whole outing? (hours)"
      answer: 4.45
      tolerance: 0.01
      explain: "3.95 + 0.5 = 4.45 hours."
  - check:
      type: bug
      code: "working.txt#ben"
      text: "Ben finds the time up and back. Click the line where his working goes wrong."
      answer: 3
      fault: logic
      misconception: round-trip-double
      explain: "Line 3: the way back has no climb to count, so the climb is added once, not twice."
```

### Up and back

```worked
\text{up} = 8 \div 5 + 450 \div 600 = 2.35 :: Hours up.
\text{back} = 8 \div 5 = 1.6 :: Hours back: no climb.
\text{up and back} = 2.35 + 1.6 = 3.95 :: Walking only.
3.95 + 0.5 = 4.45 :: Add a 30 minute stop.
\text{start} = 4{:}30 - 4{:}27 = 12{:}03 :: Work back from the finish.
```

### Both ways

### Find the mistake

Read Ben's working. Which line counts the climb twice?

## Modify: change the plan

```step
stage: modify
insight: "Using the model backwards: from the time you have to the distance you can cover."
tasks:
  - hint: ["Take the climb's time away from 3 hours first.", "Then multiply by 5 km/h."]
    check: { type: number, q: "A group has $3$ hours to walk up a track with $600$ m of climb. How far along the track can they go, in km, by the rule?", answer: 10, tolerance: 0.01, explain: "The climb takes 1 hour, leaving 2 hours at 5 km/h: 10 km." }
  - hint: ["Convert 0.45 hours to minutes: × 60.", "4.45 hours is 4 hours and some minutes."]
    check: { type: number, q: "The outing takes $4.45$ hours. How many minutes is the $0.45$ of an hour?", answer: 27, tolerance: 0.5, explain: "0.45 × 60 = 27 minutes, so 4 hours 27 minutes." }
  - hint: ["Count back 4 hours 27 minutes from 4:30 pm.", "4:30 − 4:00 = 12:30, then take another 27 minutes."]
    check: { type: question, q: "The group must be back by 4:30 pm and the outing takes 4 hours 27 minutes. When must they leave by the rule?", options: ["About 12:03 pm", "About 8:57 pm", "About 4:27 pm", "About 9:03 am"], answer: 0, feedback: [null, "That adds instead of subtracting.", "That is the length, not the start time.", "That is too early."], explain: "4:30 pm minus 4 hours 27 minutes is 12:03 pm: leave by midday to be safe." }
```

### How far

### Hours to minutes

### When to leave

## Practise: use the model

```step
stage: practise
insight: "Solving the model for time and distance."
tasks:
  - check:
      type: number
      q: "A track is 10 km with 300 m of climb. How many hours up by the rule?"
      answer: 2.5
      tolerance: 0.01
      explain: "10 ÷ 5 + 300 ÷ 600 = 2 + 0.5 = 2.5."
  - check:
      type: number
      q: "How many hours is the way back, with no climb? (hours)"
      answer: 2
      tolerance: 0.01
      explain: "10 ÷ 5 = 2."
    smaller:
      check: { type: "number", q: "What is $10 \\div 5$?", answer: 2, explain: "10 ÷ 5 = 2." }
  - check:
      type: number
      q: "Review: a walk is 5 km with 600 m of climb. How many hours up?"
      answer: 2
      tolerance: 0.01
      explain: "5 ÷ 5 + 600 ÷ 600 = 2."
```

### Up

### Back

### Review

## Make: when to leave

```step
stage: make
insight: "Returning to the lookout: put the model, the stop and the finish time together, and say what it means."
tasks:
  - hint: ["Up 2.35, back 1.6, stop 0.5.", "Total, then subtract from 4:30 pm."]
    check:
      type: reasoning
      paper: true
      q: "Up takes 2.35 hours and back takes 1.6 hours by the rule, with a 0.5 hour stop at the top. How many hours does the whole outing take? (made up for the task)"
      steps:
        - ["$2.35 + 1.6 = 3.95$", "walking"]
        - ["$3.95 + 0.5 = 4.45$", "add the stop"]
        - ["4.45 hours is about 4 hours 27 minutes", "convert 0.45 of an hour"]
      answer: "4.45"
      answerLabel: "Whole outing (hours)"
      tolerance: 0.01
      feedback:
        - ["3.95", "That is the walking only. Add the stop."]
        - ["4.7", "That counts the climb twice."]
      criteria:
        - "I used the climb once."
        - "I added the stop."
        - "I gave the unit."
      explain: "4.45 hours, so to be back at 4:30 pm they should leave by about 12:03 pm."
  - check:
      type: question
      q: "Should the group plan to leave at 12:03 pm exactly?"
      options: ["No: the rule is an estimate, so leave earlier to allow for a slower pace", "Yes: the rule is exact", "Yes: it is always right", "No: they should leave later"]
      answer: 0
      feedback: [null, "It's an estimate.", "A rule of thumb isn't a guarantee.", "Later makes it worse."]
      explain: "The rule says 'about'. Adding extra time keeps the group safe."
```

### Total time

### Leave when

**Also used in**

- **Travel and events.** Working back from an arrival time to when to set off.
- **Cooking.** Working back from serving time to when to start.
- **Next lesson.** Judging how much to trust the model.
