---
marp: true
theme: default
html: true
---

# Public and private keys

Security and privacy · How systems are kept safe

<!-- Speaker note: Students send a message past an eavesdropper locked with Alice's public padlock, see why Bob's own padlock and no padlock both fail, then sort hashes from public key encryption and explain how HTTPS starts (AC9TDI10K01 node 4, second half; Hashes and salt is the first). About 40 minutes (Predict and Try 6 min · Worked example 10 min · Vary 8 min · Practise 8 min · Make 8 min). -->

---

## Today

- I can explain how a public key and a private key work together.
- I can say which key to lock a secret with.
- I can explain how a browser and a site that have never met share a secret.

<!-- Speaker note: Before class: Try the board yourself. Every name is made up. The kit's typical width: public key cryptography (as in TLS/HTTPS) secures data in transit; hashing (last lesson) secures stored passwords; they address different threats. Split from Hashes and keys on 25 Oct. Simplifications: the padlock is an analogy; HTTPS uses public keys to agree a shared key, then faster encryption for the rest; certificates (who vouches that a public key really is the shop's) are a stretch question, not taught. Links: Secret messages' key sharing (agreeing a key in public) is the other half of how HTTPS starts. Teacher: Try: ask what Eve has. (The box and a padlock.) What is she missing? Teacher: Worked example: ask why the key that opens must never travel. Teacher: Vary: ask why Bob's own padlock is safe from Eve but useless to Alice. -->

---

## Why it matters

> Your browser has never met the online shop's server, yet it sends your card number safely across café Wi-Fi. How do two strangers share a secret in public?

<!-- Speaker note: Hashes protect passwords where they're **stored**. This lesson is about protecting a secret while it **travels**, between two people who have never met. -->

---

<span style="background:#dbeafe; color:#1a1a1a; border:1.5px solid #3b82f6; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">💬 Discussion</span>

## Think, pair, share

**Two people who have never met want to share a secret on a network anyone can watch. How could they?**

- What goes wrong if one of them sends the key first?
- Could something be public and still safe?

<!-- Speaker note: Let students find the problem with sending a key. Open padlocks (public to lock, private to open) are the way out. Keep it conceptual: no key sizes or maths. Give 30 seconds alone, 2 minutes in pairs, then take answers from both sides. There is no single right answer: ask for a reason, and let students change their minds. -->

---

<span style="background:#dbeafe; color:#1a1a1a; border:1.5px solid #3b82f6; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">💬 Discussion</span>

## Predict

**Bob wants to send Alice a secret. They've never met, and everything they send can be copied by Eve. A shared key, like a shift cipher's, would have to be sent first. What can Alice do?**

- Nothing: strangers can't share a secret
- Send Bob the key first
- Use a longer shift so Eve can't guess it
- Hand out open padlocks to anyone: Bob snaps one shut, and only Alice has the key

<!-- Speaker note: What happens: Hand out open padlocks. Anyone, Eve included, can have one, because a padlock only locks. The only key that opens it never leaves Alice. Take two or three predictions before anyone runs it. -->

<!-- Speaker note: Teacher: students who chose "send Bob the key first" haven't met the problem: ask what Eve does with the key. -->

<style scoped>pre, marp-pre { font-size: 0.5em; line-height: 1.25; } section { font-size: 28px; }</style>

---

<span style="background:#fef3c7; color:#1a1a1a; border:1.5px solid #f59e0b; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✍️ Activity</span>

## Open padlocks <span style="font-size:.6em;color:#64748b">(6 min)</span>

One student holds the only key to a padlock and hands out copies of the open padlock to the class. Others lock a note in a box with a padlock and pass it across the room. Who can open the box?

<!-- Speaker note: Everyone can lock, only the keyholder can unlock. Eve can have a padlock too. Don't name public and private yet. -->

---

<span style="background:#fef3c7; color:#1a1a1a; border:1.5px solid #f59e0b; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✍️ Activity</span>

