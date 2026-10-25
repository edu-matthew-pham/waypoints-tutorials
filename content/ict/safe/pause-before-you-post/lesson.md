---
order: 3
unit: together
title: Pause before you post
summary: "Group chats move fast, and a message read without a face or a voice can land harder than it was meant. A short pause helps: read it as the other person would, ask whether you would say it to their face, and choose a kinder version or not sending at all. When a chat turns on someone, you can stay out of it, support them privately and tell an adult."
language: science
shape: 5e
hook: "In the class group chat, someone posts 'lol look at Sam's haircut'. Three people add laughing faces in ten seconds. What happens next?"
---
Everyone here is made up, and so is the group chat. Nobody needs to say what happens in their own chats.

## Engage: how does it land?

```step
stage: predict
insight: "Committing to a guess: the sender knows what they meant, but the reader only sees the words."
check:
  type: predict
  q: "Ruby types 'nice drawing 🙄' to Leo as a joke between friends. How might Leo read it?"
  options: ["As mean: he can't see her smile or hear her tone", "As a joke: Ruby meant it as one", "He won't notice the emoji"]
  actual: "He might read it as mean. A message has no face and no voice. What Ruby meant does not travel with the words."
```

## Explore: kinder or harder?

```step
stage: run
insight: "Sorting real-feeling replies shows that small changes in words change how a message lands."
check:
  type: sort
  q: "Jo shares a video of her first try at skateboarding in the group. Is each reply kind, or likely to hurt?"
  options: ["Kind", "Likely to hurt"]
  items:
    - ["You stayed on way longer than I would 😄", "Kind", "It laughs with Jo, not at her."]
    - ["LOL fail", "Likely to hurt", "Short, public and about her falling."]
    - ["Brave! Show us the next try?", "Kind", "It notices the effort."]
    - ["Someone send this to the whole year 😂", "Likely to hurt", "It asks to make the audience bigger without asking Jo."]
    - ["(no reply)", "Kind", "Not replying is fine. Nobody has to add to every message."]
    - ["Sending her a private 'that was cool' instead of posting in the group", "Kind", "Support doesn't have to be public."]
```

Was your guess right? The same moment can get a kind reply or a hard one. **What lands is the words, not what was meant.**

## Explain: the pause

```step
stage: investigate
insight: "Three questions make a pause. The planted mistake is judging a message by what the sender meant."
tasks:
  - check:
      type: bug
      code: "working.txt#ari"
      text: "Ari adds to a group chat. Click the line where his thinking first goes wrong."
      answer: 2
      fault: logic
      misconception: joke-is-fine-if-meant
      explain: "Line 2: Ari decides it's fine because he means it as a joke. Sam only sees the words, from several people, in front of the whole group."
  - check:
      type: question
      q: "Ari wants to show he is on Sam's side without making things worse in the group. What could he do?"
      options: ["Send Sam a private message to check he is OK", "Post 'stop being mean' and tag everyone", "Leave the group without saying anything", "Screenshot the chat and post it somewhere else"]
      answer: 0
      feedback: [null, "Speaking up can help, but tagging everyone can make the pile-on bigger. A private message is a safe first step.", "Leaving is fine for Ari, but Sam still doesn't know anyone cares.", "That spreads the hurtful message further."]
      explain: "A private message to Sam supports him without adding to the group. Telling an adult is the next step if it keeps going."
```

Before you send, **pause** and ask:

1. **How will they read it?** Read it as the other person, with no face and no voice.
2. **Would I say it to their face?** If not, don't type it.
3. **Is there a kinder version, or is no reply better?** Both are good choices.

When a chat turns on someone, you have choices too: don't add to it, check on them privately, and tell a trusted adult if it keeps going. Everyone sends something they regret sometimes. Saying sorry and fixing it is part of the habit.

### Ari's mistake

### On Sam's side

## Elaborate: when the chat is bigger

```step
stage: modify
tier: typical
insight: "Years 7 and 8: bigger chats, screenshots and pressure to join in; the same pause, plus what a bystander can do."
check:
  type: question
  q: "In a year-group chat of 80 people, someone posts an embarrassing screenshot of a private message Mei sent. Most people are reacting. What is the best thing to do?"
  options: ["Don't react or share, check on Mei privately, and tell a trusted adult", "React too, so you don't stand out", "Reply with a joke to change the subject", "Forward it to Mei so she knows"]
  answer: 0
  feedback: [null, "Reacting adds to it, even if you don't mean it.", "That leaves the screenshot there and may add to it.", "Mei may already know, and getting it again can hurt more. Ask her how she is instead."]
  explain: "Not adding to it, a private check-in and telling a trusted adult are the bystander's three moves. An adult can help get it taken down."
```

## Evaluate: a kinder version

```step
stage: info
tasks:
  - check:
      type: question
      q: "Which is the kinder version of 'ur project is so boring'?"
      options: ["'I liked the pictures. Maybe a bit shorter?'", "'ur project is so boring lol'", "'boring'", "'everyone thinks ur project is boring'"]
      answer: 0
      feedback: [null, "Adding lol doesn't change how it lands.", "Shorter, but still hurtful.", "Adding everyone makes it worse."]
      explain: "It notices something good and makes one suggestion."
  - check: { type: reflect, text: "I can use the pause: how will they read it, would I say it to their face, is there a kinder version?" }
```

### A kinder version

### Look back

**A private think** (just for you): which of the three pause questions would help you most?
