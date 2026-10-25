---
title: "Below zero"
summary: "Numbers go on below zero, such as -3 degrees. On a number line the further left a number is, the smaller it is. So -8 is less than -2, even though 8 is more than 2."
language: maths
shape: primer
unit: tools
order: 8
node: [AC9M6N01 n1, AC9M6N01 n2]
hook: "Which is colder, -8 degrees or -2 degrees? The 8 looks bigger."
---
Numbers do not stop at zero. Below zero we use negative numbers, like $-3$ degrees on a cold morning. Whole numbers above and below zero are called **integers**.

## Think first

```step
stage: predict
insight: "Students think -8 is bigger than -2 because 8 is bigger than 2. On the line, -8 is further left, so it is less."
check:
  type: predict
  q: "Which is colder, -8 °C or -2 °C?"
  options: ["-8 °C","-2 °C","They are the same","You cannot tell"]
  actual: "-8 °C. It is 8 degrees below zero, which is further below than 2 degrees below. The further left on the line, the smaller."
```

Lock in a guess before you read on.

## Try it

```step
stage: run
insight: "Moving a point left of -3 shows that it gets colder, so numbers further left are smaller."
try: { playground: board, starter: "boards.yml#thermometer", height: 420 }
check: { type: board, text: "Move P so it is colder than Q, which is -3 °C.", when: "x(P) < -3" }
hint: ["Q is at -3. Colder means lower.","Move P further to the left."]
```

Drag $P$ along the line, or use the **Move** buttons. Left is colder.

## The idea

```step
stage: investigate
insight: "Left is less, right is more. Going up the line adds, and going down takes away."
tasks:
  - insight: "Further right is greater."
    check:
      type: question
      q: "Which is greater, -3 or -7?"
      options: ["-3","-7","They are the same","You cannot tell"]
      answer: 0
      feedback: [null,"-7 is further left, so it is less.","-3 is 3 below zero and -7 is 7 below.","You can tell: look at which is further right."]
      explain: "-3 is further right on the number line, so it is greater."
  - insight: "Rising moves right."
    check:
      type: answer
      q: "The temperature is -4 °C. It rises by 6 degrees. What is the new temperature?"
      answer: "2"
      feedback:
        - ["-10","It rose, so it moved right, not left."]
        - ["-2","-4 + 4 would reach 0. It rose 6, so go on 2 more."]
      explain: "From -4 go up 4 to reach 0, then 2 more to reach 2."
  - insight: "A minus sign means below zero."
    check:
      type: sort
      q: "Is it above zero or below zero?"
      options: ["Above zero","Below zero"]
      items:
        - ["5 °C","Above zero"]
        - ["-5 °C","Below zero"]
        - ["A lift going down to -2","Below zero","The minus sign says it is below zero."]
        - ["3 floors up","Above zero"]
        - ["Owing $10","Below zero","A debt is like a number below zero."]
```

On a number line, **negative numbers** are to the left of zero. The further left, the smaller the number, so $-8 < -2$. Going up the line is adding, and going down is taking away.

### Greater or less

### Warming up

### Above or below

## Check

```step
stage: practise
insight: "Using the number line on new numbers."
tasks:
  - check:
      type: question
      q: "Which list goes from smallest to biggest?"
      options: ["-9, -4, 0, 3","3, 0, -4, -9","0, -4, -9, 3","-4, -9, 0, 3"]
      answer: 0
      feedback: [null,"That is biggest first.","0 comes after the negative numbers.","-9 is further left than -4, so it comes first."]
      explain: "Read the line from left to right: -9, -4, 0, 3."
  - check:
      type: answer
      q: "The temperature is -5 °C and falls by 3 degrees. What is it now?"
      answer: "-8"
      feedback:
        - ["-2","It fell, so it moved left, not right."]
        - ["8","It is below zero, so keep the minus sign."]
      explain: "Falling moves left: -5 and then 3 more below is -8."
```

### In order

### Falling

## Apply

```step
stage: make
insight: "Explaining -8 and -2."
check:
  type: reasoning
  q: "Explain why -8 °C is colder than -2 °C, even though 8 is bigger than 2."
  placeholder: "-8 is colder because …"
  models:
    - title: "On the line"
      text: "-8 is 8 degrees below zero and -2 is only 2 below zero. On a number line -8 is further to the left, and the further left, the smaller the number. So -8 is colder."
  criteria:
    - "I said how far below zero each is, or where each is on the line."
    - "I said that further left is smaller."
```

```teacher
summary: "Students place negative numbers on a number line and see that further left is less, and drop the idea that -8 is bigger than -2."
time: 17
timing: "Think first 3 min · Try 4 min · The idea 5 min · Check 3 min · Apply 2 min"
goals:
  - "I can say what a negative number is."
  - "I can say which of two negative numbers is greater."
  - "I can say what happens when a temperature rises or falls."
before: |
  The one idea: on the line, left is less. The common mistake is that -8 is bigger than -2 because 8 is bigger than 2. The Think first question meets it.
  
  The board is the number line from the Year 7 lessons *Comparing integers* and *Adding integers*. Here it is set up as a thermometer.
  
  A real thermometer or a lift with basement floors makes it concrete.

  Not yet tried with a class.
running:
  - "Think first: ask which is colder, and why."
  - "Try: ask students to say what happens to the number as P moves left."
  - "Apply: look for \"further left\" or \"further below zero\"."
struggle: "Some students link \"bigger number\" to the digit, not the position. Keep the thermometer in view."
stuck:
  - see: "A student says -8 is greater than -2."
    ask: "Which is colder?"
    fix: "-8, so it is lower, and lower means less."
  - see: "A student says -4 + 6 = -10."
    ask: "Did the temperature go up or down?"
    fix: "Up, so move right: -4 + 6 = 2."
exit:
  q: "Which is less, -6 or -9, and how do you know?"
  a: "-9, because it is further left."
leads: |
  Leads into Year 7 Number: *Comparing integers* and *Adding integers*.
```
