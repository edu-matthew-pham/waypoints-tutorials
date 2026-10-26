---
order: 1
unit: warmup
optional: true
title: What does it point back to?
summary: "Words such as she, it, they and this do not name anything on their own. They point back to something the reader has already met, which saves repeating it. Reading well means following each one back, and writing well means making sure the reader can."
language: maths
node: [AC9E4LA04 n1]
explainPicture: { ref: text.yml#explain-pic, caption: "She points back to Grandma and it to the camera. This points back to a whole idea: taking forty photos in one afternoon." }
hook: "Read this: 'It was enormous. It moved slowly towards them.' What was enormous, and who is them? You cannot tell, because nothing came before."
---
Some words don't name anything themselves. **She**, **we**, **it**, **they**, **them**, **this** and **these** point back to something the reader has already met. They save the writer from repeating the same words, but only if the reader can follow them back.

Nib is learning to write. Nib's notes in this course have a few slips for you to find.

## Predict: what does It mean?

```step
stage: predict
insight: "Committing to an answer before tracing shows that readers find the thing a word points to by meaning, not just by distance."
check:
  type: predict
  q: "'The koala climbed down the gum tree. It was looking for fresh leaves.' What does It point back to?"
  options: ["The koala", "The gum tree", "The leaves", "Nothing: it is just a word"]
  actual: "The koala. The gum tree is closer to It, but a tree cannot look for leaves. Readers follow a pointing word back to the thing that makes sense."
```

## Try: draw the arrows

```step
stage: run
insight: "Tracing every pointing word in a short paragraph turns 'reading past' them into following each one back."
try: { playground: board, starter: "text.yml#run", height: 320 }
hint: ["Click a word with a dotted line under it. Then click the words it points back to. An arrow appears.", "She is a person. It is one thing. They is more than one thing. Look back for something that fits."]
smaller:
  check: { type: question, q: "Ms Tran gave our class a garden bed. She said we could grow anything. Who is She?", options: ["Ms Tran", "Our class", "The garden bed"], answer: 0, feedback: [null, "Our class is more than one person, and she is one person.", "A garden bed can't say anything."], explain: "She is one person who can say things: Ms Tran. Swap her in and the sentence still makes sense." }
check: { type: board, text: "Draw an arrow from each dotted word back to what it points to.", when: "n_right = 4 and n_wrong = 0", explain: "She points to Ms Tran, we to our class, It to the garden bed, and They to the tomatoes and basil. Each one names something the reader met earlier." }
```

Were you right about the koala? You followed It back by asking what made sense, the same as here.

## Worked example: follow it back

```step
stage: investigate
insight: "Modelling the three questions (who or what, look back, swap it in) gives a method. Nib's slip is choosing the nearest noun without checking it makes sense."
tasks:
  - check:
      type: question
      q: "'Our team lost the final. This made the coach very quiet on the bus.' What does This point back to?"
      options: ["The whole idea: our team losing the final", "The final", "Our team", "The bus"]
      answer: 0
      feedback: [null, "A final cannot make someone quiet on its own. Read the whole first sentence.", "Try swapping in 'Our team made the coach very quiet'. It changes the meaning.", "The bus comes after This, so This cannot point back to it."]
      explain: "This can point back to a whole idea, not just one word. Losing the final is what made the coach quiet."
  - check:
      type: bug
      code: "working.txt#nib"
      text: "Nib traced 'it' in this sentence: 'Zara put the cake on the bench because it was too hot to hold.' Click the line where Nib first goes wrong."
      answer: 3
      fault: logic
      misconception: nearest-noun
      explain: "Line 3: Nib picked the closest thing without swapping it back in. 'The bench was too hot to hold' does not make sense. The cake was too hot."
  - check:
      type: question
      q: "Why do writers use words like she, it and they at all?"
      options: ["So they don't have to repeat the same name in every sentence", "Because names are not allowed twice", "To make the reader guess", "Because they are shorter to spell"]
      answer: 0
      feedback: [null, "You can repeat a name, and sometimes you should. It just gets heavy if you do it every time.", "A good pointing word never makes the reader guess.", "Shorter is a bonus, not the reason."]
      explain: "Pointing words keep the text moving without repeating the same name over and over. They only work when the reader can tell what they point to."
```

### Following a pointing word

```worked
\text{Find the word} :: Spot a word that does not name anything itself: she, he, we, it, they, them, this, these, that.
\text{Ask who or what} :: She is a person, it is one thing, they and these are more than one.
\text{Look back} :: Read back for something that fits. The closest one is a good first guess, not the answer.
\text{Swap it in} :: Put your answer in place of the word. If the sentence still makes sense, you found it.
```

Now try the three questions on a word that points to a whole idea.

### Find Nib's slip

### Why point back?

## Vary: a word that points to an idea

```step
stage: modify
insight: "Changing the target from a thing to a whole idea shows that this and that can carry a sentence's meaning forward."
try: { playground: board, starter: "text.yml#vary", height: 280 }
tasks:
  - starter: "text.yml#vary"
    hint: ["Click This. Ask: what meant we missed the start? It is not one word.", "Click any word in the first sentence: the whole sentence is what This points back to."]
    check: { type: board, text: "Draw the arrow from This back to what it points to.", when: "n_right = 1 and n_wrong = 0", explain: "This points back to the whole first sentence: the bus being forty minutes late. That is what made us miss the start." }
  - check:
      type: question
      q: "'The library has new beanbags. These are very popular at lunch.' What does These point to?"
      options: ["The new beanbags", "The library", "Lunch", "The whole first sentence"]
      answer: 0
      feedback: [null, "These means more than one, and there is one library.", "These comes before lunch, so it cannot point back to it.", "These means more than one thing. Which words name more than one thing?"]
      explain: "These points to more than one thing: the new beanbags."
```

### Point to an idea

### These

## Practise: find them yourself

```step
stage: practise
insight: "Removing the dotted lines makes students find the pointing words as well as trace them, which is what reading asks of them."
try: { playground: board, starter: "text.yml#practise", height: 340 }
hint: ["Press Mark a linking word, then click a word like they, it or this. Then click what it points back to.", "There are three. One of them points back to a whole idea."]
check: { type: board, text: "Find the three pointing words, mark them and draw an arrow from each.", when: "n_links = 3 and n_right = 3", explain: "They points to the Year 6 students, it to the school pond, and This to the whole idea that there were more frogs each week. Finding them is half the skill." }
```

## Make: your own

```step
stage: make
insight: "Writing their own sentences and tracing their own pointing words moves the skill from reading into writing."
try: { playground: board, starter: "text.yml#make", height: 340 }
hint: ["Press Write your own and write three sentences about something your class did. Use she, he, it, they or this at least twice.", "Press Done writing, then Mark a linking word, and draw an arrow from each pointing word. Can a partner follow every arrow?"]
check: { type: board, text: "Write three sentences of your own with at least two pointing words, then mark and trace each one.", when: "is_written = 1 and n_marked >= 2 and n_arrows >= 2", explain: "Every arrow lands on something a reader met earlier, so your reader never has to guess." }
```

If one of your arrows was hard to draw, a reader would struggle there too. Change the word to the name.

## In your own writing

```step
stage: make
tier: typical
insight: "Checking a piece of their own class writing applies the move where it matters."
check: { type: reflect, text: "I picked a paragraph I wrote this term, found every she, he, it, they and this, and checked I could say what each one points back to. Where I couldn't, I changed it to the name." }
```

Pencil arrows on a printed page work just as well as the board.
