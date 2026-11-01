---
order: 1
unit: view
title: What it says, and whose eyes it sees through
node: AC9HH7S06 n1
assumes: [AC9HS6S04 n1]
summary: "Every source does two things at once: it describes something (its content), and it shows the point of view of the person who made it (its perspective). A perspective comes from who the maker was: their position, their group, their culture and their time. Four questions get you from one to the other: who made it, what was their position, what would they notice and value, so what perspective does it show?"
language: maths
hook: "A Han court historian wrote about the Xiongnu, the herding people to the north. He tells us how they lived. What else does he tell us without meaning to?"
---
A source tells you about **what it describes**: that is its **content**. It also tells you about **the person who made it**: what they noticed, what they thought was normal, what they liked and disliked. That second thing is the source's **perspective**, its point of view.

A perspective is not the same as a lie. Everyone sees from somewhere. A historian's job is to notice where.

These four questions get you there:

1. **Who made it?**
2. **What was their position?** (their job, their group, where and when they lived)
3. **What would someone in that position notice, and care about?**
4. **So what perspective does the source show?**

Here is a source retold in our own words (not a translation). **Sima Qian** was a historian at the Han emperor's court, writing around 100 BCE. In his history he described the **Xiongnu**, a herding people to the north. Han writers say Xiongnu horsemen often raided the Han border. No writing of the Xiongnu's own has been found.

> The Xiongnu live in the north. They move with their herds, following water and grass. They have no walled cities and do not farm. Their boys learn to ride and shoot when they are small. The strong eat the best food and the old get what is left: they look down on the old and weak. They do not know proper behaviour.

## Predict: what does it tell us about?

```step
stage: predict
insight: "Committing first shows whether students read the last line as a fact about the Xiongnu or as a view of the writer."
check:
  type: predict
  q: "'They do not know proper behaviour.' What does this sentence tell a historian most about?"
  options:
    - "What Sima Qian thought counted as proper behaviour"
    - "How the Xiongnu actually behaved every day"
    - "Nothing at all, because it is only an opinion"
    - "What the Xiongnu thought about themselves"
  actual: "It tells us most about Sima Qian: what a Han court official thought proper behaviour was. The Xiongnu had their own customs; he judged them by Han ones."
```

## Try: what it reports, or the writer's view?

```step
stage: run
insight: "Sorting lines into what is reported and what is the writer's view is the content-versus-perspective distinction in its simplest form."
check:
  type: sort
  q: "Sort each part of Sima Qian's description."
  options: ["What it reports", "The writer's view"]
  items:
    - ["They move with their herds, following water and grass", "What it reports", "A description of how they lived."]
    - ["They have no walled cities and do not farm", "What it reports", "A description that could be checked against other evidence."]
    - ["They look down on the old and weak", "The writer's view", "This is his judgement of the custom, not the custom itself."]
    - ["They do not know proper behaviour", "The writer's view", "Proper by whose rules? His."]
```

Was your guess right? The same source holds both.

## Worked example: the four questions

| Question | For Sima Qian on the Xiongnu |
|---|---|
| Who made it? | Sima Qian, a historian at the Han court |
| What was his position? | An educated official of a farming empire with walled cities, writing, and strong ideas about respecting elders. The Xiongnu were the Han's dangerous rivals. |
| What would he notice and care about? | Everything different from Han life: no farms, no cities, no writing, a different way of treating the old. Raids on the border. |
| So what perspective does it show? | A Han court official's view of a rival people, judging them by Han ideas of proper behaviour |

The **content** (they herd, ride and move with the grass) is still useful evidence. The **perspective** tells you how to read it: as one side's view.

Nib's notes below are made up for this lesson.

```step
stage: investigate
insight: "Finding where Nib writes a summary of the content as 'the perspective' names the slip the hinge is about; the second check ties perspective to the maker's position."
tasks:
  - check:
      type: bug
      code: "view.txt#nib"
      text: "Click the first line where Nib's thinking goes wrong."
      answer: 3
      fault: logic
      misconception: perspective-is-content
      explain: "Line 3: that is the content: what the source describes. The perspective is whose eyes it sees through: a Han court official judging a rival people by Han rules."
    hint: ["A perspective answers 'from where is this seen?', not 'what happened?'.", "For each of Nib's lines, ask: does it tell you about the people described, or about the person describing them?"]
    smaller:
      check:
        type: question
        q: "A fan of one football team writes: 'The other team won, but only because the referee was terrible.' What is the writer's perspective?"
        options:
          - "A supporter of the losing team, who wants a reason for the loss"
          - "The other team won the match"
          - "The referee made some decisions in the match"
          - "There is no perspective, because a match really happened"
        answer: 0
        feedback:
          - null
          - "That is what happened: the content. Who is telling it, and how do they feel about it?"
          - "That is part of the content too. Ask whose side the writer is on."
          - "A real event can still be told from one side."
        explain: "The content is the result; the perspective is the losing supporter's point of view."
  - check:
      type: question
      q: "Which fact about Sima Qian best explains his perspective on the Xiongnu?"
      options:
        - "He worked for the Han court, whose border the Xiongnu raided"
        - "He wrote his history on bamboo strips in ink, by hand"
        - "He wrote about many other peoples as well as the Xiongnu"
        - "He lived more than two thousand years before us"
      answer: 0
      feedback:
        - null
        - "That is how he wrote, not where he saw from."
        - "True, but it doesn't explain how he saw this people."
        - "When he lived matters, but his position at the Han court matters more here."
      explain: "His position, a Han official whose empire was at war with the Xiongnu, shaped what he noticed and how he judged it."
```

