---
order: 23
unit: solve10
node: AC9M10A02 n1
assumes: [AC9M8A02 n3]   # Year 8 Inequalities: solving, reversing for a negative, rays
connection: ride-budget
title: Solving inequalities
summary: "Solve an inequality from a budget, read the answer in the context (whole rides, not 6.2), reverse the sign when you divide by a negative, put the unknown on both sides and solve a range."
language: maths
voice: { name: af_heart, speed: 1.1 }
hook: "A fair has an entry fee and a price for each ride, and your money is fixed. How do you work out the most rides you can go on?"
app:
  command: node "$REPO_ROOT/tools/serve.mjs" "$REPO_ROOT/dist/_playground-board" 8372
  url: http://127.0.0.1:8372/index.html
  readySelector: "#sl-r"
  layout: full
explainPicture: { ref: inequality.yml#explain-pic, caption: "$12 + 4.5r$ against the $40 limit: 6 rides cost $39, and 7 would cost $43.50." }
explainClip:
  query: { code: "@inequality.yml#explain", fresh: 1, id: explain }
  caption: "Rides until the cost passes $40"
  say: "Add rides until the cost passes forty dollars."
  clip:
    - caption: { text: "No rides: just the $12 entry.", say: "With no rides, you have paid the twelve dollar entry." }
    - wait: 900
    - caption: { text: "Each ride adds $4.50. Keep going while the point is below the dashed $40 line.", say: "Each ride adds four dollars fifty. Keep going while the point is under the line." }
    - click: Make r bigger
    - click: Make r bigger
    - click: Make r bigger
    - click: Make r bigger
    - click: Make r bigger
    - click: Make r bigger
    - wait: 700
    - caption: { text: "6 rides: $39. One more ride goes over.", say: "Six rides cost thirty nine dollars. One more goes over." }
    - click: Make r bigger
    - wait: 1400
---
Last year you solved inequalities like equations and reversed the sign for a negative. This lesson puts them in a budget, where the answer has to make sense as well as be right. (All prices here are made up.)

<figure class="situation" role="img" aria-label="A price board for a day at the fair. Entry costs 12 dollars. Each ride costs 4 dollars 50. A purse holds 40 dollars. A question mark asks how many rides you can go on."><svg viewBox="0 0 420 190" width="420" style="max-width:100%;height:auto" fill="none" stroke="currentColor" font-family="inherit" font-size="15"><rect x="30" y="20" width="360" height="130" rx="8" stroke-width="1.4"/><text x="55" y="58" fill="currentColor" stroke="none">Entry</text><text x="345" y="58" text-anchor="end" fill="currentColor" stroke="none">$12</text><text x="55" y="92" fill="currentColor" stroke="none">Each ride</text><text x="345" y="92" text-anchor="end" fill="currentColor" stroke="none">$4.50</text><path d="M55 108h290" stroke-width="1"/><text x="55" y="132" fill="currentColor" stroke="none">You have</text><text x="345" y="132" text-anchor="end" fill="currentColor" stroke="none">$40</text><text x="210" y="178" text-anchor="middle" fill="currentColor" stroke="none" font-size="18">How many rides?</text></svg></figure>

## Predict: the rides

```step
stage: predict
insight: "Committing to the number of rides shows who forgets the entry fee (40 ÷ 4.50 is about 8.9) and who rounds up."
check:
  type: predict
  q: "Entry is $12 and each ride is $4.50. You have $40. What is the most rides you can go on?"
  options:
    - "$6$"
    - "$7$"
    - "$8$"
    - "$9$"
  actual: "6. After the $12 entry you have $28, and 28 ÷ 4.50 is about 6.2, so 6 whole rides. 8 forgets the entry fee (40 ÷ 4.50 is 8.9). 7 rounds 6.2 up, but 7 rides cost 12 + 31.50 = $43.50, which is over."
```

Make a guess, then test it on the board.

## Run: add rides

```step
stage: run
insight: "The cost is 12 + 4.5 per ride, and the most rides is the last whole number where the cost is still at most 40: the inequality is 12 + 4.5r ≤ 40."
try: { playground: board, starter: "inequality.yml#run", height: 560 }
check: { type: board, text: "Move $r$ to the most rides that keep the point on or under the dashed $40 line. Was your prediction right?", when: "r = 6" }
```

$r$ is the number of rides. The slanted line is the cost, and the dashed line is your $40.

## Investigate: solve, then read it

```step
stage: investigate
insight: "Solving 12 + 4.5r ≤ 40 gives r ≤ 6.2, and the context decides the answer: rides come whole, so 6. Lena divides by a negative and keeps the sign, and her check fails."
try: { playground: board, starter: "inequality.yml#ray", height: 380 }
tasks:
  - starter: "inequality.yml#ray"
    hint: ["Take 6 from both sides, then divide by 2.5.", "8 hours costs exactly $26, which you can afford: closed circle."]
    check: { type: board, text: "A scooter costs $6 to hire and $2.50 an hour, and you have $26. Solve $6 + 2.5x \\le 26$, then show it: move $P$, choose the circle and the direction.", when: "x(P) = 8 and k = 1 and s = -1", explain: "2.5x ≤ 20, so x ≤ 8: a closed circle at 8 (8 hours costs exactly $26), shaded left." }
  - check:
      type: bug
      code: "working.txt#lena"
      text: "Lena solves $40 - 4.5r \\ge 12$, the money left after the rides. Click the line where her working goes wrong."
      answer: 3
      fault: logic
      misconception: inequality-reverse
      explain: "Line 3: dividing by −4.5 reverses the sign, so r ≤ 6.2. Her check on line 4 is the clue: r = 0 is allowed, and 0 ≥ 6.2 is false."
  - check:
      type: question
      q: "$12 + 4.5r \\le 40$ gives $r \\le 6.2$. How many rides can you go on?"
      options: ["6", "7", "6.2"]
      answer: 0
      feedback: [null, "7 rides cost 12 + 31.50 = $43.50, which is over $40.", "Rides come whole: you can't go on 0.2 of a ride."]
      explain: "r ≤ 6.2 includes 6 but not 7, and rides are whole numbers, so 6 is the most. The solution of the inequality is a range, and the context picks the values that make sense."
```

### Solve and show it

Here's how a budget becomes an inequality.

```worked
9 + 3.5h \le 30 :: $9 to hire a bike plus $3.50 an hour, and no more than $30.
3.5h \le 21 :: Take 9 from both sides.
h \le 6 :: Divide by 3.5 (positive): the sign stays.
\text{closed circle at } 6,\ \text{shaded left} :: 6 hours costs exactly $30, which is allowed, so the circle is closed.
9 + 3.5 \times 5 = 26.50 \le 30 :: Check a value from the shaded part in the original.
```

Now try one on paper, step by step like the example: the scooter, then show it on the board.

### Find the mistake

Read Lena's working. Her check is a clue.

### Read the answer

## Modify: one change at a time

```step
stage: modify
insight: "One change at a time: a negative in front of the unknown, the unknown on both sides, a strict inequality with a whole-number boundary, and a range between two values."
try: { playground: board, starter: "inequality.yml#ray", height: 380 }
tasks:
  - starter: "inequality.yml#ray"
    hint: ["Take 18 from both sides: −3x > −12.", "Divide by −3 and reverse the sign."]
    check: { type: board, text: "You have $18 and each game costs $3, and you want more than $6 left: $18 - 3x > 6$. Solve it and show it.", when: "x(P) = 4 and k = 0 and s = -1", explain: "−3x > −12, then divide by −3 and reverse: x < 4. Open circle at 4, shaded left. Check x = 3: 18 − 9 = 9 > 6. ✓" }
    smaller:
      check:
        type: question
        q: "$-3x > -12$. Divide both sides by $-3$. What is the answer?"
        options: ["$x < 4$", "$x > 4$"]
        answer: 0
        feedback: [null, "Dividing by a negative reverses the sign."]
        explain: "Dividing by −3 reverses > into <: x < 4."
  - starter: "inequality.yml#ray"
    hint: ["Take 2x from both sides first.", "3x + 3 ≥ 15, then 3x ≥ 12."]
    check: { type: board, text: "The unknown is on both sides. Solve $5x + 3 \\ge 2x + 15$ and show it.", when: "x(P) = 4 and k = 1 and s = 1", explain: "3x + 3 ≥ 15, 3x ≥ 12, x ≥ 4: closed circle at 4, shaded right." }
  - hint: ["$12 + 4.5r < 39$ gives $4.5r < 27$.", "Is 6 less than 6, or equal to it?"]
    check:
      type: number
      q: "Edge case: you have to spend less than $39, so $12 + 4.5r < 39$. What is the most whole rides?"
      answer: 5
      feedback:
        - [6, "6 rides cost exactly $39, but the sign is strict: it has to be less than 39."]
      explain: "4.5r < 27, so r < 6. The boundary 6 is not included, so the most whole rides is 5."
  - hint: ["Do the same to all three parts.", "Add 4 to all three, then divide all three by 2."]
    check:
      type: question
      q: "Solve $8 < 2x - 4 \\le 14$."
      options: ["$6 < x \\le 9$", "$4 < x \\le 7$", "$6 \\le x < 9$", "$12 < x \\le 18$"]
      answer: 0
      feedback: [null, "Add 4 to all three parts, not take it away: 12 < 2x ≤ 18.", "The circles are the other way: the left sign is < (open) and the right is ≤ (closed).", "That is 12 < 2x ≤ 18. Divide all three by 2."]
      explain: "Add 4: 12 < 2x ≤ 18. Divide by 2: 6 < x ≤ 9. Open circle at 6, closed at 9."
```

### A negative

### Both sides

### A strict boundary

### A range

## Practise: solve and read

```step
stage: practise
insight: "Solving with and without reversal, reading the context, and a range of answers, with the review keeping reshaping fresh."
try: { playground: board, starter: "inequality.yml#ray", height: 380 }
tasks:
  - starter: "inequality.yml#ray"
    check: { type: board, text: "Solve $7 + 3x < 22$ and show it.", when: "x(P) = 5 and k = 0 and s = -1", explain: "3x < 15, x < 5: open circle at 5, shaded left." }
  - starter: "inequality.yml#ray"
    check: { type: board, text: "Solve $20 - 2x \\le 8$ and show it.", when: "x(P) = 6 and k = 1 and s = 1", explain: "−2x ≤ −12, then divide by −2 and reverse: x ≥ 6. Closed circle at 6, shaded right." }
    smaller:
      check:
        type: question
        q: "After taking 20 from both sides, $-2x \\le -12$. What do you do next?"
        options: ["Divide by −2 and reverse the sign", "Divide by −2 and keep the sign", "Divide by 2 and keep the sign"]
        answer: 0
        feedback: [null, "Dividing by a negative reverses the sign.", "The −2 is negative: divide by −2, not 2."]
        explain: "Divide by −2 and reverse: x ≥ 6."
  - check:
      type: number
      q: "A skate park charges $8 entry and $2.50 a game. You have $30. What is the most whole games?"
      answer: 8
      feedback:
        - [9, "9 games cost 8 + 22.50 = $30.50, which is over."]
        - [8.8, "Games come whole. 8.8 isn't a number of games."]
      explain: "8 + 2.5g ≤ 30, so 2.5g ≤ 22 and g ≤ 8.8. The most whole games is 8."
  - check:
      type: question
      q: "Solve $5 - 2x \\ge 11$."
      options: ["$x \\le -3$", "$x \\ge -3$", "$x \\ge 3$", "$x \\le 3$"]
      answer: 0
      feedback: [null, "Dividing by −2 reverses the sign.", "5 − 11 is −6, not +6, and then reverse the sign.", "Take 5 from both sides: −2x ≥ 6, so x ≤ −3."]
      explain: "−2x ≥ 6, then divide by −2 and reverse: x ≤ −3. Check x = −4: 5 + 8 = 13 ≥ 11. ✓"
  - check:
      type: number
      q: "Review: solve $x^2 + x = 20$. Give the positive solution."
      answer: 4
      feedback:
        - [20, "Move the 20 across first: x² + x − 20 = 0."]
        - [-5, "That is the other solution. The question asks for the positive one."]
      explain: "x² + x − 20 = 0, so (x + 5)(x − 4) = 0: x = −5 or x = 4. The positive one is 4."
```

### Solve and show

### A negative

### In a context

### Reverse or not

### Review

Reshaping and factorising, from the last lesson.

## Make: a second park

```step
stage: make
insight: "Back to the fair: Park B has a higher entry and cheaper rides, so the question is when B costs less, an inequality with the unknown on both sides, read as whole rides."
tasks:
  - hint: ["Park A costs 12 + 4.5r, and Park B costs 20 + 3r.", "Take 12 and 3r from both sides."]
    check:
      type: reasoning
      paper: true
      q: "Park B charges $20 entry and $3 a ride. Park A charges $12 entry and $4.50 a ride. Prices are made up. What is the fewest whole rides for which Park B costs less than Park A?"
      steps:
        - ["$20 + 3r < 12 + 4.5r$", "Park B costs less than Park A"]
        - ["$8 < 1.5r$", "take 12 and 3r from both sides"]
        - ["$r > 5.33\\ldots$", "divide by 1.5 (positive): the sign stays"]
        - ["$r \\ge 6$", "rides are whole, and 5 is not more than 5.33"]
      picks:
        - step: 4
          q: "Why is it 6 rides, not 5?"
          options: ["5 is not more than 5.33, and at 5 rides B ($35) still costs more than A ($34.50)", "5.33 rounds to 5", "6 is the closest whole number to 5.33"]
          answer: 0
          feedback: [null, "Rounding to the nearest isn't the rule. The inequality is strict: r has to be more than 5.33.", "Closest isn't the rule. The inequality says r > 5.33, so 5 fails and 6 works."]
      answer: "6"
      answerLabel: "Fewest rides"
      feedback:
        - ["5", "At 5 rides A costs $34.50 and B costs $35. B isn't cheaper yet."]
        - ["5.33", "Rides come whole: use the first whole number above 5.33."]
      criteria:
        - "I wrote both costs and the inequality between them."
        - "I took the same from both sides and divided by a positive number, so the sign stayed."
        - "I gave a whole number and checked it in both costs."
      explain: "r > 5.33, so r ≥ 6. Check at 6 rides: A costs 12 + 27 = $39 and B costs 20 + 18 = $38. B is cheaper."
  - check:
      type: number
      q: "With $40, how many rides can you go on at Park B?"
      answer: 6
      feedback:
        - [7, "7 rides at B cost 20 + 21 = $41, which is over $40."]
        - [6.67, "Rides come whole. Round down, not to the nearest."]
      explain: "20 + 3r ≤ 40, so 3r ≤ 20 and r ≤ 6.67. The most is 6 rides (cost $38), the same as Park A with $40, but B costs $1 less."
```

### Two parks

Do this one on paper first, then type your answer.

### Park B with $40

**Also used in**

- **Budgets and limits.** A phone plan with a data cap, or a hire price that includes a fixed fee.
- **Comparing plans.** Where one plan becomes cheaper than another is an inequality with the unknown on both sides.
- **Next.** Two limits at once: an inequality with two variables, drawn as a shaded region.
