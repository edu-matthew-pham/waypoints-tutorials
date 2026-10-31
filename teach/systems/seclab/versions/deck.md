---
marp: true
theme: default
html: true
---

# Old versions and plain text

Security lab: audit a Pi with Kali · Audit

<!-- Speaker note: A scan can also ask each service for its version. Old versions have known problems that have since been fixed, so an old version is a finding. Some services are risky however new they are: telnet sends everything, including passwords, as readable text. About 40 minutes (Predict and Try 8 min · Worked example 10 min · Vary 10 min · Practise and Make 12 min). -->

---

## Today

- I can read service versions from a scan.
- I can say why an old version is a finding.
- I can say why some services are risky at any version.

<!-- Speaker note: Before class: Try the boards yourselves. The gate (read first). This course teaches security as audit and defence: you scan, read and fix a lab computer your class owns. The pretend Kali and target in the lessons are safe anywhere. The real-lab version is different, so it needs your sign-off before anyone starts: school policy and IT's agreement, a written lab agreement every student signs (lab-rules.txt on the board is a model), and a lab that is cut off from every other network: a Pi running Kali and a second Pi or a virtual machine as the target, joined by one switch or one ethernet cable, with no router and no internet. Download the Kali image and any tools once, at home or at IT's request. Scan only the target named on the lab sheet. This course does not teach breaking into anything: it stops at find, understand and fix. It relaxes the 'defensive only' rule of the other courses only in that the real lab uses real scanning tools on a computer the class owns. Simplifications: the versions and the advisory sheet are made up for the lab (they describe real kinds of old, not real exploits). A real audit looks versions up in a vulnerability database, with the internet, and checks whether a fix has been 'backported' (distributions often patch an old number). The board does not teach how to use any weakness, and this course does not either. Real lab, if you run one: Kali Linux has a Raspberry Pi image (Pi 4 or Pi 5; the Pi 5 wants its 27 W supply); flash it with Raspberry Pi Imager or the Kali image instructions and boot it with a screen and keyboard, or ssh in. The target can be a second Pi (an older Raspberry Pi OS with a few extra services) or a purpose-made practice target your IT team approves. Start from the same state every time: re-flash, or snapshot a virtual machine. `nmap` is already on Kali. Give each pair a printed lab sheet naming the target's address, the one account they may use and what they are allowed to change. Other options: `searchsploit` and online databases catalogue known problems: for the report, read them to understand the risk, and do not run what they list. Teacher: Try: ask which services the class thinks are old. Teacher: Worked example: stop at Sam and ask what a fixed problem is. Teacher: Vary: ask why the sheet is offline. -->

---

## Why it matters

> Two web servers both show port 80 open. Which one should worry you?

<!-- Speaker note: Programs get fixed as people find problems in them. The version number tells you which fixes a service has. The lab's advisory sheet (an offline copy your teacher made) lists which versions are old, because the lab has no internet to look them up. Some services are a problem whatever their version, because of how they work. -->

---

<span style="background:#dbeafe; color:#1a1a1a; border:1.5px solid #3b82f6; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">💬 Discussion</span>

## Think, pair, share

**Two doors look the same. How do you tell which lock is weaker?**

- What does the lock's age tell you?
- Does a new lock always protect?

<!-- Speaker note: Versions say which fixes are missing; some designs are weak anyway. Give 30 seconds alone, 2 minutes in pairs, then take answers from both sides. There is no single right answer: ask for a reason, and let students change their minds. -->

---

<span style="background:#dbeafe; color:#1a1a1a; border:1.5px solid #3b82f6; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">💬 Discussion</span>

## Predict

**One server says Apache 2.4.18 and another says Apache 2.4.62, both on port 80. Which is more likely to have known problems?**

- Both are the same
- Neither, a version is just a name
- 2.4.62: newer programs have more bugs
- 2.4.18: the older version is missing years of fixes

<!-- Speaker note: What happens: 2.4.18. Each newer version fixes problems found since. An old version is a finding, because the problems it has are public. Take two or three predictions before anyone runs it. -->

<!-- Speaker note: Teacher: wrong answers treat the version as a label. -->

---

<span style="background:#dbeafe; color:#1a1a1a; border:1.5px solid #3b82f6; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">💬 Discussion</span>

## Old lock, new lock <span style="font-size:.6em;color:#64748b">(4 min)</span>

Show an old padlock and a new one. Which would you trust? Now a door with no lock at all but a 'private' sign (telnet).

<!-- Speaker note: Design matters as well as age. -->

---

<span style="background:#fef3c7; color:#1a1a1a; border:1.5px solid #f59e0b; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✍️ Activity</span>

## Try it

{{embed: https://tutorials.learningwaypoints.com/_playground-board/index.html?id=deck%2Fsystems%2Fseclab%2Fversions%2Fstep-2&code=widget%3A+shell%0Afs%3A+kali%0Aran%3A+nmap%0A&fresh=1}}

[Open this step in the tutorial](https://tutorials.learningwaypoints.com/systems/seclab/versions/?full=step-2#step-2)

<!-- Speaker note: Was your prediction right? -->

<style scoped>pre, marp-pre { font-size: 0.5em; line-height: 1.25; } section { font-size: 25px; }</style>

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## What happened?

* 2.4.18. Each newer version fixes problems found since. An old version is a finding, because the problems it has are public.

<!-- Speaker note: Reveal after running. Ask who predicted it, and what made them think so. -->

---

<span style="background:#dbeafe; color:#1a1a1a; border:1.5px solid #3b82f6; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">💬 Discussion</span>

## Reading versions against the sheet

Now try it yourself.

$$\text{nmap -sV target}$$

1) $\text{cat advisories.txt}$ — the lab's offline list of old versions.
2) $\text{OpenSSH 7.2p2}$ — below 8.0 on the sheet: a finding.
3) $\text{telnet}$ — a finding whatever its version: it is not encrypted.

