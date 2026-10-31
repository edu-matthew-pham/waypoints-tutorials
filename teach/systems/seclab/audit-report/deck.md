---
marp: true
theme: default
html: true
---

# Challenge: audit, fix and prove it

Security lab: audit a Pi with Kali · Audit

<!-- Speaker note: A real audit is a cycle: scan to find, fix, then scan again to prove the fix worked, and write down what you did. Your report is the before and after scans, each finding with its fix, and an honest note on what a scan cannot see. About 40 minutes (Predict and Try 8 min · Worked example 10 min · Vary 10 min · Practise and Make 12 min). -->

---

## Today

- I can run the audit cycle: scan, fix, scan again.
- I can say what a scan can and cannot show.
- I can report findings honestly, with their limits.

<!-- Speaker note: Before class: Try the board yourself; it is the longest Make in the course. The gate (read first). This course teaches security as audit and defence: you scan, read and fix a lab computer your class owns. The pretend Kali and target in the lessons are safe anywhere. The real-lab version is different, so it needs your sign-off before anyone starts: school policy and IT's agreement, a written lab agreement every student signs (lab-rules.txt on the board is a model), and a lab that is cut off from every other network: a Pi running Kali and a second Pi or a virtual machine as the target, joined by one switch or one ethernet cable, with no router and no internet. Download the Kali image and any tools once, at home or at IT's request. Scan only the target named on the lab sheet. This course does not teach breaking into anything: it stops at find, understand and fix. It relaxes the 'defensive only' rule of the other courses only in that the real lab uses real scanning tools on a computer the class owns. The one idea: security work is a cycle with evidence, and an honest report names what it did not check. Simplifications: the pretend target has four findings. A real target would also have weak passwords, loose file permissions and web problems that need different tools: say so, and do not go there in this course. Real lab, if you run one: Kali Linux has a Raspberry Pi image (Pi 4 or Pi 5; the Pi 5 wants its 27 W supply); flash it with Raspberry Pi Imager or the Kali image instructions and boot it with a screen and keyboard, or ssh in. The target can be a second Pi (an older Raspberry Pi OS with a few extra services) or a purpose-made practice target your IT team approves. Start from the same state every time: re-flash, or snapshot a virtual machine. `nmap` is already on Kali. Give each pair a printed lab sheet naming the target's address, the one account they may use and what they are allowed to change. Assessment: the project brief (`audit-report`) turns the cycle into a hand-in; check that the 'does not protect against' column is honest and that the before and after scans really differ. Beyond this course: if a student wants to go further (exploitation, web testing), treat it as a separate, closely supervised extension with its own sign-off, a contained lab and your school's agreement. A good next step that stays defensive is to set up the target themselves in System admin on a Raspberry Pi, then audit it here. Teacher: Try: ask what the before scan is for. Teacher: Worked example: stop at Sam and ask what a reboot would have done. Teacher: Vary: ask who could check the evidence. -->

---

## Why it matters

> You say the target is safer now. How do you prove it?

<!-- Speaker note: This is the whole course in one job. You scan from Kali and save the result, log in to the target as `admin` to fix it, log out, and scan again. The two saved scans are your evidence. A scan only sees open doors and versions, so your report also says what it cannot see (weak passwords, bad permissions, what is inside the files). -->

---

<span style="background:#dbeafe; color:#1a1a1a; border:1.5px solid #3b82f6; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">💬 Discussion</span>

## Think, pair, share

**You say it is secure now. What would convince someone else?**

- What evidence would you show?
- What did you not test?

<!-- Speaker note: Before and after evidence, and honest limits. Give 30 seconds alone, 2 minutes in pairs, then take answers from both sides. There is no single right answer: ask for a reason, and let students change their minds. -->

---

<span style="background:#dbeafe; color:#1a1a1a; border:1.5px solid #3b82f6; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">💬 Discussion</span>

## Predict

**You have fixed the target. How do you know the fixes worked?**

- Ask the target
- Trust that the commands ran
- Reboot and hope
- Scan again and compare with the first scan

<!-- Speaker note: What happens: Scan again and compare. Commands can fail quietly or be undone; the second scan is the evidence. Take two or three predictions before anyone runs it. -->

<!-- Speaker note: Teacher: wrong answers trust the commands. -->

---

<span style="background:#dbeafe; color:#1a1a1a; border:1.5px solid #3b82f6; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">💬 Discussion</span>

## Prove it <span style="font-size:.6em;color:#64748b">(5 min)</span>

Pairs swap their claims ('all fixed') and ask each other for the evidence.

<!-- Speaker note: Evidence beats claims. -->

---

<span style="background:#fef3c7; color:#1a1a1a; border:1.5px solid #f59e0b; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✍️ Activity</span>

## Try it

{{embed: https://tutorials.learningwaypoints.com/_playground-board/index.html?id=deck%2Fsystems%2Fseclab%2Faudit-report%2Fstep-2&code=widget%3A+shell%0Afs%3A+kali%0Aexists%3A+%2Fhome%2Fkali%2Fbefore.txt%0Aran%3A+nmap%0A&fresh=1}}

[Open this step in the tutorial](https://tutorials.learningwaypoints.com/systems/seclab/audit-report/?full=step-2#step-2)

<!-- Speaker note: Was your prediction right? -->

<style scoped>pre, marp-pre { font-size: 0.5em; line-height: 1.25; } section { font-size: 25px; }</style>

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## What happened?

* Scan again and compare. Commands can fail quietly or be undone; the second scan is the evidence.

<!-- Speaker note: Reveal after running. Ask who predicted it, and what made them think so. -->

---

<span style="background:#dbeafe; color:#1a1a1a; border:1.5px solid #3b82f6; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">💬 Discussion</span>

## The audit cycle

Now try it yourself.

$$\text{nmap -sV target > before.txt}$$

1) $\text{ssh admin@target}$ — log in to fix it (the one allowed account).
2) $\text{fixes}$ — stop, upgrade, tighten, filter. Write each down.
3) $\text{nmap -sV target > after.txt}$ — evidence that the fixes worked.

