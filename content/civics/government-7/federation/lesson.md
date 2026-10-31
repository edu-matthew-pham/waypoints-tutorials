---
order: 4
unit: government
title: One country, several governments
node: AC9HC7K01 n4
summary: Federation shares constitutional power between the Commonwealth and the states. State and territory
  governments run many everyday services, while responsibilities can overlap.
language: maths
hook: One country can have national laws and state laws. How can both matter?
---
At Federation in 1901, the six colonies joined together as states in one country. The Constitution gave some powers to the new **Commonwealth** (federal) Parliament and left the rest with the states. That is a **federation**: the states are not departments of the national government. They keep powers of their own.

Two of the reasons people gave for joining were easier trade between the colonies and a shared defence force.

## Predict: who is the boss?

```step
stage: predict
insight: The prediction surfaces a hierarchy model that federation does not support.
check:
  type: predict
  q: A national minister wants to make a decision in an area of state responsibility. Is being national enough
    to give them that power?
  options:
    - Yes, the national government is in charge of the states
    - Only if the Constitution gives the Commonwealth power in that area
    - Yes, as long as the Prime Minister agrees to it
    - No, national ministers can never make decisions inside a state
  actual: "Only if the Constitution gives the Commonwealth power in that area. Being the national government
    does not mean it can make every decision. Some areas belong to the Commonwealth, and many are left with
    the states."
```

## Try: which government does this job?

```step
stage: run
insight: Concrete responsibilities give meaning to the division of powers.
check:
  type: sort
  q: Choose the main responsibility described. Funding can come from more than one level.
  options:
    - Commonwealth
    - State or territory
  items:
    - - National defence
      - Commonwealth
      - Defence is a national responsibility.
    - - Australian currency
      - Commonwealth
      - The national government looks after currency.
    - - Issuing Australian passports
      - Commonwealth
      - Passports are a national responsibility.
    - - Running public schools
      - State or territory
      - State and territory governments run public schools; the Commonwealth also provides funding.
    - - Running public hospitals
      - State or territory
      - State and territory governments run public hospitals, with shared funding.
    - - The ordinary state or territory police service
      - State or territory
      - This names the state or territory service, not the Australian Federal Police.
```

## Worked example: a division, not a ladder

```step
stage: investigate
insight: Federation protects state powers; territories and councils have different foundations.
tasks:
  - check:
      type: bug
      code: working.txt#nib
      text: Click the first line where Nib's explanation first goes wrong.
      answer: 3
      fault: logic
      misconception: federal-is-state-boss
      explain: "Line 3: federal does not mean boss. The Constitution splits powers between the Commonwealth and the
        states, and the states run their own public schools. The Commonwealth can only act where it has power."
    smaller:
      check:
        type: question
        q: Does a state government keep powers of its own in a federation?
        options:
          - No, a state works like a department of the federal government
          - Yes, the Constitution leaves many powers with the states
          - Only the powers the Prime Minister decides to hand back
        answer: 1
        explain: In a federation the national government and the state governments each have powers of their own.
        feedback:
          - That is a ladder, with the states underneath. Federation is a division of powers, not a chain of command.
          - null
          - The Prime Minister does not hand powers to the states. The Constitution sets out the division.
  - check:
      type: question
      q: What is different about a territory compared with a state?
      options:
        - A territory has exactly the same position in the Constitution as a state
        - The Commonwealth Parliament can make laws for a territory
        - A territory has no government of its own at all
      answer: 1
      explain: The Constitution lets the Commonwealth Parliament make laws for territories. States keep their own
        powers in a different way.
      feedback:
        - States keep powers under the Constitution. A territory's government gets its powers from a Commonwealth law,
          so the two are not the same.
        - null
        - The ACT and the Northern Territory do have their own elected governments. Their powers come from
          Commonwealth laws.
```

The Constitution kept the states and their powers. It gave the Commonwealth a list of powers of its own. **Territories are different**: the Commonwealth Parliament can make laws for a territory, and a territory's own government gets its powers from a Commonwealth law.

Local councils are set up by state or territory laws. The Australian Constitution does not set them up. The ACT has no local councils; its Legislative Assembly handles territory and local responsibilities.

### Find Nib’s mistake

### Explain the connection

## Vary: local is another kind of responsibility

