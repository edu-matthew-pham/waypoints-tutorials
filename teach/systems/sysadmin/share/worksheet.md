---
title: "Share files with Samba"
subtitle: "System admin on a Raspberry Pi · Serve · Lesson 5"
---

# Share files with Samba

**Name:** {{field-24}} **Date:** {{field-15}} **Class:** {{field-15}}

> **Key question:** Everyone in the class needs to hand in work to one place. How do you set that up?


:::teacher-note

**In one sentence:** Samba shares a folder so Windows, Mac and Linux computers can use it. The share is described in a config file the service reads when it starts, so you restart it after a change. The folder's group and permissions decide who may write.

**Students should be able to say:** I can add a share to Samba and restart the service. I can use tee to write a file I do not own. I can set a folder so a group can write and strangers cannot.

**Width:** the unmarked parts are the floor every student does (predict, run, investigate and make). Typical adds the modify practice; wider adds the real-world contexts. They add contexts, not difficulty. Students work in the online tutorial alongside this sheet.

:::


## Predict


:::keep-together

**You add a [classshare] section to smb.conf but do not restart smbd. Does smbclient -L localhost list classshare?**

☐ Yes, after one minute

☐ No: smbd read the file when it started, and has not looked again

☐ Yes: it watches the file

☐ Only after a reboot of your laptop

My prediction, and why:

{{lines-3}}

:::


:::teacher-note

**What happens:** No. Services read their config when they start. After a change, restart (or reload) the service.

:::


## Run

Try it on the board in the tutorial. Was your prediction right? What was different?

{{lines-2}}

## Worked example: Writing to a file you do not own


:::keep-together

### Writing to a file you do not own

1. $\text{echo -e "[classshare]\\npath = /srv/class" | sudo tee -a /etc/samba/smb.conf}$ — add the share, as root.
2. $\text{sudo systemctl restart smbd}$ — make smbd read the file again.
3. $\text{sudo chgrp class /srv/class}$ — the folder belongs to group class.
4. $\text{sudo chmod 775 /srv/class}$ — owner and group read, write and enter; others only read.

Now try it yourself.

**Why does sudo echo "[x]" &gt;&gt; /etc/samba/smb.conf fail?**

☐ smb.conf does not exist

☐ sudo cannot run echo

☐ echo is not a command

☐ The &gt;&gt; is done by your shell, not by sudo, so it has no permission

:::


:::teacher-note

**Answer:** The &gt;&gt; is done by your shell, not by sudo, so it has no permission

Your shell sets up the redirect before sudo runs. Use echo ... | sudo tee -a file, so tee (running as root) does the writing.

:::


:::keep-together

### Find the mistake

**Sam fixes the share. Click the line where it first goes wrong.**

```
 1  Alex cannot save files in /srv/class.
 2  Sam types sudo chmod 777 /srv/class.
 3  Now everyone can write there, including strangers and the web server.
 4  So Sam says: whenever access fails, chmod 777.
```

Line: {{field-15}}

Why is it wrong?

{{lines-2}}

:::


:::teacher-note

**Answer:** line 2

Line 2: 777 lets everyone do everything. The cause was that Alex isn't in the folder's group. Fix that: sudo chgrp class /srv/class and chmod 775.

:::


:::keep-together

### Who can add files

**/srv/class is drwxrwxr-x, owner root, group class. Who can add files?**

☐ Only pi

☐ Root and members of class

☐ Everyone

☐ Only root

:::


:::teacher-note

**Answer:** Root and members of class

Owner (rwx) and group (rwx) can write; everyone else (r-x) can only read.

:::


:::typical

## Vary: change one thing


**Group the folder.** 

**Let the group write.** 

**Take rights away.** 

Work in the tutorial. Plan first: what will you change, and how will you test it?

{{box-4}}

:::


## Practise


:::keep-together

### Others

**A folder is rwxrwxr-x with group class. Alex is not in class. What can Alex do?**

☐ Add files

☐ Read it, but not add files

☐ Delete it

☐ Nothing

:::


:::teacher-note

**Answer:** Read it, but not add files

Others get r-x: look in, but not change.

:::


:::keep-together

### After a change

**You change smb.conf. What must you do for Samba to use it?**

☐ Restart (or reload) smbd

☐ Nothing, it watches

☐ Reboot the router

☐ Reinstall

:::


:::teacher-note

**Answer:** Restart (or reload) smbd

smbd reads its settings at start-up.

:::


:::keep-together

### Review: enable

**Review: you ran sudo systemctl enable smbd. Is smbd running now?**

☐ Not necessarily: enable only affects the next boot

☐ No, it was removed

☐ Yes

☐ Yes, but not shared

:::


:::teacher-note

**Answer:** Not necessarily: enable only affects the next boot

Check with systemctl status.

:::


## Make: a class hand-in share

Then: on a real Pi, run testparm to check smb.conf and smbpasswd -a alex to give Alex a Samba password (Samba keeps its own).

Work in the tutorial. Plan first: what will you change, and how will you test it?

{{box-4}}

## Exit ticket

:::keep-together

**Why does smbd need a restart after you edit smb.conf?**

{{lines-3}}

:::


:::teacher-note

**Answer:** It reads the file when it starts, not every time it is used.

:::

