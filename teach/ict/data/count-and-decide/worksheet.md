---
title: "Count and decide"
subtitle: "Working with data · Summing up · Lesson 6"
---

# Count and decide

**Name:** {{field-24}} **Date:** {{field-15}} **Class:** {{field-15}}

> **Key question:** A scientist wants to know how many beans are 'tall'. She could look down the column and count. What if the sheet could decide for each plant, and count for her?


:::teacher-note

**In one sentence:** Students use IF to make a cell decide between two answers and COUNTIF to count the cells that match a rule, both following when a number changes. They sort eight Year 7 bean heights into Tall and Short and count each group, then do the same for quiz scores, and repeat it in the spreadsheet app the school uses.

**Students should be able to say:** I can write an IF with a test and two answers. I can use COUNTIF to count the cells that match a rule. I can say when a quote mark is needed.

**Width:** the unmarked parts are the floor every student does (predict, run, investigate and make). Typical adds the modify practice; wider adds the real-world contexts. They add contexts, not difficulty. Students work in the online tutorial alongside this sheet.

:::


## Predict


:::keep-together

**4 beans are Tall, so B11 shows 4. Bean A in B2 is 8.5, so C2 shows Short. B2 is changed to 10.5. What does B11 show?**

☐ Tall

☐ 10.5

☐ 4

☐ 5

My prediction, and why:

{{lines-3}}

:::


:::teacher-note

**What happens:** 5. C2's IF now sees 10.5, which is 10 or more, so C2 shows Tall. COUNTIF counts one more Tall plant.

:::


## Run

Try it on the board in the tutorial. Was your prediction right? What was different?

{{lines-2}}

## Worked example: decide, then count


:::keep-together

### IF and COUNTIF

1. $\texttt{=IF(} \text{test} \texttt{,} \text{if true} \texttt{,} \text{if not} \texttt{)}$ — IF has three parts, separated by commas.
2. $\texttt{B2>=10}$ — The test: is the height 10 or more? (\texttt{>=} means greater than or equal to.)
3. $\texttt{"Tall"} \texttt{ , } \texttt{"Short"}$ — The two answers. Words go inside quote marks.
4. $\texttt{=COUNTIF(C2:C9,"Tall")}$ — Look at C2 to C9 and count the cells that say Tall.
5. $\texttt{B2} \text{ becomes } 10.5 \to \text{Tall, count} = 5$ — Change a height and the decision and the count both follow.

Now: what does IF show?

**What does =IF(B2&gt;=10,"Tall","Short") show when B2 holds 12?**

☐ Tall

☐ TRUE

☐ 12

☐ Short

:::


:::teacher-note

**Answer:** Tall

The test B2&gt;=10 is true for 12, so IF shows its first answer, Tall.

:::


:::keep-together

### Find the mistake

**Sam's C2 shows #NAME? instead of Tall or Short. Click the line where Sam first goes wrong.**

```
 1  Sam wants C2 to say Tall if the height in B2 is 10 or more, and Short if not.
 2  Sam types =IF(B2>=10,Tall,Short) into C2.
 3  C2 shows #NAME? instead of Tall or Short.
```

Line: {{field-15}}

Why is it wrong?

{{lines-2}}

:::


:::teacher-note

**Answer:** line 2

Line 2: Tall and Short are words, so they need quote marks. Without them, the sheet thinks Tall is the name of something and shows #NAME?.

:::


:::keep-together

### Count the cells

**What does =COUNTIF(B2:B9,"&gt;=10") count?**

☐ How many cells are in B2 to B9

☐ The sum of the numbers that are 10 or more

☐ How many cells from B2 to B9 hold 10 or more

☐ The biggest number in B2 to B9

:::


:::teacher-note

**Answer:** How many cells from B2 to B9 hold 10 or more

COUNTIF counts the cells in the range that match the rule in quotes.

:::


:::typical

## Vary: change the test


**Count the tall ones.** 

**The boundary.** 

**Choose the formula.** 

Work in the tutorial. Plan first: what will you change, and how will you test it?

{{box-4}}

:::


## Decide and count


:::keep-together

### What happens to the count?

**Every bean has a Tall or Short answer in column C, and B11 counts the Tall ones. Bean F in B7 grows from 9 to 10.5. What happens to the count in B11?**

☐ It stays the same

☐ It becomes 10.5

☐ It goes up by one

☐ It goes down by one

:::


:::teacher-note

**Answer:** It goes up by one

Bean F becomes Tall, so there is one more Tall plant to count.

:::


## Make: a quiz result

Change one score from under 5 to over 5. Which two cells move?

Work in the tutorial. Plan first: what will you change, and how will you test it?

{{box-4}}


:::typical

## Make: In your own spreadsheet app

Excel, Google Sheets and Numbers all have IF and COUNTIF with the same parts. Words go in quote marks and so does a rule such as ">=10". Capital letters in the words do not matter to COUNTIF. If a cell shows #NAME?, check the quote marks first.

Work in the tutorial. Plan first: what will you change, and how will you test it?

{{box-4}}

:::


## Exit ticket

:::keep-together

**B2 holds 7. What does =IF(B2&gt;=10,"Tall","Short") show? And what would it show if B2 were 10?**

{{lines-3}}

:::


:::teacher-note

**Answer:** Short for 7, and Tall for 10, because &gt;= includes 10.

:::

