---
marp: true
theme: default
html: true
---

# Design your own table

SQL and databases · More than one table

<!-- Speaker note: Students create a table, choose a type for each column, give it a primary key and fill it with INSERT. About 25 minutes (Predict and Run 8 min · Investigate 6 min · Modify and Make 11 min). -->

---

## Today

- I can create a table with CREATE TABLE.
- I can choose INTEGER or TEXT for a column.
- I can say what a primary key is for.

---

## Why it matters

> Every table you have used was designed by someone. Now you design one.

<!-- Speaker note: A table starts as a list of columns. For each one you choose a **name** and a **type**: `INTEGER` for whole numbers, `TEXT` for text. One column is the **primary key**: its value is different in every row, so a row can always be found by it. -->

---

<span style="background:#fef3c7; color:#1a1a1a; border:1.5px solid #f59e0b; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✍️ Activity</span>

## Design on paper <span style="font-size:.6em;color:#64748b">(5 min)</span>

Pairs sketch a table for a lost-property box: the columns, a type for each, and one example row. Swap and check that each row would have its own id.

---

<span style="background:#dbeafe; color:#1a1a1a; border:1.5px solid #3b82f6; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">💬 Discussion</span>

## Predict

```sql
CREATE TABLE playlists (
  id INTEGER PRIMARY KEY,
  name TEXT,
  owner TEXT
);

INSERT INTO playlists VALUES (1, 'Road trip', 'Sam');

SELECT * FROM playlists;
```

**What will the last line show?**

- Three rows, one for each column
- An empty table with three column names
- An error, because the table does not exist yet
- One row with three columns: id, name and owner

<!-- Speaker note: What happens: One row with three columns. CREATE TABLE makes the table, INSERT adds a row, and SELECT shows it. Take two or three predictions before anyone runs it. -->

<!-- Speaker note: Teacher: the empty-table option is a good one. A table with no rows still has its columns. -->

<style scoped>pre, marp-pre { font-size: 0.5em; line-height: 1.25; } section { font-size: 25px; }</style>

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## What happened?

* One row with three columns. CREATE TABLE makes the table, INSERT adds a row, and SELECT shows it.

<!-- Speaker note: Reveal after running. Ask who predicted it, and what made them think so. -->

---

<span style="background:#fef3c7; color:#1a1a1a; border:1.5px solid #f59e0b; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✍️ Activity</span>

## Run it

Open the lesson at this step and try it together.

[tutorials.learningwaypoints.com/code/sql/sql-create/?full=step-2#step-2](https://tutorials.learningwaypoints.com/code/sql/sql-create/?full=step-2#step-2)

<!-- Speaker note: Run it and open **Tables in this database**. Then run it again and read the message. | Part | What it does | |---|---| | `CREATE TABLE playlists (...)` | Makes a new table with these columns | | `name TEXT` | A column called name that holds text | | `id INTEGER PRIMARY KEY` | A whole-number column that is different in every row | The second run fails because the table is already made. Reset starts again. -->

<!-- Speaker note: Teacher: the second run fails. Ask what the database is protecting. -->

---

<span style="background:#dbeafe; color:#1a1a1a; border:1.5px solid #3b82f6; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">💬 Discussion</span>

## Investigate

```sql
CREATE TABLE playlists (
  id INTEGER PRIMARY KEY,
  name TEXT,
  owner TEXT
);

INSERT INTO playlists VALUES (1, 'Road trip', 'Sam');

SELECT * FROM playlists;
```

<!-- Speaker note: What this step is for: A column's type says what it holds, and the primary key makes each row unique so it can be found and linked to. -->

<!-- Speaker note: Teacher: ask students for a column that could not be a key (name, year level) and why. -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Pick the type

<div class="side" style="display:grid;grid-template-columns:1fr 1fr;gap:1em">
<div>

```sql
CREATE TABLE playlists (
  id INTEGER PRIMARY KEY,
  name TEXT,
  owner TEXT
);

INSERT INTO playlists VALUES (1, 'Road trip', 'Sam');

SELECT * FROM playlists;
```

</div>
<div>

**A table of songs needs a column for how many plays each song has. Which type?**

- PRIMARY KEY
- INTEGER
- TEXT

* Answer: INTEGER

</div>
</div>

<!-- Speaker note: Plays is a whole number, so INTEGER. TEXT would not add up. -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Why a key?

<div class="side" style="display:grid;grid-template-columns:1fr 1fr;gap:1em">
<div>

```sql
CREATE TABLE playlists (
  id INTEGER PRIMARY KEY,
  name TEXT,
  owner TEXT
);

INSERT INTO playlists VALUES (1, 'Road trip', 'Sam');

SELECT * FROM playlists;
```

</div>
<div>

**Why does every table get an id column as its primary key?**

- SQL cannot store text without it
- Two people can share a name, but an id belongs to one row only
- It makes the table run faster for every query

* Answer: Two people can share a name, but an id belongs to one row only

</div>
</div>

<!-- Speaker note: Names repeat, but an id is never repeated, so it is a safe way to point at exactly one row. -->

<style scoped>section { font-size: 24px; }</style>

---

<span style="background:#fef3c7; color:#1a1a1a; border:1.5px solid #f59e0b; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✍️ Activity</span>

## Modify

Add a fourth column called `description`, and fill it in for the playlist.

[Open this step](https://tutorials.learningwaypoints.com/code/sql/sql-create/?full=step-4#step-4)

<!-- Speaker note: Hints, in order: Add description TEXT to the columns, then give the INSERT a fourth value. / The new row needs four values in the same order as the columns. For students who need more support: Give the CREATE TABLE and ask students to write the INSERT. For early finishers: Add a second table of your own and join it to the first. The hard part, on purpose: Choosing columns. Start from a real list on paper and ask what one row is. When students get stuck: table playlists already exists Ask: Did you run the CREATE line twice? Fix: Press Reset and run once. / A syntax error near a bracket. Ask: Is there a comma between each column, and none after the last? Fix: Commas separate columns. The last column has none. / A mismatch of values and columns. Ask: How many columns does the table have? Fix: Give one value for each column. -->

---

<span style="background:#fef3c7; color:#1a1a1a; border:1.5px solid #f59e0b; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✍️ Activity</span>

## Make

Design a table called `gigs` for concerts. Give it a key, a place and a ticket price, add two rows, and show them.

[Open this step](https://tutorials.learningwaypoints.com/code/sql/sql-create/?full=step-5#step-5)

<!-- Speaker note: Hints, in order: Name the columns first: id as the key, then a place and a price. / CREATE TABLE gigs (id INTEGER PRIMARY KEY, place TEXT, price INTEGER); -->

<!-- Speaker note: Teacher: let students choose their own columns before they type. A good table is one you could fill from a real list. -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Exit ticket

**What is a primary key?**

* A column whose value is different in every row, so each row can be found and pointed at.

<!-- Speaker note: Students answer on paper or a mini whiteboard before the reveal. Anyone who cannot answer needs the main idea again next lesson. Where this leads: Next lesson: link two tables with a key, so a review knows which song it is about. -->
