---
order: 1
unit: wants
title: Needs, wants and why wanting never stops
node: AC9HE7K01 n1
summary: "A need is something you must have to be safe and well, such as water, food, shelter and clothing. A want is something you would like but could live without. People can meet their needs, but their wants keep growing: when one want is met, another takes its place. This is the first step towards scarcity, so it matters that wants are a permanent part of life and not a problem that enough stuff would solve."
language: maths
hook: "Mia saves up for a new bike and buys it. A month later she wants a helmet to match. What is going on, and will it ever stop?"
---
A **need** is something you must have to be safe and well, such as clean water, food, a place to live and clothes to keep you warm. A **want** is something you would like but could live without, such as a games console or the newest trainers.

Needs are few and can be met. Wants are different: they keep growing. That difference is where this whole topic starts.

## Predict: need or want?

```step
stage: predict
insight: "Committing to an answer shows the test: could you stay safe and well without it?"
check:
  type: predict
  q: "Which of these is a need?"
  options: ["Clean water to drink", "The newest phone", "A brand-name school bag", "A ticket to a concert"]
  actual: "Clean water. You cannot stay well without it. The others are things people would like, which makes them wants."
```

## Try: sort them

```step
stage: run
insight: "Sorting makes the test usable: a need keeps you safe and well, a want is something you would like."
check:
  type: sort
  q: "Is each thing a need or a want?"
  options: ["Need", "Want"]
  items:
    - ["Food", "Need", "You cannot stay well without it."]
    - ["A winter coat in a cold town", "Need", "It keeps you warm and safe."]
    - ["A games console", "Want", "You can live well without one."]
    - ["A place to sleep", "Need", "Shelter keeps you safe."]
    - ["Concert tickets", "Want", "You would like to go, but you can live without it."]
    - ["The newest trainers", "Want", "Shoes are a need, but this particular pair is a want."]
```

Was your guess right? Notice the trainers. You need something to put on your feet, but the newest pair is a want. A thing can have a need inside it and still be a want in the way you ask for it.

## Worked example: wanting does not stop

```step
stage: investigate
insight: "Following Mia shows that meeting a want does not end wanting. Nib's reasoning is planted as the mistake."
tasks:
  - check:
      type: question
      q: "Mia buys a new bike. A month later she wants a helmet in the same colour. What does this show?"
      options: ["Meeting one want often leads to another", "Mia was not really happy", "Mia needs a helmet more than a bike", "Mia wasted her money"]
      answer: 0
      feedback: [null, "She can be happy and still want more. Wanting does not stop when you are happy.", "A helmet to match is a want. Her need is already met.", "This is about how wants work, not about whether the money was well spent."]
      explain: "Wants do not run out. When one is met, a new one often turns up, and people can usually think of something more."
  - check:
      type: bug
      code: "working.txt#nib"
      text: "Nib is explaining Mia's story. Click the line where Nib's thinking goes wrong."
      answer: 3
      fault: logic
      misconception: enough-stuff-ends-wanting
      explain: "Line 3: Nib thinks that if factories made enough, wanting would stop. Mia shows the opposite. Each want she met made a new one, so more stuff does not end wanting."
    smaller:
      check: { type: question, q: "Mia got her new bike. What did she want next?", options: ["A matching helmet, then a bell and a phone holder", "Nothing at all", "To sell the bike", "A second bike exactly the same"], answer: 0, explain: "Her wanting did not stop. It moved on to the next thing." }
  - check:
      type: question
      q: "Which best explains why people's wants never run out?"
      options: ["Meeting one want usually shows you another", "People are greedy", "There is never enough of anything", "Shops keep making new things"]
      answer: 0
      feedback: [null, "Wanting more is normal for everyone. It is not a fault in some people.", "There being too little is a later idea. Here the point is about wanting itself.", "Advertising and new products can add to wants, but wants would grow even without them."]
      explain: "Each want met tends to show you the next one, so the list keeps growing."
```

### Wanting keeps going

```worked
\text{Name the need} :: Mia's need is a way to get around, and her old bike already does that.
\text{Name the want} :: A new bike, then a matching helmet, a bell and a phone holder.
\text{Ask what happens next} :: After each want is met, a new one appears.
\text{So} :: Wants are not a problem that enough stuff would solve. They keep growing.
```

Now: what does Mia's story show?

### Find Nib's mistake

