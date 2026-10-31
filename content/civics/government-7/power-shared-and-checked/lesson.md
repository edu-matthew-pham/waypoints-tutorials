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
**Popular sovereignty** means the government's power comes from the people. **Representation** means people elect members to act for them. Those members must also be **accountable**: they have to explain their decisions, and others can check how they use their power.

## Predict: which check matters?

```step
stage: predict
insight: A dispute exposes why carrying out a law and judging it should be distinguished.
check:
  type: predict
  q: A made-up minister is challenged for acting beyond a law. Who should settle the legal dispute?
  options:
    - The minister, because they are in charge of that law
    - An independent court, which decides what the law means
    - The Prime Minister, because ministers answer to them
    - Parliament, by voting on whether the minister was right
  actual: An independent court decides. A minister should not be the judge of whether they broke the law
    themselves.
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
      text: Click the first line where Nib's explanation first goes wrong.
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
          - Yes, ministers are members of Parliament
          - No, they must choose one job or the other
          - Only if they resign from Parliament first
        answer: 0
        explain: Ministers are drawn from Parliament and stay members of it.
        feedback:
          - null
          - Think back to the last lesson. The government is formed from members of Parliament.
          - Ministers keep their seats in Parliament. That is how Parliament can question them.
  - check:
      type: question
      q: Which statement explains popular sovereignty?
      options:
        - Government power belongs to whoever holds the top job
        - Government power comes from the people, who elect representatives
        - Government power belongs to the Governor-General, who can use it freely
      answer: 1
      explain: The people are where government power comes from. The members they elect use that power on their
        behalf.
      feedback:
        - Holding a job, even the top one, does not make the power that person's own.
        - null
        - The Governor-General has formal duties but normally acts on the advice of ministers. The power still comes
          from the people.
```

The three jobs have names: **legislative** (make laws), **executive** (carry them out) and **judicial** (decide legal disputes). In the Commonwealth, Parliament is made up of the monarch (represented by the Governor-General) and the two houses. The executive is the Prime Minister and ministers, with the Governor-General. The judiciary is the High Court and the other federal courts.

Australia has a **partial separation of powers**. Ministers come from Parliament and answer to it, so those two jobs overlap. Courts stand apart from both. A court follows the law, not a minister's instructions. Courts explain their decisions in writing, and a higher court can review a decision on appeal. That is very different from a minister telling a court what to decide.

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
      - Who must explain their decisions? People who hold power
    - - Partial separation of powers
      - Which jobs overlap, and which stay apart?
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
        - There is no problem, because the court is part of the government
        - There is no problem if that minister made the law in the first place
        - Courts must decide cases by the law, not on a minister's orders
      answer: 2
      explain: Courts decide cases by the law, separately from ministers.
      feedback:
        - Courts are separate from the executive. If a minister could direct them, nobody could check the minister.
        - Parliament makes laws, and courts decide what they mean in a dispute. A minister cannot decide that alone.
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
        - - The High Court deciding if a law goes beyond what the Constitution allows
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
    - Both countries keep their leaders and ministers outside the legislature
    - Australian ministers sit in Parliament; the US President does not sit in Congress
    - Both countries put their leaders and ministers inside the legislature
    - The US President is chosen by Congress, the way a Prime Minister is
  answer: 1
  explain: Both countries divide powers, but they connect the executive and the legislature differently.
  feedback:
    - Australian ministers come from Parliament and sit in it.
    - null
    - The US President is not a member of Congress.
    - The US President is elected separately, not chosen by Congress.
```

Congress is the US legislature. Its President is not a member of Congress. In Australia ministers come from Parliament. This is a comparison of structures, not a ranking of countries.

Typical and wider steps are optional extras on this idea. The untiered steps are the required path.
