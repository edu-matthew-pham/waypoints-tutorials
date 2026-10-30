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
    - "Yes, but only if we assume every word carved on the stone is literally true"
    - "No: inscriptions are only useful for studying stone-carving tools"
  actual: "Yes. When your question is about propaganda, beliefs or how a ruler presented himself, a biased official monument is prime evidence."
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
        - "Accuracy is only for primary sources; usefulness is only for secondary sources"
        - "Accurate sources are written down; useful sources are always objects"
        - "There is no difference: an inaccurate source is never useful"
      answer: 0
      feedback:
        - null
        - "Both primary and secondary sources are tested for accuracy and usefulness."
        - "Both written texts and physical objects can be accurate or inaccurate, useful or not useful."
        - "A source can be inaccurate about what happened yet very useful for showing what its maker wanted people to think."
      explain: "Accuracy is about factual reliability; usefulness is about value as evidence for the question you are asking."
  - check:
      type: bug
      code: "working.txt#nib"
      text: "Nib is deciding whether to use Source C in an investigation of Qin rule. Click the line where Nib's thinking goes wrong."
      answer: 3
      fault: logic
      misconception: biased-means-useless
      explain: "Line 3: Nib equates 'biased' with 'useless'. A biased source cannot be taken at face value, but it is still very useful evidence of its maker's perspective, beliefs and propaganda."
    smaller:
      check:
        type: question
        q: "Source C was carved to praise the First Emperor. Can it still help a historian answer the question: 'What achievements did the First Emperor want to be remembered for?'"
        options:
          - "Yes, because the inscription lists the exact achievements he chose to boast about"
          - "No, because it is biased"
          - "Only if the historian believes nobody ever disagreed with him"
          - "No, because it is over two thousand years old"
        answer: 0
        explain: "Because the emperor ordered the inscription to praise his rule, it is direct evidence of what he wanted to be remembered for."
  - check:
      type: question
      q: "Very few written sources from ancient China were written by peasant farmers themselves; most surviving texts were written by court officials and scholars. What can those official sources still usefully tell us about peasant farmers?"
      options:
        - "How the state taxed, conscripted and governed peasants, and how rulers viewed their place in the power structure"
        - "Nothing at all, because a source written by officials is biased and therefore useless for studying peasants"
        - "Every private thought and opinion peasant families had about the emperor, just as if peasants had written it themselves"
        - "Only how officials lived at court, because official records never mention taxation, grain or labour service"
      answer: 0
      feedback:
        - null
        - "Even though official records are written from the state's perspective, they are still useful evidence of how the state treated and controlled peasants."
        - "Official records rarely capture peasants' private thoughts — that is their limit — but they do show how state power worked."
        - "Official law slips and tax records deal constantly with peasant grain taxes, labour service and punishments."
      explain: "Even when evidence for a group is limited or written from above, it provides useful insight into how power and obligations worked in that society."
```

### One source, two questions

```worked
\text{Source C} :: The First Emperor's mountain inscription (219 BCE).
\text{Accuracy check} :: High accuracy on what the official court message was; low accuracy on whether conquered people actually felt happy and peaceful.
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
        - "Ravi is right: once a historian finds bias or a time gap in a source, they must leave it out of their inquiry"
        - "Sima Qian's book is useful only if we treat every claim in it as completely accurate"
        - "Because Sima Qian wrote under the Han dynasty, his book is useful only for Han history and tells us nothing about the Qin"
      answer: 0
      feedback:
        - null
        - "Bias and time gaps are limits to account for, not reasons to throw away a major historical source."
        - "A source does not have to be 100% accurate to be useful evidence."
        - "Sima Qian had access to Qin archives, so his book is useful both for preserved Qin details (when cross-checked) and for Han perspectives on the Qin."
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
        - "The clay warriors in the First Emperor's tomb were originally painted in bright colours"
        - "Farmers found the first clay warriors while digging a well in 1974"
        - "Sima Qian lived during the Han dynasty"
      answer: 0
      feedback:
        - null
        - "Paint on tomb figures shows craftsmanship and wealth, not legal punishments for officials."
        - "How the figures were found in 1974 is a modern discovery fact, not evidence of Qin administrative law."
        - "When Sima Qian lived is a fact about his origin, not evidence about Qin official fines."
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
  text: "In my own book I chose one source (from our unit, or Sources A to D), noted one limit on its accuracy, and wrote two inquiry questions: one question the source is useful evidence for (and why), and one question it cannot answer on its own. A partner read it and agreed."
```

Write it in your own book or document, not on this page. Your partner or teacher reads it.

## Typical: what silence in a source reveals

```step
stage: make
tier: typical
insight: "When sources from an ancient society record rulers and officials in detail but barely mention ordinary labourers, that gap is itself useful evidence of how power was arranged."
check:
  type: question
  q: "In the First Emperor's tomb complex, inscriptions on bronze weapons name the high minister who oversaw the workshops and the workshop supervisors, while the thousands of conscripted labourers who dug the pits are rarely named except on broken pottery tallies. What is this contrast useful evidence for?"
  options:
    - "It provides useful insight into the power structure: the state recorded officials to hold them accountable, while ordinary labourers were treated as replaceable workforce"
    - "It proves that only ministers and supervisors worked at the tomb site, since their full names were recorded on the weapons"
    - "It means the weapons and tallies are useless because they do not list every worker's life story"
    - "It shows that the inscriptions are accurate about the labourers' private feelings, not about workshop supervision"
  answer: 0
  feedback:
    - null
    - "Leaving labourers off the bronze inscriptions reflects their low status in the hierarchy, not that ministers dug the pits themselves."
    - "Even though evidence for individual labourers is limited, the way they were recorded reveals their place in the hierarchy."
    - "Quality-control stamps record official supervision and rank, not workers' private feelings."
  explain: "How a society keeps records — who gets a monument and who gets a tally mark — is useful evidence of its power structure."
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
    - "Nothing at all unless a historian can first prove every crossbow worked"
    - "That every technical detail in the story must be accepted as literal fact because it is useful"
    - "How ordinary peasant farmers built their own village graves during the Qin dynasty"
  answer: 0
  feedback:
    - null
    - "Even where a later description exaggerates, the exaggeration reveals the reputation the ruler left behind."
    - "Being useful evidence of the emperor's reputation does not mean every detail is literally accurate."
    - "The story is about the imperial mausoleum and court image, not ordinary village burials."
  explain: "An exaggerated or partial account is still useful evidence of how people viewed and remembered a ruler."
```

Typical and wider steps are extras on the same idea. You do not need them to finish the lesson.
