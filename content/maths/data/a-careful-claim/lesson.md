---
order: 59
unit: twoway10
node: AC9M10ST04 n3
uses: ["AC9M10ST04 n2", "AC9M10ST03 n3"]
connection: survey-two-way
title: "A careful claim"
summary: "A two-way table can show that two things go together. Say what it shows with the group named, and keep 'causes' for when you have more than a table."
language: maths
voice: { name: af_heart, speed: 1.1 }
hook: "In the survey, 75% of riders play sport and 40% of bus or car students do. Can the school put up a poster saying 'riding makes you sporty'?"
---
Back to the school survey (made up): 200 students, how they get to school and whether they play sport. In the last lesson you turned the counts into row percentages. Now the question is what you are allowed to **say** about them.

## Predict: the poster

```step
stage: predict
insight: "Choosing the headline a table supports shows whether students let a link slide into a cause."
check:
  type: predict
  q: "The table shows 75% of riders play sport, against 55% of walkers and 40% of bus or car students. Which headline does the table support?"
  options:
    - "Riding to school makes students play sport"
    - "Students who ride are more likely to play sport"
    - "Playing sport makes students ride to school"
    - "How students travel has nothing to do with sport"
  actual: "Students who ride are more likely to play sport. That is what the percentages show. They don't say riding is the reason, or that sport is the reason students ride."
```

<figure class="situation" role="img" aria-label="The same table as before: ride 30 play sport and 10 do not, walk 33 and 27, bus or car 40 and 60 (made up). Beside it a poster reads: Ride to school and play sport, with a question mark."><svg viewBox="0 0 600 170" width="600" style="max-width:100%;height:auto" font-family="inherit"><g fill="none" stroke="currentColor"><line x1="20" y1="20" x2="20" y2="148"/><line x1="140" y1="20" x2="140" y2="148"/><line x1="230" y1="20" x2="230" y2="148"/><line x1="320" y1="20" x2="320" y2="148"/><line x1="410" y1="20" x2="410" y2="148"/><line x1="20" y1="20" x2="410" y2="20"/><line x1="20" y1="52" x2="410" y2="52"/><line x1="20" y1="84" x2="410" y2="84"/><line x1="20" y1="116" x2="410" y2="116"/><line x1="20" y1="148" x2="410" y2="148"/></g><g fill="currentColor" stroke="none" font-size="13" text-anchor="middle"><text x="185.0" y="41" font-weight="bold">Plays sport</text><text x="275.0" y="41" font-weight="bold">Does not</text><text x="365.0" y="41" font-weight="bold">Total</text><text x="80.0" y="73" font-weight="bold">Ride</text><text x="185.0" y="73">30</text><text x="275.0" y="73">10</text><text x="365.0" y="73">40</text><text x="80.0" y="105" font-weight="bold">Walk</text><text x="185.0" y="105">33</text><text x="275.0" y="105">27</text><text x="365.0" y="105">60</text><text x="80.0" y="137" font-weight="bold">Bus or car</text><text x="185.0" y="137">40</text><text x="275.0" y="137">60</text><text x="365.0" y="137">100</text></g><g fill="currentColor" stroke="none"><text x="430" y="104" font-size="13">Poster: ride to</text><text x="430" y="122" font-size="13">play sport?</text><text x="430" y="150" font-size="24">?</text></g></svg></figure>

Make a guess before you check.

## Run: how big is the difference?

```step
stage: run
insight: "A claim starts with a number: how much higher one group's percentage is than another's, in percentage points."
check:
  type: number
  q: "75% of riders play sport and 40% of bus or car students do. By how many percentage points is the riders' percentage higher?"
  answer: 35
  tolerance: 0
  feedback:
    - [1.875, "That is how many times as likely, 75 ÷ 40. This question asks for the difference."]
  explain: "75 − 40 = 35 percentage points."
```

A percentage point is the gap between two percentages, so 75% against 40% is 35 percentage points apart.

## Investigate: what the table can and can't say

