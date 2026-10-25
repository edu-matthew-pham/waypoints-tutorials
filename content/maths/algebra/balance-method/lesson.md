---
order: 9
unit: equations
node: AC9M7A03 n3
assumes: [AC9M6A02 n2]
title: The balance method
summary: Do the same to both sides to get x on its own, then check your answer in the first equation.
language: maths
hook: "Engineers, nurses working out doses and anyone splitting a bill rearrange equations this way: keep it balanced, and every step stays true."
connection: savings-weeks   # data/connections/maths.yml (Make on paper and Also used in; documentation only)
---
Backtracking stops working when $x$ is on **both** sides, as in $x + 7 = 3x + 1$. What can you do instead?

## Predict: one move on both sides

```step
stage: predict
insight: "Committing to the equation that one move leaves makes the move itself the thing students test on the board."
check:
  type: predict
  q: "$2x + 3 = 11$. You take 3 from **both** sides. What equation is left?"
  options: ["$2x = 8$", "$2x = 11$", "$x = 8$", "$2x + 3 = 8$"]
  actual: "2x = 8. The left loses its 3 blocks and the right loses 3 too: 11 − 3 = 8. The bags of x stay."
```
<figure class="situation" role="img" aria-label="A balance scale. On the left are two bags, each holding x blocks, and 3 loose blocks. On the right are 11 blocks. The scale is level. Three blocks are about to be taken from each side."><svg viewBox="0 0 430 205" width="430" style="max-width:100%;height:auto" fill="none" stroke="currentColor" font-family="inherit" font-size="14"><path d="M100 40 H330" stroke-width="1.5"/><path d="M215 40 V150 M185 150 H245" stroke-width="1.5"/><path d="M110 40 L20 120 H200 Z M320 40 L230 120 H410 Z" stroke-width="0.8"/><rect x="28" y="76" width="40" height="44" rx="10" fill="#7F77DD" fill-opacity="0.35" stroke="#534AB7" stroke-width="0.8"/><text x="48" y="104" text-anchor="middle" fill="currentColor" stroke="none">x</text><rect x="74" y="76" width="40" height="44" rx="10" fill="#7F77DD" fill-opacity="0.35" stroke="#534AB7" stroke-width="0.8"/><text x="94" y="104" text-anchor="middle" fill="currentColor" stroke="none">x</text><rect x="124" y="100" width="20" height="20" rx="3" fill="#1D9E75" fill-opacity="0.3" stroke="#0F6E56" stroke-width="0.8"/><rect x="148" y="100" width="20" height="20" rx="3" fill="#1D9E75" fill-opacity="0.3" stroke="#0F6E56" stroke-width="0.8"/><rect x="172" y="100" width="20" height="20" rx="3" fill="#1D9E75" fill-opacity="0.3" stroke="#0F6E56" stroke-width="0.8"/><rect x="234" y="100" width="20" height="20" rx="3" fill="#1D9E75" fill-opacity="0.3" stroke="#0F6E56" stroke-width="0.8"/><rect x="262" y="100" width="20" height="20" rx="3" fill="#1D9E75" fill-opacity="0.3" stroke="#0F6E56" stroke-width="0.8"/><rect x="290" y="100" width="20" height="20" rx="3" fill="#1D9E75" fill-opacity="0.3" stroke="#0F6E56" stroke-width="0.8"/><rect x="318" y="100" width="20" height="20" rx="3" fill="#1D9E75" fill-opacity="0.3" stroke="#0F6E56" stroke-width="0.8"/><rect x="346" y="100" width="20" height="20" rx="3" fill="#1D9E75" fill-opacity="0.3" stroke="#0F6E56" stroke-width="0.8"/><rect x="374" y="100" width="20" height="20" rx="3" fill="#1D9E75" fill-opacity="0.3" stroke="#0F6E56" stroke-width="0.8"/><rect x="234" y="74" width="20" height="20" rx="3" fill="#1D9E75" fill-opacity="0.3" stroke="#0F6E56" stroke-width="0.8"/><rect x="262" y="74" width="20" height="20" rx="3" fill="#1D9E75" fill-opacity="0.3" stroke="#0F6E56" stroke-width="0.8"/><rect x="290" y="74" width="20" height="20" rx="3" fill="#1D9E75" fill-opacity="0.3" stroke="#0F6E56" stroke-width="0.8"/><rect x="318" y="74" width="20" height="20" rx="3" fill="#1D9E75" fill-opacity="0.3" stroke="#0F6E56" stroke-width="0.8"/><rect x="346" y="74" width="20" height="20" rx="3" fill="#1D9E75" fill-opacity="0.3" stroke="#0F6E56" stroke-width="0.8"/><text x="110" y="142" text-anchor="middle" fill="currentColor" stroke="none">2 bags and 3 blocks</text><text x="320" y="142" text-anchor="middle" fill="currentColor" stroke="none">11 blocks</text><text x="215" y="185" text-anchor="middle" fill="currentColor" stroke="none">Take 3 blocks from each side. What equation is left?</text></svg></figure>


