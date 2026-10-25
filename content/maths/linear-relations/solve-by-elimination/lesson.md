---
order: 25
unit: twovars10
node: AC9M10A02 n3
uses: [AC9M8A02 n2]
assumes: [AC9M8A02 n2]
connection: gym-or-casual
title: Solving by elimination
summary: "Add or subtract two equations so one letter cancels. If no letter matches, multiply an equation first so one does. Then solve, and find the other letter."
language: maths
voice: { name: af_heart, speed: 1.1 }
hook: "Nobody has told you the prices, but two receipts together can."
---
Substitution works when one equation says what a letter is. Often neither does. Two gym receipts each give one equation with two unknown prices, and you can still solve them by cancelling one price. The prices in this lesson are made up.

## Predict: what is different between the receipts?

```step
stage: predict
insight: "Committing to the price of one class shows who compares the two receipts (3 more classes cost 18 dollars more), who divides one total, and who guesses."
check:
  type: predict
  q: "A gym charges one price for a visit and another for a class. Ava paid 44 dollars for 4 visits and 2 classes. Ben paid 62 dollars for 4 visits and 5 classes. How much does one class cost?"
  options:
    - "$6$ dollars"
    - "$18$ dollars"
    - "$3$ dollars"
    - "$8$ dollars"
  actual: "6 dollars. Both bought 4 visits, so the 18 dollars extra on Ben's receipt pays for his 3 extra classes: 18 ÷ 3 = 6 dollars each."
```

<figure class="situation" role="img" aria-label="Two receipts. Ava's receipt shows 4 visits and 2 classes, total 44 dollars. Ben's receipt shows 4 visits and 5 classes, total 62 dollars. A question mark asks for the price of one class."><svg viewBox="0 0 440 190" width="440" style="max-width:100%;height:auto" fill="none" stroke="currentColor" font-family="inherit" font-size="14"><rect x="10" y="10" width="190" height="130" rx="6"/><text x="26" y="36" font-weight="bold" fill="currentColor" stroke="none">Ava</text><text x="26" y="64" fill="currentColor" stroke="none">4 visits</text><text x="26" y="88" fill="currentColor" stroke="none">2 classes</text><line x1="26" y1="102" x2="184" y2="102"/><text x="26" y="126" fill="currentColor" stroke="none">total 44 dollars</text><rect x="240" y="10" width="190" height="130" rx="6"/><text x="256" y="36" font-weight="bold" fill="currentColor" stroke="none">Ben</text><text x="256" y="64" fill="currentColor" stroke="none">4 visits</text><text x="256" y="88" fill="currentColor" stroke="none">5 classes</text><line x1="256" y1="102" x2="414" y2="102"/><text x="256" y="126" fill="currentColor" stroke="none">total 62 dollars</text><text x="10" y="172" fill="currentColor" stroke="none">One class costs ? dollars</text></svg></figure>

Nothing on the receipts tells you a price. Look at what Ava and Ben bought.

## Run: check the prices

```step
stage: run
insight: "Putting a proposed pair of prices back into a receipt is the check for any answer: both equations must hold."
check: { type: number, q: "Suppose a visit costs 8 dollars and a class costs 6 dollars. What would Ava's 4 visits and 2 classes cost? Does it match her receipt? Was your prediction right?", answer: 44, feedback: [[62, "That is Ben's receipt. Ava bought 4 visits and 2 classes."], [32, "That is the visits only. Add the 2 classes at 6 dollars each."]], explain: "4 × 8 + 2 × 6 = 32 + 12 = 44. It matches Ava's receipt. For Ben: 32 + 5 × 6 = 62, which matches too." }
```

A pair of prices is a solution only if it works on both receipts.

## Investigate: take one receipt from the other

