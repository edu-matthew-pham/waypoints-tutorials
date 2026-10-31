---
marp: true
theme: default
html: true
---

# What guessing looks like in the log

Security lab: audit a Pi with Kali · Audit

<!-- Speaker note: A computer records every login attempt. A long run of failures for one account from one address in a short time is someone guessing passwords. Reading the log is the defender's view of an attack, and the fix is to make guessing harder, not to hope it fails. About 40 minutes (Predict and Try 8 min · Worked example 10 min · Vary 10 min · Practise and Make 12 min). -->

---

## Today

- I can find failed and successful logins in auth.log.
- I can say what a guessing pattern looks like.
- I can name a defence that makes guessing pointless.

<!-- Speaker note: Before class: Try the boards yourselves. The gate (read first). This course teaches security as audit and defence: you scan, read and fix a lab computer your class owns. The pretend Kali and target in the lessons are safe anywhere. The real-lab version is different, so it needs your sign-off before anyone starts: school policy and IT's agreement, a written lab agreement every student signs (lab-rules.txt on the board is a model), and a lab that is cut off from every other network: a Pi running Kali and a second Pi or a virtual machine as the target, joined by one switch or one ethernet cable, with no router and no internet. Download the Kali image and any tools once, at home or at IT's request. Scan only the target named on the lab sheet. This course does not teach breaking into anything: it stops at find, understand and fix. It relaxes the 'defensive only' rule of the other courses only in that the real lab uses real scanning tools on a computer the class owns. Simplifications: the log on the board is made up for the lesson (14 failures from one address, one success). The pretend admin can read it with sudo; on a real Pi the first account can read it without. The addresses are private lab addresses. This lesson stays on the defender's side: it reads and counts, and does not teach how guessing is done. Real lab, if you run one: Kali Linux has a Raspberry Pi image (Pi 4 or Pi 5; the Pi 5 wants its 27 W supply); flash it with Raspberry Pi Imager or the Kali image instructions and boot it with a screen and keyboard, or ssh in. The target can be a second Pi (an older Raspberry Pi OS with a few extra services) or a purpose-made practice target your IT team approves. Start from the same state every time: re-flash, or snapshot a virtual machine. `nmap` is already on Kali. Give each pair a printed lab sheet naming the target's address, the one account they may use and what they are allowed to change. Other options: `fail2ban` blocks addresses automatically after repeated failures; `journalctl -u ssh` is the same story on systems that use the journal; a central log server keeps the record safe from the computer being attacked. With internet: a server on the open internet is guessed at within minutes, all day, by automated scanners. That is why exposing a server raises the stakes (see System admin on a Raspberry Pi). Teacher: Try: ask which user the failures target. Teacher: Worked example: stop at Sam and ask what the 'Accepted' line means a week later. Teacher: Vary: ask what the single success might be. -->

---

## Why it matters

> Someone has been trying the target's login. How do you tell, and how bad is it?

<!-- Speaker note: This is **authentication** (who are you?) from the defender's side. Every login attempt, good or bad, is written in `/var/log/auth.log`. Only an administrator can read it, so you log in to the target as the lab's `admin` account and use `sudo`. `grep` picks out lines, and `grep -c` counts them. -->

---

<span style="background:#dbeafe; color:#1a1a1a; border:1.5px solid #3b82f6; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">💬 Discussion</span>

## Think, pair, share

**Someone is trying to log in to the lab computer. How would you know?**

- Where would a computer write that down?
- What would a mistyped password look like next to guessing?

<!-- Speaker note: The log, and the pattern of failures. Give 30 seconds alone, 2 minutes in pairs, then take answers from both sides. There is no single right answer: ask for a reason, and let students change their minds. -->

---

<span style="background:#dbeafe; color:#1a1a1a; border:1.5px solid #3b82f6; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">💬 Discussion</span>

## Predict

**The log shows 14 'Failed password for root' lines in two minutes, all from 10.0.0.9. What does that most likely mean?**

- The computer is broken
- The root user forgot their password once
- Nothing: failed means safe
- Someone is guessing the root password

<!-- Speaker note: What happens: Someone is guessing passwords. One slip is normal; 14 in two minutes from one address is a pattern. Take two or three predictions before anyone runs it. -->

<!-- Speaker note: Teacher: wrong answers treat failure as success of the defence. -->

---

<span style="background:#fef3c7; color:#1a1a1a; border:1.5px solid #f59e0b; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✍️ Activity</span>

## Real or guessing <span style="font-size:.6em;color:#64748b">(5 min)</span>

Hand out six log lines. Students sort them: mistyped password, guessing, a normal login.

<!-- Speaker note: Rate, repetition and account tell the story. -->

---

<span style="background:#fef3c7; color:#1a1a1a; border:1.5px solid #f59e0b; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✍️ Activity</span>

## Try it

