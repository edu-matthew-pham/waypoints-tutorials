---
title: "Probability from 0 to 1"
summary: "Probability tells us how likely something is. It goes from 0 (can never happen) to 1 (always happens). A chance can be a fraction or a decimal, and it is never bigger than 1."
language: maths
shape: primer
unit: unknowns
order: 12
node: AC9M6P01 n1
hook: "Pick a counter from a bag with 3 red and 1 blue. Is red likely?"
---
**Probability** is a number that says how likely an event is. It goes from $0$ (impossible) through $\tfrac{1}{2}$ (even chance) to $1$ (certain).

## Think first

```step
stage: predict
insight: "Students think a probability of 1/4 means \"it will happen every 4th time\", or that two outcomes are always 50-50. It is a measure of how likely, not what will happen next."
check:
  type: predict
  q: "A bag has 3 red counters and 1 blue counter. You pick one without looking. How likely is red?"
  options: ["Likely, more than half the time","Even, a 50-50 chance","Unlikely","Certain"]
  actual: "Likely, more than half the time. 3 of the 4 counters are red, so the chance of red is 3/4."
```

Lock in a guess before you read on.

## Try it

```step
stage: run
insight: "Picking 100 times shows that red comes up about 3 times out of 4."
try: { playground: board, starter: "boards.yml#bag", height: 420 }
check: { type: board, text: "Run at least 100 picks and look at how often red comes up.", when: "t >= 100" }
hint: ["Press the Run 10 button a few times, or Run 100.","Look at the tally for red. About how many in every 4?"]
```

The bag has 3 red and 1 blue. Run lots of picks. The tally shows how often red comes up.

## The idea

```step
stage: investigate
insight: "Probability is a fraction from 0 to 1: favourable outcomes over all outcomes."
tasks:
  - insight: "Use 0 for impossible, 1 for certain and 1/2 for even."
    check:
      type: sort
      q: "How likely is it?"
      options: ["Impossible (0)","Unlikely","Even chance","Likely","Certain (1)"]
      items:
        - ["A coin lands heads or tails","Certain (1)"]
        - ["A coin lands on heads","Even chance"]
        - ["It snows in Canberra in January","Unlikely","It is rare there in summer, but not impossible."]
        - ["A die shows a 7","Impossible (0)"]
        - ["A die shows a number less than 6","Likely"]
  - insight: "Favourable over all."
    check:
      type: answer
      q: "A bag has 10 counters and 3 are red. What is the chance of red, as a decimal?"
      answer: "0.3"
      feedback:
        - ["3","A chance is never more than 1. 3 out of 10 is 3/10."]
        - ["0.7","That is the chance of not red. Red is 3 out of 10."]
      explain: "3 out of 10 is 3/10, which is 0.3."
  - insight: "Between 0 and 1."
    check:
      type: question
      q: "Which of these cannot be a probability?"
      options: ["1.5","0","0.5","1"]
      answer: 0
      feedback: [null,"0 means it can never happen, so it can be a probability.","0.5 is an even chance.","1 means it will always happen."]
      explain: "A probability is never more than 1, because certain is 1."
```

**Probability** = how many ways it can happen, out of all the ways. It goes from 0 (impossible) to 1 (certain), and can be a fraction, a decimal or a percentage. $\tfrac{1}{2}$ is an even chance.

### How likely?

### Counters in a bag

### Not a probability

## Check

```step
stage: practise
insight: "Using the 0 to 1 scale on new examples."
tasks:
  - check:
      type: question
      q: "Which probability is closest to certain?"
      options: ["0.95","0.5","0.05","0.25"]
      answer: 0
      feedback: [null,"That is an even chance.","0.05 is very close to impossible.","0.25 is unlikely."]
      explain: "0.95 is close to 1, so it is nearly certain."
  - check:
      type: answer
      q: "A die is rolled. What is the chance it shows a number less than 7?"
      answer: "1"
      feedback:
        - ["0","Every number on a die is less than 7, so it will always happen."]
        - ["6","A probability is never more than 1. All 6 out of 6 is 1."]
      explain: "All 6 numbers are less than 7, so it is certain: 6 out of 6 is 1."
```

### Nearly certain

### A die

## Apply

```step
stage: make
insight: "Explaining a chance."
check:
  type: reasoning
  q: "Explain why the chance of picking red from a bag with 3 red and 1 blue is more than a half."
  placeholder: "The chance of red is more than a half because …"
  models:
    - title: "Count the counters"
      text: "3 of the 4 counters are red. 3 out of 4 is bigger than 2 out of 4, which is a half. So red is more likely than blue."
  criteria:
    - "I counted the red counters and all the counters."
    - "I said 3 out of 4 is more than a half."
```

```teacher
summary: "Students place chances on a scale from 0 to 1 and find a simple probability as a fraction, and drop the idea that every event is a 50-50 chance."
time: 17
timing: "Think first 3 min · Try 4 min · The idea 5 min · Check 3 min · Apply 2 min"
goals:
  - "I can say what 0 and 1 mean for a chance."
  - "I can work out a simple chance as a fraction or a decimal."
  - "I can say which events are likely and unlikely."
before: |
  The one idea: probability is a number from 0 to 1 that says how likely. The common mistake is that everything is 50-50 (it will happen or it will not). The Think first question meets it.
  
  The board is the chance board from the Year 7 lessons *Sample space* and *Many trials*. Here the bag is fixed at 3 red and 1 blue.
  
  A real bag of coloured counters is better than any picture.

  Not yet tried with a class.
running:
  - "Think first: ask students to say how likely red is, using words like likely or unlikely."
  - "Try: ask them to compare red and blue counts after 100 picks."
  - "Apply: look for \"out of\"."
struggle: "Students may say \"it is either red or blue, so it is 50-50\". Ask how many of each there are."
stuck:
  - see: "A student says the chance of red is 50-50."
    ask: "How many red and how many blue?"
    fix: "3 red and 1 blue, so red is more likely."
  - see: "A student says the chance of red is 3."
    ask: "What is the biggest a chance can be?"
    fix: "1, so red is 3 out of 4, or 3/4."
exit:
  q: "A bag has 2 red and 8 blue counters. How likely is red, and what number is that?"
  a: "Unlikely, 2/10 or 0.2."
leads: |
  Leads into Year 7 Data and chance: *Sample space*, *Many trials* and *Predict and test*.
```
