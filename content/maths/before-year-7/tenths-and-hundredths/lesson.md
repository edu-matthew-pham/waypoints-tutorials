---
title: "Tenths and hundredths"
summary: "A tenth is one of ten equal parts and a hundredth is one of a hundred. A decimal is a number of tenths, hundredths and so on. A longer decimal is not always a bigger one."
language: maths
shape: primer
unit: parts
order: 1
node: [AC9M4N01 n1, AC9M4N01 n2]
hook: "Is 0.15 bigger than 0.5? The 15 looks bigger, but is it?"
---
A **tenth** is one part when you share a whole into 10 equal parts. A **hundredth** is one part when you share it into 100. Decimals write these parts after a point: $0.3$ is 3 tenths, and $0.03$ is 3 hundredths.

## Think first

```step
stage: predict
insight: "Many students think a longer decimal is a bigger one, because 15 is more than 5. Tenths are much bigger than hundredths."
check:
  type: predict
  q: "Which is bigger, 0.15 or 0.5?"
  options: ["0.5","0.15","They are the same","You cannot tell"]
  actual: "0.5. It is 5 tenths, which is the same as 50 hundredths. 0.15 is only 15 hundredths."
```

Lock in a guess before you read on.

## Try it

```step
stage: run
insight: "Shading the hundred squares to match tenths shows that 3 tenths is the same as 30 hundredths."
try: { playground: board, starter: "boards.yml#grid", height: 420 }
check: { type: board, text: "The top bar shows 3 tenths. Shade the same amount on the grid of hundred squares.", when: "e = 1" }
hint: ["The top bar has 10 parts and 3 are shaded. The grid has 100 squares.","One tenth is 10 squares, so 3 tenths is how many squares?"]
```

The top bar is cut into 10 parts, and 3 are shaded. Use the slider to shade the same amount of the grid. The board writes the amount as a decimal too.

## The idea

```step
stage: investigate
insight: "A tenth is 10 hundredths. Compare decimals by turning them into the same kind of part."
tasks:
  - insight: "The first place after the point counts tenths."
    check:
      type: question
      q: "What is 0.7 as a number of tenths?"
      options: ["7 tenths","70 tenths","7 hundredths","0.7 tenths"]
      answer: 0
      feedback: [null,"70 tenths would be 7 whole ones. 0.7 is less than 1.","7 hundredths is 0.07, which is much smaller.","The 7 is the number of tenths."]
      explain: "0.7 is 7 tenths: 7 of the 10 equal parts of a whole."
  - insight: "A tenth is 10 hundredths."
    check:
      type: answer
      q: "0.3 is the same as how many hundredths?"
      answer: "30"
      feedback:
        - ["3","3 hundredths is 0.03. One tenth is 10 hundredths, so 3 tenths is 3 × 10."]
        - ["300","That is too many. A whole is only 100 hundredths."]
      explain: "1 tenth is 10 hundredths, so 3 tenths is 30 hundredths: 0.3 = 0.30."
  - insight: "Turn both into hundredths to compare."
    check:
      type: question
      q: "Which is bigger, 0.4 or 0.09?"
      options: ["0.4","0.09","They are the same","You cannot tell"]
      answer: 0
      feedback: [null,"0.09 is 9 hundredths. 0.4 is 40 hundredths.","Write both in hundredths: 40 and 9.","You can tell. Write both as hundredths."]
      explain: "0.4 is 40 hundredths and 0.09 is 9 hundredths, so 0.4 is bigger."
```

A **tenth** is 10 **hundredths**, so $0.3 = 0.30$. To compare two decimals, write them with the same kind of part. Having more digits does not make a decimal bigger.

### Counting tenths

### Tenths into hundredths

### Which is bigger?

## Check

```step
stage: practise
insight: "Ordering and converting new decimals."
tasks:
  - check:
      type: question
      q: "Which list goes from smallest to biggest?"
      options: ["0.06, 0.16, 0.6","0.6, 0.16, 0.06","0.16, 0.06, 0.6","0.06, 0.6, 0.16"]
      answer: 0
      feedback: [null,"That is biggest first. It is 6 tenths, then 16 hundredths, then 6 hundredths.","0.16 is bigger than 0.06, so it comes after it.","0.6 is 60 hundredths, which is more than 16 hundredths."]
      explain: "In hundredths they are 6, 16 and 60. Smallest first: 0.06, 0.16, 0.6."
  - check:
      type: answer
      q: "0.8 is the same as how many hundredths?"
      answer: "80"
      feedback:
        - ["8","8 hundredths is 0.08. 0.8 is 8 tenths."]
        - ["800","A whole is 100 hundredths, so 800 is too many."]
      explain: "8 tenths = 80 hundredths."
```

### In order

### Hundredths

## Apply

```step
stage: make
insight: "Explaining the mistake in own words."
check:
  type: reasoning
  q: "Mia says 0.15 is bigger than 0.5 because 15 is bigger than 5. Explain what she has missed."
  placeholder: "Mia has missed that …"
  models:
    - title: "Using hundredths"
      text: "0.5 is 5 tenths, which is 50 hundredths. 0.15 is only 15 hundredths. So 0.5 is bigger. The 5 and the 15 are different sizes of part."
  criteria:
    - "I said 0.5 is tenths and 0.15 has hundredths."
    - "I changed both to the same kind of part, or used a picture."
```

```teacher
summary: "Students see a decimal as a number of tenths and hundredths, and drop the idea that a longer decimal is a bigger one."
time: 17
timing: "Think first 3 min · Try 4 min · The idea 5 min · Check 3 min · Apply 2 min"
goals:
  - "I can say what a tenth and a hundredth are."
  - "I can change tenths into hundredths."
  - "I can say which of two decimals is bigger and why."
before: |
  The one idea: tenths and hundredths are parts of a whole, and a tenth is 10 hundredths. The common mistake is that 0.15 is bigger than 0.5 because 15 is bigger than 5. The Think first question meets it.
  
  The board is the fraction bar and hundred grid from the Year 7 lesson *Fractions, decimals and percentages*. Use it here only to see 3 tenths shade 30 squares.
  
  If students are shaky, hold up a 10 by 10 grid and shade one row for one tenth.

  Not yet tried with a class.
running:
  - "Think first: ask students to say it aloud as \"fifteen hundredths\" and \"five tenths\"."
  - "Try: ask how many squares one tenth shades."
  - "Apply: look for answers that change both to hundredths."
struggle: "Reading 0.15 as \"zero point fifteen\" hides its size. Say \"15 hundredths\"."
stuck:
  - see: "A student says 0.15 is bigger because 15 is bigger."
    ask: "How many hundredths is 0.5?"
    fix: "It is 50 hundredths, so 0.5 is bigger than 15 hundredths."
  - see: "A student says 0.3 is 3 hundredths."
    ask: "Which place is the 3 in?"
    fix: "It is in the tenths place, so 3 tenths, which is 30 hundredths."
exit:
  q: "Which is bigger, 0.7 or 0.07, and how do you know?"
  a: "0.7 is bigger. It is 7 tenths, or 70 hundredths, and 0.07 is only 7 hundredths."
leads: |
  Leads into Year 7 Number: *Fractions, decimals and percentages*, *Rounding* and *Expanded notation*.
```
