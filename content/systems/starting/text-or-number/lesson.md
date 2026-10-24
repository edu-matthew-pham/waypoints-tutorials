---
order: 2
unit: numbers
node: AC9TDI6K03 n2
title: Text or number?
summary: "The same keys can make text or a number, and the computer does different things with each. Numbers can be added: 12 and 3 make 15. Text can only be joined: 12 and 3 make 123. So programs store things you'll do maths with as numbers, and things like names and phone numbers as text."
language: maths
voice: { name: af_heart, speed: 1.1 }
hook: "12 and 3 make 15. But a computer can also turn 12 and 3 into 123. How does it know which to do?"
app:
  command: node "$REPO_ROOT/tools/serve.mjs" "$REPO_ROOT/dist/_playground-board" 8549
  url: http://127.0.0.1:8549/index.html
  readySelector: ".dcell"
  layout: full
explainPicture: { ref: typed.yml#explain-pic, caption: "Typed as text, 12 is two characters: the 1 is stored as 49 and the 2 as 50." }
---
When you type 12, the computer has to decide: is it the number twelve, or the two characters 1 and 2?

## Predict: join or add?

```step
stage: predict
insight: "Committing to what joining two pieces of text shows tests the new move: text is joined, not added."
check:
  type: predict
  q: "A form has two text boxes. Ana types 12 in one and 3 in the other. The form joins the two pieces of text together. What does it show?"
  options: ["123", "15", "4", "12 3"]
  actual: "123. Joining text puts one piece after the other. Only numbers get added."
```

## Try: type 12 as text

```step
stage: run
insight: "Typing 12 as text and seeing two codes settles the prediction: as text, 12 is two characters, not the number twelve."
try: { playground: board, starter: "typed.yml#run", height: 440 }
check: { type: board, text: "Type 12 in the box. How many numbers does the computer store for it?", when: "n = 2 and a = 49 and b = 50", explain: "Two: 49 for the character 1 and 50 for the character 2. As text, 12 is two characters in a row, like the letters in a word." }
```

Was your guess right?

## Worked example: same keys, different jobs

```step
stage: investigate
insight: "Doing 12 and 3 both ways models the move. Sam adds two pieces of text, the mistake planted after the method."
tasks:
  - check:
      type: question
      q: "Which can the computer add up to make a total?"
      options: ["12 stored as a number", "12 stored as text", "Both", "Neither"]
      answer: 0
      feedback: [null, "As text, 12 is the characters 1 and 2. The computer can join text, not add it.", "Only one of them is a number.", "Numbers can be added."]
      explain: "Numbers can be added, taken away and sorted by size. Text can be joined and sorted A to Z."
  - check:
      type: bug
      code: "working.txt#sam"
      text: "Sam joins two text boxes. Click the line where it first goes wrong."
      answer: 3
      fault: logic
      misconception: text-numbers-add
      explain: "Line 3: text is stored as codes, but the computer doesn't add text. It joins it, so the box shows 123."
  - check:
      type: question
      q: "Why is a phone number like 0412 345 678 stored as text?"
      options: ["You never add phone numbers, and the 0 at the front must stay", "Phone numbers are too big to be numbers", "Text is faster", "It isn't: it's a number"]
      answer: 0
      feedback: [null, "Size isn't the reason.", "Speed isn't the reason.", "Try adding two phone numbers: the answer means nothing."]
      explain: "As a number, 0412 would lose its 0 and become 412. As text, every character stays."
```

### 12 and 3, two ways

```worked
12 + 3 = 15 :: Stored as numbers: the computer adds them.
\text{12 joined to 3} = \text{123} :: Stored as text: the computer puts one after the other.
\text{"12"} \to 49,\ 50 :: As text, 12 is two characters, each with its own code.
\text{the type decides} :: Number or text: the computer stores which one it is, and that decides what it can do.
```

Now: which can be added?

### Find the mistake

### Phone numbers

## Vary: what happens?

```step
stage: modify
insight: "Each task changes the type or the job: add numbers, join text, then join words."
tasks:
  - check:
      type: number
      q: "5 and 4 are stored as numbers. The computer adds them. What does it show?"
      answer: 9
      explain: "As numbers they add: 5 + 4 = 9."
  - check:
      type: number
      q: "Now 5 and 4 are stored as text. The computer joins them. What does it show?"
      answer: 54
      explain: "As text they join: 5 then 4, which is 54."
  - check:
      type: question
      q: "cat and fish are stored as text. The computer joins them. What does it show?"
      options: ["catfish", "cat + fish", "An error", "8"]
      answer: 0
      feedback: [null, "Joining doesn't add a + sign.", "Joining text always works.", "8 is how many letters, but the computer joins them."]
      explain: "Text joins: catfish."
```

### Add

### Join

### Join words

## Practise: which type?

```step
stage: practise
insight: "Choosing the type from what the program will do with it, and a review of letter codes."
tasks:
  - check:
      type: question
      q: "A game keeps your score and adds 10 every time you win. How should it store the score?"
      options: ["As a number", "As text", "Either works the same", "As a letter"]
      answer: 0
      feedback: [null, "Then it would join: 10 then 10 is 1010.", "Only a number can be added.", "A score is a number."]
      explain: "The game does maths with it, so it's a number."
  - check:
      type: question
      q: "A class list sorts names from A to Z. What type are the names?"
      options: ["Text", "Numbers", "Both", "Neither"]
      answer: 0
      feedback: [null, "Names aren't amounts.", "Names are one type.", "They have to be stored somehow."]
      explain: "Names are text: sorted A to Z by their letter codes, never added."
  - check:
      type: number
      q: "Review: A is 65. What number is the letter F?"
      answer: 70
      explain: "Count on five from 65."
```

### Score

### Names

### Review: codes

## Make: design a sign-up form

```step
stage: make
insight: "Sorting a form's boxes by what the program will do with them reverses the move: students choose the type."
check:
  type: sort
  q: "You're making the sign-up form for the Coding Club. For each box, choose how to store it."
  options: ["Number: we'll do maths with it", "Text: we won't"]
  items:
    - ["How many robots each member built", "Number: we'll do maths with it", "The club adds them up for a total."]
    - ["Member's name", "Text: we won't", "Names are joined and sorted, never added."]
    - ["Parent's phone number", "Text: we won't", "Nobody adds phone numbers, and the 0 at the front must stay."]
    - ["Postcode", "Text: we won't", "It's a label for a place, not an amount."]
    - ["Points earned this term", "Number: we'll do maths with it", "Points get added up."]
    - ["Year level", "Number: we'll do maths with it", "The club works out next year's level by adding 1."]
  explain: "Ask: will the program do maths with it? Then it's a number. If not, text keeps every character just as it was typed."
```

Then: think of a box on a real form. Would a number or text be safer?
