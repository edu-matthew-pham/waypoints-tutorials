---
order: 2
unit: differ
title: Why historians tell it differently
node: AC9HH7S07 n2
summary: "Historians can interpret the same event differently, and more than one interpretation can stand at once. The differences usually come from three places: different evidence (what they can see), different questions (what they are trying to find out) and different values (what they think matters). The worked case is the fall of the Qin, as Han writers explained it and as some historians explain it today."
language: maths
hook: "Writers of the Han dynasty said the Qin fell because it was cruel. Some historians today, reading Qin documents dug up from the ground, aren't so sure. Is one side wrong?"
---
Historians have explained the fall of the Qin in different ways. Here are three, in our own words. None of them is *the* answer.

**A. Han writers** (Jia Yi and Sima Qian, writing within about a century of the Qin's fall)
The Qin ruled by force and harsh laws and did not care for its people, so when the revolt came, nobody defended it.

**B. Some historians today**
Qin law texts dug up at Shuihudi (found in 1975) and Liye (found in 2002) show a detailed set of laws that officials applied with some care. These historians think Han writers may have made the Qin sound crueller than it was. They look harder at other parts of the story: a sudden crisis at court after the First Emperor died, when his advisers plotted over who would rule, and the old states rising up again.

**C. One archaeologist's question**
In 2014 the archaeologist Gideon Shelach asked whether the Qin really "collapsed" at all, or **changed into** the Han, since the Han kept so much of what the Qin built.

## Predict: why the difference?

```step
stage: predict
insight: "Committing first shows whether students explain disagreement as lying or as a difference in evidence, questions and values."
check:
  type: predict
  q: "Why might careful historians explain the Qin's fall in different ways?"
  options:
    - "They had different evidence, questions or values"
    - "One of them must be lying about what happened"
    - "They just have different opinions, and none can be checked"
    - "The older historians knew less, so they are simply wrong"
  actual: "Usually all three: they can see different evidence (law texts dug up since 1975), they ask different questions (what lesson for rulers? how did the state work? was it a collapse at all?), and they hold different values. Several interpretations can stand at once."
```

## Try: who says what?

```step
stage: run
insight: "Matching each interpretation to its main explanation makes students read the three closely before asking why they differ."
check:
  type: match
  q: "Match each interpretation to its main explanation."
  pairs:
    - ["A. Han writers", "Harsh rule with no care for the people"]
    - ["B. Some historians today", "A crisis at court and the old states rising"]
    - ["C. Gideon Shelach's question", "Perhaps a change into the Han, not a collapse"]
  explain: "Three interpretations of the same event. Next: why they differ."
```

Was your guess right? Each one uses evidence. They are not rival facts.

## Worked example: where the difference comes from

| | A. Han writers | B. Some historians today |
|---|---|---|
| **Evidence they could use** | Accounts and stories passed down at the Han court | The same accounts, **plus** Qin law texts dug up since 1975 |
| **Question they asked** | What lesson should rulers learn from the Qin? | How did the Qin state actually work, day to day? |
| **Values** | Confucian: a good ruler cares for the people. They also wrote for the Han, who had replaced the Qin, so historians think they had reasons to make the Qin look bad. | Historians today aim to test old accounts against every kind of evidence. |

So the difference is not that one side is lying. They had **different evidence**, asked **different questions**, and held **different values**.

Nib's notes below are made up for this lesson.

```step
stage: investigate
insight: "Catching Nib's 'one side must be lying' names the slip; the match practises naming the kind of reason behind each difference."
tasks:
  - check:
      type: bug
      code: "differ.txt#nib"
      text: "Click the first line where Nib's thinking goes wrong."
      answer: 3
      fault: logic
      misconception: differ-means-one-lying
      explain: "Line 3: different interpretations don't mean someone is lying. Han writers and historians today had different evidence, asked different questions and held different values. Both built their arguments from evidence."
    hint: ["Can two honest people read the same facts differently?", "Look at the worked example table: what is different in each row?"]
    smaller:
      check:
        type: question
        q: "Two honest coaches watch the same match. One says the team lost because of its defence; the other says it was the attack. Why might they differ?"
        options:
          - "Each noticed different things and cares about different things"
          - "One of them must be lying about what happened in the match"
          - "One of them didn't really watch the match at all"
          - "The final score must have been different for each of them"
        answer: 0
        feedback:
          - null
          - "Both can be honest. What did each one notice?"
          - "Both watched it. They focused on different things."
          - "The score is a fact they agree on. It's the 'why' they differ about."
        explain: "Same facts, different focus and different values: two honest explanations."
  - check:
      type: match
      q: "Match each difference to where it comes from."
      pairs:
        - ["Historians today can read Qin law texts dug up since 1975", "Different evidence"]
        - ["Han writers believed a good ruler must care for the people", "Different values"]
        - ["Shelach asks whether the Qin collapsed at all", "A different question"]
      explain: "Evidence, questions and values: the three usual sources of different interpretations."
```

### Find Nib's mistake

### Where it comes from

## Vary: closer means right?

```step
stage: modify
insight: "Checks the slip that closeness in time, or newness, settles which interpretation is right."
check:
  type: question
  q: "Han writers lived much closer to the Qin than historians today. Does that make their interpretation the right one?"
  options:
    - "Not on its own: they had their own values and less evidence"
    - "Yes, mostly: people closer in time usually knew best"
    - "No: newer interpretations are always the right ones"
    - "No: nobody can ever say anything true about the Qin"
  answer: 0
  feedback:
    - null
    - "That treats closeness as the deciding thing. Being close helps, but they wrote for the dynasty that replaced the Qin, and they had less evidence than we do."
    - "Newer isn't always better; it depends on the evidence and reasoning."
    - "Some things are well established, such as the dates. Interpretations are argued about."
  explain: "Neither closeness nor newness decides it. Historians weigh the evidence and the reasoning."
```

## Practise: the best summary

```step
stage: practise
insight: "Choosing the summary that keeps several interpretations standing checks the 'not simply right' criterion."
check:
  type: question
  q: "Which sentence best sums up the interpretations of the Qin's fall?"
  options:
    - "Several can stand; they differ in evidence, questions and values"
    - "The Han writers were right and historians today are wrong"
    - "Historians today are right and the Han writers were wrong"
    - "Nobody knows anything about the Qin, so all views are equal"
  answer: 0
  feedback:
    - null
    - "That treats one interpretation as the answer. What does each one rely on?"
    - "Today's historians argue their case; they don't simply win it."
    - "Some views are better supported than others; that isn't 'all equal'."
  explain: "Different interpretations can stand at once. Explaining why they differ is the historian's job."
```

## Make: two interpretations, in your book

```step
stage: make
insight: "Writing two interpretations and one reason they differ is the checkpoint in their own words."
check: { type: reflect, text: "In my own book I described two different interpretations of one event or person from the society our class is studying (or the fall of the Qin), and wrote at least one reason they differ: different evidence, different questions or different values. A partner read it and gave feedback." }
```

Write it in your own book or document, not on this page. Your partner or teacher reads it.

## Typical: the end of the Western Roman Empire

In 476 CE the last emperor in the west of the Roman Empire was removed. Historians have explained the end of the Western empire in different ways: some stress a **failing economy**, some stress **political upheaval** (emperors quickly replacing each other), and some stress **invasion** by outside groups. Many combine them.

```step
stage: make
tier: typical
insight: "ACARA's own example of a declining empire shows different interpretations stressing different causes."
check:
  type: question
  q: "Historians stress different causes for the end of the Western Roman Empire. What does that show?"
  options:
    - "They stress different causes from the evidence, and many combine them"
    - "One cause must be the true one, so most of them are wrong"
    - "Nobody knows that the Western Roman Empire ended"
    - "The economy, politics and invasions had nothing to do with each other"
  answer: 0
  feedback:
    - null
    - "Big events usually have several causes; historians argue about which mattered most."
    - "That it ended is a fact; why is the interpretation."
    - "Many historians argue the causes made each other worse."
  explain: "Interpretations differ in which causes they stress and how they link them."
```

## Wider: how is a debate settled?

```step
stage: make
tier: wider
insight: "Seeing how new evidence and argument move a debate, without always settling it, shows how interpretations coexist."
check:
  type: question
  q: "How do historians usually respond to competing interpretations?"
  options:
    - "Test them against new evidence; some debates settle, others stay open"
    - "Vote, and the interpretation with the most votes becomes a fact"
    - "Always keep the first interpretation anyone wrote"
    - "Stop studying the event until everyone agrees"
  answer: 0
  feedback:
    - null
    - "Agreement doesn't turn an argument into a fact."
    - "The first explanation is often challenged when new evidence turns up."
    - "Debate is how history moves forward."
  explain: "New evidence and better arguments can shift a debate. Some questions stay open, and that's normal."
```

Typical and wider steps are extras on the same idea. You do not need them to finish the lesson.
