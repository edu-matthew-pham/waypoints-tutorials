---
marp: true
theme: default
html: true
---

# Accounts, groups and sudo

System admin on a Raspberry Pi · People

<!-- Speaker note: Each person gets an account and a private home folder. Groups give several accounts the same rights. Only users in the sudo group may use sudo, and the system logs every time they do. About 40 minutes (Predict and Try 8 min · Worked example 10 min · Vary 10 min · Practise and Make 12 min). -->

---

## Today

- I can create an account and say what its home folder protects.
- I can add a user to a group without removing the other groups.
- I can say who may use sudo, and where the log shows it.

<!-- Speaker note: Before class: Try the boards yourself. The one idea: accounts say who you are; groups and permissions say what you may do. This is authentication and authorisation (Security and privacy › Sign-in and permissions) on a real system. Simplifications: the pretend Pi's pi account is not in the adm group, so reading /var/log/auth.log needs sudo (on a real Pi it does not). Passwords are always accepted. `su alex` starts a pretend session and `exit` returns. On a real Pi: sudo adduser asks for a password and details; give each student their own account on the group's Pi so the log tells them apart. Never share the pi password. Other options: `useradd` is the low-level version of `adduser`; `visudo` and `/etc/sudoers.d/` give finer control over who may run what. With internet: a school with many Pis would use one directory (for example LDAP or Microsoft Entra) rather than adding each account by hand. Teacher: Try: ask why a home folder is private by default. Teacher: Worked example: stop at the -a question and ask what would happen to Alex's groups. Teacher: Vary: after the log, ask what it would show if Alex had guessed passwords. -->

---

## Why it matters

> One Pi, a whole class. How does it know who is allowed to do what?

<!-- Speaker note: This is **authentication** (who are you?) and **authorisation** (what may you do?) from *Who are you, and what may you do?*, on a real kind of system: accounts say who, groups and permissions say what. -->

---

<span style="background:#dbeafe; color:#1a1a1a; border:1.5px solid #3b82f6; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">💬 Discussion</span>

## Think, pair, share

**A whole class shares one computer. How do you give each person what they need and no more?**

- What does each person need?
- What happens if everyone shares one password?

<!-- Speaker note: Separate accounts and groups; the log shows who did what. Give 30 seconds alone, 2 minutes in pairs, then take answers from both sides. There is no single right answer: ask for a reason, and let students change their minds. -->

---

<span style="background:#dbeafe; color:#1a1a1a; border:1.5px solid #3b82f6; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">💬 Discussion</span>

## Predict

**You create an account for Alex with sudo adduser alex. Can Alex open your home folder, /home/pi?**

- Only if Alex is in the sudo group
- Yes: everyone on the Pi can open every home folder
- Only on Mondays
- No: home folders are private to their owner

<!-- Speaker note: What happens: No. Each home folder is drwx------: only its owner (and root) can open it. That is why a media server can't read films in a private home folder, a thing lesson 6 meets. Take two or three predictions before anyone runs it. -->

<!-- Speaker note: Teacher: wrong answers think 'logged in' means 'allowed everywhere'. -->

---

<span style="background:#fef3c7; color:#1a1a1a; border:1.5px solid #f59e0b; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✍️ Activity</span>

## Who may? <span style="font-size:.6em;color:#64748b">(5 min)</span>

Give three students a card each: owner, class member, stranger. A file card says rwxrwx---. What may each do?

<!-- Speaker note: Group members share the middle three. -->

---

<span style="background:#fef3c7; color:#1a1a1a; border:1.5px solid #f59e0b; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✍️ Activity</span>

## Try it

{{embed: https://tutorials.learningwaypoints.com/_playground-board/index.html?id=deck%2Fsystems%2Fsysadmin%2Fusers%2Fstep-2&code=widget%3A+shell%0Afs%3A+pi%0Aupdated%3A+on%0Awho%3A+alex%0A&fresh=1}}

[Open this step in the tutorial](https://tutorials.learningwaypoints.com/systems/sysadmin/users/?full=step-2#step-2)

<!-- Speaker note: Was your prediction right? -->

<style scoped>pre, marp-pre { font-size: 0.5em; line-height: 1.25; } section { font-size: 25px; }</style>

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## What happened?

* No. Each home folder is drwx------: only its owner (and root) can open it. That is why a media server can't read films in a private home folder, a thing lesson 6 meets.

<!-- Speaker note: Reveal after running. Ask who predicted it, and what made them think so. -->

---

<span style="background:#dbeafe; color:#1a1a1a; border:1.5px solid #3b82f6; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">💬 Discussion</span>

## Groups and sudo

Now try it yourself.

$$\text{sudo adduser alex}$$

1) $\text{sudo usermod -aG class alex}$ — add alex to class. a = add, G = to a group. Without a, groups are replaced.
2) $\text{id alex}$ — list the groups alex is in.
3) $\text{sudo cat /var/log/auth.log}$ — read who logged in and who used sudo (administrators only).

