---
order: 3
unit: change
title: How did contact change the ancient world?
node: AC9HH7K12 n3
summary: "Explain how contact drove change in the ancient world, connecting causes to effects: Roman demand for Chinese silk, reached through traders in between (indirect contact between Rome and the Han), and Buddhism reaching China along trade routes in the later Han. Ancient societies did not develop alone: much of what changed in them came from meeting others, even at a distance."
language: maths
hook: "Rich Romans wore Chinese silk, but no Roman we know of ever met a Han merchant. How did the silk get there?"
---
In the last two lessons you looked at causes, then at effects. Historians join them up into a **chain**: a cause leads to a contact, the contact has effects, and the effects change the societies involved, sometimes for centuries. That is what it means to call contact a **driver of change**.

Two chains from the Han period:

> **Silk to Rome.** Silk came from China, and people in the Roman Empire wanted it. It was light, soft and very expensive, a sign of wealth. But Rome and Han China never traded face to face. Silk was passed from trader to trader across Central Asia, Persia and India, and each one added to the price. Roman writers had only a hazy idea of where it came from: they called the silk-makers the *Seres*, "the silk people". One Roman writer, Pliny the Elder, complained that Rome was sending huge sums east to pay for luxuries such as silk. Historians call this **indirect contact**: two societies affected each other without meeting.

> **Buddhism to China.** Buddhism began in India, centuries before the Han. Merchants and monks travelled the same routes as silk and horses, and they brought their beliefs with them. By 65 CE a Chinese record mentions a Han prince who followed Buddhism. In 148 CE a monk from Parthia (in what is now Iran), called An Shigao, arrived at the Han capital, Luoyang, and began putting Buddhist texts into Chinese. Over the next centuries Buddhism became one of the main religions of China.

Look at how each chain runs: a want (silk, or spreading a belief) leads to contact along the trade routes, and the contact changes what people wear, spend and believe.

## Predict: how did Buddhism arrive?

```step
stage: predict
insight: "Committing first shows whether students imagine ideas arriving by conquest or decree, rather than along trade routes."
check:
  type: predict
  q: "Buddhism began in India and later became a major religion in China. How do you think it first reached China?"
  options:
    - "Merchants and monks carried it along the trade routes"
    - "An Indian army conquered China and made people follow it"
    - "A Han emperor invented it and later found it was also in India"
    - "It started in China on its own, with no link to India"
  actual: "Along the trade routes. Merchants and monks travelled with goods, and brought their beliefs with them."
```

## Try: cause, contact, change

```step
stage: run
insight: "Placing each link in a chain shows how causes and effects join up into change."
check:
  type: sort
  q: "Is each one a cause, a contact, or a change that came from it?"
  options: ["Cause", "Contact", "Change"]
  items:
    - ["Rich Romans wanted soft, expensive silk", "Cause", "A want that started the chain."]
    - ["Silk passed from trader to trader across Asia", "Contact", "The meeting point: trade in between."]
    - ["Roman money flowed east to pay for luxuries", "Change", "What Rome's spending did."]
    - ["Monks travelled the trade routes into China", "Contact", "People and ideas moving together."]
    - ["Buddhist texts were put into Chinese at Luoyang", "Change", "Something new inside Han China."]
    - ["Monks wanted to spread their teaching", "Cause", "A reason to make the journey."]
```

Was your guess right? Ideas travelled with goods along the same routes.

## Worked example: no society alone

```step
stage: investigate
insight: "Joining causes to effects, then catching Nib's 'they each developed on their own', shows contact as a driver of change."
tasks:
  - check:
      type: match
      q: "Match each chain to the change it led to."
      pairs:
        - ["Roman demand for silk, met through traders in between", "Rome spent large sums on goods from the East"]
        - ["Monks and merchants on the trade routes", "Buddhism began to grow in China"]
        - ["Han conquest of the Hexi Corridor", "A safer route west for envoys and traders"]
  - check:
      type: bug
      code: "working.txt#nib"
      text: "Nib is comparing Rome and Han China. Click the first line where Nib's thinking goes wrong."
      answer: 3
      fault: logic
      misconception: societies-developed-alone
      explain: "Line 3: Nib says the two societies developed on their own because they never met. They never met face to face, but Roman demand for silk changed what Romans wore and spent, and the same routes carried Buddhism into China. Contact can drive change even at a distance."
    smaller:
      check:
        type: question
        q: "A rich Roman buys a silk robe. The silk came from China, passed on by several traders. Has China affected Rome?"
        options:
          - "Yes: Chinese silk changed what rich Romans wore and spent, even without meeting"
          - "No: the Roman never met anyone from China, so there was no contact"
          - "No: the traders in between cancel out any link to China"
          - "Yes, but only because a Chinese army brought the silk to Rome"
        answer: 0
        feedback:
          - null
          - "Contact does not have to be face to face. The silk itself came from China."
          - "Traders in between passed the silk on. The link was still there."
          - "No Han army reached Rome. Traders carried the silk."
        explain: "That is indirect contact: a society changed by another it never met."
  - check:
      type: question
      q: "Why do historians call the link between Rome and Han China 'indirect contact'?"
      options:
        - "They affected each other through traders in between, without meeting face to face"
        - "Because Roman and Han armies fought each other, but only far from home"
        - "Because they sent letters to each other instead of meeting"
        - "Because they had no effect on each other at all"
      answer: 0
      feedback:
        - null
        - "Rome and the Han never fought. The link was trade."
        - "There is no record of regular letters between the two emperors. Goods passed through other hands."
        - "Silk changed Roman spending. That is an effect, even though it was indirect."
      explain: "Indirect means through others: goods passed from hand to hand across Asia."
```

