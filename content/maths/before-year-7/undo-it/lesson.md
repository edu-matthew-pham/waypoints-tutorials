---
title: "Undo it"
summary: "Adding and taking away undo each other, and so do multiplying and dividing. To find a starting number, undo the steps in the opposite order, last step first."
language: maths
shape: primer
unit: unknowns
order: 9
node: [AC9M5A01 n1, AC9M5A01 n3]
assumes: [AC9M5A01 n2]   # earlier node, taught in class
hook: "I think of a number, double it and add 3. I get 11. What was my number?"
---
Some operations undo each other. **Adding 5** is undone by **taking away 5**. **Multiplying by 3** is undone by **dividing by 3**. These pairs are called **inverse operations**.

## Think first

```step
stage: predict
insight: "Students often undo only one step, or undo the steps in the same order as they were done. Undo them backwards, last step first."
check:
  type: predict
  q: "I think of a number, double it, then add 3. My answer is 11. What was my number?"
  options: ["4","8","7","14"]
  actual: "4. Undo the last step first: 11 take away 3 is 8. Then undo the doubling: 8 divided by 2 is 4. Check: 4 doubled is 8, plus 3 is 11."
```

Lock in a guess before you read on.

## Try it

```step
stage: run
insight: "Undoing each step from the output backwards finds the starting number."
try: { playground: board, starter: "boards.yml#machine", height: 420 }
check: { type: board, text: "Undo every step to find the starting number.", expect: { solved: true } }
hint: ["The last step was + 3. What undoes it?","Then undo the × 2."]
```

The machine doubles a number and adds 3, and the answer is 11. Undo the steps, last one first, to find the starting number.

## The idea

```step
stage: investigate
insight: "Pairs of inverse operations, and undoing in reverse order."
tasks:
  - insight: "Add and take away undo each other."
    check:
      type: question
      q: "Which operation undoes \"add 5\"?"
      options: ["Take away 5","Add 5 again","Multiply by 5","Divide by 5"]
      answer: 0
      feedback: [null,"That adds 10 in all. It does not undo.","That does not undo adding.","That does not undo adding."]
      explain: "Taking away 5 undoes adding 5."
  - insight: "Undo the add with a take away."
    check:
      type: answer
      q: "I think of a number, add 6 and get 15. What was my number?"
      answer: "9"
      feedback:
        - ["21","That adds 6 again. Take 6 away from 15."]
        - ["6","15 - 6 is 9. 6 is the number you added."]
      explain: "15 take away 6 is 9. Check: 9 + 6 = 15."
  - insight: "Undo backwards."
    check:
      type: question
      q: "A number is multiplied by 3, then 2 is taken away. How do you undo that?"
      options: ["Add 2, then divide by 3","Divide by 3, then add 2","Take away 2, then divide by 3","Add 2, then multiply by 3"]
      answer: 0
      feedback: [null,"The last step was taking away 2, so undo that first.","Taking away 2 again would not undo it. Add 2.","Multiplying again does not undo multiplying."]
      explain: "Undo the last step first: add 2. Then undo the multiply: divide by 3."
```

Add and take away undo each other. Multiply and divide undo each other. To undo a list of steps, go **backwards**: undo the last step first, then the one before it.

### The opposite

### Add 6

### Two steps

## Check

```step
stage: practise
insight: "Undoing two-step puzzles."
tasks:
  - check:
      type: answer
      q: "I think of a number, multiply it by 4 and add 1. I get 21. What was my number?"
      answer: "5"
      feedback:
        - ["20","You took away the 1 but did not undo the × 4. Divide 20 by 4."]
        - ["6","You divided 21 by 4 first. Undo the last step, + 1, first."]
      explain: "21 - 1 = 20, and 20 ÷ 4 = 5. Check: 5 × 4 + 1 = 21."
  - check:
      type: answer
      q: "I think of a number, halve it and add 3. I get 7. What was my number?"
      answer: "8"
      feedback:
        - ["4","You took away 3 but did not undo the halving. Double 4."]
        - ["10","You added 3 instead of taking it away."]
      explain: "7 - 3 = 4, and double 4 is 8. Check: half of 8 is 4, plus 3 is 7."
```

### Multiply and add

### Halve and add

## Apply

```step
stage: make
insight: "Making and undoing own puzzle."
check:
  type: reasoning
  q: "Make up your own \"I think of a number\" puzzle with two steps, and say how to undo it."
  placeholder: "I think of a number, … The answer is … I undo it by …"
  models:
    - title: "A puzzle"
      text: "I think of a number, multiply it by 3 and take away 1. The answer is 14. To undo it I add 1 to get 15, then divide by 3 to get 5."
  criteria:
    - "My puzzle has two steps and an answer."
    - "I undid the last step first."
```

```teacher
summary: "Students use inverse operations to undo steps backwards, and drop the idea of undoing in the same order as the steps."
time: 17
timing: "Think first 3 min · Try 4 min · The idea 5 min · Check 3 min · Apply 2 min"
goals:
  - "I can say which operations undo each other."
  - "I can undo a two-step puzzle."
  - "I can say why I undo the last step first."
before: |
  The one idea: undo the steps backwards. The common mistake is undoing only one step, or in the same order. The Think first question meets it.
  
  The board is the function machine from the Year 7 lesson *Solving by backtracking*. It checks the answer, and gives a nudge for a wrong undo.
  
  Putting on socks and shoes is a good picture: to undo it, take off the shoes first.

  Not yet tried with a class.
running:
  - "Think first: ask students to put on and take off a jacket and a scarf in the right order."
  - "Try: ask them to say each undo aloud."
  - "Apply: look for \"last step first\"."
struggle: "Students who undo in the same order get a wrong answer. Ask them to check by doing the steps forwards."
stuck:
  - see: "A student says the answer is 8 (stopping after the first undo)."
    ask: "Did you undo the doubling?"
    fix: "No. Halve 8 to get 4."
  - see: "A student divides before taking away."
    ask: "Which step was done last?"
    fix: "The add, so undo that first."
exit:
  q: "I think of a number, add 4 and double it. The answer is 18. What was my number?"
  a: "5 (18 ÷ 2 = 9, then 9 − 4 = 5)."
leads: |
  Leads into Year 7 Algebra: *Solving by backtracking* and *Finding an unknown*.
```
