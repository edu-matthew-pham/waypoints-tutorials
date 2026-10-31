---
marp: true
theme: default
html: true
---

# Install software with apt

System admin on a Raspberry Pi · Set up

<!-- Speaker note: On a Pi you add programs with apt, from a software source on the internet. You update the lists first, then install. sudo runs one command as the administrator, and the system records who used it. About 40 minutes (Predict and Try 8 min · Worked example 10 min · Vary 10 min · Practise and Make 12 min). -->

---

## Today

- I can update the package lists, then install a program.
- I can say what sudo does and why a normal user needs it.
- I can explain what happens when there is no internet.

<!-- Speaker note: Before class: Try the boards yourself. The one idea: the operating system keeps programs apart from users, so changing the system needs an administrator, and apt fetches programs from a software source. Simplification: the pretend software source has seven packages (samba, jellyfin, ufw, tree, cowsay, unattended-upgrades and vim); real ones have tens of thousands. Pi OS Lite already has nano, openssh-server and cron. Offline: the course works without the internet on the pretend Pi. On a real Pi with no internet, plan for it in advance: download the `.deb` packages and their dependencies on another computer and install with `sudo apt install ./file.deb`; or run a local mirror (for example `apt-cacher-ng` on one Pi in the room); or use the Pi's own power: with no network, `sudo apt update` fails by design. Jellyfin is not in Raspberry Pi OS's own list: a real install adds Jellyfin's repository first (lesson 6 says so). Say this before students try it for real. With internet: automatic security updates (`unattended-upgrades`) belong in the last lessons. Real Pi (optional, any time): the pretend Pi is the same for every student, so nothing here needs hardware. If you have Pis, any number per group works, Pi 4 or Pi 5. A Pi 5 needs a 27 W USB-C supply (a 15 W phone charger makes it complain and limit USB power). Students can sit at a Pi with a screen and keyboard, or reach it by `ssh` from a laptop once it is on the network. Either start works for every lesson after the first: choose a ready-made image (you set the hostname, the user and ssh once, then clone the card) or have students flash their own with Raspberry Pi Imager (OS: Raspberry Pi OS Lite 64-bit; in the settings set a hostname, a user and password, ssh on, and Wi-Fi if needed). Both reach lesson 2 in the same state. To start again: reflash the card, or write a short reset script (remove added users, `sudo apt remove`, restore saved config files) and run it. Teacher: Try: ask what update changed. Teacher: Worked example: stop at the sudo question and ask who decides who may sudo (lesson 3). Teacher: Vary: after the offline task, ask what a school would do. -->

---

## Why it matters

> Your phone has an app store. What does a Pi have?

<!-- Speaker note: An operating system keeps programs, files and hardware apart, and **apt** is how you add programs. It fetches them from a software source (a repository) over the network, so lessons about it need the internet unless the programs are already on a USB stick. Offline, your teacher can set up a local source. -->

---

<span style="background:#dbeafe; color:#1a1a1a; border:1.5px solid #3b82f6; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">💬 Discussion</span>

## Think, pair, share

**Where do programs come from, and who decides what gets installed?**

- How does your phone get apps?
- Who should be allowed to add programs to a shared computer?

<!-- Speaker note: A store or source; only administrators. Give 30 seconds alone, 2 minutes in pairs, then take answers from both sides. There is no single right answer: ask for a reason, and let students change their minds. -->

---

<span style="background:#dbeafe; color:#1a1a1a; border:1.5px solid #3b82f6; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">💬 Discussion</span>

## Predict

**On a brand-new Pi you type sudo apt install tree straight away, without updating first. What happens?**

- tree installs
- It installs a different program
- It asks for the administrator password forever
- Error: it can't find the package yet, because its list is empty

<!-- Speaker note: What happens: Error: Unable to locate package tree. apt only knows the packages on its list, and a new Pi has not downloaded the list yet. sudo apt update fetches it. Take two or three predictions before anyone runs it. -->

<!-- Speaker note: Teacher: wrong answers think apt already knows everything. -->

---

<span style="background:#dbeafe; color:#1a1a1a; border:1.5px solid #3b82f6; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">💬 Discussion</span>

## Menu and meal <span style="font-size:.6em;color:#64748b">(4 min)</span>

Update the menu, then order. What happens if you order before you have seen the menu?

<!-- Speaker note: That is what apt install without update does. -->

---

<span style="background:#fef3c7; color:#1a1a1a; border:1.5px solid #f59e0b; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✍️ Activity</span>

## Try it

{{embed: https://tutorials.learningwaypoints.com/_playground-board/index.html?id=deck%2Fsystems%2Fsysadmin%2Fsoftware%2Fstep-2&code=widget%3A+shell%0Afs%3A+pi%0Apkg%3A+tree%0A&fresh=1}}

[Open this step in the tutorial](https://tutorials.learningwaypoints.com/systems/sysadmin/software/?full=step-2#step-2)

<!-- Speaker note: Was your prediction right? -->

<style scoped>pre, marp-pre { font-size: 0.5em; line-height: 1.25; } section { font-size: 25px; }</style>

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## What happened?

* Error: Unable to locate package tree. apt only knows the packages on its list, and a new Pi has not downloaded the list yet. sudo apt update fetches it.

<!-- Speaker note: Reveal after running. Ask who predicted it, and what made them think so. -->

---

<span style="background:#dbeafe; color:#1a1a1a; border:1.5px solid #3b82f6; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">💬 Discussion</span>

## Installing, step by step

Now try it yourself.

$$\text{sudo apt update}$$

1) $\text{sudo apt install tree}$ — fetch the program and set it up.
2) $\text{sudo apt upgrade}$ — replace installed programs with newer versions.
3) $\text{sudo apt remove tree}$ — take it off again.

