---
order: 1
unit: theories
title: What is a theory of human origins?
node: AC9HH7K01 n1
summary: "Identify the main theories about where our species, Homo sapiens, began, describe what the Out of Africa theory proposes, and use the word 'theory' the way historians and scientists do: an explanation built on evidence, which can be refined when new evidence is found."
language: maths
hook: "Someone says, 'Out of Africa is just a theory.' Is that a reason to doubt it? It depends what they mean by theory."
---
Nobody wrote anything down when the first people of our species lived, so historians and scientists work from what has survived: fossils (bones and teeth), stone tools, the layers they were found in, and the DNA of people living now and long ago.

From that evidence they build **theories**. In everyday talk, a theory can mean a hunch ("I have a theory about who ate my lunch"). In history and science, a **theory** is an explanation built on evidence, tested against new finds, and changed when the evidence calls for it.

The main theories about human origins:

- **The theory of evolution** explains how living things, people included, change over very many generations. It is the starting point for the others.
- **The Out of Africa theory** says our species, *Homo sapiens*, first evolved in Africa, about 300,000 years ago, and later spread to the rest of the world. Most scientists accept it today because fossils and DNA point the same way.
- **The multiregional theory**, an older idea, said modern humans developed in several parts of the world at once from earlier kinds of humans already living there. Few scientists hold it in that form now, but one part of the debate lives on: when our species spread out, it met other kinds of humans, such as Neanderthals, and some interbred with them, so a little of their DNA survives in many people today.

## Predict: what does "theory" mean here?

```step
stage: predict
insight: "Committing first shows whether students hear 'theory' as a hunch or as an evidence-based explanation."
check:
  type: predict
  q: "When scientists call Out of Africa a theory, what do they mean?"
  options:
    - "An explanation built on evidence that can change with new finds"
    - "A guess that is as good as any other person's guess"
    - "Something that has been proved for sure and can never change"
    - "An idea that nobody has found any evidence for yet"
  actual: "An explanation built on evidence that can be refined. It is not a hunch, and it is not frozen: new finds can change the details."
```

## Try: hunch or theory?

```step
stage: run
insight: "Sorting statements separates the everyday meaning of theory from the evidence-based one."
check:
  type: sort
  q: "Sort each statement: is it an everyday hunch, or an evidence-based theory?"
  options: ["Everyday hunch", "Evidence-based theory"]
  items:
    - ["'My theory is the cat knocked the vase over.' (Nobody saw it.)", "Everyday hunch", "A guess with no evidence checked."]
    - ["Fossils and DNA both point to our species beginning in Africa", "Evidence-based theory", "Two kinds of evidence agree."]
    - ["'I reckon people came from wherever the oldest town is.'", "Everyday hunch", "No evidence is named."]
    - ["Older fossils found in Africa than anywhere else, and more genetic variety in African populations", "Evidence-based theory", "The explanation is built on finds that can be checked."]
```

Was your guess right? The word is the same, but a theory in history and science has evidence behind it and is open to testing.

## Worked example: Out of Africa

```step
stage: investigate
insight: "Describing what Out of Africa proposes, then catching Nib's 'it's only a theory', shows what makes an explanation worth trusting."
tasks:
  - check:
      type: question
      q: "What does the Out of Africa theory propose?"
      options:
        - "Our species first evolved in Africa and later spread to the rest of the world"
        - "No kind of human ever lived outside Africa until our species did"
        - "Our species evolved separately on every continent at the same time"
        - "People came from Africa only in the last 10,000 years"
      answer: 0
      feedback:
        - null
        - "Earlier kinds of humans had left Africa long before, such as Homo erectus. The theory is about our own species."
        - "That is close to the older multiregional idea, which few scientists hold in that form now."
        - "Our species is about 300,000 years old, and people had spread well beyond Africa long before 10,000 years ago."
      explain: "Out of Africa is about where Homo sapiens began and how it spread. Other kinds of humans had travelled before."
  - check:
      type: bug
      code: "working.txt#nib"
      text: "In a made-up classroom discussion, Nib is answering a question about Out of Africa. Click the first line where Nib's thinking goes wrong."
      answer: 3
      fault: logic
      misconception: theory-means-guess
      explain: "Line 3: Nib uses 'theory' in its everyday sense, a hunch. A theory in history and science is built on evidence, so a guess with no evidence is not as good as it."
    smaller:
      check:
        type: question
        q: "Which of these is a theory in the scientific sense?"
        options:
          - "An explanation that fossils and DNA support, still being tested"
          - "A hunch about who ate your lunch, based on who looks guilty"
          - "Any idea at all, as long as plenty of people believe it"
          - "A fact that has been proved, so no one may question it"
        answer: 0
        feedback:
          - null
          - "That is the everyday meaning: a guess."
          - "Believing something does not make it a theory. Evidence does."
          - "Theories are questioned and tested all the time. That is how they improve."
        explain: "A scientific theory has evidence behind it and is open to testing."
  - check:
      type: question
      q: "Why do most scientists accept the Out of Africa theory today?"
      options:
        - "Separate kinds of evidence, like fossils and DNA, agree"
        - "A famous scientist suggested it, so everyone agreed"
        - "It is the oldest theory, so it is most likely right"
        - "Nobody has ever found any human fossils outside Africa"
      answer: 0
      feedback:
        - null
        - "Who said it is not the reason. The evidence is."
        - "The theory of evolution is older. Age does not make an idea right."
        - "Plenty of fossils have been found outside Africa. The oldest of our species are in Africa."
      explain: "When separate kinds of evidence agree, an explanation is much stronger."
```