The left side has two bags of $x$ and 3 blocks. The right side has 11 blocks. Picture taking 3 blocks from each side.

## Run: keep it balanced

```step
stage: run
insight: "Taking the same from both sides, then sharing both sides equally, keeps the equation true at every step and leaves x alone."
try: { playground: board, starter: "solve.yml#run", height: 520 }
check: { type: board, text: "Get $x$ on its own on one side.", expect: { solved: true } }
```

Use **Take away** and **Share** on the board. This is the **balance method**: whatever you do to one side, do to the other, so the scale stays level. It works for every linear equation. The list underneath writes your steps as algebra.

## Investigate: write it as algebra

```step
stage: investigate
insight: "Each move on the scale is a line of algebra, and checking in the first equation catches mistakes."
tasks:
  - check:
      type: parsons
      code: "steps.txt#order"
      text: "Put the steps for solving $4x + 3 = 23$ in order."
      extra: ["4x = 26"]
      explain: "Take 3 from both sides (4x = 20), divide both sides by 4 (x = 5), then check in the first equation."
  - check:
      type: bug
      code: "working.txt#leo"
      text: "Leo solves $2x + 3 = 11$, but his check fails. Click the first line that goes wrong."
      answer: 2
      fault: logic
      misconception: one-side-only
      explain: "Line 2: Leo took 3 from the left side only. The right side has to lose 3 too: 2x = 8, so x = 4. Check: 2 × 4 + 3 = 11."
  - check:
      type: question
      q: "To solve $3x + 5 = 20$, which first step keeps whole numbers?"
      options: ["Take 5 from both sides", "Divide both sides by 3"]
      answer: 0
      explain: "Both are allowed, but dividing first gives x + 5/3 = 20/3. Taking 5 first gives 3x = 15, then x = 5."
```

### In order

Each line keeps the equation balanced.

```worked
3x + 5 = 20 :: Start with the equation.
3x + 5 - 5 = 20 - 5 :: Take 5 from **both** sides.
3x = 15 :: Now three lots of $x$ are 15.
\frac{3x}{3} = \frac{15}{3} :: Divide **both** sides by 3.
x = 5 :: $x$ is on its own.
3(5) + 5 = 20 \checkmark :: Check in the **first** equation, not the last line.
```

### Find the mistake

Leo's check failed. Look at what he did to each side.

### Which step first?

Either step keeps the balance. One keeps the numbers simpler.

## Modify: harder scales

```step
stage: modify
insight: "Taking away bags of x from both sides is the same move as taking away blocks, and it handles x on both sides."
try: { playground: board, starter: "solve.yml#four-x", height: 520 }
tasks:
  - starter: "solve.yml#four-x"
    check: { type: board, text: "Solve $4x + 7 = 31$ on the scale.", expect: { solved: true } }
  - starter: "solve.yml#five-x"
    hint: ["Bags of x can be taken away too.", "Take 2 bags of x from both sides."]
    check: { type: board, text: "Solve $5x = 2x + 12$.", expect: { solved: true } }
  - starter: "solve.yml#both-sides"
    hint: ["There are bags and blocks on both sides.", "Take one bag of x from both sides first."]
    check: { type: board, text: "Solve $x + 7 = 3x + 1$.", expect: { solved: true } }
```

### Bigger numbers

Each task loads a new scale. Same moves, bigger numbers.

### Bags on both sides

Now there are bags of $x$ on both sides. Backtracking cannot solve this; the balance method can.

### Bags and blocks on both sides

Bags and blocks on both sides. Get the bags on one side first.

## Practise: solve and check

