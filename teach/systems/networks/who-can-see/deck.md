---
marp: true
theme: default
html: true
---

# Who can see your data?

Networks · Keeping it safe

<!-- Speaker note: Students send a PIN past an eavesdropper on café Wi-Fi, first in plain text and then encrypted with a shift key, to explain why data must be encrypted in transit and show that encryption is reversible with the key (AC9TDI8K02 nodes 3 and 4). About 40 minutes (Predict and Try 6 min · Worked example 12 min · Vary 10 min · Practise and Make 12 min). -->

---

## Today

- I can explain why data needs encrypting when it is sent.
- I can encrypt and decrypt a short message with a key.
- I can say what makes a key weak.

<!-- Speaker note: Before class: Try the boards yourself. The kit's chain for node 3: packets leave your device → travel through routers you don't control → anyone along the path can read them → so encryption is necessary. Node 4 (simple encryption) is here as a shift cipher on letters and digits, with the encrypt-decrypt cycle; the Code pathway's Secret messages course is the deeper home of ciphers (Caesar, XOR, cracking, key sharing). For students who have done it, this lesson is the why; for those who haven't, it is a first taste. Defensive framing: the eavesdropper shows why protection matters; no attack techniques are taught. Teacher: Try: ask whose Wi-Fi it is, and who else could be on it. Teacher: Worked example: have students encrypt their initials with key 3. Teacher: Vary: the key 10 task surprises: ask why the digits came through unchanged. -->

---

## Why it matters

> You type your PIN on the café's free Wi-Fi. Between you and the bank, who else gets a copy?

<!-- Speaker note: In Packets, routers passed each packet along. But who owns those routers? Your packets go through the Wi-Fi you're on, your internet provider and many other networks. Anyone with access to one of them can copy the packets as they pass. -->

---

<span style="background:#dbeafe; color:#1a1a1a; border:1.5px solid #3b82f6; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">💬 Discussion</span>

## Think, pair, share

**You type your PIN on café Wi-Fi. Who could see it, and would you do it?**

- Who handles your data on its way?
- Does the café owner need to be bad for it to be seen?

<!-- Speaker note: Anyone on the path could copy plain text; they don't have to be targeting you. Keep it factual and defensive. Give 30 seconds alone, 2 minutes in pairs, then take answers from both sides. There is no single right answer: ask for a reason, and let students change their minds. -->

---

<span style="background:#dbeafe; color:#1a1a1a; border:1.5px solid #3b82f6; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">💬 Discussion</span>

## Predict

**You type your PIN into a website on a café's free Wi-Fi. The website has **no encryption**. Who could read the PIN on its way to the bank?**

- Only people with a password to the bank
- Anyone on the café Wi-Fi, or on any network it passes through
- Nobody: packets are private
- Only the bank

<!-- Speaker note: What happens: Anyone on the path. Packets cross the café's Wi-Fi and other networks you don't control, and plain text can be read by anyone who copies them. Take two or three predictions before anyone runs it. -->

<!-- Speaker note: Teacher: students who chose "only the bank" hold Sam's misconception; trace the path after the Try. -->

<style scoped>pre, marp-pre { font-size: 0.5em; line-height: 1.25; } section { font-size: 28px; }</style>

---

<span style="background:#fef3c7; color:#1a1a1a; border:1.5px solid #f59e0b; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✍️ Activity</span>

## Pass the note <span style="font-size:.6em;color:#64748b">(5 min)</span>

Pass a folded note across the room through five students. Each may read it. Then pass a note scrambled with a shift of 3 (A becomes D). Who can read it now?

<!-- Speaker note: Plain notes are read by everyone along the way. The scrambled note is useless to them unless they know the key. Do not teach breaking the cipher. -->

---

<span style="background:#fef3c7; color:#1a1a1a; border:1.5px solid #f59e0b; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✍️ Activity</span>

## Try it

