---
title: Services, sharing and media in 5 minutes
---
## The idea in plain words

A **service** is a program the operating system keeps running in the background. `sudo systemctl start name` runs it now; `sudo systemctl enable name` runs it at every boot. They are separate switches. `systemctl status name` shows both; `journalctl -u name` shows its log.

A service reads its **config file** when it starts, so after a change you restart it. A service runs as a **user** with only that user's rights, so it can only read files that user may read. A **port** is a numbered door on the computer (22 ssh, 445 Samba, 8096 Jellyfin), and a **firewall** (`ufw`) blocks every port you do not allow.

**Samba** shares a folder with Windows, Mac and Linux. **Jellyfin** serves films and music to other devices. Other options exist (NFS and Nextcloud for files; Plex, Emby and Kodi for media), and the lessons name them.

## Where to run it for real

Samba needs a password for each user (`sudo smbpasswd -a alex`) and a few more lines in its config than the board needs. Raspberry Pi OS does not include Jellyfin: add Jellyfin's own repository first (its website gives the commands).

## What students get wrong

- **Enable starts it.** It only sets the boot setting.
- **A service watches its config.** It reads it at start; restart it.
- **777 fixes permissions.** It opens everything; fix the group and mode instead.
- **A server can read my home folder.** It is another user.

## The words

**service**, **start**, **enable**, **config file**, **port**, **firewall**, **share**, **group permission**.
