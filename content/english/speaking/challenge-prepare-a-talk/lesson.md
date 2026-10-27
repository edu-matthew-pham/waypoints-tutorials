---
order: 9
unit: challenge
title: "Challenge: prepare a talk"
shape: speech
summary: "Students prepare a one-minute talk for a real audience in five parts: plan it, write the script, cut it to cue cards, rehearse with a partner and give it in class, then check the talk against the plan. The site plans, scripts and checks. Rehearsing and presenting happen in class, and a partner or the teacher judges the delivery."
language: maths
node: [AC9E4LY07 n3, AC9E6LY07 n3, AC9E8LY07 n2]
explainPicture: { ref: text.yml#explain-pic, caption: "A plan for a one-minute talk: an opening, two points with a detail each, and a close." }
hook: "A talk is a few minutes of speaking and a lot of choices behind it. Can you make every one of them on purpose?"
---
You will prepare a talk of about one minute for your class. Choose one change you would like to see in your school, such as the length of lunch, a new place to sit, or a club. Your listeners are your class, and your aim is for them to agree to try it.

You will use what you have learned in this course: a plan with a point, a script written for the ear, cue cards, a register that suits the listeners, a voice and visuals on purpose, and feedback from a rehearsal. The site helps you plan, script and check. **You give the talk in class**, to your teacher and your classmates. Nobody here can hear it, so a partner or your teacher judges the delivery.

## Purpose and audience: what will go wrong?

```step
stage: predict
insight: "Predicting what a listener says after a talk that ignores most of the course draws the earlier lessons together before students prepare their own."
check:
  type: predict
  q: "Nib reads a full script word for word from the page, in the same flat voice from start to finish, with slides that repeat every sentence. What will a classmate most likely say afterwards?"
  options: ["It was clear because everything was said twice", "It felt like being read to, and I stopped listening part way through", "It was too short", "It was too exciting to follow"]
  actual: "It felt like being read to, and I stopped listening part way through. A talk read from the page with one voice and slides that repeat it gives listeners little to listen for. Each part of this challenge fixes one of those problems."
```

## Plan: opening, points, details and close

```step
stage: investigate
insight: "Writing a plan for a talk on a chosen change in the school puts the aim, the audience and the four parts of a plan together."
try: { playground: board, starter: "text.yml#plan", height: 520 }
hint: ["What do you want your class to do after your talk?", "Which fact or example makes each point believable?"]
check: { type: board, text: "Write a line for each part of your plan, then label each one. Every line needs words in it.", when: "n_empty = 0 and n_right = 6", explain: "You have an opening, two points that each have a detail, and a close. Say your aim in one sentence to a partner: 'After my talk, my class will …'." }
```

The board checks that every line has words and a label. Whether the plan suits your class is for a partner or your teacher to judge.

## Script: write it to be heard

```step
stage: make
insight: "Writing the opening and first point of the script with the board's counts shows whether the script is built for the ear, though only a spoken test can tell."
try: { playground: board, starter: "text.yml#script", height: 460 }
hint: ["Could you say each sentence in one breath?", "Which signpost word will tell your listeners where they are?"]
check: { type: board, text: "Write the opening and your first point as four or more sentences, none of them 15 words or longer.", when: "is_written = 1 and n_sentences >= 4 and n_long = 0", explain: "Your script has short sentences that a listener can hold. Read it aloud to a partner: could you say each sentence in one breath? Did you choose a register that suits your class?" }
```

The board counts sentences and how many are long. It cannot hear your script or tell if your register suits your class, so say it aloud and ask a partner.

## Cue cards: say it, don't read it

```step
stage: modify
insight: "Cutting a script to cue cards with the limits from the cue-card lesson turns the written script into something a speaker can say."
try: { playground: board, starter: "text.yml#cards", height: 640 }
hint: ["Which words would bring each part back?", "Which number or name must be right?"]
check: { type: board, text: "Pick key words so that every section has a card, no card holds more than 8 words, and the key words are no more than a quarter of the script.", when: "n_cards = n_sections and n_over = 0 and key_pct <= 25", explain: "Your cards are short and cover every part. Press Print cue cards, cut them out and keep them for the rehearsal." }
```

The board has a script to practise on. To use your own, press **Use my own script**, paste it with one paragraph for each part, then press **Done writing**. **Print cue cards** makes the cards.

## Rehearse: with a partner, in class

```step
stage: practise
insight: "The rehearsal happens in class. The step is the student's record that they rehearsed with a partner, used the checklist and changed one thing."
check: { type: reflect, text: "I rehearsed my talk with a partner in class, listened to their feedback on the checklist, changed one thing and said it again." }
```

Use the same checklist as in the rehearsal lesson. Your partner ticks what they heard and saw, and writes one thing to keep and one to change.

- I could hear every word, including the last sentence.
- The speaker looked up from the cards for most of the talk.
- The speaker slowed down or paused on the most important part.
- The speaker's tone matched the words.
- One thing to keep: …
- One thing to change: …

Choose a voice setting to use on purpose, such as slowing down for your most important line, and plan one visual that adds something your words cannot. Your teacher can tell you what is allowed in your class.

## Present and check: against your plan

```step
stage: info
insight: "Comparing what the student planned with what happened, after the talk is given in class, builds the habit of reflecting on the effect of voice choices."
check:
  type: reasoning
  q: "After you have given your talk in class, check it against your plan. Choose one voice choice you meant to make. Say what you meant it to do for your listeners, what it did, and what you would change next time."
  placeholder: "I meant to ... I wanted my listeners to ... What happened was ... Next time I would ..."
  models:
    - title: "A strong answer"
      text: "I meant to slow down and pause before my close, 'Please try a quiet corner for a week.' I wanted my listeners to catch the request. What happened was that I paused, but I also sped up again straight after and some of the class looked away. Next time I would stay slow for the whole last sentence."
    - title: "A different choice that also works"
      text: "I meant to look up from my cards for the whole of point two. I wanted my listeners to feel I was talking to them. What happened was that I looked up for the first half and then read the cards again when I forgot a number. Next time I would put the number on the card in large print."
  criteria: ["I named one choice I meant to make.", "I said what it did for my listeners.", "I said what I would change next time."]
  explain: "There is no one right answer. What matters is that you compare what you meant with what happened, and decide what to change."
```

## Wider: another talk

```step
stage: info
tier: wider
insight: "Planning a talk for a different purpose keeps the skill and shows how the plan changes with the purpose."
check: { type: reflect, text: "I planned a second talk for a different purpose, such as to inform or to entertain, and said what I changed in the plan." }
```
