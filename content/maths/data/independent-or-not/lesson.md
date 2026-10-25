---
order: 44
unit: conditional10
node: AC9M10P01 n3
uses: [AC9M10P01 n1, AC9M10P01 n2]   # given; reading a chance from a table
connection: survey-two-way
title: Independent or not?
summary: "Two events are independent when knowing one does not change the chance of the other. Compare the chance given with the chance on its own, using rates, not counts."
language: maths
voice: { name: af_heart, speed: 1.1 }
hook: "Does how a student gets to school have anything to do with whether they play a sport?"
explainPicture: { ref: walk.yml#explain-pic, caption: "Given walking, 18 of the 30 walkers play sport: 0.6. On its own, 60 of the 100 students play sport: also 0.6. Walking makes no difference here." }
app:
  command: node "$REPO_ROOT/tools/serve.mjs" "$REPO_ROOT/dist/_playground-board" 8442
  url: http://127.0.0.1:8442/index.html
  readySelector: "#board"
  layout: full
---
A class survey asks every student two things: do you walk to school, and do you play a sport? In this lesson a survey of 100 students gave the counts. The numbers are made up. If walking made no difference to playing sport, the two events would be called independent.

## Predict: does walking change it

```step
stage: predict
insight: "Students often expect a link (walkers are fitter, so more play sport). The comparison that decides it is the chance of sport among walkers against the chance of sport among everyone."
check:
  type: predict
  q: "In the survey, 60 of the 100 students play a sport. 30 students walk to school, and 18 of those walkers play a sport. Does knowing a student walks change the chance they play a sport?"
  options:
    - "Yes: walkers are more likely to play a sport"
    - "Yes: walkers are less likely to play a sport"
    - "No: walkers are no more or less likely to play a sport"
  actual: "No. Among all 100 students the chance of sport is 60/100 = 0.6. Among the 30 walkers it is 18/30 = 0.6. They are the same."
```

<figure class="situation" role="img" aria-label="A two-way table of 100 students. Rows: walk to school and do not walk. Columns: plays a sport and does not. Totals are shown: 30 walk, 60 play a sport, 100 students. The walkers who play a sport is 18. The other cells are question marks."><svg viewBox="0 0 440 190" width="440" style="max-width:100%;height:auto" fill="none" stroke="currentColor" font-family="inherit" font-size="14"><g stroke-width="1.5"><rect x="110" y="30" width="95" height="45"/><rect x="205" y="30" width="95" height="45"/><rect x="300" y="30" width="95" height="45"/><rect x="110" y="75" width="95" height="45"/><rect x="205" y="75" width="95" height="45"/><rect x="300" y="75" width="95" height="45"/><rect x="110" y="120" width="95" height="45"/><rect x="205" y="120" width="95" height="45"/><rect x="300" y="120" width="95" height="45"/></g><g fill="currentColor" stroke="none" text-anchor="middle"><text x="157" y="58">Sport</text><text x="252" y="58">No sport</text><text x="347" y="58">Total</text><text x="60" y="102">Walk</text><text x="60" y="147">Don't walk</text><text x="157" y="102" font-weight="700">18</text><text x="252" y="102" font-size="20">?</text><text x="347" y="102">30</text><text x="157" y="147" font-size="20">?</text><text x="252" y="147" font-size="20">?</text><text x="347" y="147" font-size="20">?</text></g><g fill="currentColor" stroke="none" text-anchor="middle"><text x="157" y="185">60 play a sport</text><text x="347" y="185">100 students</text></g></svg></figure>

Make a guess before you use the board.

## Run: compare two chances

```step
stage: run
insight: "The chance given walking is read inside the walkers. The chance on its own is read across everyone. If the two are equal, knowing someone walks tells you nothing about sport."
try: { playground: board, starter: "walk.yml#run", height: 640 }
check: { type: board, text: "The board is given 'walk'. Choose everyone who plays a sport (Walk and Sport, and Sport only). The readout gives the chance given walking. Compare it with the chance on its own: 60 of the 100.", when: "g = 30 and c = p" }
```

The board gives two numbers when you choose Sport. One is the chance of sport among the walkers. The other is out of all 100 students.

## Investigate: compare rates, not counts

```step
stage: investigate
insight: "Independence means the chance of A is the same with or without B. The group sizes differ, so counts can mislead: 18 walkers against 42 non-walkers says nothing until each is divided by its own group."
tasks:
  - check:
      type: reasoning
      paper: true
      q: "In a different survey of 80 students (made up), 24 play chess, 20 are in the choir and 8 do both. What is the chance a student plays chess, given that they are in the choir? Give a decimal to 2 places."
      steps:
        - ["The group is the 20 choir members", "given the choir"]
        - ["8 of them also play chess", "the count inside the group"]
        - ["$8 \\div 20 = 0.40$", "the part over the group"]
      answer: "0.4"
      answerLabel: "Chance"
      tolerance: 0.01
      feedback:
        - ["0.1", "That is 8 out of all 80 students. Given the choir, divide by the 20 choir members."]
        - ["0.33", "That is 8 out of the 24 who play chess, the chance of the choir given chess. The group here is the choir."]
      criteria:
        - "I named the group first (the choir)."
        - "I counted chess players only inside it."
        - "I divided by the choir, not by 80 or 24."
      explain: "8 of the 20 choir members play chess: 0.40."
    smaller:
      check: { type: number, q: "Given the choir means you look only at the choir. How many of the 80 students are in the choir?", answer: 20, tolerance: 0, explain: "20 students are in the choir. That is the whole you divide by." }
  - check:
      type: question
      q: "In that survey the chance a student plays chess is $\\frac{24}{80} = 0.3$, and the chance given the choir is $0.4$. What does that say?"
      options: ["Not independent: knowing a student is in the choir changes the chance they play chess", "Independent: both chances are small", "Independent: 8 students do both", "It cannot be said, because the survey is only one sample"]
      answer: 0
      feedback: [null, "Independence is about the two chances being equal, not about them being small. 0.4 is not 0.3.", "The number who do both is a count. Compare the two chances.", "One survey can't prove a link, but it does show the two chances differ here, so these events are not independent in this survey."]
      explain: "0.4 is not equal to 0.3, so the choir changes the chance of chess in this survey. The events are dependent."
  - check:
      type: bug
      code: "working.txt#aiden"
      text: "Aiden decides whether walking to school and playing a sport are independent in the 100-student survey. Click the line where he goes wrong."
      answer: 3
      fault: logic
      misconception: dependent-by-counts
      explain: "Line 3: there are many more students who do not walk (70) than walkers (30), so of course more of them play sport. He needs to compare rates: 18/30 = 0.6 and 42/70 = 0.6, which are equal. The events look independent."
```

### Given the choir

Here is a full comparison, with a worked example.

```worked
\text{100 school days (made up): rain on 20, a late bus on 25, both on 10} :: Compare the chance of a late bus on its own with the chance given rain.
P(\text{late}) = \tfrac{25}{100} = 0.25 :: Out of all the days.
P(\text{late} \mid \text{rain}) = \tfrac{10}{20} = 0.5 :: Look only at the 20 rainy days.
0.5 \ne 0.25 :: The chance changes when you know it rained.
\text{Not independent: a late bus depends on rain} :: Say the answer in words.
```

Now try the chess survey on paper first, with the example beside you. Then type your answer.

### Do the chances differ

### Find the mistake

Read Aiden's working. Does 18 against 42 compare like with like?

## Modify: independent and not

```step
stage: modify
insight: "The same board shows both outcomes: equal chances for independent events, different chances for dependent ones. At the edge, two events that can't both happen are not independent."
try: { playground: board, starter: "walk.yml#run", height: 640 }
tasks:
  - starter: "walk.yml#run"
    hint: ["Choose Walk and Sport and Sport only: that is everyone who plays a sport.", "c is the chance given walking, p is the chance on its own."]
    check: { type: board, text: "Back on the walking survey. Choose everyone who plays a sport and check that the chance given walking equals the chance on its own.", when: "c = p and g = 30", explain: "0.6 and 0.6: equal, so knowing a student walks does not change the chance they play a sport." }
  - starter: "walk.yml#bus"
    hint: "Now the days are sorted by rain and a late bus. The board is given rain. Choose Late."
    check: { type: board, text: "A different board: rain and a late bus (the days from the worked example). Choose everyone with a late bus and read the chance given rain, then compare it with the chance on its own.", when: "c = 0.5 and p = 0.25", explain: "0.5 given rain and 0.25 on its own are not equal, so a late bus is not independent of rain." }
  - starter: "walk.yml#never"
    check:
      type: question
      q: "Edge case: no student both walks and takes the bus to school (the board). Are 'walks' and 'takes the bus' independent?"
      options: ["No: given that a student walks, the chance they take the bus is 0, but on its own it is 0.25", "Yes: they have nothing to do with each other", "Yes: the chance given walking is 0, so it never changes", "It cannot be told without more students"]
      answer: 0
      feedback: [null, "Events that cannot happen together are linked in the strongest way: one rules the other out.", "A chance of 0 against 0.25 is a change, so the events are not independent.", "The board has all 100 students, and the two chances already differ."]
      explain: "Walking rules out the bus, so the chance of the bus given walking is 0 while on its own it is 25/100 = 0.25. Events that can't happen together are not independent."
```

### Rates equal

### A late bus

### Events that cannot happen together

## Practise: compare the chances

```step
stage: practise
insight: "Using equal rates to find a count, and checking a claim of independence from a table. Review: relative frequency from Year 9."
tasks:
  - check: { type: number, q: "Of 100 students, 70 play a sport. If playing sport is independent of walking to school, how many of the 40 walkers play a sport?", answer: 28, tolerance: 0, feedback: [[70, "That is the count for all 100 students. Independence means the same share of the 40 walkers play: 70% of 40."]], explain: "The share is 70/100 = 0.7, so 40 × 0.7 = 28 walkers." }
  - check:
      type: question
      q: "In a table of 100 days, the chance of a late bus is 0.25 and the chance of a late bus, given rain, is 0.5. Which sentence is right?"
      options: ["A late bus is more likely on rainy days, so the events are not independent", "The events are independent because 0.25 and 0.5 are both under 1", "The events are independent because rain is not a cause", "Rain makes the bus late, so we know rain causes it"]
      answer: 0
      feedback: [null, "Independence means the two chances are equal.", "Independence is about the numbers, not a cause. The chances differ here.", "The numbers show the two go together. They do not show that rain causes it: that needs more than this table."]
      explain: "0.5 is not equal to 0.25, so a late bus depends on rain in these days. The table shows they go together, not why."
  - check: { type: number, q: "Review: a bus was late on 6 of 40 school days (made up). What is the relative frequency of a late bus? Give a decimal.", answer: 0.15, tolerance: 0.005, explain: "6 ÷ 40 = 0.15." }
```

### Equal rates

### Reading a claim

### A review

From Year 9: a relative frequency is a count of times over the number of tries. It is the estimate used when you don't have a theory for the chance.

## Make: back to the survey

```step
stage: make
insight: "Returning to the opening: a new survey, one chance to find, and a careful sentence. A careful sentence says what the numbers show in this survey and does not claim more."
tasks:
  - check:
      type: reasoning
      paper: true
      q: "A new survey of 120 students (made up): 40 walk to school, 70 play a sport and 20 do both. What is the chance a student plays a sport, given that they walk? Give a decimal to 2 places."
      steps:
        - ["The group is the 40 walkers", "given walking"]
        - ["20 of them play a sport", "the count inside the group"]
        - ["$20 \\div 40 = 0.50$", "the part over the group"]
      answer: "0.5"
      answerLabel: "Chance"
      tolerance: 0.01
      feedback:
        - ["0.17", "That is 20 out of all 120 students. Given walking, divide by the 40 walkers."]
        - ["0.29", "That is 20 out of the 70 who play sport: the chance of walking, given sport."]
      criteria:
        - "I named the group first."
        - "I counted sport players only inside it."
        - "I divided by the 40 walkers."
      explain: "20 of the 40 walkers play a sport: 0.5."
  - check:
      type: question
      q: "On its own the chance of sport in the new survey is $\\frac{70}{120} \\approx 0.58$. Which sentence is the most careful?"
      options: ["In this survey walkers were a little less likely to play a sport (0.5 against 0.58), so the two do not look independent, but one survey can't show why", "Walking stops students playing sport", "Walking and sport are independent because 0.5 is close to 0.58", "The survey proves walkers are lazy"]
      answer: 0
      feedback: [null, "The survey does not show a cause.", "0.5 is not equal to 0.58. Close is a judgement: say what the numbers are and don't claim they are equal.", "The numbers say nothing about being lazy."]
      explain: "A careful claim states the two chances, says what they show in this survey, and does not claim a cause."
```

### The new survey

Work this out on paper first, then type your answer.

### A careful sentence

Sources: the survey counts, the rain and late-bus days and the chess and choir counts are made up for this lesson.

**Also used in**

- **Bus lateness.** A term's records of late buses and rain days make a table you can compare.
- **Insurance.** Whether an accident depends on the colour of a car is a question about independence.
- **Games.** Rolling a die twice: the second roll's chances don't depend on the first, which is why the table is a plain grid.
