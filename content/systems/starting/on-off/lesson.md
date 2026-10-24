---
order: 3
unit: numbers
node: AC9TDI6K04 n1
title: On or off
summary: "Inside a computer are tiny switches that can only be on or off. On is written 1 and off is 0. One switch makes 2 patterns, two make 4, three make 8: every switch you add doubles the patterns. Patterns of switches are how a computer stores numbers."
language: maths
voice: { name: af_heart, speed: 1.1 }
hook: "Inside a computer there are billions of tiny switches, and each one can only be on or off. How can that store a number, or a letter?"
app:
  command: node "$REPO_ROOT/tools/serve.mjs" "$REPO_ROOT/dist/_playground-board" 8550
  url: http://127.0.0.1:8550/index.html
  readySelector: ".bcard"
  layout: full
explainPicture: { ref: switches.yml#explain-pic, caption: "Three cards as switches: on, off, on, written 1 0 1. Three switches can make 8 different patterns." }
---
A switch is either on or off: nothing in between. On is written **1** and off is written **0**. Each card on the board is one switch: face up is on, face down is off.

## Predict: two switches

```step
stage: predict
insight: "Committing to a number of patterns tests the new move: list every pattern, including all off."
check:
  type: predict
  q: "One switch can be on or off: that's 2 patterns. How many different patterns can two switches make?"
  options: ["4", "2", "3", "1"]
  actual: "4: off off, off on, on off and on on. All off is a pattern too."
```

## Try: find every pattern

```step
stage: run
insight: "Flipping two cards through every pattern settles the prediction; ending on both up confirms the last one."
try: { playground: board, starter: "switches.yml#run", height: 420 }
check: { type: board, text: "Flip the cards to make every pattern you can. Count them as you go. Finish with both cards face up.", when: "c = 2", explain: "00, 01, 10, 11: four patterns from two switches." }
```

Was your guess right?

## Worked example: three switches

```step
stage: investigate
insight: "Listing three switches' patterns by adding a switch to each two-switch pattern models the move: each switch doubles the patterns. Sam skips all off, the mistake planted after the method."
tasks:
  - check:
      type: question
      q: "A card is face up. What does the computer write for it?"
      options: ["1", "0", "On", "Up"]
      answer: 0
      feedback: [null, "0 is off: face down.", "It writes a digit.", "It writes a digit."]
      explain: "On (face up) is 1. Off (face down) is 0."
  - check:
      type: bug
      code: "working.txt#sam"
      text: "Sam counts the patterns for two switches. Click the line where it first goes wrong."
      answer: 3
      fault: logic
      misconception: binary-max-forgets-zero
      explain: "Line 3: off, off is a pattern too. The computer uses it (it means 0), so two switches make 4 patterns."
  - check:
      type: number
      q: "How many patterns can three switches make?"
      answer: 8
      explain: "Take the 4 patterns for two switches. The new switch can be off or on for each one: 4 + 4 = 8."
```

### Three switches

```worked
00,\ 01,\ 10,\ 11 :: Two switches: 4 patterns.
000,\ 001,\ 010,\ 011 :: A third switch, off, in front of each one.
100,\ 101,\ 110,\ 111 :: The third switch on, in front of each one.
4 + 4 = 8 :: Three switches: 8 patterns. Each switch you add doubles them.
```

Now: what does face up mean?

### Find the mistake

### Three switches

## Vary: add switches

```step
stage: modify
insight: "Each task adds a switch or sets one pattern, so doubling is seen, not told."
try: { playground: board, starter: "switches.yml#modify", height: 440 }
tasks:
  - check: { type: board, text: "Press Add a card until there are three cards.", when: "b = 3", explain: "Three switches: 8 patterns, from 000 to 111." }
  - check: { type: board, text: "With three cards, make the pattern on, off, on (left to right).", when: "b = 3 and n = 5", explain: "1 0 1." }
  - check:
      type: number
      q: "Add one more card in your head. How many patterns can four switches make?"
      answer: 16
      explain: "Double 8: 16."
```

### Three cards

### On, off, on

### Four switches

## Practise: switches

```step
stage: practise
insight: "Reading patterns as 1s and 0s, doubling, and why computers use switches at all."
tasks:
  - check:
      type: question
      q: "Four cards are face up, down, down, up. How does the computer write that?"
      options: ["1001", "0110", "2", "up down down up"]
      answer: 0
      feedback: [null, "That's the other way round: up is 1.", "That's how many are up. The computer writes every switch.", "It writes 1s and 0s."]
      explain: "Up is 1, down is 0: 1001."
  - check:
      type: number
      q: "How many patterns can five switches make?"
      answer: 32
      explain: "2, 4, 8, 16, 32: double once for each switch."
  - check:
      type: question
      q: "Why are a computer's switches only on or off, not ten different settings?"
      options: ["On and off are easy to tell apart, even when the signal is weak", "Ten settings would be too slow to type", "Computers can't count past 2", "Switches are cheaper than numbers"]
      answer: 0
      feedback: [null, "Speed of typing isn't it.", "They count far higher, using many switches.", "Every number is stored with switches."]
      explain: "On or off is hard to get wrong. Lots of switches together make any number."
```

### Read the pattern

### Five switches

### Why on and off

## Make: a secret signal

```step
stage: make
insight: "Setting a pattern from its 1s and 0s reverses the move: students turn the written pattern into switches."
try: { playground: board, starter: "switches.yml#make", height: 420 }
hint: ["1 means face up and 0 means face down.", "Read the signal left to right, one card at a time."]
check: { type: board, text: "Your secret signal is 0110. Set the four cards to it.", when: "b = 4 and n = 6", explain: "Down, up, up, down: 0110." }
```

Then: with your partner, make up a code where each pattern of three cards means something (8 messages). What would you choose?
