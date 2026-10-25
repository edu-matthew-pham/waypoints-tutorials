---
order: 3
unit: people
node: AC9TDI10K01 n3
title: "Accounts, groups and sudo"
summary: "Each person gets an account and a private home folder. Groups give several accounts the same rights. Only users in the sudo group may use sudo, and the system logs every time they do."
language: maths
hook: "One Pi, a whole class. How does it know who is allowed to do what?"
explainPicture: { ref: shell.yml#explain-pic, caption: "After sudo adduser alex, Alex has a home folder, /home/alex, that only Alex (and an administrator) can open: drwx------." }
---
This is **authentication** (who are you?) and **authorisation** (what may you do?) from *Who are you, and what may you do?*, on a real kind of system: accounts say who, groups and permissions say what.

## Predict: Alex's folder

```step
stage: predict
insight: "Committing to who can open a new home folder tests the new move: accounts keep each other out by default."
check:
  type: predict
  q: "You create an account for Alex with sudo adduser alex. Can Alex open your home folder, /home/pi?"
  options: ["No: home folders are private to their owner", "Yes: everyone on the Pi can open every home folder", "Only if Alex is in the sudo group", "Only on Mondays"]
  actual: "No. Each home folder is drwx------: only its owner (and root) can open it. That is why a media server can't read films in a private home folder, a thing lesson 6 meets."
```

## Try: make an account

```step
stage: run
insight: "Creating the account and looking at its home folder settles the prediction."
try: { playground: board, starter: "shell.yml#run", height: 520 }
check: { type: board, text: "Make an account for alex with sudo adduser alex. Then look at its folder with ls -ld /home/alex.", when: "user_ok = 1", explain: "adduser makes the account, a group of the same name, and a private home folder." }
```

Was your prediction right?

## Worked example: Groups and sudo

```step
stage: investigate
insight: "Following the method once, then finding where a plausible account goes wrong, models the new move."
tasks:
  - check:
      type: question
      q: "Which group lets a user run sudo?"
      options: ["sudo", "adm", "users", "pi"]
      answer: 0
      feedback: [null, "adm lets you read some logs, not run sudo.", "users is a plain group with no extra rights.", "pi is the first account's own group."]
      explain: "Members of the sudo group may use sudo. That is the only difference between an administrator and a normal user here."
  - check:
      type: bug
      code: "working.txt#sam"
      text: "Sam gives Alex sudo. Click the line where it first goes wrong."
      answer: 2
      fault: logic
      misconception: usermod-replaces
      explain: "Line 2: -G on its own replaces all of Alex's groups. -aG adds one and keeps the rest: sudo usermod -aG sudo alex."
  - check:
      type: question
      q: "Where does the Pi record who used sudo?"
      options: ["/var/log/auth.log, which only an administrator can read", "In your home folder", "On the router", "Nowhere"]
      answer: 0
      feedback: [null, "Your own files can be changed by you; a log must not be.", "The router doesn't see inside the Pi.", "Every sudo is logged."]
      explain: "auth.log lists logins and sudo use, with the user and the time. Administrators read it to find out who did what."
```

### Groups and sudo

```worked
\text{sudo adduser alex} :: make the account, its group and its private home folder.
\text{sudo usermod -aG class alex} :: add alex to class. a = add, G = to a group. Without a, groups are replaced.
\text{id alex} :: list the groups alex is in.
\text{sudo cat /var/log/auth.log} :: read who logged in and who used sudo (administrators only).
```

Now try it yourself.

### Find the mistake

### The log

## Vary: change one thing

```step
stage: modify
insight: "Each task changes one thing: give a group, read the log, and see a private folder from the other side."
try: { playground: board, starter: "shell.yml#v1", height: 520 }
tasks:
  - starter: "shell.yml#v1"
    check: { type: board, text: "Alex is in the group class. Add alex to sudo as well, keeping class.", when: "in_group = 1", explain: "sudo usermod -aG sudo alex. The a matters: without it Alex would leave class." }
  - starter: "shell.yml#v2"
    check: { type: board, text: "Read the log that records logins and sudo use. Use sudo.", when: "ran_it = 1 and e = 0", explain: "sudo cat /var/log/auth.log. Without sudo it says Permission denied: pi is not in the adm group on this Pi." }
  - starter: "shell.yml#v3"
    check: { type: board, text: "Become alex with su alex. Try to read /home/pi/Documents/readme.txt. What happens?", when: "as_user = 1 and e = 1", explain: "Permission denied: /home/pi is private. Accounts keep each other out until someone grants access." }
```

### Add a group

### Read the log

### From Alex's side

## Practise

```step
stage: practise
insight: "Choosing commands and reading groups without the board is the same move in new forms, plus a review of services."
tasks:
  - check:
      type: question
      q: "Which command adds alex to the group class and keeps alex's other groups?"
      options: ["sudo usermod -aG class alex", "sudo usermod -G class alex", "sudo adduser class", "sudo groups alex"]
      answer: 0
      feedback: [null, "Without -a, groups are replaced.", "That makes a new account called class.", "groups only lists."]
      explain: "-a keeps the old groups, -G names the group to add."
  - check:
      type: question
      q: "Why is it better to give people sudo through a group than to share the pi password?"
      options: ["The log shows each person, and you can remove one without changing the password for everyone", "Groups are faster", "Passwords stop working", "It isn't better"]
      answer: 0
      feedback: [null, "Speed isn't the point.", "Passwords still work.", "Shared passwords can't tell people apart."]
      explain: "Separate accounts mean the log says who did what, and removing one person doesn't affect the others."
  - check:
      type: question
      q: "Review: you ssh to the Pi, then type exit. Which account are you now?"
      options: ["Your laptop account", "pi", "root", "alex"]
      answer: 0
      feedback: [null, "exit left the Pi.", "You never became root.", "Alex wasn't involved."]
      explain: "exit ends the ssh session, and you are back on the laptop."
```

### -aG

### Why accounts

### Review: exit

## Make: a new administrator

```step
stage: make
insight: "Making an account and giving it the right rights is the whole move."
try: { playground: board, starter: "shell.yml#make", height: 520 }
hint: ["Two steps: the account, then its rights.", "sudo adduser bob", "sudo usermod -aG sudo bob (or sudo adduser bob sudo)"]
check: { type: board, text: "Create an account for bob and give bob sudo.", when: "user_ok = 1 and in_group = 1", explain: "sudo adduser bob, then sudo usermod -aG sudo bob. Give sudo only to people who must use it." }
```

Then: on a real Pi, run `id` to see your own groups.
