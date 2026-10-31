---
title: "Hex: binary in fours"
subtitle: "Data representation · Binary numbers · Lesson 6.5"
---

# Hex: binary in fours

**Name:** {{field-24}} **Date:** {{field-15}} **Class:** {{field-15}}

> **Key question:** Web colours look like #FF8800 and error codes like 0x1F. Why do programmers write numbers with letters in them?


:::teacher-note

**In one sentence:** Students group binary cards in fours to read and write hex, see that one hex digit is exactly four bits and a byte is two hex digits, read web colours, and meet hex as a public rule (AC9TDI8K04 node 1, binary representation of integers, written short). Optional; Encoding is not encryption (Capture the flag) decodes hex and is the natural place to point students who skipped it.

**Students should be able to say:** I can turn four bits into one hex digit, and back. I can write a byte as two hex digits. I can read a web colour like

**Width:** the unmarked parts are the floor every student does (predict, run, investigate and make). Typical adds the modify practice; wider adds the real-world contexts. They add contexts, not difficulty. Students work in the online tutorial alongside this sheet.

:::


## Predict


:::keep-together

**In the web colour #FF8800, each pair of characters is one number from 0 to 255. What number is FF?**

☐ 1515

☐ 255

☐ It isn't a number: F is a letter

☐ 30

My prediction, and why:

{{lines-3}}

:::


:::teacher-note

**What happens:** 255. Each F is four bits all on (1111, which is 15), so FF is eight bits all on: 11111111, 255.

:::


## Run

Try it on the board in the tutorial. Was your prediction right? What was different?

{{lines-2}}

## Worked example: four bits, one digit


:::keep-together

### A byte, two digits

1. $0\text{–}9,\ A\text{–}F$ — Sixteen digits: A is 10, B 11, C 12, D 13, E 14, F 15.
2. $0000 \text{ to } 1111$ — Four bits make 16 patterns, 0 to 15: exactly one hex digit.
3. $1010\ 0011 \to A\ 3$ — Split a byte into two groups of four and write each as one digit: A3.
4. $A3 = 10 \times 16 + 3 = 163$ — The left digit counts sixteens, the right digit ones.
5. $\text{why bother?}$ — Two hex digits always make one byte, so hex is binary made short, and you can still see the bits.

Now read hex B.

**Hex digits go 0 to 9, then A, B, C, D, E, F for 10 to 15. What number is hex B?**

Answer: {{field-15}}

:::


:::teacher-note

**Answer:** 11

A is 10, so B is 11.

:::


:::keep-together

### Find the mistake

**Sam reads a hex number. Click the line where it first goes wrong.**

```
 1  Sam reads the hex number 1F.
 2  1 is 1, and F is 15.
 3  Put them side by side: 1F is 115.
 4  So 1F needs three decimal digits.
```

Line: {{field-15}}

Why is it wrong?

{{lines-2}}

:::


:::teacher-note

**Answer:** line 3

Line 3: in hex, the left digit counts sixteens, not tens. 1F is 1 × 16 + 15 = 31, which is 0001 1111 in binary.

:::


:::keep-together

### Byte to hex

**Write the byte 0011 1100 in hex.**

☐ 60

☐ 312

☐ C3

☐ 3C

:::


:::teacher-note

**Answer:** 3C

0011 is 3 and 1100 is 12, written C: 3C.

:::


:::typical

## Vary: make the hex


**0F.** 

**80.** 

**A3.** 

Work in the tutorial. Plan first: what will you change, and how will you test it?

{{box-4}}

:::


## Hex in the wild


:::keep-together

### A web colour

**In #FF8800, red is FF, green is 88 and blue is 00. What number is the green, 88?**

Answer: {{field-15}}

:::


:::teacher-note

**Answer:** 136

8 × 16 + 8 = 136. So #FF8800 is red 255, green 136, blue 0: orange.

:::


:::keep-together

### Hidden?

**A message in a file reads 6869. It's hex. Is it hidden from someone who copies the file?**

☐ No: hex is a public rule, so anyone can turn it back (68 is h, 69 is i)

☐ Yes: without a key nobody can read it

☐ Only from people who don't know binary

☐ Yes, unless it's longer

:::


:::teacher-note

**Answer:** No: hex is a public rule, so anyone can turn it back (68 is h, 69 is i)

Hex is an encoding, not encryption. The Capture the flag course starts here.

:::


:::keep-together

### Review: binary

**Review: what number is the binary 1011?**

Answer: {{field-15}}

:::


:::teacher-note

**Answer:** 11

8 + 2 + 1 = 11, which is B in hex.

:::


## Make: the badge colour

Then: write your favourite colour as three numbers from 0 to 255, then as hex.

Work in the tutorial. Plan first: what will you change, and how will you test it?

{{box-4}}

## Exit ticket

:::keep-together

**Write 1010 1111 in hex, and say what number it is.**

{{lines-3}}

:::


:::teacher-note

**Answer:** AF: A is 10, F is 15, so 10 × 16 + 15 = 175.

:::

