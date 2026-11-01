---
order: 1
unit: values
title: Values we name
node: AC9HC7K05 n1
assumes: [AC9HC7K02, AC9HC7K04]
summary: "Some values are often named as Australian: freedom, respect, fairness, equality of opportunity, a 'fair go', compassion, inclusion and religious freedom. They show up in public life through customs and protocols, such as the national anthem, flag ceremonies and citizenship ceremonies, and in how institutions work. Many other democracies name similar values."
language: maths
hook: "If you had to name three values that hold Australia together, what would they be? Would people in other countries name the same ones?"
---
A **value** is an idea about what matters and how people should treat each other. Some values are often named as Australian, by the Australian Curriculum and in the government's list of Australian values (from the Department of Home Affairs):

- **freedom**: people can speak, meet, believe and live as they choose, within the law;
- **respect**: treating others, and their views and beliefs, with consideration;
- **fairness** and a **fair go**: everyone deserves a fair chance;
- **equality of opportunity**: the same chances, whoever you are;
- **compassion**: caring about people who are struggling;
- **inclusion**: making sure people are part of things, not left out;
- **religious freedom**: people can follow any religion, or none.

These values are named as Australian, but they aren't Australia's alone. Many other democracies name similar ones. And naming a value isn't the same as everyone living up to it; the next lesson looks at that.

In this lesson, Wattle Creek and its ceremony are made up. The pledge and the anthem are real.

## Predict: whose values?

```step
stage: predict
insight: "Asking whether other countries share these values brings out the idea that 'Australian values' belong only to Australia."
check:
  type: predict
  q: "A 'fair go' is often called an Australian value. Do people in other countries value fairness too?"
  options:
    - "Yes, many democracies value fairness, even if they name it differently"
    - "No, fairness is a value only Australians hold"
    - "No, other countries only value freedom"
    - "Yes, but only because they copied the idea from Australia"
  actual: "Yes. Many democracies name similar values: France's motto is liberty, equality, fraternity. The phrase 'fair go' is very Australian, but the idea of a fair chance isn't Australia's alone."
```

## Try: match the values

```step
stage: run
insight: "Matching each value to a plain meaning gives students the words before the worked example finds them in public life."
check:
  type: match
  q: "Match each value to what it means."
  pairs:
    - ["Freedom", "People can speak, meet and believe as they choose, within the law"]
    - ["A fair go", "Everyone deserves a fair chance"]
    - ["Compassion", "Caring about people who are struggling"]
    - ["Inclusion", "Making sure people are part of things"]
    - ["Religious freedom", "People can follow any religion, or none"]
```

## Worked example: a citizenship ceremony

People who become Australian citizens make a promise at a ceremony, called the **citizenship pledge**. There are two versions; one includes the words "under God" and the other doesn't. The rest is the same:

> From this time forward, I pledge my loyalty to Australia and its people, whose democratic beliefs I share, whose rights and liberties I respect, and whose laws I will uphold and obey.

```step
stage: investigate
insight: "Reading the pledge for the values it names shows values expressed through a civic protocol, and catches Nib's mix-up."
tasks:
  - check:
      type: question
      q: "At a made-up Wattle Creek citizenship ceremony, new citizens say the pledge. Which values does it name?"
      options:
        - "Democratic beliefs, rights and liberties, and the law"
        - "Loyalty to one religion and one political party"
        - "A fair go for everyone and compassion for people in need"
        - "Agreeing with the government on every decision"
      answer: 0
      feedback:
        - null
        - "There are two versions of the pledge, so no one has to name a religion, and it names no party."
        - "Those values are often named as Australian, but the pledge doesn't name them. Read it again."
        - "It asks people to share democratic beliefs, which includes the freedom to disagree."
      explain: "The pledge names democratic beliefs, respect for rights and liberties, and upholding and obeying the law."
  - check:
      type: bug
      code: "working.txt#nib"
      text: "Nib is talking about the ceremony. Click the first line where Nib goes wrong."
      answer: 3
      fault: logic
      misconception: values-are-uniquely-australian
      explain: "Line 3: these values are named as Australian, but they aren't Australia's alone. People in many countries value freedom, fairness and respect."
    smaller:
      check:
        type: question
        q: "Could people in another country also want everyone to have a fair chance?"
        options:
          - "Yes, people in many countries value that"
          - "No, only Australians care about a fair chance"
          - "Only if they have lived in Australia"
        answer: 0
        explain: "A fair chance matters to people in many countries. Australia has its own name for it: a fair go."
        feedback:
          - null
          - "Fairness matters to people all over the world."
          - "People don't need to live in Australia to value fairness."
```

