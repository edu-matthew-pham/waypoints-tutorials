---
order: 51
unit: claims10
node: AC9M10ST01 n2
uses: [AC9M8ST02 n1, AC9M9ST02 n1]
assumes: [AC9M8ST02 n1, AC9M9ST02 n1]
connection: fan-poll
title: Who did they ask?
summary: "A report's numbers only speak for the people it asked. Find who answered, how they were chosen and who is missing, and decide whether the sample fits the claim."
language: maths
voice: { name: af_heart, speed: 1.1 }
hook: "A football club's website poll gets 50 000 votes. Does that settle what the city thinks?"
---
A football club runs a poll on its website: "Should our city build a bigger stadium?" Fifty thousand votes come in and 92% say yes, so the club announces that the city backs it. The council has a city of 200,000 people to answer to, so it also phones 400 residents picked at random from the electoral roll. Which tells you more about the whole city? Have a guess, and we'll come back to it at the end. (The poll and the numbers are made up for the task.)

<figure class="situation" role="img" aria-label="Two groups drawn as dots. On the left, a big crowd of people wearing club scarves, all inside a ring labelled the club's poll. On the right, a small number of mixed people spread across a larger shape labelled the city, with a question mark between them."><svg viewBox="0 0 400 190" width="400" style="max-width:100%;height:auto" fill="none" stroke="currentColor" font-family="inherit" font-size="13"><rect x="150" y="14" width="236" height="140" rx="16" stroke-width="2" stroke-dasharray="6 5"/><text x="268" y="176" text-anchor="middle" fill="currentColor" stroke="none">the whole city: 200 000 people</text><g fill="currentColor" stroke="none" fill-opacity="0.45"><circle cx="190" cy="50" r="5"/><circle cx="230" cy="90" r="5"/><circle cx="270" cy="40" r="5"/><circle cx="310" cy="110" r="5"/><circle cx="350" cy="60" r="5"/><circle cx="290" cy="130" r="5"/><circle cx="200" cy="130" r="5"/><circle cx="340" cy="132" r="5"/><circle cx="250" cy="60" r="5"/><circle cx="170" cy="90" r="5"/></g><ellipse cx="78" cy="84" rx="62" ry="56" stroke-width="2.4" fill="#D85A30" fill-opacity="0.15"/><g fill="#D85A30" stroke="none"><circle cx="50" cy="60" r="5"/><circle cx="70" cy="72" r="5"/><circle cx="92" cy="58" r="5"/><circle cx="108" cy="76" r="5"/><circle cx="60" cy="92" r="5"/><circle cx="84" cy="96" r="5"/><circle cx="104" cy="104" r="5"/><circle cx="44" cy="112" r="5"/><circle cx="72" cy="116" r="5"/></g><text x="78" y="176" text-anchor="middle" fill="currentColor" stroke="none">the club's poll</text><text x="144" y="86" font-size="26" text-anchor="middle" fill="currentColor" stroke="none">?</text></svg></figure>

## Predict: big or random

```step
stage: predict
insight: "Choosing between a huge poll and a small random one shows who thinks a bigger sample is a better sample, and who asks who is in it."
check:
  type: predict
  q: "The club's poll has 50 000 votes from people who chose to vote on the club's site. The council's survey has 400 residents picked at random. Which tells you more about what the whole city thinks?"
  options:
    - "The 50 000 votes, because more people is more reliable"
    - "The 400 picked at random"
    - "They tell you the same"
  actual: "The 400 picked at random. The 50 000 are mostly fans who chose themselves, and more votes from the same kind of people doesn't fix who is missing."
```

## Run: how much of the city voted

```step
stage: run
insight: "Even a poll that reaches a quarter of the city can only speak for the people who answered, so the share of the population is not the question."
check:
  type: number
  q: "The poll got 50 000 votes and the city has 200 000 people. What percentage of the city voted?"
  answer: 25
  tolerance: 0
  explain: "50 000 ÷ 200 000 = 0.25, so a quarter of the city. It's a big share, but the quarter chose themselves, and they're fans."
```

## Investigate: source, size, how chosen, who's missing

