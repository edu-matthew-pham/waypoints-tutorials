---
order: 2
unit: data
title: Reading a trend
node: AC9HE7S03 n2
summary: "A trend is the overall direction of change over time, not one year's jump or dip. Describe it with its direction (up, down or steady), how much it changed, and over what period. An interactive graph lets you read the values at each point instead of guessing."
language: maths
hook: "Riverbend counted its casual and full-time workers every year for ten years. In one year, casual work dropped. Is casual work falling?"
---
Riverbend is a made-up town, and this is made-up data.

A **trend** is the overall direction of change over a period of time. One year's jump or dip isn't the trend: look at the whole period.

Describe a trend in three parts:

- **Direction:** up, down, or about the same.
- **How much:** from what to what, or by how much.
- **Over what period:** which years.

For example: "Over the ten years, casual work rose from 420 to 650 workers."

**Casual** and **full-time** work are the types from Work, income and identity: casual has no promise of ongoing hours; full-time is a full working week.

## Predict: what's the trend?

```step
stage: predict
insight: "Committing first shows whether students read the whole period or fix on one year."
check:
  type: predict
  q: "Casual workers in Riverbend went from 510 in year 4 to 440 in year 5. Before you look at all ten years, what do you think the trend is?"
  options:
    - "I need to see all ten years before I can say"
    - "Casual work is falling, because it dropped that year"
    - "Casual work is rising, because it's always rising"
    - "There's no trend, because it went down once"
  actual: "One year can't tell you the trend. Over all ten years, casual work rose from 420 to 650, with one dip in year 5."
```

## Try: read the graph

```step
stage: run
insight: "Moving the cursor and reading values makes the graph a tool, not a picture."
try: { playground: board, starter: "workers.yml#run", height: 420 }
tasks:
  - check:
      type: board
      text: "Move the cursor R along the casual line to year 10."
      when: "x(R) = 10"
      explain: "R reads the casual line; S reads the full-time line in the same year."
  - check:
      type: number
      q: "How many casual workers were there in year 1?"
      answer: 420
      explain: "Move R to year 1: 420 casual workers."
  - check:
      type: number
      q: "How many casual workers were there in year 10?"
      answer: 650
      explain: "Move R to year 10: 650 casual workers."
```

### Move the cursor

### Year 1

### Year 10

## Worked example: one dip isn't a trend

```step
stage: investigate
insight: "Nib reads one year's change as the trend. Describing the whole period with direction, amount and period fixes it."
try: { playground: board, starter: "workers.yml#investigate", height: 420 }
tasks:
  - check:
      type: bug
      code: "working.txt#nib"
      text: "Nib is describing the trend in casual work. Click the first line where Nib's thinking goes wrong."
      answer: 3
      fault: logic
      misconception: one-point-is-a-trend
      explain: "Line 3: one year's drop isn't the trend. Over all ten years, casual work rose from 420 to 650. So line 4 is wrong too."
    smaller:
      check:
        type: question
        q: "Was casual work higher in year 10 or in year 1?"
        options: ["Year 10", "Year 1", "They were the same", "You can't tell from the graph"]
        answer: 0
        feedback:
          - null
          - "Year 1 was 420, and year 10 was 650."
          - "They're different: 420 and 650."
          - "Move the cursor to year 1 and year 10 and read both values."
        explain: "650 in year 10, 420 in year 1. Over the whole period it went up."
  - check:
      type: number
      q: "By how many workers did casual work grow from year 1 to year 10?"
      answer: 230
      explain: "650 − 420 = 230 more casual workers."
  - check:
      type: question
      q: "Which sentence describes the trend in casual work best?"
      options:
        - "Over ten years it rose from 420 to 650 workers"
        - "It fell from 510 to 440 workers, in year 5"
        - "Casual work went up and down over the years"
        - "There were 650 casual workers in year 10"
      answer: 0
      feedback:
        - null
        - "That's one year. The trend is over the whole period."
        - "It did dip once, but this doesn't say the overall direction or how much."
        - "That's one value, not a change over time."
      explain: "Direction (rose), how much (420 to 650), over what period (ten years)."
```

### Find Nib's mistake

```worked
\text{One year} :: Year 4 to year 5: 510 down to 440. A dip.
\text{Whole period} :: Year 1 to year 10: 420 up to 650.
\text{Trend} :: Over the ten years, casual work rose by 230 workers.
\text{So} :: Describe the whole period: direction, how much, over what period.
```

Now: where does Nib go wrong?

### How much it grew

