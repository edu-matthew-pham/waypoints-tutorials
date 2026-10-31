---
order: 3
unit: purpose
title: Why was it made, and what was going on?
node: AC9HH7S03 n2
summary: "Context asks what was going on when a source was made: not just the place, but the particular events and conditions around it. Purpose asks why it was made: to show power, to run a state, to honour someone, to record what happened. Two mistakes are common. 'Ancient China' is a setting, not a context. And 'it shows the emperor' is content, not purpose. Context and purpose together explain what a source includes and what it leaves out."
language: maths
hook: "The First Emperor had words cut into stone on mountains. Why would a ruler do that? What was going on that made it worth the trouble?"
---
Once you know **who** made a source and **what** it shows, two more questions help you read it.

**Context** is what was going on around the source when it was made. It is the particular events and conditions of the time, not just the place or the period. "Ancient China" is a place and a time, but it is not a context.

**Purpose** is **why** it was made. What was it for? What did the maker want people to do, think or remember?

For ancient sources, the maker rarely tells us the purpose. No Qin text says why the clay army was made, for example. Historians work out a likely purpose from the source, its context and other evidence, so purposes are often said with "probably" or "historians think".

Here is a source from the last lesson, with its context filled in.

> **Source C: an inscription.** Words cut into stone, set up on a mountain by order of the First Emperor on one of his tours, around 219 BCE. It says the emperor brought peace and order, and that everyone now lives under one set of laws, weights and measures. *Context:* a few years earlier the Qin had defeated six rival kingdoms and joined them into one empire. Many people in the new empire had been enemies of the Qin.

## Predict: a better context

```step
stage: predict
insight: "Committing first shows whether students reach for a setting ('ancient China') or a specific circumstance."
check:
  type: predict
  q: "Which is the best description of the context of the inscription in Source C?"
  options: ["The Qin had just joined six rival kingdoms into one empire", "It was made in ancient China", "It is made of stone", "It praises the emperor"]
  actual: "The Qin had just joined six rival kingdoms into one empire. That is what was going on. 'Ancient China' is only the setting, stone is how it was made, and praise is what it says."
```

## Try: match the purpose

```step
stage: run
insight: "Matching a source to what it was for shows that different sources of the same time have different jobs."
check:
  type: match
  q: "Each of these sources was made for a different reason. Match each source to its most likely purpose (for the ancient ones, this is what historians think)."
  pairs:
    - ["Source A: a clay warrior in the emperor's tomb", "Probably to guard and serve the emperor after his death"]
    - ["Source B: laws on bamboo slips", "To tell officials which rules to follow"]
    - ["Source C: a stone inscription on a mountain", "Probably to show his power and win people's support"]
    - ["Source D: a museum label", "To explain the warriors to visitors"]
```

Was your guess right? Notice that each source had a different job, even though three of them were made for the same ruler.

## Worked example: Source C

```step
stage: investigate
insight: "Working through one source with both questions shows the difference between a context, a setting and a purpose, and where Nib goes wrong."
tasks:
  - check:
      type: question
      q: "Which context explains why the First Emperor might want an inscription like Source C?"
      options: ["He had just joined rival kingdoms into one empire, so he probably wanted people to accept his rule", "It was set up in ancient China, during the time of the Qin emperors", "He was travelling on a tour of the mountains when it was carved", "The inscription says he had brought peace and order to everyone"]
      answer: 0
      feedback: [null, "That is a setting: a place and a period. It does not say what was happening.", "That is part of its origin (where and when). It does not explain why it was worth making.", "That is what the inscription says, which is content. Context is what was going on around it."]
      explain: "He had just united rival kingdoms. Many people in them had been Qin's enemies, so historians think he had good reason to tell them the new empire was good and here to stay."
  - check:
      type: bug
      code: "working.txt#nib"
      text: "Nib is working out the context and purpose of Source C. Click the first line where Nib's thinking goes wrong."
      answer: 2
      fault: logic
      misconception: context-is-setting
      explain: "Line 2: Nib has written 'ancient China'. That is the setting, not the context. The context is what was going on: the Qin had just defeated rival kingdoms and joined them into one empire."
    smaller:
      check: { type: question, q: "Which tells you more about what was going on around the inscription?", options: ["The Qin had just defeated rival kingdoms", "It was ancient China", "It was a long time ago", "It was in Asia"], answer: 0, explain: "The first one names an event. The others only name a place or a time." }
  - check:
      type: question
      q: "Which is the best statement of the likely purpose of Source C?"
      options: ["Probably to show the emperor's power and win people's support for his rule", "To show the emperor and the laws he made for everyone", "To say that the emperor brought peace and order", "To record the date of the emperor's tour of the mountains"]
      answer: 0
      feedback: [null, "That is what it shows, which is content. Purpose is why it was made.", "That is what it says, which is content. Purpose is what the maker wanted it to do.", "It may give a date, but a stone that praises him was not made just to log a trip. Ask what he wanted readers to think."]
      explain: "Purpose is what the maker wanted it to do. No one wrote down the purpose, but historians think showing power and winning support is the likely reason. 'It shows the emperor' only says what is in it."
```

### Find the context

