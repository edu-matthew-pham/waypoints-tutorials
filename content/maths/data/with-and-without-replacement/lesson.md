---
order: 22
unit: chance9
node: AC9M9P01 n2
uses: ["AC9M9P01 n1", "AC9M8P02 n1"]
connection: name-draw
title: "Putting it back, or not"
summary: "When something drawn is put back the choices stay the same; when it is not, they shrink. Listing the outcomes both ways shows what changes."
language: maths
voice: { name: af_heart, speed: 1.1 }
hook: "Two names come out of a hat for the class jobs. Can the same name come out twice?"
app:
  command: node "$REPO_ROOT/tools/serve.mjs" "$REPO_ROOT/dist/_playground-board" 8379
  url: http://127.0.0.1:8379/index.html
  readySelector: "#board"
  layout: full
---
Two names are drawn from a hat for two class jobs. If the first name goes back in, the same name could be drawn again. If it stays out, it cannot. Have a guess how much that changes the chance that both jobs go to people from your table of 5 (25 names in the hat, made up for the task), and we'll come back to it at the end.

<figure class="situation" role="img" aria-label="A hat of names; one name is drawn and set aside"><svg viewBox="0 0 360 140" width="360" style="max-width:100%;height:auto" fill="none" stroke="currentColor" font-family="inherit" font-size="13"><text x="20" y="40" fill="currentColor" stroke="none">Hat of names</text><rect x="20" y="55" width="110" height="50" rx="8" stroke-width="2"/><text x="150" y="85" fill="currentColor" stroke="none">→ first name drawn: Ana</text><text x="150" y="110" fill="currentColor" stroke="none">stays out? or goes back?</text></svg></figure>

## Predict: how many outcomes

```step
stage: "predict"
insight: "A count for a draw with nothing put back shows whether students keep the full number of choices for the second draw (16) or one fewer (12)."
check: {"type": "predict", "q": "Two names are drawn from Ana, Ben, Cai and Dee for two different jobs, and the first name is NOT put back. How many outcomes (first job, second job) are there?", "options": ["16", "12", "8"], "actual": "12. The first job can go to any of 4 people, then the second to any of the 3 left: 4 × 3 = 12."}
```

## Run: Ana gets a job

```step
stage: "run"
insight: "The grid with no put-back has no diagonal (a name cannot be drawn twice), so the outcomes with Ana are counted from 12, not 16."
try: {"playground": "board", "starter": "b.yml#run", "height": 620}
check: {"type": "board", "text": "The first name is not put back. Choose every outcome where Ana gets a job (either job). Notice the empty diagonal.", "when": "r = 1", "explain": "Ana first with Ben, Cai or Dee (3), or Ana second after Ben, Cai or Dee (3): 6 of the 12 outcomes."}
```

## Investigate: one fewer choice

```step
stage: "investigate"
insight: "Without replacement the second draw has one fewer choice, and a name cannot come up twice; forgetting this keeps the full count."
tasks:
  - {"check": {"type": "number", "q": "5 names are in a hat and two are drawn for two jobs, with nothing put back. How many outcomes are there?", "answer": 20, "tolerance": 0, "explain": "5 choices for the first job, 4 for the second: 5 × 4 = 20."}, "smaller": {"check": {"type": "number", "q": "Ana got the first job and stays out. How many names are left for the second job (from the 4 names Ana, Ben, Cai, Dee)?", "answer": 3, "tolerance": 0, "explain": "Ben, Cai and Dee: 3."}}}
  - {"check": {"type": "question", "q": "Two names are drawn from Ana, Ben, Cai and Dee, and the first is not put back. What is the number of outcomes where Ana gets both jobs?", "options": ["0", "1", "4", "3"], "answer": 0, "feedback": [null, "Ana can't be drawn again once she is out.", "That would be if the names were put back, and only one of those would be Ana twice.", "That is the number of outcomes with Ana first."], "explain": "None: once Ana is out of the hat she cannot be drawn again."}}
  - {"check": {"type": "bug", "code": "working.txt#priya", "text": "Priya finds how many outcomes there are when 2 of 5 names are drawn for two jobs, with nothing put back. Click the line where she goes wrong.", "answer": 2, "fault": "logic", "misconception": "replace-forgotten", "explain": "Line 2: the first name is not put back, so the second job has only 4 names to choose from. 5 × 4 = 20, not 5 × 5."}}
```

