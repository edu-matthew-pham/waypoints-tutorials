---
order: 2
unit: trail
title: Who can see this?
summary: "The same photo reaches different people depending on where it goes: a message to one friend, a group chat, a private account or a public post. Settings change the audience, but anyone who sees something can screenshot or forward it, so the real audience can be bigger than the one you chose. Before sharing, picture who could end up seeing it."
language: science
shape: 5e
hook: "Lena takes a photo of her art project. She could send it to her mum, to the class group chat, or post it for anyone. Who sees it each time, and who could see it later?"
---
Lena and everyone else here are made up. You do not need to say what apps you use.

## Engage: how far can it go?

```step
stage: predict
insight: "Committing to a guess: a private group feels closed, but anyone in it can pass things on."
check:
  type: predict
  q: "Lena posts a photo to a private group of 12 friends. What is the most people who could end up seeing it?"
  options: ["More than 12: anyone in the group can screenshot or forward it", "Exactly 12: the group is private", "Only Lena: it is her photo"]
  actual: "More than 12. The setting chose 12 people, and each of them can screenshot or forward it to others."
```

## Explore: pick the audience

```step
stage: run
insight: "Matching each way of sharing to its audience shows that the place you share decides who sees it first."
check:
  type: match
  q: "Match each way Lena shares the photo to who sees it first."
  pairs:
    - ["A message to her mum", "One person"]
    - ["The class group chat", "Everyone in the class group"]
    - ["A private account with approved followers", "People Lena has approved"]
    - ["A public post", "Anyone online, including strangers"]
```

Was your guess right? The place you share decides who sees it **first**. After that, anyone who saw it can pass it on. The real audience can grow.

## Explain: the audience you chose, and the one you might get

```step
stage: investigate
insight: "Naming two audiences, chosen and possible. The planted mistake is treating private as private for ever."
tasks:
  - check:
      type: bug
      code: "working.txt#theo"
      text: "Theo shares something he thinks is safe. Click the line where his thinking first goes wrong."
      answer: 2
      fault: logic
      misconception: private-means-private
      explain: "Line 2: Theo thinks a private group means nobody else will ever see it. Anyone in the group can screenshot or forward it."
  - check:
      type: question
      q: "Lena wants to share her art with her grandparents only. Which is the best choice?"
      options: ["Send it to them in a message", "Post it publicly and tell them to look", "Put it in the class group chat and ask them to join", "Make it her profile picture"]
      answer: 0
      feedback: [null, "Anyone could see it, not just her grandparents.", "Her whole class would see it too.", "A profile picture is seen by everyone who sees her account."]
      explain: "A direct message reaches the smallest audience. Choose the smallest audience that does the job."
```

Every post has two audiences:

- **The audience you chose:** the person, group or followers you sent it to.
- **The audience you might get:** anyone they show, screenshot or forward it to.

Choose the **smallest audience that does the job**, and picture the second audience before you share. Settings help with the first audience: a private account, approved followers, asking before you are tagged. Nothing controls the second audience except the people in the first one, so you can help others too, by not passing on what was not meant for you.

### Theo's mistake

### Grandparents only

## Elaborate: settings that change the audience

```step
stage: modify
tier: typical
insight: "Years 7 and 8: account settings decide the first audience, and they often start open."
try: { playground: board, starter: "boards.yml#settings", height: 560 }
hint: ["Read what each setting does before you change it.", "Meeting reminders are why Ava joined the app: keep those."]
check: { type: board, text: "Ava's settings in a made-up club app came open. Make her account as private as it can be while she still hears about meetings.", when: "s = 4 and f = 1", explain: "Profile members only, location off, ask before tags, ads off, reminders on. Settings often start open, so it is worth checking them." }
```

This is the same made-up club app as in How computers work › [Your digital footprint](../../../systems/cyber/footprint/), which goes further.

## Evaluate: a private think

```step
stage: info
check: { type: reflect, text: "I can say who would see something first, and who could end up seeing it." }
```

**A private think** (just for you): next time you share a photo, who is the smallest audience that does the job?