<!-- Speaker note: Model this live on the board before revealing anything: write each line and say why, pausing to ask the class what comes next. Then click to reveal the lines and compare. Script. Start: write sudo apt update and say "download the list of what is available. Nothing is installed yet." Line 1: write sudo apt install tree and say "fetch the program and set it up." Line 2: write sudo apt upgrade and say "replace installed programs with newer versions." Line 3: write sudo apt remove tree and say "take it off again." -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Installing, step by step

**What does sudo do?**

- Runs one command as the administrator, if you are allowed
- Makes you the administrator until you log out
- Hides the command from the log
- Installs software

* Answer: Runs one command as the administrator, if you are allowed

<!-- Speaker note: sudo is a pass for one command. Only users in the sudo group may use it, and it records who did what. -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Find the mistake

**Sam wants to avoid typing sudo. Click the line where it first goes wrong.**

```
 1  Sam is tired of typing sudo before every command.
 2  So Sam logs in as root and does everything that way.
 3  Sam installs tree. It works.
 4  So working as root all the time is the best way.
```

* Answer: line 2

<!-- Speaker note: Line 2: as root, every typo can delete or break anything, and the log shows only 'root'. sudo asks for one command at a time and records who ran it. -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## No internet

**You want to install a program but the Pi has no internet. What are your options?**

- Nothing is possible
- Use a local software source or a USB stick with the packages
- Type apt harder
- Install from the next room

* Answer: Use a local software source or a USB stick with the packages

<!-- Speaker note: apt reads from a software source. Your school can host one, or you can carry packages in on a USB stick. Without a source, apt can't update. -->

<style scoped>pre, marp-pre { font-size: 0.5em; line-height: 1.25; } section { font-size: 27px; }</style>

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Order

**Which comes first on a new Pi?**

- sudo apt update
- sudo apt install
- sudo reboot
- sudo apt remove

* Answer: sudo apt update

<!-- Speaker note: The lists have to be downloaded before anything can be installed. Ask on mini whiteboards or by show of hands before the reveal. -->

---

<span style="background:#fef3c7; color:#1a1a1a; border:1.5px solid #f59e0b; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✍️ Activity</span>

## Vary: change one thing



- **Another program:** 
- **Take one away:** 
- **No network:** 

[Open this step](https://tutorials.learningwaypoints.com/systems/sysadmin/software/?full=step-4#step-4)

<!-- Speaker note: What this step is for: Each task changes one thing: a different program, taking one away, and what happens offline. For students who need more support: A card with the order: update, then install. For early finishers: Find out what a repository is and why Jellyfin asks you to add one. The hard part, on purpose: Update versus upgrade. Update gets the list; upgrade installs newer versions. Say it as: update the menu, upgrade the meal. When students get stuck: A student gets 'Unable to locate package'. Ask: Did you run sudo apt update? Fix: Update the lists, then install. / A student gets 'Permission denied'. Ask: Did you use sudo? Fix: sudo apt install name. -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Order

**Which pair of commands installs a program on a new Pi?**

- sudo install name
- apt install name, then sudo
- sudo apt update, then sudo apt install name
- sudo apt upgrade, then update

* Answer: sudo apt update, then sudo apt install name

<!-- Speaker note: update gets the list, then install uses it. -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Why sudo

**Why does apt need sudo?**

- It checks your spelling
- Installing changes the whole system, so only administrators may
- It needs the internet
- It is slow

* Answer: Installing changes the whole system, so only administrators may

<!-- Speaker note: A normal user can't change the system. That is why permission matters. -->

<style scoped>pre, marp-pre { font-size: 0.5em; line-height: 1.25; } section { font-size: 27px; }</style>

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Review: ssh

**Review: you ssh to the Pi and run sudo apt update. Where is the list downloaded to?**

- The router
- Your laptop
- The Pi
- Both

* Answer: The Pi

<!-- Speaker note: After ssh, commands run on the Pi. -->

---

<span style="background:#fef3c7; color:#1a1a1a; border:1.5px solid #f59e0b; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✍️ Activity</span>

## Make: set up a new Pi

Then: on a real Pi, run sudo apt update, then apt list --upgradable to see what is waiting.

[Open this step](https://tutorials.learningwaypoints.com/systems/sysadmin/software/?full=step-6#step-6)

<!-- Speaker note: What this step is for: Putting update, upgrade and install in the right order is the whole move. Hints, in order: Start by getting the list. / sudo apt update, then sudo apt upgrade, then sudo apt install tree. / There are 12 waiting updates; upgrade installs them. -->

<!-- Speaker note: Teacher: ask why admins update first on a new machine. -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Exit ticket

**Why do you run sudo apt update before installing?**

* It downloads the list of packages; without it, a new Pi does not know what exists.

<!-- Speaker note: Students answer on paper or a mini whiteboard before the reveal. Anyone who cannot answer needs the main idea again next lesson. Where this leads: Links: The command line (permissions); next: Accounts, groups and sudo (who is allowed to sudo). -->
