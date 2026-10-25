---
order: 4
unit: audit
node: AC9TDI10K01 n3
title: "What guessing looks like in the log"
summary: "A computer records every login attempt. A long run of failures for one account from one address in a short time is someone guessing passwords. Reading the log is the defender's view of an attack, and the fix is to make guessing harder, not to hope it fails."
language: maths
hook: "Someone has been trying the target's login. How do you tell, and how bad is it?"
explainPicture: { ref: shell.yml#explain-pic, caption: "On the target, grep -c counts the failed login lines in auth.log: 14 in a short run, all from one address." }
---
This is **authentication** (who are you?) from the defender's side. Every login attempt, good or bad, is written in `/var/log/auth.log`. Only an administrator can read it, so you log in to the target as the lab's `admin` account and use `sudo`. `grep` picks out lines, and `grep -c` counts them.

## Predict: a run of failures

```step
stage: predict
insight: "Committing to what a pattern in the log means tests the new move: patterns, not single lines, carry the story."
check:
  type: predict
  q: "The log shows 14 'Failed password for root' lines in two minutes, all from 10.0.0.9. What does that most likely mean?"
  options: ["Someone is guessing the root password", "The root user forgot their password once", "The computer is broken", "Nothing: failed means safe"]
  actual: "Someone is guessing passwords. One slip is normal; 14 in two minutes from one address is a pattern."
```

## Try: read the log as the admin

```step
stage: run
insight: "Reading the log settles the prediction."
try: { playground: board, starter: "shell.yml#run", height: 520 }
check: { type: board, text: "You are on the target as admin. Find the failed logins: sudo grep Failed /var/log/auth.log.", when: "g = 1 and e = 0", explain: "sudo is needed to read the log. grep Failed prints only the failed attempts." }
```

Was your prediction right?

## Worked example: Counting and comparing

```step
stage: investigate
insight: "Following the method once, then finding where a plausible account goes wrong, models the new move."
tasks:
  - check:
      type: question
      q: "Which pair of facts makes a log pattern look like guessing?"
      options: ["Many failures, one account, one address, a short time", "One failure, then a success", "A success after a long gap", "A reboot"]
      answer: 0
      feedback: [null, "That is an ordinary mistyped password.", "Nothing unusual.", "A reboot is not a login."]
      explain: "Volume, repetition and speed. Real users do not fail 14 times in two minutes."
  - check:
      type: bug
      code: "working.txt#sam"
      text: "Sam reads the log. Click the line where it first goes wrong."
      answer: 2
      fault: logic
      misconception: failed-is-fine
      explain: "Line 2: failures are the warning. Someone is trying, and guessing eventually works against weak passwords. Slow it down: stop root login, use keys, limit attempts."
  - check:
      type: question
      q: "Which change makes guessing a password hardest?"
      options: ["Turn off password login and use keys, and block root login", "Ask people to try less", "Hide the ssh port", "Rename the log"]
      answer: 0
      feedback: [null, "Not a control.", "Hiding does not protect (permissions do).", "The log is a record, not a lock."]
      explain: "No password to guess means nothing to guess. That is the next lesson's fix."
```

### Counting and comparing

```worked
\text{sudo grep Failed /var/log/auth.log} :: every failed login attempt.
\text{sudo grep -c Failed /var/log/auth.log} :: count them.
\text{sudo grep Accepted /var/log/auth.log} :: the logins that worked: who got in?
\text{same account, same address, short time} :: the shape of guessing.
```

Now try it yourself.

### Find the mistake

### Slowing guessers

## Vary: change one thing

```step
stage: modify
insight: "Each task changes one thing: the count, the successful logins, and the account being targeted."
try: { playground: board, starter: "shell.yml#v1", height: 520 }
tasks:
  - starter: "shell.yml#v1"
    check: { type: board, text: "Count the failed logins: sudo grep -c Failed /var/log/auth.log.", when: "o = 14", explain: "14 failed attempts." }
  - starter: "shell.yml#v2"
    check: { type: board, text: "Find the logins that worked: sudo grep Accepted /var/log/auth.log.", when: "l = 1 and g = 1", explain: "One login worked, by admin from 10.0.0.7." }
  - starter: "shell.yml#v3"
    check: { type: board, text: "Count only the failures for root: sudo grep -c \"Failed password for root\" /var/log/auth.log.", when: "o = 11", explain: "11 of the 14 were guesses at root, the account every computer has." }
```

### How many failures?

### Who got in?

### Which account?

## Practise

```step
stage: practise
insight: "Reading patterns and choosing defences is the same move in new forms, plus a review of versions."
tasks:
  - check:
      type: question
      q: "Why do guessers try 'root' first?"
      options: ["Every Linux computer has it, and it can do everything", "It is the shortest name", "It has no password", "It is on the sheet"]
      answer: 0
      feedback: [null, "Length is not the point.", "It has a password, but it is the biggest prize.", "Not related."]
      explain: "Everyone knows the name, and the account has every right."
  - check:
      type: question
      q: "Which of these slows a guesser down the most?"
      options: ["Limiting attempts and using long passwords or keys", "A shorter password", "A louder log", "Rebooting every hour"]
      answer: 0
      feedback: [null, "Shorter is easier to guess.", "A log records; it does not stop.", "Rebooting does not help."]
      explain: "Make each guess expensive, or make guessing pointless with keys."
  - check:
      type: question
      q: "Review: telnet shows version 2.0 (new). Is it a finding?"
      options: ["Yes: it sends text in the clear", "No: it is new", "Only if old", "Only on Mondays"]
      answer: 0
      feedback: [null, "New does not fix the design.", "Age is not the issue.", "Not related."]
      explain: "Plain text at any version."
```

### Why root

### Slowing guessers

### Review: plain text

## Make: count and keep it

```step
stage: make
insight: "Turning a log into a number for the report is the whole move."
try: { playground: board, starter: "shell.yml#make", height: 520 }
hint: ["You need the count of failures from 10.0.0.9.", "sudo grep -c 10.0.0.9 /var/log/auth.log counts the lines.", "Send it to a file with > fails.txt."]
check: { type: board, text: "Save the number of log lines from 10.0.0.9 into a file called fails.txt in your home folder.", when: "conf_has = 1", explain: "sudo grep -c 10.0.0.9 /var/log/auth.log > fails.txt. The > is yours, the grep is sudo's: the file lives in your own folder so it works." }
```

Then: cat fails.txt. In the next lesson you fix the login.
