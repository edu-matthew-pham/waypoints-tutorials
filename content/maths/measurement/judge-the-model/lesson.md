---
order: 36
unit: models9
node: AC9M9M05 n3
uses: [AC9M9M05 n2]
assumes: [AC9M9M05 n2]
connection: bushwalk-time
title: Judge the model
summary: "A model is only as good as what it assumes. Say who and what it was built for, test it against a different case, and report the answer with its limits."
language: maths
voice: { name: af_heart, speed: 1.1 }
hook: "The rule says 2.35 hours. A Year 9 group with full packs: more or less?"
---
Naismith's rule was made for fit walkers on good tracks, carrying a light load ([bushwalk.com navigation FAQ](https://faq.bushwalk.com/FAQ_Navigation.htm), checked 25 October 2026). A Year 9 group with full packs is walking the lookout track. Should they trust the rule's 2.35 hours? Have a guess, and we'll come back to it at the end. (The group and the slower speed are made up for the task.)

<figure class="situation" role="img" aria-label="A group of students with large backpacks walking up a track. A label reads rule says 2.35 hours."><svg viewBox="0 0 360 140" width="360" style="max-width:100%;height:auto" fill="none" stroke="currentColor" font-family="inherit" font-size="13"><path d="M20 120 H100 L260 50 H340" stroke-width="2.5"/><circle cx="150" cy="86" r="5" stroke-width="2"/><circle cx="170" cy="78" r="5" stroke-width="2"/><circle cx="190" cy="70" r="5" stroke-width="2"/><rect x="144" y="90" width="12" height="14" stroke-width="1.4" transform="translate(-4,-6)"/><text x="30" y="30" fill="currentColor" stroke="none">rule says 2.35 hours</text><text x="30" y="50" fill="currentColor" stroke="none">for a fit walker</text></svg></figure>

## Predict: more or less

```step
stage: predict
insight: "Choosing whether the group will be faster or slower shows whether students ask who the model was built for."
check:
  type: predict
  q: "The rule gives 2.35 hours for the lookout track. A group of Year 9 students with full packs walks it. Will it take more or less than 2.35 hours?"
  options:
    - "More: they carry more and walk slower"
    - "Less: they are young"
    - "The same: the rule is exact"
    - "Can't say anything"
  actual: "More. Fit walkers on a good track carrying light loads set the rule's pace. A group with full packs is likely to be slower, so the rule would under-estimate."
```

## Run: change the rate

```step
stage: run
insight: "Changing one rate in the model shows how much the answer depends on an assumption."
check: { type: number, q: "Suppose the group walks at $4$ km/h on the flat. How many hours does the 8 km take? (the climb still adds 0.75)", answer: 2, explain: "8 ÷ 4 = 2 hours for the distance." }
```

## Investigate: test the assumption

```step
stage: investigate
insight: "Changing the walking pace from 5 to 4 km/h shows how much a model depends on one assumption, and a report should say so."
tasks:
  - check:
      type: number
      q: "At $4$ km/h the distance takes $2$ hours and the climb adds $0.75$ hours. What is the total? (hours)"
      answer: 2.75
      tolerance: 0.01
      explain: "2 + 0.75 = 2.75 hours."
    smaller:
      check: { type: "number", q: "What is $2 + 0.75$?", answer: 2.75, tolerance: 0.01, explain: "2 + 0.75 = 2.75." }
  - check:
      type: number
      q: "How many hours longer is that than the rule's $2.35$? (hours)"
      answer: 0.4
      tolerance: 0.01
      explain: "2.75 − 2.35 = 0.4 hours, about 24 minutes."
  - check:
      type: bug
      code: "working.txt#cam"
      text: "Cam reports the walk's time to the teacher. Click the line where his report goes wrong."
      answer: 3
      fault: logic
      misconception: model-outside-limits
      explain: "Line 3: the rule was built for fit walkers on good tracks. Cam reports it as the group's time without saying so."
```

### Different pace

```worked
\text{rule: } 8 \div 5 + 450 \div 600 = 2.35 :: Fit walkers, good track.
\text{group: } 8 \div 4 + 450 \div 600 = 2.75 :: Slower pace for full packs.
2.75 - 2.35 = 0.4 :: 24 minutes longer.
\text{report: about 2.4 to 2.8 hours, depending on pace} :: Give a range and the reason.
```

### The difference

### Find the mistake

Read Cam's report. Which line hides what the model assumes?

## Modify: test it elsewhere

