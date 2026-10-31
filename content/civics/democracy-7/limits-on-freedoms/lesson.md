---
order: 2
unit: freedoms
title: Within the bounds of law
node: AC9HC7K02 n2
assumes: [AC9HC7K02 n1]
summary: "Democratic freedoms in Australia are real but not unlimited: they work within the bounds of law. Laws on defamation, urging violence and safety at marches stop one person's freedom from harming other people's safety, rights or reputation."
language: maths
hook: "You have freedom of speech and assembly in Australia. Does that mean you can post a false story that your neighbour is a thief, or hold a protest that blocks an ambulance on its way to hospital?"
---
In Lesson 1 you met the five democratic freedoms: speech, association, assembly, religion and movement.

Can you do anything at all in the name of those freedoms? No. In a democracy, freedoms work **within the bounds of law**.

That means the law sets public limits where one person's use of a freedom would seriously harm others:
- **other people's reputation**: harmful false claims about a person can break **defamation** law (the law that protects a person's good name);
- **public safety**: a protest must stay peaceful and must not block ambulances;
- **the safety of the community**: urging people to be violent is against the law.

## Predict: why set boundaries on a freedom?

```step
stage: predict
insight: "Committing first shows why a freedom needs legal boundaries when two people's rights collide."
check:
  type: predict
  q: "Why does Australian law put limits on democratic freedoms, such as defamation law on speech or peaceful-conduct rules on assembly?"
  options:
    - "So one person's freedom does not seriously harm other people"
    - "So people do not criticise the government too much"
    - "Because freedoms only apply on election day"
    - "Because most people would misuse their freedoms"
  actual: "Legal boundaries exist so one person's freedom is not used to harm another person's safety, rights or reputation."
```

## Try: match each freedom to a legal limit and its reason

```step
stage: run
insight: "Matching a legal limit on each freedom to its purpose shows that legitimate limits protect other people, rather than silencing fair debate."
check:
  type: match
  q: "Match each freedom to an example of a legal limit in Australia and why that limit exists."
  pairs:
    - ["Freedom of speech", "Defamation law: harmful false claims about a person can break the law"]
    - ["Freedom of assembly", "Safety laws: a protest must stay peaceful and keep emergency routes clear"]
    - ["Freedom of association", "Joining a group never makes it legal for members to commit crimes"]
    - ["Freedom of movement", "Road rules: you need a licence to drive, and courts can set bail conditions"]
    - ["Freedom of religion", "Laws that protect people from harm still apply, whatever someone believes"]
```

Notice what all five limits have in common: they do **not** ban the freedom itself. You can still criticise the government, join unions and clubs, march peacefully, practise your faith and travel across Australia. The boundary sits where an action harms others.

## Worked example: criticising a policy vs defaming a person

```step
stage: investigate
insight: "Comparing fair political speech with defamation and unsafe assembly shows where the legal line sits, and catches Nib's 'no limits ever' slip."
tasks:
  - check:
      type: question
      q: "In the made-up town of Wattle Creek, Jordan writes a newspaper letter saying: 'The council's new parking fees are too high and will hurt local shops.' Meanwhile, Alex posts a false story online saying that a named shopkeeper steals from customers. How does the law treat these two posts?"
      options:
        - "Jordan's opinion is fine; Alex's false claim could break defamation law"
        - "Both could break defamation law, because both make someone look bad"
        - "Both are fine, because freedom of speech covers anything you say"
        - "Jordan's letter could be illegal for criticising the council; Alex's is fine"
      answer: 0
      feedback:
        - null
        - "An honest opinion about a council policy is normal political comment, not defamation."
        - "Freedom of speech has limits. A harmful false claim about a person can break defamation law."
        - "That is backwards. Criticising a council policy is normal political speech; a false claim about a person can be defamation."
      explain: "Criticising a policy is part of democratic debate. Spreading a harmful false claim about a person can cross into defamation."
  - check:
      type: bug
      code: "working.txt#nib"
      text: "Nib is explaining how freedom of speech and assembly work in the made-up town of Wattle Creek. Click the first line where Nib's thinking goes wrong."
      answer: 3
      fault: logic
      misconception: freedoms-are-unlimited
      explain: "Line 3: Nib thinks democratic freedoms have no legal limits at all. In Australia, freedoms operate within the bounds of law so that one group's assembly does not block emergency hospital care and one person's speech does not defame a neighbour."
    smaller:
      check:
        type: question
        q: "If a protest group wants to march in town, why can the law require them to keep the hospital's ambulance driveway clear?"
        options:
          - "To keep patients safe while the group still holds its march"
          - "To keep political views away from public buildings"
          - "Because marches are only allowed on private land"
        answer: 0
        explain: "Keeping the ambulance driveway clear protects life and safety while leaving room for peaceful assembly nearby."
        feedback:
          - null
          - "The group can still march and say what it thinks. The rule is about keeping the driveway clear."
          - "Peaceful marches on public streets are allowed. The limit is about safety."
  - check:
      type: question
      q: "What makes a legal limit on a freedom reasonable in a democracy, rather than an excuse to silence people?"
      options:
        - "It is in a public law, applies to everyone and protects others from harm"
        - "It is popular with most voters at the time"
        - "A minister decides it on the day, depending on the protest"
        - "It applies only to groups the government disagrees with"
      answer: 0
      feedback:
        - null
        - "A popular rule can still be unfair. People often disagree about exactly where limits should sit, but a fair limit is set out in law and protects others."
        - "Limits need to be in a law that everyone can read, and courts can check them."
        - "Laws must apply equally to everyone, not target people with unpopular views."
      explain: "A fair limit is written in a public law, applies to everyone, and protects safety or rights without shutting down peaceful debate. People can still disagree about where a particular limit should sit."
```

