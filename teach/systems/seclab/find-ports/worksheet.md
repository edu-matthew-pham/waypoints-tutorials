---
title: "What is listening: finding open ports"
subtitle: "Security lab: audit a Pi with Kali · The lab · Lesson 2"
---

# What is listening: finding open ports

**Name:** {{field-24}} **Date:** {{field-15}} **Class:** {{field-15}}

> **Key question:** The target is plugged in. What is it offering to the network?


:::teacher-note

**In one sentence:** Every network service listens on a numbered port. A port scan asks each port whether anything answers, and lists what is open and what service is behind it. Open does not mean broken: it means something is listening. Whether that matters depends on what.

**Students should be able to say:** I can scan a target and read the list of open ports. I can say what a port and a service are. I can save a scan as evidence.

**Width:** the unmarked parts are the floor every student does (predict, run, investigate and make). Typical adds the modify practice; wider adds the real-world contexts. They add contexts, not difficulty. Students work in the online tutorial alongside this sheet.

:::


## Predict


:::keep-together

**You scan the target with nmap target. What does the scan list?**

☐ The passwords on the computer

☐ Which ports are open, and what service is behind each

☐ The names of its users

☐ The files on the computer

My prediction, and why:

{{lines-3}}

:::


:::teacher-note

**What happens:** Which ports are open and what service is behind each. A scan sees the doors, not what is inside.

:::


## Run

Try it on the board in the tutorial. Was your prediction right? What was different?

{{lines-2}}

## Worked example: Reading a scan


:::keep-together

### Reading a scan

1. $\text{nmap -sn 10.0.0.0/24}$ — which computers are on the lab network? (no ports yet)
2. $\text{nmap target}$ — which ports are open on the target?
3. $\text{nmap -p 22 target}$ — look only at port 22.
4. $\text{nmap target > scan1.txt}$ — save the scan: your evidence for the report.

Now try it yourself.

**The scan shows 23/tcp open telnet. What does that tell you?**

☐ Port 23 is closed

☐ A telnet service is listening on port 23

☐ Telnet is safe

☐ The computer has been broken into

:::


:::teacher-note

**Answer:** A telnet service is listening on port 23

Open means a service is listening. Whether that is a problem depends on the service.

:::


:::keep-together

### Find the mistake

**Sam reads the scan. Click the line where it first goes wrong.**

```
 1  Sam scans the target and sees ports 21, 22, 23 and 80 open.
 2  Sam says: open means the computer has been broken into.
 3  So Sam switches the target off at once.
 4  Sam says the lab is safe now.
```

Line: {{field-15}}

Why is it wrong?

{{lines-2}}

:::


:::teacher-note

**Answer:** line 2

Line 2: an open port only means something is listening, as a web server should. The question is whether each one is needed and safe.

:::


:::keep-together

### Which port

**Which port number is ssh, the way administrators log in?**

☐ 21

☐ 22

☐ 80

☐ 445

:::


:::teacher-note

**Answer:** 22

ssh is 22. Web is 80 (and 443 for secure web), ftp is 21, telnet is 23.

:::


:::typical

## Vary: change one thing


**One port.** 

**Who is here?.** 

**Scan yourself.** 

Work in the tutorial. Plan first: what will you change, and how will you test it?

{{box-4}}

:::


## Practise


:::keep-together

### Filtered

**A scan shows 22/tcp filtered instead of open. What does that mean?**

☐ ssh is not installed

☐ The scan failed

☐ Something is blocking the answer, usually a firewall

☐ The port is open

:::


:::teacher-note

**Answer:** Something is blocking the answer, usually a firewall

Filtered: a firewall is dropping the knock.

:::


:::keep-together

### The web port

**Which port would you expect a web server on?**

☐ 21

☐ 22

☐ 23

☐ 80

:::


:::teacher-note

**Answer:** 80

80 is plain web pages.

:::


:::keep-together

### Review: findings

**Review: you find a weakness on the target. What do you do?**

☐ Report it and fix it

☐ Hide it

☐ Tell friends

☐ Use it

:::


:::teacher-note

**Answer:** Report it and fix it

Find, report, fix.

:::


## Make: keep the evidence

Then: cat scan1.txt to check it saved. You will scan again after the fixes and compare.

Work in the tutorial. Plan first: what will you change, and how will you test it?

{{box-4}}

## Exit ticket

:::keep-together

**What does it mean when a scan says a port is open?**

{{lines-3}}

:::


:::teacher-note

**Answer:** A service is listening there. Whether that is a problem depends on the service.

:::