```step
stage: investigate
insight: "Subtracting equations works because equal things taken from equal things leave equal things, and it removes a letter only when its coefficients match. Sam subtracts the 3p terms correctly but adds the 3q terms."
tasks:
  - check:
      type: question
      q: "Let $v$ be the price of a visit and $k$ the price of a class. Ava: $4v + 2k = 44$. Ben: $4v + 5k = 62$. Subtract Ava's equation from Ben's. What is left?"
      options: ["$3k = 18$", "$7k = 106$", "$k = 18$", "$8v + 7k = 106$"]
      answer: 0
      feedback: [null, "That adds the equations. Subtracting removes the 4v.", "5k − 2k is 3k, not k.", "That adds the two equations."]
      explain: "4v − 4v = 0, 5k − 2k = 3k and 62 − 44 = 18: 3k = 18."
  - hint: ["Subtract Ava's 44 from Ben's 62 first.", "Then divide by 3."]
    check: { type: number, q: "Solve $3k = 18$, then use $k$ to find $v$ from $4v + 2k = 44$. What is $v$?", answer: 8, feedback: [[6, "That is k. Put k = 6 into 4v + 2k = 44 to find v."], [32, "4v = 32 is the step before. Divide by 4."]], explain: "k = 6. Then 4v + 12 = 44, so 4v = 32 and v = 8." }
    smaller:
      check: { type: number, q: "Ben paid 62 dollars and Ava 44 dollars. How many dollars more did Ben pay?", answer: 18, explain: "62 − 44 = 18. That is the cost of his 3 extra classes." }
  - check:
      type: bug
      code: "working.txt#sam"
      text: "Sam solves $5p + 3q = 29$ and $2p + 3q = 17$ by subtracting. Click the line where his working goes wrong."
      answer: 2
      fault: logic
      misconception: eliminate-sign-flip
      explain: "Line 2: he subtracted the p terms but added the q terms. Subtracting means every term of the second equation is taken away: 3q − 3q = 0. Then 3p = 12, p = 4 and q = 3."
  - hint: ["Both receipts have 3 visits, so subtract.", "Then use the class price to find the visit price."]
    check:
      type: reasoning
      paper: true
      q: "At the same gym, Cara paid 29 dollars for 3 visits and 2 classes and Dan paid 41 dollars for 3 visits and 5 classes. Solve $3v + 2k = 29$ and $3v + 5k = 41$ on paper. What does one class cost?"
      steps:
        - ["$3v + 5k - (3v + 2k) = 41 - 29$", "subtract Cara's equation from Dan's"]
        - ["$3k = 12$", "the 3v cancels; 5k − 2k and 41 − 29"]
        - ["$k = 4$", "divide by 3"]
      answer: 4
      answerLabel: "Price of one class (dollars)"
      feedback:
        - [12, "That is 3k. Divide by 3."]
        - [7, "That is the price of a visit. The question asks for a class."]
      criteria:
        - "I subtracted every term of one equation from the other."
        - "The visit terms cancelled to 0."
        - "I found the visit price and checked it in the other receipt."
      explain: "Dan minus Cara: 3k = 12, so k = 4. Then 3v + 8 = 29, so v = 7. Check Dan: 21 + 20 = 41."
```

### Compare the receipts

### Solving for both prices

### Find the mistake

### Try one on paper

Here is the routine with the first two receipts.

```worked
4v + 2k = 44,\; 4v + 5k = 62 :: Both equations have $4v$. Subtract so it cancels.
(4v + 5k) - (4v + 2k) = 62 - 44 :: Take away every term of the first equation from the second.
3k = 18 :: The $v$ terms cancel. $5k - 2k = 3k$.
k = 6 :: Divide by 3.
4v + 2 \times 6 = 44 :: Put $k$ into one equation to find $v$.
v = 8 :: $4v = 32$, so $v = 8$.
4 \times 8 + 5 \times 6 = 62 :: Check in the other equation.
```

Now try one on paper with the example beside you: Cara and Dan. Find the price of one class, then type it.

## Modify: change one thing

