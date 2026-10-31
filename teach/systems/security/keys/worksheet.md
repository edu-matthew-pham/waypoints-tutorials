---
title: "Public and private keys"
subtitle: "Security and privacy · How systems are kept safe · Lesson 5"
---

# Public and private keys

**Name:** {{field-24}} **Date:** {{field-15}} **Class:** {{field-15}}

> **Key question:** Your browser has never met the online shop's server, yet it sends your card number safely across café Wi-Fi. How do two strangers share a secret in public?


:::teacher-note

**In one sentence:** Students send a message past an eavesdropper locked with Alice's public padlock, see why Bob's own padlock and no padlock both fail, then sort hashes from public key encryption and explain how HTTPS starts (AC9TDI10K01 node 4, second half; Hashes and salt is the first).

**Students should be able to say:** I can explain how a public key and a private key work together. I can say which key to lock a secret with. I can explain how a browser and a site that have never met share a secret.

**Width:** the unmarked parts are the floor every student does (predict, run, investigate and make). Typical adds the modify practice; wider adds the real-world contexts. They add contexts, not difficulty. Students work in the online tutorial alongside this sheet.

:::


## Predict


:::keep-together

**Bob wants to send Alice a secret. They've never met, and everything they send can be copied by Eve. A shared key, like a shift cipher's, would have to be sent first. What can Alice do?**

☐ Nothing: strangers can't share a secret

☐ Send Bob the key first

☐ Use a longer shift so Eve can't guess it

☐ Hand out open padlocks to anyone: Bob snaps one shut, and only Alice has the key

My prediction, and why:

{{lines-3}}

:::


:::teacher-note

**What happens:** Hand out open padlocks. Anyone, Eve included, can have one, because a padlock only locks. The only key that opens it never leaves Alice.

:::


## Run

Try it on the board in the tutorial. Was your prediction right? What was different?

{{lines-2}}

## Worked example: two keys, two jobs


:::keep-together

### Lock, send, open

1. $\text{public key} = \text{open padlock}$ — Alice gives it to anyone. It can only lock.
2. $\text{Bob locks with Alice's public key}$ — The box crosses the café Wi-Fi. Eve copies it.
3. $\text{Eve: box, padlock, no key}$ — She can't open it. Copying isn't reading.
4. $\text{private key} = \text{the only key}$ — It never leaves Alice. Only she opens the box.
5. $\text{HTTPS}$ — Your browser locks a fresh shared key with the site's public key; then both use that shared key for the rest.

Now: who can open it?

**Alice has given out hundreds of open padlocks. Who can open a box Bob locks with one?**

☐ Only Alice, with her private key

☐ Anyone with one of Alice's padlocks

☐ Eve, if she copies the box

☐ Bob

:::


:::teacher-note

**Answer:** Only Alice, with her private key

The public key only locks. The private key, which never leaves Alice, is the only thing that opens.

:::


:::keep-together

### Find the mistake

**Sam sends Alice a secret. Click the line where it first goes wrong.**

```
 1  Sam wants to send Alice a secret.
 2  Sam has his own padlock and its key.
 3  Sam locks the box with his own padlock, so it is safe.
 4  Alice can open it when it arrives.
```

Line: {{field-15}}

Why is it wrong?

{{lines-2}}

:::


:::teacher-note

**Answer:** line 3

Line 3: locked with Sam's own padlock, only Sam's key opens it, and that key is with Sam. Lock with the receiver's public key.

:::


:::keep-together

### Eve's padlock

**Why doesn't it matter that Eve has one of Alice's padlocks?**

☐ It does matter: Eve can read everything

☐ Alice changes her padlock every day

☐ Eve's padlock is a fake

☐ A padlock can only lock; she still can't open anything

:::


:::teacher-note

**Answer:** A padlock can only lock; she still can't open anything

That's why the public key can be public. Only the private key has to stay secret.

:::


:::typical

## Vary: one change at a time


**Bob's own padlock.** 

**No padlock.** 

**A leaked private key.** 

Work in the tutorial. Plan first: what will you change, and how will you test it?

{{box-4}}

:::


## Which key?


:::keep-together

### Which key?

**Which key do you use to send someone a secret?**

☐ Your private key

☐ No key

☐ Their public key

☐ Their private key

:::


:::teacher-note

**Answer:** Their public key

Lock with the receiver's public key; only their private key opens it.

:::


:::keep-together

### The browser's padlock

**A browser shows a padlock beside a shop's address. What does it promise?**

☐ The site can't be hacked

☐ The shop is honest

☐ What you send is encrypted on the way to that site

☐ Your password is stored as a hash

:::


:::teacher-note

**Answer:** What you send is encrypted on the way to that site

The padlock is about data in transit: nobody on the way can read it. It doesn't vouch for the site.

:::


:::keep-together

### Hash or encryption?

**Which tool fits? Sort each one.**

Groups: A hash, Public key encryption, Neither

- A site keeps your password so it can check it next time: {{field-15}}
- Your card number on its way to an online shop: {{field-15}}
- Checking a downloaded app is exactly the file its maker published: {{field-15}}
- A private message to a friend across the internet: {{field-15}}
- A news headline anyone can read: {{field-15}}

:::


:::teacher-note

**Answer:** A site keeps your password so it can check it next time → A hash; Your card number on its way to an online shop → Public key encryption; Checking a downloaded app is exactly the file its maker published → A hash; A private message to a friend across the internet → Public key encryption; A news headline anyone can read → Neither

Stored and only checked: a hash. Travelling and read again: public key encryption. A hash is not encryption: it can't be undone, even with a key.

:::


## Make: explain HTTPS

Then: why does it matter that the padlock is the shop's, and not one Eve handed you? (Ask your teacher about certificates.)

Work in the tutorial. Plan first: what will you change, and how will you test it?

{{box-4}}

## Exit ticket

:::keep-together

**Which key locks a message for Alice, and why can it be public?**

{{lines-3}}

:::


:::teacher-note

**Answer:** Alice's public key. It can only lock; only her private key, which never leaves her, opens it.

:::

