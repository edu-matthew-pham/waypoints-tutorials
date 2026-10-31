---
marp: true
theme: default
html: true
---

# Share files with Samba

System admin on a Raspberry Pi · Serve

<!-- Speaker note: Samba shares a folder so Windows, Mac and Linux computers can use it. The share is described in a config file the service reads when it starts, so you restart it after a change. The folder's group and permissions decide who may write. About 40 minutes (Predict and Try 8 min · Worked example 10 min · Vary 10 min · Practise and Make 12 min). -->

---

## Today

- I can add a share to Samba and restart the service.
- I can use tee to write a file I do not own.
- I can set a folder so a group can write and strangers cannot.

<!-- Speaker note: Before class: Try the boards yourselves. The one idea: a service reads its settings at start-up, and the files it serves have owners, groups and permissions that decide who may use them. Simplifications: the pretend smb.conf only needs [name] and path. The real one also wants `read only = no`, `valid users = @class` and a Samba password for each user (`sudo smbpasswd -a alex`), because Samba's passwords are separate from the Pi's. Say this before students try it for real. Taught: Samba (works with Windows, Mac and Linux). Other options to name: NFS (file sharing between Linux computers, simpler but with no passwords), Nextcloud (a web page for files, like your own Drive, needs a web server and database), Syncthing (copies folders between computers). With internet: sharing outside the school needs a VPN (Tailscale or WireGuard) or the files can be read by anyone who finds the port. Do not open router ports for Samba. Teacher: Try: show the failing sudo echo version first. Teacher: Worked example: stop at 777 and ask who else it lets in. Teacher: Vary: after taking rights away, ask whether Bob is stopped from reading. -->

---

## Why it matters

> Everyone in the class needs to hand in work to one place. How do you set that up?

<!-- Speaker note: File sharing is the most common job for a small server. Two things have to be right: the service has to know about the share (a config file), and the files on the Pi have to allow the right people (owners, groups and permissions from lesson 3). -->

---

<span style="background:#dbeafe; color:#1a1a1a; border:1.5px solid #3b82f6; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">💬 Discussion</span>

## Think, pair, share

**Thirty students need to hand in work to one place. Who should be able to do what?**

- Who may add files? Who may only read?
- What would stop strangers?

<!-- Speaker note: Group members write; others read or nothing. Give 30 seconds alone, 2 minutes in pairs, then take answers from both sides. There is no single right answer: ask for a reason, and let students change their minds. -->

---

<span style="background:#dbeafe; color:#1a1a1a; border:1.5px solid #3b82f6; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">💬 Discussion</span>

## Predict

**You add a [classshare] section to smb.conf but do not restart smbd. Does smbclient -L localhost list classshare?**

- Yes, after one minute
- No: smbd read the file when it started, and has not looked again
- Yes: it watches the file
- Only after a reboot of your laptop

<!-- Speaker note: What happens: No. Services read their config when they start. After a change, restart (or reload) the service. Take two or three predictions before anyone runs it. -->

<!-- Speaker note: Teacher: wrong answers think the service watches its file. -->

---

<span style="background:#dbeafe; color:#1a1a1a; border:1.5px solid #3b82f6; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">💬 Discussion</span>

## Who writes? <span style="font-size:.6em;color:#64748b">(4 min)</span>

Draw the folder and three people: Alex (class), Bob (not in class), a stranger. Mark who may read and who may write.

<!-- Speaker note: Group write; others read at most. -->

---

<span style="background:#fef3c7; color:#1a1a1a; border:1.5px solid #f59e0b; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✍️ Activity</span>

## Try it

{{embed: https://tutorials.learningwaypoints.com/_playground-board/index.html?id=deck%2Fsystems%2Fsysadmin%2Fshare%2Fstep-2&code=widget%3A+shell%0Afs%3A+pi%0Apkgs%3A+samba%0Ahas%3A+%2Fetc%2Fsamba%2Fsmb.conf+%7C+%5Bclassshare%5D%0A&fresh=1}}

[Open this step in the tutorial](https://tutorials.learningwaypoints.com/systems/sysadmin/share/?full=step-2#step-2)

<!-- Speaker note: Was your prediction right? -->

<style scoped>pre, marp-pre { font-size: 0.5em; line-height: 1.25; } section { font-size: 25px; }</style>

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## What happened?

* No. Services read their config when they start. After a change, restart (or reload) the service.

<!-- Speaker note: Reveal after running. Ask who predicted it, and what made them think so. -->

---

<span style="background:#dbeafe; color:#1a1a1a; border:1.5px solid #3b82f6; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">💬 Discussion</span>

## Writing to a file you do not own

Now try it yourself.

$$\text{echo -e "[classshare]\\npath = /srv/class" | sudo tee -a /etc/samba/smb.conf}$$

1) $\text{sudo systemctl restart smbd}$ — make smbd read the file again.
2) $\text{sudo chgrp class /srv/class}$ — the folder belongs to group class.
3) $\text{sudo chmod 775 /srv/class}$ — owner and group read, write and enter; others only read.

