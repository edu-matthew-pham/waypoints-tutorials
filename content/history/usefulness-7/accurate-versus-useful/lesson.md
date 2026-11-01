---
order: 2
unit: usefulness
title: Accurate versus useful
node: AC9HH7S04 n2
assumes: [AC9HH7S04 n1]
summary: "Accuracy and usefulness are two different questions. Accuracy asks how far you can trust a source's claims; usefulness asks whether the source helps answer your inquiry question. Even a biased, one-sided or incomplete source can be useful evidence of how rulers used propaganda, what its maker believed, or how power worked in an ancient society."
language: maths
hook: "Suppose you find an ancient inscription where a king boasts about a victory that never happened. It is completely wrong about the battle. Why would a museum and a historian still treasure it?"
---
Last lesson you tested **accuracy**: how far you can trust what a source claims.

Once students spot bias in a source, many decide their job is done: *"It's biased, so it's useless."* Historians do the opposite. They keep **accuracy** and **usefulness** apart.

The question your investigation is trying to answer is called the **inquiry question**.

- **Accuracy** asks: *Can I trust the claims in this source?*
- **Usefulness** asks: *Does this source give me evidence that helps answer my inquiry question?*

A source can be inaccurate for one question and very useful for another. An inscription full of royal boasting is a poor guide if your question is *"How did conquered villagers really feel?"* But it is **very useful** if your question is *"How did the emperor use public monuments to show his power?"* Its bias is what makes it good evidence of propaganda (a message made to persuade).

## Predict: biased, so useless?

```step
stage: predict
insight: "Committing first brings out the common belief that a biased or inaccurate source is useless for history."
check:
  type: predict
  q: "A historian's inquiry question is: 'How did the First Emperor try to convince people that he had the right to rule?' They look at Source C, the mountain inscription that praises him. Is Source C useful for this question?"
  options:
    - "Yes: its praise shows the message the emperor wanted people to believe"
    - "No: it is propaganda, so a historian cannot use it for any question"
    - "Yes, but only for the parts of it that we can prove are true"
    - "No: his own officials made it, so it only shows what they wanted"
  actual: "Yes. When your question is about how a ruler presented himself, a biased official monument is just the evidence you need. 'It only shows what they wanted' is exactly why it fits this question."
```

## Try: match the source to the question it helps answer

```step
stage: run
insight: "Matching partial or biased sources to the inquiry question they can answer shows that usefulness depends on the question."
check:
  type: match
  q: "Each source has a clear limit on its accuracy. Match each source to the inquiry question it is still useful evidence for."
  pairs:
    - ["A king's inscription boasting that the gods chose him to rule", "How did rulers use religion and public monuments to claim power?"]
    - ["A palace ration list that records grain for nobles and guards, but barely mentions peasant women", "How did the palace rank different groups and share out food?"]
    - ["A court historian's account, written for the new Han dynasty, blaming the old Qin ruler for every disaster", "How did the Han explain why they replaced the Qin?"]
    - ["A rich Roman landowner's handbook on getting the most work out of enslaved farm workers", "How did Roman landowners think about enslaved people, and how was farm work run?"]
```

Look closely at the second and fourth pairs. In many ancient societies, labourers, women and enslaved people left very few written records of their own. A source made by the powerful leaves out their voices. But it can still show the **power structures** of that society: who held power, and how they used it.

## Worked example: why Nib throws away good evidence

