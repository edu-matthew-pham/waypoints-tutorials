---
order: 3
unit: law
title: Courts and a fair trial
node: AC9HC7K03 n3
assumes: [AC9HC7K03 n2]
summary: "Australia's courts form a ladder. Cases start at the level that fits how serious they are, and a higher court can check a lower court's decision on appeal, with the High Court at the top. In a trial, the judge runs it fairly and explains the law, a jury of ordinary citizens (in most serious criminal trials) decides whether guilt is proved, witnesses give evidence, and each side can have a lawyer."
language: maths
explainDiagram:
  ref: diagrams.mmd#ladder
  alt: "State or territory courts go from a local or Magistrates Court, to a District or County Court in most states, to the Supreme Court. Federal courts are the Federal Circuit and Family Court and the Federal Court. Both lead up to the High Court of Australia."
  caption: "Australia's courts"
  role: explain
hook: "Why doesn't every case go straight to the High Court?"
---
Australia has many courts, arranged like a ladder:

- **Lower courts** (a local or Magistrates Court) hear most cases, such as minor crimes and smaller disputes.
- **Higher courts** hear more serious cases, and **appeals**. An appeal is asking a higher court to check whether a lower court got the law or the decision wrong.
- The **High Court of Australia** is at the top. It hears appeals from all the other courts, if it agrees to, and decides cases about the Constitution.

States and territories have their own courts, and there are federal courts for federal laws. Both lead up to the High Court.

In this lesson, Wattle Creek and its people are made up. The courts are real.

## Predict: where does it start?

```step
stage: predict
insight: "Asking where a small case starts brings out the idea that important courts hear everything, before the ladder is shown."
check:
  type: predict
  q: "Jess, an adult in Wattle Creek, is charged with damaging a neighbour's letterbox. Which court is the case most likely to start in?"
  options:
    - "A local or Magistrates Court"
    - "The state's Supreme Court"
    - "The High Court of Australia"
    - "Whichever court Jess chooses"
  actual: "A local or Magistrates Court. Lower courts hear most cases, including minor crimes like this one. Higher courts hear serious cases and appeals, and the High Court hears only a small number of cases it agrees to take."
```

## Try: climb the ladder

```step
stage: run
insight: "Ordering a made-up case's path up the ladder shows that appeals go one level up at a time, to the High Court at the top."
check:
  type: parsons
  code: "working.txt#appeal"
  text: "A made-up case starts in a local court and is appealed all the way up. Put its steps in order. This is a list of ideas, not computer code."
  explain: "A case starts low and can be appealed up a level at a time. The High Court only hears the appeal if it agrees to."
```

## Worked example: who does what in a trial?

```step
stage: investigate
insight: "Separating the roles in one made-up jury trial shows who decides the facts and who decides the law and the sentence, and catches Nib's mix-up."
diagram:
  ref: diagrams.mmd#ladder
  alt: "State or territory courts go from a local or Magistrates Court, to a District or County Court in most states, to the Supreme Court. Federal courts are the Federal Circuit and Family Court and the Federal Court. Both lead up to the High Court of Australia."
  caption: "Australia's courts"
  role: explain
tasks:
  - check:
      type: match
      q: "Morgan's made-up trial (from the last lesson) is held in front of a jury. Match each person to their job."
      pairs:
        - ["Judge", "Runs the trial fairly, explains the law, and sentences if guilty"]
        - ["Jury", "Ordinary citizens who decide whether guilt is proved"]
        - ["Witness", "Tells the court what they saw or know"]
        - ["Prosecution", "Brings the charge and has to prove it"]
        - ["Defence lawyer", "Argues the case for the person charged"]
  - check:
      type: bug
      code: "working.txt#nib"
      text: "Nib is explaining Morgan's trial. Click the first line where Nib goes wrong."
      answer: 3
      fault: logic
      misconception: jury-decides-law-and-sentence
      explain: "Line 3: the jury decides only whether guilt is proved. If the verdict is guilty, the judge decides the punishment (the sentence)."
    smaller:
      check:
        type: question
        q: "In a jury trial, who decides whether the person is guilty, and who decides the punishment?"
        options:
          - "The jury decides guilty or not; the judge decides the punishment"
          - "The judge decides both, and the jury only listens"
          - "The jury decides both, and the judge only keeps order"
        answer: 0
        explain: "The jury decides the facts: guilty or not guilty. The judge decides the law and the sentence."
        feedback:
          - null
          - "The jury does more than listen: its verdict decides whether guilt is proved."
          - "The judge does more than keep order: the judge explains the law and sets the sentence."
```

A **fair trial** also needs **due process**: the same fair steps are followed every time. The person charged hears the evidence against them, can question witnesses, and can have a lawyer. The judge doesn't take sides.

