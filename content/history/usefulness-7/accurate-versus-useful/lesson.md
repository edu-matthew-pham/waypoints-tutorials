---
order: 2
unit: usefulness
title: Accurate versus useful
node: AC9HH7S04 n2
assumes: [AC9HH7S04 n1]
summary: "Accuracy and usefulness are two different questions. Accuracy asks whether a source's claims are factually reliable; usefulness asks whether the source helps answer your specific inquiry question. Even a biased, one-sided or incomplete source can be highly useful evidence of how rulers used propaganda, what its maker believed, or how power worked in an ancient society."
language: maths
hook: "Suppose you find an ancient inscription where a king boasts about a victory that never happened. It is completely inaccurate about the battle. Why would a museum and a historian still treasure it?"
---
Last lesson you tested **accuracy**: whether a source's claims are factually reliable.

Students often think that once they spot bias or inaccuracy in a source, their job is done: *"It's biased, so it's useless."* Historians do the opposite. They keep **accuracy** and **usefulness** separate:

- **Accuracy** asks: *Are the claims in this source factually reliable?*
- **Usefulness** asks: *Does this source give us evidence that helps answer our specific inquiry question?*

A source with low accuracy for one question can have **high usefulness** for another. An inscription full of royal boasting is inaccurate if your question is *"How did conquered villagers really feel?"*, but it is **very useful** if your question is *"How did the emperor use public monuments to justify his power?"* Its bias is the very thing that makes it useful evidence of propaganda.

## Predict: biased, so useless?

```step
stage: predict
insight: "Committing first surfaces the common belief that a biased or inaccurate source is useless for history."
check:
  type: predict
  q: "A historian is investigating the question: 'How did the First Emperor try to convince people that his rule was legitimate?' They look at Source C, the biased mountain inscription that praises him. Is Source C useful for this question?"
  options:
    - "Yes: its bias and praise are direct evidence of the message the emperor wanted people to believe"
    - "No: because it is biased propaganda, a historian cannot use it for any question"
    - "Yes, but only for the parts of it that we can prove are true"
    - "No: it was made by the emperor's own officials, so it only tells us what they wanted"
  actual: "Yes. When your question is about propaganda, beliefs or how a ruler presented himself, a biased official monument is prime evidence. 'It only tells us what they wanted' is exactly why it fits this question."
```

## Try: match the source to the question it helps answer

```step
stage: run
insight: "Matching partial or biased sources to the inquiry question they actually serve shows that usefulness depends on the question."
check:
  type: match
  q: "Each source below has a clear limit on its accuracy. Match each source to the inquiry question it is still useful evidence for."
  pairs:
    - ["A king's inscription boasting that the gods chose him to rule", "How did rulers use religion and public monuments to claim authority?"]
    - ["A palace ration list that records grain for nobles and guards, but barely mentions peasant women", "How did the palace hierarchy rank different groups and distribute food?"]
    - ["A court historian's account written for the new Han dynasty blaming the old Qin ruler for every disaster", "How did the Han dynasty justify overthrowing and replacing the Qin?"]
    - ["A wealthy Roman landowner's handbook on how to get the most work out of enslaved farm labourers", "What attitudes did Roman landowners hold towards enslaved people, and how was farm power organised?"]
```

Look closely at the second and fourth pairs. In many ancient societies, ordinary labourers, women and enslaved people left very few written records of their own. Even when a source comes only from the powerful — and leaves out the voices of the powerless — it can still provide **useful insights into the power structures** of that society.

## Worked example: why Nib throws away good evidence

