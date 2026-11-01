---
order: 1
unit: diversity
title: Secular, pluralist, multi-faith
node: AC9HC7K04 n1
assumes: [AC9HC7K01, AC9HC7K02]
summary: "Australia has a secular government in a multi-faith society. Secular describes the government, not the people: the Constitution stops the Commonwealth from setting up a religion, forcing anyone to practise one, stopping anyone from practising one, or using a religious test for a Commonwealth job (section 116). Multi-faith means many religions, and none, are part of Australian life; pluralist means that variety is accepted and respected."
language: maths
hook: "Australia is called secular. Does that mean religion has no place here?"
---
Three words describe how Australia handles religion and culture:

- **Secular**: the government is separate from religion. It doesn't favour one religion, and it doesn't make anyone follow one.
- **Multi-faith**: many religions are practised here, and many people have no religion.
- **Pluralist**: people with different beliefs and cultures live side by side, and that variety is accepted and respected.

Secular is about the **government**. It says nothing about what people believe. A secular country can have lots of religious people in it.

In this lesson, Wattle Creek and its people are made up. The Constitution is real.

## Predict: can they stand?

```step
stage: predict
insight: "Asking about one made-up candidate brings out the belief that secular means religion is kept out of public life."
check:
  type: predict
  q: "A made-up Wattle Creek resident who prays every day wants to stand for federal Parliament. Australia has a secular government. Can they stand?"
  options:
    - "Yes, religion is no barrier to standing for Parliament"
    - "No, a secular country keeps religious people out of Parliament"
    - "Only if they promise not to pray while in office"
    - "Only if their religion is the one most Australians share"
  actual: "Yes. None of the rules for standing for federal Parliament is about religion, and the Constitution bans religious tests for Commonwealth jobs. A secular government doesn't mean religious people stay out of public life."
```

## Try: match the words

```step
stage: run
insight: "Matching each term to a plain meaning gives students the words before the worked example separates government from society."
check:
  type: match
  q: "Match each word to what it means."
  pairs:
    - ["Secular", "The government is separate from religion"]
    - ["Multi-faith", "Many religions, and none, are part of the society"]
    - ["Pluralist", "Different beliefs and cultures are accepted side by side"]
    - ["Culturally diverse", "People come from many different cultures"]
    - ["Diverse society", "A society made up of many different groups"]
```

## Worked example: what section 116 says

```step
stage: investigate
insight: "Reading what the Constitution limits shows that secular is a rule about the government, and catches Nib's mix-up."
tasks:
  - check:
      type: question
      q: "Section 116 of the Constitution limits the Commonwealth. Which of these would it NOT allow?"
      options:
        - "A federal law making one religion Australia's official religion"
        - "A Member of Parliament who goes to a place of worship each week"
        - "A town festival where people of different faiths share food"
        - "A family choosing to follow no religion at all"
      answer: 0
      feedback:
        - null
        - "Section 116 limits what the government can do, not what people choose to believe or practise."
        - "This is people choosing to come together. Section 116 is about what the Commonwealth can make laws about."
        - "Choosing no religion is also protected. The Commonwealth can't make anyone practise one."
      explain: "Section 116 stops the Commonwealth from setting up a religion, forcing or stopping religious practice, or using a religious test for a Commonwealth job."
  - check:
      type: bug
      code: "working.txt#nib"
      text: "Nib is explaining what secular means. Click the first line where Nib goes wrong."
      answer: 3
      fault: logic
      misconception: secular-means-no-religion
      explain: "Line 3: secular limits the government, not the people. Religious people can take part in public life, including Parliament, and the Constitution bans religious tests for Commonwealth jobs."
    smaller:
      check:
        type: question
        q: "Does section 116 limit what the government can do, or what people can believe?"
        options:
          - "What the government can do"
          - "What people are allowed to believe"
          - "Both of them, in the same way"
        answer: 0
        explain: "Section 116 is a limit on the Commonwealth. People are free to follow a religion or none."
        feedback:
          - null
          - "The Constitution doesn't tell people what to believe. It stops the government favouring or forcing a religion."
          - "It only limits the government. People's beliefs are their own."
```

```worked
\text{Section 116} :: The Commonwealth can't set up a religion or force anyone to practise one.
\text{It also} :: can't stop people practising a religion, or use a religious test for a Commonwealth job.
\text{So} :: the government is secular, while the people can be religious or not.
```

### Which law isn't allowed?

### Find Nib's mistake

## Vary: about the government or about society?

