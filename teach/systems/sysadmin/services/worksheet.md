---
title: "Services: start, stop and enable"
subtitle: "System admin on a Raspberry Pi · Serve · Lesson 4"
---

# Services: start, stop and enable

**Name:** {{field-24}} **Date:** {{field-15}} **Class:** {{field-15}}

> **Key question:** Samba is installed, but nobody can reach the share. Is it broken?


:::teacher-note

**In one sentence:** A service is a program that runs in the background so others can use it. systemctl starts and stops one now, and enable decides whether it starts at every boot. These are two separate things.

**Students should be able to say:** I can start and stop a service, and enable it for boot. I can say why running now and starting at boot are different. I can read a service's log with journalctl.

**Width:** the unmarked parts are the floor every student does (predict, run, investigate and make). Typical adds the modify practice; wider adds the real-world contexts. They add contexts, not difficulty. Students work in the online tutorial alongside this sheet.

:::


## Predict


:::keep-together

**smbd is stopped. You type sudo systemctl enable smbd. Is smbd running now?**

☐ No: enable only sets it to start at the next boot

☐ It deletes smbd

☐ Yes, but only until you log out

☐ Yes: enable also starts it

My prediction, and why:

{{lines-3}}

:::


:::teacher-note

**What happens:** No. enable decides what happens at boot. To run it now you need start (or enable --now).

:::


## Run

Try it on the board in the tutorial. Was your prediction right? What was different?

{{lines-2}}

## Worked example: Two different switches


:::keep-together

### Two different switches

1. $\text{systemctl status smbd}$ — is it running now, and will it start at boot?
2. $\text{sudo systemctl start smbd}$ — run it now.
3. $\text{sudo systemctl enable smbd}$ — also start it at every boot.
4. $\text{journalctl -u smbd}$ — read what the service has logged.

Now try it yourself.

**What is the difference between start and enable?**

☐ enable runs it now; start runs it at boot

☐ They are the same

☐ start runs it now; enable runs it at every boot

☐ start installs it

:::


:::teacher-note

**Answer:** start runs it now; enable runs it at every boot

A service has a state (running or not now) and a boot setting (will it start next time). systemctl status shows both.

:::


:::keep-together

### Find the mistake

**Sam thinks the share is up. Click the line where it first goes wrong.**

```
 1  smbd is stopped, so the class share is down.
 2  Sam types sudo systemctl enable smbd.
 3  The command prints no error.
 4  So the share is up. Sam tells the class.
```

Line: {{field-15}}

Why is it wrong?

{{lines-2}}

:::


:::teacher-note

**Answer:** line 3

Line 3 is where Sam's belief starts: no error doesn't mean running. enable only changes the boot setting. Check with systemctl status smbd.

:::


:::keep-together

### Read the log

**Where can you read why a service stopped or failed?**

☐ cat /etc/hostname

☐ apt update

☐ ls

☐ journalctl -u name

:::


:::teacher-note

**Answer:** journalctl -u name

journalctl -u smbd prints that service's log. It is the first place an administrator looks.

:::


:::typical

## Vary: change one thing


**Switch it off.** 

**After a reboot.** 

**Read the log.** 

Work in the tutorial. Plan first: what will you change, and how will you test it?

{{box-4}}

:::


## Practise


:::keep-together

### Reading status

**status shows: active (running), disabled. You reboot. What happens to the service?**

☐ It restarts twice

☐ It stays off after the reboot

☐ It keeps running

☐ It is deleted

:::


:::teacher-note

**Answer:** It stays off after the reboot

Running now and starting at boot are separate. This one was running but disabled.

:::


:::keep-together

### Both at once

**Which single command starts a service now and sets it to start at every boot?**

☐ systemctl name

☐ sudo apt install name

☐ sudo systemctl enable --now name

☐ sudo systemctl start name

:::


:::teacher-note

**Answer:** sudo systemctl enable --now name

enable --now does both in one go.

:::


:::keep-together

### Review: -aG

**Review: Sam adds alex to a group with usermod -G. What went wrong?**

☐ Nothing

☐ Alex is deleted

☐ -G without -a replaces all Alex's groups

☐ sudo was missing

:::


:::teacher-note

**Answer:** -G without -a replaces all Alex's groups

-aG adds and keeps the rest.

:::


## Make: survive a reboot

Then: on a real Pi, run systemctl status ssh and systemctl list-units --type=service.

Work in the tutorial. Plan first: what will you change, and how will you test it?

{{box-4}}

## Exit ticket

:::keep-together

**smbd is running but disabled. What happens after a reboot?**

{{lines-3}}

:::


:::teacher-note

**Answer:** It stays off: disabled means it does not start at boot.

:::

