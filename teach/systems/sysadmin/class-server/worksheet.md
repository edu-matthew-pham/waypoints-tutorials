---
title: "Challenge: the class server"
subtitle: "System admin on a Raspberry Pi · The class server · Lesson 8"
---

# Challenge: the class server

**Name:** {{field-24}} **Date:** {{field-15}} **Class:** {{field-15}}

> **Key question:** Your class gets one Pi. By Friday it has to be a safe place to hand in work. Where do you start?


:::teacher-note

**In one sentence:** Set up the Pi as the class server: a hand-in share, accounts in one group, a firewall that lets only the right ports through, and a nightly backup. Then explain what each part protects, and what it does not.

**Students should be able to say:** I can set up a share, accounts, a firewall and a backup that work together. I can say what each part protects against and what it does not. I can explain why exposing a server to the internet raises the stakes.

**Width:** the unmarked parts are the floor every student does (predict, run, investigate and make). Typical adds the modify practice; wider adds the real-world contexts. They add contexts, not difficulty. Students work in the online tutorial alongside this sheet.

:::


## Predict


:::keep-together

**You are logged in to the Pi over ssh. You type sudo ufw enable first, planning to add the ssh rule next. What happens?**

☐ The Pi turns off

☐ ufw asks for a password

☐ The Pi blocks ssh before the rule exists, and your session drops

☐ Nothing: the rule comes next

My prediction, and why:

{{lines-3}}

:::


:::teacher-note

**What happens:** Your session drops, and nobody can log in again over the network. Allow ssh first, then enable the firewall.

:::


## Run

Try it on the board in the tutorial. Was your prediction right? What was different?

{{lines-2}}

## Worked example: Layers, not one lock


:::keep-together

### Layers, not one lock

1. $\text{accounts and groups}$ — who is allowed (lesson 3).
2. $\text{owners and permissions}$ — what each may do (lessons 3 and 5).
3. $\text{firewall}$ — which doors can be reached (lesson 6).
4. $\text{backup and schedule}$ — what if it breaks (lesson 7).

Now try it yourself.

**Which part protects against 'a file is deleted by mistake'?**

☐ The firewall

☐ sudo

☐ A backup

☐ A password

:::


:::teacher-note

**Answer:** A backup

Each layer covers one risk. The backup is the one that covers loss.

:::


:::keep-together

### Find the mistake

**Sam is locked out. Click the line where it first goes wrong.**

```
 1  Sam is logged in to the class Pi over ssh.
 2  Sam types sudo ufw enable.
 3  Sam then types sudo ufw allow ssh.
 4  Sam logs out and tries to log back in. Timed out.
```

Line: {{field-15}}

Why is it wrong?

{{lines-2}}

:::


:::teacher-note

**Answer:** line 2

Line 2: with the firewall on and no ssh rule, the connection drops. Allow ssh first, then enable.

:::


:::keep-together

### Reaching it from home

**Which is safer for watching Jellyfin away from school: opening port 8096 on the router, or a VPN such as Tailscale or WireGuard?**

☐ Opening the port: it is simpler, so safer

☐ Neither is possible

☐ A VPN: only devices you trust can reach it

☐ Both are the same

:::


:::teacher-note

**Answer:** A VPN: only devices you trust can reach it

An open port faces the whole internet. A VPN keeps the server on a private network that only your devices join.

:::


:::typical

## Vary: change one thing


**The software.** 

**The doors.** 

**After a reboot.** 

Work in the tutorial. Plan first: what will you change, and how will you test it?

{{box-4}}

:::


## Practise


:::keep-together

### Two layers

**Which two layers together mean 'only class members may save files, and only from the school network'?**

☐ Group permissions on the folder and a firewall rule

☐ ssh and sudo

☐ A backup and a schedule

☐ Jellyfin and Samba

:::


:::teacher-note

**Answer:** Group permissions on the folder and a firewall rule

Permissions decide who may write; the firewall decides who can reach the door.

:::


:::keep-together

### Weakest

**Which is the weakest protection for a share?**

☐ A password

☐ Hiding the folder's name

☐ A firewall rule

☐ A group on the folder

:::


:::teacher-note

**Answer:** Hiding the folder's name

Hiding is not protection (The command line › Who can read what).

:::


:::keep-together

### Reaching it from home

**A student asks to open a router port so they can reach the Pi from home. What is the best first answer?**

☐ Use a VPN instead: it keeps the Pi off the open internet

☐ Open all ports

☐ Yes, open it

☐ Turn the firewall off

:::


:::teacher-note

**Answer:** Use a VPN instead: it keeps the Pi off the open internet

Exposing a server raises the stakes. A VPN gives the same convenience.

:::


## Make: the class server

Then write up your server: for each part, what it protects against and what it does not. That is the brief for this course.

Work in the tutorial. Plan first: what will you change, and how will you test it?

{{box-4}}

## Exit ticket

:::keep-together

**Name two layers of the class server and one thing each does not protect against.**

{{lines-3}}

:::


:::teacher-note

**Answer:** Any two, for example: firewall (does not stop a stolen password), backup (does not stop a leak).

:::

