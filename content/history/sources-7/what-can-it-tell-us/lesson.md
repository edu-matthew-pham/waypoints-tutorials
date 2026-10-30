---
order: 4
unit: together
title: What can this source tell us?
node: AC9HH7S03 n3
summary: "The four questions (origin, content, context, purpose) are used together to decide what a source can and cannot tell us about a particular question. A source is rarely useful or useless on its own: it depends on what you are asking. A stone inscription made to win support is poor evidence of what ordinary people thought of the emperor, but good evidence of how he wanted to be seen."
language: maths
hook: "The First Emperor's inscription says everyone now lives in peace. Can we use it to find out whether people really did? Or can it tell us something else?"
---
You now have four questions to ask of any source.

**Origin**: who made it, when and where. **Content**: what it shows or says. **Context**: what was going on. **Purpose**: why it was made.

On their own they just describe the source. Together, they help you decide **what it can tell you**, and what it can't. That depends on what you want to find out.

## Predict: what can it tell us?

```step
stage: predict
insight: "Committing first shows whether students treat a source as simply true or untrue instead of asking what it can tell us about this question."
check:
  type: predict
  q: "The First Emperor had an inscription cut into stone saying everyone lived in peace under his rule. Can it tell us whether everyone really did?"
  options: ["Not reliably: it was made to praise him, so it shows how he wanted to be seen", "Yes: it is carved in stone so it must be true", "No: it can tell us nothing at all", "Yes: it was made at the time"]
  actual: "Not reliably. It was made to win support, so it is better evidence of how he wanted to be seen than of what everyone thought. That is still useful."
```

## Try: put the questions in order

```step
stage: run
insight: "Ordering the four questions, then the conclusion, shows that the conclusion comes last and is built from the others."
check:
  type: parsons
  code: "chain.txt#order"
  text: "Put the four questions, and what they let you say, in order."
```

Each question gives you something for the next. You ask about the maker first, then what it shows, then what was going on, then why it was made. Only then do you say what the source can tell you.

## Worked example: Source C

```step
stage: investigate
insight: "Using all four answers about one source on one question shows how the conclusion is built, and how to say what a source cannot tell us."
tasks:
  - check:
      type: question
      q: "You want to know: What did the First Emperor want people to think of him? Which conclusion about Source C is best?"
      options: ["It shows he wanted to be seen as a ruler who brought peace and order, because it was made to win support", "It proves everyone loved him", "It tells us nothing, because it praises him", "It is a secondary source, so it is not useful"]
      answer: 0
      feedback: [null, "It was made to praise him, so it cannot prove what everyone felt.", "A source made to praise him is very good evidence of how he wanted to be seen.", "It was made during his reign, so it is primary. It is also useful for this question."]
      explain: "A source made to win support is good evidence of how its maker wanted to be seen."
  - check:
      type: question
      q: "Now you want to know: Did ordinary people in the conquered kingdoms like the new empire? What can Source C tell you about that?"
      options: ["Not much: it was made to win their support, so it won't show people who disagreed", "A lot: it says everyone lives in peace", "Nothing, because it is old", "Everything, because it is carved in stone"]
      answer: 0
      feedback: [null, "It says that, but it was made to say that. Ask who made it, and why.", "Age does not decide it. Its purpose does.", "Being carved in stone makes it last. It does not make it a complete picture."]
      explain: "The same source is good for one question and weak for another. Its purpose helps you see which."
  - check:
      type: question
      q: "Which of these is the best way to finish a sentence about what a source can tell us?"
      options: ["'Source C shows how the emperor wanted to be seen, but it cannot show what people really thought.'", "'Source C is true.'", "'Source C is a stone.'", "'Source C is old.'"]
      answer: 0
      feedback: [null, "True or false does not say what the source is good for.", "That only says what it is made of.", "Age does not say what the source can tell us."]
      explain: "A good conclusion names what the source can tell us and what it cannot."
```

### Pick the conclusion

### A different question

### Say it in a sentence

## Vary: the same questions on a new source

