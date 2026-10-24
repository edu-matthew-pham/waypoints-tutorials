---
order: 1
unit: numbers
node: AC9TDI6K03 n1
title: Letters are numbers
summary: "A computer can only store numbers, so every letter has its own number, called its code. Capital A is 65, B is 66, and they go up in order. Small letters have their own codes (a is 97), and so do spaces and digits. A word is stored as a list of codes."
language: maths
voice: { name: af_heart, speed: 1.1 }
hook: "A computer can only store numbers. So how does your phone keep a text message?"
app:
  command: node "$REPO_ROOT/tools/serve.mjs" "$REPO_ROOT/dist/_playground-board" 8548
  url: http://127.0.0.1:8548/index.html
  readySelector: ".dcell"
  layout: full
explainPicture: { ref: letters.yml#explain-pic, caption: "The word CAT stored as three numbers: C is 67, A is 65, T is 84." }
---
Everything inside a computer is a number, even the words you type. So every letter needs a number of its own.

## Predict: what number is D?

```step
stage: predict
insight: "Committing to a code for D tests the new move: each letter has its own number, and capitals go up in order from A = 65."
check:
  type: predict
  q: "A computer stores capital A as 65, B as 66 and C as 67. What number does it store for D?"
  options: ["68", "4", "69", "D can't be a number"]
  actual: "68. The codes go up by one, in alphabet order, starting from A = 65."
```

## Try: type a word

```step
stage: run
insight: "Typing a word and reading its numbers settles the prediction: one number for each letter, in order."
try: { playground: board, starter: "letters.yml#run", height: 440 }
check: { type: board, text: "Type CAB in the box. What numbers does the computer store?", when: "a = 67 and b = 65 and c = 66 and n = 3", explain: "67, 65, 66: one number for each letter, in the same order as the word." }
```

Was your guess right? Now type your own name.

## Worked example: a word as numbers

```step
stage: investigate
insight: "Turning CAT into codes and back models the move. Sam uses alphabet places instead of codes, the mistake planted after the method."
tasks:
  - check:
      type: question
      q: "Small a and capital A: are they stored as the same number?"
      options: ["No: small a has its own code, 97", "Yes: both are 65", "Small letters aren't stored", "Small a is 65 + 1 = 66"]
      answer: 0
      feedback: [null, "Try typing a on the board.", "Everything you type is stored.", "66 is capital B."]
      explain: "Capitals start at 65 and small letters start at 97. The computer treats them as different characters."
  - check:
      type: bug
      code: "working.txt#sam"
      text: "Sam works out how C is stored. Click the line where it first goes wrong."
      answer: 3
      fault: logic
      misconception: code-is-alphabet-place
      explain: "Line 3: C's code isn't its place in the alphabet. The codes start at A = 65, so C is 67."
```

### CAT

```worked
\text{C A T} :: The word, one letter at a time.
\text{C} \to 67 :: A is 65, B is 66, so C is 67.
\text{A} \to 65 :: A is where the capitals start.
\text{T} \to 84 :: T is 19 letters after A: 65 + 19 = 84.
67,\ 65,\ 84 :: That list of numbers is what the computer stores for CAT.
```

Now: is small a the same as A?

### Find the mistake

## Vary: other characters

```step
stage: modify
insight: "Each task types something new: a space, small letters, then a digit, which is a character with its own code too."
try: { playground: board, starter: "letters.yml#modify", height: 440 }
tasks:
  - check: { type: board, text: "Type HI THERE, with a space. What number is the space?", when: "w >= 1", explain: "32. A space is a character too, so it needs a number." }
  - check: { type: board, text: "Type hi in small letters.", when: "a = 104 and b = 105 and n = 2", explain: "104 and 105: small letters start at a = 97, so h is 97 + 7 = 104." }
  - check: { type: board, text: "Type the number 7. What does the computer store?", when: "a = 55 and n = 1", explain: "55. When you type it, 7 is a character, like a letter, so it gets a code: 55." }
```

### A space

### Small letters

### The digit 7

## Practise: codes

```step
stage: practise
insight: "Finding a code by counting on, reading codes back as a word, and counting how many numbers a message needs."
tasks:
  - check:
      type: number
      q: "A is 65. What number is E?"
      answer: 69
      explain: "A, B, C, D, E: count on four from 65."
  - check:
      type: question
      q: "Your friend's phone receives 72, 73. What does it show?"
      options: ["HI", "GH", "72 73", "hi"]
      answer: 0
      feedback: [null, "G is 71.", "The phone turns the codes back into letters.", "Small h is 104."]
      explain: "72 is H and 73 is I."
  - check:
      type: number
      q: "How many numbers does the computer store for the message GO HOME?"
      answer: 7
      explain: "Six letters and one space: seven characters, seven numbers."
```

### E

### Read it back

### Count them

## Make: spell a word

```step
stage: make
insight: "Setting the numbers for a word reverses the move: students start from the letters and work out the codes."
try: { playground: board, starter: "letters.yml#make", height: 440 }
hint: ["Count on from A = 65.", "D is the 4th letter, so it's 3 more than 65.", "O is 14 after A, and G is 6 after A."]
check: { type: board, text: "Change the three numbers so the word says DOG.", when: "a = 68 and b = 79 and c = 71", explain: "D is 68, O is 79, G is 71." }
```

Then: write your name as codes, and swap with a friend. Can they read it?
