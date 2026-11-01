---
order: 3
unit: assessment
title: Weighing a source as evidence
node: AC9HH7S04 n3
assumes: [AC9HH7S04 n2]
summary: "A complete assessment of a source joins accuracy and usefulness into one reasoned judgement for an inquiry question: how far its claims can be trusted, what it adds to answering the question, and what it cannot tell us without other sources."
language: maths
hook: "When a historian uses Sima Qian's history or the Shuihudi bamboo slips in an argument, they don't just write 'Accurate: yes' or 'Useful: yes'. How do you join accuracy and usefulness into one clear judgement?"
---
You now have two ways of looking at a source:

1. **Accuracy:** how far you can trust its claims. You separate factual claims from opinions, look at its origin and purpose for bias or limits, and ask what other sources back it up or challenge it.
2. **Usefulness:** what the source can add to answering your **inquiry question** (even when it is biased or partial), and what it **cannot** tell you on its own.

In this lesson you put both together. Not two one-word labels, but one joined explanation of what a source is worth for your question.

## Predict: what makes a complete assessment?

```step
stage: predict
insight: "Committing first shows the difference between ticking two boxes and linking accuracy to usefulness for one question."
check:
  type: predict
  q: "A student's inquiry question is: 'How harsh was Qin law for ordinary people?' They look at Source B (the Shuihudi bamboo slips of Qin laws). Which assessment of Source B is best?"
  options:
    - "As working rules, the slips can be trusted on the written punishments, so they help here, but they cannot show how often the rules were used"
    - "As working rules from a Qin official's tomb, the slips are primary, so they show exactly how harsh life was for everyone"
    - "The slips are accurate because they are primary, and useful because they are about Qin law, so they are a good source"
    - "The slips were written by the Qin state, which wanted to look strong, so they are biased and cannot be used here"
  actual: "The first one. A strong assessment says why the source can be trusted on one point, how that helps with the inquiry question, and what gap is left. The third gives reasons, but never says what the slips can and cannot show about this question."
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

## Worked example: weighing Sima Qian

```step
stage: investigate
insight: "Weighing Sima Qian's account for one question shows how accuracy and usefulness combine, and catches Nib's two-word box-ticking slip."
tasks:
  - check:
      type: question
      q: "Inquiry question: 'How did the First Emperor deal with ideas he did not like?' Sima Qian (writing about 100 years later for the Han court) reports that in 213 BCE the emperor ordered some books to be burned. How should a historian weigh this?"
      options:
        - "Useful, as he reports an order against books; check his details, as Han writers disliked the Qin"
        - "Useless: he wrote for the Han, who disliked the Qin, so none of it can be used"
        - "Accurate: he used older court records, so his details need no other checking"
        - "Useful for this question, so there is no need to check its accuracy as well"
      answer: 0
      feedback:
        - null
        - "Throwing out the whole source loses evidence he kept from earlier records."
        - "Older records help, but those records and his own court had views too, so checking still matters."
        - "Being useful does not remove the need to check accuracy and allow for Han bias."
      explain: "Many historians accept there was an order against some books in 213 BCE, but they argue about how much was lost. A good assessment uses Sima Qian's account and tests its details against other evidence."
  - check:
      type: bug
      code: "working.txt#nib"
      text: "Nib has written an assessment of Source B for an inquiry question. Click the first line where Nib's thinking falls short."
      answer: 3
      fault: logic
      misconception: separate-labels-without-reason
      explain: "Line 3: 'Accuracy: accurate. Usefulness: useful' is two bare labels. There is no reason, no link to the inquiry question, and nothing about what the source can and cannot show."
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
        explain: "Usefulness only makes sense when it is tied to a question and backed by a reason."
  - check:
      type: question
      q: "To answer 'How did the Qin government enforce its laws?', why is it better to use Source B (the bamboo law slips) together with Source C (the mountain inscription) than either one alone?"
      options:
        - "Source C gives the public message; Source B the written fines officials were meant to apply"
        - "When two sources agree, everything both of them say can be treated as fact"
        - "Source C is a secondary source, so Source B is needed as the primary one"
        - "Source C is biased, so Source B shows what really happened instead"
      answer: 0
      feedback:
        - null
        - "They do not even agree here, and putting sources together does not turn opinions into facts. It lets you compare a public claim with working rules."
        - "Both Source B (217 BCE) and Source C (about 219 BCE) are primary sources from Qin times."
        - "Source C is still useful for the public message. Source B shows the written rules, not proof of how they were enforced every day."
      explain: "Each fills a gap in the other: the public message and the written rules. Neither shows how harshly the rules were applied every day."
