---
order: 1
unit: decimals
node: AC9M8N03 n1
title: Recurring decimals
summary: "Dividing a fraction out gives a decimal that either stops (terminates) or repeats a block of digits forever (recurs). In long division, a remainder of 0 means it stops; a remainder that comes back means it repeats. A bar or dots mark the repeating digits."
language: maths
voice: { name: af_heart, speed: 1.1 }
hook: "Type 1 ÷ 7 into a calculator and the screen fills up. Does it ever stop? Long division can tell you, and it does not need a bigger screen."
connection: split-bill
app:
  command: node "$REPO_ROOT/tools/serve.mjs" "$REPO_ROOT/dist/_playground-board" 8310
  url: http://127.0.0.1:8310/index.html
  readySelector: "#gsum"
  layout: full
explainPicture: { ref: divide.yml#explain-pic, caption: "1 ÷ 7: the remainders go 3, 2, 6, 4, 5, then 1 again, so 142857 repeats forever." }
explainClip:
  query: { code: "@divide.yml#explain", fresh: 1, id: explain }
  caption: "Stops or repeats"
  say: "Watch the remainders."
  clip:
    - caption: { text: "1 ÷ 6: the remainder 4 keeps coming back, so the 6 repeats.", say: "One divided by six. The remainder four keeps coming back." }
    - wait: 1500
    - caption: { text: "1 ÷ 8: the remainder reaches 0, so it stops.", say: "One divided by eight. The remainder reaches zero, so it stops." }
    - click: Make the denominator bigger
    - click: Make the denominator bigger
    - expect: { selector: "#gsum", contains: "0.125" }
    - wait: 1600
---
A fraction is a division: $\frac{3}{8} = 3 \div 8$. Doing the division gives a decimal that does one of two things:

- it **terminates** (stops): $\frac{3}{8} = 0.375$;
- it **recurs** (repeats a block of digits forever): $\frac{2}{9} = 0.222\ldots$, $\frac{1}{7} = 0.142857142857\ldots$

Long division shows why. Each step has a **remainder**, and the remainder is always less than the denominator. If a remainder is 0, the decimal stops. If not, a remainder must come back sooner or later, and from then on the same digits repeat.

The repeating block is marked with a **bar** over it, or **dots** over its first and last digits: $0.\overline{142857}$ or $0.\dot{1}4285\dot{7}$; $0.1\overline{6}$ or $0.1\dot{6}$ means $0.1666\ldots$

## Predict: one third

```step
stage: predict
insight: "Committing to whether 1/3 stops shows whether they think a long decimal on a screen is the whole number."
check:
  type: predict
  q: "Does the decimal for 1/3 ever stop?"
  options: ["No: the 3s go on forever", "Yes: 0.33", "Yes, after about 10 digits"]
  actual: "No. Every step of 1 ÷ 3 leaves a remainder of 1, so every digit is 3, forever. 0.33 is an approximation."
```

Try dividing 1 by 3 on paper for a few steps. What remainder do you keep getting?

## Run: divide it out

```step
stage: run
insight: "Watching the remainders for several fractions shows the two outcomes: a remainder of 0, or a remainder that comes back."
try: { playground: board, starter: "divide.yml#run", height: 640 }
check: { type: board, text: "Try 1/3, 1/8 and 1/7. Find a fraction whose repeating block is 6 digits long. Was your prediction right?", when: "p = 6", explain: "1/7 = 0.142857142857…: the remainders 1, 3, 2, 6, 4, 5 come round again." }
```

Change the numerator a and the denominator b. Watch the remainder column.

## Investigate: why it repeats

```step
stage: investigate
insight: "Remainders must repeat because there are fewer of them than the denominator; recurring decimals are still fractions (Zoe calls one irrational); notation marks the block."
tasks:
  - check:
      type: question
      q: "How should 0.272727… be written with a bar?"
      options: ["A bar over 27: 0.27 with the bar over both digits", "A bar over 2 only", "A bar over the last 7 only", "0.27 with no bar"]
      answer: 0
      feedback: [null, "Both digits repeat.", "The 2 repeats too.", "0.27 stops; 0.2727… does not."]
      explain: "The repeating block is 27, so the bar goes over both digits."
  - check:
      type: bug
      code: "working.txt#zoe"
      text: "Zoe decides whether 1/7 is a rational number (a fraction). Click the line where her reasoning goes wrong."
      answer: 4
      fault: logic
      misconception: recurring-is-irrational
      explain: "Line 4: 1/7 is a fraction, so it is rational. Its decimal never stops, but it repeats (142857). Only a decimal that never stops and never repeats is irrational."
  - check:
      type: number
      q: "Divide 1 by 11 (on paper, or on the Run board above). How many digits are in its repeating block?"
      answer: 2
      tolerance: 0
      explain: "1/11 = 0.090909…: the block 09 repeats."
```

### Notation

Here is the routine.

```worked
1 \div 6 :: Bring down a 0: 10 ÷ 6 = 1 remainder 4.
40 \div 6 = 6 \text{ r } 4 :: Remainder 4 again.
\tfrac{1}{6} = 0.1\overline{6} :: The 6 repeats forever; the 1 does not.
\tfrac{1}{8} = 0.125 :: A remainder of 0: it stops.
```

### Find the mistake

Read Zoe's working. Does 1/7's decimal repeat?

### Eleven

## Modify: stop, repeat, delay

```step
stage: modify
insight: "Finding fractions with a set kind of decimal: one that stops after 3 places, one with a delay before the repeat, a long block, and why 0.999… = 1."
try: { playground: board, starter: "divide.yml#free", height: 640 }
tasks:
  - starter: "divide.yml#free"
    hint: ["Try denominators 2, 4, 8.", "1/8 = 0.125."]
    check: { type: board, text: "Find a fraction whose decimal stops after exactly 3 decimal places.", when: "t = 1 and d = 3", explain: "For example 1/8 = 0.125, or 3/8, 5/8, 1/40." }
  - starter: "divide.yml#free"
    hint: "Try sixths and twelfths."
    check: { type: board, text: "Find a fraction with some digits before the repeating block starts.", when: "t = 0 and d > 0", explain: "For example 1/6 = 0.1666…: the 1 comes first, then the 6 repeats." }
  - starter: "divide.yml#free"
    check: { type: board, text: "Divide 1 by 13. How long is its repeating block?", when: "a = 1 and b = 13", explain: "1/13 = 0.076923076923…: a block of 6 digits." }
  - check:
      type: question
      q: "1/3 = 0.333…, so 3 × 1/3 = 0.999… What does that tell you?"
      options: ["0.999… is exactly 1", "0.999… is a little less than 1", "1/3 is not really 0.333…", "Multiplying recurring decimals does not work"]
      answer: 0
      feedback: [null, "There is no number between 0.999… and 1.", "It is exactly 0.333…", "It works: 3 × 0.333… = 0.999…"]
      explain: "3 × 1/3 = 1, and 3 × 0.333… = 0.999…, so they are the same number."
```

### Stops after 3 places

### A delay

### Thirteenths

### 0.999…

## Practise: recurring decimals

```step
stage: practise
insight: "Classifying, block lengths and notation, mixed; calling a recurring decimal irrational is the planted slip; the conversion review keeps fractions as decimals fresh."
tasks:
  - check:
      type: question
      q: "Which fraction has a terminating decimal?"
      options: ["3/8", "1/3", "2/7", "5/6"]
      answer: 0
      feedback: [null, "1/3 = 0.333…", "2/7 = 0.285714…", "5/6 = 0.8333…"]
      explain: "3/8 = 0.375: it stops."
  - check:
      type: number
      q: "How many digits are in the repeating block of 1/7?"
      answer: 6
      tolerance: 0
      explain: "1/7 = 0.142857142857…: 6 digits."
  - check:
      type: question
      q: "How is 0.1666… written with a dot?"
      options: ["0.16 with a dot over the 6", "0.16 with dots over the 1 and the 6", "0.16 with a dot over the 1", "0.17"]
      answer: 0
      feedback: [null, "The 1 does not repeat.", "Only the 6 repeats.", "That is rounded, not exact."]
      explain: "Only the 6 repeats: a dot over the 6."
    smaller:
      check: { type: question, q: "In 0.1666…, does the 1 ever come round again?", options: ["No: it only appears once", "Yes: it keeps coming back"], answer: 0, feedback: [null, "Read the digits again: 1, then 6, 6, 6… The 1 appears once."], explain: "The 1 appears once, at the start. Only the 6 comes round and round." }
  - check:
      type: number
      q: "Review: write 3/4 as a decimal."
      answer: 0.75
      tolerance: 0
      explain: "3 ÷ 4 = 0.75."
```

### Stops or repeats

### Sevenths

### Dot notation

### Review: fractions to decimals

## Make: a two-digit block

```step
stage: make
insight: "Searching for a fraction with a given block length uses the board to test predictions about denominators."
try: { playground: board, starter: "divide.yml#free", height: 640 }
hint: ["Elevenths have a block of 2.", "Try a denominator that is a multiple of 11."]
check: { type: board, text: "Find a fraction with a repeating block of 2 digits and a denominator bigger than 11.", when: "p = 2 and b > 11", explain: "For example 1/22 = 0.0454545…, or 1/33 = 0.030303… if the board went that far." }
```

Then write your fraction's decimal with a bar over the repeating block.

## Make: the spare cent, on paper

```step
stage: make
insight: "Long division of 94 by 3 shows the remainder 1 coming back, so the 3 repeats forever. That is why a bill cannot be split exactly."
hint: ["Divide 94 by 3: 31 remainder 1.", "Bring down a 0 and look at the remainder."]
check:
  type: reasoning
  paper: true
  q: "Three friends split a \\$94 bill evenly. Divide 94 by 3 by long division on paper. What digit repeats forever?"
  steps:
    - ["$94 \\div 3 = 31$ remainder 1", "$3 \\times 31 = 93$, and 1 is left"]
    - ["Bring down a 0: $10 \\div 3 = 3$ remainder 1", "the remainder is 1 again"]
    - ["The remainder 1 has come back, so the 3 repeats forever: $94 \\div 3 = 31.\\overline{3}$", "a remainder that comes back means the digits repeat"]
    - ["Rounded to the cent, each pays \\$31.33, and $3 \\times \\$31.33 = \\$93.99$ is a cent short", "a rounded value is not the exact amount"]
  picks:
    - step: 3
      q: "How do you know the 3s never stop?"
      options:
        - "The remainder 1 has come round again, so the same step happens again"
        - "The calculator screen shows lots of 3s"
        - "94 does not divide by 3 exactly"
      answer: 0
      feedback: [null, "A screen only shows so many digits. The remainder is the proof.", "True, but 94 ÷ 3 could still stop later. A remainder that comes back is what makes it repeat."]
  answer: "3"
  tolerance: 0
  feedback:
    - ["1", "That is the remainder, which keeps coming back. The digit in the answer is the 3."]
    - ["33", "That is the cents. One digit repeats."]
  criteria:
    - "I wrote the remainder at every step."
    - "I said the remainder came back, not just that the 3s kept going."
    - "I used a bar or dots to show the repeating digit."
  explain: "94 ÷ 3 = 31 r 1, then 10 ÷ 3 = 3 r 1, again and again. The remainder 1 keeps coming back, so 3 repeats: 31.333… = 31.3 with a bar over the 3."
```

Do this one in your book, not on the screen. The bill is made up for the task. Divide on paper, watch the remainder, write the answer with a bar, and type the repeating digit.

**Also used in**

- **Shopping.** Splitting a bill three ways never comes out in whole cents.
- **Next.** Which fractions stop and which repeat, without dividing.
