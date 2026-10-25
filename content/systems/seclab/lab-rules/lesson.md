---
order: 1
unit: lab
node: AC9TDI10K01 n2
title: "The rules of the lab, and your first look"
summary: "Security testing is only legitimate on computers you own or have written permission to test. In the lab you meet Kali (a toolbox of security tools), the target computer, and the rules that keep the work safe. Everything you find is reported and fixed, never used."
language: maths
hook: "You are allowed to test one computer's security. How do you make sure you only touch that one?"
explainPicture: { ref: shell.yml#explain-pic, caption: "The lab rules on Kali: only the named target, never the school network, write down what you change, report what you find." }
---
This course teaches security the way a defender learns it: you look at a computer you are allowed to look at, find what is wrong, and fix it. The commands you need are few and are taught as you go: `ls` (list), `cat` (read a file), `ping` (is it there?), `ssh` (log in to another computer), `sudo` (run one command as the administrator) and `grep` (find lines). You do not need any earlier course.

## Predict: what comes first

```step
stage: predict
insight: "Committing to what must come before any test shows what the lab rules are for."
check:
  type: predict
  q: "You want to test how secure a computer is. What must be true before you run any tool against it?"
  options: ["You own it or have written permission, and the test is kept away from other networks", "You have found it on the school Wi-Fi", "It looks like it might be weak", "Nobody will notice"]
  actual: "You own it or have written permission, and the test is contained. Without that, even a harmless scan can be against the rules, and sometimes the law."
```

## Try: read the rules, find the target

```step
stage: run
insight: "Reading the rules and reaching the target settles what the lab allows."
try: { playground: board, starter: "shell.yml#run", height: 520 }
check: { type: board, text: "Read the lab rules with cat lab-rules.txt, then check that the target is there with ping target.", when: "ran_it = 1 and e = 0", explain: "cat lab-rules.txt shows the rules. ping target gets replies from 10.0.0.2: the one computer you may test." }
```

Was your prediction right?

## Worked example: Scope and permission

```step
stage: investigate
insight: "Following the method once, then finding where a plausible account goes wrong, models the new move."
tasks:
  - check:
      type: question
      q: "The lab sheet names one target, 10.0.0.2. Which of these may you scan?"
      options: ["10.0.0.2 only", "Any computer on the school network", "Your friend's laptop, if they say it is fine", "Any computer you can reach"]
      answer: 0
      feedback: [null, "Not on the sheet, not allowed.", "Only the owner (and the teacher, for the lab) may agree, and it has to be on the sheet.", "Being able to reach something is not permission."]
      explain: "Only what is named on the lab sheet. Scope is the list of what you are allowed to test."
  - check:
      type: bug
      code: "working.txt#sam"
      text: "Sam scans the school network. Click the line where it first goes wrong."
      answer: 2
      fault: logic
      misconception: scan-is-harmless
      explain: "Line 2: scanning computers you have no permission to test is the mistake, whether or not anything breaks. It can set off alarms, break rules and break laws. Permission comes first."
  - check:
      type: question
      q: "You find a weak setting on the target. What do you do with it?"
      options: ["Report it and fix it", "Use it to see how far you can get", "Keep it quiet", "Tell friends"]
      answer: 0
      feedback: [null, "Using it is exactly what this lab does not do.", "Hiding it leaves the computer open.", "Spreading it makes things worse."]
      explain: "The job of a security tester is to find, report and fix. Using a weakness is outside the lab."
```

### Scope and permission

```worked
\text{cat lab-rules.txt} :: read the rules first. They are the agreement.
\text{ip addr} :: which address is this Kali computer? 10.0.0.5.
\text{ping target} :: is the target there? Replies from 10.0.0.2.
\text{ssh admin@target} :: the lab's own account on the target, for fixing things later.
```

Now try it yourself.

### Find the mistake

### What you do with it

## Vary: change one thing

```step
stage: modify
insight: "Each task is one safe first look: your own address, the target's reply, and a scan you are not allowed to make."
try: { playground: board, starter: "shell.yml#v1", height: 520 }
tasks:
  - starter: "shell.yml#v1"
    check: { type: board, text: "Find out this Kali computer's own address with ip addr.", when: "ran_it = 1", explain: "ip addr: this computer is 10.0.0.5." }
  - starter: "shell.yml#v2"
    check: { type: board, text: "Check that the target replies: ping target.", when: "ran_it = 1 and e = 0", explain: "ping target replies from 10.0.0.2." }
  - starter: "shell.yml#v3"
    check: { type: board, text: "Try nmap 10.0.0.9, a computer that is not on the lab sheet. What happens?", when: "e = 1", explain: "The lab refuses: 10.0.0.9 is not on the lab sheet. On a real lab, nothing stops you, so the rule is yours to keep." }
```

### Your address

### Is it there?

### Out of scope

## Practise

```step
stage: practise
insight: "Judging what is in scope and why the lab is cut off is the same move in new forms."
tasks:
  - check:
      type: question
      q: "Why is the lab kept on its own switch, with no router?"
      options: ["So nothing you do can reach any other computer or network", "To make it faster", "Because Kali needs it", "To save power"]
      answer: 0
      feedback: [null, "Speed isn't the reason.", "Kali works anywhere.", "Not about power."]
      explain: "Containment: whatever happens in the lab stays in the lab."
  - check:
      type: question
      q: "Which is a good lab habit?"
      options: ["Write down every command and what you changed", "Delete your history", "Test things you are curious about", "Skip the rules if you are careful"]
      answer: 0
      feedback: [null, "A record is how you prove what you did.", "Curiosity does not make it allowed.", "The rules are not optional."]
      explain: "A log of what you did is part of the job, and is how the report is written."
  - check:
      type: question
      q: "Review: a service listens on a numbered 'door' on a computer. What is that number called?"
      options: ["A port", "A packet", "A password", "A path"]
      answer: 0
      feedback: [null, "A packet is a piece of a message.", "A password proves who you are.", "A path names a file."]
      explain: "Ports are the numbered doors: 22 for ssh, 80 for web pages."
```

### Why isolated

### Habits

### Review: ports

## Make: log in to the target

```step
stage: make
insight: "Reaching the target by the one allowed route is the whole move."
try: { playground: board, starter: "shell.yml#make", height: 520 }
hint: ["The lab sheet gives you one account on the target.", "ssh admin@target", "Then type hostname, and exit to come back."]
check: { type: board, text: "Log in to the target with ssh admin@target, run hostname to prove where you are, and stay logged in.", when: "on_pi = 1 and ran_it = 1", explain: "ssh admin@target joins you to the target as the lab's own account. hostname says target." }
```

Then type exit to go back to Kali. Next lesson: what is listening on the target.
