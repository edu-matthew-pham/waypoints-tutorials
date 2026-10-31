---
title: "Install software with apt"
subtitle: "System admin on a Raspberry Pi · Set up · Lesson 2"
---

# Install software with apt

**Name:** {{field-24}} **Date:** {{field-15}} **Class:** {{field-15}}

> **Key question:** Your phone has an app store. What does a Pi have?


:::teacher-note

**In one sentence:** On a Pi you add programs with apt, from a software source on the internet. You update the lists first, then install. sudo runs one command as the administrator, and the system records who used it.

**Students should be able to say:** I can update the package lists, then install a program. I can say what sudo does and why a normal user needs it. I can explain what happens when there is no internet.

**Width:** the unmarked parts are the floor every student does (predict, run, investigate and make). Typical adds the modify practice; wider adds the real-world contexts. They add contexts, not difficulty. Students work in the online tutorial alongside this sheet.

:::


## Predict


:::keep-together

**On a brand-new Pi you type sudo apt install tree straight away, without updating first. What happens?**

☐ tree installs

☐ It installs a different program

☐ It asks for the administrator password forever

☐ Error: it can't find the package yet, because its list is empty

My prediction, and why:

{{lines-3}}

:::


:::teacher-note

**What happens:** Error: Unable to locate package tree. apt only knows the packages on its list, and a new Pi has not downloaded the list yet. sudo apt update fetches it.

:::


## Run

Try it on the board in the tutorial. Was your prediction right? What was different?

{{lines-2}}

## Worked example: Installing, step by step


:::keep-together

### Installing, step by step

1. $\text{sudo apt update}$ — download the list of what is available. Nothing is installed yet.
2. $\text{sudo apt install tree}$ — fetch the program and set it up.
3. $\text{sudo apt upgrade}$ — replace installed programs with newer versions.
4. $\text{sudo apt remove tree}$ — take it off again.

Now try it yourself.

**What does sudo do?**

☐ Runs one command as the administrator, if you are allowed

☐ Makes you the administrator until you log out

☐ Hides the command from the log

☐ Installs software

:::


:::teacher-note

**Answer:** Runs one command as the administrator, if you are allowed

sudo is a pass for one command. Only users in the sudo group may use it, and it records who did what.

:::


:::keep-together

### Find the mistake

**Sam wants to avoid typing sudo. Click the line where it first goes wrong.**

```
 1  Sam is tired of typing sudo before every command.
 2  So Sam logs in as root and does everything that way.
 3  Sam installs tree. It works.
 4  So working as root all the time is the best way.
```

Line: {{field-15}}

Why is it wrong?

{{lines-2}}

:::


:::teacher-note

**Answer:** line 2

Line 2: as root, every typo can delete or break anything, and the log shows only 'root'. sudo asks for one command at a time and records who ran it.

:::


:::keep-together

### No internet

**You want to install a program but the Pi has no internet. What are your options?**

☐ Nothing is possible

☐ Use a local software source or a USB stick with the packages

☐ Type apt harder

☐ Install from the next room

:::


:::teacher-note

**Answer:** Use a local software source or a USB stick with the packages

apt reads from a software source. Your school can host one, or you can carry packages in on a USB stick. Without a source, apt can't update.

:::


:::typical

## Vary: change one thing


**Another program.** 

**Take one away.** 

**No network.** 

Work in the tutorial. Plan first: what will you change, and how will you test it?

{{box-4}}

:::


## Practise


:::keep-together

### Order

**Which pair of commands installs a program on a new Pi?**

☐ sudo install name

☐ apt install name, then sudo

☐ sudo apt update, then sudo apt install name

☐ sudo apt upgrade, then update

:::


:::teacher-note

**Answer:** sudo apt update, then sudo apt install name

update gets the list, then install uses it.

:::


:::keep-together

### Why sudo

**Why does apt need sudo?**

☐ It checks your spelling

☐ Installing changes the whole system, so only administrators may

☐ It needs the internet

☐ It is slow

:::


:::teacher-note

**Answer:** Installing changes the whole system, so only administrators may

A normal user can't change the system. That is why permission matters.

:::


:::keep-together

### Review: ssh

**Review: you ssh to the Pi and run sudo apt update. Where is the list downloaded to?**

☐ The router

☐ Your laptop

☐ The Pi

☐ Both

:::


:::teacher-note

**Answer:** The Pi

After ssh, commands run on the Pi.

:::


## Make: set up a new Pi

Then: on a real Pi, run sudo apt update, then apt list --upgradable to see what is waiting.

Work in the tutorial. Plan first: what will you change, and how will you test it?

{{box-4}}

## Exit ticket

:::keep-together

**Why do you run sudo apt update before installing?**

{{lines-3}}

:::


:::teacher-note

**Answer:** It downloads the list of packages; without it, a new Pi does not know what exists.

:::

