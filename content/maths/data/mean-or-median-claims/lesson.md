---
order: 31
unit: stats9
node: AC9M9ST01 n2
uses: ["AC9M9ST01 n1", "AC9M8ST03 n1"]
connection: median-house-price
title: "\"The average is...\" Which average, from what?"
summary: "A claim about an average depends on which average was used and how the data was collected. One very high value drags the mean but hardly moves the median."
language: maths
voice: { name: af_heart, speed: 1.1 }
hook: "\"The average house in this suburb sells for $834 000.\" Is that what a typical house costs?"
app:
  command: node "$REPO_ROOT/tools/serve.mjs" "$REPO_ROOT/dist/_playground-board" 8383
  url: http://127.0.0.1:8383/index.html
  readySelector: "#board"
  layout: full
---
Seven houses in a suburb sold last month for these prices, in thousands of dollars: 520, 540, 560, 580, 600, 640 and 2400 (made up for the task). Reports of house prices usually give the median, because a few very high sales drag the mean up ([Westpac explains why](https://www.westpac.com.au/personal-banking/home-loans/median-house-prices-explained/)). Have a guess whether the mean or the median says more about a typical house here, and we'll come back to it at the end.

## Predict: mean or median

```step
stage: "predict"
insight: "Choosing the more typical price shows whether students trust the mean even when one sale is far above the rest."
check: {"type": "predict", "q": "Six houses sold for about $520 000 to $640 000 and one for $2 400 000. Which average better shows a typical house?", "options": ["The median", "The mean", "Both are the same"], "actual": "The median. The one expensive sale drags the mean up to $834 000, but the median stays at $580 000, in the middle of the usual prices."}
```

## Run: remove the outlier

```step
stage: "run"
insight: "Removing the one very high price moves the mean a long way and the median only a little."
try: {"playground": "board", "starter": "b.yml#run", "height": 620}
check: {"type": "board", "text": "Click the dot at 2400 to remove it. Look at the mean and the median before and after.", "when": "n = 6", "explain": "With 7 prices the mean is about 834 and the median 580. With the 2400 gone the mean is about 573 and the median 570. The mean moved a lot; the median hardly at all."}
```

## Investigate: which average and how collected

```step
stage: "investigate"
insight: "A mean is pulled by outliers; a claim about an average needs both which average it is and how the data was collected."
tasks:
  - {"check": {"type": "number", "q": "What is the median of the 7 prices (in thousands of dollars)?", "answer": 580, "tolerance": 0, "explain": "Ordered: 520, 540, 560, 580, 600, 640, 2400. The middle (4th) is 580."}}
  - {"check": {"type": "question", "q": "A headline says \"The average Australian teenager spends 6 hours a day on screens.\" Which question should you ask FIRST?", "options": ["How was it measured and who was asked?", "Is 6 a nice number?", "What colour is the report?", "Is it more than 5?"], "answer": 0, "feedback": [null, "Nice numbers don't make it true.", "Irrelevant.", "The size matters less than where it came from."], "explain": "Ask how the data was collected (self-report or app data) and from whom, then which average was used."}, "smaller": {"check": {"type": "question", "q": "Can an outlier pull the mean up a lot?", "options": ["Yes", "No"], "answer": 0, "feedback": [null, "One very large value raises the sum, and so the mean."], "explain": "Yes: one huge value adds a lot to the sum."}}}
  - {"check": {"type": "bug", "code": "working.txt#lena", "text": "Lena reads the house prices. Click the line where she goes wrong.", "answer": 2, "fault": "logic", "misconception": "mean-always-best", "explain": "Line 2: with one sale far above the others, the mean (about 834) is higher than six of the seven sales, so it is not typical. The median (580) is."}}
```

### The median

```worked
\text{mean} = \tfrac{5840}{7} \approx 834 :: Add the prices and divide by 7.
\text{median} = 580 :: The middle of the ordered prices.
\text{mean without } 2400 = \tfrac{3440}{6} \approx 573 :: Remove the outlier and the mean falls.
```

### Question the claim

### Find the mistake

## Modify: try other claims

```step
stage: "modify"
insight: "Judging other claims by their average and their collection."
tasks:
  - {"check": {"type": "question", "q": "A company says \"the average salary here is $95 000.\" Ten staff earn $50 000 and the owner earns $500 000. The mean is about $91 000 and the median $50 000. Which better describes a typical worker?", "options": ["The median", "The mean", "Neither", "They are equal"], "answer": 0, "feedback": [null, "The owner's salary pulls the mean up.", "The median fits the usual staff.", "They aren't equal."], "explain": "The median, $50 000, is what most staff earn."}}
  - {"check": {"type": "question", "q": "A report on screen time says \"according to a daily app diary kept by 40 students\". Which concern fits best?", "options": ["Students may not record accurately and 40 is few", "The diary is too long", "App diaries are always correct", "40 is too many"], "answer": 0, "feedback": [null, "Length isn't the issue.", "Self-reports can be wrong.", "40 is a small sample."], "explain": "Self-recording can be inaccurate, and 40 students may not represent all teenagers."}}
  - {"check": {"type": "question", "q": "When is the mean a good summary?", "options": ["When the data are fairly symmetric with no big outliers", "Always", "Never", "Only for money"], "answer": 0, "feedback": [null, "Outliers can ruin it.", "It works well for symmetric data.", "It is used for many things."], "explain": "For symmetric data without outliers the mean and median are close, and the mean uses every value."}}
```

### Salaries

### Screen time

### When the mean works

## Practise: mean and median claims

```step
stage: "practise"
insight: "Finding means and medians and judging claims, and a review of collection."
tasks:
  - {"check": {"type": "number", "q": "Five phone prices: 400, 420, 450, 480, 1500 (dollars, made up). What is the median?", "answer": 450, "tolerance": 0, "explain": "The middle of five ordered values is the 3rd: 450."}}
  - {"check": {"type": "number", "q": "Same prices: what is the mean?", "answer": 650, "tolerance": 0, "explain": "(400 + 420 + 450 + 480 + 1500) ÷ 5 = 3250 ÷ 5 = 650."}}
  - {"check": {"type": "question", "q": "Review: a phone-in poll gets 3000 replies. What is the main concern?", "options": ["The people chose themselves", "3000 is too small", "Phones are old", "Nothing"], "answer": 0, "feedback": [null, "3000 is a big number.", "Irrelevant.", "Self-selection is the concern."], "explain": "Phone-in samples are self-selected."}}
```

### Median

### Mean

### Review

## Make: a typical house

```step
stage: "make"
insight: "Returning to the houses: the mean without the outlier, to say what a typical house costs, on paper."
check: {"type": "reasoning", "paper": true, "q": "The seven prices (thousands of dollars) are 520, 540, 560, 580, 600, 640 and 2400. Find the mean of the six without the 2400, to 1 decimal place. (The numbers are made up for the task.)", "steps": [["Sum of six: $520+540+560+580+600+640=3440$", "add"], ["Mean: $3440 \\div 6 = 573.3$", "divide by 6"]], "answer": "573.3", "answerLabel": "Mean (thousands of dollars)", "tolerance": 0.1, "feedback": [["834.3", "That includes the 2400."], ["580", "That is the median of all seven."]], "criteria": ["I left out the 2400.", "I divided by 6.", "I said why the median or this mean is more typical."], "explain": "573.3 thousand dollars, close to the median of 580. The one sale of 2400 is the outlier."}
```

Write one sentence a news report could use to describe house prices honestly.

**Also used in**

- **Wages and income.** Reports give the median wage because a few very high earners lift the mean.
- **Waiting times.** A few very long waits raise the mean, so hospitals report medians.
- **Next lesson.** Two samples from the same school can give two answers.
