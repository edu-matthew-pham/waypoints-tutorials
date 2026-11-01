---
order: 4
unit: values
title: Why people come to Australia
node: AC9HC7K05 n4
assumes: [AC9HC7K05 n1]
summary: "People move to Australia for many reasons: work, family, study, safety and freedom. A refugee is someone who is outside their own country and can't return because of a well-founded fear of persecution; a migrant chooses to move. People who become citizens make a pledge that names democratic beliefs, rights and liberties, and the law, linking newcomers to values often named as Australian."
language: maths
hook: "Why might someone leave the country they grew up in to start again in Australia?"
---
People come to live in Australia for many reasons. Some reasons **push** people to leave where they are; others **pull** them towards Australia:

- **Pushed to leave:** war, being persecuted (treated cruelly or unfairly because of who they are or what they believe), disasters, or no safe way to make a living.
- **Drawn to Australia:** work, family who already live here, study, safety, and freedoms such as free speech and religious freedom.

Two words matter here:

- A **migrant** is someone who chooses to move to another country, and could usually go back.
- A **refugee** is someone who is outside their own country and can't return because of a well-founded fear of persecution because of their race, religion, nationality, political opinion or the social group they belong to. Refugees have to leave for their own safety.

Many migrants and refugees later become **Australian citizens**. At the ceremony they make the citizenship pledge you met in the first lesson.

In this lesson, Wattle Creek and the people in its examples are made up. The definitions and the pledge are real.

## Predict: same or different?

```step
stage: predict
insight: "Asking whether migrants and refugees are the same brings out Nib's mix-up before the definitions."
check:
  type: predict
  q: "Are a migrant and a refugee the same thing?"
  options:
    - "No, a refugee had to flee; a migrant chose to move"
    - "Yes, both are people who moved to a new country"
    - "No, a refugee is someone who moved for a better job"
    - "Yes, but refugees can never become citizens"
  actual: "No. Both moved countries, but a refugee had to flee because of a well-founded fear of persecution and can't safely go back, while a migrant chose to move. Many refugees do go on to become Australian citizens."
```

## Try: pushed or drawn?

```step
stage: run
insight: "Sorting reasons as pushes and pulls gives students a way to explain why people come."
check:
  type: sort
  q: "Is each reason something that pushes people to leave, or something that draws them to Australia?"
  options: ["Pushed to leave", "Drawn to Australia"]
  items:
    - ["A war in their home country", "Pushed to leave", "War can force people to leave for their safety."]
    - ["Family members who already live in Australia", "Drawn to Australia", "Being with family draws people here."]
    - ["Being persecuted for their religion", "Pushed to leave", "Persecution forces people to flee."]
    - ["A job offer in an Australian city", "Drawn to Australia", "Work draws people here."]
    - ["Freedom to speak and believe as they choose", "Drawn to Australia", "Freedoms are among the values that draw people to Australia."]
```

## Worked example: the pledge again

```step
stage: investigate
insight: "Connecting why people come with the values in the citizenship pledge shows how this lesson joins the course, and catches Nib's mix-up."
tasks:
  - check:
      type: question
      q: "Someone who fled persecution for their political opinions becomes a citizen at a made-up Wattle Creek ceremony. Which part of the pledge might matter most to them, and why?"
      options:
        - "Rights and liberties, because they lacked freedom where they came from"
        - "None of it, because refugees don't make the pledge"
        - "The words 'under God', because every new citizen must say them"
        - "Only the loyalty part, because they must forget their old country"
      answer: 0
      feedback:
        - null
        - "Refugees who become citizens make the same pledge as anyone else."
        - "There are two versions of the pledge; one doesn't include 'under God'. Each person chooses."
        - "Becoming a citizen doesn't mean forgetting where you came from. Australia is pluralist."
      explain: "Someone who was persecuted for their opinions might especially value the rights and liberties named in the pledge, such as freedom of speech."
  - check:
      type: bug
      code: "working.txt#nib"
      text: "Nib is talking about people becoming citizens. Click the first line where Nib goes wrong."
      answer: 3
      fault: logic
      misconception: migrant-same-as-refugee
      explain: "Line 3: migrants and refugees aren't the same. A refugee had to flee because of a well-founded fear of persecution; a migrant chose to move."
    smaller:
      check:
        type: question
        q: "Did a person who fled persecution choose to leave in the same way as someone who moved for a job?"
        options:
          - "No, fleeing persecution isn't a free choice"
          - "Yes, both of them just decided to move"
          - "Yes, a job offer is the same as persecution"
        answer: 0
        explain: "One person had to leave for their safety; the other chose to move. That's the difference between a refugee and a migrant."
        feedback:
          - null
          - "Someone fleeing persecution has to leave to stay safe. That's different from choosing to move."
          - "A job offer is a reason someone chooses; persecution forces people out."
```

