---
order: 3
unit: diversity
title: Many origins, one democracy
node: AC9HC7K04 n4
assumes: [AC9HC7K04 n1, AC9HC7K04 n2, AC9HC7K04 n3]
summary: "Australia's pluralist, multi-faith society has several origins: First Nations peoples, Christian and Western heritage, and migrant communities who brought many cultures and religions over a long time. Census data shows religion in Australia changing: in the 2021 Census, Christianity was still the largest group but a smaller share than in 2011, more people answered no religion, and Islam and Hinduism grew. Census figures always carry their year, and the religion question is optional."
language: maths
hook: "Is Australia's religious diversity something new?"
---
Australia's diverse, multi-faith society has several origins:

- **First Nations peoples**, with many distinct communities, histories and cultures. Your teacher will take these up with local material.
- **Christian and Western heritage**, which came with the British colonies (last lesson).
- **Migrant communities**, who have come from many countries over a long time, bringing their languages, cultures and religions.

The **Census** is a count of everyone in Australia, run by the Australian Bureau of Statistics (ABS) every five years. One question asks about religion. It is the only question you don't have to answer.

In this lesson the Census figures are real, and each one has its year. Wattle Creek and Nib's ideas are made up.

## Predict: new or old?

```step
stage: predict
insight: "Predicting the trend before seeing the data brings out the idea that diversity is recent or comes from one group."
check:
  type: predict
  q: "Between the 2011 and 2021 Censuses, which answer to the religion question went up the most as a share of Australians?"
  options:
    - "No religion"
    - "Christianity"
    - "Islam"
    - "Buddhism"
  actual: "No religion: from about 22% of Australians in 2011 to about 39% in 2021. Christianity went down as a share, though it was still the largest group. Islam and Hinduism went up a little, and Buddhism stayed about the same."
```

## Try: work out the change

These are the shares of Australians who gave each answer in three Censuses. Other religions, and people who didn't answer, are left out, so the columns don't add to 100.

```step
stage: run
insight: "Working out each change with a formula lets students see the trend in the real data for themselves."
try: { playground: board, starter: "census.yml#try", height: 380 }
tasks:
  - check:
      type: board
      text: "In column E, work out how much each share changed from 2011 to 2021. Use a formula, such as =D2-B2, then fill it down."
      when: "f_E2 = 1 and f_E3 = 1 and f_E4 = 1 and f_E5 = 1 and f_E6 = 1 and n_errors = 0 and c_E3 = c_D3 - c_B3"
      explain: "Each change is the 2021 share minus the 2011 share. Christianity went down about 17 points, no religion went up about 17, Islam and Hinduism went up a little, and Buddhism hardly moved."
  - check:
      type: question
      q: "Look at your column E. Which answer's share grew the most from 2011 to 2021?"
      options:
        - "No religion"
        - "Hinduism"
        - "Islam"
        - "Buddhism"
      answer: 0
      feedback:
        - null
        - "Hinduism grew from 1.3% to 2.7%, but no religion grew by much more."
        - "Islam grew from 2.2% to 3.2%, but no religion grew by much more."
        - "Buddhism stayed at about 2.4%, so it hardly changed."
      explain: "No religion grew by 16.6 points, far more than any other answer."
```

### Work out the change

### Which grew most?

## Worked example: reading the data carefully

```step
stage: investigate
insight: "Reading what a share can and can't show, and catching Nib's slip, keeps the data honest."
tasks:
  - check:
      type: question
      q: "Australia's population grew between 2011 and 2021. Buddhism's share stayed about the same (2.5% to 2.4%). What happened to the number of people who answered Buddhism?"
      options:
        - "It went up, since it's the same share of more people"
        - "It went down, because the share dropped a little"
        - "It stayed exactly the same, because the share hardly moved"
        - "You can't say anything at all from shares"
      answer: 0
      feedback:
        - null
        - "The share dropped a little, but the whole population grew, so the number of people still went up."
        - "A share that stays the same of a bigger population means more people."
        - "You can't get exact numbers from shares alone, but you can tell the direction when the population grew this much."
      explain: "A share is part of the whole. When the whole grows, the same share means more people."
  - check:
      type: bug
      code: "working.txt#nib"
      text: "Nib is reading the Census table. Click the first line where Nib goes wrong."
      answer: 3
      fault: logic
      misconception: diversity-is-new-or-one-source
      explain: "Line 3: the table shows Islam, Hinduism and Buddhism already there in 2011, and migrant communities have been coming for a long time. Australia's diversity has several origins, not one, and it isn't new."
    smaller:
      check:
        type: question
        q: "In the table, were any religions other than Christianity already there in the 2011 Census?"
        options:
          - "Yes: Islam, Hinduism and Buddhism were all there"
          - "No, only Christianity and no religion were there"
          - "Only Buddhism was there in 2011"
        answer: 0
        explain: "All three were there in 2011. Diversity didn't start recently."
        feedback:
          - null
          - "Look at the 2011 column again: Islam, Hinduism and Buddhism all have a share."
          - "Islam and Hinduism had a share in 2011 too."
```

