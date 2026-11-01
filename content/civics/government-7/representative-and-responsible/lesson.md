---
order: 2
unit: government
title: We elect them, they answer to us
node: AC9HC7K01 n2
summary: Voters choose representatives. The government is drawn from Parliament and must answer to it, with
  the support of the House of Representatives.
language: maths
hook: If we elect a local member, how does anyone become Prime Minister?
explainDiagram:
  ref: diagrams.mmd#chain
  alt: Voters elect the House. Majority support in the House allows a government to form. The Governor-General
    appoints its leader as Prime Minister. Ministers come from Parliament and answer to Parliament.
  caption: From a vote to a government
  role: explain
---
**Representative government** means we elect people to act for us. **Responsible government** means ministers come from Parliament and have to answer to it. Voters elect senators as well as members of the House of Representatives. This lesson follows the House vote: how it leads to a government and a Prime Minister (PM).

## Predict: what does a vote choose?

```step
stage: predict
insight: A prediction surfaces the difference between choosing a representative and directly choosing a
  national leader.
check:
  type: predict
  q: A voter fills in a House of Representatives ballot. What are they choosing?
  options:
    - A local member
    - The Governor-General
    - The national Cabinet
    - The Prime Minister directly
  actual: The ballot chooses a member for the local electorate. There is no separate national ballot for Prime
    Minister.
```

## Try: connect the steps

```step
stage: run
insight: Ordering the chain makes government formation depend on support in the House.
check:
  type: parsons
  code: working.txt#chain
  text: Put these lines in order, from casting a House vote to ministers answering to Parliament. This is a
    chain of ideas, not computer code.
  explain: Voters elect the House. Its support determines who can form government; ministers then remain
    answerable to Parliament.
```

## Worked example: who answers to whom?

```step
stage: investigate
insight: The executive comes from Parliament and remains answerable to it.
diagram:
  ref: diagrams.mmd#chain
  alt: Voters elect the House. Majority support in the House allows a government to form. The Governor-General
    appoints its leader as Prime Minister. Ministers come from Parliament and answer to Parliament.
  caption: From a vote to a government
  role: explain
tasks:
  - check:
      type: question
      q: Why does electing the House matter for forming government?
      options:
        - The Senate picks the Prime Minister after the election
        - The Governor-General picks whoever they like as Prime Minister
        - Whoever has majority support in the House can form government
        - The party with the most votes across Australia forms government
      answer: 2
      explain: Voters elect the House, and the House decides which side can govern. That is the link between
        voters and the government.
      feedback:
        - The Senate checks laws and questions the government. But a government stays in power only while it has
          the support of the House.
        - The Governor-General appoints the Prime Minister, but must choose the person who can win the House's
          support.
        - null
        - Votes are counted seat by seat. What matters is which side wins the support of most members of the House.
  - check:
      type: bug
      code: working.txt#nib
      text: Click the first line where Nib's explanation first goes wrong.
      answer: 3
      fault: logic
      misconception: directly-elect-pm
      explain: "Line 3: the voter elects a local member. The Prime Minister leads the government that has majority
        support in the House, and is formally appointed by the Governor-General."
    smaller:
      check:
        type: question
        q: Whose names appear on a House of Representatives ballot?
        options:
          - Candidates for the local electorate
          - Only candidates for Prime Minister
          - Every senator for your state
        answer: 0
        explain: A House vote chooses a local representative.
        feedback:
          - null
          - There is no separate national ballot for Prime Minister.
          - Senators are on a different ballot paper. The House ballot is for your local electorate.
```

The **executive** is the part of government that puts laws into action. It includes the Prime Minister and ministers. Cabinet is the Prime Minister and senior ministers, who make the big decisions together. Ministers can come from either house of Parliament. By custom, the Prime Minister comes from the House of Representatives.

The Governor-General represents the monarch and formally appoints the Prime Minister and ministers. The Prime Minister must lead a side that has majority support in the House. The Senate checks proposed laws and questions the government, but it does not decide who forms government.

### Explain the connection

### Find Nib’s mistake

## Vary: match the roles

```step
stage: modify
insight: Different roles explain how the institutions work together.
check:
  type: match
  q: Match each role to its main job here.
  pairs:
    - - Governor-General
      - Represents the monarch; formally appoints the Prime Minister and ministers
    - - House of Representatives
      - Its majority support determines who can form government
    - - Senate
      - Reviews proposed laws and examines government work
    - - Prime Minister
      - Leads the government and chairs Cabinet
    - - Cabinet
      - Prime Minister and senior ministers making major decisions
    - - Opposition
      - Largest non-government grouping in the House; challenges government and offers alternatives
```

## Practise: who has the numbers?

This is a made-up House with 15 members, much smaller than the real one. The rule is the same: a side needs the support of more than half the members. The crossbench is members who are in neither side. They can back a side without joining it.

```step
stage: practise
insight: "Giving and taking crossbench support shows that majority support in the House, not being the biggest side, decides who can form government."
try: { playground: board, starter: "house.yml#hung", height: 460 }
tasks:
  - check:
      type: board
      text: "Side A has the most members, but not a majority. Give Side A just enough support to reach a majority."
      when: "a = 8"
      explain: "More than half of 15 is 8. Side A has 7, so it needs one crossbench member to back it."
    smaller:
      starter: "house.yml#hung-5"
      check:
        type: board
        text: "In this tiny House of 5, more than half is 3. Give Side A a majority."
        when: "a = 3"
        explain: "Side A has 2. One more makes 3, which is more than half of 5."
  - check:
      type: board
      text: "Press Start again. Now show that Side B could form government, even though it has fewer members than Side A."
      when: "b >= 8"
      explain: "If both crossbench members back Side B, it has 8 of 15. The biggest side does not automatically govern. The side with majority support does."
```

