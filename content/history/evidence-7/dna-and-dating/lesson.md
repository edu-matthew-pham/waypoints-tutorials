---
order: 2
unit: science
title: DNA and dating answer different questions
node: AC9HH7K08 n2
assumes:
  - AC9HH7K08 n1
summary: Describe how ancient DNA can reveal biological relationships. Distinguish that question from dating organic material, and read a date range as an estimate rather than an exact year.
language: maths
hook: One report says two ancient people were close biological relatives. Another gives an estimated age range for charcoal. Have the labs answered the same question?
---
**DNA** carries inherited biological information. Scientists can compare surviving DNA from ancient human remains to investigate biological relationships. DNA does not tell us a person's name or beliefs by itself. The comparison and the question matter.

**Radiocarbon dating** estimates when once-living material stopped exchanging carbon with its surroundings. It can help date charcoal or other suitable organic samples. It does not directly date a stone wall. Reports give uncertainty, often as a range. A date for a sample is evidence to compare with its archaeological context.

These two reports are **invented teaching examples** about an ancient settlement. No actual people or laboratory results are described.

- **Report A:** DNA from two ancient individuals is consistent with a close biological relationship.
- **Report B:** a charcoal sample has a modelled calendar range of 300 to 200 BCE at the stated confidence level.

## Predict: commit to a claim

```step
stage: predict
insight: Surface the initial rule students would use before they compare it with evidence.
check:
  type: predict
  q: Which question does Report A address?
  options:
    - Were these people biologically related?
    - In which exact year was the settlement built?
    - What language did they speak?
  actual: Report A concerns biological relationships. It does not supply a calendar date or a language.
```



## Try: sort the evidence

```step
stage: run
insight: Separate the kinds of evidence or claims before using them together.
check:
  type: sort
  q: Choose the method for the question.
  options:
    - DNA comparison
    - Radiocarbon dating
  items:
    - - Could two ancient individuals be biological relatives?
      - DNA comparison
      - Compare inherited biological information.
    - - When might a charcoal sample date from?
      - Radiocarbon dating
      - Charcoal is suitable once-living material.
    - - Do ancient groups share genetic ancestry?
      - DNA comparison
      - Compare DNA across samples and interpret it with other evidence.
```

Compare the result with your prediction. What would you keep or change?

## Worked example: follow the reasoning

```step
stage: investigate
insight: Test the main inference, then repair the planted misconception before carrying it into a new case.
tasks:
  - check:
      type: question
      q: Which conclusion combines the two reports carefully?
      options:
        - The people were certainly named in a royal family tree
        - The DNA gives an exact date for the charcoal
        - There is evidence of a biological relationship and a separate estimated sample date
      answer: 2
      explain: The reports contribute different evidence. Their connection to the settlement still depends on the find records.
      feedback:
        - A relationship estimate is not a historical name.
        - DNA comparison and radiocarbon dating answer different questions.
        - null
  - check:
      type: question
      q: Nib records Report B as “the settlement was built in exactly 250 BCE”. What is the problem?
      options:
        - The range should be read backwards
        - The range is an estimate for a sample, not an exact construction date
        - Charcoal cannot ever be dated
      answer: 1
      explain: 250 BCE is inside the range, but the report does not select that year or directly date construction.
      feedback:
        - BCE counts towards 1 BCE, but the stated range is already valid.
        - null
        - Suitable charcoal is organic material and can be radiocarbon dated.
      fault: logic
      misconception: sample-date-is-exact-event
    smaller:
      check:
        type: question
        q: The report gives 300 to 200 BCE. Has it selected one exact year?
        options:
          - Yes
          - No
        answer: 1
        explain: A range leaves uncertainty about the date.
        feedback:
          - Look at what the evidence actually records.
          - null
    hint:
      - Read the report as a statement about the sample.
      - Ask what connects the charcoal to building the settlement.
```

Report A adds information that layer depth cannot give: a biological relationship. Report B gives a time estimate. Read the whole range, not just its middle. Neither report proves why people lived together or whether a charcoal sample belongs to the event you are investigating.

### What follows from the evidence?

### Check Nib’s claim

Explain which part of the claim goes beyond what the evidence supports.

## Vary: change one condition

```step
stage: modify
insight: Keep the same idea while testing a changed condition.
check:
  type: question
  q: What has the lab dated directly?
  options:
    - The charcoal sample
    - The stone tool
    - The digging of the later pit
  answer: 0
  explain: The charcoal result needs its context before it can help date the pit or other finds.
  feedback:
    - null
    - Stone is not the organic sample tested.
    - Old charcoal moved into a later pit can predate the pit.
```

Now a later pit contains both old charcoal moved from elsewhere and a stone tool. The lab tests the charcoal. The excavator records the mixing.

## Practise: a fresh case

```step
stage: practise
insight: Apply the same test independently to another case.
check:
  type: question
  q: You want to investigate whether two ancient individuals were biological relatives. Which is the best starting evidence?
  options:
    - Similar pots alone
    - The depth of their finds alone
    - A comparison of surviving DNA, alongside the context records
  answer: 2
  explain: DNA comparison can test biological relationship; the archaeological records help interpret the result.
  feedback:
    - Pots can be shared by people who are not relatives.
    - Depth helps with relative order, not biological relationship.
    - null
```



## Make: explain it in your own book

```step
stage: make
insight: Produce an explanation that names both evidence and a limit, checked by a person.
check:
  type: reflect
  text: In my own book I wrote one question that ancient DNA could help answer and what a comparison might reveal. I added a different question for radiocarbon dating and one limit of each method. A partner checked that the methods answer different questions.
```

Write in your own book or document. Include a claim, the evidence for it and a limit. Your partner or teacher reads your explanation; this page only records your tick.

## Typical: another example

```step
stage: make
tier: typical
insight: Add another context at the same level without changing the required idea.
check:
  type: question
  q: An ancient sample gives too little usable DNA. What follows?
  options:
    - The person had no relatives
    - The method cannot settle the relationship from that sample
    - Layer order is now useless
  answer: 1
  explain: Failure to recover usable DNA is a limit of the sample. It is not evidence that relatives did not exist.
  feedback:
    - No usable result does not prove no relationship.
    - null
    - The layer records remain another source of evidence.
```



## Wider: test the limit

```step
stage: make
tier: wider
insight: Explore the limits of the same idea through discussion and an explanation.
check:
  type: reflect
  text: I explained how an old charcoal sample moved into a newer pit could produce a valid lab result but a misleading date for the pit. I named the field record that would help.
```

Typical and wider steps are optional breadth on this idea. They are not needed to finish.
