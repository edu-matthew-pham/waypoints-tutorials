---
order: 4
unit: law
title: Fair courts and democracy
node: AC9HC7K03 n4
assumes: [AC9HC7K03 n2, AC9HC7K03 n3]
summary: "A fair legal system supports democracy: it protects people's rights, makes the government obey the law, and settles disputes peacefully. Equal laws only help if people can use them, so access to justice matters: legal aid, community legal centres, interpreters and fair steps help people who can't afford a lawyer or don't know how the system works. Most people agree access to justice matters; how well Australia provides it is debated."
language: maths
hook: "The law is the same for everyone. Does that mean everyone has the same chance in court?"
---
In the last three lessons you met the rule of law, fair trials and the courts. This lesson puts them together with democracy.

A fair legal system supports democracy in three ways:

- it **protects rights**, such as the freedoms you met in *Freedoms and taking part*;
- it **makes the government obey the law**, because independent courts can rule that a government broke it;
- it **settles disputes peacefully**, by rules everyone knows, instead of by force.

Equal laws only help if people can actually use them. That is called **access to justice**. Help includes:

- **Legal aid**: free or cheaper legal help from the government. Whether you get a lawyer depends on your income and your case.
- **Community legal centres**: free advice, often for people who can't afford a lawyer.
- **Interpreters**, so people who don't speak English well can follow their case.

Most people agree access to justice matters. How well Australia provides it, and how much should be spent on it, is debated.

In this lesson, Wattle Creek and its people are made up. The kinds of help are real.

## Predict: the same chance?

```step
stage: predict
insight: "Committing first brings out the belief that equal laws mean equal chances, before the lesson shows what money and know-how change."
check:
  type: predict
  q: "In a made-up case, a big company with a team of lawyers is in a dispute with Tarn, who can't afford any legal advice. Do they have the same chance in court?"
  options:
    - "No, Tarn may struggle without help, even though the law is the same"
    - "Yes, the law is the same for both of them"
    - "Yes, the judge will act as Tarn's lawyer"
    - "No, companies always win against people in court"
  actual: "The law is the same, but Tarn may not know the rules, the forms or the best arguments. The judge must stay neutral and can't act as Tarn's lawyer. Companies don't always win, but help such as legal aid or a community legal centre can make the contest fairer."
```

## Try: match the help

```step
stage: run
insight: "Matching each kind of help to what it does gives students the options before they apply them to Tarn."
check:
  type: match
  q: "Match each kind of help to what it does."
  pairs:
    - ["Legal aid", "Free or cheaper help, depending on your income and your case"]
    - ["Community legal centre", "Free legal advice, often for people who can't afford a lawyer"]
    - ["Interpreter", "Helps someone follow their case in a language they understand"]
    - ["Independent court", "Can rule that the government broke the law"]
```

## Worked example: Tarn's dispute

```step
stage: investigate
insight: "Following one made-up person through a dispute shows what access to justice looks like in practice, and catches Nib's equal-laws mistake."
tasks:
  - check:
      type: question
      q: "Tarn, an apprentice in Wattle Creek, says a landlord kept Tarn's bond without a good reason. Tarn can't afford a lawyer. What is a sensible first step?"
      options:
        - "Ask a community legal centre or legal aid for free advice"
        - "Give up, because only people with money can use the law"
        - "Wait for the police to take the landlord to court"
        - "Ask the local member of Parliament to decide the case"
      answer: 0
      feedback:
        - null
        - "Free advice exists so people without money can still use the law."
        - "This is a dispute between two people, not a crime. Tarn has to bring it, with help."
        - "Members of Parliament make laws. Disputes are decided by courts and tribunals."
      explain: "Free advice from a community legal centre or legal aid can help Tarn understand the rules and decide what to do next."
  - check:
      type: bug
      code: "working.txt#nib"
      text: "Nib is talking about Tarn's dispute. Click the first line where Nib goes wrong."
      answer: 3
      fault: logic
      misconception: equal-laws-guarantee-equal-access
      explain: "Line 3: the law being the same for everyone doesn't give everyone the same chance. Without money or know-how, Tarn may not be able to use the law well. That is why access to justice matters."
    smaller:
      check:
        type: question
        q: "One side has a team of lawyers. The other side can't afford any advice. Is the contest equal?"
        options:
          - "No, the side without advice may not know the rules"
          - "Yes, because the same law applies to both sides"
          - "Yes, because the judge will help the side without a lawyer win"
        answer: 0
        explain: "The law can be equal while people's chances to use it are not. Help such as legal aid narrows the gap."
        feedback:
          - null
          - "The same law applies, but knowing how to use it takes help or money."
          - "The judge has to stay neutral and can't argue for either side."
```

### Tarn's first step

