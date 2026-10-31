---
marp: true
theme: default
html: true
---

# Keep it running: backups and schedules

System admin on a Raspberry Pi · Keep it running

<!-- Speaker note: A server that nobody looks after fails. Back up what matters with tar to a separate disk, schedule the job with cron, watch the disk space, and test the restore: a backup you have never restored is only a hope. About 40 minutes (Predict and Try 8 min · Worked example 10 min · Vary 10 min · Practise and Make 12 min). -->

---

## Today

- I can back up a folder with tar and list or restore it.
- I can read and write a cron schedule.
- I can say why a backup must be on a different disk and be tested.

<!-- Speaker note: Before class: Try the boards yourselves. The one idea: running a system means planning for failure: a copy on a different disk, a schedule that runs without you, and a restore you have tested. This is the overall picture of securing a system (AC9TDI10K01 node 5): backups, firewall, accounts and updates each cover a different risk. Simplifications: tar paths are shown as typed; the pretend /media/usb is a USB drive. `crontab -e` opens an editor on a real Pi (nano); the board refuses it and takes `echo "..." | crontab -`, which replaces your whole schedule. Disk sizes are made up. Other options: `rsync` copies only what changed and suits big folders; `rsnapshot` and `borg` keep many versions. With internet: off-site backups (rclone to cloud storage, or another Pi at home) protect against fire and theft; automatic security updates (`unattended-upgrades`) keep the Pi patched; monitoring can email you when the disk is nearly full. Teacher: Try: ask what would be lost if the card failed now. Teacher: Worked example: stop at the untested backup and ask how you would know. Teacher: Vary: after the restore, ask how often it should be tested. -->

---

## Why it matters

> The Pi's SD card dies on a Friday. What did you lose?

<!-- Speaker note: Keeping a system running is half the job. Three habits cover most of it: a **backup** on a different disk, a **schedule** so it happens without you, and a **test** that you can get the files back. Each one protects against a different failure, and none replaces the others. -->

---

<span style="background:#dbeafe; color:#1a1a1a; border:1.5px solid #3b82f6; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">💬 Discussion</span>

## Think, pair, share

**The computer breaks tonight. What would you wish you had done last week?**

- What would you lose?
- How would you know the copy works?

<!-- Speaker note: A copy somewhere else, made automatically, and tested. Give 30 seconds alone, 2 minutes in pairs, then take answers from both sides. There is no single right answer: ask for a reason, and let students change their minds. -->

---

<span style="background:#dbeafe; color:#1a1a1a; border:1.5px solid #3b82f6; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">💬 Discussion</span>

## Predict

**A cron line starts 30 2 * * *. When does it run?**

- At 3:20 every day
- At 02:30 every day
- At 30 past every hour on the 2nd
- Every 30 minutes, 2 times a day

<!-- Speaker note: What happens: At 02:30 every day. The fields are minute, hour, day of month, month, day of week; a star means every. Take two or three predictions before anyone runs it. -->

<!-- Speaker note: Teacher: wrong answers read the fields as 'every 30 minutes'. -->

---

<span style="background:#fef3c7; color:#1a1a1a; border:1.5px solid #f59e0b; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✍️ Activity</span>

## Cron cards <span style="font-size:.6em;color:#64748b">(5 min)</span>

Five cards in a row: minute, hour, day, month, weekday. Give a schedule in words and the class builds the line.

<!-- Speaker note: Order matters: minute comes first. -->

---

<span style="background:#fef3c7; color:#1a1a1a; border:1.5px solid #f59e0b; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✍️ Activity</span>

## Try it

{{embed: https://tutorials.learningwaypoints.com/_playground-board/index.html?id=deck%2Fsystems%2Fsysadmin%2Fkeep-running%2Fstep-2&code=widget%3A+shell%0Afs%3A+pi%0Aexists%3A+%2Fmedia%2Fusb%2Fdocs.tar.gz%0A&fresh=1}}

[Open this step in the tutorial](https://tutorials.learningwaypoints.com/systems/sysadmin/keep-running/?full=step-2#step-2)

<!-- Speaker note: Was your prediction right? -->

<style scoped>pre, marp-pre { font-size: 0.5em; line-height: 1.25; } section { font-size: 25px; }</style>

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## What happened?

* At 02:30 every day. The fields are minute, hour, day of month, month, day of week; a star means every.

<!-- Speaker note: Reveal after running. Ask who predicted it, and what made them think so. -->

---

<span style="background:#dbeafe; color:#1a1a1a; border:1.5px solid #3b82f6; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">💬 Discussion</span>

## Backup, schedule, restore

Now try it yourself.

$$\text{tar -czf /media/usb/docs.tar.gz Documents}$$

1) $\text{echo "30 2 * * * tar -czf ..." | crontab -}$ — run it at 02:30 every day.
2) $\text{tar -tzf docs.tar.gz}$ — list what is inside, without changing anything.
3) $\text{tar -xzf docs.tar.gz}$ — restore: unpack it into the current folder.