<!-- Speaker note: Model this live on the board before revealing anything: write each line and say why, pausing to ask the class what comes next. Then click to reveal the lines and compare. Script. Start: write nmap -sV target and say "scan and ask each service for its version." Line 1: write cat advisories.txt and say "the lab's offline list of old versions." Line 2: write OpenSSH 7.2p2 and say "below 8.0 on the sheet: a finding." Line 3: write telnet and say "a finding whatever its version: it is not encrypted." -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Reading versions against the sheet

**The lab has no internet. Where do you check whether OpenSSH 7.2p2 is old?**

- Guess
- The lab's advisory sheet (cat advisories.txt)
- Ask the target
- A search engine

* Answer: The lab's advisory sheet (cat advisories.txt)

<!-- Speaker note: The advisory sheet is an offline list your teacher made. Real testers look versions up, with the internet, in a database of known problems. -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Find the mistake

**Sam reads a version. Click the line where it first goes wrong.**

```
 1  Sam scans with -sV and reads: OpenSSH 7.2p2.
 2  Sam says the version is just a number and it cannot matter.
 3  So Sam leaves it as it is.
 4  Sam writes 'no findings' in the report.
```

* Answer: line 2

<!-- Speaker note: Line 2: the version says which fixes are present. The advisory sheet says 7.2 is below 8.0, so it is a finding. -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Plain text

**Telnet's version is new. Why is it still a finding?**

- It is not on the sheet
- It is too fast
- It uses too much memory
- It sends everything, including passwords, as readable text

* Answer: It sends everything, including passwords, as readable text

<!-- Speaker note: Anyone watching the network can read a telnet session. ssh does the same job, encrypted. -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Version

**Why is OpenSSH 7.2 a finding?**

- It misses fixes found since
- It is slow
- It is too new
- It is not installed

* Answer: It misses fixes found since

<!-- Speaker note: Older versions have public problems. Ask on mini whiteboards or by show of hands before the reveal. -->

---

<span style="background:#fef3c7; color:#1a1a1a; border:1.5px solid #f59e0b; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✍️ Activity</span>

## Vary: change one thing



- **The sheet:** 
- **One service:** 
- **Evidence:** 

[Open this step](https://tutorials.learningwaypoints.com/systems/seclab/versions/?full=step-4#step-4)

<!-- Speaker note: What this step is for: Each task changes one thing: read the sheet, scan one service's version, and save the evidence. For students who need more support: The advisory sheet next to the scan. For early finishers: Find out what a CVE is and why vulnerability databases give each problem a number. The hard part, on purpose: Treating versions as trivia. Ask: what fixes does this one not have? When students get stuck: A student says telnet is fine because it is new. Ask: Can someone watching the network read it? Fix: Plain text is a finding at any version. / The findings file is missing a line. Ask: Did you use > on every line? Fix: > replaces the file; >> adds a line. -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Compare

**The advisory sheet says 'below 3.0: old' for vsftpd. The scan shows vsftpd 2.0.8. What is it?**

- A finding: it is old
- Unknown
- Fine
- Too new

* Answer: A finding: it is old

<!-- Speaker note: Below the listed version means old. -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Plain text

**Why can't you fix an insecure protocol like telnet just by updating it?**

- It is not installed
- Updates are not available
- The problem is how it works: everything is readable text
- It is too small

* Answer: The problem is how it works: everything is readable text

<!-- Speaker note: Replace it with ssh. No version of telnet encrypts. -->

<style scoped>pre, marp-pre { font-size: 0.5em; line-height: 1.25; } section { font-size: 27px; }</style>

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Review: filtered

**Review: a port shows 'filtered'. What does that mean?**

- ssh is off
- The service is old
- The port is open
- A firewall is blocking the answer

* Answer: A firewall is blocking the answer

<!-- Speaker note: Filtered: the knock gets no answer. -->

---

<span style="background:#fef3c7; color:#1a1a1a; border:1.5px solid #f59e0b; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✍️ Activity</span>

## Make: write the findings

Then: cat findings.txt to check it. Next: what an attack on the login looks like in the log.

[Open this step](https://tutorials.learningwaypoints.com/systems/seclab/versions/?full=step-6#step-6)

<!-- Speaker note: What this step is for: Turning scan results into findings is the whole move: what is wrong, and why. Hints, in order: One line per finding in a file called findings.txt. / echo "OpenSSH 7.2p2 is old" > findings.txt, then use >> for more lines. / Four findings: OpenSSH, vsftpd, Apache and telnet. -->

<!-- Speaker note: Teacher: ask what a reader needs from each finding line. -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Exit ticket

**Why is an old version a finding?**

* It is missing fixes for problems that are public by now.

<!-- Speaker note: Students answer on paper or a mini whiteboard before the reveal. Anyone who cannot answer needs the main idea again next lesson. Where this leads: Links: Security and privacy; Secret messages (what encryption is for); next: What guessing looks like. -->
