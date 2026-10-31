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
    - "As working rules kept by a Qin official, the slips reliably show the written punishments, so they are useful here, but they cannot show how often the rules were enforced"
    - "As working rules kept by a Qin official, the slips are primary, so they show exactly how harsh life was for ordinary people across the empire"
    - "The slips are accurate because they are primary, and they are useful because they are about Qin law, so they are a good source"
    - "The slips were written by the Qin state, which wanted to look strong, so they are biased and cannot be used as evidence of Qin law"
  actual: "The first one. A strong assessment explains why the source is accurate on one point, how that makes it useful for the inquiry question, and what gap still remains. The third gives reasons, but never says what the slips can and cannot show about this question."
```

## Try: what each part of an assessment does

```step
stage: run
insight: "Matching each part of an assessment to the question it answers shows what a complete assessment needs, without pretending the parts must come in one fixed order."
check:
  type: match
  q: "A full assessment of a source answers five questions. Match each question to what it gives you."
  pairs:
    - ["What are we asking?", "The inquiry question, so you know what the source is being used for"]
    - ["Can we trust it?", "Its origin and purpose, and whether they give it a reason to leave things out"]
    - ["Fact or opinion?", "Which of its statements can be checked and which are judgements"]
    - ["What does it show?", "What it can add to answering the question"]
    - ["What does it leave out?", "What it cannot tell you, and what other source you would need"]
  explain: "A complete assessment answers all five. Start from the inquiry question, because usefulness depends on it. The accuracy checks can come in whichever order suits the source."
```

Start with the inquiry question, because a source is only useful **for** something. After that, the order can change: some people check fact and opinion first, some start with origin and purpose. What matters is that your final judgement uses all of them, and says both what the source **can** add and what **other source** you would need for the rest.

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
        - "Because Sima Qian wrote under the Han, a dynasty hostile to the Qin, nothing in his book can be used for this question"
        - "Because Sima Qian used older records from the court archives, his details are accurate and need no other sources"
        - "Because his account is useful for this question, there is no need to check its accuracy or bias as well"
      answer: 0
      feedback:
        - null
        - "Dismissing the whole source loses valuable evidence preserved from earlier records."
        - "Using older records helps, but those records and his own court had views too, so checking still matters."
        - "Being useful for an inquiry does not remove the need to check accuracy and account for Han-era bias."
      explain: "A complete assessment weighs the limit on accuracy (Han perspective, written a century later) alongside what the source still contributes to the inquiry."
  - check:
      type: bug
      code: "working.txt#nib"
      text: "Nib has written an assessment of Source B for an inquiry question. Click the first line where Nib's thinking falls short."
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
          - "Whether it is primary or secondary, and when it was made"
          - "Whether it is accurate, and who made it"
          - "Nothing: saying 'useful' is a complete assessment on its own"
        answer: 0
        feedback:
          - null
          - "Those are worth knowing, but they do not say what it is useful for."
          - "Accuracy matters too, but 'useful' still needs a question and a reason."
          - "That is Nib's slip. Useful for what, and why?"
        explain: "Usefulness only makes sense when tied to a specific question and backed by a reason."
  - check:
      type: question
      q: "To build a fuller answer to 'How did the Qin government enforce its laws?', why is it better to combine Source B (the bamboo law slips) with Source C (the mountain inscription) than to use either one alone?"
      options:
        - "Source C shows how the emperor publicly justified his laws as bringing peace, while Source B shows the actual fines and punishments officials used on the ground"
        - "Because when two sources agree, everything both of them say can be treated as fact"
        - "Because Source C is a secondary source, so Source B is needed as the primary source"
        - "Because Source C is biased, so Source B shows what really happened instead"
      answer: 0
      feedback:
        - null
        - "They do not even agree here, and combining sources doesn't turn opinions into facts. It lets you compare public claims with working rules."
        - "Both Source B (217 BCE) and Source C (219 BCE) are primary sources from the Qin period."
        - "Source C is still useful for the public message. Source B shows the written rules, not proof of how they were enforced every day."
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
    - ["Made in Qin workshops during the First Emperor's reign and armed with real bronze weapons, the figures are reliable physical evidence of Qin armour and weapon designs", "Assesses accuracy", "This explains why the physical details on the figures are factually reliable."]
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
  text: "In my own book I wrote an inquiry question and assessed one primary or secondary source for both accuracy and usefulness, explaining what it contributes to answering the question and what it cannot tell us. A partner read it against the three criteria and gave feedback."
```

Write it in your own book or document, not on this page. Your partner or teacher reads it.

## Typical: combining two imperfect sources

```step
stage: make
tier: typical
insight: "Historians rarely rely on a single perfect source; they combine sources whose strengths and limits balance each other."
check:
  type: question
  q: "Here is a made-up case. A historian is investigating life and work on a Qin building project. They have (1) an official inscription praising the emperor's grand walls, and (2) skeletons and broken tools dug up from a workers' cemetery near the site. How does combining both sources build a better answer?"
  options:
    - "The inscription shows the state's official message, while the remains can test the human cost that the inscription leaves out"
    - "The remains are more accurate, so the historian should use them and drop the inscription"
    - "The inscription is enough, because the state kept careful records of its building projects"
    - "Together they prove exactly how every worker on the project was treated"
  answer: 0
  feedback:
    - null
    - "The inscription is still useful for showing the state's official message; the two sources answer different halves of the question."
    - "An inscription made to praise the project is unlikely to show its human cost. That is what the remains can add."
    - "Two sources give a fuller picture, but one cemetery cannot show what happened to every worker."
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
    - "One of them must simply be wrong, so a class should pick the historian who is more famous"
    - "Historian A is judging accuracy and Historian B is judging usefulness, so they are not really disagreeing"
  answer: 0
  feedback:
    - null
    - "Historians test competing interpretations against evidence rather than guessing."
    - "Fame does not settle it. Both use reasons, and evidence can test each claim."
    - "Both are judging accuracy: how far his stories can be trusted. That is a real disagreement."
  explain: "Because a complex source has both genuine archive material and political bias, historians test individual claims against new archaeological evidence."
```

Typical and wider steps are extras on the same idea. You do not need them to finish the lesson.
