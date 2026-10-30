---
order: 3
unit: assessment
title: Weighing a source as evidence
node: AC9HH7S04 n3
assumes: [AC9HH7S04 n2]
summary: "A complete evidence assessment joins accuracy and usefulness into one reasoned conclusion for a specific inquiry question: how reliable the source's claims are, what it can contribute to answering the question, and what it cannot tell us without other sources."
language: maths
hook: "When a historian uses Sima Qian's history or the Shuihudi bamboo slips in an argument, they don't just write 'Accurate: yes' or 'Useful: yes'. How do you join accuracy and usefulness into one clear judgement?"
---
You now have both lenses from this course:

1. **Accuracy:** how factually reliable the source is (separating fact from opinion, checking origin and purpose for bias or limits, and asking what other sources corroborate it).
2. **Usefulness:** what the source can contribute to answering your **specific inquiry question** (even when it is biased or partial), and what it **cannot** tell you on its own.

In this final lesson, you put both together into an **integrated evidence assessment** — not two separate one-word labels, but a joined explanation of what a source is worth for an inquiry.

## Predict: what makes a complete assessment?

```step
stage: predict
insight: "Committing first shows the difference between ticking two boxes and connecting accuracy to usefulness for a specific question."
check:
  type: predict
  q: "A student is investigating: 'How harsh was Qin law for ordinary people?' They look at Source B (the Shuihudi bamboo slips of Qin laws). Which assessment of Source B is best?"
  options:
    - "Because the slips were working rulebooks buried with a Qin official in 217 BCE, they are accurate evidence of what the written rules and fines were, making them very useful for showing official punishments — though they cannot tell us how often local officials actually enforced every rule"
    - "Source B is primary, so it is 100% accurate and answers everything about the Qin"
    - "Source B is accurate. Also, Source B is useful."
    - "Source B is biased because it was written by the Qin state, so it cannot be used as evidence for Qin laws"
  actual: "A strong assessment explains why the source is accurate on one point, how that makes it useful for the inquiry question, and what gap still remains."
```

## Try: order the assessment steps

```step
stage: run
insight: "Putting the steps in order shows how the inquiry question, the accuracy check, and the usefulness conclusion fit together."
check:
  type: parsons
  code: "chain.txt#order"
  text: "Put the steps of an evidence assessment in order, from starting with the inquiry question to naming what other evidence is needed."
```

Notice how each step feeds the next. You start with the inquiry question, check accuracy (origin, purpose, fact vs opinion), and then state both what the source **can** contribute and what **other source** you would need for the rest.

## Worked example: assessing Sima Qian on the First Emperor

