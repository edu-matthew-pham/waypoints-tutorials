---
order: 12
unit: chance
node: AC9M8P02 n1
uses: [AC9M8P01 n1, AC9M7P01 n1]
title: Grids and tree diagrams
summary: "Two events, one after the other, make a sample space of pairs. A grid or a tree diagram lists every pair once, so you can count the outcomes in an event and find its probability."
language: maths
voice: { name: af_heart, speed: 1.1 }
hook: "A game asks you to toss a coin and roll a dice: you win with heads and an even number. Is that a good chance or a poor one? First you need every way the two can land."
connection: survey-two-way   # data/connections/maths.yml (pilot: Make on paper and Also used in; documentation only)
app:
  command: node "$REPO_ROOT/tools/serve.mjs" "$REPO_ROOT/dist/_playground-board" 8330
  url: http://127.0.0.1:8330/index.html
  readySelector: "#gsum"
  layout: full
explainPicture: { ref: ev.yml#explain-pic, caption: "A coin then a dice: 2 branches, then 6 from each, makes 12 outcomes. Tails and more than 4: 2 of them." }
explainClip:
  query: { code: "@ev.yml#explain", fresh: 1, id: explain }
  caption: "A tree diagram"
  say: "Each branch of the first event splits into every outcome of the second."
  clip:
    - caption: { text: "The coin: H or T. Each splits into the dice's 6 outcomes.", say: "Heads or tails, then each splits six ways." }
    - wait: 1400
    - caption: { text: "2 × 6 = 12 outcomes. Tails and more than 4: T 5, T 6.", say: "Twelve outcomes. Tails and more than four: two of them." }
    - click: "T and 5"
    - click: "T and 6"
    - expect: { selector: "#gsum", contains: "2/12" }
    - wait: 1500
---
When two things happen one after the other (toss a coin, then roll a dice), each outcome is a **pair**, such as (H, 4). A **tree diagram** draws the first event's outcomes as branches, then splits every branch into the second event's outcomes. A **grid** puts the first event down the side and the second across the top: it is a two-way table of the outcomes.

## Predict: how many outcomes?

```step
stage: predict
insight: "Committing to a count for a coin then a dice shows whether they multiply or add."
check:
  type: predict
  q: "You toss a coin and roll a dice. How many different outcomes are there?"
  options: ["8", "6", "12"]
  actual: "12. Each of the 2 coin results goes with each of the 6 dice results: 2 × 6 = 12 pairs."
```

<figure class="situation" role="img" aria-label="A coin with heads and tails on the left, and a row of six dice faces numbered 1 to 6 on the right. Underneath: how many outcomes when you toss the coin and roll the dice? is a question mark."><svg viewBox="0 0 400 200" width="400" style="max-width:100%;height:auto" fill="none" stroke="currentColor" font-family="inherit" font-size="14"><circle cx="85" cy="84" r="32" fill="#1D9E75" fill-opacity="0.3" stroke="#0F6E56"/><text x="85" y="89" text-anchor="middle" fill="currentColor" stroke="none">H | T</text><text x="85" y="140" text-anchor="middle" fill="currentColor" stroke="none">coin</text><rect x="200" y="70" width="28" height="28" rx="4" fill="#378ADD" fill-opacity="0.3" stroke="#185FA5"/><text x="214" y="89" text-anchor="middle" fill="currentColor" stroke="none">1</text><rect x="232" y="70" width="28" height="28" rx="4" fill="#378ADD" fill-opacity="0.3" stroke="#185FA5"/><text x="246" y="89" text-anchor="middle" fill="currentColor" stroke="none">2</text><rect x="264" y="70" width="28" height="28" rx="4" fill="#378ADD" fill-opacity="0.3" stroke="#185FA5"/><text x="278" y="89" text-anchor="middle" fill="currentColor" stroke="none">3</text><rect x="296" y="70" width="28" height="28" rx="4" fill="#378ADD" fill-opacity="0.3" stroke="#185FA5"/><text x="310" y="89" text-anchor="middle" fill="currentColor" stroke="none">4</text><rect x="328" y="70" width="28" height="28" rx="4" fill="#378ADD" fill-opacity="0.3" stroke="#185FA5"/><text x="342" y="89" text-anchor="middle" fill="currentColor" stroke="none">5</text><rect x="360" y="70" width="28" height="28" rx="4" fill="#378ADD" fill-opacity="0.3" stroke="#185FA5"/><text x="374" y="89" text-anchor="middle" fill="currentColor" stroke="none">6</text><text x="296" y="125" text-anchor="middle" fill="currentColor" stroke="none">dice</text><text x="200" y="185" text-anchor="middle" fill="currentColor" stroke="none">coin, then dice: ? outcomes</text></svg></figure>

## Run: heads and an even number

```step
stage: run
insight: "Choosing outcomes in the grid and in the tree shows both list the same 12 pairs, so the count is the same."
try: { playground: board, starter: "ev.yml#run", height: 620 }
check: { type: board, text: "Choose every outcome with heads and an even number. Then press Show as a tree: are they the same outcomes? Was your count of outcomes right?", when: "r = 1", explain: "(H, 2), (H, 4) and (H, 6): 3 of 12, so the probability is 3/12 = 1/4." }
```

## Investigate: list every pair

```step
stage: investigate
insight: "Multiply to count pairs; HT and TH are different outcomes, so merging them makes unequal outcomes look equal (Max); trees suit more than two stages."
tasks:
  - check:
      type: number
      q: "A spinner has 3 colours and a dice has 6 faces. How many outcomes when you spin, then roll?"
      answer: 18
      tolerance: 0
      feedback:
        - ["9", "Each colour goes with every face: multiply."]
      explain: "3 × 6 = 18 pairs."
  - check:
      type: bug
      code: "working.txt#max"
      text: "Max finds the chance of one head and one tail with two coins. Click the line where he goes wrong."
      answer: 2
      fault: logic
      misconception: pairs-order
      explain: "Line 2: one of each can happen two ways, HT and TH. The four equally likely outcomes are HH, HT, TH, TT, so P(one of each) = 2/4 = 1/2."
  - check:
      type: question
      q: "You toss three coins. Which is the best way to list the outcomes?"
      options: ["A tree diagram", "A grid", "A Venn diagram", "A list of the totals"]
      answer: 0
      feedback: [null, "A grid has only two directions.", "A Venn diagram sorts one group by properties; it doesn't list pairs.", "Totals hide the outcomes: HHT, HTH and THH all have two heads."]
      explain: "A tree can keep branching: a column of branches for each event, 2 × 2 × 2 = 8 outcomes."
```

### Count the pairs

Here is the routine.

```worked
\text{Spinner with equal red and blue parts};\ \text{then a coin} :: Two events, one after the other.
\text{red} \to \text{H, T};\ \text{blue} \to \text{H, T} :: Split each branch into every outcome of the second.
2 \times 2 = 4 \text{ outcomes} :: Count the leaves of the tree.
P(\text{blue, H}) = \tfrac{1}{4} :: One leaf out of four.
```

### Find the mistake

Read Max's working. Is "one of each" one outcome, or two?

### Three coins

## Modify: other pairs

```step
stage: modify
insight: "The same counting on a spinner and coin, two dice and two draws with letters shows a grid or a tree works for any two events."
try: { playground: board, starter: "ev.yml#spin", height: 620 }
tasks:
  - starter: "ev.yml#spin"
    check: { type: board, text: "Spin a spinner with equal red, blue and green parts, then toss a coin. Choose the outcome blue and tails. What is its probability?", when: "r = 1", explain: "1 of 3 × 2 = 6 outcomes: 1/6." }
  - starter: "ev.yml#dice"
    hint: "Look along the diagonal where the sums are 8."
    check: { type: board, text: "Two dice: choose every outcome with a sum of 8.", when: "r = 1", explain: "(2, 6), (3, 5), (4, 4), (5, 3), (6, 2): 5 of 36." }
  - starter: "ev.yml#same"
    check: { type: board, text: "A, B or C is picked, put back, then picked again. Choose the outcomes where the same letter comes up twice.", when: "r = 1", explain: "AA, BB and CC: 3 of 9 = 1/3." }
  - check:
      type: question
      q: "Two dice show 36 outcomes in a grid. Why use a grid here, not a tree?"
      options: ["Trees are only for coins", "36 outcomes fit neatly in a 6 by 6 grid", "A tree can't show dice", "A grid is always better"]
      answer: 1
      feedback: ["Trees work for any events.", null, "A tree can show dice; it just gets large.", "Trees are better for three or more events."]
      explain: "A tree with 36 leaves is big to draw. Grids suit two events with many outcomes; trees suit two or more events with few outcomes each."
```

### Spinner and coin

### Sum of 8

### The same letter

### Grid or tree

## Practise: two events

```step
stage: practise
insight: "Counting and probabilities for pairs, mixed; listing HT and TH once is the planted slip; Venn diagrams are the review."
tasks:
  - check:
      type: answer
      q: "Two dice are rolled. What is P(the sum is 7)?"
      answer: "1/6"
      feedback:
        - ["1/11", "The sums 2 to 12 are not equally likely: count the pairs."]
      explain: "6 of the 36 pairs make 7: 6/36 = 1/6."
    smaller:
      check: { type: number, q: "Just the pairs: two dice make a grid with 6 rows and 6 columns. How many pairs is that in all?", answer: 36, tolerance: 0, feedback: [[12, "That's 6 + 6. Each face of one dice goes with every face of the other."]], explain: "6 × 6 = 36 pairs. Now how many of them make 7?" }
  - check:
      type: answer
      q: "Two coins are tossed. What is P(two heads)?"
      answer: "1/4"
      feedback:
        - ["1/3", "HT and TH are different outcomes: there are 4, not 3."]
      explain: "HH is 1 of the 4 outcomes HH, HT, TH, TT."
  - check:
      type: number
      q: "A café offers 4 sandwiches and 3 drinks. How many different sandwich-and-drink meals are there?"
      answer: 12
      tolerance: 0
      explain: "Each sandwich goes with each drink: 4 × 3 = 12."
  - check:
      type: number
      q: "Review: 30 students, 18 play netball, 10 play hockey, 4 play both. How many play neither?"
      answer: 6
      tolerance: 0
      explain: "Netball only 14, both 4, hockey only 6: 24. So 30 − 24 = 6."
```

### Sum of 7

### Two heads

### Meals

### Review: neither

## Make: a fair game

```step
stage: make
insight: "Designing an event with probability one half on two dice shows they can count outcomes to a target."
try: { playground: board, starter: "ev.yml#make", height: 640 }
hint: ["A fair game wins half the time: 18 of 36 outcomes.", "An even sum is one way. Find another."]
check: { type: board, text: "Design a two-dice game that you win exactly half the time: choose 18 outcomes.", when: "n = 18", explain: "Any 18 of the 36 outcomes give 1/2, such as 'the sum is even' or 'the first dice is bigger than 3'." }
```

Write the rule of your game in words, then check a friend's game with the grid.

## Make: a survey tree on paper

```step
stage: make
insight: "A tree for two yes/no survey questions makes them list pairs, keep YN and NY apart, and count an event."
hint: ["Two branches first, then two more from each.", "Write each pair at the end of its path."]
check:
  type: reasoning
  paper: true
  q: "A form asks each student two questions: 'Do you walk to school?' and 'Do you play a sport?' Each answer is Yes or No. Draw a tree on paper for one student's answers. How many of the pairs of answers have exactly one Yes?"
  steps:
    - ["Walk: two branches, Yes and No", "the first question has two answers"]
    - ["Sport: Yes and No on each branch, so 4 pairs: YY, YN, NY, NN", "every answer to the first goes with every answer to the second"]
    - ["Exactly one Yes: YN and NY", "these are different pairs: one walks and does not play, the other plays and does not walk"]
    - ["2 pairs", "two of the four"]
  picks:
    - step: 3
      q: "Do YN and NY count as two pairs or one?"
      options:
        - "Two: they are different answers from different kinds of student"
        - "One: they have the same letters"
        - "Only YN counts, because walking is asked first"
      answer: 0
      feedback: [null, "The letters match but the pairs do not. Walk-only and sport-only students are different.", "Both orders happen. Neither is left out."]
  answer: "2"
  feedback:
    - ["1", "Yes-No and No-Yes are different pairs: list both."]
    - ["4", "That is all the pairs. Exactly one Yes leaves out YY and NN."]
  criteria:
    - "My tree has two branches, then two more on each."
    - "I listed all four pairs."
    - "I counted YN and NY as two different pairs."
  explain: "The four pairs are YY, YN, NY, NN. Exactly one Yes is YN or NY: 2 pairs."
```

Do this one in your book. A school really can use a form like this, and the answers fill a two-way table. Draw the tree, list the four pairs, and type how many have exactly one Yes.

**Also used in**

- **Surveys.** The tree for two yes/no questions has the same four cells as the school's two-way table of walkers and sports players.
- **Menus and codes.** Two choices on a menu, two coins, and the digits of a code all make pairs, and a tree lists them once.
- **Next.** Counting the pairs in an event gives its probability, and the next lesson puts 'and', 'or' and 'not' on the same pictures.
