---
order: 43
unit: conditional10
node: AC9M10P01 n2
uses: [AC9M10P01 n1, AC9M9P02 n2]   # the language of given; and / or from a Venn diagram
connection: rare-test
title: Tables, Venns and trees
summary: "A two-way table, a Venn diagram and a tree can all show the same conditional chance. Read the chance off a table by looking inside the group it is given, and see why a test that is usually right can still be wrong most of the times it says positive."
language: maths
voice: { name: af_heart, speed: 1.1 }
hook: "A screening test comes back positive. Does that mean the person has the condition?"
explainPicture: { ref: test.yml#explain-pic, caption: "Out of 1000 people, 67 test positive: 18 who have the condition and 49 who don't. The chance of the condition, given a positive test, is 18 out of 67." }
app:
  command: node "$REPO_ROOT/tools/serve.mjs" "$REPO_ROOT/dist/_playground-board" 8441
  url: http://127.0.0.1:8441/index.html
  readySelector: "#board"
  layout: full
---
Doctors use screening tests on people who feel well. In this lesson, a test is made up for a rare condition. Every rate is made up: a real test's rates come from the people who make it, and a doctor looks them up. Of every 1000 people, 20 have the condition. The test is positive for 9 in 10 of the people who have it, and, wrongly, for 1 in 20 of those who don't.

## Predict: a positive result

```step
stage: predict
insight: "Many students take 'the test is right 9 in 10 times' as the answer. The people who test positive include many without the condition, because there are so many more of them."
check:
  type: predict
  q: "1000 people take the test. Someone is told they tested positive. About how likely is it that this person really has the condition?"
  options:
    - "About 9 in 10"
    - "About 1 in 2"
    - "About 1 in 4"
    - "About 1 in 20"
  actual: "About 1 in 4. Of the 1000 people, 18 who have the condition test positive, and so do 49 of the 980 who don't. That is 67 positives, and 18 of them have the condition: 18/67 = 0.27."
```

<figure class="situation" role="img" aria-label="1000 people split into two boxes. The first box holds 20 people who have the condition, and the test is positive for 9 in 10 of them. The second box holds 980 people who do not have it, and the test is positive for 1 in 20 of them. Both positive counts are question marks."><svg viewBox="0 0 480 170" width="480" style="max-width:100%;height:auto" fill="none" stroke="currentColor" font-family="inherit" font-size="13"><rect x="20" y="30" width="90" height="70" rx="6" stroke-width="2"/><rect x="190" y="30" width="270" height="70" rx="6" stroke-width="2"/><g fill="currentColor" stroke="none" text-anchor="middle"><text x="65" y="22">Have it: 20</text><text x="325" y="22">Don't have it: 980</text><text x="65" y="70" font-size="20" font-weight="700">?</text><text x="325" y="70" font-size="20" font-weight="700">?</text><text x="65" y="125">positive for 9 in 10</text><text x="325" y="125">positive for 1 in 20</text><text x="240" y="158" font-size="14">positive results: ? out of 1000</text></g></svg></figure>

Make a guess before you use the board.

## Run: the positives only

```step
stage: run
insight: "'Given a positive test' shrinks the whole to the 67 positives. The table and the Venn diagram show the same counts: the 18 who have the condition sit inside the 67."
try: { playground: board, starter: "test.yml#run", height: 640 }
check: { type: board, text: "The board shows the 1000 people, given a positive test. Choose the people who have the condition (Condition only and Condition and Positive). How many of the positives is that?", when: "g = 67 and h = 18" }
```

The table has the same four numbers as the diagram. Look down the Positive column: 18 and 49. Together they are the 67 who tested positive.

## Investigate: reading the table

```step
stage: investigate
insight: "Rates only become counts when you start from a group of people. Counting 1000 people through the rates builds the table, and the chance given a positive test is read inside the Positive column."
tasks:
  - check: { type: number, q: "The test is positive for 18 people who have the condition and for 49 who don't. Out of the 1000 people, how many test positive?", answer: 67, tolerance: 0, feedback: [[18, "That is only the positives who have the condition. People without it can test positive too."], [49, "Those are the false alarms. Add the people who have the condition and test positive."]], explain: "18 + 49 = 67 people test positive." }
    smaller:
      check: { type: number, q: "20 of the 1000 people have the condition and the test is positive for 9 in 10 of them. How many of those 20 test positive?", answer: 18, tolerance: 0, explain: "9 in 10 of 20: 20 ÷ 10 × 9 = 18." }
  - check:
      type: reasoning
      paper: true
      q: "A different screening test (made up). Of 1000 people, 50 have the condition. The test is positive for 45 of those 50 and, wrongly, for 38 of the 950 others. Given a positive test, what is the chance the person has the condition? Give a decimal to 2 places."
      steps:
        - ["All the positives: $45 + 38 = 83$", "the group the 'given' picks"]
        - ["Positives with the condition: $45$", "the count you want inside the group"]
        - ["$45 \\div 83 = 0.54$", "the part over the group"]
      answer: "0.54"
      answerLabel: "Chance"
      tolerance: 0.01
      feedback:
        - ["0.9", "That is 45 out of the 50 who have the condition: the chance of a positive test, given the condition. The group here is all the positives."]
        - ["0.05", "That is 45 out of all 1000 people. Given a positive test, divide by the positives."]
      criteria:
        - "I added the positives from both groups to find the group."
        - "I counted only the people with the condition inside it."
        - "I divided by the positives, not by 1000 or 50."
      explain: "83 people test positive, 45 of them have the condition: 45 ÷ 83 = 0.54. About 1 in 2."
  - check:
      type: bug
      code: "working.txt#maya"
      text: "Maya finds the chance a person has the condition, given a positive test. Click the line where she goes wrong."
      answer: 3
      fault: logic
      misconception: base-rate-ignored
      explain: "Line 3: 9 in 10 is the chance of a positive test, given the condition. She needs the chance of the condition, given a positive test, and the positives include 49 people without it: 18 out of 67."
```

### Fill in the table

Build the table from the rates by starting with a group of 1000 people.

### Given a positive test

A table, a Venn diagram and a tree all show the same four counts. Here is how to read the chance off a table.

```worked
\text{A scanner checks 1000 phone cases (made up). 40 are faulty.} :: Start from a group and sort it by the two things: faulty or not, flagged or not.
36 \text{ faulty cases are flagged; } 48 \text{ of the } 960 \text{ good cases are flagged too} :: Fill in the table from the rates: the flagged column holds 36 and 48.
36 + 48 = 84 \text{ cases are flagged} :: "Given a flag" picks this group.
P(\text{faulty} \mid \text{flagged}) = \tfrac{36}{84} = \tfrac{3}{7} :: The faulty cases inside the group, over the group.
```

Now try one on paper first, with the example beside you. This test is also made up. Then type your answer.

### Find the mistake

Read Maya's working. Does 9 in 10 answer the question that is asked?

## Modify: change the test

```step
stage: modify
insight: "A tree shows the same four counts as the table, with each branch's chance on it. Changing the test changes the false alarms and so the chance given a positive. At the edge, with no false alarms, every positive is real."
try: { playground: board, starter: "test.yml#tree", height: 640 }
tasks:
  - starter: "test.yml#tree"
    hint: ["Click the two outcomes with a Positive test.", "Positive on the Yes branch is 18 people. Positive on the No branch is 49."]
    check: { type: board, text: "This tree is the same test. Choose both outcomes where the test is Positive. How many of the 1000 are in your event?", when: "n = 67 and m = 1000", explain: "18 + 49 = 67 of the 1000. Each branch shows its chance: 1/50 have the condition, and 9/10 of them test positive." }
  - starter: "test.yml#better"
    hint: "Choose the two positive outcomes on the tree to find the number of positives, then divide the condition's positives by it."
    check: { type: answer, q: "This test gives fewer false alarms: 14 of the 980 people without the condition test positive. Given a positive test, what is the chance the person has the condition? (Decimal to 2 places.)", answer: "0.56", feedback: [["0.27", "That is for the first test, with 49 false alarms."], ["0.9", "That is the chance of a positive test, given the condition."]], explain: "The positives are 18 + 14 = 32, and 18 of them have the condition: 18/32 = 0.56." }
  - starter: "test.yml#nofalse"
    hint: "The No branch has no Positive leaf, so the tree drops it."
    check:
      type: question
      q: "Edge case: a test with no false alarms. Nobody without the condition tests positive. Given a positive test, what is the chance the person has the condition?"
      options: ["1: every positive is a person with the condition", "0.9, the chance the test catches the condition", "0.5, because it is either positive or negative", "It cannot be worked out because there is no Positive branch on one side"]
      answer: 0
      feedback: [null, "0.9 is the chance of a positive, given the condition. Given a positive, the group is the 18 people with it.", "A person is not equally likely to be either. Count the positives.", "The group is the positives, and there are 18 of them, all with the condition."]
      explain: "The only positives are the 18 who have the condition, so 18 out of 18 is 1."
```

### The tree

### A better test

### No false alarms

## Practise: reading the table

```step
stage: practise
insight: "Reading a chance given a group from counts, and keeping the two directions apart. Review: and / or from Year 9."
tasks:
  - check: { type: number, q: "Of 1000 people (made up), 100 have a condition. The test is positive for 90 of them and wrongly for 90 of the 900 others. Given a positive test, what is the chance the person has the condition? Give a decimal.", answer: 0.5, tolerance: 0.01, feedback: [[0.9, "That is 90 out of the 100 with the condition. Given a positive test, the group is 90 + 90 = 180."]], explain: "180 people test positive and 90 have the condition: 90 ÷ 180 = 0.5." }
  - check: { type: number, q: "Using the lesson's counts (18 have the condition and test positive, 2 have it and test negative, 49 don't have it and test positive, 931 don't and test negative), what is the chance of a positive test, given the person has the condition? Give a decimal.", answer: 0.9, tolerance: 0.01, feedback: [[0.27, "That is the chance of the condition, given a positive test. Here the group is the 20 people with the condition."]], explain: "The group is the 20 people with the condition and 18 test positive: 18 ÷ 20 = 0.9." }
  - check: { type: number, q: "Review: of 100 people, 55 play sport, 30 play music and 10 play both. How many play neither?", answer: 25, tolerance: 0, feedback: [[15, "The 10 who play both were taken off twice. Add them back once."]], explain: "55 + 30 − 10 = 75 play something, so 100 − 75 = 25 play neither." }
```

### Given a positive

### Given the condition

### A review

From Year 9: take the overlap off once. That count is not given anything, so the whole stays at everyone.

## Make: back to the positive test

```step
stage: make
insight: "Returning to the opening: fill in a table for 1000 people from the rates, then say what a positive result means. A good answer gives the number and puts it in words with the group."
tasks:
  - check:
      type: reasoning
      paper: true
      q: "Back to the screening test: 20 of every 1000 people have the condition, the test is positive for 9 in 10 of them, and wrongly positive for 1 in 20 of the others. Fill in a table for 1000 people on paper, then find the chance of the condition, given a positive test. Give a decimal to 2 places."
      steps:
        - ["With the condition: $20$, of whom $18$ test positive", "9 in 10 of 20"]
        - ["Without it: $980$, of whom $49$ test positive", "1 in 20 of 980"]
        - ["$18 \\div (18 + 49) = 18 \\div 67 = 0.27$", "the condition's positives over all the positives"]
      answer: "0.27"
      answerLabel: "Chance"
      tolerance: 0.01
      feedback:
        - ["0.9", "That is the chance of a positive test, given the condition. The question is the other way round."]
        - ["0.02", "That is the chance of the condition before the test. A positive test is a clue: use the positives as the group."]
      criteria:
        - "I filled in the table from the rates starting with 1000 people."
        - "I used the positives as the group."
        - "I divided the condition's positives by all the positives."
      explain: "18 of the 67 positives have the condition: 0.27. Most positives are false alarms, because so many more people don't have the condition."
  - check:
      type: question
      q: "Which sentence best explains the result to a friend who tested positive?"
      options: ["About 1 in 4 people who test positive have the condition, because the condition is rare and many people without it also test positive, so a second test is a good idea", "The test is right 9 times out of 10, so you almost certainly have it", "A positive test means you do not have it", "The test is no good because it is sometimes wrong"]
      answer: 0
      feedback: [null, "9 in 10 is the chance of a positive test, given the condition. It is not the chance of the condition, given a positive test.", "A positive test does raise the chance: from 2 in 100 to about 27 in 100.", "The test is useful: it raises the chance a lot. It just does not decide it."]
      explain: "The chance rises from 2 in 100 before the test to about 27 in 100, which is a lot, but it does not decide. A good report gives the group it is given."
```

### The table

Work this out on paper first, then type your answer.

### What to tell a friend

Sources: every rate and count in this lesson is made up (the condition, the test, the scanner and the sport counts). A real test's rates come from the people who make it, and a doctor looks them up.

**Also used in**

- **Quality control.** A scanner that flags faulty items has false alarms too, so a flag is a clue and not a verdict.
- **Security checks.** An alarm that goes off sometimes without a reason has the same table.
- **Next lesson.** Deciding whether one thing changes the chance of another.
