---
order: 3
unit: government
title: Power shared, power checked
node: AC9HC7K01 n3
summary: Authority comes from the people. Australia shares law-making, executive and judicial powers, with
  ministers in Parliament and independent courts.
language: maths
hook: Could the people carrying out a law also decide every dispute about whether they broke it?
explainDiagram:
  ref: diagrams.mmd#powers
  alt: Voters elect Parliament. Parliament makes laws; ministers drawn from it lead the executive that carries
    laws out. Independent courts judge legal disputes and can check whether laws are constitutional.
  caption: Different jobs, with an overlap
  role: explain
---
**Popular sovereignty** means government authority comes from the people. **Representation** means people elect members to act on their behalf. Those members must also be accountable: they must explain their decisions and face checks on their power.

## Predict: which check matters?

```step
stage: predict
insight: A dispute exposes why carrying out a law and judging it should be distinguished.
check:
  type: predict
  q: A made-up minister is challenged for acting beyond a law. Who should settle the legal dispute?
  options:
    - The minister alone
    - An independent court
    - Whoever has the loudest opinion
  actual: An independent court decides legal disputes. The minister does not get the final legal judgement on
    their own actions.
```

## Try: three different jobs

```step
stage: run
insight: Distinguishing jobs comes before institutional labels.
check:
  type: sort
  q: Which kind of work is each example?
  options:
    - Make laws
    - Carry out laws
    - Decide legal disputes
  items:
    - - Parliament votes on a proposed law
      - Make laws
      - Parliament exercises legislative power.
    - - A department administers a law under a minister
      - Carry out laws
      - The executive puts laws into action.
    - - A court decides what a disputed law means
      - Decide legal disputes
      - Courts exercise judicial power.
```

## Worked example: shared does not mean unchecked

```step
stage: investigate
insight: Australia has overlapping legislative and executive membership, with an independent judiciary.
diagram:
  ref: diagrams.mmd#powers
  alt: Voters elect Parliament. Parliament makes laws; ministers drawn from it lead the executive that carries
    laws out. Independent courts judge legal disputes and can check whether laws are constitutional.
  caption: Different jobs, with an overlap
  role: explain
tasks:
  - check:
      type: bug
      code: working.txt#nib
      text: Click the line where Nib's explanation first goes wrong.
      answer: 3
      fault: logic
      misconception: complete-separation-australia
      explain: "Line 3: Australia has a partial separation. Ministers are in Parliament as well as the executive.
        Judicial decisions remain independent."
    smaller:
      check:
        type: question
        q: Can one person be a member of Parliament and a minister?
        options:
          - Yes
          - No
        answer: 0
        explain: Ministers are drawn from Parliament.
        feedback:
          - null
          - Remember how government is formed in the previous lesson.
  - check:
      type: question
      q: Which situation explains popular sovereignty?
      options:
        - A minister owns government authority
        - Government authority comes from the people
        - Courts choose all representatives
      answer: 1
      explain: The people are the source of democratic authority; elected members exercise authority on their behalf.
      feedback:
        - Holding an office does not make authority personal property.
        - null
        - People elect representatives. Courts have a different job.
```

The three jobs have names: **legislative** (make laws), **executive** (carry them out) and **judicial** (decide legal disputes). At Commonwealth level Parliament includes the monarch, represented by the Governor-General, and the two houses. The executive includes the Prime Minister and ministers, and the monarch represented by the Governor-General. The judiciary includes the High Court and other federal courts.

Australia has a **partial separation of powers**. Ministers come from Parliament and answer to it. Courts stand apart from both and decide cases independently. An independent court follows the law, rather than taking instructions about its judgement from a minister. Courts give reasons for their decisions; appeals allow decisions to be reviewed where the law permits. That is different from a minister directing the result.

### Find Nib’s mistake

### Explain the connection

## Vary: name the principle

```step
stage: modify
insight: Popular sovereignty, representation and accountability answer different questions.
check:
  type: match
  q: Match the idea to the question it answers.
  pairs:
    - - Popular sovereignty
      - Where does government authority come from? The people
    - - Representation
      - Who acts on our behalf? Elected members
    - - Accountability
      - How must decision-makers explain their actions and face checks?
    - - Partial separation of powers
      - Which jobs overlap, and which must remain independent?
```

## Practise: find the check

```step
stage: practise
insight: A check has to match the kind of power being exercised.
tasks:
  - check:
      type: question
      q: A made-up minister tells a court what judgement to give. What is the problem?
      options:
        - A court should take instructions from ministers
        - Only the Senate can give that instruction
        - Judicial decisions must be independent
      answer: 2
      explain: Courts decide cases according to law, independently of ministers.
      feedback:
        - That would let the executive control the legal check on itself.
        - The Senate cannot direct a court’s judgement either.
        - null
  - check:
      type: sort
      q: Which power is being exercised?
      options:
        - Legislative
        - Executive
        - Judicial
      items:
        - - Passing a proposed law through Parliament
          - Legislative
          - This makes law.
        - - Administering a law through a department
          - Executive
          - This puts law into practice.
        - - The High Court deciding if a law exceeds constitutional power
          - Judicial
          - A court decides a legal dispute about constitutional limits.
```

These situations are made up; the institutions and their roles are real.

### Case 1

### Case 2

## Make: who holds each power?

```step
stage: make
insight: An example and a check make the three labels useful.
check:
  type: reflect
  text: "In my own book I made three columns: legislative, executive and judicial. Each has its job, who holds
    it and one check on its power. I explained why the separation is partial. A partner or teacher read it."
```

For example, the executive carries out laws and ministers answer questions in Parliament. Add examples for the other two powers. For courts, distinguish accountability through reasons and appeals from interference with a judgement. Use the diagram to check the overlap.

## Typical: more than one check

```step
stage: make
insight: Checks combine rather than relying on one institution.
tier: typical
check:
  type: match
  q: Match the tool to the check it provides.
  pairs:
    - - Elections
      - Voters can replace their representatives
    - - Courts
      - Resolve legal challenges to the lawfulness of government action
    - - A free press
      - Investigates and reports on public decisions for people to judge
    - - Question Time
      - Parliament asks ministers to explain decisions
```

## Wider: a different separation

```step
stage: make
insight: Comparing the overlap makes partial separation precise.
tier: wider
check:
  type: question
  q: In the USA, the President is separate from Congress. Which comparison is accurate?
  options:
    - Australia also keeps ministers outside Parliament
    - Australia overlaps ministers and Parliament; the USA separates its President from Congress
    - The USA has no legislature
  answer: 1
  explain: Both systems divide powers, but the executive–legislature relationship differs.
  feedback:
    - Australian ministers come from Parliament.
    - null
    - Congress is the US legislature.
```

Congress is the US legislature. Its President is not a member of Congress. In Australia ministers come from Parliament. This is a comparison of structures, not a ranking of countries.

Typical and wider steps are optional extras on this idea. The untiered steps are the required path.