### Describe the trend

## Vary: the full-time line

```step
stage: modify
insight: "Describing the second line checks the three parts work on a different trend."
try: { playground: board, starter: "workers.yml#modify", height: 420 }
tasks:
  - check:
      type: board
      text: "Move the cursor to year 1, and read the full-time value at S."
      when: "x(R) = 1"
      explain: "In year 1, S shows 900 full-time workers."
  - check:
      type: question
      q: "Which sentence describes the trend in full-time work?"
      options:
        - "Over ten years it fell slowly, from 900 to 810 workers"
        - "It stayed exactly the same from year to year"
        - "Over ten years it rose, from 810 up to 900 workers"
        - "It crashed in year 5, and that is the trend"
      answer: 0
      feedback:
        - null
        - "It changed a little each year. Look at year 1 and year 10."
        - "Check the order: year 1 is 900 and year 10 is 810."
        - "It did fall most in year 5, but 20 isn't a crash. The trend is the whole period."
      explain: "Direction (fell slowly), how much (900 to 810), over what period (ten years)."
```

### Full-time in year 1

### The full-time trend

## Practise: compare the two

```step
stage: practise
insight: "Comparing two trends is the multi-variable reading the standard asks for."
try: { playground: board, starter: "workers.yml#practise", height: 420 }
tasks:
  - check:
      type: question
      q: "Over the ten years, which changed more?"
      options:
        - "Casual work: up 230, while full-time fell 90"
        - "Full-time work: down 230, while casual rose 90"
        - "They changed by the same amount"
        - "Neither changed"
      answer: 0
      feedback:
        - null
        - "Check the numbers: casual 420 to 650, full-time 900 to 810."
        - "650 − 420 = 230; 900 − 810 = 90. Not the same."
        - "Both changed. Read the first and last years."
      explain: "Casual rose by 230; full-time fell by 90."
  - check:
      type: question
      q: "What do the two trends together suggest about work in Riverbend?"
      options:
        - "More of the town's work may now be casual, and less full-time"
        - "Most people in Riverbend now work as casuals"
        - "Full-time work in Riverbend will disappear next year"
        - "The two lines have nothing to do with each other"
      answer: 0
      feedback:
        - null
        - "Full-time work is still the larger group: 810 against 650 in year 10."
        - "That goes much further than the data."
        - "Both describe work in the same town over the same years, so it makes sense to read them together."
      explain: "A reasonable inference from the two trends, one step beyond the data."
```

### Which changed more?

### Both lines together

## Make: your own trend sentence

```step
stage: make
insight: "Writing a trend sentence in your own words, with all three parts, is the skill."
check:
  type: reflect
  text: "In my own book I wrote a trend sentence for full-time work in Riverbend with its direction, how much it changed, and the period, and one sentence about what the two trends together might mean. A partner read it and gave feedback."
```

Write it in your own book or document, not on this page. Your partner or teacher reads it.

## Typical: two halves of the period

```step
stage: make
tier: typical
insight: "Splitting a period in two shows whether a trend is steady or speeding up."
check:
  type: question
  q: "Casual work went from 420 to 440 over years 1 to 5, and from 500 to 650 over years 6 to 10. What does that show?"
  options:
    - "The rise was much faster in the second half"
    - "Casual work rose evenly over the whole time"
    - "Casual work fell over the first five years"
    - "Only the last five years count as the trend"
  answer: 0
  feedback:
    - null
    - "Up 20 in the first half, up 150 in the second. Not even."
    - "440 is more than 420, so it still rose a little, with a dip in year 5."
    - "Both halves are part of the trend."
  explain: "Up 20, then up 150: the trend sped up in the second half."
```

## Wider: what might the trend mean?

```step
stage: make
tier: wider
insight: "What a trend means for people is a judgement, and reasonable people can read it differently."
check:
  type: reasoning
  q: "More of Riverbend's work is casual than ten years ago. Is that good or bad for the people who work there? Give a reason, and one reason someone might see it differently."
  paper: true
  models:
    - title: "One view"
      text: "It could be worse for workers, because casual work has no promise of ongoing hours, so income can change from week to week and is harder to plan around."
    - title: "Another view"
      text: "It could suit some people, like students or carers, who want to choose when they work. It depends on whether people chose casual work or couldn't find full-time."
  criteria: ["I gave a view and a reason.", "I gave a reason someone might see it differently.", "I used the words casual or full-time."]
```

Typical and wider steps are extras on the same idea. You do not need them to finish the lesson.