```step
stage: practise
insight: "Solving and then checking in the first equation becomes one routine."
tasks:
  - check:
      type: answer
      q: "Solve $5x + 4 = 39$."
      answer: "7"
      feedback:
        - ["7.8", "Did you take 4 from the left side only? Take it from both sides: 5x = 35."]
        - ["35", "That is 5x. Now divide both sides by 5."]
      explain: "5x + 4 − 4 = 39 − 4, so 5x = 35 and x = 7. Check: 5 × 7 + 4 = 39."
  - check:
      type: answer
      q: "Solve $9x = 4x + 35$."
      answer: "7"
      feedback:
        - ["35/13", "It looks like 4x was added to both sides. Take 4x from both sides: 5x = 35."]
        - ["35", "That is 5x. Now divide both sides by 5."]
      explain: "Take 4x from both sides: 5x = 35. Divide by 5: x = 7. Check: 9 × 7 = 63 and 4 × 7 + 35 = 63."
  - check:
      type: answer
      q: "Solve $6x + 2 = 4x + 12$."
      answer: "5"
      feedback:
        - ["5/3", "It looks like the 4x on the right was left out. Take 4x from both sides: 2x + 2 = 12."]
        - ["10", "That is 2x. Now divide both sides by 2."]
      explain: "Take 4x from both sides: 2x + 2 = 12. Take 2: 2x = 10. Divide by 2: x = 5. Check: 6 × 5 + 2 = 32 and 4 × 5 + 12 = 32."
    smaller:
      check: { type: "answer", q: "Take $4x$ from both sides. What's left on the left side?", answer: "2x + 2", explain: "$6x - 4x = 2x$, so the left side is $2x + 2$ and the right side is 12." }
```

### Two steps

### Bags on both sides

### Bags and blocks on both sides

## Make: your own balance

```step
stage: make
insight: "Writing an equation with x on both sides from a chosen solution shows the balance method is reversible."
hint: ["Pick two expressions with x, such as 4x + 1 and 2x + 7.", "Work out both when x = 3: 13 and 13. They match, so 4x + 1 = 2x + 7 works."]
check:
  type: answer
  q: "Write an equation with $x$ on both sides whose solution is $x = 3$."
  equation: { x: 3 }
  explain: "Your equation is true when x = 3: both sides have the same value."
```

Give it to a friend to solve with the balance method, then check their answer in your first equation.

## Make: two savers on paper

```step
stage: make
insight: "Two people saving at different rates have x on both sides: the paper task asks for the move that gets the w terms together and the check in the first equation."
hint: ["Take the smaller amount of w from both sides first.", "Check in the first equation, not the last line."]
check:
  type: reasoning
  paper: true
  q: "Mia has \\$20 and saves \\$15 a week. Jo has \\$80 and saves \\$10 a week. After how many weeks will they have the same amount? On paper, write the equation and solve it with the balance method."
  steps:
    - ["$20 + 15w = 80 + 10w$", "the same amount after $w$ weeks"]
    - ["$20 + 5w = 80$", "take $10w$ from both sides, so the $w$ terms are on one side"]
    - ["$5w = 60$", "take 20 from both sides"]
    - ["$w = 12$", "divide both sides by 5"]
    - ["Check: $20 + 15 \\times 12 = 200$ and $80 + 10 \\times 12 = 200$", "check in the first equation"]
  picks:
    - step: 2
      q: "Why take $10w$ from both sides?"
      options:
        - "It gets the $w$ terms together on one side, and both sides lose the same"
        - "It takes $10w$ from the left only, which is all that is needed"
        - "It removes the blocks so only bags are left"
      answer: 0
      feedback: [null, "The same must come from both sides, or the equation is no longer balanced.", "Taking $10w$ removes bags, not blocks. And both sides must lose it."]
  answer: "12"
  answerLabel: "Weeks"
  feedback:
    - ["4", "That ignores Jo's $10w$. Jo's savings grow too, so take $10w$ from both sides."]
    - ["60", "That is $5w$. Divide both sides by 5."]
    - ["6", "Check it: Mia has 20 + 90 = 110 and Jo has 80 + 60 = 140."]
  criteria:
    - "I did the same to both sides at every step."
    - "I got the $w$ terms together before the numbers."
    - "I checked 12 weeks in the first equation, for both people."
  explain: "Take 10w from both sides: 20 + 5w = 80. Take 20: 5w = 60. Divide by 5: w = 12. Check: each has \\$200."
```

Do this one in your book. The amounts are made up, but comparing two savings plans or two phone plans works this way. Write each step on both sides, check in the first equation, then type the number of weeks and choose the reason for the second line.

**Also used in**

- **Saving up.** \$45 saved plus \$15 a week for a \$180 ticket: do the same to both sides until $w$ is alone.
- **Comparing plans.** Two phone or gym plans, each with a fixed fee and a rate: when do they cost the same?
- **Formulas.** Rearranging speed = distance ÷ time uses the same moves on both sides.
