---
marp: true
theme: default
html: true
---

# What is listening: finding open ports

Security lab: audit a Pi with Kali · The lab

<!-- Speaker note: Every network service listens on a numbered port. A port scan asks each port whether anything answers, and lists what is open and what service is behind it. Open does not mean broken: it means something is listening. Whether that matters depends on what. About 40 minutes (Predict and Try 8 min · Worked example 10 min · Vary 10 min · Practise and Make 12 min). -->

---

## Today

- I can scan a target and read the list of open ports.
- I can say what a port and a service are.
- I can save a scan as evidence.

<!-- Speaker note: Before class: Try the boards yourself. The gate (read first). This course teaches security as audit and defence: you scan, read and fix a lab computer your class owns. The pretend Kali and target in the lessons are safe anywhere. The real-lab version is different, so it needs your sign-off before anyone starts: school policy and IT's agreement, a written lab agreement every student signs (lab-rules.txt on the board is a model), and a lab that is cut off from every other network: a Pi running Kali and a second Pi or a virtual machine as the target, joined by one switch or one ethernet cable, with no router and no internet. Download the Kali image and any tools once, at home or at IT's request. Scan only the target named on the lab sheet. This course does not teach breaking into anything: it stops at find, understand and fix. It relaxes the 'defensive only' rule of the other courses only in that the real lab uses real scanning tools on a computer the class owns. Simplifications: the pretend nmap supports `-sn`, `-sV` (next lesson) and `-p`, and scans only the target, Kali itself and the lab range. It shows `open` and `filtered` only. A real nmap has many more options and is very noisy on a real network: that is why the lab is isolated. Real lab, if you run one: Kali Linux has a Raspberry Pi image (Pi 4 or Pi 5; the Pi 5 wants its 27 W supply); flash it with Raspberry Pi Imager or the Kali image instructions and boot it with a screen and keyboard, or ssh in. The target can be a second Pi (an older Raspberry Pi OS with a few extra services) or a purpose-made practice target your IT team approves. Start from the same state every time: re-flash, or snapshot a virtual machine. `nmap` is already on Kali. Give each pair a printed lab sheet naming the target's address, the one account they may use and what they are allowed to change. Other options: `netstat` or `ss -tln` (run on the target) list its own open ports, the defender's view of the same thing; masscan and others scan faster, with the same permission rules. Teacher: Try: ask which ports and services the class found. Teacher: Worked example: stop at Sam's mistake and ask what open means. Teacher: Vary: ask why Kali has nothing open. -->

---

## Why it matters

> The target is plugged in. What is it offering to the network?

<!-- Speaker note: A computer can run many services at once, and each listens on its own **port**, a numbered door. Port 22 is ssh, 80 is web pages, 21 is ftp and 23 is telnet. A **port scan** knocks on each door and records which ones open. `nmap` is the standard tool. This is the same idea as *Names and addresses* in Security and privacy: the address finds the computer, the port picks the service. -->

---

<span style="background:#dbeafe; color:#1a1a1a; border:1.5px solid #3b82f6; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">💬 Discussion</span>

## Think, pair, share

**A computer is plugged into the network. What is it offering?**

- How would you find out without logging in?
- What does 'open' tell you?

<!-- Speaker note: Which doors are open. Give 30 seconds alone, 2 minutes in pairs, then take answers from both sides. There is no single right answer: ask for a reason, and let students change their minds. -->

---

<span style="background:#dbeafe; color:#1a1a1a; border:1.5px solid #3b82f6; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">💬 Discussion</span>

## Predict

**You scan the target with nmap target. What does the scan list?**

- The passwords on the computer
- Which ports are open, and what service is behind each
- The names of its users
- The files on the computer

<!-- Speaker note: What happens: Which ports are open and what service is behind each. A scan sees the doors, not what is inside. Take two or three predictions before anyone runs it. -->

<!-- Speaker note: Teacher: wrong answers think a scan sees inside. -->

---

<span style="background:#fef3c7; color:#1a1a1a; border:1.5px solid #f59e0b; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✍️ Activity</span>

## Doors <span style="font-size:.6em;color:#64748b">(5 min)</span>

Draw a building with four doors labelled 21, 22, 23, 80. Students mark which doors are needed and which could be locked.

<!-- Speaker note: Needed depends on the job. -->

---

<span style="background:#fef3c7; color:#1a1a1a; border:1.5px solid #f59e0b; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✍️ Activity</span>

## Try it

{{embed: https://tutorials.learningwaypoints.com/_playground-board/index.html?id=deck%2Fsystems%2Fseclab%2Ffind-ports%2Fstep-2&code=widget%3A+shell%0Afs%3A+kali%0Aran%3A+nmap%0A&fresh=1}}

[Open this step in the tutorial](https://tutorials.learningwaypoints.com/systems/seclab/find-ports/?full=step-2#step-2)

<!-- Speaker note: Was your prediction right? -->

<style scoped>pre, marp-pre { font-size: 0.5em; line-height: 1.25; } section { font-size: 25px; }</style>

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## What happened?

* Which ports are open and what service is behind each. A scan sees the doors, not what is inside.

<!-- Speaker note: Reveal after running. Ask who predicted it, and what made them think so. -->

---

<span style="background:#dbeafe; color:#1a1a1a; border:1.5px solid #3b82f6; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">💬 Discussion</span>

## Reading a scan

Now try it yourself.

$$\text{nmap -sn 10.0.0.0/24}$$

1) $\text{nmap target}$ — which ports are open on the target?
2) $\text{nmap -p 22 target}$ — look only at port 22.
3) $\text{nmap target > scan1.txt}$ — save the scan: your evidence for the report.

