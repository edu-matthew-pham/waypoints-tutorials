---
order: 6
unit: challenge
node: ["AC9TDI10K01 n5", "AC9TDI10K01 n3"]
assumes: ["AC9TDI10K01 n4"]
title: "Challenge: audit, fix and prove it"
summary: "A real audit is a cycle: scan to find, fix, then scan again to prove the fix worked, and write down what you did. Your report is the before and after scans, each finding with its fix, and an honest note on what a scan cannot see."
language: maths
hook: "You say the target is safer now. How do you prove it?"
explainPicture: { ref: shell.yml#explain-pic, caption: "The 'before' scan saved as evidence. After the fixes you scan again and compare the two." }
---
This is the whole course in one job. You scan from Kali and save the result, log in to the target as `admin` to fix it, log out, and scan again. The two saved scans are your evidence. A scan only sees open doors and versions, so your report also says what it cannot see (weak passwords, bad permissions, what is inside the files).

## Predict: prove it

```step
stage: predict
insight: "Committing to how you know a fix worked tests the new move: scan again, and compare."
check:
  type: predict
  q: "You have fixed the target. How do you know the fixes worked?"
  options: ["Scan again and compare with the first scan", "Trust that the commands ran", "Reboot and hope", "Ask the target"]
  actual: "Scan again and compare. Commands can fail quietly or be undone; the second scan is the evidence."
```

## Try: the before scan

```step
stage: run
insight: "Saving a before scan settles what 'prove it' needs: something to compare with."
try: { playground: board, starter: "shell.yml#run", height: 520 }
check: { type: board, text: "Scan the target with versions and save it as before.txt.", when: "x = 1 and sv_used = 1", explain: "nmap -sV target > before.txt. It is the 'before' evidence: four open ports and three old versions." }
```

Was your prediction right?

## Worked example: The audit cycle

```step
stage: investigate
insight: "Following the method once, then finding where a plausible account goes wrong, models the new move."
tasks:
  - check:
      type: question
      q: "Which of these is NOT something a port scan can show you?"
      options: ["Whether a user's password is weak", "Which ports are open", "Which versions are running", "Which ports a firewall filters"]
      answer: 0
      feedback: [null, "A scan shows this.", "A version scan shows this.", "Filtered ports show up."]
      explain: "A scan sees doors and versions, not passwords or permissions or file contents. A clean scan is not a clean bill of health."
  - check:
      type: bug
      code: "working.txt#sam"
      text: "Sam hands in a report. Click the line where it first goes wrong."
      answer: 2
      fault: logic
      misconception: fixed-without-checking
      explain: "Line 2: without a second scan there is no proof, and the reboot brought telnet back because it was stopped but not disabled. Scan again, and scan after a reboot."
  - check:
      type: question
      q: "Your after-scan shows nothing wrong. What should the report still say?"
      options: ["What the scan could not see, such as weak passwords and file permissions", "That the computer is perfectly secure", "Nothing more", "That scans are useless"]
      answer: 0
      feedback: [null, "A scan cannot prove that.", "The honest limits belong in a report.", "Scans are useful, within their limits."]
      explain: "An honest report names its limits. Absence of findings is not proof of safety."
```

### The audit cycle

```worked
\text{nmap -sV target > before.txt} :: evidence of the problem.
\text{ssh admin@target} :: log in to fix it (the one allowed account).
\text{fixes} :: stop, upgrade, tighten, filter. Write each down.
\text{nmap -sV target > after.txt} :: evidence that the fixes worked.
```

Now try it yourself.

### Find the mistake

### What a scan misses

## Vary: change one thing

```step
stage: modify
insight: "Each task is one stage of the audit: before, fix, after."
try: { playground: board, starter: "shell.yml#v1", height: 520 }
tasks:
  - starter: "shell.yml#v1"
    check: { type: board, text: "Run the 'before' scan with versions and save it as before.txt.", when: "conf_has = 1 and x = 1", explain: "nmap -sV target > before.txt." }
  - starter: "shell.yml#v2"
    check: { type: board, text: "Log in to the target as admin and close the two risky services: stop telnet and vsftpd.", when: "risky_n = 0 and on_pi = 1", explain: "ssh admin@target, then sudo systemctl stop telnet and sudo systemctl stop vsftpd." }
  - starter: "shell.yml#v3"
    check: { type: board, text: "The risky services are already stopped. Scan again and save the result as after.txt.", when: "x = 1", explain: "nmap -sV target > after.txt: telnet and ftp are gone from the list." }
```

### Before

### Fix

### After

## Practise

```step
stage: practise
insight: "Judging evidence and limits is the same move in new forms."
tasks:
  - check:
      type: question
      q: "Why keep both scans, before and after?"
      options: ["Comparing them proves what changed", "To fill the report", "Because nmap needs two", "To confuse the reader"]
      answer: 0
      feedback: [null, "Evidence is not padding.", "Not required.", "Not the point."]
      explain: "The difference between them is the result."
  - check:
      type: question
      q: "What does a clean after-scan prove?"
      options: ["Only that no open doors or old versions are showing", "That the computer is secure", "That passwords are strong", "That the files are private"]
      answer: 0
      feedback: [null, "A scan cannot show everything.", "Scans do not see passwords.", "Scans do not see permissions."]
      explain: "Clean on its own list; silent on everything else."
  - check:
      type: question
      q: "Review: the log shows 14 failed root logins. Which fix goes in the report?"
      options: ["No root login and no password login over ssh", "Delete the log", "Rename the account", "Ignore it"]
      answer: 0
      feedback: [null, "Destroys the evidence.", "Hiding does not protect.", "Failures are the warning."]
      explain: "Make guessing pointless."
```

### Two scans

### What it proves

### Review: logs

## Make: audit, fix and prove it

```step
stage: make
insight: "Running the whole cycle on your own is the challenge."
try: { playground: board, starter: "shell.yml#make", height: 520 }
hint: ["Before, fix, after: three stages.", "nmap -sV target > before.txt. Then ssh admin@target and apply the four fixes. Then exit.", "nmap -sV target > after.txt."]
check: { type: board, text: "Audit the target: save a before scan, fix every finding on the target (risky services, old versions, ssh password and root login), then save an after scan.", when: "conf_has = 1 and x = 1 and risky_n = 0 and old_n = 0 and pw_login = 0 and root_login = 0", explain: "Before scan, four fixes over ssh, restart ssh, exit, after scan. Your report compares the two." }
```

Then write your report: each finding, its fix, what the fix does not protect, and what the scan cannot see. That is the project brief.
