---
marp: true
theme: default
html: true
---

# How does a feed choose?

AI in your life · Built to keep you

<!-- Speaker note: Be the algorithm: on a made-up feed, students set how much each signal counts and see posts Sam asked for less of rise when the app ranks for watching. What a feed counts decides what rises. About 40 minutes. -->

---

## Today

**We are learning to** be the algorithm: a feed ranks posts by predicting what will keep you watching, from signals like watch time, likes and shares. What it counts decides what rises.

- I can explain how a feed ranks posts from signals like watch time, likes and shares.
- I can explain why posts I didn't ask for can rise to the top.
- I can tell a signal I send from the app's choice about how much it counts.

<!-- Speaker note: Before class: **Core idea:** a feed predicts engagement from signals; what it counts decides what rises. Kind: learns to predict or sort (recommender systems), building on AI Foundations › How does a machine learn?. **The board** (`feed` widget, mode rank) is a small made-up model, not a real app: eight made-up posts, five signals each scored 0 to 3, and a weighted sum. "The app's goal" weights watch time and shares 3, likes 1; "Sam's goal" weights follows 2, wants 3, likes 1. With the app's goal, the pranks post leads and both posts Sam asked for less of (the celebrity argument and the game argument) reach the top 3. Paper version: print the eight post cards with their five numbers; groups choose weights, add up scores and order the cards. Sources (checked 18 Oct 2026, research brief claims 47–48): - eSafety, Recommender systems position paper (May 2026): platforms "overwhelmingly prioritise engagement when sorting and presenting content"; recommenders are "only one factor" in harm. https://www.esafety.gov.au/sites/default/files/2026-05/Recommender-systems-position-paper-May2026.pdf - Milli et al. (arXiv 2023–24): engagement ranking "amplifies emotionally charged, out-group hostile content" that users did not prefer. https://arxiv.org/abs/2305.16941. Journal publication not confirmed. No phones in class: the board or the paper cards stand in for a real feed. Don't ask students what's in their own feeds. Idea credit: "be the algorithm" card activities exist in Actua's Ethical Algorithms game and Day of AI's Grade 8 "AI, Power, and Persuasion"; this lesson's cards and board are our own. The Digital Technologies Hub's "Filter bubbles, bias, rabbit holes and nudging" (Years 9–10, CC BY 4.0) is an optional extra for older classes. -->

---

<span style="background:#dbeafe; color:#1a1a1a; border:1.5px solid #3b82f6; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">💬 Discussion</span>

## Think, pair, share

**Should an app show you what you ask for, or what you'll actually watch?**

- What's the difference, and who gains from each?

<!-- Speaker note: Both have a case: what we watch can reveal real interest; what we ask for reflects our goals. The app usually gains from watching time. Give 30 seconds alone, 2 minutes in pairs, then take answers from both sides. There is no single right answer: ask for a reason, and let students change their minds. -->

---

<span style="background:#dbeafe; color:#1a1a1a; border:1.5px solid #3b82f6; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">💬 Discussion</span>

## Engage: predict

**A video app wants you to keep watching. Which post will it most likely put first?**

- The newest one
- The one people watch longest and argue about most
- The one you said you wanted

<!-- Speaker note: What happens: Usually the one it predicts you'll watch longest and react to. Australia's eSafety Commissioner says platforms overwhelmingly prioritise engagement when they sort content. Take two or three predictions before anyone runs it. -->

<!-- Speaker note: Teacher: lock in a guess about what goes first. -->

---

<span style="background:#fef3c7; color:#1a1a1a; border:1.5px solid #f59e0b; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✍️ Activity</span>

## Explore it