### Find Nib's mistake

Look at Source C, the stone inscription.

### Say the purpose

## Vary: another source

```step
stage: modify
insight: "Applying both questions to a new source, and noticing how purpose changes who the source is for."
tasks:
  - check:
      type: question
      q: "Source B is a set of Qin laws on bamboo slips. Which is the best context?"
      options: ["The Qin were running a big state and needed officials everywhere to follow the same rules", "It was the Qin period in ancient China, more than 2000 years ago", "The slips were buried with an official in a tomb at Shuihudi", "The slips list rules for grain stores and punishments"]
      answer: 0
      feedback: [null, "That is only the setting: a place and a time.", "That is where they were found. It says nothing about what was going on when they were written.", "That is what the slips say, which is content."]
      explain: "The Qin ran a large empire with many officials. Writing the rules down meant officials everywhere could follow the same ones."
  - check:
      type: question
      q: "Who were the bamboo slips mainly written for?"
      options: ["Officials who had to follow the rules", "Everyone in the empire, to admire the emperor", "Farmers, so they knew what tax to pay", "The emperor, so he could check the officials"]
      answer: 0
      feedback: [null, "That sounds like the inscription. The slips were working rules for officials.", "The rules affected farmers, but the slips were kept by an official, not handed out to farmers.", "The emperor set the rules, but these copies were kept by a local official doing the job."]
      explain: "They were made as working rules for officials. That is a different purpose from the inscription, which was for everyone to see."
```

### Source B: context

### Source B: who for

## Practise: both questions

```step
stage: practise
insight: "Using context and purpose together on new cases, and correcting a purpose that is only content."
tasks:
  - check:
      type: question
      q: "The clay warriors were made for the First Emperor's tomb. No Qin text says why. Which is the best statement of their purpose?"
      options: ["Historians think they were probably made to guard and serve the emperor after his death", "They were made to show soldiers in armour with bronze weapons", "They were made to show the Qin army to visitors to the tomb", "They were made as practice by craftsmen learning to work clay"]
      answer: 0
      feedback: [null, "That is what they show, which is content.", "They were buried in pits and covered over, so they were not made to be seen by visitors.", "Thousands of life-size, finished figures placed in a royal tomb were not practice pieces."]
      explain: "The tomb was built for the emperor. Most historians think the army was made to guard or serve him after death, reasoning from where it was placed and what it shows. That is an inference, not something a Qin source tells us."
  - check:
      type: question
      q: "Ravi says: 'The purpose of the inscription is that it shows the emperor.' What is the best reply?"
      options: ["That is what it shows. The purpose is why it was made", "That is right: what it shows is its purpose", "Nearly: its purpose is that it shows the emperor's laws", "Nearly: its purpose is that it is on a mountain"]
      answer: 0
      feedback: [null, "'Shows the emperor' says what is in it. That is content.", "Laws are still content: what it says. Purpose is what the maker wanted it to do.", "The mountain is where it was set up, which is origin. Purpose is why."]
      explain: "What a source shows is its content. Its purpose is what the maker wanted it to do."
```

### The tomb warriors

### Ravi's answer

## Make: your own source

```step
stage: make
insight: "Writing a specific context and a purpose for a source of your own makes the questions yours."
check: { type: reflect, text: "In my own book I picked a source (from our unit, or one of Sources A to D) and wrote its context (what was going on, not just the place) and its purpose (why it was made). A partner read it and gave feedback on whether either was only a setting or only content." }
```

Write it in your own book or document, not on this page. Your partner or teacher reads it.

## Typical: what the purpose leaves out

```step
stage: make
tier: typical
insight: "A source made to persuade shows what its maker wants shown, so its purpose shapes what is left out."
check:
  type: question
  q: "Suppose a stone inscription was made to show the emperor's power and win support. Which is it least likely to include?"
  options: ["Anything that made him look bad, such as people who disliked his rule", "Praise for how he brought peace and order", "The new laws, weights and measures he set up", "The kingdoms he defeated to make his empire"]
  answer: 0
  feedback: [null, "That is just what it was made to include.", "It says he brought one set of laws, so this is included.", "Victories make a ruler look strong, so a source like this would happily name them."]
  explain: "A source made to win support is unlikely to show people who disagreed. Its purpose shapes what it leaves out."
```

## Wider: who was it written for?

```step
stage: make
tier: wider
insight: "Even a history can be shaped by who it was written for."
check:
  type: question
  q: "Sima Qian wrote his history for the Han court, about 100 years after the Qin had fallen. Which is the best point to make about this?"
  options: ["His readers belonged to the dynasty that replaced the Qin, which could shape what he chose to say", "A history written by a careful court historian can be taken as the whole truth", "He lived after the Qin, so he could not have known anything about them", "He wrote long after, so his history is a primary source for the Qin"]
  answer: 0
  feedback: [null, "Even careful histories are written by someone, for someone.", "He could use older records and stories. The point is who he was writing for.", "Written long after makes it secondary for the Qin, not primary."]
  explain: "Who a source was written for can shape it. That does not make it wrong, but it is worth asking."
```

Typical and wider steps are extras on the same idea. You do not need them to finish the lesson.
