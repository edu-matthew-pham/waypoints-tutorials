---
marp: true
theme: default
html: true
---

# Challenge: the class server

System admin on a Raspberry Pi · The class server

<!-- Speaker note: Set up the Pi as the class server: a hand-in share, accounts in one group, a firewall that lets only the right ports through, and a nightly backup. Then explain what each part protects, and what it does not. About 40 minutes (Predict and Try 8 min · Worked example 10 min · Vary 10 min · Practise and Make 12 min). -->

---

## Today

- I can set up a share, accounts, a firewall and a backup that work together.
- I can say what each part protects against and what it does not.
- I can explain why exposing a server to the internet raises the stakes.

<!-- Speaker note: Before class: Try the board yourself; it is the longest Make in the course. The one idea: several components together secure a networked system, and each covers a different risk. Students should leave able to say, for each layer, what it does not protect: the firewall does not stop a stolen password; permissions do not stop a failed disk; a backup does not stop a leak. Simplifications: the pretend firewall tracks `allow <port>` and `enable`, not source addresses or default policies. The real `ufw` lets you restrict by network (for example only 192.168.1.0/24) which is what a school would do. This is the capstone for System admin. Students then complete the brief (an admin log and a short report), which assesses AC9TDI10K01 nodes 3 and 5. If you have a real Pi, setting up the same server on it is a good practical. A later extension, a lab with Kali Linux on a Pi in an offline network, is planned (roadmap/systems.md); it needs your sign-off and a lab network the school IT team approves. With internet: automatic updates, off-site backups and a VPN (Tailscale or WireGuard) belong on a server people use from home. A domain name and certificate (Let's Encrypt) matter when a service is public, and so does an honest answer to 'should it be public at all?' Teacher: Try: ask what would have happened in the other order. Teacher: Worked example: ask which layer would have stopped each of the 'what if' stories. Teacher: Vary: have pairs check each other's work. -->

---

## Why it matters

> Your class gets one Pi. By Friday it has to be a safe place to hand in work. Where do you start?

<!-- Speaker note: This is the whole of the course in one job. Each part covers a different risk: accounts and groups decide **who**, permissions decide **what**, the firewall decides **which doors**, the backup covers **what if it breaks**. No one part is enough on its own. This also covers AC9TDI10K01's last idea: how several components together secure a networked system. -->

---

<span style="background:#dbeafe; color:#1a1a1a; border:1.5px solid #3b82f6; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">💬 Discussion</span>

## Think, pair, share

**Your class gets one Pi. How do you make it safe to share?**

- What could go wrong?
- Which part would stop each one?

<!-- Speaker note: Who, what, which doors, what if. Give 30 seconds alone, 2 minutes in pairs, then take answers from both sides. There is no single right answer: ask for a reason, and let students change their minds. -->

---

<span style="background:#dbeafe; color:#1a1a1a; border:1.5px solid #3b82f6; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">💬 Discussion</span>

## Predict

**You are logged in to the Pi over ssh. You type sudo ufw enable first, planning to add the ssh rule next. What happens?**

- The Pi turns off
- ufw asks for a password
- The Pi blocks ssh before the rule exists, and your session drops
- Nothing: the rule comes next

<!-- Speaker note: What happens: Your session drops, and nobody can log in again over the network. Allow ssh first, then enable the firewall. Take two or three predictions before anyone runs it. -->

<!-- Speaker note: Teacher: wrong answers think the rule can come second. -->

---

<span style="background:#dbeafe; color:#1a1a1a; border:1.5px solid #3b82f6; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">💬 Discussion</span>

## What could go wrong? <span style="font-size:.6em;color:#64748b">(5 min)</span>

List five things that could go wrong with a shared server. Match each to the layer that covers it.

<!-- Speaker note: Each layer covers one. -->

---

<span style="background:#fef3c7; color:#1a1a1a; border:1.5px solid #f59e0b; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✍️ Activity</span>

## Try it

{{embed: https://tutorials.learningwaypoints.com/_playground-board/index.html?id=deck%2Fsystems%2Fsysadmin%2Fclass-server%2Fstep-2&code=widget%3A+shell%0Afs%3A+pi%0Afrom%3A+laptop%0Apkgs%3A+ufw%0A&fresh=1}}

[Open this step in the tutorial](https://tutorials.learningwaypoints.com/systems/sysadmin/class-server/?full=step-2#step-2)

<!-- Speaker note: Was your prediction right? -->

<style scoped>pre, marp-pre { font-size: 0.5em; line-height: 1.25; } section { font-size: 25px; }</style>

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## What happened?

* Your session drops, and nobody can log in again over the network. Allow ssh first, then enable the firewall.

<!-- Speaker note: Reveal after running. Ask who predicted it, and what made them think so. -->

---

<span style="background:#dbeafe; color:#1a1a1a; border:1.5px solid #3b82f6; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">💬 Discussion</span>

## Layers, not one lock

Now try it yourself.

$$\text{accounts and groups}$$

1) $\text{owners and permissions}$ — what each may do (lessons 3 and 5).
2) $\text{firewall}$ — which doors can be reached (lesson 6).
3) $\text{backup and schedule}$ — what if it breaks (lesson 7).

<!-- Speaker note: Model this live on the board before revealing anything: write each line and say why, pausing to ask the class what comes next. Then click to reveal the lines and compare. Script. Start: write accounts and groups and say "who is allowed (lesson 3)." Line 1: write owners and permissions and say "what each may do (lessons 3 and 5)." Line 2: write firewall and say "which doors can be reached (lesson 6)." Line 3: write backup and schedule and say "what if it breaks (lesson 7)." -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Layers, not one lock

**Which part protects against 'a file is deleted by mistake'?**

- The firewall
- sudo
- A backup
- A password

* Answer: A backup

<!-- Speaker note: Each layer covers one risk. The backup is the one that covers loss. -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Find the mistake

**Sam is locked out. Click the line where it first goes wrong.**

```
 1  Sam is logged in to the class Pi over ssh.
 2  Sam types sudo ufw enable.
 3  Sam then types sudo ufw allow ssh.
 4  Sam logs out and tries to log back in. Timed out.
```

* Answer: line 2

<!-- Speaker note: Line 2: with the firewall on and no ssh rule, the connection drops. Allow ssh first, then enable. -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Reaching it from home

**Which is safer for watching Jellyfin away from school: opening port 8096 on the router, or a VPN such as Tailscale or WireGuard?**

- Opening the port: it is simpler, so safer
- Neither is possible
- A VPN: only devices you trust can reach it
- Both are the same

* Answer: A VPN: only devices you trust can reach it

<!-- Speaker note: An open port faces the whole internet. A VPN keeps the server on a private network that only your devices join. -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Order

**You are on ssh. What comes first?**

- sudo ufw allow ssh
- sudo ufw enable
- sudo reboot
- exit

* Answer: sudo ufw allow ssh

<!-- Speaker note: Allow first, then enable. Ask on mini whiteboards or by show of hands before the reveal. -->

---

<span style="background:#fef3c7; color:#1a1a1a; border:1.5px solid #f59e0b; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✍️ Activity</span>

## Vary: change one thing



- **The software:** 
- **The doors:** 
- **After a reboot:** 

[Open this step](https://tutorials.learningwaypoints.com/systems/sysadmin/class-server/?full=step-4#step-4)

<!-- Speaker note: What this step is for: Each task is one layer of the class server: the software, the firewall and surviving a reboot. For students who need more support: A checklist of the five layers. For early finishers: Add automatic security updates (unattended-upgrades) and say which risk they cover. The hard part, on purpose: The order of the firewall steps and remembering every layer. Give students a checklist and tick it as they go. When students get stuck: The share works but nobody can save. Ask: Who owns the folder, and which group? Fix: chgrp class and chmod 775. / A student gets locked out of ssh. Ask: Did you allow ssh before enabling? Fix: Restart the board: this is the lesson. On a real Pi it needs a keyboard. -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Two layers

**Which two layers together mean 'only class members may save files, and only from the school network'?**

- Group permissions on the folder and a firewall rule
- ssh and sudo
- A backup and a schedule
- Jellyfin and Samba

* Answer: Group permissions on the folder and a firewall rule

<!-- Speaker note: Permissions decide who may write; the firewall decides who can reach the door. -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Weakest

**Which is the weakest protection for a share?**

- A password
- Hiding the folder's name
- A firewall rule
- A group on the folder

* Answer: Hiding the folder's name

<!-- Speaker note: Hiding is not protection (The command line › Who can read what). -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Reaching it from home

**A student asks to open a router port so they can reach the Pi from home. What is the best first answer?**

- Use a VPN instead: it keeps the Pi off the open internet
- Open all ports
- Yes, open it
- Turn the firewall off

* Answer: Use a VPN instead: it keeps the Pi off the open internet

<!-- Speaker note: Exposing a server raises the stakes. A VPN gives the same convenience. -->

<style scoped>pre, marp-pre { font-size: 0.5em; line-height: 1.25; } section { font-size: 27px; }</style>

---

<span style="background:#fef3c7; color:#1a1a1a; border:1.5px solid #f59e0b; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✍️ Activity</span>

## Make: the class server

Then write up your server: for each part, what it protects against and what it does not. That is the brief for this course.

[Open this step](https://tutorials.learningwaypoints.com/systems/sysadmin/class-server/?full=step-6#step-6)

<!-- Speaker note: What this step is for: Putting every layer together is the whole challenge. Hints, in order: Five jobs: install samba, share /srv/class to group class, let the group write, open port 445 with the firewall, a nightly backup. / sudo apt install samba; add [class] with path = /srv/class using tee; sudo systemctl restart smbd; sudo chgrp class /srv/class; sudo chmod 775 /srv/class. / sudo ufw allow ssh; sudo ufw allow 445; sudo ufw enable; echo "30 2 * * * tar -czf /media/usb/class.tar.gz /srv/class" | crontab - -->

<!-- Speaker note: Teacher: ask each pair which layer they would add next. -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Exit ticket

**Name two layers of the class server and one thing each does not protect against.**

* Any two, for example: firewall (does not stop a stolen password), backup (does not stop a leak).

<!-- Speaker note: Students answer on paper or a mini whiteboard before the reveal. Anyone who cannot answer needs the main idea again next lesson. Where this leads: Links: Networks (ports); Cyber safety and privacy; Security and privacy; The command line. -->