## Try it

{{embed: https://tutorials.learningwaypoints.com/_playground-board/index.html?id=deck%2Fsystems%2Fsecurity%2Fkeys%2Fstep-2&code=widget%3A+security%0Amode%3A+keys%0A&fresh=1}}

[Open this step in the tutorial](https://tutorials.learningwaypoints.com/systems/security/keys/?full=step-2#step-2)

<!-- Speaker note: Was your prediction right? -->

<style scoped>pre, marp-pre { font-size: 0.5em; line-height: 1.25; } section { font-size: 25px; }</style>

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## What happened?

* Hand out open padlocks. Anyone, Eve included, can have one, because a padlock only locks. The only key that opens it never leaves Alice.

<!-- Speaker note: Reveal after running. Ask who predicted it, and what made them think so. -->

---

<span style="background:#dbeafe; color:#1a1a1a; border:1.5px solid #3b82f6; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">💬 Discussion</span>

## Lock, send, open

Now: who can open it?

$$\text{public key} = \text{open padlock}$$

1) $\text{Bob locks with Alice's public key}$ — The box crosses the café Wi-Fi. Eve copies it.
2) $\text{Eve: box, padlock, no key}$ — She can't open it. Copying isn't reading.
3) $\text{private key} = \text{the only key}$ — It never leaves Alice. Only she opens the box.
4) $\text{HTTPS}$ — Your browser locks a fresh shared key with the site's public key; then both use that shared key for the rest.

<!-- Speaker note: Model this live on the board before revealing anything: write each line and say why, pausing to ask the class what comes next. Then click to reveal the lines and compare. Script. Start: write public key = open padlock and say "Alice gives it to anyone. It can only lock." Line 1: write Bob locks with Alice's public key and say "The box crosses the café Wi-Fi. Eve copies it." Line 2: write Eve: box, padlock, no key and say "She can't open it. Copying isn't reading." Line 3: write private key = the only key and say "It never leaves Alice. Only she opens the box." Line 4: write HTTPS and say "Your browser locks a fresh shared key with the site's public key; then both use that shared key for the rest." -->

<style scoped>pre, marp-pre { font-size: 0.5em; line-height: 1.25; } section { font-size: 23px; }</style>

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Lock, send, open

**Alice has given out hundreds of open padlocks. Who can open a box Bob locks with one?**

- Only Alice, with her private key
- Anyone with one of Alice's padlocks
- Eve, if she copies the box
- Bob

* Answer: Only Alice, with her private key

<!-- Speaker note: The public key only locks. The private key, which never leaves Alice, is the only thing that opens. -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Find the mistake

**Sam sends Alice a secret. Click the line where it first goes wrong.**

```
 1  Sam wants to send Alice a secret.
 2  Sam has his own padlock and its key.
 3  Sam locks the box with his own padlock, so it is safe.
 4  Alice can open it when it arrives.
```

* Answer: line 3

<!-- Speaker note: Line 3: locked with Sam's own padlock, only Sam's key opens it, and that key is with Sam. Lock with the receiver's public key. -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Eve's padlock

**Why doesn't it matter that Eve has one of Alice's padlocks?**

- It does matter: Eve can read everything
- Alice changes her padlock every day
- Eve's padlock is a fake
- A padlock can only lock; she still can't open anything

* Answer: A padlock can only lock; she still can't open anything

<!-- Speaker note: That's why the public key can be public. Only the private key has to stay secret. -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Which key opens it?

**Alice gives out padlocks (her public key). Which key opens what is locked with one?**

- Alice's private key
- Any copy of the padlock
- Eve's key
- Bob's password

* Answer: Alice's private key

<!-- Speaker note: Only Alice's private key, which never leaves her, opens it. Ask on mini whiteboards or by show of hands before the reveal. -->

---

