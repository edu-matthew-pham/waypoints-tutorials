---
order: 2
unit: setup
node: AC9TDI10K01 n1
title: "Install software with apt"
summary: "On a Pi you add programs with apt, from a software source on the internet. You update the lists first, then install. sudo runs one command as the administrator, and the system records who used it."
language: maths
hook: "Your phone has an app store. What does a Pi have?"
explainPicture: { ref: shell.yml#explain-pic, caption: "After sudo apt update and sudo apt install tree, the tree command is there and draws the folders as a tree." }
---
An operating system keeps programs, files and hardware apart, and **apt** is how you add programs. It fetches them from a software source (a repository) over the network, so lessons about it need the internet unless the programs are already on a USB stick. Offline, your teacher can set up a local source.

## Predict: a fresh Pi

```step
stage: predict
insight: "Committing to what a new Pi knows tests the new move: it only knows about programs after it reads the lists."
check:
  type: predict
  q: "On a brand-new Pi you type sudo apt install tree straight away, without updating first. What happens?"
  options: ["Error: it can't find the package yet, because its list is empty", "tree installs", "It asks for the administrator password forever", "It installs a different program"]
  actual: "Error: Unable to locate package tree. apt only knows the packages on its list, and a new Pi has not downloaded the list yet. sudo apt update fetches it."
```

## Try: install tree

```step
stage: run
insight: "Doing it in the right order settles the prediction."
try: { playground: board, starter: "shell.yml#run", height: 520 }
check: { type: board, text: "Get the tree program onto the Pi: update the lists, then install it. Then run tree.", when: "pkg_in = 1", explain: "sudo apt update, then sudo apt install tree. sudo is needed because changing the system is for administrators." }
```

Was your prediction right?

## Worked example: Installing, step by step

```step
stage: investigate
insight: "Following the method once, then finding where a plausible account goes wrong, models the new move."
tasks:
  - check:
      type: question
      q: "What does sudo do?"
      options: ["Runs one command as the administrator, if you are allowed", "Makes you the administrator until you log out", "Installs software", "Hides the command from the log"]
      answer: 0
      feedback: [null, "sudo covers one command. su or a root login would stay on.", "apt installs software; sudo only gives permission.", "The opposite: sudo is logged."]
      explain: "sudo is a pass for one command. Only users in the sudo group may use it, and it records who did what."
  - check:
      type: bug
      code: "working.txt#sam"
      text: "Sam wants to avoid typing sudo. Click the line where it first goes wrong."
      answer: 2
      fault: logic
      misconception: run-as-root
      explain: "Line 2: as root, every typo can delete or break anything, and the log shows only 'root'. sudo asks for one command at a time and records who ran it."
  - check:
      type: question
      q: "You want to install a program but the Pi has no internet. What are your options?"
      options: ["Use a local software source or a USB stick with the packages", "Type apt harder", "Install from the next room", "Nothing is possible"]
      answer: 0
      feedback: [null, "apt needs a source to read from.", "Distance doesn't help.", "Servers are often offline; admins plan for it."]
      explain: "apt reads from a software source. Your school can host one, or you can carry packages in on a USB stick. Without a source, apt can't update."
```

### Installing, step by step

```worked
\text{sudo apt update} :: download the list of what is available. Nothing is installed yet.
\text{sudo apt install tree} :: fetch the program and set it up.
\text{sudo apt upgrade} :: replace installed programs with newer versions.
\text{sudo apt remove tree} :: take it off again.
```

Now try it yourself.

### Find the mistake

### No internet

## Vary: change one thing

```step
stage: modify
insight: "Each task changes one thing: a different program, taking one away, and what happens offline."
try: { playground: board, starter: "shell.yml#v1", height: 520 }
tasks:
  - starter: "shell.yml#v1"
    check: { type: board, text: "Install cowsay (remember the lists).", when: "pkg_in = 1", explain: "sudo apt update, then sudo apt install cowsay." }
  - starter: "shell.yml#v2"
    check: { type: board, text: "tree is installed. Remove it.", when: "pkg_in = 0", explain: "sudo apt remove tree." }
  - starter: "shell.yml#v3"
    check: { type: board, text: "The network is down. Try sudo apt update. What happens?", when: "e = 1", explain: "apt can't reach the source, so it can't fetch the list. Without network, use a local source or a USB stick." }
```

### Another program

### Take one away

### No network

## Practise

```step
stage: practise
insight: "Choosing the command without the board is the same move in new forms, plus a review of ssh."
tasks:
  - check:
      type: question
      q: "Which pair of commands installs a program on a new Pi?"
      options: ["sudo apt update, then sudo apt install name", "apt install name, then sudo", "sudo install name", "sudo apt upgrade, then update"]
      answer: 0
      feedback: [null, "Changing the system needs sudo, and the list comes first.", "The program is apt, not install.", "upgrade replaces installed programs; it does not fetch the list for new ones."]
      explain: "update gets the list, then install uses it."
  - check:
      type: question
      q: "Why does apt need sudo?"
      options: ["Installing changes the whole system, so only administrators may", "It is slow", "It checks your spelling", "It needs the internet"]
      answer: 0
      feedback: [null, "Speed has nothing to do with it.", "Not a spell checker.", "Internet is why it is slow; sudo is about who may."]
      explain: "A normal user can't change the system. That is why permission matters."
  - check:
      type: question
      q: "Review: you ssh to the Pi and run sudo apt update. Where is the list downloaded to?"
      options: ["The Pi", "Your laptop", "Both", "The router"]
      answer: 0
      feedback: [null, "The command runs on the Pi.", "Only one computer ran it.", "Routers just pass the data."]
      explain: "After ssh, commands run on the Pi."
```

### Order

### Why sudo

### Review: ssh

## Make: set up a new Pi

```step
stage: make
insight: "Putting update, upgrade and install in the right order is the whole move."
try: { playground: board, starter: "shell.yml#make", height: 520 }
hint: ["Start by getting the list.", "sudo apt update, then sudo apt upgrade, then sudo apt install tree.", "There are 12 waiting updates; upgrade installs them."]
check: { type: board, text: "Bring a new Pi up to date and install tree: the 12 waiting updates, and tree.", when: "pkg_in = 1 and pend_n = 0", explain: "Update the lists, upgrade the 12 waiting packages, install tree. Admins do this before anything else on a new machine." }
```

Then: on a real Pi, run sudo apt update, then apt list --upgradable to see what is waiting.
