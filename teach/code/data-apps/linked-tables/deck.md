---
marp: true
theme: default
html: true
---

# Two tables that link

Data apps · Linked tables

<!-- Speaker note: Optional extension: students keep playlists and songs in two flat tables linked by a shared value (each song's playlist field names its playlist). Clicking a playlist sets Chosen and copies the songs whose playlist = Chosen into a Shown table: a join, built with the filter pattern from lesson 5. The Check shows the link breaking when a name changes in one table only. Make it yours: add a song to the open playlist. About 45 minutes (Try 5 min · Build 1–2 20 min · Check 5 min · Make it yours 15 min). -->

---

## Today

- I can keep two kinds of record in two tables linked by a shared value.
- I can show the records of one table that belong to a chosen record of another.
- I can explain why changing the shared value in one table breaks the link.

<!-- Speaker note: Before class: This is how relational databases keep data: flat tables, linked by a shared value, rather than tables inside tables. Real databases link by an id number that never changes; here the name does the job, which the Check shows is fragile. The JSON view (the { } JSON button under each table) shows both tables as flat lists of records. Students who go on to Python or web will meet nested JSON, and building it from flat tables is a good exercise there. The SQL course (code/sql) is the natural next step. Teacher: Before Build 1 (whole class): how would you store playlists and their songs? Collect ideas; then show the two tables. Teacher: Check: rename a playlist live on the projector and click it. -->

---

## Why it matters

> A music app has playlists, and every playlist has songs. Behind the screen, the playlists and the songs are usually kept in two separate tables.

<!-- Speaker note: Some apps need two kinds of record: **playlists** and **songs**. Instead of putting a list of songs inside each playlist, keep two flat tables and **link** them: - **Playlists** has one row per playlist: its *name*. - **Songs** has one row per song, and a field *playlist* that names the playlist it belongs to. In the tables on the left it says **→ Playlists**: it's a **linked field**, so you choose its value from a dropdown of playlist names. To show a playlist, go through Songs and keep the rows whose *playlist* matches. That's a filter, which you already know. Databases work the same way, and the SQL course shows how they search linked tables. ![Two tables side by side: Playlists with Study, Gym and Chill; and the Study playlist's songs, each with a playlist field saying Study.](app.svg) -->

---

<span style="background:#dbeafe; color:#1a1a1a; border:1.5px solid #3b82f6; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">💬 Discussion</span>

## Think, pair, share

**A music app has playlists, and each playlist has songs. How would you store that?**

- Could a song be in a table of its own?
- How would a song say which playlist it belongs to?

<!-- Speaker note: Two flat tables, linked by a value they share: the way databases do it. Give 30 seconds alone, 2 minutes in pairs, then take answers from both sides. There is no single right answer: ask for a reason, and let students change their minds. -->

---

## Try the finished app

This is the app you'll build, open on the **Run** tab. Click each playlist. On the left, open the **{ } JSON** view of Songs: two flat lists of records, linked only by the playlist's name. In the Songs table, click a playlist cell: it's a dropdown of the names in Playlists.

---

<span style="background:#fef3c7; color:#1a1a1a; border:1.5px solid #f59e0b; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✍️ Activity</span>

## Try it

Open the lesson at this step and try it together.

[tutorials.learningwaypoints.com/code/data-apps/linked-tables/?full=step-2#step-2](https://tutorials.learningwaypoints.com/code/data-apps/linked-tables/?full=step-2#step-2)

<!-- Speaker note: 1. Add an event: **An item in PlaylistTable is clicked** → **Set variable Chosen to** `ClickedItem.name`, then **Clear table** *Shown*. 2. Give it a sub-event: **For each row in table** *Songs*, and **Compare** `LoopItem.playlist` **=** `Chosen`. 3. Its action: **Add a row to table** *Shown*, with each field from `LoopItem`. 4. Run it and click each playlist. -->

---

<span style="background:#fef3c7; color:#1a1a1a; border:1.5px solid #f59e0b; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✍️ Activity</span>

## Try it

Open the lesson at this step and try it together.

[tutorials.learningwaypoints.com/code/data-apps/linked-tables/?full=step-3#step-3](https://tutorials.learningwaypoints.com/code/data-apps/linked-tables/?full=step-3#step-3)

<!-- Speaker note: Add a sub-event with no condition, below the loop: **Set Heading text to** `Chosen & " (" & count(Shown) & " songs)"` -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Check: what links them?

**In Playlists, Gym is renamed Workout. The Songs table isn't changed. What happens when Workout is clicked?**

- No songs show: the songs still say Gym
- Every song shows
- Gym's songs show, under the new name
- The app shows an error

* Answer: No songs show: the songs still say Gym

<!-- Speaker note: The only link between the tables is the name they share. Change it in one table and the songs no longer match. When you rename a playlist in the tables on the left, App Builder changes the songs' playlist field for you, because it's a linked field; an event in your app changing a name doesn't. Real databases give each playlist a number that never changes, and link by that. What this step is for: Renaming a playlist in one table only breaks the link, which shows the shared value is the only thing joining them. -->

---

<span style="background:#dbeafe; color:#1a1a1a; border:1.5px solid #3b82f6; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">💬 Discussion</span>

## Rename a playlist <span style="font-size:.6em;color:#64748b">(3 min)</span>

Rename Gym to Workout in Playlists only, then click it. Why are its songs gone? How could a database avoid this?

<!-- Speaker note: Link by an id number that never changes, not by a name. -->

---

## Look at it nested

On the left, open **{ } JSON** under **Playlists**, and choose **Songs grouped by playlist**. Now each playlist has its songs *inside* it, the way an app often sends data to another app.

You can't edit this view: App Builder builds it from the two flat tables each time. The app keeps the tables flat because then each song is stored once, in one place. Change a song's artist and every view of it changes too.

---

<span style="background:#fef3c7; color:#1a1a1a; border:1.5px solid #f59e0b; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✍️ Activity</span>

## Make it yours: add to a playlist



- **Add a song:** There are boxes for a title and an artist, and an **Add to playlist** button. Make it add a row to *Songs*, with `Chosen` as the playlist. Then click the playli
- **Check it stays put:** Add a song to one playlist, click another playlist, then click back. Is the song still in the right one?

[Open this step](https://tutorials.learningwaypoints.com/code/data-apps/linked-tables/?full=step-6#step-6)

<!-- Speaker note: What this step is for: Adding a song with Chosen in its playlist field writes the link, so the new song appears in the playlist that's open. For students who need more support: Build 1 together; pairs do the heading and Make it yours. For early finishers: Add a Delete playlist button that also removes its songs. Why does that need a loop over Songs too? The hard part, on purpose: Seeing that the link is just a value: open the JSON view of both tables side by side and point to the matching names. When students get stuck: No songs show. Ask: What does each song's playlist field say, exactly? Fix: The comparison is exact: Study and study are different. Check spelling and capitals in both tables. / Songs from the last playlist stay. Ask: Where is Shown cleared? Fix: Clear table Shown on the parent event, before the loop. -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Exit ticket

**A school app has a Classes table and a Students table. What field would link each student to their class, and how would you show one class's students?**

* A class field on each student. For each student, if their class is the chosen class, add them to a results table.

<!-- Speaker note: Students answer on paper or a mini whiteboard before the reveal. Anyone who cannot answer needs the main idea again next lesson. Where this leads: Next: the SQL course, where linked tables are searched with JOIN. -->