{{embed: https://tutorials.learningwaypoints.com/_playground-board/index.html?id=deck%2Fsystems%2Fnetworks%2Fwho-can-see%2Fstep-2&code=widget%3A+network%0Amode%3A+snoop%0Amessage%3A+PIN+4821%0Aencrypt%3A+off%0Akey%3A+3%0A&fresh=1}}

[Open this step in the tutorial](https://tutorials.learningwaypoints.com/systems/networks/who-can-see/?full=step-2#step-2)

<!-- Speaker note: Was your prediction right? Now look at the Encrypt button. -->

<style scoped>pre, marp-pre { font-size: 0.5em; line-height: 1.25; } section { font-size: 25px; }</style>

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## What happened?

* Anyone on the path. Packets cross the café's Wi-Fi and other networks you don't control, and plain text can be read by anyone who copies them.

<!-- Speaker note: Reveal after running. Ask who predicted it, and what made them think so. -->

---

<span style="background:#dbeafe; color:#1a1a1a; border:1.5px solid #3b82f6; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">💬 Discussion</span>

## PIN 4821 with key 3

This shift (a Caesar cipher) is easy to break, as the Secret messages course shows. Real encryption uses far stronger maths, but works the same way: a public method and a secret key.

$$\text{PIN 4821}$$

1) $\text{P} \to \text{S},\ \text{I} \to \text{L},\ \text{N} \to \text{Q}$ — Encrypt: each letter moves 3 along.
2) $4821 \to 7154$ — Each digit moves 3 along, wrapping round after 9 (8 → 1).
3) $\text{SLQ 7154}$ — This is what travels, and all Eve can copy.
4) $\text{SLQ 7154} \to \text{PIN 4821}$ — The bank moves everything 3 back: decrypt with the same key.

<!-- Speaker note: Model this live on the board before revealing anything: write each line and say why, pausing to ask the class what comes next. Then click to reveal the lines and compare. Script. Start: write PIN 4821 and say "Your message, before it leaves." Line 1: write P S,I L,N Q and say "Encrypt: each letter moves 3 along." Line 2: write 4821 7154 and say "Each digit moves 3 along, wrapping round after 9 (8 → 1)." Line 3: write SLQ 7154 and say "This is what travels, and all Eve can copy." Line 4: write SLQ 7154 PIN 4821 and say "The bank moves everything 3 back: decrypt with the same key." -->

<style scoped>pre, marp-pre { font-size: 0.5em; line-height: 1.25; } section { font-size: 21px; }</style>

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## PIN 4821 with key 3

**With key 3, every letter moves 3 along (A → D) and every digit moves 3 along (7 → 0). What does **CAT 12** become?**

- ZXQ 89
- FDW 45
- CAT 12
- DBU 23

* Answer: FDW 45

<!-- Speaker note: C→F, A→D, T→W, 1→4, 2→5. -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Find the mistake

**Sam decides whether it is safe to type a password. Click the line where the reasoning first goes wrong.**

```
 1  I am on the café's free Wi-Fi.
 2  The website has no padlock, so nothing is encrypted.
 3  My message only goes to the bank, so only the bank sees it.
 4  So it is safe to type my password here.
```

* Answer: line 3

<!-- Speaker note: Line 3: the message goes to the bank, but it passes through the café Wi-Fi and other networks first, and anyone there can copy it. Without encryption, they can read it. -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Why reversible?

**Why must encryption be **reversible**?**

- The receiver has to turn it back into the real message with the key
- So it takes less space
- It doesn't have to be
- So that Eve can read it too

* Answer: The receiver has to turn it back into the real message with the key

<!-- Speaker note: Encrypt with the key, decrypt with the key. If it couldn't be reversed, nobody could read the message, including the bank. -->

<style scoped>pre, marp-pre { font-size: 0.5em; line-height: 1.25; } section { font-size: 27px; }</style>

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Where is it scrambled?

**Where should private data be scrambled?**

- On your device, before it leaves
- At the café's router
- Only when it arrives
- Nowhere: packets are always safe

* Answer: On your device, before it leaves

<!-- Speaker note: Anywhere later leaves the first part of the trip readable. Ask on mini whiteboards or by show of hands before the reveal. -->

---

<span style="background:#fef3c7; color:#1a1a1a; border:1.5px solid #f59e0b; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✍️ Activity</span>

## Vary: one setting at a time



- **Encryption on:** 
- **Key 0:** 
- **Key 10:** 
- **Too few keys:** 