<!-- Speaker note: Model this live on the board before revealing anything: write each line and say why, pausing to ask the class what comes next. Then click to reveal the lines and compare. Script. Start: write echo -e "[classshare]\ = /srv/class" | sudo tee -a /etc/samba/smb.conf and say "add the share, as root." Line 1: write sudo systemctl restart smbd and say "make smbd read the file again." Line 2: write sudo chgrp class /srv/class and say "the folder belongs to group class." Line 3: write sudo chmod 775 /srv/class and say "owner and group read, write and enter; others only read." -->

<style scoped>pre, marp-pre { font-size: 0.5em; line-height: 1.25; } section { font-size: 25px; }</style>

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Writing to a file you do not own

**Why does sudo echo "[x]" &gt;&gt; /etc/samba/smb.conf fail?**

- smb.conf does not exist
- sudo cannot run echo
- echo is not a command
- The &gt;&gt; is done by your shell, not by sudo, so it has no permission

* Answer: The &gt;&gt; is done by your shell, not by sudo, so it has no permission

<!-- Speaker note: Your shell sets up the redirect before sudo runs. Use echo ... | sudo tee -a file, so tee (running as root) does the writing. -->

<style scoped>pre, marp-pre { font-size: 0.5em; line-height: 1.25; } section { font-size: 27px; }</style>

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Find the mistake

**Sam fixes the share. Click the line where it first goes wrong.**

```
 1  Alex cannot save files in /srv/class.
 2  Sam types sudo chmod 777 /srv/class.
 3  Now everyone can write there, including strangers and the web server.
 4  So Sam says: whenever access fails, chmod 777.
```

* Answer: line 2

<!-- Speaker note: Line 2: 777 lets everyone do everything. The cause was that Alex isn't in the folder's group. Fix that: sudo chgrp class /srv/class and chmod 775. -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Who can add files

**/srv/class is drwxrwxr-x, owner root, group class. Who can add files?**

- Only pi
- Root and members of class
- Everyone
- Only root

* Answer: Root and members of class

<!-- Speaker note: Owner (rwx) and group (rwx) can write; everyone else (r-x) can only read. -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Restart

**You edited smb.conf. What now?**

- Restart smbd
- Nothing
- Reboot router
- Reinstall

* Answer: Restart smbd

<!-- Speaker note: It reads its settings at start. Ask on mini whiteboards or by show of hands before the reveal. -->

---

<span style="background:#fef3c7; color:#1a1a1a; border:1.5px solid #f59e0b; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✍️ Activity</span>

## Vary: change one thing



- **Group the folder:** 
- **Let the group write:** 
- **Take rights away:** 

[Open this step](https://tutorials.learningwaypoints.com/systems/sysadmin/share/?full=step-4#step-4)

<!-- Speaker note: What this step is for: Each task changes one thing: the group, the permission for the group, and taking rights away from strangers. For students who need more support: A card with the three jobs: share, restart, group. For early finishers: Find out why Samba needs its own password for each user. The hard part, on purpose: The sudo-and-redirect gotcha. Run the failing command so students read the error. When students get stuck: Permission denied writing smb.conf. Ask: Are you using sudo echo with >> ? Fix: echo ... | sudo tee -a file. / The share does not appear. Ask: Did you restart smbd? Fix: sudo systemctl restart smbd. -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Others

**A folder is rwxrwxr-x with group class. Alex is not in class. What can Alex do?**

- Add files
- Read it, but not add files
- Delete it
- Nothing

* Answer: Read it, but not add files

<!-- Speaker note: Others get r-x: look in, but not change. -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## After a change

**You change smb.conf. What must you do for Samba to use it?**

- Restart (or reload) smbd
- Nothing, it watches
- Reboot the router
- Reinstall

* Answer: Restart (or reload) smbd

<!-- Speaker note: smbd reads its settings at start-up. -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Review: enable

**Review: you ran sudo systemctl enable smbd. Is smbd running now?**

- Not necessarily: enable only affects the next boot
- No, it was removed
- Yes
- Yes, but not shared

* Answer: Not necessarily: enable only affects the next boot

<!-- Speaker note: Check with systemctl status. -->

---

<span style="background:#fef3c7; color:#1a1a1a; border:1.5px solid #f59e0b; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✍️ Activity</span>

## Make: a class hand-in share

Then: on a real Pi, run testparm to check smb.conf and smbpasswd -a alex to give Alex a Samba password (Samba keeps its own).

[Open this step](https://tutorials.learningwaypoints.com/systems/sysadmin/share/?full=step-6#step-6)

<!-- Speaker note: What this step is for: Combining the config, the restart and the group is the whole move. Hints, in order: Three jobs: the share, the restart, the folder's group and mode. / tee -a to add [class] and path = /srv/class to smb.conf, then restart smbd. / sudo chgrp class /srv/class and sudo chmod 775 /srv/class. -->

<!-- Speaker note: Teacher: ask what a real hand-in folder would also need. -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Exit ticket

**Why does smbd need a restart after you edit smb.conf?**

* It reads the file when it starts, not every time it is used.

<!-- Speaker note: Students answer on paper or a mini whiteboard before the reveal. Anyone who cannot answer needs the main idea again next lesson. Where this leads: Links: Who can read what (permissions); Accounts, groups and sudo; next: Host Jellyfin. -->
