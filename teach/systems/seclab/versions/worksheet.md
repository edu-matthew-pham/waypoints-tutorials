---
title: "Old versions and plain text"
subtitle: "Security lab: audit a Pi with Kali · Audit · Lesson 3"
---

# Old versions and plain text

**Name:** {{field-24}} **Date:** {{field-15}} **Class:** {{field-15}}

> **Key question:** Two web servers both show port 80 open. Which one should worry you?


:::teacher-note

**In one sentence:** A scan can also ask each service for its version. Old versions have known problems that have since been fixed, so an old version is a finding. Some services are risky however new they are: telnet sends everything, including passwords, as readable text.

**Students should be able to say:** I can read service versions from a scan. I can say why an old version is a finding. I can say why some services are risky at any version.

**Width:** the unmarked parts are the floor every student does (predict, run, investigate and make). Typical adds the modify practice; wider adds the real-world contexts. They add contexts, not difficulty. Students work in the online tutorial alongside this sheet.

:::


## Predict


:::keep-together

**One server says Apache 2.4.18 and another says Apache 2.4.62, both on port 80. Which is more likely to have known problems?**

☐ Both are the same

☐ Neither, a version is just a name

☐ 2.4.62: newer programs have more bugs

☐ 2.4.18: the older version is missing years of fixes

My prediction, and why:

{{lines-3}}

:::


:::teacher-note

**What happens:** 2.4.18. Each newer version fixes problems found since. An old version is a finding, because the problems it has are public.

:::


## Run

Try it on the board in the tutorial. Was your prediction right? What was different?

{{lines-2}}

## Worked example: Reading versions against the sheet


:::keep-together

### Reading versions against the sheet

1. $\text{nmap -sV target}$ — scan and ask each service for its version.
2. $\text{cat advisories.txt}$ — the lab's offline list of old versions.
3. $\text{OpenSSH 7.2p2}$ — below 8.0 on the sheet: a finding.
4. $\text{telnet}$ — a finding whatever its version: it is not encrypted.

Now try it yourself.

**The lab has no internet. Where do you check whether OpenSSH 7.2p2 is old?**

☐ Guess

☐ The lab's advisory sheet (cat advisories.txt)

☐ Ask the target

☐ A search engine

:::


:::teacher-note

**Answer:** The lab's advisory sheet (cat advisories.txt)

The advisory sheet is an offline list your teacher made. Real testers look versions up, with the internet, in a database of known problems.

:::


:::keep-together

### Find the mistake

**Sam reads a version. Click the line where it first goes wrong.**

```
 1  Sam scans with -sV and reads: OpenSSH 7.2p2.
 2  Sam says the version is just a number and it cannot matter.
 3  So Sam leaves it as it is.
 4  Sam writes 'no findings' in the report.
```

Line: {{field-15}}

Why is it wrong?

{{lines-2}}

:::


:::teacher-note

**Answer:** line 2

Line 2: the version says which fixes are present. The advisory sheet says 7.2 is below 8.0, so it is a finding.

:::


:::keep-together

### Plain text

**Telnet's version is new. Why is it still a finding?**

☐ It is not on the sheet

☐ It is too fast

☐ It uses too much memory

☐ It sends everything, including passwords, as readable text

:::


:::teacher-note

**Answer:** It sends everything, including passwords, as readable text

Anyone watching the network can read a telnet session. ssh does the same job, encrypted.

:::


:::typical

## Vary: change one thing


**The sheet.** 

**One service.** 

**Evidence.** 

Work in the tutorial. Plan first: what will you change, and how will you test it?

{{box-4}}

:::


## Practise


:::keep-together

### Compare

**The advisory sheet says 'below 3.0: old' for vsftpd. The scan shows vsftpd 2.0.8. What is it?**

☐ A finding: it is old

☐ Unknown

☐ Fine

☐ Too new

:::


:::teacher-note

**Answer:** A finding: it is old

Below the listed version means old.

:::


:::keep-together

### Plain text

**Why can't you fix an insecure protocol like telnet just by updating it?**

☐ It is not installed

☐ Updates are not available

☐ The problem is how it works: everything is readable text

☐ It is too small

:::


:::teacher-note

**Answer:** The problem is how it works: everything is readable text

Replace it with ssh. No version of telnet encrypts.

:::


:::keep-together

### Review: filtered

**Review: a port shows 'filtered'. What does that mean?**

☐ ssh is off

☐ The service is old

☐ The port is open

☐ A firewall is blocking the answer

:::


:::teacher-note

**Answer:** A firewall is blocking the answer

Filtered: the knock gets no answer.

:::


## Make: write the findings

Then: cat findings.txt to check it. Next: what an attack on the login looks like in the log.

Work in the tutorial. Plan first: what will you change, and how will you test it?

{{box-4}}

## Exit ticket

:::keep-together

**Why is an old version a finding?**

{{lines-3}}

:::


:::teacher-note

**Answer:** It is missing fixes for problems that are public by now.

:::

