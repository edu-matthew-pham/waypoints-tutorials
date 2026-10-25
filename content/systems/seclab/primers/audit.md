---
title: Auditing in 5 minutes
---
## The idea in plain words

`nmap -sV` asks each open service for its **version**. Old versions miss fixes for problems that are now public, so an old version is a **finding**. Some services are findings at any version: **telnet** sends everything, passwords included, as readable text, and **ssh** does the same job encrypted.

Every login attempt is written to `/var/log/auth.log`, which only an administrator can read (`sudo`). `grep Failed` shows failures and `grep -c` counts them. Many failures for one account from one address in a short time is **guessing**.

## Where to run it for real

On a real lab, the advisory sheet is a printed or offline list your teacher makes, since there is no internet. With internet, testers look versions up in a database of known problems. Read them to understand the risk; do not run what they describe.

## What students get wrong

- **A version is just a label.** It says which fixes are present.
- **Failed logins mean the defence worked.** A run of them is the warning.
- **New means safe.** Telnet is plain text at any version.

## The words

**version**, **finding**, **plain text**, **log**, **guessing**.
