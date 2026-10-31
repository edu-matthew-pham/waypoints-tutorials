---
marp: true
theme: default
html: true
---

# Join two tables

SQL and databases · More than one table

<!-- Speaker note: Students combine two tables with JOIN ... ON and then filter or group the joined rows. About 30 minutes (Predict and Run 9 min · Investigate 7 min · Modify and Make 14 min). -->

---

## Today

- I can say why data is split into separate tables.
- I can join two tables with ON, matching a column they share.
- I can name a column with its table, such as songs.title.

---

## Why it matters

> A song knows its artist's name. It does not know where the artist is from. That lives in a different table.

<!-- Speaker note: Real databases keep each kind of thing in its own table, so a fact is stored once. The music library now has two tables: `songs` and `artists`. The artist's name is in both. A **JOIN** lines up each song with its artist by matching that name. -->

---

<span style="background:#fef3c7; color:#1a1a1a; border:1.5px solid #f59e0b; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✍️ Activity</span>

## Match the lists <span style="font-size:.6em;color:#64748b">(5 min)</span>

Give pairs a printed list of songs and a list of artists. They draw a line from each song to its artist's country, then run the join to check.

---

<span style="background:#dbeafe; color:#1a1a1a; border:1.5px solid #3b82f6; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">💬 Discussion</span>

## Predict

```sql
SELECT songs.title, artists.country
FROM songs
JOIN artists ON songs.artist = artists.name;
```

**There are 15 songs, and every artist is in the artists table. What will this show?**

- An error, because the columns are in two tables
- 75 rows: every song with every artist
- 15 rows: each song with its artist's country
- 5 rows: one for each artist

<!-- Speaker note: What happens: 15 rows. For each song, JOIN finds the artists row where the names match, and puts the two together. Take two or three predictions before anyone runs it. -->

<!-- Speaker note: Teacher: the 75 rows option is the idea that sinks a join with no ON. Do not reveal why yet; it comes back in the stuck list. -->

<style scoped>pre, marp-pre { font-size: 0.5em; line-height: 1.25; } section { font-size: 28px; }</style>

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## What happened?

* 15 rows. For each song, JOIN finds the artists row where the names match, and puts the two together.

<!-- Speaker note: Reveal after running. Ask who predicted it, and what made them think so. -->

---

<span style="background:#fef3c7; color:#1a1a1a; border:1.5px solid #f59e0b; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✍️ Activity</span>

## Run it

Open the lesson at this step and try it together.

[tutorials.learningwaypoints.com/code/sql/sql-join/?full=step-2#step-2](https://tutorials.learningwaypoints.com/code/sql/sql-join/?full=step-2#step-2)

<!-- Speaker note: Run it and compare with your prediction. | Part | What it does | |---|---| | `songs.title` | The title column of the songs table: table name, a dot, column name | | `FROM songs JOIN artists` | Brings the two tables together | | `ON songs.artist = artists.name` | Says which columns must match for a song and an artist to be paired | -->

<!-- Speaker note: Teacher: show both tables on the table list first. Ask which column is the same in both. -->

---

<span style="background:#dbeafe; color:#1a1a1a; border:1.5px solid #3b82f6; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">💬 Discussion</span>

## Investigate

```sql
SELECT songs.title, artists.country
FROM songs
JOIN artists ON songs.artist = artists.name
WHERE artists.country = 'Australia';
```

<!-- Speaker note: What this step is for: ON says which rows belong together. Without it, every song would be paired with every artist. -->

<!-- Speaker note: Teacher: students read ON aloud as a sentence. -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Count the Australian songs

<div class="side" style="display:grid;grid-template-columns:1fr 1fr;gap:1em">
<div>

```sql
SELECT songs.title, artists.country
FROM songs
JOIN artists ON songs.artist = artists.name
WHERE artists.country = 'Australia';
```

</div>
<div>

**Run the query. How many songs are by artists from Australia?**

* Answer: 4

</div>
</div>

<!-- Speaker note:  -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Read the matching rule

<div class="side" style="display:grid;grid-template-columns:1fr 1fr;gap:1em">
<div>

```sql
SELECT songs.title, artists.country
FROM songs
JOIN artists ON songs.artist = artists.name
WHERE artists.country = 'Australia';
```

</div>
<div>

**What does ON songs.artist = artists.name do?**

- Sorts the songs by artist
- Pairs each song with the artist row whose name matches
- Copies the artist table into the songs table
- Keeps only songs with a country

* Answer: Pairs each song with the artist row whose name matches

</div>
</div>

<!-- Speaker note: ON is the matching rule. Each song is paired with the artist row where the two names are equal. -->

<style scoped>section { font-size: 24px; }</style>

---

<span style="background:#fef3c7; color:#1a1a1a; border:1.5px solid #f59e0b; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✍️ Activity</span>

## Modify

Change the query so it shows each song's title and its artist's country.

[Open this step](https://tutorials.learningwaypoints.com/code/sql/sql-join/?full=step-4#step-4)

<!-- Speaker note: Hints, in order: Change artists.formed to the column you want. / The column is artists.country. For students who need more support: Give the whole JOIN line and ask students to choose the columns. For early finishers: Show each song with the artist's formed year, newest bands first. The hard part, on purpose: Picturing what the join does. Use two paper lists and draw lines between the matching rows. When students get stuck: ambiguous column name Ask: Which table does that column belong to? Fix: Put the table name and a dot in front of it. / Far too many rows. Ask: Does the join have an ON line? Fix: Add ON so each song is only paired with its own artist. / A song is missing from the result. Ask: Does its artist appear in the artists table, spelled the same? Fix: A join only keeps rows that match. Check the spelling in both tables. -->

---

<span style="background:#fef3c7; color:#1a1a1a; border:1.5px solid #f59e0b; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✍️ Activity</span>

## Make

Find out how many songs the library has from each country. Join the tables, then group.

[Open this step](https://tutorials.learningwaypoints.com/code/sql/sql-join/?full=step-5#step-5)

<!-- Speaker note: Hints, in order: Join, then GROUP BY the country. / SELECT artists.country, COUNT(*) FROM songs JOIN artists ON songs.artist = artists.name GROUP BY artists.country; -->

<!-- Speaker note: Teacher: the pattern is join first, then GROUP BY or WHERE like any query. -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Exit ticket

**Why keep artists in their own table instead of a country column in songs?**

* A country is stored once for each artist, so a mistake is fixed in one place and nothing is repeated.

<!-- Speaker note: Students answer on paper or a mini whiteboard before the reveal. Anyone who cannot answer needs the main idea again next lesson. Where this leads: Next lesson: change the data itself with INSERT, UPDATE and DELETE. -->