<!-- Speaker note: Model this live on the board before revealing anything: write each line and say why, pausing to ask the class what comes next. Then click to reveal the lines and compare. Script. Start: write nmap -sn 10.0.0.0/24 and say "which computers are on the lab network? (no ports yet)." Line 1: write nmap target and say "which ports are open on the target?" Line 2: write nmap -p 22 target and say "look only at port 22." Line 3: write nmap target > scan1.txt and say "save the scan: your evidence for the report." -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Reading a scan

**The scan shows 23/tcp open telnet. What does that tell you?**

- Port 23 is closed
- A telnet service is listening on port 23
- Telnet is safe
- The computer has been broken into

* Answer: A telnet service is listening on port 23

<!-- Speaker note: Open means a service is listening. Whether that is a problem depends on the service. -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Find the mistake

**Sam reads the scan. Click the line where it first goes wrong.**

```
 1  Sam scans the target and sees ports 21, 22, 23 and 80 open.
 2  Sam says: open means the computer has been broken into.
 3  So Sam switches the target off at once.
 4  Sam says the lab is safe now.
```

* Answer: line 2

<!-- Speaker note: Line 2: an open port only means something is listening, as a web server should. The question is whether each one is needed and safe. -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Which port

**Which port number is ssh, the way administrators log in?**

- 21
- 22
- 80
- 445

* Answer: 22

<!-- Speaker note: ssh is 22. Web is 80 (and 443 for secure web), ftp is 21, telnet is 23. -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Open

**A port is open. That means...**

- A service is listening
- The computer is hacked
- It is safe
- It is broken

* Answer: A service is listening

<!-- Speaker note: Open is only 'listening'. Ask on mini whiteboards or by show of hands before the reveal. -->

---

<span style="background:#fef3c7; color:#1a1a1a; border:1.5px solid #f59e0b; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✍️ Activity</span>

## Vary: change one thing



- **One port:** 
- **Who is here?:** 
- **Scan yourself:** 

[Open this step](https://tutorials.learningwaypoints.com/systems/seclab/find-ports/?full=step-4#step-4)

<!-- Speaker note: What this step is for: Each task changes one thing: one port, the whole lab network, and Kali itself. For students who need more support: A card of ports: 21 ftp, 22 ssh, 23 telnet, 80 web. For early finishers: Find out what the 1000 'most common ports' are and why a default scan only checks those. The hard part, on purpose: Open versus broken. Students expect red alarms; a scan only reports what is listening. When students get stuck: A student's nmap says 'not on the lab sheet'. Ask: Which address did you scan? Fix: Only target or 10.0.0.2. / A student thinks open ports mean a break-in. Ask: What is a web server doing? Fix: Listening on 80 on purpose. -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Filtered

**A scan shows 22/tcp filtered instead of open. What does that mean?**

- ssh is not installed
- The scan failed
- Something is blocking the answer, usually a firewall
- The port is open

* Answer: Something is blocking the answer, usually a firewall

<!-- Speaker note: Filtered: a firewall is dropping the knock. -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## The web port

**Which port would you expect a web server on?**

- 21
- 22
- 23
- 80

* Answer: 80

<!-- Speaker note: 80 is plain web pages. -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Review: findings

**Review: you find a weakness on the target. What do you do?**

- Report it and fix it
- Hide it
- Tell friends
- Use it

* Answer: Report it and fix it

<!-- Speaker note: Find, report, fix. -->

---

<span style="background:#fef3c7; color:#1a1a1a; border:1.5px solid #f59e0b; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✍️ Activity</span>

## Make: keep the evidence

Then: cat scan1.txt to check it saved. You will scan again after the fixes and compare.

[Open this step](https://tutorials.learningwaypoints.com/systems/seclab/find-ports/?full=step-6#step-6)

<!-- Speaker note: What this step is for: Saving a scan as evidence is the whole move: you cannot report what you did not record. Hints, in order: A scan prints to the screen. How do you keep it? / Use > after a command to save its output in a file. / nmap target > scan1.txt -->

<!-- Speaker note: Teacher: ask what a report is without evidence. -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Exit ticket

**What does it mean when a scan says a port is open?**

* A service is listening there. Whether that is a problem depends on the service.

<!-- Speaker note: Students answer on paper or a mini whiteboard before the reveal. Anyone who cannot answer needs the main idea again next lesson. Where this leads: Links: Security and privacy › Names and addresses; Networks; next: Old versions and plain text. -->
