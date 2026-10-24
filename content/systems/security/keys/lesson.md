---
order: 5
unit: layers
node: AC9TDI10K01 n4
introduces: [public-key]
assumes: [hashing]
title: Public and private keys
summary: "To send a secret to someone you've never met, you can't share a key first: anyone could copy it on the way. Public key encryption works like an open padlock: anyone can lock a message with someone's public key, but only their private key opens it. HTTPS uses it to start every secure connection."
language: maths
voice: { name: af_heart, speed: 1.1 }
hook: "Your browser has never met the online shop's server, yet it sends your card number safely across café Wi-Fi. How do two strangers share a secret in public?"
app:
  command: node "$REPO_ROOT/tools/serve.mjs" "$REPO_ROOT/dist/_playground-board" 8546
  url: http://127.0.0.1:8546/index.html
  readySelector: ".scwrap"
  layout: full
explainPicture: { ref: keys.yml#explain-pic, caption: "Public key: Bob locks the box with Alice's open padlock. Eve has a padlock too, but only Alice's private key opens it." }
---
Hashes protect passwords where they're **stored**. This lesson is about protecting a secret while it **travels**, between two people who have never met.

## Predict: strangers

```step
stage: predict
insight: "Committing to how a stranger can send Alice a secret tests the new move: a key that only locks can be handed out in public."
check:
  type: predict
  q: "Bob wants to send Alice a secret. They've never met, and everything they send can be copied by Eve. A shared key, like a shift cipher's, would have to be sent first. What can Alice do?"
  options: ["Hand out open padlocks to anyone: Bob snaps one shut, and only Alice has the key", "Send Bob the key first", "Nothing: strangers can't share a secret", "Use a longer shift so Eve can't guess it"]
  actual: "Hand out open padlocks. Anyone, Eve included, can have one, because a padlock only locks. The only key that opens it never leaves Alice."
```

## Try: lock it with Alice's padlock

```step
stage: run
insight: "Locking with Alice's padlock and sending past Eve settles the prediction: Eve copies the box but can't open it; Alice can."
try: { playground: board, starter: "keys.yml#run", height: 480 }
check: { type: board, text: "Bob locks the box with Alice's padlock and sends it. Who can read it?", when: "l = 1 and k = 1 and v = 0", explain: "Eve has the box and even one of Alice's padlocks, but no key: only Alice's private key opens it." }
```

Was your prediction right?

## Worked example: two keys, two jobs

```step
stage: investigate
insight: "Following one message through the public and private key models the new move. Sam locks with his own padlock, the misconception planted after the method."
tasks:
  - check:
      type: question
      q: "Alice has given out hundreds of open padlocks. Who can open a box Bob locks with one?"
      options: ["Only Alice, with her private key", "Anyone with one of Alice's padlocks", "Bob", "Eve, if she copies the box"]
      answer: 0
      feedback: [null, "A padlock locks; it doesn't open. Everyone can have one.", "Once it's locked, Bob can't open it either.", "Copying the box doesn't give her the key."]
      explain: "The public key only locks. The private key, which never leaves Alice, is the only thing that opens."
  - check:
      type: bug
      code: "working.txt#sam"
      text: "Sam sends Alice a secret. Click the line where it first goes wrong."
      answer: 3
      fault: logic
      misconception: lock-with-own-key
      explain: "Line 3: locked with Sam's own padlock, only Sam's key opens it, and that key is with Sam. Lock with the receiver's public key."
  - check:
      type: question
      q: "Why doesn't it matter that Eve has one of Alice's padlocks?"
      options: ["A padlock can only lock; she still can't open anything", "Eve's padlock is a fake", "Alice changes her padlock every day", "It does matter: Eve can read everything"]
      answer: 0
      feedback: [null, "It's a real one: Alice gives them to anyone.", "She doesn't need to.", "Try it on the board: Eve can't open the box."]
      explain: "That's why the public key can be public. Only the private key has to stay secret."
```

### Lock, send, open

```worked
\text{public key} = \text{open padlock} :: Alice gives it to anyone. It can only lock.
\text{Bob locks with Alice's public key} :: The box crosses the café Wi-Fi. Eve copies it.
\text{Eve: box, padlock, no key} :: She can't open it. Copying isn't reading.
\text{private key} = \text{the only key} :: It never leaves Alice. Only she opens the box.
\text{HTTPS} :: Your browser locks a fresh shared key with the site's public key; then both use that shared key for the rest.
```

Now: who can open it?

### Find the mistake

### Eve's padlock

## Vary: one change at a time

```step
stage: modify
insight: "Each task changes the lock Bob uses (his own, none), then asks what happens if the private key leaks."
try: { playground: board, starter: "keys.yml#modify", height: 480 }
tasks:
  - check: { type: board, text: "Now Bob uses his own padlock. Send it. Who can read it?", when: "l = 2 and f >= 1", explain: "Nobody but Bob: Alice can't open it, because only Bob has that key. You lock with the receiver's public key." }
  - check: { type: board, text: "Send it with no padlock.", when: "l = 0 and v = 1", explain: "No lock: Eve reads it. That's a website without HTTPS." }
  - check:
      type: question
      q: "Eve copies Alice's private key from her laptop. What can Eve do now?"
      options: ["Open every box locked with Alice's padlock, including old ones she copied", "Nothing: she still needs a padlock", "Only lock new boxes", "Open boxes Bob locked with his own padlock"]
      answer: 0
      feedback: [null, "She already had a padlock. The key is the part that opens.", "Anyone could already do that.", "That needs Bob's key, not Alice's."]
      explain: "Everything rests on the private key staying private. That's why it never leaves the device, and why a leaked one is replaced at once."
```

### Bob's own padlock

### No padlock

### A leaked private key

## Practise: which key?

```step
stage: practise
insight: "Choosing the right key, reading the browser's padlock, the hash-or-encryption sort from the last lesson with public keys in it (the hinge), and a review of hashing."
tasks:
  - check:
      type: question
      q: "Which key do you use to send someone a secret?"
      options: ["Their public key", "Their private key", "Your private key", "No key"]
      answer: 0
      feedback: [null, "Only they have that.", "Then they couldn't open it.", "Then anyone could read it."]
      explain: "Lock with the receiver's public key; only their private key opens it."
  - check:
      type: question
      q: "A browser shows a padlock beside a shop's address. What does it promise?"
      options: ["What you send is encrypted on the way to that site", "The shop is honest", "The site can't be hacked", "Your password is stored as a hash"]
      answer: 0
      feedback: [null, "A scam site can have a padlock too: it's about the trip, not the shop.", "It says nothing about the server itself.", "That's how the shop stores it, which the padlock can't tell you."]
      explain: "The padlock is about data in transit: nobody on the way can read it. It doesn't vouch for the site."
  - check:
      type: sort
      q: "Which tool fits? Sort each one."
      options: ["A hash", "Public key encryption", "Neither"]
      items:
        - ["A site keeps your password so it can check it next time", "A hash", "It only ever needs checking, never reading back."]
        - ["Your card number on its way to an online shop", "Public key encryption", "The shop has to read it, and it crosses networks other people share."]
        - ["Checking a downloaded app is exactly the file its maker published", "A hash", "Same file, same hash; one changed byte changes it."]
        - ["A private message to a friend across the internet", "Public key encryption", "Your friend has to read it, so it must be reversible for them."]
        - ["A news headline anyone can read", "Neither", "It's public: there's nothing to hide or check."]
      explain: "Stored and only checked: a hash. Travelling and read again: public key encryption. A hash is not encryption: it can't be undone, even with a key."
```

### Which key?

### The browser's padlock

### Hash or encryption?

## Make: explain HTTPS

```step
stage: make
insight: "Explaining a real connection end to end reverses the process: students start from the browser and the shop and build the chain of keys themselves."
check:
  type: reasoning
  q: "Your browser has never met the shop's server, and you're on café Wi-Fi with Eve. Explain how your card number reaches the shop without Eve reading it. Say which key does what."
  placeholder: "For example: the shop gives out ..."
  steps:
    - ["The shop's server gives the browser its public key: an open padlock.", "a public key can be handed out in the open"]
    - ["The browser makes a fresh secret key and locks it with the shop's public key.", "anyone can lock with a public key"]
    - ["Eve copies the locked secret but can't open it.", "only the shop's private key opens it, and it never leaves the server"]
    - ["The shop opens it with its private key; now both share the secret key.", "the private key matches the public one"]
    - ["The card number is encrypted with that shared key on the way.", "both ends have it, and Eve doesn't"]
  picks:
    - step: 3
      q: "Why can't Eve open the locked secret?"
      options: ["Only the shop's private key opens it", "The Wi-Fi password stops her", "It's hashed", "She doesn't have the public key"]
      answer: 0
      feedback: [null, "Everyone in the café has the Wi-Fi password.", "A hash couldn't be opened by the shop either.", "She does: it's public."]
  criteria: ["I said which key the shop gives out and which it keeps.", "I said what the browser locks, and with what.", "I said why Eve's copy is useless."]
  explain: "The public key starts the conversation in the open; the private key is what Eve never gets."
```

Then: why does it matter that the padlock is the shop's, and not one Eve handed you? (Ask your teacher about certificates.)
