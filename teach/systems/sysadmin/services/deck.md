---
marp: true
theme: default
html: true
---

# Services: start, stop and enable

System admin on a Raspberry Pi · Serve

<!-- Speaker note: A service is a program that runs in the background so others can use it. systemctl starts and stops one now, and enable decides whether it starts at every boot. These are two separate things. About 40 minutes (Predict and Try 8 min · Worked example 10 min · Vary 10 min · Practise and Make 12 min). -->

---

## Today

- I can start and stop a service, and enable it for boot.
- I can say why running now and starting at boot are different.
- I can read a service's log with journalctl.

<!-- Speaker note: Before class: Try the boards yourself. The one idea: the operating system starts and watches background programs. A service's state and its boot setting are separate. Simplifications: the pretend Pi has five services (ssh, cron, smbd, jellyfin, unattended-upgrades). `reboot` is instant. On a real Pi `systemctl status` pages its output: press q to leave. Other options: `service smbd start` is the older form of the same thing; Docker or containers are another way to run a service (parked). With internet: services that others reach over the internet are a bigger risk than ones on the school network, because anyone can try them (see the last lesson). Teacher: Try: ask which command did which job. Teacher: Worked example: show status before and after on the board. Teacher: Vary: after the reboot task, ask which services a server must have enabled. -->

---

## Why it matters

> Samba is installed, but nobody can reach the share. Is it broken?

<!-- Speaker note: Programs on a server have to be running before anyone can use them. A **service** is a program started by the operating system and kept running. The operating system's job is to start, stop and watch services, which is why one command, `systemctl`, controls them all. -->

---

<span style="background:#dbeafe; color:#1a1a1a; border:1.5px solid #3b82f6; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">💬 Discussion</span>

## Think, pair, share

**A program has to be running before anyone can use it. Who starts it, and what if the computer restarts?**

- What happens to your programs when you restart your own computer?
- Which should come back by themselves?

<!-- Speaker note: The operating system starts services; enable decides which come back. Give 30 seconds alone, 2 minutes in pairs, then take answers from both sides. There is no single right answer: ask for a reason, and let students change their minds. -->

---

<span style="background:#dbeafe; color:#1a1a1a; border:1.5px solid #3b82f6; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">💬 Discussion</span>

## Predict

**smbd is stopped. You type sudo systemctl enable smbd. Is smbd running now?**

- No: enable only sets it to start at the next boot
- It deletes smbd
- Yes, but only until you log out
- Yes: enable also starts it

<!-- Speaker note: What happens: No. enable decides what happens at boot. To run it now you need start (or enable --now). Take two or three predictions before anyone runs it. -->

<!-- Speaker note: Teacher: wrong answers think enable starts it. -->

---

<span style="background:#fef3c7; color:#1a1a1a; border:1.5px solid #f59e0b; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✍️ Activity</span>

## Now or boot <span style="font-size:.6em;color:#64748b">(4 min)</span>

Two cards: NOW and BOOT. Read out commands (start, enable, stop, disable); students hold up the card that matches.

<!-- Speaker note: enable-now combines both. -->

---

<span style="background:#fef3c7; color:#1a1a1a; border:1.5px solid #f59e0b; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✍️ Activity</span>

## Try it

{{embed: https://tutorials.learningwaypoints.com/_playground-board/index.html?id=deck%2Fsystems%2Fsysadmin%2Fservices%2Fstep-2&code=widget%3A+shell%0Afs%3A+pi%0Apkgs%3A+samba%0Astopped%3A+smbd%0Adisabled%3A+smbd%0Asvc%3A+smbd%0A&fresh=1}}

[Open this step in the tutorial](https://tutorials.learningwaypoints.com/systems/sysadmin/services/?full=step-2#step-2)

<!-- Speaker note: Was your prediction right? -->

<style scoped>pre, marp-pre { font-size: 0.5em; line-height: 1.25; } section { font-size: 25px; }</style>

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## What happened?

* No. enable decides what happens at boot. To run it now you need start (or enable --now).

<!-- Speaker note: Reveal after running. Ask who predicted it, and what made them think so. -->

---

<span style="background:#dbeafe; color:#1a1a1a; border:1.5px solid #3b82f6; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">💬 Discussion</span>

## Two different switches

Now try it yourself.

$$\text{systemctl status smbd}$$

1) $\text{sudo systemctl start smbd}$ — run it now.
2) $\text{sudo systemctl enable smbd}$ — also start it at every boot.
3) $\text{journalctl -u smbd}$ — read what the service has logged.