### Find Nib's mistake

## Vary: does it help access to justice?

```step
stage: modify
insight: "Sorting made-up changes by whether they help people use the law checks that students see access as practical, not just written."
check:
  type: sort
  q: "Would each made-up change help people get access to justice, or not?"
  options: ["Helps access", "Doesn't help access"]
  items:
    - ["A community legal centre opens a free advice night in Wattle Creek", "Helps access", "Free advice helps people who can't afford a lawyer."]
    - ["A court provides an interpreter for a witness who speaks little English", "Helps access", "An interpreter lets people follow and take part in their case."]
    - ["Court forms are rewritten in plain English", "Helps access", "Plain forms help people who don't have a lawyer."]
    - ["The only court nearby closes, and the next is four hours' drive away", "Doesn't help access", "Distance makes it harder to use the courts at all."]
    - ["Court fees are doubled with no help for people on low incomes", "Doesn't help access", "Higher costs make it harder for people without money."]
```

## Practise: why it matters for democracy

```step
stage: practise
insight: "Choosing the link between courts and democracy, then explaining it on paper, pulls lessons 1 to 3 together."
tasks:
  - check:
      type: question
      q: "How do independent courts support democracy?"
      options:
        - "They can rule that the government broke the law"
        - "They agree with whatever the elected government decides to do"
        - "They choose which laws Parliament is allowed to debate"
        - "They replace elections when people disagree about a law"
      answer: 0
      feedback:
        - null
        - "Courts don't take the government's side. They apply the law, even against the government."
        - "Parliament decides what it debates. Courts decide cases under the law."
        - "Courts don't replace elections. Voters choose Parliament; courts apply its laws."
      explain: "Independent courts make sure the government stays under the law, which protects the rights democracy depends on."
  - check:
      type: reasoning
      q: "Explain one way a fair legal system supports democracy. Use an example from Tarn's case or one of your own made-up cases."
      paper: true
      models:
        - title: "A strong answer"
          text: "Democracy depends on everyone having the same rights. If Tarn can't afford a lawyer, Tarn's rights only exist on paper. Free advice from a community legal centre helps Tarn actually use the law, so equality before the law is real, not just written."
        - title: "A different answer that also works"
          text: "In a democracy the government has to follow the law. If a made-up council closed a park without the notice the law requires, an independent court could rule that it broke the law. That keeps the people in power under the same law as everyone else."
      criteria:
        - "I named one way a fair legal system supports democracy."
        - "I used a made-up example."
        - "I explained the link, not just stated it."
```

### How do courts support democracy?

### Explain the link

## Make: fair courts and democracy

```step
stage: make
insight: "Writing the connection in their own words, with a kind of help, shows the student can use the whole course."
check:
  type: reflect
  text: "In my own book I explained how a fair legal system supports democracy, and named one kind of help that gives people access to justice and what it does. A partner read it and gave feedback."
```

Write it in your own book or document, not on this page. Your partner or teacher reads it.

## Typical: a court checks a council

```step
stage: make
tier: typical
insight: "A made-up court ruling against a council shows courts holding government to the law."
check:
  type: question
  q: "A made-up council fines market stallholders using a rule it never actually passed. A stallholder takes the council to court and wins. What does this show?"
  options:
    - "Courts can make governments obey the law, which protects everyone"
    - "Councils can make any rule they like, as long as they enforce it"
    - "The stallholder broke the law by challenging the council in court"
    - "Courts always side with people against the government"
  answer: 0
  feedback:
    - null
    - "A council can only use rules it has the power to make, and must make them properly."
    - "Taking a government to court is a lawful way to challenge it."
    - "Courts don't take sides. Here the council broke the law, so it lost."
  explain: "An independent court applied the law to the council like anyone else. That keeps government under the law, which democracy relies on."
```

## Wider: what gets in the way?

```step
stage: make
tier: wider
insight: "Weighing barriers to access is a discussion with no single answer, so it is never marked."
check:
  type: reasoning
  q: "Which barrier to justice do you think matters most where you live: cost, distance to a court, or not knowing how the system works? Give a reason, and one thing that could help."
  paper: true
  models:
    - title: "One answer"
      text: "In a country town, distance might matter most: if the nearest court is hours away, people may give up. Video hearings or a visiting legal service could help."
    - title: "A different answer"
      text: "Not knowing how the system works might matter most, because even free help doesn't work if people don't know it exists. Plain-English information at school or the library could help."
  criteria:
    - "I chose a barrier and gave a reason."
    - "I suggested one thing that could help."
    - "I know other people might reasonably choose differently."
```

This is a discussion with no single right answer. Your teacher may ask your class to compare views.

Typical and wider steps are extras on the same idea. You do not need them to finish the lesson.
