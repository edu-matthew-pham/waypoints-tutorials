---
order: 10
unit: tables
moveId: sql-keys
title: Link tables with keys
summary: Store another table's id in a column, so a row can point at exactly one row elsewhere.
language: sql
hook: "A review says 'Great chorus'. Which song? The review stores a number, and the number points at one row."
---
The `reviews` table does not store song titles. It stores a `song_id`: the **id** of a row in `songs`. A column that holds another table's key is called a **foreign key**. A join matches it up: `reviews.song_id = songs.id`.

Why not just store the title? Titles can change or repeat. An id never does.

## Predict

```step
stage: predict
code: lesson.sql#link
check:
  type: predict
  q: "The reviews table has 10 rows, and every song_id matches a song. What will this show?"
  options:
    - "10 rows: each review with its song's title"
    - "15 rows, one for each song"
    - "7 rows, one for each reviewed song"
    - "An error, because reviews has no title column"
  actual: "10 rows. Each review is paired with the song whose id equals its song_id."
```

## Run

```step
stage: run
code: lesson.sql#link
try: { playground: sql, db: music, starter: "lesson.sql#link", height: 460 }
```

Run it. Open **Tables in this database** to see the `song_id` column.

| Part | What it does |
|---|---|
| `reviews.song_id` | The id of the song this review is about |
| `songs.id` | The primary key of the songs table |
| `ON reviews.song_id = songs.id` | Pairs each review with its song |

## Investigate

```step
stage: investigate
code: lesson.sql#avg
insight: "A key lets one fact live in one place. The reviews point at the song, so renaming a song needs one change."
tasks:
  - check:
      type: number
      q: "Run the query. What is the average rating of the song Glass Hearts?"
      answer: 4.5
  - check:
      type: question
      q: "A song's title is corrected in the songs table. What happens to its reviews?"
      options:
        - "Nothing breaks: they point at the song's id, which did not change"
        - "They all have to be edited to match"
        - "They are deleted"
      answer: 0
      feedback:
        - null
        - "That would be true if the reviews stored the title. They store the id."
        - "Changing a title does not remove anything."
      explain: "The link is the id, and the id stays the same. That is why tables link by key."
```

### Find an average

Join, filter to one song, average the stars.

### Changing a title

What do the reviews actually store?

## Modify

```step
stage: modify
try: { playground: sql, db: music, starter: "lesson.sql#modify", height: 460 }
hint:
  - "Swap reviews.stars for the column with the words."
  - "The column is reviews.comment."
check: { type: code, text: "Show each review's comment beside its song title.", rules: { contains: ["JOIN songs", "reviews.song_id = songs.id"], columns: ["title", "comment"], rows: 10 } }
smaller:
  check:
    type: question
    q: "In reviews.song_id = songs.id, what is songs.id?"
    options:
      - "The primary key of the songs table"
      - "The number of stars"
      - "The id of the review"
    answer: 0
    feedback:
      - null
      - "Stars are in reviews.stars."
      - "The review's own id is reviews.id."
    explain: "songs.id identifies one song, and reviews.song_id points at it."
```

Change the query so it shows each song title with the review's comment.

## Make

```step
stage: make
try: { playground: sql, db: music, starter: "lesson.sql#make", height: 460 }
hint:
  - "Join, group by the song's title, and average the stars."
  - "Add ORDER BY AVG(reviews.stars) DESC for best first."
check: { type: code, text: "Show each reviewed song with its average stars, best first.", rules: { contains: ["JOIN", "GROUP BY", "ORDER BY"], rows: 7 } }
```

Find the average rating of each reviewed song, with the best first.

```teacher
summary: Students link two tables with a foreign key, join on it, and see why tables link by id rather than by name.
time: 30
timing: "Predict and Run 8 min · Investigate 8 min · Modify and Make 14 min"
goals:
  - I can say what a foreign key is.
  - I can join two tables on a key.
  - I can say why a table stores an id instead of a title.
running:
  - "Predict: the 15-rows option is a good slip. A join gives one row per matching pair, and songs with no reviews do not appear."
  - "Run: compare with the join in lesson 6, which matched on a name. Ask what would break if two artists shared a name."
  - "Investigate: the title question is the main idea of the course. A fact stored once is fixed once."
  - "Make: seven songs have reviews, so seven rows."
stuck:
  - see: "ambiguous column name: id"
    ask: Both tables have an id. Which one do you mean?
    fix: Write songs.id or reviews.id.
  - see: "Fewer rows than expected."
    ask: Which songs have no reviews?
    fix: A join keeps only rows that have a match.
stretch: Insert a review for a song, then run the join again to see it appear.
support: Give the join and ask for the grouping.
leads: "Next: SQL from Python, which runs the same queries from a program."
exit:
  q: "Why does reviews store song_id instead of the song's title?"
  a: "An id is never repeated or changed, so each review points at exactly one song and a title can be fixed in one place."
explain: |
  A foreign key is a column that holds another table's primary key, such as `reviews.song_id` holding `songs.id`. A join on the pair puts each review beside its song. Storing the id means each fact lives in one place.
solutions:
  step-4: lesson.sql#sol-modify
  step-5: lesson.sql#sol-make
struggle: "Seeing the link. Draw an arrow from each review row to its song row."
class:
  activities:
    - at: start
      title: Draw the arrows
      minutes: 4
      do: |
        Print the ten reviews and the songs table. Students draw an arrow from each review to its song using song_id, then run the join to check.
```

```code lesson.sql#link
SELECT songs.title, reviews.stars
FROM reviews
JOIN songs ON reviews.song_id = songs.id;
```

```code lesson.sql#avg
SELECT songs.title, AVG(reviews.stars)
FROM reviews
JOIN songs ON reviews.song_id = songs.id
WHERE songs.title = 'Glass Hearts';
```

```code lesson.sql#modify
SELECT songs.title, reviews.stars
FROM reviews
JOIN songs ON reviews.song_id = songs.id;
```

```code lesson.sql#sol-modify
SELECT songs.title, reviews.comment
FROM reviews
JOIN songs ON reviews.song_id = songs.id;
```

```code lesson.sql#make
-- Average stars for each reviewed song, best first.
SELECT songs.title, AVG(reviews.stars)
FROM reviews
JOIN songs ON reviews.song_id = songs.id
```

```code lesson.sql#sol-make
SELECT songs.title, AVG(reviews.stars)
FROM reviews
JOIN songs ON reviews.song_id = songs.id
GROUP BY songs.title
ORDER BY AVG(reviews.stars) DESC;
```
