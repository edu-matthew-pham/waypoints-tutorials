---
title: "Keep it running: backups and schedules"
subtitle: "System admin on a Raspberry Pi · Keep it running · Lesson 7"
---

# Keep it running: backups and schedules

**Name:** {{field-24}} **Date:** {{field-15}} **Class:** {{field-15}}

> **Key question:** The Pi's SD card dies on a Friday. What did you lose?


:::teacher-note

**In one sentence:** A server that nobody looks after fails. Back up what matters with tar to a separate disk, schedule the job with cron, watch the disk space, and test the restore: a backup you have never restored is only a hope.

**Students should be able to say:** I can back up a folder with tar and list or restore it. I can read and write a cron schedule. I can say why a backup must be on a different disk and be tested.

**Width:** the unmarked parts are the floor every student does (predict, run, investigate and make). Typical adds the modify practice; wider adds the real-world contexts. They add contexts, not difficulty. Students work in the online tutorial alongside this sheet.

:::


## Predict


:::keep-together

**A cron line starts 30 2 * * *. When does it run?**

☐ At 3:20 every day

☐ At 02:30 every day

☐ At 30 past every hour on the 2nd

☐ Every 30 minutes, 2 times a day

My prediction, and why:

{{lines-3}}

:::


:::teacher-note

**What happens:** At 02:30 every day. The fields are minute, hour, day of month, month, day of week; a star means every.

:::


## Run

Try it on the board in the tutorial. Was your prediction right? What was different?

{{lines-2}}

## Worked example: Backup, schedule, restore


:::keep-together

### Backup, schedule, restore

1. $\text{tar -czf /media/usb/docs.tar.gz Documents}$ — make a compressed copy of a folder.
2. $\text{echo "30 2 * * * tar -czf ..." | crontab -}$ — run it at 02:30 every day.
3. $\text{tar -tzf docs.tar.gz}$ — list what is inside, without changing anything.
4. $\text{tar -xzf docs.tar.gz}$ — restore: unpack it into the current folder.

Now try it yourself.

**What does 0 3 * * 0 mean?**

☐ At 03:00 every day

☐ At 03:00 on Sundays

☐ At midnight on the 3rd

☐ Every 3 minutes

:::


:::teacher-note

**Answer:** At 03:00 on Sundays

Minute 0, hour 3, any day, any month, weekday 0 (Sunday).

:::


:::keep-together

### Find the mistake

**Sam schedules a backup. Click the line where it first goes wrong.**

```
 1  Sam wants a backup every 15 minutes.
 2  Sam writes the cron line 15 * * * *.
 3  Sam says: the first number is 15, so it runs every 15 minutes.
 4  So four backups an hour.
```

Line: {{field-15}}

Why is it wrong?

{{lines-2}}

:::


:::teacher-note

**Answer:** line 2

Line 2: 15 in the minute field means at minute 15 of every hour, once an hour. Every 15 minutes is */15 * * * *.

:::


:::keep-together

### A backup you never tested

**You have made a backup every night for a year, and never opened one. What do you really know?**

☐ Nothing about whether it can be restored

☐ It is safe from fire

☐ It is encrypted

☐ It works

:::


:::teacher-note

**Answer:** Nothing about whether it can be restored

A backup is only proved by restoring from it. Test it, and keep one copy somewhere else.

:::


:::typical

## Vary: change one thing


**Schedule it.** 

**Restore.** 

**Watch the space.** 

Work in the tutorial. Plan first: what will you change, and how will you test it?

{{box-4}}

:::


## Practise


:::keep-together

### 04:15

**Which cron line runs at 04:15 every day?**

☐ 15 4 * * *

☐ 4 * * * 15

☐ * * 4 15 *

☐ 4 15 * * *

:::


:::teacher-note

**Answer:** 15 4 * * *

Minute first, then hour: 15 4.

:::


:::keep-together

### Where

**Where should the backup of the Pi's files be kept?**

☐ Nowhere

☐ On a different disk, ideally in a different place

☐ In the same folder

☐ On the SD card

:::


:::teacher-note

**Answer:** On a different disk, ideally in a different place

A copy on the failing disk is not a backup.

:::


:::keep-together

### Review: firewall

**Review: the firewall is on and port 8096 is not allowed. Can a TV reach Jellyfin?**

☐ Yes

☐ No

☐ Only at night

☐ Only on Wi-Fi

:::


:::teacher-note

**Answer:** No

Blocked until allowed.

:::


## Make: a nightly backup

Then: on a real Pi, look at /var/log/syslog and try df -h on the real disk.

Work in the tutorial. Plan first: what will you change, and how will you test it?

{{box-4}}

## Exit ticket

:::keep-together

**What are two reasons a backup might fail you?**

{{lines-3}}

:::


:::teacher-note

**Answer:** It is on the same disk; it has never been tested.

:::

