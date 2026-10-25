---
order: 3
unit: audit
node: AC9TDI10K01 n1
title: "Old versions and plain text"
summary: "A scan can also ask each service for its version. Old versions have known problems that have since been fixed, so an old version is a finding. Some services are risky however new they are: telnet sends everything, including passwords, as readable text."
language: maths
hook: "Two web servers both show port 80 open. Which one should worry you?"
explainPicture: { ref: shell.yml#explain-pic, caption: "nmap -sV adds each service's version: OpenSSH 7.2p2, vsftpd 2.0.8 and Apache 2.4.18 are all old." }
---
Programs get fixed as people find problems in them. The version number tells you which fixes a service has. The lab's advisory sheet (an offline copy your teacher made) lists which versions are old, because the lab has no internet to look them up. Some services are a problem whatever their version, because of how they work.

## Predict: which is riskier

```step
stage: predict
insight: "Committing to what a version means tests the new move: it says which fixes are missing."
check:
  type: predict
  q: "One server says Apache 2.4.18 and another says Apache 2.4.62, both on port 80. Which is more likely to have known problems?"
  options: ["2.4.18: the older version is missing years of fixes", "2.4.62: newer programs have more bugs", "Both are the same", "Neither, a version is just a name"]
  actual: "2.4.18. Each newer version fixes problems found since. An old version is a finding, because the problems it has are public."
```

## Try: scan for versions

```step
stage: run
insight: "Asking for versions settles the prediction."
try: { playground: board, starter: "shell.yml#run", height: 520 }
check: { type: board, text: "Scan the target for versions with nmap -sV target.", when: "sv_used = 1", explain: "-sV asks each open service which version it is running: OpenSSH 7.2p2, vsftpd 2.0.8, Apache httpd 2.4.18 and a telnet server." }
```

Was your prediction right?

## Worked example: Reading versions against the sheet

```step
stage: investigate
insight: "Following the method once, then finding where a plausible account goes wrong, models the new move."
tasks:
  - check:
      type: question
      q: "The lab has no internet. Where do you check whether OpenSSH 7.2p2 is old?"
      options: ["The lab's advisory sheet (cat advisories.txt)", "A search engine", "Ask the target", "Guess"]
      answer: 0
      feedback: [null, "There is no internet in the lab.", "The target does not know what it is missing.", "Guessing is not an audit."]
      explain: "The advisory sheet is an offline list your teacher made. Real testers look versions up, with the internet, in a database of known problems."
  - check:
      type: bug
      code: "working.txt#sam"
      text: "Sam reads a version. Click the line where it first goes wrong."
      answer: 2
      fault: logic
      misconception: version-doesnt-matter
      explain: "Line 2: the version says which fixes are present. The advisory sheet says 7.2 is below 8.0, so it is a finding."
  - check:
      type: question
      q: "Telnet's version is new. Why is it still a finding?"
      options: ["It sends everything, including passwords, as readable text", "It is too fast", "It uses too much memory", "It is not on the sheet"]
      answer: 0
      feedback: [null, "Speed is not the issue.", "Memory is not the issue.", "It is on the sheet."]
      explain: "Anyone watching the network can read a telnet session. ssh does the same job, encrypted."
```

### Reading versions against the sheet

```worked
\text{nmap -sV target} :: scan and ask each service for its version.
\text{cat advisories.txt} :: the lab's offline list of old versions.
\text{OpenSSH 7.2p2} :: below 8.0 on the sheet: a finding.
\text{telnet} :: a finding whatever its version: it is not encrypted.
```

Now try it yourself.

### Find the mistake

### Plain text

## Vary: change one thing

```step
stage: modify
insight: "Each task changes one thing: read the sheet, scan one service's version, and save the evidence."
try: { playground: board, starter: "shell.yml#v1", height: 520 }
tasks:
  - starter: "shell.yml#v1"
    check: { type: board, text: "Read the advisory sheet: cat advisories.txt.", when: "ran_it = 1 and e = 0", explain: "The sheet lists the old versions and why telnet is a finding." }
  - starter: "shell.yml#v2"
    check: { type: board, text: "Scan only ssh's version: nmap -sV -p 22 target.", when: "sv_used = 1 and l = 6", explain: "-sV with -p 22 asks only the ssh service." }
  - starter: "shell.yml#v3"
    check: { type: board, text: "Save a version scan in a file called scan2.txt.", when: "x = 1 and sv_used = 1", explain: "nmap -sV target > scan2.txt." }
```

### The sheet

### One service

### Evidence

## Practise

```step
stage: practise
insight: "Judging versions and risks is the same move in new forms, plus a review of ports."
tasks:
  - check:
      type: question
      q: "The advisory sheet says 'below 3.0: old' for vsftpd. The scan shows vsftpd 2.0.8. What is it?"
      options: ["A finding: it is old", "Fine", "Unknown", "Too new"]
      answer: 0
      feedback: [null, "2.0.8 is below 3.0.", "The sheet answers it.", "It is older, not newer."]
      explain: "Below the listed version means old."
  - check:
      type: question
      q: "Why can't you fix an insecure protocol like telnet just by updating it?"
      options: ["The problem is how it works: everything is readable text", "Updates are not available", "It is too small", "It is not installed"]
      answer: 0
      feedback: [null, "It is about design, not availability.", "Size has nothing to do with it.", "It is installed."]
      explain: "Replace it with ssh. No version of telnet encrypts."
  - check:
      type: question
      q: "Review: a port shows 'filtered'. What does that mean?"
      options: ["A firewall is blocking the answer", "The port is open", "The service is old", "ssh is off"]
      answer: 0
      feedback: [null, "Open is a different state.", "Nothing about age.", "Nothing about ssh."]
      explain: "Filtered: the knock gets no answer."
```

### Compare

### Plain text

### Review: filtered

## Make: write the findings

```step
stage: make
insight: "Turning scan results into findings is the whole move: what is wrong, and why."
try: { playground: board, starter: "shell.yml#make", height: 520 }
hint: ["One line per finding in a file called findings.txt.", "echo \"OpenSSH 7.2p2 is old\" > findings.txt, then use >> for more lines.", "Four findings: OpenSSH, vsftpd, Apache and telnet."]
check: { type: board, text: "Write your findings in findings.txt: one line each for OpenSSH, vsftpd, Apache and telnet, saying what is wrong.", when: "conf_has = 1", explain: "One line per finding. Use > for the first line and >> to add the rest. The report will turn these into fixes." }
```

Then: cat findings.txt to check it. Next: what an attack on the login looks like in the log.
