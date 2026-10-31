---
title: "Log in to the Pi from your laptop"
subtitle: "System admin on a Raspberry Pi · Set up · Lesson 1"
---

# Log in to the Pi from your laptop

**Name:** {{field-24}} **Date:** {{field-15}} **Class:** {{field-15}}

> **Key question:** The Pi has no screen on it. How do you control it from across the room?


:::teacher-note

**In one sentence:** A Raspberry Pi can run with no screen. From your laptop you reach it by name or address and type to it with ssh. Every command after ssh runs on the Pi, until you type exit.

**Students should be able to say:** I can log in to the Pi from my laptop with ssh. I can say where a command runs: on the laptop, or on the Pi. I can explain why a name is steadier than an address.

**Width:** the unmarked parts are the floor every student does (predict, run, investigate and make). Typical adds the modify practice; wider adds the real-world contexts. They add contexts, not difficulty. Students work in the online tutorial alongside this sheet.

:::


## Predict


:::keep-together

**On your laptop you type ssh pi@raspberrypi.local and log in. Where does the next command you type run?**

☐ On both at the same time

☐ Nowhere until someone presses the Pi's power button

☐ On the Pi: ssh joins your keyboard to it

☐ On your laptop, which asks the Pi to copy the answer

My prediction, and why:

{{lines-3}}

:::


:::teacher-note

**What happens:** On the Pi. Until you type exit, everything you type is sent to the Pi and run there. Only the text comes back.

:::


## Run

Try it on the board in the tutorial. Was your prediction right? What was different?

{{lines-2}}

## Worked example: Logging in, step by step


:::keep-together

### Logging in, step by step

1. $\text{ssh pi@raspberrypi.local}$ — user pi, computer raspberrypi.local. ssh is the program that joins you to it.
2. $\text{password}$ — the Pi checks who you are (authentication). Nothing shows as you type it.
3. $\text{pi@raspberrypi:~\$}$ — the prompt is now the Pi's. Every command runs there.
4. $\text{exit}$ — ends the session and brings you back to the laptop.

Now try it yourself.

**The Pi is reachable as raspberrypi.local and as 192.168.1.23. After the router restarts, which is more likely to still work?**

☐ Both change

☐ raspberrypi.local: the name follows the Pi

☐ 192.168.1.23: numbers never change

☐ Neither

:::


:::teacher-note

**Answer:** raspberrypi.local: the name follows the Pi

The name goes with the Pi. The router may give it a new address, so use the name first and the address as a backup.

:::


:::keep-together

### Find the mistake

**Sam checks the Pi's disk space. Click the line where it first goes wrong.**

```
 1  Sam wants to know how much space the Pi has left.
 2  Sam opens a terminal on the laptop and types df -h.
 3  Sam reads: 41% used.
 4  So the Pi has plenty of room.
```

Line: {{field-15}}

Why is it wrong?

{{lines-2}}

:::


:::teacher-note

**Answer:** line 2

Line 2: without ssh, df -h shows the laptop's disk. Log in with ssh first, then the command runs on the Pi.

:::


:::keep-together

### Connection refused

**ssh pi@raspberrypi.local says: Connection refused. What does it most likely mean?**

☐ Your password is wrong

☐ The Pi has no name

☐ The Pi is on the network but nothing is listening for ssh (the service is stopped)

☐ Your laptop is offline

:::


:::teacher-note

**Answer:** The Pi is on the network but nothing is listening for ssh (the service is stopped)

Refused means the Pi answered but no program is waiting on port 22. Services come in lesson 4.

:::


:::typical

## Vary: change one thing


**Ask its name.** 

**Can it reach the laptop?.** 

**No account.** 

Work in the tutorial. Plan first: what will you change, and how will you test it?

{{box-4}}

:::


## Practise


:::keep-together

### Address check

**Which of these cannot be an IP address?**

☐ 192.168.1.300

☐ 172.16.4.2

☐ 192.168.1.23

☐ 10.0.0.5

:::


:::teacher-note

**Answer:** 192.168.1.300

Each number is 0 to 255, so 300 is too big.

:::


:::keep-together

### Leaving

**You are logged in to the Pi over ssh. You type exit. Where are you?**

☐ Logged in to a second Pi

☐ The Pi shuts down

☐ Back at your laptop's prompt

☐ Still on the Pi

:::


:::teacher-note

**Answer:** Back at your laptop's prompt

exit closes the ssh session. The Pi keeps running.

:::


:::keep-together

### Review: permissions

**Review: a file is rw------- (600). Can another user read it?**

☐ Yes: they can read it

☐ Only if it is hidden

☐ No: others have no permissions

☐ Only over ssh

:::


:::teacher-note

**Answer:** No: others have no permissions

The last three characters are ---: nothing for everyone else.

:::


## Make: check in on the Pi

Then: on a real Pi (or any Mac or Linux computer) try hostname and uptime.

Work in the tutorial. Plan first: what will you change, and how will you test it?

{{box-4}}

## Exit ticket

:::keep-together

**Where does a command run after you ssh to the Pi, and how do you get back?**

{{lines-3}}

:::


:::teacher-note

**Answer:** On the Pi. Type exit to return to your laptop.

:::

