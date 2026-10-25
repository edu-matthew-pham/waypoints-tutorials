---
order: 8
unit: challenge
node: ["AC9TDI10K01 n5", "AC9TDI10K01 n3"]
assumes: ["AC9TDI10K01 n4"]
title: "Challenge: the class server"
summary: "Set up the Pi as the class server: a hand-in share, accounts in one group, a firewall that lets only the right ports through, and a nightly backup. Then explain what each part protects, and what it does not."
language: maths
hook: "Your class gets one Pi. By Friday it has to be a safe place to hand in work. Where do you start?"
explainPicture: { ref: shell.yml#explain-pic, caption: "The firewall is on with ssh allowed, so the Pi still answers. Any port not listed is blocked." }
---
This is the whole of the course in one job. Each part covers a different risk: accounts and groups decide **who**, permissions decide **what**, the firewall decides **which doors**, the backup covers **what if it breaks**. No one part is enough on its own. This also covers AC9TDI10K01's last idea: how several components together secure a networked system.

## Predict: firewall order

```step
stage: predict
insight: "Committing to the order of two steps tests the new move: a firewall can lock you out of the machine you are fixing."
check:
  type: predict
  q: "You are logged in to the Pi over ssh. You type sudo ufw enable first, planning to add the ssh rule next. What happens?"
  options: ["The Pi blocks ssh before the rule exists, and your session drops", "Nothing: the rule comes next", "The Pi turns off", "ufw asks for a password"]
  actual: "Your session drops, and nobody can log in again over the network. Allow ssh first, then enable the firewall."
```

## Try: the safe order

```step
stage: run
insight: "Doing it in the safe order settles the prediction."
try: { playground: board, starter: "shell.yml#run", height: 520 }
check: { type: board, text: "Log in with ssh pi@raspberrypi.local, allow ssh with sudo ufw allow ssh, and only then enable the firewall: sudo ufw enable.", when: "fw_up = 1 and on_pi = 1", explain: "Allow first, enable second. Now you are protected and still logged in." }
```

Was your prediction right?

## Worked example: Layers, not one lock

```step
stage: investigate
insight: "Following the method once, then finding where a plausible account goes wrong, models the new move."
tasks:
  - check:
      type: question
      q: "Which part protects against 'a file is deleted by mistake'?"
      options: ["A backup", "The firewall", "A password", "sudo"]
      answer: 0
      feedback: [null, "A firewall protects doors, not files.", "Passwords say who, not what happens.", "sudo controls who may change the system."]
      explain: "Each layer covers one risk. The backup is the one that covers loss."
  - check:
      type: bug
      code: "working.txt#sam"
      text: "Sam is locked out. Click the line where it first goes wrong."
      answer: 2
      fault: logic
      misconception: firewall-first
      explain: "Line 2: with the firewall on and no ssh rule, the connection drops. Allow ssh first, then enable."
  - check:
      type: question
      q: "Which is safer for watching Jellyfin away from school: opening port 8096 on the router, or a VPN such as Tailscale or WireGuard?"
      options: ["A VPN: only devices you trust can reach it", "Opening the port: it is simpler, so safer", "Both are the same", "Neither is possible"]
      answer: 0
      feedback: [null, "An open port is found by scanners within minutes.", "An open port is reachable by anyone.", "Both are possible."]
      explain: "An open port faces the whole internet. A VPN keeps the server on a private network that only your devices join."
```

### Layers, not one lock

```worked
\text{accounts and groups} :: who is allowed (lesson 3).
\text{owners and permissions} :: what each may do (lessons 3 and 5).
\text{firewall} :: which doors can be reached (lesson 6).
\text{backup and schedule} :: what if it breaks (lesson 7).
```

Now try it yourself.

### Find the mistake

### Reaching it from home

## Vary: change one thing

```step
stage: modify
insight: "Each task is one layer of the class server: the software, the firewall and surviving a reboot."
try: { playground: board, starter: "shell.yml#v1", height: 520 }
tasks:
  - starter: "shell.yml#v1"
    check: { type: board, text: "Install samba and jellyfin.", when: "pkg_in = 1 and svc_up = 1", explain: "sudo apt install samba jellyfin (the lists are up to date)." }
  - starter: "shell.yml#v2"
    check: { type: board, text: "Turn the firewall on so that only Jellyfin's port 8096 gets through (and ssh).", when: "fw_up = 1 and port_reach = 1", explain: "sudo ufw allow ssh, sudo ufw allow 8096, sudo ufw enable." }
  - starter: "shell.yml#v3"
    check: { type: board, text: "smbd runs but is not enabled. Make it survive a reboot, reboot, and check it is up.", when: "svc_up = 1 and svc_boot = 1 and ran_it = 1", explain: "enable it, then sudo reboot, then check with systemctl status smbd." }
```

### The software

### The doors

### After a reboot

## Practise

```step
stage: practise
insight: "Matching layers to risks and judging what is safe is the same move in new forms."
tasks:
  - check:
      type: question
      q: "Which two layers together mean 'only class members may save files, and only from the school network'?"
      options: ["Group permissions on the folder and a firewall rule", "A backup and a schedule", "ssh and sudo", "Jellyfin and Samba"]
      answer: 0
      feedback: [null, "They protect against loss, not access.", "They control admin access, not the share.", "They are the services, not protection."]
      explain: "Permissions decide who may write; the firewall decides who can reach the door."
  - check:
      type: question
      q: "Which is the weakest protection for a share?"
      options: ["Hiding the folder's name", "A group on the folder", "A password", "A firewall rule"]
      answer: 0
      feedback: [null, "That is real access control.", "That says who.", "That limits the door."]
      explain: "Hiding is not protection (The command line › Who can read what)."
  - check:
      type: question
      q: "A student asks to open a router port so they can reach the Pi from home. What is the best first answer?"
      options: ["Use a VPN instead: it keeps the Pi off the open internet", "Yes, open it", "Open all ports", "Turn the firewall off"]
      answer: 0
      feedback: [null, "An exposed server is scanned and attacked constantly.", "That removes every door's lock.", "That removes protection."]
      explain: "Exposing a server raises the stakes. A VPN gives the same convenience."
```

### Two layers

### Weakest

### Reaching it from home

## Make: the class server

```step
stage: make
insight: "Putting every layer together is the whole challenge."
try: { playground: board, starter: "shell.yml#make", height: 520 }
hint: ["Five jobs: install samba, share /srv/class to group class, let the group write, open port 445 with the firewall, a nightly backup.", "sudo apt install samba; add [class] with path = /srv/class using tee; sudo systemctl restart smbd; sudo chgrp class /srv/class; sudo chmod 775 /srv/class.", "sudo ufw allow ssh; sudo ufw allow 445; sudo ufw enable; echo \"30 2 * * * tar -czf /media/usb/class.tar.gz /srv/class\" | crontab -"]
check: { type: board, text: "Set up the class server: Samba installed with a [class] share of /srv/class that Alex and Bob (group class) can write to, the firewall on with port 445 reachable, and a backup scheduled at 02:30 every night.", when: "conf_live = 1 and can_write = 1 and fw_up = 1 and port_reach = 1 and cron_has = 1", explain: "Software, share, group, firewall and backup: five layers, each doing one job. Then check each by testing." }
```

Then write up your server: for each part, what it protects against and what it does not. That is the brief for this course.
