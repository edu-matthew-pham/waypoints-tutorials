---
title: "Challenge: audit, fix and prove it"
subtitle: "Security lab: audit a Pi with Kali · Audit · Lesson 6"
---

# Challenge: audit, fix and prove it

**Name:** {{field-24}} **Date:** {{field-15}} **Class:** {{field-15}}

> **Key question:** You say the target is safer now. How do you prove it?


:::teacher-note

**In one sentence:** A real audit is a cycle: scan to find, fix, then scan again to prove the fix worked, and write down what you did. Your report is the before and after scans, each finding with its fix, and an honest note on what a scan cannot see.

**Students should be able to say:** I can run the audit cycle: scan, fix, scan again. I can say what a scan can and cannot show. I can report findings honestly, with their limits.

**Width:** the unmarked parts are the floor every student does (predict, run, investigate and make). Typical adds the modify practice; wider adds the real-world contexts. They add contexts, not difficulty. Students work in the online tutorial alongside this sheet.

:::


## Predict


:::keep-together

**You have fixed the target. How do you know the fixes worked?**

☐ Ask the target

☐ Trust that the commands ran

☐ Reboot and hope

☐ Scan again and compare with the first scan

My prediction, and why:

{{lines-3}}

:::


:::teacher-note

**What happens:** Scan again and compare. Commands can fail quietly or be undone; the second scan is the evidence.

:::


## Run

Try it on the board in the tutorial. Was your prediction right? What was different?

{{lines-2}}

## Worked example: The audit cycle


:::keep-together

### The audit cycle

1. $\text{nmap -sV target > before.txt}$ — evidence of the problem.
2. $\text{ssh admin@target}$ — log in to fix it (the one allowed account).
3. $\text{fixes}$ — stop, upgrade, tighten, filter. Write each down.
4. $\text{nmap -sV target > after.txt}$ — evidence that the fixes worked.

Now try it yourself.

**Which of these is NOT something a port scan can show you?**

☐ Which ports are open

☐ Which ports a firewall filters

☐ Which versions are running

☐ Whether a user's password is weak

:::


:::teacher-note

**Answer:** Whether a user's password is weak

A scan sees doors and versions, not passwords or permissions or file contents. A clean scan is not a clean bill of health.

:::


:::keep-together

### Find the mistake

**Sam hands in a report. Click the line where it first goes wrong.**

```
 1  Sam fixes the target and writes 'all fixed' in the report.
 2  Sam does not scan again.
 3  The report goes to the teacher.
 4  The teacher scans: port 23 is open again after a reboot.
```

Line: {{field-15}}

Why is it wrong?

{{lines-2}}

:::


:::teacher-note

**Answer:** line 2

Line 2: without a second scan there is no proof, and the reboot brought telnet back because it was stopped but not disabled. Scan again, and scan after a reboot.

:::


:::keep-together

### What a scan misses

**Your after-scan shows nothing wrong. What should the report still say?**

☐ Nothing more

☐ That scans are useless

☐ That the computer is perfectly secure

☐ What the scan could not see, such as weak passwords and file permissions

:::


:::teacher-note

**Answer:** What the scan could not see, such as weak passwords and file permissions

An honest report names its limits. Absence of findings is not proof of safety.

:::


:::typical

## Vary: change one thing


**Before.** 

**Fix.** 

**After.** 

Work in the tutorial. Plan first: what will you change, and how will you test it?

{{box-4}}

:::


## Practise


:::keep-together

### Two scans

**Why keep both scans, before and after?**

☐ Comparing them proves what changed

☐ To confuse the reader

☐ Because nmap needs two

☐ To fill the report

:::


:::teacher-note

**Answer:** Comparing them proves what changed

The difference between them is the result.

:::


:::keep-together

### What it proves

**What does a clean after-scan prove?**

☐ That passwords are strong

☐ That the computer is secure

☐ Only that no open doors or old versions are showing

☐ That the files are private

:::


:::teacher-note

**Answer:** Only that no open doors or old versions are showing

Clean on its own list; silent on everything else.

:::


:::keep-together

### Review: logs

**Review: the log shows 14 failed root logins. Which fix goes in the report?**

☐ Rename the account

☐ Ignore it

☐ Delete the log

☐ No root login and no password login over ssh

:::


:::teacher-note

**Answer:** No root login and no password login over ssh

Make guessing pointless.

:::


## Make: audit, fix and prove it

Then write your report: each finding, its fix, what the fix does not protect, and what the scan cannot see. That is the project brief.

Work in the tutorial. Plan first: what will you change, and how will you test it?

{{box-4}}

## Exit ticket

:::keep-together

**Name one thing a port scan cannot tell you.**

{{lines-3}}

:::


:::teacher-note

**Answer:** Any of: whether passwords are strong, what the file permissions are, what is inside the files.

:::