### Join the chain

### Find Nib's mistake

### Indirect contact

## Vary: what if the routes closed?

```step
stage: modify
insight: "Imagining a chain cut shows how much change depended on contact."
check:
  type: question
  q: "Imagine the trade routes across Central Asia had been closed for good in 100 BCE. What would most likely have been different?"
  options:
    - "Less silk in Rome, and Buddhism would have reached China later or by another way"
    - "Nothing, because Rome and Han China never met anyway"
    - "Rome would have conquered China to get the silk itself"
    - "Buddhism would have reached China sooner, because monks would walk faster"
  answer: 0
  feedback:
    - null
    - "They never met, but the routes still carried silk and ideas. Closing them cuts the chain."
    - "China was far beyond Rome's reach. Rome could not even reach it by trade directly."
    - "Monks used the trade routes. Closing them would slow ideas down, not speed them up."
  explain: "Much of the change came through the routes. Cut the contact and the change slows or stops."
```

## Practise: contact as a driver

```step
stage: practise
tasks:
  - check:
      type: question
      q: "Which statement best explains contact as a driver of change in the ancient world?"
      options:
        - "Contact through trade, war and travel brought new goods, beliefs and rulers that changed societies"
        - "Each ancient society changed only because of things that happened inside it"
        - "Contact only mattered when one society conquered another"
        - "Contact changed rulers, but ordinary people's lives stayed the same"
      answer: 0
      feedback:
        - null
        - "Things inside a society matter too, but silk and Buddhism came from outside."
        - "Rome never conquered China, yet silk changed Roman spending. Trade and travel count."
        - "Buddhism changed what many ordinary people believed. Contact reached beyond rulers."
      explain: "Trade, war and travel all carried change between societies."
  - check:
      type: sort
      q: "Did each change come mainly through trade, or through conquest?"
      options: ["Trade", "Conquest"]
      items:
        - ["Silk reached rich Romans", "Trade", "Passed on by traders in between."]
        - ["The Han held the Hexi Corridor", "Conquest", "A Han army drove the Xiongnu out."]
        - ["Grapes and alfalfa came to be grown in China", "Trade", "New crops arrived from the west."]
        - ["Buddhist monks reached Luoyang", "Trade", "They travelled the trade routes."]
insight: "Practising the full chain, and the different routes change took."
```

### The best explanation

### Trade or conquest?

## Make: one chain of change, in your book

```step
stage: make
insight: "Writing one connected cause-to-effect chain for their own society makes the waypoint their own."
check: { type: reflect, text: "In my own book I wrote one chain of change for a contact or conflict (Han China, or the society our class is studying): what caused it, what kind of contact it was, and what it changed, with a real example at each link. A partner read it and gave feedback." }
```

Write it in your own book or document, not on this page. Your partner or teacher reads it.

## Typical: Ashoka and the spread of Buddhism

```step
stage: make
tier: typical
insight: "ACARA's Indian example: a conquest that led to a ruler spreading a belief."
check:
  type: question
  q: "The Mauryan emperor Ashoka conquered Kalinga, in eastern India, in the eighth year of his reign. Afterwards he turned to Buddhism, had his teachings carved on rocks and pillars, and, according to a later Sri Lankan chronicle, sent his son and daughter to Sri Lanka to teach it. What is the best description of this chain? (See the India card on the Reference page.)"
  options:
    - "A conquest led a ruler to change, and he used contact with other lands to spread Buddhism"
    - "A conquest, and nothing more: Kalinga was taken and the story ends there"
    - "Buddhism spread only by war, because Ashoka's armies forced people to follow it"
    - "Sri Lanka conquered India and brought Buddhism back with it"
  answer: 0
  feedback:
    - null
    - "The war was where the chain started. Ashoka's turn to Buddhism came after it."
    - "Ashoka turned away from war after Kalinga. He spread Buddhism by teaching and messages."
    - "It was the other way: teachers went from India to Sri Lanka."
  explain: "Conquest, a change in the ruler, then contact that carried a belief to new places: one chain of change."
```

## Wider: Rome borrows gods

```step
stage: make
tier: wider
insight: "ACARA's Roman example: beliefs from conquered and trading lands changed Rome itself."
check:
  type: question
  q: "As Rome's empire grew, many Romans began to worship gods from other lands, such as Isis from Egypt and Mithras, linked with Persia. What does this show? (See the Rome card.)"
  options:
    - "Contact changed the conqueror too: Roman beliefs took in gods from the lands Rome met"
    - "Rome forced Egypt and Persia to worship Roman gods, and nothing came back"
    - "Roman religion stayed the same, because conquerors do not borrow ideas"
    - "Isis and Mithras were Roman gods that Egypt and Persia copied"
  answer: 0
  feedback:
    - null
    - "Ideas travelled the other way too: Isis was worshipped across the Roman Empire."
    - "Conquerors often borrow. Rome took in gods, foods and ideas from the lands it ruled."
    - "Isis came from Egypt. The Romans took her in, not the other way round."
  explain: "Contact runs both ways: even a powerful empire was changed by the societies it met."
```

Typical and wider steps are extras on the same idea. You do not need them to finish the lesson.