```step
stage: modify
insight: "Checking the model against a different case shows where it is least reliable."
tasks:
  - hint: ["Try both rates.", "Compare 8 ÷ 5 with 8 ÷ 4."]
    check: { type: number, q: "How many minutes longer is the 8 km distance at $4$ km/h than at $5$ km/h?", answer: 24, tolerance: 0.5, explain: "2 − 1.6 = 0.4 hours = 24 minutes." }
  - hint: ["A very steep, rough track.", "The rule only mentions distance and climb."]
    check: { type: question, q: "Which case is the rule LEAST likely to fit?", options: ["A rough track in hot weather with heavy packs", "A flat smooth path", "A short easy loop", "A paved road"], answer: 0, feedback: [null, "A smooth path is close to what the rule was built for.", "Easy walks fit the rule.", "A paved road is the easiest case."], explain: "The rule has nothing for rough ground, heat or load, so those cases are where it can be wrong." }
  - hint: ["The park's own guide time is real data.", "Compare the model with it."]
    check: { type: question, q: "The park's sign says the lookout walk takes 3 hours up. The rule says 2.35 hours. What should you trust more for planning?", options: ["The sign, and treat the rule as a check", "The rule, because it is mathematics", "Neither", "Whichever is shorter"], answer: 0, feedback: [null, "A model gives an estimate, not the truth.", "The sign comes from people who walked it.", "Shorter is risky for planning."], explain: "Real times from the track beat a rule of thumb. Use the model as a check and a way to understand." }
```

### Minutes longer

### Where it fails

### The sign

## Practise: report the answer

```step
stage: practise
insight: "Giving an answer with the model's limits."
tasks:
  - check:
      type: number
      q: "At 4 km/h on the flat, a 12 km walk with no climb takes how many hours?"
      answer: 3
      explain: "12 ÷ 4 = 3."
  - check:
      type: question
      q: "Which is the best report for a trip time?"
      options: ["About 2.4 to 2.8 hours: the rule says 2.35 for fit walkers, and a group with packs is slower", "Exactly 2.35 hours", "Probably less", "No idea"]
      answer: 0
      feedback: [null, "No model gives an exact time.", "The reasons point to more.", "A model helps even if it's imperfect."]
      explain: "A good report gives a range and says what it depends on."
    smaller:
      check: { type: "question", q: "Is 'exactly 2.35 hours' a safe claim for a group with packs?", options: ["No: the rule was built for fit walkers with light loads", "Yes", "Only on flat tracks", "Only in summer"], answer: 0, explain: "The rule has no pack weight in it." }
  - check:
      type: number
      q: "Review: 8 km at 5 km/h plus 450 m of climb. How many hours?"
      answer: 2.35
      tolerance: 0.01
      explain: "1.6 + 0.75 = 2.35."
```

### Another pace

### The report

### Review

## Make: report to the teacher

```step
stage: make
insight: "Returning to the lookout: write the answer the way a planner would, with the number, the range and the reason."
tasks:
  - hint: ["Use 4 km/h for the group.", "2 + 0.75."]
    check:
      type: reasoning
      paper: true
      q: "The group walks at 4 km/h on the flat. Use the model with the climb at 600 m per hour: how many hours does the walk up take? (made up for the task)"
      steps:
        - ["distance: $8 \\div 4 = 2$", "hours on the flat at the group's pace"]
        - ["climb: $450 \\div 600 = 0.75$", "hours for the climb"]
        - ["$2 + 0.75 = 2.75$", "total hours"]
      answer: "2.75"
      answerLabel: "Time (hours)"
      tolerance: 0.01
      feedback:
        - ["2.35", "That uses 5 km/h. Use the group's 4 km/h."]
        - ["2", "That's only the distance. Add the climb."]
      criteria:
        - "I used the group's pace."
        - "I added the climb."
        - "I said how it differs from the rule."
      explain: "2 + 0.75 = 2.75 hours, 24 minutes more than the rule's 2.35."
  - check:
      type: question
      q: "Which sentence is the better report?"
      options: ["The walk up should take about 2.75 hours for our group (the rule says 2.35 for fit walkers), so plan for about 3 hours.", "The walk takes 2.35 hours.", "The walk is long.", "The rule is wrong."]
      answer: 0
      feedback: [null, "It hides who the rule is for.", "It gives no number.", "The rule isn't wrong, it's used outside what it was built for."]
      explain: "A good report gives the answer, the assumption and a margin."
```

### The answer

### The report

**Also used in**

- **Planning and safety.** Every forecast and estimate needs its limits stated.
- **Science.** Models are tested against real data and revised.
- **Next year.** Models of change in Year 10: which model fits best.
