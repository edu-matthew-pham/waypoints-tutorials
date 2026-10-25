---
title: "100% is the whole"
summary: "Percent means out of 100. 100% is the whole amount, 50% is half and 25% is a quarter. A percentage is a part of an amount, not a number to take away."
language: maths
shape: primer
unit: parts
order: 5
node: AC9M5N04 n1
assumes: [AC9M5N02]   # earlier node, taught in class
hook: "A phone is at 100% charge. A tank is 50% full. What do the numbers mean?"
---
The word **percent** means "out of 100". So 100% is all of something, 50% is half of it (50 out of 100) and 25% is a quarter of it.

## Think first

```step
stage: predict
insight: "Some students read 50% of 60 as the number 50. A percentage is a share of the amount, not the number itself."
check:
  type: predict
  q: "What is 100% of 60 stickers?"
  options: ["60 stickers","100 stickers","160 stickers","1 sticker"]
  actual: "60 stickers. 100% is the whole amount, so 100% of 60 is all 60."
```

Lock in a guess before you read on.

## Try it

```step
stage: run
insight: "Moving the percentage along the bar shows that 100% is the whole and 50% is half of it."
try: { playground: board, starter: "boards.yml#bar", height: 420 }
check: { type: board, text: "Find 50% of 60 stickers.", when: "v = 30" }
hint: ["50% is half of the bar.","Drag p until the shaded amount is half of 60."]
```

The bar is 60 stickers, from 0% to 100%. Change $p$ and read how many stickers are shaded.

## The idea

```step
stage: investigate
insight: "100% is the whole. 50% is a half and 25% is a quarter, so they can be found by halving."
tasks:
  - insight: "100% is the whole."
    check:
      type: question
      q: "What is 100% of $20?"
      options: ["$20","$100","$120","$2"]
      answer: 0
      feedback: [null,"100 is the percent, not the amount.","Nothing is added. 100% is just the whole.","100% is all of it, not a tenth."]
      explain: "100% of an amount is the whole amount."
  - insight: "50% is half."
    check:
      type: answer
      q: "What is 50% of 80?"
      answer: "40"
      feedback:
        - ["50","50% of 80 is half of 80, not 50."]
        - ["4","That is 5% of 80. Half of 80 is 40."]
      explain: "50% is half, and half of 80 is 40."
  - insight: "25% is a quarter."
    check:
      type: question
      q: "Which fraction is the same as 25%?"
      options: ["1/4","1/25","2/5","1/2"]
      answer: 0
      feedback: [null,"25% is 25 out of 100, which is 1 quarter, not 1 out of 25.","25 out of 100 is 1 out of 4.","1/2 is 50%."]
      explain: "25 out of 100 is one quarter."
```

**Percent** means "out of 100". 100% is the whole, 50% is half and 25% is a quarter. To find 50% of an amount, halve it. For 25%, halve it twice.

### The whole

### Half

### A quarter

## Check

```step
stage: practise
insight: "Using the idea on new amounts."
tasks:
  - check:
      type: answer
      q: "What is 25% of 40?"
      answer: "10"
      feedback:
        - ["25","That is the percent. 25% is a quarter, so divide 40 by 4."]
        - ["20","That is 50%. 25% is half of that."]
      explain: "25% is a quarter. 40 ÷ 4 = 10."
  - check:
      type: answer
      q: "What is 75% of 8?"
      answer: "6"
      feedback:
        - ["75","That is the percent. 75% is 3 quarters of 8."]
        - ["2","That is 25%, one quarter. 75% is 3 quarters."]
      explain: "A quarter of 8 is 2, so 3 quarters is 6."
```

### A quarter

### Three quarters

## Apply

```step
stage: make
insight: "Explaining why 50% is half."
check:
  type: reasoning
  q: "Explain why 50% of any amount is the same as half of it."
  placeholder: "50% is half because …"
  models:
    - title: "Out of 100"
      text: "Percent means out of 100. 50 out of 100 is half of 100. So 50% of any amount is half of it."
  criteria:
    - "I said percent means out of 100."
    - "I said 50 out of 100 is half."
```

```teacher
summary: "Students see 100% as the whole and use 50% and 25% as a half and a quarter, and drop the idea that a percentage is the amount itself."
time: 17
timing: "Think first 3 min · Try 4 min · The idea 5 min · Check 3 min · Apply 2 min"
goals:
  - "I can say what percent means."
  - "I can say 100% is the whole amount."
  - "I can find 50% and 25% of an amount."
before: |
  The one idea: percent means out of 100, so 100% is the whole. The common mistake is that 50% of 60 is 50. The Think first question meets it.
  
  The board is the percentage bar from the Year 7 lesson *Percentages*. Only 50%, 25% and 100% matter here.
  
  A hundred grid or a strip folded into quarters helps.

  Not yet tried with a class.
running:
  - "Think first: ask what 100% of their class is."
  - "Try: ask students to say which percent makes half the bar."
  - "Apply: look for \"out of 100\"."
struggle: "Students may link 50% to the number 50. Say \"50 out of every 100\"."
stuck:
  - see: "A student says 50% of 60 is 50."
    ask: "How much of the 60 is half?"
    fix: "30. The percent tells how much of the whole."
  - see: "A student does not know where to start with 25%."
    ask: "What is 25% as a fraction?"
    fix: "A quarter, so share the amount into 4."
exit:
  q: "What is 50% of 40, and what is 100% of 40?"
  a: "20 and 40."
leads: |
  Leads into Year 7 Number: *Percentages*.
```