### Count the draws

```worked
\text{4 names, first not put back} :: A draw with no put-back.
4 \times 3 = 12 \text{ outcomes} :: 4 choices, then 3 left.
P(\text{Ana first, then Ben}) = \tfrac{1}{12} :: One of the 12 equally likely outcomes.
```

### Both jobs the same

### Find the mistake

## Modify: back in or out

```step
stage: "modify"
insight: "Setting the same draw with and without put-back side by side shows the count and the chance both change."
try: {"playground": "board", "starter": "b.yml#run", "height": 620}
tasks:
  - {"starter": "b.yml#with", "check": {"type": "board", "text": "The names ARE put back. Choose every outcome where the same name is drawn twice.", "when": "r = 1", "explain": "AnaAna, BenBen, CaiCai, DeeDee: 4 of 16."}}
  - {"starter": "b.yml#run", "check": {"type": "board", "text": "Names NOT put back. Choose every outcome where Ben gets the second job.", "when": "r = 1", "explain": "Ana, Cai or Dee first, then Ben: 3 of 12."}}
  - {"type": "question", "q": "For 4 names, which draw has more outcomes?", "options": ["Putting the first name back (16)", "Not putting it back (12)", "They have the same", "It depends on the names"], "answer": 0, "feedback": [null, "12 is the smaller count.", "Putting it back leaves 4 choices each time.", "The names don't matter, only how many there are."], "explain": "With put-back: 4 × 4 = 16. Without: 4 × 3 = 12."}
```

### Same name twice

### Ben second

### Which has more

## Practise: draws with and without put-back

```step
stage: "practise"
insight: "Counting draws of two from a group both ways, plus a review of the Venn diagram."
tasks:
  - {"check": {"type": "number", "q": "8 people are in a group and 2 of them get a prize each, in order, with no repeat. How many ordered outcomes are there?", "answer": 56, "tolerance": 0, "explain": "8 × 7 = 56."}}
  - {"check": {"type": "number", "q": "8 people are in a group. 3 are from your table. How many ordered outcomes have both prize winners from your table?", "answer": 6, "tolerance": 0, "explain": "3 × 2 = 6 (the first from the 3, the second from the 2 left)."}}
  - {"check": {"type": "number", "q": "Review: 30 students, 18 play netball, 10 play hockey, 4 play both. How many play neither?", "answer": 6, "tolerance": 0, "explain": "14 + 4 + 6 = 24 play something, so 30 − 24 = 6."}}
```

### Ordered prizes

### Both from your table

### Review

## Make: back to the hat

```step
stage: "make"
insight: "Returning to the opening: the chance both names come from your table, found by counting outcomes on paper."
check: {"type": "reasoning", "paper": true, "q": "25 names are in the hat and 5 are from your table. Two names are drawn for two jobs and the first is not put back. What is the probability both come from your table? (Give a decimal to 3 places. The class size is made up for the task.)", "steps": [["All outcomes: $25 \\times 24 = 600$", "first has 25 choices, second 24"], ["Both from your table: $5 \\times 4 = 20$", "5 for the first, 4 left for the second"], ["$20 \\div 600 = 0.033$", "favourable over all"]], "answer": "0.033", "answerLabel": "Probability", "tolerance": 0.001, "feedback": [["0.04", "That puts the first name back: 5 × 5 over 25 × 25 = 0.04. The first name stays out."], ["0.8", "That is 20 ÷ 25. Divide by all 600 outcomes."]], "criteria": ["I counted the outcomes with the first name removed.", "I counted the table outcomes the same way.", "I divided favourable by all."], "explain": "20 of 600 = 1/30, about 0.033. With the name put back it would be 0.04: a bit higher, because the same person could win twice."}
```

Compare with putting the name back: would the chance of both from your table go up or down?

**Also used in**

- **Card games.** Cards are dealt and not put back, so each card changes what is left.
- **Quality checks.** A tester pulls two items from a box without putting them back, and the chance of a faulty second depends on the first.
- **Next lesson.** Giving every outcome a probability and checking they add to 1.
