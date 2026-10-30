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
  q: "Each of these sources was made for a different reason. Match each source to its purpose."
  pairs:
    - ["Source A: a clay warrior in the emperor's tomb", "To guard and honour the emperor after his death"]
    - ["Source B: laws on bamboo slips", "To tell officials which rules to follow"]
    - ["Source C: a stone inscription on a mountain", "To show his power and win people's support"]
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
      options: ["He had just joined rival kingdoms into one empire and wanted people to accept his rule", "He liked carving stone", "Stone lasts a long time", "China is a big country"]
      answer: 0
      feedback: [null, "That is not something we know, and it does not explain the timing.", "Stone is a good material for a lasting message, but that is not what was going on at the time.", "That is true, but it is a fact about the place. It does not explain why he made this at this time."]
      explain: "He had just united rival kingdoms. Many people in them had been Qin's enemies, so he had reason to tell them the new empire was good and here to stay."
  - check:
      type: bug
      code: "working.txt#nib"
      text: "Nib is working out the context and purpose of Source C. Click the line where Nib's thinking goes wrong."
      answer: 2
      fault: logic
      misconception: context-is-setting
      explain: "Line 2: Nib has written 'ancient China'. That is the setting, not the context. The context is what was going on: the Qin had just defeated rival kingdoms and joined them into one empire."
    smaller:
      check: { type: question, q: "Which tells you more about what was going on around the inscription?", options: ["The Qin had just defeated rival kingdoms", "It was ancient China", "It was a long time ago", "It was in Asia"], answer: 0, explain: "The first one names an event. The others only name a place or a time." }
  - check:
      type: question
      q: "Which is the best statement of the purpose of Source C?"
      options: ["To show the emperor's power and win people's support for his rule", "To show the emperor", "To say the emperor brought peace", "To be made of stone"]
      answer: 0
      feedback: [null, "That is what it shows, which is content. Purpose is why it was made.", "That is what it says, which is content. Purpose is what the maker wanted it to do.", "That is how it was made. Purpose is what it was for."]
      explain: "Purpose is what the maker wanted it to do. Showing power and winning support is a reason. 'It shows the emperor' only says what is in it."
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
      options: ["The Qin were running a huge new empire and needed officials everywhere to follow the same rules", "It was ancient China", "Bamboo grows in China", "Officials like rules"]
      answer: 0
      feedback: [null, "That is only the setting.", "That is a fact about the material, not about what was going on.", "That does not explain why these particular laws were written down."]
      explain: "The Qin ran a large empire with many officials. Writing the rules down meant officials everywhere could follow the same ones."
  - check:
      type: question
      q: "Who were the bamboo slips mainly written for?"
      options: ["Officials who had to follow the rules", "Everyone in the empire, to admire the emperor", "Visitors to a museum", "Historians in the future"]
      answer: 0
      feedback: [null, "That sounds like the inscription. The slips were for working officials.", "Museums did not exist then. The slips were made for officials at the time.", "The slips were made to be used then, not to be studied later."]
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
      q: "The clay warriors were made for the First Emperor's tomb. Which is the best purpose?"
      options: ["To guard the emperor and honour him after his death", "To show soldiers in armour", "To be found by farmers", "To be in a museum"]
      answer: 0
      feedback: [null, "That is what they show, which is content.", "The farmers found them long after. They were made for a different reason.", "They were not made for a museum. That came much later."]
      explain: "The tomb was built for the emperor. The army was made to guard and honour him."
  - check:
      type: question
      q: "Ravi says: 'The purpose of the inscription is that it shows the emperor.' What is the best reply?"
      options: ["That is what it shows. The purpose is why it was made", "That is right, it shows the emperor", "Inscriptions have no purpose", "The purpose is to be made of stone"]
      answer: 0
      feedback: [null, "'Shows the emperor' says what is in it. That is content.", "Everything that is made has a reason. We are asking what it was.", "That is how it was made, not what it was for."]
      explain: "What a source shows is its content. Its purpose is what the maker wanted it to do."
```

### The tomb warriors

### Ravi's answer

## Make: your own source

```step
stage: make
insight: "Writing a specific context and a purpose for a source of your own makes the questions yours."
check: { type: reflect, text: "In my own book I picked a source (from our unit, or one of Sources A to D) and wrote its context (what was going on, not just the place) and its purpose (why it was made). A partner read it and agreed neither was only a setting or only content." }
```

Write it in your own book or document, not on this page. Your partner or teacher reads it.

## Typical: what the purpose leaves out

```step
stage: make
tier: typical
insight: "A source made to persuade shows what its maker wants shown, so its purpose shapes what is left out."
check:
  type: question
  q: "A stone inscription was made to show the emperor's power and win support. Which is it least likely to include?"
  options: ["Anything that made him look bad, such as people who disliked his rule", "Praise of the emperor", "The empire's new laws", "The name of the emperor"]
  answer: 0
  feedback: [null, "That is just what it was made to include.", "It says he brought one set of laws, so this is included.", "Of course it names him."]
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
  options: ["His readers belonged to the dynasty that replaced the Qin, which could shape what he chose to say", "A history is always the whole truth", "He could not have known anything", "Han court historians wrote nothing about the Qin"]
  answer: 0
  feedback: [null, "Even careful histories are written by someone, for someone.", "He could use older records and stories. The point is who he was writing for.", "He wrote a great deal about the Qin."]
  explain: "Who a source was written for can shape it. That does not make it wrong, but it is worth asking."
```

Typical and wider steps are extras on the same idea. You do not need them to finish the lesson.
