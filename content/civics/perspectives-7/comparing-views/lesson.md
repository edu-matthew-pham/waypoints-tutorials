---
order: 2
unit: perspectives
title: Why views differ
node: AC9HC7S03 n2
assumes: [AC9HC7S03 n1]
summary: "To compare two sources on a civic issue, find where they agree and where they disagree, then explain why. Views usually differ because people care about different things (values), stand to gain or lose different things (interests), know different things (information), or have different jobs to do (roles). Disagreeing doesn't mean someone is lying."
language: maths
explainPicture: { ref: sources.yml#explain-pic, caption: "Three sentences from a made-up note about the library, labelled: a fact anyone could check, why it matters to them, and what they want." }
hook: "The newspaper and the shop owners disagree about the market. Does one of them have to be wrong?"
---
Back to Wattle Creek's Saturday market (Wattle Creek and everyone in these sources are made up). You've worked out each source's view. Now compare them.

To compare two sources:

1. Find a point where they **agree**.
2. Find a point where they **disagree**.
3. Explain **why** they see it differently.

One way to sort why views differ is into four kinds of reason. Real disagreements often mix more than one:

- **Values**: they care about different things, such as a lively town or getting around easily.
- **Interests**: they stand to gain or lose different things, such as sales or a parking spot.
- **Information**: they know different things, such as what a survey found.
- **Role**: they have different jobs to do. A council has to weigh everyone; a business group speaks for its members.

Two more sources join this lesson.

> **Letter (Ines, a Wattle Creek resident).** I use a wheelchair and park in the accessible space outside the chemist on Saturdays. If the street closes, the nearest accessible parking is 400 metres away, up a hill. I like the idea of a market. I just need to be able to get to it.

> **Survey (Wattle Creek Youth Council).** We asked 200 residents online and at the library: "Should Main Street close to cars on Saturday mornings for a market?"

| Age | Support | Against | Unsure | Total |
|---|---|---|---|---|
| 12 to 17 | 30 | 5 | 5 | 40 |
| 18 to 64 | 60 | 30 | 10 | 100 |
| 65 and over | 20 | 30 | 10 | 60 |
| **All** | **110** | **65** | **25** | **200** |

## Predict: one of them must be wrong?

```step
stage: predict
insight: "Asking whether a disagreement means someone is wrong brings out Nib's idea before students meet the four reasons."
check:
  type: predict
  q: "The Gazette wants the market made permanent. Some traders want a loading zone and their sales checked first. What best explains the difference?"
  options:
    - "They care about different things and have different things at stake"
    - "One of them must be lying about the facts"
    - "The newspaper knows more, so the traders are wrong"
    - "They don't really disagree; they want the same thing"
  actual: "They care about different things (a lively street, or customers who drive in) and have different things at stake (the paper's town, the traders' sales). Neither has to be lying. They even agree on some points: both expect the market to bring crowds."
```

## Try: label each sentence

```step
stage: run
insight: "Labelling each sentence as what they want, why it matters to them, or a checkable fact pulls the two sources apart so they can be compared."
try: { playground: board, starter: "sources.yml#run", height: 520 }
check:
  type: board
  text: "Label each sentence from the Gazette and the Traders: what they want, why it matters to them, or a fact anyone could check."
  when: "n_right = 6"
  explain: "Each source has a want (make it permanent; keep a loading zone), a reason it matters to them (a lively town; customers who drive in) and, for the Gazette, facts it chose to include."
```

## Worked example: agree, disagree, why

```step
stage: investigate
insight: "Working through one comparison step by step shows the method, and catches Nib's belief that disagreement means lying."
tasks:
  - check:
      type: question
      q: "Ines likes the idea of a market but is worried about parking. The Gazette wants the market made permanent. Where do they agree?"
      options:
        - "Both like the idea of a market"
        - "Both think parking doesn't matter"
        - "Both want the street open to cars"
        - "They don't agree on anything"
      answer: 0
      feedback:
        - null
        - "Ines's whole letter is about parking, so she thinks it matters."
        - "The Gazette wants the street closed for the market."
        - "Read Ines's letter again: 'I like the idea of a market.'"
      explain: "Both like the idea of a market. They disagree on whether it can go ahead as planned, because Ines needs to be able to park nearby."
  - check:
      type: bug
      code: "working.txt#nib"
      text: "Nib is comparing Ines's letter and the Gazette editorial. Click the first line where Nib goes wrong."
      answer: 3
      fault: logic
      misconception: disagreement-means-lying
      explain: "Line 3: they disagree because they have different needs and care about different things, not because one is lying. Ines needs nearby parking; the Gazette wants a lively street."
    smaller:
      check:
        type: question
        q: "Can two people look at the same street and want different things for good reasons?"
        options:
          - "Yes, they can need or value different things"
          - "No, one of them must have the facts wrong"
          - "No, there is only one right answer for a street"
        answer: 0
        explain: "People can disagree honestly because they have different needs and values."
        feedback:
          - null
          - "Sometimes a disagreement is about facts, but often it's about needs and values."
          - "A street can be used in many ways. People weigh those uses differently."
```

```worked
\text{Agree} :: Ines and the Gazette both like the idea of a market.
\text{Disagree} :: The Gazette wants it as planned; Ines needs nearby parking first.
\text{Why} :: Different needs and values: getting to the shops, or a lively street.
```

### Where do they agree?

### Find Nib's mistake

## Vary: what's the reason?

```step
stage: modify
insight: "Sorting differences by their reason gives students words for explaining why views differ."
check:
  type: sort
  q: "Why do these views differ? Choose the main reason for each."
  options: ["Values", "Interests", "Information", "Role"]
  items:
    - ["The Gazette cares most about a lively street; Ines cares most about getting around", "Values", "They care about different things."]
    - ["The traders could lose sales from drivers; the growers could gain new customers", "Interests", "They stand to gain or lose different things."]
    - ["One trader has seen the survey; another hasn't heard about it", "Information", "They know different things."]
    - ["The council must weigh everyone's views; the Traders speak for their members", "Role", "They have different jobs to do."]
```

## Practise: comparing with the survey

```step
stage: practise
insight: "Comparing a person's letter with survey numbers shows that data and a single voice can both matter, for different reasons."
tasks:
  - check:
      type: question
      q: "In the survey, which age group had more people against the market than for it?"
      options:
        - "65 and over"
        - "18 to 64"
        - "12 to 17"
        - "None of them"
      answer: 0
      feedback:
        - null
        - "18 to 64: 60 support and 30 against, so more support it."
        - "12 to 17: 30 support and only 5 against."
        - "Look at 65 and over: 20 support and 30 against."
      explain: "In the 65 and over group, 30 were against and 20 supported it. Every other group had more support."
  - check:
      type: question
      q: "Most people in the survey support the market. Does that make Ines's letter less important?"
      options:
        - "No, it shows a need the numbers don't explain"
        - "Yes, she's only one person out of 200"
        - "Yes, letters don't count once there's a survey"
        - "No, because one letter outweighs any survey"
      answer: 0
      feedback:
        - null
        - "Being outnumbered doesn't make a practical need go away."
        - "A survey and a letter tell you different things. Both are worth reading."
        - "One letter doesn't outweigh everyone else either. It adds something the survey doesn't show."
      explain: "The survey shows how many people support the idea. Ines's letter shows a specific problem the council would need to solve."
```

### Who was against?

### A letter and a survey

## Make: compare two sources

```step
stage: make
insight: "Writing an agree, disagree and why comparison shows the student can use the method on their own."
check:
  type: reflect
  text: "In my own book I compared two of the Wattle Creek sources: one point where they agree, one where they disagree, and the main reason their views differ. A partner read it and gave feedback."
```

Write it in your own book or document, not on this page. Your partner or teacher reads it.

## Typical: who answered the survey?

```step
stage: make
tier: typical
insight: "Asking who answered a survey shows that data has a perspective too, through who was asked."
check:
  type: question
  q: "The survey asked people online and at the library. Whose views might it have missed?"
  options:
    - "People who don't go online or to the library"
    - "People aged 12 to 17, who weren't asked"
    - "No one, because 200 people answered"
    - "People who already support the market"
  answer: 0
  feedback:
    - null
    - "The table shows 40 people aged 12 to 17 did answer."
    - "A survey can have many answers and still miss some groups."
    - "110 people who support it answered, so they're well covered."
  explain: "A survey only hears from the people it reaches. Who was asked, and where, shapes the result."
```

## Wider: facts or values?

```step
stage: make
tier: wider
insight: "Separating disagreements about facts from disagreements about values shows which kind more evidence can settle, so it is discussion with no marked answer."
check:
  type: reasoning
  q: "Some disagreements are about facts (what will happen) and some are about values (what matters most). Give one example of each from Wattle Creek, and say which one more evidence could settle."
  paper: true
  models:
    - title: "One answer"
      text: "Facts: whether traders' sales go up or down during the trial. The trial could settle that. Values: whether a lively street matters more than easy parking. More evidence won't settle that on its own; people have to weigh it."
    - title: "A different answer"
      text: "Facts: how far the nearest accessible parking really is. Someone could measure it. Values: whether the market is worth some people being inconvenienced. That depends on what people think is fair."
  criteria:
    - "I gave a disagreement about facts and one about values."
    - "I said which one more evidence could settle, and why."
```

This is a discussion with no single right answer. Your teacher may ask your class to compare ideas.

Typical and wider steps are extras on the same idea. You do not need them to finish the lesson.
