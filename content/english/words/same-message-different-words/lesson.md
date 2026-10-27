---
order: 1
unit: warmup
title: Same message, different words
summary: "The same message can be worded many ways, and the words that fit depend on who is reading and why. Informal language suits people we know well; formal language suits a reader we do not know well or who has authority. Neither is more correct. Inclusive wording makes sure no reader is left out."
language: maths
node: [AC9E4LA01 n1, AC9E4LA01 n2, AC9E4LA01 n3]
explainPicture: { ref: text.yml#explain-pic, caption: "The three goodbyes mean the same thing. The words sit at different places on the scale, so each suits a different reader." }
hook: "You text your friend 'On my way!' Would you send those words to the principal?"
---
The same message can be said in many ways. Which words fit depends on **who is reading** and **what the message is for**:

- **Informal** words suit people you know well: *Thanks, mate!* They are short and relaxed.
- **Formal** words suit a reader you do not know well, or who has authority: *Thank you for your help.* They are careful and complete.

Which words fit depends on the reader and the job.

**Inclusive** wording is a choice to make every reader feel the message is for them.

## Predict: is either one wrong?

```step
stage: predict
insight: "Predicting whether a casual text and a formal letter are wrong shows students that neither is more correct."
check:
  type: predict
  q: "Max texts a friend, 'Cheers for the lift!' and writes to a guest speaker, 'Thank you for visiting our school.' Is either one wrong?"
  options: ["Neither is wrong: each fits the person who reads it", "The text is wrong, because it is not formal", "The letter is wrong, because it is too stiff for a school", "Both are wrong, because a message should read the same for everyone"]
  actual: "Neither is wrong. 'Cheers for the lift!' suits a friend, and 'Thank you for visiting our school.' suits a guest. Formal language is not more correct; it fits some readers and jobs, and informal language fits others."
```

## Try: place each way of asking

```step
stage: run
insight: "Placing six ways of asking for a pen on a scale shows that the same message can sit at different levels of formality."
try: { playground: board, starter: "text.yml#run", height: 460 }
hint: ["Which words are short and relaxed? Which are careful and complete?", "Would you say these words to a close friend, or to a person you have just met?"]
smaller:
  check: { type: question, q: "'Gimme a pen.' Who would these words suit best?", options: ["A close friend", "The principal", "A visiting speaker"], answer: 0, feedback: [null, "These words are too blunt and relaxed for the principal.", "A guest would expect more careful words than these."], explain: "'Gimme a pen.' is short and blunt, so it suits a friend you know well." }
check: { type: board, text: "Place each way of asking: informal, neutral or formal.", when: "n_right = 6 and n_wrong = 0", explain: "Gimme a pen and Got a spare pen, mate are informal. Can I borrow a pen, please is neutral. Do you have a spare pen could be informal or neutral. Would it be possible to borrow a pen and I wonder if I might borrow a pen are formal." }
```

Did you think any of the six was wrong? Each fits a different reader.

## Worked example: which words fit the reader?

```step
stage: investigate
insight: "Sorting messages by reader, spotting a note that is pitched wrongly and choosing an opening for a new reader shows that words are chosen for a reader and a purpose."
tasks:
  - check:
      type: sort
      q: "Does each message fit a friend or the principal?"
      options: ["Fits a friend", "Fits the principal"]
      items:
        - ["Can't come, sorry mate!", "Fits a friend", "Short, relaxed words suit someone you know well."]
        - ["I regret that I am unable to attend.", "Fits the principal", "Careful, complete words suit a reader with authority."]
        - ["See ya tomorrow!", "Fits a friend", "A relaxed goodbye suits a friend."]
        - ["I look forward to seeing you tomorrow.", "Fits the principal", "Complete, careful wording suits a reader you do not know well."]
        - ["No worries, it's all good.", "Fits a friend", "Relaxed wording suits someone close to you."]
        - ["That is quite all right; please do not apologise.", "Fits the principal", "Careful wording with no short forms suits a formal reader."]
  - check:
      type: bug
      code: "working.txt#nib"
      text: "Here is Nib's request to the principal, one sentence per line. One line is pitched for a friend, not the principal. Click it."
      answer: 3
      fault: logic
      misconception: one-register
      explain: "Line 3 uses 'We reckon it'll be heaps good', which is relaxed wording for a friend. The other lines are careful and complete. Nib wrote the same way to everyone."
  - check:
      type: question
      q: "Nib wants to ask the mayor for a new bin in the park. Which opening fits best?"
      options: ["Hey Mayor, put a bin in the park.", "Dear Mayor Rossi, I am writing to ask for a bin in Elm Park.", "Mayor Rossi, you need to put a bin in Elm Park now."]
      answer: 1
      feedback: ["These words are too casual for a person Nib has not met.", null, "This sounds like an order. A request to an official is more polite."]
      explain: "Nib is writing to someone with authority whom Nib does not know. Careful words and a polite request fit that reader and that job."
```

### Which words fit the reader?

```worked
\text{Who is reading?} :: A friend, or someone you do not know well?
\text{What is the message for?} :: To chat, to ask, or to thank?
\text{Choose the words} :: Pick the ones that fit both.
```

### Spot the words for the wrong reader

### Choose the opening

## Vary: choose the opening

```step
stage: modify
insight: "Choosing the opening for a text to a friend and for a letter to a principal shows the same writer using two registers."
try: { playground: board, starter: "text.yml#vary", height: 340 }
hint: ["Who is each message for?", "Which opening would you actually say to that person?"]
check: { type: board, text: "Choose the opening that fits each reader.", when: "n_right = 2 and n_wrong = 0", explain: "Hey fits a friend. Dear Ms Tran fits a principal. The same person can write both, because the readers are different." }
```

## Practise: include everyone

```step
stage: practise
insight: "Choosing between wording that leaves people out and wording that includes everyone shows inclusive language as a choice about the reader."
try: { playground: board, starter: "text.yml#practise", height: 360 }
hint: ["Who might this wording leave out?", "Which wording could every reader see themselves in?"]
check: { type: board, text: "Choose the wording that includes everyone.", when: "n_right = 3 and n_wrong = 0", explain: "Families, everyone and police officer include every reader. Mums and dads, boys and girls and policeman leave some readers out." }
```

## Make: two messages about one event

In your own document, pick one event, such as an excursion or a match. Write two short messages about it: a text to a friend and a note to a teacher. Write at least four sentences in all. Use at least one short form, such as *I'm* or *can't*, in the text to your friend.

Here is one example: "Hey Zoe, our excursion to the museum was awesome! We **didn't** even have to wait in line." and "Dear Mr Lee, thank you for organising the excursion to the museum. The class learned a great deal about the dinosaur display."

Then swap with a partner. Point to the words that fit each reader. What changed between the two messages?

```step
stage: make
insight: "Writing a text to a friend and a note to a teacher about the same event puts two registers to use in one task."
hint: ["Pick one event, such as an excursion or a match.", "Write the message to your friend first, then the note to your teacher. How do the words change?"]
check: { type: reflect, text: "I wrote a text to a friend and a note to a teacher about one event, and a partner and I found the words that fit each reader." }
```

## In your own writing

```step
stage: make
tier: typical
insight: "Checking a real message against its reader puts the idea to use outside the board."
check: { type: reflect, text: "I looked at a message I wrote for someone else and checked that my words fit that reader." }
```

## Wider: a message in three places

```step
stage: make
tier: wider
insight: "Comparing a group chat, an email and a school website post applies the same idea to digital writing."
check:
  type: reasoning
  q: "Compare a message in a class group chat, an email to a teacher and a post on the school website. Order them from least to most formal and say which words tell you."
  placeholder: "The group chat is the least formal because ..."
  models:
    - title: "A strong answer"
      text: "Group chat, then email, then website post. The chat has short forms and emoji, the email has a greeting and complete sentences, and the website post is written for many readers, so it is the most careful."
    - title: "A different view that also works"
      text: "Group chat, then email, then website post, for different reasons: in the chat the reader is a friend, in the email the reader is one person with authority, and on the website the reader is anyone, so the words are the most careful."
  criteria: ["I put the three in an order.", "I named words or features that show the level.", "I linked each level to its reader."]
  explain: "Each place has its own readers and its own habits. The words that fit follow the reader."
```