```step
stage: investigate
insight: "A table gives a link between two groups. It leaves cause open, so the careful claim names the group, gives the percentages and stops there."
tasks:
  - hint: ["Divide the riders' percentage by the other.", "75 ÷ 40."]
    check:
      type: number
      q: "How many times as likely are riders to play sport as bus or car students? (2 decimal places)"
      answer: 1.88
      tolerance: 0.01
      feedback:
        - [35, "That is the difference in percentage points. 'How many times as likely' divides one percentage by the other."]
      explain: "75 ÷ 40 = 1.875, about 1.88. Riders are nearly twice as likely to play sport."
  - check:
      type: bug
      code: "working.txt#ben"
      text: "Ben writes the school's report. Click the line where his reasoning goes further than the table."
      answer: 3
      fault: logic
      misconception: table-shows-cause
      explain: "Line 3: the table shows that riders are more likely to play sport, which is line 2. It does not show that riding is the reason. Something else, like how close students live to the school, could be behind both."
  - check:
      type: question
      q: "Which is a possible third thing that could sit behind both riding to school and playing sport?"
      options: ["Living close to school, so riding is easy and there is time and a nearby field", "Playing sport makes the bike lighter", "Having a bike is always the cause of playing sport", "Nothing: a link in a table has no other explanation"]
      answer: 0
      feedback: [null, "That doesn't make sense as a reason.", "That assumes the cause, which the table can't show.", "A link always leaves other explanations open: a third thing, the other direction, or chance."]
      explain: "Students who live close can ride, and may also have time and a place to play. That would give the link without riding causing anything."
  - check:
      type: question
      q: "Which sentence is the most careful claim from the table?"
      options: ["In this survey, students who ride were more likely to play sport (75%) than students who come by bus or car (40%)", "Riding to school makes students play sport", "Every student who rides plays sport", "Bus and car students don't like sport"]
      answer: 0
      feedback: [null, "The table shows a link. It doesn't show that riding makes students play sport.", "Only 30 of the 40 riders play sport, so not every rider does.", "The table says 40% of them play sport. It doesn't say what they like."]
      explain: "It names the group ('students who ride'), gives the percentages, says 'in this survey' and says 'more likely', which is what the table shows."
```

### Writing it carefully

Here is how to build the sentence.

```worked
\text{Name the groups} :: Students who ride, and students who come by bus or car.
75\% \text{ against } 40\% :: Give both percentages, each of its own group.
\text{Say 'more likely', not 'because'} :: The table shows who plays sport more often, not why.
\text{Say where it comes from} :: 'In this survey' keeps the claim to the 200 students asked.
```

### Find the step too far

Read Ben's report. Which line goes further than the table does?

### A third thing

### The careful sentence

## Modify: how far can you go?

```step
stage: modify
insight: "Small groups, a narrow sample and a fair test each change how strong a claim can be."
tasks:
  - check:
      type: question
      q: "Edge case: in a new survey (made up) only 5 students ride, and 4 of them play sport (80%). How should the school report that?"
      options: ["With care: 5 students is a very small group, so one more student would change the percentage a lot", "As a strong result: 80% is high", "As proof that riding causes sport", "Not at all: percentages can't be used on small groups"]
      answer: 0
      feedback: [null, "The percentage is high, but it rests on 5 students.", "A link in a table doesn't prove a cause, and 5 students is too few.", "You can report it, with a note about how few students it rests on."]
      explain: "A small group gives a shaky percentage. Say how many it is based on, so a reader can judge."
  - check:
      type: question
      q: "Edge case: the survey was handed out only to students staying for after-school sport. How does that change the claim?"
      options: ["It limits it: those students may not be like the whole school, so the claim can only be about them", "It makes the claim stronger because they know about sport", "It doesn't change anything", "It proves riding causes sport"]
      answer: 0
      feedback: [null, "Asking only sporty students leaves out the ones who don't play. That is a bias.", "Who was asked matters to who the claim is about.", "A biased sample can't prove a cause."]
      explain: "If the sample leaves some students out, the claim only covers those who were asked. Say who was in the survey."
  - check:
      type: question
      q: "What more would the school need to find out whether riding itself makes students more likely to play sport?"
      options: ["Evidence that changes only the travel, such as asking students who started riding whether they began playing more, or a fair trial", "A bigger poster", "The same table again", "More students from the same group"]
      answer: 0
      feedback: [null, "A bigger poster doesn't add any evidence.", "The same table has the same limits.", "More from the same survey gives a steadier percentage, not a reason."]
      explain: "A cause needs more than a table: evidence where one thing changes and the rest is kept the same, or careful comparison of like with like."
```