<!-- Speaker note: Model this live on the board before revealing anything: write each line and say why, pausing to ask the class what comes next. Then click to reveal the lines and compare. Script. Start: write sudo adduser alex and say "make the account, its group and its private home folder." Line 1: write sudo usermod -aG class alex and say "add alex to class. a = add, G = to a group. Without a, groups are replaced." Line 2: write id alex and say "list the groups alex is in." Line 3: write sudo cat /var/log/auth.log and say "read who logged in and who used sudo (administrators only)." -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Groups and sudo

**Which group lets a user run sudo?**

- users
- pi
- adm
- sudo

* Answer: sudo

<!-- Speaker note: Members of the sudo group may use sudo. That is the only difference between an administrator and a normal user here. -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Find the mistake

**Sam gives Alex sudo. Click the line where it first goes wrong.**

```
 1  Alex is in the group class.
 2  Sam wants to give Alex sudo as well, so types sudo usermod -G sudo alex.
 3  Sam checks: alex is in sudo.
 4  So Alex is now in class and sudo.
```

* Answer: line 2

<!-- Speaker note: Line 2: -G on its own replaces all of Alex's groups. -aG adds one and keeps the rest: sudo usermod -aG sudo alex. -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## The log

**Where does the Pi record who used sudo?**

- On the router
- In your home folder
- Nowhere
- /var/log/auth.log, which only an administrator can read

* Answer: /var/log/auth.log, which only an administrator can read

<!-- Speaker note: auth.log lists logins and sudo use, with the user and the time. Administrators read it to find out who did what. -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## -aG

**What does usermod -G (without a) do?**

- Replaces all the user's groups
- Adds one group
- Deletes the user
- Lists groups

* Answer: Replaces all the user's groups

<!-- Speaker note: Without -a the group list is replaced. Ask on mini whiteboards or by show of hands before the reveal. -->

---

<span style="background:#fef3c7; color:#1a1a1a; border:1.5px solid #f59e0b; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✍️ Activity</span>

## Vary: change one thing



- **Add a group:** 
- **Read the log:** 
- **From Alex's side:** 

[Open this step](https://tutorials.learningwaypoints.com/systems/sysadmin/users/?full=step-4#step-4)

<!-- Speaker note: What this step is for: Each task changes one thing: give a group, read the log, and see a private folder from the other side. For students who need more support: A card: adduser makes, usermod -aG adds to a group, id shows. For early finishers: Find out what the root account is and why Raspberry Pi OS leaves it without a password. The hard part, on purpose: -a versus no -a on usermod. Show both on the board and run id after each. When students get stuck: A student's usermod removed their other groups. Ask: Did you use -a? Fix: Use -aG, then check with id. / Permission denied reading the log. Ask: Did you use sudo? Fix: sudo cat /var/log/auth.log. -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## -aG

**Which command adds alex to the group class and keeps alex's other groups?**

- sudo groups alex
- sudo adduser class
- sudo usermod -G class alex
- sudo usermod -aG class alex

* Answer: sudo usermod -aG class alex

<!-- Speaker note: -a keeps the old groups, -G names the group to add. -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Why accounts

**Why is it better to give people sudo through a group than to share the pi password?**

- The log shows each person, and you can remove one without changing the password for everyone
- Groups are faster
- It isn't better
- Passwords stop working

* Answer: The log shows each person, and you can remove one without changing the password for everyone

<!-- Speaker note: Separate accounts mean the log says who did what, and removing one person doesn't affect the others. -->

<style scoped>pre, marp-pre { font-size: 0.5em; line-height: 1.25; } section { font-size: 25px; }</style>

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Review: exit

**Review: you ssh to the Pi, then type exit. Which account are you now?**

- root
- Your laptop account
- pi
- alex

* Answer: Your laptop account

<!-- Speaker note: exit ends the ssh session, and you are back on the laptop. -->

---

<span style="background:#fef3c7; color:#1a1a1a; border:1.5px solid #f59e0b; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✍️ Activity</span>

## Make: a new administrator

Then: on a real Pi, run `id` to see your own groups.

[Open this step](https://tutorials.learningwaypoints.com/systems/sysadmin/users/?full=step-6#step-6)

<!-- Speaker note: What this step is for: Making an account and giving it the right rights is the whole move. Hints, in order: Two steps: the account, then its rights. / sudo adduser bob / sudo usermod -aG sudo bob (or sudo adduser bob sudo) -->

<!-- Speaker note: Teacher: ask who should and should not get sudo. -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Exit ticket

**What is the difference between adduser and usermod -aG?**

* adduser makes the account and its home. usermod -aG adds an existing account to a group.

<!-- Speaker note: Students answer on paper or a mini whiteboard before the reveal. Anyone who cannot answer needs the main idea again next lesson. Where this leads: Links: Security and privacy › Sign-in and permissions; The command line › Who can read what; next: Services. -->
