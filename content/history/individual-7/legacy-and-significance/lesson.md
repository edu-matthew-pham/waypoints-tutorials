---
order: 3
unit: legacy
title: What lasted, and how was he remembered?
node: AC9HH7K13 n3
summary: "Describe the First Emperor's legacy within and beyond his lifetime: his dynasty fell about fifteen years after unification, but the Han kept his officials, commanderies, script and measures for centuries. Explain how people at the time and later writers saw him, from the praise on his own inscriptions to the tyrant of Han writers, and why significant does not mean good."
language: maths
hook: "His dynasty lasted about fifteen years. The way of running China that he set up lasted about two thousand. How can both be true?"
---
A person's **legacy** is what they leave behind: what carried on, and what changed, because of them, during their life and after it.

**What did not last.** The First Emperor died in 210 BCE, on a tour of his empire. Within a year, conscripted labourers rebelled (you met their revolt, according to Sima Qian, in *People and power*), and fighting spread. The Qin dynasty fell in 206 BCE, about fifteen years after it united the kingdoms. Historians think the heavy demands for labour, tax and harsh punishment helped turn many people against the Qin.

**What did last.** The Han dynasty, which replaced the Qin and ruled for about four hundred years, kept much of what he had set up:

- appointed officials running commanderies and counties (the Han also gave kingdoms to relatives for a time);
- one shared written script, which shaped Chinese writing from then on;
- standard weights, measures and coins;
- the idea of one emperor ruling one empire.

Later dynasties kept the same basic way of running China for about two thousand years.

**How people saw him.** Opinions about him have never agreed:

- **At the time:** his own stone inscriptions praise him for bringing peace, order and one set of laws and measures. They were made for him, so historians read them as his message, not as a fair judgement.
- **Han writers:** Sima Qian and others writing for the Han described him as harsh and cruel. The writer Jia Yi argued that the Qin fell because it ruled by force and did not care for its people. These writers worked for the dynasty that replaced his, so they had reasons to make the Qin look bad.
- **Since then:** some writers have praised him for uniting China; others have condemned his cruelty. Historians today look at both: what he built, and what it cost.

That disagreement is part of why he is **significant**. Significant means *important to history*: changed many lives, effects lasted, still argued about. It does not mean *good*. A person can be very significant and still have done terrible things.

## Predict: lasting or not?

```step
stage: predict
insight: "Committing first shows whether students think a short-lived dynasty means a short-lived legacy."
check:
  type: predict
  q: "The Qin dynasty fell about fifteen years after unification. What most likely happened to the First Emperor's way of running the empire?"
  options:
    - "The next dynasty, the Han, kept much of it: officials, commanderies, script and measures"
    - "It disappeared completely when the Qin fell"
    - "The Han brought back the seven old kingdoms exactly as they had been"
    - "Nobody ruled China for hundreds of years afterwards"
  actual: "The Han kept much of it. The dynasty was short, but the system lasted for centuries."
```

## Try: what lasted?

```step
stage: run
insight: "Sorting what ended and what carried on separates the dynasty's fate from the legacy."
check:
  type: sort
  q: "Did each one end soon after he died, or carry on into the Han and later?"
  options: ["Ended soon after", "Carried on"]
  items:
    - ["The Qin family ruling China", "Ended soon after", "The Qin fell in 206 BCE."]
    - ["Appointed officials running commanderies", "Carried on", "The Han kept them."]
    - ["One shared written script", "Carried on", "Chinese writing stayed shared across the empire."]
    - ["Standard weights and measures", "Carried on", "The Han kept them."]
    - ["The Second Emperor's rule", "Ended soon after", "The Qin dynasty collapsed within a few years."]
    - ["One emperor ruling one empire", "Carried on", "Later dynasties kept the idea."]
```

Was your guess right? A short dynasty can leave a long legacy.

## Worked example: significant, not good

```step
stage: investigate
insight: "Matching views to who held them, then fixing Nib's 'significant means good', keeps judging importance separate from judging character."
tasks:
  - check:
      type: match
      q: "Match each view of the First Emperor to who held it, and why."
      pairs:
        - ["Brought peace, order and one set of laws", "His own inscriptions, made to show his power"]
        - ["A harsh ruler whose cruelty brought his dynasty down", "Han writers, working for the dynasty that replaced his"]
        - ["Built a lasting system, at a terrible cost", "Many historians today, weighing both sides"]
  - check:
      type: bug
      code: "working.txt#nib"
      text: "Nib is writing about whether the First Emperor was significant. Click the first line where Nib's thinking goes wrong."
      answer: 3
      fault: logic
      misconception: significant-means-good
      explain: "Line 3: Nib thinks a cruel ruler cannot be significant. Significant means important to history, not admirable. His harsh rule and his lasting system both changed many lives, so he is significant whatever we think of him."
    smaller:
      check:
        type: question
        q: "Imagine a great flood that destroys many towns and changes where people live for centuries. Is the flood significant?"
        options:
          - "Yes: it changed many lives for a long time"
          - "No: something terrible cannot be significant"
          - "No: only people can be significant, never events"
          - "Yes: because floods are good for farming land"
        answer: 0
        feedback:
          - null
          - "That is Nib's slip. Terrible things can still be important to history."
          - "Events and changes can be significant too. The tests are the same."
          - "Whether it was good is a different question. Significance is about what changed."
        explain: "Significant means important to history. It is a different question from whether something was good."
  - check:
      type: question
      q: "Why might Han writers have described the First Emperor so harshly?"
      options:
        - "They worked for the dynasty that replaced the Qin, so a cruel Qin made the Han look better"
        - "Because they had all met him and disliked him in person at court"
        - "Because his own stone inscriptions said that he was cruel to people"
        - "There was no reason at all; they were simply recording the facts"
      answer: 0
      feedback:
        - null
        - "Most wrote decades after he died, so they never met him."
        - "His inscriptions praised him. The harsh view came from later writers."
        - "Some of what they wrote is probably true, but their position gave them a point of view too."
      explain: "Who wrote it, and when, shapes how a person is remembered. That is why historians compare views."
```

