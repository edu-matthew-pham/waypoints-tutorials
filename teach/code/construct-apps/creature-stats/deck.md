---
marp: true
theme: default
html: true
---

# Creature stats

Construct apps · One object

<!-- Speaker note: Students build a character viewer: one Creature sprite with three animation frames, three copies (instances) each with its own instance variables, and one Mouse on object clicked event that shows the clicked creature's name, stats as text and bars, and ability. They predict and test that clicking picks one copy, find Nib's mistake (expecting an action to fade every creature), add a fourth creature without changing the event sheet, then design their own set. About 75 minutes (Predict 3 min · Build it 35 min · Investigate 12 min · Modify 8 min · Make 17 min). -->

---

## Today

- I can make several characters from one sprite, each with its own values.
- I can explain the difference between an object type, an instance and an instance variable.
- I can use one click event that works for whichever character is clicked.

<!-- Speaker note: Before class: A sprite can't be clicked on its own. Insert the Mouse object (and Touch for tablets) and use Mouse, On object clicked; this is how any sprite becomes a button, and it's worth naming as a general trick. The creatures are made up (Emberfox, Tidecrab, Mossbear). Students' own sets in Make should be made up or everyday things too; steer away from real people. Vocabulary (for teachers, and for students who ask): the sprite is the object type (a class in other languages), each copy is an instance (an object), and instance variables are its properties. Picking is Construct's big idea: a condition picks the instances it's true for, and actions in that event apply only to those. The games course builds on it. These steps were written fresh for this site and have not yet been checked click by click in the current editor. Run through them once before class; Construct updates itself, so a menu name may differ slightly. Teacher: Build it: check at step 7 that every creature has its own values before anyone builds the stats area. -->

---

## Why it matters

> Character select screens, product pages and contact lists all work the same way: one design, many copies, each with its own details.