```step
stage: modify
insight: "Changing the source and the question shows that the same four questions give different conclusions."
tasks:
  - check:
      type: question
      q: "You want to know: What rules did Qin officials have to follow? Which source is best, B (laws on bamboo slips) or C (the inscription)?"
      options: ["Source B: it was written for officials, to tell them the rules", "Source C: it is carved in stone", "Neither: they are both old", "Source C: it mentions laws"]
      answer: 0
      feedback: [null, "Being carved in stone is not what makes it useful here. Think about its purpose.", "Both were made at the time, so they are not just old. Look at their purposes.", "It mentions laws, but only to praise him. The slips list the rules."]
      explain: "Source B was made to tell officials the rules, so it fits the question. Source C was made to show power."
  - check:
      type: question
      q: "Source D, the 2019 museum label, says the warriors were found by farmers in 1974. Which question is Source D good evidence for?"
      options: ["How the warriors were found in the 1970s", "What the First Emperor thought of himself", "How officials were trained", "What life was like in 219 BCE"]
      answer: 0
      feedback: [null, "It was written in 2019, long after, by people who were not there.", "The label is about the warriors, not about training. It cannot tell us that.", "It was written long after 219 BCE, by museum staff."]
      explain: "The label is a secondary source about the warriors. It is good for how they were found and how museums explain them today, not for what the emperor thought."
```

### Choose the source

### The museum label

## Practise: say what a source can tell us

```step
stage: practise
insight: "Using all four questions on a fresh case, and writing the conclusion in a form that names its limit."
tasks:
  - check:
      type: question
      q: "A clay warrior was made for the First Emperor's tomb. Which is the best conclusion about what it can tell us?"
      options: ["It shows what Qin soldiers' armour and weapons looked like, and how much the emperor spent on his tomb", "It tells us what every Qin person believed", "It tells us nothing, because it is made of clay", "It is true because it is a statue"]
      answer: 0
      feedback: [null, "It was made for one man's tomb. It cannot tell us about everyone.", "Clay is not the test. Its origin and purpose are.", "A statue is not true or false. Ask what it shows and why it was made."]
      explain: "Its content shows armour and weapons. Its purpose and context show how much the emperor invested in his tomb."
  - check:
      type: reflect
      text: "I took one source, asked who made it, what it shows, what was going on and why it was made, and then said one thing it can tell us and one thing it cannot."
```

### The warriors

### The sentence

## Make: your own source

```step
stage: make
insight: "Using all four questions in your own words on a source from your own unit is the whole skill."
check: { type: reflect, text: "In my own book I picked a source (from our unit, or one of Sources A to D) and a question, wrote its origin, content, context and purpose, then one sentence on what it can tell us and what it cannot. A partner read it and agreed it names a limit." }
```

Write it in your own book or document, not on this page. Your partner or teacher reads it.

## Typical: a source that looks back

```step
stage: make
tier: typical
insight: "A secondary source gets the same four questions, but its origin and purpose are modern."
check:
  type: question
  q: "Apply the four questions to Source D, the museum label. Which is the best sentence about what it can tell us?"
  options: ["It tells us how museum staff in 2019 explain the warriors, and what has been found since. It cannot tell us what people in the Qin thought", "It tells us what Qin people thought", "It is useless because it is modern", "It is true because it is in a museum"]
  answer: 0
  feedback: [null, "It was written in 2019 by museum staff. It was not there.", "Modern is not useless. It is useful for different questions.", "Being in a museum does not make a source true."]
  explain: "The label's origin and purpose are modern, so it can tell us about modern knowledge, not about the Qin directly."
```

## Wider: two sources that look different

```step
stage: make
tier: wider
insight: "Different purposes can make different sources give different pictures of the same time."
check:
  type: question
  q: "Source C says everyone lives in peace under one set of laws. Source B lists punishments for people who break the rules. Why might they give different pictures?"
  options: ["They had different purposes: one to win support, one to tell officials the rules", "One of them must be wrong", "Source B is older", "Stone and bamboo are different materials"]
  answer: 0
  feedback: [null, "Neither has to be wrong. They were made for different jobs.", "Both were made at the time, so one is not simply older.", "The material does not explain the difference. The purpose does."]
  explain: "Sources made for different jobs show different sides. Together they give a fuller picture than either alone."
```

Typical and wider steps are extras on the same idea. You do not need them to finish the lesson.
