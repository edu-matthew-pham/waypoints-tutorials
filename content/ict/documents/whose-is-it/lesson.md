---
order: 8
unit: credit
title: Whose is it?
summary: "Someone made every picture, chart and piece of writing you find online. Being able to see it does not mean you may use it however you like. A licence says what you may do, and a credit says who made it, where you found it and the licence. Your own work and common knowledge need no credit. Words you copy need quote marks as well as a credit, and ideas you put in your own words still need to say where they came from."
language: maths
hook: "A student finds a good picture of a bean plant by searching the web, copies it onto her slide and says it is hers because she found it. Is it?"
---
Everything made by a person belongs to them, unless they say otherwise. A **licence** is how they say it. Some licences let anyone use a picture if they give a credit. Others do not allow it at all.

A good **credit** gives three things, in a line under the picture:

1. **Who** made it.
2. **Where** you found it.
3. **The licence**, what you are allowed to do.

The pictures in these lessons use a pretend source card so you can practise. A real picture comes with its own details on the page where you find it.

## Predict: does she need to credit it?

```step
stage: predict
insight: "Committing to an answer tests the move: finding a picture is not making it."
check:
  type: predict
  q: "A student searches the web, finds a picture of a bean plant on a stranger's page and puts it on her slide with no credit. Is that OK?"
  options: ["No: someone made it and she has to credit them, if the licence allows it", "Yes, it was on the internet", "Yes, if she changes the colours", "Yes, if it is a small picture"]
  actual: "No. Someone made it. She needs to check the licence, and if the licence lets her use it, she credits the maker. Changing colours or size does not make it hers."
```

## Try: write the credit

```step
stage: run
insight: "Writing a credit from a source card settles the prediction: who, where and the licence."
try: { playground: board, starter: "slide.yml#run", height: 700 }
hint: ["Click the picture. The Credit box is above the page.", "Write the three things, with commas between them, such as: Priya Nair, school-photos.example, CC BY 4.0"]
check: { type: board, text: "Write a credit for the picture from the card: who made it, where it was found and the licence.", when: "n_credit = 1", explain: "The credit says who made it, where it came from and the licence. Anyone looking at the slide can check it." }
```

Here is the pretend card for the picture on the board:

| | |
|---|---|
| **Maker** | Priya Nair |
| **Found at** | school-photos.example |
| **Licence** | CC BY 4.0 (free to use if you give credit) |

Was your guess right? A credit is short. The three parts let a reader find the original and see what you were allowed to do.

## Worked example: when to credit

```step
stage: investigate
insight: "Writing a credit models the method. Omar uses the first picture he finds, the mistake planted after it."
tasks:
  - check:
      type: question
      q: "What three things does a good credit give?"
      options: ["Who made it, where you found it, and the licence", "The file name, the size and the date", "The title, the colour and the owner", "Your name, the school and the date"]
      answer: 0
      feedback: [null, "Those describe the file, not who made it or what you may do.", "Colour has nothing to do with a credit.", "Those say who used it, not who made it."]
      explain: "Who made it, where you found it and the licence. That is enough to check the original and see what you may do."
  - check:
      type: bug
      code: "working.txt#omar"
      text: "Omar's teacher says he cannot use his picture. Click the line where Omar first goes wrong."
      answer: 3
      fault: logic
      misconception: no-credit-needed-online
      explain: "Line 3: Omar used the picture without finding out who made it or checking the licence. Being on the internet does not make a picture free. Someone made it, and the licence says what you may do."
  - check:
      type: question
      q: "You copy a sentence word for word from a website into your report. What do you need?"
      options: ["Quote marks and a credit", "Nothing, it is only a sentence", "A credit only", "Quote marks only"]
      answer: 0
      feedback: [null, "Copied words are someone else's writing, whatever the length.", "A credit without quote marks suggests the words are yours.", "Quote marks without a credit do not say whose words they are."]
      explain: "Quote marks show the words are not yours, and the credit says whose they are."
```

### Writing a credit

```worked
\text{Find the maker} :: The page the picture is on usually says who made it. If it does not, be careful.
\text{Check the licence} :: It says what you may do. Some say you must give credit, some say no.
\text{Write the credit} :: Who, where and the licence, in a line under the picture.
\text{If you cannot find them} :: Do not use it. Draw your own or choose one that has the details.
```

