---
order: 2
unit: women
title: What did women do, and how do we know?
node: AC9HH7K10 n2
summary: "Describe some of the roles of women in Qin and Han China, identify the kinds of evidence about their lives, and explain how women influenced the society even though rules and customs limited them. Most writing that survives was by elite men, so evidence about most women is thin, and historians say what they cannot know."
language: maths
hook: "Most of what we read about Han China was written by men who worked for the court. What does that leave out?"
---
Historians want to know about everyone in a society, not only the people in charge. For women in Qin and Han China, that is harder, because of **who did the writing**. Most writing that survives was by educated men working for the court, and they mostly wrote about government, war and other men.

So historians piece women's lives together from several kinds of evidence:

> **Ban Zhao** (born about 45 CE, died about 117 CE) was a scholar at the Han court. After her brother died, she helped finish the *Book of Han*, the official history of the earlier Han. She taught the empress and other women at court, and wrote *Lessons for Women*, a book for the young women of her family about how they should behave as wives and daughters: modest, hard-working and obedient. Readers today disagree about it.

> **Empress Lü** was the wife of the first Han emperor. After he died in 195 BCE, she held power for about fifteen years as empress dowager and regent, putting her own relatives in high positions. Most of what we know about her comes from Sima Qian, a Han court historian writing later, who disapproved of her.

> **Tomb objects.** Han tombs hold pottery figures and pictures of women working: spinning and weaving, cooking, serving and entertaining. They show work that the written histories rarely mention.

Each kind tells you something different, and each has limits. A book telling women how to behave tells you what an educated woman at court thought they *should* do. It does not tell you what every woman actually did.

## Predict: why is it harder?

```step
stage: predict
insight: "Committing first shows whether students connect thin evidence to who made the sources."
check:
  type: predict
  q: "Why do historians know less about the lives of most women in Han China than about officials?"
  options:
    - "Most surviving writing was by men at court"
    - "Women did nothing important, so there was nothing to write"
    - "All the sources about women were deliberately destroyed"
    - "Women in Han China were not allowed to write"
  actual: "Who did the writing. Educated men at court wrote most of what survives, and they wrote mostly about government. Some women did write (Ban Zhao, below). The gap is a limit of the evidence, not a sign that women did nothing."
```

## Try: what kind of evidence?

```step
stage: run
insight: "Sorting the evidence by who made it prepares students to judge what each can show."
check:
  type: sort
  q: "Sort each piece of evidence about women in Han China by who made it."
  options: ["Written by a woman", "Written by a man", "An object, not writing"]
  items:
    - ["Ban Zhao's Lessons for Women", "Written by a woman", "Ban Zhao wrote it herself."]
    - ["Sima Qian's account of Empress Lü", "Written by a man", "A court historian wrote it, years later."]
    - ["A pottery figure of a woman at a loom", "An object, not writing", "A made thing from a tomb."]
    - ["A tomb painting of women preparing food", "An object, not writing", "A picture, not a written text."]
```

Was your guess right? Knowing who made a source is the first step to knowing what it can tell you.

## Worked example: reading the evidence

```step
stage: investigate
insight: "Judging what Lessons for Women can show, then catching Nib's 'few sources means no influence', keeps the limits of evidence separate from what really happened."
tasks:
  - check:
      type: question
      q: "What can Lessons for Women best tell historians?"
      options:
        - "What one educated woman at court thought women should do"
        - "How every woman in Han China actually lived"
        - "That women in Han China had no say in anything"
        - "Nothing, because it was written by a woman"
      answer: 0
      feedback:
        - null
        - "It is advice from one elite woman, not a record of every woman's life. Farmers' wives may have lived very differently."
        - "Ban Zhao herself taught the empress and helped write a history. The book is advice, not proof that women had no say."
        - "Who wrote it shapes what it can tell you; it does not make it useless."
      explain: "A book about how people should behave is evidence of expectations, from one person's point of view."
  - check:
      type: bug
      code: "working.txt#nib"
      text: "Nib is writing about women in Han China (Nib's notes are made up for this lesson). Click the first line where Nib's thinking goes wrong."
      answer: 3
      fault: logic
      misconception: little-evidence-no-influence
      explain: "Line 3: Nib treats the lack of written sources as proof that women had no influence. The sources are thin because of who did the writing. Ban Zhao and Empress Lü both shaped the Han court, and tomb objects show women's work everywhere."
    smaller:
      check:
        type: question
        q: "Nobody wrote a book about the farmers in one village. Does that mean they did nothing?"
        options:
          - "No: it means nobody wrote about them, not that they did nothing"
          - "Yes: if it is not written down, it did not happen"
          - "Yes: only important people did anything"
          - "No: but we can make up what they probably did"
        answer: 0
        feedback:
          - null
          - "Most of what happened in the past was never written down."
          - "Farmers grew the food everyone ate. Not being written about is not the same as not mattering."
          - "Historians do not make things up; they look for other kinds of evidence, like objects."
        explain: "Missing evidence is a limit of the sources, not proof that nothing happened."
  - check:
      type: question
      q: "How did Empress Lü influence Han society?"
      options:
        - "She held power at court as regent for about fifteen years"
        - "She wrote the official history of the Han"
        - "She had no influence because women could not hold power"
        - "She ruled with the title of emperor"
      answer: 0
      feedback:
        - null
        - "That was Ban Zhao, who helped finish the Book of Han."
        - "Rules and customs limited women, but Empress Lü held real power as empress dowager and regent."
        - "She ruled as empress dowager and regent for young emperors, not with the title of emperor."
      explain: "She ruled as regent and put her relatives in high positions. Some women held great power, usually through family: as mothers, wives and widows of rulers."
```