### Inside and outside the bounds of law

```worked
\text{Protected freedom} :: Holding a peaceful rally in the town square to oppose a new tax -> Freedom of assembly and speech.
\text{Legal boundary} :: Blocking the hospital ambulance bay or throwing stones -> Limited by public safety and criminal law.
\text{Why the boundary exists} :: To protect other people's safety and rights while keeping peaceful protest open.
```

Now: how does the law separate policy criticism from defamation, where did Nib go wrong, and what makes a limit legitimate?

### Find Nib's mistake

### What makes a limit fair?

## Vary: inside the bounds or across the line?

```step
stage: modify
insight: "Sorting concrete cases into protected exercise of a freedom versus crossing a legal boundary."
check:
  type: sort
  q: "Is each made-up action a protected use of a freedom, or does it cross a legal limit?"
  options: ["Protected democratic freedom", "Crosses a legal boundary"]
  items:
    - ["A student group holds a peaceful Saturday march on an agreed route for cleaner rivers", "Protected democratic freedom", "A peaceful march with safe traffic arrangements is protected."]
    - ["A speaker at a rally urges the crowd to smash the windows of shops along the street", "Crosses a legal boundary", "Inciting violence and property damage is unlawful and harms others."]
    - ["A citizen writes to their local MP arguing that a government bill is unfair", "Protected democratic freedom", "Questioning and criticising proposed laws is core political speech."]
    - ["A blogger posts a false story that a local teacher stole school money", "Crosses a legal boundary", "A harmful false claim about a person can break defamation law."]
```

## Practise: explain the balance

```step
stage: practise
insight: "Explaining both the freedom and the reason for its legal boundary in a new scenario."
tasks:
  - check:
      type: question
      q: "Sam (made up) says: 'If the law can stop me spreading false rumours about someone, we don't have free speech at all.' What is the best reply?"
      options:
        - "You can still share opinions; the limit is on harmful false claims about people"
        - "Sam is right: any limit at all means the freedom is gone"
        - "The limit is fine because it only covers posts, not what you say out loud"
        - "The limit is fine because free speech mainly protects politicians"
      answer: 0
      feedback:
        - null
        - "Democracies balance freedoms with limits so one person's freedom does not wreck another person's good name or safety."
        - "Defamation law can cover spoken words as well as writing and posts."
        - "Free speech protects everyone, including ordinary citizens criticising politicians."
      explain: "A freedom with limits is still a real freedom: you can argue, criticise and debate, while other people are protected from harmful false claims."
  - check:
      type: question
      q: "A citizen argues that a law goes further than the Constitution allows. Who decides?"
      options:
        - "The courts, with the High Court at the top"
        - "The Prime Minister and Cabinet, who run the government"
        - "The Senate, by voting on the law again"
        - "The Governor-General, who signs every new law"
      answer: 0
      feedback:
        - null
        - "The government cannot be the judge of its own limits. That job belongs to the courts."
        - "The Senate votes on bills, but only courts decide whether a law breaks the Constitution."
        - "The Governor-General signs laws, but does not decide legal disputes about them."
      explain: "Independent courts, with the High Court at the top for questions about the Constitution, decide whether a law stays within its limits."
```

### Sam's claim about speech

### Who checks the boundaries?

## Make: one freedom and its boundary

```step
stage: make
insight: "Explaining one freedom, one legal limit on it, and why that limit exists puts the whole balance in your own words."
check:
  type: reflect
  text: "In my own book I chose one of the five democratic freedoms, gave an example of how citizens use it, described one legal limit on that freedom in Australia, and explained why that limit exists. A partner read it and gave feedback."
```

Write it in your own book or document, not on this page. Your partner or teacher reads it.

## Typical: how a peaceful assembly works with the law

```step
stage: make
tier: typical
insight: "Telling police about a march ahead of time is for safety and traffic, not for judging the message. The rules differ between states and territories."
check:
  type: question
  q: "In many places, a group planning a big street march tells the police ahead of time. What is that for?"
  options:
    - "To plan traffic and keep marchers and other people safe"
    - "To let police decide whether the group's message is acceptable"
    - "To check that every marcher is old enough to vote"
    - "To stop marches happening on busy streets"
  answer: 0
  feedback:
    - null
    - "Safety rules are about traffic and order, not whether police agree with the message."
    - "Peaceful assembly is open to everyone, including young people."
    - "The point is to plan so marches can go ahead safely, even on busy streets."
  explain: "Safety and traffic arrangements help freedom of assembly and freedom of movement work side by side."
```

The exact rules (whether you must tell police, how far ahead, and what happens if you do not) are different in each state and territory.

## Wider: when the High Court tests a limit on political speech

```step
stage: make
tier: wider
insight: "Because the Constitution says Parliament is chosen by the people, the High Court has found that Parliament cannot freely shut down political discussion."
check:
  type: question
  q: "The Constitution says members of Parliament are 'directly chosen by the people'. From this, the High Court has found an unwritten (implied) freedom to discuss politics. What could happen to a law that banned discussing government policies?"
  options:
    - "The High Court could rule the law invalid"
    - "Nothing, because the freedom is not written down"
    - "The High Court would rewrite the Constitution to fix it"
    - "The law would apply only to members of Parliament"
  answer: 0
  feedback:
    - null
    - "An implied freedom still counts. The court reads it from what the Constitution's words require."
    - "Courts decide what the Constitution means; only voters at a referendum can change its words."
    - "The implied freedom protects everyone's political discussion, not only MPs."
  explain: "For voters to make a real choice at elections, they need to be free to discuss politics. The court asks whether a law limits that discussion without a good enough reason."
```

Typical and wider steps are extras on the same idea. You do not need them to finish the lesson.
