---
title: Fixing and proving it in 5 minutes
---
## The idea in plain words

Fixes work in layers, and each does one job. **Stop** services you don't need (`sudo systemctl stop name`, and `disable` to keep them off after a reboot). **Upgrade** old software (`sudo apt update`, `sudo apt upgrade`). **Tighten** ssh with `PermitRootLogin no` and `PasswordAuthentication no` in `/etc/ssh/sshd_config`, then `sudo systemctl restart ssh`, because ssh reads its settings only at start-up. **Filter** with the firewall (`sudo ufw allow 22`, `allow 80`, then `enable`).

A firewall does not fix old software behind an allowed door. And a fix is not proved until you scan again: **scan, fix, scan again**, and keep both scans as evidence. A scan sees doors and versions only, so the report says what it did not check.

## Where to run it for real

Before turning off password login, set up key login and test it in a second session, or you will lock yourself out. A real offline lab upgrades from a local mirror or a USB bundle. If students will not have done System admin, the commands here are taught as they go.

## What students get wrong

- **A firewall makes old software safe.** It filters who reaches the door.
- **Running the fix means it is fixed.** Scan again, and after a reboot.
- **A clean scan means secure.** It means clean on its own list.

## The words

**harden**, **layer**, **upgrade**, **restart**, **evidence**, **limits**.
