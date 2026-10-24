---
order: 6.5
unit: binary
optional: true
node: AC9TDI8K04 n1
introduces: [hex]
assumes: [binary, bit-patterns]
title: "Hex: binary in fours"
summary: "Hexadecimal (hex) has sixteen digits, 0 to 9 then A to F (10 to 15). One hex digit is exactly four bits, so a byte is always two hex digits: 1010 0011 is A3. It's a short way to write binary, used for web colours, memory addresses and error codes. Like binary, it's a public rule, not a secret."
language: maths
voice: { name: af_heart, speed: 1.1 }
hook: "Web colours look like #FF8800 and error codes like 0x1F. Why do programmers write numbers with letters in them?"
app:
  command: node "$REPO_ROOT/tools/serve.mjs" "$REPO_ROOT/dist/_playground-board" 8547
  url: http://127.0.0.1:8547/index.html
  readySelector: ".bcard"
  layout: full
explainPicture: { ref: hex.yml#explain-pic, caption: "Eight cards in two groups of four: 1010 is 10, written A; 0011 is 3. The byte is A3 in hex, 163 in decimal." }
explainClip:
  query: { code: "@hex.yml#explain", fresh: 1, id: explain }
  caption: "Counting in hex"
  say: "Count up on the right-hand group of four."
  clip:
    - caption: { text: "The right-hand four cards make one hex digit. Count up past 9.", say: "The right-hand four cards make one hex digit." }
    - click: Count up one
    - click: Count up one
    - click: Count up one
    - click: Count up one
    - click: Count up one
    - click: Count up one
    - click: Count up one
    - click: Count up one
    - click: Count up one
    - click: Count up one
    - expect: { selector: "#gsum", contains: "0A" }
    - caption: { text: "Ten is written A: one digit for four bits.", say: "Ten is A. Hex needs one digit for every value four bits can make." }
    - wait: 1200
    - click: Count up one
    - click: Count up one
    - click: Count up one
    - click: Count up one
    - click: Count up one
    - click: Count up one
    - expect: { selector: "#gsum", contains: "10" }
    - caption: { text: "Past F (15), the right group goes back to 0 and the next group counts 1: hex 10 is 16.", say: "After F, the next group starts counting. Hex one zero is sixteen." }
    - wait: 1600
---
Binary needs a lot of digits: 255 is 11111111. Programmers write it shorter, in a way that still shows the bits.

## Predict: what is FF?

```step
stage: predict
insight: "Committing to a value for FF tests the new move: two hex digits stand for two groups of four bits."
check:
  type: predict
  q: "In the web colour #FF8800, each pair of characters is one number from 0 to 255. What number is FF?"
  options: ["255", "1515", "30", "It isn't a number: F is a letter"]
  actual: "255. Each F is four bits all on (1111, which is 15), so FF is eight bits all on: 11111111, 255."
```

## Try: every card up

```step
stage: run
insight: "Turning all eight cards up settles the prediction: each group of four shows F, and the number is 255."
try: { playground: board, starter: "hex.yml#run", height: 460 }
check: { type: board, text: "Turn every card face up. What does the hex under each group of four say?", when: "n = 255", explain: "Each group of four is 8 + 4 + 2 + 1 = 15, which hex writes as F. FF is 255: two digits instead of eight." }
```

Was your prediction right? Now flip the left-hand group down. What's left?

## Worked example: four bits, one digit

```step
stage: investigate
insight: "Reading groups of four as single digits, then a byte as two digits, models the new move. Sam joins the digits like decimal, the misconception planted after the method."
tasks:
  - check:
      type: answer
      q: "Hex digits go 0 to 9, then A, B, C, D, E, F for 10 to 15. What number is hex B?"
      answer: "11"
      feedback:
        - ["2", "B is the second letter, but the letters start after 9: A is 10."]
        - ["12", "Count on from A = 10: B is one more."]
      explain: "A is 10, so B is 11."
  - check:
      type: bug
      code: "working.txt#sam"
      text: "Sam reads a hex number. Click the line where it first goes wrong."
      answer: 3
      fault: logic
      misconception: hex-digits-joined
      explain: "Line 3: in hex, the left digit counts sixteens, not tens. 1F is 1 × 16 + 15 = 31, which is 0001 1111 in binary."
  - check:
      type: question
      q: "Write the byte 0011 1100 in hex."
      options: ["3C", "60", "C3", "312"]
      answer: 0
      feedback: [null, "60 is right in decimal. In hex, write each group of four as one digit.", "Keep the groups in order: 0011 first.", "1100 is 12, which is one hex digit: C."]
      explain: "0011 is 3 and 1100 is 12, written C: 3C."
```

### A byte, two digits

```worked
0\text{–}9,\ A\text{–}F :: Sixteen digits: A is 10, B 11, C 12, D 13, E 14, F 15.
0000 \text{ to } 1111 :: Four bits make 16 patterns, 0 to 15: exactly one hex digit.
1010\ 0011 \to A\ 3 :: Split a byte into two groups of four and write each as one digit: A3.
A3 = 10 \times 16 + 3 = 163 :: The left digit counts sixteens, the right digit ones.
\text{why bother?} :: Two hex digits always make one byte, so hex is binary made short, and you can still see the bits.
```

Now read hex B.

### Find the mistake

### Byte to hex

## Vary: make the hex

```step
stage: modify
insight: "Each task gives a hex number and students set the bits: one group at a time, then both."
try: { playground: board, starter: "hex.yml#modify", height: 460 }
tasks:
  - check: { type: board, text: "Make the hex read 0F.", when: "n = 15", explain: "The right group all up (F), the left all down (0): 0000 1111, 15." }
  - check: { type: board, text: "Now make it read 80.", when: "n = 128", explain: "8 is 1000, and 0 is 0000: only the 128 card is up." }
  - check: { type: board, text: "Make it read A3.", when: "n = 163", explain: "A is 1010 and 3 is 0011: 1010 0011, which is 128 + 32 + 2 + 1 = 163." }
```

### 0F

### 80

### A3

## Practise: hex in the wild

```step
stage: practise
insight: "Reading a web colour, counting hex digits for a byte, hex as a public rule (the CTF's first idea), and a review of binary."
tasks:
  - check:
      type: answer
      q: "In #FF8800, red is FF, green is 88 and blue is 00. What number is the green, 88?"
      answer: "136"
      feedback:
        - ["88", "That's reading it as decimal. The left 8 counts sixteens."]
        - ["16", "That's 8 + 8. The left digit is worth 8 × 16."]
      explain: "8 × 16 + 8 = 136. So #FF8800 is red 255, green 136, blue 0: orange."
  - check:
      type: question
      q: "A message in a file reads 6869. It's hex. Is it hidden from someone who copies the file?"
      options: ["No: hex is a public rule, so anyone can turn it back (68 is h, 69 is i)", "Yes: without a key nobody can read it", "Only from people who don't know binary", "Yes, unless it's longer"]
      answer: 0
      feedback: [null, "Hex has no key: it's a way of writing, like binary.", "Anyone can look the rule up.", "Length makes no difference to a public rule."]
      explain: "Hex is an encoding, not encryption. The Capture the flag course starts here."
  - check:
      type: answer
      q: "Review: what number is the binary 1011?"
      answer: "11"
      feedback:
        - ["1011", "Read it as binary: 8 + 0 + 2 + 1."]
        - ["13", "The 4 card is down: 8 + 2 + 1."]
      explain: "8 + 2 + 1 = 11, which is B in hex."
```

### A web colour

### Hidden?

### Review: binary

## Make: the badge colour

```step
stage: make
insight: "Going from a decimal number to hex reverses the process: students find the sixteens and the ones, then set the bits."
try: { playground: board, starter: "hex.yml#make", height: 460 }
hint: ["How many whole sixteens fit in 200? That's the left digit.", "Twelve sixteens is 192. What's left over is the right digit.", "12 is C. Set the left group to 1100 and the right group to the leftover."]
check: { type: board, text: "The club badge's red value is 200. Set the cards so they hold 200, and read its hex. (The number is hidden: use the hex.)", when: "n = 200", explain: "200 = 12 × 16 + 8: C8, which is 1100 1000." }
```

Then: write your favourite colour as three numbers from 0 to 255, then as hex.