```worked
\text{Migrant} :: Chose to move, for example for work, family or study.
\text{Refugee} :: Had to flee because of a well-founded fear of persecution; can't safely return.
\text{Citizen} :: Many migrants and former refugees become citizens and make the pledge.
\text{The link} :: The pledge names democratic beliefs, rights and liberties, and the law.
```

### Which part of the pledge?

### Find Nib's mistake

## Vary: match the words

```step
stage: modify
insight: "Matching the four terms keeps them apart, so students can use them accurately."
check:
  type: match
  q: "Match each word to what it means."
  pairs:
    - ["Migrant", "Someone who chose to move to another country"]
    - ["Refugee", "Someone who had to flee and can't safely return"]
    - ["Permanent resident", "Allowed to live in Australia permanently, but not yet a citizen"]
    - ["Citizen", "A full member of the country, who can vote and hold an Australian passport"]
```

## Practise: reasons and values

```step
stage: practise
insight: "Choosing accurate explanations of why people come checks the integration of values and reasons."
tasks:
  - check:
      type: question
      q: "Which of these is the most accurate statement about why people come to Australia?"
      options:
        - "People come for many reasons: work, family, study, safety"
        - "People only ever come to Australia to earn more money"
        - "Everyone who comes to Australia is a refugee"
        - "Most people come to join family, so other reasons hardly matter"
      answer: 0
      feedback:
        - null
        - "Work is one reason, but family, study and safety matter too."
        - "Most people who move here are migrants who chose to come."
        - "Family is one big reason, but work, study and safety matter too."
      explain: "People move for many reasons at once. Safety and freedom matter as well as work and family."
  - check:
      type: question
      q: "Does becoming an Australian citizen mean giving up your own culture?"
      options:
        - "No, people keep their own cultures"
        - "Yes, the pledge asks people to give up their culture"
        - "Yes, citizens must stop speaking other languages"
        - "Yes, citizens must speak only English in public"
      answer: 0
      feedback:
        - null
        - "The pledge names democratic beliefs, rights, liberties and the law. It doesn't mention giving up a culture."
        - "Many Australian citizens speak other languages at home."
        - "English is the national language, but no law stops citizens speaking other languages, in public or at home."
      explain: "Citizens share democratic beliefs and obey the law, and keep their own cultures. That's part of being pluralist (A diverse democracy)."
```

### Why people come

### Keeping your culture

## Make: reasons and the pledge

```step
stage: make
insight: "Linking reasons people come to a value in the pledge joins the whole course."
check:
  type: reflect
  text: "In my own book I explained the difference between a migrant and a refugee, gave two reasons people come to Australia, and connected one value from the citizenship pledge to one of those reasons. A partner read it and gave feedback."
```

Write it in your own book or document, not on this page. Don't write about anyone's own family story. Your partner or teacher reads it.

## Typical: resident or citizen?

```step
stage: make
tier: typical
insight: "The difference between a permanent resident and a citizen shows what citizenship adds."
check:
  type: question
  q: "What can a citizen do that a permanent resident generally can't?"
  options:
    - "Vote in federal elections"
    - "Live in Australia permanently"
    - "Work and pay taxes"
    - "Go to school"
  answer: 0
  feedback:
    - null
    - "Permanent residents can already live here permanently."
    - "Permanent residents can work and pay taxes too."
    - "Permanent residents can go to school too."
  explain: "Voting in federal elections is for citizens. That's one reason many permanent residents choose to become citizens."
```

## Wider: hopes and reality

```step
stage: make
tier: wider
insight: "How well life matches newcomers' hopes is a judgement with more than one answer, so it is discussion with no marked answer."
check:
  type: reasoning
  q: "Someone moves to Australia hoping for safety, freedom and a fair go. What might help those hopes come true, and what might get in the way? Give one of each."
  paper: true
  models:
    - title: "One answer"
      text: "Helps: laws that protect everyone's rights, like the freedoms in the pledge. Gets in the way: discrimination, which 16% of adults said they'd faced in 2025."
    - title: "A different answer"
      text: "Helps: community groups and English classes that make it easier to join in. Gets in the way: not knowing anyone, or qualifications from another country not being recognised for jobs."
  criteria:
    - "I gave one thing that helps and one that gets in the way."
    - "I gave a reason or evidence for each."
```

This is a discussion with no single right answer. Your teacher may ask your class to compare views.

Typical and wider steps are extras on the same idea. You do not need them to finish the lesson.
