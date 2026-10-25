---
title: Accounts, groups and sudo in 5 minutes
---
## The idea in plain words

Every person gets an **account** and a private **home folder**. A **group** gives several accounts the same rights. Only members of the **sudo** group may use `sudo`, and `/var/log/auth.log` records every login and every `sudo`.

`sudo adduser alex` makes an account. `sudo usermod -aG class alex` adds Alex to the group class (the `a` keeps Alex's other groups; without it they are replaced). `id alex` lists them. This is authentication (who are you?) and authorisation (what may you do?) on a real system.

## Where to run it for real

On a real Pi, give each student their own account and never share the `pi` password: the log then says who did what, and one person can be removed without changing anyone else's.

## What students get wrong

- **`-G` adds a group.** It replaces them; use `-aG`.
- **Everyone logged in can open everything.** Home folders are private by default.
- **Sharing one password is fine.** The log can't tell people apart.

## The words

**account**, **home folder**, **group**, **sudo group**, **authentication**, **authorisation**, **log**.
