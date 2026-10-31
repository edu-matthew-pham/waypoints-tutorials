---
title: "Close the doors: harden the target"
subtitle: "Security lab: audit a Pi with Kali · Fix · Lesson 5"
---

# Close the doors: harden the target

**Name:** {{field-24}} **Date:** {{field-15}} **Class:** {{field-15}}

> **Key question:** You have a list of findings. In what order, and how, do you fix them?


:::teacher-note

**In one sentence:** Fixing means closing what is not needed, updating what is old and tightening the login, in that order of thought: fewer doors, stronger locks. Each fix does one job and none of them does all of them, so you layer them and then check again.

**Students should be able to say:** I can close a service, upgrade old software and tighten ssh. I can say what each fix does and does not protect. I can say why a service must restart for config changes.

**Width:** the unmarked parts are the floor every student does (predict, run, investigate and make). Typical adds the modify practice; wider adds the real-world contexts. They add contexts, not difficulty. Students work in the online tutorial alongside this sheet.

:::


## Predict


:::keep-together

**You stop the telnet service on the target. What happens to port 23?**

☐ It is no longer open: nothing is listening

☐ It stays open

☐ It becomes encrypted

☐ Port 23 moves to 22

My prediction, and why:

{{lines-3}}

:::


:::teacher-note

**What happens:** No longer open. A port is only open while a service listens, so stopping the service closes the door.

:::


## Run

Try it on the board in the tutorial. Was your prediction right? What was different?

{{lines-2}}

## Worked example: Four fixes, four jobs


:::keep-together

### Four fixes, four jobs

1. $\text{sudo systemctl stop telnet}$ — close the door (add disable to keep it off).
2. $\text{sudo apt update; sudo apt upgrade}$ — fetch and install the fixed versions.
3. $\text{echo -e "PermitRootLogin no\\nPasswordAuthentication no" | sudo tee /etc/ssh/sshd_config}$ — tighten ssh.
4. $\text{sudo systemctl restart ssh}$ — ssh reads its settings only when it starts.

Now try it yourself.

**Which fix handles 'OpenSSH 7.2 is old'?**

☐ Turn on the firewall only

☐ Stop telnet

☐ sudo apt update, then sudo apt upgrade

☐ Delete the log

:::


:::teacher-note

**Answer:** sudo apt update, then sudo apt upgrade

Upgrade installs the fixed versions. The lab's apt reads the lab's own mirror.

:::


:::keep-together

### Find the mistake

**Sam fixes Apache. Click the line where it first goes wrong.**

```
 1  Sam cannot upgrade Apache before the lab ends.
 2  So Sam turns on the firewall and leaves port 80 allowed.
 3  Sam says: the firewall makes old software safe.
 4  Sam writes 'fixed' in the report.
```

Line: {{field-15}}

Why is it wrong?

{{lines-2}}

:::


:::teacher-note

**Answer:** line 3

Line 3: a firewall decides who can reach the door; the old program behind an allowed door is still old. Upgrade it, or take the service away.

:::


:::keep-together

### What ssh config does

**In sshd_config, what does PermitRootLogin no change?**

☐ Everyone loses sudo

☐ ssh stops

☐ root loses its password

☐ root can no longer log in over ssh

:::


:::teacher-note

**Answer:** root can no longer log in over ssh

Guessers target root, so the account is not allowed in over ssh at all. Admins log in as themselves and use sudo.

:::


:::typical

## Vary: change one thing


**Upgrade.** 

**Tighten ssh.** 

**Filter.** 

Work in the tutorial. Plan first: what will you change, and how will you test it?

{{box-4}}

:::


## Practise


:::keep-together

### Restart

**Why must you restart ssh after editing sshd_config?**

☐ To update it

☐ To log out

☐ It reads its settings only when it starts

☐ To clear the log

:::


:::teacher-note

**Answer:** It reads its settings only when it starts

Services read their config at start (the same as Samba).

:::


:::keep-together

### Firewall limits

**The firewall allows port 80. Apache behind it is old. Is the finding fixed?**

☐ Only for ssh

☐ No: the old program is still reachable on 80

☐ Yes

☐ Only for ftp

:::


:::teacher-note

**Answer:** No: the old program is still reachable on 80

A firewall does not fix what is behind an allowed door.

:::


:::keep-together

### Review: guessing

**Review: 14 failures in two minutes for root. Which fix helps most?**

☐ No root login over ssh, and key login only

☐ A bigger log

☐ A new name for ssh

☐ Reboot daily

:::


:::teacher-note

**Answer:** No root login over ssh, and key login only

Take away the prize, or make the lock pointless to guess.

:::


## Make: harden it

Then: a fix is not proved until you scan again. That is the challenge.

Work in the tutorial. Plan first: what will you change, and how will you test it?

{{box-4}}

## Exit ticket

:::keep-together

**Why is upgrading Apache a better fix than just allowing it through the firewall?**

{{lines-3}}

:::


:::teacher-note

**Answer:** The firewall only filters who reaches the door. The old program behind it is still old.

:::

