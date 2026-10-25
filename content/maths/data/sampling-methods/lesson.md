---
order: 17
unit: samples
node: AC9M8ST02 n1
uses: [AC9M8ST01 n2]
title: Ways to choose a sample
summary: "A sample can be chosen at random, every so many people on a list, a fair share from each group, or whoever is easiest to reach. Random ways give every member a chance; the easy way is often biased."
language: maths
voice: { name: af_heart, speed: 1.1 }
hook: "You need 20 students from a school of 200 for a sleep survey, and Year 7s sleep more than Year 10s. How do you pick 20 so the answer is fair?"
connection: canteen-sample   # data/connections/maths.yml (documentation only)
app:
  command: node "$REPO_ROOT/tools/serve.mjs" "$REPO_ROOT/dist/_playground-board" 8335
  url: http://127.0.0.1:8335/index.html
  readySelector: "#gsum"
  layout: full
explainPicture: { ref: school.yml#explain-pic, caption: "A stratified sample of 20: 5 chosen at random from each year group, so every year has its fair share." }
explainClip:
  query: { code: "@school.yml#explain", fresh: 1, id: explain }
  caption: "Four ways to choose"
  say: "Random, systematic, stratified, or convenience."
  clip:
    - caption: { text: "Systematic: every 10th student on the list.", say: "Systematic: every tenth student." }
    - click: Use systematic sampling
    - click: Take a sample
    - wait: 1300
    - caption: { text: "Stratified: 5 at random from each year group.", say: "Stratified: five from each year group." }
    - click: Use stratified sampling
    - click: Take a sample
    - expect: { selector: "#gnote", contains: "Year 7 5, Year 8 5" }
    - wait: 1500
---
How you choose a sample matters as much as how big it is. Each method below picks 20 students from the school of 200, listed in order by year group.

## Predict: a fair share

```step
stage: predict
insight: "Committing to which method guarantees each year group a share shows whether they see what random choice can and can't promise."
check:
  type: predict
  q: "You pick 20 of the 200 students completely at random. Will you get exactly 5 from each year group?"
  options: ["Not always: it could be uneven", "Yes, always", "Never"]
  actual: "Not always. A random sample is fair, but by chance it can have 3 Year 7s and 8 Year 10s. To promise 5 from each, choose 5 at random within each year."
```

## Run: four methods

```step
stage: run
insight: "Taking each kind of sample and reading how many came from each year shows how the methods differ."
try: { playground: board, starter: "school.yml#run", height: 700 }
check: { type: board, text: "Take a simple random sample and read how many came from each year (you can take a few). Then take a stratified sample. Which promises 5 from each year?", when: "k = 3 and s >= 1", explain: "Stratified sampling chooses at random within each year group, so each gets its fair share: 5 of 20." }
```

| Method | How it chooses | Fair? |
|---|---|---|
| **simple random** | every member has the same chance (names from a hat, a random number generator) | yes |
| **systematic** | every *k*th member of a list, from a random start (*k* = population ÷ sample size) | usually, unless the list has a pattern |
| **stratified** | split the population into groups (strata), then choose at random within each, in proportion | yes, and it guarantees each group its share |
| **convenience** | whoever is easiest to reach | often biased |

A **quota** sample also fills a share for each group (5 per year), but lets the collector choose who, so it can be biased like a convenience sample.

## Investigate: how each works

```step
stage: investigate
insight: "Find k for systematic sampling; picking people yourself isn't random even if you try to be fair (Ava); stratify when groups differ."
tasks:
  - check:
      type: number
      q: "A systematic sample of 40 is taken from a list of 200. Every how many students is chosen?"
      answer: 5
      tolerance: 0
      feedback:
        - ["40", "Divide the population by the sample size."]
      explain: "200 ÷ 40 = 5: start at a random student among the first 5, then take every 5th."
  - check:
      type: bug
      code: "working.txt#ava"
      text: "Ava chooses a sample. Click the line where her method stops being random."
      answer: 2
      fault: logic
      misconception: random-haphazard
      explain: "Line 2: Ava chose the students herself, so who was around at lunch, and whom she noticed, decides the sample. Random means every student has the same chance, such as numbers from a random number generator."
  - check:
      type: question
      q: "Year 7s sleep more than Year 10s. Why is a stratified sample (by year) a good choice for a sleep survey?"
      options: ["Each year group gets its fair share, so no year is over- or under-represented", "It is quicker than random", "It only asks Year 7s", "It makes the result exact"]
      answer: 0
      feedback: [null, "It takes a little more planning.", "It asks every year.", "It is still an estimate."]
      explain: "When groups differ on what you measure, stratifying stops chance from tipping the sample towards one group."
```

### Every kth

Here is the routine for a systematic sample.

```worked
\text{Population } 120,\ \text{sample } 15 :: Sizes.
k = 120 \div 15 = 8 :: Every 8th.
\text{Random start from 1 to 8: say } 3 :: Start somewhere random.
3, 11, 19, 27, \ldots :: Add 8 each time until you have 15.
```

### Find the mistake

Read Ava's method. Who decided which students were in the sample?

### Why stratify

## Modify: use the methods

```step
stage: modify
insight: "Running systematic and stratified samples and working out shares makes the methods concrete."
try: { playground: board, starter: "school.yml#systematic", height: 700 }
tasks:
  - starter: "school.yml#systematic"
    check: { type: board, text: "Take a systematic sample of 20. Which students does it pick?", when: "k = 2 and s >= 1", explain: "Every 10th student from a random start (200 ÷ 20 = 10), spread evenly through all four years: 5 from each." }
  - check:
      type: number
      q: "A school has 300 Year 7s and 200 Year 8s. A stratified sample of 50 is taken in proportion. How many Year 7s are in it?"
      answer: 30
      tolerance: 0
      feedback:
        - ["25", "In proportion: Year 7 is 300 of 500, or 3/5."]
      explain: "300 ÷ 500 = 3/5, and 3/5 of 50 = 30. Then 20 Year 8s."
  - check:
      type: question
      q: "A list of 200 students alternates boy, girl, boy, girl. Why is a systematic sample with every 2nd student a bad idea?"
      options: ["It would pick all boys or all girls", "It is too small", "Systematic samples are never fair", "The list is too long"]
      answer: 0
      feedback: [null, "Size isn't the problem here.", "They are usually fine.", "Length isn't the issue."]
      explain: "When the list has a pattern that matches the step, a systematic sample is biased."
  - check:
      type: question
      q: "An interviewer is told to ask 10 people from each age group, choosing whoever she likes in a shopping centre. What kind of sample is this?"
      options: ["A quota sample: fixed shares, but not chosen at random", "A stratified random sample", "A simple random sample", "A census"]
      answer: 0
      feedback: [null, "Stratified sampling chooses at random within each group.", "She chooses the people.", "Most people aren't asked."]
      explain: "Quota samples fill shares like stratified ones, but the collector chooses who, so bias can creep in."
```

### Systematic

### In proportion

### A patterned list

### Quota

## Practise: choosing a method

```step
stage: practise
insight: "Naming and choosing methods in new contexts, mixed; working out stratified shares; bias is the review."
tasks:
  - check:
      type: question
      q: "Each student's name is put in a hat and 30 are drawn. What method is this?"
      options: ["Simple random", "Systematic", "Stratified", "Convenience"]
      answer: 0
      feedback: [null, "There is no list or step.", "There are no groups.", "Every student had the same chance."]
      explain: "Every student has the same chance of being drawn."
  - check:
      type: question
      q: "A factory tests every 50th phone off the production line. What method is this?"
      options: ["Systematic", "Simple random", "Stratified", "Convenience"]
      answer: 0
      feedback: [null, "It follows a fixed step, not a draw.", "There are no groups.", "There is a planned rule."]
      explain: "A fixed step along a list (or line) is systematic."
  - check:
      type: number
      q: "A club has 80 junior and 40 senior members. A stratified sample of 15 is taken in proportion. How many seniors?"
      answer: 5
      tolerance: 0
      explain: "Seniors are 40 of 120 = 1/3, and 1/3 of 15 = 5."
  - check:
      type: question
      q: "Review: a survey of people at a vegan festival asks how often they eat meat. What is the main problem?"
      options: ["Sampling bias: festival-goers eat less meat than most people", "The sample is too small", "Measurement bias from scales", "Nothing"]
      answer: 0
      feedback: [null, "Size wasn't given; the group is the problem.", "Nothing is weighed.", "The group is not typical."]
      explain: "Who was asked pushes the result down."
```

### Names in a hat

### Every 50th

### Seniors

### Review: bias

## Make: pick the best method

```step
stage: make
insight: "Comparing methods on the same population by their results shows which are fair and which are biased."
try: { playground: board, starter: "school.yml#compare", height: 700 }
hint: ["Press Take 10 samples for one method, then switch method and do it again.", "Look at where each method's results sit compared with the dashed line."]
check: { type: board, text: "Take 10 samples of 20 with a fair method of your choice (not convenience). Do its results sit around the population's mean?", when: "k < 4 and s >= 10", explain: "Fair methods give results scattered around the population's mean; convenience samples sit to one side." }
```

Then take 10 convenience samples and compare. Write which method you would use for the sleep survey, and why.

## Make: on paper

```step
stage: make
insight: "Sharing a made-up canteen sample across year groups in proportion, with the reason for that share picked at the key step."
check:
  type: reasoning
  paper: true
  q: "A school of 900 has 270 Year 7s, 270 Year 8s, 180 Year 9s and 180 Year 10s. The canteen takes a stratified sample of 60 students, in proportion to the year groups. How many Year 9s are in it? Work it out on paper."
  steps:
    - ["$180 \\div 900 = 0.2$", "Year 9's share of the school"]
    - ["$0.2 \\times 60 = 12$ Year 9s", "the same share of the sample"]
    - ["Choose the 12 at random from the Year 9 list", "random choice inside each year keeps it fair"]
  picks:
    - step: 2
      q: "Why use the school's share, 0.2, for the sample?"
      options: ["Each year gets the same share of the sample as it has of the school", "Each year should get the same number, 15", "The sample should come from the biggest year"]
      answer: 0
      feedback: [null, "Year 9 is a smaller group than Year 7, so it gets a smaller share. Equal numbers would over-count it.", "Taking only the biggest year leaves the others out."]
  answer: "12"
  answerLabel: "Year 9s in the sample"
  tolerance: 0.01
  feedback:
    - ["15", "That splits the 60 equally among 4 years. Year 9 is a smaller group, so its share is smaller."]
    - ["180", "That is the number of Year 9s in the school. Take their share of the 60."]
  criteria:
    - "I found Year 9's share of the whole school."
    - "I applied the same share to the 60."
    - "I said how the 12 would be chosen."
  explain: "180 ÷ 900 = 0.2, and 0.2 × 60 = 12 Year 9s, chosen at random from that year's list."
```

Do this one in your book or on paper, one step per line, before you type the number.

**Also used in**

- **The canteen.** Ask all 900, or a fair sample of 60? Who you ask matters more than how many.
- **Quality checks.** A factory tests every 50th phone off the line, a systematic sample.
- **Polls.** Pollsters often take people from each group in proportion, so no group is left out.