### Find Nib's mistake

### Where he stood

## Vary: the emperor's own words

You may have met this source before, as Source C. It is words cut into stone, set up on a mountain by order of the First Emperor on one of his tours, around 219 BCE. In our words: it praises the emperor as a ruler without equal. It says he brought peace and order, that everyone now lives in peace, and that everyone lives under one set of laws, weights and measures.

```step
stage: modify
insight: "A second source with a very different maker checks that students can find the perspective, not only the content, on their own."
check:
  type: question
  q: "Whose perspective does the Qin stone inscription show?"
  options:
    - "The emperor's and his officials', who had it carved in his praise"
    - "Every person in the Qin empire, who all agreed with it"
    - "Nobody's, because it is carved in stone, so it is a record"
    - "Historians' today, because we are the ones reading it"
  answer: 0
  feedback:
    - null
    - "We have no sign that farmers or conquered peoples agreed. Who chose the words?"
    - "Carving makes it last, not neutral. Somebody chose what to say."
    - "We bring our own questions, but the source's perspective is its maker's."
  explain: "The inscription shows the ruler's view of his own reign. That is useful evidence of how he wanted to be seen."
```

## Practise: colour the source

```step
stage: practise
insight: "Colouring the same retold text into what it reports and the writer's view shows both running through one source, phrase by phrase."
try: { playground: board, starter: "text.yml#run", height: 400 }
hint: ["For each part, ask: is this how they lived, or what he thought of it?", "Look for the words that judge."]
check: { type: board, text: "Colour what the source reports one colour and the writer's view another.", when: "chains_ok = 2 and n_stray = 0", explain: "Moving with their herds, following water and grass, no walled cities, not farming, and boys learning to ride and shoot are reported. Looking down on the old and weak and not knowing proper behaviour are Sima Qian's judgements." }
```

## Make: a perspective, in your book

```step
stage: make
insight: "Running the four questions on a source from their own study makes the move theirs."
check: { type: reflect, text: "In my own book I chose one source from the society our class is studying (or one in this lesson), answered the four questions, and wrote one sentence on what it describes and one on the perspective it shows. A partner read it and gave feedback." }
```

Write it in your own book or document, not on this page. Your partner or teacher reads it.

## Typical: Greek writers and 'barbarians'

Ancient Greek writers called people who did not speak Greek *barbaroi*. Historians think the word first imitated how other languages sounded to Greek ears ("bar-bar").

```step
stage: make
tier: typical
insight: "A word one group used for everyone else shows perspective in a single word, in another society."
check:
  type: question
  q: "What does the Greek word 'barbaroi' mostly tell a historian?"
  options:
    - "How Greek speakers saw everyone who did not speak Greek"
    - "That the peoples it named all spoke the same language"
    - "That non-Greek peoples called themselves barbaroi"
    - "Nothing, because it is only a word, not a source"
  answer: 0
  feedback:
    - null
    - "It lumped many different peoples and languages together."
    - "It was the Greeks' word for others, not others' word for themselves."
    - "Words in a source carry its maker's perspective too."
  explain: "One group's name for everyone else shows that group's view of who was normal and who was outside."
```

## Wider: two sides of one battle

Around 1274 BCE, Egypt and the Hittite empire fought at **Kadesh**, in what is now Syria. Pharaoh Ramesses II had the battle carved on temple walls across Egypt as his great victory. Hittite records tell it differently, and about fifteen years later the two powers made a peace treaty.

```step
stage: make
tier: wider
insight: "Two accounts from opposite sides show how a maker's position shapes a whole story, not just a word."
check:
  type: question
  q: "What should a historian do with the Egyptian and Hittite accounts of Kadesh?"
  options:
    - "Read each as its side's view and compare them with other evidence"
    - "Believe the Egyptian one, because it is carved in stone"
    - "Believe the Hittite one, because Ramesses was boasting"
    - "Throw both out, because they disagree"
  answer: 0
  feedback:
    - null
    - "Carving made it last; it didn't make it neutral."
    - "Each side had a reason to tell it its way. Neither wins by default."
    - "Disagreeing sources are useful: each shows a side's perspective."
  explain: "Each account shows its maker's perspective. Comparing them, and other evidence, gets closer to what happened."
```

Typical and wider steps are extras on the same idea. You do not need them to finish the lesson.
