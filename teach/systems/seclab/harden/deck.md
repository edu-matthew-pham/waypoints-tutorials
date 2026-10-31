---
marp: true
theme: default
html: true
---

# Close the doors: harden the target

Security lab: audit a Pi with Kali · Fix

<!-- Speaker note: Fixing means closing what is not needed, updating what is old and tightening the login, in that order of thought: fewer doors, stronger locks. Each fix does one job and none of them does all of them, so you layer them and then check again. About 40 minutes (Predict and Try 8 min · Worked example 10 min · Vary 10 min · Practise and Make 12 min). -->

---

## Today

- I can close a service, upgrade old software and tighten ssh.
- I can say what each fix does and does not protect.
- I can say why a service must restart for config changes.

<!-- Speaker note: Before class: Try the boards yourselves. The gate (read first). This course teaches security as audit and defence: you scan, read and fix a lab computer your class owns. The pretend Kali and target in the lessons are safe anywhere. The real-lab version is different, so it needs your sign-off before anyone starts: school policy and IT's agreement, a written lab agreement every student signs (lab-rules.txt on the board is a model), and a lab that is cut off from every other network: a Pi running Kali and a second Pi or a virtual machine as the target, joined by one switch or one ethernet cable, with no router and no internet. Download the Kali image and any tools once, at home or at IT's request. Scan only the target named on the lab sheet. This course does not teach breaking into anything: it stops at find, understand and fix. It relaxes the 'defensive only' rule of the other courses only in that the real lab uses real scanning tools on a computer the class owns. Simplifications: key login is described but not set up on the board (a real lab would also create a key pair with `ssh-keygen` and copy it with `ssh-copy-id` before turning passwords off, or you lock yourself out: test in a second session first). The pretend firewall tracks `allow <port>` and `enable` only. `apt` reads a pretend local mirror (a real offline lab uses a mirror such as `apt-cacher-ng` or a USB bundle of `.deb` files). Make sure students know the lockout risk from System admin: allow ssh before enabling the firewall. Real lab, if you run one: Kali Linux has a Raspberry Pi image (Pi 4 or Pi 5; the Pi 5 wants its 27 W supply); flash it with Raspberry Pi Imager or the Kali image instructions and boot it with a screen and keyboard, or ssh in. The target can be a second Pi (an older Raspberry Pi OS with a few extra services) or a purpose-made practice target your IT team approves. Start from the same state every time: re-flash, or snapshot a virtual machine. `nmap` is already on Kali. Give each pair a printed lab sheet naming the target's address, the one account they may use and what they are allowed to change. Other options: `ufw` is the friendly firewall (`nftables` is what is underneath); `unattended-upgrades` installs security updates automatically; `fail2ban` blocks repeated failures. Teacher: Try: ask which door is now closed. Teacher: Worked example: stop at Sam and ask what the firewall protects. Teacher: Vary: ask which fix covers which finding. -->

---

## Why it matters

> You have a list of findings. In what order, and how, do you fix them?

<!-- Speaker note: Now you are the administrator. For each finding there is a fix: stop what is not needed, upgrade what is old, change the ssh settings, and filter the rest with the firewall. This lesson starts on the target itself, as `admin`. The commands are the same ones used on any Linux server: `systemctl`, `apt`, `tee` and `ufw`. -->

---

<span style="background:#dbeafe; color:#1a1a1a; border:1.5px solid #3b82f6; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">💬 Discussion</span>

## Think, pair, share

**You have a list of problems. How do you decide what to fix first?**

- Which problem is easiest for an attacker?
- Which fix removes a whole door?

<!-- Speaker note: Close doors first, then strengthen the ones you keep. Give 30 seconds alone, 2 minutes in pairs, then take answers from both sides. There is no single right answer: ask for a reason, and let students change their minds. -->

---

<span style="background:#dbeafe; color:#1a1a1a; border:1.5px solid #3b82f6; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">💬 Discussion</span>

## Predict

**You stop the telnet service on the target. What happens to port 23?**

- It is no longer open: nothing is listening
- It stays open
- It becomes encrypted
- Port 23 moves to 22

<!-- Speaker note: What happens: No longer open. A port is only open while a service listens, so stopping the service closes the door. Take two or three predictions before anyone runs it. -->

<!-- Speaker note: Teacher: wrong answers think a service can be closed in the firewall alone. -->

---

<span style="background:#fef3c7; color:#1a1a1a; border:1.5px solid #f59e0b; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✍️ Activity</span>

## Findings to fixes <span style="font-size:.6em;color:#64748b">(5 min)</span>

Cards of four findings and four fixes. Pairs match them and say what each fix does not cover.

<!-- Speaker note: Each fix covers one finding. -->

---

<span style="background:#fef3c7; color:#1a1a1a; border:1.5px solid #f59e0b; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✍️ Activity</span>

## Try it

{{embed: https://tutorials.learningwaypoints.com/_playground-board/index.html?id=deck%2Fsystems%2Fseclab%2Fharden%2Fstep-2&code=widget%3A+shell%0Afs%3A+pi%0Alab%3A+on%0Alogin%3A+admin%0A&fresh=1}}

[Open this step in the tutorial](https://tutorials.learningwaypoints.com/systems/seclab/harden/?full=step-2#step-2)

<!-- Speaker note: Was your prediction right? -->

<style scoped>pre, marp-pre { font-size: 0.5em; line-height: 1.25; } section { font-size: 25px; }</style>

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## What happened?

* No longer open. A port is only open while a service listens, so stopping the service closes the door.

<!-- Speaker note: Reveal after running. Ask who predicted it, and what made them think so. -->

---

<span style="background:#dbeafe; color:#1a1a1a; border:1.5px solid #3b82f6; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">💬 Discussion</span>

## Four fixes, four jobs

Now try it yourself.

$$\text{sudo systemctl stop telnet}$$

1) $\text{sudo apt update; sudo apt upgrade}$ — fetch and install the fixed versions.
2) $\text{echo -e "PermitRootLogin no\\nPasswordAuthentication no" | sudo tee /etc/ssh/sshd_config}$ — tighten ssh.
3) $\text{sudo systemctl restart ssh}$ — ssh reads its settings only when it starts.