{{embed: https://tutorials.learningwaypoints.com/_playground-board/index.html?id=deck%2Fsystems%2Fseclab%2Flogs%2Fstep-2&code=widget%3A+shell%0Afs%3A+pi%0Alab%3A+on%0Alogin%3A+admin%0A&fresh=1}}

[Open this step in the tutorial](https://tutorials.learningwaypoints.com/systems/seclab/logs/?full=step-2#step-2)

<!-- Speaker note: Was your prediction right? -->

<style scoped>pre, marp-pre { font-size: 0.5em; line-height: 1.25; } section { font-size: 25px; }</style>

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## What happened?

* Someone is guessing passwords. One slip is normal; 14 in two minutes from one address is a pattern.

<!-- Speaker note: Reveal after running. Ask who predicted it, and what made them think so. -->

---

<span style="background:#dbeafe; color:#1a1a1a; border:1.5px solid #3b82f6; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">💬 Discussion</span>

## Counting and comparing

Now try it yourself.

$$\text{sudo grep Failed /var/log/auth.log}$$

1) $\text{sudo grep -c Failed /var/log/auth.log}$ — count them.
2) $\text{sudo grep Accepted /var/log/auth.log}$ — the logins that worked: who got in?
3) $\text{same account, same address, short time}$ — the shape of guessing.

<!-- Speaker note: Model this live on the board before revealing anything: write each line and say why, pausing to ask the class what comes next. Then click to reveal the lines and compare. Script. Start: write sudo grep Failed /var/log/auth.log and say "every failed login attempt." Line 1: write sudo grep -c Failed /var/log/auth.log and say "count them." Line 2: write sudo grep Accepted /var/log/auth.log and say "the logins that worked: who got in?" Line 3: write same account, same address, short time and say "the shape of guessing." -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Counting and comparing

**Which pair of facts makes a log pattern look like guessing?**

- Many failures, one account, one address, a short time
- A reboot
- One failure, then a success
- A success after a long gap

* Answer: Many failures, one account, one address, a short time

<!-- Speaker note: Volume, repetition and speed. Real users do not fail 14 times in two minutes. -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Find the mistake

**Sam reads the log. Click the line where it first goes wrong.**

```
 1  Sam reads the log: 14 failed password attempts for root in two minutes.
 2  Sam says: they all failed, so there is nothing to do.
 3  Sam closes the log and goes home.
 4  Next week Sam notices an Accepted line from the same address.
```

* Answer: line 2

<!-- Speaker note: Line 2: failures are the warning. Someone is trying, and guessing eventually works against weak passwords. Slow it down: stop root login, use keys, limit attempts. -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Slowing guessers

**Which change makes guessing a password hardest?**

- Hide the ssh port
- Rename the log
- Turn off password login and use keys, and block root login
- Ask people to try less

* Answer: Turn off password login and use keys, and block root login

<!-- Speaker note: No password to guess means nothing to guess. That is the next lesson's fix. -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Pattern

**Which is guessing?**

- 14 failures, one account, two minutes
- 1 failure then a success
- A login at 9am
- A reboot

* Answer: 14 failures, one account, two minutes

<!-- Speaker note: Volume, repetition and speed. Ask on mini whiteboards or by show of hands before the reveal. -->

---

<span style="background:#fef3c7; color:#1a1a1a; border:1.5px solid #f59e0b; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✍️ Activity</span>

## Vary: change one thing



- **How many failures?:** 
- **Who got in?:** 
- **Which account?:** 

[Open this step](https://tutorials.learningwaypoints.com/systems/seclab/logs/?full=step-4#step-4)

<!-- Speaker note: What this step is for: Each task changes one thing: the count, the successful logins, and the account being targeted. For students who need more support: A card of the three grep commands. For early finishers: Find out what fail2ban does and what it cannot protect against. The hard part, on purpose: Seeing the pattern rather than the lines. Ask what a real person who forgot a password looks like. When students get stuck: Permission denied reading the log. Ask: Did you use sudo? Fix: sudo grep ... /var/log/auth.log. / fails.txt is empty or missing. Ask: Where is your > ? Fix: sudo grep -c ... > fails.txt -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Why root

**Why do guessers try 'root' first?**

- Every Linux computer has it, and it can do everything
- It has no password
- It is the shortest name
- It is on the sheet

* Answer: Every Linux computer has it, and it can do everything

<!-- Speaker note: Everyone knows the name, and the account has every right. -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Slowing guessers

**Which of these slows a guesser down the most?**

- Rebooting every hour
- Limiting attempts and using long passwords or keys
- A louder log
- A shorter password

* Answer: Limiting attempts and using long passwords or keys

<!-- Speaker note: Make each guess expensive, or make guessing pointless with keys. -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Review: plain text

**Review: telnet shows version 2.0 (new). Is it a finding?**

- Only on Mondays
- Yes: it sends text in the clear
- No: it is new
- Only if old

* Answer: Yes: it sends text in the clear

<!-- Speaker note: Plain text at any version. -->

---

<span style="background:#fef3c7; color:#1a1a1a; border:1.5px solid #f59e0b; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✍️ Activity</span>

## Make: count and keep it

Then: cat fails.txt. In the next lesson you fix the login.

[Open this step](https://tutorials.learningwaypoints.com/systems/seclab/logs/?full=step-6#step-6)

<!-- Speaker note: What this step is for: Turning a log into a number for the report is the whole move. Hints, in order: You need the count of failures from 10.0.0.9. / sudo grep -c 10.0.0.9 /var/log/auth.log counts the lines. / Send it to a file with > fails.txt. -->

<!-- Speaker note: Teacher: ask what number the report should lead with. -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Exit ticket

**What pattern in a log says someone is guessing passwords?**

* Many failed logins for one account from one address in a short time.

<!-- Speaker note: Students answer on paper or a mini whiteboard before the reveal. Anyone who cannot answer needs the main idea again next lesson. Where this leads: Links: Security and privacy › Sign-in and permissions; Cyber safety and privacy › Passwords; next: Close the doors. -->
