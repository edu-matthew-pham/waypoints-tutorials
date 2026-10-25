---
order: 26
unit: twovars10
node: AC9M10A02 n4
uses: [AC9M10A02 n3, AC9M9A04 n1]
assumes: [AC9M10A02 n3]
connection: electricity-plan
title: Setting up equations
summary: "Name the letters with their units, write each plan as a rule, set them equal or add them up, solve, then say the answer in the words of the situation and check it makes sense."
language: maths
voice: { name: af_heart, speed: 1.1 }
hook: "The cheaper electricity plan depends on a number that only your own bill knows."
app:
  command: node "$REPO_ROOT/tools/serve.mjs" "$REPO_ROOT/dist/_playground-board" 8377
  url: http://127.0.0.1:8377/index.html
  readySelector: "#legend"
  layout: full
explainPicture: { ref: setup.yml#explain-pic, caption: "Plan A ($c = 120 + 24k$) and Plan B ($c = 72 + 28k$) meet at $(12, 408)$: at 12 kWh a day both cost 408 cents." }
explainClip:
  query: { code: "@setup.yml#explain", fresh: 1, id: explain }
  caption: "From a rate card to a crossing"
  say: "Each rate card becomes a rule, and the rules cross at one usage."
  clip:
    - caption: { text: "Plan A: 120 cents a day plus 24 cents per kWh. c = 120 + 24k.", say: "Plan A is a daily charge plus a rate for each unit used." }
    - wait: 1000
    - caption: { text: "Plan B: 72 cents a day plus 28 cents per kWh. c = 72 + 28k.", say: "Plan B has a lower daily charge and a higher rate." }
    - wait: 1000
    - caption: { text: "They cost the same at 12 kWh a day. Below it B is cheaper; above it A is.", say: "At twelve units a day they match. Below that B wins, above that A wins." }
    - wait: 1400
---
You have solved pairs of equations someone gave you. In real problems nobody hands you the equations. You write them from a rate card, a price list or a bill, and the answer has to make sense in the situation. The plans and prices here are made up; the bill figures are from a made-up household too.

## Predict: which plan is cheaper?

```step
stage: predict
insight: "Committing to which plan is cheaper for a heavy user shows who thinks the lower daily charge wins and who looks at the rate per unit."
check:
  type: predict
  q: "A household's bill covers 90 days and 1,260 kWh of electricity (14 kWh a day). Plan A charges 120 cents a day plus 24 cents per kWh. Plan B charges 72 cents a day plus 28 cents per kWh. Which plan costs this household less?"
  options:
    - "Plan A, with the higher daily charge and the lower rate"
    - "Plan B, with the lower daily charge and the higher rate"
    - "They cost the same"
  actual: "Plan A, by 7.20 dollars. Plan A: 90 × 120 + 1,260 × 24 = 41,040 cents. Plan B: 90 × 72 + 1,260 × 28 = 41,760 cents. A household that uses a lot saves more on the rate than it pays extra in daily charges."
```

<figure class="situation" role="img" aria-label="An electricity bill showing 90 days and 1,260 kWh, beside two rate cards. Plan A: 120 cents a day, 24 cents per kWh. Plan B: 72 cents a day, 28 cents per kWh. A question mark asks which plan costs less."><svg viewBox="0 0 460 190" width="460" style="max-width:100%;height:auto" fill="none" stroke="currentColor" font-family="inherit" font-size="14"><rect x="10" y="10" width="150" height="120" rx="6"/><text x="24" y="36" font-weight="bold" fill="currentColor" stroke="none">Bill</text><text x="24" y="64" fill="currentColor" stroke="none">90 days</text><text x="24" y="88" fill="currentColor" stroke="none">1,260 kWh</text><text x="24" y="112" fill="currentColor" stroke="none">cost ?</text><rect x="180" y="10" width="130" height="120" rx="6" fill="#378ADD" fill-opacity="0.18" stroke="#185FA5"/><text x="194" y="36" font-weight="bold" fill="currentColor" stroke="none">Plan A</text><text x="194" y="64" fill="currentColor" stroke="none">120 cents a day</text><text x="194" y="88" fill="currentColor" stroke="none">24 cents per kWh</text><rect x="320" y="10" width="130" height="120" rx="6" fill="#EF9F27" fill-opacity="0.2" stroke="#854F0B"/><text x="334" y="36" font-weight="bold" fill="currentColor" stroke="none">Plan B</text><text x="334" y="64" fill="currentColor" stroke="none">72 cents a day</text><text x="334" y="88" fill="currentColor" stroke="none">28 cents per kWh</text><text x="10" y="168" fill="currentColor" stroke="none">Which plan costs less for this bill?</text></svg></figure>

The prices are made up. Each plan has a charge per day and a charge per kWh.

## Run: two rules, one graph

```step
stage: run
insight: "Each plan is a line: the daily charge is where it starts and the rate is how steeply it climbs. Where the lines cross the two plans cost the same."
try: { playground: board, starter: "setup.yml#run", height: 600 }
check: { type: board, text: "Drag $P$ to where the two plans cost the same for a day. Read $k$ and $c$. Which plan is cheaper to the right of that point? Was your prediction right?", when: "x(P) = 12 and y(P) = 408" }
```

A household that uses more than the crossing amount each day sits to the right of it. The bill had 14 kWh a day.

## Investigate: from a rate card to a rule

```step
stage: investigate
insight: "Writing the rule needs two decisions: the daily charge is paid once a day, and every quantity must be in the same unit. Tess writes the charge in dollars and the rate in cents in one rule."
try: { playground: board, starter: "setup.yml#run", height: 600 }
tasks:
  - check:
      type: question
      q: "Let $k$ be the kWh used in a day and $c$ the cost for the day in cents. Plan A charges 120 cents a day plus 24 cents per kWh. Which rule is Plan A?"
      options: ["$c = 120 + 24k$", "$c = 120k + 24$", "$c = 144k$", "$c = 120 + 24 + k$"]
      answer: 0
      feedback: [null, "The daily charge is paid once a day, not for each kWh. It is the fixed part.", "That adds the two charges, then multiplies: both are not paid for every kWh.", "The 24 cents is paid for each kWh, so it multiplies k."]
      explain: "The fixed part is 120 cents a day. The rate part is 24 cents times the kWh used: c = 120 + 24k."
  - check:
      type: number
      q: "A bill covers 90 days. Plan A's daily charge is 120 cents. How many dollars is the daily charge for the whole bill?"
      answer: 108
      feedback:
        - [10800, "That is cents. 100 cents make 1 dollar."]
        - [120, "That is one day. The bill covers 90 days."]
      explain: "90 × 120 = 10,800 cents, which is 108 dollars."
  - check:
      type: bug
      code: "working.txt#tess"
      text: "Tess writes Plan A as a rule. Click the line where her working goes wrong."
      answer: 3
      fault: logic
      misconception: setup-mixed-units
      explain: "Line 3: the 1.20 is in dollars but the 24 is in cents, so the rule mixes units. Write both in cents: c = 120 + 24k. Then 10 kWh costs 360 cents, which is 3.60 dollars."
  - hint: ["Both rules give $c$, so set them equal.", "Then take $24k$ and $72$ from both sides."]
    check:
      type: reasoning
      paper: true
      q: "Plan A is $c = 120 + 24k$ and Plan B is $c = 72 + 28k$ (cents for a day, with $k$ kWh in the day). Find $k$ where the two plans cost the same, on paper, with the example beside you. Then type $k$."
      steps:
        - ["$120 + 24k = 72 + 28k$", "both rules give c, so set them equal"]
        - ["$48 = 4k$", "take 24k and 72 from both sides"]
        - ["$k = 12$", "divide by 4; then $c = 120 + 24 \\times 12 = 408$ cents"]
      answer: 12
      answerLabel: "k (kWh per day) where the plans cost the same"
      feedback:
        - [408, "That is the cost in cents. The question asks for the kWh."]
        - [-12, "Take 24k from the right side. 48 = 4k gives a positive k."]
      criteria:
        - "I set the two rules equal."
        - "I found the cost as well, and checked it in the other rule."
        - "I can say, in words, which plan is cheaper above 12 kWh a day."
      explain: "120 + 24k = 72 + 28k gives 48 = 4k, so k = 12 and c = 408 cents. Below 12 kWh a day Plan B is cheaper; above it Plan A is."
```

### Write the rule

### Same units

### Find the mistake

### Try one on paper

Here is the whole routine on a different pair of plans: letters, rules, solve, then say it in words.

```worked
c = 100 + 30k,\; c = 80 + 35k :: Let $k$ be the kWh in a day and $c$ the cost for the day in cents. Plan C is a daily charge plus a rate for each kWh. Plan D likewise.
100 + 30k = 80 + 35k :: Both rules give $c$, so set them equal.
20 = 5k :: Take $30k$ and $80$ from both sides.
k = 4 :: Divide by 5.
c = 100 + 30 \times 4 = 220 :: Put $k$ into one rule for the cost.
\text{Both cost 220 cents a day at 4 kWh a day.} :: Say it in the words of the situation, with its units. Below 4 kWh Plan D is cheaper; above it, Plan C.
```

Now try one on paper with the example beside you: Plans A and B. Find the $k$ where they cost the same, then type it.

## Modify: change one thing

```step
stage: modify
insight: "One change at a time: reading a cost from a rule, using a whole bill, an answer that does not make sense, a crossing below zero, and choosing a method."
try: { playground: board, starter: "setup.yml#usage", height: 600 }
tasks:
  - starter: "setup.yml#usage"
    hint: "Plan A is $c = 120 + 24k$. Put $k = 15$ in."
    check: { type: board, text: "A household uses 15 kWh a day. Drag $P$ to Plan A's cost for that day.", when: "x(P) = 15 and y(P) = 480", explain: "c = 120 + 24 × 15 = 480 cents." }
  - check:
      type: number
      q: "A bill covers 60 days and 600 kWh. Plan B is 72 cents a day plus 28 cents per kWh. How many dollars does Plan B cost for this bill?"
      answer: 211.2
      feedback:
        - [21120, "That is cents. Divide by 100 to get dollars."]
        - [4320, "That is only the daily charges for 60 days. Add the 600 kWh at 28 cents."]
      explain: "60 × 72 = 4,320 cents and 600 × 28 = 16,800 cents. The total is 21,120 cents, which is 211.20 dollars."
  - check:
      type: question
      q: "Edge case: a stall sells adult tickets and student tickets. Solving the pair gives $a = 2.5$ adult tickets. Does that answer make sense?"
      options: ["No: you cannot sell half a ticket, so look again at the equations or the numbers", "Yes: 2.5 is a number", "Yes: round it to 3 and carry on"]
      answer: 0
      feedback: [null, "It solves the equations, but tickets come in whole numbers.", "Rounding changes the totals, so the pair is no longer solved."]
      explain: "Check the answer against the situation. Tickets are whole, so 2.5 means something was set up or copied wrongly, or there is no exact answer."
  - check:
      type: question
      q: "Edge case: Plan P is $c = 100 + 20k$ and Plan Q is $c = 140 + 25k$. Setting them equal gives $k = -8$. What does that mean?"
      options: ["The plans never cost the same: usage cannot be negative, so P is always cheaper", "The plans cost the same at 8 kWh a day", "Plan Q is cheaper"]
      answer: 0
      feedback: [null, "−8 is not 8. A negative number of kWh cannot be used.", "At k = 0 P costs 100 and Q costs 140, and P climbs more slowly."]
      explain: "Negative kWh is impossible, so the lines cross only to the left of the graph's real part. P has the lower fee and the lower rate, so it is cheaper at every usage."
  - check:
      type: question
      q: "Which method is quickest for $c = 120 + 24k$ and $c = 72 + 28k$?"
      options: ["Substitution: both rules say what $c$ is, so set them equal", "Elimination after multiplying both equations", "Drawing a very careful graph"]
      answer: 0
      feedback: [null, "It works, but you can set them equal at once, since both are already c = something.", "A graph gives an estimate. Algebra gives the exact value."]
      explain: "Both rules start c =, so 120 + 24k = 72 + 28k is the first step. Elimination is quicker when neither equation says what a letter equals."
```

### Read a cost

### A whole bill

### Does it make sense?

### A crossing below zero

### Choose a method

## Practise: rules and bills

```step
stage: practise
insight: "Writing a rule from a description, keeping units the same, judging an answer in context, and a review that keeps solving a pair fresh."
tasks:
  - check:
      type: answer
      q: "A taxi charges 4 dollars to start plus 3 dollars for each kilometre. Write the cost $c$ dollars for $d$ kilometres as $c = \\dots$"
      answer: "c = 4 + 3d"
      form: subject c
      feedback: [["c = 7d", "The starting charge is paid once. Only the 3 dollars is for each kilometre."], ["c = 3 + 4d", "The 4 dollars is the start; the 3 dollars is per kilometre."]]
      explain: "4 dollars once, plus 3 dollars for each of d kilometres: c = 4 + 3d."
  - check:
      type: number
      q: "A plan charges 90 cents a day plus 30 cents per kWh. A household uses 20 kWh in a day. How many dollars is the cost for the day?"
      answer: 6.9
      feedback:
        - [690, "That is cents. Divide by 100."]
        - [1.1, "30 cents is per kWh, so 20 kWh costs 20 × 30 cents."]
      explain: "90 + 20 × 30 = 90 + 600 = 690 cents, which is 6.90 dollars."
    smaller:
      check: { type: number, q: "How many cents do 20 kWh cost at 30 cents per kWh?", answer: 600, explain: "20 × 30 = 600 cents." }
  - check:
      type: question
      q: "Solving a pair for a school trip gives $b = -3$ buses. What should you conclude?"
      options: ["The answer cannot be right: a number of buses cannot be negative", "Three buses are needed", "The trip needs no buses"]
      answer: 0
      feedback: [null, "The sign matters: −3 is not 3.", "Zero is not −3."]
      explain: "A negative number of buses is impossible, so check the setup and the arithmetic before using the answer."
  - check:
      type: number
      q: "Review (elimination): solve $x + y = 10$ and $x - y = 2$. What is $x$?"
      answer: 6
      feedback:
        - [4, "That is y. The question asks for x."]
        - [8, "Add the equations: 2x = 12."]
      explain: "Add: 2x = 12, so x = 6. Then y = 4."
```

### Write a rule

### Units

### Does it make sense?

### Review

Elimination, from the last lesson.

## Make: your own bill

```step
stage: make
insight: "Coming back to the bills: a rule for each plan, a total for one real bill, and a sentence that says the answer in everyday words."
tasks:
  - hint: ["Plan A: days × daily charge + kWh × rate.", "Change cents to dollars at the end."]
    check:
      type: reasoning
      paper: true
      q: "Use the sample bill: 90 days and 1,260 kWh. Plan A is 120 cents a day plus 24 cents per kWh. Plan B is 72 cents a day plus 28 cents per kWh. By how many dollars is the cheaper plan cheaper? Work it out on paper, in cents, then type the difference in dollars. Finish with one sentence in plain words saying which plan the household should choose and why. (If you have a real bill at home, repeat this on paper with its days and kWh.)"
      steps:
        - ["Plan A: $90 \\times 120 + 1260 \\times 24 = 41\\,040$ cents", "daily charges plus the units used"]
        - ["Plan B: $90 \\times 72 + 1260 \\times 28 = 41\\,760$ cents", "the same for Plan B"]
        - ["$41\\,760 - 41\\,040 = 720$ cents, which is 7.20 dollars", "the difference, then convert to dollars"]
      answer: 7.2
      answerLabel: "Difference in dollars"
      feedback:
        - [720, "That is in cents. Divide by 100 for dollars."]
        - [41040, "That is Plan A's total in cents. The question asks for the difference."]
      criteria:
        - "I used cents for everything, then changed to dollars at the end."
        - "I wrote a sentence naming the cheaper plan and by how much."
        - "My sentence says why: the household uses a lot of electricity, so the lower rate wins."
      explain: "Plan A is 410.40 dollars and Plan B is 417.60 dollars. Plan A is cheaper by 7.20 dollars: this household uses 14 kWh a day, above the 12 kWh a day where the plans match, so the lower rate matters more than the higher daily charge."
  - check:
      type: question
      q: "Next year the household uses only 7 kWh a day (630 kWh in 90 days). Which plan is cheaper then?"
      options: ["Plan B: below 12 kWh a day the lower daily charge wins", "Plan A: it is cheaper for every household", "They cost the same"]
      answer: 0
      feedback: [null, "Plan A is cheaper only above 12 kWh a day.", "They match only at 12 kWh a day."]
      explain: "At 7 kWh a day Plan A costs 120 + 168 = 288 cents and Plan B costs 72 + 196 = 268 cents. B is cheaper below the crossing at 12 kWh a day."
```

### The bill

Work it out on paper first, then type the difference in dollars.

### Next year

The prices are made up, and real plans add time-of-use rates, discounts and solar credits that this model ignores. A real comparison should use a real bill and the real rate cards.

**Also used in**

- **Everyday life.** Phone plans, hire charges, taxi fares and gym fees: any cost made of a fixed part and a rate.
- **Next lessons.** Where they meet in functions: the same idea with a line and a curve.
