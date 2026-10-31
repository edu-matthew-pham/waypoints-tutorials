---
title: "Host Jellyfin, a media server"
subtitle: "System admin on a Raspberry Pi · Serve · Lesson 6"
---

# Host Jellyfin, a media server

**Name:** {{field-24}} **Date:** {{field-15}} **Class:** {{field-15}}

> **Key question:** You have films on the Pi and want to watch them on the TV. What has to be true?


:::teacher-note

**In one sentence:** Jellyfin serves your films and music to any device on the network, through a web page on port 8096. It runs as its own user, so it can only read files that user is allowed to read. A firewall decides which ports can be reached.

**Students should be able to say:** I can install a media server and find its port. I can explain why a service cannot read a private home folder. I can let one port through a firewall and no others.

**Width:** the unmarked parts are the floor every student does (predict, run, investigate and make). Typical adds the modify practice; wider adds the real-world contexts. They add contexts, not difficulty. Students work in the online tutorial alongside this sheet.

:::


## Predict


:::keep-together

**Jellyfin runs as its own user, jellyfin. Your film is in /home/pi/Videos, and your home folder is private (drwx------). Can Jellyfin see it?**

☐ Yes: services can read everything

☐ Only on Mondays

☐ No: jellyfin is not the owner and has no rights in that home folder

☐ Yes, if the film is not hidden

My prediction, and why:

{{lines-3}}

:::


:::teacher-note

**What happens:** No. A service has no special powers. Put the films where its user may read them, for example /srv/media.

:::


## Run

Try it on the board in the tutorial. Was your prediction right? What was different?

{{lines-2}}

## Worked example: Where the films go


:::keep-together

### Where the films go

1. $\text{sudo apt install jellyfin}$ — install it and start the service (on a real Pi, add Jellyfin's repository first).
2. $\text{sudo mv Videos/holiday.mp4 /srv/media}$ — move the film where the jellyfin user can read it.
3. $\text{sudo ufw allow 8096}$ — let other devices reach the web page.
4. $\text{http://raspberrypi.local:8096}$ — what you type into the TV or laptop's browser.

Now try it yourself.

**Which port does Jellyfin's web page use?**

☐ 22

☐ 80

☐ 445

☐ 8096

:::


:::teacher-note

**Answer:** 8096

Devices open http://raspberrypi.local:8096 in a browser. The number after the colon is the port.

:::


:::keep-together

### Find the mistake

**Sam's library is empty. Click the line where it first goes wrong.**

```
 1  Sam installs Jellyfin.
 2  Sam leaves the films in /home/pi/Videos, a private folder.
 3  Jellyfin scans and finds 0 films.
 4  Sam decides Jellyfin is broken and reinstalls it.
```

Line: {{field-15}}

Why is it wrong?

{{lines-2}}

:::


:::teacher-note

**Answer:** line 2

Line 2: a private home folder keeps other users out, and Jellyfin is another user. Reinstalling changes nothing. Move the films to /srv/media.

:::


:::keep-together

### Other options

**Which of these plays media only on the one device it is installed on, rather than serving other devices?**

☐ Plex

☐ Jellyfin

☐ Kodi

☐ Emby

:::


:::teacher-note

**Answer:** Kodi

Kodi plays on one device. Jellyfin, Plex and Emby serve to many; Jellyfin is free and open source with no account.

:::


:::typical

## Vary: change one thing


**Move the film.** 

**Open the door.** 

**Switch it off.** 

Work in the tutorial. Plan first: what will you change, and how will you test it?

{{box-4}}

:::


## Practise


:::keep-together

### The port

**A device opens http://raspberrypi.local:8096. What does the 8096 mean?**

☐ The port: which service on the Pi to talk to

☐ The version

☐ The password

☐ The number of films

:::


:::teacher-note

**Answer:** The port: which service on the Pi to talk to

One Pi can run many services; the port picks which.

:::


:::keep-together

### Firewall

**The firewall is on and nothing else is set. A TV tries port 8096. What happens?**

☐ It works

☐ It works but slowly

☐ The Pi shuts down

☐ It is blocked

:::


:::teacher-note

**Answer:** It is blocked

A firewall lets in only what you allow.

:::


:::keep-together

### Review: restart

**Review: you edited smb.conf. What else must you do?**

☐ Nothing

☐ Reboot the TV

☐ Restart smbd

☐ Reinstall samba

:::


:::teacher-note

**Answer:** Restart smbd

Services read their config when they start.

:::


## Make: a media server

Then: on a real Pi, add Jellyfin's repository (its install page gives the commands), then open http://raspberrypi.local:8096 from another device.

Work in the tutorial. Plan first: what will you change, and how will you test it?

{{box-4}}

## Exit ticket

:::keep-together

**Why might Jellyfin find no films in /home/pi/Videos?**

{{lines-3}}

:::


:::teacher-note

**Answer:** It runs as the jellyfin user, and a private home folder keeps other users out.

:::