```

### One joined assessment: Source C

Here is a joined assessment of Source C for the question *"How did the First Emperor try to hold his new empire together?"*

- **Accuracy:** it was ordered around 219 BCE to praise the emperor. Its claim about one set of laws, weights and measures is backed up by Qin weights that have been dug up. Its claim that everyone now lives in peace is almost certainly false: it was written to persuade.
- **Usefulness:** it shows two things he did: one set of laws and measures for everyone, and public messages to win people over.
- **Limit:** it cannot tell us, on its own, how ordinary people reacted.

Now weigh Sima Qian the same way.

### Find Nib's mistake

Nib is a made-up student for this lesson.

### Combining two sources

## Vary: match the assessment part

```step
stage: modify
insight: "Checking that every part of a reasoned assessment is there and linked."
check:
  type: sort
  q: "Here is an assessment of Source A (the clay warriors in the First Emperor's tomb) for the question 'How was the Qin army equipped and organised?' What job does each sentence do?"
  options: ["Accuracy", "What it adds (usefulness)", "What it cannot tell us (limit)"]
  items:
    - ["Made in Qin workshops during the First Emperor's reign, and armed with real bronze weapons, the figures can be trusted on what Qin armour and weapons looked like", "Accuracy", "This says why the details on the figures can be trusted."]
    - ["They help show the different kinds of soldier (foot soldiers, archers, chariot drivers) and how weapons were made to one standard", "What it adds (usefulness)", "This links what the source shows to the inquiry question."]
    - ["Because they were made for a royal tomb, they cannot tell us how well fed or supplied soldiers were on a real campaign", "What it cannot tell us (limit)", "This names what the source leaves out, so you know other evidence is needed."]
```

## Practise: write a complete assessment

```step
stage: practise
insight: "Writing one joined assessment that brings together accuracy, usefulness and limits for an inquiry question."
check:
  type: reasoning
  q: "Inquiry question: 'How did the Qin state govern its people?' Choose either Source B (the Shuihudi bamboo law slips, 217 BCE) or Source C (the First Emperor's mountain inscription, about 219 BCE). Assess both its accuracy and its usefulness for this question, and say what it can and cannot add."
  paper: true
  models:
    - title: "Assessing Source B (the Shuihudi bamboo slips)"
      text: "Source B is a set of Qin laws buried with a local official in 217 BCE. Officials used these rules to run grain stores and courts, so they can be trusted on the rules and fines the Qin state set, though they do not prove every official obeyed them. That makes Source B very useful for how the Qin governed: it shows the state controlled local officials through strict checks, measuring and fines. However, it cannot tell us how ordinary villagers felt about those laws."
    - title: "Assessing Source C (the mountain inscription)"
      text: "Source C was carved around 219 BCE on the First Emperor's orders to celebrate joining the kingdoms into one empire. Its claim about one set of laws, weights and measures is backed up by Qin weights that have been dug up, but its claim that everyone now lives in peace is almost certainly false and was written to persuade. For our question it is useful evidence of the single set of laws and measures, and of how the state used public monuments to win over conquered people. But it cannot tell us what life under Qin laws was like for ordinary families."
  criteria:
    - "I assessed the source's accuracy (using its origin, its purpose, or fact and opinion)."
    - "I explained how the source helps answer the inquiry question."
    - "I said what the source cannot tell us on its own."
```

Write it in your book first, then compare with a model answer.

## Make: assess a source in your own book

```step
stage: make
insight: "Bringing origin, purpose, accuracy and usefulness together in your own words on a source from your study."
check:
  type: reflect
  text: "In my own book I wrote an inquiry question and assessed one primary or secondary source for both accuracy and usefulness, explaining what it adds to answering the question and what it cannot tell us. A partner read it against the three points and gave feedback."
```

Write it in your own book or document, not on this page. Your partner or teacher reads it.

## Typical: combining two imperfect sources

```step
stage: make
tier: typical
insight: "Historians rarely have one perfect source; they combine sources whose strengths and limits balance each other."
check:
  type: question
  q: "Here is a made-up case. A historian is investigating life and work on a Qin building project. They have (1) an official inscription praising the emperor's grand walls, and (2) skeletons and broken tools dug up from a workers' cemetery near the site. How does using both build a better answer?"
  options:
    - "The inscription shows the state's message; the remains can show the human cost it leaves out"
    - "The remains are more accurate, so the historian should use them and drop the inscription"
    - "The inscription is enough, because the state kept careful records of its building projects"
    - "Together they prove exactly how every worker on the project was treated"
  answer: 0
  feedback:
    - null
    - "The inscription is still useful for the state's official message. The two sources answer different halves of the question."
    - "An inscription made to praise the project is unlikely to show its human cost. That is what the remains can add."
    - "Two sources give a fuller picture, but one cemetery cannot show what happened to every worker."
  explain: "Physical evidence from the workers' cemetery fills in what the official inscription left out."
```

## Wider: a general writes his own story

```step
stage: make
tier: wider
insight: "The same joined assessment works on a source from another society: a commander's own account of his war."
check:
  type: question
  q: "Julius Caesar wrote his own account of his wars in Gaul (58 to 50 BCE) and sent it to readers in Rome while he was trying to gain power there. Inquiry question: 'How did Roman armies fight in Gaul?' Which assessment is best?"
  options:
    - "Useful on how his army moved and fought, as he led it; check his enemy numbers, as he had reason to boast"
    - "Not useful: he wanted readers in Rome to admire him, so none of it can be trusted"
    - "Accurate and useful: he was there and led the army, so it is a good source"
    - "Useful only for how he wanted to be seen, so it cannot tell us how the army fought"
  answer: 0
  feedback:
    - null
    - "Wanting to be admired is a reason to check his claims, not to throw them all out."
    - "Being there helps, but this is two labels with no limit. He also had a reason to make himself look good."
    - "It shows how he wanted to be seen, but a commander's account can also tell us a lot about marches, camps and battles."
  explain: "A joined assessment says what the source can add (a commander's view of how his army fought) and what to check (numbers and claims that make him look good). Many historians think his enemy numbers are too high."
```

Typical and wider steps are extras on the same idea. You do not need them to finish the lesson.