### Give Side A a majority

### Could Side B govern?

## Practise: the link stays in place

```step
stage: practise
insight: Answering to Parliament continues after an election.
tasks:
  - check:
      type: question
      q: A made-up minister says, "The election is over, so Parliament cannot ask about my decisions." Which reply
        fits responsible government?
      options:
        - That is right, because voters can judge them at the next election
        - Ministers still answer to Parliament between elections
        - Only the Governor-General can question a minister
      answer: 1
      explain: Ministers keep answering to Parliament between elections, for example in Question Time.
      feedback:
        - Elections matter, but Parliament keeps checking ministers between them too.
        - null
        - Members of Parliament question ministers. The Governor-General does not do that job.
  - check:
      type: question
      q: A made-up senator becomes a minister. Must they stop being a senator?
      options:
        - Yes, ministers are not allowed to sit in Parliament
        - Yes, a minister must move across to the House
        - No, ministers can come from either house
      answer: 2
      explain: Ministers can come from either house. By custom, the Prime Minister comes from the House.
      feedback:
        - In Australia ministers must be in Parliament. That is how Parliament can question them.
        - A minister can stay a senator. Only the Prime Minister, by custom, comes from the House.
        - null
```

These are made-up situations in the real Australian system.

### Case 1

### Case 2

## Make: draw the connection

```step
stage: make
insight: Drawing both the choice and the return accountability link shows the whole relationship.
check:
  type: reflect
  text: I drew the chain in my own book, including the House, the Governor-General appointing the Prime
    Minister, and ministers coming from and answering to Parliament. A partner or teacher checked the arrows.
```

Start with a voter. Use the diagram to check your finished drawing, then add an arrow showing who ministers answer to. Your drawing should explain why a House vote is not a direct vote for Prime Minister. Write in your own book or document.

## Typical: how one seat is won

Each seat in the House is won by **preferential voting**. Voters number every candidate in order of choice. If no one has more than half the first choices, the candidate with the fewest votes is out, and their ballots go to each of those voters' next choice. This repeats until someone has more than half.

This is a made-up seat with 20 voters and three made-up candidates.

```step
stage: make
tier: typical
insight: "Counting a made-up seat round by round shows why the candidate with the most first choices doesn't always win."
try: { playground: board, starter: "house.yml#count", height: 520 }
tasks:
  - check:
      type: board
      text: "Press Count the next round until one candidate has more than half the votes."
      when: "d = 1"
      explain: "In round 1 no one has 11 of 20. C has the fewest, so C is out, and C's 5 ballots go to those voters' next choice, B. B then has 12, more than half."
  - check:
      type: question
      q: "Candidate A had the most first choices. Why did Candidate B win the seat?"
      options:
        - "C's voters preferred B to A, so B passed half"
        - "B had more first choices than A in round 1"
        - "Most first choices never decides the seat"
        - "A was out of the count after round 1"
      answer: 0
      feedback:
        - null
        - "Look at round 1 again: A had 8 and B had 7."
        - "Sometimes it does: if one candidate has more than half the first choices, they win in round 1."
        - "C went out after round 1, not A."
      explain: "No one had more than half at first. When C went out, C's voters' next choice was B, which took B to 12 of 20."
```

### Count the seat

### Why B won

## Typical: a rule that is not written there

```step
stage: make
insight: Conventions can organise government without being named constitutional offices.
tier: typical
check:
  type: question
  q: The Constitution does not name the Prime Minister or Cabinet. Why do their roles still matter?
  options:
    - They do not really matter, because only written rules count
    - The Governor-General decides each time whether to have them
    - Long-accepted practices, called conventions, shape how government works
  answer: 2
  explain: A convention is a practice everyone has accepted for a long time. A government that loses the
    House's support cannot just carry on, so the practice has real effects.
  feedback:
    - Some important rules are not written in the Constitution but are still followed.
    - The Prime Minister and Cabinet are part of how government always works, not a choice made each time.
    - null
```

A **convention** is an established practice of government. It is different from a law a court enforces.

## Wider: how scrutiny works

```step
stage: make
insight: Different accountability tools ask different questions of government.
tier: wider
try: { playground: board, starter: "house.yml#governing", height: 460 }
tasks:
  - check:
      type: match
      q: Match the made-up situation to the accountability tool.
      pairs:
        - - A minister is asked in the chamber why a made-up program missed its target
          - "Question Time: ministers explain decisions on sitting days"
        - - The House formally tests whether it still supports a made-up government
          - "No-confidence motion: a vote on whether the House still supports the government"
        - - Senators question officials about a made-up spending estimate
          - "Senate estimates: committees examine proposed spending and administration"
  - check:
      type: board
      text: "In the made-up House on the board, Side A governs with one crossbench member's support. That member stops backing Side A. Show it."
      when: "a < 8"
      explain: "Side A now has 7 of 15, not a majority. A government that loses the House's support cannot just carry on (see below)."
```

### Match the tool

### Support is lost

A government needs the support of the House (its "confidence") to stay in office. If it loses that support, it normally resigns or asks for an election; what happens next depends on the situation. A hard question in Question Time does not remove a government on its own.

Typical and wider steps are optional extras on this idea. The untiered steps are the required path.
