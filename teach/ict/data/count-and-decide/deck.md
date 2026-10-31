---
marp: true
theme: default
html: true
---

# Count and decide

Working with data · Summing up

<!-- Speaker note: Students use IF to make a cell decide between two answers and COUNTIF to count the cells that match a rule, both following when a number changes. They sort eight Year 7 bean heights into Tall and Short and count each group, then do the same for quiz scores, and repeat it in the spreadsheet app the school uses. About 45 minutes (Predict and Try 8 min · Worked example 10 min · Vary 7 min · Practise 10 min · Make and own app 10 min). -->

---

## Today

- I can write an IF with a test and two answers.
- I can use COUNTIF to count the cells that match a rule.
- I can say when a quote mark is needed.

<!-- Speaker note: Before class: Do the Try board yourself: change B2 and watch C2, then B11. The one idea: IF lets a cell make a decision from other cells, and COUNTIF counts how many cells meet a rule. Both are formulas, so they work again when a number changes. Comparison signs: = (equal), <> (not equal), > (more than), < (less than), >= (more than or equal), <= (less than or equal). A test using > leaves out the boundary value, which is a common slip: the boundary question in Vary is there for it. Quote marks: words in a formula go in quotes. The sheet on the page shows #NAME? without them, as Excel and Sheets do. COUNTIF's rule is also in quotes (">=10", "Tall"), and does not mind capital letters. Real tools: some offer smart quotes when pasted from a document, which breaks formulas. Type the quotes in the cell itself. Teacher: Try: ask which cell changed first, C2 or B11, and why. Teacher: Worked example: say the IF aloud as a sentence and ask what each comma separates. Teacher: Own app: walk round. Common slips: missing quotes, a missing bracket, and > where >= was meant. -->

---

## Why it matters

> A scientist wants to know how many beans are 'tall'. She could look down the column and count. What if the sheet could decide for each plant, and count for her?

<!-- Speaker note: Eight beans were measured on day 10 (in cm). This scientist calls a bean **Tall** if it is 10 cm or more, and **Short** if not. Column C decides with **IF**, and B11 counts the Tall ones with **COUNTIF**. | | A | B | C | |---|---|---|---| | **1** | Plant | Height (cm) | Size | | **2** | Bean A | 8.5 | Short | | **3** | Bean B | 10 | Tall | | **…** | … | … | … | | **11** | Tall plants | 4 | | C2 holds this formula, and each cell below has the same kind. B11 holds the COUNTIF: ```text C2: =IF(B2>=10,"Tall","Short") B11: =COUNTIF(C2:C9,"Tall") ``` -->

---

<span style="background:#dbeafe; color:#1a1a1a; border:1.5px solid #3b82f6; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">💬 Discussion</span>

## Think, pair, share

**The scientist calls a bean Tall at 10 cm or more. A friend says 9 cm should be Tall. Who is right, and what changes in the sheet?**

- How many formulas does each person change?
- Does the count change? Does the data?

