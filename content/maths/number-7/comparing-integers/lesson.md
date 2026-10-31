---
order: 1
unit: integers
node: AC9M7N07 n1
assumes: [AC9M6N01 n1, AC9M6N01 n2]
title: Comparing integers
summary: On a number line, the number further left is less. So −7 is less than −2, even though 7 is more than 2.
language: maths
voice: { name: af_heart, speed: 1.1 }
connection: winter-minimums   # data/connections/maths.yml
hook: "On a cold morning Thredbo is at −9 °C and Canberra at −3 °C (made-up temperatures for the task). Which is colder, and which number is bigger?"
app:
  command: node "$REPO_ROOT/tools/serve.mjs" "$REPO_ROOT/dist/_playground-board" 8160
  url: http://127.0.0.1:8160/index.html
  readySelector: "#sl-a"
  layout: full
explainPicture: { ref: line.yml#explain-pic, caption: "$-7$ is further left than $-2$, so $-7 < -2$." }
explainClip:
  query: { code: "@line.yml#explain", fresh: 1, id: explain }
  caption: "Further left is less"
  say: "On a number line, further left is less."
  clip:
    - caption: { text: "−3 is left of 2, so −3 < 2.", say: "Negative three is left of two, so it is less." }
    - wait: 300
    - caption: { text: "Move A to −7 and B to −2.", say: "Now move A to negative seven, and B to negative two." }
    - click: Make a smaller
    - click: Make a smaller
    - click: Make a smaller
    - click: Make a smaller
    - click: Make b smaller
    - click: Make b smaller
    - click: Make b smaller
    - click: Make b smaller
    - caption: { text: "−7 is further left, so −7 < −2.", say: "Negative seven is further left, so it is less than negative two." }
    - expect: { selector: "#nlcompare", contains: "−7 < −2" }
    - wait: 1000
---
Numbers below zero are **negative**: $-1, -2, -3$ and so on. Together with zero and the positive whole numbers they are the **integers**. On a number line, negatives sit to the left of zero, with $-1$ next to zero.

So which of two integers is less, and how do you write that down? The signs are $<$ ("is less than") and $>$ ("is greater than").

## Predict: which is greater?

<figure class="situation" role="img" aria-label="A number line from minus 10 to 10 with only minus 10, minus 5, 0, 5 and 10 labelled. Two question marks sit above it where minus 7 and minus 2 go. The question is which of the two is greater."><svg viewBox="0 0 400 125" width="400" style="max-width:100%;height:auto" fill="none" stroke="currentColor" font-family="inherit" font-size="14"><line x1="16" y1="90" x2="384" y2="90"/><line x1="24.0" y1="85" x2="24.0" y2="95"/><text x="24.0" y="112" text-anchor="middle" fill="currentColor" stroke="none">−10</text><line x1="41.6" y1="85" x2="41.6" y2="95"/><line x1="59.2" y1="85" x2="59.2" y2="95"/><line x1="76.8" y1="85" x2="76.8" y2="95"/><line x1="94.4" y1="85" x2="94.4" y2="95"/><line x1="112.0" y1="85" x2="112.0" y2="95"/><text x="112.0" y="112" text-anchor="middle" fill="currentColor" stroke="none">−5</text><line x1="129.6" y1="85" x2="129.6" y2="95"/><line x1="147.2" y1="85" x2="147.2" y2="95"/><line x1="164.8" y1="85" x2="164.8" y2="95"/><line x1="182.4" y1="85" x2="182.4" y2="95"/><line x1="200.0" y1="85" x2="200.0" y2="95"/><text x="200.0" y="112" text-anchor="middle" fill="currentColor" stroke="none">0</text><line x1="217.6" y1="85" x2="217.6" y2="95"/><line x1="235.2" y1="85" x2="235.2" y2="95"/><line x1="252.8" y1="85" x2="252.8" y2="95"/><line x1="270.4" y1="85" x2="270.4" y2="95"/><line x1="288.0" y1="85" x2="288.0" y2="95"/><text x="288.0" y="112" text-anchor="middle" fill="currentColor" stroke="none">5</text><line x1="305.6" y1="85" x2="305.6" y2="95"/><line x1="323.2" y1="85" x2="323.2" y2="95"/><line x1="340.8" y1="85" x2="340.8" y2="95"/><line x1="358.4" y1="85" x2="358.4" y2="95"/><line x1="376.0" y1="85" x2="376.0" y2="95"/><text x="376.0" y="112" text-anchor="middle" fill="currentColor" stroke="none">10</text><text x="160" y="50" text-anchor="middle" fill="currentColor" stroke="none">?</text><text x="260" y="50" text-anchor="middle" fill="currentColor" stroke="none">?</text><text x="200" y="22" text-anchor="middle" fill="currentColor" stroke="none">where do −7 and −2 sit? which is greater?</text></svg></figure>

```step
stage: predict
insight: "Committing to an answer for −7 and −2 before using the line makes the board a test of their idea about negatives, not a demonstration."
check:
  type: predict
  q: "Which is greater, $-7$ or $-2$?"
  options:
    - "$-2$"
    - "$-7$, because 7 is more than 2"
    - "Neither: they are both negative, so they are equal"
    - "You cannot compare two negative numbers"
  actual: "−2 is greater. On the number line −2 is to the right of −7: further right is greater. −7 is further below zero, so it is less."
```

Think of temperatures: is $-7$ °C or $-2$ °C warmer?

## Run: two points on the line

```step
stage: run
insight: "Placing −7 and −2 and reading the sentence shows the rule: further left is less, for negatives as well as positives."
try: { playground: board, starter: "line.yml#run", height: 380 }
check: { type: board, text: "Put $A$ at $-7$ and $B$ at $-2$. Was your prediction right?", when: "x(A) = -7 and x(B) = -2" }
```

Move $A$ with slider $a$ and $B$ with slider $b$ (or the − and + buttons). The board writes the comparison under the line. Try a few pairs first: two positives, a positive and a negative, then $-7$ and $-2$.

## Investigate: further left is less

```step
stage: investigate
insight: "Further left is less, so the order of negatives runs the opposite way to their sizes without the sign: −8 is less than −2. Ari's mistake orders by the size alone."
tasks:
  - check:
      type: question
      q: "Which is true?"
      options: ["$-5 < -1$", "$-5 > -1$", "$-5 = -1$"]
      answer: 0
      feedback: [null, "Find both on the line: −5 is four places to the left of −1. Further left is less.", "They are at different places on the line."]
      explain: "−5 is further left than −1, so −5 < −1."
  - check:
      type: bug
      code: "working.txt#ari"
      text: "Ari puts four numbers in order. Click the line where the reasoning goes wrong."
      answer: 3
      fault: logic
      misconception: negative-magnitude
      explain: "Line 3: 8 is bigger than 2, but −8 is further below zero than −2, so −8 is less. The order is −8, −2, 0, 3."
  - check:
      type: sort
      q: "Less than $-3$, or greater than $-3$?"
      options: ["Less than −3", "Greater than −3"]
      items:
        - ["−6", "Less than −3"]
        - ["−1", "Greater than −3"]
        - ["0", "Greater than −3"]
        - ["−10", "Less than −3"]
        - ["2", "Greater than −3"]
        - ["−4", "Less than −3", "−4 is one place left of −3."]
```

### Ordering on the line

Here is how to put integers in order, using where each one sits on the number line.

```worked
-2, \; -8, \; 3, \; 0 :: Put these in order from least to greatest.
\text{place each on the line} :: Negatives go left of zero: $-2$ is 2 left, $-8$ is 8 left.
-8 \text{ is furthest left} :: Furthest left is least, so $-8$ comes first.
-8, \; -2, \; 0, \; 3 :: Read the line from left to right.
-8 < -2 :: Between two negatives, the one further from zero is less.
```

### Find the mistake

Read Ari's working one line at a time. Which line orders the numbers by their size alone?

### Either side of −3

Sort each number: is it less than $-3$, or greater?

## Modify: one change at a time

```step
stage: modify
insight: "One change at a time: a number between two negatives, the same idea in temperatures, then the edge case where the number further from zero is the smaller one."
try: { playground: board, starter: "line.yml#between", height: 420 }
tasks:
  - starter: "line.yml#between"
    hint: ["Which way from −4 is less: left or right?", "Go left of −4, but not as far as −8."]
    check: { type: board, text: "Drag $P$ to a number that is less than $-4$ and greater than $-8$.", when: "x(P) < -4 and x(P) > -8", explain: "−5, −6 or −7: left of −4 and right of −8." }
  - starter: "line.yml#weather"
    hint: ["Warmer is further right. Is it above or below zero?", "Right of Canberra (−3), but still left of 0."]
    check: { type: board, text: "Drag $P$ to a temperature warmer than Canberra but still below zero.", when: "x(P) > -3 and x(P) < 0", explain: "−2 °C or −1 °C: further right than −3, still left of 0." }
  - starter: "line.yml#below"
    hint: "Which way is less: left or right? Is zero left or right of −1?"
    check: { type: board, text: "Drag $P$ to a number less than $-1$. Then try zero: is it less or greater than $-1$?", when: "x(P) < -1", explain: "Any number left of −1 is less: −2, −3 and so on. Zero is to the right, so 0 > −1." }
  - check:
      type: question
      q: "Edge case: $-10$ is further from zero than $-1$. Which is greater?"
      options: ["$-1$", "$-10$, because it is further from zero", "They are equal: both are negative"]
      answer: 0
      feedback: [null, "Further from zero tells you the size without the sign. Further left on the line is less.", "Both being negative does not make them equal: they are 9 places apart on the line."]
      explain: "−1 > −10. −10 is further from zero, but it is further left, so it is less."
```

### Between two negatives

Each task changes one thing. First: drag $P$ to a number between $-8$ and $-4$.

### Temperatures

The same idea in degrees. Warmer means further right.

### Zero and the negatives

Zero is greater than every negative number.

### Further from zero

When is the number further from zero the smaller one?

## Practise: compare and order

```step
stage: practise
insight: "Comparing with < and >, ordering, and a context, mixed; the review question keeps locating integers from Year 6 fresh."
tasks:
  - check:
      type: question
      q: "Which sign goes in the gap? $-6 \\;\\square\\; -9$"
      options: ["$>$", "$<$"]
      answer: 0
      feedback: [null, "Find both: −9 is further left, so −9 is the smaller one. The sign opens towards the greater number."]
      explain: "−6 > −9: −6 is to the right of −9."
    smaller:
      check: { type: question, q: "Which of $-6$ and $-9$ is further left on the number line?", options: ["$-9$", "$-6$"], answer: 0, feedback: [null, "Find both on the line. Which one has the other to its right?"], explain: "−9 is further left. Further left is less, so the sign opens towards −6." }
  - check:
      type: question
      q: "Which list is in order from least to greatest?"
      options: ["$-9, -4, 0, 2, 5$", "$-4, -9, 0, 2, 5$", "$0, -4, -9, 2, 5$"]
      answer: 0
      feedback: [null, "Is −4 less than −9? Find both on the line.", "Negatives are less than zero, so they come before it."]
      explain: "Left to right on the line: −9, −4, 0, 2, 5."
  - check:
      type: question
      q: "At 6 am it was $-5$ °C in Cooma and $-8$ °C in Perisher. Which was colder?"
      options: ["Perisher", "Cooma"]
      answer: 0
      feedback: [null, "Colder is further left. Which of −5 and −8 is further left?"]
      explain: "−8 < −5, so Perisher was colder."
  - check:
      type: answer
      q: "Review: what number is 4 places to the left of 1 on a number line?"
      answer: "-3"
      feedback:
        - ["5", "That is 4 to the right. Left is towards the negatives."]
        - ["3", "Count left from 1: 0, −1, −2, −3."]
      explain: "From 1, four places left: 0, −1, −2, −3."
```

### Which sign?

### In order

### Colder

### Review

## Make: a surprising pair

```step
stage: make
insight: "Building a pair where the less number is the one further from zero reverses the lesson: from the rule to an example that shows it."
try: { playground: board, starter: "line.yml#make", height: 420 }
hint: ["P must be further left than Q.", "Try putting P below zero, further from zero than Q is: P at −6 and Q at −2, or Q at 3."]
check: { type: board, text: "Place $P$ and $Q$ so that $P < Q$, but $P$ is further from zero than $Q$.", when: "x(P) < x(Q) and x(P) + x(Q) < 0", explain: "P is left of Q, so P < Q, and further from zero: it must be a negative, such as P = −6 and Q = −2 (or Q = 3)." }
```

Find a pair where the less number has the bigger size without its sign. The sentence under the line tells you which is less.

Stretch: write three temperatures below zero, then put them in order from warmest to coldest.

## Make: a week of frosts on paper

```step
stage: make
insight: "Ordering five temperatures forces the misconception into the open: the biggest-looking number is the coldest night, not the warmest."
hint: ["Draw a number line from −10 to 5 and mark each night on it.", "Further left is colder."]
check:
  type: reasoning
  paper: true
  q: "Overnight lows in Canberra one winter week, in °C (made up for the task): Mon $-3$, Tue $-8$, Wed $2$, Thu $-1$, Fri $-5$. Put the nights in order from coldest to warmest, and name the coldest and the warmest."
  steps:
    - ["Mark $-8$, $-5$, $-3$, $-1$ and $2$ on a number line", "temperatures are numbers on a line, with zero in the middle"]
    - ["$-8$ is the furthest left, so Tuesday is the coldest", "further left is less, and less is colder"]
    - ["From left to right: $-8$, $-5$, $-3$, $-1$, $2$", "reading left to right goes from least to greatest"]
    - ["Coldest is Tuesday ($-8$ °C), warmest is Wednesday ($2$ °C)", "Wednesday is the only night above zero"]
  picks:
    - step: 2
      q: "Why is $-8$ colder than $-1$?"
      options:
        - "$-8$ is further left on the line, so it is less"
        - "8 is bigger than 1, so $-8$ is the bigger temperature"
        - "A negative number is colder the closer it is to zero"
      answer: 0
      feedback: [null, "8 is bigger than 1, but the minus sign turns it round: −8 is 8 below zero.", "It is the other way. The further below zero, the colder."]
    - step: 3
      q: "Why does $-5$ come before $-3$ in the order?"
      options:
        - "$-5$ is to the left of $-3$, so it is less"
        - "5 is more than 3, so it should come last"
        - "It does not matter: both are negative"
      answer: 0
      feedback: [null, "Order by position on the line, not by the number without its sign.", "It matters. Negatives are in order too: the one further left is less."]
  criteria:
    - "I marked every night on a number line before I ordered them."
    - "I put the one furthest left first."
    - "I checked that my list goes up from left to right."
  explain: "On the line, −8 is furthest left, so it is the coldest, and 2 is furthest right, so it is the warmest. In order: −8, −5, −3, −1, 2. A bigger number without its sign means colder when the number is negative."
```

Do this one in your book, not on the screen. The temperatures are made up for the task, but the question is real: weather reports list frosty lows, and you have to say which night was coldest. Mark the nights on a line, then order them. The page marks the two reasons you pick.

**Also used in**

- **Weather.** Overnight lows, and heights above or below sea level, are compared on a line with zero in the middle.
- **Buildings.** Car park levels below ground are negative: level −3 is lower than level −1.
- **Money.** An account at −\$50 owes more than one at −\$10, though 50 is the bigger number.