```step
stage: investigate
insight: "To judge a report, ask who answered, how many, how they were chosen and who is missing. A big sample that chose itself can be worse than a small random one."
tasks:
  - check:
      type: question
      q: "A shopping centre asks 300 people leaving its café whether the town needs more cafés, and 81% say yes. What is the biggest problem with the claim 'the town wants more cafés'?"
      options:
        - "The people asked were café customers picked for being easy to reach, so people who don't use cafés are missing"
        - "300 is a small number, so the claim is always wrong"
        - "81% is too high to be true"
        - "The centre asked people outside"
      answer: 0
      feedback:
        - null
        - "A small random sample can still be fair. The trouble is who was asked."
        - "A high percentage isn't a fault in itself. Look at who the 81% are."
        - "Where they stood isn't the fault. It's who was standing there."
      explain: "The sample was chosen for being convenient and it is full of café-goers. It can say what café customers think, but not what the town thinks."
  - check:
      type: question
      q: "How were the club poll's voters chosen?"
      options:
        - "They chose themselves: it was a voluntary poll on the club's site"
        - "A random draw from the electoral roll"
        - "Every tenth person in the city"
        - "One person from each suburb"
      answer: 0
      feedback:
        - null
        - "That's how the council chose its 400."
        - "That would be a systematic sample."
        - "That would be a stratified sample."
      explain: "A voluntary poll lets the people who care most answer. They can be very different from everyone else."
  - check:
      type: bug
      code: "working.txt#lee"
      text: "Lee reads the club's poll. Click the line where the reasoning goes wrong."
      answer: 3
      fault: logic
      misconception: big-sample-no-bias
      explain: "Line 3: a big sample is only reliable if it is a fair slice of the population. These 50 000 chose themselves on the club's site, so more of them doesn't make them more like the city."
  - check:
      type: question
      q: "A headline says 'teenagers spend 6 hours a day on screens'. The survey was a pop-up on a gaming website, and 1 200 players clicked and answered. Who does the 6 hours describe?"
      options:
        - "Gamers who visited that site and chose to answer"
        - "All teenagers"
        - "Everyone with a phone"
        - "Teenagers who never use screens"
      answer: 0
      feedback:
        - null
        - "The sample wasn't drawn from all teenagers, so the result can't be stated for them."
        - "The survey didn't ask everyone with a phone."
        - "They aren't part of a gaming site's audience."
      explain: "The result describes the people who were asked. To say it of all teenagers you'd need a sample drawn fairly from all teenagers."
  - check:
      type: question
      q: "A school emails a survey to all 1 800 students and 140 answer. What might be wrong with using the 140 to speak for the school?"
      options:
        - "The 140 who bothered to answer might differ from the 1 660 who didn't"
        - "The school emailed everyone, which is always biased"
        - "140 is too many to be reliable"
        - "Emails can't carry surveys"
      answer: 0
      feedback:
        - null
        - "Asking everyone is fair. The trouble is who replied."
        - "A sample isn't spoiled for being large."
        - "Surveys by email are common."
      explain: "When most people don't answer, the ones who do may feel more strongly than the rest. This is non-response."
```

### Judging a report

```worked
\text{Who answered?} :: People leaving a café who were asked at the door.
\text{How many?} :: 300 people.
\text{How were they chosen?} :: By being easy to reach, not at random.
\text{Who is missing?} :: Everyone who doesn't use the café.
\text{Verdict} :: It fits café customers, not the whole town.
```

Now try one yourself: a shopping centre asks 300 people leaving its café whether the town needs more cafés, and 81% say yes. Say what the biggest problem is.

### How were they chosen

### Find the mistake

Read Lee's reasoning about the club's poll. Where does it go wrong?

### Who does it describe

### Who didn't answer

## Modify: would that fix it?

```step
stage: modify
insight: "Changing the poll's size or where it is posted shows what fixes a sample and what doesn't."
tasks:
  - check:
      type: question
      q: "The club also posts its poll on the council's website, and 80 000 people vote. Is it a fair picture of the city now?"
      options:
        - "No: people still chose themselves to vote, and the fans are likely still the keenest"
        - "Yes: more votes always make a poll fair"
        - "Yes: the council's site makes it official"
        - "No, because 80 000 is too many"
      answer: 0
      feedback:
        - null
        - "More of the same kind of voter doesn't fix who is missing."
        - "Where it is posted doesn't change who chose to vote."
        - "A large number isn't a fault. Who chose to vote is."
      explain: "More places to vote still leaves it voluntary. What makes a sample fair is how people are picked, not how many."
  - check:
      type: question
      q: "Edge case: the council randomly picks only 30 residents. Is that sample biased, reliable, both or neither?"
      options:
        - "Not biased, but not very reliable, because 30 is small and a different 30 could give a different answer"
        - "Biased, because it is small"
        - "Perfectly reliable, because it is random"
        - "Reliable, because it is small"
      answer: 0
      feedback:
        - null
        - "Picking at random isn't biased. Being small makes it vary a lot."
        - "Random removes the bias but a small sample can still be far off."
        - "Small samples vary more, not less."
      explain: "Random picking is fair, but 30 people could easily give a different answer from the next 30. A bigger random sample would be more reliable."
  - hint: ["Sample size ÷ population, then × 100.", "400 ÷ 200 000."]
    check:
      type: number
      q: "The council picks 400 of the city's 200 000 people. What percentage of the city is that? (2 decimal places)"
      answer: 0.2
      tolerance: 0.005
      explain: "400 ÷ 200 000 = 0.002, so 0.2%. A well-chosen sample can be a tiny share of the population."
    smaller:
      check:
        type: number
        q: "What is 400 ÷ 200 000, as a decimal?"
        answer: 0.002
        tolerance: 0.0001
        explain: "400 ÷ 200 000 = 0.002. Multiply by 100 to make it a percentage."
```

