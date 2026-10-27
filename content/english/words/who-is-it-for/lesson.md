---
order: 5
unit: core
title: Who is it for?
summary: "Two things shape how formal to be: how well you know the person (familiarity) and who has more authority (power). Knowing someone well can make words more relaxed; their authority can keep them respectful. Both matter, along with the purpose."
language: maths
node: [AC9E6LA01 n2]
explainPicture: { ref: text.yml#explain-pic, caption: "Three people, three sets of words. How well you know them and how much authority they have both change what you say." }
hook: "You know your coach really well and you joke with them often. Do you word an email asking to miss training the same way as a message to a friend?"
---
Two things shape how formal your words should be.

- **Familiarity**: how well you know the person. Close friends get relaxed words.
- **Power**: who has more authority in the situation. A principal, a judge or a coach can decide things about you.

The two can pull in different directions. You may know your coach very well, but your coach still has authority. The words you choose can be relaxed and respectful at once.

## Predict: friend or boss?

```step
stage: predict
insight: "Predicting how to start a message to a well-known coach previews that familiarity and power both matter."
check:
  type: predict
  q: "You email a coach you know really well to ask to miss training. How would you start?"
  options: ["The same as a message to a close friend", "More formally than a friend, but still warmly", "As formally as a letter to a stranger"]
  actual: "More formally than a friend, but still warmly. Because you know the coach well the words can be warm, but because the coach has authority they should also be respectful."
```

## Try: place each situation

```step
stage: run
insight: "Placing six situations on a casual-to-formal scale shows how familiarity and power change the words."
try: { playground: board, starter: "text.yml#run", height: 460 }
hint: ["Who is more important in this situation, you or them?", "How well do you know them?"]
smaller:
  check: { type: question, q: "Which person would you use the most formal words with?", options: ["Your cousin", "A judge", "A classmate"], answer: 1, feedback: ["You know your cousin well and they have no authority over you.", null, "A classmate is your equal and you see them every day."], explain: "A judge is someone you do not know, with a lot of authority, so the words are the most formal." }
check: { type: board, text: "Place each situation: casual, respectful or formal.", when: "n_right = 6 and n_wrong = 0", explain: "A cousin is casual, a new classmate is casual to respectful, a coach and a teacher are respectful, and the mayor and a judge are formal." }
```

## Worked example: familiarity or power?

```step
stage: investigate
insight: "Sorting cues into familiarity and power, spotting reasoning that ignores power and choosing an email opening shows both shape the words."
tasks:
  - check:
      type: sort
      q: "Is each cue about familiarity (how well you know them) or power (their authority)?"
      options: ["Familiarity", "Power"]
      items:
        - ["They are your best friend.", "Familiarity", "It is about how well you know them."]
        - ["They are the principal.", "Power", "It is about their authority."]
        - ["You have never met them.", "Familiarity", "It is about how well you know them."]
        - ["They mark your work.", "Power", "It is about their authority."]
        - ["You have known them for years.", "Familiarity", "It is about how well you know them."]
        - ["They decide who joins the team.", "Power", "It is about their authority."]
  - check:
      type: bug
      code: "working.txt#nib"
      text: "Here is Nib's reasoning before writing to Ms Rossi, one step at a time. One step leaves something out. Click it."
      answer: 3
      fault: logic
      misconception: familiarity-only
      explain: "Step 3 decides using only how well Nib knows Ms Rossi. She also has power over Nib's extension, so the words need to be respectful too."
  - check:
      type: question
      q: "Ava has played for her coach for three years and they joke often. She emails him to ask to miss training. Which opening fits?"
      options: ["Hey Coach, I'm skipping Thursday.", "Hi Coach, I hope you're well. Could I please miss training on Thursday?", "Dear Mr Wilson, I respectfully request permission to be absent from Thursday's training session."]
      answer: 1
      feedback: ["It sounds like Ava is telling the coach, not asking.", null, "It is stiff for someone Ava knows well."]
      explain: "Warm because Ava knows the coach well, and a request because the coach has the authority to say yes or no."
```

### Familiarity or power?

```worked
\text{Ask: how well do I know them?} :: Close means more relaxed words.
\text{Ask: who decides?} :: The one with authority gets respect.
\text{Combine them} :: A warm request can be both relaxed and respectful.
```

### Spot the missing step

### Choose the opening

## Vary: choose the greeting

```step
stage: modify
insight: "Choosing the greeting for a friend and for a principal you have not met shows the cues at work."
try: { playground: board, starter: "text.yml#vary", height: 340 }
hint: ["Who is the reader, and how well do you know them?", "Do they have authority?"]
check: { type: board, text: "Choose the greeting that fits each reader.", when: "n_right = 2 and n_wrong = 0", explain: "Dear Ms Chen suits a principal you have never met. Hey! suits a cousin." }
```

## Practise: who would you say it to?

```step
stage: practise
insight: "Placing six readers on the scale applies the two cues to new situations."
try: { playground: board, starter: "text.yml#practise", height: 460 }
hint: ["Who has authority over you?", "Who do you know well?"]
check: { type: board, text: "Place each reader: casual, respectful or formal.", when: "n_right = 6 and n_wrong = 0", explain: "A younger sibling is casual, a neighbour and a coach you like are respectful, a librarian you have never met is respectful to formal, and a minister and a school council committee are formal." }
```

## Make: three openings

```step
stage: make
insight: "Writing three openings for three readers puts both cues to use in real messages."
try: { playground: board, starter: "text.yml#make", height: 400 }
hint: ["Who is each reader, and how well do you know them?", "Who has authority?"]
check: { type: board, text: "Write three openings, two sentences each, for a friend, a coach you know well and the principal.", when: "n_sentences >= 6 and n_words >= 50", explain: "You wrote three openings. Ask a partner to say, for each one, how well you know the person and whether they have authority." }
```

The board counts words and sentences. Whether each opening fits its reader is for you and a partner to judge.

## In your own writing

```step
stage: make
tier: typical
insight: "Checking a real message against familiarity and power puts the idea to use outside the board."
check: { type: reflect, text: "I looked at a message I wrote and asked how well I know the reader and whether they have authority." }
```

## Wider: addressing people in different places

```step
stage: make
tier: wider
insight: "Comparing how people are addressed in a court and a parliament applies the cues to other settings at the same level."
check:
  type: reasoning
  q: "In a court, a parliament or a big company, people often use titles instead of first names. Give one reason this happens, and say what it shows about power."
  placeholder: "Titles are used because ... This shows ..."
  models:
    - title: "A strong answer"
      text: "Titles show respect for the role, not just the person. They show that the speaker has authority in that place, whoever holds the job."
    - title: "A different view that also works"
      text: "Titles keep the setting fair and formal, so everyone is treated the same way. They show that power comes with the role."
  criteria: ["I gave one reason.", "I said what it shows about power.", "I wrote about the role, not one person."]
  explain: "Titles signal the role and make the authority clear."
```
