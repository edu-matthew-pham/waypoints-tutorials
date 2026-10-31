---
order: 2
unit: law
title: The same law for everyone
node: AC9HC7K03 n2
assumes: [AC9HC7K03 n1]
summary: "Under the rule of law, laws are public, known in advance and apply to everyone, including the police and the government. A fair criminal trial rests on the presumption of innocence and the burden of proof: the person charged does not have to prove anything, and the prosecution has to prove guilt beyond reasonable doubt. The rule of law is a principle Australia aims for; the next lessons look at how courts try to make it real."
language: maths
hook: "Someone is charged with stealing. Should they have to prove they didn't do it?"
---
The **rule of law** is the principle that:

- laws are public and known in advance, so people can follow them;
- the same laws apply to everyone, including the police, ministers and the Prime Minister;
- people can only be punished for breaking a law, after a fair process.

The rule of law is something Australia aims for. In practice it can fall short, which is why courts, lawyers and fair procedures matter.

In this lesson, Wattle Creek and its people are made up. The principles are real.

## Predict: who has to prove it?

```step
stage: predict
insight: "Asking who must prove what, before any terms, brings out the common belief that a person charged has to prove their innocence."
check:
  type: predict
  q: "Morgan, an adult, is charged with taking a watch from a Wattle Creek market stall. In court, who has to prove what?"
  options:
    - "The prosecution has to prove Morgan did it"
    - "Morgan has to prove they didn't do it"
    - "Both sides have to prove their story equally"
    - "The judge has to find out what really happened"
  actual: "The prosecution has to prove Morgan did it. Morgan doesn't have to prove anything. Until guilt is proved, Morgan is treated as innocent. The judge runs a fair trial but doesn't investigate the case."
```

## Try: match each principle

```step
stage: run
insight: "Matching the principles to plain meanings gives students the terms before the worked example applies them."
check:
  type: match
  q: "Match each principle of justice to what it means."
  pairs:
    - ["Rule of law", "Laws are public and apply to everyone, the government included"]
    - ["Presumption of innocence", "A person charged is treated as innocent until proved guilty"]
    - ["Burden of proof", "The side that brings the charge has to prove it"]
    - ["Equality before the law", "The same laws apply in the same way to every person"]
    - ["Right to a lawyer", "A person charged can have someone to argue their case"]
```

In a criminal trial, the prosecution has to prove guilt **beyond reasonable doubt**. That means the evidence must leave no sensible reason to doubt that the person did it. A high bar protects people from being punished for something they didn't do.

## Worked example: Morgan's trial

```step
stage: investigate
insight: "Walking through one made-up trial shows the presumption of innocence and the burden of proof at work, and catches Nib's reversed burden."
tasks:
  - check:
      type: question
      q: "At Morgan's trial, the prosecution shows a blurry video of someone in a grey jacket near the stall. Is that enough to find Morgan guilty?"
      options:
        - "No, it leaves reasonable doubt that the person was Morgan"
        - "Yes, unless Morgan can show where they were that day"
        - "Yes, because the police would only charge someone guilty"
        - "No, because videos can never be used as evidence in court"
      answer: 0
      feedback:
        - null
        - "Morgan doesn't have to prove where they were. The prosecution has to prove it was Morgan."
        - "Being charged isn't proof. Police charge people they suspect, and the court decides."
        - "Videos can be evidence. This one just doesn't show it was Morgan."
      explain: "The prosecution must prove guilt beyond reasonable doubt. A blurry video of someone in a grey jacket leaves room to doubt it was Morgan."
  - check:
      type: bug
      code: "working.txt#nib"
      text: "Nib is explaining Morgan's trial. Click the first line where Nib goes wrong."
      answer: 3
      fault: logic
      misconception: accused-must-prove-innocence
      explain: "Line 3: Morgan doesn't have to prove anything. The prosecution brought the charge, so it has to prove guilt beyond reasonable doubt."
    smaller:
      check:
        type: question
        q: "In a criminal trial, who brings the charge to court, and so who has to prove it?"
        options:
          - "The prosecution brings it, so the prosecution proves it"
          - "The person charged, so they must prove their innocence"
          - "The judge, so the judge proves what happened"
        answer: 0
        explain: "The side that brings the charge carries the burden of proof."
        feedback:
          - null
          - "The person charged didn't bring the case. They are treated as innocent until it is proved."
          - "The judge stays neutral and runs a fair trial. The prosecution brings the charge."
```

```worked
\text{Charged} :: Morgan is charged, but is still treated as innocent.
\text{Burden of proof} :: The prosecution has to prove Morgan took the watch.
\text{The standard} :: Beyond reasonable doubt: a blurry video isn't enough.
\text{Morgan's side} :: Morgan can have a lawyer and doesn't have to prove anything.
```

### Is the video enough?

### Find Nib's mistake

