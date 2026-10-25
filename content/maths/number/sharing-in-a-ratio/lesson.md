---
order: 22
unit: ratio
node: AC9M7N08 n3
uses: [AC9M7N08 n2]   # equivalent ratios and scaling (Equivalent and simplest ratios)
title: Sharing in a ratio
summary: "Share $60 in the ratio 2 : 3. Add the parts (5), find one part ($60 ÷ 5 = $12), then multiply: $24 and $36."
language: maths
voice: { name: af_heart, speed: 1.1 }
hook: "Two friends win a prize and agree to share it by how much each one put in. How do you cut it up so it is fair?"
connection: rent-split
app:
  command: node "$REPO_ROOT/tools/serve.mjs" "$REPO_ROOT/dist/_playground-board" 8292
  url: http://127.0.0.1:8292/index.html
  readySelector: "#sl-total"
  layout: full
explainPicture: { ref: sh.yml#explain-pic, caption: "$60 in the ratio 2 : 3: 5 equal parts of $12. Ana gets 2 parts ($24), Ben 3 parts ($36)." }
explainClip:
  query: { code: "@sh.yml#explain", fresh: 1, id: explain }
  caption: "Share in a ratio"
  say: "Cut the total into equal parts."
  clip:
    - caption: { text: "2 + 3 = 5 equal parts.", say: "Two plus three is five equal parts." }
    - wait: 1200
    - click: Make the total bigger
    - expect: { selector: "#gsum", contains: "$20 ÷ 5 = $4" }
    - caption: { text: "$20 ÷ 5 = $4 a part.", say: "Divide the total by five to get one part." }
    - wait: 1400
    - caption: { text: "Ana has 2 parts: $8. Ben has 3: $12.", say: "Multiply by each person's number of parts." }
    - wait: 1600
---
To **share a total in a ratio**, think of the total cut into equal **parts**:

1. **Add the parts:** for $3 : 4$, that is $3 + 4 = 7$ parts.
2. **Find one part:** $\$70 \div 7 = \$10$.
3. **Multiply:** the first share is $3 \times \$10 = \$30$ and the second $4 \times \$10 = \$40$.

Check: $\$30 + \$40 = \$70$. The shares must add to the total.

## Predict: how much does Ben get?

```step
stage: predict
insight: "Committing shows whether they split equally ($30), divide by Ben's number ($20) or divide by all the parts ($36)."
check:
  type: predict
  q: "$60 is shared between Ana and Ben in the ratio $2 : 3$. How much does Ben get?"
  options: ["$36", "$30", "$20", "$24"]
  actual: "$36. There are 2 + 3 = 5 parts, each $12, and Ben has 3 parts. $30 is an equal split; $24 is Ana's share."
```

<figure class="situation" role="img" aria-label="A bar of 60 dollars cut into 5 equal parts. Ana has the first 2 parts and Ben has the last 3 parts. Ben's share is marked with a question mark."><svg viewBox="0 0 400 165" width="400" style="max-width:100%;height:auto" fill="none" stroke="currentColor" font-family="inherit" font-size="14"><rect x="50" y="50" width="60" height="40" fill="#1D9E75" fill-opacity="0.3" stroke="#0F6E56"/><rect x="110" y="50" width="60" height="40" fill="#1D9E75" fill-opacity="0.3" stroke="#0F6E56"/><rect x="170" y="50" width="60" height="40" fill="#378ADD" fill-opacity="0.3" stroke="#185FA5"/><rect x="230" y="50" width="60" height="40" fill="#378ADD" fill-opacity="0.3" stroke="#185FA5"/><rect x="290" y="50" width="60" height="40" fill="#378ADD" fill-opacity="0.3" stroke="#185FA5"/><text x="110" y="40" text-anchor="middle" fill="currentColor" stroke="none">Ana: 2 parts</text><text x="260" y="40" text-anchor="middle" fill="currentColor" stroke="none">Ben: 3 parts</text><text x="200" y="120" text-anchor="middle" fill="currentColor" stroke="none">$60 shared in all</text><text x="260" y="150" text-anchor="middle" fill="currentColor" stroke="none">Ben gets: ?</text></svg></figure>

Should Ben get more or less than half of the money?

## Run: cut it into parts

```step
stage: run
insight: "Seeing the bar cut into five equal parts of $12, with brackets for each person, shows the shares as parts of the total."
try: { playground: board, starter: "sh.yml#run", height: 420 }
check: { type: board, text: "Set the total to $60. How much is one part, and how much does Ben get?", when: "w = 60 and y = 36", explain: "5 equal parts of $12. Ben has 3 parts: 3 × $12 = $36. Ana has $24." }
```

Change the total and watch the parts stay equal.

## Investigate: parts first

```step
stage: investigate
insight: "Find the total parts first, then one part; Dee divides the total by each person's number instead. Shares add back to the total."
tasks:
  - check:
      type: answer
      q: "$40 is shared in the ratio $1 : 3$. How much is one part, in dollars?"
      answer: "10"
      feedback:
        - ["40", "That is the whole total. The parts are 1 + 3 = 4, so one part is 40 ÷ 4."]
        - ["13", "That divides by 3 (about 13). Divide by all the parts: 1 + 3 = 4."]
      explain: "1 + 3 = 4 parts. $40 ÷ 4 = $10 for one part."
  - check:
      type: bug
      code: "working.txt#dee"
      text: "Dee shares $60 between Ana and Ben in the ratio 2 : 3. Click the line where her working goes wrong."
      answer: 2
      fault: logic
      misconception: share-by-term
      explain: "Line 2: dividing $60 by Ana's 2 does not give her share. First add the parts (2 + 3 = 5), find one part ($12), then Ana has 2 × $12 = $24. The check on line 4 shows the shares do not add to $60."
  - check:
      type: answer
      q: "35 stickers are shared in the ratio $3 : 4$. How many stickers are in the bigger share?"
      answer: "20"
      feedback:
        - ["15", "That is the smaller share, 3 parts."]
        - ["5", "That is one part: 35 ÷ 7. The bigger share has 4 parts."]
      explain: "3 + 4 = 7 parts. 35 ÷ 7 = 5 stickers a part. The bigger share is 4 × 5 = 20."
```

### One part

Here is the whole routine for $60 in the ratio 2 : 3.

```worked
2 + 3 = 5 :: Add the parts of the ratio.
\$60 \div 5 = \$12 :: One part is the total divided by the number of parts.
\text{Ana: } 2 \times \$12 = \$24 :: Each share is its number of parts times one part.
\text{Ben: } 3 \times \$12 = \$36 :: Ben has 3 parts.
\$24 + \$36 = \$60 :: Check that the shares add back to the total.
```

Now try one: $40 in the ratio 1 : 3.

### Find the mistake

### The bigger share

## Modify: three people, and working backwards

```step
stage: modify
insight: "Three people share the same way; working backwards from one share finds the total by finding one part first."
try: { playground: board, starter: "sh.yml#three", height: 460 }
tasks:
  - check: { type: board, text: "Three friends share $90 in the ratio 1 : 2 : 3. How much does the third friend get?", when: "w = 90 and z = 45", explain: "1 + 2 + 3 = 6 parts. $90 ÷ 6 = $15 a part. The third friend has 3 parts: $45." }
  - check:
      type: answer
      q: "Mia and Noor share money in the ratio $3 : 5$. Mia gets $24. How much does Noor get, in dollars?"
      answer: "40"
      feedback:
        - ["24", "Mia has 3 parts: $24, so one part is $8. Noor has 5 parts."]
        - ["15", "That is the 5 × 3. Find one part first: Mia's $24 is 3 parts."]
      explain: "Mia's 3 parts are $24, so one part is $8. Noor has 5 parts: 5 × $8 = $40."
  - check:
      type: answer
      q: "How much money did Mia and Noor share altogether, in dollars?"
      answer: "64"
      feedback:
        - ["40", "That is Noor's share. The total is Mia's and Noor's together."]
      explain: "3 + 5 = 8 parts of $8: $64. Or $24 + $40."
  - check:
      type: answer
      q: "Mortar is made from cement and sand in the ratio $2 : 5$. How many kilograms of cement are in 14 kg of mix?"
      answer: "4"
      feedback:
        - ["10", "That is the sand. Cement has 2 of the 7 parts."]
        - ["2", "That is one part. Cement has 2 parts."]
      explain: "2 + 5 = 7 parts. 14 ÷ 7 = 2 kg a part. Cement is 2 parts: 4 kg."
```

### Three shares

### Work backwards

### The whole amount

### A mortar mix

## Practise: sharing in a ratio

```step
stage: practise
insight: "Two-part shares with both a bigger and a smaller share, a three-part share, and a review of simplest form."
tasks:
  - check:
      type: answer
      q: "$72 is shared in the ratio $5 : 4$. What is the bigger share, in dollars?"
      answer: "40"
      feedback:
        - ["32", "That is the smaller share. The bigger share has 5 parts."]
        - ["8", "That is one part: 72 ÷ 9."]
      explain: "5 + 4 = 9 parts. 72 ÷ 9 = 8. The bigger share is 5 × 8 = 40."
  - check:
      type: answer
      q: "45 marbles are shared in the ratio $2 : 3$. How many are in the smaller share?"
      answer: "18"
      feedback:
        - ["27", "That is the bigger share. The smaller has 2 parts."]
      explain: "2 + 3 = 5 parts. 45 ÷ 5 = 9. The smaller share is 2 × 9 = 18."
  - check:
      type: answer
      q: "$120 is shared among three people in the ratio $1 : 2 : 3$. What is the largest share, in dollars?"
      answer: "60"
      feedback:
        - ["20", "That is the smallest share, 1 part."]
        - ["40", "That is the middle share, 2 parts."]
      explain: "1 + 2 + 3 = 6 parts. 120 ÷ 6 = 20. The largest has 3 parts: 60."
  - check:
      type: answer
      q: "Review: simplify $18 : 24$. It is $3 : ?$"
      answer: "4"
      feedback:
        - ["8", "Divide both terms by 6: 24 ÷ 6 = 4."]
      explain: "Divide both by 6: 3 : 4."
```

### The bigger share

### The smaller share

### Three people

### Review: simplest form

## Make: exactly $15

```step
stage: make
insight: "Choosing a ratio and a total so that one share is exactly $15 shows the share is parts times one part, and many choices work."
try: { playground: board, starter: "sh.yml#make", height: 460 }
hint: ["Ana's share is a × one part.", "Try 1 : 1 with a total of $30."]
check: { type: board, text: "Choose a ratio and a total so that Ana's share is exactly $15.", when: "x = 15", explain: "For example $30 in 1 : 1, $20 in 3 : 1, $60 in 1 : 3. The share is her parts times one part." }
```

Then find two different ratios (with their totals) that give the same share.

## Make: sharing the rent, on paper

```step
stage: make
insight: "Three flatmates share the rent by room size: add the parts, find one part, then multiply. An equal split is the planted wrong answer."
hint: ["Add 12 + 10 + 8 first.", "One part is the rent divided by all the parts."]
check:
  type: reasoning
  paper: true
  q: "Three flatmates share a \\$450 weekly rent in the ratio of their room sizes: 12 m², 10 m² and 8 m². How much does the flatmate in the 12 m² room pay, in dollars?"
  steps:
    - ["$12 + 10 + 8 = 30$ parts", "add the parts of the ratio"]
    - ["$\\$450 \\div 30 = \\$15$ for one part", "one part is the total divided by the number of parts"]
    - ["The 12 m² room: $12 \\times \\$15 = \\$180$", "a share is its number of parts times one part"]
    - ["Check: $\\$180 + \\$150 + \\$120 = \\$450$", "the shares add back to the rent"]
  picks:
    - step: 2
      q: "How do you find what one part is worth?"
      options:
        - "Divide the rent by all the parts added: 450 ÷ 30"
        - "Divide the rent by the number of flatmates: 450 ÷ 3"
        - "Divide the rent by the room's own number: 450 ÷ 12"
      answer: 0
      feedback: [null, "That is an equal split, \\$150 each. The rooms are different sizes, so the shares are not equal.", "That divides by one flatmate's parts. Divide by all the parts first."]
  answer: "180"
  answerLabel: "Share (dollars)"
  tolerance: 0
  feedback:
    - ["150", "That is an equal split. The biggest room pays more than the others."]
    - ["15", "That is one part. The 12 m² room has 12 parts."]
  criteria:
    - "I added all the parts before dividing."
    - "I found one part, then multiplied."
    - "My three shares add back to \\$450."
  explain: "12 + 10 + 8 = 30 parts. \\$450 ÷ 30 = \\$15 a part. The 12 m² room pays 12 × \\$15 = \\$180, the others \\$150 and \\$120."
```

Do this one in your book, not on the screen. The rent and the room sizes are made up for the task. Whether room size is the fairest way to share a rent is for the flatmates to argue about. Work out one part, then the biggest share, and type it.

**Also used in**

- **Flatmates.** Rent, power and internet are often shared by room size or by use, and the shares must add back to the bill.
- **Mixing.** The mural team's 10 litres of paint in the ratio 2 : 3 is the same sum: 5 parts of 2 litres each.
