# Roadmap: Digital systems

The Digital Technologies Knowledge and understanding strand (v9 "K" descriptors), as its own subject beside Code, Maths and Science: `content/systems/`. Plan and reasons: Project doc `digital-systems-plan.md` (12 Oct 2026). In short: no coding prerequisite, the maths lesson shape (Predict, Try, Worked example, Vary, Practise, Make) on the shared board, borrow open resources (CS Unplugged, CS Field Guide, Digital Technologies Hub) and build only where a lesson needs a check, one home per idea with links into the Code pathway.

## Done (12 Oct 2026): pilot, binary numbers

- Subject `content/systems/index.md` ("Digital systems", trail by units): pathways Data representation (built: Data representation; planned: Making data smaller, Years 9–10), Networks and security (planned: Networks; Security and privacy, which links to Secret messages for the ciphers themselves), Hardware and logic (planned).
- Course `systems/data`, unit Binary numbers: 1. Bits and binary numbers, 2. How many patterns? (both AC9TDI8K04). Primer `primers/binary.md`. Misconceptions `binary-place-reversed`, `binary-max-forgets-zero`.
- Board widget `bits` (`playground-board/widgets/bits.js`; AUTHORING › board). Explain clips record (tested silent here); pictures are drawn at publish.
- Lessons use `language: maths`: that is what gives board checks, `answer` checks, worked examples and the maths stage names.
- Wording is our own around CS Unplugged's ideas (credited in teacher `sources:` and the primer), so no CC BY-SA text is copied. A site-wide content licence is still Matthew's decision.

## Done (12 Oct 2026): nodes from waypoints-kit, Everything is numbers

- The kit (`cggs-matthew-pham/waypoints-kit`, `data/technologies/`) has node files for every DT Knowledge and understanding descriptor, F–10. Progression pages for 6K03, 6K04, 8K01–8K04 and 10K01–10K03 are in `data/progressions/systems/`; `data/curriculum/systems.json` holds the Years 7–10 K descriptors (P descriptors belong to Code) with map rows by topic (Data representation, Digital systems, Networks and security, Web documents). Map on at `/systems/map/`.
- The kit lists all of AC9TDI8K03 as prior knowledge for 8K04. Order on the site: 1. Everything is numbers (8K03 n1, new, `decode` widget), 2. Bits and binary numbers (8K04 n1), 3. How many patterns? (8K04 n2). Lesson 2 `assumes:` 8K03 n2–n4 until the text, image and sound lessons exist; drop that when they are written (they may come after binary, which the check would then flag, so decide the order then).
- Kit points to remember: 8K04 n3 is why binary (circuits and logic gates) and n4 ties binary to encoding; 8K02 n3–n4 (why secure data, simple encryption) and 10K01 n4 (public key and hashing) overlap Secret messages; 10K02 is the HTML and CSS course's descriptor; 8K03 n3 includes vector images.

## Done (12 Oct 2026): data as numbers before binary

Matthew: hook first, plumbing after, which is also the kit's order (all of 8K03 before 8K04). Unit Data as numbers: 1. Everything is numbers (n1), 2. Text as numbers (n2, `decode` with `type: on`, Unicode beyond one byte), 3. Colour and images (n3, new `pixels` board; vector pictures as a question), 4. Sound as numbers (n4, new `sampling` board with play buttons). Unit Binary numbers: 5. Bits and binary numbers, 6. How many patterns? (pays off the 0 to 255 limits met earlier). The temporary `assumes:` is gone. New misconceptions `digit-char-code`, `light-mixes-like-paint`, `sound-stored-as-wave`. All Try and Make checks tested in a headless browser; all explain clips record.

## Done (12 Oct 2026): logic gates, bits all the way down, Making data smaller

- Data representation lessons 7 and 8: Why binary: logic gates (8K04 n3; new `logic` board with a circuit view and a half adder) and Bits all the way down (8K04 n4; data → number → byte on eight cards). Course complete for 8K03 and 8K04.
- New course `systems/compression` (Making data smaller, Years 9–10, after Data representation): Run-length encoding (10K03 n1 and n2; `pixels` with `mode: bw` and `rle: on`, draw-from-codes Make) and Lossy or lossless (n3; `pixels` with `lossy: on` and a tolerance slider). Misconceptions `or-means-not-both`, `char-one-bit`, `rle-start-white`, `lossy-recoverable`.
- `tools/concepts.mjs` `prerequisites()` reads the systems subject too, so `after:` between Digital systems courses counts.

