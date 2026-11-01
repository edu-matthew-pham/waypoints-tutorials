---
order: 3
unit: values
title: Values across traditions
node: AC9HC7K05 n3
assumes: [AC9HC7K04 n2, AC9HC7K05 n2]
summary: "Christian traditions shaped many of Australia's institutions. Other religions practised in Australia, such as Judaism, Buddhism, Islam and Hinduism, have their own beliefs, and many share values with each other and with Australian civic life, such as giving and helping others. Religious freedom lets them all be practised, within the law."
language: maths
hook: "Different religions believe different things. Can they still share any values?"
---
In *A diverse democracy* you met Christian heritage: traditions such as Parliament's prayers and Christmas holidays, and the idea that a tradition isn't an official religion.

Many other religions are practised in Australia too, including **Judaism**, **Buddhism**, **Islam** and **Hinduism**. Each has its own beliefs, and within each there are many different groups and views. This lesson doesn't try to explain them. It looks at one value many traditions share: **giving and helping others**. Each tradition has its own word for it:

- **Christianity**: *charity*, from the teaching to love your neighbour.
- **Judaism**: *tzedakah*, helping people in need, seen as a duty and linked to justice.
- **Islam**: *zakat*, a required share of wealth given to those in need; one of the Five Pillars of Islam.
- **Buddhism**: *dana*, generosity: giving without expecting anything back.
- **Hinduism**: *seva*, selfless service to others.

Shared values don't mean shared beliefs. Two traditions can both value giving and still believe very different things about God, life and what giving means.

## Predict: anything in common?

```step
stage: predict
insight: "Asking whether different religions share any values brings out the idea that different beliefs mean nothing in common."
check:
  type: predict
  q: "Judaism, Buddhism, Islam, Hinduism and Christianity have different beliefs. Do they share any values?"
  options:
    - "Yes, for example, many value giving and helping others"
    - "No, different beliefs mean they share nothing"
    - "Yes, because they all believe exactly the same things"
    - "Only the ones that started in the same country"
  actual: "Yes. Each has its own word for giving and helping others, such as tzedakah, zakat, dana, seva and charity. They share that value while believing different things."
```

## Try: match the words

```step
stage: run
insight: "Matching each tradition's own word for giving shows a shared value in each tradition's terms."
check:
  type: match
  q: "Match each word to the tradition it comes from."
  pairs:
    - ["Tzedakah", "Judaism"]
    - ["Zakat", "Islam"]
    - ["Dana", "Buddhism"]
    - ["Seva", "Hinduism"]
    - ["Charity, from 'love your neighbour'", "Christianity"]
```

## Worked example: a shared value, different beliefs

```step
stage: investigate
insight: "Separating a shared value from different beliefs, then catching Nib's slip, is the lesson's main move."
tasks:
  - check:
      type: question
      q: "A made-up Wattle Creek food bank has volunteers from a mosque, a church, a temple and a synagogue. What does that show?"
      options:
        - "People from different traditions can act on a shared value"
        - "All four groups now believe the same things"
        - "Religion has nothing to do with helping others"
        - "Only one of the groups is really helping"
      answer: 0
      feedback:
        - null
        - "Working together on one value doesn't change their beliefs."
        - "Each tradition has its own reason for giving, so religion is part of why they help."
        - "They're all volunteering at the same food bank."
      explain: "Different traditions share the value of giving, so their members can work together on it, while keeping their own beliefs."
  - check:
      type: bug
      code: "working.txt#nib"
      text: "Nib is talking about the food bank. Click the first line where Nib goes wrong."
      answer: 3
      fault: logic
      misconception: traditions-share-nothing
      explain: "Line 3: different beliefs don't mean nothing in common. Many traditions share values such as giving and helping others."
    smaller:
      check:
        type: question
        q: "Do people in many traditions think it's good to help someone in need?"
        options:
          - "Yes, many traditions value helping others"
          - "No, only one tradition values helping others"
          - "No, religions don't talk about helping others"
        answer: 0
        explain: "Helping others is a value many traditions share, each in its own words."
        feedback:
          - null
          - "Each tradition in this lesson has its own word for giving or helping."
          - "Look at the list: tzedakah, zakat, dana, seva and charity."
```

```worked
\text{Shared value} :: Giving and helping others.
\text{Different words} :: Tzedakah, zakat, dana, seva, charity.
\text{Different beliefs} :: Each tradition has its own reasons and its own way of giving.
\text{Civic link} :: Compassion is also a value often named in Australian public life.
```