<span style="background:#fef3c7; color:#1a1a1a; border:1.5px solid #f59e0b; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✍️ Activity</span>

## Vary: one change at a time



- **Bob's own padlock:** 
- **No padlock:** 
- **A leaked private key:** 

[Open this step](https://tutorials.learningwaypoints.com/systems/security/keys/?full=step-4#step-4)

<!-- Speaker note: What this step is for: Each task changes the lock Bob uses (his own, none), then asks what happens if the private key leaks. For students who need more support: A card: public key = open padlock (anyone locks); private key = the only key (only the owner opens). Lock with theirs. For early finishers: Eve hands you a padlock and says it's the shop's. How would you know? Look up what a certificate is. The hard part, on purpose: The public key only locks, which runs against intuition (a key that doesn't open?). Use the padlock as the anchor all lesson: anyone can snap one shut. When students get stuck: A student locks with their own padlock (Sam's mistake). Ask: Who has the key to Bob's padlock? Fix: Lock with the receiver's public key. / A student thinks the public key opens the box. Ask: Eve has a padlock too. Can she open the box? Fix: Public keys only lock; the private key opens. -->

---

<span style="background:#dbeafe; color:#1a1a1a; border:1.5px solid #3b82f6; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">💬 Discussion</span>

## Prove it's you <span style="font-size:.6em;color:#64748b">(3 min)</span>

The keyholder wants to prove a message came from them. How could they use their key to do that?

<!-- Speaker note: This leads into signing, which the lesson touches lightly. Accept sensible ideas without insisting on the full answer. -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Which key?

**Which key do you use to send someone a secret?**

- Your private key
- No key
- Their public key
- Their private key

* Answer: Their public key

<!-- Speaker note: Lock with the receiver's public key; only their private key opens it. -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## The browser's padlock

**A browser shows a padlock beside a shop's address. What does it promise?**

- The site can't be hacked
- The shop is honest
- What you send is encrypted on the way to that site
- Your password is stored as a hash

* Answer: What you send is encrypted on the way to that site

<!-- Speaker note: The padlock is about data in transit: nobody on the way can read it. It doesn't vouch for the site. -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Hash or encryption?

**Which tool fits? Sort each one.**

Groups: A hash · Public key encryption · Neither

A site keeps your password so it can check it next time · Your card number on its way to an online shop · Checking a downloaded app is exactly the file its maker published · A private message to a friend across the internet · A news headline anyone can read

* Answer: A site keeps your password so it can check it next time → A hash; Your card number on its way to an online shop → Public key encryption; Checking a downloaded app is exactly the file its maker published → A hash; A private message to a friend across the internet → Public key encryption; A news headline anyone can read → Neither

<!-- Speaker note: Stored and only checked: a hash. Travelling and read again: public key encryption. A hash is not encryption: it can't be undone, even with a key. -->

<style scoped>pre, marp-pre { font-size: 0.5em; line-height: 1.25; } section { font-size: 21px; }</style>

---

<span style="background:#fef3c7; color:#1a1a1a; border:1.5px solid #f59e0b; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✍️ Activity</span>

## Make: explain HTTPS

Then: why does it matter that the padlock is the shop's, and not one Eve handed you? (Ask your teacher about certificates.)

<!-- Speaker note: What this step is for: Explaining a real connection end to end reverses the process: students start from the browser and the shop and build the chain of keys themselves. -->

<!-- Speaker note: Teacher: compare two students' explanations against the criteria before showing the model. -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Exit ticket

**Which key locks a message for Alice, and why can it be public?**

* Alice's public key. It can only lock; only her private key, which never leaves her, opens it.

<!-- Speaker note: Students answer on paper or a mini whiteboard before the reveal. Anyone who cannot answer needs the main idea again next lesson. Where this leads: Next: Capture the flag (use everything from this course to find and fix the weaknesses in a school portal). Links: Secret messages (key sharing, challenge and response). -->