```step
stage: modify
insight: "Sorting statements by what they describe keeps 'secular' with the government and 'multi-faith' and 'pluralist' with society."
check:
  type: sort
  q: "Is each statement about Australia's government, or about Australian society?"
  options: ["About the government", "About society"]
  items:
    - ["The Commonwealth has no official religion", "About the government", "That is what makes the government secular."]
    - ["No religious test is needed for a Commonwealth job", "About the government", "This is a rule in section 116 about the Commonwealth."]
    - ["People in Australia follow many religions, and many follow none", "About society", "That is what makes the society multi-faith."]
    - ["People of different beliefs live side by side and respect each other", "About society", "That describes a pluralist society."]
    - ["Families speak many different languages at home", "About society", "That is part of being culturally diverse."]
```

## Practise: secular and multi-faith together

```step
stage: practise
insight: "Using the terms in new made-up cases checks the hinge: secular describes the government, not the people."
tasks:
  - check:
      type: question
      q: "How can Australia be secular and multi-faith at the same time?"
      options:
        - "The government favours no religion, while people follow many or none"
        - "Everyone in Australia must belong to more than one religion"
        - "The government chooses which religions people are allowed to follow"
        - "Secular and multi-faith mean the same thing, so there's no conflict"
      answer: 0
      feedback:
        - null
        - "Multi-faith describes the whole society, not each person. Many people follow one religion or none."
        - "A secular government can't choose people's religion. Section 116 stops it."
        - "They mean different things: one is about the government, the other about society."
      explain: "Secular describes the government. Multi-faith describes society. One doesn't cancel the other."
  - check:
      type: question
      q: "A made-up Wattle Creek club says, 'We welcome people of every faith and none, and we all respect each other's views.' Which word fits best?"
      options:
        - "Pluralist"
        - "Secular"
        - "Official religion"
        - "Single culture"
      answer: 0
      feedback:
        - null
        - "Secular is about government. This is a club describing how its members live together."
        - "The club doesn't choose a religion for anyone."
        - "The club has many beliefs side by side, not one."
      explain: "Pluralist means different beliefs and cultures are accepted and respected side by side."
```

### Secular and multi-faith

### Which word fits?

## Make: three words, three examples

```step
stage: make
insight: "Explaining each term with a made-up example shows the student can use the words, not just match them."
check:
  type: reflect
  text: "In my own book I explained secular, multi-faith and pluralist in my own words, each with a made-up example, and said which one is about the government. A partner read it and gave feedback."
```

Write it in your own book or document, not on this page. Use made-up examples, not anyone's real beliefs. Your partner or teacher reads it.

## Typical: section 116 in plain words

```step
stage: make
tier: typical
insight: "Putting the four parts of section 116 into plain words shows exactly what a secular Commonwealth means."
check:
  type: sort
  q: "Section 116 says the Commonwealth can't do four things. Which of these are on its list?"
  options: ["On the list", "Not on the list"]
  items:
    - ["Make a law setting up a religion", "On the list", "The Commonwealth can't establish a religion."]
    - ["Make people follow a religious practice", "On the list", "It can't impose religious observance."]
    - ["Make a law stopping people practising their religion", "On the list", "It can't prohibit the free exercise of any religion."]
    - ["Require a religious test for a Commonwealth job", "On the list", "No religious test can be required for a Commonwealth office."]
    - ["Run a census that asks people about religion", "Not on the list", "Section 116 doesn't stop the government collecting information. The Census religion question is optional."]
```

## Wider: a secular state or a secular society?

```step
stage: make
tier: wider
insight: "Separating a secular state from a secular society is a distinction to think with, not a verdict, so it is never marked."
check:
  type: reasoning
  q: "A secular state is one where the government favours no religion. A secular society is one where religion plays a small part in daily life. Is Australia one, both or neither? Give a reason for each part."
  paper: true
  models:
    - title: "One answer"
      text: "Australia is a secular state, because section 116 stops the Commonwealth setting up or favouring a religion. Whether it is a secular society is less clear: many people follow a religion and many don't, so it depends on what you count."
    - title: "A different answer"
      text: "Australia is a secular state, but not fully a secular society, because religion still matters to many people and to many community groups. A country could have a state religion and still have a fairly secular society, like some countries with an official church."
  criteria:
    - "I separated the government (state) from the people (society)."
    - "I gave a reason for each part."
    - "I know other people might answer differently."
```

This is a discussion with no single right answer. Your teacher may ask your class to compare views.

Typical and wider steps are extras on the same idea. You do not need them to finish the lesson.