### Who saw him how?

### Find Nib's mistake

### Why so harsh?

## Vary: within his lifetime or beyond?

```step
stage: modify
insight: "Separating effects within his lifetime from those beyond it builds both halves of a legacy."
check:
  type: sort
  q: "Was each effect felt within his lifetime, or beyond it?"
  options: ["Within his lifetime", "Beyond his lifetime"]
  items:
    - ["People in seven former kingdoms paid tax to one government", "Within his lifetime", "That began soon after 221 BCE."]
    - ["Labourers were called up to build walls and roads", "Within his lifetime", "That happened while he ruled."]
    - ["The Han ran China through commanderies and officials", "Beyond his lifetime", "The Han came after the Qin fell."]
    - ["Han officials across China wrote in one shared script", "Beyond his lifetime", "That carried on after him."]
```

## Practise: legacy and significance

```step
stage: practise
tasks:
  - check:
      type: question
      q: "Which statement best explains the First Emperor's significance?"
      options:
        - "His empire changed millions of lives, his system lasted, and people still argue about him"
        - "He was a good and wise ruler, so he must be significant to history"
        - "His dynasty only lasted fifteen years, so he is not very significant"
        - "He is significant because he alone made all of China's later history"
      answer: 0
      feedback:
        - null
        - "Significant does not mean good. Many people judged him harsh, and he is still significant."
        - "The dynasty was short, but what he set up lasted much longer."
        - "Many people and earlier changes shaped China. He made a big difference, not every difference."
      explain: "Use the tests: many lives, lasting effects, still argued about."
  - check:
      type: sort
      q: "Is each sentence a judgement about whether he was good, or about whether he was significant?"
      options: ["Good or bad?", "Significant?"]
      items:
        - ["He was cruel to the people who worked for him", "Good or bad?", "A judgement of how he behaved."]
        - ["His system of officials lasted for centuries", "Significant?", "A lasting effect."]
        - ["He deserves praise for uniting the kingdoms", "Good or bad?", "A judgement of whether it was admirable."]
        - ["Writers still disagree about him", "Significant?", "Remembered and argued about."]
insight: "Practising the difference between judging importance and judging character."
```

### Why significant?

### Good or significant?

## Make: a significance argument, in your book

```step
stage: make
insight: "Writing a legacy and significance paragraph that names two views pulls the three lessons together."
check: { type: reflect, text: "In my own book I wrote a paragraph on the significance of a person (the First Emperor, or the person our class is studying): one thing that lasted beyond their lifetime, one thing that did not, how two different writers saw them, and why they are significant whether or not they were good. A partner read it and gave feedback." }
```

Write it in your own book or document, not on this page. Your partner or teacher reads it.

## Typical: Ashoka's changing reputation

```step
stage: make
tier: typical
insight: "A ruler from India shows that a legacy and a reputation can change over time."
check:
  type: question
  q: "Ashoka ruled the Mauryan Empire in India (about 268 to 232 BCE). After a bloody war in Kalinga, his edicts carved on rocks and pillars say he regretted the killing. His empire declined within about fifty years of his death, and his edicts could not be read for centuries until a scholar worked out the script in the 1830s. What does this show? (See the India card.)"
  options:
    - "How a person is remembered can change: his own words were rediscovered long after, and changed how historians saw him"
    - "His edicts prove he was a perfect ruler, so he is significant"
    - "He cannot be significant, because his empire declined soon after he died"
    - "Nobody knew anything about him until the 1830s, so he had no legacy before then"
  answer: 0
  feedback:
    - null
    - "His edicts are his own message, like the First Emperor's inscriptions. And significant does not mean perfect."
    - "A short-lived empire can still leave a legacy, as the First Emperor's did."
    - "Buddhist writings remembered him long before the edicts were read again."
  explain: "Legacy and reputation can change as new evidence comes to light."
```

## Wider: Julius Caesar, hero or threat?

```step
stage: make
tier: wider
insight: "A Roman figure whom contemporaries judged in opposite ways tests whether students keep significance and approval apart."
check:
  type: question
  q: "Julius Caesar conquered Gaul, took power in Rome and was made dictator for life. In 44 BCE, senators who feared he would rule as a king killed him. His adopted heir Octavian later had him declared a god. What is the best conclusion? (See the Rome card.)"
  options:
    - "People saw him in opposite ways, and he is significant because what he did changed Rome"
    - "Senators killed him, so he must have been a bad ruler and not significant to Rome"
    - "He was declared a god, so he must have been a good ruler and significant to Rome"
    - "People who disagree about someone cannot both be telling us anything useful at all"
  answer: 0
  feedback:
    - null
    - "Whether he deserved it is a judgement. His actions still changed Rome, so he is significant."
    - "Being declared a god shows how Octavian wanted him remembered, not that he was good."
    - "Opposite views show what each group cared about. Comparing them is how historians work."
  explain: "Significance rests on what changed. Opposite views of a person are evidence about the people who held them."
```

Typical and wider steps are extras on the same idea. You do not need them to finish the lesson.
