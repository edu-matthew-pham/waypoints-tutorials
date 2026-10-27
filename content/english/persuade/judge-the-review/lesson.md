---
order: 9
unit: challenge
title: "Challenge: judge the review"
summary: "A made-up film review has strong words, a source, a bare claim and an exaggeration. Students judge it in four parts: name each feature, judge whether it works for the audience, judge two sources, then write their own verdict with evidence from the review."
language: maths
node: [AC9E8LY03 n1, AC9E8LY03 n2]
explainPicture: { ref: text.yml#explain-pic, caption: "A review has parts. Judge each part for its audience and purpose." }
hook: "A review says a film is 'the best of the year' and 'everyone knows it will win awards.' Should you buy a ticket?"
---
This is a made-up review of a made-up film, *Harbour Lights*, written to persuade **parents choosing a family film**. You will judge it in four parts using what you learned in this course: strong words, sources, bare claims and devices. A last step asks you to judge a real review.

A good judgement says **what works, for whom, and why**. A review can be effective for its purpose and still have a weak part.

> *Harbour Lights* is the best family film of the year. The brave little tugboat is a heart-melting hero, and the harbour glows in glorious gold light. Critic Ana Reyes, who has reviewed films for twenty years, calls the first scene 'a wave of pure wonder'. The school librarian who runs the film club says it kept her group silent for two hours. The final chase lasts about a million years, and you will want every minute. Everyone knows it will win awards.

## Predict: which part will be weakest?

```step
stage: predict
insight: "Thinking about which part is weakest makes students link each part to its purpose before judging."
check:
  type: predict
  q: "Which sentence of the review will a careful parent trust least?"
  options: ["Everyone knows it will win awards.", "Critic Ana Reyes calls the first scene 'a wave of pure wonder'.", "The harbour glows in glorious gold light."]
  actual: "'Everyone knows it will win awards.' It is a bare assertion with no source. The critic is named and the gold light is a judgement a parent can picture."
```

## Try: name each part

```step
stage: run
insight: "Labelling the sentences by their feature shows what each part of the review is doing."
try: { playground: board, starter: "text.yml#run", height: 520 }
hint: ["Is there a named person who knows?", "Is it a judging word, an exaggeration or a claim with nothing behind it?"]
smaller:
  check: { type: question, q: "'Everyone knows it will win awards.' What is it?", options: ["A bare assertion", "A named source", "An exaggeration with a source"], answer: 0, feedback: [null, "No one is named.", "It has no source."], explain: "It states a claim and gives nothing to check, so it is a bare assertion." }
check: { type: board, text: "Label each sentence with its feature.", when: "n_right = 6", explain: "Heart-melting hero and glorious gold light are strong judging words. Ana Reyes and the school librarian are named sources. A million years exaggerates. Everyone knows is a bare assertion." }
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
        - ["Critic Ana Reyes, who has reviewed films for twenty years, calls the first scene 'a wave of pure wonder'.", "Works for this audience", "A named critic who knows films."]
        - ["Everyone knows it will win awards.", "Weak for this audience", "A bare assertion with no source."]
        - ["The brave little tugboat is a heart-melting hero.", "Works for this audience", "Warm words suit a family film."]
        - ["Some critics say it is good.", "Weak for this audience", "A vague source."]
        - ["The school librarian who runs the film club says it kept her group silent for two hours.", "Works for this audience", "A named source who watched a group."]
        - ["A website that sells toys says it is the finest film ever made.", "Weak for this audience", "Named, but it sells toys, not films."]
  - check:
      type: bug
      code: "working.txt#nib"
      text: "Here is Nib's judgement of the review, one point per line. One point judges the language without saying for whom or why. Click it."
      answer: 3
      fault: logic
      misconception: effective-without-reason
      explain: "Line 3 says the exaggeration is 'great' but does not say what it does for parents. A judgement needs a purpose and an audience."
  - check:
      type: question
      q: "The review quotes a school librarian who watched a group of children. How well does that support the claim that the film holds children's attention?"
      options: ["Well: she watched children watching the film", "Poorly: librarians do not know films", "It does not matter who says it"]
      answer: 0
      feedback: [null, "She does not need to know films to see the children's reaction.", "Who says it matters. A person who watched the children can speak to this claim."]
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
check: { type: board, text: "Choose the source that best supports each claim.", when: "n_gaps_right = 2", explain: "A film animator knows how good animation is. A teacher who showed the film to a Year 2 class saw the children's reaction." }
```

## Practise: weak or strong?

```step
stage: practise
insight: "Placing five parts of the review by how well they work applies judging to the whole review."
try: { playground: board, starter: "text.yml#practise", height: 460 }
hint: ["Is the source named and does it fit?", "Does the wording suit parents?"]
check: { type: board, text: "Place each part: weak for this audience, or works for this audience.", when: "n_right = 5 and n_wrong = 0", explain: "Experts agree, many people love it and the shop owner who has not seen the film are weak: vague or not in a position to know. The cinema manager has watched every showing, and the brave tugboat suits a family film." }
```

## Make: write your verdict

```step
stage: make
insight: "Writing a verdict with evidence from the review puts judging language and sources to use."
try: { playground: board, starter: "text.yml#make", height: 400 }
hint: ["Would the review persuade parents? Why?", "Which words from the review show that?"]
check: { type: board, text: "Write a verdict of at least four sentences on whether the review persuades parents, quoting at least one phrase from the review in quotation marks.", when: "n_sentences >= 4 and n_quotes >= 1", explain: "You wrote a verdict. Ask a partner whether your quoted phrase really supports your judgement." }
```

The board counts sentences and quotation marks. It cannot judge your verdict. A partner or your teacher can.

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
  q: "Imagine a second review of Harbour Lights written for film students, not parents. Name one feature that would change and say why."
  placeholder: "For film students ... because ..."
  models:
    - title: "A strong answer"
      text: "It would use fewer emotive words such as heart-melting and more detail about the animation, because film students want to know how it was made."
    - title: "A different view that also works"
      text: "It would quote a filmmaker rather than a librarian, because film students trust people who know how films work."
  criteria: ["I named a feature.", "I said why it changes.", "I linked it to the audience."]
  explain: "A feature works for one audience and may be weak for another."
```