<!-- Speaker note: Neither is wrong: the cut-off is a choice. It is also a good reason to put the cut-off in its own cell and fix it with $, so changing the choice means changing one number (the previous lesson's idea). Give 30 seconds alone, 2 minutes in pairs, then take answers from both sides. There is no single right answer: ask for a reason, and let students change their minds. -->

---

<span style="background:#dbeafe; color:#1a1a1a; border:1.5px solid #3b82f6; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">💬 Discussion</span>

## Predict

**4 beans are Tall, so B11 shows 4. Bean A in B2 is 8.5, so C2 shows Short. B2 is changed to 10.5. What does B11 show?**

- Tall
- 10.5
- 4
- 5

<!-- Speaker note: What happens: 5. C2's IF now sees 10.5, which is 10 or more, so C2 shows Tall. COUNTIF counts one more Tall plant. Take two or three predictions before anyone runs it. -->

<!-- Speaker note: Teacher: students who chose 4 think the count was fixed. Ask what C2 would show now and who changes it. -->

---

<span style="background:#fef3c7; color:#1a1a1a; border:1.5px solid #f59e0b; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✍️ Activity</span>

## Human IF <span style="font-size:.6em;color:#64748b">(3 min)</span>

Hold up cards with heights (8.5, 10, 12, 7). Students stand if they would be Tall under the rule 'Tall is 10 or more' and sit if not. Count the standing.

<!-- Speaker note: That is exactly what IF does for each cell and COUNTIF does for the room. -->

---

<span style="background:#fef3c7; color:#1a1a1a; border:1.5px solid #f59e0b; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✍️ Activity</span>

## Try it

{{embed: https://tutorials.learningwaypoints.com/_playground-board/index.html?id=deck%2Fict%2Fdata%2Fcount-and-decide%2Fstep-2&code=widget%3A+sheet%0Acell+A1%3A+Plant%0Acell+B1%3A+Height+%28cm%29%0Acell+C1%3A+Size%0Acell+A2%3A+Bean+A%0Acell+B2%3A+8.5%0Acell+C2%3A+%3DIF%28B2%3E%3D10%2C%22Tall%22%2C%22Short%22%29%0Acell+A3%3A+Bean+B%0Acell+B3%3A+10%0Acell+C3%3A+%3DIF%28B3%3E%3D10%2C%22Tall%22%2C%22Short%22%29%0Acell+A4%3A+Bean+C%0Acell+B4%3A+9.5%0Acell+C4%3A+%3DIF%28B4%3E%3D10%2C%22Tall%22%2C%22Short%22%29%0Acell+A5%3A+Bean+D%0Acell+B5%3A+12%0Acell+C5%3A+%3DIF%28B5%3E%3D10%2C%22Tall%22%2C%22Short%22%29%0Acell+A6%3A+Bean+E%0Acell+B6%3A+11%0Acell+C6%3A+%3DIF%28B6%3E%3D10%2C%22Tall%22%2C%22Short%22%29%0Acell+A7%3A+Bean+F%0Acell+B7%3A+9%0Acell+C7%3A+%3DIF%28B7%3E%3D10%2C%22Tall%22%2C%22Short%22%29%0Acell+A8%3A+Bean+G%0Acell+B8%3A+13.5%0Acell+C8%3A+%3DIF%28B8%3E%3D10%2C%22Tall%22%2C%22Short%22%29%0Acell+A9%3A+Bean+H%0Acell+B9%3A+7%0Acell+C9%3A+%3DIF%28B9%3E%3D10%2C%22Tall%22%2C%22Short%22%29%0Acell+A11%3A+Tall+plants%0Acell+B11%3A+%3DCOUNTIF%28C2%3AC9%2C%22Tall%22%29%0Aedit%3A+B2%3AB9%0A&fresh=1}}

[Open this step in the tutorial](https://tutorials.learningwaypoints.com/ict/data/count-and-decide/?full=step-2#step-2)

<!-- Speaker note: Was your guess right? Bean B is exactly 10 cm and is already Tall, because the test is `>=`, which means 'greater than or equal to'. -->

<style scoped>pre, marp-pre { font-size: 0.5em; line-height: 1.25; } section { font-size: 25px; }</style>

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## What happened?

* 5. C2's IF now sees 10.5, which is 10 or more, so C2 shows Tall. COUNTIF counts one more Tall plant.

<!-- Speaker note: Reveal after running. Ask who predicted it, and what made them think so. -->

---

<span style="background:#dbeafe; color:#1a1a1a; border:1.5px solid #3b82f6; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">💬 Discussion</span>

## IF and COUNTIF

Now: what does IF show?

$$\texttt{=IF(} \text{test} \texttt{,} \text{if true} \texttt{,} \text{if not} \texttt{)}$$

1) $\texttt{B2>=10}$ — The test: is the height 10 or more? (\texttt{>=} means greater than or equal to.)
2) $\texttt{"Tall"} \texttt{ , } \texttt{"Short"}$ — The two answers. Words go inside quote marks.
3) $\texttt{=COUNTIF(C2:C9,"Tall")}$ — Look at C2 to C9 and count the cells that say Tall.
4) $\texttt{B2} \text{ becomes } 10.5 \to \text{Tall, count} = 5$ — Change a height and the decision and the count both follow.

