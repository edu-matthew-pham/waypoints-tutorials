---
order: 1
unit: exponentials
node: AC9M10A03 n1
uses: [AC9M8N02 n1]   # powers: 2⁴ = 16
connection: food-left-out
title: Same ratio each time
summary: "A table that adds the same amount each step is linear. A table that multiplies by the same number each step is exponential, and its last steps add far more than its first."
language: maths
voice: { name: af_heart, speed: 1.1 }
hook: "Leave a sandwich out and the germs on it multiply. Why does the food rule change at 2 hours, and bin it at 4?"
app:
  command: node "$REPO_ROOT/tools/serve.mjs" "$REPO_ROOT/dist/_playground-board" 8390
  url: http://127.0.0.1:8390/index.html
  readySelector: "#sl-b"
  layout: full
explainPicture: { ref: ratio.yml#explain-pic, caption: "Both lines start at 100 and reach 200 after one half hour. The solid line doubles each time; the dashed line adds 100." }
explainClip:
  query: { code: "@ratio.yml#explain", fresh: 1, id: explain }
  caption: "Adding and multiplying start together, then split apart"
  say: "Adding and multiplying start together, then they split apart."
  clip:
    - caption: { text: "The dashed line adds 100 every half hour.", say: "The dashed line adds one hundred every half hour." }
    - wait: 600
    - click: Make b bigger
    - wait: 600
    - caption: { text: "Now the solid line doubles every half hour.", say: "Now the solid line doubles every half hour." }
    - wait: 600
    - caption: { text: "Same start, same first step. Then it runs away.", say: "Same start and same first step, and then it runs away." }
    - wait: 1200
---
At a picnic, a sandwich sits on the table. The food safety rule goes like this: under 2 hours, eat it or put it back in the fridge. From 2 to 4 hours, eat it, but don't put it back. At 4 hours or more, throw it out ([the 2-hour/4-hour rule, NSW Food Authority](https://www.foodauthority.nsw.gov.au/sites/default/files/2021-07/2_hour_4_hour_rule.pdf)).

To see why the rule changes the way it does, let's pretend the germs on the sandwich double every half hour, starting from 100. That's made up: real doubling times depend on the germs and the temperature.

## Predict: the sandwich at 4 hours

```step
stage: predict
insight: "Committing to a germ count at 4 hours shows who thinks twice as long means twice as many (3,200) and who sees that each half hour doubles the one before."
check:
  type: predict
  q: "After 2 hours there are 1,600 germs. The germs keep doubling every half hour. How many are there after 4 hours?"
  options:
    - "$25{,}600$"
    - "$12{,}800$"
    - "$6{,}400$"
    - "$3{,}200$"
  actual: "25,600. From 2 hours to 4 hours is 4 more half hours, so the count doubles 4 more times: 1,600 × 2 × 2 × 2 × 2 = 25,600. That is 16 times as many, not twice as many."
```

<figure class="situation" role="img" aria-label="Five bars of germs on a sandwich, one every half hour for two hours: 100, 200, 400, 800 and 1,600. Each bar is twice the one before. After a gap, a question mark marks the count at 4 hours."><svg viewBox="0 0 480 220" width="480" style="max-width:100%;height:auto" fill="none" stroke="currentColor" font-family="inherit" font-size="13"><line x1="10" y1="190" x2="470" y2="190"/><rect x="20" y="180" width="40" height="10" fill="#1D9E75" fill-opacity="0.3" stroke="#0F6E56"/><rect x="90" y="170" width="40" height="20" fill="#1D9E75" fill-opacity="0.3" stroke="#0F6E56"/><rect x="160" y="150" width="40" height="40" fill="#1D9E75" fill-opacity="0.3" stroke="#0F6E56"/><rect x="230" y="110" width="40" height="80" fill="#1D9E75" fill-opacity="0.3" stroke="#0F6E56"/><rect x="300" y="30" width="40" height="160" fill="#1D9E75" fill-opacity="0.3" stroke="#0F6E56"/><g fill="currentColor" stroke="none" text-anchor="middle"><text x="40" y="174">100</text><text x="110" y="164">200</text><text x="180" y="144">400</text><text x="250" y="104">800</text><text x="320" y="24">1,600</text><text x="40" y="208">start</text><text x="110" y="208">½ h</text><text x="180" y="208">1 h</text><text x="250" y="208">1½ h</text><text x="320" y="208">2 h</text><text x="375" y="170" font-size="20">…</text><text x="435" y="130" font-size="28">?</text><text x="435" y="208">4 h</text></g></svg></figure>

The bars show the germs on the sandwich for the first 2 hours. Make a guess before you check.

## Run: add or multiply

```step
stage: run
insight: "Adding 100 each half hour and doubling each half hour agree for the first step and then split apart: the multiplying line runs away."
try: { playground: board, starter: "ratio.yml#run", height: 640 }
check: { type: board, text: "Set $b$ to 2, so the germs double each half hour. Read the table at 2 hours ($x = 4$) and 4 hours ($x = 8$). Was your prediction right?", when: "b = 2" }
```

The solid line multiplies by $b$ every half hour. The dashed line just adds 100 every half hour. The chart runs out of room, so read the big numbers from the table.

## Investigate: ratio, not difference

```step
stage: investigate
insight: "An exponential table has a constant ratio between neighbours, not a constant difference. Priya checks the differences, which is the test for a linear table."
tasks:
  - check:
      type: answer
      q: "A table goes $5, 15, 45, 135$. What do you multiply by to get from each value to the next?"
      answer: "3"
      feedback:
        - ["10", "10 is how far it goes up from 5 to 15. The ratio is what you multiply by: 15 ÷ 5."]
        - ["30", "30 is how far it goes up from 15 to 45. What do you multiply 15 by to get 45?"]
      explain: "15 ÷ 5 = 3, 45 ÷ 15 = 3 and 135 ÷ 45 = 3. Each value is 3 times the one before."
  - check:
      type: bug
      code: "working.txt#priya"
      text: "Priya tests the table $3, 6, 12, 24$. Click the line where her working goes wrong."
      answer: 2
      fault: logic
      misconception: exp-test-difference
      explain: "Line 2: exponential doesn't mean 'goes up by the same amount'. That's a linear table. Exponential means multiplying by the same number: 6 ÷ 3 = 2, 12 ÷ 6 = 2 and 24 ÷ 12 = 2, so this table is exponential."
  - check:
      type: question
      q: "Which of these tables is exponential?"
      options: ["$2, 5, 8, 11$", "$2, 6, 18, 54$", "$2, 4, 8, 14$"]
      answer: 1
      feedback: ["That adds 3 every time. It's a linear table.", null, "2, 4, 8 doubles, but 8 to 14 only adds 6 (14 ÷ 8 is 1.75). The ratio isn't the same every step."]
      explain: "2, 6, 18, 54 multiplies by 3 every time: 6 ÷ 2, 18 ÷ 6 and 54 ÷ 18 are all 3."
```

### Multiply by what?

Here's how to tell the two kinds of table apart.

```worked
2,\; 6,\; 18,\; 54 :: Is this table linear or exponential?
6 - 2 = 4,\; 18 - 6 = 12,\; 54 - 18 = 36 :: The differences are 4, 12, 36. They aren't the same, so it isn't linear.
6 \div 2 = 3,\; 18 \div 6 = 3,\; 54 \div 18 = 3 :: Divide each value by the one before. Every time, it's 3.
\text{ratio} = 3 :: A constant ratio means exponential: each value is 3 times the one before.
54 \times 3 = 162 :: So the next value is 162.
```

Now try one on paper like the example: $5, 15, 45, 135$. Find the ratio, then type it.

### Find the mistake

Read Priya's working. What does 'exponential' mean for a table?

### Which table?

Check the ratio for each one.

## Modify: change the ratio

```step
stage: modify
insight: "One change at a time: a bigger ratio, a ratio below 1 (the numbers fall), and a ratio of exactly 1 (nothing changes)."
try: { playground: board, starter: "ratio.yml#vary", height: 640 }
tasks:
  - hint: ["Set $b$ to 3.", "The count at 2 hours is the table value at $x = 4$."]
    check: { type: answer, q: "Set $b$ to 3, so the germs triple every half hour. How many germs are there after 2 hours ($x = 4$)?", answer: "8100", feedback: [["1200", "That's 100 × 3 × 4. Tripling four times means × 3 four times: 3 × 3 × 3 × 3 = 81."], ["400", "That's 100 × 4. Tripling means × 3, and it happens four times."]], explain: "100 × 3 × 3 × 3 × 3 = 100 × 81 = 8,100." }
  - hint: "Set $b$ to 0.5. Is each value still a fixed multiple of the one before?"
    check:
      type: question
      q: "Set $b$ to 0.5. The numbers get smaller each step. Is it still an exponential table?"
      options: ["Yes: each value is 0.5 times the one before, so the ratio is still the same every step", "No: exponential tables only go up", "No: the ratio has to be a whole number"]
      answer: 0
      feedback: [null, "A ratio below 1 makes the numbers fall. Each value is half the one before, and that's still a constant ratio.", "A ratio can be a fraction or a decimal. 0.5 is the same as ÷ 2."]
      explain: "A constant ratio is all it takes. With b = 0.5 each value is half the one before: 100, 50, 25, 12.5..."
  - hint: "Set $b$ to 1 and look at the table."
    check:
      type: question
      q: "Edge case: set $b$ to 1. The values stay at 100. What are the difference and the ratio between neighbours?"
      options: ["The difference is 0 and the ratio is 1: both are the same every step", "The difference is 1 and the ratio is 0", "The difference is 0 and the ratio is 0"]
      answer: 0
      feedback: [null, "Swapped: nothing is added, and multiplying by 1 changes nothing.", "Multiplying by 0 would make every value 0. The ratio here is 1."]
      explain: "100 + 0 = 100 and 100 × 1 = 100. A ratio of 1 means nothing changes, so it's a flat line."
```

### Triple

Each task changes $b$. Set the board, then answer.

### A ratio below 1

### A ratio of 1

## Practise: find the ratio

```step
stage: practise
insight: "Finding a ratio, using it to go on, telling linear from exponential, and (review) reading what a line adds."
tasks:
  - check:
      type: answer
      q: "The table goes $6, 18, 54, 162$. What comes next?"
      answer: "486"
      feedback:
        - ["216", "216 is 162 + 54, the last difference added on. An exponential table multiplies: 162 × 3."]
        - ["324", "324 is 162 × 2. What do you multiply by each time here?"]
      explain: "18 ÷ 6 = 3, so each value is 3 times the one before: 162 × 3 = 486."
    smaller:
      check: { type: number, q: "Just one step: how many times bigger is 18 than 6?", answer: 3, explain: "18 ÷ 6 = 3. Check it against 54 ÷ 18." }
  - check:
      type: answer
      q: "The table goes $80, 40, 20, 10$. What do you multiply by each time?"
      answer: "0.5"
      feedback:
        - ["2", "Going from 80 to 40 makes it smaller. Multiply by 2 would make it bigger."]
        - ["-40", "That's 40 − 80. The ratio is what you multiply by: 40 ÷ 80."]
      explain: "40 ÷ 80 = 0.5, and 20 ÷ 40 = 0.5. Each value is half the one before."
  - check:
      type: question
      q: "Which table is exponential?"
      options: ["$5, 11, 17, 23$", "$5, 10, 20, 40$", "$5, 10, 15, 25$"]
      answer: 1
      feedback: ["That adds 6 every time. It's linear.", null, "5, 10, 15 adds 5, but then 15 to 25 adds 10. It's neither."]
      explain: "5, 10, 20, 40 multiplies by 2 every time."
  - check:
      type: answer
      q: "Review: the line $y = 3x + 2$. How much does $y$ go up each time $x$ goes up by 1?"
      answer: "3"
      feedback:
        - ["2", "2 is where the line crosses the y-axis. Look at the number in front of x."]
      explain: "m = 3: a line adds the same amount each step. That's the difference between a line and an exponential."
```

### Next value

### Decay

### Which one?

### Review

Straight lines, from Linear relations.

## Make: back to the sandwich

```step
stage: make
insight: "Coming back to the picnic: the doubling model says 4 hours is 16 times as many germs as 2 hours, not twice as many."
tasks:
  - hint: ["2 hours is 4 half-hours; 4 hours is 8 half-hours.", "Start from 100 and double that many times."]
    check:
      type: reasoning
      paper: true
      q: "The sandwich starts with 100 germs and they double every half hour. How many times as many germs are there after 4 hours as after 2 hours?"
      steps:
        - ["2 hours is 4 half-hours: $100 \\times 2^4 = 1600$ germs", "double 4 times"]
        - ["4 hours is 8 half-hours: $100 \\times 2^8 = 25600$ germs", "double 8 times"]
        - ["$25600 \\div 1600 = 16$", "how many times as many"]
      answer: "16"
      answerLabel: "Times as many"
      feedback:
        - ["2", "4 hours is twice as long as 2 hours, but the germs double 4 more times, not once."]
        - ["8", "There are 4 extra doublings: 2 × 2 × 2 × 2 = 16."]
      criteria:
        - "I worked out the germs at 2 hours and at 4 hours."
        - "I used doubling, not adding."
        - "My answer is a lot more than 2."
      explain: "1,600 at 2 hours and 25,600 at 4 hours. 25,600 ÷ 1,600 = 16 times as many."
  - check:
      type: question
      q: "A friend says: 'The rule throws the food out at 4 hours, but 4 is only double 2, so it's only twice as risky.' In the doubling model, what's wrong with that?"
      options: ["Doubling every half hour means 4 hours has 16 times the germs of 2 hours, not 2 times", "Nothing: twice as long means twice as many germs", "4 hours has 8 times the germs of 2 hours"]
      answer: 0
      feedback: [null, "That's what an adding table does. These germs multiply, so the last hours add the most.", "That would be only 3 extra doublings. From 2 hours to 4 hours is 4 half-hours."]
      explain: "Each half hour doubles the count, so the extra 2 hours double it 4 times: 16 times as many."
```

### 4 hours against 2

Back to the picnic. Work this out on paper first, then type your answer.

### Twice as risky?

The rule's numbers come from food scientists, and the model here is made up. But the shape is the point: with multiplying, the last hours add far more than the first.

Sources: the 2-hour/4-hour rule is from [NSW Food Authority](https://www.foodauthority.nsw.gov.au/sites/default/files/2021-07/2_hour_4_hour_rule.pdf). The 100 germs and the doubling every half hour are made up for this lesson.

**Also used in**

- **Money.** Savings that earn the same percentage each year multiply, so the last years add the most.
- **Sharing.** A post that everyone who sees it sends to 3 friends: each round multiplies.
- **Next lessons.** The graph of a multiplying table, then its rule, then solving for when it reaches a number.
