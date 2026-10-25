---
title: Keeping it running in 5 minutes
---
## The idea in plain words

Three habits keep a server alive. A **backup** on a different disk (`tar -czf backup.tar.gz folder`; list it with `tar -tzf`, restore with `tar -xzf`). A **schedule** so it happens without you: `cron` lines have five fields, minute, hour, day of month, month, weekday, so `30 2 * * *` is 02:30 every day, and `*/15 * * * *` is every 15 minutes. And a **test**: a backup you have never restored is only a hope.

`df -h` shows how full each disk is; `du -h folder` shows what a folder takes.

## Where to run it for real

On a real Pi `crontab -e` opens an editor (nano). The board takes `echo "line" | crontab -` instead, which replaces the whole schedule. Use a USB drive for the backup: a copy on the same SD card dies with it.

## What students get wrong

- **15 in the first field is every 15 minutes.** It is minute 15 of each hour.
- **A backup that ran is a backup that works.** Only a restore proves it.
- **Copy it to the same card.** The point is a different disk.

## The words

**backup**, **archive**, **cron**, **schedule**, **restore**, **disk space**.