<!-- Speaker note: Model this live on the board before revealing anything: write each line and say why, pausing to ask the class what comes next. Then click to reveal the lines and compare. Script. Start: write =IF( test , if true , if not ) and say "IF has three parts, separated by commas." Line 1: write B2>=10 and say "The test: is the height 10 or more? (>= means greater than or equal to.)." Line 2: write "Tall" , "Short" and say "The two answers. Words go inside quote marks." Line 3: write =COUNTIF(C2:C9,"Tall") and say "Look at C2 to C9 and count the cells that say Tall." Line 4: write B2 becomes 10.5 Tall, count = 5 and say "Change a height and the decision and the count both follow." -->

<style scoped>pre, marp-pre { font-size: 0.5em; line-height: 1.25; } section { font-size: 21px; }</style>

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## IF and COUNTIF

**What does =IF(B2&gt;=10,"Tall","Short") show when B2 holds 12?**

- Tall
- TRUE
- 12
- Short

* Answer: Tall

<!-- Speaker note: The test B2>=10 is true for 12, so IF shows its first answer, Tall. -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Find the mistake

**Sam's C2 shows #NAME? instead of Tall or Short. Click the line where Sam first goes wrong.**

```
 1  Sam wants C2 to say Tall if the height in B2 is 10 or more, and Short if not.
 2  Sam types =IF(B2>=10,Tall,Short) into C2.
 3  C2 shows #NAME? instead of Tall or Short.
```

* Answer: line 2

<!-- Speaker note: Line 2: Tall and Short are words, so they need quote marks. Without them, the sheet thinks Tall is the name of something and shows #NAME?. -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Count the cells

**What does =COUNTIF(B2:B9,"&gt;=10") count?**

- How many cells are in B2 to B9
- The sum of the numbers that are 10 or more
- How many cells from B2 to B9 hold 10 or more
- The biggest number in B2 to B9

* Answer: How many cells from B2 to B9 hold 10 or more

<!-- Speaker note: COUNTIF counts the cells in the range that match the rule in quotes. -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Which sign?

**B2 holds 10. Which test is true?**

- B2&gt;=10
- B2&gt;10
- B2&lt;10
- B2&lt;&gt;10

* Answer: B2&gt;=10

<!-- Speaker note: >= means more than or equal, so 10 passes. > and < leave out 10, and <> means not equal. Ask on mini whiteboards or by show of hands before the reveal. -->

---

<span style="background:#fef3c7; color:#1a1a1a; border:1.5px solid #f59e0b; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✍️ Activity</span>

## Vary: change the test



- **Count the tall ones:** 
- **The boundary:** 
- **Choose the formula:** 

