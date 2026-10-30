---
order: 1
unit: government
title: The Constitution - rules for the rule-makers
node: AC9HC7K01 n1
summary: "Australia's Constitution is the written rulebook for the national government. It came into effect on 1 January 1901 and sets up Parliament, the Governor-General and the High Court, and it limits what Parliament can make laws about. Parliament cannot change it alone: any change has to be approved by the voters in a referendum. Students meet the idea first in a made-up club, then in the real thing."
language: maths
hook: "Parliament makes the laws for the whole country. But who makes the rules for Parliament?"
---
Something has to say what Parliament is, what it is allowed to do, and who can change those rules. In Australia, that is the **Constitution**.

You will start with a small version of the same idea: a club.

## Predict: the club's rules

```step
stage: predict
insight: "Committing to an answer first shows that rules apply to the people who make decisions too."
check:
  type: predict
  q: "The Maple Street Chess Club has a written rule: the committee can spend up to $200 without asking the members. The committee wants to spend $500. What should happen?"
  options: ["The committee asks the members to vote, because the rule limits what the committee can decide alone", "The committee goes ahead, because it runs the club", "The committee changes the rule at its next meeting, then spends the money", "Nothing, because rules are only suggestions"]
  actual: "The committee asks the members. The written rule limits the committee, so it cannot just go past it."
```

## Try: what goes in the club's rulebook?

```step
stage: run
insight: "Sorting shows that a constitution holds the big, lasting rules, and the committee makes everyday decisions inside them."
check:
  type: sort
  q: "Is each thing in the club's constitution, or something the committee decides week to week?"
  options: ["In the constitution", "Committee decides"]
  items:
    - ["That the club has a committee, and how it is chosen", "In the constitution", "A constitution sets up the club's decision-makers."]
    - ["What the committee may spend without asking the members", "In the constitution", "It limits the committee, so it has to be written above the committee."]
    - ["Which snacks to buy for Friday", "Committee decides", "This is an everyday decision made inside the rules."]
    - ["How many members must come for a vote to count", "In the constitution", "This is a lasting rule about how decisions are made."]
    - ["Which day to hold the next tournament", "Committee decides", "This is an everyday decision."]
    - ["How the rules themselves can be changed", "In the constitution", "A rulebook says how it can be changed."]
```

Was your guess right? Notice the pattern. A constitution sets up the decision-makers, says what they may and may not decide, and says how the rules themselves can be changed. Everyday decisions happen inside it.

## Worked example: Australia's rulebook

```step
stage: investigate
insight: "The club pattern carries over to the country. Nib's reasoning is planted as the mistake: that Parliament can change the Constitution on its own."
tasks:
  - check:
      type: question
      q: "Australia's Constitution came into effect on 1 January 1901. What is its main job?"
      options: ["It sets up the main parts of the national government and says what they can do", "It lists every law Australians must follow", "It says which team of politicians runs the country", "It sets how much tax each person pays"]
      answer: 0
      feedback: [null, "Laws are made by Parliament, inside the rules the Constitution sets. The Constitution does not list them all.", "Who wins elections is up to the voters. The Constitution sets up the system, not the winners.", "Tax rates are set by ordinary laws that Parliament passes."]
      explain: "Like the club's rulebook, it sets up the decision-makers and says what they can and cannot do."
  - check:
      type: bug
      code: "working.txt#nib"
      text: "Nib is explaining Mei's class notes. Click the line where Nib's thinking goes wrong."
      answer: 3
      fault: logic
      misconception: parliament-changes-constitution
      explain: "Line 3: Parliament makes ordinary laws, but it sits under the Constitution. Parliament can propose a change, but only the voters can approve it, at a referendum. Just like the club committee, which cannot rewrite its own limits alone."
    smaller:
      check: { type: question, q: "Can the Maple Street committee rewrite the rule that limits its spending, just by voting at its own meeting?", options: ["No, the members have to agree to change the club's rules", "Yes, the committee runs the club", "Yes, if the president agrees", "Yes, if it tells the members afterwards"], answer: 0, explain: "The rule is there to limit the committee. A rule that the committee could change alone would not limit it at all." }
  - check:
      type: question
      q: "Which three bodies does the Constitution set up?"
      options: ["Parliament, the Governor-General and the High Court", "The Prime Minister, the police and the army", "Parliament, the states and the councils", "The Senate, the voters and the newspapers"]
      answer: 0
      feedback: [null, "The Prime Minister is not named in the Constitution, and nor are the police. You will see more about this in the next lesson.", "The states existed before the Constitution, and councils are set up by the states.", "The Senate is part of Parliament. Voters and newspapers are not bodies the Constitution sets up."]
      explain: "Parliament makes laws, the Governor-General is the monarch's representative who formally appoints ministers and signs laws into force, and the High Court decides what the Constitution means and whether a law is allowed."
```

### The real rulebook

```worked
\text{Who is it for?} :: The Constitution sets rules for the people who make the country's laws.
\text{What does it set up?} :: Parliament (makes laws), the Governor-General (formally appoints ministers and signs laws), the High Court (decides what the rules mean).
\text{What does it limit?} :: Parliament can only make laws about the subjects the Constitution lists, such as defence and the post.
\text{Who can change it?} :: Not Parliament alone. The voters decide, at a referendum.
```

Now: what is the Constitution's main job?

### Find Nib's mistake

### Which bodies does it set up?

## Vary: more rules about the rule-makers

