---
title: "The rules of the lab, and your first look"
subtitle: "Security lab: audit a Pi with Kali · The lab · Lesson 1"
---

# The rules of the lab, and your first look

**Name:** {{field-24}} **Date:** {{field-15}} **Class:** {{field-15}}

> **Key question:** You are allowed to test one computer's security. How do you make sure you only touch that one?


:::teacher-note

**In one sentence:** Security testing is only legitimate on computers you own or have written permission to test. In the lab you meet Kali (a toolbox of security tools), the target computer, and the rules that keep the work safe. Everything you find is reported and fixed, never used.

**Students should be able to say:** I can say what must be true before any security test. I can find the lab's target and reach it. I can say what to do with a weakness I find.

**Width:** the unmarked parts are the floor every student does (predict, run, investigate and make). Typical adds the modify practice; wider adds the real-world contexts. They add contexts, not difficulty. Students work in the online tutorial alongside this sheet.

:::


## Predict


:::keep-together

**You want to test how secure a computer is. What must be true before you run any tool against it?**

☐ You have found it on the school Wi-Fi

☐ It looks like it might be weak

☐ Nobody will notice

☐ You own it or have written permission, and the test is kept away from other networks

My prediction, and why:

{{lines-3}}

:::


:::teacher-note

**What happens:** You own it or have written permission, and the test is contained. Without that, even a harmless scan can be against the rules, and sometimes the law.

:::


## Run

Try it on the board in the tutorial. Was your prediction right? What was different?

{{lines-2}}

## Worked example: Scope and permission


:::keep-together

### Scope and permission

1. $\text{cat lab-rules.txt}$ — read the rules first. They are the agreement.
2. $\text{ip addr}$ — which address is this Kali computer? 10.0.0.5.
3. $\text{ping target}$ — is the target there? Replies from 10.0.0.2.
4. $\text{ssh admin@target}$ — the lab's own account on the target, for fixing things later.

Now try it yourself.

**The lab sheet names one target, 10.0.0.2. Which of these may you scan?**

☐ Any computer you can reach

☐ 10.0.0.2 only

☐ Any computer on the school network

☐ Your friend's laptop, if they say it is fine

:::


:::teacher-note

**Answer:** 10.0.0.2 only

Only what is named on the lab sheet. Scope is the list of what you are allowed to test.

:::


:::keep-together

### Find the mistake

**Sam scans the school network. Click the line where it first goes wrong.**

```
 1  Sam is curious which computers are on the school Wi-Fi.
 2  Sam runs a port scan on the school network.
 3  Nothing breaks and nobody complains.
 4  So scanning without asking is fine.
```

Line: {{field-15}}

Why is it wrong?

{{lines-2}}

:::


:::teacher-note

**Answer:** line 2

Line 2: scanning computers you have no permission to test is the mistake, whether or not anything breaks. It can set off alarms, break rules and break laws. Permission comes first.

:::


:::keep-together

### What you do with it

**You find a weak setting on the target. What do you do with it?**

☐ Report it and fix it

☐ Tell friends

☐ Use it to see how far you can get

☐ Keep it quiet

:::


:::teacher-note

**Answer:** Report it and fix it

The job of a security tester is to find, report and fix. Using a weakness is outside the lab.

:::


:::typical

## Vary: change one thing


**Your address.** 

**Is it there?.** 

**Out of scope.** 

Work in the tutorial. Plan first: what will you change, and how will you test it?

{{box-4}}

:::


## Practise


:::keep-together

### Why isolated

**Why is the lab kept on its own switch, with no router?**

☐ So nothing you do can reach any other computer or network

☐ Because Kali needs it

☐ To make it faster

☐ To save power

:::


:::teacher-note

**Answer:** So nothing you do can reach any other computer or network

Containment: whatever happens in the lab stays in the lab.

:::


:::keep-together

### Habits

**Which is a good lab habit?**

☐ Test things you are curious about

☐ Delete your history

☐ Skip the rules if you are careful

☐ Write down every command and what you changed

:::


:::teacher-note

**Answer:** Write down every command and what you changed

A log of what you did is part of the job, and is how the report is written.

:::


:::keep-together

### Review: ports

**Review: a service listens on a numbered 'door' on a computer. What is that number called?**

☐ A password

☐ A packet

☐ A path

☐ A port

:::


:::teacher-note

**Answer:** A port

Ports are the numbered doors: 22 for ssh, 80 for web pages.

:::


## Make: log in to the target

Then type exit to go back to Kali. Next lesson: what is listening on the target.

Work in the tutorial. Plan first: what will you change, and how will you test it?

{{box-4}}

## Exit ticket

:::keep-together

**What two things must be true before you test a computer's security?**

{{lines-3}}

:::


:::teacher-note

**Answer:** You own it or have written permission, and the test is contained to the lab.

:::

