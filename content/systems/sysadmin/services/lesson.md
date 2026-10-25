---
order: 4
unit: serve
node: AC9TDI10K01 n1
title: "Services: start, stop and enable"
summary: "A service is a program that runs in the background so others can use it. systemctl starts and stops one now, and enable decides whether it starts at every boot. These are two separate things."
language: maths
hook: "Samba is installed, but nobody can reach the share. Is it broken?"
explainPicture: { ref: shell.yml#explain-pic, caption: "After sudo systemctl stop smbd, systemctl status smbd says inactive (dead): the program is not running, even though it is installed." }
---
Programs on a server have to be running before anyone can use them. A **service** is a program started by the operating system and kept running. The operating system's job is to start, stop and watch services, which is why one command, `systemctl`, controls them all.

## Predict: enable

```step
stage: predict
insight: "Committing to what enable does tests the new move: starting now and starting at boot are different things."
check:
  type: predict
  q: "smbd is stopped. You type sudo systemctl enable smbd. Is smbd running now?"
  options: ["No: enable only sets it to start at the next boot", "Yes: enable also starts it", "Yes, but only until you log out", "It deletes smbd"]
  actual: "No. enable decides what happens at boot. To run it now you need start (or enable --now)."
```

## Try: start it and keep it

```step
stage: run
insight: "Doing both settles the prediction."
try: { playground: board, starter: "shell.yml#run", height: 520 }
check: { type: board, text: "smbd is stopped and will not start at boot. Make it run now and at every boot.", when: "svc_up = 1 and svc_boot = 1", explain: "sudo systemctl start smbd, and sudo systemctl enable smbd. Two commands, because now and at boot are different." }
```

Was your prediction right?

## Worked example: Two different switches

```step
stage: investigate
insight: "Following the method once, then finding where a plausible account goes wrong, models the new move."
tasks:
  - check:
      type: question
      q: "What is the difference between start and enable?"
      options: ["start runs it now; enable runs it at every boot", "They are the same", "enable runs it now; start runs it at boot", "start installs it"]
      answer: 0
      feedback: [null, "Two separate switches.", "The other way round.", "apt installs."]
      explain: "A service has a state (running or not now) and a boot setting (will it start next time). systemctl status shows both."
  - check:
      type: bug
      code: "working.txt#sam"
      text: "Sam thinks the share is up. Click the line where it first goes wrong."
      answer: 3
      fault: logic
      misconception: enable-starts-now
      explain: "Line 3 is where Sam's belief starts: no error doesn't mean running. enable only changes the boot setting. Check with systemctl status smbd."
  - check:
      type: question
      q: "Where can you read why a service stopped or failed?"
      options: ["journalctl -u name", "ls", "apt update", "cat /etc/hostname"]
      answer: 0
      feedback: [null, "ls lists files.", "apt fetches package lists.", "That shows the computer's name."]
      explain: "journalctl -u smbd prints that service's log. It is the first place an administrator looks."
```

### Two different switches

```worked
\text{systemctl status smbd} :: is it running now, and will it start at boot?
\text{sudo systemctl start smbd} :: run it now.
\text{sudo systemctl enable smbd} :: also start it at every boot.
\text{journalctl -u smbd} :: read what the service has logged.
```

Now try it yourself.

### Find the mistake

### Read the log

## Vary: change one thing

```step
stage: modify
insight: "Each task changes one thing: switch it off, test what a reboot does, and read the log."
try: { playground: board, starter: "shell.yml#v1", height: 520 }
tasks:
  - starter: "shell.yml#v1"
    check: { type: board, text: "smbd is running and enabled. Stop it now and stop it starting at boot.", when: "svc_up = 0 and svc_boot = 0", explain: "sudo systemctl stop smbd, and sudo systemctl disable smbd." }
  - starter: "shell.yml#v2"
    check: { type: board, text: "smbd is running but not enabled. Reboot with sudo reboot. Is smbd running afterwards?", when: "svc_up = 0 and ran_it = 1", explain: "Not running: it was never enabled, so it did not start at boot. This is why enable matters on a server." }
  - starter: "shell.yml#v3"
    check: { type: board, text: "Read smbd's log with journalctl -u smbd.", when: "ran_it = 1", explain: "journalctl -u smbd shows when it started and stopped." }
```

### Switch it off

### After a reboot

### Read the log

## Practise

```step
stage: practise
insight: "Reading status and choosing commands without the board is the same move in new forms, plus a review of users."
tasks:
  - check:
      type: question
      q: "status shows: active (running), disabled. You reboot. What happens to the service?"
      options: ["It stays off after the reboot", "It keeps running", "It restarts twice", "It is deleted"]
      answer: 0
      feedback: [null, "Disabled means it will not start at boot.", "Boot starts only enabled services.", "Nothing deletes it."]
      explain: "Running now and starting at boot are separate. This one was running but disabled."
  - check:
      type: question
      q: "Which single command starts a service now and sets it to start at every boot?"
      options: ["sudo systemctl enable --now name", "sudo systemctl start name", "systemctl name", "sudo apt install name"]
      answer: 0
      feedback: [null, "That is now only.", "Not a command.", "That installs."]
      explain: "enable --now does both in one go."
  - check:
      type: question
      q: "Review: Sam adds alex to a group with usermod -G. What went wrong?"
      options: ["-G without -a replaces all Alex's groups", "Nothing", "Alex is deleted", "sudo was missing"]
      answer: 0
      feedback: [null, "It replaced them.", "The account stays.", "The command ran."]
      explain: "-aG adds and keeps the rest."
```

### Reading status

### Both at once

### Review: -aG

## Make: survive a reboot

```step
stage: make
insight: "Making a service survive a reboot, and proving it, is the whole move."
try: { playground: board, starter: "shell.yml#make", height: 520 }
hint: ["It runs now but would not after a reboot.", "Enable it first, then reboot.", "sudo systemctl enable smbd, then sudo reboot, then systemctl status smbd."]
check: { type: board, text: "smbd is running but would vanish at a reboot. Fix that, then reboot and check that it is running.", when: "svc_up = 1 and svc_boot = 1 and ran_it = 1", explain: "enable first, then reboot to prove it. Never trust a service you have not rebooted with." }
```

Then: on a real Pi, run systemctl status ssh and systemctl list-units --type=service.
