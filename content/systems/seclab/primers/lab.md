---
title: The security lab in 5 minutes
---
## The idea in plain words

Security testing means looking for weaknesses in a computer so they can be fixed. It is only fair on a computer you **own or have written permission to test**, and only the ones named on the lab sheet. The lab is cut off from every other network (a switch, no router, no internet), so nothing you do can leak out.

**Kali** is a toolbox of security tools. The **target** is the computer you may test. A **port** is a numbered door on a computer (22 ssh, 80 web, 21 ftp, 23 telnet) and a **service** listens behind it. `nmap` scans the target and lists the open ports. Open only means something is listening.

## Where to run it for real

The board is a pretend Kali and a pretend target, safe anywhere. A real lab needs your teacher's sign-off: school policy and IT's agreement, a signed lab agreement, an isolated lab and a named target. This course stops at find, understand and fix.

## What students get wrong

- **A scan that breaks nothing is harmless.** Permission comes first.
- **Open means hacked.** It means listening.
- **Closed means safe.** Closed ports can still sit next to weak passwords.

## The words

**scope**, **permission**, **target**, **port**, **service**, **scan**, **finding**.
