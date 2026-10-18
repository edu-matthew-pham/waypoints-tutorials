---
title: Read the screen
summary: "Most people agree to apps' terms without reading. Find the real choice on a consent screen: the line that matters, the setting behind the small link, and what 'Agree' really covers."
language: science
shape: 5e
unit: give-away
order: 6
voice: { name: af_heart, speed: 1.1 }
---
Before you use a new AI app, it usually shows a screen with a big **Agree** button. **What are you agreeing to, and where is the real choice?**

**Kind of AI:** makes new content (a chatbot), and the data it learns from.

## Engage: do people read it?

```step
stage: predict
check:
  type: predict
  q: "Out of every 10 Australians, how many say they always or often read privacy policies?"
  options: ["About 2", "About 5", "About 8"]
  actual: "About 2. In a 2023 survey, only 21% of Australians said they always or often read privacy policies."
```

## Explore: Club Helper's screen

```step
stage: run
try: { playground: board, starter: "boards.yml#explore", height: 640 }
tasks:
  - check: { type: board, text: "Read the screen and click the line that matters most for what happens to Ava's chats.", when: "g = 1" }
    hint: ["Which line is about what the company does with the chats, not about features?", "Look for the line that starts 'By selecting Agree'."]
  - check: { type: board, text: "Make a real choice: open Manage choices, turn off training, and continue.", when: "o = 1 and t = 0 and c = 1" }
    hint: "The small link under the big button opens the choices. If you already pressed Agree, use Start again."
```

Club Helper's screen is made up, but built like many real ones: a big, bright **Agree** button, a small grey **Manage choices** link, and the important line in the middle of friendly text.

### The line that matters

Which line is it?

### A real choice

Find the setting behind the small link.

## Explain: where the choice hides

```step
stage: investigate
tasks:
  - check:
      type: question
      q: "Why is 'Agree and continue' big and bright, and 'Manage choices' small and grey?"
      options: ["The design makes agreeing the easy choice", "Big buttons are always better", "Manage choices is less important"]
      answer: 0
      feedback: [null, "Big buttons aren't wrong; here the size steers you.", "Manage choices is where the real choice is."]
  - check:
      type: question
      q: "In a study, 74% of students skipped a made-up social network's privacy policy and clicked 'quick join'. What does that tell an app designer?"
      options: ["Most people will agree to whatever the screen asks, so the default choices matter a lot", "People don't care about privacy", "Privacy policies are perfect"]
      answer: 0
      feedback: [null, "Not caring and not reading are different: a quick button makes skipping easy.", "If most people skip them, they aren't doing their job."]
  - check: { type: reflect, text: "I can find the line that matters on a consent screen and the setting behind the small link." }
```

A consent screen has three things to find:

1. **The line that matters:** what happens to your data ("use your chats to train...").
2. **The real choice:** often behind a small link like "Manage choices" or "Settings".
3. **What Agree covers:** pressing it usually switches everything **on**.

Because most people don't read, **what starts switched on** decides what happens to most people's data.

### Size

Why is one button bigger?

### Skipping

What does skipping tell a designer?

### Explain it

Name the three things to find.

## Elaborate: is a screen enough?

```step
stage: modify
tier: typical
check: { type: reflect, text: "I rewrote the consent screen so a Year 7 student would understand it in 30 seconds, with a fair choice." }
```

Rewrite Club Helper's screen so it is **fair**:

- one sentence saying what happens to chats;
- the training choice **on the first screen**, not hidden;
- two buttons the **same size**.

Who gains from your version? What might the company lose?

## Elaborate: the law

```step
stage: make
tier: wider
check: { type: reflect, text: "I checked a consent screen against the Australian Privacy Principles and explained what a screen can't do by itself." }
```

- A 2020 study of cookie banners (the "accept cookies" pop-ups) on 10,000 popular UK websites found **only 11.8% met the minimal requirements** of European law.
- In Australia, the **Australian Privacy Principles** say organisations must collect only what they need and tell people what and why. A privacy policy doesn't override them. (See [Cyber safety › The Australian Privacy Principles](../../../systems/cyber/privacy/).)

Check Club Helper's screen against the APPs. Which principle does a hidden training switch come closest to breaking? Why isn't a screen people don't read enough to protect them?

## Evaluate: before you agree

```step
stage: info
check:
  type: question
  q: "A new AI study app shows a screen with one big 'Get started' button. What should you do first?"
  options: ["Look for the line about your data and a link to the choices, before pressing", "Press it: everyone does", "Close the app forever"]
  answer: 0
  feedback: [null, "Most people do, which is why defaults matter. Look first.", "You might not need to; just find the choice."]
```

On paper: **"Before I press Agree, I look for \_\_\_\_, \_\_\_\_ and \_\_\_\_."**

**Next unit:** is it real?