```step
stage: modify
insight: "One change at a time: multiply first when no letter matches, add when the signs are opposite, and a pair that has no solution or infinitely many."
tasks:
  - check:
      type: question
      q: "Visit $v$ and class $k$ at another gym: $2v + k = 22$ and $3v + 2k = 36$. No letter has matching coefficients. What do you do first?"
      options: ["Multiply the first equation by 2, so both have $2k$", "Subtract them as they are", "Add them as they are"]
      answer: 0
      feedback: [null, "Subtracting as they are gives v + k = 14: no letter cancels.", "Adding leaves both letters."]
      explain: "2 × (2v + k = 22) gives 4v + 2k = 44. Now both equations have 2k, and subtracting removes it."
  - hint: ["First equation times 2: $4v + 2k = 44$.", "Subtract $3v + 2k = 36$ from it."]
    check: { type: number, q: "Finish it: $4v + 2k = 44$ and $3v + 2k = 36$. Subtract the second from the first. What is $v$?", answer: 8, feedback: [[80, "That adds the equations: 7v + 4k = 80. Subtract to cancel the 2k."], [-8, "Subtract the second from the first: 44 − 36 = 8."]], explain: "(4v + 2k) − (3v + 2k) = 44 − 36 gives v = 8. Then 16 + k = 22, so k = 6." }
  - hint: ["The $k$ terms are $-2k$ and $+2k$. Adding makes them cancel.", "$5v + 3v = 8v$ and $28 + 36 = 64$."]
    check: { type: number, q: "Edge case: $5v - 2k = 28$ and $3v + 2k = 36$. The $k$ terms are opposite, so add the equations. What is $v$?", answer: 8, feedback: [[2, "28 − 36 = −8 is a subtraction. Add: 28 + 36 = 64."], [64, "That is the total. 8v = 64, so divide by 8."]], explain: "Adding: 8v + 0 = 64, so v = 8. Then 3 × 8 + 2k = 36, so k = 6." }
  - check:
      type: question
      q: "Edge case: $2v + 3k = 12$ and $4v + 6k = 20$. Multiply the first by 2 to get $4v + 6k = 24$. Subtracting the second from it gives $0 = 4$. What does that tell you?"
      options: ["There is no solution: no visit and class price can make both true", "v = 0", "There are infinitely many solutions"]
      answer: 0
      feedback: [null, "0 = 4 is false whatever v and k are. It does not say v is 0.", "Infinitely many solutions give a true result such as 0 = 0."]
      explain: "0 = 4 can never be true, so no pair of prices works on both receipts. On a graph the two lines are parallel."
  - check:
      type: question
      q: "Edge case: $2v + 3k = 12$ and $4v + 6k = 24$. Multiply the first by 2 and subtract. You get $0 = 0$. What does that tell you?"
      options: ["Every pair that works on the first works on the second: infinitely many solutions", "There is no solution", "v = 0 and k = 0"]
      answer: 0
      feedback: [null, "0 = 0 is true, so there is no contradiction.", "0 = 0 says nothing about v or k."]
      explain: "The second equation is the first one doubled, so it adds no new information. Many pairs work, such as v = 3, k = 2 and v = 6, k = 0."
```

### Multiply first

### Finish it

### Opposite signs

### No solution

### Infinitely many

## Practise: pairs of equations