<!-- Speaker note: Model this live on the board before revealing anything: write each line and say why, pausing to ask the class what comes next. Then click to reveal the lines and compare. Script. Start: write tar -czf /media/usb/docs.tar.gz Documents and say "make a compressed copy of a folder." Line 1: write echo "30 2 * * * tar -czf ..." | crontab - and say "run it at 02:30 every day." Line 2: write tar -tzf docs.tar.gz and say "list what is inside, without changing anything." Line 3: write tar -xzf docs.tar.gz and say "restore: unpack it into the current folder." -->

<style scoped>pre, marp-pre { font-size: 0.5em; line-height: 1.25; } section { font-size: 27px; }</style>

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Backup, schedule, restore

**What does 0 3 * * 0 mean?**

- At 03:00 every day
- At 03:00 on Sundays
- At midnight on the 3rd
- Every 3 minutes

* Answer: At 03:00 on Sundays

<!-- Speaker note: Minute 0, hour 3, any day, any month, weekday 0 (Sunday). -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Find the mistake

**Sam schedules a backup. Click the line where it first goes wrong.**

```
 1  Sam wants a backup every 15 minutes.
 2  Sam writes the cron line 15 * * * *.
 3  Sam says: the first number is 15, so it runs every 15 minutes.
 4  So four backups an hour.
```

* Answer: line 2

<!-- Speaker note: Line 2: 15 in the minute field means at minute 15 of every hour, once an hour. Every 15 minutes is */15 * * * *. -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## A backup you never tested

**You have made a backup every night for a year, and never opened one. What do you really know?**

- Nothing about whether it can be restored
- It is safe from fire
- It is encrypted
- It works

* Answer: Nothing about whether it can be restored

<!-- Speaker note: A backup is only proved by restoring from it. Test it, and keep one copy somewhere else. -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Fields

**In 30 2 * * *, what is 30?**

- The minute
- The hour
- The day
- The weekday

* Answer: The minute

<!-- Speaker note: The first field is the minute. Ask on mini whiteboards or by show of hands before the reveal. -->

---

<span style="background:#fef3c7; color:#1a1a1a; border:1.5px solid #f59e0b; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✍️ Activity</span>

## Vary: change one thing



- **Schedule it:** 
- **Restore:** 
- **Watch the space:** 

[Open this step](https://tutorials.learningwaypoints.com/systems/sysadmin/keep-running/?full=step-4#step-4)

<!-- Speaker note: What this step is for: Each task changes one thing: schedule it, restore from it, and find what is using the space. For students who need more support: The five fields written above a cron line. For early finishers: Find out what the 3-2-1 backup rule says. The hard part, on purpose: The five cron fields. Write them above the line: minute hour day month weekday. When students get stuck: A cron line does not run when expected. Ask: Which field is the minute? The hour? Fix: Minute, hour, day, month, weekday, in that order. / tar says it cannot find the folder. Ask: Where are you? Does the path start from there? Fix: cd to the parent, or give the whole path. -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## 04:15

**Which cron line runs at 04:15 every day?**

- 15 4 * * *
- 4 * * * 15
- * * 4 15 *
- 4 15 * * *

* Answer: 15 4 * * *

<!-- Speaker note: Minute first, then hour: 15 4. -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Where

**Where should the backup of the Pi's files be kept?**

- Nowhere
- On a different disk, ideally in a different place
- In the same folder
- On the SD card

* Answer: On a different disk, ideally in a different place

<!-- Speaker note: A copy on the failing disk is not a backup. -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Review: firewall

**Review: the firewall is on and port 8096 is not allowed. Can a TV reach Jellyfin?**

- Yes
- No
- Only at night
- Only on Wi-Fi

* Answer: No

<!-- Speaker note: Blocked until allowed. -->

---

<span style="background:#fef3c7; color:#1a1a1a; border:1.5px solid #f59e0b; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✍️ Activity</span>

## Make: a nightly backup

Then: on a real Pi, look at /var/log/syslog and try df -h on the real disk.

[Open this step](https://tutorials.learningwaypoints.com/systems/sysadmin/keep-running/?full=step-6#step-6)

<!-- Speaker note: What this step is for: Backup, schedule and proof together are the whole move. Hints, in order: Two jobs: make the backup now, schedule it nightly. / tar -czf /media/usb/backup.tar.gz Documents / echo "30 2 * * * tar -czf /media/usb/backup.tar.gz Documents" | crontab - -->

<!-- Speaker note: Teacher: ask what the 3-2-1 rule is (three copies, two kinds of media, one off-site). -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Exit ticket

**What are two reasons a backup might fail you?**

* It is on the same disk; it has never been tested.

<!-- Speaker note: Students answer on paper or a mini whiteboard before the reveal. Anyone who cannot answer needs the main idea again next lesson. Where this leads: Links: Cyber safety and privacy › Threat models; Security and privacy; next: The class server. -->
