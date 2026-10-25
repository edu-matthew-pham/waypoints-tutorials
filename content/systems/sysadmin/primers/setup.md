---
title: Setting up a Pi in 5 minutes
---
## The idea in plain words

A **server** is a computer you run from somewhere else. A Raspberry Pi needs no screen: you reach it over the network by **name** (`raspberrypi.local`) or **address** (`192.168.1.23`) and type to it with **ssh**. After you log in, every command runs on the Pi until you type `exit`.

New software comes from a **software source** with `apt`. Run `sudo apt update` first to download the list, then `sudo apt install name`. `sudo` runs one command as the administrator; the system records who used it. Without the internet, `apt update` fails, so plan ahead with a local source or a USB stick.

## Where to run it for real

The board is a pretend Pi, the same for everyone. For the real thing you need a Pi 4 or Pi 5 (a Pi 5 wants a 27 W supply), a microSD card and a power supply. Students can use a screen and keyboard, or ssh from a laptop. Flash with Raspberry Pi Imager (Raspberry Pi OS Lite 64-bit; set a hostname, a user and password, and ssh on), or clone a ready-made image you prepared. Either gets every student to the same starting point.

## What students get wrong

- **Commands run where I type.** After ssh they run on the Pi; before it, on the laptop.
- **apt knows everything.** It only knows its list; update first.
- **Root all the time is easier.** And much riskier: one typo can break anything, and the log only says root.

## The words

**server**, **ssh**, **hostname**, **IP address**, **apt**, **package**, **sudo**, **administrator**.
