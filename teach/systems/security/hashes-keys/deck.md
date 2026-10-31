---
marp: true
theme: default
html: true
---

# Hashes and salt

Security and privacy · How systems are kept safe

<!-- Speaker note: Students sign in against a stored hash, see one letter change the whole hash, crack an unsalted stolen list by hashing common guesses, then add a salt, and sort what a hash is for against what encryption is for (AC9TDI10K01 node 4, first half; Public and private keys is the second). About 45 minutes (Predict and Try 6 min · Worked example 12 min · Vary 10 min · Practise and Make 12 min). -->

---

## Today

- I can explain how sites check passwords without storing them.
- I can explain what a salt adds.
- I can say when a hash fits and when encryption does.

<!-- Speaker note: Before class: Try the boards yourself. The hash is real SHA-256 (shown short); the passwords in the lesson are practice ones. Tell students never to type a real password into any board. The kit's typical width: hashing secures stored passwords; public key cryptography (next lesson) secures data in transit; they address different threats, and mixing them up is why this node is a hinge. Split from Hashes and keys on 25 Oct so each gets a full lesson. Simplifications: real sites use slow hashes built for passwords (bcrypt, Argon2) and store the salt beside the hash. Links: Secret messages' key sharing (agreeing a key in public) is the other half of how HTTPS starts. Teacher: Try: count how many digits changed for one letter. Teacher: Worked example: ask why the same password must always give the same hash. Teacher: Vary: ask why the thief can crack Ana and Ben without reversing anything; then what the salt changes. -->

---

## Why it matters

> Websites get hacked and their password lists stolen. If the site did its job, the attackers still don't get your password. How?

<!-- Speaker note: A **hash** protects passwords where they are **stored**. It turns any text into a fixed-length scramble. The same input always gives the same hash, but there is no way to work backwards from the hash to the input. (Protecting data while it **travels** is the next lesson.) -->

---

<span style="background:#dbeafe; color:#1a1a1a; border:1.5px solid #3b82f6; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">💬 Discussion</span>

## Think, pair, share

**A website is hacked and its password list stolen. Should the site have stored your password at all?**

- What could it store instead?
- How could it still tell you typed the right one?

<!-- Speaker note: Store a one-way fingerprint (a hash), not the password. Salt is the second step. Keep it defensive. Give 30 seconds alone, 2 minutes in pairs, then take answers from both sides. There is no single right answer: ask for a reason, and let students change their minds. -->

---

<span style="background:#dbeafe; color:#1a1a1a; border:1.5px solid #3b82f6; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">💬 Discussion</span>

## Predict

**A website is hacked and its list of passwords is stolen. If the site did its job properly, what do the attackers find for your account?**

- Your password, encrypted with a key they will find nearby
- Nothing at all
- Your password
- A hash: a scramble that can't be turned back into your password

<!-- Speaker note: What happens: A hash. The site never kept the password: it stores the hash, and at sign-in hashes what you type and compares. Take two or three predictions before anyone runs it. -->

<!-- Speaker note: Teacher: students who chose "your password" assume sites keep it. -->

<style scoped>pre, marp-pre { font-size: 0.5em; line-height: 1.25; } section { font-size: 28px; }</style>

---

<span style="background:#fef3c7; color:#1a1a1a; border:1.5px solid #f59e0b; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✍️ Activity</span>

## One-way rule <span style="font-size:.6em;color:#64748b">(5 min)</span>

Give each student a rule that is easy to apply but can't be undone: add the digits of a number, then double it. Each student hands over only the result. Can the class work out the starting number?

<!-- Speaker note: Several numbers give the same result, so you can't tell which went in. Real hashes are built so that is practically hopeless, and different inputs almost never collide. -->

---

<span style="background:#fef3c7; color:#1a1a1a; border:1.5px solid #f59e0b; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✍️ Activity</span>

## Try it