```step
stage: modify
insight: "Each task changes the case: what is written in the Constitution, what Parliament can do, and who has the final say."
tasks:
  - check:
      type: sort
      q: "Is each thing set out in the Constitution, or decided by an ordinary law Parliament passes?"
      options: ["In the Constitution", "Ordinary law"]
      items:
        - ["That there is a Senate and a House of Representatives", "In the Constitution", "The Constitution sets up the two houses."]
        - ["The rules for getting a passport", "Ordinary law", "Parliament can pass and change this like any law."]
        - ["That there is a High Court", "In the Constitution", "The Constitution sets up the High Court."]
        - ["How much income tax is paid", "Ordinary law", "Parliament sets tax rates by passing laws."]
  - check:
      type: question
      q: "Which of these could Parliament do just by passing an ordinary law?"
      options: ["Change the rules for getting a passport", "Get rid of the High Court", "Get rid of the Senate", "Give itself the power to make laws about anything it likes"]
      answer: 0
      feedback: [null, "The Constitution sets up the High Court, so getting rid of it would mean changing the Constitution.", "The Constitution sets up the Senate, so this too would need a referendum.", "The Constitution limits what Parliament can make laws about. Changing that would need a referendum."]
      explain: "Ordinary laws sit under the Constitution. Anything that changes the Constitution itself needs the voters."
  - check:
      type: question
      q: "In the chess club and in Australia, who has the final say on changing the basic rules?"
      options: ["The members in the club, and the voters in Australia", "The committee in the club, and Parliament in Australia", "The president in the club, and the Prime Minister in Australia", "A court in both"]
      answer: 0
      feedback: [null, "Think about why the rules exist. If the rule-makers could change them alone, the rules would not limit them.", "The president and Prime Minister are decision-makers too, so the same problem applies.", "A court explains what the rules mean. It does not change them."]
      explain: "The people the rules are meant to serve have the final say, not the people the rules limit."
```

### Written in or passed by Parliament

### What Parliament can do alone

### The final say

## Practise: which body?

```step
stage: practise
insight: "Repeating the idea on new cases makes the three bodies and the limit on changing the rules familiar."
tasks:
  - check:
      type: sort
      q: "Which body does each job?"
      options: ["Parliament", "Governor-General", "High Court"]
      items:
        - ["Makes the laws", "Parliament", "Making laws is Parliament's main job."]
        - ["Formally appoints ministers", "Governor-General", "The Governor-General does this on formal advice."]
        - ["Decides whether a law goes beyond what the Constitution allows", "High Court", "The High Court decides what the Constitution means."]
        - ["Signs a law so that it comes into force", "Governor-General", "This formal step is part of the Governor-General's role."]
  - check:
      type: question
      q: "Sam says: 'The Constitution is just an old law, and Parliament can update it like any other law.' What is the best reply?"
      options: ["No. It sits above ordinary laws, and only the voters can approve a change to it", "That is right, Parliament can change it by voting", "No. Only the Governor-General can change it", "No. Only the High Court can change it"]
      answer: 0
      feedback: [null, "Think about the chess club. Could the committee change its own spending limit alone?", "The Governor-General has a formal role in making laws, but cannot change the Constitution.", "The High Court says what the Constitution means. It does not change it."]
      explain: "A change needs the voters at a referendum. That is what makes the Constitution different from an ordinary law."
```

### Which body?

### Sam's idea

## Make: your own rulebook

```step
stage: make
insight: "Writing the idea in your own words, with a club you know, is how it becomes yours."
check: { type: reflect, text: "In my own book I wrote three things the Constitution does, and one thing Parliament cannot do on its own. I used the club to help explain it. A partner read it and agreed." }
```

Write it in your own book or document, not on this page. Your partner or teacher reads it.

## Typical: what is in the Constitution?

```step
stage: make
tier: typical
insight: "The Constitution is divided into parts. Matching each part to its job shows how the rulebook is organised."
check:
  type: match
  q: "Match each part of the Constitution to what it is about."
  pairs:
    - ["Chapter I: The Parliament", "The Senate, the House of Representatives and how laws are made"]
    - ["Chapter II: The Executive Government", "The Governor-General and the ministers who carry out the laws"]
    - ["Chapter III: The Judicature", "The High Court and other federal courts"]
    - ["Chapter VIII: Alteration of the Constitution", "How the Constitution can be changed"]
```

## Wider: did the referendum pass?

```step
stage: make
tier: wider
insight: "The double majority: a change needs a majority of all voters and a majority in at least four of the six states."
check:
  type: sort
  q: "A change to the Constitution needs a majority of all voters, and a majority of voters in at least four of the six states. Did each made-up proposal pass?"
  options: ["Passes", "Fails"]
  items:
    - ["Proposal 1: 56% yes overall, yes majorities in 5 of 6 states", "Passes", "Both tests are met: a majority overall and a majority in at least four states."]
    - ["Proposal 2: 51% yes overall, yes majorities in 3 of 6 states", "Fails", "A majority overall, but only three states. It needed at least four."]
    - ["Proposal 3: 48% yes overall, yes majorities in 4 of 6 states", "Fails", "Four states, but not a majority overall."]
    - ["Proposal 4: 53% yes overall, yes majorities in 4 of 6 states", "Passes", "Both tests are met."]
```

## Wider: other countries' rulebooks

```step
stage: make
tier: wider
insight: "Not every country puts its rules in one document, and not every written constitution can be changed the same way."
check: { type: reflect, text: "I looked up how one other country's rules for its government are set out (one document, or not), and said one difference from Australia's Constitution to a partner." }
```

Typical and wider steps are extras on the same idea. You do not need them to finish the lesson.
