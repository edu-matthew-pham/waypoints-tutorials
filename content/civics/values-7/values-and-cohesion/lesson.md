---
order: 2
unit: values
title: Do we live our values?
node: AC9HC7K05 n2
assumes: [AC9HC7K05 n1]
summary: "Social cohesion is people from different backgrounds getting along, trusting each other and feeling they belong. Shared values such as fairness and inclusion can support it. But naming a value isn't proof it's lived: to judge, look for evidence of where it is and isn't reflected. Real survey figures, with their year, are one kind of evidence."
language: maths
hook: "Australia says everyone gets a fair go. How could you find out whether that's true?"
---
**Social cohesion** means people from different backgrounds getting along, trusting each other and feeling they belong. Shared values such as fairness, respect and inclusion can help a diverse society hold together.

But saying a value isn't the same as living it. To judge whether a value is lived, you need **evidence**: something you can check that shows where the value is reflected, and where it isn't.

Reconciliation between First Nations and other Australians is part of this. Your teacher may take it up with local material.

One kind of evidence is a large survey. The Scanlon Institute asks thousands of Australian adults about social cohesion each year. These figures are real; each one has its year.

| From the *Mapping Social Cohesion* survey (over 8,000 adults, July 2025) | Year | Per cent |
|---|---|---|
| Felt a sense of belonging in Australia "to a great extent" | 2020 | 63 |
| Felt a sense of belonging in Australia "to a great extent" | 2025 | 46 |
| Agreed "multiculturalism has been good for Australia" | 2025 | 83 |
| Said they'd been discriminated against in the last 12 months because of skin colour, ethnic origin or religion | 2025 | 16 |

## Predict: does saying it make it so?

```step
stage: predict
insight: "Asking whether a named value is automatically lived brings out Nib's idea before students look at evidence."
check:
  type: predict
  q: "Australia often names a fair go as a value. Does that mean everyone in Australia gets one?"
  options:
    - "Not necessarily: you'd need evidence to know"
    - "Yes, if it's an Australian value, everyone gets it"
    - "No, naming a value means it isn't true"
    - "Yes, because it's in the citizenship pledge"
  actual: "Not necessarily. Naming a value tells you what people aim for. To know whether it's lived, you look at evidence, such as whether people from different backgrounds feel they belong and are treated fairly."
```

## Try: words for cohesion

```step
stage: run
insight: "Matching the parts of social cohesion to plain meanings gives students words for what the evidence measures."
check:
  type: match
  q: "Match each part of social cohesion to what it means."
  pairs:
    - ["Belonging", "Feeling you're part of the community"]
    - ["Trust", "Expecting others to treat you fairly"]
    - ["Inclusion", "Being part of things, not left out"]
    - ["Social cohesion", "People from different backgrounds getting along"]
```

## Worked example: reading the evidence

```step
stage: investigate
insight: "Reading what each figure shows, and doesn't, is the evaluation move at the heart of the hinge, and catches Nib's slip."
tasks:
  - check:
      type: question
      q: "In 2025, 83% agreed that multiculturalism has been good for Australia. What does that show?"
      options:
        - "Most adults surveyed agreed with it in 2025"
        - "Every Australian feels included and treated fairly"
        - "No one in Australia experiences discrimination"
        - "Multiculturalism will always be popular"
      answer: 0
      feedback:
        - null
        - "Agreeing with a statement isn't the same as feeling included. Look at the other rows."
        - "The last row shows 16% said they'd been discriminated against."
        - "The figure is for 2025. It can't tell you about the future."
      explain: "The figure shows what most people surveyed thought in 2025. It doesn't show that everyone is included: other rows show gaps."
  - check:
      type: bug
      code: "working.txt#nib"
      text: "Nib is reading the survey table. Click the first line where Nib goes wrong."
      answer: 3
      fault: logic
      misconception: stated-value-means-lived
      explain: "Line 3: naming a fair go doesn't prove everyone gets one. The table shows gaps: belonging fell from 63% to 46%, and 16% said they'd been discriminated against."
    smaller:
      check:
        type: question
        q: "A town says its library is open to everyone. What would you check to see if that's really true?"
        options:
          - "Whether people from every group can really use it"
          - "Whether the sign says 'open to everyone'"
          - "Whether the town council says it's true"
        answer: 0
        explain: "A claim is checked by evidence of what really happens, not by repeating the claim."
        feedback:
          - null
          - "The sign is the claim. You'd check what actually happens."
          - "The council saying so is still the claim, not the evidence."
```

```worked
\text{The value} :: Inclusion: people from every background feel part of things.
\text{Evidence it's widely held} :: 83% agreed multiculturalism has been good for Australia (2025).
\text{Evidence of a gap} :: 16% said they'd been discriminated against (2025); belonging fell from 63% (2020) to 46% (2025).
\text{A careful judgement} :: Partly lived: widely supported, but not everyone experiences it.
```

### What does 83% show?

### Find Nib's mistake

## Vary: what counts as evidence?

