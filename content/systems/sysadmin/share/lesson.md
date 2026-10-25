---
order: 5
unit: serve
node: AC9TDI10K01 n3
title: "Share files with Samba"
summary: "Samba shares a folder so Windows, Mac and Linux computers can use it. The share is described in a config file the service reads when it starts, so you restart it after a change. The folder's group and permissions decide who may write."
language: maths
hook: "Everyone in the class needs to hand in work to one place. How do you set that up?"
explainPicture: { ref: shell.yml#explain-pic, caption: "After the share is added to smb.conf and smbd is restarted, smbclient -L localhost lists classshare." }
---
File sharing is the most common job for a small server. Two things have to be right: the service has to know about the share (a config file), and the files on the Pi have to allow the right people (owners, groups and permissions from lesson 3).

## Predict: no restart

```step
stage: predict
insight: "Committing to when a service reads its settings tests the new move: it reads them at start-up, not every second."
check:
  type: predict
  q: "You add a [classshare] section to smb.conf but do not restart smbd. Does smbclient -L localhost list classshare?"
  options: ["No: smbd read the file when it started, and has not looked again", "Yes: it watches the file", "Yes, after one minute", "Only after a reboot of your laptop"]
  actual: "No. Services read their config when they start. After a change, restart (or reload) the service."
```

## Try: add a share

```step
stage: run
insight: "Adding and restarting settles the prediction."
try: { playground: board, starter: "shell.yml#run", height: 520 }
check: { type: board, text: "Add a share called classshare to /etc/samba/smb.conf, restart smbd, then run smbclient -L localhost.", when: "conf_live = 1", explain: "echo -e \"[classshare]\\npath = /srv/class\" | sudo tee -a /etc/samba/smb.conf, then sudo systemctl restart smbd. tee, because sudo echo ... >> would still be your shell writing." }
```

Was your prediction right?

## Worked example: Writing to a file you do not own

```step
stage: investigate
insight: "Following the method once, then finding where a plausible account goes wrong, models the new move."
tasks:
  - check:
      type: question
      q: "Why does sudo echo \"[x]\" >> /etc/samba/smb.conf fail?"
      options: ["The >> is done by your shell, not by sudo, so it has no permission", "echo is not a command", "sudo cannot run echo", "smb.conf does not exist"]
      answer: 0
      feedback: [null, "echo works fine.", "sudo ran echo successfully.", "It exists, but you cannot write it."]
      explain: "Your shell sets up the redirect before sudo runs. Use echo ... | sudo tee -a file, so tee (running as root) does the writing."
  - check:
      type: bug
      code: "working.txt#sam"
      text: "Sam fixes the share. Click the line where it first goes wrong."
      answer: 2
      fault: logic
      misconception: chmod-777-fixes
      explain: "Line 2: 777 lets everyone do everything. The cause was that Alex isn't in the folder's group. Fix that: sudo chgrp class /srv/class and chmod 775."
  - check:
      type: question
      q: "/srv/class is drwxrwxr-x, owner root, group class. Who can add files?"
      options: ["Root and members of class", "Only root", "Everyone", "Only pi"]
      answer: 0
      feedback: [null, "The group has w too.", "Others only have r-x.", "pi isn't the owner or in the group."]
      explain: "Owner (rwx) and group (rwx) can write; everyone else (r-x) can only read."
```

### Writing to a file you do not own

```worked
\text{echo -e "[classshare]\\npath = /srv/class" | sudo tee -a /etc/samba/smb.conf} :: add the share, as root.
\text{sudo systemctl restart smbd} :: make smbd read the file again.
\text{sudo chgrp class /srv/class} :: the folder belongs to group class.
\text{sudo chmod 775 /srv/class} :: owner and group read, write and enter; others only read.
```

Now try it yourself.

### Find the mistake

### Who can add files

## Vary: change one thing

```step
stage: modify
insight: "Each task changes one thing: the group, the permission for the group, and taking rights away from strangers."
try: { playground: board, starter: "shell.yml#v1", height: 520 }
tasks:
  - starter: "shell.yml#v1"
    check: { type: board, text: "Make /srv/class belong to the group class.", when: "grp_is = 1", explain: "sudo chgrp class /srv/class." }
  - starter: "shell.yml#v2"
    check: { type: board, text: "/srv/class belongs to class, but Alex still cannot save a file there. Fix the permissions.", when: "can_write = 1", explain: "sudo chmod 775 /srv/class: the group needs w." }
  - starter: "shell.yml#v3"
    check: { type: board, text: "Someone set /srv/class to 777. Bob is not in class and should only be able to read. Fix it.", when: "blocked = 1", explain: "sudo chmod 775 /srv/class (or o-w): others lose w." }
```

### Group the folder

### Let the group write

### Take rights away

## Practise

```step
stage: practise
insight: "Reading modes and choosing fixes without the board is the same move in new forms, plus a review of services."
tasks:
  - check:
      type: question
      q: "A folder is rwxrwxr-x with group class. Alex is not in class. What can Alex do?"
      options: ["Read it, but not add files", "Add files", "Nothing", "Delete it"]
      answer: 0
      feedback: [null, "Others have r-x: no w.", "Others can read.", "Deleting needs w on the folder."]
      explain: "Others get r-x: look in, but not change."
  - check:
      type: question
      q: "You change smb.conf. What must you do for Samba to use it?"
      options: ["Restart (or reload) smbd", "Reboot the router", "Nothing, it watches", "Reinstall"]
      answer: 0
      feedback: [null, "The Pi is the one that must re-read.", "It doesn't watch.", "Overkill."]
      explain: "smbd reads its settings at start-up."
  - check:
      type: question
      q: "Review: you ran sudo systemctl enable smbd. Is smbd running now?"
      options: ["Not necessarily: enable only affects the next boot", "Yes", "Yes, but not shared", "No, it was removed"]
      answer: 0
      feedback: [null, "enable only sets the boot behaviour.", "Nothing about sharing.", "Nothing is removed."]
      explain: "Check with systemctl status."
```

### Others

### After a change

### Review: enable

## Make: a class hand-in share

```step
stage: make
insight: "Combining the config, the restart and the group is the whole move."
try: { playground: board, starter: "shell.yml#make", height: 520 }
hint: ["Three jobs: the share, the restart, the folder's group and mode.", "tee -a to add [class] and path = /srv/class to smb.conf, then restart smbd.", "sudo chgrp class /srv/class and sudo chmod 775 /srv/class."]
check: { type: board, text: "Share /srv/class as [class] so that Alex (in group class) can save files there.", when: "conf_live = 1 and can_write = 1", explain: "Add the [class] share with its path, restart smbd, set the folder's group to class and mode 775." }
```

Then: on a real Pi, run testparm to check smb.conf and smbpasswd -a alex to give Alex a Samba password (Samba keeps its own).
