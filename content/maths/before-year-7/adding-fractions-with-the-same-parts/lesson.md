---
title: "Adding fractions with the same parts"
summary: "When fractions have the same bottom number, add the tops and keep the bottom. The bottom names the size of the part, so it does not change. The answer can be more than 1."
language: maths
shape: primer
unit: parts
order: 4
node: AC9M5N05 n1
assumes: [AC9M5N03]   # earlier node, taught in class
hook: "You eat 2 fifths of a block of chocolate and your friend eats 1 fifth. How much is gone?"
---
Fractions with the same bottom number are made of the same size of part. To add them, count the parts. The bottom number says the size of the part, so it stays the same.

## Think first

```step
stage: predict
insight: "The common mistake is adding the tops and the bottoms. The size of the part does not change when you add."
check:
  type: predict
  q: "What is 2/5 + 1/5?"
  options: ["3/5","3/10","2/5","2/10"]
  actual: "3/5. You add 2 fifths and 1 fifth, which is 3 fifths. The parts are still fifths."
```

Lock in a guess before you read on.

## Try it

```step
stage: run
insight: "Changing the tops while the bottoms stay fifths shows the answer counts parts and can go past 1."
try: { playground: board, starter: "boards.yml#fifths", height: 420 }
check: { type: board, text: "Make a sum that is more than 1 whole.", when: "r > 1" }
hint: ["Make both bars bigger, for example 3 fifths and 4 fifths.","Look at what the sum shows when it goes past the end of the first whole."]
```

Change the number of shaded fifths in each bar. The bars at the bottom join end to end and show the sum.

## The idea

```step
stage: investigate
insight: "Same size of part: add the number of parts and keep the bottom. A sum can be bigger than 1."
tasks:
  - insight: "The parts are eighths. Add the number of parts."
    check:
      type: question
      q: "What is 1/8 + 3/8?"
      options: ["4/8","4/16","3/8","3/16"]
      answer: 0
      feedback: [null,"That adds the bottoms. The parts are still eighths.","That is only one of the two fractions.","That adds the bottoms. The parts are still eighths."]
      explain: "1 eighth + 3 eighths = 4 eighths."
  - insight: "Add the tops."
    check:
      type: answer
      q: "2/5 + 4/5 = ?/5. What is the missing number?"
      answer: "6"
      feedback:
        - ["2","That is only one top."]
        - ["8","That adds 4 and 4. Add 2 and 4."]
      explain: "2 fifths + 4 fifths = 6 fifths, which is 1 1/5."
  - insight: "Same size of part."
    check:
      type: question
      q: "Why does the bottom stay the same when you add?"
      options: ["The bottom is the size of the parts, and you are still counting the same size of part","You add the bottoms but leave one out","The bottom is not important","It only stays the same when the answer is under 1"]
      answer: 0
      feedback: [null,"The size of the part has not changed, so the bottom stays.","The bottom tells you the size of the parts, so it matters.","It stays the same when the answer is over 1 too."]
      explain: "The bottom names the part. 2 fifths + 1 fifth is 3 fifths, as 2 apples + 1 apple is 3 apples."
```

$\tfrac{2}{5} + \tfrac{1}{5} = \tfrac{3}{5}$. The bottom number names the part, like a unit, so it stays the same. Add the tops. When the tops add to more than the bottom, the sum is more than one whole: $\tfrac{6}{5} = 1\tfrac{1}{5}$.

### Eighths

### Fifths past one

### Why the bottom stays

## Check

```step
stage: practise
insight: "Using the idea on new examples."
tasks:
  - check:
      type: question
      q: "What is 3/7 + 2/7?"
      options: ["5/7","5/14","6/7","1/7"]
      answer: 0
      feedback: [null,"That adds the bottoms. The parts are still sevenths.","3 + 2 is 5, not 6.","That subtracts. This question adds."]
      explain: "3 sevenths + 2 sevenths = 5 sevenths."
  - check:
      type: answer
      q: "4/6 + 3/6 = ?/6. What is the missing number?"
      answer: "7"
      feedback:
        - ["1","That subtracts. Add 4 and 3."]
        - ["12","Both bottoms are 6, so the bottom stays 6. Add the tops: 4 + 3."]
      explain: "4 sixths + 3 sixths = 7 sixths, which is 1 1/6."
```

### Sevenths

### Sixths

## Apply

```step
stage: make
insight: "Explaining why adding the bottoms is wrong."
check:
  type: reasoning
  q: "Jay says 1/4 + 1/4 = 2/8. Explain what is wrong."
  placeholder: "Jay has added …"
  models:
    - title: "Quarters"
      text: "1 quarter + 1 quarter is 2 quarters, because the parts are still quarters. Jay added the bottoms too, which made the parts smaller. The answer is 2/4, which is a half."
  criteria:
    - "I said the parts are still quarters."
    - "I said the bottoms are not added."
```

```teacher
summary: "Students add fractions with the same bottom by adding the tops, and drop the idea that the bottoms are added too."
time: 17
timing: "Think first 3 min · Try 4 min · The idea 5 min · Check 3 min · Apply 2 min"
goals:
  - "I can say what the bottom number tells me."
  - "I can add fractions with the same bottom."
  - "I can say what to do when the sum is more than 1."
before: |
  The one idea: the bottom is the size of the part, so it stays the same when you add. The common mistake is adding both tops and bottoms (1/5 + 2/5 = 3/10). The Think first question meets it.
  
  The board is the fraction adding board from the Year 7 lesson *Adding fractions*. Here both bottoms are 5 and the cut is fixed at 5, so no common bottom is needed yet.
  
  Say "two fifths plus one fifth" aloud, as "two apples plus one apple".

  Not yet tried with a class.
running:
  - "Think first: ask students to draw 2/5 + 1/5 on a strip."
  - "Try: ask them to make a sum past 1 and say it as a mixed numeral."
  - "Apply: look for \"still quarters\"."
struggle: "Students who add the bottoms need the picture: the pieces get smaller, but the strip is the same."
stuck:
  - see: "A student writes 1/5 + 2/5 = 3/10."
    ask: "How many fifths do you have?"
    fix: "Three fifths, so 3/5. The bottom names the part."
  - see: "A student writes 4/5 + 3/5 = 7/5 and stops."
    ask: "How many fifths in 1 whole?"
    fix: "5, so 7/5 = 1 2/5."
exit:
  q: "What is 3/8 + 4/8, and why does the bottom stay 8?"
  a: "7/8, because we are still counting eighths."
leads: |
  Leads into Year 7 Number: *Adding fractions*.
```
