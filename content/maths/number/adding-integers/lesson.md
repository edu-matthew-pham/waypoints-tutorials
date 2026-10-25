---
order: 2
unit: integers
node: AC9M7N07 n2
assumes: [AC9M6N01 n2]
title: Adding and subtracting integers
summary: Start at the first number and move along the line. Adding a negative moves left; subtracting moves the opposite way to adding, so subtracting a negative moves right.
language: maths
voice: { name: af_heart, speed: 1.1 }
connection: lift-floors   # data/connections/maths.yml
hook: "A temperature that rises 9 degrees from −4 °C, a lift that goes down 5 floors from level 2, a bank balance below zero: all of them are moves along a number line."
app:
  command: node "$REPO_ROOT/tools/serve.mjs" "$REPO_ROOT/dist/_playground-board" 8161
  url: http://127.0.0.1:8161/index.html
  readySelector: "#sl-a"
  layout: full
explainPicture: { ref: sum.yml#explain-pic, caption: "$5 - (-3)$: adding $-3$ would go left 3, so subtracting goes right 3, to 8." }
explainClip:
  query: { code: "@sum.yml#explain", fresh: 1, id: explain }
  caption: "Adding and subtracting are moves along the line"
  say: "Adding and subtracting are moves along the number line."
  clip:
    - caption: { text: "−3 + 5: start at −3 and move right 5, to 2.", say: "Negative three plus five: start at negative three, and move right five." }
    - wait: 300
    - caption: { text: "Subtracting goes the opposite way: −3 − 5 is left 5, to −8.", say: "Subtracting goes the opposite way: left five." }
    - click: Subtract
    - wait: 300
    - caption: { text: "Now subtract a negative: −3 − (−2).", say: "Now subtract negative two." }
    - click: Make b smaller
    - click: Make b smaller
    - click: Make b smaller
    - click: Make b smaller
    - click: Make b smaller
    - click: Make b smaller
    - click: Make b smaller
    - wait: 400
    - caption: { text: "Adding −2 would go left, so subtracting it goes right 2, to −1.", say: "Adding negative two goes left, so subtracting it goes right." }
    - expect: { selector: "#nlsum", contains: "−3 − (−2) = −1" }
    - wait: 1200
---
Further left on the number line means less, and now the line is for working out: **start at the first number, then move**.

Adding a positive number moves right. But what does adding a negative do, and what about subtracting, including subtracting a negative?

## Predict: subtracting a negative

<figure class="situation" role="img" aria-label="A number line from minus 6 to 10. A dot marks 5, the start. The sum 5 minus minus 3 lands on a question mark."><svg viewBox="0 0 400 120" width="400" style="max-width:100%;height:auto" fill="none" stroke="currentColor" font-family="inherit" font-size="14"><line x1="16" y1="80" x2="384" y2="80"/><line x1="24.0" y1="75" x2="24.0" y2="85"/><text x="24.0" y="102" text-anchor="middle" fill="currentColor" stroke="none">−6</text><line x1="46.0" y1="75" x2="46.0" y2="85"/><text x="46.0" y="102" text-anchor="middle" fill="currentColor" stroke="none">−5</text><line x1="68.0" y1="75" x2="68.0" y2="85"/><text x="68.0" y="102" text-anchor="middle" fill="currentColor" stroke="none">−4</text><line x1="90.0" y1="75" x2="90.0" y2="85"/><text x="90.0" y="102" text-anchor="middle" fill="currentColor" stroke="none">−3</text><line x1="112.0" y1="75" x2="112.0" y2="85"/><text x="112.0" y="102" text-anchor="middle" fill="currentColor" stroke="none">−2</text><line x1="134.0" y1="75" x2="134.0" y2="85"/><text x="134.0" y="102" text-anchor="middle" fill="currentColor" stroke="none">−1</text><line x1="156.0" y1="75" x2="156.0" y2="85"/><text x="156.0" y="102" text-anchor="middle" fill="currentColor" stroke="none">0</text><line x1="178.0" y1="75" x2="178.0" y2="85"/><text x="178.0" y="102" text-anchor="middle" fill="currentColor" stroke="none">1</text><line x1="200.0" y1="75" x2="200.0" y2="85"/><text x="200.0" y="102" text-anchor="middle" fill="currentColor" stroke="none">2</text><line x1="222.0" y1="75" x2="222.0" y2="85"/><text x="222.0" y="102" text-anchor="middle" fill="currentColor" stroke="none">3</text><line x1="244.0" y1="75" x2="244.0" y2="85"/><text x="244.0" y="102" text-anchor="middle" fill="currentColor" stroke="none">4</text><line x1="266.0" y1="75" x2="266.0" y2="85"/><text x="266.0" y="102" text-anchor="middle" fill="currentColor" stroke="none">5</text><line x1="288.0" y1="75" x2="288.0" y2="85"/><text x="288.0" y="102" text-anchor="middle" fill="currentColor" stroke="none">6</text><line x1="310.0" y1="75" x2="310.0" y2="85"/><text x="310.0" y="102" text-anchor="middle" fill="currentColor" stroke="none">7</text><line x1="332.0" y1="75" x2="332.0" y2="85"/><text x="332.0" y="102" text-anchor="middle" fill="currentColor" stroke="none">8</text><line x1="354.0" y1="75" x2="354.0" y2="85"/><text x="354.0" y="102" text-anchor="middle" fill="currentColor" stroke="none">9</text><line x1="376.0" y1="75" x2="376.0" y2="85"/><text x="376.0" y="102" text-anchor="middle" fill="currentColor" stroke="none">10</text><circle cx="266.0" cy="80" r="6" fill="#378ADD" stroke="#185FA5"/><text x="266.0" y="55" text-anchor="middle" fill="currentColor" stroke="none">start: 5</text><text x="200" y="24" text-anchor="middle" fill="currentColor" stroke="none">5 − (−3) lands on ?</text><text x="332.0" y="55" text-anchor="middle" fill="currentColor" stroke="none">?</text></svg></figure>

```step
stage: predict
insight: "Committing to an answer for 5 − (−3) before the board shows it makes the move of subtracting a negative a test of their idea."
check:
  type: predict
  q: "What is $5 - (-3)$?"
  options:
    - "$8$"
    - "$2$"
    - "$-8$"
    - "$-2$"
  actual: "5 − (−3) = 8. Adding −3 would move left 3; subtracting goes the opposite way, so it moves right 3, from 5 to 8."
```

Start at 5. Which way does subtracting move you? Which way does the minus sign on $-3$ point?

## Run: subtract on the line

```step
stage: run
insight: "Changing b from 3 to −3 while subtracting shows the jump turn round: subtracting moves the opposite way to adding b, which is drawn faintly above."
try: { playground: board, starter: "sum.yml#run", height: 420 }
check: { type: board, text: "The board shows $5 - 3$. Change $b$ to $-3$. Was your prediction right?", when: "a = 5 and b = -3" }
```

The blue jump starts at $a$ and lands on $R$. When you subtract, the faint dashed arrow shows which way adding $b$ would go. Watch it as you make $b$ smaller, past zero.

## Investigate: which way to move

```step
stage: investigate
insight: "One rule covers all four cases: adding moves the way the number points (right for positive, left for negative), subtracting moves the opposite way. Mia's mistake treats the minus sign of the number as the operation."
tasks:
  - check:
      type: answer
      q: "Work out $4 + (-6)$."
      answer: "-2"
      feedback:
        - ["10", "That adds 6. Adding a negative moves left: from 4, go left 6."]
        - ["2", "Count from 4: left 6 goes past zero, to −2."]
      explain: "Start at 4. Adding −6 moves left 6: 3, 2, 1, 0, −1, −2."
  - check:
      type: bug
      code: "working.txt#mia"
      text: "Mia works out $5 - (-3)$. Click the line where her working goes wrong."
      answer: 3
      fault: logic
      misconception: subtract-negative
      explain: "Line 3: adding −3 would move left 3, but this is subtracting, so the move is the opposite way: right 3. 5 − (−3) = 8."
  - check:
      type: sort
      q: "From the first number, does each sum move right or left?"
      options: ["Moves right", "Moves left"]
      items:
        - ["2 + 3", "Moves right"]
        - ["2 + (−3)", "Moves left"]
        - ["2 − 3", "Moves left"]
        - ["2 − (−3)", "Moves right", "Adding −3 would go left, so subtracting it goes right."]
        - ["−5 + 4", "Moves right"]
        - ["−2 − 4", "Moves left"]
```

### Moves on the line

Here is how to use the line for each kind of sum.

```worked
-2 + 5 :: Start at the first number, $-2$.
-2 + 5 = 3 :: Adding a positive moves right: 5 to the right lands on 3.
4 + (-6) = -2 :: Adding a negative moves left: from 4, left 6 lands on $-2$.
5 - (-3) :: Subtracting moves the opposite way to adding.
\text{adding } {-3} \text{ is left 3, so subtracting it is right 3} :: Find the way adding would go, then turn round.
5 - (-3) = 8 :: From 5, right 3 lands on 8. Subtracting $-3$ is the same as adding 3.
```

### Find the mistake

Read Mia's working one line at a time. Which line moves the wrong way?

### Right or left?

Adding moves the way the number points; subtracting moves the opposite way. Sort each sum.

## Modify: one change at a time

```step
stage: modify
insight: "One change at a time: crossing zero when adding, adding a negative, subtracting past zero, subtracting a negative, then the edge case of subtracting a number from itself."
try: { playground: board, starter: "sum.yml#add", height: 420 }
tasks:
  - starter: "sum.yml#add"
    hint: "Start at −6 and move right 4."
    check: { type: answer, q: "Work out $-6 + 4$. Set the board to check.", answer: "-2", feedback: [["-10", "Adding 4 moves right, towards zero."], ["2", "From −6, right 4 is still below zero."]], explain: "From −6, right 4: −5, −4, −3, −2." }
  - starter: "sum.yml#add"
    hint: "Adding a negative moves left."
    check: { type: answer, q: "Work out $3 + (-7)$. Set the board to check.", answer: "-4", feedback: [["10", "That moves right. Adding a negative moves left."], ["4", "From 3, left 7 goes past zero."]], explain: "From 3, left 7 lands on −4." }
  - starter: "sum.yml#subtract"
    hint: "Subtracting 5 moves left 5, past zero."
    check: { type: answer, q: "Work out $2 - 5$. Set the board to check.", answer: "-3", feedback: [["3", "That is 5 − 2. Start at 2, then move left 5."], ["7", "Subtracting a positive moves left."]], explain: "From 2, left 5: 1, 0, −1, −2, −3." }
  - starter: "sum.yml#subtract"
    hint: ["Adding −6 would move left. Subtracting goes the other way.", "From −4, right 6."]
    check: { type: answer, q: "Work out $-4 - (-6)$. Set the board to check.", answer: "2", feedback: [["-10", "That moved left. Subtracting a negative moves right."], ["-2", "The answer is positive: from −4, right 6 ends right of zero."]], explain: "Subtracting −6 moves right 6: from −4 to 2." }
  - starter: "sum.yml#subtract"
    hint: "Where does subtracting a number from itself always land?"
    check: { type: answer, q: "Edge case: work out $-5 - (-5)$.", answer: "0", feedback: [["-10", "Subtracting −5 moves right 5, not left."], ["10", "Start at −5, not at 5."]], explain: "From −5, right 5 lands on 0: any number minus itself is 0." }
```

### Adding across zero

Each task changes one thing. First: start below zero and add a positive.

### Adding a negative

Now the number you add is negative.

### Subtracting past zero

A positive subtracted from a smaller number.

### Subtracting a negative

The move from the Predict step.

### A number minus itself

## Practise: mixed sums

```step
stage: practise
insight: "Adding and subtracting with negatives in mixed forms and a context; the review question keeps ordering from the last lesson fresh."
tasks:
  - check:
      type: answer
      q: "Work out $-7 + 3$."
      answer: "-4"
      feedback:
        - ["-10", "Adding 3 moves right, towards zero."]
        - ["4", "From −7, right 3 is still below zero."]
      explain: "From −7, right 3 lands on −4."
  - check:
      type: answer
      q: "Work out $3 - 8$."
      answer: "-5"
      feedback:
        - ["5", "That is 8 − 3. Start at 3 and move left 8."]
      explain: "From 3, left 8 lands on −5."
  - check:
      type: answer
      q: "Work out $-2 - (-6)$."
      answer: "4"
      feedback:
        - ["-8", "That moved left. Subtracting a negative moves right."]
        - ["-4", "The answer is positive: from −2, right 6 ends right of zero."]
      explain: "Subtracting −6 moves right 6: from −2 to 4."
    smaller:
      check: { type: "question", q: "Subtracting $-6$: which way does that move you on the number line?", options: ["Right, the same as adding 6", "Left, the same as taking 6 away"], answer: 0, explain: "Taking away a negative moves right, like adding 6. So from −2, go right 6." }
  - check:
      type: answer
      q: "At 6 am it is $-4$ °C. By noon it is 9 degrees warmer. What is the temperature at noon?"
      answer: "5"
      feedback:
        - ["-13", "Warmer is up the line, to the right."]
        - ["13", "Start at −4, not at 4."]
      explain: "−4 + 9 = 5 °C."
  - check:
      type: question
      q: "Review: which is greater, $-3$ or $-8$?"
      options: ["$-3$", "$-8$"]
      answer: 0
      feedback: [null, "Further left is less. Which is further left?"]
      explain: "−3 > −8: −3 is to the right of −8."
```

### Adding

### Subtracting

### A negative subtracted

### Temperature

### Review

## Make: a subtraction that grows

```step
stage: make
insight: "Choosing numbers to make a given answer reverses the lesson: from the result back to the move, and it needs subtracting a negative."
try: { playground: board, starter: "sum.yml#make", height: 420 }
hint: ["Press − to subtract.", "To land above where you start, subtracting has to move right. What kind of number does that?"]
check: { type: board, text: "Make a subtraction that gives 10, where the number you subtract is negative.", when: "o = -1 and b < 0 and r = 10", explain: "Subtracting a negative moves right, so a − b = 10 with b negative, such as 4 − (−6) = 10 or 2 − (−8) = 10." }
```

Use the + and − buttons and both sliders. The answer must be 10, and you must subtract a negative number.

Stretch: find two different subtractions that give $-3$, one subtracting a positive and one subtracting a negative.

## Make: a lift on paper

```step
stage: make
insight: "Levels below ground are where subtracting a negative stops being a rule and becomes a count; the paper task makes them choose why the lift crosses the ground floor."
hint: ["Sketch a number line, or the lift buttons, from −3 up to 4.", "Subtracting a negative moves right: how far from −3 to 4?"]
check:
  type: reasoning
  paper: true
  q: "A car park lift goes from level $-3$ (three floors below the ground) to level $4$. How many floors does it travel?"
  steps:
    - ["Start at $-3$ and finish at $4$", "the floors are numbers on a line, with the ground floor at 0"]
    - ["Floors travelled = finish $-$ start $= 4 - (-3)$", "the distance between two numbers is the later one take away the earlier"]
    - ["$4 - (-3) = 4 + 3 = 7$", "subtracting a negative moves right: the same as adding 3"]
    - ["The lift travels $7$ floors", "check: 3 floors up to the ground, then 4 more, 3 + 4 = 7"]
  picks:
    - step: 2
      q: "Why is the answer $4 - (-3)$ and not $4 - 3$?"
      options:
        - "The lift starts below the ground, so it crosses 3 more floors on the way up"
        - "Two minus signs always make an answer bigger"
        - "Because the lift is going up, not down"
      answer: 0
      feedback: [null, "That is a rule, not a reason. Count the floors on the line to see why.", "Going up is true, but 4 − 3 would be the trip from level 3 to level 4."]
  answer: "7"
  feedback:
    - ["1", "That is 4 − 3, as if the lift started at level 3. It starts at −3, below the ground."]
    - ["-7", "The lift goes up, so the number of floors is positive."]
  criteria:
    - "I wrote the start and the finish with their signs, $-3$ and $4$."
    - "I wrote the distance as finish take away start."
    - "I checked by counting the floors: 3 up to the ground, 4 more."
  explain: "4 − (−3) = 7. From −3 up to 0 is 3 floors, and from 0 up to 4 is 4 more: 7 floors."
```

Do this one in your book, not on the screen. The levels are made up for the task, but the question is real: it is how far a lift, a diver or a thermometer travels from below zero to above it. Sketch the line, work out the distance, and type your answer.

**Also used in**

- **Lifts and buildings.** Car parks and shopping centres number their levels with negatives for floors below ground.
- **Weather.** A night at −4 °C that warms to 5 °C has risen 9 degrees: finish take away start.
- **Money.** An account at −\$30 that is topped up to \$50 has gained \$80.
