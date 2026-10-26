---
order: 6
unit: guide
title: Tell the reader what's coming
summary: "A topic sentence tells the reader what a paragraph is about, so every other sentence has somewhere to belong. It is often first, but not always. Reading only the topic sentences of a text should tell you what the whole text is about."
language: maths
node: [AC9E7LA04 n1]
explainPicture: { ref: text.yml#explain-pic, caption: "The topic sentence says what the paragraph is about. Each detail gives one more thing the library offers." }
hook: "You have one minute to find out what a two-page report says. Which sentences do you read?"
---
A **topic sentence** tells the reader what a paragraph is about. The other sentences are **details**: examples, facts and reasons that belong to it. A reader in a hurry can read only the topic sentences and still follow the text.

Topic sentences are often first in a paragraph, but not always.

## Predict: just the first sentences

```step
stage: predict
insight: "Predicting from first sentences alone shows students they already use topic sentences to skim."
check:
  type: predict
  q: "A report has three paragraphs. Their first sentences are: 'Lunchtime clubs give students a chance to try something new.' 'Clubs also help students make friends outside their class.' 'Some clubs struggle to find teachers to run them.' What is the report about?"
  options: ["Lunchtime clubs: what they offer and a problem they have", "Making friends", "Teachers", "You can't tell without reading everything"]
  actual: "Lunchtime clubs: what they offer and a problem they have. Those three sentences are topic sentences, so they give you the whole report in outline."
```

## Try: label the paragraph

```step
stage: run
insight: "Labelling each sentence as the topic sentence or a detail makes students decide which one the others belong to."
try: { playground: board, starter: "text.yml#run", height: 300 }
hint: ["Click a sentence, then choose Topic sentence or Detail.", "Which sentence could the other three be examples of?"]
smaller:
  check: { type: question, q: "Chess club, garden club, drama club. What are they all examples of?", options: ["A chance to try something new", "Things that happen on Mondays", "Places in the library"], answer: 0, feedback: [null, "Only the chess club is on Mondays.", "Only the chess club is in the library."], explain: "They are all ways to try something new, so the sentence that says that is the topic sentence." }
check: { type: board, text: "Label the topic sentence and each detail.", when: "n_right = 4 and n_wrong = 0", explain: "The first sentence says what the paragraph is about. The chess, garden and drama clubs are details: examples of trying something new." }
```

Were you right about the report? The first sentences there were topic sentences, like the one you just labelled.

## Worked example: find the topic sentence

```step
stage: investigate
insight: "Modelling 'which sentence could the others belong to?' gives a method that works wherever the topic sentence sits. Nib's slip is a detail that doesn't belong to the topic."
tasks:
  - check:
      type: question
      q: "What makes a sentence a topic sentence?"
      options: ["It says what the whole paragraph is about, and the other sentences belong to it", "It is always the first sentence", "It is the longest sentence", "It has the most interesting fact"]
      answer: 0
      feedback: [null, "Often first, but a topic sentence can come last or in the middle.", "Length doesn't decide it. Details can be long.", "An interesting fact is usually a detail."]
      explain: "A topic sentence is the one the other sentences belong to. Its place in the paragraph can vary."
  - check:
      type: bug
      code: "working.txt#nib"
      text: "Here is Nib's paragraph, one sentence per line. Click the sentence that doesn't belong to the topic sentence."
      answer: 4
      fault: logic
      misconception: detail-off-topic
      explain: "Line 4: Nib's favourite colour has nothing to do with dogs needing exercise. Every detail should belong to the topic sentence. It may belong in a different paragraph, or nowhere."
  - check:
      type: question
      q: "A paragraph ends with 'All of this shows that our school wastes a lot of water.' Could that be its topic sentence?"
      options: ["Yes: it says what the paragraph is about, even though it comes last", "No: topic sentences must come first", "No: it starts with All", "Only if the paragraph is short"]
      answer: 0
      feedback: [null, "First is common, not required. Some writers build up to the point.", "How it starts doesn't decide it. What it does decides it.", "Length doesn't decide it either."]
      explain: "A topic sentence at the end sums up what the details have been building to. It still tells the reader what the paragraph is about."
```

### Finding the topic sentence

```worked
\text{Read the whole paragraph} :: Read every sentence before deciding. The topic sentence may not be first.
\text{Ask what they share} :: What are most of the sentences about? Say it in a few words.
\text{Find the sentence that says it} :: The sentence that says what they share is the topic sentence.
\text{Check the details belong} :: Every other sentence should be an example, fact or reason for it.
```

Now: what makes a sentence a topic sentence?

### Find Nib's slip

### At the end?

## Vary: when it comes last

```step
stage: modify
insight: "Changing where the topic sentence sits stops students labelling 'first' as 'topic' by habit."
try: { playground: board, starter: "text.yml#vary", height: 300 }
tasks:
  - starter: "text.yml#vary"
    hint: ["Read all four before you label. Which sentence do the other three belong to?", "The dripping tap, the leaking toilets and the running hoses are all examples of something."]
    check: { type: board, text: "Label the topic sentence and each detail. The topic sentence is not first this time.", when: "n_right = 4 and n_wrong = 0", explain: "Our school wastes a lot of water is the topic sentence, even though it comes last. The tap, the toilets and the hoses are the details that build up to it." }
  - starter: "text.yml#vary-order"
    hint: ["Click the topic sentence, then press Move up until it is first.", "Read the paragraph again. Does the reader know what it is about sooner?"]
    check: { type: board, text: "Move the topic sentence to the start of the paragraph.", when: "first_ok = 1", explain: "With the topic sentence first, the reader knows what the paragraph is about before the details arrive. Both orders can work: first is easier for a reader in a hurry." }
```

### Label it

### Move it first

## Practise: two paragraphs

```step
stage: practise
insight: "Two paragraphs with topic sentences in different places make the move reliable, not a guess."
try: { playground: board, starter: "text.yml#practise", height: 360 }
hint: ["Each paragraph has one topic sentence. They are in different places.", "In each paragraph, ask: which sentence could the others be examples of?"]
check: { type: board, text: "Label every sentence in both paragraphs as a topic sentence or a detail.", when: "n_right = 7 and n_wrong = 0", explain: "Paragraph one's topic sentence is first: bees matter to farmers. Paragraph two's is last: we can help bees at school. Each detail belongs to its own paragraph's topic." }
```

## Make: your own paragraph

```step
stage: make
insight: "Writing a topic sentence and details for it, then labelling them, makes the structure their own."
try: { playground: board, starter: "text.yml#make", height: 380 }
hint: ["Click the first sentence and type a topic sentence: what your paragraph is about, such as 'Our school needs more shade.'", "Write at least two details that belong to it, then label every sentence."]
check: { type: board, text: "Write a topic sentence and at least two details, and label each one.", when: "has_topic = 1 and has_detail >= 2 and n_empty = 0", explain: "Your topic sentence tells the reader what's coming, and each detail belongs to it. Ask a partner to read only your topic sentence: do they know what the paragraph is about?" }
```

## In your own writing

```step
stage: make
tier: typical
insight: "Reading only the topic sentences of their own text is a quick, lasting check."
check: { type: reflect, text: "I took a piece of my own writing and read only the topic sentence of each paragraph. Where a paragraph had no topic sentence, or a detail didn't belong to it, I fixed it." }
```
