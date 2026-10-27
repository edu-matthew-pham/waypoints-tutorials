---
order: 2
unit: warmup
title: Write it to be heard
summary: "A listener hears a talk once, in order, so a script is written for the ear: short sentences, one idea at a time, signpost words, a key idea said twice, and special words explained as they are used. Students find signpost words, spot the sentence a listener would lose, choose the version that can be said aloud, rework a long written sentence, and write the start of a script."
language: maths
node: [AC9E5LY07 n2]
explainPicture: { ref: text.yml#explain-pic, caption: "The same idea written for a reader and written for a listener. The second can be said in one breath each." }
hook: "A sentence can be perfect on paper and impossible to follow out loud. What changes when no one can read it again?"
---
A reader can slow down, look back and read a hard sentence twice. A listener cannot. So a script is written for the **ear**, not the eye.

Writing for the ear means:

- **Short sentences**, each one a breath long, with one idea in it.
- **Signpost words** (first, second, so, in short) that tell listeners where they are.
- **Saying the key idea twice**, in different words.
- **Explaining a special word** when you use it, not before and not after.

A longer sentence is fine if it is easy to say. Two ideas joined by a word like *because* can sound natural, as long as the speaker can say it in a single breath.

## Predict: what do listeners keep?

```step
stage: predict
insight: "Predicting what a listener holds from one hearing of a long written sentence sets up why scripts need a different style."
check:
  type: predict
  q: "Nib reads this sentence aloud once: 'The reduction in lunchtime seating, which was caused by the building of the new library wing, has led to crowding in the quad.' What will most listeners have by the end?"
  options: ["The whole idea, because the sentence is complete", "More than a reader would, because speech is slower", "The same as a reader, because the words are the same", "They lose track partway, because they hear it once, in order"]
  actual: "They lose track partway. A reader can go back, but a listener has to hold every part in mind until the end. A long sentence with a clause in the middle asks too much of them."
```

## Try: find the signposts

```step
stage: run
insight: "Colouring the signpost words in a short script makes visible the words that carry a listener from one idea to the next."
try: { playground: board, starter: "text.yml#run", height: 340 }
hint: ["Which words would tell a listener 'a new idea is starting now'?", "Which words tell a listener 'this is the end'?"]
smaller:
  check: { type: question, q: "Which of these tells a listener where they are in the talk?", options: ["Second", "wet", "gym"], answer: 0, feedback: [null, "That describes the oval. It says nothing about where the talk has got to.", "That names a place, not a position in the talk."], explain: "A signpost word such as first, second or finally tells listeners how the talk is laid out." }
check: { type: board, text: "Colour the signpost words in the script.", when: "chains_ok = 1 and n_stray = 0", explain: "First, Second, So and In short are the signposts. They tell a listener that a new idea starts, or that the talk is wrapping up. The rest of the words carry the ideas." }
```

Were you right about what listeners keep? A script that tells them where they are is much easier to hold.

## Worked example: what a script does

```step
stage: investigate
insight: "Asking why a key idea is said twice, catching Nib's sentence that a listener would lose and judging a short sentence with a because in it show what writing for the ear leaves in and takes out."
tasks:
  - check:
      type: question
      q: "A speaker says the main idea near the start and again in the last sentence. Why?"
      options: ["Listeners cannot reread, so a second chance helps them keep it", "The speaker has run out of ideas", "It makes the talk longer", "A talk has to use the same words twice by rule"]
      answer: 0
      feedback: [null, "A repeat is a choice. It is not a sign of a thin talk.", "A repeat is useful because of what it does for listeners, not for the clock.", "The words can change. The idea is what repeats."]
      explain: "On paper, a reader can look back. In a talk, hearing the main idea twice gives the listener a second chance to catch it."
  - check:
      type: bug
      code: "working.txt#nib"
      text: "Here is part of Nib's script about the school bubblers, one sentence per line. Click the sentence a listener would lose."
      answer: 3
      fault: logic
      misconception: read-it-out
      explain: "Line 3: it packs three ideas into one sentence, with a clause tucked into the middle. Written down, a reader could manage it. Out loud, the listener has lost the first idea before the speaker finishes. Nib should say it as three short sentences."
  - check:
      type: question
      q: "Which of these can a speaker say naturally in one breath?"
      options: ["Because the bubbler is broken, we are using the tap.", "The broken bubbler, which was installed last year after a request from the student council, will be replaced next term, which the principal confirmed.", "Replacement of the bubbler, subject to approval, is anticipated.", "None of them, because every sentence is too hard to say"]
      answer: 0
      feedback: [null, "It has two clauses tucked inside it and runs on for so long that the speaker would run out of breath.", "It is packed with abstract nouns, and the verb comes late.", "Short sentences with a joining word can sound natural."]
      explain: "A sentence with two parts joined by because is fine to speak: it has one idea and a breath's length. What goes wrong is length and clauses buried in the middle."
```

### Write for the ear

```worked
\text{Short sentences} :: One idea, one breath.
\text{Signpost words} :: First, second, so, in short.
\text{Say it twice} :: Once near the start, once near the end.
\text{Explain special words} :: Use the word, then say what it means.
\text{Speak to them} :: Use you, ask a question, then answer it.
```

Now: why say the main idea twice?

### Find the sentence a listener would lose

### What can be said in a breath?

## Vary: the version you could say

```step
stage: modify
insight: "Choosing the spoken version of each idea shows that the same facts can be set up for the eye or for the ear."
try: { playground: board, starter: "text.yml#vary", height: 380 }
hint: ["Read each choice aloud, quietly. Which one runs out of breath?", "Which choice explains the special word as it uses it?"]
check: { type: board, text: "Choose the version of each sentence that a speaker could say aloud.", when: "n_gaps_right = 3", explain: "In each pair, the spoken version is shorter, says one idea at a time and explains the special word as it goes. The other version would suit a report, where the reader can look back." }
```

## Practise: from the page to the ear

```step
stage: practise
insight: "Reworking a long written sentence into several spoken ones uses the counts the board gives without letting them decide what sounds natural."
try: { playground: board, starter: "text.yml#practise", height: 400 }
hint: ["Where does the sentence change from one idea to the next?", "Could you say each piece in a single breath?"]
check: { type: board, text: "Rewrite the sentence as three or more sentences, with none of them 15 words or longer.", when: "is_written = 1 and n_sentences >= 3 and n_long = 0", explain: "You turned one long written sentence into short ones that a listener can hold. Read them aloud to a partner: does each one fit in a breath?" }
```

The board counts sentences and how many are long. It cannot hear your script, so say it aloud to a partner and ask if they could follow it.

## Make: the start of a script

```step
stage: make
insight: "Writing an opening for a listener, explaining a special word and saying the main idea is open work that is compared with models, not marked."
check:
  type: reasoning
  q: "Write the first four sentences of a script for a talk to Year 5 about drinking more water. Say the main idea once, use at least one signpost word, and use the word 'hydrated' but explain it as you do."
  placeholder: "Hands up if you have ever felt tired at lunchtime. ..."
  models:
    - title: "A strong answer"
      text: "Hands up if you have ever felt tired by lunchtime. Today I want to show you a simple fix: drink more water. First, water keeps you hydrated, which means your body has all the water it needs. A hydrated brain finds it easier to concentrate."
    - title: "A different approach that also works"
      text: "Here is my main idea: your brain works better when you drink water. Let me tell you why. First, being hydrated means your body has enough water to work well. Second, a tired brain often just needs a drink."
  criteria: ["My sentences are short enough to say in one breath.", "I said the main idea clearly.", "I used a signpost word.", "I explained 'hydrated' as I used it."]
  explain: "There are many good openings. What they share is short sentences, a clear main idea, a signpost that tells listeners where they are, and a hard word explained the moment it appears."
```

## In your own class

```step
stage: make
tier: typical
insight: "Reading a real piece of writing aloud and noticing where the voice runs out of breath shows students what to change in their own scripts."
check: { type: reflect, text: "I read a paragraph I wrote aloud, marked where I ran out of breath, and split one long sentence." }
```

## Wider: a different listener

```step
stage: make
tier: wider
insight: "Rewriting the same script for a different listener keeps the skill and shows how the listener decides the words."
check: { type: reflect, text: "I rewrote my script for a different listener, such as younger students, and explained which words I changed and why." }
```
