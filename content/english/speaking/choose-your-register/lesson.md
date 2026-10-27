---
order: 4
unit: prepare
title: Choose your register
summary: "Register is how formal or casual a speaker sounds, and whether they speak as 'I think' or state facts. It tells listeners how seriously to take the talk and who it is for. Students place spoken lines on a scale, choose the register for a given audience, find the line in a script that does not fit, colour casual words, and plan an opening for a chosen audience, giving a reason for each choice."
language: maths
node: [AC9E4LY07 n1, AC9E8LY07 n1]
assumes: [AC9E7LY07 n2]
explainPicture: { ref: text.yml#explain-pic, caption: "The same news, said two ways. The register suits the listeners each time." }
hook: "The same news can be said to your friend at lunch and to the principal at assembly. Why would you not say it the same way?"
---
**Register** is how formal or casual a speaker sounds. A talk can be:

- **Casual**: slang and short forms, the way you would talk to a friend.
- **Everyday**: plain and polite, the way you would talk to most people.
- **Formal**: careful words and full sentences, for an important occasion or someone you do not know well.

Speakers also choose between two ways of speaking about things:

- **Subjective**: the speaker's own views and feelings ("I think", "I love", "it was awful").
- **Objective**: facts and figures, stated without opinion ("Nine buses were late").

The right choice depends on the **purpose** of the talk and the **audience**.

## Predict: does it matter?

```step
stage: predict
insight: "Predicting how listeners react to a mismatched register makes the point that register carries a message of its own."
check:
  type: predict
  q: "Nib gives a talk to the principal and a room of parents about a problem with the bus queue. Nib uses a joking, casual voice with lots of slang. What will some of the listeners probably think?"
  options: ["That Nib is relaxed, so the problem must be small", "That Nib is friendly and everyone will agree", "That Nib may not be taking the problem or the listeners seriously", "Nothing, because the facts are the same"]
  actual: "That Nib may not be taking the problem or the listeners seriously. Register tells listeners how serious the occasion is and how the speaker sees them. The facts are the same, but the message about the speaker is not."
```

## Try: place the lines on the scale

```step
stage: run
insight: "Placing spoken lines on a scale from casual to formal gives students a shared sense of the three levels before they choose among them."
try: { playground: board, starter: "text.yml#run", height: 480 }
hint: ["Which lines would you say to a friend? Which would you say to a visitor?", "Which lines would you say to an important guest, such as a mayor?"]
smaller:
  check: { type: question, q: "Which line would you say to a friend?", options: ["Our esteemed guests are most welcome.", "Hey, grab a seat!", "Please take a seat."], answer: 1, feedback: ["That is very formal, the kind of line for a ceremony.", null, "That is polite and everyday. You would say it to most people."], explain: "'Hey' and 'grab' are casual words, the kind you use with friends." }
check: { type: board, text: "Place each spoken line on the scale: casual, everyday or formal.", when: "n_right = 6 and n_wrong = 0", explain: "Hey guys and I reckon it's a ripper idea are casual. Good morning, everyone and I think it is a good idea are everyday. Good morning, Mr Singh, and We recommend that the school adopt this proposal are formal." }
```

Were you right about whether it matters? The words carry a message about the listeners as well as about the topic.

## Worked example: matching the listeners

```step
stage: investigate
insight: "Naming subjective and objective talk, catching the line in Nib's script that does not fit its listeners and asking why not to use one register for every talk show register as a choice."
tasks:
  - check:
      type: question
      q: "A speaker says, 'I love the new oval, and it's the best thing the school has ever done.' What kind of language is this?"
      options: ["Objective, because it names the oval", "Subjective, because it gives the speaker's feelings and opinion", "Formal, because it has a full stop", "Casual, because it is short"]
      answer: 1
      feedback: ["It names the oval, but the rest is opinion: 'love' and 'the best thing'.", null, "A full stop does not decide that. The words and what they say do.", "It is not short, and being short does not decide register."]
      explain: "Subjective language says what the speaker feels or thinks. Objective language states facts, such as 'The oval is 120 metres long.'"
  - check:
      type: bug
      code: "working.txt#nib"
      text: "Nib is giving a talk to the principal and the school council about the bus queue. Here is Nib's script, one line each. Click the line whose register does not fit."
      answer: 4
      fault: logic
      misconception: register-one-size
      explain: "Line 4: 'Yo, the queue's a joke' is casual and gives only Nib's feeling. The other lines are formal and state facts. For the council, Nib should say what happens, with a number the council can check."
  - check:
      type: question
      q: "Why not use the most formal register for every talk?"
      options: ["Formal talks are always too long", "It is against the rules", "It would sound stiff and distant to listeners such as a Year 3 class", "Nobody can speak formally"]
      answer: 2
      feedback: ["Length and formality are separate. A formal talk can be short.", "There is no rule. The point is to suit the listeners.", null, "People can, and sometimes they should. It just does not suit every audience."]
      explain: "The most formal voice is for a formal occasion. With young listeners it would sound cold and keep them from following."
```

### Fit the listeners

```worked
\text{Who is listening?} :: Their age, how well you know them, how important it is.
\text{What is the purpose?} :: To inform, to persuade, to entertain.
\text{Choose a register} :: Casual, everyday or formal.
\text{Choose a stance} :: Subjective (my view) or objective (the facts).
\text{Check it} :: Would the listeners think I took them seriously?
```

Now: what kind of language is the opinion about the oval?

### Find the line that does not fit

### One register for every talk?

## Vary: choose the formal wording

```step
stage: modify
insight: "Choosing between three wordings for the same idea shows that each register has its own choices of word."
try: { playground: board, starter: "text.yml#vary", height: 360 }
hint: ["Which wording would you hear at a formal ceremony?", "Which would you not say to a person you have never met?"]
check: { type: board, text: "Choose the formal wording for each gap.", when: "n_right = 2 and n_wrong = 0", explain: "In the first gap the formal choice is 'would like to thank'. In the second it is 'has been a great success'. The other choices sit lower on the scale." }
```

## Practise: find the casual words

```step
stage: practise
insight: "Finding the casual words in a speech for the principal applies the scale to a whole script."
try: { playground: board, starter: "text.yml#practise", height: 380 }
hint: ["Which words would you change before saying this to the principal?", "Which words would you only use with a friend?"]
check: { type: board, text: "This speech is for the principal. Colour every word or phrase that is too casual for the principal.", when: "chains_ok = 1 and n_stray = 0", explain: "Hey, mate, reckon, heaps and Catch you later are the casual words. The rest of the speech is already everyday or formal." }
```

## Make: choose and explain a register

```step
stage: make
insight: "Planning an opening for a chosen audience and giving a reason for each choice is the open part of the skill, so it is compared with models, not marked."
check:
  type: reasoning
  q: "Choose one audience: the principal and parents at an information night, or a Year 3 class on a buddy visit. Write the opening sentence or two of a talk about school lunch times for them. Then say whether your register is casual, everyday or formal, whether your language is subjective or objective, and why those choices suit your audience."
  placeholder: "My audience is ... My opening is ... I chose a ... register because ..."
  models:
    - title: "A strong answer"
      text: "My audience is the principal and parents. My opening: 'Good evening, and thank you for coming. I would like to explain why lunch times need a change.' My register is formal, because the listeners are adults I do not know well and the occasion is important. My language is mostly objective, because I will state facts about queue times, and I will keep my opinion for the end."
    - title: "A different audience that also works"
      text: "My audience is Year 3. My opening: 'Hi everyone! Who likes lunch? Me too!' My register is casual, because Year 3 follow short, friendly words best. My language is subjective, because I am sharing how I feel about lunch to get them interested. I will keep my sentences short."
  criteria: ["I chose an audience and wrote an opening for it.", "I named my register and my stance (subjective or objective).", "I gave a reason that links my choices to the listeners."]
  explain: "There is no one right register. What matters is that the choice was deliberate and that you can say why it suits the listeners."
```

This is the step that shows you can choose a register on purpose. If your reason only says the register 'sounds right', ask a partner: who are the listeners, and what would they think?

## In your own class

```step
stage: make
tier: typical
insight: "Choosing the register for a real talk and saying why moves the habit into the work students will give."
check: { type: reflect, text: "I named the register for a talk I have to give in class and said who it suits, in one sentence." }
```

## Wider: the same news in another register

```step
stage: make
tier: wider
insight: "Changing a register while keeping the news shows that register is a choice about the listeners."
check: { type: reflect, text: "I said the same news in two registers, to two audiences, and explained what I changed." }
```