```step
stage: investigate
insight: "Checking Source C against two inquiry questions shows why accuracy and usefulness must be kept apart, and catches Nib's 'biased means useless' slip."
tasks:
  - check:
      type: question
      q: "What is the key difference between asking whether a source is *accurate* and asking whether it is *useful*?"
      options:
        - "Accuracy asks if you can trust its claims; usefulness asks if it helps answer your question"
        - "Accuracy asks whether it is primary; usefulness asks whether it is secondary"
        - "Accuracy asks if other sources agree; usefulness asks if it is easy to read"
        - "There is no real difference: if a source is inaccurate, it cannot be useful"
      answer: 0
      feedback:
        - null
        - "Primary or secondary is a separate question. Both kinds are tested for accuracy and usefulness."
        - "Checking against other sources is one way to test accuracy. But usefulness is about your question, not how easy it is to read."
        - "A source can be wrong about what happened and still be very useful for showing what its maker wanted people to think."
      explain: "Accuracy is about how far you can trust the claims. Usefulness is about whether it is evidence for the question you are asking."
  - check:
      type: bug
      code: "working.txt#nib"
      text: "Nib is deciding whether to use Source C in an investigation of Qin rule. Click the first line where Nib's thinking goes wrong."
      answer: 3
      fault: logic
      misconception: biased-means-useless
      explain: "Line 3: Nib treats 'biased' as 'useless'. You cannot take a biased source at face value, but it is still very useful evidence of its maker's view, beliefs and propaganda."
    smaller:
      check:
        type: question
        q: "Source C was carved to praise the First Emperor. Can it still help answer the question: 'What achievements did the First Emperor want to be remembered for?'"
        options:
          - "Yes, because it lists the achievements he chose to boast about"
          - "No, because it is biased, so it cannot be used for any question"
          - "Only if every achievement it lists really happened"
          - "No, because only a later historian could say what he wanted"
        answer: 0
        feedback:
          - null
          - "That is Nib's slip. Its bias is exactly what this question is about."
          - "The question is what he wanted to be remembered for, so it is useful even if some boasts were not true."
          - "A later historian might guess. The emperor's own monument shows it directly."
        explain: "The emperor ordered the inscription to praise his rule, so it is direct evidence of what he wanted to be remembered for."
  - check:
      type: question
      q: "Very few written sources from ancient China were written by farmers themselves. Most were written by officials and scholars. What can those official sources still tell us about farmers?"
      options:
        - "How the state taxed farmers, made them work for it, and governed them"
        - "Nothing at all, because sources written by officials are biased and useless"
        - "What farming families thought of the emperor, as officials knew their views"
        - "Only how officials lived, because officials' records are always about officials"
      answer: 0
      feedback:
        - null
        - "Official records are written from the state's side, but they are still useful evidence of how the state treated and controlled farmers."
        - "Officials wrote from the state's side. Their records rarely show farmers' own thoughts. That is their limit."
        - "Official records such as the law slips deal a lot with farmers: grain, work for the state and punishments."
      explain: "Even when evidence about a group is limited, or written from above, it shows how power and duties worked in that society."
```

### One source, two questions

Take Source C, the First Emperor's mountain inscription (around 219 BCE).

- **Accuracy:** its claim that everyone now lives in peace is almost certainly false: big revolts broke out soon after his death, and the stone was made to praise him. Its claim about one set of laws, weights and measures can be checked, and other evidence supports it.
- **Useful for "Did conquered people welcome Qin rule?"** Not very, on its own. It hides anyone who disagreed.
- **Useful for "How did the Qin state show its power in public?"** Very. It is a surviving piece of the state's own propaganda.

Now say, in general, what separates accuracy from usefulness.

### Find Nib's mistake

Nib is a made-up student for this lesson.

### Limited evidence and power

## Vary: change the inquiry question

```step
stage: modify
insight: "Changing the inquiry question on the same source changes its usefulness without changing a word of the source."
tasks:
  - check:
      type: sort
      q: "You have Source B: the Shuihudi bamboo slips listing Qin laws and punishments for officials who handle grain. Is Source B highly useful or not very useful for each inquiry question?"
      options: ["Highly useful", "Not very useful"]
      items:
        - ["How did the Qin government control its local officials and protect its grain stores?", "Highly useful", "The slips list the exact rules, checks and fines used to control officials."]
        - ["What power did the Qin state have over everyday work and punishment?", "Highly useful", "The laws show how state power reached down into local grain stores and work."]
        - ["What songs did farming families sing at harvest festivals?", "Not very useful", "Rules for officials do not record village festival songs."]
        - ["How did Greek city-states organise their navies?", "Not very useful", "Qin law slips from China have nothing to say about Greek navies."]
  - check:
      type: question
      q: "Ravi says: 'Sima Qian wrote his history a hundred years after the Qin fell, and he disliked the First Emperor, so his book is useless.' How should a historian reply?"
      options:
        - "It has bias to allow for, but it shows how Han writers judged the Qin and keeps older records"
        - "Ravi is right: once you find bias or a time gap, leave the source out"
        - "It is useful only for the parts a Qin source also says; ignore the rest"
        - "It only tells us about the Han, so it tells us nothing about the Qin"
      answer: 0
      feedback:
        - null
        - "Bias and time gaps are limits to allow for, not reasons to throw away a major source."
        - "Checking against Qin sources is good practice, but parts you cannot check can still be useful, used with care."
        - "Historians think Sima Qian used older records, so his book is useful for Qin details (checked against other evidence) and for Han views of the Qin."
      explain: "Naming a source's bias does not throw it out. It tells you what to be careful of, and whose view the source shows."
```

