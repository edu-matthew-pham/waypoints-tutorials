---
marp: true
theme: default
html: true
---

# Log in to the Pi from your laptop

System admin on a Raspberry Pi · Set up

<!-- Speaker note: A Raspberry Pi can run with no screen. From your laptop you reach it by name or address and type to it with ssh. Every command after ssh runs on the Pi, until you type exit. About 40 minutes (Predict and Try 8 min · Worked example 10 min · Vary 10 min · Practise and Make 12 min). -->

---

## Today

- I can log in to the Pi from my laptop with ssh.
- I can say where a command runs: on the laptop, or on the Pi.
- I can explain why a name is steadier than an address.

<!-- Speaker note: Before class: Try the boards yourself. The one idea: ssh joins your keyboard to another computer, so commands run there. Names and addresses find a computer (Networks › Across the internet); an account says who may use it (Security and privacy). Simplifications: the pretend laptop knows one Pi, `raspberrypi.local` or `192.168.1.23`, and its password is always accepted. A real Pi asks for the password you set. Real Pi (optional, any time): the pretend Pi is the same for every student, so nothing here needs hardware. If you have Pis, any number per group works, Pi 4 or Pi 5. A Pi 5 needs a 27 W USB-C supply (a 15 W phone charger makes it complain and limit USB power). Students can sit at a Pi with a screen and keyboard, or reach it by `ssh` from a laptop once it is on the network. Either start works for every lesson after the first: choose a ready-made image (you set the hostname, the user and ssh once, then clone the card) or have students flash their own with Raspberry Pi Imager (OS: Raspberry Pi OS Lite 64-bit; in the settings set a hostname, a user and password, ssh on, and Wi-Fi if needed). Both reach lesson 2 in the same state. To start again: reflash the card, or write a short reset script (remove added users, `sudo apt remove`, restore saved config files) and run it. Other options: this lesson uses `ssh`, which is on Mac, Linux and recent Windows. On older Windows, PuTTY does the same job. A Pi with a screen and keyboard needs no ssh at all; the next lessons are identical. Teacher: Try: ask whose prompt it is. Teacher: Worked example: point out how little changes on screen, but everything changes where it runs. Teacher: Vary: ask why a wrong user is refused even though the Pi is reachable. -->

---

## Why it matters

> The Pi has no screen on it. How do you control it from across the room?

<!-- Speaker note: A server is a computer you run from somewhere else. Almost every server, and every Pi without a screen, is run by typing to it over the network. This is the same idea as *Across the internet* in Networks: names and addresses find the computer, then messages go to it. -->

---

<span style="background:#dbeafe; color:#1a1a1a; border:1.5px solid #3b82f6; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">💬 Discussion</span>

## Think, pair, share

**You can't touch the computer. How do you control it?**

- What do you need to find it?
- What proves you are allowed?

<!-- Speaker note: A name or address, then an account and password. Give 30 seconds alone, 2 minutes in pairs, then take answers from both sides. There is no single right answer: ask for a reason, and let students change their minds. -->

---

<span style="background:#dbeafe; color:#1a1a1a; border:1.5px solid #3b82f6; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">💬 Discussion</span>

## Predict

**On your laptop you type ssh pi@raspberrypi.local and log in. Where does the next command you type run?**

- On both at the same time
- Nowhere until someone presses the Pi's power button
- On the Pi: ssh joins your keyboard to it
- On your laptop, which asks the Pi to copy the answer

<!-- Speaker note: What happens: On the Pi. Until you type exit, everything you type is sent to the Pi and run there. Only the text comes back. Take two or three predictions before anyone runs it. -->

<!-- Speaker note: Teacher: the wrong answers think the laptop does the work. -->

---

<span style="background:#fef3c7; color:#1a1a1a; border:1.5px solid #f59e0b; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✍️ Activity</span>

## Two prompts <span style="font-size:.6em;color:#64748b">(4 min)</span>

Write the laptop prompt and the Pi prompt on cards. Hold up the one where the next command runs.

<!-- Speaker note: The prompt tells you. -->

---

<span style="background:#fef3c7; color:#1a1a1a; border:1.5px solid #f59e0b; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✍️ Activity</span>

## Try it

{{embed: https://tutorials.learningwaypoints.com/_playground-board/index.html?id=deck%2Fsystems%2Fsysadmin%2Ffirst-boot%2Fstep-2&code=widget%3A+shell%0Afs%3A+pi%0Afrom%3A+laptop%0A&fresh=1}}

[Open this step in the tutorial](https://tutorials.learningwaypoints.com/systems/sysadmin/first-boot/?full=step-2#step-2)

<!-- Speaker note: Was your prediction right? -->

<style scoped>pre, marp-pre { font-size: 0.5em; line-height: 1.25; } section { font-size: 25px; }</style>

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## What happened?

* On the Pi. Until you type exit, everything you type is sent to the Pi and run there. Only the text comes back.

<!-- Speaker note: Reveal after running. Ask who predicted it, and what made them think so. -->

---

<span style="background:#dbeafe; color:#1a1a1a; border:1.5px solid #3b82f6; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">💬 Discussion</span>

## Logging in, step by step

Now try it yourself.

$$\text{ssh pi@raspberrypi.local}$$

1) $\text{password}$ — the Pi checks who you are (authentication). Nothing shows as you type it.
2) $\text{pi@raspberrypi:~\$}$ — the prompt is now the Pi's. Every command runs there.
3) $\text{exit}$ — ends the session and brings you back to the laptop.

