---
title: "What guessing looks like in the log"
subtitle: "Security lab: audit a Pi with Kali · Audit · Lesson 4"
---

# What guessing looks like in the log

**Name:** {{field-24}} **Date:** {{field-15}} **Class:** {{field-15}}

> **Key question:** Someone has been trying the target's login. How do you tell, and how bad is it?


:::teacher-note

**In one sentence:** A computer records every login attempt. A long run of failures for one account from one address in a short time is someone guessing passwords. Reading the log is the defender's view of an attack, and the fix is to make guessing harder, not to hope it fails.

**Students should be able to say:** I can find failed and successful logins in auth.log. I can say what a guessing pattern looks like. I can name a defence that makes guessing pointless.

**Width:** the unmarked parts are the floor every student does (predict, run, investigate and make). Typical adds the modify practice; wider adds the real-world contexts. They add contexts, not difficulty. Students work in the online tutorial alongside this sheet.

:::


## Predict


:::keep-together

**The log shows 14 'Failed password for root' lines in two minutes, all from 10.0.0.9. What does that most likely mean?**

☐ The computer is broken

☐ The root user forgot their password once

☐ Nothing: failed means safe

☐ Someone is guessing the root password

My prediction, and why:

{{lines-3}}

:::


:::teacher-note

**What happens:** Someone is guessing passwords. One slip is normal; 14 in two minutes from one address is a pattern.

:::


## Run

Try it on the board in the tutorial. Was your prediction right? What was different?

{{lines-2}}

## Worked example: Counting and comparing


:::keep-together

### Counting and comparing

1. $\text{sudo grep Failed /var/log/auth.log}$ — every failed login attempt.
2. $\text{sudo grep -c Failed /var/log/auth.log}$ — count them.
3. $\text{sudo grep Accepted /var/log/auth.log}$ — the logins that worked: who got in?
4. $\text{same account, same address, short time}$ — the shape of guessing.

Now try it yourself.

**Which pair of facts makes a log pattern look like guessing?**

☐ One failure, then a success

☐ A success after a long gap

☐ A reboot in the middle of the night

☐ Many fails, one account, one address, fast

:::


:::teacher-note

**Answer:** Many fails, one account, one address, fast

Volume, repetition and speed. Real users do not fail 14 times in two minutes.

:::


:::keep-together

### Find the mistake

**Sam reads the log. Click the line where it first goes wrong.**

```
 1  Sam reads the log: 14 failed password attempts for root in two minutes.
 2  Sam says: they all failed, so there is nothing to do.
 3  Sam closes the log and goes home.
 4  Next week Sam notices an Accepted line from the same address.
```

Line: {{field-15}}

Why is it wrong?

{{lines-2}}

:::


:::teacher-note

**Answer:** line 2

Line 2: failures are the warning. Someone is trying, and guessing eventually works against weak passwords. Slow it down: stop root login, use keys, limit attempts.

:::


:::keep-together

### Slowing guessers

**Which change makes guessing a password hardest?**

☐ Ask users to type more carefully

☐ Use keys instead of passwords, and block root

☐ Hide ssh on an unusual port

☐ Rename the log file

:::


:::teacher-note

**Answer:** Use keys instead of passwords, and block root

Turn off password login, use keys, and block root login. No password to guess means nothing to guess. That is the next lesson's fix.

:::


:::typical

## Vary: change one thing


**How many failures?.** 

**Who got in?.** 

**Which account?.** 

Work in the tutorial. Plan first: what will you change, and how will you test it?

{{box-4}}

:::


## Practise


:::keep-together

### Why root

**Why do guessers try 'root' first?**

☐ It has no password by default

☐ It is the shortest name to type

☐ Every Linux has it, and it can do everything

☐ It is the only account ssh allows

:::


:::teacher-note

**Answer:** Every Linux has it, and it can do everything

Everyone knows the name, and the account has every right.

:::


:::keep-together

### Slowing guessers

**Which of these slows a guesser down the most?**

☐ Rebooting the server every hour

☐ Logging every attempt in more detail

☐ A shorter password

☐ Limit attempts and use keys or long passwords

:::


:::teacher-note

**Answer:** Limit attempts and use keys or long passwords

Make each guess expensive, or make guessing pointless with keys.

:::


:::keep-together

### Review: plain text

**Review: telnet shows version 2.0 (new). Is it a finding?**

☐ Only if it is old

☐ Only if someone logs in with it

☐ Yes: it sends text in the clear

☐ No: it is new

:::


:::teacher-note

**Answer:** Yes: it sends text in the clear

Plain text at any version.

:::


## Make: count and keep it

Then: cat fails.txt. In the next lesson you fix the login.

Work in the tutorial. Plan first: what will you change, and how will you test it?

{{box-4}}

## Exit ticket

:::keep-together

**What pattern in a log says someone is guessing passwords?**

{{lines-3}}

:::


:::teacher-note

**Answer:** Many failed logins for one account from one address in a short time.

:::