<!-- Speaker note: Today's prototype shows three made-up creatures: an Emberfox, a Tidecrab and a Mossbear. Click one, and its name, stats and special ability appear below. You could make three separate sprites, each with its own events. Instead you'll make **one** sprite with three copies. In Construct the sprite is an **object type**, and each copy is an **instance**. **Instance variables** belong to the object type, but each instance keeps its own values: the Emberfox's power and the Tidecrab's power are different numbers. ![The creature viewer: three creatures in a row, and below them the Tidecrab's name, its power, speed and defence as bars, and its special ability.](app.svg) -->

---

<span style="background:#dbeafe; color:#1a1a1a; border:1.5px solid #3b82f6; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">💬 Discussion</span>

## Think, pair, share

**A game's character select screen has 20 characters. Did someone write 20 separate click events? How else could it work?**

- What's the same about every character card?
- What's different about each one?

<!-- Speaker note: One design (object type), many copies (instances), each with its own details (instance variables). One event that reads whichever copy was clicked. Give 30 seconds alone, 2 minutes in pairs, then take answers from both sides. There is no single right answer: ask for a reason, and let students change their minds. -->

---

<span style="background:#dbeafe; color:#1a1a1a; border:1.5px solid #3b82f6; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">💬 Discussion</span>

## Predict

**Three copies of the Creature sprite have the instance variable name: Emberfox, Tidecrab and Mossbear. The event is: Mouse on object clicked (Creature) → set NameText to Creature.name. You click the Tidecrab. What does NameText show?**

- All three names
- Tidecrab
- Creature.name
- Emberfox, the first copy

<!-- Speaker note: What happens: Tidecrab. On object clicked picks the copy you clicked, so for the rest of that event Creature.name means that copy's name. Take two or three predictions before anyone runs it. -->

<!-- Speaker note: Teacher: ask how Construct could know which creature you mean. -->

<style scoped>pre, marp-pre { font-size: 0.5em; line-height: 1.25; } section { font-size: 28px; }</style>

---

<span style="background:#fef3c7; color:#1a1a1a; border:1.5px solid #f59e0b; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✍️ Activity</span>

## Try it

{{embed: https://tutorials.learningwaypoints.com/_playground-board/index.html?id=deck%2Fcode%2Fconstruct-apps%2Fcreature-stats%2Fstep-2&code=widget%3A+appscreen%0Aapp%3A+creatures%0A&fresh=1}}

[Open this step in the tutorial](https://tutorials.learningwaypoints.com/code/construct-apps/creature-stats/?full=step-2#step-2)

<!-- Speaker note: This is the finished app you'll build. Click the Tidecrab last. -->

<style scoped>pre, marp-pre { font-size: 0.5em; line-height: 1.25; } section { font-size: 25px; }</style>

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## What happened?

* Tidecrab. On object clicked picks the copy you clicked, so for the rest of that event Creature.name means that copy's name.

<!-- Speaker note: Reveal after running. Ask who predicted it, and what made them think so. -->

---

<span style="background:#fef3c7; color:#1a1a1a; border:1.5px solid #f59e0b; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✍️ Activity</span>

## Try it

Open the lesson at this step and try it together.

[tutorials.learningwaypoints.com/code/construct-apps/creature-stats/?full=step-3#step-3](https://tutorials.learningwaypoints.com/code/construct-apps/creature-stats/?full=step-3#step-3)

<!-- Speaker note: **One sprite, three looks** 1. Start a **New project** called *Creature stats*. 2. Insert a **Sprite** called *Creature*. Draw the first creature (a simple shape and colour is fine). 3. In the animation editor's **Animation frames** panel, right-click and add a frame. Draw the second creature. Add a third frame for the third. 4. Close the editor. In the sprite's animation properties, set **Speed** to 0, so it doesn't flick between frames. 5. Copy and paste the sprite twice, so there are three in a row. Select the second and set its **Initial frame** to 1; the third to 2. **Instance variables** 6. Select any Creature. In Properties, find **Instance variables** and add: *name* (String), *power*, *speed*, *defence* (Numbers, 0 to 100), and *ability* (String). 7. Click each creature in turn and fill in its own values. Make up the numbers, but be ready to say why each creature has them. **The stats area** 8. Below the creatures, insert **Text** objects: *NameText*, *PowerText*, *SpeedText*, *DefenceText* and *AbilityText*. Leave their text empty. 9. Beside PowerText, insert a **Sprite** called *PowerBar*: a red rectangle 200 wide. Set its width to 0 for now. Make *SpeedBar* and *DefenceBar* the same way in other colours. **Make the sprites clickable** 10. Insert the **Mouse** object (and **Touch**, if your class uses tablets). It has no picture; it lets events react to clicks on any object. 11. Add the event: **Mouse**, **On object clicked**, left button, clicked, **Creature**. 12. Add actions: **NameText**, **Set text**, `Creature.name`; **PowerText**, **Set text**, `"Power: " & Creature.power`; and the same for speed and defence; **AbilityText**, `"Special: " & Creature.ability`. 13. Add **PowerBar**, **Set width**, `Creature.power / 100 * 200`, and the same for the other two bars. 14. Preview and click each creature. Students should be able to say: My viewer shows each creature's own name and stats when I click it, using one sprite and one click event. -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Which ones fade?

**You add one more action to the click event: Creature, set opacity to 40 (faded). You click the Mossbear. Which creatures fade?**

- Only the Mossbear
- None, because opacity needs Every tick
- All three
- The two you didn't click

* Answer: Only the Mossbear

<!-- Speaker note: On object clicked picks the copy you clicked. Every Creature action in that event applies to the picked copy only. -->

<!-- Speaker note: Teacher: act it out: three students are creatures, one clicks; only the clicked one obeys the next instruction. -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Find Nib's mistake

**Nib wanted the other two creatures to fade. Click the line where Nib's thinking goes wrong.**

```
 1  Nib wants the two creatures you didn't click to fade, so the clicked one stands out.
 2  Nib uses the event: Mouse on object clicked, Creature.
 3  Nib adds the action: Creature, set opacity to 40, so the other creatures fade.
 4  Nib clicks the Tidecrab, and only the Tidecrab fades.
```

* Answer: line 3

<!-- Speaker note: Line 3: in this event the click has picked the Tidecrab, so Creature, set opacity only fades the Tidecrab. To fade the others, you'd first set every creature faded in an event that doesn't pick, then set the clicked one back. -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Why instance variables?

**Why use instance variables here, not global variables?**

- Global variables can't hold text
- Global variables reset on every click
- Each creature needs its own values; a global holds one
- Instance variables are quicker to type

* Answer: Each creature needs its own values; a global holds one

<!-- Speaker note: A global variable holds one value for the whole app. Each creature needs its own power, speed and so on, so they're instance variables: same names, different values in each copy. -->

---

<span style="background:#fef3c7; color:#1a1a1a; border:1.5px solid #f59e0b; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✍️ Activity</span>

## Be the creatures <span style="font-size:.6em;color:#64748b">(5 min)</span>

Three students stand at the front, each holding a card with a name and three stats. You "click" one by pointing. Read out the event's actions ("Creature: hold up your power card", "Creature: sit down"). Only the picked student acts.

<!-- Speaker note: On object clicked picks one instance; the event's actions apply to it alone. -->

---

<span style="background:#fef3c7; color:#1a1a1a; border:1.5px solid #f59e0b; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✍️ Activity</span>

## A fourth creature



- **Predict the change:** 
- **Try it:** Add a fourth frame in the animation editor, paste a fourth copy of the sprite, set its Initial frame to 3, and fill in its instance variables. Then preview and 

<!-- Speaker note: What this step is for: Adding a creature without touching the event sheet shows the payoff of instance variables and picking: the event already works for any copy. For students who need more support: Give pairs the instance variable table filled in, so they can spend the time on the event. For early finishers: A comparison mode: click two creatures and show their stats side by side (hint: remember the first one's values in global variables). The hard part, on purpose: Filling in instance variables for each copy: students set the values on one creature and assume the others have them. Each copy must be selected and filled in separately. When students get stuck: Clicking a creature does nothing. Ask: Is the Mouse object in the project, and does the event use Mouse, On object clicked? Fix: Insert Mouse (Insert new object, Mouse), then make the event from Mouse, not from the sprite. / Every creature shows the same stats. Ask: Did you fill in the values on each creature separately? Fix: Select each copy on the layout and set its own instance variables in Properties. / All three creatures look the same. Ask: What's each copy's Initial frame? Fix: Set 0, 1 and 2, and animation Speed to 0. -->

<!-- Speaker note: Teacher: ask for a prediction before anyone opens the event sheet. -->

---

<span style="background:#fef3c7; color:#1a1a1a; border:1.5px solid #f59e0b; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✍️ Activity</span>

## Make: your own character cards

Choose your own set: made-up creatures, pets, robots, plants or anything with at least three characters. Give each one at least three stats and a weakness as well as an ability. Make the numbers fair: be ready to say why the strongest one isn't the best at everything.

<!-- Speaker note: What this step is for: A viewer of their own choosing uses the whole pattern (one object type, instance variables, a picking click event) in a new context. -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Exit ticket

**A game has 10 coins, each a copy of Coin with an instance variable value. The player touches one coin. The event adds Coin.value to Score. Whose value is added?**

* Only the touched coin's: the collision picked that copy, so Coin.value means its value.

<!-- Speaker note: Students answer on paper or a mini whiteboard before the reveal. Anyone who cannot answer needs the main idea again next lesson. Where this leads: Next: the challenge, a prototype of their own for a real user. In the games course, picking and instance variables come back with many enemies on screen. -->
