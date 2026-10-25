---
order: 23
unit: twovars10
node: AC9M10A02 n2
uses: [AC9M8A02 n1]
assumes: [AC9M8A02 n1, AC9M10A02 n1]
connection: party-region
title: Regions from a budget
summary: "A budget gives an inequality with two letters: 24p + 12d ≤ 120. Find where its boundary meets each axis, draw the line, and the shaded side holds every plan that fits."
language: maths
voice: { name: af_heart, speed: 1.1 }
hook: "A fixed budget never gives one answer. It gives a whole set of plans, and some of them are better than others."
app:
  command: node "$REPO_ROOT/tools/serve.mjs" "$REPO_ROOT/dist/_playground-board" 8375
  url: http://127.0.0.1:8375/index.html
  readySelector: "#legend"
  layout: full
explainPicture: { ref: budget.yml#explain-pic, caption: "$24p + 12d \\le 120$. Plan A (2 pizzas, 3 packs) costs 84 dollars and fits. Plan B (3 pizzas, 5 packs) costs 132 dollars and does not." }
explainClip:
  query: { code: "@budget.yml#explain", fresh: 1, id: explain }
  caption: "A budget is a region"
  say: "Every point in the shaded region is a plan the budget can pay for."
  clip:
    - caption: { text: "p pizzas and d packs cost 24p + 12d dollars. The budget is 120 dollars.", say: "Pizzas cost twenty four dollars, packs twelve. The budget is a hundred and twenty." }
    - wait: 1000
    - caption: { text: "A: 2 pizzas, 3 packs: 48 + 36 = 84. That is 120 or less, so A is in the region.", say: "Plan A costs eighty four dollars. That fits, so it is in the region." }
    - wait: 1200
    - caption: { text: "B: 3 pizzas, 5 packs: 72 + 60 = 132. More than 120, so B is outside.", say: "Plan B costs a hundred and thirty two. That is over, so it is outside." }
    - wait: 1400
---
A class party has a fixed amount of money, and every pizza and every pack of drinks takes some of it. The prices in this lesson are made up so the numbers are easy to follow; real prices change from shop to shop.

## Predict: spend the budget

```step
stage: predict
insight: "Committing to how many packs fit after four pizzas shows who works out what is left (120 − 96 = 24) and who adds the prices or divides the budget by one price."
check:
  type: predict
  q: "A pizza costs 24 dollars and a pack of drinks costs 12 dollars. The class has 120 dollars. After buying 4 pizzas, how many packs of drinks can they still afford?"
  options:
    - "$2$ packs"
    - "$5$ packs"
    - "$8$ packs"
    - "$10$ packs"
  actual: "2 packs. Four pizzas cost 4 × 24 = 96 dollars, which leaves 24 dollars, and 24 ÷ 12 = 2 packs."
```

<figure class="situation" role="img" aria-label="A price list: pizza 24 dollars, pack of drinks 12 dollars, budget 120 dollars. Beneath it, a row of four pizza boxes and a question mark for the number of drink packs."><svg viewBox="0 0 420 190" width="420" style="max-width:100%;height:auto" fill="none" stroke="currentColor" font-family="inherit" font-size="14"><rect x="10" y="10" width="200" height="78" rx="8"/><text x="22" y="34" fill="currentColor" stroke="none">pizza: 24 dollars</text><text x="22" y="56" fill="currentColor" stroke="none">pack of drinks: 12 dollars</text><text x="22" y="78" fill="currentColor" stroke="none">budget: 120 dollars</text><g fill="#EF9F27" fill-opacity="0.35" stroke="#854F0B"><rect x="10" y="112" width="52" height="34" rx="4"/><rect x="72" y="112" width="52" height="34" rx="4"/><rect x="134" y="112" width="52" height="34" rx="4"/><rect x="196" y="112" width="52" height="34" rx="4"/></g><text x="10" y="170" fill="currentColor" stroke="none">4 pizzas</text><rect x="290" y="112" width="52" height="34" rx="4" stroke-dasharray="5 4"/><text x="308" y="136" fill="currentColor" stroke="none">?</text><text x="270" y="170" fill="currentColor" stroke="none">packs of drinks</text></svg></figure>

The prices are made up. The question is what the budget leaves after the pizzas.

## Run: every plan that fits

```step
stage: run
insight: "The region d ≤ 10 − 2p is the budget in picture form: any point inside is a plan the class can pay for, and points on the line spend the whole 120 dollars."
try: { playground: board, starter: "budget.yml#run", height: 600 }
check: { type: board, text: "Drag $P$ into the shaded region. The point $(p, d)$ means $p$ pizzas and $d$ packs. Check that the plan costs 120 dollars or less. Was your prediction right about 4 pizzas?", when: "y(P) <= 10 - 2 * x(P)" }
```

The shaded side is the budget written as a picture. Each point is one plan: the $p$ is pizzas and the $d$ is packs. Find the point with 4 pizzas. How high does the shading go?

## Investigate: from the budget to the line

```step
stage: investigate
insight: "Each axis intercept divides the budget by that item's own price. Mia divides by the pizza price on both axes, so her line is in the wrong place; trying it again on paper with a new budget shows whether the idea sticks."
try: { playground: board, starter: "budget.yml#run", height: 600 }
tasks:
  - check:
      type: number
      q: "Buy no pizzas ($p = 0$). How many packs of drinks does $24p + 12d = 120$ allow? This is where the line crosses the $d$-axis."
      answer: 10
      feedback:
        - ["5", "With p = 0 the equation is 12d = 120. Divide by the price of a pack, 12."]
        - ["120", "That is the budget. Divide it by the price of one pack."]
      explain: "With p = 0: 12d = 120, so d = 10. Ten packs spend the whole budget."
  - check:
      type: bug
      code: "working.txt#mia"
      text: "Mia graphs $24p + 12d \\le 120$. Click the line where her working goes wrong."
      answer: 3
      fault: logic
      misconception: region-wrong-coefficient
      explain: "Line 3: with p = 0 the equation is 12d = 120, not 24d = 120. Packs cost 12 dollars, so d = 10. Mia used the pizza price on the d-axis."
  - check:
      type: question
      q: "The boundary of $24p + 12d \\le 120$ crosses the axes at $(5, 0)$ and $(0, 10)$. Which side is shaded?"
      options: ["The side with the origin $(0, 0)$, because $0 \\le 120$ is true", "The side without the origin, because the line is solid", "Neither: solid boundaries have no shading"]
      answer: 0
      feedback: [null, "Solid or dashed only says whether the line is included. The test point decides the side.", "Every inequality of this kind shades one side."]
      explain: "Test the origin: 24 × 0 + 12 × 0 = 0, and 0 ≤ 120 is true, so shade the side with (0, 0): the plans that cost less."
  - hint: ["Put $d = 0$ and divide $96$ by the pizza price.", "No packs, so only the pizza price is left."]
    check:
      type: reasoning
      paper: true
      q: "The class has 96 dollars instead. The boundary of $24p + 12d \\le 96$ crosses the $p$-axis where $d = 0$. What is $p$ there?"
      steps:
        - ["$d = 0$: $24p = 96$", "no packs, so only the pizza price is left"]
        - ["$p = 96 \\div 24$", "divide by the pizza price"]
        - ["$p = 4$", "four pizzas spend all 96 dollars"]
      answer: 4
      answerLabel: "p where the boundary meets the p-axis"
      feedback:
        - [8, "That is where it meets the d-axis (96 ÷ 12). For the p-axis, divide by the pizza price."]
        - [5, "5 is for 120 dollars. This budget is 96 dollars."]
      criteria:
        - "I put d = 0 and kept only the pizza price."
        - "I divided the budget by 24."
        - "I checked: 4 pizzas cost 4 × 24 = 96."
      explain: "With d = 0: 24p = 96, so p = 4. (With p = 0: 12d = 96, d = 8, so the line joins (4, 0) and (0, 8).)"
```

### Where the line crosses the d-axis

Put $p = 0$ and use the price of a pack.

### Find the mistake

Read Mia's working. Which axis did she get wrong?

### Which side?

### Try it on paper

Here is the whole routine, from the budget to the region.

```worked
24p + 12d \le 120 :: Pizzas cost 24 dollars each, packs 12 dollars each, and the total can be at most 120 dollars.
p = 0:\; 12d = 120,\; d = 10 :: Where the boundary meets the $d$-axis: no pizzas, so divide by the pack price.
d = 0:\; 24p = 120,\; p = 5 :: Where it meets the $p$-axis: no packs, so divide by the pizza price.
\text{solid line through } (5, 0) \text{ and } (0, 10) :: $\le$ includes the line: plans that spend exactly $120$ are allowed.
(0, 0):\; 0 \le 120 :: Test a point not on the line. True, so shade the side with the origin.
```

Now try one on paper: the class has 96 dollars instead, so the boundary is $24p + 12d = 96$. Find where it crosses the $p$-axis, with the example beside you, and then type the number.

## Modify: one change at a time

```step
stage: modify
insight: "One change at a time: a point exactly on the budget line, a strict limit, different prices, and reading the inequality from a region."
try: { playground: board, starter: "budget.yml#exact", height: 600 }
tasks:
  - starter: "budget.yml#exact"
    hint: "Spending exactly 120 dollars puts the plan on the line: d = 10 − 2p."
    check: { type: board, text: "Find a plan that spends exactly 120 dollars. Drag $P$ onto the boundary line.", when: "y(P) = 10 - 2 * x(P)", explain: "Points such as (2, 6): 48 + 72 = 120. The line is solid, so these plans count." }
  - picture: { ref: budget.yml#strict-pic, caption: "The class must spend less than 120 dollars (leave some change)." }
    check:
      type: question
      q: "If the class must spend less than 120 dollars, the inequality is $24p + 12d < 120$. Is the plan $(3, 4)$ allowed?"
      options: ["No: 72 + 48 = 120, and 120 < 120 is false. It sits on the dashed line", "Yes: 72 + 48 is 120, which fits", "Yes: (3, 4) is below the line"]
      answer: 0
      feedback: [null, "That is for ≤. This time the limit is strict.", "Points on the line are not below it."]
      explain: "72 + 48 = 120. With <, spending exactly 120 dollars is not allowed: the line is dashed and (3, 4) is on it."
  - starter: "budget.yml#prices"
    hint: ["Pizzas cost 24 dollars and packs 12 dollars, but now the class has 144 dollars.", "The region shown is $d \\le 12 - 2p$: the same as $24p + 12d \\le 144$."]
    check: { type: board, text: "The class has 144 dollars now. Drag $P$ to the plan with the most packs that still fits when they buy 3 pizzas.", when: "x(P) = 3 and y(P) = 6", explain: "3 pizzas cost 72, leaving 72, which is 6 packs. The point (3, 6) is on the line d = 12 − 2p." }
  - picture: { ref: budget.yml#which-pic, caption: "A region with a solid boundary through $(4, 0)$ and $(0, 8)$." }
    check:
      type: question
      q: "Pizzas cost 24 dollars and packs 12 dollars. Which budget gives this region?"
      options: ["$96$", "$120$", "$48$", "$192$"]
      answer: 0
      feedback: [null, "Then the line would cross the d-axis at 10.", "That would cross the p-axis at 2.", "That would cross the p-axis at 8."]
      explain: "The p-axis crossing is 4, and 24 × 4 = 96. The d-axis crossing is 8, and 12 × 8 = 96."
  - check:
      type: question
      q: "Edge case: the class can only afford $24p + 12d \\le 120$ with whole pizzas and whole packs. Is the plan $(1.5, 6)$ possible?"
      options: ["No: you cannot buy half a pizza, even though it is inside the shaded region", "Yes: it is in the shaded region", "Yes: 1.5 pizzas costs 36 dollars"]
      answer: 0
      feedback: [null, "The region holds every point, including ones the shop cannot sell.", "It costs 36 + 72 = 108, which fits, but you cannot buy half a pizza."]
      explain: "The whole shaded region includes points between the whole numbers. Only points with whole p and d are real plans: the region is where to look, not the final answer."
```

### On the line

### A strict limit

### Different budget

### Read the budget

### Whole numbers only

## Practise: budgets and regions

```step
stage: practise
insight: "The routine on new prices and budgets: intercepts, testing a plan, and choosing the boundary; the review keeps solving a one-letter equation fresh."
tasks:
  - check:
      type: number
      q: "Pizzas cost 30 dollars, packs cost 15 dollars and the budget is 90 dollars. Where does the boundary of $30p + 15d \\le 90$ cross the $d$-axis?"
      answer: 6
      feedback:
        - [3, "That is the p-axis. For the d-axis, put p = 0 and divide by the pack price, 15."]
      explain: "With p = 0: 15d = 90, so d = 6."
  - check:
      type: question
      q: "Is the plan $(3, 4)$ inside $24p + 12d \\le 120$?"
      options: ["Yes: it costs 72 + 48 = 120, exactly on the solid line", "No: it costs more than 120", "No: it is on the line, so it does not count"]
      answer: 0
      feedback: [null, "72 + 48 = 120 exactly.", "The line is solid for ≤, so its points count."]
      explain: "72 + 48 = 120. The limit is at most 120, so a plan that costs exactly 120 is allowed."
    smaller:
      check: { type: number, q: "Just the cost: work out $24 \\times 3 + 12 \\times 4$.", answer: 120, explain: "72 + 48 = 120." }
  - check:
      type: question
      q: "Which inequality means 'the total is more than 60 dollars'?"
      options: ["$24p + 12d > 60$, with a dashed boundary", "$24p + 12d \\ge 60$, with a dashed boundary", "$24p + 12d < 60$, with a solid boundary"]
      answer: 0
      feedback: [null, "≥ would include exactly 60, so the boundary would be solid.", "< is 'less than', the wrong way."]
      explain: "'More than' is >: the boundary is dashed, because exactly 60 dollars is not more than 60 dollars."
  - check:
      type: number
      q: "Review: solve $24x = 120$."
      answer: 5
      feedback:
        - [96, "That is 120 − 24. Divide both sides by 24."]
      explain: "x = 120 ÷ 24 = 5."
```

### The d-axis

### Is the plan in?

### More than

### Review

Solving a one-step equation, from earlier.

## Make: your own party budget

```step
stage: make
insight: "Coming back to the party: a need (feed 24) fixes the pizzas, and the region then says how many packs the rest of the budget buys."
tasks:
  - hint: ["Test your plan in $24p + 12d \\le 120$ first.", "Then say why you chose it: for example, at least one pizza per six students."]
    check:
      type: reasoning
      paper: true
      q: "A class of 24 students has 120 dollars. Pizzas cost 24 dollars and packs of drinks 12 dollars (made-up prices). One pizza feeds 6 students. Buy just enough pizzas to feed everyone, then spend as much of what is left as you can on packs. How many packs of drinks can you buy?"
      steps:
        - ["$24 \\div 6 = 4$ pizzas", "one pizza feeds 6 students"]
        - ["$4 \\times 24 = 96$ and $120 - 96 = 24$", "pizza cost, then what is left"]
        - ["$24 \\div 12 = 2$ packs", "check with $24p + 12d \\le 120$: $96 + 24 = 120$"]
      answer: 2
      answerLabel: "Packs of drinks"
      feedback:
        - [4, "That is the number of pizzas. Packs come from what is left over."]
        - [10, "That is the most packs with no pizzas at all."]
      criteria:
        - "I tested my plan in 24p + 12d ≤ 120."
        - "My plan feeds all 24 students."
        - "I checked my plan is on or inside the line 24p + 12d = 120."
      explain: "4 pizzas feed 24 students and cost 96 dollars, leaving 24 dollars for up to 2 packs. The region holds many plans (such as 5 pizzas and no drinks); this one is the point at p = 4 with the most drinks, d = 2."
  - check:
      type: question
      q: "Is the point $(4, 3)$ a good plan for this class?"
      options: ["No: it is outside the region. 4 pizzas and 3 packs cost 96 + 36 = 132", "Yes: it has 4 pizzas for 24 students", "Yes: 3 packs is more than 2"]
      answer: 0
      feedback: [null, "It feeds the class, but it costs 132 and the budget is 120.", "More packs is not allowed: the cost is over 120."]
      explain: "The region at p = 4 stops at d = 2. (4, 3) costs 132 dollars, over budget."
```

### Pick a plan

Work it out on paper first, then type the number of packs.

### Check a plan

The prices and the budget are made up, so only the method carries over. A real party also has other costs, such as plates and a place to hold it.

**Also used in**

- **Everyday life.** Any spending limit with two kinds of thing to buy, such as tickets and snacks, or two sizes of boxes in a delivery.
- **Next lessons.** Setting up equations from a situation, and solving two equations at once by substitution and elimination.