```step
stage: investigate
insight: "Weighing Sima Qian's account for a specific question shows how accuracy and usefulness combine, and catches Nib's two-word box-ticking slip."
tasks:
  - check:
      type: question
      q: "Inquiry question: 'How did the First Emperor control ideas and opposition in the Qin empire?' Sima Qian (writing 100 years later for the Han court) writes that the First Emperor burned histories and executed scholars who criticised him. How should a historian assess Sima Qian's accuracy and usefulness here?"
      options:
        - "His accuracy may be affected by Han bias against the Qin and the 100-year gap, so his numbers and details need checking against Qin records — but his account is still useful evidence that the First Emperor used censorship and harsh punishment against critics"
        - "Because Sima Qian wrote under the Han, nothing in his book can be used for this question"
        - "Because Sima Qian was a famous historian, every detail is completely accurate and needs no other sources"
        - "Because his account is useful for this question, we do not need to check its accuracy or bias"
      answer: 0
      feedback:
        - null
        - "Dismissing the whole source loses valuable evidence preserved from earlier records."
        - "Even careful historians can reflect the bias of their court and sources, so corroboration still matters."
        - "Being useful for an inquiry does not remove the need to check accuracy and account for Han-era bias."
      explain: "A complete assessment weighs the limit on accuracy (Han perspective, written a century later) alongside what the source still contributes to the inquiry."
  - check:
      type: bug
      code: "working.txt#nib"
      text: "Nib has written an assessment of Source B for an inquiry question. Click the line where Nib's thinking falls short."
      answer: 3
      fault: logic
      misconception: separate-labels-without-reason
      explain: "Line 3: Writing 'Accuracy: accurate. Usefulness: useful' gives two bare labels with no reason, no link to the inquiry question, and no statement of what the source can and cannot show."
    smaller:
      check:
        type: question
        q: "If you write 'This source is useful', what two things have you left out?"
        options:
          - "Useful for which question, and why (what it shows and what it leaves out)"
          - "Nothing: saying 'useful' is a complete assessment on its own"
          - "Only the date the object was dug out of the ground"
          - "Only whether the source is primary or secondary"
        answer: 0
        explain: "Usefulness only makes sense when tied to a specific question and backed by a reason."
  - check:
      type: question
      q: "To build a fuller answer to 'How did the Qin government enforce its laws?', why is it better to combine Source B (the bamboo law slips) with Source C (the mountain inscription) than to use either one alone?"
      options:
        - "Source C shows how the emperor publicly justified his laws as bringing peace, while Source B shows the actual fines and punishments officials used on the ground"
        - "Because using two sources automatically makes every opinion in both sources true"
        - "Because Source C is a secondary source and Source B is a primary source"
        - "Because Source B has no purpose or context of its own, so it needs Source C to give it one"
      answer: 0
      feedback:
        - null
        - "Combining sources doesn't turn opinions into facts; it lets you compare public claims with working reality."
        - "Both Source B (217 BCE) and Source C (219 BCE) are primary sources from the Qin period."
        - "Every source has a context and purpose: Source B's purpose was day-to-day administration."
      explain: "Where one source is strong (official public message), the other fills in what it leaves out (day-to-day legal penalties)."
```

### Integrated assessment: Source C on Qin rule

```worked
\text{Inquiry question} :: How did the First Emperor try to hold his newly conquered empire together?
\text{Accuracy} :: Ordered around 219 BCE to praise the emperor; factual on standardising laws and measures (corroborated by excavated weights), but biased and one-sided when claiming everyone lived in happy peace.
\text{Usefulness} :: Highly useful for showing two methods he used — unifying laws/measures and spreading public propaganda — but cannot tell us by itself how ordinary people reacted.
```

Now: how do you weigh Sima Qian, why does Nib's two-word answer fail, and how do two sources complement each other?

### Find Nib's mistake

### Combining two sources

## Vary: match the assessment part

```step
stage: modify
insight: "Checking that every part of a reasoned evidence assessment is present and connected."
check:
  type: sort
  q: "In an assessment of Source A (the clay warriors in the First Emperor's tomb) for the question 'How was the Qin army equipped and organised?', sort each sentence into the job it does."
  options: ["Assesses accuracy", "Explains what it contributes (usefulness)", "States what it cannot tell us (limit)"]
  items:
    - ["Crafted by Qin workshops around 210 BCE with real bronze weapons, the figures are reliable physical evidence of Qin armour and weapon designs", "Assesses accuracy", "This explains why the physical details on the figures are factually reliable."]
    - ["They are useful for showing the ranks — infantry, archers, charioteers — and how weapons were standardised", "Explains what it contributes (usefulness)", "This connects the source's details directly to the inquiry question."]
    - ["Because they were made for a royal tomb, they cannot tell us how well fed or supplied soldiers were on a real campaign", "States what it cannot tell us (limit)", "This names what the source leaves out and what other evidence is needed."]
```

## Practise: write a complete evidence assessment

