---
marp: true
theme: default
html: true
---

# The rules of the lab, and your first look

Security lab: audit a Pi with Kali · The lab

<!-- Speaker note: Security testing is only legitimate on computers you own or have written permission to test. In the lab you meet Kali (a toolbox of security tools), the target computer, and the rules that keep the work safe. Everything you find is reported and fixed, never used. About 40 minutes (Predict and Try 8 min · Worked example 10 min · Vary 10 min · Practise and Make 12 min). -->

---

## Today

- I can say what must be true before any security test.
- I can find the lab's target and reach it.
- I can say what to do with a weakness I find.

<!-- Speaker note: Before class: Try the boards yourself. The gate (read first). This course teaches security as audit and defence: you scan, read and fix a lab computer your class owns. The pretend Kali and target in the lessons are safe anywhere. The real-lab version is different, so it needs your sign-off before anyone starts: school policy and IT's agreement, a written lab agreement every student signs (lab-rules.txt on the board is a model), and a lab that is cut off from every other network: a Pi running Kali and a second Pi or a virtual machine as the target, joined by one switch or one ethernet cable, with no router and no internet. Download the Kali image and any tools once, at home or at IT's request. Scan only the target named on the lab sheet. This course does not teach breaking into anything: it stops at find, understand and fix. It relaxes the 'defensive only' rule of the other courses only in that the real lab uses real scanning tools on a computer the class owns. Simplifications: the pretend Kali refuses a scan of anything but the target and itself, so a student can't scan off-sheet by accident on the board. A real Kali will not, so the rule has to live in the lab agreement and in you. The pretend `ssh` always accepts the password. Real lab, if you run one: Kali Linux has a Raspberry Pi image (Pi 4 or Pi 5; the Pi 5 wants its 27 W supply); flash it with Raspberry Pi Imager or the Kali image instructions and boot it with a screen and keyboard, or ssh in. The target can be a second Pi (an older Raspberry Pi OS with a few extra services) or a purpose-made practice target your IT team approves. Start from the same state every time: re-flash, or snapshot a virtual machine. `nmap` is already on Kali. Give each pair a printed lab sheet naming the target's address, the one account they may use and what they are allowed to change. Other options: Parrot OS is a similar security distribution; for a no-hardware route, use the pretend lab here or a virtual machine on a teacher's computer. Teacher: Try: ask what the rules file said first. Teacher: Worked example: stop at Sam's mistake and ask what 'harmless' means. Teacher: Vary: ask why the pretend lab refuses the off-sheet scan, and what refuses on a real one. -->

---

## Why it matters

> You are allowed to test one computer's security. How do you make sure you only touch that one?

<!-- Speaker note: This course teaches security the way a defender learns it: you look at a computer you are allowed to look at, find what is wrong, and fix it. The commands you need are few and are taught as you go: `ls` (list), `cat` (read a file), `ping` (is it there?), `ssh` (log in to another computer), `sudo` (run one command as the administrator) and `grep` (find lines). You do not need any earlier course. -->

---

<span style="background:#dbeafe; color:#1a1a1a; border:1.5px solid #3b82f6; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">💬 Discussion</span>

## Think, pair, share

**You are allowed to test one computer. How do you make sure you only touch that one?**

- Who decides what is in scope?
- What would you put in writing?

<!-- Speaker note: Permission, a named target, and a contained lab. Give 30 seconds alone, 2 minutes in pairs, then take answers from both sides. There is no single right answer: ask for a reason, and let students change their minds. -->

---

<span style="background:#dbeafe; color:#1a1a1a; border:1.5px solid #3b82f6; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">💬 Discussion</span>

## Predict

**You want to test how secure a computer is. What must be true before you run any tool against it?**

- You have found it on the school Wi-Fi
- It looks like it might be weak
- Nobody will notice
- You own it or have written permission, and the test is kept away from other networks

<!-- Speaker note: What happens: You own it or have written permission, and the test is contained. Without that, even a harmless scan can be against the rules, and sometimes the law. Take two or three predictions before anyone runs it. -->

<!-- Speaker note: Teacher: ask what makes a test legitimate. -->

---

<span style="background:#dbeafe; color:#1a1a1a; border:1.5px solid #3b82f6; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">💬 Discussion</span>

## Is it in scope? <span style="font-size:.6em;color:#64748b">(5 min)</span>

