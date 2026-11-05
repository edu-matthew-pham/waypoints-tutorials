---
marp: true
theme: default
html: true
---

# When passwords fail

Cyber safety and privacy · Protect your accounts

<!-- Speaker note: Students guess what a leak could do, leak Ava's passwords on a board that names nothing, find for themselves which changes stop the spread, explain it in their own words, then meet the names (breach, reuse, guessable, passphrase) and a password manager (AC9TDI8P13 node 1). An inquiry 5E mission, built on the Packets model. About 40 minutes (Engage 4 min · Explore 14 min · Explain 10 min · Elaborate 7 min · Evaluate 5 min). -->

---

## Today

- I can explain how a password gets out, and why reusing one makes it worse.
- I can say what makes a password hard to guess.
- I can set up accounts so one leak stays at one site.

<!-- Speaker note: Before class: Try the board yourself. Every name and address is made up. The one idea: one leak spreads through reuse, and guessable passwords fall without any leak. Fixes: a different long passphrase for each site, kept in a password manager. This is an inquiry 5E lesson (rebuilt 25 Oct on the Packets model): Engage is a typed guess with no right answer; in Explore the board says nothing about why an account fell, so students find both reasons themselves; Explain starts with their own words, and only then the names. Don't name the fixes before Explain. Avoid asking students about their own passwords; talk about Ava's. Unplugged: hand out a key ring with one key that opens every door, then ask what happens when one copy is lost. Teacher: Evaluate: collect answers to the breach question; link to MFA next lesson. -->

---

## Why it matters

> A game site Ava used once has just been hacked. Is her school email safe?

<!-- Speaker note: **Your mission:** you are the Coding Club's new security officer. Your first job: help Ava, a member, keep her accounts safe. -->

---

<span style="background:#dbeafe; color:#1a1a1a; border:1.5px solid #3b82f6; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">💬 Discussion</span>

## Think, pair, share

**A site you used once gets hacked. Why should you care about your other accounts?**

- What would someone try with a leaked password?
- Is a long password enough on its own?

<!-- Speaker note: Leave this open: it's the typed Engage, out loud. Collect two or three answers without judging them, and come back to them at Evaluate. Don't name reuse or guessable yet; Explore is where students find them. Give 30 seconds alone, 2 minutes in pairs, then take answers from both sides. There is no single right answer: ask for a reason, and let students change their minds. -->

---

<span style="background:#dbeafe; color:#1a1a1a; border:1.5px solid #3b82f6; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">💬 Discussion</span>

## Engage: predict

**A game site Ava used once has just leaked its list of passwords. She also has a school email, the club app and an online shop. What could someone do with that list? Write your best guess.**

<!-- Speaker note: What happens: Here, every one of Ava's accounts fell. What happened depends on her passwords, which is what Explore is for. Take two or three predictions before anyone runs it. -->

<!-- Speaker note: Teacher: collect two or three guesses without judging them; Explore will answer them. -->

---

<span style="background:#fef3c7; color:#1a1a1a; border:1.5px solid #f59e0b; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✍️ Activity</span>

## Try it