```worked
\text{The value} :: Respect for rights and liberties.
\text{Where it shows} :: In the citizenship pledge, said at every ceremony.
\text{Also shared} :: Many democracies name the same value in their own words.
```

### Which values does it name?

### Find Nib's mistake

## Vary: a value or how it's shown?

```step
stage: modify
insight: "Sorting values from the customs that express them separates the idea from the ceremony."
check:
  type: sort
  q: "Is each one a value, or a way a value is shown in public life?"
  options: ["A value", "A way it's shown"]
  items:
    - ["Equality of opportunity", "A value", "It's an idea about how people should be treated."]
    - ["Singing the national anthem at a school assembly", "A way it's shown", "It's a custom that can express belonging and shared identity."]
    - ["Compassion", "A value", "It's an idea about caring for others."]
    - ["A citizenship ceremony with the pledge", "A way it's shown", "It's a protocol that names shared values."]
    - ["Every adult citizen's vote counting the same", "A way it's shown", "It's how equality shows up in elections."]
```

## Practise: what a value is and isn't

```step
stage: practise
insight: "Telling a value apart from a law or a rule about outcomes checks the lesson's idea."
tasks:
  - check:
      type: question
      q: "What does a 'fair go' mean?"
      options:
        - "Everyone deserves a fair chance"
        - "Everyone must end up with the same amount"
        - "Whoever works hardest always wins"
        - "Australians get a better deal than others"
      answer: 0
      feedback:
        - null
        - "A fair go is about a fair chance, not everyone ending up the same."
        - "Hard work matters, but a fair go is about everyone getting a fair chance to start with."
        - "A fair go is about fairness for everyone, not a better deal for some."
      explain: "A fair go means everyone deserves a fair chance, whoever they are."
  - check:
      type: question
      q: "Is a value the same as a law?"
      options:
        - "No, a value is an idea; laws can reflect values"
        - "Yes, you can be fined for not holding a value"
        - "Yes, every value is written in the Constitution"
        - "No, values and laws have nothing to do with each other"
      answer: 0
      feedback:
        - null
        - "Laws set what you must or mustn't do. No one is fined for their values."
        - "The Constitution names a few rights, but most values aren't written in any law."
        - "Many laws reflect values, such as fairness in the courts."
      explain: "A value is an idea about what matters. Laws often reflect values, but a value isn't itself a law."
```

### What a fair go means

### A value or a law?

## Make: three values, three places

```step
stage: make
insight: "Naming values and where each shows up in public life shows the student can use the idea."
check:
  type: reflect
  text: "In my own book I named three values often called Australian and one way each shows up in public life, and noted that other countries share them too. A partner read it and gave feedback."
```

Write it in your own book or document, not on this page. Use public life, not anyone's own family or background. Your partner or teacher reads it.

## Typical: the anthem's changed line

```step
stage: make
tier: typical
insight: "A real, dated change to the anthem shows how a protocol can be changed to express values more fully."
check:
  type: question
  q: "'Advance Australia Fair' became the national anthem on 19 April 1984. On 1 January 2021, the line 'For we are young and free' became 'For we are one and free'. What was the change meant to express?"
  options:
    - "That Australians are one people, together"
    - "That the government had changed Australia's official values"
    - "That the anthem should no longer be sung at events"
    - "That Australians must all hold the same beliefs"
  answer: 0
  feedback:
    - null
    - "An anthem is a symbol. Changing a word doesn't change any law or official list of values."
    - "The anthem is still sung. Only one word changed."
    - "'One' is about unity, not everyone believing the same thing."
  explain: "'One' is about unity: Australians as one people. A national symbol can change when people want it to express their values more fully. Your teacher can say more about why this change was made."
```

## Wider: a fair go, now or someday?

```step
stage: make
tier: wider
insight: "Whether a 'fair go' describes Australia or names an aim is a judgement, so it is discussion with no marked answer."
check:
  type: reasoning
  q: "Is a 'fair go' a description of Australia as it is, or an aim Australia works towards? Give a reason, and say what evidence you'd want to check."
  paper: true
  models:
    - title: "One answer"
      text: "More an aim. Most people believe in it, but not everyone gets the same chances. I'd want to see whether people from different backgrounds get similar opportunities."
    - title: "A different answer"
      text: "A bit of both. Many things are set up to be fair, like equal votes and free public schools, but it doesn't work out the same for everyone. I'd want evidence about who feels left out."
  criteria:
    - "I gave a view and a reason."
    - "I named evidence I'd want to check."
```

This is a discussion with no single right answer. Your teacher may ask your class to compare views.

Typical and wider steps are extras on the same idea. You do not need them to finish the lesson.