```step
stage: practise
insight: "Choosing add, subtract or multiply first, and using the cancelled letter's value to find the other; the review keeps substitution fresh."
tasks:
  - check:
      type: number
      q: "Solve $3a + 2b = 27$ and $3a + 5b = 45$. What is $b$?"
      answer: 6
      feedback:
        - [5, "That is a. The question asks for b."]
        - [18, "That is 3b. Divide by 3."]
      explain: "Subtract: 3b = 18, so b = 6. Then 3a + 12 = 27, so a = 5."
    smaller:
      check: { type: number, q: "Take the first equation from the second: what is $45 - 27$?", answer: 18, explain: "45 − 27 = 18, so 3b = 18." }
  - check:
      type: number
      q: "Solve $4x + 3y = 26$ and $2x - 3y = 4$. What is $x$?"
      answer: 5
      feedback:
        - [2, "That is y. The question asks for x."]
        - [22, "That subtracts the equations: 26 − 4. The y terms are opposite, so add."]
      explain: "Add: 6x = 30, so x = 5. Then 20 + 3y = 26, so y = 2."
    smaller:
      check: { type: number, q: "Add the two right-hand sides: $26 + 4$.", answer: 30, explain: "26 + 4 = 30, so 6x = 30." }
  - check:
      type: question
      q: "Which is the best first step for $x + 2y = 11$ and $3x + 2y = 17$?"
      options: ["Subtract the first from the second: the $2y$ cancels", "Add them: the $2y$ cancels", "Multiply the first by 3 and add"]
      answer: 0
      feedback: [null, "Adding gives 4x + 4y. The 2y terms have the same sign, so they only cancel when subtracted.", "That does not make a letter cancel."]
      explain: "Both have +2y, so subtract: 2x = 6, x = 3. Then 3 + 2y = 11, so y = 4."
  - check:
      type: number
      q: "Review (substitution): solve $y = 3x$ and $x + y = 20$. What is $x$?"
      answer: 5
      feedback:
        - [15, "That is y. The question asks for x."]
        - [20, "Replace y by 3x, in the second equation: x + 3x = 20."]
      explain: "x + 3x = 20, so 4x = 20 and x = 5. Then y = 15."
```

### Subtract

### Add

### Which first step?

### Review

Substitution, from the last lesson.

## Make: another gym

```step
stage: make
insight: "Coming back to the gym: when the two receipts have no matching count, multiply each equation so the same letter has the same coefficient, then subtract."
tasks:
  - hint: ["Multiply Dev's equation by 3 and Eli's by 2 to make both $6c$.", "Then subtract and find $s$."]
    check:
      type: reasoning
      paper: true
      q: "At a different gym, a class costs $c$ dollars and a swim costs $s$ dollars. Dev paid 33 dollars for 2 classes and 3 swims. Eli paid 32 dollars for 3 classes and 2 swims. Solve $2c + 3s = 33$ and $3c + 2s = 32$ on paper. What does one swim cost?"
      steps:
        - ["$6c + 9s = 99$ and $6c + 4s = 64$", "multiply Dev's equation by 3 and Eli's by 2"]
        - ["$5s = 35$", "subtract: the 6c cancels; 9s − 4s and 99 − 64"]
        - ["$s = 7$", "divide by 5; then $c = 6$ from $2c + 21 = 33$"]
      answer: 7
      answerLabel: "Price of one swim (dollars)"
      feedback:
        - [6, "That is the price of a class. The question asks for a swim."]
        - [35, "That is 5s. Divide by 5."]
      criteria:
        - "I multiplied both sides of each equation, not only the left."
        - "The 6c terms matched, then cancelled."
        - "I found c as well and checked it in the other receipt."
      explain: "Multiply Dev by 3 and Eli by 2, then subtract: 5s = 35, so s = 7. Then 2c + 21 = 33 gives c = 6. Check Eli: 18 + 14 = 32."
  - check:
      type: number
      q: "At that gym a class costs 6 dollars and a swim 7 dollars. Fay buys 5 classes and 2 swims. How many dollars is that?"
      answer: 44
      feedback:
        - [37, "That is 5 classes and 1 swim. Fay buys 2 swims."]
        - [30, "That is the classes only. Add the 2 swims at 7 dollars each."]
      explain: "5 × 6 + 2 × 7 = 30 + 14 = 44 dollars."
```

### Dev and Eli

Work it out on paper first, then type the price of one swim.

### Fay's bill

The prices are made up so the answers are whole. Real prices are rarely so tidy, but the method does not change.

**Also used in**

- **Everyday life.** Any two bills that share the same unit prices: shopping receipts, canteen orders, ticket sales.
- **Next lessons.** Setting up equations from a situation, so you can choose the method that is quicker.
