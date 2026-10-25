---
order: 42
unit: conditional10
node: AC9M10P01 n1
uses: [AC9M9P02 n2, AC9M8P02 n1]   # and / or from a Venn diagram; a two-way table
connection: chance-of-rain
title: Given
summary: "'The chance of rain, given a cloudy morning' is a chance inside a smaller group. Say which event is known, which is asked about, and why swapping them changes the answer."
language: maths
voice: { name: af_heart, speed: 1.1 }
hook: "The sky is grey this morning. Should that change what you say about the chance of rain this afternoon?"
explainPicture: { ref: rain.yml#explain-pic, caption: "Given a cloudy morning, only the 50 cloudy days count. Rain fell on 30 of them, so the chance is 30 out of 50." }
app:
  command: node "$REPO_ROOT/tools/serve.mjs" "$REPO_ROOT/dist/_playground-board" 8440
  url: http://127.0.0.1:8440/index.html
  readySelector: "#board"
  layout: full
---
A forecast chance of rain is the likelihood of more than the smallest rainfall a gauge can measure, 0.2 mm ([Interpreting BOM forecasts, FarmPoint](https://farmpoint.tas.gov.au/news/interpreting-bom-forecasts), checked 22 October 2026). A forecaster also knows things about the morning. This lesson uses 100 spring days in a town. The numbers are made up. Every day is sorted by two questions: did it rain, and was the morning cloudy?

## Predict: which way round

```step
stage: predict
insight: "The same 30 days sit inside both groups, so many students expect the two chances to match. A chance given a group is found inside that group, and the groups have different sizes."
check:
  type: predict
  q: "Look at the picture. Rain fell on 40 of the 100 days and 50 mornings were cloudy; 30 days had both. Which is bigger: the chance of rain, given a cloudy morning, or the chance of a cloudy morning, given rain?"
  options:
    - "Rain given cloudy is bigger"
    - "Cloudy given rain is bigger"
    - "They are equal, because both use the same 30 days"
  actual: "Cloudy given rain is bigger. Given rain, look at the 40 rainy days: 30 of them had a cloudy morning, which is 30/40 = 0.75. Given a cloudy morning, look at the 50 cloudy days: 30 of them had rain, 30/50 = 0.6."
```

<figure class="situation" role="img" aria-label="Two overlapping circles. The left circle is labelled rain, 40 days. The right circle is labelled cloudy morning, 50 days. The overlap is labelled both, 30 days. A question mark sits between two labels: rain given cloudy, and cloudy given rain."><svg viewBox="0 0 460 190" width="460" style="max-width:100%;height:auto" fill="none" stroke="currentColor" font-family="inherit" font-size="13"><circle cx="170" cy="95" r="70" stroke-width="2"/><circle cx="260" cy="95" r="80" stroke-width="2"/><g fill="currentColor" stroke="none" text-anchor="middle"><text x="120" y="12">Rain: 40 days</text><text x="310" y="12">Cloudy morning: 50 days</text><text x="210" y="100" font-weight="700" font-size="12">both: 30</text><text x="360" y="100" font-size="22">?</text><text x="395" y="122">rain given cloudy</text><text x="395" y="142">against</text><text x="395" y="162">cloudy given rain</text></g></svg></figure>

Make a guess before you use the board.

## Run: only the cloudy mornings

```step
stage: run
insight: "'Given a cloudy morning' shrinks the whole to the 50 cloudy days. The days outside it fade, because knowing the morning was cloudy rules them out. The chance is the chosen part over that smaller whole."
try: { playground: board, starter: "rain.yml#run", height: 640 }
check: { type: board, text: "The board is set to 'given cloudy'. Choose the rain parts (Rain only and Rain and Cloudy) and read the chance. Then switch Rain only off and on to see which parts count. What is the chance of rain, given a cloudy morning?", when: "g = 50 and h = 30" }
```

The words after "given" say what you know. Everything that does not fit is left out, so the whole is no longer the 100 days. It is the 50 cloudy ones.

## Investigate: which group do you look at

```step
stage: investigate
insight: "In 'chance of A, given B' you look inside B and ask how much of B is also A. Swapping the two events changes the group you look in, so the chance changes too."
tasks:
  - check:
      type: reasoning
      paper: true
      q: "In a survey of 50 students (made up), 30 play basketball, 20 play volleyball and 8 play both. What is the chance a student plays volleyball, given that they play basketball? Give a decimal to 2 places."
      steps:
        - ["Given basketball: the group is the 30 basketball players", "the given event picks the group"]
        - ["8 of those 30 also play volleyball", "count the 'both' students inside the group"]
        - ["$8 \\div 30 = 0.27$", "the part over the group"]
      answer: "0.27"
      answerLabel: "Chance"
      tolerance: 0.01
      feedback:
        - ["0.16", "That is 8 out of all 50 students. Given basketball, divide by the 30 who play it."]
        - ["0.4", "That is 8 out of 20, the chance of basketball given volleyball. Check which group the question gives."]
      criteria:
        - "I named the group first (the basketball players)."
        - "I counted the volleyball players only inside that group."
        - "I divided by the size of the group, not by 50."
      explain: "The group is the 30 basketball players, and 8 of them also play volleyball: 8 ÷ 30 = 0.27."
    smaller:
      check: { type: number, q: "Given basketball means you look only at the basketball players. How many of the 50 students is that?", answer: 30, tolerance: 0, explain: "30 students play basketball. That is the whole you divide by." }
  - check:
      type: bug
      code: "working.txt#ravi"
      text: "Ravi finds the chance of a cloudy morning, given that it rained. Click the line where he goes wrong."
      answer: 3
      fault: logic
      misconception: conditional-direction-swapped
      explain: "Line 3: the thing given is rain, so he should look at the 40 days with rain, not the 50 cloudy mornings. 30 ÷ 40 = 0.75. He answered the question for the other direction."
  - check:
      type: question
      q: "'The chance a student plays sport, knowing that they walk to school.' Which group do you look inside?"
      options: ["The students who walk to school", "The students who play sport", "All the students", "The students who do both"]
      answer: 0
      feedback: [null, "The sport players are what you count inside the group, not the group.", "'Knowing that' shrinks the whole to the walkers.", "The 'both' students are the ones you count, not the group."]
      explain: "'Knowing that they walk' is the given part, so you look at the walkers and ask how many of them play sport."
```

### Two ways to say it

In this lesson $P(\text{rain} \mid \text{cloudy})$ is read "the chance of rain, given a cloudy morning". Words such as "given", "if", "knowing that" and "of the" all do the same job: they point at the group you look in.

```worked
P(\text{bike} \mid \text{scooter}) :: In a survey of 40 students (made up), 24 own a bike, 16 own a scooter and 10 own both. Read "given scooter": the scooter owners are the group.
10 \text{ of the } 16 \text{ scooter owners also own a bike} :: Count the students with both, but only inside that group.
P(\text{bike} \mid \text{scooter}) = \tfrac{10}{16} = \tfrac{5}{8} :: The part over the group.
P(\text{scooter} \mid \text{bike}) = \tfrac{10}{24} = \tfrac{5}{12} :: Swap the words and the group changes to the 24 bike owners, so the answer changes.
```

Now try one on paper first, with the example beside you. In a different survey (made up), 50 students were asked about two sports. Then type your answer.

### Find the mistake

Read Ravi's working. Which line chooses the wrong group?

### Reading the sentence

Pick the group first, then count.

## Modify: change what is given

```step
stage: modify
insight: "Changing the given group changes the whole and so the chance. At the edge, a given group with nothing in it leaves no chance to work out."
try: { playground: board, starter: "rain.yml#run", height: 640 }
tasks:
  - starter: "rain.yml#clear"
    hint: ["The board is given 'not cloudy', the clear mornings. Choose the Rain parts.", "Only the Rain only part is inside the clear mornings."]
    check: { type: board, text: "Now the morning was clear. Choose rain and read the chance of rain, given a clear morning.", when: "g = 50 and h = 10", explain: "Of the 50 clear mornings, 10 had rain: 10/50 = 0.2." }
  - starter: "rain.yml#rainy"
    hint: "The group is the 40 rainy days. Choose the Cloudy parts."
    check: { type: board, text: "Now it is given that it rained. Choose cloudy and read the chance of a cloudy morning, given rain.", when: "g = 40 and h = 30", explain: "Of the 40 rainy days, 30 had a cloudy morning: 30/40 = 0.75." }
  - starter: "rain.yml#nodry"
    check:
      type: question
      q: "Edge case: in this board no day has rain (the Rain circle is empty). The board is given rain. What does it say about the chance of a cloudy morning, given rain?"
      options: ["It has no value: there are no rainy days to look at, so there is nothing to divide", "It is 0, because nothing happened", "It is 1, because cloudy is the only option", "It is 20 out of 100"]
      answer: 0
      feedback: [null, "A chance of 0 would mean there were rainy days and none of them was cloudy.", "A chance of 1 would mean every rainy day was cloudy, and there are none.", "That is the share of days that were cloudy only, out of all 100. Given rain, the whole is empty."]
      explain: "With 0 rainy days there is no group to look in, so 'given rain' has no chance. The board says it is not defined."
```

### Clear morning

### Given rain

### Nothing to look at

## Practise: reading and finding

```step
stage: practise
insight: "Finding a chance given a group from a table, then a review of and / or from Year 9."
tasks:
  - check: { type: number, q: "Of the 100 days, 40 had a clear morning and, of those, 8 had rain (made up). What is the chance of rain, given a clear morning? Give a decimal.", answer: 0.2, tolerance: 0.01, feedback: [[0.08, "That is 8 out of all 100 days. Given a clear morning, the whole is the 40 clear mornings."]], explain: "8 ÷ 40 = 0.2." }
  - check: { type: number, q: "In a class of 30, 18 play netball, 12 play hockey and 6 play both (made up). What is P(hockey | netball), as a decimal?", answer: 0.33, tolerance: 0.01, feedback: [[0.5, "That is P(netball | hockey), 6 out of the 12 hockey players. Given netball, look at the 18 netball players."]], explain: "Given netball, the group is 18 students and 6 also play hockey: 6 ÷ 18 = 0.33." }
  - check: { type: number, q: "Review: use the 100 spring days (10 rain only, 30 both, 20 cloudy only, 40 neither). What is P(rain or cloudy)? Give a decimal.", answer: 0.6, tolerance: 0.01, feedback: [[0.5, "That counts only the cloudy days. 'Or' includes rain days as well."], [1.2, "40 + 50 counts the 30 days with both twice."]], explain: "10 + 30 + 20 = 60 of 100 days had rain or a cloudy morning: 0.6." }
```

### Clear mornings

### Hockey given netball

### A review

From Year 9: "or" takes everything in either group, and the overlap is counted once. That chance is not given anything, so the whole stays the 100 days.

## Make: back to the forecast

```step
stage: make
insight: "Returning to the opening: a cloudy morning lets you say something more exact than the chance of rain on any day. A good report names the given group and compares the two chances."
tasks:
  - check:
      type: reasoning
      paper: true
      q: "On any day in this town the chance of rain is $\\frac{40}{100} = 0.4$. A cloudy morning arrives. Using the table, what chance of rain would you give for that afternoon? (Decimal.)"
      steps:
        - ["Given a cloudy morning, the group is the 50 cloudy days", "the given event picks the group"]
        - ["30 of those 50 days had rain", "count the rain days inside the group"]
        - ["$30 \\div 50 = 0.6$", "the part over the group"]
      answer: "0.6"
      answerLabel: "Chance of rain"
      tolerance: 0.01
      feedback:
        - ["0.3", "That is 30 out of all 100 days. Given a cloudy morning, divide by the 50 cloudy mornings."]
        - ["0.4", "That is the chance on any day. The cloudy morning is something you know, so use it."]
      criteria:
        - "I named the group the 'given' picks."
        - "I counted rain only inside that group."
        - "I wrote the answer as a chance with the words 'given a cloudy morning'."
      explain: "0.6. Of the 50 cloudy mornings, 30 had rain. That is higher than the 0.4 for any day, because a cloudy morning is a clue."
  - check:
      type: question
      q: "Which sentence says what the table shows?"
      options: ["On days with a cloudy morning it rained on 3 in 5, but on all days it rained on 2 in 5", "It rained on 3 in 5 days", "A cloudy morning makes rain certain", "A cloudy morning has nothing to do with rain"]
      answer: 0
      feedback: [null, "3 in 5 is only for days with a cloudy morning. Say which days.", "3 in 5 is a long way from certain.", "0.6 against 0.4 shows that cloudy mornings and rain go together a little."]
      explain: "A conditional chance always needs its group: 0.6 given a cloudy morning, 0.4 on any day."
```

### The forecast

Work this out on paper first, then type your answer.

### What the table says

Sources: the meaning of "chance of rain" is from [FarmPoint](https://farmpoint.tas.gov.au/news/interpreting-bom-forecasts) (checked 22 October 2026). The 100 days, the cloudy mornings and the rain counts, and the bike, scooter and sport counts, are made up for this lesson.

**Also used in**

- **Medicine.** A positive test result is a clue, and the chance of having the condition, given a positive result, is not the chance the test is right.
- **Sport.** The chance a team wins, given it scores first, is looked up inside the games where it scored first.
- **Next lesson.** Tables, Venn diagrams and trees all read the same conditional chance.