```worked
\text{Several origins} :: First Nations peoples, Christian and Western heritage, and migrant communities.
\text{Over a long time} :: The 2011 Census already shows many religions.
\text{Read with care} :: A share is part of a whole, the year matters, and the question is optional.
```

### Shares and numbers

### Find Nib's mistake

## Vary: what the Census can and can't tell you

```step
stage: modify
insight: "Sorting claims by what the Census can show stops students reading more into the data than it holds."
check:
  type: sort
  q: "Can the Census religion question tell you each of these?"
  options: ["The Census can show this", "The Census can't show this"]
  items:
    - ["What share of people gave each answer in 2021", "The Census can show this", "That is exactly what the table counts."]
    - ["How the shares changed between 2011 and 2021", "The Census can show this", "Comparing Censuses shows change over time."]
    - ["How often each person goes to a place of worship", "The Census can't show this", "The question asks which religion, if any, not how often people practise it."]
    - ["What every person who skipped the question believes", "The Census can't show this", "The question is optional, so skipped answers tell you nothing about belief."]
    - ["Whether one religion is better than another", "The Census can't show this", "Data counts answers. It can't judge beliefs, and this course doesn't either."]
```

## Practise: many origins

```step
stage: practise
insight: "Placing examples among the origins of Australian diversity checks the integration idea without asking about anyone's own background."
tasks:
  - check:
      type: question
      q: "A made-up Wattle Creek library runs story time in five languages because families in the town speak them at home. Which origin of Australia's diversity does this mostly show?"
      options:
        - "Migrant communities"
        - "Christian heritage"
        - "The secular government"
        - "Western law"
      answer: 0
      feedback:
        - null
        - "Christian heritage is about traditions such as Christmas and the prayers, not languages spoken at home."
        - "The government being secular is a rule about religion, not about languages."
        - "Western law is about courts and common law."
      explain: "Many languages spoken at home come from migrant communities who settled in Australia over many years."
  - check:
      type: question
      q: "Why is Australia called pluralist, not just diverse?"
      options:
        - "Different groups are accepted and respected side by side"
        - "There are lots of groups, whether or not they get along"
        - "One culture is official and the others join it"
        - "The government decides which groups can live here"
      answer: 0
      feedback:
        - null
        - "That describes diverse. Pluralist adds that the variety is accepted and respected."
        - "That is the opposite of pluralist: no one culture is made official."
        - "Pluralist describes how people live together, not a government choice of groups."
      explain: "Diverse means many groups. Pluralist means that variety is accepted and respected side by side."
```

### Story time in five languages

### Pluralist or diverse?

## Make: three origins and one trend

```step
stage: make
insight: "Naming the origins and one dated trend joins the whole course in the student's own words."
check:
  type: reflect
  text: "In my own book I named three origins of Australia's pluralist, multi-faith society, and described one Census trend with its years. A partner read it and gave feedback."
```

Write it in your own book or document, not on this page. Use the Census figures, not anyone's own beliefs or background. Your partner or teacher reads it.

## Typical: belonging or practising?

```step
stage: make
tier: typical
insight: "Separating which religion people name from how they practise it shows what the Census question measures."
check:
  type: question
  q: "The Census asks which religion a person belongs to, if any. What can't that answer tell you?"
  options:
    - "How often the person practises their religion"
    - "Which religion, if any, the person named"
    - "How many people named each religion that year"
    - "How the answers compare with the last Census"
  answer: 0
  feedback:
    - null
    - "That is exactly what the question asks."
    - "Adding up the answers gives the count for each religion."
    - "Comparing Censuses is how trends are found."
  explain: "Belonging (which religion you name) is different from practising (how often you pray or attend). The Census asks about belonging."
```

## Wider: could the data mislead?

```step
stage: make
tier: wider
insight: "Thinking about how data could mislead is judgement with more than one good answer, so it is never marked."
check:
  type: reasoning
  q: "The religion question is optional. In 2021, about 93% of people answered it. How might that affect what the data shows? Give one way it could mislead, and one thing you would want to know."
  paper: true
  models:
    - title: "One answer"
      text: "If some groups were less likely to answer, their share might look smaller than it really is. I'd want to know who skipped the question."
    - title: "A different answer"
      text: "The skipped answers changed from Census to Census, so part of a trend could come from more or fewer people answering, not from beliefs changing. I'd want to compare the 'not stated' numbers too."
  criteria:
    - "I explained one way the data could mislead."
    - "I said what I'd want to know to check it."
```

This is a discussion with no single right answer. Your teacher may ask your class to compare views.

Typical and wider steps are extras on the same idea. You do not need them to finish the lesson.
