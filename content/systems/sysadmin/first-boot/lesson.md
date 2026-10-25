---
order: 1
unit: setup
node: AC9TDI10K01 n2
title: "Log in to the Pi from your laptop"
summary: "A Raspberry Pi can run with no screen. From your laptop you reach it by name or address and type to it with ssh. Every command after ssh runs on the Pi, until you type exit."
language: maths
hook: "The Pi has no screen on it. How do you control it from across the room?"
explainPicture: { ref: shell.yml#explain-pic, caption: "From the laptop, ssh pi@raspberrypi.local: the prompt changes from sam@laptop to pi@raspberrypi, because the Pi is now doing the work." }
---
A server is a computer you run from somewhere else. Almost every server, and every Pi without a screen, is run by typing to it over the network. This is the same idea as *Across the internet* in Networks: names and addresses find the computer, then messages go to it.

## Predict: where does it run?

```step
stage: predict
insight: "Committing to where the next commands run tests the new move: ssh joins your keyboard to another computer."
check:
  type: predict
  q: "On your laptop you type ssh pi@raspberrypi.local and log in. Where does the next command you type run?"
  options: ["On the Pi: ssh joins your keyboard to it", "On your laptop, which asks the Pi to copy the answer", "Nowhere until someone presses the Pi's power button", "On both at the same time"]
  actual: "On the Pi. Until you type exit, everything you type is sent to the Pi and run there. Only the text comes back."
```

## Try: reach the Pi

```step
stage: run
insight: "Logging in and watching the prompt settles the prediction."
try: { playground: board, starter: "shell.yml#run", height: 520 }
check: { type: board, text: "Log in with ssh pi@raspberrypi.local. Look at the prompt: whose name is in it now?", when: "on_pi = 1", explain: "The prompt says pi@raspberrypi. You are typing on your laptop, but the commands run on the Pi." }
```

Was your prediction right?

## Worked example: Logging in, step by step

```step
stage: investigate
insight: "Following the method once, then finding where a plausible account goes wrong, models the new move."
tasks:
  - check:
      type: question
      q: "The Pi is reachable as raspberrypi.local and as 192.168.1.23. After the router restarts, which is more likely to still work?"
      options: ["raspberrypi.local: the name follows the Pi", "192.168.1.23: numbers never change", "Neither", "Both change"]
      answer: 0
      feedback: [null, "The router may hand out a different number after a restart.", "The name is announced by the Pi itself.", "The Pi keeps its name."]
      explain: "The name goes with the Pi. The router may give it a new address, so use the name first and the address as a backup."
  - check:
      type: bug
      code: "working.txt#sam"
      text: "Sam checks the Pi's disk space. Click the line where it first goes wrong."
      answer: 2
      fault: logic
      misconception: ssh-is-local
      explain: "Line 2: without ssh, df -h shows the laptop's disk. Log in with ssh first, then the command runs on the Pi."
  - check:
      type: question
      q: "ssh pi@raspberrypi.local says: Connection refused. What does it most likely mean?"
      options: ["The Pi is on the network but nothing is listening for ssh (the service is stopped)", "Your password is wrong", "Your laptop is offline", "The Pi has no name"]
      answer: 0
      feedback: [null, "A wrong password gives Permission denied, a different message.", "An offline laptop cannot find the name at all.", "A name that is not found says so."]
      explain: "Refused means the Pi answered but no program is waiting on port 22. Services come in lesson 4."
```

### Logging in, step by step

```worked
\text{ssh pi@raspberrypi.local} :: user pi, computer raspberrypi.local. ssh is the program that joins you to it.
\text{password} :: the Pi checks who you are (authentication). Nothing shows as you type it.
\text{pi@raspberrypi:~\$} :: the prompt is now the Pi's. Every command runs there.
\text{exit} :: ends the session and brings you back to the laptop.
```

Now try it yourself.

### Find the mistake

### Connection refused

## Vary: change one thing

```step
stage: modify
insight: "Each task changes one thing: ask the Pi its name, check the laptop can reach it, then log in as someone who has no account."
try: { playground: board, starter: "shell.yml#v1", height: 520 }
tasks:
  - starter: "shell.yml#v1"
    check: { type: board, text: "Log in, then run hostname to ask the Pi its name.", when: "on_pi = 1 and ran_it = 1", explain: "ssh pi@raspberrypi.local, then hostname prints raspberrypi." }
  - starter: "shell.yml#v2"
    check: { type: board, text: "You are on the Pi. Check that it can reach your laptop at 192.168.1.20 with ping.", when: "ran_it = 1 and e = 0", explain: "ping 192.168.1.20: replies mean the two computers can talk." }
  - starter: "shell.yml#v3"
    check: { type: board, text: "Try ssh sam@raspberrypi.local. The Pi has no user sam. What happens?", when: "e = 1 and on_pi = 0", explain: "Permission denied: you need an account on the Pi. Names and addresses find a computer; accounts decide who may use it." }
```

### Ask its name

### Can it reach the laptop?

### No account

## Practise

```step
stage: practise
insight: "Reading addresses and ssh messages without the board is the same move in new forms, plus a review of permissions."
tasks:
  - check:
      type: question
      q: "Which of these cannot be an IP address?"
      options: ["192.168.1.300", "192.168.1.23", "10.0.0.5", "172.16.4.2"]
      answer: 0
      feedback: [null, "Each of the four numbers is 0 to 255 and this one is fine.", "Fine.", "Fine."]
      explain: "Each number is 0 to 255, so 300 is too big."
  - check:
      type: question
      q: "You are logged in to the Pi over ssh. You type exit. Where are you?"
      options: ["Back at your laptop's prompt", "The Pi shuts down", "Still on the Pi", "Logged in to a second Pi"]
      answer: 0
      feedback: [null, "exit ends your session, not the Pi.", "The session has ended.", "Nothing new starts."]
      explain: "exit closes the ssh session. The Pi keeps running."
  - check:
      type: question
      q: "Review: a file is rw------- (600). Can another user read it?"
      options: ["No: others have no permissions", "Yes: they can read it", "Only if it is hidden", "Only over ssh"]
      answer: 0
      feedback: [null, "Others get the last three dashes.", "Hiding changes nothing.", "How you log in doesn't change permissions."]
      explain: "The last three characters are ---: nothing for everyone else."
```

### Address check

### Leaving

### Review: permissions

## Make: check in on the Pi

```step
stage: make
insight: "Putting the steps together on your own is the whole move: reach the Pi, then use it."
try: { playground: board, starter: "shell.yml#make", height: 520 }
hint: ["You need to be on the Pi first.", "ssh pi@raspberrypi.local", "Then type uptime."]
check: { type: board, text: "From your laptop, log in to the Pi and run uptime to see how long it has been on.", when: "on_pi = 1 and ran_it = 1", explain: "uptime tells you how long the Pi has been on. Administrators check it first when something seems wrong." }
```

Then: on a real Pi (or any Mac or Linux computer) try hostname and uptime.
