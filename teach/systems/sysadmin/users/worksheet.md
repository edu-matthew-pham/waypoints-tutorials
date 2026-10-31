---
title: "Accounts, groups and sudo"
subtitle: "System admin on a Raspberry Pi · People · Lesson 3"
---

# Accounts, groups and sudo

**Name:** {{field-24}} **Date:** {{field-15}} **Class:** {{field-15}}

> **Key question:** One Pi, a whole class. How does it know who is allowed to do what?


:::teacher-note

**In one sentence:** Each person gets an account and a private home folder. Groups give several accounts the same rights. Only users in the sudo group may use sudo, and the system logs every time they do.

**Students should be able to say:** I can create an account and say what its home folder protects. I can add a user to a group without removing the other groups. I can say who may use sudo, and where the log shows it.

**Width:** the unmarked parts are the floor every student does (predict, run, investigate and make). Typical adds the modify practice; wider adds the real-world contexts. They add contexts, not difficulty. Students work in the online tutorial alongside this sheet.

:::


## Predict


:::keep-together

**You create an account for Alex with sudo adduser alex. Can Alex open your home folder, /home/pi?**

☐ Only if Alex is in the sudo group

☐ Yes: everyone on the Pi can open every home folder

☐ Only on Mondays

☐ No: home folders are private to their owner

My prediction, and why:

{{lines-3}}

:::


:::teacher-note

**What happens:** No. Each home folder is drwx------: only its owner (and root) can open it. That is why a media server can't read films in a private home folder, a thing lesson 6 meets.

:::


## Run

Try it on the board in the tutorial. Was your prediction right? What was different?

{{lines-2}}

## Worked example: Groups and sudo


:::keep-together

### Groups and sudo

1. $\text{sudo adduser alex}$ — make the account, its group and its private home folder.
2. $\text{sudo usermod -aG class alex}$ — add alex to class. a = add, G = to a group. Without a, groups are replaced.
3. $\text{id alex}$ — list the groups alex is in.
4. $\text{sudo cat /var/log/auth.log}$ — read who logged in and who used sudo (administrators only).

Now try it yourself.

**Which group lets a user run sudo?**

☐ users

☐ pi

☐ adm

☐ sudo

:::


:::teacher-note

**Answer:** sudo

Members of the sudo group may use sudo. That is the only difference between an administrator and a normal user here.

:::


:::keep-together

### Find the mistake

**Sam gives Alex sudo. Click the line where it first goes wrong.**

```
 1  Alex is in the group class.
 2  Sam wants to give Alex sudo as well, so types sudo usermod -G sudo alex.
 3  Sam checks: alex is in sudo.
 4  So Alex is now in class and sudo.
```

Line: {{field-15}}

Why is it wrong?

{{lines-2}}

:::


:::teacher-note

**Answer:** line 2

Line 2: -G on its own replaces all of Alex's groups. -aG adds one and keeps the rest: sudo usermod -aG sudo alex.

:::


:::keep-together

### The log

**Where does the Pi record who used sudo?**

☐ On the router

☐ In your home folder

☐ Nowhere

☐ /var/log/auth.log, which only an administrator can read

:::


:::teacher-note

**Answer:** /var/log/auth.log, which only an administrator can read

auth.log lists logins and sudo use, with the user and the time. Administrators read it to find out who did what.

:::


:::typical

## Vary: change one thing


**Add a group.** 

**Read the log.** 

**From Alex's side.** 

Work in the tutorial. Plan first: what will you change, and how will you test it?

{{box-4}}

:::


## Practise


:::keep-together

### -aG

**Which command adds alex to the group class and keeps alex's other groups?**

☐ sudo groups alex

☐ sudo adduser class

☐ sudo usermod -G class alex

☐ sudo usermod -aG class alex

:::


:::teacher-note

**Answer:** sudo usermod -aG class alex

-a keeps the old groups, -G names the group to add.

:::


:::keep-together

### Why accounts

**Why is it better to give people sudo through a group than to share the pi password?**

☐ The log shows each person, and you can remove one without changing the password for everyone

☐ Groups are faster

☐ It isn't better

☐ Passwords stop working

:::


:::teacher-note

**Answer:** The log shows each person, and you can remove one without changing the password for everyone

Separate accounts mean the log says who did what, and removing one person doesn't affect the others.

:::


:::keep-together

### Review: exit

**Review: you ssh to the Pi, then type exit. Which account are you now?**

☐ root

☐ Your laptop account

☐ pi

☐ alex

:::


:::teacher-note

**Answer:** Your laptop account

exit ends the ssh session, and you are back on the laptop.

:::


## Make: a new administrator

Then: on a real Pi, run `id` to see your own groups.

Work in the tutorial. Plan first: what will you change, and how will you test it?

{{box-4}}

## Exit ticket

:::keep-together

**What is the difference between adduser and usermod -aG?**

{{lines-3}}

:::


:::teacher-note

**Answer:** adduser makes the account and its home. usermod -aG adds an existing account to a group.

:::

