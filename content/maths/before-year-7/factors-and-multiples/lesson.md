---
title: "Factors and multiples"
summary: "Factors are numbers that divide into another number exactly, and multiples are what you get by counting in steps of a number. Factors are small and multiples are big, so they are not the same thing."
language: maths
shape: primer
unit: tools
order: 7
node: [AC9M5N02 n1, AC9M5N02 n2]
hook: "Is 24 a factor of 12 or a multiple of 12? It is one of them, and mixing them up is easy."
---
A **factor** of a number divides into it with nothing left over. A **multiple** of a number is what you get when you count in jumps of that number: 12, 24, 36, and so on.

## Think first

```step
stage: predict
insight: "Students often mix up factor and multiple. Factors of a number are no bigger than it, and multiples are no smaller."
check:
  type: predict
  q: "Which of these is a factor of 12?"
  options: ["4","24","36","1.2"]
  actual: "4. 12 ÷ 4 = 3 with nothing left over. 24 and 36 are multiples of 12, so they are not factors."
```

Lock in a guess before you read on.

## Try it

```step
stage: run
insight: "Splitting 24 into factor pairs shows that the factors are smaller numbers that multiply to make it."
try: { playground: board, starter: "boards.yml#tree", height: 420 }
check: { type: board, text: "Split 24 until every branch ends in a prime number.", when: "c = 1" }
hint: ["Click 24, then pick a pair such as 4 × 6.","Keep splitting any number that is not prime."]
```

Click a number and choose a pair of factors that multiply to make it. Each pair is two factors of 24.

## The idea

```step
stage: investigate
insight: "Factors divide into the number and are smaller. Multiples are the number times 1, 2, 3 and so on, and are bigger."
tasks:
  - insight: "Factors are no bigger than the number."
    check:
      type: sort
      q: "Is it a factor of 12 or a multiple of 12?"
      options: ["Factor of 12","Multiple of 12"]
      items:
        - ["3","Factor of 12"]
        - ["6","Factor of 12"]
        - ["24","Multiple of 12","12 × 2 = 24."]
        - ["36","Multiple of 12"]
        - ["2","Factor of 12"]
        - ["48","Multiple of 12"]
  - insight: "Pairs multiply to the number."
    check:
      type: answer
      q: "How many factor pairs does 20 have? (1 × 20, 2 × 10, 4 × 5, …)"
      answer: "3"
      feedback:
        - ["2","There is one more pair, 4 × 5."]
        - ["6","That counts each factor once, not each pair. A pair is two numbers that multiply to 20."]
      explain: "The pairs are 1 × 20, 2 × 10 and 4 × 5: 3 pairs, 6 factors."
  - insight: "Count in jumps."
    check:
      type: question
      q: "Is 15 a multiple of 4?"
      options: ["No, because 4 does not make 15 when you count in 4s","Yes, because 15 is bigger than 4","Yes, because 4 and 15 are both in the 4 times table","No, because 15 is odd and 4 is even"]
      answer: 0
      feedback: [null,"Being bigger is not enough. Count in 4s: 4, 8, 12, 16.","15 is not in the 4 times table: 12 and 16 are.","The reason is that you skip over 15 when counting in 4s."]
      explain: "Counting in 4s goes 4, 8, 12, 16, so 15 is skipped."
```

**Factors** of 12 divide into 12 exactly: 1, 2, 3, 4, 6, 12. **Multiples** of 12 come from counting in 12s: 12, 24, 36, 48. A number is a factor and a multiple of itself.

### Factor or multiple?

### Factor pairs

### Counting in jumps

## Check

```step
stage: practise
insight: "Using factors and multiples on new numbers."
tasks:
  - check:
      type: question
      q: "Which number is a multiple of 7?"
      options: ["35","17","27","47"]
      answer: 0
      feedback: [null,"7 × 2 = 14 and 7 × 3 = 21. Keep counting in 7s.","Count in 7s: 21, 28, 35. 27 is not there.","Count in 7s: 42, 49. 47 is skipped."]
      explain: "7 × 5 = 35."
  - check:
      type: answer
      q: "How many multiples of 4 are less than 20?"
      answer: "4"
      feedback:
        - ["5","20 is not less than 20. Count 4, 8, 12, 16."]
        - ["3","Count 4, 8, 12, 16: that is 4."]
      explain: "4, 8, 12 and 16."
```

### Multiples of 7

### Multiples of 4

## Apply

```step
stage: make
insight: "Explaining the difference in own words."
check:
  type: reasoning
  q: "Explain the difference between a factor of 10 and a multiple of 10. Give one example of each."
  placeholder: "A factor of 10 is … A multiple of 10 is …"
  models:
    - title: "Divide or count"
      text: "A factor of 10 divides into 10 exactly, like 5. A multiple of 10 is what you get by counting in 10s, like 30."
  criteria:
    - "I said a factor divides into the number."
    - "I said a multiple comes from counting in jumps of the number, and gave an example of each."
```

```teacher
summary: "Students tell factors from multiples and find factor pairs, and drop the idea that the two words mean the same."
time: 17
timing: "Think first 3 min · Try 4 min · The idea 5 min · Check 3 min · Apply 2 min"
goals:
  - "I can say what a factor is."
  - "I can say what a multiple is."
  - "I can find factor pairs of a number."
before: |
  The one idea: factors go into a number and multiples come out of it. The common mistake is mixing the two words (24 is a factor of 12). The Think first question and the sort meet it.
  
  The board is the factor tree from the Year 7 lessons *Powers*, *Prime factors* and *HCF and LCM*. Here it is used only to find factor pairs.
  
  Arrays of counters or grid paper help show pairs.

  Not yet tried with a class.
running:
  - "Think first: ask students to say what \"times table\" has 12."
  - "Try: ask which pairs of factors multiply to 24."
  - "Apply: look for \"divides into\" and \"counting in\"."
struggle: "The words are easily swapped. A sentence helps: \"factors fit into, multiples are made from\"."
stuck:
  - see: "A student says 24 is a factor of 12."
    ask: "Does 24 divide into 12?"
    fix: "No. 24 is 12 × 2, so it is a multiple."
  - see: "A student lists only 1 and 20 as factors of 20."
    ask: "What else multiplies to 20?"
    fix: "2 × 10 and 4 × 5."
exit:
  q: "Write one factor of 18 and one multiple of 18."
  a: "For example 6 and 36."
leads: |
  Leads into Year 7 Number: *Powers*, *Prime factors* and *HCF and LCM*.
```