```step
stage: investigate
insight: "Tracing Source C against two inquiry questions shows why accuracy and usefulness must be kept apart, and catches Nib's 'biased means useless' slip."
tasks:
  - check:
      type: question
      q: "What is the key difference between asking whether a source is *accurate* and asking whether it is *useful*?"
      options:
        - "Accuracy asks whether its claims are factually reliable; usefulness asks whether it helps answer a specific inquiry question"
        - "Accuracy asks whether it is primary; usefulness asks whether it is secondary"
        - "Accuracy asks whether it agrees with other sources; usefulness asks whether it is easy to read"
        - "There is no real difference: if a source is inaccurate, it cannot be useful"
      answer: 0
      feedback:
        - null
        - "Primary or secondary is a separate question. Both kinds are tested for accuracy and usefulness."
        - "Checking against other sources is one way to test accuracy, but usefulness is about your question, not how easy it is to read."
        - "A source can be inaccurate about what happened yet very useful for showing what its maker wanted people to think."
      explain: "Accuracy is about factual reliability; usefulness is about value as evidence for the question you are asking."
  - check:
      type: bug
      code: "working.txt#nib"
      text: "Nib is deciding whether to use Source C in an investigation of Qin rule. Click the first line where Nib's thinking goes wrong."
      answer: 3
      fault: logic
      misconception: biased-means-useless
      explain: "Line 3: Nib equates 'biased' with 'useless'. A biased source cannot be taken at face value, but it is still very useful evidence of its maker's perspective, beliefs and propaganda."
    smaller:
      check:
        type: question
        q: "Source C was carved to praise the First Emperor. Can it still help a historian answer the question: 'What achievements did the First Emperor want to be remembered for?'"
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
        explain: "Because the emperor ordered the inscription to praise his rule, it is direct evidence of what he wanted to be remembered for."
  - check:
      type: question
      q: "Very few written sources from ancient China were written by peasant farmers themselves; most surviving texts were written by court officials and scholars. What can those official sources still usefully tell us about peasant farmers?"
      options:
        - "How the state taxed, conscripted and governed peasants, and how rulers viewed their place in the power structure"
        - "Nothing at all, because a source written by officials is biased and therefore useless for studying peasants"
        - "What peasant families thought of the emperor, because officials lived among them and knew their views"
        - "Only how officials lived, because records written by officials are always about officials"
      answer: 0
      feedback:
        - null
        - "Even though official records are written from the state's perspective, they are still useful evidence of how the state treated and controlled peasants."
        - "Officials wrote from the state's side. Their records rarely show peasants' own thoughts. That is their limit."
        - "Official records such as the law slips deal a lot with peasants: grain, labour service and punishments."
      explain: "Even when evidence for a group is limited or written from above, it provides useful insight into how power and obligations worked in that society."
```

### One source, two questions

```worked
\text{Source C} :: The First Emperor's mountain inscription (219 BCE).
\text{Accuracy check} :: Its claim that everyone was happy and at peace is probably not accurate: it was made to praise him. Its claim about one set of laws and measures can be checked, and other evidence supports it.
\text{Usefulness for Question 1} :: "Did conquered people welcome Qin rule?" -> Low usefulness on its own (it hides opposition).
\text{Usefulness for Question 2} :: "How did the Qin state present its power in public?" -> High usefulness (it is a surviving piece of official public propaganda).
```

Now: what separates accuracy from usefulness, where does Nib go wrong, and what can limited evidence still reveal about power structures?

### Find Nib's mistake

### Limited evidence and power structures

## Vary: change the inquiry question

```step
stage: modify
insight: "Changing the inquiry question on the same source flips its usefulness without changing a single word of the source."
tasks:
  - check:
      type: sort
      q: "You have Source B: the Shuihudi bamboo slips listing Qin laws and punishments for officials handling grain. Sort each inquiry question into whether Source B is *Highly useful* or *Not very useful* for answering it."
      options: ["Highly useful", "Not very useful"]
      items:
        - ["How did the Qin government control its local officials and protect state grain stores?", "Highly useful", "The slips list the exact rules, inspections and fines used to control officials."]
        - ["What powers did the Qin state hold over everyday work and punishment?", "Highly useful", "The laws show how state power reached down into local granaries and labour."]
        - ["What religious songs did peasant families sing at harvest festivals?", "Not very useful", "Legal slips for officials do not record village festival songs."]
        - ["How did Greek city-states organise their navies?", "Not very useful", "Qin legal slips from Hubei have nothing to do with Greek navies."]
  - check:
      type: question
      q: "Ravi says: 'Sima Qian wrote his history a hundred years after the Qin fell, and he disliked the First Emperor, so his book is useless.' How should a historian reply?"
      options:
        - "His book has bias that affects its accuracy on some claims, but it is still very useful for seeing how Han writers judged the Qin and for the earlier records it preserves"
        - "Ravi is right: once a historian finds bias or a time gap in a source, they should leave it out of the inquiry"
        - "His book is useful, but only for the parts that a Qin source also says, so the rest should be ignored"
        - "His book is useful only for Han history, because he wrote under the Han, so it tells us nothing about the Qin"
      answer: 0
      feedback:
        - null
        - "Bias and time gaps are limits to account for, not reasons to throw away a major historical source."
        - "Checking against Qin sources is good practice, but parts that cannot be checked can still be useful, used with care."
        - "Historians think Sima Qian used older records, so his book is useful both for Qin details (when cross-checked) and for Han views of the Qin."
      explain: "Naming a source's bias does not throw the source out; it tells you what to be careful of and what perspective the source reveals."
```

