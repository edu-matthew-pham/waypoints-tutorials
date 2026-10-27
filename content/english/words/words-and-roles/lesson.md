---
order: 3
unit: warmup
title: Words and roles
summary: "Our words show who we are to the person we are talking to: a teacher, a student, a coach, a friend. Orders, requests and titles signal roles. Formality is a scale, not an on-off switch. To choose words, think about who is reading, what the message is for, and where it will be read."
language: maths
node: [AC9E5LA01 n1, AC9E5LA01 n2, AC9E5LA01 n4]
assumes: [AC9E5LA01 n3]
explainPicture: { ref: text.yml#explain-pic, caption: "Asking, sharing an idea and giving an order sit in different places. Each signals a different role in the conversation." }
hook: "A teacher says 'Take out your books.' A student says 'May I take out my book?' What do the words tell you about who is in charge?"
---
Our words do more than carry a message. They also show **our role** and **our relationship** to the person we are talking to.

- A person in charge often gives **orders**: *Stand behind the line.*
- A person asking for something often makes a **request**: *Could I please leave early?*
- A person working alongside others often **shares an idea**: *Shall we start with the map?*

Formality is a **scale**, not a switch. Between the most casual words and the most formal words there are many steps.

To choose words, think about three things: **who** is reading, **what** the message is for, and **where** it will be read.

## Predict: who is in charge?

```step
stage: predict
insight: "Predicting what a coach's order and a player's request show about roles previews how words signal roles."
check:
  type: predict
  q: "A coach says, 'Everyone, run two laps.' A player says, 'Coach, could we please stop for a drink?' What do the words tell you?"
  options: ["The coach gives orders and the player asks, so the coach is in charge", "The player is in charge, because the player sounds more polite", "Neither is in charge, because they are both talking", "The coach and player are close friends, because they are chatting"]
  actual: "The coach gives an order and the player makes a request. That shows the coach has the authority and the player is asking for it."
```

## Try: place each on the scale

```step
stage: run
insight: "Placing five ways of asking a class to line up on a five-step scale shows that formality is a scale, not a switch."
try: { playground: board, starter: "text.yml#run", height: 460 }
hint: ["Which would you only say to friends? Which would you read on a school notice?", "Do any sit between two steps?"]
smaller:
  check: { type: question, q: "Which is more formal: 'Move it!' or 'Please move along.'?", options: ["Move it!", "Please move along.", "They are equally formal"], answer: 1, feedback: ["Move it! is short and blunt, so it is less formal.", null, "The second adds a polite word and a fuller phrase, so it sits higher."], explain: "'Please move along.' is more careful and complete, so it sits higher on the scale." }
check: { type: board, text: "Place each way of asking everyone to line up on the scale.", when: "n_right = 5 and n_wrong = 0", explain: "Oi, move it is very casual. Come on, let's go is casual or very casual. Line up at the door, please sits between neutral and polite. Could everyone please line up is polite. Students are requested to assemble is formal." }
```

## Worked example: who is speaking?

```step
stage: investigate
insight: "Sorting lines by speaker, spotting an order to someone in charge and choosing an opening for a favour shows that words signal roles and fit a situation."
tasks:
  - check:
      type: sort
      q: "Who is probably speaking: a teacher or a student?"
      options: ["A teacher", "A student"]
      items:
        - ["Please hand in your work by Friday.", "A teacher", "A person in charge sets the task."]
        - ["Could I please have an extra day?", "A student", "A person asks permission."]
        - ["Everyone, eyes this way.", "A teacher", "An order to the whole class."]
        - ["Sorry, I didn't catch that, Mr Lee.", "A student", "A student calls the teacher by name and says sorry."]
        - ["Take out your books.", "A teacher", "A direct order to the class."]
        - ["May I go to the library?", "A student", "A student asks permission."]
  - check:
      type: bug
      code: "working.txt#nib"
      text: "Here is Nib's message to the coach, one line at a time. One line gives the coach an order. Click it."
      answer: 3
      fault: logic
      misconception: command-to-authority
      explain: "Line 3 says 'Tell me the time', which is an order. Nib is asking the coach, so a request fits: 'Could you tell me the time of Saturday's match?'"
  - check:
      type: question
      q: "Nib wants to ask the librarian if the club can use the quiet room. Which opening fits best?"
      options: ["Give us the quiet room on Thursday.", "Hey Mrs Ng, the quiet room's ours on Thursday, yeah?", "Hi Mrs Ng, could our club please use the quiet room on Thursday?"]
      answer: 2
      feedback: ["This is an order, and the librarian is in charge of the room.", "This sounds like Nib has already decided, and it is very casual for a person in charge.", null]
      explain: "Three things decide the words: the reader (the librarian, who is in charge of the room), the purpose (asking for something) and the place (a message the librarian will read). A polite request fits all three."
```

### Who is speaking?

```worked
\text{Look at the verbs} :: Is it an order, a request, or an idea to share?
\text{Look at the names} :: Does anyone use a title, a first name or no name?
\text{Decide the role} :: Who has the authority, and who is asking?
```

### Spot the order to the coach

### Choose the opening for the job

## Vary: ask or tell?

```step
stage: modify
insight: "Choosing the words a student uses to ask and the words a teacher uses to instruct shows how roles shape the wording."
try: { playground: board, starter: "text.yml#vary", height: 340 }
hint: ["Who is speaking in each line, and who has the authority?", "Which words would that speaker actually use?"]
check: { type: board, text: "Choose the words that fit each speaker.", when: "n_right = 2 and n_wrong = 0", explain: "A student asking for time makes a request. A teacher instructing the class gives a clear instruction with please." }
```

## Practise: who is it for?

```step
stage: practise
insight: "Placing lines by the person they are said to shows that the reader changes the words."
try: { playground: board, starter: "text.yml#practise", height: 460 }
hint: ["Which lines use a name or a title? Which use slang?", "Which lines are for someone you do not know at all?"]
check: { type: board, text: "Place each line by who it is said to: a close friend, a teacher or a stranger.", when: "n_right = 6 and n_wrong = 0", explain: "Hey, wait up and Dude, check this out are for a close friend. A name with Mrs or Mr is for a teacher. Excuse me and Sorry to bother you are for a stranger." }
```

## Make: ask the principal

In your own document, write an email to the principal asking for something, such as a lunchtime club or a change to a rule. Write at least four sentences. Use full forms, such as *do not* and not *don't*, and leave out exclamation marks. Say what you want and why the principal might agree.

Here is one example: "Dear Ms Tran, I am writing to ask whether our class may start a chess club at lunchtime. We would meet in the library on Tuesdays. Thank you for considering this request."

Then swap with a partner. Find the word or phrase that makes it a request and not an order.

```step
stage: make
insight: "Writing an email that asks the principal for something puts the words for a person in charge to use."
hint: ["What do you want to ask for, and why would the principal agree?", "How would you word it so it sounds like a request, not an order?"]
check: { type: reflect, text: "I wrote a request to the principal in at least four sentences, and a partner and I found the words that make it a request and not an order." }
```

## In your own writing

```step
stage: make
tier: typical
insight: "Checking a real message against who it is for puts the idea to use outside the board."
check: { type: reflect, text: "I looked at a message I wrote and checked that its words fit who I was writing to and what I wanted." }
```

## Wider: language at a ceremony

```step
stage: make
tier: wider
insight: "Looking at a formal ceremony applies the idea of roles to another setting at the same level."
check:
  type: reasoning
  q: "Think of a ceremony such as a school assembly or a court. Give two language choices that show who has authority, and one that shows the role of the audience."
  placeholder: "The person in charge says ... The audience ..."
  models:
    - title: "A strong answer"
      text: "The person in charge uses titles and clear instructions, such as 'Please be seated'. The audience answers with set words or stays quiet, which shows their role is to listen."
    - title: "A different view that also works"
      text: "The leader's words are formal and complete, and nobody interrupts. The audience says 'yes' or stands when asked, which shows they follow the leader."
  criteria: ["I gave two choices that show authority.", "I gave one choice for the audience.", "I said what each shows about the role."]
  explain: "In formal settings, the words of the person in charge and the audience's replies make the roles easy to see."
```
