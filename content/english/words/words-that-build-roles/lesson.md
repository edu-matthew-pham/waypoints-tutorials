---
order: 7
unit: core
title: Words that build roles
summary: "The words people use in a group build roles: who leads, who is equal, who helps. Acronyms and specialist terms can welcome a newcomer or leave them out. Forms of address and pronouns such as we and I place speakers in relation to others."
language: maths
node: [AC9E8LA01 n1, AC9E8LA01 n2]
explainPicture: { ref: text.yml#explain-pic, caption: "A boss, an equal and a helper each sound different. The words build the role." }
hook: "Two volunteers in the same group talk to a newcomer. One explains every word, and one uses words nobody has told the newcomer. How will the newcomer feel?"
---
In a group, words do more than carry information. They also **build roles**: who leads, who is an equal and who helps.

- **Acronyms** (short names made from first letters) and **specialist terms** (exact words for the group's work) can help a newcomer or confuse them.
- **Forms of address** are the names and titles used to speak to a person, such as *Coach* or *Ms Ortiz*. They show a relationship and who is more senior.
- **Pronouns** such as *we*, *us* and *I* place the speaker beside others or above them. A *we* or *us* that includes the listener is an **inclusive pronoun**.

A group's words are not good or bad. The question is what they do for the people hearing them.

## Predict: the new volunteer

```step
stage: predict
insight: "Predicting how a newcomer feels about unexplained acronyms previews how group words include or exclude."
check:
  type: predict
  q: "A new member of a bushwalking club is told, 'Put it in the log under the usual.' How does the new member most likely feel?"
  options: ["Confused, because nobody has explained the words", "Welcome, because the club shares special words and the instruction is short", "Excited, because a short instruction means a trusted member"]
  actual: "Confused or left out. 'The usual' is only clear to people who already know it, so a newcomer cannot follow."
```

## Try: label the Reef Watch lines

```step
stage: run
insight: "Labelling eight lines from a made-up reef crew by the kind of word they use shows how groups build their own language."
try: { playground: board, starter: "text.yml#run", height: 560 }
hint: ["Which word would a newcomer need explained?", "Which word names how to speak to a person?"]
smaller:
  check: { type: question, q: "'Good morning, Professor Wu.' Which kind of word is 'Professor Wu'?", options: ["An acronym", "A form of address", "An inclusive pronoun"], answer: 1, feedback: ["An acronym is made from first letters.", null, "A pronoun stands in for a person or people, such as she or they."], explain: "Professor Wu is a title and name used to speak to a person, which is a form of address." }
check: { type: board, text: "Label each line: acronym, specialist term, form of address or inclusive pronoun.", when: "n_right = 8", explain: "RWL and PPE are acronyms (short names made from first letters). Polyps and transect depth are specialist terms. Skipper and Dr Lee are forms of address. Both Let us lines use an inclusive us." }
```

## Worked example: welcome or leave out?

```step
stage: investigate
insight: "Sorting lines by whether they welcome a newcomer, spotting unexplained acronyms and finding the line that sounds like a boss shows how words include and place people."
tasks:
  - check:
      type: sort
      q: "Does each line welcome a newcomer or leave them out?"
      options: ["Welcomes a newcomer", "Leaves a newcomer out"]
      items:
        - ["Grab your PPE (that's your mask and gloves) and join us.", "Welcomes a newcomer", "It explains the acronym."]
        - ["Log it in the RWL under the usual.", "Leaves a newcomer out", "It uses an acronym and a vague phrase without explaining them."]
        - ["We would love your help counting. Here is how it works.", "Welcomes a newcomer", "It invites and offers an explanation."]
        - ["Obviously you know to check the transect first.", "Leaves a newcomer out", "It assumes the newcomer knows."]
        - ["Ask any of us if a word is new to you.", "Welcomes a newcomer", "It invites questions."]
        - ["Just do it like always.", "Leaves a newcomer out", "It assumes the newcomer knows 'always'."]
  - check:
      type: bug
      code: "working.txt#nib"
      text: "Here is Nib's welcome email to a new volunteer, one line at a time. One line will leave the volunteer confused. Click it."
      answer: 2
      fault: logic
      misconception: insider-language
      explain: "Line 2 uses PPE and RWL without explaining them. A newcomer cannot follow, even though the line is friendly."
  - check:
      type: question
      q: "Which line makes the speaker sound like the boss?"
      options: ["Leave the survey to me; you just hold the tape.", "Let us share the survey: you hold the tape and I will record the numbers.", "I would like to learn how you hold the tape, if that is all right."]
      answer: 0
      feedback: [null, "Let us and a shared task make the speaker an equal.", "Asking to learn makes the speaker a helper."]
      explain: "Leave it to me and you just ... put the speaker above the others. The pronouns and commands build the role."
```

### Welcomes or leaves out?

```worked
\text{Find the group's words} :: Acronyms, specialist terms and 'the usual'.
\text{Ask who they are for} :: Does a newcomer know them?
\text{Fix it} :: Explain them once, or use plain words.
```

### Spot the confusing line

### Who sounds like the boss?

## Vary: make it welcoming

```step
stage: modify
insight: "Choosing the wording that welcomes a newcomer shows how a small change moves a line from leaving out to including."
try: { playground: board, starter: "text.yml#vary", height: 340 }
hint: ["Would a newcomer understand each version?", "Which one explains or offers help?"]
check: { type: board, text: "Choose the wording that welcomes a newcomer.", when: "n_right = 2 and n_wrong = 0", explain: "Explaining PPE, and offering to show where the transect starts, make the newcomer feel included." }
```

## Practise: boss, equal or helper?

```step
stage: practise
insight: "Placing six lines as boss, equal or helper applies the idea that words build roles."
try: { playground: board, starter: "text.yml#practise", height: 460 }
hint: ["Who decides? Who shares? Who offers?", "Which pronouns are used?"]
check: { type: board, text: "Place each line: boss, equal or helper.", when: "n_right = 6 and n_wrong = 0", explain: "Do this now and Move over, I will do it act as the boss. Shall we and What do you think we should do treat the speaker as an equal. Could I carry that and What can I get you act as a helper." }
```

## Make: a club announcement

```step
stage: make
insight: "Writing an announcement for a made-up club puts roles and welcoming wording to use."
try: { playground: board, starter: "text.yml#make", height: 400 }
hint: ["Who is the announcement for, including newcomers?", "Where could you say we or our to include the readers?"]
check: { type: board, text: "Write an announcement of at least four sentences that uses I, me, my, we, us or our at least twice (short forms such as we're do not count).", when: "n_first >= 2 and n_sentences >= 4", explain: "You wrote an announcement. Ask a partner whether a newcomer would follow every word, and what role your pronouns give you." }
```

The board counts the words I, me, my, mine, we, us and our (not short forms such as we'll) and sentences. Whether a newcomer would follow is for you and a partner to judge.

## In your own writing

```step
stage: make
tier: typical
insight: "Checking a real message for unexplained group words puts the idea to use outside the board."
check: { type: reflect, text: "I read a message I wrote to a group and checked that a newcomer would follow every word." }
```

## Wider: two groups compared

```step
stage: make
tier: wider
insight: "Comparing how two groups use words to place people applies the idea at the same level."
check:
  type: reasoning
  q: "Compare how the leader speaks in a sports team and in a book club you know of. Give two differences in the words, and say what role each builds."
  placeholder: "In the team ... In the book club ..."
  models:
    - title: "A strong answer"
      text: "In the team the coach gives short orders and uses 'you', which builds the role of leader. In the book club the host uses 'we' and asks questions, which builds the role of an equal."
    - title: "A different view that also works"
      text: "The team uses titles like Coach and a few special words, which show who is in charge. The book club uses first names and everyday words, which show everyone is equal."
  criteria: ["I gave two differences in the words.", "I said what role each builds.", "I did not say one group is better."]
  explain: "Different groups build roles in different ways. Neither is better."
```