## Done (12 Oct 2026): Networks course

`systems/networks` (Years 7–8, AC9TDI8K02): Wired or wireless (n1), Packets (n2, TCP resending a lost packet, broken links and rerouting), Who can see your data? (n3 and n4: an eavesdropper on café Wi-Fi, encryption with a shift key, weak keys 0 and 10), Across the internet (n5: the whole purchase with a step log; Make is a Parsons ordering with one wrong step). New `network` widget, four modes. One home per idea: Secret messages (Code) stays the home of building, cracking and sharing ciphers; these lessons are what encryption is for, with a light encrypt-decrypt cycle so the node is covered for students who skip MakeCode. Misconceptions `bandwidth-is-latency`, `resend-whole-message`, `packets-private`, `encrypt-at-router`. Clip ports moved to 8460–8499 (the maths chat had reused 8320–8333).

## Done (12 Oct 2026): Security and privacy course, with a capture the flag

`systems/security` (Years 9–10, AC9TDI10K01, after Networks): What the operating system does (n1: apps, OS, drivers, app permissions), Names and addresses (n2: DNS, IP, router tables, private and public addresses, a lookalike domain), Who are you, and what may you do? (n3: authentication, MFA, authorisation, least privilege), Hashes and keys (n4: stored hashes, salt, public and private keys), and Capture the flag: secure the portal (n5, the challenge unit: four `flag` puzzles, one per lesson, then fix the permissions with MFA and sort weaknesses into fixes). Defensive framing throughout; all addresses from the documentation ranges; practice accounts only. New `security` widget, five modes, with a built-in SHA-256 for clips (the clip stage is not a secure context). Misconceptions `apps-talk-to-hardware`, `lookalike-domain`, `signed-in-means-allowed`, `hash-reversible`.

## Done (12 Oct 2026): Inside a computer

`systems/hardware` (Years 7–8, AC9TDI8K01, Hardware and logic pathway): What the specs mean (n1: spec sheet rows with what each measures and a kitchen comparison; phone, laptop, server), Find the bottleneck (n2: run jobs on an old laptop, time bars per part, upgrade the slowest), Choose the hardware (n3: Option A vs B on different jobs, four steps to a justified choice, the cheapest media-lab build within $900 and 60 s). New `hardware` widget. Misconceptions `ram-is-storage`, `storage-size-is-speed`, `biggest-spec-best`. The pathway's planned "Logic gates" card became "From gates to a processor" (adders, a tiny processor), since gates are taught in Data representation.

## Done (12 Oct 2026): From gates to a processor

`systems/logic` (Years 9–10 extension in the Hardware and logic pathway, after Data representation and Inside a computer; every lesson tagged AC9TDI8K04 n3, which the kit says adder circuits go further from): Combining gates (circuits row by row, build to a truth table, NOT and OR from NANDs, Make XOR), Adding with gates (half adder, 4-bit adder with carries and overflow, Make a full adder), Remembering a bit (an SR latch of two NORs, a 4-bit register), A tiny processor (fetch, decode, execute per clock tick; change data and instructions, STORE, a countdown loop; Make a program that outputs 2, 4, 6). New `gates` widget (build, adder, latch) and `cpu` widget. Misconceptions `gate-reads-switches`, `binary-digit-two`, `latch-forgets`, `code-not-numbers`. Logic gates themselves stay in Data representation (one home); this course reviews them and goes deeper.

## Done (12 Oct 2026): 10K02 tagged, theory concepts across subjects