### A small group

### Who was asked

### What more is needed

## Practise: choosing words

```step
stage: practise
insight: "Working out how many times as likely, and choosing 'goes with' or 'causes' for a claim, with a review of a percentage of an amount."
tasks:
  - check:
      type: number
      q: "In group A, $60\\%$ play sport, and in group B, $20\\%$ do. How many times as likely are students in group A to play sport?"
      answer: 3
      tolerance: 0
      feedback:
        - [40, "That is the difference in percentage points. Divide to find how many times as likely."]
      explain: "60 ÷ 20 = 3 times as likely."
  - check:
      type: question
      q: "A table shows students who eat breakfast pass a quiz more often than those who don't. Which word fits the table best?"
      options: ["Students who eat breakfast are more likely to pass", "Breakfast makes students pass", "Passing makes students eat breakfast", "Breakfast is unrelated to passing"]
      answer: 0
      feedback: [null, "A table can't show breakfast is the reason.", "That swaps the cause and has no support either.", "The table shows a difference, so it isn't unrelated."]
      explain: "'More likely' says what the table shows. 'Makes' needs more than a table."
  - check:
      type: number
      q: "Review: $40$ students ride and $35\\%$ of them have a helmet with a sticker. How many is that?"
      answer: 14
      tolerance: 0
      explain: "35% of 40 = 0.35 × 40 = 14."
```

### Times as likely

### Choosing the words

### Review

From earlier years: a percentage of an amount.

## Make: your own careful claim

```step
stage: make
insight: "Working out the gap and writing a claim that names its groups shows they can report a table without overreaching."
tasks:
  - hint: ["Work out each group's percentage first.", "48 ÷ 60 and 20 ÷ 40."]
    check:
      type: reasoning
      paper: true
      q: "A different survey (made up): $48$ of the $60$ students who eat breakfast passed a quiz, and $20$ of the $40$ who don't eat breakfast passed. By how many percentage points is the breakfast group's pass rate higher?"
      steps:
        - ["$48 \\div 60 = 0.8$", "the breakfast group's percentage is 80%"]
        - ["$20 \\div 40 = 0.5$", "the other group's percentage is 50%"]
        - ["$80 - 50 = 30$", "the difference in percentage points"]
        - ["'More likely to pass', not 'makes them pass'", "the table shows a link"]
      answer: "30"
      answerLabel: "Percentage points higher"
      tolerance: 0
      feedback:
        - ["28", "That is the difference in the counts, 48 − 20. Compare the percentages."]
        - ["1.6", "That is how many times as likely, 80 ÷ 50. This question asks for the difference."]
      criteria:
        - "I worked out a percentage for each group of its own total."
        - "I subtracted the two percentages."
        - "I worded the claim as 'more likely', not 'makes'."
      explain: "48 ÷ 60 = 80% and 20 ÷ 40 = 50%, so the breakfast group's pass rate is 30 percentage points higher. The careful claim is that students who ate breakfast were more likely to pass in this survey."
  - check:
      type: question
      q: "Which is the best claim for the breakfast table?"
      options: ["In this survey, students who ate breakfast were more likely to pass (80%) than those who didn't (50%)", "Eating breakfast makes students pass", "Skipping breakfast makes students fail", "80% of all students pass"]
      answer: 0
      feedback: [null, "The table shows a link, not that breakfast is the reason.", "That also assumes a cause.", "80% is for the breakfast group, not for all students."]
      explain: "It names both groups, gives both percentages, says 'in this survey' and 'more likely'."
```

### The gap

Work this out on paper first, then type your answer.

### The claim

All the figures here are made up: the school, the survey counts, the breakfast quiz table.

**Also used in**

- **News.** Headlines often turn 'more likely' into 'causes'. Check the table behind them.
- **Health.** Studies that only record who did what, without changing anything, can show a link and leave the cause open.
- **Next lesson.** A good question: planning an investigation with two variables that a table or plot could answer.
