---
order: 9
unit: models10
node: AC9M10A05 n1
uses: [AC9M9A06 n2, AC9M10A04 n1]   # a, h and k in a curve (Year 9); choosing a model
assumes: [AC9M10A04 n3]   # judging a model is taught in class until its lesson is built
connection: ball-arc
title: Make a conjecture
summary: "A conjecture is a claim about every case in a family, such as 'if a is bigger, the ball lands sooner'. Change one number at a time to test it, include a case that might break it, and refine it when one case disagrees."
language: maths
voice: { name: af_heart, speed: 1.1 }
hook: "Three planets, one 20 m cliff, one ball dropped on each. The rule for the ball's height has one number that changes from planet to planet. How would you find out what that number does?"
app:
  command: node "$REPO_ROOT/tools/serve.mjs" "$REPO_ROOT/dist/_playground-board" 8435
  url: http://127.0.0.1:8435/index.html
  readySelector: "#sl-a"
  layout: full
explainPicture: { ref: cliff.yml#explain-pic, caption: "With a = 2, the ball's height is h = 20 − 2t². The ball reaches the ground when the curve meets the dashed line." }
---
A ball is dropped from the top of a 20 m cliff. Its height after $t$ seconds is $h = 20 - at^2$, where $a$ says how strong gravity is on that planet. The cliff, the planets and every value of $a$ are made up for this lesson.

## Predict: which curve is the strong one

```step
stage: predict
insight: "Committing to which curve belongs to the biggest a shows who reads the rule (a bigger a takes more off the height each second) and who guesses from the shape."
check:
  type: predict
  q: "The three curves show a ball dropped on three planets, where $a$ is $1$, $2$ and $5$ in some order. Which curve is the planet with $a = 5$?"
  options:
    - "A, the one that lands last"
    - "B, the one that lands first"
    - "C, the middle one"
    - "They all land together, since the cliff is the same"
  actual: "B. Every second, the ball loses a × t² metres, so a bigger a takes height off faster and the ball lands sooner. A has the smallest a (1) and lands at about 4.5 s. C is a = 2 and lands at about 3.2 s. B is a = 5 and lands at 2 s."
```

<figure class="situation" role="img" aria-label="A graph of height against time. Three curves start together at 20 metres at time 0 and fall to the ground at different times. Curve A lands last, curve C lands in the middle and curve B lands first."><svg viewBox="0 0 320 175" width="320" style="max-width:100%;height:auto" fill="none" stroke="currentColor" font-family="inherit" font-size="13"><path d="M30 140 H300" stroke-width="1.5"/><path d="M30 140 V30" stroke-width="1.5"/><path d="M30 40 L42 40 L55 41 L67 42 L79 44 L91 46 L104 49 L116 52 L128 56 L141 60 L153 65 L165 70 L178 76 L190 82 L202 89 L214 96 L227 104 L239 112 L251 121 L264 130 L276 140" stroke="#0F6E56" stroke-width="2.5"/><path d="M30 40 L39 40 L47 41 L56 42 L65 44 L73 46 L82 49 L91 52 L100 56 L108 60 L117 65 L126 70 L134 76 L143 82 L152 89 L160 96 L169 104 L178 112 L187 121 L195 130 L204 140" stroke="#8A4F0C" stroke-width="2.5"/><path d="M30 40 L36 40 L41 41 L46 42 L52 44 L58 46 L63 49 L68 52 L74 56 L80 60 L85 65 L90 70 L96 76 L102 82 L107 89 L112 96 L118 104 L124 112 L129 121 L134 130 L140 140" stroke="#2f6fb3" stroke-width="2.5"/><g fill="currentColor" stroke="none" text-anchor="middle"><text x="276" y="158">A</text><text x="204" y="158">C</text><text x="140" y="158">B</text><text x="16" y="44">20 m</text><text x="160" y="173">time</text></g></svg></figure>

The planets all drop the ball from the same height. Make a guess before you check.

## Run: change one number

```step
stage: run
insight: "Changing only a, one value at a time, and reading the landing time each time is how you collect cases for a conjecture."
try: { playground: board, starter: "cliff.yml#run", height: 640 }
check: { type: board, text: "Set $a$ to 1, then 2, then 4. Each time, read when the ball lands. Stop at $a = 4$. Then say in one sentence what happens to the landing time as $a$ goes up.", when: "a = 4" }
```

The graph draws the ball's height. The dashed line is the ground, and the board marks where the curve meets it. The table shows the height each second.

## Investigate: what makes a conjecture

```step
stage: investigate
insight: "A conjecture is an if-then claim about every case in a family. Cases that agree support it, they never prove it, and one case that disagrees rejects it."
tasks:
  - check:
      type: question
      q: "Which of these is a conjecture about the ball's rule, a claim a new case could prove wrong?"
      options: ["If $a$ is bigger, then the ball lands sooner", "When $a = 2$, the ball lands at about 3.2 s", "The graph is a curve", "The cliff is 20 m high"]
      answer: 0
      feedback: [null, "That is true, but it only says something about one value of a. A conjecture covers the whole family.", "That describes the picture. Nothing in it can be wrong for a new value of a.", "That's a fact the problem gives you, not a pattern you've noticed."]
      explain: "A conjecture says what happens for every $a$ in the family, so a value you haven't tried yet could show it wrong. 'If $a$ is bigger, then the ball lands sooner' does that."
  - check:
      type: bug
      code: "working.txt#ivy"
      text: "Ivy tests her conjecture. Click the line where her reasoning goes wrong."
      answer: 3
      fault: logic
      misconception: one-case-confirms
      explain: "Line 3: two tests that agree support the conjecture, but they don't prove it. A third value, one she hasn't tried, could still disagree."
  - check:
      type: question
      q: "Zara tests $a = 1, 2, 4$ and $5$. The ball lands sooner every time. What can she say?"
      options: ["The conjecture is supported, but one case that disagrees would still reject it", "The conjecture is proved, because four cases is plenty", "The conjecture is rejected, since she hasn't tried every value", "Nothing, because four cases is too few to say anything"]
      answer: 0
      feedback: [null, "Four, or four hundred, agreeing cases still leave the next case untested.", "Not trying every value doesn't reject it. Only a case that disagrees does.", "Agreeing cases are evidence. They count as support, just not as proof."]
      explain: "Cases that agree make the conjecture more believable. Only a case that disagrees can reject it, and only a reason that covers every case can prove it."
  - check:
      type: reasoning
      paper: true
      q: "The claim: 'In $y = x^2 + c$, if $c$ is bigger, the curve crosses the $x$-axis in more places.' For $c = -4$ it crosses in 2 places. Test $c = 4$. In how many places does $y = x^2 + 4$ cross the $x$-axis?"
      steps:
        - ["$x^2 + 4 = 0$", "the curve crosses the axis where y is 0"]
        - ["$x^2 = -4$", "subtract 4 from both sides"]
        - ["no number squared is negative, so there are 0 places", "the curve stays above the axis"]
        - ["0 is fewer than 2, so the claim is rejected", "a bigger c gave fewer places"]
      answer: "0"
      answerLabel: "places it crosses"
      feedback:
        - ["2", "That's the c = -4 case. Put c = 4 in: x² + 4 = 0 has no solution."]
      criteria:
        - "I set y = 0 for c = 4."
        - "I said how many places it crosses."
        - "I said whether the claim is supported or rejected, and why."
      explain: "x² + 4 = 0 has no solution, because x² is never negative. The curve crosses in 0 places, fewer than the 2 at c = -4, so the claim is rejected."
```

### What counts as a conjecture

### Find the mistake

Read Ivy's working. Where does she go too far?

### Supported or proved

### Test one on paper

Here's how to test a conjecture on a different family, $y = ax^2$.

```worked
\text{Conjecture: if } a \text{ is bigger, the curve is narrower.} :: Write the claim as an if-then about the whole family, so a new value of a could show it wrong.
a = 1,\; 2,\; 3 :: Try some positive values. At x = 1 the heights are 1, 2 and 3, and the curve is steeper each time.
\text{Positive cases agree} :: These support the conjecture. They are not enough, so choose a case that might break it.
a = -1 \text{ and } a = -3 :: Try negatives. Here -1 is bigger than -3.
y = -1 \text{ and } y = -3 \text{ at } x = 1 :: The a = -3 curve is lower at x = 1, so it is the narrower one.
\text{A bigger } a \text{ gave the wider curve} :: One case that disagrees rejects the conjecture as it is written.
\text{If } a \text{ is further from } 0 \text{, the curve is narrower.} :: Refine it, then test it on new values.
```

Now try one on paper. The claim is: "In $y = x^2 + c$, if $c$ is bigger, the curve crosses the $x$-axis in more places." For $c = -4$ the curve crosses at $x = 2$ and $x = -2$, so two places. Test $c = 4$. How many places does it cross?

## Modify: look for the edge

```step
stage: modify
insight: "A good test is one that might break the conjecture: the edge of the family (a = 0, a below 0) and then a refined claim to try again."
try: { playground: board, starter: "cliff.yml#vary", height: 640 }
tasks:
  - hint: ["Try a = 0 first, then a = -1.", "Read the height at the start and after a few seconds."]
    check:
      type: question
      q: "Set $a$ to 0, then to $-1$. What does the ball do?"
      options: ["It never lands: at 0 it hangs at 20 m, and below 0 it climbs", "It lands at once, because a is 0", "It lands later than any other value of a", "It lands at the same time as a = 1"]
      answer: 0
      feedback: [null, "With a = 0 nothing takes height off, so it stays at 20 m.", "It has no landing time at all, so 'later than any other' doesn't fit.", "At a = 1 it lands at about 4.5 s. Read the board at a = 0."]
      explain: "At a = 0 the height stays 20 − 0 × t² = 20. For a below 0 the height grows. The ball never reaches the ground, so there's no landing time to compare."
    smaller:
      check: { type: number, q: "With $a = 0$, what is the ball's height after 3 seconds? Use $h = 20 - at^2$.", answer: 20, explain: "20 − 0 × 9 = 20. Nothing takes height off." }
  - hint: "Landing is when the height is 0: 20 = a × t × t."
    check: { type: number, q: "Zara refines it: 'If $a$ is bigger **and above 0**, the ball lands sooner.' Test it with a small value. For $a = 0.2$, when does the ball land? (Solve $20 - 0.2t^2 = 0$.)", answer: 10, feedback: [[100, "100 is t². Take the square root."]], explain: "0.2t² = 20, so t² = 100 and t = 10 s. That's later than 4.5 s at a = 1, which fits her refined claim." }
  - check:
      type: question
      q: "Read the landing time at $a = 1$ and at $a = 4$ on the board. Four times the $a$ gives a landing time that is..."
      options: ["Half as long", "A quarter as long", "Four times as long", "The same"]
      answer: 0
      feedback: [null, "A quarter of 4.5 s would be about 1.1 s. At a = 4 the board shows about 2.2 s.", "A bigger a lands sooner, so the time can't grow.", "It changes. Compare 4.5 s with the board's reading at a = 4."]
      explain: "At a = 1 the ball lands at about 4.5 s and at a = 4 about 2.2 s, which is half. That's a second pattern to turn into a conjecture and test."
```

### Hanging forever

### A small value of a

### Four times as much

## Practise: conjectures

```step
stage: practise
insight: "Spotting a testable claim, testing it with numbers, finding the single case that rejects one, and (review) a quadratic equation."
tasks:
  - check:
      type: question
      q: "Which of these is a conjecture you could test on $y = ax^2$?"
      options: ["If $a$ is positive, then the curve opens upward", "The curve $y = 3x^2$ passes through $(1, 3)$", "Graphs of curves are interesting", "When $a = 2$, $y = 8$ at $x = 2$"]
      answer: 0
      feedback: [null, "That is a fact about one curve. A conjecture covers the whole family.", "That isn't a claim a new case could show wrong.", "That is one calculation, not a claim about every a."]
      explain: "It says what happens for every positive $a$, so a new value could show it wrong."
    smaller:
      check: { type: question, q: "'The curve $y = 3x^2$ passes through $(1, 3)$.' Is that about one value of $a$ or every value?", options: ["One value", "Every value"], answer: 0, explain: "It's about a = 3 only. A conjecture says something about every a in the family." }
  - check:
      type: number
      q: "A student's conjecture: 'In $y = ax^2$, doubling $a$ doubles $y$ at $x = 3$.' Test it. For $a = 2$, $y = 18$ at $x = 3$. What is $y$ at $x = 3$ for $a = 4$?"
      answer: 36
      feedback:
        - [12, "That's 4 × 3. Square the 3 first: 4 × 9."]
      explain: "4 × 3² = 4 × 9 = 36, which is twice 18. This case agrees, so the conjecture is supported."
  - check:
      type: question
      q: "Which pair of values rejects the claim 'if $a$ is bigger, the curve $y = ax^2$ is narrower'?"
      options: ["$a = -1$ and $a = -3$", "$a = 1$ and $a = 2$", "$a = 2$ and $a = 5$", "$a = 0.5$ and $a = 1$"]
      answer: 0
      feedback: [null, "At a = 2 the curve is narrower than at a = 1, so this pair agrees.", "At a = 5 the curve is narrower than at a = 2, so this pair agrees.", "At a = 1 the curve is narrower than at a = 0.5, so this pair agrees."]
      explain: "-1 is bigger than -3, but the a = -3 curve is the narrower one. One case that disagrees rejects the claim."
  - check:
      type: number
      q: "Review: solve $x^2 + 4x = 0$. What is the negative solution?"
      answer: -4
      explain: "x(x + 4) = 0, so x = 0 or x = -4."
```

### Testable or not

### A test with numbers

### The case that breaks it

### Review

From the last unit: a quadratic with a missing number term.

## Make: back to the cliff

```step
stage: make
insight: "Coming back to the three planets: use what the tests showed to find the a that makes the ball land at a chosen time, and say what the model leaves out."
tasks:
  - hint: ["The ball lands when the height is 0, at t = 2.", "Put t = 2 into 20 − a × t² and set it equal to 0."]
    check:
      type: reasoning
      paper: true
      q: "A planet needs the ball to land at exactly 2 seconds. Use $20 - at^2 = 0$ at $t = 2$ to work out $a$. Is that planet stronger or weaker than $a = 2$?"
      steps:
        - ["$20 - a \\times 2^2 = 0$", "the height is 0 at t = 2"]
        - ["$20 - 4a = 0$", "2² is 4"]
        - ["$a = 5$", "20 ÷ 4"]
        - ["5 is bigger than 2, so the planet is stronger", "a bigger a lands sooner, as the conjecture says"]
      answer: "5"
      answerLabel: "a"
      feedback:
        - ["10", "That's the time when a = 0.2. Here t is 2: put it in and solve for a."]
        - ["20", "That's the starting height. Put t = 2 into 20 − a t² and solve for a."]
      criteria:
        - "I put t = 2 into the rule and set the height to 0."
        - "I solved for a."
        - "I compared my a with 2 and said whether the planet is stronger or weaker."
      explain: "20 − 4a = 0 gives a = 5. That's bigger than 2, so the planet is stronger and the ball lands sooner, which fits the conjecture."
  - check:
      type: question
      q: "A class drops a real ball from a roof, films it and compares the landing time with the rule. It lands a little later than the rule says. What is the best response?"
      options: ["The rule is a model that leaves things out, such as air pushing back on the ball; say so and check how big the gap is", "The conjecture is proved wrong, so throw the rule away", "The film must be wrong, since the rule is maths", "The rule is proved right, since the times are close"]
      answer: 0
      feedback: [null, "A small gap doesn't mean the rule is useless. It means the rule leaves something out.", "Measurements can be a little off, but the rule is a simplified model, not the truth.", "Close doesn't prove a rule right. It supports it, as in the conjecture tests."]
      explain: "The rule leaves out air resistance, so a real ball falls a little more slowly. Saying what a model leaves out, and how much it matters, is part of testing it."
```

### The planet that lands at 2 seconds

Back to the cliff. Work it out on paper first, then type your answer.

### A real ball

The cliff, the planets and every value of $a$ are made up, and the rule leaves out air pushing back on the ball. Your class could drop a ball from a measured height, film it and compare it with the rule.

Sources: the 20 m cliff, the planets and every value of $a$ are made up for this lesson.

**Also used in**

- **Science investigations.** A fair test changes one variable at a time, and a hypothesis is a conjecture that results can support or reject.
- **Design.** A designer tunes one setting at a time and tests it at the edges before trusting it.
- **Next.** Judging a model, and generalising a pattern across several experiments.