<!-- Speaker note: Model this live on the board before revealing anything: write each line and say why, pausing to ask the class what comes next. Then click to reveal the lines and compare. Script. Start: write ssh pi@raspberrypi.local and say "user pi, computer raspberrypi.local. ssh is the program that joins you to it." Line 1: write password and say "the Pi checks who you are (authentication). Nothing shows as you type it." Line 2: write pi@raspberrypi:~\$ and say "the prompt is now the Pi's. Every command runs there." Line 3: write exit and say "ends the session and brings you back to the laptop." -->

<style scoped>pre, marp-pre { font-size: 0.5em; line-height: 1.25; } section { font-size: 27px; }</style>

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Logging in, step by step

**The Pi is reachable as raspberrypi.local and as 192.168.1.23. After the router restarts, which is more likely to still work?**

- Both change
- raspberrypi.local: the name follows the Pi
- 192.168.1.23: numbers never change
- Neither

* Answer: raspberrypi.local: the name follows the Pi

<!-- Speaker note: The name goes with the Pi. The router may give it a new address, so use the name first and the address as a backup. -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Find the mistake

**Sam checks the Pi's disk space. Click the line where it first goes wrong.**

```
 1  Sam wants to know how much space the Pi has left.
 2  Sam opens a terminal on the laptop and types df -h.
 3  Sam reads: 41% used.
 4  So the Pi has plenty of room.
```

* Answer: line 2

<!-- Speaker note: Line 2: without ssh, df -h shows the laptop's disk. Log in with ssh first, then the command runs on the Pi. -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Connection refused

**ssh pi@raspberrypi.local says: Connection refused. What does it most likely mean?**

- Your password is wrong
- The Pi has no name
- The Pi is on the network but nothing is listening for ssh (the service is stopped)
- Your laptop is offline

* Answer: The Pi is on the network but nothing is listening for ssh (the service is stopped)

<!-- Speaker note: Refused means the Pi answered but no program is waiting on port 22. Services come in lesson 4. -->

<style scoped>pre, marp-pre { font-size: 0.5em; line-height: 1.25; } section { font-size: 25px; }</style>

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Refused

**ssh says Connection refused. The Pi is on. What is the likeliest cause?**

- ssh is not running on the Pi
- Wrong password
- No name
- Laptop broken

* Answer: ssh is not running on the Pi

<!-- Speaker note: Refused means nothing is listening on port 22. Ask on mini whiteboards or by show of hands before the reveal. -->

---

<span style="background:#fef3c7; color:#1a1a1a; border:1.5px solid #f59e0b; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✍️ Activity</span>

## Vary: change one thing



- **Ask its name:** 
- **Can it reach the laptop?:** 
- **No account:** 

[Open this step](https://tutorials.learningwaypoints.com/systems/sysadmin/first-boot/?full=step-4#step-4)

<!-- Speaker note: What this step is for: Each task changes one thing: ask the Pi its name, check the laptop can reach it, then log in as someone who has no account. For students who need more support: Write the two prompts on the board: sam@laptop and pi@raspberrypi. For early finishers: Find out what ssh keys are and why many servers do not allow passwords at all. The hard part, on purpose: Students forget which computer they are typing on. Read the prompt aloud every time: sam@laptop or pi@raspberrypi. When students get stuck: A student runs commands and nothing seems to change. Ask: Whose prompt is it? Have you logged in? Fix: ssh pi@raspberrypi.local first. / A student types exit and thinks the Pi has shut down. Ask: What did exit end? Fix: Only the session. The Pi keeps running. -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Address check

**Which of these cannot be an IP address?**

- 192.168.1.300
- 172.16.4.2
- 192.168.1.23
- 10.0.0.5

* Answer: 192.168.1.300

<!-- Speaker note: Each number is 0 to 255, so 300 is too big. -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Leaving

**You are logged in to the Pi over ssh. You type exit. Where are you?**

- Logged in to a second Pi
- The Pi shuts down
- Back at your laptop's prompt
- Still on the Pi

* Answer: Back at your laptop's prompt

<!-- Speaker note: exit closes the ssh session. The Pi keeps running. -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Review: permissions

**Review: a file is rw------- (600). Can another user read it?**

- Yes: they can read it
- Only if it is hidden
- No: others have no permissions
- Only over ssh

* Answer: No: others have no permissions

<!-- Speaker note: The last three characters are ---: nothing for everyone else. -->

---

<span style="background:#fef3c7; color:#1a1a1a; border:1.5px solid #f59e0b; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✍️ Activity</span>

## Make: check in on the Pi

Then: on a real Pi (or any Mac or Linux computer) try hostname and uptime.

[Open this step](https://tutorials.learningwaypoints.com/systems/sysadmin/first-boot/?full=step-6#step-6)

<!-- Speaker note: What this step is for: Putting the steps together on your own is the whole move: reach the Pi, then use it. Hints, in order: You need to be on the Pi first. / ssh pi@raspberrypi.local / Then type uptime. -->

<!-- Speaker note: Teacher: ask what an administrator checks first when a server seems slow. -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Exit ticket

**Where does a command run after you ssh to the Pi, and how do you get back?**

* On the Pi. Type exit to return to your laptop.

<!-- Speaker note: Students answer on paper or a mini whiteboard before the reveal. Anyone who cannot answer needs the main idea again next lesson. Where this leads: Links: Networks › Across the internet (names and addresses); Security and privacy › Names and addresses; next: Install software. -->