### What can the book tell us?

### Find Nib's mistake

Read Nib's notes (made up for this lesson). Which line turns a gap in the evidence into a claim about women?

### Empress Lü

## Vary: one woman for all?

```step
stage: modify
insight: "Seeing the opposite slip, one elite source standing for everyone, practises judging whose life a source shows."
check:
  type: question
  q: "Mei, a made-up student, says: 'Ban Zhao was a scholar at court, so women in Han China were all educated.' What is the best reply?"
  options:
    - "Ban Zhao came from a powerful, educated family, so she was not typical"
    - "That is right, because she taught other women at court"
    - "No: Ban Zhao only finished a book her brother wrote"
    - "No: women in Han China were not allowed to learn to read"
  answer: 0
  feedback:
    - null
    - "Teaching women at court shows what was possible for a few at the top, not what was usual."
    - "She finished the Book of Han after her brother died and wrote her own books. She was a scholar."
    - "Ban Zhao could read and write, and taught others. Some women could; most people of any kind probably could not."
  explain: "Her life does not show what most women's lives were like. An elite person's life shows what was possible at the top, not what was typical."
```

## Practise: what each kind can show

```step
stage: practise
check:
  type: match
  q: "Match each kind of evidence to what it can best show about women in Han China."
  pairs:
    - ["Ban Zhao's Lessons for Women", "What an educated woman thought women should do"]
    - ["Sima Qian's account of Empress Lü", "What a court historian thought of a powerful woman"]
    - ["Pottery figures of women at work in tombs", "Kinds of work women did, at least in households that could afford such tombs"]
    - ["The lack of writing about farm women", "A gap in the evidence, not proof they did nothing"]
insight: "Matching sources to what they can show checks the evidence skill on its own."
```

## Make: women and the evidence, in your book

```step
stage: make
insight: "Writing two roles, one source and its limit for their own society makes the evidence habit theirs."
check: { type: reflect, text: "In my own book I wrote two roles women had in a society (Han China, or the one our class is studying), one piece of evidence for them, and one thing that evidence cannot tell us. A partner read it and gave feedback." }
```

Write it in your own book or document, not on this page. Your partner or teacher reads it.

## Typical: women in Egypt

```step
stage: make
tier: typical
insight: "ACARA's Egyptian example shows the same evidence questions in another society."
check:
  type: question
  q: "Egyptian tomb paintings and funerary texts often show women of wealthy families. What should a historian keep in mind? (See the Egypt card.)"
  options:
    - "They show families rich enough for decorated tombs, not poorer women"
    - "They show every Egyptian woman exactly as she lived"
    - "Paintings are art, so they cannot be used as evidence"
    - "They prove that Egyptian women had no legal rights"
  answer: 0
  feedback:
    - null
    - "Tombs were made for those who could pay for them. That shapes what we see."
    - "Pictures are evidence; you ask who made them and for whom."
    - "Records show some Egyptian women owned property and made contracts. Paintings alone do not prove they had no rights."
  explain: "Whose tomb it is shapes what the picture shows."
```

## Wider: Athens and Sparta

```step
stage: make
tier: wider
insight: "Comparing two societies shows that women's roles were not the same everywhere."
check:
  type: question
  q: "Writers in Athens and Sparta described women's lives differently: Spartan women were said to exercise and manage property, while many Athenian women of wealthy families were expected to stay mostly at home. What is the best conclusion? (See the Athens and Sparta card.)"
  options:
    - "Roles depended on the society, and the writers were mostly men"
    - "Spartan women were completely equal to Spartan men"
    - "All Greek women lived much the same way as each other"
    - "The sources disagree, so we cannot trust either one"
  answer: 0
  feedback:
    - null
    - "Spartan women had more freedom in some ways, but they still could not be citizens who voted or fought."
    - "Athens and Sparta are a clear case of difference."
    - "Different societies can produce different evidence. Disagreement is a reason to compare, not to throw both out."
  explain: "Roles varied between societies, and the evidence is filtered through who wrote it."
```

Typical and wider steps are extras on the same idea. You do not need them to finish the lesson.
