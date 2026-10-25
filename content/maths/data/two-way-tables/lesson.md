---
order: 11
unit: chance
node: AC9M8P02 n1
uses: [AC9M8P01 n1, AC9M7P01 n2]
title: Venn diagrams and two-way tables
summary: "When everyone in a group is sorted by two yes/no questions, a Venn diagram and a two-way table show the same four groups: one, the other, both and neither. Each person is in exactly one of them."
language: maths
voice: { name: af_heart, speed: 1.1 }
hook: "In a class of 30, 20 play sport and 13 play music. That adds to 33, more than the class. Nobody miscounted. What is going on?"
connection: survey-two-way   # data/connections/maths.yml (documentation only)
app:
  command: node "$REPO_ROOT/tools/serve.mjs" "$REPO_ROOT/dist/_playground-board" 8329
  url: http://127.0.0.1:8329/index.html
  readySelector: "#gsum"
  layout: full
explainPicture: { ref: venn.yml#explain-pic, caption: "30 students: 12 sport only, 8 both, 5 music only, 5 neither. Music (shaded) is 8 + 5 = 13: the table's Music total." }
explainClip:
  query: { code: "@venn.yml#explain", fresh: 1, id: explain }
  caption: "Four groups, two pictures"
  say: "The Venn diagram and the table show the same four groups."
  clip:
    - caption: { text: "Music only: 5. In the table, Music and not sport.", say: "Music only is five." }
    - click: Music only
    - wait: 900
    - caption: { text: "Add both: 8. Everyone who plays music is 13, the column total.", say: "Add the eight who do both. Thirteen play music." }
    - click: Sport and Music
    - expect: { selector: "#gsum", contains: "13 of 30" }
    - wait: 1500
---
A **Venn diagram** shows two properties as overlapping circles inside a box (everyone). A **two-way table** shows the same people in rows and columns, with totals.

## Predict: more than the class

```step
stage: predict
insight: "Committing to an explanation for 20 + 13 > 30 shows whether they think of people who are in both groups."
check:
  type: predict
  q: "In a class of 30, 20 play sport and 13 play music. 20 + 13 = 33. How can that be?"
  options: ["Someone made a mistake", "Some play both, and were counted twice", "Some play neither"]
  actual: "Some play both. They were counted once with sport and again with music. Here 8 play both."
```

<figure class="situation" role="img" aria-label="A class of 30 drawn as two overlapping circles: sport with 20 students and music with 13. The overlap, the students who play both, is marked with a question mark."><svg viewBox="0 0 320 185" width="320" style="max-width:100%;height:auto" fill="none" stroke="currentColor" font-family="inherit" font-size="13"><rect x="10" y="8" width="300" height="169" rx="8" stroke-width="1"/><text x="20" y="26" text-anchor="start" fill="currentColor" stroke="none" font-size="11">class of 30</text><circle cx="125" cy="95" r="55" stroke-width="1.5"/><circle cx="195" cy="95" r="55" stroke-width="1.5"/><text x="98" y="92" text-anchor="middle" fill="currentColor" stroke="none">sport</text><text x="98" y="110" text-anchor="middle" fill="currentColor" stroke="none">20</text><text x="222" y="92" text-anchor="middle" fill="currentColor" stroke="none">music</text><text x="222" y="110" text-anchor="middle" fill="currentColor" stroke="none">13</text><text x="160" y="100" text-anchor="middle" fill="currentColor" stroke="none" font-size="20">?</text><text x="160" y="172" text-anchor="middle" fill="currentColor" stroke="none" font-size="11">? = plays both</text></svg></figure>

## Run: find the groups

```step
stage: run
insight: "Choosing regions shows each person is in exactly one of four groups, and a whole circle is two of them."
try: { playground: board, starter: "venn.yml#run", height: 560 }
check: { type: board, text: "Choose everyone who plays sport: click the parts of the diagram (or the table, or the buttons). Does it match the table's total? Who was counted twice in your prediction?", when: "x = 1 and y = 1 and z = 0 and w = 0", explain: "Sport only (12) and both (8) make 20. The 8 who play both are also in the music circle: 20 + 13 counts them twice." }
```

Click a part again to remove it. The table's inside cells match the four parts of the diagram:

| | Music | Not music |
|---|---|---|
| **Sport** | both | sport only |
| **Not sport** | music only | neither |

## Investigate: build them from a story

```step
stage: investigate
insight: "Start with the overlap and subtract it from each circle's total; putting a whole total in the 'only' part counts the overlap twice (Lia)."
tasks:
  - check:
      type: number
      q: "40 people: 22 like tea, 18 like coffee and 7 like both. How many like neither?"
      answer: 7
      tolerance: 0
      feedback:
        - ["-7", "Tea only is 22 − 7 = 15, not 22."]
        - ["0", "Tea only is 15 and coffee only is 11. Add the 7 in both and take the total from 40."]
      explain: "Tea only 22 − 7 = 15, coffee only 18 − 7 = 11. 15 + 7 + 11 = 33, so 40 − 33 = 7 like neither."
  - check:
      type: bug
      code: "working.txt#lia"
      text: "Lia draws the Venn diagram for the same 40 people. Click the line where she goes wrong."
      answer: 3
      fault: logic
      misconception: venn-double-count
      explain: "Line 3: 22 like tea, but 7 of them are already in the overlap. Tea only is 15 and coffee only is 11. A negative count shows something went wrong."
  - check:
      type: question
      q: "Which is easier to read from a two-way table than from a Venn diagram?"
      options: ["Who is in neither", "Nothing: they show different people", "The totals, such as how many play sport in all", "Who is in both groups"]
      answer: 2
      feedback: ["Both show neither.", "They show the same people.", null, "Both show the overlap."]
      explain: "The table has total rows and columns; in a Venn diagram you add the parts yourself."
```

### Neither

Here is the routine. Start in the middle.

```worked
25 \text{ students: } 15 \text{ dog},\ 10 \text{ cat},\ 4 \text{ both} :: Read the story.
\text{both} = 4 :: Write the overlap first.
\text{dog only} = 15 - 4 = 11,\ \text{cat only} = 10 - 4 = 6 :: Take the overlap from each total.
\text{neither} = 25 - (11 + 4 + 6) = 4 :: Everyone else.
```

### Find the mistake

Read Lia's working. Can a group have −7 people?

### Tables or diagrams

## Modify: from one to the other

```step
stage: modify
insight: "Filling a table from a diagram and a diagram from a table shows the four cells are the four regions."
try: { playground: board, starter: "venn.yml#totable", height: 600 }
tasks:
  - starter: "venn.yml#totable"
    hint: ["Both goes where the Dog row meets the Cat column.", "Dog only goes in the Dog row, Not cat column."]
    check: { type: board, text: "Fill in the two-way table from the Venn diagram.", when: "k = 1", explain: "Dog and cat 4, dog not cat 9, cat not dog 6, neither 11. The totals check it: 13 have a dog, 10 a cat, 30 in all." }
  - starter: "venn.yml#tovenn"
    hint: "The overlap is the cell where Glasses meets Left-handed."
    check: { type: board, text: "Now fill in the Venn diagram's four numbers from the table.", when: "k = 1", explain: "Glasses only 7, both 2, left-handed only 3, neither 16." }
  - check:
      type: number
      q: "In the Sport and Music class (12 sport only, 8 both, 5 music only, 5 neither), how many students do exactly one of the two?"
      answer: 17
      tolerance: 0
      feedback:
        - ["25", "That includes the 8 who do both."]
      explain: "Sport only and music only: 12 + 5 = 17."
  - check:
      type: question
      q: "Which cell of the two-way table matches the part of the Venn diagram outside both circles?"
      options: ["Music and not sport", "Not sport and not music", "Sport and music", "The total"]
      answer: 1
      feedback: ["That is the music-only part.", null, "That is the overlap.", "The total is everyone."]
      explain: "Outside both circles means in neither group."
```

### Diagram to table

### Table to diagram

### Exactly one

### Outside the circles

## Practise: tables and diagrams

```step
stage: practise
insight: "Reading and completing tables and diagrams, mixed; the overlap counted twice is the planted slip; complements are the review."
tasks:
  - check:
      type: number
      q: "A two-way table: 18 students walk and own a bike, 7 walk and don't own a bike. How many students walk in all?"
      answer: 25
      tolerance: 0
      explain: "The Walk row: 18 + 7 = 25."
  - check:
      type: number
      q: "60 people: 35 have a phone case, 20 have a screen protector, 12 have both. How many have a case but no screen protector?"
      answer: 23
      tolerance: 0
      feedback:
        - ["35", "12 of the 35 have a screen protector too."]
      explain: "35 − 12 = 23."
  - check:
      type: number
      q: "In that group of 60, how many have neither?"
      answer: 17
      tolerance: 0
      feedback:
        - ["5", "60 − 35 − 20 counts the 12 with both twice."]
      explain: "Case only 23, both 12, protector only 8: 43. So 60 − 43 = 17 have neither."
    smaller:
      check: { type: number, q: "Same 60 people: 35 have a case, 20 have a screen protector, 12 have both. How many have a screen protector but no case?", answer: 8, tolerance: 0, feedback: [[20, "12 of those 20 have a case too."]], explain: "20 − 12 = 8 have a protector only. Now put the four groups together." }
  - check:
      type: answer
      q: "Review: a bag has 7 counters, 2 of them green. What is P(not green)?"
      answer: "5/7"
      explain: "1 − 2/7 = 5/7."
```

### Row total

### Case only

### Neither

### Review: complement

## Make: your own survey

```step
stage: make
insight: "Planning a two-question survey and its table and diagram shows they can set up both representations."
try: { playground: board, starter: "venn.yml#make", height: 560 }
hint: ["Pick two yes/no questions, such as 'Do you catch a bus?' and 'Do you ride a bike?'", "Count the overlap first."]
check: { type: reflect, text: "I chose two yes/no questions, counted the four groups (one, the other, both, neither), and drew both a Venn diagram and a two-way table with totals." }
```

The board shows a finished example (bus and bike) to compare with. Ask your two questions to your class or family, then draw both pictures. Which is quicker to read, and for which question?

## Make: on paper

```step
stage: make
insight: "Finding 'neither' in a made-up walk-and-sport survey, with the reason for subtracting the overlap picked at the key step."
check:
  type: reasoning
  paper: true
  q: "A survey of 40 Year 8 students finds 22 walk to school, 15 play a sport and 9 do both (made up). How many do neither? Draw the two circles or a table on paper."
  steps:
    - ["Walk only: $22 - 9 = 13$. Sport only: $15 - 9 = 6$", "take the overlap out of each total"]
    - ["$13 + 6 + 9 = 28$ do at least one", "add the three parts, with the overlap counted once"]
    - ["$40 - 28 = 12$ do neither", "everyone else"]
  picks:
    - step: 2
      q: "Why is the overlap counted only once?"
      options: ["Students who do both are in both totals, so they must be counted once", "Everyone is in exactly one group, so 22 + 15 is right", "The 9 should be taken from the walkers only"]
      answer: 0
      feedback: [null, "22 + 15 = 37 counts the 9 twice.", "The 9 are in both totals, so both groups lose them to the overlap."]
  answer: "12"
  answerLabel: "Neither"
  tolerance: 0
  feedback:
    - ["3", "That is 40 − 22 − 15, which takes the 'both' students away twice."]
    - ["28", "That is how many do at least one. Neither is what is left of the 40."]
  criteria:
    - "I wrote the overlap, 9, first."
    - "I counted the overlap once in the total."
    - "My four parts add to 40."
  explain: "13 + 6 + 9 = 28 do at least one, so 40 − 28 = 12 do neither. The four cells add to 40."
```

Do this one in your book or on paper, one step per line, before you type the number.

**Also used in**

- **School surveys.** Walk or ride? Sport or music? Every student falls in one of four cells.
- **Clubs and rosters.** Count members of two clubs without counting the shared ones twice.
- **Class work.** Survey your class and check the four cells add to the number surveyed.