{{embed: https://tutorials.learningwaypoints.com/_playground-board/index.html?id=deck%2Fsystems%2Fsecurity%2Fhashes-keys%2Fstep-2&code=widget%3A+security%0Amode%3A+hash%0Aleak+kai%3A+49ead2b1066b%0A&fresh=1}}

[Open this step in the tutorial](https://tutorials.learningwaypoints.com/systems/security/hashes-keys/?full=step-2#step-2)

<!-- Speaker note: Was your prediction right? Watch how many digits change for one letter. -->

<style scoped>pre, marp-pre { font-size: 0.5em; line-height: 1.25; } section { font-size: 25px; }</style>

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## What happened?

* A hash. The site never kept the password: it stores the hash, and at sign-in hashes what you type and compares.

<!-- Speaker note: Reveal after running. Ask who predicted it, and what made them think so. -->

---

<span style="background:#dbeafe; color:#1a1a1a; border:1.5px solid #3b82f6; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">💬 Discussion</span>

## Two tools

Now explain how a site checks a password.

$$\text{maple} \to 49ead2b1066b\ldots$$

1) $\text{sign in: hash(typed) = stored?}$ — The site compares hashes; it never needs the password.
2) $\text{Maple} \to \text{a completely different hash}$ — One small change changes everything, and it can't be reversed.
3) $\text{hash(guess) = stored?}$ — A thief can't reverse a hash, but can hash common passwords and look for a match.
4) $\text{salt} + \text{maple}$ — Each person's salt makes the same password hash differently, so one guess no longer cracks everyone who picked it.

<!-- Speaker note: Model this live on the board before revealing anything: write each line and say why, pausing to ask the class what comes next. Then click to reveal the lines and compare. Script. Start: write maple 49ead2b1066b and say "Hashing: a fixed-length scramble of the password." Line 1: write sign in: hash(typed) = stored? and say "The site compares hashes; it never needs the password." Line 2: write Maple a completely different hash and say "One small change changes everything, and it can't be reversed." Line 3: write hash(guess) = stored? and say "A thief can't reverse a hash, but can hash common passwords and look for a match." Line 4: write salt + maple and say "Each person's salt makes the same password hash differently, so one guess no longer cracks everyone who picked it." -->

<style scoped>pre, marp-pre { font-size: 0.5em; line-height: 1.25; } section { font-size: 21px; }</style>

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Two tools

**Why can a site check your password without storing it?**

- The same password always gives the same hash, so it compares hashes
- It can't: every site stores passwords
- It asks your email provider
- It stores the password in a secret place

* Answer: The same password always gives the same hash, so it compares hashes

<!-- Speaker note: Hash what is typed; if it equals the stored hash, the password was right. -->

<style scoped>pre, marp-pre { font-size: 0.5em; line-height: 1.25; } section { font-size: 27px; }</style>

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Find the mistake

**Sam explains how Forgot password works. Click the line where it first goes wrong.**

```
 1  I forgot my password, so I click Forgot password.
 2  The site stores only a hash of my password.
 3  So it turns the hash back and emails me my password.
 4  Then I can sign in again.
```

* Answer: line 3

<!-- Speaker note: Line 3: a hash can't be turned back. That is why sites send a reset link instead; a site that emails you your old password is storing it, which is a warning sign. -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Same password, same hash

**Ana and Ben both use maple. With no salt, a stolen list shows the same hash twice. What does that tell a thief?**

- The site was hacked twice
- Their hashes must be wrong
- Nothing: hashes can't be read
- Ana and Ben have the same password, so cracking one cracks both

* Answer: Ana and Ben have the same password, so cracking one cracks both

<!-- Speaker note: Same password, same hash. A salt (a few random characters per person, added before hashing) gives Ana and Ben different hashes. -->

<style scoped>pre, marp-pre { font-size: 0.5em; line-height: 1.25; } section { font-size: 25px; }</style>

---

<span style="background:#dbeafe; color:#1a1a1a; border:1.5px solid #3b82f6; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">💬 Discussion</span>

## Same password, same hash <span style="font-size:.6em;color:#64748b">(3 min)</span>

Two students both use the same password. What do their stored fingerprints look like? What might an attacker learn?

<!-- Speaker note: Matching fingerprints show matching passwords. That is why salt is added: a different extra bit for each person. -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## What is stored?

**A site stores your password's hash. When you sign in, what does it do?**

- Hashes what you type and compares it
- Decrypts the stored hash
- Compares your typing to the saved password
- Emails your password to you

* Answer: Hashes what you type and compares it

<!-- Speaker note: The site never keeps the password, only the hash to compare against. Ask on mini whiteboards or by show of hands before the reveal. -->

---

<span style="background:#fef3c7; color:#1a1a1a; border:1.5px solid #f59e0b; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✍️ Activity</span>

