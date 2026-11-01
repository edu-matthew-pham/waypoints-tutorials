---
order: 4
unit: participation
title: Formal and active citizenship
node: [AC9HC7K02 n4, AC9HC7S04 n2]
assumes: [AC9HC7K02 n3]
summary: "Formal citizenship is your legal membership of a country, with rights such as a passport and duties such as voting and jury service. Active citizenship is taking part in your community and democracy. Not everyone in Australia has always had the same rights of formal citizenship."
language: maths
hook: "In a made-up example, Orla and Dev are both Australian citizens. Orla only thinks about it when she renews her passport. Dev votes, volunteers with the local bushfire brigade and helps run a youth group. What is the difference between them?"
---
People use the word **citizenship** in two connected ways.

1. **Formal citizenship** is your **legal status** as a member of a country. In Australia it comes with **rights**, such as getting an Australian passport, voting and standing for parliament. It also comes with **responsibilities**, such as obeying the law, enrolling and voting once you are 18, and serving on a jury if you are called.
2. **Active citizenship** is how people **take part** in their community and democracy: staying informed, volunteering, joining groups, speaking up and working with others to fix problems.

Not everyone in Australia has always had the same rights of formal citizenship. The Australian Electoral Commission records that from 1962 Commonwealth law gave all First Nations people the right to enrol and vote in federal elections. [Read the AEC's electoral milestones for Indigenous Australians](https://www.aec.gov.au/indigenous/milestones.htm). Your teacher will share how First Nations people tell this history in their own words.

## Predict: legal status or taking part?

```step
stage: predict
insight: "Committing first separates formal legal membership from active participation in civic life."
check:
  type: predict
  q: "What is the main difference between *formal citizenship* and *active citizenship*?"
  options:
    - "Formal is your legal status, with rights and duties; active is taking part in community life"
    - "Formal is for federal elections; active is for local council elections"
    - "They mean the same thing: anyone with a passport is an active citizen"
    - "Active citizenship is only for people who are not legal citizens yet"
  actual: "Formal citizenship is legal membership of the country; active citizenship is how people take part in civic and community life."
```

## Try: sort formal and active citizenship

```step
stage: run
insight: "Sorting legal rights and duties from everyday civic engagement makes the two categories clear."
check:
  type: sort
  q: "Sort each item into *Formal citizenship* (legal status, rights and duties) or *Active citizenship* (taking part in the community and democracy)."
  options: ["Formal citizenship", "Active citizenship"]
  items:
    - ["Being an Australian citizen by birth, by descent or by applying and being granted it", "Formal citizenship", "This is the legal status itself."]
    - ["Being allowed to get an Australian passport and come back to Australia", "Formal citizenship", "A passport is a legal right that comes with formal citizenship."]
    - ["Having to enrol and vote at federal elections once you turn 18", "Formal citizenship", "The law requires it, so it is part of formal citizenship."]
    - ["Replanting a riverbank on weekends with a local landcare group", "Active citizenship", "Volunteering to improve the community is active citizenship."]
    - ["Starting a petition for a better bus service in your suburb", "Active citizenship", "Working with others on a public problem is active citizenship."]
    - ["Reading about a local issue and sending ideas to council", "Active citizenship", "Taking an informed part in decisions is active citizenship."]
```

The two connect: **formal citizenship** gives you legal standing and a vote, and **active citizenship** is what keeps a community and a democracy going day to day.

## Worked example: rights have changed over time

```step
stage: investigate
insight: "Seeing that formal rights have changed over time, and that people without a vote can still take part, catches Nib's mistake."
tasks:
  - check:
      type: question
      q: "Have all adults in Australia always had the same right to vote in federal elections?"
      options:
        - "No: the law has changed over time about who could enrol and vote"
        - "Yes: every adult has had the same vote since 1901"
        - "No, but it changed only once, at the 1967 referendum"
        - "Yes: the Constitution gave every person a vote in 1901"
      answer: 0
      feedback:
        - null
        - "Federal voting rules have changed several times since 1901. The AEC's milestones page lists the changes."
        - "A very common mix-up. The AEC records that the federal voting law changed in 1962. The 1967 referendum changed the Constitution, which is a different thing."
        - "The Constitution does not give everyone a vote. Parliament's laws decide who can enrol."
      explain: "Who can vote in federal elections is set by laws Parliament passes, and those laws have changed over time. The AEC records the changes on its milestones page."
  - check:
      type: bug
      code: "working.txt#nib"
      text: "Nib is summing up formal and active citizenship. Click the first line where Nib's thinking goes wrong."
      answer: 3
      fault: logic
      misconception: formal-equals-active-citizenship
      explain: "Line 3: Nib mixes up formal citizenship (legal status, such as holding a passport) with active citizenship (taking part in community life). Line 4 is true: you can take part before you can vote."
    smaller:
      check:
        type: question
        q: "If someone is an Australian citizen with a passport, does that mean they are taking part in their community?"
        options:
          - "No: the passport shows legal status, and taking part is a separate choice"
          - "Yes: holding a passport is what active citizenship means"
          - "Yes: voting is compulsory, so every citizen takes part every week"
          - "No: only people born overseas can be active citizens"
        answer: 0
        explain: "Formal citizenship is the legal status. Active citizenship is choosing to take part."
  - check:
      type: question
      q: "In a made-up town, students aged 14 want a pedestrian crossing near their school. None of them can vote yet. What can they do?"
      options:
        - "Collect signatures, write to the council and speak at a council meeting"
        - "Nothing: only people on the electoral roll can ask for change"
        - "Wait until they turn 18, because petitions need voters to sign"
        - "Ask the High Court to order the council to build it"
      answer: 0
      feedback:
        - null
        - "Anyone can sign a petition, write to council or speak at a public meeting. You don't need to be on the roll."
        - "Many petitions accept anyone who signs. Writing and speaking up don't need a vote either."
        - "Courts decide legal disputes. Asking for a crossing is a job for the council, and people persuade councils by taking part."
      explain: "You don't need a vote to be an active citizen. Petitions, letters and public meetings are open to anyone."
```

### Formal status and taking part

```worked
\text{Formal citizenship} :: Legal membership of Australia -> Rights (passport, vote, stand for parliament) + Duties (obey laws, vote once 18, jury service).
\text{Active citizenship} :: Taking part -> Volunteering, petitions, writing to council, joining groups, staying informed.
\text{Change over time} :: Laws about who can vote have changed; the AEC records that from 1962 all First Nations people could enrol and vote in federal elections.
```

Now: how do formal and active citizenship differ, where did Nib go wrong, and how can people without a vote still take part?

### Find Nib's mistake

### Taking part without a vote

## Vary: rights, responsibilities and taking part

```step
stage: modify
insight: "Distinguishing the legal rights and responsibilities of formal citizenship from active community participation."
check:
  type: sort
  q: "Sort each example into *Legal right*, *Legal responsibility* or *Voluntary active citizenship*."
  options: ["Legal right", "Legal responsibility", "Voluntary active citizenship"]
  items:
    - ["Obeying Australia's laws", "Legal responsibility", "Every citizen is required to obey the law."]
    - ["Serving on a jury when you are called", "Legal responsibility", "Jury service is a legal duty for people on the electoral roll."]
    - ["Getting an Australian passport", "Legal right", "Citizens have the right to an Australian passport."]
    - ["Helping organise a town clean-up day", "Voluntary active citizenship", "Nobody is required to do it. Choosing to help is active citizenship."]
```

## Practise: explain formal and active citizenship

```step
stage: practise
insight: "Putting both parts of the endpoint together in a reasoned explanation."
check:
  type: reasoning
  q: "Explain the difference between formal citizenship and active citizenship, and give one way access to citizenship rights in Australia has changed over time."
  paper: true
  models:
    - title: "A strong answer"
      text: "Formal citizenship is your legal status as a member of Australia. It gives you rights, like getting a passport and voting, and duties, like obeying the law and jury service. Active citizenship is how you take part to help your community and democracy, like volunteering or starting a petition. Not everyone has always had the same rights: the AEC records that all First Nations people could enrol and vote in federal elections from 1962."
    - title: "A different answer that also works"
      text: "Formal citizenship is the legal side of being a citizen: the status, the rights and the legal duties. Active citizenship is choosing to take part, and you can do it before you can vote, like writing to the council. Who could vote in federal elections has changed over time, for example the law change in 1962 recorded by the AEC."
  criteria:
    - "I defined formal citizenship (legal status, rights and responsibilities)."
    - "I defined active citizenship (taking part in the community and democracy) and showed how it differs."
    - "I gave one way access to citizenship rights in Australia has changed over time."
```

## Make: in your own book

```step
stage: make
insight: "Writing the distinction between formal and active citizenship and how rights have changed in your own book completes the course."
check:
  type: reflect
  text: "In my own book I explained the difference between formal citizenship and active citizenship with an example of each, and one way access to citizenship rights in Australia has changed. A partner read it and gave feedback."
```

Write it in your own book or document, not on this page. Your partner or teacher reads it.

## Typical: how someone becomes an Australian citizen

```step
stage: make
tier: typical
insight: "Australian law sets out how formal citizenship is gained: by birth, by descent, or by applying and being granted it (conferral) and making the pledge."
check:
  type: question
  q: "When someone becomes an Australian citizen at a citizenship ceremony, what do they promise in the pledge?"
  options:
    - "Loyalty to Australia and its people, and to respect its rights and uphold its laws"
    - "To give up free speech and never criticise the government"
    - "To vote for whichever party is in government at the time"
    - "To follow one official national religion chosen by Parliament"
  answer: 0
  feedback:
    - null
    - "The pledge promises to respect Australia's rights and liberties, and free speech is one of them."
    - "Citizens can vote for any candidate or party, in secret."
    - "Australia has no official religion. Section 116 of the Constitution stops the Commonwealth from setting one up."
  explain: "The pledge ties legal citizenship to Australia's democratic beliefs, its rights and liberties, and its laws."
```

## Wider: changing the Constitution

```step
stage: make
tier: wider
insight: "Only voters can change the Constitution, at a referendum, which is formal citizenship at its most direct."
check:
  type: question
  q: "What does a referendum need to pass and change the Australian Constitution?"
  options:
    - "A national majority, plus a majority in four of six states"
    - "A majority of voters across Australia, and nothing else"
    - "A vote of the Prime Minister and Cabinet"
    - "A decision of the High Court"
  answer: 0
  feedback:
    - null
    - "It also needs majorities in most states (four of six), so a few big states can't decide it alone."
    - "The government can propose a change, but only voters can approve it."
    - "The High Court interprets the Constitution. It cannot change its words."
  explain: "Section 128 of the Constitution says a change needs a national majority of voters and a majority in at least four states. That's why it's often called a double majority."
```

Typical and wider steps are extras on the same idea. You do not need them to finish the lesson.
