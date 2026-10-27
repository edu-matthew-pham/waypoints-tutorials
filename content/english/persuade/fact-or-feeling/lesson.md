---
order: 1
unit: warmup
title: "Fact or feeling?"
summary: "A fact can be checked. An opinion shows what a writer thinks or feels. Thinking words (I think, I believe) and feeling words (terrific, awful) give an opinion away. Reports use plain words, numbers and verbs such as found or shows. Any kind of text can be factual or opinionated, depending on its purpose."
language: maths
node: [AC9E4LA02 n1, AC9E4LA02 n2, AC9E4LA02 n3]
explainPicture: { ref: text.yml#explain-pic, caption: "One school fair, two sentences. One can be checked and one shows what the writer feels." }
hook: "'The play ran for 40 minutes.' 'The play was tedious.' Which one could you check with a clock?"
---
A **fact** can be checked. An **opinion** shows what someone thinks or feels, and people can disagree with it.

Opinions leave clues:

- **Thinking words** such as *I think*, *I believe* and *in my view*.
- **Feeling words** such as *terrific*, *awful* and *dull*.

Facts are usually written with plain words and numbers. Writers who report what they found often use words such as *found*, *shows* and *reports*. Which one a writer uses depends on what the text is for, not on whether it is a report or a review.

## Predict: which is the opinion?

```step
stage: predict
insight: "Predicting which sentence gives an opinion previews that some words judge a number, where a number alone only counts."
check:
  type: predict
  q: "Which sentence gives the writer's opinion?"
  options: ["The café sells 12 kinds of pie.", "The café sells far too many pies.", "The café opened last year."]
  actual: "'The café sells far too many pies.' The words 'far too many' judge the number. The other two can be checked."
```

## Try: fact or opinion?

```step
stage: run
insight: "Labelling six sentences about a school fair as fact or opinion shows which words can be checked and which show a view."
try: { playground: board, starter: "text.yml#run", height: 460 }
hint: ["Could you check this with a count or a clock?", "Which word shows what the writer feels?"]
smaller:
  check: { type: question, q: "'The soup was disgusting.' Which word shows an opinion?", options: ["soup", "was", "disgusting"], answer: 2, feedback: ["Soup names a thing.", "Was only links the soup to its description.", null], explain: "Disgusting shows how the writer feels about the soup. It cannot be checked with a count." }
check: { type: board, text: "Label each sentence: fact or opinion.", when: "n_right = 6", explain: "Raised $840, forty students and finished at 3 pm can be checked, so they are facts. The best day, too crowded and horrible show what the writer thinks or feels." }
```

Which one surprised you? Which could two people disagree about?

## Worked example: which words give it away?

```step
stage: investigate
insight: "Sorting words by what they do, finding an opinion in a report and seeing that any text can be factual shows how word choice sets the register."
tasks:
  - check:
      type: sort
      q: "What does each word do in a sentence?"
      options: ["Shows a thought (opinion)", "Shows a feeling (opinion)", "Reports a finding"]
      items:
        - ["I believe", "Shows a thought (opinion)", "A thinking word, so the sentence is an opinion."]
        - ["dreadful", "Shows a feeling (opinion)", "A feeling word that judges."]
        - ["The survey shows", "Reports a finding", "It reports what the survey found."]
        - ["in my view", "Shows a thought (opinion)", "A thinking phrase."]
        - ["delightful", "Shows a feeling (opinion)", "A feeling word that judges."]
        - ["The study found", "Reports a finding", "It reports a result."]
  - check:
      type: bug
      code: "working.txt#nib"
      text: "Here is Nib's science report on soils, one sentence per line. One sentence slips an opinion into a report. Click it."
      answer: 3
      fault: logic
      misconception: opinion-in-report
      explain: "Line 3 says clay soil is 'horrible'. That is a feeling word, so it shows an opinion. A report would say how long the clay took to drain."
  - check:
      type: question
      q: "Which text could use plain, checkable language?"
      options: ["Only a news article", "Only a science report", "Any text, such as a review that lists measurements"]
      answer: 2
      feedback: ["News articles also include opinions, such as quotes.", "Many other texts can list facts too.", null]
      explain: "Any text can mix facts and opinions. The writer's purpose decides which words to use."
```

### Fact, thought or feeling?

```worked
\text{Read the sentence} :: Could you check it with a count, a clock or a record?
\text{Look for a clue} :: A thinking word or a feeling word means an opinion.
\text{Think about the purpose} :: A report needs facts. A review welcomes opinion.
```

### Spot the opinion in the report

### Which text can be factual?

## Vary: report it as a fact

```step
stage: modify
insight: "Choosing the wording that reports a fact shows how a number replaces a feeling word."
try: { playground: board, starter: "text.yml#vary", height: 340 }
hint: ["Which choice can be counted or checked?", "Which choice judges?"]
check: { type: board, text: "Choose the wording that reports a fact.", when: "n_right = 2 and n_wrong = 0", explain: "Ten minutes late and has 40 computers can be checked. Dreadfully late and is the loveliest room are judgements." }
```

## Practise: find the opinion words

```step
stage: practise
insight: "Colouring the opinion words in a short review applies fact and opinion to a new text."
try: { playground: board, starter: "text.yml#practise", height: 340 }
hint: ["Which words show what the writer thinks or feels?", "Which sentence can be checked?"]
check: { type: board, text: "Colour every opinion word in the review.", when: "chains_ok = 1 and n_stray = 0", explain: "Fantastic, think, best and scary show the writer's view. It opened in March and has three ramps are facts." }
```

## Make: three facts and an opinion

```step
stage: make
insight: "Writing facts and then an opinion about one place puts the two kinds of language to use."
try: { playground: board, starter: "text.yml#make", height: 400 }
hint: ["What facts can you count or check about the place?", "What do you think of it?"]
check: { type: board, text: "Write at least four sentences about a place at school: three facts, then your opinion (use at least one word such as I, my or we).", when: "n_sentences >= 4 and n_first >= 1", explain: "You wrote facts and an opinion. Ask a partner to point to the sentence they could check, and the one they could argue with." }
```

The board counts sentences and the words I, me, my, we, us and our. Whether your facts can be checked is for you and a partner to judge.

## In your own writing

```step
stage: make
tier: typical
insight: "Spotting fact and opinion in a real text puts the idea to use outside the board."
check: { type: reflect, text: "I read a real text, such as a review or a news story, and found one fact and one opinion in it." }
```

## Wider: opinion in different texts

```step
stage: make
tier: wider
insight: "Comparing how much opinion different kinds of text show applies the idea across text types at the same level."
check:
  type: reasoning
  q: "Compare a review of a film with a letter to a newspaper about a local park. Give two differences in how much opinion they show, and say why."
  placeholder: "The review ... The letter ..."
  models:
    - title: "A strong answer"
      text: "A review is mostly opinion, with feeling words such as 'thrilling', because its purpose is to give a view. A letter to the editor also gives a view, but it often adds facts such as dates and numbers to persuade."
    - title: "A different view that also works"
      text: "Both give opinions, but the review is about enjoyment and uses personal words, while the letter argues for a change and uses facts to back it up."
  criteria: ["I gave two differences.", "I said why, using the text's purpose.", "I used fact and opinion words, not 'good' or 'bad'."]
  explain: "The purpose of a text shapes how much opinion it shows."
```