- 10K02: the HTML & CSS course's Tags and nesting (n1), Rules and selectors (n1, n2), Page sections and components and the club page (n2) carry `node:`; the systems map now lists lessons from other subjects tagged with its descriptors (`tools/build-site.mjs`). n3 (why separation matters) is taught in How a web page is made › Why keep them apart (below).
- Theory concepts: `THEORY` in `tools/concepts-core.mjs` (17 ids); every Digital systems lesson that teaches one `introduces:` it; the Caesar cipher `assumes: [text-as-numbers]`, p5 Shapes `assumes: [rgb-colour]`, Combining gates `assumes: [logic-gates]`. The lint accepts an introduction in another subject; lesson pages show "Builds on" and "Put to work in" links. Tests in `npm run check-concepts`.

## Done (12 Oct 2026): How a web page is made

`systems/web` (Years 9–10, AC9TDI10K02, Data pathway extension after Data representation): Three layers (n1, n2: swap style sheets, show the structure, style off; change one layer at a time; Make a new look without touching the HTML) and Why keep them apart (n3: a screen reader on two look-alike pages, one rule restyles a three-page site, phone width; Make: fix a page whose headings and list were faked with looks). A Knowledge and understanding home for 10K02 with no coding prerequisite; the HTML & CSS course keeps its 10K02 tags as hands-on practice, and Rules and selectors `assumes: [web-layers]` (a new theory concept), so the pages link both ways. New `webdoc` widget. Misconceptions `looks-is-structure`, `same-look-same-page`.

## Done (12 Oct 2026): The command line

`systems/shell` (Years 8–10, its own pathway "The command line"; 10K01 n1 for lessons 1–4, n3 for permissions): Where files live (pwd, ls, cd, paths, .., ~; a folder tree on the board), Reading and finding (cat, grep -i/-c, hidden files with ls -a; treasure hunt part 1), Changing files (mkdir, cp, mv, rm, rm -r, echo >; rm has no bin), Pipes (grep | wc, sort | uniq, head, >; treasure hunt part 2), Who can read what (ls -l, rwx and digits, chmod, only the owner; hidden is not private). New `shell` widget. Misconceptions `cd-moves-files`, `ls-shows-everything`, `rm-recycle-bin`, `pipe-reads-files`, `hidden-is-protected`. Real computers (Raspberry Pi, WebVM, Mac Terminal) are in the primer and teacher notes; no lesson needs one.

## Done (12 Oct 2026): Cyber safety and privacy

`systems/cyber` (Networks and security pathway, foundations), the first course built as 5E missions (`shape: 5e`, after the Packets pilot): the student is security officer for a made-up Coding Club app. Unit Protect your accounts (Years 7–8): Passwords (8P13 n1: a leak, reuse, passphrases, a password manager), Second factors (n2: codes, a fake page, security keys), Spot the phish (n3: an inbox, link checking, fix the club's own newsletter), Your digital footprint (8P14 n1–n3: given or collected as used, the purpose test, private settings). Unit Secure the system (Years 9–10): Threat models (10P13 n1: a data-flow diagram, risk and defence per point, new features), Kinds of weakness (n2: software, user, supply chain, descriptive only), The Australian Privacy Principles (10P14 n1–n2: audit, fix the breaches, write an APP 5 notice). Challenge: Security review (10P13 n1, 10P14 n3: seven weaknesses with three fixes each, three flags, then launch day with no wrong fixes). New `cyber` widget. Misconceptions `symbols-make-strong`, `mfa-only-important`, `right-name-is-safe`, `more-data-better`, `https-solves-all`, `good-code-is-safe`, `policy-means-anything`. Defensive and conceptual throughout: no attack or exploit practice; 10P13 n3 (exploring a vulnerability in the student's own software) is a class task with the teacher. picoCTF is named as the extension in the pathway text and the finale's teacher notes.

## Done (12 Oct 2026): Shapes as numbers, and Capture the flag

