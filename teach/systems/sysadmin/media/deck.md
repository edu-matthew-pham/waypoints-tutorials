---
marp: true
theme: default
html: true
---

# Host Jellyfin, a media server

System admin on a Raspberry Pi · Serve

<!-- Speaker note: Jellyfin serves your films and music to any device on the network, through a web page on port 8096. It runs as its own user, so it can only read files that user is allowed to read. A firewall decides which ports can be reached. About 40 minutes (Predict and Try 8 min · Worked example 10 min · Vary 10 min · Practise and Make 12 min). -->

---

## Today

- I can install a media server and find its port.
- I can explain why a service cannot read a private home folder.
- I can let one port through a firewall and no others.

<!-- Speaker note: Before class: Try the boards yourselves. The one idea: a service runs as a user and gets only that user's rights; a firewall decides which ports can be reached. This links permissions (lesson 3) and ports (Networks). Simplifications: the pretend Pi has Jellyfin in its apt list. A real Raspberry Pi OS does not: add Jellyfin's own repository first (see jellyfin.org install page), which downloads a key, and then `sudo apt install jellyfin`. Jellyfin also asks for a first-run setup in the browser (an admin account, a library folder). The board shows only what matters for the lesson. Taught: Jellyfin (free, open source, no account). Other options to name: Plex (free to play your own media; some features need a Plex account or a paid Plex Pass), Emby (some features need a licence), Kodi (plays on one device, not a server). On a Pi, transcoding (changing a video's format on the fly) is slow, so use files the devices can play directly. With internet: metadata (posters, descriptions) is fetched from the internet. Reaching your server away from home should use a VPN (Tailscale or WireGuard), not an opened router port: an open port is scanned within minutes. Teacher: Try: ask which of the listed ports is which. Teacher: Worked example: stop at the library bug and ask whose permissions apply. Teacher: Vary: after the firewall task, ask what else is blocked. -->

---

## Why it matters

> You have films on the Pi and want to watch them on the TV. What has to be true?

<!-- Speaker note: A media server is a service (lesson 4) that listens on a **port**, a numbered door on the Pi (*Names and addresses* in Security and privacy). Devices find the Pi by name or address, then knock on the right port. Port 22 is ssh, 445 is Samba and 8096 is Jellyfin. -->

---

<span style="background:#dbeafe; color:#1a1a1a; border:1.5px solid #3b82f6; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">💬 Discussion</span>

## Think, pair, share

**You want to watch your own films on the TV. What has to be installed, running and allowed?**

- Where are the films?
- What stops the TV reaching the Pi?

<!-- Speaker note: A service, a readable folder and an open port. Give 30 seconds alone, 2 minutes in pairs, then take answers from both sides. There is no single right answer: ask for a reason, and let students change their minds. -->

---

<span style="background:#dbeafe; color:#1a1a1a; border:1.5px solid #3b82f6; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">💬 Discussion</span>

## Predict

**Jellyfin runs as its own user, jellyfin. Your film is in /home/pi/Videos, and your home folder is private (drwx------). Can Jellyfin see it?**

- Yes: services can read everything
- Only on Mondays
- No: jellyfin is not the owner and has no rights in that home folder
- Yes, if the film is not hidden

<!-- Speaker note: What happens: No. A service has no special powers. Put the films where its user may read them, for example /srv/media. Take two or three predictions before anyone runs it. -->

<!-- Speaker note: Teacher: wrong answers think a service is all-powerful. -->

<style scoped>pre, marp-pre { font-size: 0.5em; line-height: 1.25; } section { font-size: 28px; }</style>

---

<span style="background:#dbeafe; color:#1a1a1a; border:1.5px solid #3b82f6; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">💬 Discussion</span>

## Who can read it? <span style="font-size:.6em;color:#64748b">(4 min)</span>

Draw the Pi, the jellyfin user and the folder. Is there a door the user can open?

<!-- Speaker note: Permissions apply to services too. -->

---

<span style="background:#fef3c7; color:#1a1a1a; border:1.5px solid #f59e0b; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✍️ Activity</span>

## Try it

{{embed: https://tutorials.learningwaypoints.com/_playground-board/index.html?id=deck%2Fsystems%2Fsysadmin%2Fmedia%2Fstep-2&code=widget%3A+shell%0Afs%3A+pi%0Aupdated%3A+on%0Aport%3A+8096%0A&fresh=1}}

[Open this step in the tutorial](https://tutorials.learningwaypoints.com/systems/sysadmin/media/?full=step-2#step-2)

<!-- Speaker note: Was your prediction right? -->

<style scoped>pre, marp-pre { font-size: 0.5em; line-height: 1.25; } section { font-size: 25px; }</style>

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## What happened?

* No. A service has no special powers. Put the films where its user may read them, for example /srv/media.

<!-- Speaker note: Reveal after running. Ask who predicted it, and what made them think so. -->

---

<span style="background:#dbeafe; color:#1a1a1a; border:1.5px solid #3b82f6; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">💬 Discussion</span>

## Where the films go

Now try it yourself.

$$\text{sudo apt install jellyfin}$$

1) $\text{sudo mv Videos/holiday.mp4 /srv/media}$ — move the film where the jellyfin user can read it.
2) $\text{sudo ufw allow 8096}$ — let other devices reach the web page.
3) $\text{http://raspberrypi.local:8096}$ — what you type into the TV or laptop's browser.

<!-- Speaker note: Model this live on the board before revealing anything: write each line and say why, pausing to ask the class what comes next. Then click to reveal the lines and compare. Script. Start: write sudo apt install jellyfin and say "install it and start the service (on a real Pi, add Jellyfin's repository first)." Line 1: write sudo mv Videos/holiday.mp4 /srv/media and say "move the film where the jellyfin user can read it." Line 2: write sudo ufw allow 8096 and say "let other devices reach the web page." Line 3: write http://raspberrypi.local:8096 and say "what you type into the TV or laptop's browser." -->

<style scoped>pre, marp-pre { font-size: 0.5em; line-height: 1.25; } section { font-size: 27px; }</style>

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Where the films go

**Which port does Jellyfin's web page use?**

- 22
- 80
- 445
- 8096

* Answer: 8096

<!-- Speaker note: Devices open http://raspberrypi.local:8096 in a browser. The number after the colon is the port. -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Find the mistake

**Sam's library is empty. Click the line where it first goes wrong.**

```
 1  Sam installs Jellyfin.
 2  Sam leaves the films in /home/pi/Videos, a private folder.
 3  Jellyfin scans and finds 0 films.
 4  Sam decides Jellyfin is broken and reinstalls it.
```

* Answer: line 2

<!-- Speaker note: Line 2: a private home folder keeps other users out, and Jellyfin is another user. Reinstalling changes nothing. Move the films to /srv/media. -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Other options

**Which of these plays media only on the one device it is installed on, rather than serving other devices?**

- Plex
- Jellyfin
- Kodi
- Emby

* Answer: Kodi

<!-- Speaker note: Kodi plays on one device. Jellyfin, Plex and Emby serve to many; Jellyfin is free and open source with no account. -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Port

**What does :8096 in the address pick?**

- Which service on the Pi
- The password
- The film
- The device

* Answer: Which service on the Pi

<!-- Speaker note: The port names the door. Ask on mini whiteboards or by show of hands before the reveal. -->

---

<span style="background:#fef3c7; color:#1a1a1a; border:1.5px solid #f59e0b; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✍️ Activity</span>

## Vary: change one thing



- **Move the film:** 
- **Open the door:** 
- **Switch it off:** 

[Open this step](https://tutorials.learningwaypoints.com/systems/sysadmin/media/?full=step-4#step-4)

<!-- Speaker note: What this step is for: Each task changes one thing: where the film is, the firewall, and stopping the service. For students who need more support: A card: the user, the folder, the port. For early finishers: Find out what transcoding is and why a Pi is slow at it. The hard part, on purpose: Seeing the service as a user. Ask: whose account runs it, and what may that account read? When students get stuck: Jellyfin finds no films. Ask: Who owns the folder? Can the jellyfin user open it? Fix: Move the films to /srv/media. / Other devices cannot connect. Ask: Is the service running? Is the port allowed? Fix: systemctl status jellyfin, sudo ufw allow 8096. -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## The port

**A device opens http://raspberrypi.local:8096. What does the 8096 mean?**

- The port: which service on the Pi to talk to
- The version
- The password
- The number of films

* Answer: The port: which service on the Pi to talk to

<!-- Speaker note: One Pi can run many services; the port picks which. -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Firewall

**The firewall is on and nothing else is set. A TV tries port 8096. What happens?**

- It works
- It works but slowly
- The Pi shuts down
- It is blocked

* Answer: It is blocked

<!-- Speaker note: A firewall lets in only what you allow. -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Review: restart

**Review: you edited smb.conf. What else must you do?**

- Nothing
- Reboot the TV
- Restart smbd
- Reinstall samba

* Answer: Restart smbd

<!-- Speaker note: Services read their config when they start. -->

---

<span style="background:#fef3c7; color:#1a1a1a; border:1.5px solid #f59e0b; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✍️ Activity</span>

## Make: a media server

Then: on a real Pi, add Jellyfin's repository (its install page gives the commands), then open http://raspberrypi.local:8096 from another device.

[Open this step](https://tutorials.learningwaypoints.com/systems/sysadmin/media/?full=step-6#step-6)

<!-- Speaker note: What this step is for: Combining install, location and firewall is the whole move. Hints, in order: Three jobs: install, put the film where it can be read, open the door. / sudo apt install jellyfin, sudo mv /home/pi/Videos/holiday.mp4 /srv/media / sudo ufw allow 8096 -->

<!-- Speaker note: Teacher: ask what would make this unsafe to put on the internet. -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Exit ticket

**Why might Jellyfin find no films in /home/pi/Videos?**

* It runs as the jellyfin user, and a private home folder keeps other users out.

<!-- Speaker note: Students answer on paper or a mini whiteboard before the reveal. Anyone who cannot answer needs the main idea again next lesson. Where this leads: Links: Networks (ports); Accounts, groups and sudo; Services; next: Keep it running. -->