<!-- Speaker note: What this step is for: Each task changes the rule: a number test, a test on the boundary, then words for the answers. For students who need more support: A card: =IF(test, answer if true, answer if not). Words go in "quotes". >= means 10 or more; > means more than 10. For early finishers: Add a third group, Very tall, for 12 cm or more. Which function lets one IF choose between three answers? (Hint: put an IF inside an IF.) The hard part, on purpose: Writing the three parts of IF in the right order, with words in quotes. Students who have never written a formula with commas find it fiddly: let them say it aloud first (if this, then that, otherwise this). When students get stuck: A student leaves the quote marks off Tall and Short (Sam's mistake). Ask: What does the sheet think Tall is, if it is not in quotes? Fix: Put quote marks around each word. / A student writes > where >= was needed and Bean B comes out Short. Ask: Is 10 more than 10? Which sign includes 10? Fix: Use >= to include the boundary. / A student's COUNTIF shows 0. Ask: Does the rule match what is in the cells, including the quote marks? Fix: Check the spelling of the word and that the rule is in quotes. / A student's IF shows TRUE or FALSE. Ask: How many parts does your IF have? Where are the two answers? Fix: Write =IF(test, answer if true, answer if not). -->

---

<span style="background:#fef3c7; color:#1a1a1a; border:1.5px solid #f59e0b; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✍️ Activity</span>

## Decide and count

{{embed: https://tutorials.learningwaypoints.com/_playground-board/index.html?id=deck%2Fict%2Fdata%2Fcount-and-decide%2Fstep-5&code=widget%3A+sheet%0Acell+A1%3A+Plant%0Acell+B1%3A+Height+%28cm%29%0Acell+C1%3A+Size%0Acell+A2%3A+Bean+A%0Acell+B2%3A+8.5%0Acell+A3%3A+Bean+B%0Acell+B3%3A+10%0Acell+A4%3A+Bean+C%0Acell+B4%3A+9.5%0Acell+A5%3A+Bean+D%0Acell+B5%3A+12%0Acell+A6%3A+Bean+E%0Acell+B6%3A+11%0Acell+A7%3A+Bean+F%0Acell+B7%3A+9%0Acell+A8%3A+Bean+G%0Acell+B8%3A+13.5%0Acell+A9%3A+Bean+H%0Acell+B9%3A+7%0Acell+A11%3A+Tall+plants%0Acell+B11%3A+%3DCOUNTIF%28C2%3AC9%2C%22Tall%22%29%0Atable%3A+A1%3AC9%0Atools%3A+fill%0Aedit%3A+C2%3AC9%0A&fresh=1}}

[Open this step in the tutorial](https://tutorials.learningwaypoints.com/ict/data/count-and-decide/?full=step-5#step-5)

<!-- Speaker note: What this step is for: Writing an IF column and a COUNTIF, and counting the other way round. -->

<!-- Speaker note: Teacher: ask what the count would be if the rule were >10, and why Bean B changes sides. -->

<style scoped>pre, marp-pre { font-size: 0.5em; line-height: 1.25; } section { font-size: 25px; }</style>

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## What happens to the count?

**Every bean has a Tall or Short answer in column C, and B11 counts the Tall ones. Bean F in B7 grows from 9 to 10.5. What happens to the count in B11?**

- It stays the same
- It becomes 10.5
- It goes up by one
- It goes down by one

* Answer: It goes up by one

<!-- Speaker note: Bean F becomes Tall, so there is one more Tall plant to count. -->

<style scoped>pre, marp-pre { font-size: 0.5em; line-height: 1.25; } section { font-size: 27px; }</style>

---

<span style="background:#fef3c7; color:#1a1a1a; border:1.5px solid #f59e0b; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✍️ Activity</span>

## Make: a quiz result

Change one score from under 5 to over 5. Which two cells move?

[Open this step](https://tutorials.learningwaypoints.com/ict/data/count-and-decide/?full=step-6#step-6)

<!-- Speaker note: What this step is for: Building a pass or retry column and two counts for a quiz of their own has students use IF and COUNTIF on their own data. Hints, in order: Type eight quiz scores out of 10 in B2 to B9, some under 5 and some 5 or more. / In C2 write =IF(B2>=5,"Pass","Retry") and fill down. Then COUNTIF in B11 for Pass and B12 for Retry. -->

---

<span style="background:#dbeafe; color:#1a1a1a; border:1.5px solid #3b82f6; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">💬 Discussion</span>

## Where is the cut-off? <span style="font-size:.6em;color:#64748b">(4 min)</span>

Why 10 cm? Who decides where Tall starts? What would change if we chose 9 or 11?

<!-- Speaker note: The sheet only follows the rule it is given. People choose the rule. Useful for any grading cut-off. -->

---

<span style="background:#fef3c7; color:#1a1a1a; border:1.5px solid #f59e0b; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✍️ Activity</span>

## Make: In your own spreadsheet app

Excel, Google Sheets and Numbers all have IF and COUNTIF with the same parts. Words go in quote marks and so does a rule such as ">=10". Capital letters in the words do not matter to COUNTIF. If a cell shows #NAME?, check the quote marks first.

<!-- Speaker note: What this step is for: Using IF and COUNTIF in Excel or Sheets shows the same two functions in the real tool. -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Exit ticket

**B2 holds 7. What does =IF(B2&gt;=10,"Tall","Short") show? And what would it show if B2 were 10?**

* Short for 7, and Tall for 10, because &gt;= includes 10.

<!-- Speaker note: Students answer on paper or a mini whiteboard before the reveal. Anyone who cannot answer needs the main idea again next lesson. Where this leads: Next in Working with data: Put the rows in order (sort and filter). Science: sorting measurements into groups (tall and short, healthy and not) is the first step to comparing them. A cut-off such as 10 cm is a choice: ask students why that one. -->