```step
stage: modify
insight: Councils run local services under state or territory law; the Constitution does not set them up.
check:
  type: match
  q: Match each description.
  pairs:
    - - Commonwealth Parliament
      - Makes laws for the whole country, in the areas the Constitution lists
    - - State parliament
      - Makes laws for its state, using the powers the states kept
    - - Territory parliament
      - Makes laws for its territory, under rules set by a Commonwealth law
    - - Local council
      - Runs local services, under rules set by a state or territory law
```

## Practise: explain the division

```step
stage: practise
insight: Cases distinguish constitutional power, service operation and funding.
tasks:
  - check:
      type: question
      q: The Commonwealth gives money to a state's public school program. What can you conclude?
      options:
        - The schools now become Commonwealth schools
        - The state still runs the schools; the funding is shared
        - The state must now do whatever the Commonwealth says about schools
      answer: 1
      explain: Paying for a service and running it are different jobs. More than one government can help pay.
      feedback:
        - Giving money does not change who runs the schools. The state still runs them.
        - null
        - Money can come with conditions, but the state still runs its own schools.
  - check:
      type: question
      q: Which statement best describes federation?
      options:
        - The states handed all their powers to the Commonwealth
        - The Constitution splits law-making powers between the Commonwealth and the states
        - The Commonwealth, the states and councils have equal powers under the Constitution
        - The states make every law, and the Commonwealth only looks after defence
      answer: 1
      explain: The states kept their own governments and powers, and the Commonwealth got powers of its own.
      feedback:
        - The states did not disappear. They kept their parliaments and many powers.
        - null
        - Councils are set up by state or territory laws. The Constitution divides powers between the Commonwealth
          and the states.
        - The Commonwealth has many powers, such as currency, passports and trade with other countries.
```

These statements and situations are made up.

### Case 1

### Case 2

## Make: government in an ordinary week

```step
stage: make
insight: Services make the constitutional division visible without asking for private information.
check:
  type: reflect
  text: In my own book I listed four public services and the government mainly responsible for each. I separated
    running from funding where needed. A partner or teacher checked my examples.
```

Choose services such as a public school, public hospital, passport or local rubbish collection. Write about the services, with no personal or family information. For a Canberra example, remember that the ACT Legislative Assembly also handles local responsibilities. Add one sentence explaining why federal does not mean boss of the states.

## Typical: three kinds of power

```step
stage: make
insight: Exclusive, concurrent and residual describe a division of law-making powers.
tier: typical
check:
  type: match
  q: Match the label to its meaning.
  pairs:
    - - Exclusive
      - Only the Commonwealth can make laws in this area, such as currency
    - - Concurrent
      - Both the Commonwealth and the states can make laws in this area
    - - Residual
      - Powers the Constitution leaves with the states
```

These three labels describe who can make laws in an area. Many areas overlap, so one label rarely tells the whole story.

## Typical: when laws clash

```step
stage: make
insight: Section 109 concerns valid inconsistent laws and only the inconsistent part.
tier: typical
check:
  type: question
  q: Suppose both laws are validly made. A made-up Commonwealth law requires a label; a made-up state law
    forbids that same label in the same circumstances. What happens under section 109?
  options:
    - Whichever law was passed more recently wins
    - The state law wins, because it is closer to the people
    - The Commonwealth law wins, but only where the two laws clash
    - Both laws stay, and people choose which one to follow
  answer: 2
  explain: Under section 109, the state law stops working where it clashes with the Commonwealth law. The rest
    of the state law still works. This rule does not give the Commonwealth any new powers.
  feedback:
    - The test is whether the laws clash, not which one is newer.
    - States have real powers, but section 109 says what happens when two valid laws clash.
    - null
    - People cannot obey both laws here, so the Constitution has to settle which one applies.
```

This is a made-up law pair, not a claim about an existing labelling rule. Assume the Commonwealth has a constitutional power to make its law. Section 109 concerns state laws; territory laws have a different constitutional basis.

## Wider: paying and running

```step
stage: make
insight: A shared service can involve different kinds of government responsibility.
tier: wider
check:
  type: sort
  q: For public hospitals, which role is described?
  options:
    - State or territory operation
    - Shared funding
  items:
    - - Running the public hospital service
      - State or territory operation
      - State and territory governments run public hospitals.
    - - Commonwealth and state governments contributing money
      - Shared funding
      - More than one government can help pay for the service.
```

Explain to a partner why "Who pays?" and "Who runs it?" can have different answers. No funding percentages or current agreements are needed.

Typical and wider steps are optional extras on this idea. The untiered steps are the required path.
