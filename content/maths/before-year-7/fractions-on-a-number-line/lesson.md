---
title: "Fractions on a number line"
summary: "A number line can show fractions between and beyond whole numbers. The bottom number tells you how many equal parts make one whole. Fractions can go past 1, as in 5/4 or 1 1/4."
language: maths
shape: primer
unit: parts
order: 3
node: [AC9M4N04 n1, AC9M4N04 n2]
hook: "You walk 5 quarters of a kilometre. Is that more or less than one kilometre?"
---
Fractions are numbers, so they have a place on a number line. The bottom number says how many equal parts each whole is cut into. The top number says how many of those parts to count from zero.

## Think first

```step
stage: predict
insight: "Students often count the marks instead of the gaps, or stop at 1. Count equal parts from zero, and keep going past one whole."
check:
  type: predict
  q: "A number line from 0 to 1 is cut into 4 equal parts. Where is 3/4?"
  options: ["3 parts along from 0","Halfway between 0 and 1","3 whole steps from 0","At 4"]
  actual: "3 parts along from 0. Each part is a quarter, so you count 3 quarters. It is the mark just before 1."
```

Lock in a guess before you read on.

## Try it

```step
stage: run
insight: "Moving a point in quarters past 1 shows that a fraction can be bigger than a whole."
try: { playground: board, starter: "boards.yml#quarters", height: 420 }
check: { type: board, text: "Put P at $1\\tfrac{1}{4}$.", when: "x(P) = 1.25" }
hint: ["Each whole is cut into 4 quarters. Count 4 quarters to reach 1.","Then count 1 more quarter."]
```

Drag $P$ along the line, or use the **Move** buttons. Each whole is cut into quarters. The board writes where $P$ is.

## The idea

```step
stage: investigate
insight: "Count equal parts from zero. Past 1 you write a mixed numeral or a fraction with a top bigger than the bottom."
tasks:
  - insight: "Count quarters from zero."
    check:
      type: answer
      q: "How many quarters are in 1 1/4?"
      answer: "5"
      feedback:
        - ["1","That is the whole number. Count all the quarters, 4 in the whole and 1 more."]
        - ["4","That is the quarters in 1 whole. There is 1 more quarter."]
      explain: "1 whole is 4 quarters, and 1 more quarter makes 5 quarters: 1 1/4 = 5/4."
  - insight: "The top number counts parts from zero."
    check:
      type: question
      q: "Where is 5/4 on the number line?"
      options: ["Just past 1, one quarter further on","Just before 1","Halfway between 0 and 1","At 5"]
      answer: 0
      feedback: [null,"5/4 is more than 4/4, which is 1.","5/4 is bigger than 1/2.","The top number counts parts, not whole steps."]
      explain: "4/4 is 1, so 5/4 is one quarter past 1."
  - insight: "Write both in the same size of part."
    check:
      type: question
      q: "Which is bigger, 7/4 or 1 1/2?"
      options: ["7/4","1 1/2","They are the same","You cannot tell"]
      answer: 0
      feedback: [null,"1 1/2 is 6 quarters. 7 quarters is more.","1 1/2 is 6/4, not 7/4.","Write both in quarters."]
      explain: "1 1/2 is 6/4 and 7/4 is one quarter more."
```

To place a fraction, cut each whole into the number of parts on the bottom, then count that many parts from zero. $\tfrac{5}{4}$ is 5 quarters, which is the same as $1\tfrac{1}{4}$.

### Counting quarters

### Past one

### Which is bigger?

## Check

```step
stage: practise
insight: "Using the number line idea on new examples."
tasks:
  - check:
      type: answer
      q: "How many halves are in 2 1/2?"
      answer: "5"
      feedback:
        - ["2","That is the whole number. Each whole has 2 halves."]
        - ["3","Count 2 wholes as 4 halves, then add the half."]
      explain: "2 wholes = 4 halves, plus 1 half = 5 halves."
  - check:
      type: question
      q: "A line is cut into thirds. Where is 4/3?"
      options: ["One third past 1","One third before 1","At 4","Halfway between 1 and 2"]
      answer: 0
      feedback: [null,"4/3 is more than 3/3, which is 1.","The top number counts thirds, not whole steps.","Halfway is 1 1/2. 4/3 is 1 1/3."]
      explain: "3/3 is 1, so 4/3 is one third further."
```

### Halves

### Thirds

## Apply

```step
stage: make
insight: "Describing the steps for placing a fraction past 1."
check:
  type: reasoning
  q: "Explain how to place 7/4 on a number line."
  placeholder: "First I … then …"
  models:
    - title: "Counting quarters"
      text: "I cut each whole into 4 quarters. I count 7 quarters from 0. 4 quarters gets me to 1 and 3 more quarters gets me to 1 3/4."
  criteria:
    - "I said how many parts each whole is cut into."
    - "I counted from zero, and said what happens after 1."
```

```teacher
summary: "Students place fractions on a number line, including past 1, and see the bottom number as the size of the parts."
time: 17
timing: "Think first 3 min · Try 4 min · The idea 5 min · Check 3 min · Apply 2 min"
goals:
  - "I can say what the top and bottom numbers mean on a number line."
  - "I can put a fraction on a number line."
  - "I can say a fraction past 1 in two ways."
before: |
  The one idea: count equal parts from zero. The common mistakes are counting the marks (so the first mark is "1") and stopping at 1. The Think first question and the board meet them.
  
  The board is the number line used in the Year 7 lesson *Fractions and decimals on the line*, with fractions on and only positive numbers.
  
  A ruler or a metre strip marked in quarters is a good thing to hold.

  Not yet tried with a class.
running:
  - "Think first: ask students to say where 3/4 would go on a ruler."
  - "Try: ask how many quarters to reach 1."
  - "Apply: look for the words \"count the parts from zero\"."
struggle: "Some students count the marks, so the first mark after 0 becomes 1. Say \"count the gaps\"."
stuck:
  - see: "A student puts 3/4 at the third mark and calls the first mark 1/4 correctly but stops at 4/4."
    ask: "What is 4/4?"
    fix: "It is 1, so the next quarter is 5/4."
  - see: "A student says 5/4 is not possible."
    ask: "How many quarters are in 1?"
    fix: "Four, so 5 quarters is one more."
exit:
  q: "Where does 5/4 go, and what is another way to write it?"
  a: "One quarter past 1, and it is 1 1/4."
leads: |
  Leads into Year 7 Number: *Fractions and decimals on the line*.
```