- Data representation lesson 3.5, Shapes as numbers (8K03 n3, 5E mission): a picture as two shapes and as a bitmap, zoom to 8×, more pixels still step; change a vector's numbers; a cube turned into a pyramid by moving corners; build the club badge from numbers. New `shapes` widget, theory concept `vector-graphics` (p5 Shapes now assumes it), misconception `every-image-pixels`.
- New course `systems/ctf`, Capture the flag (Years 8–10; Networks and security pathway, after Cyber safety, Networks and How a web page is made): Encoding is not encryption (8K02 n4: send a message past Eve, decode stored and layered data, read an encrypted reply with the shared key word), What your page gives away (10P14 n3: comments, hidden fields, scripts, a photo's location; checks belong on the server), and the challenge Capture the flag: the old archive (five flags: layered decoding, page source, ls -a and grep, the tiny processor's output as character codes, and a key word kept beside its data; then fix the page). New `encode` and `source` widgets, theory concept `encoding`, misconceptions `encoding-is-encryption`, `hidden-on-page-is-private`. Defensive throughout: the student's own made-up pages and files. Points and hints that cost points were not built: hints escalate and never give the flag.

## Done (12 Oct 2026): Network capture the flag

Networks gains a challenge unit: Network capture the flag (8K02 n2, n5; 5E mission). Four flags on the club's own made-up traffic: the readable packet in a Wi-Fi capture, a message put back in packet-number order, the packet TCP must ask for again, and the quickest route round an overloaded router; then fix every device that sends readable data. New `netctf` widget, misconception `wifi-password-is-https`. Single-player, like most jeopardy-style CTFs; run it as a class race if wanted.

Parked: a real-machine command-line CTF (Bandit-style levels over SSH on a Raspberry Pi or a virtual machine, with a setup script and site flag checks). Needs kit or a server, IT approval for SSH, and an isolated network, so it waits.

## Done (12 Oct 2026): Packets as a real 5E lesson

The "5E missions" so far are PRIMM or the maths shape with 5E labels: Explore is a scripted board that fails on purpose, and Explain hands students a bug and a recap. Packets is rebuilt as inquiry first, as the model for any retrofit:
- Engage: a typed guess (what could go wrong?), no options, no right answer.
- Explore 1: a board with no fix and nothing named (unnumbered pieces, size slider, breakable links); send three times, sort what you saw from what you assumed, try your own changes.
- Explore 2: invent a fix with two plain switches, Numbers and Ask again (TCP, unnamed: new `tcpname:` on the network widget), and two goals with different routes: every link working (needs both), switches off (cut off busy C).
- Explain: students write their own explanation first (`reasoning` check: free text, one pick, model, self-check), then the names (packet, router, acknowledgement, TCP) are matched to what they did, then why the internet numbers and resends instead of avoiding busy routers, then Sam's bug.
- Elaborate: TCP and spare routes together, every route broken, live video. Evaluate: a download at 99%, reread the Engage guess, self-check against the goals.
The `reasoning` check gains `placeholder:` and a per-pick `q:` (defaults unchanged). Rule of thumb for others: 5E for concept lessons where students can find the idea on a board; the explicit shape for procedures.

## Built (25 Oct 2026, Matthew: "go"): support lead-ins and review fixes

