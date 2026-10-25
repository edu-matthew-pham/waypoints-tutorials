---
order: 57
unit: scatter10
node: AC9M10ST03 n3
uses: ["AC9M10ST03 n2", "AC9M7N06 n3"]
connection: ice-cream-drowning
title: "Linked, but not the cause"
summary: "Two things can rise and fall together without one causing the other. Look for a third thing behind both, and say 'goes with' before you say 'causes'."
language: maths
voice: { name: af_heart, speed: 1.1 }
hook: "Months with more ice-cream sales also have more drownings. Should the council ban ice cream?"
explainPicture: { ref: season.yml#explain-pic, caption: "One year in a made-up town, each line scaled so its highest month is 100. Ice-cream sales and drownings both peak in summer. So does the temperature." }
app:
  command: node "$REPO_ROOT/tools/serve.mjs" "$REPO_ROOT/dist/_playground-board" 8452
  url: http://127.0.0.1:8452/index.html
  readySelector: "#board"
  layout: full
---
A town counted its ice-cream sales and its drownings each month, and plotted one against the other. The dots rise: months with more ice-cream sales had more drownings. The figures in this lesson are made up. Have a guess what a council should do, then look at the whole year.

## Predict: a summer without ice cream

```step
stage: predict
insight: "Predicting what a ban would do shows whether students read a link between two things as a cause, before looking for what else changes with the seasons."
check:
  type: predict
  q: "The plot shows a strong link between ice-cream sales and drownings. A council bans ice cream for the whole summer. What would you expect to happen to the number of drownings?"
  options:
    - "It would fall a lot, because ice cream was causing them"
    - "It would stay about the same"
    - "It would rise, because people would swim more"
    - "It would fall to zero"
  actual: "It would stay about the same. Both rise in the same months because summer is hot: more people buy ice cream and more people swim. Take the ice cream away and the swimming (and the risk of drowning) is still there."
```

<figure class="situation" role="img" aria-label="A scatterplot with ice-cream sales across, from low to high, and drownings up. The twelve dots rise from the bottom left to the top right. Beside it a box reads: Council notice, no ice cream sold for the whole summer, and a question mark."><svg viewBox="0 0 470 190" width="470" style="max-width:100%;height:auto" fill="none" stroke="currentColor" font-family="inherit" font-size="13"><line x1="40" y1="150" x2="230" y2="150"/><line x1="40" y1="150" x2="40" y2="20"/><g fill="currentColor" stroke="none"><circle cx="48" cy="129" r="3.5"/><circle cx="62" cy="123" r="3.5"/><circle cx="75" cy="121" r="3.5"/><circle cx="89" cy="104" r="3.5"/><circle cx="103" cy="96" r="3.5"/><circle cx="116" cy="89" r="3.5"/><circle cx="130" cy="74" r="3.5"/><circle cx="143" cy="71" r="3.5"/><circle cx="157" cy="65" r="3.5"/><circle cx="171" cy="59" r="3.5"/><circle cx="184" cy="38" r="3.5"/><circle cx="198" cy="33" r="3.5"/><text x="135" y="176" text-anchor="middle">ice-cream sales</text><text x="14" y="85" text-anchor="middle" transform="rotate(-90 14 85)">drownings</text><text x="40" y="168" text-anchor="middle" font-size="11">low</text><text x="230" y="168" text-anchor="middle" font-size="11">high</text></g><rect x="262" y="40" width="190" height="78" rx="6"/><g fill="currentColor" stroke="none"><text x="357" y="66" text-anchor="middle" font-weight="bold">Council notice</text><text x="357" y="88" text-anchor="middle">No ice cream sold</text><text x="357" y="106" text-anchor="middle">for the whole summer</text><text x="357" y="146" text-anchor="middle" font-size="22">?</text></g></svg></figure>

Make a guess before you check.

## Run: one year, three lines

```step
stage: run
insight: "Plotting ice-cream sales, drownings and temperature month by month shows all three rise and fall together. The ice cream and the drownings both follow the temperature."
try: { playground: board, starter: "season.yml#run", height: 640 }
check: { type: board, text: "Move the cursor $R$ to month $7$, July. What are all three lines doing there?", when: "x(R) = 7" }
```

Month 1 is January and month 12 is December. Each line is scaled so its highest month is 100, so you can compare their shapes. Move $R$ with the slider and read the three values for each month.

## Investigate: association is not cause

```step
stage: investigate
insight: "A strong link between two things leaves three explanations open: one causes the other, a third thing causes both, or chance. The data alone cannot tell them apart."
tasks:
  - hint: ["Compare the overall gap with the gap inside each year level.", "The overall gap is 66 − 54."]
    check:
      type: reasoning
      paper: true
      q: "In a school (made up), students with large shoes average $66$ on a reading test and students with small shoes average $54$. Looking only inside Year 4, large shoes average $53$ and small shoes $52$. Looking only inside Year 6, large shoes average $69$ and small shoes $68$. The gap is the same inside each year level. By how many marks does the gap shrink when only students of the same year level are compared?"
      steps:
        - ["Overall gap: $66 - 54 = 12$", "the gap in marks between large and small shoes for everyone"]
        - ["Year 4 gap: $53 - 52 = 1$, Year 6 gap: $69 - 68 = 1$", "the gap inside each year level"]
        - ["$12 - 1 = 11$", "the gap shrinks by 11 marks"]
        - ["Most of the link comes from year level", "older students have bigger feet and read better, so year level is behind both"]
      answer: "11"
      answerLabel: "Marks the gap shrinks by"
      tolerance: 0
      feedback:
        - ["1", "That is the gap inside a year level. The question asks how much the gap shrinks: 12 down to 1."]
        - ["12", "That is the overall gap. After comparing inside each year level it is 1."]
      criteria:
        - "I worked out the overall gap and the gap inside a year level."
        - "I subtracted to find how much the gap shrank."
        - "I said which third thing explains most of the link."
      explain: "Overall the gap is 66 − 54 = 12. Inside each year level it is only 1. So the gap shrinks by 12 − 1 = 11 marks: almost all of the link was year level, not shoe size."
  - picture: { ref: season.yml#plain, caption: "One year in a made-up town: ice-cream sales, drownings and temperature, each scaled so its highest month is 100." }
    check:
      type: question
      q: "Which statement do the three lines support?"
      options: ["In the warm months, ice-cream sales, drownings and temperature are all high, and in the cool months all are low", "Ice-cream sales cause drownings", "Drownings cause ice-cream sales", "Temperature has nothing to do with either"]
      answer: 0
      feedback: [null, "The lines show that the two go together. They don't show that one causes the other.", "The lines show the same pattern in the other direction too, with no way to see which came first.", "Temperature follows the same pattern as both. It is the obvious thing to look at next."]
      explain: "All three lines are high in summer and low in winter. That is a link between each pair, which is what the data show. Why they are linked needs more than the lines."
  - check:
      type: bug
      code: "working.txt#eli"
      text: "Eli decides what the council should do. Click the line where his reasoning goes wrong."
      answer: 4
      fault: logic
      misconception: association-is-cause
      explain: "Line 4: the plot shows that ice-cream sales and drownings go together, which is line 3. It does not show that ice cream causes the drownings. Something else, like hot weather, could be behind both."
  - check:
      type: question
      q: "Which is the best explanation for ice-cream sales and drownings both being high in the same months?"
      options: ["Hot weather: more people buy ice cream and more people swim", "Ice cream makes swimmers tired", "Drownings make people sad, so they buy ice cream", "It must be chance, since the two have nothing in common"]
      answer: 0
      feedback: [null, "That would need ice cream to be the cause, which the data can't show. Check what else changes in summer.", "That reverses the cause, and it does not explain why both follow the seasons.", "Chance can produce a pattern in a few months, but here the temperature gives a clear reason."]
      explain: "Temperature is a third thing, behind both. In hot months more people buy ice cream and more people swim, so there are more chances of a drowning."
```

### Shoe size and reading

Here is how to look for a third thing, with the shoe size and reading example.

```worked
\text{Pattern: bigger shoes, higher reading mark} :: Students with larger feet tend to score higher. That is a link between the two.
\text{Does one cause the other?} :: Would bigger shoes make you read better? Would reading make your feet grow? Neither sounds right.
\text{Look for a third thing} :: Age or year level. Older students have bigger feet, and they have had more practice at reading.
\text{Test it: compare students of the same year level} :: If the link almost disappears inside each year level, year level was behind both.
```

Now try the school figures on paper first, with the worked example beside you. The numbers are made up.

### Reading the lines

### Find the mistake

Read Eli's working. Which line goes further than the lines do?

### The best reason

## Modify: more pairs, more doubt

```step
stage: modify
insight: "Finding another pair that moves together for a third reason, and asking how much a short run of data can say, builds the habit of asking 'what else?' before 'what caused it?'."
tasks:
  - check:
      type: question
      q: "Which pair most likely moves together because of a third thing?"
      options: ["Umbrella sales and the number of wet-weather car crashes, which both follow the rain", "The number of hours a student studies and the marks they get", "The temperature and the sales of cold drinks", "The number of players on a field and the number of boots"]
      answer: 0
      feedback: [null, "Studying can plausibly raise marks, so this pair may be a direct cause.", "Hot days make people want cold drinks, which looks causal.", "Each player brings boots, so one causes the other directly."]
      explain: "Rain makes people buy umbrellas, and rain also makes roads slippery. Umbrella sales do not cause crashes; rain is behind both."
  - check:
      type: question
      q: "Edge case: a town has only one summer of data, three months, and ice-cream sales and drownings rise together in it. How much should that pattern be trusted?"
      options: ["Not much: a short run of data can line up by chance, so look at more months and other towns", "Fully: the dots rise, so it is proved", "It proves ice cream causes drownings", "It proves ice cream does not cause drownings"]
      answer: 0
      feedback: [null, "Rising dots show a link in these months. Three months are a small sample.", "A link in three months says nothing about cause.", "A short run can't show that either."]
      explain: "Few data points can line up by chance. More months and more towns would show whether the link is steady."
  - check:
      type: question
      q: "Edge case: could one thing really cause the other even if a third thing is also behind both?"
      options: ["Yes: a link on its own cannot tell, so you need more evidence, such as an experiment that changes one thing and holds the rest fixed", "No: once there is a third thing, there can be no other cause", "Yes, and the plot proves it", "No, because correlation never has any meaning"]
      answer: 0
      feedback: [null, "Both can be true together. Smoking is a cause of lung disease, and age is also linked to both, for example.", "A plot of two variables can't prove a cause either way.", "A link is real evidence that something is going on. It just doesn't say what."]
      explain: "A link can't tell a cause from a third thing. To find a cause you need more: an experiment that changes one thing and keeps the other conditions the same, or careful comparison of like with like."
```

### Another pair

### A short run

### Third thing and cause together

## Practise: counting the evidence

```step
stage: practise
insight: "Reading the table of the year for numbers that go together, telling 'goes with' from 'causes', and (review) a percentage of a whole."
tasks:
  - check:
      type: number
      q: "In how many of the 12 months is the temperature index above $70$? (See the table.)"
      answer: 7
      feedback:
        - [12, "Some months are cooler than 70. Count the temperature index values above 70."]
      explain: "January 100, February 97, March 90, April 76, October 76, November 86 and December 97: seven months."
  - check:
      type: question
      q: "Sia says: 'Students who sit at the front get better marks, so moving a student to the front will raise their mark.' What is the best reply?"
      options: ["Maybe not: keen students may choose the front, so keenness could be behind both", "She is right: the data show the cause", "She is wrong: seating never matters", "She needs a bigger plot, and then she will be sure"]
      answer: 0
      feedback: [null, "Data that show students at the front have better marks only show a link.", "Seating might matter. The point is that the link does not prove it.", "A bigger plot of the same kind has the same problem: a link in the data, no way to see why."]
      explain: "The link may be due to something behind both, such as how keen a student is. Moving someone to the front tests whether seating itself matters."
  - check:
      type: number
      q: "Review: $18$ of the $24$ students at the front sit there by choice. What percentage is that?"
      answer: 75
      explain: "18 ÷ 24 = 0.75, which is 75%."
```

### Warm months

The made-up index for each month, with each line's highest month set to 100.

| Month | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Icecream | 100 | 94 | 67 | 44 | 28 | 20 | 19 | 24 | 39 | 58 | 78 | 98 |
| Drownings | 100 | 100 | 67 | 50 | 33 | 17 | 17 | 33 | 33 | 50 | 67 | 100 |
| Temperature | 100 | 97 | 90 | 76 | 62 | 52 | 48 | 55 | 66 | 76 | 86 | 97 |

### Front-row marks

### Review

From earlier years: a percentage of a whole.

## Make: the council's reply

```step
stage: make
insight: "Back to the council: work out how much higher January's figures are than July's, then write the one reply that says what the data show and what they do not."
tasks:
  - hint: ["Divide January's drownings by July's.", "January 6, July 1."]
    check:
      type: reasoning
      paper: true
      q: "In January the town (made up) had $6$ drownings and $90$ thousand tubs of ice cream sold, with an average maximum of $29$ °C. In July: $1$ drowning, $17$ thousand tubs and $14$ °C. How many times as many drownings were there in January as in July?"
      steps:
        - ["$6 \\div 1 = 6$", "January's drownings divided by July's"]
        - ["$90 \\div 17 \\approx 5.3$", "ice-cream sales rose about the same number of times"]
        - ["$29$ °C against $14$ °C", "the temperature is higher too, and gives a reason for both"]
      answer: "6"
      answerLabel: "Times as many drownings"
      tolerance: 0
      feedback:
        - ["5.3", "That is the ice-cream sales ratio. The question asks about drownings: January's 6 against July's 1."]
        - ["5", "That is 6 − 1, the difference. The question asks how many times as many."]
      criteria:
        - "I divided January's number by July's, not subtracted."
        - "I checked the ice-cream sales the same way."
        - "I named the temperature as a third thing."
      explain: "6 ÷ 1 = 6 times as many drownings. Ice cream rose by about 5.3 times and the temperature is also higher. All three go up together, so the data alone do not show ice cream is the cause."
  - check:
      type: question
      q: "Which reply best answers 'Should the council ban ice cream?'"
      options: ["Not on this evidence: ice-cream sales and drownings both rise with the temperature, so the link may be the hot weather, and a ban would not address it", "Yes: the dots prove ice cream causes drownings", "No: the link is chance", "The data can't tell us anything"]
      answer: 0
      feedback: [null, "A link between two things does not prove one causes the other.", "The link is steady across the whole year, so chance is unlikely. The issue is the reason for it.", "The data do tell us something: the two go up together. They just don't say why."]
      explain: "The data show a link and a third thing that could be behind both. A good reply says what the data show, names the third thing and says what more is needed."
```

### How many times as many

Work this out on paper first, then type your answer.

### The council's reply

All the figures here are made up for the lesson: the town, the monthly ice-cream sales, drownings and temperatures, and the school's reading marks.

**Also used in**

- **Health.** News reports often say two things are 'linked'. Ask what third thing might be behind both.
- **Science.** An experiment changes one thing and holds the rest fixed, which is how a cause is tested.
- **Next lesson.** Careful words for a claim from a two-way table: 'may be linked' against 'causes'.
