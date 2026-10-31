---
marp: true
theme: default
html: true
---

# Link tables with keys

SQL and databases · More than one table

<!-- Speaker note: Students link two tables with a foreign key, join on it, and see why tables link by id rather than by name. About 30 minutes (Predict and Run 8 min · Investigate 8 min · Modify and Make 14 min). -->

---

## Today

- I can say what a foreign key is.
- I can join two tables on a key.
- I can say why a table stores an id instead of a title.

---

## Why it matters

> A review says 'Great chorus'. Which song? The review stores a number, and the number points at one row.

<!-- Speaker note: The `reviews` table does not store song titles. It stores a `song_id`: the **id** of a row in `songs`. A column that holds another table's key is called a **foreign key**. A join matches it up: `reviews.song_id = songs.id`. Why not just store the title? Titles can change or repeat. An id never does. -->

---

<span style="background:#fef3c7; color:#1a1a1a; border:1.5px solid #f59e0b; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✍️ Activity</span>

## Draw the arrows <span style="font-size:.6em;color:#64748b">(4 min)</span>

Print the ten reviews and the songs table. Students draw an arrow from each review to its song using song_id, then run the join to check.

---

<span style="background:#dbeafe; color:#1a1a1a; border:1.5px solid #3b82f6; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">💬 Discussion</span>

## Predict

```sql
SELECT songs.title, reviews.stars
FROM reviews
JOIN songs ON reviews.song_id = songs.id;
```

**The reviews table has 10 rows, and every song_id matches a song. What will this show?**

- 10 rows: each review with its song's title
- 15 rows, one for each song
- 7 rows, one for each reviewed song
- An error, because reviews has no title column

<!-- Speaker note: What happens: 10 rows. Each review is paired with the song whose id equals its song_id. Take two or three predictions before anyone runs it. -->

<!-- Speaker note: Teacher: the 15-rows option is a good slip. A join gives one row per matching pair, and songs with no reviews do not appear. -->

<style scoped>pre, marp-pre { font-size: 0.5em; line-height: 1.25; } section { font-size: 28px; }</style>

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## What happened?

* 10 rows. Each review is paired with the song whose id equals its song_id.

<!-- Speaker note: Reveal after running. Ask who predicted it, and what made them think so. -->

---

<span style="background:#fef3c7; color:#1a1a1a; border:1.5px solid #f59e0b; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✍️ Activity</span>

## Run it

Open the lesson at this step and try it together.

[tutorials.learningwaypoints.com/code/sql/sql-keys/?full=step-2#step-2](https://tutorials.learningwaypoints.com/code/sql/sql-keys/?full=step-2#step-2)

<!-- Speaker note: Run it. Open **Tables in this database** to see the `song_id` column. | Part | What it does | |---|---| | `reviews.song_id` | The id of the song this review is about | | `songs.id` | The primary key of the songs table | | `ON reviews.song_id = songs.id` | Pairs each review with its song | -->

<!-- Speaker note: Teacher: compare with the join in lesson 6, which matched on a name. Ask what would break if two artists shared a name. -->

---

<span style="background:#dbeafe; color:#1a1a1a; border:1.5px solid #3b82f6; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">💬 Discussion</span>

## Investigate

```sql
SELECT songs.title, AVG(reviews.stars)
FROM reviews
JOIN songs ON reviews.song_id = songs.id
WHERE songs.title = 'Glass Hearts';
```

<!-- Speaker note: What this step is for: A key lets one fact live in one place. The reviews point at the song, so renaming a song needs one change. -->

<!-- Speaker note: Teacher: the title question is the main idea of the course. A fact stored once is fixed once. -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Find an average

<div class="side" style="display:grid;grid-template-columns:1fr 1fr;gap:1em">
<div>

```sql
SELECT songs.title, AVG(reviews.stars)
FROM reviews
JOIN songs ON reviews.song_id = songs.id
WHERE songs.title = 'Glass Hearts';
```

</div>
<div>

**Run the query. What is the average rating of the song Glass Hearts?**

* Answer: 4.5

</div>
</div>

<!-- Speaker note:  -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Changing a title

<div class="side" style="display:grid;grid-template-columns:1fr 1fr;gap:1em">
<div>

```sql
SELECT songs.title, AVG(reviews.stars)
FROM reviews
JOIN songs ON reviews.song_id = songs.id
WHERE songs.title = 'Glass Hearts';
```

</div>
<div>

**A song's title is corrected in the songs table. What happens to its reviews?**

- Nothing breaks: they point at the song's id, which did not change
- They all have to be edited to match
- They are deleted

* Answer: Nothing breaks: they point at the song's id, which did not change

</div>
</div>

<!-- Speaker note: The link is the id, and the id stays the same. That is why tables link by key. -->

<style scoped>section { font-size: 23px; }</style>

---

<span style="background:#fef3c7; color:#1a1a1a; border:1.5px solid #f59e0b; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✍️ Activity</span>

## Modify

Change the query so it shows each song title with the review's comment.

[Open this step](https://tutorials.learningwaypoints.com/code/sql/sql-keys/?full=step-4#step-4)

<!-- Speaker note: Hints, in order: Swap reviews.stars for the column with the words. / The column is reviews.comment. For students who need more support: Give the join and ask for the grouping. For early finishers: Insert a review for a song, then run the join again to see it appear. The hard part, on purpose: Seeing the link. Draw an arrow from each review row to its song row. When students get stuck: ambiguous column name: id Ask: Both tables have an id. Which one do you mean? Fix: Write songs.id or reviews.id. / Fewer rows than expected. Ask: Which songs have no reviews? Fix: A join keeps only rows that have a match. -->

---

<span style="background:#fef3c7; color:#1a1a1a; border:1.5px solid #f59e0b; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✍️ Activity</span>

## Make

Find the average rating of each reviewed song, with the best first.

[Open this step](https://tutorials.learningwaypoints.com/code/sql/sql-keys/?full=step-5#step-5)

<!-- Speaker note: Hints, in order: Join, group by the song's title, and average the stars. / Add ORDER BY AVG(reviews.stars) DESC for best first. -->

<!-- Speaker note: Teacher: seven songs have reviews, so seven rows. -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Exit ticket

**Why does reviews store song_id instead of the song's title?**

* An id is never repeated or changed, so each review points at exactly one song and a title can be fixed in one place.

<!-- Speaker note: Students answer on paper or a mini whiteboard before the reveal. Anyone who cannot answer needs the main idea again next lesson. Where this leads: Next: SQL from Python, which runs the same queries from a program. -->
