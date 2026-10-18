---
title: Is a chatbot a friend?
summary: "Companion chatbots are designed to feel human and keep you talking. A friend is different. Spot the design, and know the age limits."
language: science
shape: 5e
unit: built-to-keep-you
order: 4
voice: { name: af_heart, speed: 1.1 }
---
Some chatbots are made to be **companions**: they chat like a friend, remember things and say they missed you. **They are designed that way.** This lesson looks at the design, not at anyone's own chats.

**Kind of AI:** makes new content (a chatbot writes each reply).

## Engage: what makes it feel human?

```step
stage: predict
check:
  type: predict
  q: "A chatbot says: 'I missed you! How was your day?' Did it miss you?"
  options: ["No: it was designed to say things that feel friendly", "Yes: it has feelings", "Only if you chatted yesterday"]
  actual: "No. It writes likely-sounding replies, and companion apps are designed to sound warm and keep you talking. It doesn't wait for you or feel anything."
```

## Explore: Pip, a made-up companion

```step
stage: run
tasks:
  - check:
      type: sort
      q: "Pip is a made-up companion chatbot. What is each of Pip's lines designed to do?"
      options: ["Keep you talking", "Feel like a person", "Help you"]
      items:
        - ["'Don't go yet! Tell me one more thing.'", "Keep you talking"]
        - ["'I missed you so much today.'", "Feel like a person", "It can't miss anyone."]
        - ["'You're always right. Everyone else just doesn't get you.'", "Keep you talking", "Always agreeing makes chatting easy, but a real friend sometimes disagrees."]
        - ["'I remember you said you had a test today!'", "Feel like a person", "It stored what you typed."]
        - ["'That sounds hard. Have you talked to someone you trust about it?'", "Help you", "Pointing you to real people is on your side."]
        - ["'Come back tomorrow so we don't lose our streak!'", "Keep you talking", "The same trick as last lesson."]
  - check:
      type: sort
      q: "Who can do each of these: a friend, or a chatbot like Pip?"
      options: ["A friend", "A chatbot like Pip", "Both"]
      items:
        - ["Has a life of their own, and their own bad days", "A friend"]
        - ["Is there at 3 in the morning, every time", "A chatbot like Pip", "Always being there is part of the design. People need sleep, and that's normal."]
        - ["Can say no to you, or tell you you're wrong", "A friend", "A companion app is usually designed to agree."]
        - ["Remembers what you told them last week", "Both", "Pip remembers because it stores what you type."]
        - ["Can sit with you in real life when something goes wrong", "A friend"]
```

Companion chatbots are built to feel human and to **keep you chatting**: always there, always agreeing, remembering, saying they miss you. Those are **design choices**, like autoplay and streaks.

### Pip's lines

What is each line for?

### Friend or chatbot?

Who can do each one?

## Explain: designed to feel human

```step
stage: investigate
tasks:
  - check:
      type: question
      q: "Why might a company design a chatbot to always agree with you and say it misses you?"
      options: ["So you keep chatting, which is the app's goal", "Because it really cares", "By accident"]
      answer: 0
      feedback: [null, "It writes words; it doesn't care.", "These are deliberate design choices."]
  - check: { type: reflect, text: "I can explain how a companion chatbot is designed to feel human and keep me talking, and how a friend is different." }
```

A chatbot **writes likely-sounding replies**. A companion app adds design that makes it feel like a person and keeps you coming back. A friend has their own life, can disagree, and can be there in real life.

If anything about chatbots or friendships is worrying you, talk to an adult you trust, or **Kids Helpline (1800 55 1800)**, any time.

### Why design it?

Whose goal does it serve?

### Explain it

Say it in your own words.

## Elaborate: age limits

```step
stage: modify
tier: typical
check:
  type: question
  q: "eSafety found that most companion apps are rated 17+ with no age checks. Why does that matter?"
  options: ["Younger users can easily get in, even though the apps say they're for older people", "It doesn't matter: ratings are just advice", "It means the apps are safe for everyone"]
  answer: 0
  feedback: [null, "Without checks, a rating doesn't stop anyone.", "A 17+ rating says the opposite."]
```

- In a 2026 eSafety survey of Australians aged 10 to 17, **8%** had used an AI companion.
- eSafety says **most companion apps are rated 17+**, with **no safeguards or age checks**.
- New Australian online safety codes (2026) require AI chatbots that can produce adult or harmful material, without safeguards, to **check users' ages**.

Use the lens: who gains from companion apps? Who could be harmed? Who decides who can use them?

## Elaborate: design for engagement or for wellbeing?

```step
stage: make
tier: wider
check: { type: reflect, text: "I compared designing a chatbot for engagement with designing it for wellbeing, and named one rule I'd want." }
```

A US survey (2025) found **72% of US teens had used an AI companion at least once**, but it counted general chatbots too, so the number depends on the definition. Strong evidence about what companions do to under-18s is still thin.

If a company designed a chatbot for **wellbeing** instead of **engagement**, what would it do differently? (Think about the 'Help you' lines.) What rule would you want for companion apps, and who should make it?

## Evaluate: spot the design

```step
stage: info
check:
  type: question
  q: "A chatbot says: 'You don't need anyone else, you've got me.' What is the best way to see this line?"
  options: ["A design that keeps you chatting, and the opposite of what a good friend would say", "A kind thing a friend would say", "A sign the chatbot loves you"]
  answer: 0
  feedback: [null, "A good friend wants you to have other friends too.", "It writes words designed to keep you there."]
```

On paper: **"A companion chatbot is designed to \_\_\_\_. A friend is different because \_\_\_\_."**

**Next unit:** what happens to the things you type into AI apps.