[Open this step](https://tutorials.learningwaypoints.com/systems/networks/who-can-see/?full=step-4#step-4)

<!-- Speaker note: What this step is for: Each task changes one setting: encryption on, then key 0, then key 10 (which leaves the digits unchanged), then how many keys there are to try. For students who need more support: An alphabet strip and a 0–9 strip to count along. For early finishers: XOR encryption (Secret messages lesson 5) works on the bits directly. Why does that suit computers better than shifting letters? The hard part, on purpose: The shared-path idea: students picture a private tube to the bank. Trace the packets on the board: whose equipment is each one? When students get stuck: A student says only the receiver sees the message (Sam's mistake). Ask: Which pieces of equipment does the packet pass through? Fix: Every one of them could copy it. / A student shifts the wrong way to decrypt. Ask: Which way did encryption move the letters? Fix: Decrypt by moving back by the same key. -->

---

<span style="background:#dbeafe; color:#1a1a1a; border:1.5px solid #3b82f6; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">💬 Discussion</span>

## A key of 0 <span style="font-size:.6em;color:#64748b">(2 min)</span>

Scramble a word with a shift of 0. What does the message look like now?

<!-- Speaker note: Unchanged: a key must actually change something. Link to the board's key sliders. -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Stored or sent?

**Your class marks are saved on the school's server, and the server's room is locked. A teacher opens them from home. When could someone else read them?**

- Only after the teacher prints them
- Only if someone breaks into the server room
- Never: the room is locked
- On the way from the server to the teacher's home, unless they're encrypted

* Answer: On the way from the server to the teacher's home, unless they're encrypted

<!-- Speaker note: Stored safely is not the same as sent safely: anything crossing shared networks needs encrypting on the way too. -->

<style scoped>pre, marp-pre { font-size: 0.5em; line-height: 1.25; } section { font-size: 24px; }</style>

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Decrypt

**A message was encrypted with key 3. You receive **KHOOR**. What did it say?**

- KHOOR
- HELLO
- GDKKN
- NKRRU

* Answer: HELLO

<!-- Speaker note: Move each letter back 3: K→H, H→E, O→L, O→L, R→O. -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## The padlock

**What does the padlock in a browser's address bar mean?**

- The site has no adverts
- Data between you and the website is encrypted (HTTPS)
- The website is honest and safe to buy from
- Nobody can see that you visited the site

* Answer: Data between you and the website is encrypted (HTTPS)

<!-- Speaker note: HTTPS encrypts what travels between your browser and that website. -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Review: packets

**Review: a packet is lost on the way. With TCP, what happens?**

- The whole message starts again
- The message arrives with a gap
- The receiver never confirms it, so it is sent again
- The router rebuilds it

* Answer: The receiver never confirms it, so it is sent again

<!-- Speaker note: TCP resends only the packet that was never acknowledged. -->

---

<span style="background:#fef3c7; color:#1a1a1a; border:1.5px solid #f59e0b; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✍️ Activity</span>

## Make: a safe key

Then: the Secret messages course (Code) builds this cipher on micro:bits, cracks it, and shares a key safely.

[Open this step](https://tutorials.learningwaypoints.com/systems/networks/who-can-see/?full=step-6#step-6)

<!-- Speaker note: What this step is for: Choosing a key that scrambles both the letters and the digits reverses the process: students start from what Eve must not see and pick the setting. Hints, in order: Key 0 changes nothing. / Digits wrap round every 10, so keys 10 and 20 leave them unchanged. / Any key from 1 to 25 that isn't 10 or 20 works. -->

<!-- Speaker note: Teacher: ask what a strong key would need (many possibilities). -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Exit ticket

**Why should a password be encrypted before it is sent? Encrypt CAB with key 2.**

* Packets pass through equipment other people control, so anyone on the path could copy plain text. CAB → ECD.

<!-- Speaker note: Students answer on paper or a mini whiteboard before the reveal. Anyone who cannot answer needs the main idea again next lesson. Where this leads: Next: Across the internet (the whole journey, with HTTPS). Code links: Secret messages (Caesar, cracking, XOR, key exchange) is where students build and break ciphers. -->
