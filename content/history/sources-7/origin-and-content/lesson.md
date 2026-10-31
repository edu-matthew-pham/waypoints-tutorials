---
order: 2
unit: origin
title: Who made it, and what does it show?
node: AC9HH7S03 n1
assumes: [AC9HH7S02 n1, AC9HS6S04 n1]
summary: "Two questions start every look at a source. Origin asks who made it, when and where. Content asks what it shows or says. They are different questions, and mixing them up is the most common mistake: a clay warrior shows a soldier, but that does not make a soldier its maker. Keeping origin and content apart is what lets the later questions, context and purpose, work."
language: maths
hook: "A clay warrior stands in a tomb in China. It is dressed as a soldier. So was it made by a soldier? Let's look at what the figure tells us, and what it doesn't."
---
Every source has two things you can ask about straight away.

**Origin** is where the source came from: **who** made it, **when** and **where**.

**Content** is what is in the source: **what** it shows, says or records.

They sound close, but they are different questions. A source can show one thing and have been made by someone quite different.

> **Source A: a clay warrior.** A life-size figure made of baked clay, standing about 1.8 metres tall. It is dressed as a soldier, with armour and a belt, and each figure has a different face. It was one of thousands buried near the tomb of the First Emperor of Qin, in what is now Shaanxi province, China. It was made by craftsmen in Qin workshops during the First Emperor's reign. Making the figures took many years, before the emperor died in 210 BCE.

## Predict: which question?

```step
stage: predict
insight: "Committing first shows whether students can tell origin and content questions apart before they use them."
check:
  type: predict
  q: "Which of these asks about a source's origin?"
  options: ["Who made it, and when?", "What does it show?", "Why do we care about it?", "How big is it?"]
  actual: "Who made it, and when. Origin is who, when and where. What it shows is content."
```

## Try: origin or content?

```step
stage: run
insight: "Sorting facts about one source makes the difference visible: origin is about the maker and the time, content is about what is in it."
check:
  type: sort
  q: "Each fact is about Source A, the clay warrior. Is it about its origin or its content?"
  options: ["Origin", "Content"]
  items:
    - ["It was made by craftsmen in workshops", "Origin", "That says who made it."]
    - ["It shows a soldier in armour", "Content", "That is what the figure looks like."]
    - ["It was made during the First Emperor's reign, before 210 BCE", "Origin", "That says when it was made."]
    - ["Each figure has a different face", "Content", "That is what you can see in it."]
    - ["It was made in the Qin heartland, in what is now Shaanxi province", "Origin", "That says where it was made."]
    - ["Some figures carried real bronze weapons", "Content", "That is something it contains."]
```

Was your guess right? Origin is about the maker, and when and where it was made. Content is about what is in the source.

One thing to watch: where a source was **found** is not always where it was **made**. The warriors were found in pits near the emperor's tomb. Historians record that too, but it is the findspot, not the origin.

## Practise: label the card

Now find the same things on the card itself. Watch for the sentence about where the figures were found.

```step
stage: practise
insight: "Labelling the card's own sentences moves from sorting facts someone pulled out to finding origin and content in the source, and gives the findspot note a check."
try: { playground: board, starter: "text.yml#run", height: 420 }
hint: ["Does the sentence say who made it, when or where it was made? Or what you can see in it?", "Found and made are different. Which sentence is about the pits?"]
check: { type: board, text: "Label each sentence: origin, content, or where it was found.", when: "n_right = 5", explain: "Craftsmen in Qin workshops, during the First Emperor's reign, is the origin. The soldier's armour and the different faces are content. The pits near the tomb are where the figures were found, not where they were made." }
```

## Worked example: a different source

```step
stage: investigate
insight: "Applying the three origin questions and the content question to a second source, and watching Nib run them together, shows why they must stay apart."
tasks:
  - check:
      type: sort
      q: "Source B is below. Is each fact about its origin or its content?"
      options: ["Origin", "Content"]
      items:
        - ["It was written before 217 BCE, in Qin territory", "Origin", "That says when and where it was made."]
        - ["It lists rules for looking after grain stores", "Content", "That is what it says."]
        - ["It was written by officials of the Qin government", "Origin", "That says who made it."]
        - ["It has rules and punishments for people who break them", "Content", "That is what it records."]
  - check:
      type: bug
      code: "working.txt#nib"
      text: "Nib is looking at Source A, the clay warrior. Click the first line where Nib's thinking goes wrong."
      answer: 3
      fault: logic
      misconception: origin-from-content
      explain: "Line 3: Nib has answered 'who made it?' by looking at what the figure shows. The warrior is dressed as a soldier, but that is its content. The origin is the craftsmen who made it in workshops."
    smaller:
      check: { type: question, q: "The warrior is dressed as a soldier. Does that tell you who made it?", options: ["No, it only shows what it looks like", "Yes, soldiers made figures of themselves", "Yes, it shows a Qin soldier, so the Qin army made it", "No, but it tells you when it was made"], answer: 0, feedback: [null, "That reads the maker off what it shows. The card says craftsmen made it.", "The figure shows a Qin soldier. That is content. Who shaped the clay is a different question.", "What it shows does not tell you when either. That is origin too, and you need the card for it."], explain: "What a source shows is its content. It does not tell you who made it." }
  - check:
      type: question
      q: "Why is it useful to ask origin and content as two separate questions?"
      options: ["Because what a source shows does not tell you who made it", "Because some sources have an origin and others have content", "Because origin matters more, so you ask it first", "Because the content of an old source is usually wrong"]
      answer: 0
      feedback: [null, "Every source has both. You ask both questions about every source.", "Neither matters more. You need both, and the order is not the point.", "Content is not usually wrong. It just does not answer the question of who made it."]
      explain: "A source can show one thing and be made by someone else. Asking both questions keeps them apart."
```

