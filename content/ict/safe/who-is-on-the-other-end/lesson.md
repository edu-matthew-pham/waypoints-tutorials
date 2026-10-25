---
order: 4
unit: together
title: Who is on the other end?
summary: "Online, you only see what someone chooses to show: a picture, a name, an age. Most people are who they say, but a profile can be made by anyone. Keep personal details for people you know in real life, notice when a new contact asks for secrets, photos, a move to a private app or a meeting, and check with a trusted adult before going further."
language: science
shape: 5e
hook: "In an online game, a player called StarPainter12 says she's 12, loves the same drawing app as Amira, and is really nice. What does Amira actually know about her?"
---
Amira, StarPainter12 and the game are made up. You do not need to say who you talk to online.

## Engage: what do you really know?

```step
stage: predict
insight: "Committing to a guess: a profile shows what someone chooses to show, not who they are."
check:
  type: predict
  q: "StarPainter12's profile says she is 12 and lives near Amira. How sure can Amira be that this is true?"
  options: ["Not sure: anyone can type any name, age or picture", "Very sure: it is on her profile", "Sure, because she's friendly"]
  actual: "Not sure. A profile is what someone typed in. It might be true, and it might not. Friendliness doesn't tell you either."
```

## Explore: fine, or check first?

```step
stage: run
insight: "Sorting messages from a new online contact shows the few requests that mean 'check with an adult first'."
check:
  type: sort
  q: "A new online contact says each of these. Is it fine, or a reason to check with a trusted adult first?"
  options: ["Fine", "Check with a trusted adult first"]
  items:
    - ["'Good game! Want to play again tomorrow?'", "Fine", "Friendly, about the game, nothing asked for."]
    - ["'What school do you go to?'", "Check with a trusted adult first", "That says where you are most days."]
    - ["'Let's keep this just between us, don't tell your parents.'", "Check with a trusted adult first", "Someone safe doesn't ask you to keep secrets from the adults who care for you."]
    - ["'Your drawing is cool, how did you do the shading?'", "Fine", "A question about the game or a shared interest."]
    - ["'Can you send me a photo of yourself?'", "Check with a trusted adult first", "Photos of you are for people you know in real life."]
    - ["'Let's chat on a different app where it's more private.'", "Check with a trusted adult first", "Moving somewhere more private, away from where others can see, is a reason to pause."]
    - ["'Want to meet up at the shops on Saturday?'", "Check with a trusted adult first", "Meeting someone you only know online is something a trusted adult decides with you."]
```

Was your guess right? Most messages are fine. A few requests are a **reason to check first**: personal details, secrets, photos, moving to a more private app, and meeting up.

## Explain: friendly is not the same as known

```step
stage: investigate
insight: "Naming the requests that mean 'check first'. The planted mistake is treating friendly as trusted."
tasks:
  - check:
      type: bug
      code: "working.txt#amira"
      text: "Amira chats with StarPainter12. Click the line where her thinking first goes wrong."
      answer: 3
      fault: logic
      misconception: friendly-means-trusted
      explain: "Line 3: Amira decides that being nice and liking the same things means StarPainter12 is who she says. A friendly profile can be made by anyone. That is the moment to check with a trusted adult before sharing more."
  - check:
      type: question
      q: "Who is a trusted adult?"
      options: ["An adult you know in real life who looks out for you, such as a parent, carer, teacher or school counsellor", "Any adult online who is kind to you", "Whoever has the most followers", "An older player in your game"]
      answer: 0
      feedback: [null, "Someone you only know online is the person you might be checking about.", "Followers don't make someone trustworthy.", "You may not know who they are in real life."]
      explain: "Someone you know in real life, whose job or role is to look out for you. Most people have more than one."
```

You only see what someone chooses to show. Most people online are who they say. But because anyone can make a profile, **friendly is not the same as known**.

Keep for people you know in real life: your full name, school, address, phone number and photos of you. If a new contact asks for any of these, asks you to keep a secret, wants to move to a more private app, or wants to meet, **stop and check with a trusted adult**. You are not in trouble for asking, and it is not rude to say "I need to ask first".

### Amira's mistake

### Trusted adults

## Elaborate: older games and chats

```step
stage: modify
tier: typical
insight: "Years 7 and 8: gifts and flattery are ways to build trust quickly; the same check applies."
check:
  type: sort
  q: "A contact in an online game says each of these to Kai, who is in Year 8. Fine, or check first?"
  options: ["Fine", "Check with a trusted adult first"]
  items:
    - ["'I'll give you 500 game coins if you add me on another app.'", "Check with a trusted adult first", "A gift to move somewhere more private."]
    - ["'You're so mature for your age, not like the others.'", "Check with a trusted adult first", "Flattery that sets you apart from friends and family is a way to build trust fast."]
    - ["'GG, that was a close match.'", "Fine", "About the game."]
    - ["'Don't tell anyone about our chats, they wouldn't understand.'", "Check with a trusted adult first", "A secret again, in different words."]
```

## Evaluate: what would you say?

```step
stage: info
tasks:
  - check:
      type: question
      q: "StarPainter12 asks Amira for her school. What could Amira say?"
      options: ["'I don't share that online. Want to play another round?'", "Tell her, because she shared hers", "Say nothing and block her straight away, without telling anyone", "Make up a school"]
      answer: 0
      feedback: [null, "Sharing back isn't a rule. Personal details stay for people you know in real life.", "Blocking can be right, and telling a trusted adult too means someone can help if it happens again.", "A made-up answer keeps the chat going in a direction that needs a trusted adult."]
      explain: "A friendly no and a change of subject is a good first move. If they keep asking, tell a trusted adult."
  - check: { type: reflect, text: "I can name the requests that mean I should check with a trusted adult first." }
```

### A friendly no

### Look back

**A private think** (just for you): who are two trusted adults you could ask?
