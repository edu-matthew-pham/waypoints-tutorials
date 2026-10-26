---
order: 8
unit: inside
title: Inside a paragraph
summary: "A strong paragraph in an argument or analysis makes a claim, backs it with evidence (an example or a quotation) and then explains how the evidence supports the claim. The explanation is the step most often missing, and without it the reader has to do the writer's thinking."
language: maths
node: [AC9E8LA04 n1, AC9E8LA04 n2]
hook: "Someone says 'Our team is the best' and shows you a photo of a trophy. Are you convinced? What else would you want to know?"
---
A paragraph that argues a point has parts inside it, each with a job:

- A **claim** says what the paragraph argues (often the topic sentence).
- **Evidence** backs it up: an **example** told in your own words, or a **quotation** in the writer's exact words.
- An **explanation** says *how* the evidence supports the claim.

Here is a short story written for this lesson. The paragraphs below argue about it.

> Mei always waited for the last bus at the back of the shelter, hood up, eyes on her shoes. She never looked at the driver. One wet night an old man stumbled on the step and his wallet slid into the gutter. Before anyone else moved, Mei ran into the rain without a second thought. She handed it back, dripping, and sat down at the front.

## Predict: what's missing?

```step
stage: predict
insight: "Committing to whether a claim plus a quotation is enough brings out the most common gap before the lesson names it."
check:
  type: predict
  q: "'Mei is braver than she seems. She ran into the rain without a second thought.' Is that paragraph finished?"
  options: ["No: it doesn't say how running into the rain shows bravery", "Yes: the quotation proves it", "No: it needs a title", "Yes: it has a claim and a sentence"]
  actual: "No. It makes a claim and gives evidence, but it never says why running into the rain shows bravery. That explanation is the missing step."
```

## Try: label the parts

```step
stage: run
insight: "Labelling each sentence's job in a complete paragraph shows what a strong paragraph contains before students build one."
try: { playground: board, starter: "text.yml#run", height: 330 }
hint: ["Click a sentence, then choose its job.", "The quotation is in quotation marks. The explanation says how the evidence shows the claim."]
smaller:
  check: { type: question, q: "'Running into the rain she had been hiding from shows that her fear gives way.' Is this evidence from the story, or the writer saying what the evidence shows?", options: ["The writer saying what it shows", "Evidence from the story"], answer: 0, feedback: [null, "The story never says her fear gives way. The paragraph's writer works that out."], explain: "Shows that is the writer explaining the evidence. That is the explanation." }
check: { type: board, text: "Label the claim, the example, the quotation and the explanation.", when: "n_right = 4 and n_wrong = 0", explain: "The claim says Mei is braver than she seems, the example and quotation show her before and after, and the explanation says how running into the rain shows her fear giving way when someone needs help." }
```

Were you right about the unfinished paragraph? This one has the explanation the other was missing.

## Worked example: claim, evidence, explain

```step
stage: investigate
insight: "Modelling the explanation as its own step (how does this show that?) targets the most common gap. Nib's slip is treating a quotation as self-explanatory."
tasks:
  - check:
      type: question
      q: "What is the explanation's job in a paragraph?"
      options: ["To say how the evidence supports the claim", "To repeat the quotation in other words", "To add a new claim", "To tell the reader the story again"]
      answer: 0
      feedback: [null, "Retelling the quotation isn't explaining it. Say what it shows.", "A new claim needs its own paragraph.", "The reader has read the story. Tell them what the evidence means."]
      explain: "The explanation joins the evidence back to the claim: how does this show that?"
  - check:
      type: bug
      code: "working.txt#nib"
      text: "Here is Nib's working on a paragraph. Click the line where Nib first goes wrong."
      answer: 3
      fault: logic
      misconception: quote-speaks-for-itself
      explain: "Line 3: Nib moves on as if the quotation explains itself. A reader may not see how the evidence shows the claim. Nib needs a sentence such as 'Running into the rain shows that...'"
  - check:
      type: question
      q: "Which sentence explains, rather than giving more evidence?"
      options: ["This shows that Mei stops hiding once someone needs her.", "She sat down at the front of the bus.", "'She handed it back, dripping.'", "She never looked at the driver."]
      answer: 0
      feedback: [null, "That's another detail from the story: evidence.", "That's a quotation: evidence.", "That's an example from the story: evidence."]
      explain: "'This shows that...' joins the evidence back to the claim. The others are more evidence."
```

### Building the paragraph

```worked
\text{Claim} :: Say what you are arguing: Mei is braver than she first seems.
\text{Evidence} :: Give an example in your own words, or a short quotation in the writer's exact words.
\text{Explain} :: Say how the evidence shows the claim: This shows that... or Running into the rain suggests...
\text{Check the link} :: Read the claim and the explanation together. Do they connect without the evidence in between?
```

Now: what is the explanation's job?

### Find Nib's slip

### Explaining or evidence?

## Vary: add the missing step

```step
stage: modify
insight: "Adding the explanation to a paragraph that lacks one is the exact repair node 2 asks for."
try: { playground: board, starter: "text.yml#vary", height: 330 }
hint: ["Click the quotation, then press Add a sentence after. Type your explanation in the box.", "Start with 'This shows that...' and say how moving to the front shows Mei has changed. Then label your sentence as the explanation."]
check: { type: board, text: "Add an explanation after the quotation and label it.", when: "has_explain = 1 and n_empty = 0", explain: "Your explanation joins the quotation back to the claim, so the reader doesn't have to work out why it matters." }
```

The board checks that you added and labelled an explanation. Whether it explains well is for you and a partner to judge: read the claim and your explanation together.

## Practise: a history paragraph

```step
stage: practise
insight: "The same parts work in other subjects: a history paragraph with examples and an explanation shows the structure transfers."
try: { playground: board, starter: "text.yml#practise", height: 330 }
hint: ["There are no quotations this time: the evidence is examples.", "Which sentence says how the examples show the claim?"]
check: { type: board, text: "Label the claim, the two examples and the explanation.", when: "n_right = 4 and n_wrong = 0", explain: "The claim is that Canberra was planned to fit its landscape. Using the hills and building the lake are the examples, and the last sentence explains how they show the designers worked with the land." }
```

## Make: your own paragraph

```step
stage: make
insight: "Writing a full claim, evidence and explanation paragraph about the story, then labelling it, consolidates the structure."
try: { playground: board, starter: "text.yml#make", height: 380 }
hint: ["Make a claim about Mei, the old man or the story, such as 'The bus shelter shows how alone Mei feels.' Type it in the first sentence.", "Add evidence (an example or a short quotation), then an explanation that starts 'This shows...'. Label every sentence."]
check: { type: board, text: "Write a paragraph with a claim, at least one piece of evidence and an explanation, and label each sentence.", when: "has_claim = 1 and has_explain >= 1 and n_labelled >= 3 and n_empty = 0", explain: "Your paragraph argues something and shows the reader how you know. Read the claim and the explanation together: do they connect?" }
```

The board checks that the parts are there. A partner, or your teacher, checks how well the explanation explains.

## In your own writing

```step
stage: make
tier: typical
insight: "Checking an analytical or persuasive paragraph from another subject for its explanation applies the move across the curriculum."
check: { type: reflect, text: "In a paragraph I wrote for English or another subject, I found the claim and the evidence, and checked there was an explanation saying how the evidence shows the claim. Where there wasn't, I added one." }
```
