---
title: "Same amount, different fraction"
summary: "Different fractions can show the same amount, such as 1/2 and 4/8. Cut each part into smaller equal parts and the amount stays the same. A fraction with bigger numbers is not always bigger."
language: maths
shape: primer
unit: parts
order: 2
node: AC9M4N03 n1
hook: "You eat 2 of 4 slices, your friend eats 1 of 2 slices of the same pizza. Who ate more?"
---
A fraction like $\tfrac{1}{2}$ can have many names. $\tfrac{2}{4}$, $\tfrac{4}{8}$ and $\tfrac{5}{10}$ are all the same amount. They are called **equivalent fractions**.

## Think first

```step
stage: predict
insight: "Many students think 4/8 must be bigger than 1/2 because the numbers are bigger. The parts are smaller, but there are more of them."
check:
  type: predict
  q: "Is 4/8 of a pizza more than 1/2 of the same pizza?"
  options: ["No, they are the same amount","Yes, because 4 and 8 are bigger numbers","No, 1/2 is bigger","You cannot tell"]
  actual: "They are the same amount. Cut each half into 4 smaller parts and you get 8 parts, with 4 of them shaded. The pizza eaten does not change."
```

Lock in a guess before you read on.

## Try it

```step
stage: run
insight: "Changing the number of parts until the two bars match shows that cutting into smaller parts keeps the amount."
try: { playground: board, starter: "boards.yml#bars", height: 420 }
check: { type: board, text: "The top bar is 1/2. Make the bottom bar the same amount using eighths (d = 8).", when: "e = 1 and d = 8" }
hint: ["Set d to 8, so the bottom bar has 8 equal parts.","Change c until the shaded amounts match."]
```

The top bar is $\tfrac{1}{2}$. Change the bottom bar until it shades the same amount, and the board says so.

## The idea

```step
stage: investigate
insight: "Multiply or divide the top and the bottom by the same number to keep the amount."
tasks:
  - insight: "Half of the parts are shaded."
    check:
      type: sort
      q: "Is it the same amount as 1/2?"
      options: ["Same as 1/2","Not the same"]
      items:
        - ["2/4","Same as 1/2"]
        - ["3/6","Same as 1/2"]
        - ["1/3","Not the same","Thirds are bigger parts than sixths, and 1 of 3 is less than a half."]
        - ["5/10","Same as 1/2"]
        - ["2/3","Not the same"]
  - insight: "Do the same thing to the top and the bottom."
    check:
      type: answer
      q: "2/3 is the same as ?/12. What is the missing number?"
      answer: "8"
      feedback:
        - ["2","The bottom changed from 3 to 12, so the top has to change too."]
        - ["12","That is the bottom. Multiply 2 by what 3 was multiplied by."]
      explain: "3 × 4 = 12, so 2 × 4 = 8. 2/3 = 8/12."
  - check:
      type: question
      q: "Why does 2/4 show the same amount as 1/2?"
      options: ["Each half is cut into 2 parts, so there are twice as many parts and twice as many shaded","4 is bigger than 2, so it is a bigger fraction","You add 2 to the top and the bottom","It only works for 1/2"]
      answer: 0
      feedback: [null,"Bigger numbers do not make a bigger fraction. The parts are smaller.","Adding changes the amount. Multiplying the top and bottom by the same number does not.","It works for every fraction."]
      explain: "Cutting every part into 2 gives twice as many parts, and twice as many shaded. The amount does not change."
```

Fractions are **equivalent** when they show the same amount. Cut every part into the same number of smaller parts: the top and bottom are multiplied by the same number, and the amount stays the same.

### Same as a half?

### The missing number

### Why it works

## Check

```step
stage: practise
insight: "Finding equivalent fractions in new examples."
tasks:
  - check:
      type: question
      q: "Which is NOT the same amount as 3/4?"
      options: ["4/5","6/8","9/12","12/16"]
      answer: 0
      feedback: [null,"6/8 is 3/4 with every part cut in 2, so it is the same.","9/12 is 3/4 with every part cut in 3, so it is the same.","12/16 is 3/4 with every part cut in 4, so it is the same."]
      explain: "3/4 = 6/8 = 9/12 = 12/16. 4/5 is a different amount."
  - check:
      type: answer
      q: "3/5 is the same as ?/10. What is the missing number?"
      answer: "6"
      feedback:
        - ["3","The bottom doubled (5 to 10), so the top has to double too."]
        - ["10","That is the bottom. Double the top."]
      explain: "5 × 2 = 10, so 3 × 2 = 6."
```

### Not the same

### Tenths

## Apply

```step
stage: make
insight: "Explaining equivalence in own words."
check:
  type: reasoning
  q: "Your friend says 2/4 is different from 1/2 because the numbers are different. Explain why they show the same amount."
  placeholder: "2/4 and 1/2 are the same because …"
  models:
    - title: "A pizza"
      text: "If you cut each half of a pizza into 2 pieces, you have 4 pieces. The half you had is now 2 of the 4 pieces. The pizza you eat is the same amount, so 2/4 = 1/2."
  criteria:
    - "I said the parts get cut into smaller ones."
    - "I said the number of parts and the number shaded both go up by the same amount."
```

```teacher
summary: "Students see that different fractions can name the same amount, and drop the idea that bigger numbers mean a bigger fraction."
time: 17
timing: "Think first 3 min · Try 4 min · The idea 5 min · Check 3 min · Apply 2 min"
goals:
  - "I can say two fractions are the same amount."
  - "I can find a fraction equivalent to one I am given."
  - "I can say why the amount does not change."
before: |
  The one idea: cut every part into the same number of smaller parts and the amount is the same. The common mistake is that 4/8 is bigger than 1/2 because 4 and 8 are bigger numbers. The Think first question meets it.
  
  The board is the fraction bar used in the Year 7 lesson *Equivalent fractions*. Here the top bar is fixed at 1/2 and the bottom bar is adjustable.
  
  Paper folding works well: fold a strip in half, then in half again, and shade.

  Not yet tried with a class.
running:
  - "Think first: ask students to draw 1/2 and 4/8 of the same rectangle."
  - "Try: ask what happens to the shading when d goes up."
  - "Apply: look for \"twice as many parts, twice as many shaded\"."
struggle: "Students who add the same number to the top and bottom (1/2 to 3/4) break the amount. Ask them to shade both."
stuck:
  - see: "A student says 4/8 is bigger because 8 is big."
    ask: "How big are eighths compared with halves?"
    fix: "Eighths are smaller parts, but there are more of them: 4 eighths is a half."
  - see: "A student makes 1/2 into 3/4 by adding 2."
    ask: "Shade 3/4 and 1/2. Are they the same?"
    fix: "No. Multiply the top and bottom by the same number: 1/2 = 2/4."
exit:
  q: "Write one fraction that is the same amount as 3/4 and say how you got it."
  a: "6/8: I doubled the top and the bottom."
leads: |
  Leads into Year 7 Number: *Equivalent fractions*.
```