### Same bamboo slips, four questions

### Ravi's dismissal of Sima Qian

## Practise: pick the useful evidence

```step
stage: practise
insight: "Selecting the specific detail inside a source that serves as useful evidence for an interpretation."
tasks:
  - check:
      type: question
      q: "A student is testing the interpretation: 'The Qin state used strict legal punishments to force officials to obey the central government.' Which detail from the sources is the most useful evidence to support this interpretation?"
      options:
        - "The Shuihudi bamboo slips specify exact fines and punishments for officials whose grain stores are short or whose reports are late"
        - "Source C says the emperor gave everyone one set of laws, weights and measures"
        - "Sima Qian, writing later, says the First Emperor was harsh and cruel"
        - "The clay warriors show soldiers lined up in neat, ordered ranks"
      answer: 0
      feedback:
        - null
        - "One set of laws shows the laws were the same everywhere, not that punishments forced officials to obey."
        - "Calling a ruler harsh is a later opinion. It does not show how officials were punished."
        - "Ordered ranks suggest an organised army, not how officials were made to obey."
      explain: "Useful evidence must directly support the specific interpretation being made."
  - check:
      type: reflect
      text: "I explained to a partner the difference between accuracy and usefulness, and gave one example of a biased source that is still useful for a historical question."
```

### Evidence for an interpretation

### Say the difference aloud

## Make: useful for one question, not for another

```step
stage: make
insight: "Writing two inquiry questions for the same source — one where it is useful and one where its limits get in the way — locks in the distinction."
check:
  type: reflect
  text: "In my own book I chose one source (from our unit, or Sources A to D), noted one limit on its accuracy, and wrote two inquiry questions: one question the source is useful evidence for (and why), and one question it cannot answer on its own. A partner read it and gave feedback."
```

Write it in your own book or document, not on this page. Your partner or teacher reads it.

## Typical: what silence in a source reveals

```step
stage: make
tier: typical
insight: "When sources from an ancient society record rulers and officials in detail but barely mention ordinary labourers, that gap is itself useful evidence of how power was arranged."
check:
  type: question
  q: "Historians report that some bronze weapons from the clay army carry inscriptions naming the official in charge, the workshop and the worker who made them. Many figures are stamped with a craftsman's name. The thousands of labourers who dug the pits left far fewer records. What is this pattern useful evidence for?"
  options:
    - "How Qin work was organised and checked: historians think names were recorded so the state could hold officials and makers responsible"
    - "That only officials and named craftsmen worked at the site, since theirs are the names that were recorded"
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

## Wider: when myth or exaggeration is useful evidence

```step
stage: make
tier: wider
insight: "Stories that are factually inaccurate about what happened can still be rich evidence of what a society valued or feared."
check:
  type: question
  q: "Later stories claimed that the First Emperor's underground tomb had rivers of liquid mercury pumped by machines and crossbows triggered to shoot anyone who entered. Even before testing how much of that description is literally accurate, what is the story itself useful evidence of?"
  options:
    - "How later generations remembered the First Emperor's wealth, secrecy and obsession with guarding his power even after death"
    - "Nothing, until archaeologists open the tomb and check whether it is true"
    - "Exactly how the tomb was built, because the story gives so much detail"
    - "Nothing, because a story told later is a secondary source"
  answer: 0
  feedback:
    - null
    - "Checking would test its accuracy. But the story already shows how people remembered him."
    - "Lots of detail does not make a story accurate. It may be exaggerated."
    - "Secondary sources can be very useful, here for how the emperor was remembered."
  explain: "An exaggerated or partial account is still useful evidence of how people viewed and remembered a ruler."
```

Typical and wider steps are extras on the same idea. You do not need them to finish the lesson.
