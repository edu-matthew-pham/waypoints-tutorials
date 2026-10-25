---
order: 2
unit: lab
node: AC9TDI10K01 n2
title: "What is listening: finding open ports"
summary: "Every network service listens on a numbered port. A port scan asks each port whether anything answers, and lists what is open and what service is behind it. Open does not mean broken: it means something is listening. Whether that matters depends on what."
language: maths
hook: "The target is plugged in. What is it offering to the network?"
explainPicture: { ref: shell.yml#explain-pic, caption: "nmap target lists the ports with a service listening: 21 (ftp), 22 (ssh), 23 (telnet) and 80 (web)." }
---
A computer can run many services at once, and each listens on its own **port**, a numbered door. Port 22 is ssh, 80 is web pages, 21 is ftp and 23 is telnet. A **port scan** knocks on each door and records which ones open. `nmap` is the standard tool. This is the same idea as *Names and addresses* in Security and privacy: the address finds the computer, the port picks the service.

## Predict: what a scan shows

```step
stage: predict
insight: "Committing to what a scan reports tests the new move: it reports doors, not contents."
check:
  type: predict
  q: "You scan the target with nmap target. What does the scan list?"
  options: ["Which ports are open, and what service is behind each", "The passwords on the computer", "The files on the computer", "The names of its users"]
  actual: "Which ports are open and what service is behind each. A scan sees the doors, not what is inside."
```

## Try: scan the target

```step
stage: run
insight: "Running the scan settles the prediction."
try: { playground: board, starter: "shell.yml#run", height: 520 }
check: { type: board, text: "Scan the target with nmap target. Which ports are open?", when: "ran_it = 1 and e = 0", explain: "nmap target lists four open ports on the target: 21, 22, 23 and 80." }
```

Was your prediction right?

## Worked example: Reading a scan

```step
stage: investigate
insight: "Following the method once, then finding where a plausible account goes wrong, models the new move."
tasks:
  - check:
      type: question
      q: "The scan shows 23/tcp open telnet. What does that tell you?"
      options: ["A telnet service is listening on port 23", "The computer has been broken into", "Telnet is safe", "Port 23 is closed"]
      answer: 0
      feedback: [null, "Open means listening, not broken into.", "Safe or not depends on what telnet does: lesson 3.", "Open is the opposite of closed."]
      explain: "Open means a service is listening. Whether that is a problem depends on the service."
  - check:
      type: bug
      code: "working.txt#sam"
      text: "Sam reads the scan. Click the line where it first goes wrong."
      answer: 2
      fault: logic
      misconception: open-means-hacked
      explain: "Line 2: an open port only means something is listening, as a web server should. The question is whether each one is needed and safe."
  - check:
      type: question
      q: "Which port number is ssh, the way administrators log in?"
      options: ["22", "80", "21", "445"]
      answer: 0
      feedback: [null, "80 is web pages.", "21 is ftp, for sending files.", "445 is Windows file sharing."]
      explain: "ssh is 22. Web is 80 (and 443 for secure web), ftp is 21, telnet is 23."
```

### Reading a scan

```worked
\text{nmap -sn 10.0.0.0/24} :: which computers are on the lab network? (no ports yet)
\text{nmap target} :: which ports are open on the target?
\text{nmap -p 22 target} :: look only at port 22.
\text{nmap target > scan1.txt} :: save the scan: your evidence for the report.
```

Now try it yourself.

### Find the mistake

### Which port

## Vary: change one thing

```step
stage: modify
insight: "Each task changes one thing: one port, the whole lab network, and Kali itself."
try: { playground: board, starter: "shell.yml#v1", height: 520 }
tasks:
  - starter: "shell.yml#v1"
    check: { type: board, text: "Scan only the ssh port on the target: nmap -p 22 target.", when: "ran_it = 1 and l = 6", explain: "-p 22 limits the scan to one port." }
  - starter: "shell.yml#v2"
    check: { type: board, text: "Find every computer on the lab network with nmap -sn 10.0.0.0/24.", when: "ran_it = 1 and l = 6 and e = 0", explain: "-sn means find the computers without scanning ports: Kali and the target." }
  - starter: "shell.yml#v3"
    check: { type: board, text: "Scan Kali itself: nmap localhost. What is listening?", when: "ran_it = 1 and l = 4", explain: "Nothing: a fresh Kali offers no services. The fewer services, the fewer doors." }
```

### One port

### Who is here?

### Scan yourself

## Practise

```step
stage: practise
insight: "Reading a scan and judging ports is the same move in new forms, plus a review of the rules."
tasks:
  - check:
      type: question
      q: "A scan shows 22/tcp filtered instead of open. What does that mean?"
      options: ["Something is blocking the answer, usually a firewall", "The port is open", "ssh is not installed", "The scan failed"]
      answer: 0
      feedback: [null, "Open is a different word.", "Filtered says nothing about whether it is installed.", "The scan worked: it just got no answer."]
      explain: "Filtered: a firewall is dropping the knock."
  - check:
      type: question
      q: "Which port would you expect a web server on?"
      options: ["80", "22", "23", "21"]
      answer: 0
      feedback: [null, "22 is ssh.", "23 is telnet.", "21 is ftp."]
      explain: "80 is plain web pages."
  - check:
      type: question
      q: "Review: you find a weakness on the target. What do you do?"
      options: ["Report it and fix it", "Use it", "Hide it", "Tell friends"]
      answer: 0
      feedback: [null, "Not in this lab.", "Hiding leaves it open.", "Not what a tester does."]
      explain: "Find, report, fix."
```

### Filtered

### The web port

### Review: findings

## Make: keep the evidence

```step
stage: make
insight: "Saving a scan as evidence is the whole move: you cannot report what you did not record."
try: { playground: board, starter: "shell.yml#make", height: 520 }
hint: ["A scan prints to the screen. How do you keep it?", "Use > after a command to save its output in a file.", "nmap target > scan1.txt"]
check: { type: board, text: "Scan the target and save the result in a file called scan1.txt.", when: "x = 1 and ran_it = 1", explain: "nmap target > scan1.txt saves the scan. It is your 'before' evidence for the report." }
```

Then: cat scan1.txt to check it saved. You will scan again after the fixes and compare.