### Same bamboo slips, four questions

### Ravi says it is useless

Ravi is made up for this lesson.

## Practise: pick the useful evidence

```step
stage: practise
insight: "Picking the detail inside a source that is useful evidence for a historian's explanation."
tasks:
  - check:
      type: question
      q: "A student is testing a historian's explanation: 'The Qin state used strict punishments to make its officials obey.' Which detail is the most useful evidence for it?"
      options:
        - "The Shuihudi slips set fines for officials whose grain is short or reports are late"
        - "Source C says everyone lives under one set of laws, weights and measures"
        - "Sima Qian, writing later, says the First Emperor was harsh and cruel"
        - "The clay warriors stand in neat, ordered ranks, like a real army"
      answer: 0
      feedback:
        - null
        - "One set of laws shows the laws were the same everywhere, not that punishments made officials obey."
        - "Calling a ruler harsh is a later opinion. It does not show how officials were punished."
        - "Ordered ranks suggest an organised army, not how officials were made to obey."
      explain: "Useful evidence must directly support the explanation you are testing."
  - check:
      type: reflect
      text: "I explained to a partner the difference between accuracy and usefulness, and gave one example of a biased source that is still useful for a history question."
```

### Evidence for an explanation

### Say the difference aloud

## Make: useful for one question, not for another

```step
stage: make
insight: "Writing two inquiry questions for the same source, one where it is useful and one where its limits get in the way, locks in the difference."
check:
  type: reflect
  text: "In my own book I chose one source (from our unit, or Sources A to D), noted one limit on its accuracy, and wrote two inquiry questions: one the source is useful evidence for (and why), and one it cannot answer on its own. A partner read it and gave feedback."
```

Write it in your own book or document, not on this page. Your partner or teacher reads it.

## Typical: who gets named in a record

```step
stage: make
tier: typical
insight: "When records from an ancient society name officials and craftsmen but barely mention ordinary labourers, that gap is itself useful evidence of how power was arranged."
check:
  type: question
  q: "Historians report that some bronze weapons from the clay army carry inscriptions naming the official in charge, the workshop and the worker who made them. Many figures are stamped with a craftsman's name. The thousands of labourers who dug the pits left far fewer records. What is this pattern useful evidence for?"
  options:
    - "How Qin work was organised and checked: historians think names let the state hold makers responsible"
    - "That only officials and named craftsmen worked at the site, since theirs are the names recorded"
    - "Nothing much, because the records do not tell us the life story of every worker at the site"
    - "How the labourers felt about the work, since the craftsmen's stamps show they were proud of it"
  answer: 0
  feedback:
    - null
    - "Fewer records of labourers does not mean there were no labourers. It tells you whose work the state chose to record."
    - "A source does not need to cover everyone to be useful. Who was recorded, and why, is evidence in itself."
    - "A name stamped for checking work tells you about the system, not about anyone's feelings."
  explain: "Who gets named in a record, and why, is useful evidence of how a society was organised. Historians think the names were for checking work, but the records do not say so directly."
```

## Wider: when a tall story is useful evidence

```step
stage: make
tier: wider
insight: "Stories that are wrong about what happened can still be good evidence of what a society valued or feared."
check:
  type: question
  q: "Sima Qian, writing about 100 years later, says the First Emperor's tomb had rivers of mercury and crossbows set to shoot anyone who broke in. Before testing how much of this is true, what is the story itself useful evidence of?"
  options:
    - "How later people remembered his wealth and his fear of losing power, even in death"
    - "Nothing, until archaeologists open the tomb and check whether it is true"
    - "Exactly how the tomb was built, because the story gives so much detail"
    - "Nothing, because a story told 100 years later is a secondary source"
  answer: 0
  feedback:
    - null
    - "Checking would test its accuracy. But the story already shows how people remembered him."
    - "Lots of detail does not make a story accurate. It may be exaggerated."
    - "Secondary sources can be very useful, here for how the emperor was remembered."
  explain: "An exaggerated or partial account is still useful evidence of how people saw and remembered a ruler."
```

Typical and wider steps are extras on the same idea. You do not need them to finish the lesson.