What went in, against the plan below:
- Lesson text: Everything is numbers (the opening asks a question; "encoding" first appears in the last worked row; Make hints no longer give the answers); Pipes (`head` taught in Try as its own task; the worked example and an Investigate question say the operating system joins the programs, which is the 10K01 n1 idea; the "why sort first" question gave way to it, and its point stays in the worked rows and feedback); Where files live (one worked row: the OS shows every drive as one tree); Who can see your data? (a `reasoning` check in Try on why the PIN needs protecting on the way, and a stored-or-sent Practise question replacing "which most needs encrypting"); Run-length encoding (a photo count, 40, replaces the four-option "Why compress?").
- Passwords rebuilt as inquiry 5E: typed Engage; two Explore steps on a board with `clues: off` (new `cyber` option: no guessing notes, no reason on results; new value `t`, leaks run), hints that ask; Explain opens with a `reasoning` check, then a match to breach, reuse, guessable and passphrase, then Sam; one Elaborate (fix by hand, then the manager); Evaluate rereads the guess. Re-records the cyber clips (widget change).
- Not done for the other seven missions: none of them has Explore hints, and the double Elaborate is not a heading problem: `STAGE_INFO_5E` (shared, also used by the 57 AI lessons) labels both modify and make "Elaborate", so one Elaborate per lesson means one Elaborate step per lesson, which is the retrofit itself. Decide after Passwords is tried (Next 3).
- Security and privacy: the practice student account is Kai (widget, Access, Hashes, the CTF, teacher notes), with a line that maple is weak on purpose; Sam stays the persona. Re-records the security clips.
- Hashes and keys split: Hashes and salt (lesson 4, same slug `hashes-keys` so progress stays; new Vary: crack an unsalted stolen list by typing common passwords, then salt it; Practise sort hash / encryption / neither) and Public and private keys (lesson 5, `security/keys`, port 8546, new misconception `lock-with-own-key`; Make is a `reasoning` check explaining how HTTPS starts; Practise ends with the same sort). CTF is lesson 6.
- Hex: optional Hex: binary in fours (Data representation 6.5, 8K04 n1, port 8547), `bits` gains `hex: on` (styles inline, so only bits clips re-record), theory concept `hex`, misconception `hex-digits-joined`, one line in Colour and images. Encoding is not encryption does not list `assumes: hex`: an optional lesson can't satisfy that check, so its teacher notes point to it instead.
- The systems map has a Security and privacy (Processes) row (shared.md › Done 25 Oct).
- The three `smaller:` lead-ins (after a4e344d), all plain checks, so none waits for board lead-ins (push 2): Everything is numbers' Make (number: 97 shows a; what shows e?), How many patterns? fewest bits for 100 (number: six cards make 63; what's a seventh worth?) and Pipes' first-two task (question: once pets.txt is sorted, which two lines come first?). Each answered and marked correct in a headless browser. `npm run effort` still lists the other systems lessons with a hinge node or `stuck:` and no lead-in; add them where students actually stick, not to clear the list.

