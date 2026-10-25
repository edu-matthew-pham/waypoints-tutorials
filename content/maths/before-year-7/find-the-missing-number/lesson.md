---
title: "Find the missing number"
summary: "An equals sign means both sides are worth the same, not that the answer comes next. A missing number is the value that makes both sides balance."
language: maths
shape: primer
unit: unknowns
order: 10
node: AC9M6A02 n2
assumes: [AC9M6A02 n1]   # earlier node, taught in class
hook: "8 + 4 = □ + 5. What goes in the box? Many people say 12, but that is not it."
---
The equals sign (=) says that two things are **worth the same**, like a balanced scale. A missing number is the one that makes the scale balance.

## Think first

```step
stage: predict
insight: "Many students read = as \"the answer comes next\", so 8 + 4 = □ + 5 gives 12. It means both sides are equal."
check:
  type: predict
  q: "8 + 4 = □ + 5. What goes in the box?"
  options: ["7","12","17","9"]
  actual: "7. The left side is 8 + 4 = 12, so the right side must be 12 as well. 7 + 5 = 12."
```

Lock in a guess before you read on.

## Try it

```step
stage: run
insight: "Moving the slider until the scale balances shows the missing number makes both sides equal."
try: { playground: board, starter: "boards.yml#scale", height: 420 }
check: { type: board, text: "Find the number that balances the scale.", expect: { balanced: true } }
hint: ["Left is a number plus 5. Right is 12.","Move the slider until the scale is level."]
```

The left side is a number plus 5 and the right side is 12. Change the number until the scale balances.

## The idea

```step
stage: investigate
insight: "Work out one side, then find the number that makes the other side equal."
tasks:
  - insight: "Equal means the same."
    check:
      type: question
      q: "What does the equals sign mean?"
      options: ["Both sides are worth the same","The answer comes next","Add the numbers","The problem is finished"]
      answer: 0
      feedback: [null,"That is true for 3 + 4 = 7 only because both sides are the same. It can be 7 = 3 + 4 too.","The equals sign does not say what to do.","The equals sign says the two sides match."]
      explain: "The sides are the same amount, like a balanced scale."
  - insight: "Work out the side without the box."
    check:
      type: answer
      q: "6 + □ = 10 + 3. What goes in the box?"
      answer: "7"
      feedback:
        - ["13","That is the right side. The box is what makes 6 + □ equal 13."]
        - ["4","That makes 6 + 4 = 10, but the right side is 10 + 3 = 13."]
      explain: "The right side is 13, so 6 + □ = 13 and □ = 7."
  - insight: "Undo the multiply."
    check:
      type: answer
      q: "□ × 3 = 24. What goes in the box?"
      answer: "8"
      feedback:
        - ["72","That multiplies. Undo × 3 by dividing 24 by 3."]
        - ["21","That takes away 3. Divide, because it was multiplied."]
      explain: "24 ÷ 3 = 8. Check: 8 × 3 = 24."
```

The **equals sign** means both sides are worth the same. Work out the side with no missing number, then find the number that makes the other side match. You can check by putting it back in.

### What = means

### Both sides

### Times three

## Check

```step
stage: practise
insight: "Using the idea on new missing numbers."
tasks:
  - check:
      type: answer
      q: "5 + 9 = □ + 6. What goes in the box?"
      answer: "8"
      feedback:
        - ["14","That is the left side. □ + 6 must make 14."]
        - ["5","Work out 5 + 9 first. It is 14, so □ + 6 = 14."]
      explain: "5 + 9 = 14, and 8 + 6 = 14."
  - check:
      type: answer
      q: "□ ÷ 2 = 7. What goes in the box?"
      answer: "14"
      feedback:
        - ["3.5","That divides 7 by 2. Undo ÷ 2 by multiplying."]
        - ["5","That takes away 2. Undo a divide with a multiply."]
      explain: "7 × 2 = 14. Check: 14 ÷ 2 = 7."
```

### Both sides

### Divide

## Apply

```step
stage: make
insight: "Explaining the equals sign."
check:
  type: reasoning
  q: "Explain why the box in 8 + 4 = □ + 5 is 7 and not 12."
  placeholder: "It is 7 because …"
  models:
    - title: "Both sides equal"
      text: "The equals sign means both sides are worth the same. 8 + 4 is 12, so the right side must be 12 too. 7 + 5 is 12, so 7 goes in the box."
  criteria:
    - "I said both sides must be worth the same."
    - "I worked out one side and used it to find the box."
```

```teacher
summary: "Students read the equals sign as both sides being worth the same, and find missing numbers by balancing, not by reading it as \"the answer comes next\"."
time: 17
timing: "Think first 3 min · Try 4 min · The idea 5 min · Check 3 min · Apply 2 min"
goals:
  - "I can say what the equals sign means."
  - "I can find a missing number so both sides are equal."
  - "I can check my answer."
before: |
  The one idea: = means both sides are worth the same. The common mistake is reading it as "the answer comes next", so 8 + 4 = □ + 5 gives 12. The Think first question meets it.
  
  The board is the balance from the Year 7 lessons *Equations as balance* and *The balance method*. Here it only needs one side filled in.
  
  This lesson may overlap with Year 7 Algebra. Use it only for students who need it.

  Not yet tried with a class.
running:
  - "Think first: ask students to say what = means in their own words."
  - "Try: ask which side is worked out first."
  - "Apply: look for \"worth the same\"."
struggle: "Students used to \"= means the answer\" need examples written the other way, like 12 = 7 + 5."
stuck:
  - see: "A student writes 12 in the box."
    ask: "What is the right side then?"
    fix: "12 + 5 = 17, which is not 12. The box must make it 12."
  - see: "A student does not know how to start."
    ask: "Which side has no box?"
    fix: "Work that side out first."
exit:
  q: "What goes in the box: 9 + 3 = □ + 4?"
  a: "8."
leads: |
  Leads into Year 7 Algebra: *Equations as balance* and *The balance method*.
```