Now: what does a good credit give?

### Find the mistake

### Words as well as pictures

## Vary: does it need a credit?

```step
stage: modify
insight: "Each task changes what is being used: your own work, someone else's and common knowledge."
tasks:
  - check:
      type: sort
      q: "Does each need a credit?"
      options: ["Needs a credit", "No credit needed"]
      items:
        - ["A photo from a website that someone else took", "Needs a credit", "Someone else made it."]
        - ["A drawing you made yourself", "No credit needed", "It is your own work."]
        - ["A sentence copied from a web page", "Needs a credit", "Copied words are someone else's, so they need quote marks and a credit."]
        - ["Beans are seeds", "No credit needed", "Common knowledge needs no credit."]
        - ["A chart someone else made", "Needs a credit", "Someone else made it."]
        - ["A graph you made from your own results", "No credit needed", "Your own data and your own graph."]
  - check:
      type: question
      q: "You read a fact on a website and write it in your own words. Do you still say where it came from?"
      options: ["Yes, say where you found it", "No, the words are yours", "No, if you change enough words", "Only if it is a number"]
      answer: 0
      feedback: [null, "The words are yours, but the idea came from somewhere.", "Changing words does not change where the idea came from.", "Ideas need credit too, not just numbers."]
      explain: "Putting it in your own words is good, and you still say where the idea came from."
  - check:
      type: question
      q: "A picture's licence says you cannot use it without permission. What should you do?"
      options: ["Choose a different picture or ask permission", "Use it with a credit", "Use it and hope", "Change it a little"]
      answer: 0
      feedback: [null, "A credit does not replace permission when the licence does not allow it.", "Hoping is not permission.", "A small change is still using their work."]
      explain: "If the licence does not allow it, choose another picture or ask the owner."
```

### Sort them

### In your own words

### No

## Practise: credit two pictures

```step
stage: practise
insight: "Writing a credit for each of two pictures, then choosing where credits go."
try: { playground: board, starter: "slide.yml#practise", height: 720 }
tasks:
  - starter: "slide.yml#practise"
    hint: ["Click each picture in turn and use the card below for its credit.", "Write the maker, then where, then the licence, with commas between."]
    check: { type: board, text: "Write a credit for each of the two pictures from their cards.", when: "n_credit = 2", explain: "Each picture has a credit with who, where and the licence." }
  - check:
      type: question
      q: "Where should a credit go?"
      options: ["Next to the picture, or on a sources slide at the end", "Nowhere, the audience can see the picture", "Only in the file name", "In your head"]
      answer: 0
      feedback: [null, "The audience cannot see who made it or what the licence allows.", "A file name is not shown to the audience.", "Nobody else can check it."]
      explain: "Put it where a reader will find it: under the picture, or on a sources slide at the end."
```

Cards for the practice board:

| | Bean pot picture | Sun picture |
|---|---|---|
| **Maker** | Tom Eze | Mei Wong |
| **Found at** | class-garden.example | science-fair.example |
| **Licence** | CC BY 4.0 | CC BY 4.0 |

### Credit both

### Where do credits go?

## Make: a slide with a sources slide

```step
stage: make
insight: "Crediting a picture and adding a sources slide has students use the move on a deck of their own."
try: { playground: board, starter: "slide.yml#make", height: 720 }
hint: ["Click the picture and write its credit from the card. Then click the last bullet.", "Press Start a new slide here to start a second slide, and make its title Sources."]
check: { type: board, text: "Credit the picture, and make a second slide that lists your sources.", when: "n_credit >= 1 and n_slides >= 2 and n_empty = 0", explain: "The picture has a credit, and a Sources slide at the end lists where things came from." }
```

Card for this picture: maker Anika Rao, found at garden-club.example, licence CC BY 4.0.

## In your own app

```step
stage: make
tier: typical
insight: "Crediting in the real app shows the idea is the same everywhere."
check: { type: reflect, text: "In my own slides I found a picture that I am allowed to use (my own, or one with a licence that allows it), added a credit line under it with who, where and the licence, and added a Sources slide at the end." }
```

Many sites that offer free pictures show the maker and the licence on the picture's page, and some give you a credit line to copy. Check that what you copy says who, where and the licence. If a site shows none of them, choose another picture or draw your own.
