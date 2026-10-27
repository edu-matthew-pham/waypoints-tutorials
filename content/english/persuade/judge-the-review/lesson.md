---
order: 9
unit: challenge
title: "Challenge: judge the review"
summary: "A made-up film review has strong words, a source, a bare claim and an exaggeration. Students judge it in steps: name each feature, judge whether it works for the audience, judge two sources, then write their own verdict with evidence from the review."
language: maths
node: [AC9E8LY03 n1, AC9E8LY03 n2]
explainPicture: { ref: text.yml#explain-pic, caption: "A review has parts. Judge each part for its audience and purpose." }
hook: "A review says a film is 'the best of the year' and 'a must-see'. Should you buy a ticket?"
---
This is a made-up review of a made-up film, *Lantern Cove*, written to persuade **parents choosing a family film**. You will judge it step by step using what you learned in this course: strong words, sources, bare claims and devices. An optional last step asks you to judge a real review you find yourself.

A good judgement says **what works, for whom, and why**. A review can be effective for its purpose and still have a weak part.

> *Lantern Cove* is the best family film of the year. The brave little tugboat is a heart-melting hero, and the harbour glows in glorious gold light. Critic Tessa Wren, who has reviewed films for twenty years, says the first scene took four months to draw by hand. The school librarian who runs the film club says it kept her group silent for two hours. The final chase lasts about a million years, and you will want every minute. Everyone knows it will win awards.

## Predict: which part will be weakest?

```step
stage: predict
insight: "Thinking about which part is weakest makes students link each part to its purpose before judging."
check:
  type: predict
  q: "Which sentence of the review will a careful parent trust least?"
  options: ["Critic Tessa Wren says the first scene took four months to draw by hand.", "Everyone knows it will win awards.", "The harbour glows in glorious gold light."]
  actual: "'Everyone knows it will win awards.' Nothing is named or shown that a parent could check."
```

## Try: name each part

```step
stage: run
insight: "Labelling the sentences by their feature shows what each part of the review is doing."
try: { playground: board, starter: "text.yml#run", height: 520 }
hint: ["Is there a named person who knows?", "Is it a judging word, an exaggeration or a claim with nothing behind it?"]
smaller:
  check: { type: question, q: "'The queue was a thousand years long.' Which feature is this?", options: ["A named source", "An exaggeration", "A bare assertion"], answer: 1, feedback: ["No one is named.", null, "It is not a claim to check. It stretches the truth for effect."], explain: "A queue cannot be a thousand years long, so the line exaggerates." }
check: { type: board, text: "Label each sentence with its feature.", when: "n_right = 6", explain: "Heart-melting hero and glorious gold light are strong judging words. Tessa Wren and the school librarian are named sources. A million years exaggerates. Everyone knows is a bare assertion." }
```

Which labels needed you to look back at an earlier lesson?

## Worked example: does it work?

```step
stage: investigate
insight: "Judging whether each part works for the audience shows how to evaluate language choices against a purpose."
tasks:
  - check:
      type: sort
      q: "For parents choosing a family film, does each part work, or is it weak?"
      options: ["Works for this audience", "Weak for this audience"]
      items:
        - ["Critic Tessa Wren, who has reviewed films for twenty years, says the first scene took four months to draw by hand.", "Works for this audience", "A named critic who knows films."]
        - ["Everyone knows it will win awards.", "Weak for this audience", "A bare assertion with no source."]
        - ["Some critics say it is good.", "Weak for this audience", "A vague source."]
        - ["The brave little tugboat is a heart-melting hero.", "Works for this audience", "Warm words suit a family film."]
        - ["ToyBarn, a shop that sells toys from the film, says it is the finest film ever made.", "Weak for this audience", "Named, but it gains from selling the film's toys."]
        - ["The school librarian who runs the film club says it kept her group silent for two hours.", "Works for this audience", "A named source who watched a group."]
  - check:
      type: bug
      code: "working.txt#nib"
      text: "Here is Nib's judgement of the review, one point per line. One point judges the language but gives no reason. Click it."
      answer: 3
      fault: logic
      misconception: effective-without-reason
      explain: "Line 3 says the exaggeration is 'great' but gives no reason. A judgement says what a part does for its audience."
  - check:
      type: question
      q: "The review quotes a school librarian who watched a group of children. How well does that support the claim that the film holds children's attention?"
      options: ["It does not matter who says it", "Well: she watched children watching the film", "Poorly: librarians do not know films"]
      answer: 1
      feedback: ["Who says it matters. A person who watched the children can speak to this claim.", null, "She does not need to know films to see the children's reaction."]
      explain: "The source saw the very thing the claim is about, so it supports it well."
```

### Judge a part of the review

```worked
\text{Name the feature} :: Strong words, a source, a bare claim or a device?
\text{Name the audience and purpose} :: Parents choosing a family film.
\text{Judge it with a reason} :: Works or weak, because...
```

### Spot the judgement with no reason

### Judge the source

## Vary: judge two sources

```step
stage: modify
insight: "Choosing the source that best supports each claim shows how to evaluate a source."
try: { playground: board, starter: "text.yml#vary", height: 340 }
hint: ["What exactly is the claim?", "Who would know that?"]
check: { type: board, text: "Choose the source that best supports each claim.", when: "n_gaps_right = 2", explain: "An animator who has made three cartoons knows how good animation is. A teacher who watched a Year 2 class view it saw the children's reaction." }
```

## Practise: weak or strong?

```step
stage: practise
insight: "Placing five parts of the review by how well they work applies judging to the whole review."
try: { playground: board, starter: "text.yml#practise", height: 460 }
hint: ["Is the source named and does it fit?", "Does the wording suit parents?"]
check: { type: board, text: "Place each part by its source: weak if nobody is named or the speaker is not in a position to know, works if a named person saw it for themselves.", when: "n_right = 5 and n_wrong = 0", explain: "Experts agree, many people love it and the shop owner who has not seen the film are weak: vague or not in a position to know. The cinema manager and the teacher both watched the children themselves." }
```

## Make: write your verdict

In your own document, write a verdict of at least four sentences on whether the *Lantern Cove* review persuades parents. Say what works, for whom and why. Quote at least one phrase from the review in quotation marks, and say what it shows.

Here is one example, about a different made-up review: "The review of *Quiet Hill* would persuade teenagers. It says the music is 'loud enough to rattle your ribs', which suits that audience. However, 'a hit with everyone' is weak, because no one is named."

Then swap with a partner. Does the quoted phrase really support the judgement? Is there a reason for each point, and an audience named?

```step
stage: make
insight: "Writing a verdict with evidence from the review puts judging language and sources to use."
hint: ["Would the review persuade parents? Why?", "Which words from the review show that?"]
check: { type: reflect, text: "I wrote a verdict of at least four sentences with a quoted phrase from the review, and a partner and I checked that the phrase supports my judgement." }
```

## In your own writing

```step
stage: make
tier: typical
insight: "Judging a real review is the transfer step for the whole course."
check: { type: reflect, text: "I read a real review, judged one language choice and one source, and said for whom and why." }
```

## Wider: two reviews, one audience

```step
stage: make
tier: wider
insight: "Comparing two reviews for one audience applies judging at the same level."
check:
  type: reasoning
  q: "Imagine a second review of Lantern Cove written for film students, not parents. Name one feature that would change and say why."
  placeholder: "For film students ... because ..."
  models:
    - title: "A strong answer"
      text: "It would use fewer emotive words such as heart-melting and more detail about the animation, because film students want to know how it was made."
    - title: "A different view that also works"
      text: "It would quote a filmmaker rather than a librarian, because film students trust people who know how films work."
  criteria: ["I named a feature.", "I said why it changes.", "I linked it to the audience."]
  explain: "A feature works for one audience and may be weak for another."
```