### Who does what?

### Find Nib's mistake

## Vary: which court?

```step
stage: modify
insight: "Placing made-up cases on the ladder checks that students match a case to its level and know what an appeal is."
check:
  type: sort
  q: "Where would each made-up case most likely be heard?"
  options: ["Lower court", "Higher court", "High Court"]
  items:
    - ["A first charge of damaging a letterbox", "Lower court", "Minor crimes start in a local or Magistrates Court."]
    - ["A serious criminal trial in front of a jury", "Higher court", "Serious trials with juries are heard in a District, County or Supreme Court."]
    - ["An appeal saying a Magistrates Court got the law wrong", "Higher court", "Appeals go to a higher court, one level up."]
    - ["A case saying a federal law goes against the Constitution", "High Court", "The High Court decides cases about the Constitution."]
    - ["A final appeal from a state's Supreme Court, which the High Court agrees to hear", "High Court", "The High Court is the last court of appeal for every case in Australia."]
```

## Practise: appeals and juries

```step
stage: practise
insight: "Telling an appeal from a political request, and a juror's job from a judge's, checks the two ideas most often mixed up."
tasks:
  - check:
      type: question
      q: "Jess is found guilty in the local court and thinks the magistrate got the law wrong. What can Jess do?"
      options:
        - "Appeal to a higher court to check the decision"
        - "Ask the Prime Minister to change the verdict"
        - "Ask the jury to meet again and vote again"
        - "Take the case straight to the High Court"
      answer: 0
      feedback:
        - null
        - "Courts are independent. The Prime Minister can't change a court's decision."
        - "Local courts don't have juries. A magistrate decided this case."
        - "Appeals usually go up one level at a time. The High Court is the last step."
      explain: "An appeal asks a higher court to check whether a lower court got the law or the decision wrong."
  - check:
      type: question
      q: "Why are ordinary citizens asked to be jurors in serious criminal trials?"
      options:
        - "So people from the community decide whether guilt is proved"
        - "So the judge doesn't have to explain the law to anyone"
        - "So jurors can choose the punishment they think is fair"
        - "So the government can pick who decides each case"
      answer: 0
      feedback:
        - null
        - "The judge still explains the law to the jury. That's part of the judge's job."
        - "The judge decides the sentence. The jury decides guilty or not guilty."
        - "Jurors are chosen at random from the electoral roll, not picked by the government."
      explain: "A jury means the community, not the government or one judge alone, decides whether guilt has been proved."
```

### What can Jess do?

### Why a jury?

## Make: the ladder and a fair trial

```step
stage: make
insight: "Drawing the ladder and adding a fair-trial idea at each step joins the two halves of the lesson."
check:
  type: reflect
  text: "In my own book I drew Australia's court ladder from a local court to the High Court, checked it against the diagram, and wrote one thing that makes a trial fair. A partner read it and gave feedback."
```

Draw it in your own book or document, not on this page. Your partner or teacher reads it.

## Typical: why random jurors?

```step
stage: make
tier: typical
insight: "Asking why jurors are chosen at random links the jury to fairness and independence."
check:
  type: question
  q: "Jurors are picked at random from people on the electoral roll. Why random?"
  options:
    - "So no one can choose jurors who would favour one side"
    - "So only people who know the law end up on a jury"
    - "So jurors who know the person charged can be chosen"
    - "So the jury always agrees with the judge in the end"
  answer: 0
  feedback:
    - null
    - "Jurors don't need to know the law. The judge explains it."
    - "People who know the person charged are kept off the jury, so it stays fair."
    - "The jury decides the facts for itself. It doesn't have to agree with the judge."
  explain: "Choosing at random means neither side, and not the government, can pick a jury that leans their way."
```

## Wider: two sets of courts

```step
stage: make
tier: wider
insight: "Sorting state and federal courts shows the two sets of courts that both lead to the High Court."
check:
  type: sort
  q: "Is each court a state or territory court, or a federal court?"
  options: ["State or territory court", "Federal court", "Above both"]
  items:
    - ["Magistrates Court", "State or territory court", "Each state and territory has its own lower courts."]
    - ["Supreme Court of a state", "State or territory court", "Each state and territory has a Supreme Court at the top of its own courts."]
    - ["Federal Court of Australia", "Federal court", "The Federal Court hears cases under many federal laws."]
    - ["Federal Circuit and Family Court of Australia", "Federal court", "It hears many family law cases and other federal matters."]
    - ["High Court of Australia", "Above both", "The High Court hears appeals from both sets of courts."]
```

Typical and wider steps are extras on the same idea. You do not need them to finish the lesson.
