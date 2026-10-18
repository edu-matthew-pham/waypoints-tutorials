---
title: Where does your chat go?
summary: "What you type into an AI app travels to a company, can be kept, can be read by people, and can become training data. Follow one question, and find the settings that change it."
language: science
shape: 5e
unit: give-away
order: 5
voice: { name: af_heart, speed: 1.1 }
---
When you type into an AI app, your words don't stay on your screen. **Where do they go, who can see them, and could the AI learn from them?** You'll follow one question from the Coding Club's made-up app (the same club as in [Cyber safety and privacy](../../../systems/cyber/footprint/)).

**Kind of AI:** makes new content (a chatbot).

## Engage: where does it go?

```step
stage: predict
check:
  type: predict
  q: "Ava types a question into an AI helper. After she closes the app, where is her question?"
  options: ["Probably kept on the company's computers, unless she changes a setting", "Gone: it disappears when she closes the app", "Only on her phone"]
  actual: "Usually kept by the company, at least for a while. Depending on the settings, people may read it, and it may be used to train the next version of the AI."
```

## Explore: follow Ava's question

```step
stage: run
try: { playground: board, starter: "boards.yml#explore", height: 640 }
tasks:
  - check: { type: board, text: "Open all five stages to follow Ava's question.", when: "s = 5" }
    hint: "Click each stage on the left, from 1 to 5."
  - check: { type: board, text: "Change Ava's settings so this chat won't be used to train the AI.", when: "t = 0" }
    hint: "Look at the settings on the right. Which switch is about improving the AI?"
```

Club Helper is made up, but it's built like many real AI apps: chats are **sent**, **stored**, sometimes **reviewed** by people, and possibly used for **training**, with the switches **on** when you start.

### Follow it

Open every stage.

### Change it

Find the switch.

## Explain: before you type

```step
stage: investigate
tasks:
  - check:
      type: question
      q: "Ava typed her full name and her school into her question. What would have been safer?"
      options: ["Leave out details the question doesn't need", "Type them in capital letters", "Nothing: the chat is private"]
      answer: 0
      feedback: [null, "Capitals don't change who can see it.", "It may be stored, read by people or trained on."]
  - check:
      type: question
      q: "Why does 'used for training' matter more than 'stored'?"
      options: ["A stored chat can be deleted, but once an AI has learned from it, it can't easily be taken back out", "Training makes the chat public on the internet", "It doesn't matter more"]
      answer: 0
      feedback: [null, "Training doesn't publish the chat, but what's learned stays in the model.", "Deleting a chat is easy; un-learning it isn't."]
  - check: { type: reflect, text: "I can explain where a chat with an AI app can go, and what I can change before I type." }
```

Before you type into an AI app:

1. **Leave out** personal details the question doesn't need (full name, school, address, other people's information).
2. **Check the settings:** is "use my chats to improve the AI" on? Is history kept?
3. **Remember:** a stored chat can be deleted; something an AI has learned can't easily be taken back.

This is the same idea as your **digital footprint**: collect, and share, only what's needed.

### Ava's details

What did she not need to type?

### Training

Why is it different?

### Explain it

Name the three checks.

## Elaborate: can they change the rules quietly?

```step
stage: modify
tier: typical
check:
  type: question
  q: "A company wants to start training its AI on chats people already typed. It quietly updates its privacy policy. Is that enough, according to Australia's privacy regulator?"
  options: ["Generally not: a quiet policy update or notice isn't enough by itself", "Yes: updating the policy is enough", "Companies can't train AI at all"]
  answer: 0
  feedback: [null, "The regulator said a policy update by itself will generally not be enough.", "They can, if they follow the privacy rules."]
```

The **Office of the Australian Information Commissioner** (OAIC), which looks after privacy law, says that **updating a privacy policy or giving notice by itself will generally not be enough** for a company to start training AI on information it already holds.

Use the lens: who gains from training on chats? Who could be harmed? Who decides whether the switch starts on or off?

## Elaborate: a code for children

```step
stage: make
tier: wider
check: { type: reflect, text: "I compared Club Helper's settings with the draft Children's Online Privacy Code and suggested changes." }
```

Australia is writing a **Children's Online Privacy Code**. It must be registered by **10 December 2026**. The draft says services likely to be used by children should collect only what is **strictly necessary** and give **age-appropriate** notices.

Look at Club Helper again. Which of its settings would you change for users under 18? Should "use my chats to improve the AI" start **on** or **off**? Write the notice you'd show a Year 7 student, in two sentences. (Then look up whether the code has been registered.)

## Evaluate: your checklist

```step
stage: info
check:
  type: question
  q: "You want an AI app's help with a story about your friend's birthday party. What's the best first step?"
  options: ["Leave out your friend's real name and details, and check the training setting", "Type everything so the AI gets it right", "Ask the AI whether it's safe"]
  answer: 0
  feedback: [null, "The AI doesn't need real names to help with a story.", "Asking the AI isn't a check of its settings."]
```

On paper, write your **three-step checklist** for before you type into any AI app.

**Next lesson:** the screen most people agree to without reading.