### Why wanting never ends

## Vary: more needs and wants

```step
stage: modify
insight: "Each task changes the case: a reason for a need, then the same bike story with a new twist."
tasks:
  - check:
      type: question
      q: "Which reason shows that something is a need?"
      options: ["You cannot stay safe and well without it", "Everyone you know has one", "You would be sad without it", "It costs a lot"]
      answer: 0
      feedback: [null, "Lots of people having something does not make it a need.", "Being sad is real, but a want can make you sad too. A need is about staying safe and well.", "Price does not decide it. Water is cheap and a need."]
      explain: "A need is something you cannot do without and stay safe and well."
  - check:
      type: sort
      q: "In Mia's town, is each thing a need or a want?"
      options: ["Need", "Want"]
      items:
        - ["Clean drinking water", "Need", "Nobody stays well without it."]
        - ["A second pair of sunglasses", "Want", "One pair is enough, and you can live without any."]
        - ["A roof that keeps the rain out", "Need", "Shelter keeps you safe and dry."]
        - ["A bigger bedroom", "Want", "A place to sleep is a need, but a bigger one is a want."]
  - check:
      type: question
      q: "Mia gets her helmet. Dev just got a new skateboard. What is most likely to happen next?"
      options: ["Both of them will soon want something else", "Both stop wanting things", "Mia stops, and Dev goes on wanting", "They swap, and then they are happy"]
      answer: 0
      feedback: [null, "Wanting does not stop because you got something.", "It works the same way for everyone.", "Swapping might help, but new wants still turn up."]
      explain: "It works the same way for everyone: a want that is met gives way to another."
```

### Why it is a need

### Need or want in town

### What happens next

## Practise: who has what

```step
stage: practise
insight: "Repeating the sort and the explanation on new cases so the test becomes a habit."
tasks:
  - check:
      type: sort
      q: "Is each thing a need or a want for Sam, a Year 7 student?"
      options: ["Need", "Want"]
      items:
        - ["Lunch at school", "Need", "Food keeps Sam well."]
        - ["A pair of designer headphones", "Want", "Sam can listen to music without them."]
        - ["A jumper on a cold day", "Need", "It keeps Sam warm."]
        - ["A new game", "Want", "Sam can live well without it."]
  - check:
      type: question
      q: "Sam says: 'When I have the new game, I will not want anything else.' What is the best reply?"
      options: ["Wanting tends to carry on: a new want usually turns up", "That is right, once you have it you are done", "You will want everything", "Games are not wants"]
      answer: 0
      feedback: [null, "Think about Mia. Did she stop wanting once she had the bike?", "That goes too far. People want different things at different times.", "A game is something you would like but could live without, so it is a want."]
      explain: "People often feel finished, then something else turns up. That is how wants work."
```

### Need or want

### Sam's plan

## Make: your own examples

```step
stage: make
insight: "Writing your own examples from your own life is how the idea becomes yours."
check: { type: reflect, text: "In my own book I wrote two needs and two wants from my own life, with a reason for each, and one example of a want that appeared after I got something I wanted. A partner read it and agreed." }
```

Write it in your own book or document, not on this page. Your partner or teacher reads it.

## Typical: a whole town's wants

```step
stage: make
tier: typical
insight: "A town has many people, and the wants of all of them together are large. The same idea at a larger size."
check:
  type: question
  q: "A town of 2000 people each write down three things they want for the town. About how many items on the list are there?"
  options: ["Around 6000", "Exactly 3", "Around 100", "Nobody can say"]
  answer: 0
  feedback: [null, "Each person wrote three, and there are 2000 people.", "That is far fewer than 2000 people times three.", "Roughly 3 times 2000 is a good guess."]
  explain: "About 6000 items, and many people will name different things. A community's wants add up to a very long list."
```

## Wider: where wants come from

```step
stage: make
tier: wider
insight: "How wants are shaped from outside: advertising can add to them."
check: { type: reflect, text: "I found an ad and said what want it was trying to start in me, and whether that want was there before I saw it." }
```

## Wider: is it a need today?

```step
stage: make
tier: wider
insight: "What counts as a need changes with time and place."
check: { type: reflect, text: "I talked with a partner about whether internet access is a need today, and what we would have said fifty years ago." }
```

Typical and wider steps are extras on the same idea. You do not need them to finish the lesson.
