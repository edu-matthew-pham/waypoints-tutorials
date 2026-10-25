---
order: 27
unit: proof10
node: AC9M10SP01 n1
uses: [AC9M8SP02 n1, AC9M7M05 n3]
assumes: [AC9M8SP02 n1]
title: Some cases or every case?
summary: "Checking cases, even forty of them, only shows that a claim worked for those cases. A proof gives a reason that covers every case at once, and one counterexample is enough to show a claim is false."
language: maths
voice: { name: af_heart, speed: 1.1 }
hook: "One formula gives a prime number for forty whole numbers in a row. Is that enough to be sure of the forty-first?"
app:
  command: node "$REPO_ROOT/tools/serve.mjs" "$REPO_ROOT/dist/_playground-board" 8420
  url: http://127.0.0.1:8420/index.html
  readySelector: "#kmove-pt"
  layout: full
explainPicture: { ref: demo.yml#explain-pic, caption: "$a = 59^\\circ$, $b = 45^\\circ$, and $x = 104^\\circ$ here. Dragging shows $x = a + b$ for the triangles you try. A proof shows it for every triangle." }
explainClip:
  query: { code: "@demo.yml#explain", fresh: 1, id: explain }
  caption: "Cases or a proof"
  say: "Dragging checks cases. A proof covers every case."
  clip:
    - caption: { text: "x is the outside angle. Here x = a + b.", say: "Here the outside angle x equals a plus b." }
    - wait: 900
    - caption: { text: "Drag the corners. It keeps working. But each drag is one more case.", say: "We drag. It keeps working, but each drag is just one more case." }
    - click: Move A right
    - click: Move A right
    - click: Move A up
    - expect: { selector: "#gsum", contains: "= 180°" }
    - wait: 1200
    - caption: { text: "A proof gives a reason that works for every triangle at once.", say: "A proof gives a reason that works for every triangle." }
    - wait: 1200
---
Here is a formula: take a whole number $n$, work out $n^2 + n + 41$, and see what you get. The first few answers are all prime.

<figure class="situation" role="img" aria-label="Six boxes in a row showing n from 0 to 5 and the answers 41, 43, 47, 53, 61 and 71, all prime numbers, then three dots and a dashed box for n equals 40 with a question mark."><svg viewBox="0 0 560 104" width="560" style="max-width:100%;height:auto" fill="none" stroke="currentColor" font-family="inherit" font-size="13"><rect x="10" y="34" width="58" height="52" rx="4" fill="#1D9E75" fill-opacity="0.18" stroke="#0F6E56" stroke-width="1.2"/><text x="39" y="30" text-anchor="middle" fill="currentColor" stroke="none">n = 0</text><text x="39" y="66" text-anchor="middle" fill="currentColor" stroke="none" font-size="18">41</text><rect x="74" y="34" width="58" height="52" rx="4" fill="#1D9E75" fill-opacity="0.18" stroke="#0F6E56" stroke-width="1.2"/><text x="103" y="30" text-anchor="middle" fill="currentColor" stroke="none">n = 1</text><text x="103" y="66" text-anchor="middle" fill="currentColor" stroke="none" font-size="18">43</text><rect x="138" y="34" width="58" height="52" rx="4" fill="#1D9E75" fill-opacity="0.18" stroke="#0F6E56" stroke-width="1.2"/><text x="167" y="30" text-anchor="middle" fill="currentColor" stroke="none">n = 2</text><text x="167" y="66" text-anchor="middle" fill="currentColor" stroke="none" font-size="18">47</text><rect x="202" y="34" width="58" height="52" rx="4" fill="#1D9E75" fill-opacity="0.18" stroke="#0F6E56" stroke-width="1.2"/><text x="231" y="30" text-anchor="middle" fill="currentColor" stroke="none">n = 3</text><text x="231" y="66" text-anchor="middle" fill="currentColor" stroke="none" font-size="18">53</text><rect x="266" y="34" width="58" height="52" rx="4" fill="#1D9E75" fill-opacity="0.18" stroke="#0F6E56" stroke-width="1.2"/><text x="295" y="30" text-anchor="middle" fill="currentColor" stroke="none">n = 4</text><text x="295" y="66" text-anchor="middle" fill="currentColor" stroke="none" font-size="18">61</text><rect x="330" y="34" width="58" height="52" rx="4" fill="#1D9E75" fill-opacity="0.18" stroke="#0F6E56" stroke-width="1.2"/><text x="359" y="30" text-anchor="middle" fill="currentColor" stroke="none">n = 5</text><text x="359" y="66" text-anchor="middle" fill="currentColor" stroke="none" font-size="18">71</text><text x="404" y="66" fill="currentColor" stroke="none" font-size="18">…</text><rect x="438" y="34" width="58" height="52" rx="4" stroke="currentColor" stroke-dasharray="5 4"/><text x="467" y="30" text-anchor="middle" fill="currentColor" stroke="none">n = 40</text><text x="467" y="68" text-anchor="middle" fill="currentColor" stroke="none" font-size="22">?</text></svg></figure>

It works for $n = 0, 1, 2, 3$ and on, all the way to $n = 39$: forty primes in a row. Before you carry on, decide how much that tells you.

## Predict: the forty-first

```step
stage: predict
insight: "Committing to n = 40 after forty primes in a row shows who treats a long run of cases as a reason, and who knows it only describes the cases tried."
check:
  type: predict
  q: "$n^2 + n + 41$ is prime for every whole number $n$ from 0 to 39. What happens at $n = 40$?"
  options:
    - "It is prime again"
    - "It is not prime"
    - "It is prime, because forty in a row cannot be an accident"
  actual: "It is not prime. 40² + 40 + 41 = 1681, and 1681 = 41 × 41. Forty cases in a row did not make the claim true for the forty-first."
```

Work it out with a calculator if you like, but first say what you think and why.

## Run: drag and compare

```step
stage: run
insight: "Dragging a triangle and reading x = a + b each time is a demonstration: strong evidence from the triangles tried, which the next steps turn into a reason."
try: { playground: board, starter: "demo.yml#run", height: 600 }
check: { type: board, text: "Drag the corners (or use Move) until $x$ is more than $120^\\circ$. Compare $x$ with $a + b$. Try a few more triangles. Is $x$ ever different? Does that prove it for every triangle?", when: "x > 120", explain: "x looks equal to a + b every time (the board rounds to the nearest degree, so a sum can look 1° out). That is a demonstration: it shows the triangles you dragged. It cannot reach the triangles you did not drag." }
```

$x$ is the outside angle at $C$. Every triangle you drag is one more case. How many cases would be enough?

## Investigate: demonstration or proof

```step
stage: investigate
insight: "A demonstration checks some cases; a proof gives a reason that covers all of them. Using a letter for any number is what turns a demonstration into a proof (consecutive numbers), long runs of cases can fail (Ivy's regions), and one counterexample is enough to disprove."
tasks:
  - check:
      type: reasoning
      paper: true
      q: "Prove that the sum of any three consecutive whole numbers is a multiple of 3."
      steps:
        - ["Call the numbers $n$, $n + 1$ and $n + 2$", "$n$ stands for any whole number, so this covers every case at once"]
        - ["$n + (n + 1) + (n + 2) = 3n + 3$", "collect the terms"]
        - ["$3n + 3 = 3(n + 1)$, which is 3 times a whole number", "factorise: so the sum is a multiple of 3 for every $n$"]
      picks:
        - step: 1
          q: "Why can the three numbers be written as $n$, $n + 1$ and $n + 2$?"
          options: ["$n$ stands for any whole number, so every case is covered", "It worked for 4, 5 and 6", "$n$ is 4, the number we tried"]
          answer: 0
          feedback: [null, "Working for 4, 5 and 6 is a demonstration. The letter is what covers every case.", "If $n$ is one number you have one case. $n$ has to stand for any whole number."]
      criteria:
        - "I used a letter that stands for any whole number, not a number I tried."
        - "My last line shows 3 times a whole number."
        - "Each line has a reason."
      explain: "n + (n + 1) + (n + 2) = 3n + 3 = 3(n + 1). The letter covers every case, so this proves it. Trying 4 + 5 + 6 = 15 and 7 + 8 + 9 = 24 would only show two cases."
  - check:
      type: bug
      code: "working.txt#ivy"
      text: "Ivy counts the regions made when points on a circle are joined by straight lines. Click the line where her reasoning goes wrong."
      answer: 4
      fault: logic
      misconception: pattern-must-continue
      explain: "Line 4: four cases that double are a pattern, not a proof. With 6 points the count is 31, not 32."
  - check:
      type: question
      q: "Which is a proof that the angles of every triangle add to $180^\\circ$?"
      options:
        - "Draw a line through one corner parallel to the opposite side. The alternate angles are equal, and the three angles at that corner make a straight line"
        - "Tear the corners off 30 different triangles. Every set makes a straight line"
        - "Measure 100 triangles with a protractor: every one adds to 180°, give or take 1°"
        - "Drag the triangle on the board: it always says 180°"
      answer: 0
      feedback: [null, "Thirty triangles is a lot, but they are still only the ones torn. The next one could be different.", "A hundred measurements are a hundred cases, and a protractor is only accurate to about a degree.", "The board shows the triangles you dragged."]
      explain: "The parallel-line argument does not depend on the shape of the triangle, so it covers them all. Tearing, measuring and dragging are demonstrations: good evidence, but cases."
  - check:
      type: question
      q: "Which one case disproves \"$n^2 + n + 41$ is prime for every whole number $n$\"?"
      options: ["$n = 40$: it gives $1681 = 41 \\times 41$", "$n = 39$: it gives $1601$, which is prime", "$n = 0$: it gives $41$, which is prime", "A run of forty more primes"]
      answer: 0
      feedback: [null, "1601 is prime, so this case agrees with the claim. A disproof needs a case that breaks it.", "41 is prime, so this agrees with the claim.", "More primes would add cases that agree. One case that breaks it is enough."]
      explain: "A counterexample is a single case that breaks the claim. n = 40 gives 1681, which has the factor 41 as well as 1 and itself, so it is not prime."
```

### Any three in a row

A demonstration checks some cases. A proof gives a reason that works for every case. Here is the difference for a simpler claim: the sum of two consecutive whole numbers is odd.

```worked
3 + 4 = 7,\ 10 + 11 = 21,\ 99 + 100 = 199 :: Three cases, all odd. That is a demonstration. There are infinitely many pairs and these are three.
n,\ n + 1 :: Call the smaller number $n$. A letter stands for any whole number, so this is every pair at once.
n + (n + 1) = 2n + 1 :: Add them and collect the terms.
2n + 1 :: $2n$ is twice a whole number, so it is even. One more than an even number is odd. That is a proof.
```

Now do the three-in-a-row claim yourself, on paper. Write each line with its reason, with the example beside you. Then answer the question on the screen.

### Find the mistake

Read Ivy's working. How many of her cases were there, and what did she do with them?

### Which one is a proof?

Three of these show you what you tried. One gives a reason that does not depend on the triangle.

### One case is enough

## Modify: one change at a time

```step
stage: modify
insight: "One change at a time: a famous claim that holds for small primes, a counterexample that is small, and what a single failure and a thousand successes each tell you."
tasks:
  - check: { type: number, q: "Claim: $2^p - 1$ is prime whenever $p$ is prime. It works for $p = 2, 3, 5, 7$ (3, 7, 31 and 127). For $p = 11$, $2^{11} - 1 = 2047$. Work out the other factor: $2047 = 23 \\times$ what?", answer: 89, explain: "23 × 89 = 2047, so 2047 is not prime and p = 11 is a counterexample. The claim held for four primes and failed on the fifth." }
  - check:
      type: question
      q: "Edge case: Sam says \"every prime number is odd\", and checked 3, 5, 7, 11 and 13. Which prime is a counterexample?"
      options: ["2", "1", "9", "17"]
      answer: 0
      feedback: [null, "1 is not prime.", "9 = 3 × 3 is not prime.", "17 is prime and odd, so it agrees with the claim."]
      explain: "2 is prime and even. A counterexample can be tiny and sit right at the start: the cases Sam checked just did not include it."
  - check:
      type: question
      q: "A claim is tested on 1000 cases and works on 999 of them. It fails on one. What can you say?"
      options: ["The claim is false, because one counterexample is enough", "The claim is almost true, so it is fine to use", "The claim is true, because the failure was probably a mistake", "You need a second failure before the claim is false"]
      answer: 0
      feedback: [null, "\"Almost true\" is not true. A claim about every case needs every case.", "Check the failing case by hand. If it really fails, the claim is false.", "One failure that is checked and correct disproves the claim."]
      explain: "999 successes show nothing about the failing case. A claim about every case is false the moment one case breaks it, if the case is checked."
```

### A big prime pattern

### The smallest counterexample

### One against a thousand

## Practise: demonstration or proof

```step
stage: practise
insight: "Telling a reason that covers every case from cases that agree, in numbers and shapes, with a review of the congruence tests that proofs in this unit will use."
tasks:
  - check:
      type: question
      q: "Which is a proof that the sum of any two even numbers is even?"
      options: ["Two even numbers are $2m$ and $2n$, and $2m + 2n = 2(m + n)$, which is twice a whole number", "$2 + 4 = 6$, $8 + 10 = 18$ and $20 + 22 = 42$, all even", "I tried 50 pairs of even numbers and every sum was even", "A calculator checked every pair up to 1000"]
      answer: 0
      feedback: [null, "Three pairs are three cases.", "Fifty pairs are fifty cases.", "Every pair up to 1000 is still not every pair."]
      explain: "2m and 2n stand for any two even numbers, so the algebra covers every pair."
  - check:
      type: question
      q: "Mei measures the exterior angle of 25 different triangles and it equals $a + b$ every time. What is the honest thing to say?"
      options: ["It is true for the 25 triangles, which is strong evidence but not a proof", "It is proved, because 25 is a lot", "It is false, because the angles were only close", "It is proved for triangles with whole-number angles only"]
      answer: 0
      feedback: [null, "No number of triangles tried is a proof.", "Measurements are only accurate to about a degree. A small difference is rounding.", "Whole-number angles are not special here."]
      explain: "25 triangles are 25 cases. The proof is that x = 180° − c and a + b = 180° − c, because a + b + c = 180°."
  - check:
      type: question
      q: "Claim: \"$n^2 > n$ for every whole number $n$.\" Which value of $n$ is a counterexample?"
      options: ["1", "2", "3", "10"]
      answer: 0
      feedback: [null, "2² = 4, which is more than 2, so this agrees.", "3² = 9, which is more than 3, so this agrees.", "10² = 100, which is more than 10, so this agrees."]
      explain: "1² = 1, which is not more than 1. (So is 0² = 0, if 0 counts.) A small, ordinary number can break a claim."
  - check:
      type: question
      q: "Review: two triangles have two pairs of equal sides and the angles between those sides equal. Which congruence test is this?"
      options: ["SAS", "SSS", "ASA", "RHS"]
      answer: 0
      feedback: [null, "SSS needs all three sides.", "ASA needs two angles and the side between them.", "RHS needs a right angle and the hypotenuse."]
      explain: "Two sides and the angle between them: SAS."
```

### A proof for evens

### The honest sentence

### A counterexample

### Review: a congruence test

## Make: back to the forty-first

```step
stage: make
insight: "Coming back to the opening: a student's changed claim, checked for forty cases, and a counterexample that is worked out by hand and used correctly."
tasks:
  - hint: ["Look for a value of $n$ where $-n$ and $+41$ cancel.", "Try $n = 41$."]
    check:
      type: reasoning
      paper: true
      q: "A student says \"$n^2 - n + 41$ is prime for every whole number $n$\" and checked $n = 1$ up to 40. Find a counterexample, work it out by hand, and say what it shows. Then type the value of the formula for your $n$."
      steps:
        - ["Try $n = 41$: $41^2 - 41 + 41 = 41^2$", "the $-41$ and $+41$ cancel"]
        - ["$41^2 = 1681 = 41 \\times 41$, which is not prime", "it has the factor 41 as well as 1 and itself"]
        - ["So the claim is false", "one counterexample is enough to disprove a claim, however many cases agreed"]
      picks:
        - step: 3
          q: "Why does one case settle it?"
          options: ["One counterexample is enough to show a claim is false", "It was 40 cases agreeing to 1, so the claim is almost true", "A claim must fail at least twice to be false"]
          answer: 0
          feedback: [null, "A claim about every case is not almost true. It is false.", "One checked failure is enough."]
      answer: "1681"
      answerLabel: "The value when n = 41"
      feedback:
        - ["41", "That is 41 times 1. Square it: 41² = 1681."]
      criteria:
        - "I found a value of n that makes the formula a square."
        - "I showed the answer has a factor other than 1 and itself."
        - "I said that one counterexample is enough."
      explain: "n = 41 gives 41² − 41 + 41 = 41² = 1681 = 41 × 41. It is not prime, so the claim is false even though 40 cases agreed."
  - check:
      type: question
      q: "What would turn a demonstration into a proof?"
      options: ["A reason that works for every case, not only the ones tried", "More cases, such as a thousand instead of forty", "More accurate measuring", "A bigger drawing"]
      answer: 0
      feedback: [null, "A thousand cases is still only a thousand cases.", "Accurate measuring improves the cases. It does not cover the ones you did not measure.", "A bigger drawing is still one drawing."]
      explain: "A proof gives a reason that does not depend on the particular case: a letter for any number, or a rule that holds for every triangle."
```

### The changed formula

Back to 41. Work this out on paper first, one line at a time with its reason. Then type your answer.

### Demonstration into proof

**Also used in**

- **Science.** A result from ten trials is a demonstration. It is evidence, and a science test also asks what a new trial could show.
- **Writing a proof.** The next lesson writes a proof for a shape, with a reason for every statement.
- **Using theorems.** The lesson after that picks the theorem that fits a problem.