Read out five computers (the lab target, the school server, a friend's laptop, a classroom Pi, your own phone). Students stand for in scope, sit for not.

<!-- Speaker note: Only what is named on the sheet and owned by the school or student. -->

---

<span style="background:#fef3c7; color:#1a1a1a; border:1.5px solid #f59e0b; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✍️ Activity</span>

## Try it

{{embed: https://tutorials.learningwaypoints.com/_playground-board/index.html?id=deck%2Fsystems%2Fseclab%2Flab-rules%2Fstep-2&code=widget%3A+shell%0Afs%3A+kali%0Aran%3A+cat+ping%0A&fresh=1}}

[Open this step in the tutorial](https://tutorials.learningwaypoints.com/systems/seclab/lab-rules/?full=step-2#step-2)

<!-- Speaker note: Was your prediction right? -->

<style scoped>pre, marp-pre { font-size: 0.5em; line-height: 1.25; } section { font-size: 25px; }</style>

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## What happened?

* You own it or have written permission, and the test is contained. Without that, even a harmless scan can be against the rules, and sometimes the law.

<!-- Speaker note: Reveal after running. Ask who predicted it, and what made them think so. -->

---

<span style="background:#dbeafe; color:#1a1a1a; border:1.5px solid #3b82f6; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">💬 Discussion</span>

## Scope and permission

Now try it yourself.

$$\text{cat lab-rules.txt}$$

1) $\text{ip addr}$ — which address is this Kali computer? 10.0.0.5.
2) $\text{ping target}$ — is the target there? Replies from 10.0.0.2.
3) $\text{ssh admin@target}$ — the lab's own account on the target, for fixing things later.

<!-- Speaker note: Model this live on the board before revealing anything: write each line and say why, pausing to ask the class what comes next. Then click to reveal the lines and compare. Script. Start: write cat lab-rules.txt and say "read the rules first. They are the agreement." Line 1: write ip addr and say "which address is this Kali computer? 10.0.0.5." Line 2: write ping target and say "is the target there? Replies from 10.0.0.2." Line 3: write ssh admin@target and say "the lab's own account on the target, for fixing things later." -->

<style scoped>pre, marp-pre { font-size: 0.5em; line-height: 1.25; } section { font-size: 27px; }</style>

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Scope and permission

**The lab sheet names one target, 10.0.0.2. Which of these may you scan?**

- Any computer you can reach
- 10.0.0.2 only
- Any computer on the school network
- Your friend's laptop, if they say it is fine

* Answer: 10.0.0.2 only

<!-- Speaker note: Only what is named on the lab sheet. Scope is the list of what you are allowed to test. -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Find the mistake

**Sam scans the school network. Click the line where it first goes wrong.**

```
 1  Sam is curious which computers are on the school Wi-Fi.
 2  Sam runs a port scan on the school network.
 3  Nothing breaks and nobody complains.
 4  So scanning without asking is fine.
```

* Answer: line 2

<!-- Speaker note: Line 2: scanning computers you have no permission to test is the mistake, whether or not anything breaks. It can set off alarms, break rules and break laws. Permission comes first. -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## What you do with it

**You find a weak setting on the target. What do you do with it?**

- Report it and fix it
- Tell friends
- Use it to see how far you can get
- Keep it quiet

* Answer: Report it and fix it

<!-- Speaker note: The job of a security tester is to find, report and fix. Using a weakness is outside the lab. -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Scope

**The sheet says 10.0.0.2. A scan of 10.0.0.9 is...**

- Out of scope
- Fine, it is nearby
- Fine if nothing breaks
- Fine if you are quick

* Answer: Out of scope

<!-- Speaker note: Scope is exactly what is on the sheet. Ask on mini whiteboards or by show of hands before the reveal. -->

---

<span style="background:#fef3c7; color:#1a1a1a; border:1.5px solid #f59e0b; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✍️ Activity</span>

## Vary: change one thing



- **Your address:** 
- **Is it there?:** 
- **Out of scope:** 

[Open this step](https://tutorials.learningwaypoints.com/systems/seclab/lab-rules/?full=step-4#step-4)

<!-- Speaker note: What this step is for: Each task is one safe first look: your own address, the target's reply, and a scan you are not allowed to make. For students who need more support: A card with the rules and the one target address. For early finishers: Write a one-page lab agreement for your own class: scope, permission, what happens to findings. The hard part, on purpose: Seeing why permission matters when the test is 'harmless'. Use the locked-door idea: trying doors without permission is the problem, not what you do next. When students get stuck: A student wants to try the tools on their own network at home. Ask: Who owns that network, and has everyone on it agreed? Fix: Only the lab. Keep to the sheet. / A student's ping fails. Ask: Which name did you use? Fix: ping target, or ping 10.0.0.2. -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Why isolated

**Why is the lab kept on its own switch, with no router?**

- So nothing you do can reach any other computer or network
- Because Kali needs it
- To make it faster
- To save power

* Answer: So nothing you do can reach any other computer or network

<!-- Speaker note: Containment: whatever happens in the lab stays in the lab. -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Habits

**Which is a good lab habit?**

- Test things you are curious about
- Delete your history
- Skip the rules if you are careful
- Write down every command and what you changed

* Answer: Write down every command and what you changed

<!-- Speaker note: A log of what you did is part of the job, and is how the report is written. -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Review: ports

**Review: a service listens on a numbered 'door' on a computer. What is that number called?**

- A password
- A packet
- A path
- A port

* Answer: A port

<!-- Speaker note: Ports are the numbered doors: 22 for ssh, 80 for web pages. -->

---

<span style="background:#fef3c7; color:#1a1a1a; border:1.5px solid #f59e0b; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✍️ Activity</span>

## Make: log in to the target

Then type exit to go back to Kali. Next lesson: what is listening on the target.

[Open this step](https://tutorials.learningwaypoints.com/systems/seclab/lab-rules/?full=step-6#step-6)

<!-- Speaker note: What this step is for: Reaching the target by the one allowed route is the whole move. Hints, in order: The lab sheet gives you one account on the target. / ssh admin@target / Then type hostname, and exit to come back. -->

<!-- Speaker note: Teacher: ask what the lab agreement should say. -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Exit ticket

**What two things must be true before you test a computer's security?**

* You own it or have written permission, and the test is contained to the lab.

<!-- Speaker note: Students answer on paper or a mini whiteboard before the reveal. Anyone who cannot answer needs the main idea again next lesson. Where this leads: Links: Security and privacy, Cyber safety and privacy (threat models); next: What is listening. -->