{{embed: https://tutorials.learningwaypoints.com/_playground-board/index.html?id=deck%2Fai%2Fai-in-your-life%2Fhow-feeds-choose%2Fstep-2&code=widget%3A+feed%0Amode%3A+rank%0A&fresh=1}}

[Open this step in the tutorial](https://tutorials.learningwaypoints.com/ai/ai-in-your-life/how-feeds-choose/?full=step-2#step-2)

<!-- Speaker note: The feed gives each post a **score**. Each signal (watch time, likes, shares, who posted it, what Sam asked for) gets a number, and you choose **how much each one counts**. The highest score goes first. -->

<!-- Speaker note: Teacher: groups set the app's goal, then Sam's; compare the top three. -->

<style scoped>pre, marp-pre { font-size: 0.5em; line-height: 1.25; } section { font-size: 25px; }</style>

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## What happened?

* Usually the one it predicts you'll watch longest and react to. Australia's eSafety Commissioner says platforms overwhelmingly prioritise engagement when they sort content.

<!-- Speaker note: Reveal after running. Ask who predicted it, and what made them think so. -->

---

<span style="background:#fef3c7; color:#1a1a1a; border:1.5px solid #f59e0b; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✍️ Activity</span>

## Be the algorithm (paper) <span style="font-size:.6em;color:#64748b">(10 min)</span>

Each group gets eight post cards with five numbers. Choose how much each signal counts (0 to 3), add up each post's score, and lay the cards out top to bottom. Then do it again for Sam's goal.

<!-- Speaker note: App's goal: watch 3, shares 3, likes 1. Sam's goal: follows 2, wants 3, likes 1. Compare the top three. -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## The arguments

**With the app's goal, two posts Sam asked for less of rose into the top 3. Why?**

- The app made a mistake
- People watch and argue about them a lot, and the app counted that most
- Sam secretly wanted them

* Answer: People watch and argue about them a lot, and the app counted that most

<!-- Speaker note:  -->

<!-- Speaker note: Teacher: who chose what counts. -->

<style scoped>pre, marp-pre { font-size: 0.5em; line-height: 1.25; } section { font-size: 28px; }</style>

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Who decides?

**So who decides what Sam sees first?**

- Whoever chooses what the feed counts: the app's makers
- Sam, completely
- Nobody: it's random

* Answer: Whoever chooses what the feed counts: the app's makers

<!-- Speaker note:  -->

---

<span style="background:#dbeafe; color:#1a1a1a; border:1.5px solid #3b82f6; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">💬 Discussion</span>

## Who chose? <span style="font-size:.6em;color:#64748b">(3 min)</span>

Who decided what Sam saw first: Sam, the posts, or the app's makers?

<!-- Speaker note: Bring out that choosing the weights is a human decision. -->

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Elaborate: what you can change

**Which of these is a signal you can send the feed, and which is the app's choice?**

Groups: A signal you send · The app's choice

Pressing 'Not interested' on a post · How much 'Not interested' counts compared with watch time · Following a friend's account · Whether the feed shows friends first or popular posts first · Watching a video to the end

* Answer: Pressing 'Not interested' on a post → A signal you send; How much 'Not interested' counts compared with watch time → The app's choice; Following a friend's account → A signal you send; Whether the feed shows friends first or popular posts first → The app's choice; Watching a video to the end → A signal you send

<!-- Speaker note:  -->

<style scoped>pre, marp-pre { font-size: 0.5em; line-height: 1.25; } section { font-size: 20px; }</style>

---

<span style="background:#fef3c7; color:#1a1a1a; border:1.5px solid #f59e0b; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✍️ Activity</span>

## Make: Elaborate: what amplifies

Researchers studied Twitter's feed (2023). Ranking by engagement **amplified emotionally charged, out-group hostile content** (posts angry at "the other side") that users said they **didn't prefer**.

Why might a feed show more of what people don't want? Who gains from it, and who loses? If you designed a feed, what would you count instead, and what would you lose?

<!-- Speaker note: For students who need more support: Do the app's goal together on the projector, then let pairs find Sam's goal. For early finishers: Design a fair feed for a school's news app. What would it count, and what would that cost the app? The hard part, on purpose: Students think the feed 'knows' what they like. It predicts engagement from signals, which isn't the same. When students get stuck: A student can't get two followed posts into the top 3. Ask: Which sliders reward posts Sam follows or asked for? Fix: Turn up 'From people Sam follows' and 'What Sam says he wants', turn watch time and shares down. / A student says the arguments rose because Sam likes them. Ask: What did Sam ask for less of? What did the app count instead? Fix: The app counted watching and arguing, not Sam's request. -->

---

## Evaluate: your feed

On paper: **"A feed chooses what I see by \_\_\_\_. It counts \_\_\_\_ most, because the app wants \_\_\_\_."**

**Next lesson:** features designed to keep you there.

---

<span style="background:#dcfce7; color:#1a1a1a; border:1.5px solid #22c55e; padding:6px 18px; border-radius:8px; font-size:1em; font-weight:500;">✅ Check</span>

## Exit ticket

**Why can posts you didn't ask for end up at the top of your feed?**

* The feed counts signals like watch time and shares most, so posts people watch and argue about rise, even if you asked for less.

<!-- Speaker note: Students answer on paper or a mini whiteboard before the reveal. Anyone who cannot answer needs the main idea again next lesson. Where this leads: Lesson 3: features designed to keep you. -->