Tested headless: every new or changed board check reaches its `when:` (35 checks, plus the three lead-ins, including the hex clip's 0A and 10), and every changed page and the map load with no errors.

### The plan (25 Oct, before "go")

Reply to roadmap/shared.md › Proposed (25 Oct): support when it's needed, invisible when it isn't, with its Amended block, and the review's Digital systems findings. Most fixes below touch only `lesson.md`, which is outside the clip hash; the ones that re-record are marked.

### 1. The three lead-ins

None needs a board starter; all three are the plain kinds in step (1) of the shared order.
- **binary-patterns, Vary, "fewest bits for 100"** (`smaller:` on that task). The board already shows six cards from the task before, so the lead-in is a number check: "Six cards all up show 63. Can six cards show 100? The next card is worth how much?" (64, so seven cards reach 127). Wording from `stuck.ask` (the all-face-down question) stays the hint.
- **data-as-numbers, Make "Yes"** (`smaller:` on the step). A one-cell decode board would need its own starter; a number does the same move: "Lower case starts at a = 97 and goes in order. What is the code for e?" (101). Also trim the hints, which now give all three answers between them (hint 2 gives Y = 89, hint 3 gives e and s): 1 where capitals and lower case start, 2 count on from the start of the alphabet, 3 read the text row to check. A board lead-in only if the pilot says the number is not enough.
- **shell/pipes, Vary, `head`**. This is a teaching gap, not a support gap: `head` is in the summary and Practise but never shown before Vary asks for it, and `smaller:` must not stand in for teaching. Fix the lesson first (a worked row, or a third command in Try: `head -n 2 pets.txt`); then the lead-in is a question: "`head -n 2 pets.txt` prints cat, dog. What does `sort pets.txt | head -n 2` print?"

### 2. Review findings

- **shell/pipes: confirmed, both parts.** `head` above. Node 10K01 n1 is the OS as an abstraction layer, and the lesson is command practice. Keep the tag and make the lesson earn it with the one idea in pipes that is n1: neither `grep` nor `wc` knows the other exists; each reads its input and writes its output, and the operating system joins them, so `wc -l` counts a file, your typing or another program the same way. One worked row and one Investigate question ("How does `wc -l` know its lines came from `grep`?" It doesn't.) Same one-line framing for Where files live (paths are the OS's single view of every drive). No retagging.
- **data-as-numbers: confirmed.** The opening paragraph defines **encoding** before the Predict. Cut it to the question; the word first appears as the last worked row ("the rule has a name: an encoding"), after the board. The unit summary on the course page can keep the word.
- **Cyber missions: confirmed, and it is all eight, not only Passwords.** Every Engage is a multiple-choice predict; every Explain is the teacher modelling, then the names, then Sam, with no student explanation first; six of eight have two or three Elaborate headings (the make stage relabelled); Passwords' last Explore hint states the fix. Packets, by contrast: a typed Engage with no right answer, an Explore with nothing named and then an invented fix, an Explain that opens with a `reasoning` check in the student's words before a match to the names, one Elaborate. Proposal, as Next 3 says (trial before retrofit): rebuild **Passwords only** on the Packets model:
  - Engage: typed guess ("A game site Ava used once leaks its passwords. What could someone do with that?"), no options.
  - Explore: leak with nothing named or labelled strong or weak; try changes; then two goals (the leak stops at the game site; no account can be guessed without a leak). Hints ask (which accounts fell together? what did they share?), never name the fix.
  - Explain: `reasoning` (why did one leak open four?), then match breach, reuse, guessable and passphrase to what they did, then Sam's symbol swap.
  - Elaborate: one step (the new set, then the password manager as its second task). Evaluate: reread the Engage guess.
  May need a `cyber` widget option to hide the strength labels (re-records the cyber clips). If the full retrofit waits, two cheap fixes for all eight now: one Elaborate per lesson, and last Explore hints that ask rather than tell.
- **8K02 n3, why cryptography: partly.** Who can see your data? does the shared-infrastructure reasoning (Predict, Eve on the Try, Sam's bug), but n3 is a hinge and gets only picks, and its first criterion (in transit, not just stored) is never contrasted. Add a `reasoning` check to the worked example (the bank keeps the PIN safe; why must it be encrypted on the way?) and one Practise question: travelling or stored. Stays one lesson.
- **10K01 n4, hashing, salt and keys in one lesson: confirmed.** Salt is a single Vary task, and nothing asks the hinge question (which protects stored data, which protects data in transit; a hash is not encryption). Recommend splitting into Hashes and salt, and Public and private keys, each ending with the same sort (situation → hash, public key, or neither); the CTF lesson moves to 6. Lighter option: keep one lesson, add the sort and a salt question to Practise.
- **10K03 n1, no check of its own: partly.** There is one check, a four-option "Why compress?" in the worked example with an easy pick. Replace it with a number that makes the reason real (a photo is 12 MB, 3 MB compressed: how many compressed photos fit in the space of 10?) and keep the question as the follow-up.
- **Hex only in the CTF: confirmed.** It is taught in ctf/encoding and nowhere before (the hash display and a teacher note aside). Answer to the open question: an optional lesson in Binary numbers after How many patterns, "Hex: binary in fours" (8K04 n4, `introduces: hex`; ctf/encoding `assumes: hex`), and a `tier: wider` line in Colour and images (#FF8800 is 255, 136, 0). Needs a `hex:` option on the `bits` widget (group the cards in fours, show the digit), which re-records the bits clips; the alternative is a plain-check lesson with no board.

### 3. Stale and inconsistent

- Fixed now: the Data representation pathway summary and the course tagline (both started at bits; the `about:` order now matches too); duplicate `order:` values (hardware 6, ctf 7, logic 8, web 9, shell 10: the same listing order as before, without ties); the 10K02 n3 line above; the answered Sound open question. The subject page changed, so this needs the full publish, not publish-lessons.
- **P-strand nodes: they do not show.** `/systems/map/` reads only `systems.json` (K descriptors). The node check accepts 8P13 and the rest from `digital-processes.json`, but no map reads that file (Code has no map), so seven Cyber lessons and ctf/page-source are on no map, and ctf/encoding and the archive show only 8K02 n4. Proposal: a Processes row on the systems map for 8P13, 8P14, 10P13 and 10P14 only, read from `digital-processes.json` (a shared change in `curriculum-map.mjs` and `build-site.mjs`; note in shared.md first). Otherwise, one line in the pathway `about:` saying the map shows Knowledge and understanding only.
- **Sam: confirmed in Security and privacy.** Sam is the practice account (password maple, in Access's board and teacher notes and the Hashes Try) and the wrong-reasoning persona in the same lessons; maple is also exactly the guessable password Cyber safety warns against. Rename the account (for example Kai) in the `security` widget, lesson text and teacher notes, keep maple with one line saying it is a weak practice password so it is quick to type (the salt task relies on two people choosing it). Re-records the security clips. The shell's `/home/sam` is the same Sam as its persona (Sam's own files), so it stays.

### Order on "go"

(1) Lesson-text fixes: data-as-numbers intro and hints, pipes (`head`, the OS framing), files framing, Who can see your data?, run-length, the one-Elaborate and hint fixes across Cyber; (2) the Sam rename; (3) the Passwords 5E rebuild, then decide the other seven; (4) the hashes split; (5) hex; (6) the three `smaller:` lines once the shared field lands; (7) the map row, after a note in shared.md.

## Built (25 Oct 2026, Matthew: one course, build the board, worked-example shape): Years 5–6, Starting out

`systems/starting`, eight lessons as planned below, in a "Start here" pathway listed first (Matthew: a foundation for every pathway). Units Numbers and switches (Letters are numbers, Text or number?, On or off, Counting dots), The parts inside (The parts inside, Working together), Joining up (Joining computers, Messages in pieces), with a primer per unit for teachers new to the content. New `parts` widget (console or laptop; match jobs, take parts out, press, save, turn off and on, load); `network` gains `simple: on` (speeds in words). Text or number? uses the decode board for its Try only; its Vary and Make are question and sort checks. New misconceptions `code-is-alphabet-place`, `text-numbers-add`, `screen-does-work`, `wifi-not-network`, `message-one-piece`. Everything is numbers, Bits and binary numbers, What the specs mean and Wired or wireless point back to it in their teacher notes. Ports 8548–8555. Every board check (34) answered in a headless browser; every page loads with no errors. No `smaller:` yet: add them once a class has shown where students stick.

Board lead-ins (489a48c) considered for the two held back: kept as plain checks. Pipes now teaches `head` in Try, so the sticking point left is the sort order, which a question covers; the six-card number check already does the doubling move without a board.

### The plan (25 Oct, before "go")

Why: primary coverage of AC9TDI6K01–6K04 is uneven, and every Years 7–8 course here assumes it (the kit lists 6K03 and 6K04 as prior knowledge for 8K03). One short course serves Years 5–6 classes, Year 7 students who missed it, and high school teachers who want the primary half of the strand in front of them. The map's "Before Year 7" column already shows these four descriptors; tagged lessons would fill its dots.

**Shape.** One course, `systems/starting` ("Starting out", Years 5–6, also a Year 7 catch-up), eight lessons, one per kit node, explicit shape (Predict, Try, Worked example, Vary, Practise, Make) on the shared board. Years 5–6 reading level: short sentences, no place-value notation, no powers, numbers under 100 where possible, a story thread (the Coding Club's younger members). Each `teacher.yml` adds a line for a Year 7–8 teacher using it as catch-up ("if they've done it, go straight to …"), and a unit primer for teachers new to the content. Its own pathway, "Start here", listed first; no other course is `after:` it (options, not gates), but Everything is numbers, Bits and binary numbers, What the specs mean and Wired or wireless each name it in teacher notes.

| # | Node | Lesson | Board |
|---|---|---|---|
| 1 | 6K03 n1 (hinge) | Letters are numbers: type a name, see its numbers; a secret code club where A is 65 | `decode` with `type: on`, `as: text` |
| 2 | 6K03 n2 | What can you do with it? 12 and 3 as numbers add to 15; as text they join to 123 | question checks; or a small `decode` option (`join:`) if a board earns it |
| 3 | 6K04 n1 (hinge) | On or off: a light switch is 1 or 0; one switch, two switches, how many patterns (by listing, not 2ⁿ) | `bits` with `number: off`, dot cards only |
| 4 | 6K04 n2 | Counting dots: turn cards face up to make a number by adding the dots; then the letter A as switches | `bits` (dots, no binary place value named), then `decode` |
| 5 | 6K01 n1 (hinge) | The parts inside: input, processor, memory, storage, output, each with one job | **new `parts` widget** (below) |
| 6 | 6K01 n2 | Working together: press a key on a game console and follow it through the parts; take one part away and see what stops | `parts` |
| 7 | 6K02 n1 (hinge) | Joining computers: cable or Wi-Fi, home, school and the internet | `network` `mode: link` with numbers hidden (a new `simple: on` option) |
| 8 | 6K02 n2 | Messages in pieces: a message split into numbered pieces travels through several devices and is put back in order | `network` `mode: packets`, TCP off, few routers |

**New board work.** `parts` (a small widget: five labelled parts of a games console or a school laptop, a button press that lights the path input → processor ↔ memory → output, storage for saving, and a switch to take a part away; values for checks). `simple: on` on `network` link mode (words instead of Mb/s and ms). `bits` already has `number: off`. Ports 8548–8555.

**Decisions for Matthew:** (1) one "Start here" course, or a short course at the start of each pathway (Data, Hardware, Networks); (2) the new `parts` widget, or teach 6K01 with pictures and question checks only; (3) explicit shape (recommended at this age) or the inquiry 5E shape Packets uses.

## Done (25 Oct 2026): class plans, first batch

`class/<lesson>.yml` for all eight Starting out lessons and Cyber › Passwords (none of the 56 systems lessons had one). Starting out leans on unplugged, whole-class versions of each board (volunteers as switches, dot cards and parts; strips passed by different routes); Passwords keeps the inquiry order (guesses collected without judging, names only after students compare explanations). Each has an `inquiry` where there's a real disagreement, two to four activities and one class question. Decks pass `check-decks`. Next: the other courses, in the order a class is likely to meet them (Data representation, Networks, Inside a computer, then the rest).

## Done (25 Oct 2026): class plans, second and third batches

Plans for every remaining systems lesson: 18 in Data representation, Networks and Inside a computer, then 29 in Compression, Security, Cyber safety (all but Passwords), How a web page is made, The command line, From gates to a processor and the two CTF courses' lessons. Each has an `inquiry`, one or two unplugged activities and one class question (number or plain multiple choice); security, cyber and CTF plans stay defensive. The third batch is shorter than the first: trial a few with classes before writing more depth.

## Proposed (25 Oct 2026, Matthew asked to track; not built): a project brief per course

The gap: How computers work has no project briefs or assessment tasks (the CTF finales and the security review are closed puzzles, not tasks a teacher collects and marks). In Years 7–10 this strand is usually assessed through school-set projects, so one brief per course is the fix. Quizzes are not needed: the lessons already have checks.

- **Criteria from the Australian Curriculum**, taken from the descriptors and node files in `data/curriculum/systems.json`, so any school can use them. No framework mapping in the brief itself; at most a teacher note on how a school might use it (MYP or otherwise).
- **Format:** goal, a few milestones, what to hand in, success criteria. The code `projects.yml` format does not fit (it scans student code), so this needs a plain brief page per course, linked from the course's teacher strip.
- **Ideas, one per course:** Data representation, design a code or a pixel badge and justify its size; Making data smaller, compare real files in several formats and say what is lost; Networks, measure Wi-Fi speed and delay around the school and recommend fixes; Inside a computer, spec a computer for a client brief within budget; Security and Cyber safety, a defensive threat model and privacy review of a made-up or school-approved app against the APPs; From gates to a processor, build and test a logic circuit (an alarm) in a simulator; Starting out, an unplugged packets message and what went wrong. Crossovers with Code (micro:bit counter, radio packets, data logger) link both ways.
- **Start with** Data representation, Networks and Inside a computer.

## Next

0. Try a few class plans with classes; deepen the third batch where they run thin.
1. Years 5–6: built (Starting out); try it with a Year 5–6 class and a Year 7 catch-up group.
2. A CTF scoreboard (points, hints that cost points) only if classes want one; it would need storage the site doesn't have.
3. Trial Packets and Passwords (inquiry 5E) against an explicit-shape lesson on one concept, then decide which concept lessons to rebuild the same way (candidates: the other seven Cyber missions, Everything is numbers, Who can see your data, Threat models).

## Open questions

(Subject name decided 25 Oct: **How computers work**, display name only; the folder stays `systems/`.)