> **Source B: a bamboo slip.** A thin strip of bamboo with writing in ink. Many strips were tied together to make a page. These ones were buried with a Qin official in 217 BCE in a tomb at Shuihudi, in what is now Hubei province. They were written by officials of the Qin government. They list laws and rules, including rules for looking after grain stores and the punishments for people who break the rules.

### Ask the questions

Look at Source B. **Who** made it? Officials of the Qin government. **When**? Before 217 BCE, because that is when they were buried. **Where**? Somewhere in Qin territory. That is its origin. The tomb at Shuihudi is where the slips were **found**, which is useful to know but is not the same thing. **What** is in it? Rules for grain stores, and punishments. That is its content.

### Find Nib's mistake

Look at Source A, the clay warrior.

### Why keep them apart

## Vary: more sources

```step
stage: modify
insight: "Each task changes the case: origin of a new source, content of a new source, and a source with a tricky label."
tasks:
  - check:
      type: question
      q: "Source C is a stone inscription the First Emperor had set up on a mountain around 219 BCE. It says he brought peace and one set of laws and measures to all. What is its origin?"
      options: ["Made for the First Emperor, around 219 BCE, on a mountain", "It tells of peace and one set of laws and measures", "Made by the emperor's enemies, after he died", "It praises the emperor for uniting the land"]
      answer: 0
      feedback: [null, "That is what it says. That is content, not origin.", "Nothing on the card says that. It was set up by order of the emperor, around 219 BCE.", "That is what it says about him. That is content, not origin."]
      explain: "Origin is made for the First Emperor, around 219 BCE, on a mountain. What it says is its content."
  - check:
      type: question
      q: "Which of these is about Source C's content?"
      options: ["It says the emperor brought peace and one set of laws and measures", "It was made around 219 BCE", "It was set up on a mountain", "It was made for the First Emperor"]
      answer: 0
      feedback: [null, "That says when it was made, which is origin.", "That says where, which is origin.", "That says who it was made for, which is origin."]
      explain: "What the inscription says is its content. The others are about its origin."
  - check:
      type: sort
      q: "Source D is a museum label written in 2019 about the clay warriors. Is each fact about its origin or content?"
      options: ["Origin", "Content"]
      items:
        - ["It was written in 2019", "Origin", "That says when."]
        - ["It says each warrior was shaped in parts and then fitted together", "Content", "That is what it says."]
        - ["It was written by museum staff", "Origin", "That says who made it."]
        - ["It says the warriors were found by farmers in 1974", "Content", "That is something it reports."]
```

> **Source C: an inscription.** Words cut into stone, set up on a mountain by order of the First Emperor on one of his tours, around 219 BCE. It says the emperor brought peace and order, and that everyone now lives under one set of laws, weights and measures.

> **Source D: a museum label (made up for this lesson).** A short text on a card next to a clay warrior in a museum, written in 2019 by museum staff. It says each warrior was shaped in parts and fitted together, and that farmers digging a well found the first figures in 1974.

### Source C: origin

### Source C: content

### Source D

## Practise: both questions together

```step
stage: practise
insight: "Using both questions together on new sources until asking them separately feels natural."
tasks:
  - check:
      type: sort
      q: "Is each question about a source's origin or its content?"
      options: ["Origin", "Content"]
      items:
        - ["Who made it?", "Origin", "That asks about the maker."]
        - ["What does it show or say?", "Content", "That asks what is in it."]
        - ["When was it made?", "Origin", "That asks about the time."]
        - ["What can you see in it?", "Content", "That asks what is in it."]
  - check:
      type: question
      q: "Dev says: 'The inscription praises the emperor, so the emperor wrote it.' What is the best reply?"
      options: ["What it says is content. Who wrote it is a separate question", "That is right: people do not usually praise someone else", "No: it praises him, so his enemies must have written it", "No: it praises him, so it is false, and we cannot know the maker"]
      answer: 0
      feedback: [null, "Something can praise a person without being written by them. Rulers often had others make things for them.", "That still reads the maker off the content, just the other way round.", "Praise does not make it false, and it is a different question from who made it."]
      explain: "What the inscription says is its content. Who wrote it, and who had it made, is its origin."
```

### Sort the questions

### Dev's reply

## Make: your own source

```step
stage: make
insight: "Writing origin and content separately for a source you choose makes the two questions yours."
check: { type: reflect, text: "In my own book I picked a source (from our unit, or one of Sources A to D) and wrote its origin (who, when, where) and its content (what it shows or says) on two separate lines. A partner read it and gave feedback on whether the two were kept apart." }
```

Write it in your own book or document, not on this page. Your partner or teacher reads it.

## Typical: a source from another society

```step
stage: make
tier: typical
insight: "The same two questions work on a source from any society, so the skill moves with the student."
check:
  type: sort
  q: "Source E is a silver coin made in the Roman empire. It shows an emperor's head, with words around the edge. It was struck in Rome around 100 CE. Is each fact about its origin or its content?"
  options: ["Origin", "Content"]
  items:
    - ["It was struck in Rome", "Origin", "That says where it was made."]
    - ["It shows an emperor's head", "Content", "That is what it shows."]
    - ["It was made around 100 CE", "Origin", "That says when."]
    - ["It has words around the edge", "Content", "That is what is on it."]
```

## Wider: when the origin is unclear

```step
stage: make
tier: wider
insight: "Sometimes the origin is not known. That is itself something to say about a source."
check: { type: reflect, text: "I talked with a partner about a source where we do not know who made it or when (for example a small clay figure found with no record of where), and what we can still say about it." }
```

Typical and wider steps are extras on the same idea. You do not need them to finish the lesson.