{{embed: https://tutorials.learningwaypoints.com/_playground-board/index.html?id=deck%2Fsystems%2Fcyber%2Fpasswords%2Fstep-2&code=widget%3A+cyber%0Amode%3A+breach%0Aclues%3A+off%0A&fresh=1}}

[Open this step in the tutorial](https://tutorials.learningwaypoints.com/systems/cyber/passwords/?full=step-2#step-2)

<!-- Speaker note: Was your guess close? -->

<!-- Speaker note: Teacher: ask which accounts fell together, and which fell alone. Don't name reuse or guessable yet. -->

<style scoped>pre, marp-pre { font-size: 0.5em; line-height: 1.25; } section { font-size: 25px; }</style>

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## What happened?

* Here, every one of Ava's accounts fell. What happened depends on her passwords, which is what Explore is for.

<!-- Speaker note: Reveal after running. Ask who predicted it, and what made them think so. -->

---

<span style="background:#dbeafe; color:#1a1a1a; border:1.5px solid #3b82f6; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">💬 Discussion</span>

## What fell together? <span style="font-size:.6em;color:#64748b">(4 min)</span>

After your first few leaks: which accounts fell together, and which fell on their own? Tell your partner what you think the difference is.

<!-- Speaker note: Don't name reuse or guessable yet. Students should arrive at 'same password' and 'easy password' themselves. -->

---

<span style="background:#fef3c7; color:#1a1a1a; border:1.5px solid #f59e0b; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✍️ Activity</span>

## Try it

{{embed: https://tutorials.learningwaypoints.com/_playground-board/index.html?id=deck%2Fsystems%2Fcyber%2Fpasswords%2Fstep-3&code=widget%3A+cyber%0Amode%3A+breach%0Aset%3A+mixed%0Aclues%3A+off%0A&fresh=1}}

[Open this step in the tutorial](https://tutorials.learningwaypoints.com/systems/cyber/passwords/?full=step-3#step-3)

<!-- Speaker note:  -->

<style scoped>pre, marp-pre { font-size: 0.5em; line-height: 1.25; } section { font-size: 25px; }</style>

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## In your own words

**In your own words: why did one leak break into all four accounts at the start, and what did you change to stop it? Say what the person with the list did with it.**

* Answer: The game site's list leaked, with Ava's password on it. (the site kept it and lost it); Whoever had the list tried that password on her other accounts. (people often use one password everywhere, so it's the first thing to try); Every account with the same password fell. (the password matched); Accounts with a popular or personal password fell even with no match. (those are on the lists people try first, leak or not); A different long, random password on each account stopped it. (the leaked one opens nothing else, and the rest aren't on any list)

<!-- Speaker note: One leaked password is tried everywhere, so a shared password falls with it; a common or personal one falls with no leak at all. -->

<!-- Speaker note: Teacher: compare two students' own explanations before the names; then replay the leak and name each part. -->

<style scoped>pre, marp-pre { font-size: 0.5em; line-height: 1.25; } section { font-size: 21px; }</style>

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Names

**Match each name to what you saw on the board.**

| | |
|---|---|
| `Breach` | A. The same password on more than one account, so one leak opens them all |
| `Reuse` | B. The game site losing its list of passwords |
| `Guessable` | C. Four random words: long, and on nobody's list |
| `Passphrase` | D. A password on the lists people try first: sunshine1, or Ava's name and birth year |

* Answer: Breach → B. The game site losing its list of passwords; Reuse → A. The same password on more than one account, so one leak opens them all; Guessable → D. A password on the lists people try first: sunshine1, or Ava's name and birth year; Passphrase → C. Four random words: long, and on nobody's list

<!-- Speaker note: A breach you can't stop. Reuse and guessable passwords are what turn it into more than one account. -->

<style scoped>pre, marp-pre { font-size: 0.5em; line-height: 1.25; } section { font-size: 16px; }</style>

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Find the mistake

**Sam makes a stronger password. Click the line where it first goes wrong.**

```
 1  Sam's password used to be password.
 2  Sam changes it to P@ssw0rd! with symbols and capitals.
 3  Swapping letters for symbols makes it very hard to guess.
 4  So it is safe to use on every site.
```

* Answer: line 3

<!-- Speaker note: Line 3: swaps like @ for a and 0 for o are so common that they're on the guessing lists too. Length and randomness make a password strong, and it still shouldn't be reused. -->

---

<span style="background:#dbeafe; color:#1a1a1a; border:1.5px solid #3b82f6; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">💬 Discussion</span>

## Compare explanations <span style="font-size:.6em;color:#64748b">(5 min)</span>

Read your own-words explanation to a partner. Did you both find two reasons an account fell? Then match the names: breach, reuse, guessable, passphrase.

<!-- Speaker note: Pick two contrasting explanations to read aloud before showing the names. Then replay the leak on the board and name each part as it appears. -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Which name?

**Ava's password is her name and birth year. Which word fits?**

- Guessable
- Reuse
- Breach
- Passphrase

* Answer: Guessable

<!-- Speaker note: It's on the lists people try first, leak or not. Ask on mini whiteboards or by show of hands before the reveal. -->

---

<span style="background:#fef3c7; color:#1a1a1a; border:1.5px solid #f59e0b; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✍️ Activity</span>

## Elaborate: too many to remember

{{embed: https://tutorials.learningwaypoints.com/_playground-board/index.html?id=deck%2Fsystems%2Fcyber%2Fpasswords%2Fstep-5&code=widget%3A+cyber%0Amode%3A+breach%0Aset%3A+mixed%0Amanager%3A+on%0A&fresh=1}}

[Open this step in the tutorial](https://tutorials.learningwaypoints.com/systems/cyber/passwords/?full=step-5#step-5)

<!-- Speaker note: What this step is for: The same idea in a new case (two reasons failing at once, this time with the board's notes on), then the habit that makes it realistic: a password manager. -->

<!-- Speaker note: Teacher: ask which of Ava's new passwords failed for which reason; then why the manager makes it realistic. -->

<style scoped>pre, marp-pre { font-size: 0.5em; line-height: 1.25; } section { font-size: 25px; }</style>

---

## Unplugged: one key for every door <span style="font-size:.6em;color:#64748b">(2 min)</span>

A key ring with one key that opens every door at home, school and the club. What happens when one copy is lost?

<!-- Speaker note: Use it here if the password manager feels abstract: the manager is a ring of different keys, locked in one box. -->

---

<span style="background:#dbeafe; color:#1a1a1a; border:1.5px solid #3b82f6; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">💬 Discussion</span>

## Back to your guess <span style="font-size:.6em;color:#64748b">(3 min)</span>

Read your Engage guess again. What would you add now?

<!-- Speaker note: Link to Second factors next lesson: even a strong, different password can leak. -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Exit ticket

**Ava's game site leaks. Name two things that would have kept her other accounts safe.**

* A different password on each account; long, random passphrases (not on any common list); a password manager to make and remember them.

<!-- Speaker note: Students answer on paper or a mini whiteboard before the reveal. Anyone who cannot answer needs the main idea again next lesson. Where this leads: Next: A second lock (MFA). Teacher note: the eSafety Commissioner and the Australian Cyber Security Centre both publish student-friendly guidance on passphrases (check current pages before linking). -->
