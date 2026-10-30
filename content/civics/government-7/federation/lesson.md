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
At Federation the colonies united as states in one country. The Constitution gave some powers to the new **Commonwealth**, or federal, Parliament and left others with the states. This is a **federation**, not a national government with states as its departments.

Two arguments for joining were easier trade between colonies and a united defence. The states also kept governments of their own.

## Predict: who is the boss?

```step
stage: predict
insight: The prediction surfaces a hierarchy model that federation does not support.
check:
  type: predict
  q: A national minister wants to make a decision in an area of state responsibility. Is being national enough
    to give them that power?
  options:
    - Yes, the national government runs every level
    - No, they need lawful authority
  actual: No. Federal power has constitutional limits. Calling a government national does not give it every
    state power.
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
      text: Click the line where Nib's explanation first goes wrong.
      answer: 3
      fault: logic
      misconception: federal-is-state-boss
      explain: "Line 3: federation is a constitutional division of powers. Commonwealth action needs a lawful basis;
        being national does not create an unlimited power to run state services."
    smaller:
      check:
        type: question
        q: Does a state government keep powers of its own in a federation?
        options:
          - No, it is just a federal department
          - Yes, the Constitution leaves powers with states
        answer: 1
        explain: Federation combines national government with states retaining powers.
        feedback:
          - That describes a hierarchy rather than the constitutional division.
          - null
  - check:
      type: question
      q: What is different about a territory’s constitutional position?
      options:
        - It has exactly the same constitutional status as a state
        - The Commonwealth can make laws for territories
        - Its local councils control the Commonwealth
      answer: 1
      explain: The Constitution’s territory power is different from the division with states.
      feedback:
        - State powers and territory self-government have different foundations.
        - null
        - Local councils do not control Commonwealth law-making.
```

The Constitution preserves states and their powers while giving the Commonwealth specified powers. **Territories are different**: the Commonwealth can make laws for territories, and their self-government arrangements come from Commonwealth laws.

Local councils are created under state or territory laws, not established as a separate level by the Australian Constitution. The ACT has no local councils; its Legislative Assembly handles territory and local responsibilities.

### Find Nib’s mistake

### Explain the connection

## Vary: local is another kind of responsibility

```step
stage: modify
insight: Local services do not create a third constitutional division of sovereign power.
check:
  type: match
  q: Match each description.
  pairs:
    - - Commonwealth Parliament
      - National law-making within its constitutional powers
    - - State parliament
      - State law-making with powers retained under the Constitution
    - - Territory legislature
      - Self-government under arrangements made by Commonwealth law
    - - Local council
      - Local responsibilities under state or territory law
```

## Practise: explain the division

```step
stage: practise
insight: Cases distinguish constitutional power, service operation and funding.
tasks:
  - check:
      type: question
      q: The Commonwealth contributes money to a public school program. What can you conclude?
      options:
        - All schools become Commonwealth departments
        - State governments no longer matter
        - Funding can be shared while the state runs schools
      answer: 2
      explain: Funding a service and operating it are different jobs.
      feedback:
        - Contributing funds does not turn a state service into a federal department.
        - State governments still operate their public schools.
        - null
  - check:
      type: question
      q: Which statement best describes federation?
      options:
        - The states give up every power
        - National and state governments have a constitutional division of powers
        - Local councils wrote the Constitution
      answer: 1
      explain: States retain their own government and powers alongside the Commonwealth.
      feedback:
        - States did not disappear into a single government.
        - null
        - Councils are created under state or territory laws.
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
      - Only the Commonwealth can legislate in this area, such as currency
    - - Concurrent
      - Both Commonwealth and states can legislate in the area, within their powers
    - - Residual
      - Powers left with states rather than given to the Commonwealth
```

These labels describe the Commonwealth–state division. They are not a rule that a state subject can never overlap with a Commonwealth power.

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
    - The newer law always wins
    - The state law wins because it is local
    - The Commonwealth law prevails to the extent of the inconsistency
  answer: 2
  explain: Section 109 makes the inconsistent part of the state law inoperative while the inconsistency exists.
    It does not give the Commonwealth unlimited power.
  feedback:
    - The test here is inconsistency, not simply which law is newer.
    - State powers matter, but section 109 supplies this rule for valid conflicting laws.
    - null
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
