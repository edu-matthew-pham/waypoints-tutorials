---
order: 24
unit: twovars10
node: AC9M10A02 n3
uses: [AC9M8A02 n2, AC9M9A03 n1]
assumes: [AC9M8A02 n2]
connection: plans-cross
title: Solving by substitution
summary: "Two facts about the same two letters can become one fact about one letter. When one equation says what c is, replace c in the other equation with that, in brackets, and solve."
language: maths
voice: { name: af_heart, speed: 1.1 }
hook: "Two phone plans, two price rules, one cost they share. Feed one rule into the other and a pair of unknowns becomes one."
app:
  command: node "$REPO_ROOT/tools/serve.mjs" "$REPO_ROOT/dist/_playground-board" 8376
  url: http://127.0.0.1:8376/index.html
  readySelector: "#legend"
  layout: full
explainPicture: { ref: plans.yml#explain-pic, caption: "$c = 12 + 4g$ and $c = 30 + g$ meet at $(6, 36)$: both plans cost 36 dollars at 6 GB." }
explainClip:
  query: { code: "@plans.yml#explain", fresh: 1, id: explain }
  caption: "Both rules give c, so set them equal"
  say: "Both rules give the same c, so set them equal."
  clip:
    - caption: { text: "Lite: c = 12 + 4g. Big: c = 30 + g. At the crossing both give the same c.", say: "At the crossing, both rules give the same cost." }
    - wait: 1000
    - caption: { text: "Replace c in the Big rule with 12 + 4g: 12 + 4g = 30 + g.", say: "Put the Lite rule in place of c in the Big rule." }
    - wait: 1200
    - caption: { text: "3g = 18, so g = 6. Then c = 12 + 24 = 36.", say: "That gives g equals six, and c equals thirty six." }
    - wait: 1400
---
Last year you solved an equation with one letter by drawing both sides as lines. Now there are two letters, $g$ for gigabytes and $c$ for cost, and two rules. You can still draw them, but algebra gets the exact answer, even when the lines cross between the grid lines. The prices in this lesson are made up.

## Predict: when do they cost the same?

```step
stage: predict
insight: "Committing to the number of gigabytes where two plans cost the same shows who tries values, who sets the rules equal, and who uses only the two monthly fees."
check:
  type: predict
  q: "Lite costs 12 dollars a month plus 4 dollars for each GB. Big costs 30 dollars a month plus 1 dollar for each GB. At how many GB do the two plans cost the same?"
  options:
    - "$6$ GB"
    - "$3$ GB"
    - "$9$ GB"
    - "$18$ GB"
  actual: "6 GB. Lite: 12 + 4 × 6 = 36 dollars. Big: 30 + 6 = 36 dollars. At 6 GB the two plans cost the same."
```

<figure class="situation" role="img" aria-label="Two price tags side by side. The Lite tag reads 12 dollars a month plus 4 dollars per GB. The Big tag reads 30 dollars a month plus 1 dollar per GB. Between them is a question mark for the number of GB where the prices match."><svg viewBox="0 0 440 170" width="440" style="max-width:100%;height:auto" fill="none" stroke="currentColor" font-family="inherit" font-size="14"><rect x="10" y="20" width="170" height="90" rx="10" fill="#378ADD" fill-opacity="0.18" stroke="#185FA5"/><text x="26" y="48" font-weight="bold" fill="currentColor" stroke="none">Lite</text><text x="26" y="72" fill="currentColor" stroke="none">12 dollars a month</text><text x="26" y="94" fill="currentColor" stroke="none">+ 4 dollars per GB</text><rect x="260" y="20" width="170" height="90" rx="10" fill="#EF9F27" fill-opacity="0.2" stroke="#854F0B"/><text x="276" y="48" font-weight="bold" fill="currentColor" stroke="none">Big</text><text x="276" y="72" fill="currentColor" stroke="none">30 dollars a month</text><text x="276" y="94" fill="currentColor" stroke="none">+ 1 dollar per GB</text><text x="208" y="72" font-size="26" fill="currentColor" stroke="none">=</text><text x="196" y="40" fill="currentColor" stroke="none">? GB</text></svg></figure>

Both plans charge a fixed fee and then a price for each GB. They look very different.

## Run: where the lines meet

```step
stage: run
insight: "The point where the two lines cross has the same g and the same c on both rules, which is why setting the rules equal finds it."
try: { playground: board, starter: "plans.yml#run", height: 600 }
check: { type: board, text: "Drag $P$ to where the two lines cross. Read $g$ and $c$ there. Was your prediction right?", when: "x(P) = 6 and y(P) = 36" }
```

At the crossing the point is on both lines, so $c$ is the same on both. Read its $g$ and its $c$.

## Investigate: put one rule into the other

```step
stage: investigate
insight: "Where the plans cost the same, c is the same, so one rule can stand in for c in the other. Brackets matter: Zoe replaces c by g + 3 but only multiplies the g."
try: { playground: board, starter: "plans.yml#run", height: 600 }
tasks:
  - check:
      type: question
      q: "Lite is $c = 12 + 4g$ and Big is $c = 30 + g$. Replace $c$ in the Big rule with the Lite rule. Which equation do you get?"
      options: ["$12 + 4g = 30 + g$", "$12 + 4g + 30 + g = c$", "$4g = 30 + g$", "$c = 42 + 5g$"]
      answer: 0
      feedback: [null, "Both rules equal c, so they equal each other. They are not added.", "The 12 is part of the Lite cost. It stays.", "Adding the rules gives a cost for both plans together, not the point where they match."]
      explain: "Big says c = 30 + g. Where c = 12 + 4g too, the two right-hand sides are equal: 12 + 4g = 30 + g."
  - hint: ["Collect the $g$ terms on one side: take $g$ from both sides.", "Then take 12 from both sides."]
    check: { type: number, q: "Solve $12 + 4g = 30 + g$ for $g$.", answer: 6, feedback: [[18, "That is 30 − 12. There are 3g on the left, so divide by 3 as well."], [-6, "Check the signs: 3g = 18 gives a positive g."]], explain: "Take g from both sides: 12 + 3g = 30. Take 12: 3g = 18. So g = 6." }
    smaller:
      check:
        type: question
        q: "Take $g$ from both sides of $12 + 4g = 30 + g$. What is left?"
        options: ["$12 + 3g = 30$", "$12 + 5g = 30$", "$12 + 4g = 30 - g$"]
        answer: 0
        feedback: [null, "4g − g is 3g, not 5g.", "Taking g from the right side leaves 30."]
        explain: "4g − g = 3g on the left, and 30 + g − g = 30 on the right: 12 + 3g = 30."
  - check:
      type: bug
      code: "working.txt#zoe"
      text: "Zoe solves the pair $c = g + 3$ and $5c - 2g = 21$. Click the line where her working goes wrong."
      answer: 2
      fault: logic
      misconception: substitute-no-brackets
      explain: "Line 2: she replaced c by g + 3 but only multiplied the g by 5. 5c is 5(g + 3) = 5g + 15. With the brackets, 3g + 15 = 21, so g = 2 and c = 5."
  - hint: ["Replace $y$ in the second equation with $x - 5$, in brackets.", "Expand the bracket before you collect terms."]
    check:
      type: reasoning
      paper: true
      q: "Solve the pair $y = x - 5$ and $4y = 3x$ on paper by substituting. What is $x$?"
      steps:
        - ["$4(x - 5) = 3x$", "replace y by x − 5, in brackets"]
        - ["$4x - 20 = 3x$", "expand: 4 times both parts"]
        - ["$x = 20$", "take 3x from both sides and add 20"]
      answer: 20
      answerLabel: "x"
      feedback:
        - [5, "Without brackets you get 4x − 5 = 3x. The 4 multiplies both x and 5."]
        - [15, "That is y. The question asks for x."]
      criteria:
        - "I put brackets round x − 5 before multiplying."
        - "I expanded: 4x − 20, not 4x − 5."
        - "I checked in the other equation: y = 15 and 4 × 15 = 60 = 3 × 20."
      explain: "4(x − 5) = 3x gives 4x − 20 = 3x, so x = 20. Then y = 20 − 5 = 15. Check: 4 × 15 = 60 and 3 × 20 = 60."
```

### Setting the rules equal

### Solving for g

### Find the mistake

### Try one on paper

Here is the whole routine, on a pair with a bracket in it.

```worked
y = x - 4,\; 3y = 2x :: One equation already says what $y$ is. Use it to replace $y$ in the other.
3(x - 4) = 2x :: Replace $y$ by $x - 4$. Put it in brackets so the 3 multiplies all of it.
3x - 12 = 2x :: Expand the bracket.
x = 12 :: Take $2x$ from both sides and add 12.
y = 12 - 4 = 8 :: Put $x$ into the simpler equation to find $y$.
3 \times 8 = 24 = 2 \times 12 :: Check in the equation you did not use for $y$.
```

Now try one on paper with the example beside you: the pair $y = x - 5$ and $4y = 3x$. Find $x$, then type it.

## Modify: change one thing

```step
stage: modify
insight: "One change at a time: a second letter to find, an answer between whole numbers, a pair that never meets, and a pair that is the same line."
try: { playground: board, starter: "plans.yml#bigger", height: 600 }
tasks:
  - starter: "plans.yml#bigger"
    hint: ["Big is now $c = 36 + g$.", "Solve $12 + 4g = 36 + g$ for $g$, then put it in a rule for $c$."]
    check: { type: board, text: "Big now costs 36 dollars a month plus 1 dollar per GB. Drag $P$ to where the plans cost the same.", when: "x(P) = 8 and y(P) = 44", explain: "12 + 4g = 36 + g gives 3g = 24, so g = 8. Then c = 12 + 32 = 44." }
  - check:
      type: number
      q: "Substituting gave $g = 4$ for the pair $c = 12 + 4g$ and $c = 20 + 2g$. What is $c$ there?"
      answer: 28
      feedback:
        - [4, "That is g. Put g = 4 into a rule to find c."]
        - [20, "Put g = 4 into the rule, not into the fixed fee only: 12 + 4 × 4."]
      explain: "c = 12 + 4 × 4 = 28. Check with the other rule: 20 + 2 × 4 = 28."
  - hint: ["Collect the $g$ terms: $3g = 13$.", "A fraction is allowed."]
    check: { type: answer, q: "Edge case: solve $12 + 4g = 25 + g$ for $g$ as a fraction.", answer: "13/3", form: simplest, feedback: [["13", "3g = 13, so divide by 3."], ["-13/3", "Moving 12 and g leaves a positive 13."]], explain: "3g = 13, so g = 13/3, about 4.3. The plans cost the same between 4 and 5 GB, so only a part-gigabyte plan would match exactly." }
  - check:
      type: question
      q: "Edge case: plan X is $c = 10 + 3g$ and plan Y is $c = 14 + 3g$. Setting them equal gives $10 + 3g = 14 + 3g$. What does that tell you?"
      options: ["The plans never cost the same: taking 3g from both sides gives 10 = 14, which is never true", "The plans cost the same at g = 4", "The plans cost the same at g = 0"]
      answer: 0
      feedback: [null, "4 is the difference of the fees. It is not a solution.", "At g = 0 the fees differ: 10 and 14."]
      explain: "10 = 14 is false whatever g is, so there is no solution. The lines are parallel: same price per GB, different fees."
  - check:
      type: question
      q: "Edge case: plan P is $c = 5 + 2g$ and plan Q is $c = 2g + 5$. Setting them equal gives $5 + 2g = 2g + 5$. What does that tell you?"
      options: ["They cost the same at every g: taking 2g and 5 from both sides gives 0 = 0, which is always true", "They cost the same at g = 5", "They never cost the same"]
      answer: 0
      feedback: [null, "Only the numbers 5 and 5 matched. g can be anything.", "They are the same rule written two ways."]
      explain: "0 = 0 is always true, so every g is a solution: the two rules draw the same line."
```

### A different Big plan

### Find c

### Not a whole number

### Parallel lines

### The same line

## Practise: pairs of equations

```step
stage: practise
insight: "Substituting into plain pairs and pairs with a bracket, choosing the correct first step, and a review that keeps expanding fresh."
tasks:
  - check:
      type: number
      q: "Solve the pair $y = 2x + 1$ and $y = x + 6$. What is $x$?"
      answer: 5
      feedback:
        - [11, "That is y. The question asks for x."]
        - [7, "Set the rules equal: 2x + 1 = x + 6, so x = 5."]
      explain: "2x + 1 = x + 6 gives x = 5. Then y = 11."
    smaller:
      check:
        type: question
        q: "Which equation do you get by replacing $y$ in $y = x + 6$ with $2x + 1$?"
        options: ["$2x + 1 = x + 6$", "$y + 2x + 1 = x + 6$", "$2x + 1 + x + 6 = y$"]
        answer: 0
        feedback: [null, "y was replaced, not added on.", "The two rules are set equal, not added."]
        explain: "Both rules equal y, so 2x + 1 = x + 6."
  - check:
      type: number
      q: "Solve the pair $y = x - 2$ and $3y + x = 14$. What is $y$?"
      answer: 3
      feedback:
        - [5, "That is x. The question asks for y: put x into y = x − 2."]
        - [4, "Check the bracket: 3(x − 2) + x = 14 gives 4x − 6 = 14."]
      explain: "3(x − 2) + x = 14 gives 4x − 6 = 14, so x = 5. Then y = 5 − 2 = 3."
    smaller:
      check:
        type: answer
        q: "Expand $3(x - 2)$."
        answer: "3x-6"
        form: expanded
        feedback: [["3x-2", "Multiply both parts by 3."]]
        explain: "3 × x = 3x and 3 × (−2) = −6."
  - check:
      type: question
      q: "The pair is $x = 2y$ and $3x + y = 21$. Which is the correct first step?"
      options: ["$3(2y) + y = 21$", "$3 \\times 2 + y = 21$", "$2y + y = 21$"]
      answer: 0
      feedback: [null, "x is replaced by 2y, so the 3 multiplies 2y, not 2.", "The 3 in front of x must still multiply."]
      explain: "Replace x by 2y in brackets: 3(2y) + y = 21, so 7y = 21 and y = 3."
  - check:
      type: answer
      q: "Review: expand $4(x - 3)$."
      answer: "4x-12"
      form: expanded
      feedback: [["4x-3", "The 4 multiplies both parts: 4 × 3 = 12."], ["4x+12", "The sign stays: 4 × (−3) = −12."]]
      explain: "4 × x = 4x and 4 × (−3) = −12."
```

### Equal rules

### With a bracket

### The first step

### Review

Expanding a bracket, from earlier.

## Make: a third plan

```step
stage: make
insight: "Coming back to the plans: a third plan crosses Lite at a new point, and the crossing says which plan is cheaper on each side of it."
tasks:
  - hint: ["Set the rules equal: $12 + 4g = 20 + 2g$.", "Then put $g$ into either rule for the cost."]
    check:
      type: reasoning
      paper: true
      q: "A third plan, Mid, is $c = 20 + 2g$. Lite is $c = 12 + 4g$. At how many GB do Lite and Mid cost the same? Work it out on paper, then type $g$."
      steps:
        - ["$12 + 4g = 20 + 2g$", "both rules give the same c, so set them equal"]
        - ["$2g = 8$", "take 2g and 12 from both sides"]
        - ["$g = 4$", "and $c = 12 + 16 = 28$ dollars"]
      answer: 4
      answerLabel: "GB where Lite and Mid cost the same"
      feedback:
        - [28, "That is the cost. The question asks for the GB."]
        - [8, "2g = 8, so divide by 2."]
      criteria:
        - "I set the two rules equal before solving."
        - "I found c as well, and checked it in the other rule."
        - "I can say which plan is cheaper below 4 GB."
      explain: "12 + 4g = 20 + 2g gives 2g = 8, so g = 4 and c = 28. Check Mid: 20 + 8 = 28. Below 4 GB Lite is cheaper (fewer GB at 4 dollars each); above 4 GB Mid is."
  - check:
      type: question
      q: "Mia uses 7 GB a month. Which is cheaper for her, Lite ($c = 12 + 4g$) or Mid ($c = 20 + 2g$)?"
      options: ["Mid: 20 + 14 = 34 dollars, against Lite's 12 + 28 = 40 dollars", "Lite: it has the lower monthly fee", "They cost the same"]
      answer: 0
      feedback: [null, "The fee is only part of the cost. Work out both at 7 GB.", "They only match at 4 GB."]
      explain: "At 7 GB, Lite costs 40 dollars and Mid 34 dollars. The crossing at 4 GB tells you which plan wins on each side."
```

### Lite and Mid

Work it out on paper first, then type $g$.

### Who wins at 7 GB?

The prices are made up. Real plans also have data limits and speeds, which the rules ignore.

**Also used in**

- **Everyday life.** Comparing hire charges, taxi fares or gym fees: any two rules that share a cost.
- **Next lessons.** Solving by elimination, which is quicker when neither equation says what a letter is.
