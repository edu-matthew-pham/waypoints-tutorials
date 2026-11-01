---
order: 1
unit: time
title: BCE, CE and putting events in order
node: AC9HH7S05 n1
summary: "Read and use the dating conventions historians use: BCE and CE (and the older BC and AD, which use the same numbers), and BP for times long before writing. BCE years count down towards year 1, so a bigger BCE number is earlier, and there is no year 0. Then put events in order on a timeline, because you cannot work out causes or changes until you know what came first."
language: maths
hook: "Confucius died in 479 BCE. The Qin unified China in 221 BCE. Could Confucius have met the First Emperor?"
---
Historians need one way of writing dates that everyone understands. The one used most today counts years from a starting point about 2,000 years ago.

- **CE** means *Common Era*. Years after the starting point count **up**: 1 CE, 2 CE, … 2026 CE. (Today's year is CE, so we usually leave the letters off.)
- **BCE** means *Before the Common Era*. Years before the starting point count **down** towards it: … 300 BCE, 200 BCE, 100 BCE, 1 BCE. So a **bigger** BCE number is **earlier**.
- **There is no year 0.** 1 BCE is followed straight away by 1 CE.

You will also see **BC** (*Before Christ*) and **AD** (*Anno Domini*, Latin for "in the year of the Lord"). They are an older way of writing the same thing: 221 BC is the same year as 221 BCE, and AD 9 is the same year as 9 CE. Swapping one for the other changes the letters, not the number.

## Predict: which came first?

```step
stage: predict
insight: "Committing to an answer first shows whether students still read BCE numbers like ordinary counting numbers."
check:
  type: predict
  q: "Which year came first: 500 BCE or 100 BCE?"
  options:
    - "500 BCE, because BCE years count down towards year 1"
    - "100 BCE, because 100 is a smaller number"
    - "They are the same distance from now, so neither"
    - "You can't tell without knowing what happened"
  actual: "500 BCE came first. BCE years count down, so 500 BCE was 400 years before 100 BCE."
```

## Try: how long did the Qin last?

```step
stage: run
insight: "Working out a span inside BCE makes students count in the right direction before they meet the year-0 trap."
check:
  type: number
  q: "The Qin dynasty unified China in 221 BCE and had fallen by 206 BCE. How many years did it rule all of China?"
  answer: 15
  feedback:
    - [427, "You added the two years. Both are BCE, so take the smaller number from the bigger one."]
    - [-15, "A length of time is never negative. 221 BCE to 206 BCE is 15 years forward."]
  explain: "221 − 206 = 15. Counting down from 221 BCE, the Qin lasted until 206 BCE: about 15 years."
```

Was your guess right? Inside BCE, time runs from the bigger number to the smaller one.

## Worked example: Nib's timeline

Nib is putting two dates in order.

| Event | Date |
|---|---|
| Confucius dies | 479 BCE |
| The Qin unify China | 221 BCE |

Nib's notes below are made up for this lesson.

```step
stage: investigate
insight: "Finding where Nib reads 479 as 'later' names the slip the hinge is about: treating BCE numbers like CE numbers."
tasks:
  - check:
      type: bug
      code: "timeline.txt#nib"
      text: "Click the first line where Nib's thinking goes wrong."
      answer: 3
      fault: logic
      misconception: bce-bigger-is-later
      explain: "Line 3: in BCE, a bigger number is earlier, not later. 479 BCE was 258 years before 221 BCE, so Confucius died long before the Qin unified China."
    hint: ["Is 479 BCE before or after 221 BCE?", "BCE years count down towards year 1, like a countdown."]
    smaller:
      check:
        type: question
        q: "A rocket countdown goes 10, 9, 8 … 3, 2, 1. Which number is called out first?"
        options:
          - "10, because a countdown starts at the top"
          - "3, because it is the smaller number"
          - "1, because it is the smallest number"
          - "They are called out at the same moment"
        answer: 0
        feedback:
          - null
          - "In a countdown, smaller numbers come later, closer to lift-off."
          - "1 is called out last, just before lift-off."
          - "Each number in a countdown comes after the one before it."
        explain: "BCE years work like a countdown to year 1: the bigger the number, the earlier."
  - check:
      type: match
      q: "Match each date to the same year written the other way."
      pairs:
        - ["221 BC", "221 BCE"]
        - ["AD 9", "9 CE"]
        - ["479 BC", "479 BCE"]
        - ["AD 105", "105 CE"]
      explain: "BC and BCE use the same numbers; so do AD and CE. Only the letters change, and AD usually goes before the number."
```

### Find Nib's mistake

### BC or BCE?

Many history books and museums now use BCE and CE, and many still use BC and AD. You need to read both.

## Vary: across the line

Back to the hook: 479 BCE is **before** 221 BCE, by 479 − 221 = 258 years. Confucius died more than 250 years before the Qin unified China, so he could never have met the First Emperor. His ideas, though, were still being taught and argued about.

The trap gets harder when a span crosses from BCE into CE.

```step
stage: modify
insight: "A span across BCE and CE tests the no-year-0 rule, which the plain subtraction hides."
hint: ["Count from 50 BCE to 1 BCE, then from 1 BCE to 50 CE.", "From 1 BCE to 1 CE is one year."]
check:
  type: number
  q: "A made-up Han official was born in 50 BCE and lived until 50 CE. Roughly how many years did he live? Remember there is no year 0."
  answer: 99
  feedback:
    - [100, "Close, but 50 + 50 counts a year 0 that never existed. From 1 BCE to 1 CE is one year, not two."]
    - [0, "50 BCE and 50 CE are not the same year: one is before the starting point and one is after."]
  explain: "49 years from 50 BCE to 1 BCE, then 50 years from 1 BCE to 50 CE: 99 years. Historians often round this to 'about 100 years'."
```

## Vary: BP, years before 1950

For times long before writing, scientists and archaeologists often write **BP**, *Before Present*. "Present" is fixed at the year **1950**, so the number never changes as years go by. 3,000 BP means about 3,000 years before 1950, which is about 1050 BCE. BP is used mostly for dates found by radiocarbon dating and for deep time, such as the first farming of millet in northern China, about 7,800 years ago.

```step
stage: modify
insight: "Placing BP beside BCE checks that students know what BP counts from and when it is used."
check:
  type: question
  q: "Why do archaeologists write 'about 7,800 BP' for early millet farming instead of a BCE date?"
  options:
    - "BP counts back from 1950, and suits dates from scientific tests"
    - "BP means 'before people', so it is used before humans lived"
    - "BP is the same as BC, written a newer way"
    - "BP dates count forward from the first farmers"
  answer: 0
  feedback:
    - null
    - "BP stands for Before Present, and people were farming millet then."
    - "BC counts from about 2,000 years ago; BP counts from 1950. They give different numbers."
    - "BP counts backwards, like BCE, from a fixed year: 1950."
  explain: "BP is years before 1950. It is used mostly for dates from radiocarbon dating and for deep time."
```

## Practise: put them on the timeline

Drag each point to its year, to the nearest 10 years. The line counts years, so further left is earlier.

- **A** Confucius dies, 479 BCE
- **B** The Qin unify China, 221 BCE
- **C** The Han government takes over the salt and iron trade, 119 BCE
- **D** Wang Mang takes the Han throne, 9 CE

```step
stage: practise
insight: "Placing BCE and CE dates on one line turns the countdown rule into a picture students can see."
try: { playground: board, starter: "timeline.yml#events", height: 300 }
hint: ["Which point goes furthest left?", "A is near 480 BCE, B near 220 BCE, C near 120 BCE. D is just to the right of the 'no year 0' mark."]
check: { type: board, text: "Drag A, B, C and D to their years, to the nearest 10 years.", when: "x(A) = -480 and x(B) = -220 and x(C) = -120 and x(D) = 10", explain: "A (480 BCE) is furthest left, then B (220 BCE), C (120 BCE) and D (10 CE). On a timeline, earlier is always to the left, whatever the letters say." }
```

## Make: a timeline for your class's society, in your book

```step
stage: make
insight: "Making their own timeline with dates written both ways makes the conventions theirs."
check: { type: reflect, text: "In my own book I drew a timeline of five events from the society our class is studying (or Qin and Han China), with each date in BCE or CE, and I wrote one sentence saying which came first and how many years before the next. A partner read it and gave feedback." }
```

Draw it in your own book or document, not on this page. Your partner or teacher reads it.

## Typical: gaps in the timeline

Timelines often have gaps: long stretches where we know very little.

```step
stage: make
tier: typical
insight: "Explaining why gaps happen links chronology to what survives, which the causes and perspectives lessons use."
check:
  type: sort
  q: "A class timeline of the Qin and Han has a gap. Sort each reason: is it a likely reason for a gap, or not a reason?"
  options: ["Likely reason for a gap", "Not a reason"]
  items:
    - ["Records were written on bamboo and silk, which rot", "Likely reason for a gap", "Most writing from that time has not survived."]
    - ["Archaeologists have not dug at every site", "Likely reason for a gap", "Some evidence is still in the ground."]
    - ["Court writers recorded what mattered to the court", "Likely reason for a gap", "Farmers' lives were rarely written down."]
    - ["Nothing happened in those years", "Not a reason", "People lived through every year; a gap is in our evidence, not in the past."]
```

ACARA's curriculum defines **history** as the period that begins when there are named people and written records; the time before is sometimes called *prehistory*. That is a convention. Many people point out that groups without writing still passed on their past in other ways, so "no writing" does not mean "no history".

## Wider: who chose the starting point?

```step
stage: make
tier: wider
insight: "Looking at other calendars shows that a dating system is a human choice, with a viewpoint built into it."
check:
  type: question
  q: "In Qin and Han China, documents often counted years by the ruler, such as 'the 30th year of the king'. What does that show about dating systems?"
  options:
    - "Societies pick their own starting point, and it shows what matters to them"
    - "Ancient China had no way of counting years until it borrowed one"
    - "Every society has always counted its years with BCE and CE"
    - "Counting by rulers is wrong, so historians cannot use those dates"
  answer: 0
  feedback:
    - null
    - "They counted years carefully, just from a different starting point: the ruler."
    - "BCE and CE are a recent choice. Many calendars have been used, and some still are."
    - "Historians convert reign years into BCE or CE; the old dates are still evidence."
  explain: "Counting by reign years starts again with each ruler, because the ruler was what mattered most to the officials keeping the records. Our own system is a choice too: BC and AD count from a date linked to Christianity, and BCE and CE keep those numbers with neutral names."
```

Typical and wider steps are extras on the same idea. You do not need them to finish the lesson.
