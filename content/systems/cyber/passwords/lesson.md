---
order: 1
unit: accounts
node: AC9TDI8P13 n1
shape: 5e
title: When passwords fail
summary: "Passwords fail in three predictable ways: a site leaks its list, one password reused everywhere lets that leak open every account, and common or personal passwords are on the lists people try first. Long random passphrases, a different one for every site, fix it."
language: maths
voice: { name: af_heart, speed: 1.1 }
hook: "A game site Ava used once has just been hacked. Is her school email safe?"
app:
  command: node "$REPO_ROOT/tools/serve.mjs" "$REPO_ROOT/dist/_playground-board" 8493
  url: http://127.0.0.1:8493/index.html
  readySelector: ".cycard"
  layout: full
explainPicture: { ref: cyber.yml#explain-pic, caption: "Ava's four accounts and their passwords: two are guessable and two share a passphrase." }
explainClip:
  query: { code: "@cyber.yml#explain", fresh: 1, id: explain }
  caption: "One leak, every account"
  say: "Ava uses one password everywhere."
  clip:
    - click: "Leak the Game site's passwords"
    - caption: { text: "The game site leaks, and the same password opens all four accounts.", say: "One leak opens every account." }
    - wait: 1500
    - click: "School email: kettle-moon-river-pencil"
    - click: "Club app: violin-cactus-harbour-tea"
    - click: "Online shop: orbit-velvet-lantern-fig"
    - click: "Leak the Game site's passwords"
    - expect: { selector: "#gsum", contains: "1 of 4" }
    - caption: { text: "A different long passphrase for each: the leak only reaches the game site.", say: "A different passphrase for each account stops the spread." }
    - wait: 1600
---
**Your mission:** you are the Coding Club's new security officer. Your first job: help Ava, a member, keep her accounts safe.

## Engage: one leak

```step
stage: predict
insight: "Students say what they already think before anything is named. Most expect a leak to stay at the site that leaked; writing it down makes the surprise in Explore theirs, and gives the teacher their ideas to work with."
check:
  type: predict
  q: "A game site Ava used once has just leaked its list of passwords. She also has a school email, the club app and an online shop. What could someone do with that list? Write your best guess."
  actual: "Here, every one of Ava's accounts fell. What happened depends on her passwords, which is what Explore is for."
```

There's no right answer yet: write what you think.

## Explore: what falls?

```step
stage: run
insight: "Nothing is named on the board: no guessing notes, no reason on the results. Students leak, change passwords and leak again, and notice for themselves which accounts fall together."
try: { playground: board, starter: "cyber.yml#explore", height: 600 }
tasks:
  - check: { type: board, text: "Press Leak! Which of Ava's accounts fall?", when: "l = 1 and f = 4", explain: "All four, not just the game site." }
  - check: { type: board, text: "Now try your own changes. Change one or more passwords, then leak again. Do it at least three times. What makes fewer accounts fall?", when: "t >= 4", explain: "Keep what you noticed: you'll use it in a minute." }
```

Was your guess close?

### Leak

### Try your own changes

## Explore: stop it at the game site

```step
stage: run
insight: "A goal with more than one cause: some accounts fall because they share the leaked password, one falls with a password nobody shares. Hints ask questions and never name the fix."
try: { playground: board, starter: "cyber.yml#goal", height: 600 }
tasks:
  - hint: ["Leak first. Which accounts fell, and what do their passwords have in common with the game site's?", "One account fell with a password no other account uses. Could someone get into it without any leak at all?", "Every account that still falls has a password that's the same as another account's, or one lots of people pick or could work out from Ava's profile."]
    check: { type: board, text: "Ava has a new set of passwords. Change them so the next leak breaks into nothing but the game site itself.", when: "l = 1 and f = 1", explain: "Only the game site fell: its own list leaked, and that password opens nothing else." }
  - hint: ["The game site always falls, because its own list leaked. Could someone have got into it before the leak?"]
    check: { type: board, text: "Could someone get into any of Ava's accounts without a leak at all? Make sure they can't, then leak once more.", when: "l = 1 and f = 1 and c = 0", explain: "Four different passwords, none of them a common one or one built from Ava's name." }
```

### One account only

### No leak needed

## Explain: what you found has names

```step
stage: investigate
insight: "Students explain in their own words first; then the names (breach, reuse, guessable, passphrase) are matched to what they did; then Sam's symbol swap."
tasks:
  - check:
      type: reasoning
      q: "In your own words: why did one leak break into all four accounts at the start, and what did you change to stop it? Say what the person with the list did with it."
      placeholder: "For example: the list had Ava's password on it, so ..."
      steps:
        - ["The game site's list leaked, with Ava's password on it.", "the site kept it and lost it"]
        - ["Whoever had the list tried that password on her other accounts.", "people often use one password everywhere, so it's the first thing to try"]
        - ["Every account with the same password fell.", "the password matched"]
        - ["Accounts with a popular or personal password fell even with no match.", "those are on the lists people try first, leak or not"]
        - ["A different long, random password on each account stopped it.", "the leaked one opens nothing else, and the rest aren't on any list"]
      picks:
        - step: 4
          q: "In the second set, why did the school email fall when its password matched no other account?"
          options: ["sunshine1 is one of the first passwords anyone tries", "The club app was leaked too", "Every account falls in a leak", "It was too long"]
          answer: 0
          feedback: [null, "Only the game site's list leaked.", "Once you fixed the set, three accounts were safe.", "Long passwords were the ones that held."]
      criteria: ["I said what the person with the list did with it.", "I gave both reasons an account fell.", "I said what change stopped each one."]
      explain: "One leaked password is tried everywhere, so a shared password falls with it; a common or personal one falls with no leak at all."
  - check:
      type: match
      q: "Match each name to what you saw on the board."
      pairs:
        - ["Breach", "The game site losing its list of passwords"]
        - ["Reuse", "The same password on more than one account, so one leak opens them all"]
        - ["Guessable", "A password on the lists people try first: sunshine1, or Ava's name and birth year"]
        - ["Passphrase", "Four random words: long, and on nobody's list"]
      explain: "A breach you can't stop. Reuse and guessable passwords are what turn it into more than one account."
  - check:
      type: bug
      code: "working.txt#sam"
      text: "Sam makes a stronger password. Click the line where it first goes wrong."
      answer: 3
      fault: logic
      misconception: symbols-make-strong
      explain: "Line 3: swaps like @ for a and 0 for o are so common that they're on the guessing lists too. Length and randomness make a password strong, and it still shouldn't be reused."
```

```worked
\text{1. a site leaks} :: A **breach**. You can't stop other sites being breached; you can limit the damage.
\text{2. reuse spreads it} :: The leaked password is tried on every other site. One password everywhere means one leak opens everything.
\text{3. guessable falls first} :: Common passwords, symbol swaps and personal details (names, birthdays, pets) are on the lists tried first.
\text{fix: long, random, different} :: Four random words for each site.
```

### In your own words

### Names

### Find the mistake

## Elaborate: too many to remember

```step
stage: modify
insight: "The same idea in a new case (two reasons failing at once, this time with the board's notes on), then the habit that makes it realistic: a password manager."
try: { playground: board, starter: "cyber.yml#elaborate", height: 600 }
tasks:
  - check: { type: board, text: "Ava changed her passwords again, but a leak still opens all four. Fix them by hand so a leak only reaches the game site.", when: "l = 1 and f = 1 and m = 0", explain: "Two were guessable (sunshine1, her name and year) and two shared a passphrase: every one needed its own long passphrase." }
  - hint: ["Nobody can remember four random passphrases, let alone forty.", "Switch the password manager on, then leak again."]
    check: { type: board, text: "Ava says she can't remember four passphrases. Switch on the password manager and test it with a leak.", when: "m = 1 and l = 1 and f = 1", explain: "The manager makes and remembers a different strong passphrase for each site; Ava remembers one (the manager's own), and a leak stays at one site." }
```

### Fix the set

### Let a manager do it

## Evaluate: look back

```step
stage: info
tasks:
  - check:
      type: question
      q: "A site you use emails you: it has been breached. What should you do first?"
      options: ["Change that password, and any other account where you used the same one", "Nothing: it's the site's problem", "Delete your email account", "Change only the breached site's password"]
      answer: 0
      feedback: [null, "Your reused password is now on a list.", "That doesn't stop anyone using the leaked password.", "Any account using the same password is open too."]
      explain: "Then turn on a second factor where you can: next lesson."
  - check: { type: reflect, text: "Reread your guess from Engage. What would you add or change now?" }
  - check: { type: reflect, text: "I can explain how one leak can open many accounts, and why a different long passphrase for each site stops it." }
```

### After a breach

### Your first guess

### Look back
