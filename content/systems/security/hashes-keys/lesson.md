---
order: 4
unit: layers
node: AC9TDI10K01 n4
introduces: [hashing]
title: Hashes and salt
summary: "Good sites never store your password. They store a hash: a one-way scramble that is always the same for the same password, so a login can be checked but the hash can't be turned back. A stolen list can still be cracked by hashing common guesses, unless each person's password gets its own salt."
language: maths
voice: { name: af_heart, speed: 1.1 }
hook: "Websites get hacked and their password lists stolen. If the site did its job, the attackers still don't get your password. How?"
app:
  command: node "$REPO_ROOT/tools/serve.mjs" "$REPO_ROOT/dist/_playground-board" 8477
  url: http://127.0.0.1:8477/index.html
  readySelector: ".scwrap"
  layout: full
explainPicture: { ref: hk.yml#explain-pic, caption: "A stolen list with no salt: maple gives the same hash for Ana and Ben, so one guess cracks both." }
explainClip:
  query: { code: "@hk.yml#explain", fresh: 1, id: explain }
  caption: "Stored as a hash"
  say: "The site stores a hash, not the password."
  clip:
    - type: { into: Password, text: "maple" }
    - wait: 600
    - expect: { selector: "#gsum", contains: "Match" }
    - caption: { text: "Hash what you type and compare: a match signs you in.", say: "Hash what is typed and compare." }
    - wait: 1200
    - type: { into: Password, text: "Maple" }
    - wait: 600
    - caption: { text: "One capital letter: a completely different hash.", say: "Change one letter, and the whole hash changes." }
    - wait: 1600
---
A **hash** protects passwords where they are **stored**. It turns any text into a fixed-length scramble. The same input always gives the same hash, but there is no way to work backwards from the hash to the input. (Protecting data while it **travels** is the next lesson.)

## Predict: a stolen list

```step
stage: predict
insight: "Committing to what a stolen password list contains tests the new move: sites store hashes, which can be checked but not reversed."
check:
  type: predict
  q: "A website is hacked and its list of passwords is stolen. If the site did its job properly, what do the attackers find for your account?"
  options: ["A hash: a scramble that can't be turned back into your password", "Your password", "Your password, encrypted with a key they will find nearby", "Nothing at all"]
  actual: "A hash. The site never kept the password: it stores the hash, and at sign-in hashes what you type and compares."
```

## Try: sign in with a hash

```step
stage: run
insight: "Typing the password and seeing its hash match the stored one settles the prediction: the site checks hashes, never storing the password."
try: { playground: board, starter: "hk.yml#run", height: 520 }
check: { type: board, text: "The site stores only Kai's hash. Type Kai's password (maple). Then change one letter to a capital. What happens to the hash?", when: "m = 0 and n = 5 and d >= 6", explain: "maple matches the stored hash; Maple gives a completely different one. The site can check you without ever storing the password." }
```

Was your prediction right? Watch how many digits change for one letter.

## Worked example: hashes and salt

```step
stage: investigate
insight: "Following a sign-in through hashing, then two people with the same password, models the new move. Sam thinks a hash can be turned back, the misconception planted after the method."
tasks:
  - check:
      type: question
      q: "Why can a site check your password without storing it?"
      options: ["The same password always gives the same hash, so it compares hashes", "It asks your email provider", "It stores the password in a secret place", "It can't: every site stores passwords"]
      answer: 0
      feedback: [null, "Your email isn't involved in signing in.", "Good sites don't store it anywhere.", "Good sites store only hashes."]
      explain: "Hash what is typed; if it equals the stored hash, the password was right."
  - check:
      type: bug
      code: "working.txt#sam"
      text: "Sam explains how Forgot password works. Click the line where it first goes wrong."
      answer: 3
      fault: logic
      misconception: hash-reversible
      explain: "Line 3: a hash can't be turned back. That is why sites send a reset link instead; a site that emails you your old password is storing it, which is a warning sign."
  - check:
      type: question
      q: "Ana and Ben both use maple. With no salt, a stolen list shows the same hash twice. What does that tell a thief?"
      options: ["Ana and Ben have the same password, so cracking one cracks both", "Nothing: hashes can't be read", "The site was hacked twice", "Their hashes must be wrong"]
      answer: 0
      feedback: [null, "They can't be turned back, but two matching hashes still give something away.", "One stolen list, two matching rows.", "Same password in, same hash out: they're exactly right."]
      explain: "Same password, same hash. A salt (a few random characters per person, added before hashing) gives Ana and Ben different hashes."
```

### Two tools

```worked
\text{maple} \to 49ead2b1066b\ldots :: Hashing: a fixed-length scramble of the password.
\text{sign in: hash(typed) = stored?} :: The site compares hashes; it never needs the password.
\text{Maple} \to \text{a completely different hash} :: One small change changes everything, and it can't be reversed.
\text{hash(guess) = stored?} :: A thief can't reverse a hash, but can hash common passwords and look for a match.
\text{salt} + \text{maple} :: Each person's salt makes the same password hash differently, so one guess no longer cracks everyone who picked it.
```

Now explain how a site checks a password.

### Find the mistake

### Same password, same hash

## Vary: crack a list, then salt it

```step
stage: modify
insight: "Students see why a hash alone is not the end of the story: common passwords crack by guessing. Then the salt fixes the giveaway of two matching rows."
try: { playground: board, starter: "hk.yml#audit", height: 520 }
tasks:
  - starter: "hk.yml#audit"
    hint: ["Think of passwords people pick a lot.", "Try a word you've seen in this lesson.", "maple."]
    check: { type: board, text: "This list was stolen from a site with no salt. Type passwords people often pick, one at a time, and watch for a row lighting up.", when: "m = 1", explain: "Same password, same hash: Ana and Ben both use maple, and Cara's sunshine1 lights up too. Dev's long passphrase never does: nobody would guess it." }
  - starter: "hk.yml#salt"
    check: { type: board, text: "Type maple, then switch on the salt. Ana and Ben both use maple. Are their hashes the same?", when: "s = 1 and n = 5", explain: "Different salts, different hashes: a list of pre-hashed common passwords no longer matches, and nobody can tell that two people share a password." }
```

### Crack the list

### Salt

## Practise: hashes

```step
stage: practise
insight: "Spotting good and bad password storage, why guessing still works, hash or encryption (the hinge: the two get mixed up), and a review of access control."
tasks:
  - check:
      type: question
      q: "A site emails you your old password when you click Forgot password. What does that tell you?"
      options: ["It stores your password, not a hash: a bad sign", "It is very secure", "It uses public key encryption", "Nothing"]
      answer: 0
      feedback: [null, "It could only email it if it kept it.", "Encryption in transit doesn't explain it keeping your password.", "It tells you how the site stores passwords."]
      explain: "A hash can't be reversed, so a well-built site can only send a reset link."
  - check:
      type: question
      q: "Why are long passphrases safer even when sites store hashes?"
      options: ["Attackers hash lists of common passwords and compare; a long unusual passphrase isn't on those lists", "Long passwords make the hash longer", "Hashes only work on long passwords", "They aren't safer"]
      answer: 0
      feedback: [null, "Every hash is the same length.", "Any text can be hashed.", "They are, for that reason."]
      explain: "Guessing still works on common passwords: hash the guess, compare. Length and unusual words defeat the guess lists."
  - check:
      type: sort
      q: "Which tool fits? Sort each one."
      options: ["A hash", "Encryption", "Neither"]
      items:
        - ["A site keeps your password so it can check it next time", "A hash", "It only ever needs checking, never reading back."]
        - ["Your card number on its way to an online shop", "Encryption", "The shop has to read it, and it crosses networks other people share."]
        - ["Checking a downloaded app is exactly the file its maker published", "A hash", "Same file, same hash; one changed byte changes it."]
        - ["A private message to a friend across the internet", "Encryption", "Your friend has to read it, so it must be reversible for them."]
        - ["A news headline anyone can read", "Neither", "It's public: there's nothing to hide or check."]
      explain: "Hash what only needs checking; encrypt what someone has to read again. A hash is not encryption: it can't be undone, even with a key."
  - check:
      type: question
      q: "Review: which is authorisation?"
      options: ["Only teachers may change marks", "Typing a password", "A fingerprint", "A code from your phone"]
      answer: 0
      feedback: [null, "That is authentication.", "That is authentication.", "That is authentication."]
      explain: "Authorisation is what you may do once signed in."
```

### Emailed passwords

### Passphrases

### Hash or encryption?

### Review: access

## Make: a strong passphrase

```step
stage: make
insight: "Building a passphrase that meets a strength rule reverses the process: students start from what makes a hash hard to guess and make a password to match."
try: { playground: board, starter: "hk.yml#make", height: 480 }
hint: ["Use four or more words that don't go together.", "Separate them with spaces or hyphens.", "Aim for 20 characters or more. Don't use a real password here."]
check: { type: board, text: "Make up (don't use a real one) a passphrase of at least four unrelated words and 20 characters. Watch its hash.", when: "w >= 4 and n >= 20", explain: "Long and unusual: not on any list of common passwords, and still easy to remember." }
```

Then: why should you never use the same password on two sites, even a strong one?
