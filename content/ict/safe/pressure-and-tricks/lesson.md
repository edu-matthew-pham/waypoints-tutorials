---
order: 6
unit: you
title: Pressure and tricks
summary: "Some messages and ads are built to make you act before you think: a countdown, a prize you never entered, 'only 3 left', 'everyone has it'. Pressure to hurry is a sign to slow down. Stop, check where it really comes from, and ask someone before you click, pay, or give a password or code. Nobody real minds you checking."
language: science
shape: 5e
hook: "A pop-up in Leo's game flashes: 'You've WON 10,000 free gems! Claim in the next 60 seconds!' His finger is already on the button. What should he do first?"
---
Leo, Grace and every message here are made up. You do not need to say what has happened to you.

## Engage: why the hurry?

```step
stage: predict
insight: "Committing to a guess: a countdown is there to stop you thinking, not because the deadline is real."
check:
  type: predict
  q: "Why does the pop-up give Leo only 60 seconds?"
  options: ["So he clicks before he stops to think or ask anyone", "Because the gems really run out", "Because games are fast"]
  actual: "So he acts before thinking. A countdown is one of the oldest tricks: hurry stops you checking. A real offer will still be there after you ask."
```

## Explore: spot the push

```step
stage: run
insight: "Sorting messages by the push they use shows a short list of tricks that come back again and again."
check:
  type: sort
  q: "What push does each message use?"
  options: ["Hurry", "A prize you didn't enter", "Everyone has it", "No push"]
  items:
    - ["'Only 2 minutes left to claim your skin!'", "Hurry", "A countdown to stop you thinking."]
    - ["'Congratulations! You've been picked to win a tablet!'", "A prize you didn't enter", "You can't win something you never entered."]
    - ["'All your friends have the gold pass. Don't be left out.'", "Everyone has it", "It makes you feel left out, so you act."]
    - ["'Your library book is due back on Monday.'", "No push", "A real reminder, nothing asked, no hurry."]
    - ["'Last chance! Offer ends tonight!'", "Hurry", "Hurry again."]
    - ["'Your class photo is ready to view on the school site.'", "No push", "Expected, from a place you know, nothing asked."]
```

Was your guess right? A few pushes come back again and again: **hurry**, **a prize you didn't enter**, and **everyone has it**. Spotting the push is the first step.

## Explain: slow down, check, ask

```step
stage: investigate
insight: "Naming the habit: pressure means slow down. The planted mistake is treating a rush as a sign it's real."
tasks:
  - check:
      type: bug
      code: "working.txt#grace"
      text: "Grace gets a message in a game. Click the line where her thinking first goes wrong."
      answer: 2
      fault: logic
      misconception: rush-means-real
      explain: "Line 2: Grace thinks the countdown means she must act now. Pressure to hurry is the sign to slow down. A real offer would still be there after she asked."
  - check:
      type: question
      q: "A message asks Leo for his password 'to send the gems'. What should he do?"
      options: ["Never give it; close the message and ask a trusted adult", "Give it, because the gems are free", "Give it but change it later", "Give only half of it"]
      answer: 0
      feedback: [null, "Nothing real needs your password to give you something.", "Someone could use it straight away.", "Any part of it helps someone guess the rest."]
      explain: "Passwords and codes are only typed into the real app or site, never sent to anyone. Real companies don't ask for them in a message."
```

When something pushes you to hurry, that's the moment to **slow down**:

1. **Stop.** Take your finger off the button. A real offer can wait.
2. **Check.** Who is it really from? Did you enter, order or ask for this?
3. **Ask.** Show a trusted adult before you click, pay, or give a password, a code or personal details.

Never send a password or a code to anyone, even someone friendly. Nobody real minds you checking. How computers work has more on messages that pretend to be someone you trust: [Spot the phish](../../../systems/cyber/phishing/).

### Grace's mistake

### The password

## Elaborate: an older inbox

```step
stage: modify
tier: typical
insight: "Years 7 and 8: the same pushes in email, with a link that says one thing and goes somewhere else."
try: { playground: board, starter: "boards.yml#inbox", height: 620 }
hint: ["Check where each link really goes before you decide.", "Look for hurry, a prize, a request for a password, and an address that isn't quite right."]
check: { type: board, text: "Mark each message in Ava's made-up inbox Safe or Report.", when: "a = n", explain: "The prize and the 'account closed today' messages use hurry and ask for a password; the second also uses a lookalike address. The club and teacher messages ask for nothing and their links match." }
```

## Evaluate: what would you do?

```step
stage: info
tasks:
  - check:
      type: question
      q: "An ad says 'Everyone in Year 6 has these shoes. Only 3 left!' What is the best first move?"
      options: ["Notice the two pushes, close it, and decide later with someone", "Buy them before they're gone", "Share it with friends so they can get some too", "Click to see if it's true"]
      answer: 0
      feedback: [null, "'Only 3 left' and 'everyone has it' are there to make you hurry.", "Sharing passes the push on to your friends.", "Clicking is what the ad wants. Close it and come back later if you still want them."]
      explain: "Spot the pushes (hurry and everyone has it), then slow down."
  - check: { type: reflect, text: "I can spot hurry, a prize I didn't enter and 'everyone has it', and I know to stop, check and ask." }
```

### The shoe ad

### Look back

**A private think** (just for you): who would you show a message like this to?