## Vary: crack a list, then salt it



- **Crack the list:** 
- **Salt:** 

[Open this step](https://tutorials.learningwaypoints.com/systems/security/hashes-keys/?full=step-4#step-4)

<!-- Speaker note: What this step is for: Students see why a hash alone is not the end of the story: common passwords crack by guessing. Then the salt fixes the giveaway of two matching rows. Hints, in order: Think of passwords people pick a lot. / Try a word you've seen in this lesson. / maple. For students who need more support: Two cards: Only needs checking → hash (one way). Has to be read again → encryption (a key undoes it). For early finishers: Why do security experts recommend a password manager? What does it change about using the same password on several sites? The hard part, on purpose: Hashing is one-way, which runs against intuition, and students call it encryption. Use the meat grinder (you can't un-mince) as the anchor, and the sort in Practise to pull hash and encryption apart. When students get stuck: A student says the site turns the hash back (Sam's mistake). Ask: Why does the site send a reset link instead of your password? Fix: It can't reverse the hash. / A student calls hashing encryption. Ask: Could anyone, with any key, turn the hash back into maple? Fix: Encryption is undone with a key; a hash can't be undone at all. -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Emailed passwords

**A site emails you your old password when you click Forgot password. What does that tell you?**

- It stores your password, not a hash: a bad sign
- It is very secure
- It uses public key encryption
- Nothing

* Answer: It stores your password, not a hash: a bad sign

<!-- Speaker note: A hash can't be reversed, so a well-built site can only send a reset link. -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Passphrases

**Why are long passphrases safer even when sites store hashes?**

- Attackers hash lists of common passwords and compare; a long unusual passphrase isn't on those lists
- Long passwords make the hash longer
- They aren't safer
- Hashes only work on long passwords

* Answer: Attackers hash lists of common passwords and compare; a long unusual passphrase isn't on those lists

<!-- Speaker note: Guessing still works on common passwords: hash the guess, compare. Length and unusual words defeat the guess lists. -->

<style scoped>pre, marp-pre { font-size: 0.5em; line-height: 1.25; } section { font-size: 27px; }</style>

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Hash or encryption?

**Which tool fits? Sort each one.**

Groups: A hash · Encryption · Neither

A site keeps your password so it can check it next time · Your card number on its way to an online shop · Checking a downloaded app is exactly the file its maker published · A private message to a friend across the internet · A news headline anyone can read

* Answer: A site keeps your password so it can check it next time → A hash; Your card number on its way to an online shop → Encryption; Checking a downloaded app is exactly the file its maker published → A hash; A private message to a friend across the internet → Encryption; A news headline anyone can read → Neither

<!-- Speaker note: Hash what only needs checking; encrypt what someone has to read again. A hash is not encryption: it can't be undone, even with a key. -->

<style scoped>pre, marp-pre { font-size: 0.5em; line-height: 1.25; } section { font-size: 21px; }</style>

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Review: access

**Review: which is authorisation?**

- Only teachers may change marks
- A fingerprint
- A code from your phone
- Typing a password

* Answer: Only teachers may change marks

<!-- Speaker note: Authorisation is what you may do once signed in. -->

---

<span style="background:#fef3c7; color:#1a1a1a; border:1.5px solid #f59e0b; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✍️ Activity</span>

## Make: a strong passphrase

Then: why should you never use the same password on two sites, even a strong one?

[Open this step](https://tutorials.learningwaypoints.com/systems/security/hashes-keys/?full=step-6#step-6)

<!-- Speaker note: What this step is for: Building a passphrase that meets a strength rule reverses the process: students start from what makes a hash hard to guess and make a password to match. Hints, in order: Use four or more words that don't go together. / Separate them with spaces or hyphens. / Aim for 20 characters or more. Don't use a real password here. -->

<!-- Speaker note: Teacher: remind students not to type a real password; it is a made-up passphrase. -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Exit ticket

**Why can't attackers read passwords from a list of hashes, and what can they still do? What does a salt stop?**

* A hash can't be reversed, but common passwords can be guessed: hash the guess, compare. A salt makes the same password hash differently for each person, so one guess no longer cracks everyone who chose it.

<!-- Speaker note: Students answer on paper or a mini whiteboard before the reveal. Anyone who cannot answer needs the main idea again next lesson. Where this leads: Next: Public and private keys (protecting data while it travels). -->
