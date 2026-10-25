---
order: 5
unit: fix
node: AC9TDI10K01 n3
title: "Close the doors: harden the target"
summary: "Fixing means closing what is not needed, updating what is old and tightening the login, in that order of thought: fewer doors, stronger locks. Each fix does one job and none of them does all of them, so you layer them and then check again."
language: maths
hook: "You have a list of findings. In what order, and how, do you fix them?"
explainPicture: { ref: shell.yml#explain-pic, caption: "On the target, stopping telnet and vsftpd takes their ports off the network: two fewer doors." }
---
Now you are the administrator. For each finding there is a fix: stop what is not needed, upgrade what is old, change the ssh settings, and filter the rest with the firewall. This lesson starts on the target itself, as `admin`. The commands are the same ones used on any Linux server: `systemctl`, `apt`, `tee` and `ufw`.

## Predict: stop the service

```step
stage: predict
insight: "Committing to what stopping a service changes tests the new move: no service, no door."
check:
  type: predict
  q: "You stop the telnet service on the target. What happens to port 23?"
  options: ["It is no longer open: nothing is listening", "It stays open", "It becomes encrypted", "Port 23 moves to 22"]
  actual: "No longer open. A port is only open while a service listens, so stopping the service closes the door."
```

## Try: close two doors

```step
stage: run
insight: "Stopping the risky services settles the prediction."
try: { playground: board, starter: "shell.yml#run", height: 520 }
check: { type: board, text: "Stop the two services that are findings at any version: telnet and vsftpd. Use sudo systemctl stop.", when: "risky_n = 0", explain: "sudo systemctl stop telnet and sudo systemctl stop vsftpd. Add sudo systemctl disable so they stay off after a reboot." }
```

Was your prediction right?

## Worked example: Four fixes, four jobs

```step
stage: investigate
insight: "Following the method once, then finding where a plausible account goes wrong, models the new move."
tasks:
  - check:
      type: question
      q: "Which fix handles 'OpenSSH 7.2 is old'?"
      options: ["sudo apt update, then sudo apt upgrade", "Stop telnet", "Turn on the firewall only", "Delete the log"]
      answer: 0
      feedback: [null, "That is a different finding.", "A firewall filters, but the old program still runs behind it.", "The log is evidence."]
      explain: "Upgrade installs the fixed versions. The lab's apt reads the lab's own mirror."
  - check:
      type: bug
      code: "working.txt#sam"
      text: "Sam fixes Apache. Click the line where it first goes wrong."
      answer: 3
      fault: logic
      misconception: firewall-fixes-old
      explain: "Line 3: a firewall decides who can reach the door; the old program behind an allowed door is still old. Upgrade it, or take the service away."
  - check:
      type: question
      q: "In sshd_config, what does PermitRootLogin no change?"
      options: ["root can no longer log in over ssh", "root loses its password", "ssh stops", "Everyone loses sudo"]
      answer: 0
      feedback: [null, "Only ssh login is blocked.", "ssh still runs.", "Sudo is unchanged."]
      explain: "Guessers target root, so the account is not allowed in over ssh at all. Admins log in as themselves and use sudo."
```

### Four fixes, four jobs

```worked
\text{sudo systemctl stop telnet} :: close the door (add disable to keep it off).
\text{sudo apt update; sudo apt upgrade} :: fetch and install the fixed versions.
\text{echo -e "PermitRootLogin no\\nPasswordAuthentication no" | sudo tee /etc/ssh/sshd_config} :: tighten ssh.
\text{sudo systemctl restart ssh} :: ssh reads its settings only when it starts.
```

Now try it yourself.

### Find the mistake

### What ssh config does

## Vary: change one thing

```step
stage: modify
insight: "Each task is one layer of the fix: upgrade, tighten the login, filter with the firewall."
try: { playground: board, starter: "shell.yml#v1", height: 520 }
tasks:
  - starter: "shell.yml#v1"
    check: { type: board, text: "Upgrade the old software: update the lists, then upgrade.", when: "old_n = 0", explain: "sudo apt update, then sudo apt upgrade." }
  - starter: "shell.yml#v2"
    check: { type: board, text: "Turn off password login and root login for ssh, and make ssh read the new settings.", when: "pw_login = 0 and root_login = 0", explain: "Write PermitRootLogin no and PasswordAuthentication no into /etc/ssh/sshd_config with tee, then sudo systemctl restart ssh." }
  - starter: "shell.yml#v3"
    check: { type: board, text: "Use the firewall so only ssh (22) and web (80) can be reached: allow 22, allow 80, then enable.", when: "open_n = 2 and fw_up = 1", explain: "sudo ufw allow 22, sudo ufw allow 80, sudo ufw enable. Allow first, enable second." }
```

### Upgrade

### Tighten ssh

### Filter

## Practise

```step
stage: practise
insight: "Choosing fixes and knowing what they do not do is the same move in new forms, plus a review of logs."
tasks:
  - check:
      type: question
      q: "Why must you restart ssh after editing sshd_config?"
      options: ["It reads its settings only when it starts", "To log out", "To clear the log", "To update it"]
      answer: 0
      feedback: [null, "That is not the reason.", "The log is separate.", "Update is apt's job."]
      explain: "Services read their config at start (the same as Samba)."
  - check:
      type: question
      q: "The firewall allows port 80. Apache behind it is old. Is the finding fixed?"
      options: ["No: the old program is still reachable on 80", "Yes", "Only for ssh", "Only for ftp"]
      answer: 0
      feedback: [null, "It filters other ports, not this one.", "Not about ssh.", "Not about ftp."]
      explain: "A firewall does not fix what is behind an allowed door."
  - check:
      type: question
      q: "Review: 14 failures in two minutes for root. Which fix helps most?"
      options: ["No root login over ssh, and key login only", "A bigger log", "A new name for ssh", "Reboot daily"]
      answer: 0
      feedback: [null, "A log records only.", "Hiding is not a lock.", "Does not help."]
      explain: "Take away the prize, or make the lock pointless to guess."
```

### Restart

### Firewall limits

### Review: guessing

## Make: harden it

```step
stage: make
insight: "Applying every layer, and leaving nothing behind, is the whole move."
try: { playground: board, starter: "shell.yml#make", height: 520 }
hint: ["Four findings: telnet and ftp, old versions, ssh password and root login.", "Stop the two services; sudo apt update and upgrade; write the ssh settings.", "Then sudo systemctl restart ssh so the new settings apply."]
check: { type: board, text: "Harden the target: no telnet or ftp open, nothing old, and no password or root login over ssh.", when: "risky_n = 0 and old_n = 0 and pw_login = 0 and root_login = 0", explain: "Stop telnet and vsftpd; apt update and apt upgrade; tee the ssh settings; restart ssh. Four fixes for four findings." }
```

Then: a fix is not proved until you scan again. That is the challenge.
