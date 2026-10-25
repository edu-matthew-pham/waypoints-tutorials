---
order: 7
unit: run
node: AC9TDI10K01 n5
assumes: ["AC9TDI10K01 n4"]
title: "Keep it running: backups and schedules"
summary: "A server that nobody looks after fails. Back up what matters with tar to a separate disk, schedule the job with cron, watch the disk space, and test the restore: a backup you have never restored is only a hope."
language: maths
hook: "The Pi's SD card dies on a Friday. What did you lose?"
explainPicture: { ref: shell.yml#explain-pic, caption: "tar -czf makes a compressed archive of Documents on the USB drive: a copy that survives if the SD card fails." }
---
Keeping a system running is half the job. Three habits cover most of it: a **backup** on a different disk, a **schedule** so it happens without you, and a **test** that you can get the files back. Each one protects against a different failure, and none replaces the others.

## Predict: the schedule

```step
stage: predict
insight: "Committing to what the five fields mean tests the new move: the order is minute, hour, day, month, weekday."
check:
  type: predict
  q: "A cron line starts 30 2 * * *. When does it run?"
  options: ["At 02:30 every day", "Every 30 minutes, 2 times a day", "At 30 past every hour on the 2nd", "At 3:20 every day"]
  actual: "At 02:30 every day. The fields are minute, hour, day of month, month, day of week; a star means every."
```

## Try: make a backup

```step
stage: run
insight: "Making an archive settles what a backup is."
try: { playground: board, starter: "shell.yml#run", height: 520 }
check: { type: board, text: "Back up the Documents folder into /media/usb/docs.tar.gz with tar -czf. Check it is there with ls -l /media/usb.", when: "x = 1", explain: "tar -czf /media/usb/docs.tar.gz Documents: c create, z compress, f file name." }
```

Was your prediction right?

## Worked example: Backup, schedule, restore

```step
stage: investigate
insight: "Following the method once, then finding where a plausible account goes wrong, models the new move."
tasks:
  - check:
      type: question
      q: "What does 0 3 * * 0 mean?"
      options: ["At 03:00 on Sundays", "Every 3 minutes", "At 03:00 every day", "At midnight on the 3rd"]
      answer: 0
      feedback: [null, "The first field is minute 0, the second is hour 3.", "The last 0 is weekday: Sunday.", "Day of month is *."]
      explain: "Minute 0, hour 3, any day, any month, weekday 0 (Sunday)."
  - check:
      type: bug
      code: "working.txt#sam"
      text: "Sam schedules a backup. Click the line where it first goes wrong."
      answer: 2
      fault: logic
      misconception: cron-minute-hours
      explain: "Line 2: 15 in the minute field means at minute 15 of every hour, once an hour. Every 15 minutes is */15 * * * *."
  - check:
      type: question
      q: "You have made a backup every night for a year, and never opened one. What do you really know?"
      options: ["Nothing about whether it can be restored", "It works", "It is safe from fire", "It is encrypted"]
      answer: 0
      feedback: [null, "A file existing is not the same as it working.", "A copy on the same shelf burns too.", "Compressed is not encrypted."]
      explain: "A backup is only proved by restoring from it. Test it, and keep one copy somewhere else."
```

### Backup, schedule, restore

```worked
\text{tar -czf /media/usb/docs.tar.gz Documents} :: make a compressed copy of a folder.
\text{echo "30 2 * * * tar -czf ..." | crontab -} :: run it at 02:30 every day.
\text{tar -tzf docs.tar.gz} :: list what is inside, without changing anything.
\text{tar -xzf docs.tar.gz} :: restore: unpack it into the current folder.
```

Now try it yourself.

### Find the mistake

### A backup you never tested

## Vary: change one thing

```step
stage: modify
insight: "Each task changes one thing: schedule it, restore from it, and find what is using the space."
try: { playground: board, starter: "shell.yml#v1", height: 520 }
tasks:
  - starter: "shell.yml#v1"
    check: { type: board, text: "Schedule a backup at 02:30 every day. Use echo \"30 2 * * * tar -czf /media/usb/docs.tar.gz Documents\" | crontab -", when: "cron_has = 1", explain: "echo \"30 2 * * * ...\" | crontab - loads one line as your schedule. crontab -l shows it." }
  - starter: "shell.yml#v2"
    check: { type: board, text: "Documents/readme.txt was deleted by mistake. Restore it from the backup in /media/usb.", when: "x = 1", explain: "tar -xzf /media/usb/docs.tar.gz, from your home folder: it unpacks Documents again." }
  - starter: "shell.yml#v3"
    check: { type: board, text: "Find the free space on the Pi with df -h, then see which folder is biggest with du -h.", when: "ran_it = 1", explain: "df shows each disk's space; du shows what a folder takes." }
```

### Schedule it

### Restore

### Watch the space

## Practise

```step
stage: practise
insight: "Reading schedules and choosing habits without the board is the same move in new forms, plus a review of firewalls."
tasks:
  - check:
      type: question
      q: "Which cron line runs at 04:15 every day?"
      options: ["15 4 * * *", "4 15 * * *", "* * 4 15 *", "4 * * * 15"]
      answer: 0
      feedback: [null, "That is 15:04 (hour 15, minute 4).", "Day and month fields are wrong.", "The fields are in the wrong places."]
      explain: "Minute first, then hour: 15 4."
  - check:
      type: question
      q: "Where should the backup of the Pi's files be kept?"
      options: ["On a different disk, ideally in a different place", "In the same folder", "On the SD card", "Nowhere"]
      answer: 0
      feedback: [null, "If that folder goes, so does the copy.", "If the card fails, both go.", "That is not a backup."]
      explain: "A copy on the failing disk is not a backup."
  - check:
      type: question
      q: "Review: the firewall is on and port 8096 is not allowed. Can a TV reach Jellyfin?"
      options: ["No", "Yes", "Only on Wi-Fi", "Only at night"]
      answer: 0
      feedback: [null, "Firewalls block what is not allowed.", "The connection type doesn't matter.", "Time doesn't matter."]
      explain: "Blocked until allowed."
```

### 04:15

### Where

### Review: firewall

## Make: a nightly backup

```step
stage: make
insight: "Backup, schedule and proof together are the whole move."
try: { playground: board, starter: "shell.yml#make", height: 520 }
hint: ["Two jobs: make the backup now, schedule it nightly.", "tar -czf /media/usb/backup.tar.gz Documents", "echo \"30 2 * * * tar -czf /media/usb/backup.tar.gz Documents\" | crontab -"]
check: { type: board, text: "Back up Documents to /media/usb/backup.tar.gz and schedule the same backup for 02:30 every night.", when: "x = 1 and cron_has = 1", explain: "Make the archive, then load the cron line that makes it again each night. Then restore from it once, to be sure." }
```

Then: on a real Pi, look at /var/log/syslog and try df -h on the real disk.
