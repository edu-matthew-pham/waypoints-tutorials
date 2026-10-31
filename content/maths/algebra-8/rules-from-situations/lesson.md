---
order: 10
unit: using
node: AC9M8A03 n1
uses: [AC9M7N07 n2]   # a falling battery has a negative rate
assumes: [AC9M8A02 n1, AC9M8A02 n3]   # its Prior Knowledge; lines from rules are taught earlier in the course and solving with graphs in Solving equations with graphs (n2); inequalities are class work
title: Rules from real situations
summary: Many real costs and amounts are a starting amount plus a rate. The starting amount is c and the rate is m, so the rule is y = mx + c.
language: maths
voice: { name: af_heart, speed: 1.1 }
hook: "Taxi fares, phone plans, gym memberships and a phone battery running down: what do they have in common?"
app:
  command: node "$REPO_ROOT/tools/serve.mjs" "$REPO_ROOT/dist/_playground-board" 8138
  url: http://127.0.0.1:8138/index.html
  readySelector: "#sl-m"
  layout: full
explainPicture: { ref: graph.yml#explain-pic, caption: "A taxi: 4 dollars to get in (where the line starts) and 2 dollars per km (up 2 for each km). $T = 2d + 4$." }
explainClip:
  query: { code: "@graph.yml#explain", fresh: 1, id: explain }
  caption: "The starting amount is c; the rate is m"
  say: "The starting amount is c, and the rate is m."
  clip:
    - caption: { text: "A taxi costs 4 dollars to get in: that is c.", say: "A taxi costs four dollars to get in, before you go anywhere: that is c." }
    - click: Make c bigger
    - click: Make c bigger
    - click: Make c bigger
    - click: Make c bigger
    - wait: 400
    - caption: { text: "Then 2 dollars for each km: the rate, m.", say: "Then two dollars for each kilometre: that is the rate, m." }
    - click: Make m bigger
    - click: Make m bigger
    - wait: 400
    - caption: { text: "Together: T = 2d + 4. Starts at 4, up 2 for each km.", say: "Together, T equals two d plus four: start at four, up two per kilometre." }
    - expect: { selector: "#legend", contains: "T = 2d + 4" }
    - wait: 1200
connection: taxi-fare
---
So far the rules had $x$ and $y$. Real situations have their own letters: $T$ for a total cost, $d$ for a distance, $h$ for hours. 
## Predict: a taxi fare

```step
stage: predict
insight: "Committing to a rule before fitting the line shows whether students can tell the one-off amount from the rate in words."
check:
  type: predict
  q: "The meter shows what this taxi charges. Which rule gives the fare $T$ for a trip of $d$ km?"
  options: ["$T = 2d + 4$", "$T = 4d + 2$", "$T = 6d$", "$T = 2d$"]
  actual: "T = 2d + 4. The 4 dollars is paid once, before you travel: it is where the line starts (c). The 2 dollars is paid for each km: it is the rate (m)."
```

<figure class="situation" role="img" aria-label="A taxi meter. It shows: flag fall, 4 dollars, paid when you get in. Each km, 2 dollars. Trip of d km, fare T equals a question mark."><svg viewBox="0 0 320 190" width="320" style="max-width:100%;height:auto" fill="none" stroke="currentColor" font-family="inherit" font-size="15"><rect x="20" y="14" width="280" height="150" rx="14"/><rect x="40" y="30" width="240" height="34" rx="6" stroke-opacity="0.5"/><text x="160" y="53" text-anchor="middle" font-size="18" fill="currentColor" stroke="none">FARE  T = ?</text><text x="40" y="95" fill="currentColor" stroke="none">Flag fall (getting in): 4 dollars</text><text x="40" y="122" fill="currentColor" stroke="none">Each km: 2 dollars</text><text x="40" y="149" fill="currentColor" stroke="none">Trip: d km</text></svg></figure>

Think about a trip of 0 km, then 1 km, then 2 km. What does each one cost?

## Run: fit the fares

```step
stage: run
insight: "Fitting a line through real fares makes c and m mean something: c is the fare for 0 km, m is the extra for each km."
try: { playground: board, starter: "graph.yml#run", height: 680 }
check: { type: board, text: "Set $m$ and $c$ so the line goes through all three fares.", when: "P on y = mx + c and Q on y = mx + c and R on y = mx + c" }
```

The graph works the same way as before: $m$ is how much the line goes up for each step right, and $c$ is where it starts.

The points are three fares: 6 dollars for 1 km, 10 dollars for 3 km and 14 dollars for 5 km. (The fares are made up for the task.) Set $m$ and $c$ so the line passes through all three. Was your rule right?

## Investigate: from words to a rule

```step
stage: investigate
insight: "In words, the starting amount is the value when nothing has happened yet (c); the rate is 'per', 'each' or 'every' (m)."
tasks:
  - picture: { ref: graph.yml#explain-pic, caption: "The taxi: starts at 4 (the fee), up 2 for each km (the rate)." }
    check:
      type: answer
      q: "A gym charges a 30 dollar joining fee and 15 dollars a week. Write a rule for the total cost $T$ after $w$ weeks."
      answer: "15w + 30"
      feedback:
        - ["30w + 15", "That charges 30 each week. Which amount is paid only once, at the start?"]
        - ["15w", "You have the weekly rate. What about the joining fee?"]
        - ["45w", "The joining fee is paid once, not every week. Keep it separate."]
      explain: "T = 15w + 30: 30 dollars once (c), then 15 dollars for each week (m)."
  - check:
      type: bug
      code: "working.txt#zoe"
      text: "Zoe writes a rule for a taxi fare. Click the line where her reasoning goes wrong."
      answer: 2
      fault: logic
      misconception: m-c-swap
      explain: "Line 2: m is the rate, the amount for each km, which is 3. It does not matter which number comes first in the question. The rule is T = 3d + 5."
  - check:
      type: question
      q: "A phone plan costs $T = 5g + 20$ dollars a month for $g$ GB of data. What does the 5 mean?"
      options: ["5 dollars for each GB used", "5 GB of data are included", "The monthly fee is 5 dollars"]
      answer: 0
      explain: "5 is m, the rate: each extra GB adds 5 dollars. The 20 is c, the fee you pay even with no data."
```

### A phone plan

Here is how to turn words into a rule.

```worked
\text{Fee } 20, \text{ then } 5 \text{ per GB} :: A phone plan costs 20 dollars a month, plus 5 dollars for each GB used. Find a rule for the cost $T$.
g = 0: \; T = 20 :: With no data used, you still pay the fee. That is the value when $g$ is 0.
c = 20 :: The starting amount is $c$.
m = 5 :: Each extra GB adds 5 dollars. "Per", "each" or "every" signals the rate, $m$.
T = 5g + 20 :: Put them together.
g = 3: \; T = 5(3) + 20 = 35 :: Check with a value you can work out in words: 3 GB costs 20 + 15 = 35 dollars.
```

### Find the mistake

Read Zoe's working one line at a time. How did she decide which number is $m$?

### What the numbers mean

Read the rule back into words.

## Modify: new situations

```step
stage: modify
insight: "One change at a time: no starting amount (c = 0), an amount that goes down (negative m), a rate that is not whole, and only two points with no words."
try: { playground: board, starter: "graph.yml#no-fee", height: 640 }
tasks:
  - starter: "graph.yml#no-fee"
    hint: "What does hiring the bike for 0 hours cost?"
    check: { type: board, text: "Bike hire: 6 dollars for 1 hour, 24 dollars for 4 hours. Set $m$ and $c$ so the line goes through both.", when: "P on y = mx + c and Q on y = mx + c", explain: "T = 6h: 6 dollars per hour and no fee, so c = 0 and the line starts at (0, 0)." }
  - starter: "graph.yml#down"
    hint: ["The battery goes from 80% to 50% in 3 hours. How much each hour?", "It goes down, so m is negative. Then work back to 0 hours for c."]
    check: { type: board, text: "A phone battery: 80% after 2 hours, 50% after 5 hours. Fit the line.", when: "P on y = mx + c and Q on y = mx + c", explain: "B = −10h + 100: it starts full (c = 100) and goes down 10% each hour (m = −10)." }
  - starter: "graph.yml#half"
    hint: "From 2 pages to 6 pages the cost goes up 2 dollars. How much per page?"
    check: { type: board, text: "Printing: 3 dollars for 2 pages, 5 dollars for 6 pages. Fit the line.", when: "P on y = mx + c and Q on y = mx + c", explain: "T = 0.5n + 2: a 2 dollar fee and 50 cents a page." }
  - starter: "graph.yml#points-only"
    hint: ["From 2 km to 4 km the fare goes up 6. How much per km?", "Work back from 2 km to 0 km to find the fee."]
    check: { type: board, text: "Two fares from a table: 11 dollars for 2 km and 17 dollars for 4 km. Find the rule.", when: "P on y = mx + c and Q on y = mx + c", explain: "T = 3d + 5: up 6 over 2 km is 3 per km, and 11 − 2 × 3 = 5 to get in." }
```

### No starting amount

Each task gives some values as points. (They are made up for the task.) Set $m$ and $c$ so the line goes through them all.

### Going down

A phone battery runs down at the same rate each hour.

### Less than a dollar

Printing costs a fee plus a little for each page.

### Only the numbers

No words this time: just two fares. Work out the rate first.

## Practise: rules and meanings

```step
stage: practise
insight: "Writing a rule, reading its numbers in words and using it for a value are one skill; the review keeps solving with graphs fresh."
tasks:
  - check:
      type: answer
      q: "Concert tickets cost 12 dollars each, plus a 6 dollar booking fee for the order. Write a rule for the total $T$ for $n$ tickets."
      answer: "12n + 6"
      feedback:
        - ["6n + 12", "Which amount is paid once for the whole order? That one is c."]
        - ["18n", "The booking fee is paid once, not for every ticket."]
      explain: "T = 12n + 6: 12 dollars for each ticket (m) and 6 dollars once (c)."
    smaller:
      check: { type: "number", q: "Try it with numbers first: what do 2 tickets cost in total, booking fee included, in dollars?", answer: 30, explain: "2 tickets at 12 dollars is 24, and the 6 dollar booking fee is paid once: 30." }
  - check:
      type: question
      q: "A plumber charges $T = 80h + 60$ dollars for a job of $h$ hours. What does the 60 mean?"
      options: ["A 60 dollar call-out fee, paid once", "60 dollars for each hour", "The cost of a 60-hour job"]
      answer: 0
      explain: "60 is c: what you pay even for 0 hours, the call-out fee. 80 is the hourly rate."
  - check:
      type: answer
      q: "Using $T = 80h + 60$, what does a 3-hour job cost, in dollars?"
      answer: "300"
      feedback:
        - ["240", "That is the hours only (80 × 3). Add the call-out fee."]
        - ["420", "Check: 80 × 3 = 240, not 360."]
      explain: "80 × 3 + 60 = 240 + 60 = 300 dollars."
  - check:
      type: answer
      q: "Review: $y = 2x + 1$ and $y = 7$ meet at $(3, 7)$. Solve $2x + 1 = 7$."
      answer: "3"
      feedback:
        - ["7", "7 is the y of the meeting point. The solution is its x."]
      explain: "x = 3. Check: 2 × 3 + 1 = 7."
```

### Tickets

### What the 60 means

### Using the rule

### Review

## Make: your own situation

```step
stage: make
insight: "Choosing a starting amount and a rate for a situation of their own reverses the lesson: from the rule back to words."
try: { playground: board, starter: "graph.yml#make", height: 640 }
hint: ["Pick a starting amount with c and a rate with m.", "Work out the total for 4 units: 4 lots of m, plus c. Drag P there."]
check: { type: board, text: "Choose your own starting amount and rate (both more than 0). Then drag $P$ to the total for 4 units.", when: "P on y = mx + c and x(P) = 4 and m > 0 and c > 0", explain: "P is the total for 4 units: 4 lots of your rate, plus your starting amount." }
```

Invent a situation that is a starting amount plus a rate: a club with a joining fee and a weekly cost, a game with a starting score and points per level. Set $c$ and $m$, then drag $P$ to the total for 4 units.

Stretch: tell a partner your situation in words. Can they write your rule?

## Make: a taxi trip on paper

```step
stage: make
insight: "Telling the one-off flag fall from the rate per km is the whole translation; the paper task makes them choose which number is c."
hint: ["Which amount do you pay even for a trip of 0 km?", "Write the rule first, then put 14 in place of d."]
check:
  type: reasoning
  paper: true
  q: "A taxi company charges a flag fall of 5 dollars plus 3 dollars for each km (made up for the task). Write the rule for the fare $T$ for a trip of $d$ km, then work out the fare for a 14 km trip to the airport, in dollars."
  steps:
    - ["Flag fall 5 dollars, paid once: $c = 5$", "the amount for a trip of 0 km"]
    - ["3 dollars for each km: $m = 3$", "'for each' signals the rate"]
    - ["$T = 3d + 5$", "rate times distance, plus the flag fall"]
    - ["$T = 3 \\times 14 + 5 = 42 + 5$", "put 14 in place of $d$"]
    - ["The fare is $47$ dollars", "check: 14 km at 3 dollars is 42, and the flag fall makes 47"]
  picks:
    - step: 1
      q: "Which number is c, the starting amount?"
      options:
        - "5 dollars, paid once to get in"
        - "3 dollars, because it comes second in the words"
        - "14, the length of the trip"
      answer: 0
      feedback: [null, "3 dollars is paid again for every km. That is the rate, m.", "14 is the distance d, the input, not a starting amount."]
  answer: "47"
  feedback:
    - ["42", "That is the 14 km only (3 × 14). Add the 5 dollar flag fall."]
    - ["88", "Check: 5 + 3 = 8, then 8 × 14 would charge the flag fall every km. It is paid once."]
  criteria:
    - "I wrote c and m in words before the rule."
    - "My rule charges the flag fall once and the rate for each km."
    - "I put 14 in place of d and worked it out step by step."
  explain: "T = 3d + 5. For 14 km, 3 × 14 + 5 = 47 dollars."
```

Do this one in your book, not on the screen. A real taxi's price card lists a flag fall and a rate per km, and the trip to the airport is a fare you can work out before you get in. Write c and m, then the rule, then type the fare.

**Also used in**

- **Taxi and ride-share fares.** A fare estimator is this rule with the rate and flag fall from the price card (waiting time and tolls are extras).
- **Phone plans and gym memberships.** A fee paid once plus a rate for each GB or week is the same rule.
- **Venue pricing.** A hire fee plus a price per guest has the same shape.