### What does it say?

### Find Nib's mistake

### Why accept it?

## Vary: a new find changes the date

Scientists used to think our species first left Africa about 100,000 years ago. Then, in Misliya Cave in Israel, archaeologists found part of a modern human jawbone dated to about 177,000 to 194,000 years ago (Tel Aviv University reported it in 2018).

```step
stage: modify
insight: "A real case of a theory being refined shows that changing the details is how a theory gets stronger, not a sign it was useless."
check:
  type: question
  q: "What does the Misliya jawbone do to the Out of Africa theory?"
  options:
    - "It refines it: our species may have left Africa earlier than thought"
    - "It proves the whole theory was wrong and should be thrown out"
    - "Nothing, because a theory can never change once it is accepted"
    - "It shows our species probably first evolved in Israel instead"
  answer: 0
  feedback:
    - null
    - "The jawbone is still younger than the oldest finds of our species in Africa. It changes when, not where."
    - "Theories change when new evidence arrives. That is the point of them."
    - "Older fossils of our species are known in Africa, so this find fits a journey out of Africa, just an earlier one."
  explain: "New evidence changed a date, and the main idea still stands. That is a theory doing its job."
```

## Practise: theories and evidence

```step
stage: practise
check:
  type: match
  q: "Match each theory or idea to what it says."
  pairs:
    - ["The theory of evolution", "Living things change over very many generations"]
    - ["Out of Africa", "Our species began in Africa and later spread across the world"]
    - ["The multiregional theory", "Modern humans developed in several regions at once (an older idea)"]
    - ["Interbreeding with Neanderthals", "Some early modern humans had children with other kinds of humans they met"]
insight: "Matching the theories to what they propose checks students can describe each one."
```

## Make: explain a theory in your book

```step
stage: make
insight: "Writing what Out of Africa says, and why it counts as a theory, in their own book makes the meaning of theory their own."
check: { type: reflect, text: "In my own book I wrote what the Out of Africa theory says, two kinds of evidence that support it, and one sentence on what 'theory' means in history and science. A partner read it and gave feedback." }
```

Write it in your own book or document, not on this page. Your partner or teacher reads it.

## Typical: earlier travellers

```step
stage: make
tier: typical
insight: "Separating our species from earlier kinds of humans keeps the theory's claim exact."
check:
  type: question
  q: "Fossils of Homo erectus, an earlier kind of human, have been found in Asia from more than a million years ago. Does that disprove Out of Africa?"
  options:
    - "No: it is about where our species began, not every kind of human"
    - "Yes: it shows that humans really began in Asia, not Africa"
    - "Yes: any human fossil found outside Africa counts against it"
    - "No: Homo erectus fossils are too old to count as evidence"
  answer: 0
  feedback:
    - null
    - "Homo erectus is a different, earlier kind of human. The theory is about Homo sapiens."
    - "Only an older Homo sapiens fossil outside Africa would challenge where our species began."
    - "Old fossils are still evidence. They are evidence about a different kind of human."
  explain: "Read a theory's claim carefully: Out of Africa is about our species."
```

## Wider: what would change their minds?

```step
stage: make
tier: wider
insight: "Asking what evidence would challenge a theory shows students how theories are tested."
check:
  type: question
  q: "Which find would most challenge the idea that our species began in Africa?"
  options:
    - "Homo sapiens fossils outside Africa older than any found in Africa"
    - "An old stone tool found in Europe, far away from Africa"
    - "A new Homo sapiens fossil found in Africa, younger than others"
    - "A Neanderthal fossil found in Europe, older than Homo sapiens"
  answer: 0
  feedback:
    - null
    - "A tool shows people were there. It does not show where our species began."
    - "A newer find in Africa fits the theory."
    - "Neanderthals are a different kind of human. Their fossils in Europe are expected."
  explain: "A good theory says what evidence would count against it. So far, the oldest Homo sapiens fossils are in Africa."
```

Typical and wider steps are extras on the same idea. You do not need them to finish the lesson.
