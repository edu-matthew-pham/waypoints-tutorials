---
order: 6
unit: serve
node: AC9TDI10K01 n2
title: "Host Jellyfin, a media server"
summary: "Jellyfin serves your films and music to any device on the network, through a web page on port 8096. It runs as its own user, so it can only read files that user is allowed to read. A firewall decides which ports can be reached."
language: maths
hook: "You have films on the Pi and want to watch them on the TV. What has to be true?"
explainPicture: { ref: shell.yml#explain-pic, caption: "ss -tln lists the ports with a service listening. Port 8096 is Jellyfin's web page: other devices open http://raspberrypi.local:8096." }
---
A media server is a service (lesson 4) that listens on a **port**, a numbered door on the Pi (*Names and addresses* in Security and privacy). Devices find the Pi by name or address, then knock on the right port. Port 22 is ssh, 445 is Samba and 8096 is Jellyfin.

## Predict: private films

```step
stage: predict
insight: "Committing to what a service can read tests the new move: a service is a user too, and permissions apply to it."
check:
  type: predict
  q: "Jellyfin runs as its own user, jellyfin. Your film is in /home/pi/Videos, and your home folder is private (drwx------). Can Jellyfin see it?"
  options: ["No: jellyfin is not the owner and has no rights in that home folder", "Yes: services can read everything", "Yes, if the film is not hidden", "Only on Mondays"]
  actual: "No. A service has no special powers. Put the films where its user may read them, for example /srv/media."
```

## Try: install and look

```step
stage: run
insight: "Installing it and listing the ports settles what it does."
try: { playground: board, starter: "shell.yml#run", height: 520 }
check: { type: board, text: "Install jellyfin (the lists are already up to date), then run ss -tln to see which ports have a service.", when: "port_up = 1", explain: "sudo apt install jellyfin starts the service. ss -tln lists listening ports: 8096 is Jellyfin." }
```

Was your prediction right?

## Worked example: Where the films go

```step
stage: investigate
insight: "Following the method once, then finding where a plausible account goes wrong, models the new move."
tasks:
  - check:
      type: question
      q: "Which port does Jellyfin's web page use?"
      options: ["8096", "22", "445", "80"]
      answer: 0
      feedback: [null, "22 is ssh.", "445 is Samba.", "80 is plain web pages; Jellyfin uses 8096."]
      explain: "Devices open http://raspberrypi.local:8096 in a browser. The number after the colon is the port."
  - check:
      type: bug
      code: "working.txt#sam"
      text: "Sam's library is empty. Click the line where it first goes wrong."
      answer: 2
      fault: logic
      misconception: media-in-home
      explain: "Line 2: a private home folder keeps other users out, and Jellyfin is another user. Reinstalling changes nothing. Move the films to /srv/media."
  - check:
      type: question
      q: "Which of these plays media only on the one device it is installed on, rather than serving other devices?"
      options: ["Kodi", "Jellyfin", "Plex", "Emby"]
      answer: 0
      feedback: [null, "Jellyfin is a server for other devices.", "Plex serves other devices (and needs an account for some features).", "Emby serves other devices (some features need a licence)."]
      explain: "Kodi plays on one device. Jellyfin, Plex and Emby serve to many; Jellyfin is free and open source with no account."
```

### Where the films go

```worked
\text{sudo apt install jellyfin} :: install it and start the service (on a real Pi, add Jellyfin's repository first).
\text{sudo mv Videos/holiday.mp4 /srv/media} :: move the film where the jellyfin user can read it.
\text{sudo ufw allow 8096} :: let other devices reach the web page.
\text{http://raspberrypi.local:8096} :: what you type into the TV or laptop's browser.
```

Now try it yourself.

### Find the mistake

### Other options

## Vary: change one thing

```step
stage: modify
insight: "Each task changes one thing: where the film is, the firewall, and stopping the service."
try: { playground: board, starter: "shell.yml#v1", height: 520 }
tasks:
  - starter: "shell.yml#v1"
    check: { type: board, text: "Move /home/pi/Videos/holiday.mp4 into /srv/media so that jellyfin can read it.", when: "can_read = 1", explain: "sudo mv /home/pi/Videos/holiday.mp4 /srv/media: /srv/media is not private." }
  - starter: "shell.yml#v2"
    check: { type: board, text: "The firewall is on and blocks everything. Let other devices reach Jellyfin on port 8096.", when: "fw_up = 1 and port_reach = 1", explain: "sudo ufw allow 8096." }
  - starter: "shell.yml#v3"
    check: { type: board, text: "Stop the Jellyfin service. Check with ss -tln that nothing listens on 8096.", when: "port_up = 0", explain: "sudo systemctl stop jellyfin: no program, no listener." }
```

### Move the film

### Open the door

### Switch it off

## Practise

```step
stage: practise
insight: "Choosing ports and fixes without the board is the same move in new forms, plus a review of shares."
tasks:
  - check:
      type: question
      q: "A device opens http://raspberrypi.local:8096. What does the 8096 mean?"
      options: ["The port: which service on the Pi to talk to", "The password", "The number of films", "The version"]
      answer: 0
      feedback: [null, "Ports are doors, not passwords.", "It counts nothing.", "It names a door."]
      explain: "One Pi can run many services; the port picks which."
  - check:
      type: question
      q: "The firewall is on and nothing else is set. A TV tries port 8096. What happens?"
      options: ["It is blocked", "It works", "It works but slowly", "The Pi shuts down"]
      answer: 0
      feedback: [null, "A firewall blocks anything not allowed.", "Blocked is blocked.", "Nothing shuts down."]
      explain: "A firewall lets in only what you allow."
  - check:
      type: question
      q: "Review: you edited smb.conf. What else must you do?"
      options: ["Restart smbd", "Nothing", "Reinstall samba", "Reboot the TV"]
      answer: 0
      feedback: [null, "smbd reads its settings at start.", "No need.", "Not related."]
      explain: "Services read their config when they start."
```

### The port

### Firewall

### Review: restart

## Make: a media server

```step
stage: make
insight: "Combining install, location and firewall is the whole move."
try: { playground: board, starter: "shell.yml#make", height: 520 }
hint: ["Three jobs: install, put the film where it can be read, open the door.", "sudo apt install jellyfin, sudo mv /home/pi/Videos/holiday.mp4 /srv/media", "sudo ufw allow 8096"]
check: { type: board, text: "Set up the media server: install Jellyfin, make holiday.mp4 readable by it, and let other devices reach port 8096.", when: "pkg_in = 1 and can_read = 1 and port_reach = 1", explain: "Install Jellyfin, move the film into /srv/media, allow 8096 in the firewall. That's the whole job." }
```

Then: on a real Pi, add Jellyfin's repository (its install page gives the commands), then open http://raspberrypi.local:8096 from another device.