### What does the food bank show?

### Find Nib's mistake

## Vary: shared, particular or civic?

```step
stage: modify
insight: "Sorting statements into shared values, beliefs particular to a tradition and civic values keeps the three apart."
check:
  type: sort
  q: "Is each one a value many traditions share, something particular to one tradition, or a value of Australian civic life?"
  options: ["Shared by many traditions", "Particular to one tradition", "Australian civic value"]
  items:
    - ["Giving to help people in need", "Shared by many traditions", "Many traditions value giving, each in its own words."]
    - ["Zakat is one of the Five Pillars", "Particular to one tradition", "The Five Pillars belong to Islam."]
    - ["People can follow any religion, or none", "Australian civic value", "Religious freedom is a value of Australian civic life."]
    - ["Seva as a form of devotion", "Particular to one tradition", "Seeing service as devotion is part of Hinduism."]
    - ["Every adult citizen's vote counting the same", "Australian civic value", "Equal votes are part of Australian democracy."]
```

## Practise: religious freedom

```step
stage: practise
insight: "Connecting shared values to religious freedom, and its limits, links this lesson to the rest of the course."
tasks:
  - check:
      type: question
      q: "What does religious freedom mean in Australia?"
      options:
        - "People can follow any religion, or none, within the law"
        - "People can do anything at all if it's part of their religion"
        - "Everyone must follow the most common religion"
        - "Religion can only be practised at home"
      answer: 0
      feedback:
        - null
        - "Like other freedoms, it has limits set by law to protect others (Within the bounds of law)."
        - "No one has to follow a religion. Section 116 protects that."
        - "People can practise their religion in public too, such as at places of worship and festivals."
      explain: "Religious freedom lets people follow any religion, or none, within the law that protects everyone."
  - check:
      type: question
      q: "Two traditions both value giving. Does that mean they believe the same things?"
      options:
        - "No, they can share a value and believe differently"
        - "Yes, sharing one value means sharing every belief"
        - "Yes, otherwise they couldn't work together"
        - "No, so they can't work together on anything"
      answer: 0
      feedback:
        - null
        - "One shared value doesn't make all their beliefs the same."
        - "The food bank shows people with different beliefs working together."
        - "They can work together on what they share, like the food bank."
      explain: "A shared value is common ground. Beliefs can still differ, and that's part of a pluralist society."
```

### Religious freedom

### Shared value, different beliefs

## Make: common ground

```step
stage: make
insight: "Explaining a shared value and how it connects to civic life shows the student can use the lesson's idea."
check:
  type: reflect
  text: "In my own book I explained one value that many traditions share, gave two traditions' own words for it, and connected it to a value of Australian civic life. A partner read it and gave feedback."
```

Write it in your own book or document, not on this page. Don't write about anyone's own religion or family. Your partner or teacher reads it.

## Typical: freedom within the law

```step
stage: make
tier: typical
insight: "Religious freedom has limits like the other freedoms, which links back to Freedoms and taking part."
check:
  type: question
  q: "Why does religious freedom, like freedom of speech, have limits set by law?"
  options:
    - "To protect other people's rights and safety"
    - "Because the government prefers some religions"
    - "Because religion isn't really a freedom"
    - "So that people stop practising religion"
  answer: 0
  feedback:
    - null
    - "Section 116 stops the Commonwealth favouring a religion."
    - "Religious freedom is a real freedom; all freedoms have some limits."
    - "The limits protect others; they don't aim to stop religion."
  explain: "Like other freedoms, religious freedom is protected within laws that protect everyone's rights and safety."
```

## Wider: living with difference

```step
stage: make
tier: wider
insight: "How a pluralist society lives with real differences in belief is a judgement, so it is discussion with no marked answer."
check:
  type: reasoning
  q: "Traditions share some values and differ on many beliefs. What helps people with different beliefs live together well? Give two ideas and a reason for each."
  paper: true
  models:
    - title: "One answer"
      text: "Working together on shared values, like a food bank, because it builds trust. And respecting that others believe differently, because no one should have to give up their beliefs to belong."
    - title: "A different answer"
      text: "Laws that protect everyone's freedom equally, so no group is favoured. And getting to know people from other traditions, because it's harder to be unfair to people you know."
  criteria:
    - "I gave two ideas."
    - "I gave a reason for each."
```

This is a discussion with no single right answer. Your teacher may ask your class to compare views.

Typical and wider steps are extras on the same idea. You do not need them to finish the lesson.