<!-- Speaker note: Model this live on the board before revealing anything: write each line and say why, pausing to ask the class what comes next. Then click to reveal the lines and compare. Script. Start: write sudo systemctl stop telnet and say "close the door (add disable to keep it off)." Line 1: write sudo apt update; sudo apt upgrade and say "fetch and install the fixed versions." Line 2: write echo -e "PermitRootLogin no\ no" | sudo tee /etc/ssh/sshd_config and say "tighten ssh." Line 3: write sudo systemctl restart ssh and say "ssh reads its settings only when it starts." -->

<style scoped>pre, marp-pre { font-size: 0.5em; line-height: 1.25; } section { font-size: 27px; }</style>

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Four fixes, four jobs

**Which fix handles 'OpenSSH 7.2 is old'?**

- Turn on the firewall only
- Stop telnet
- sudo apt update, then sudo apt upgrade
- Delete the log

* Answer: sudo apt update, then sudo apt upgrade

<!-- Speaker note: Upgrade installs the fixed versions. The lab's apt reads the lab's own mirror. -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Find the mistake

**Sam fixes Apache. Click the line where it first goes wrong.**

```
 1  Sam cannot upgrade Apache before the lab ends.
 2  So Sam turns on the firewall and leaves port 80 allowed.
 3  Sam says: the firewall makes old software safe.
 4  Sam writes 'fixed' in the report.
```

* Answer: line 3

<!-- Speaker note: Line 3: a firewall decides who can reach the door; the old program behind an allowed door is still old. Upgrade it, or take the service away. -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## What ssh config does

**In sshd_config, what does PermitRootLogin no change?**

- Everyone loses sudo
- ssh stops
- root loses its password
- root can no longer log in over ssh

* Answer: root can no longer log in over ssh

<!-- Speaker note: Guessers target root, so the account is not allowed in over ssh at all. Admins log in as themselves and use sudo. -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Layers

**Which gives the strongest result?**

- Stop, upgrade, tighten and filter together
- Only the firewall
- Only an upgrade
- Only a new password

* Answer: Stop, upgrade, tighten and filter together

<!-- Speaker note: Layers. Ask on mini whiteboards or by show of hands before the reveal. -->

---

<span style="background:#fef3c7; color:#1a1a1a; border:1.5px solid #f59e0b; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✍️ Activity</span>

## Vary: change one thing



- **Upgrade:** 
- **Tighten ssh:** 
- **Filter:** 

[Open this step](https://tutorials.learningwaypoints.com/systems/seclab/harden/?full=step-4#step-4)

<!-- Speaker note: What this step is for: Each task is one layer of the fix: upgrade, tighten the login, filter with the firewall. For students who need more support: A card pairing each finding with its fix. For early finishers: Find out how key login works and what must be done before password login is switched off. The hard part, on purpose: Treating one fix as enough. Each fix does one job; the layering is the point. When students get stuck: The ssh settings do not seem to apply. Ask: Did you restart ssh? Fix: sudo systemctl restart ssh. / A student's config file lost lines. Ask: Did you use tee without -a? Fix: tee replaces the file: write all the lines you want. -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Restart

**Why must you restart ssh after editing sshd_config?**

- To update it
- To log out
- It reads its settings only when it starts
- To clear the log

* Answer: It reads its settings only when it starts

<!-- Speaker note: Services read their config at start (the same as Samba). -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Firewall limits

**The firewall allows port 80. Apache behind it is old. Is the finding fixed?**

- Only for ssh
- No: the old program is still reachable on 80
- Yes
- Only for ftp

* Answer: No: the old program is still reachable on 80

<!-- Speaker note: A firewall does not fix what is behind an allowed door. -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Review: guessing

**Review: 14 failures in two minutes for root. Which fix helps most?**

- No root login over ssh, and key login only
- A bigger log
- A new name for ssh
- Reboot daily

* Answer: No root login over ssh, and key login only

<!-- Speaker note: Take away the prize, or make the lock pointless to guess. -->

---

<span style="background:#fef3c7; color:#1a1a1a; border:1.5px solid #f59e0b; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✍️ Activity</span>

## Make: harden it

Then: a fix is not proved until you scan again. That is the challenge.

[Open this step](https://tutorials.learningwaypoints.com/systems/seclab/harden/?full=step-6#step-6)

<!-- Speaker note: What this step is for: Applying every layer, and leaving nothing behind, is the whole move. Hints, in order: Four findings: telnet and ftp, old versions, ssh password and root login. / Stop the two services; sudo apt update and upgrade; write the ssh settings. / Then sudo systemctl restart ssh so the new settings apply. -->

<!-- Speaker note: Teacher: ask what is left that you did not fix. -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Exit ticket

**Why is upgrading Apache a better fix than just allowing it through the firewall?**

* The firewall only filters who reaches the door. The old program behind it is still old.

<!-- Speaker note: Students answer on paper or a mini whiteboard before the reveal. Anyone who cannot answer needs the main idea again next lesson. Where this leads: Links: System admin on a Raspberry Pi (services, ufw, users); next: the audit report. -->
