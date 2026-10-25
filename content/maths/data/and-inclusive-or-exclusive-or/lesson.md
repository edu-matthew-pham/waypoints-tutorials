---
order: 25
unit: chance9
node: AC9M9P02 n2
uses: ["AC9M8P02 n2", "AC9M8P02 n1"]
connection: survey-two-way
title: "And, or, and \"or but not both\""
summary: "\"Sport or music\" can mean either one or both, or exactly one. A Venn diagram shows each meaning as a different set of regions."
language: maths
voice: { name: af_heart, speed: 1.1 }
hook: "A form asks: \"Do you play sport or music?\" What if you do both?"
app:
  command: node "$REPO_ROOT/tools/serve.mjs" "$REPO_ROOT/dist/_playground-board" 8381
  url: http://127.0.0.1:8381/index.html
  readySelector: "#board"
  layout: full
---
A survey of 30 students asked about sport and music (made up for the task): 12 play sport only, 8 play both, 5 play music only and 5 play neither. The word "or" can mean two different things, and a form can go wrong depending on which. Have a guess how many students say yes to "sport or music", and we'll come back to it at the end.

<figure class="situation" role="img" aria-label="A Venn diagram of sport and music with 12, 8, 5 and 5 students"><svg viewBox="0 0 360 140" width="360" style="max-width:100%;height:auto" fill="none" stroke="currentColor" font-family="inherit" font-size="13"><text x="20" y="25" fill="currentColor" stroke="none">Sport only 12 · Both 8 · Music only 5 · Neither 5</text><circle cx="140" cy="80" r="45"/><circle cx="200" cy="80" r="45"/></svg></figure>

## Predict: sport or music

```step
stage: "predict"
insight: "Counting students who play sport or music shows whether students double count the 8 who play both (33) or add all four groups (30)."
check: {"type": "predict", "q": "12 play sport only, 8 play both, 5 play music only, 5 play neither (30 students). How many play sport or music (either one, or both)?", "options": ["33", "25", "30"], "actual": "25. 12 + 8 + 5 = 25. The 8 who play both are counted once, and the 5 who play neither are not counted."}
```

## Run: A or B

```step
stage: "run"
insight: "Choosing the regions that make up \"sport or music\" shows it covers three of the four regions; \"and\" covers one."
try: {"playground": "board", "starter": "b.yml#run", "height": 620}
check: {"type": "board", "text": "Choose every student who plays sport or music (one or both).", "when": "x = 1 and y = 1 and z = 1 and w = 0", "explain": "Sport only, both and music only: 12 + 8 + 5 = 25 of 30."}
```

## Investigate: three meanings

```step
stage: "investigate"
insight: "\"And\" is the overlap, inclusive \"or\" is everything in either circle, and exclusive \"or\" is either circle without the overlap; a total of A plus B counts the overlap twice."
tasks:
  - {"check": {"type": "number", "q": "How many play sport or music, but NOT both (exclusive or)?", "answer": 17, "tolerance": 0, "explain": "Sport only 12 + music only 5 = 17."}, "smaller": {"check": {"type": "number", "q": "How many students play both?", "answer": 8, "tolerance": 0, "explain": "The overlap: 8."}}}
  - {"check": {"type": "question", "q": "A form says: \"Tick if you play sport and music.\" Which students tick?", "options": ["Only the 8 who play both", "The 25 who play either", "The 17 who play exactly one", "The 12 who play sport only"], "answer": 0, "feedback": [null, "\"And\" needs both.", "That is exactly one of the two.", "Sport only misses music."], "explain": "\"And\" means in both circles: the overlap."}}
  - {"check": {"type": "bug", "code": "working.txt#zoe", "text": "Zoe counts the students who play sport or music. Click the line where she goes wrong.", "answer": 2, "fault": "logic", "misconception": "or-double-count", "explain": "Line 2: the 8 students who play both are in the sport total and in the music total. Adding 20 + 13 counts them twice. Take them away once: 20 + 13 − 8 = 25."}}
```

### Exactly one

```worked
\text{sport} = 20,\ \text{music} = 13,\ \text{both} = 8 :: Totals include the overlap.
20 + 13 - 8 = 25 :: Inclusive or: add, then take the overlap off once.
25 - 8 = 17 :: Exclusive or: either circle but not the overlap.
```

### And

### Find the mistake

## Modify: other regions

```step
stage: "modify"
insight: "The same diagram answers other \"and\", \"or\" and \"not\" questions by choosing regions."
try: {"playground": "board", "starter": "b.yml#run", "height": 620}
tasks:
  - {"starter": "b.yml#run", "check": {"type": "board", "text": "Choose the students who play sport or music but not both.", "when": "x = 1 and y = 0 and z = 1 and w = 0", "explain": "Sport only and music only: 12 + 5 = 17."}}
  - {"starter": "b.yml#run", "check": {"type": "board", "text": "Choose the students who play neither sport nor music.", "when": "x = 0 and y = 0 and z = 0 and w = 1", "explain": "The 5 outside both circles."}}
  - {"type": "question", "q": "The sign-up form says \"Sport or music\". Most people will read it as...", "options": ["Either one, or both", "Exactly one", "Both", "Neither"], "answer": 0, "feedback": [null, "That needs \"but not both\".", "That is \"and\".", "That is \"not\"."], "explain": "In everyday use \"or\" usually includes both. If you mean one but not both, say so."}
```

### One but not both

### Neither

### Reading the form

## Practise: and, or and neither

```step
stage: "practise"
insight: "Counting regions for and, or and neither from different counts, and a review of the last lesson."
tasks:
  - {"check": {"type": "number", "q": "20 students: 7 play chess only, 3 play both chess and draughts, 6 play draughts only, the rest play neither. How many play chess or draughts?", "answer": 16, "tolerance": 0, "explain": "7 + 3 + 6 = 16."}}
  - {"check": {"type": "number", "q": "In the same group, how many play exactly one of chess and draughts?", "answer": 13, "tolerance": 0, "explain": "7 + 6 = 13."}}
  - {"check": {"type": "number", "q": "Review: a bus was late on 9 of 30 days. What is the relative frequency (a decimal)?", "answer": 0.3, "tolerance": 0.005, "explain": "9 ÷ 30 = 0.3."}}
```

### Chess or draughts

### Exactly one

### Review

## Make: the survey form

```step
stage: "make"
insight: "Returning to the form: count the answers under the meaning of \"or\" that includes both, on paper."
check: {"type": "reasoning", "paper": true, "q": "The form says \"Do you play sport or music?\" A student who plays both ticks yes. How many of the 30 students (12 sport only, 8 both, 5 music only, 5 neither) tick yes? (The numbers are made up for the task.)", "steps": [["Sport only: $12$, both: $8$, music only: $5$", "regions that count"], ["$12 + 8 + 5 = 25$", "add the three regions"]], "answer": "25", "answerLabel": "Students ticking yes", "tolerance": 0, "feedback": [["33", "That counts the 8 who play both twice."], ["17", "That leaves out the students who play both."]], "criteria": ["I counted the overlap once.", "I left out 'neither'.", "I can say what 'or but not both' would give."], "explain": "25 students. If the form meant \"one but not both\" it would be 17, so the wording matters."}
```

Write the form's question so that only the 17 who play exactly one would say yes.

**Also used in**

- **Search engines.** "cats OR dogs" finds pages with either; "cats AND dogs" needs both; some tools offer XOR for exactly one.
- **Forms and law.** "Over 18 or a student" means someone can be both.
- **Next lesson.** Estimating probabilities of "and" and "or" from records.
