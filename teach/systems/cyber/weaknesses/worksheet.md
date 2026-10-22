---
title: "Kinds of weakness"
subtitle: "Cyber safety and privacy · Secure the system · Lesson 6"
---

# Kinds of weakness

**Name:** {{field-24}} **Date:** {{field-15}} **Class:** {{field-15}}

> **Key question:** Three clubs' apps went wrong this year. One had a bug, one had a password on a sticky note, and one trusted a free add-on. Which was the club's fault?


:::teacher-note

**In one sentence:** Students sort incidents at fictional club apps into software, user and supply-chain weaknesses with the fix for each, then review the Coding Club's own app (AC9TDI10P13 node 2). Descriptive and defensive throughout. A 5E mission lesson.

**Students should be able to say:** I can describe software, user and supply-chain weaknesses. I can match each kind to a fix. I can spot each kind in a system before it goes wrong.

**Width:** the unmarked parts are the floor every student does (Engage, Explore, Explain, Evaluate). Typical and Wider sections add contexts, not difficulty. Students work in the online tutorial alongside this sheet.

:::


## Engage


:::keep-together

**A club's programmers test every line of their app's code and find no bugs. Is the app safe?**

☐ Not necessarily: people and the add-ons it relies on can still be weak

☐ Yes: no bugs means no way in

☐ Only if it has a padlock

☐ Yes, until it gets more members

My prediction, and why:

{{lines-3}}

:::


:::teacher-note

**What happens:** Not necessarily. A shared password or a bad add-on lets someone in however good the club's own code is.

:::


## Explore

Try it on the board in the tutorial. Was your prediction right? What was different?

{{lines-2}}

## Explain: three kinds

1. $\text{Software}$ — A flaw in the app's own code, such as never checking what is typed. Fix: test it and install updates.
2. $\text{User}$ — What people do: weak, shared or reused passwords, or being tricked. Fix: training, strong passwords, MFA.
3. $\text{Supply chain}$ — Something the app relies on (an add-on, a library) is out of date, taken over or a lookalike. Fix: check and update what you rely on.
4. $\text{why it matters}$ — Each kind is a different way in, so each needs its own fix.

### Find the mistake

:::keep-together

**Sam's team checks their app. Click the line where it first goes wrong.**

```
 1  Sam's team tests every part of the club app's code.
 2  They find no mistakes in it.
 3  So nobody can get into the app.
 4  So they don't need MFA, or to update the add-ons.
```

Line: {{field-15}}

Why is it wrong?

{{lines-2}}

:::


:::teacher-note

**Answer:** line 3

Line 3: their own code is only one kind of weakness. People and add-ons can still let someone in, so they still need MFA and updates.

:::


:::typical

## Elaborate: six incidents

:::


## Make: Elaborate: our own app


Work in the tutorial. Plan first: what will you change, and how will you test it?

{{box-4}}


:::typical

## Elaborate: an AI model is part of the supply chain

AI apps rely on **models** other people trained, often downloaded from model-sharing websites. Some model files can **run code when they're opened**. In 2024, researchers found about **100 malicious models** on one popular site: opening one could let an attacker run their own code on the computer.

So an AI model is part of the **supply chain**: treat a model file like a program. Use models from makers you trust, check them, and keep them up to date.

:::keep-together

**The club downloads a free AI model from a model-sharing website to sort members' photos. Opening the file quietly runs code that sends the photos somewhere else. What kind of weakness is it, and what's the fix?**

☐ Supply chain: only load models from makers you trust, and check them like any program

☐ Software: rewrite the club's own code

☐ None: AI models are just data

☐ User: tell members to stop uploading photos

:::


:::teacher-note

**Answer:** Supply chain: only load models from makers you trust, and check them like any program

A model file the app relies on is part of the supply chain. Security researchers found about 100 malicious models on one popular model-sharing site in 2024.

:::

:::


## Exit ticket

:::keep-together

**Name the three kinds of weakness with one fix for each.**

{{lines-3}}

:::


:::teacher-note

**Answer:** Software (test and update the code), user (training, strong passwords, MFA), supply chain (check and update what you rely on).

:::