### Posting it in more places

### A small random sample

### A tiny share

## Practise: reading a random sample

```step
stage: practise
insight: "Turning a fair sample's counts into a percentage and an estimate for the whole population, and a review of percentages of an amount."
tasks:
  - hint: ["Count in favour ÷ people asked, × 100.", "140 ÷ 250."]
    check: { type: number, q: "In a random sample of 250 students, 140 chose the pool for the end-of-year party. What percentage is that?", answer: 56, tolerance: 0.05, explain: "140 ÷ 250 = 0.56, so 56%." }
  - hint: ["Use the percentage on the whole school.", "56% of 1 500."]
    check: { type: number, q: "Use that 56% to estimate how many of the school's 1 500 students would choose the pool.", answer: 840, tolerance: 0.5, explain: "0.56 × 1 500 = 840. It's an estimate: a different random sample could give a slightly different answer." }
  - hint: ["Percentage of an amount.", "0.75 × 4 000."]
    check: { type: number, q: "Review: a website poll gets 4 000 votes and 75% say yes. How many votes were yes?", answer: 3000, tolerance: 0, explain: "75% of 4 000 = 0.75 × 4 000 = 3 000. It's a count of those who voted, not of the city." }
```

### Percent in favour

### Estimate for the school

### Review

## Make: the council's answer

```step
stage: make
insight: "Back to the stadium: work out what the random survey found and say which result the council should trust."
tasks:
  - hint: ["Yes votes ÷ people asked, × 100.", "216 ÷ 400."]
    check:
      type: reasoning
      paper: true
      q: "In the council's random survey of 400 residents, 216 said yes to a bigger stadium. What percentage is that?"
      steps:
        - ["$216 \\div 400 = 0.54$", "yes answers as a fraction of everyone asked"]
        - ["$0.54 \\times 100 = 54$", "as a percentage"]
      answer: "54"
      answerLabel: "Percentage who said yes"
      tolerance: 0.05
      feedback:
        - ["92", "That is the club's poll, from people who chose to vote."]
        - ["216", "That is the number who said yes. The question asks for a percentage of the 400."]
      criteria:
        - "I used the 400 people the council asked."
        - "I divided the yes answers by everyone asked."
        - "I could say why this survey is more trustworthy than the poll."
      explain: "216 ÷ 400 = 0.54, so 54% said yes. That's a long way from the club's 92%: the poll's voters are mostly fans."
  - check:
      type: question
      q: "The club says '92% of the city backs a bigger stadium.' Which reply is best supported?"
      options:
        - "The 92% comes from people who chose to vote on the club's site, so it speaks for them, not for the city"
        - "The club must be right because 50 000 is a lot"
        - "The council's survey is wrong because only 400 people were asked"
        - "Neither result means anything"
      answer: 0
      feedback:
        - null
        - "A lot of self-chosen voters is still self-chosen."
        - "A small sample picked at random can be fair."
        - "The random survey is worth using, with the limits that come with 400 people."
      explain: "The poll tells you about its voters. The random survey is a fair slice of the city, so it says more about the city, even though it is much smaller."
```

### The council's result

Work this out on paper first, then type your answer.

### The best reply

The poll, the survey and the city are made up for the task.

**Also used in**

- **News and politics.** A poll's headline is only as good as who it asked and how.
- **Your own surveys.** A survey of your friends speaks for your friends.
- **Next lesson.** Five numbers: a way to summarise a data set that a few extreme values can't distort.
