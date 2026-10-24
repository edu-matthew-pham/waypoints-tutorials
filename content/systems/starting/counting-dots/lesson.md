---
order: 4
unit: numbers
node: AC9TDI6K04 n2
title: Counting dots
summary: "Dot cards turn switches into numbers. Each card has double the dots of the card on its right: 1, 2, 4, 8 and so on. Turn some face up and add their dots to get the number. Seven cards can make 65, the code for the letter A, so a letter is stored as switches too."
language: maths
voice: { name: af_heart, speed: 1.1 }
hook: "The letter A is stored as 65, and 65 is stored with switches. How do on and off make 65?"
app:
  command: node "$REPO_ROOT/tools/serve.mjs" "$REPO_ROOT/dist/_playground-board" 8551
  url: http://127.0.0.1:8551/index.html
  readySelector: ".bcard"
  layout: full
explainPicture: { ref: dots.yml#explain-pic, caption: "Cards with 8, 4, 2 and 1 dots. The 8 and the 2 are face up: 8 + 2 = 10 dots, written 1010." }
---
Each card has dots on it. From the right, the cards have 1, 2, 4 and 8 dots: each card has double the one on its right. The number is the dots on the cards that are face up, added together.

## Predict: how many dots?

```step
stage: predict
insight: "Committing to a total tests the new move: add only the dots on the face-up cards."
check:
  type: predict
  q: "Four cards have 8, 4, 2 and 1 dots. The 4 card and the 1 card are face up. How many dots can you see?"
  options: ["5", "2", "41", "4"]
  actual: "5. Add the face-up cards: 4 + 1 = 5."
```

## Try: show 5

```step
stage: run
insight: "Making 5 on the cards settles the prediction: the 4 and the 1 card."
try: { playground: board, starter: "dots.yml#run", height: 440 }
check: { type: board, text: "Turn up the cards you need to show 5 dots.", when: "n = 5", explain: "4 + 1 = 5, written 0101: the 4 card and the 1 card are on." }
```

Was your guess right?

## Worked example: make 10

```step
stage: investigate
insight: "Building 10 by taking the biggest card that fits, then what's left, models the move. Sam counts cards instead of dots, the mistake planted after the method."
tasks:
  - check:
      type: question
      q: "Which cards show 9?"
      options: ["The 8 and the 1", "The 4, 4 and 1", "The 9 card", "The 8, 2 and 1"]
      answer: 0
      feedback: [null, "There's only one 4 card.", "There's no 9 card: make it from the others.", "8 + 2 + 1 is 11."]
      explain: "Take the biggest card that fits: 8. Then 1 more: the 1 card."
  - check:
      type: bug
      code: "working.txt#sam"
      text: "Sam reads the pattern 1000. Click the line where it first goes wrong."
      answer: 3
      fault: logic
      misconception: binary-place-reversed
      explain: "Line 3: the left-hand card is the 8 card. 1000 shows 8 dots, not 1."
  - check:
      type: number
      q: "All four cards are face up. How many dots?"
      answer: 15
      explain: "8 + 4 + 2 + 1 = 15: the most four cards can show."
```

### 10 on four cards

```worked
10 :: The number to make.
8 :: The biggest card that fits in 10. Turn it up: 2 left.
4 :: Too big for 2: leave it down.
2 :: Fits exactly: turn it up. Nothing left.
1010 :: The 8 and the 2 are up, the 4 and the 1 are down.
```

Now: which cards show 9?

### Find the mistake

### All four up

## Vary: other numbers

```step
stage: modify
insight: "Each task changes the number, then the cards: 10, the biggest four cards can make, then the letter A with seven cards."
try: { playground: board, starter: "dots.yml#modify", height: 440 }
tasks:
  - starter: "dots.yml#modify"
    check: { type: board, text: "Show 10 dots.", when: "n = 10", explain: "8 + 2: 1010." }
  - starter: "dots.yml#modify"
    check: { type: board, text: "Show 12 dots.", when: "n = 12", explain: "8 + 4: 1100." }
  - starter: "dots.yml#letter"
    check: { type: board, text: "Seven cards go up to the 64 card. The letter A is stored as 65. Show 65.", when: "n = 65", explain: "64 + 1: the 64 card and the 1 card. That pattern, 1000001, is how A is stored." }
```

### 10

### 12

### The letter A

## Practise: dots

```step
stage: practise
insight: "Reading a total, the next card's dots, and a review of letter codes."
tasks:
  - check:
      type: number
      q: "The 8, the 2 and the 1 card are face up. How many dots?"
      answer: 11
      explain: "8 + 2 + 1 = 11."
  - check:
      type: number
      q: "The cards go 1, 2, 4, 8. How many dots does the next card have?"
      answer: 16
      explain: "Double 8: 16."
  - check:
      type: number
      q: "Review: A is 65. What number is the letter B?"
      answer: 66
      explain: "One more than A: 66, which is 64 + 2 on the cards."
```

### Total

### Next card

### Review: B

## Make: store a letter

```step
stage: make
insight: "Storing H with the number hidden reverses the move: students start from the code and choose the cards."
try: { playground: board, starter: "dots.yml#make", height: 440 }
hint: ["H is 72. Which is the biggest card that fits in 72?", "64 fits. What's left?", "72 is 64 + 8."]
check: { type: board, text: "The letter H is stored as 72. Turn up the cards that make 72. (The total is hidden: count the dots yourself.)", when: "n = 72", explain: "64 + 8 = 72: 1001000. H is stored as those seven switches." }
```

Then: store the first letter of your name. Which cards did you use?