<!-- Speaker note: Model this live on the board before revealing anything: write each line and say why, pausing to ask the class what comes next. Then click to reveal the lines and compare. Script. Start: write nmap -sV target > before.txt and say "evidence of the problem." Line 1: write ssh admin@target and say "log in to fix it (the one allowed account)." Line 2: write fixes and say "stop, upgrade, tighten, filter. Write each down." Line 3: write nmap -sV target > after.txt and say "evidence that the fixes worked." -->

<style scoped>pre, marp-pre { font-size: 0.5em; line-height: 1.25; } section { font-size: 27px; }</style>

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## The audit cycle

**Which of these is NOT something a port scan can show you?**

- Which ports are open
- Which ports a firewall filters
- Which versions are running
- Whether a user's password is weak

* Answer: Whether a user's password is weak

<!-- Speaker note: A scan sees doors and versions, not passwords or permissions or file contents. A clean scan is not a clean bill of health. -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Find the mistake

**Sam hands in a report. Click the line where it first goes wrong.**

```
 1  Sam fixes the target and writes 'all fixed' in the report.
 2  Sam does not scan again.
 3  The report goes to the teacher.
 4  The teacher scans: port 23 is open again after a reboot.
```

* Answer: line 2

<!-- Speaker note: Line 2: without a second scan there is no proof, and the reboot brought telnet back because it was stopped but not disabled. Scan again, and scan after a reboot. -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## What a scan misses

**Your after-scan shows nothing wrong. What should the report still say?**

- Nothing more
- That scans are useless
- That the computer is perfectly secure
- What the scan could not see, such as weak passwords and file permissions

* Answer: What the scan could not see, such as weak passwords and file permissions

<!-- Speaker note: An honest report names its limits. Absence of findings is not proof of safety. -->

<style scoped>pre, marp-pre { font-size: 0.5em; line-height: 1.25; } section { font-size: 25px; }</style>

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Evidence

**Which is the strongest evidence?**

- A second scan after the fixes
- I ran the commands
- It looks fine
- I trust it

* Answer: A second scan after the fixes

<!-- Speaker note: Compare scans. Ask on mini whiteboards or by show of hands before the reveal. -->

---

<span style="background:#fef3c7; color:#1a1a1a; border:1.5px solid #f59e0b; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✍️ Activity</span>

## Vary: change one thing



- **Before:** 
- **Fix:** 
- **After:** 

[Open this step](https://tutorials.learningwaypoints.com/systems/seclab/audit-report/?full=step-4#step-4)

<!-- Speaker note: What this step is for: Each task is one stage of the audit: before, fix, after. For students who need more support: A checklist: before scan, four fixes, restart, after scan. For early finishers: Add one fix that a scan cannot check, such as turning on automatic updates, and say how you would test it. The hard part, on purpose: Wanting to say 'secure'. The report says 'these findings are fixed; these things were not tested'. When students get stuck: The after scan still shows an old version. Ask: Did you run apt update first? Fix: sudo apt update, then sudo apt upgrade. / ssh still shows password login. Ask: Did you restart ssh? Fix: sudo systemctl restart ssh. -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Two scans

**Why keep both scans, before and after?**

- Comparing them proves what changed
- To confuse the reader
- Because nmap needs two
- To fill the report

* Answer: Comparing them proves what changed

<!-- Speaker note: The difference between them is the result. -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## What it proves

**What does a clean after-scan prove?**

- That passwords are strong
- That the computer is secure
- Only that no open doors or old versions are showing
- That the files are private

* Answer: Only that no open doors or old versions are showing

<!-- Speaker note: Clean on its own list; silent on everything else. -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Review: logs

**Review: the log shows 14 failed root logins. Which fix goes in the report?**

- Rename the account
- Ignore it
- Delete the log
- No root login and no password login over ssh

* Answer: No root login and no password login over ssh

<!-- Speaker note: Make guessing pointless. -->

---

<span style="background:#fef3c7; color:#1a1a1a; border:1.5px solid #f59e0b; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✍️ Activity</span>

## Make: audit, fix and prove it

Then write your report: each finding, its fix, what the fix does not protect, and what the scan cannot see. That is the project brief.

[Open this step](https://tutorials.learningwaypoints.com/systems/seclab/audit-report/?full=step-6#step-6)

<!-- Speaker note: What this step is for: Running the whole cycle on your own is the challenge. Hints, in order: Before, fix, after: three stages. / nmap -sV target > before.txt. Then ssh admin@target and apply the four fixes. Then exit. / nmap -sV target > after.txt. -->

<!-- Speaker note: Teacher: ask what is not tested. -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Exit ticket

**Name one thing a port scan cannot tell you.**

* Any of: whether passwords are strong, what the file permissions are, what is inside the files.

<!-- Speaker note: Students answer on paper or a mini whiteboard before the reveal. Anyone who cannot answer needs the main idea again next lesson. Where this leads: Links: Security and privacy (finale); Cyber safety and privacy (threat models); System admin on a Raspberry Pi. Beyond this course, legal hosted practice: picoCTF (Carnegie Mellon, free for school students) and PECAN+ (pecanplus.org, run by Edith Cowan University for Australian students in Years 10 to 12; free, with practice challenges at practice.pecanplus.org and a yearly event, the 2026 one already held). Check each one's account and age requirements, and your school's policy, before recommending it. -->