## Vary: fair or not?

```step
stage: modify
insight: "Sorting steps in made-up cases tests whether students can apply the principles, not just name them."
check:
  type: sort
  q: "Which of these fit the principles of justice, and which break them?"
  options: ["Fits the principles", "Breaks the principles"]
  items:
    - ["Morgan is told the charge and can have a lawyer", "Fits the principles", "A person charged must know the charge and can have someone argue their case."]
    - ["A minister is fined for speeding, just like anyone else", "Fits the principles", "The rule of law means the law applies to the government too."]
    - ["A new law is made to punish something done last month, before it was illegal", "Breaks the principles", "Laws must be known in advance, so people can follow them."]
    - ["A court finds someone guilty because they 'looked nervous'", "Breaks the principles", "Guilt has to be proved by evidence beyond reasonable doubt."]
    - ["Police arrest a councillor's friend but let the councillor go for the same thing", "Breaks the principles", "The same law must apply in the same way to everyone."]
```

## Practise: what the principles mean

```step
stage: practise
insight: "Telling the principles apart from their common confusions checks the hinge before the court lessons."
tasks:
  - check:
      type: question
      q: "What does the presumption of innocence mean?"
      options:
        - "A person charged is treated as innocent until guilt is proved"
        - "Police aren't allowed to charge anyone without a confession first"
        - "A person charged must show their alibi to be treated as innocent"
        - "A person can't be found guilty if they say they didn't do it"
      answer: 0
      feedback:
        - null
        - "Police can charge someone they suspect. The presumption is about how they are treated in court."
        - "The person charged doesn't have to show anything. The prosecution has to prove guilt."
        - "Saying you didn't do it isn't enough on its own. The question is whether guilt is proved."
      explain: "The presumption of innocence means a person charged is treated as innocent until the prosecution proves guilt."
  - check:
      type: question
      q: "A made-up country has very strict laws, but its ministers don't have to obey them. Does it have the rule of law?"
      options:
        - "No, because the law has to apply to the government too"
        - "Yes, because it has many laws and enforces them strictly"
        - "Yes, because the ministers wrote the laws in the first place"
        - "No, because strict laws are never allowed under the rule of law"
      answer: 0
      feedback:
        - null
        - "Having lots of strict laws isn't the rule of law. The test is whether everyone, the rulers included, has to obey them."
        - "Writing the laws doesn't put anyone above them. Everyone has to obey."
        - "Laws can be strict. The problem is that the ministers are above them."
      explain: "The rule of law means the same law applies to everyone, including those in power. Strict laws that the rulers can ignore are not the rule of law."
```

### Presumption of innocence

### Rule of law or not?

## Make: two principles that protect you

```step
stage: make
insight: "Explaining two principles and who each protects shows the student can use them, not just match them."
check:
  type: reflect
  text: "In my own book I explained the rule of law and two principles of a fair trial, and why each one protects a person who is charged. A partner read it and gave feedback."
```

Write it in your own book or document, not on this page. Use Morgan's made-up case or one of your own. Your partner or teacher reads it.

## Typical: the minister's fine

```step
stage: make
tier: typical
insight: "A made-up case about a minister shows the rule of law reaching those in power."
check:
  type: question
  q: "A made-up minister is caught driving through a red light. Their staff say a minister is too busy to be fined. What does the rule of law say?"
  options:
    - "The minister is fined like anyone else"
    - "The minister is excused because their job is important"
    - "The minister decides whether the fine is fair"
    - "Only the Prime Minister can decide about the fine"
  answer: 0
  feedback:
    - null
    - "No job puts someone above the law. That is the point of the rule of law."
    - "People don't get to judge their own case. That is what courts are for."
    - "The Prime Minister is also under the law, and can't excuse someone from it."
  explain: "Under the rule of law, the same road rules apply to a minister as to anyone else."
```

## Wider: when the government ignores a court

```step
stage: make
tier: wider
insight: "A made-up conflict between a council and a court shows why governments obeying courts is part of the rule of law."
check:
  type: question
  q: "A court rules that a made-up council broke the law when it closed a park without the notice the law requires. The council carries on anyway. Which principle is it breaking?"
  options:
    - "The rule of law: the council must obey the court"
    - "The presumption of innocence: the council should be treated as innocent"
    - "The burden of proof: the people who complained should have proved more"
    - "None, because councils make their own laws and can ignore courts"
  answer: 0
  feedback:
    - null
    - "The presumption of innocence is for people charged with crimes, and this case is already decided."
    - "The court has already decided. The question now is whether the council obeys."
    - "Councils make local rules under state laws, and they must obey the law and the courts like everyone else."
  explain: "Under the rule of law, governments at every level must obey the law, and obey the courts when they rule that a government broke it."
```

Typical and wider steps are extras on the same idea. You do not need them to finish the lesson.
