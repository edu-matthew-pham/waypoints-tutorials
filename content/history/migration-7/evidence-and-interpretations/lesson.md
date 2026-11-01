---
order: 3
unit: evidence
title: How do we know?
node: AC9HH7K01 n3
summary: "Identify the kinds of evidence historians and archaeologists use for early human migration (excavation and the layers of a site, dating methods such as radiocarbon, fossils and tools, DNA, and oral history) and describe how each adds a different piece. An interpretation rests on several kinds of evidence together, and it can change when new evidence is found."
language: maths
hook: "Someone finds one stone tool in a cave. Does it tell you who made it, when, and where they came from?"
---
There is no writing from the time people first spread out of Africa. So historians and archaeologists build **interpretations** (explanations of what probably happened) from many kinds of evidence, each answering a different part of the puzzle:

| Kind of evidence | What it can tell you | A limit |
|---|---|---|
| **Excavation and the layers of a site** (stratigraphy) | The order things were left in. Lower, undisturbed layers are older. | Layers give an order, not a date in years. |
| **Radiocarbon dating** | An age for things that were once alive (charcoal, bone, shell), up to about 50,000 years old. | It cannot date stone, and it stops working beyond about 50,000 years. |
| **Luminescence dating** | When sand or soil was last exposed to sunlight or heat, which can reach much further back. | It dates the layer, not an object directly. |
| **Fossils and stone tools** | Who was there (which kind of human) and what they made and did. | One find is one moment in one place. |
| **DNA** | How groups of people are related, and roughly when they split apart. | Ancient DNA does not always survive. |
| **Oral history** | Accounts passed down by speaking, across generations. | Like any source, it is understood through its community and its purpose. |

If you have done the course *How we know*, you met layers, dating and DNA there. In short: layers give an order, dating methods give an age, and DNA shows how people are related. Here the question is how they work **together**.

> **A made-up dig report (made up for this lesson).** At a made-up rock shelter somewhere in western Asia (not in Australia, and not a real site), archaeologists dig through five layers. In layer 4 they find stone tools and a hearth with charcoal. The charcoal is radiocarbon dated to about 45,000 years ago. Layer 5, below it, has more tools but no charcoal; luminescence dating of its sand gives about 60,000 years ago. No human bones are found.

## Predict: one tool

```step
stage: predict
insight: "Committing first surfaces the idea that one find settles a whole story."
check:
  type: predict
  q: "A single stone tool is found lying on the surface of a cave floor, not in any layer. What can it tell you on its own?"
  options:
    - "That someone made a tool, but not when, who or where from"
    - "Exactly when the cave was first used by people"
    - "Which kind of human made it and where they travelled from"
    - "Nothing at all, so it does not count as evidence"
  actual: "That someone made a tool. With no layer, no date and no bones, it cannot say when, who or from where. It is still evidence, just a small piece."
```

## Try: what does each kind of evidence add?

```step
stage: run
insight: "Matching evidence to what it reveals shows that each kind answers a different question."
check:
  type: match
  q: "Match each kind of evidence to the question it can best help answer."
  pairs:
    - ["The layers of a dig", "Which finds came before or after others?"]
    - ["Radiocarbon dating of charcoal", "Roughly how many years ago was the fire lit?"]
    - ["A fossil skull", "Which kind of human was here?"]
    - ["DNA from people living today", "How are groups of people around the world related?"]
```

Was your guess right? No single kind of evidence answers every question. That is why historians use several.

## Worked example: reading the dig report

```step
stage: investigate
insight: "Reading the made-up dig report, then catching Nib's 'one find proves it all', shows evidence as pieces that build an interpretation, not proof."
tasks:
  - check:
      type: question
      q: "Why did the archaeologists use luminescence, not radiocarbon, for layer 5?"
      options:
        - "There was no charcoal or bone, and it may be too old for radiocarbon"
        - "Radiocarbon dating only works on stone tools, not on sand"
        - "Luminescence is always more exact than radiocarbon, so it is best"
        - "Layer 5 is above layer 4, so it needed a different method"
      answer: 0
      feedback:
        - null
        - "It is the other way round: radiocarbon dates things that were once alive, like charcoal, not stone."
        - "Each method has its own range and uses. The choice depends on what was found."
        - "Layer 5 is below layer 4, so it is older."
      explain: "Each method dates different material. With no charcoal, and an age that may be past radiocarbon's limit, the sand itself was dated."
  - check:
      type: bug
      code: "working.txt#nib"
      text: "Nib is writing up the made-up dig. Click the first line where Nib's thinking goes wrong."
      answer: 3
      fault: logic
      misconception: single-find-proves-all
      explain: "Line 3: Nib treats one dated hearth as proof of a whole story: who the people were and the exact route they took. The charcoal dates a fire. Who lit it, and where they came from, need other evidence, such as fossils or DNA, and could change with new finds."
    smaller:
      check:
        type: question
        q: "The charcoal in layer 4 is dated to about 45,000 years ago. What does that tell you?"
        options:
          - "Roughly when that fire burned"
          - "Exactly which kind of human lit it"
          - "The route the people took to reach the shelter"
          - "That no one used the shelter before then"
        answer: 0
        feedback:
          - null
          - "No bones were found. The date says when, not who."
          - "A date at one site cannot show a route."
          - "Layer 5, below it, has older tools, so people were there earlier."
        explain: "A date tells you when. Who and from where need other kinds of evidence."
  - check:
      type: question
      q: "The archaeologists say people used the shelter at least twice, about 15,000 years apart. Which evidence supports that?"
      options:
        - "Tools in two dated layers, about 60,000 and 45,000 years old"
        - "The hearth and its charcoal, dated to about 45,000 years ago"
        - "No human bones were found, so the visits must be far apart"
        - "The five layers, since each layer means one more visit"
      answer: 0
      feedback:
        - null
        - "That uses one piece for a two-part claim. One hearth is one moment; two visits need two dated layers."
        - "That reads a gap as evidence of time. No bones means we cannot say who. It does not show how long."
        - "That treats every layer as a visit. Layers can build up with nobody there; only layers with tools show people."
      explain: "Two dated layers, both with tools, in the right order, show two times of use. Whether people came back in between is still open. That is an interpretation built from several pieces."
```