```step
stage: practise
insight: "Writing a joined assessment that integrates accuracy, usefulness and limits for a specific inquiry question."
check:
  type: reasoning
  q: "Inquiry question: 'How did the Qin state govern its people?' Choose either Source B (the Shuihudi bamboo law slips, 217 BCE) or Source C (the First Emperor's mountain inscription, 219 BCE). Assess both its accuracy and its usefulness as evidence for this question, stating what it can and cannot contribute."
  paper: true
  models:
    - title: "Assessing Source B (Shuihudi bamboo slips)"
      text: "Source B is a working set of Qin laws buried with a local official in 217 BCE. Because officials used these slips to run granaries and courts, they are accurate evidence of the rules and fines the Qin state set, though they do not prove every official obeyed them. That makes Source B very useful for answering how the Qin governed: it shows the state controlled local officials through strict inspections, measurements and penalties. However, it cannot tell us how ordinary villagers felt about those laws."
    - title: "Assessing Source C (Mountain inscription)"
      text: "Source C was carved around 219 BCE on the First Emperor's orders to celebrate uniting the empire. Its claim to have standardised laws and weights is accurate (backed up by excavated Qin weights), while its claim that everyone lived in happy peace is biased court praise. For our inquiry question, it is useful evidence both of standardisation and of how the state used public monuments to persuade conquered people — but it cannot tell us what life under Qin laws actually felt like for ordinary families."
  criteria:
    - "I assessed the source's accuracy (using its origin, purpose, or fact vs opinion)."
    - "I explained how the source is useful for answering the specific inquiry question."
    - "I stated what the source cannot contribute to the inquiry on its own."
```

## Make: assess a source in your own book

```step
stage: make
insight: "Bringing origin, purpose, accuracy and usefulness together in your own words on a source from your study."
check:
  type: reflect
  text: "In my own book I wrote an inquiry question and assessed one primary or secondary source for both accuracy and usefulness, explaining what it contributes to answering the question and what it cannot tell us. A partner read it against the three criteria and agreed."
```

Write it in your own book or document, not on this page. Your partner or teacher reads it.

## Typical: combining two imperfect sources

```step
stage: make
tier: typical
insight: "Historians rarely rely on a single perfect source; they combine sources whose strengths and limits balance each other."
check:
  type: question
  q: "A historian is investigating life and work on a Qin building project. They have (1) an official inscription praising the emperor's grand walls, and (2) excavated skeletons and broken tools from a labourers' cemetery near the site. How does combining both sources build a better answer?"
  options:
    - "The inscription shows the state's official purpose and scale, while the archaeological remains test the human cost and physical working conditions that the inscription leaves out"
    - "The archaeological remains replace the inscription completely, making the inscription useless for the inquiry"
    - "The historian only needs the inscription because written words are always more accurate than bones"
    - "Both sources give the exact same view of how well workers were treated"
  answer: 0
  feedback:
    - null
    - "The inscription is still useful for showing the state's official message; the two sources answer different halves of the question."
    - "Written monuments often hide the human cost that physical remains reveal."
    - "The official inscription praises the project, while the cemetery remains show the harsh physical toll on labourers."
  explain: "Physical evidence from the workers' site answers what the official inscription's bias left out."
```

## Wider: when historians disagree about a source

```step
stage: make
tier: wider
insight: "Two historians can look at the same source and weigh its accuracy differently, which is why historical interpretations are debated."
check:
  type: question
  q: "Historian A argues that Sima Qian's stories about the First Emperor's cruelty are mostly accurate because Sima Qian used imperial archives. Historian B argues those stories are exaggerated because Han writers wanted to justify overthrowing the Qin. How can both historians be acting reasonably?"
  options:
    - "Sima Qian had both access to real archives and a Han court context, so historians weigh his accuracy by testing each specific claim against newly excavated Qin bamboo slips"
    - "Because two historians disagree, any claim about the past is just a guess and evidence cannot test it"
    - "Historian A is looking only at usefulness and Historian B is looking only at whether the book is primary or secondary"
    - "Archaeological finds can never help settle questions about written texts"
  answer: 0
  feedback:
    - null
    - "Historians test competing interpretations against evidence rather than guessing."
    - "Both historians are weighing how Sima Qian's origin and context affect the accuracy of his claims."
    - "Newly excavated Qin bamboo texts have been one of the main ways modern historians test Sima Qian's account."
  explain: "Because a complex source has both genuine archive material and political bias, historians test individual claims against new archaeological evidence."
```

Typical and wider steps are extras on the same idea. You do not need them to finish the lesson.