<!-- Speaker note: Model this live on the board before revealing anything: write each line and say why, pausing to ask the class what comes next. Then click to reveal the lines and compare. Script. Start: write systemctl status smbd and say "is it running now, and will it start at boot?" Line 1: write sudo systemctl start smbd and say "run it now." Line 2: write sudo systemctl enable smbd and say "also start it at every boot." Line 3: write journalctl -u smbd and say "read what the service has logged." -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Two different switches

**What is the difference between start and enable?**

- enable runs it now; start runs it at boot
- They are the same
- start runs it now; enable runs it at every boot
- start installs it

* Answer: start runs it now; enable runs it at every boot

<!-- Speaker note: A service has a state (running or not now) and a boot setting (will it start next time). systemctl status shows both. -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Find the mistake

**Sam thinks the share is up. Click the line where it first goes wrong.**

```
 1  smbd is stopped, so the class share is down.
 2  Sam types sudo systemctl enable smbd.
 3  The command prints no error.
 4  So the share is up. Sam tells the class.
```

* Answer: line 3

<!-- Speaker note: Line 3 is where Sam's belief starts: no error doesn't mean running. enable only changes the boot setting. Check with systemctl status smbd. -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Read the log

**Where can you read why a service stopped or failed?**

- cat /etc/hostname
- apt update
- ls
- journalctl -u name

* Answer: journalctl -u name

<!-- Speaker note: journalctl -u smbd prints that service's log. It is the first place an administrator looks. -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Boot

**status says disabled. What does that mean?**

- It will not start at boot
- It is not installed
- It is broken
- It is running

* Answer: It will not start at boot

<!-- Speaker note: Disabled is about boot, not about now. Ask on mini whiteboards or by show of hands before the reveal. -->

---

<span style="background:#fef3c7; color:#1a1a1a; border:1.5px solid #f59e0b; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✍️ Activity</span>

## Vary: change one thing



- **Switch it off:** 
- **After a reboot:** 
- **Read the log:** 

[Open this step](https://tutorials.learningwaypoints.com/systems/sysadmin/services/?full=step-4#step-4)

<!-- Speaker note: What this step is for: Each task changes one thing: switch it off, test what a reboot does, and read the log. For students who need more support: Two sticky notes: NOW (start, stop) and BOOT (enable, disable). For early finishers: Find out what a unit file is and where the Pi keeps them. The hard part, on purpose: Enable versus start. Make students say both out loud: 'now' and 'at boot'. When students get stuck: A student enabled the service but cannot connect. Ask: Is it running? What does status say? Fix: sudo systemctl start name, or enable --now. / systemctl says 'Interactive authentication required'. Ask: Did you use sudo? Fix: sudo systemctl ... -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Reading status

**status shows: active (running), disabled. You reboot. What happens to the service?**

- It restarts twice
- It stays off after the reboot
- It keeps running
- It is deleted

* Answer: It stays off after the reboot

<!-- Speaker note: Running now and starting at boot are separate. This one was running but disabled. -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Both at once

**Which single command starts a service now and sets it to start at every boot?**

- systemctl name
- sudo apt install name
- sudo systemctl enable --now name
- sudo systemctl start name

* Answer: sudo systemctl enable --now name

<!-- Speaker note: enable --now does both in one go. -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Review: -aG

**Review: Sam adds alex to a group with usermod -G. What went wrong?**

- Nothing
- Alex is deleted
- -G without -a replaces all Alex's groups
- sudo was missing

* Answer: -G without -a replaces all Alex's groups

<!-- Speaker note: -aG adds and keeps the rest. -->

---

<span style="background:#fef3c7; color:#1a1a1a; border:1.5px solid #f59e0b; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✍️ Activity</span>

## Make: survive a reboot

Then: on a real Pi, run systemctl status ssh and systemctl list-units --type=service.

[Open this step](https://tutorials.learningwaypoints.com/systems/sysadmin/services/?full=step-6#step-6)

<!-- Speaker note: What this step is for: Making a service survive a reboot, and proving it, is the whole move. Hints, in order: It runs now but would not after a reboot. / Enable it first, then reboot. / sudo systemctl enable smbd, then sudo reboot, then systemctl status smbd. -->

<!-- Speaker note: Teacher: ask why it is proved by rebooting. -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Exit ticket

**smbd is running but disabled. What happens after a reboot?**

* It stays off: disabled means it does not start at boot.

<!-- Speaker note: Students answer on paper or a mini whiteboard before the reveal. Anyone who cannot answer needs the main idea again next lesson. Where this leads: Links: Networks (ports and servers); next: Share files with Samba. -->