### Choosing a dating method

### Find Nib's mistake

### Putting it together

## Vary: new evidence changes the picture

```step
stage: modify
insight: "Seeing an interpretation change when evidence arrives shows that change is how history works, not a sign it is guesswork."
check:
  type: question
  q: "Suppose a later dig at the same shelter finds a human tooth in layer 5, and its DNA can be read. What happens to the interpretation?"
  options:
    - "It can be added to: now there is evidence of who, as well as when"
    - "The whole interpretation was a guess, so it should be thrown away"
    - "Nothing, because interpretations never change"
    - "The dates are now wrong, because the tooth replaces them"
  answer: 0
  feedback:
    - null
    - "The earlier evidence still counts. The new find adds to it."
    - "Interpretations change when evidence arrives. That is how they get better."
    - "The tooth adds who. The layers and dates still say when."
  explain: "New evidence refines an interpretation. Being able to change is a strength, not a weakness."
```

## Practise: evidence or proof?

```step
stage: practise
check:
  type: sort
  q: "Sort each statement: does it stay within the evidence, or does it claim more than the evidence can show?"
  options: ["Stays within the evidence", "Claims too much"]
  items:
    - ["Charcoal dated to about 45,000 years ago shows a fire burned around then", "Stays within the evidence", "The date matches what was tested."]
    - ["One stone tool proves which language its maker spoke", "Claims too much", "A tool cannot tell you a language."]
    - ["Tools in two dated layers suggest people used the shelter more than once", "Stays within the evidence", "Two layers, two times, both with tools."]
    - ["Radiocarbon shows a stone axe is 200,000 years old", "Claims too much", "Radiocarbon cannot date stone, and it stops at about 50,000 years."]
    - ["DNA suggests two groups are closely related", "Stays within the evidence", "Relationships are what DNA can show."]
insight: "Sorting claims checks that students can tell evidence that supports an interpretation from a claim of proof."
```

## Make: build an interpretation in your book

```step
stage: make
insight: "Writing an interpretation that names two kinds of evidence and one thing still uncertain makes the habit their own."
check: { type: reflect, text: "In my own book I wrote a short interpretation of the made-up dig (or a real site our class is studying) that uses at least two kinds of evidence and names one thing the evidence cannot yet tell us. A partner read it and gave feedback." }
```

Write it in your own book or document, not on this page. Your partner or teacher reads it.

## Typical: three kinds agree

```step
stage: make
tier: typical
insight: "When independent kinds of evidence agree, an interpretation is much stronger."
check:
  type: question
  q: "Why is Out of Africa stronger because fossils, stone tools and DNA all point the same way?"
  options:
    - "Each kind was tested a different way, so agreeing is unlikely by chance"
    - "Three kinds of evidence means the theory is proved forever"
    - "Fossils alone would have been enough, so the rest just repeats it"
    - "Because DNA is always more reliable than fossils or tools"
  answer: 0
  feedback:
    - null
    - "Strong is not the same as proved forever. New finds still refine it."
    - "Fossils are patchy: few survive. Other kinds of evidence fill gaps."
    - "Each kind has limits. Their agreement is what matters."
  explain: "Independent lines of evidence that agree make an interpretation much stronger, though it can still be refined."
```

## Wider: when evidence disagrees

```step
stage: make
tier: wider
insight: "Disagreeing evidence is where interpretations are tested and argued, not a reason to give up."
check:
  type: question
  q: "Two dating methods give different ages for the same layer. What should historians do?"
  options:
    - "Work out why they differ, and say how sure they can be"
    - "Pick the date that fits the story they like best"
    - "Decide the layer cannot be dated, so leave it out"
    - "Average the two and treat the average as exact"
  answer: 0
  feedback:
    - null
    - "Choosing by preference is not evidence. They need a reason."
    - "The layer is still evidence. The question is how sure they can be."
    - "An average can hide a real problem. They should find out why the dates differ first."
  explain: "Historians look at why the dates differ (the samples, the methods, any disturbance) and say how certain they can be. That is part of an honest interpretation."
```

Typical and wider steps are extras on the same idea. You do not need them to finish the lesson.