```step
stage: modify
insight: "Sorting statements into evidence for, evidence against, and not evidence at all separates checking from claiming."
check:
  type: sort
  q: "Is each one evidence that a value is held or lived, evidence of a gap, or not really evidence either way?"
  options: ["Evidence it's held or lived", "Evidence of a gap", "Not evidence either way"]
  items:
    - ["83% agreed multiculturalism has been good for Australia (2025)", "Evidence it's held or lived", "It's a measured figure showing the value is widely held. Agreeing shows support, not that everyone is included."]
    - ["16% said they'd been discriminated against in the last year (2025)", "Evidence of a gap", "It shows some people aren't treated fairly."]
    - ["Belonging 'to a great extent' fell from 63% (2020) to 46% (2025)", "Evidence of a gap", "Fewer people felt they strongly belonged."]
    - ["A speech saying 'Australians are the fairest people in the world'", "Not evidence either way", "A speech is a claim, not something measured."]
    - ["A friend says everyone at their school gets along", "Not evidence either way", "One person's impression of one place can't tell you about a whole country."]
```

## Practise: careful judgements

```step
stage: practise
insight: "Choosing the most careful judgement checks that students weigh evidence on both sides before deciding."
tasks:
  - check:
      type: question
      q: "Which judgement fits the survey evidence best?"
      options:
        - "Inclusion is widely supported but not lived by everyone"
        - "Australia lives all its values fully, with no gaps"
        - "Australia doesn't live any of its values at all"
        - "Surveys can't tell us anything about values"
      answer: 0
      feedback:
        - null
        - "The discrimination and belonging rows show gaps."
        - "83% support for multiculturalism shows the value is widely held."
        - "A careful survey is real evidence, as long as you read it carefully and note its year."
      explain: "A careful judgement uses evidence on both sides: wide support, and real gaps."
  - check:
      type: question
      q: "Belonging 'to a great extent' fell from 63% to 46%. Does that mean 54% feel they don't belong at all?"
      options:
        - "No, they may belong, just not to a great extent"
        - "Yes, everyone else feels they don't belong at all"
        - "Yes, because 100 minus 46 is 54"
        - "No, it means 46% feel they don't belong"
      answer: 0
      feedback:
        - null
        - "The question asked about belonging 'to a great extent'. Others may feel they belong a bit, or a moderate amount."
        - "The sum is right, but the 54% includes people who feel they belong a moderate amount."
        - "46% is the share who did feel they belonged to a great extent."
      explain: "Read exactly what was asked. People not in the 46% might still belong a moderate amount or a little."
```

### A careful judgement

### Read exactly what was asked

## Make: one value, both sides

```step
stage: make
insight: "Weighing evidence on both sides for one value shows the student can evaluate, not just name."
check:
  type: reflect
  text: "In my own book I chose one value, gave one piece of evidence that it is held or lived and one piece of evidence of a gap (each with its year), and wrote a careful judgement. A partner read it and gave feedback."
```

Write it in your own book or document, not on this page. Use the survey figures, not anyone's own experience. Your partner or teacher reads it.

## Typical: an aim and the reality

```step
stage: make
tier: typical
insight: "A made-up local case shows the gap between an aim and what happens, and what could close it."
check:
  type: question
  q: "The made-up Wattle Creek sports club says it welcomes everyone, but its sign-up form is only in English and the games are on a holy day for some families. What's the gap?"
  options:
    - "It names inclusion, but some people can't easily join"
    - "There's no gap, because the club says everyone is welcome"
    - "The club should stop saying it welcomes everyone"
    - "Families who can't come don't want to join"
  answer: 0
  feedback:
    - null
    - "Saying it isn't the same as doing it. Look at who might be left out."
    - "The aim is fine. The question is how to live up to it."
    - "We don't know that. The form and the day may be what's stopping them."
  explain: "The club aims for inclusion, but the form and the day leave some people out. Changing them could close the gap."
```

## Wider: to what extent?

```step
stage: make
tier: wider
insight: "How far Australia lives its values is a judgement with more than one defensible answer, so it is discussion with no marked answer."
check:
  type: reasoning
  q: "To what extent are values like fairness and inclusion reflected in Australian society? Use at least two pieces of evidence, with their years, and say what other evidence you'd want."
  paper: true
  models:
    - title: "One answer"
      text: "To a large extent: 83% agreed multiculturalism has been good for Australia in 2025. But not fully: 16% said they'd been discriminated against that year. I'd want to know which groups feel left out, and why."
    - title: "A different answer"
      text: "Less than people think: belonging 'to a great extent' fell from 63% in 2020 to 46% in 2025. Support for multiculturalism is high, but feeling you belong matters too. I'd want to compare age groups."
  criteria:
    - "I used at least two pieces of evidence, each with its year."
    - "I made a judgement that weighs both sides."
    - "I named other evidence I'd want."
```

This is a discussion with no single right answer. Your teacher may ask your class to compare views.

Typical and wider steps are extras on the same idea. You do not need them to finish the lesson.
