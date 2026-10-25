---
title: "Multiply and divide by 10, 100 and 1000"
summary: "When you multiply by 10 every digit moves one place to the left, and dividing by 10 moves every digit one place to the right. Adding a zero is a rule that only works for whole numbers."
language: maths
shape: primer
unit: tools
order: 6
node: [AC9M4N05 n1, AC9M4N05 n2]
hook: "Move the decimal point or add a zero? One of these rules is wrong."
---
Our number system is built on tens. Each place is worth 10 times the place to its right. So multiplying by 10 moves every digit one place to the left, to a place worth 10 times more.

## Think first

```step
stage: predict
insight: "The \"add a zero\" rule gives 3.50 for 3.5 × 10, which is wrong. The digits move; no zero is added."
check:
  type: predict
  q: "What is 3.5 × 10?"
  options: ["35","3.50","30.5","0.35"]
  actual: "35. The 3 moves from ones to tens, and the 5 moves from tenths to ones. Nothing is added."
```

Lock in a guess before you read on.

## Try it

```step
stage: run
insight: "Pressing the shift buttons shows every digit moving one place, so 35 × 100 is 3500."
try: { playground: board, starter: "boards.yml#shift", height: 420 }
check: { type: board, text: "Start at 35. Multiply by 10 twice to make 3500.", when: "n = 3500" }
hint: ["Press the × 10 button.","Press it again. Watch each digit move one column left."]
```

The columns go up by 10 times each step to the left. Press **× 10** and watch every digit move one place.

## The idea

```step
stage: investigate
insight: "x10 moves digits left, ÷10 moves them right, and 100 and 1000 are two and three moves."
tasks:
  - insight: "Digits move 2 places for × 100."
    check:
      type: answer
      q: "What is 4.2 × 100?"
      answer: "420"
      feedback:
        - ["4.200","Adding zeros is not the rule. Move each digit 2 places left."]
        - ["42","That is × 10. For × 100 move the digits 2 places."]
      explain: "4.2 × 100: the 4 moves 2 places to hundreds and the 2 to tens, so 420."
  - insight: "Digits move right for ÷."
    check:
      type: answer
      q: "What is 250 ÷ 10?"
      answer: "25"
      feedback:
        - ["2500","That is × 10. Dividing makes the number smaller."]
        - ["2.5","That is ÷ 100. For ÷ 10 move each digit 1 place right."]
      explain: "Each digit moves 1 place right: 250 ÷ 10 = 25."
  - insight: "The digits move."
    check:
      type: question
      q: "Why is \"add a zero\" a bad rule for 3.5 × 10?"
      options: ["The answer is 35, not 3.50: the digits move, nothing is added","3.5 × 10 is 3.50","You should add a zero at the front","The rule works for decimals but not whole numbers"]
      answer: 0
      feedback: [null,"Adding a zero gives 3.50, which is the same as 3.5, so it cannot be 10 times bigger.","That would not make it bigger.","It is the other way round: it only seems to work for whole numbers."]
      explain: "The digits move one place left: 3.5 × 10 = 35."
```

Each place is worth 10 times the place on its right. **× 10** moves every digit one place to the left. **÷ 10** moves every digit one place to the right. For 100 move 2 places and for 1000 move 3 places.

### × 100

### ÷ 10

### The zero rule

## Check

```step
stage: practise
insight: "Using the idea with decimals."
tasks:
  - check:
      type: answer
      q: "What is 0.6 × 1000?"
      answer: "600"
      feedback:
        - ["0.6000","Adding zeros does not make it bigger. Move the 6 three places left."]
        - ["6","That is × 10. For × 1000 move 3 places."]
      explain: "The 6 moves 3 places left, from tenths to hundreds: 600."
  - check:
      type: answer
      q: "What is 7 ÷ 100?"
      answer: "0.07"
      feedback:
        - ["70","That is × 10. Dividing makes the number smaller."]
        - ["0.7","That is ÷ 10. For ÷ 100 move 2 places right."]
      explain: "The 7 moves 2 places right: 0.07."
```

### × 1000

### ÷ 100

## Apply

```step
stage: make
insight: "Explaining the move in own words."
check:
  type: reasoning
  q: "Explain how to work out 4.5 × 10 without using the rule \"add a zero\"."
  placeholder: "Each digit moves …"
  models:
    - title: "Digits move"
      text: "Each digit moves one place to the left, because each place is worth 10 times more. The 4 goes from ones to tens and the 5 from tenths to ones. So 4.5 × 10 = 45."
  criteria:
    - "I said every digit moves, not just the point."
    - "I said which way they move and why."
```

```teacher
summary: "Students see multiplying and dividing by powers of ten as every digit moving places, and drop the \"add a zero\" rule."
time: 17
timing: "Think first 3 min · Try 4 min · The idea 5 min · Check 3 min · Apply 2 min"
goals:
  - "I can say what happens to each digit when I multiply by 10."
  - "I can multiply and divide by 10, 100 and 1000."
  - "I can say why \"add a zero\" does not work for decimals."
before: |
  The one idea: each place is worth 10 times the one on its right, so × 10 moves every digit one place left. The common mistake is "add a zero" (3.5 × 10 = 3.50). The Think first question meets it.
  
  The board is the place value board from the Year 7 lesson *Expanded notation*. It shows whole numbers only. Use the decimals questions to carry the idea over.
  
  If you have base ten blocks, show that 10 tenths make a one.

  Not yet tried with a class.
running:
  - "Think first: ask students whether 3.50 is bigger than 3.5."
  - "Try: ask what happens to the 3 when you press × 10."
  - "Apply: look for \"every digit moves\"."
struggle: "Students who say \"move the decimal point\" are right about the picture, but the digits are what move. Use the board to show it."
stuck:
  - see: "A student says 3.5 × 10 = 3.50."
    ask: "Is 3.50 bigger than 3.5?"
    fix: "No, they are equal, so it was not multiplied. The 5 moves to the ones place: 35."
  - see: "A student multiplies by 100 and moves one place."
    ask: "How many tens make 100?"
    fix: "10 × 10, so two moves."
exit:
  q: "What is 6.2 × 100?"
  a: "620."
leads: |
  Leads into Year 7 Number: *Expanded notation*, *Powers* and *Rounding*.
```
