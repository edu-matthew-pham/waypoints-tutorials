---
order: 4
unit: participation
title: Formal and active citizenship
node: AC9HC7K02 n4
assumes: [AC9HC7K02 n3]
summary: "Formal citizenship is a person's legal membership of a nation, carrying legal rights (such as an Australian passport and standing for parliament) and obligations (such as obeying the law, compulsory voting, and jury service). Active citizenship is getting involved in the community and democratic life. Historically, not all people in Australia had equal access to citizenship rights — in particular, First Nations Australians were excluded from the federal voting roll until the Commonwealth Electoral Act was changed in 1962."
language: maths
hook: "In a made-up example, two people are both legal Australian citizens. Orla only ever thinks about it when she renews her passport. Dev votes carefully, volunteers at the local bushfire brigade, and helps run a town youth group. What is the difference between the two?"
---
The word **citizenship** is used in two connected ways in Civics:

1. **Formal citizenship:** your **legal status** as an official member of a country (under the *Australian Citizenship Act*). It brings legal **rights and privileges** — such as the right to vote in elections and referendums, apply for an Australian passport, stand for parliament, and return to Australia at any time — and legal **responsibilities** — such as obeying Australia's laws, enrolling and voting in federal and state elections, and serving on a jury if called.
2. **Active citizenship:** how people **participate in and contribute to** their community and democracy — such as staying informed, volunteering, joining community groups, speaking up on public issues, and working with others to improve society.

Access to the legal rights of citizenship in Australia has not always been equal for everyone. When the Commonwealth was formed in 1901, many people — particularly **First Nations Australians** — were excluded by law from federal voting rights and full citizenship rights, and generations of active citizenship and advocacy went into changing those laws.

## Predict: legal status vs active contribution

```step
stage: predict
insight: "Committing first separates formal legal membership from active participation in civic life."
check:
  type: predict
  q: "What is the main difference between *formal citizenship* and *active citizenship*?"
  options:
    - "Formal citizenship is a person's legal status as a member of the nation with legal rights and duties; active citizenship is taking part to contribute to the community and democracy"
    - "Formal citizenship only applies at federal elections; active citizenship only applies at local council elections"
    - "Formal citizenship and active citizenship mean the exact same thing: anyone with a passport is automatically an active citizen"
    - "Active citizenship is only for people who are not legal citizens"
  actual: "Formal citizenship is legal membership of the nation; active citizenship is how people engage and participate in civic and community life."
```

## Try: sort formal citizenship and active citizenship

```step
stage: run
insight: "Sorting legal rights and duties from everyday civic engagement makes the two categories clear."
check:
  type: sort
  q: "Sort each item into whether it describes a feature of *Formal citizenship* (legal status, rights and obligations) or an example of *Active citizenship* (engaged community and democratic participation)."
  options: ["Formal citizenship", "Active citizenship"]
  items:
    - ["Holding legal status as an Australian citizen by birth, descent or conferral (naturalisation)", "Formal citizenship", "This is the legal definition of formal citizenship."]
    - ["Having the legal right to apply for an Australian passport and re-enter Australia freely", "Formal citizenship", "A passport is a legal right attached to formal citizenship."]
    - ["The legal obligation for adult citizens to enrol and vote at federal elections and serve on a jury if called", "Formal citizenship", "Voting and jury service are legal responsibilities of formal adult citizens."]
    - ["Volunteering on weekends to replant riverbanks with a local landcare group", "Active citizenship", "Volunteering to improve the local community is active citizenship."]
    - ["Organising a community forum and petition to improve public transport in your suburb", "Active citizenship", "Working with others to solve a public problem is active citizenship."]
    - ["Staying informed about public issues and contributing to a parliamentary inquiry", "Active citizenship", "Taking an informed, constructive part in democratic processes is active citizenship."]
```

Notice how the two connect: **formal citizenship** gives you legal standing and the ballot, while **active citizenship** is what brings a democracy and community to life every day.

## Worked example: inclusion, exclusion and changing the law

```step
stage: investigate
insight: "Examining who held formal voting rights over time shows that citizenship rights were not always equal in Australia, and catches Nib's two mistakes."
tasks:
  - check:
      type: question
      q: "Have all people in Australia always had equal access to the formal rights of citizenship, such as voting in federal elections?"
      options:
        - "No: for decades after Federation in 1901, Commonwealth law excluded most First Nations Australians from enrolling and voting in federal elections until the Commonwealth Electoral Act was amended in 1962"
        - "Yes: every adult in Australia has had the exact same voting rights since 1 January 1901"
        - "No: First Nations Australians gained the right to vote in federal elections at the 1967 referendum, not in 1962"
        - "Yes: the 1901 Constitution gave every person in Australia an automatic passport and vote"
      answer: 0
      feedback:
        - null
        - "While women in Australia gained the federal vote in 1902, most First Nations Australians were legally excluded from the federal franchise until 1962."
        - "That is a very common mix-up: the right to vote in federal elections was legislated in 1962 (Commonwealth Electoral Act), whereas the 1967 referendum changed two sections of the Constitution (s 51(xxvi) and s 127)."
        - "The 1901 Constitution did not define Australian citizenship or guarantee universal voting rights for First Nations Peoples."
      explain: "Under the Commonwealth Franchise Act 1902, Aboriginal and Torres Strait Islander peoples were barred from enrolling to vote in federal elections (unless already entitled under state law before 1902, with a partial exemption for defence service in 1949) until the Commonwealth Electoral Act 1962 guaranteed the right to enrol and vote."
  - check:
      type: bug
      code: "working.txt#nib"
      text: "Nib is summarizing formal and active citizenship in Australia. Click the first line where Nib's thinking goes wrong."
      answer: 3
      fault: logic
      misconception: formal-equals-active-citizenship
      explain: "Line 3 (and Line 4): Nib confuses formal citizenship (legal status, such as holding a passport) with active citizenship (participating in civic life), and then wrongly assumes everyone had equal voting rights from 1901."
    smaller:
      check:
        type: question
        q: "If a person is a legal Australian citizen with a passport, does that automatically mean they are practising active citizenship in their community?"
        options:
          - "No: formal citizenship is their legal status, while active citizenship is choosing to get involved and contribute"
          - "Yes: owning a passport is the only thing active citizenship means"
          - "Yes: because voting is compulsory in Australia, every legal citizen is automatically participating in community life every week"
          - "No: only people who were born overseas can practise active citizenship"
        answer: 0
        explain: "Formal citizenship is the legal status; active citizenship is the active participation."
  - check:
      type: question
      q: "How did active citizenship help change the laws that excluded First Nations Australians from full constitutional and voting rights?"
      options:
        - "Over many decades, First Nations leaders and community organisations used petitions, public meetings, speeches and campaigns to persuade Parliament and Australian voters to change the laws and the Constitution"
        - "The laws changed automatically on a fixed date written into the 1901 Constitution"
        - "Only people who were already on the federal electoral roll were legally allowed to organise petitions or public meetings"
        - "The High Court changed the Constitution by itself in 1967 without a public campaign or referendum"
      answer: 0
      feedback:
        - null
        - "There was no automatic sunset date in the Constitution; change took decades of sustained petitions, advocacy and campaigning."
        - "People who were excluded from formal voting rights still used petitions, associations and public meetings to campaign for those rights."
        - "Only voters at a national referendum can change the text of the Constitution, which followed years of public campaigning."
      explain: "Even when people were excluded from formal voting rights, they used active citizenship — petitions, associations, assemblies and speech — to campaign for equal rights."
```

### Formal status, active participation, and historical change

```worked
\text{Formal citizenship} :: Legal membership of Australia -> Rights (vote, passport, stand for parliament) + Duties (obey laws, compulsory voting, jury service).
\text{Active citizenship} :: Engaged participation -> Volunteering, community leadership, petitions, campaigns, informed debate.
\text{Historical exclusion} :: From 1901/1902, federal law excluded most First Nations Australians from the federal vote until 1962 (with compulsory enrolment extended in 1984), and s 127 of the Constitution excluded them from the national census count until the 1967 referendum.
```

Now: have citizenship rights always been equal in Australia, where did Nib go wrong, and how did active citizenship drive change?

### Find Nib's mistake

### How active citizenship drove change

## Vary: rights, responsibilities and active citizenship

```step
stage: modify
insight: "Distinguishing the legal rights and responsibilities of formal citizenship from active community participation."
check:
  type: sort
  q: "Sort each example into whether it is a *Legal right of citizenship*, a *Legal responsibility of citizenship*, or *Voluntary active citizenship*."
  options: ["Legal right", "Legal responsibility", "Voluntary active citizenship"]
  items:
    - ["Voting in federal and state elections and referendums (both a right and a legal duty for adults)", "Legal responsibility", "In Australia, enrolling and voting at elections is a legal obligation for citizens aged 18 and over, as well as a democratic right."]
    - ["Serving on a jury in court when summoned", "Legal responsibility", "Jury service is a legal duty of citizens on the electoral roll."]
    - ["Standing for election to the Australian Parliament (subject to s 44 of the Constitution)", "Legal right", "Australian citizens have the legal right to stand for Parliament."]
    - ["Mentoring younger students and helping organise a town clean-up day", "Voluntary active citizenship", "Volunteering to strengthen your community is active citizenship beyond legal obligations."]
```

## Practise: explain formal and active citizenship

```step
stage: practise
insight: "Putting both parts of the endpoint together in a reasoned explanation."
check:
  type: reasoning
  q: "Explain the difference between formal citizenship and active citizenship, and explain one way that access to citizenship rights in Australia has changed over time."
  paper: true
  models:
    - title: "A strong answer"
      text: "Formal citizenship is a person's legal status as a member of Australia, which carries legal rights like voting and getting a passport, and duties like obeying the law and jury service. Active citizenship is how people get involved to help their community and democracy, such as volunteering, petitioning or campaigning. Historically, not everyone had equal formal rights: most First Nations Australians were excluded from voting in federal elections until the law was changed in 1962."
    - title: "A different answer that also works"
      text: "Formal citizenship is the legal side of being a citizen (status, rights and legal obligations), whereas active citizenship is participating in public and community life to make a positive difference. Even when First Nations Australians were excluded by law from full formal citizenship rights after 1901, First Nations campaigners practised active citizenship through petitions and public advocacy to win the federal vote in 1962 and constitutional change in the 1967 referendum."
  criteria:
    - "I defined formal citizenship (legal status, rights and responsibilities)."
    - "I defined active citizenship (engaged participation in the community and democracy) and distinguished it from formal citizenship."
    - "I identified that not all people in Australia have always had equal access to citizenship rights, with reference to First Nations Australians."
```

## Make: in your own book

```step
stage: make
insight: "Writing the distinction between formal and active citizenship and the historical change in your own book completes the course."
check:
  type: reflect
  text: "In my own book I explained the difference between formal citizenship and active citizenship with an example of each, and noted how First Nations Australians were historically excluded from full citizenship rights before changes such as the 1962 voting reform and 1967 referendum. A partner read it and agreed."
```

Write it in your own book or document, not on this page. Your partner or teacher reads it.

## Typical: how someone becomes a formal Australian citizen

```step
stage: make
tier: typical
insight: "Australian law sets out how formal citizenship is acquired — by birth (to an Australian citizen or permanent resident parent), by descent, or by conferral (naturalisation) after meeting legal requirements and making the pledge."
check:
  type: question
  q: "When a permanent resident becomes an Australian citizen by conferral (naturalisation) at a citizenship ceremony, what pledge do they make?"
  options:
    - "They pledge loyalty to Australia and its people, whose democratic beliefs they share, whose rights and liberties they respect, and whose laws they will uphold and obey"
    - "They pledge to give up their freedom of speech and never criticise government policies"
    - "They pledge to vote for whichever party is currently in government"
    - "They pledge to follow one official national religion chosen by Parliament"
  answer: 0
  feedback:
    - null
    - "The pledge explicitly respects Australia's democratic beliefs, rights and liberties, which include freedom of speech."
    - "Citizens are free to vote for any candidate or party by secret ballot."
    - "Australia has freedom of religion (and no official national religion under s 116 of the Constitution)."
  explain: "The Australian Citizenship Pledge links formal legal citizenship directly to democratic beliefs, rights and liberties, and upholding the law."
```

## Wider: the 1967 referendum and constitutional change

```step
stage: make
tier: wider
insight: "In 1967, after a decade-long petition and public campaign, more than 90% of Australian voters approved a referendum changing two sections of the Constitution relating to First Nations Australians."
check:
  type: question
  q: "What did the 1967 referendum change in the Australian Constitution?"
  options:
    - "It removed the words in section 51(xxvi) that prevented the Commonwealth Parliament from making laws for Aboriginal people in the states, and repealed section 127 so Aboriginal people were counted in the national census"
    - "It gave First Nations Australians the right to vote in federal elections for the first time (which actually happened in 1962)"
    - "It added a complete Bill of Rights to the Australian Constitution"
    - "It allowed the Prime Minister to change the Constitution without a vote of the people"
  answer: 0
  feedback:
    - null
    - "Federal voting rights for First Nations Australians were legislated five years earlier in the Commonwealth Electoral Act 1962; the 1967 referendum changed sections 51(xxvi) and 127 of the Constitution."
    - "The 1967 referendum amended section 51(xxvi) and repealed section 127; it did not add a Bill of Rights."
    - "Only voters at a referendum under section 128 can change the Constitution."
  explain: "Note the common mix-up: the right to vote in federal elections was legislated in 1962 (Commonwealth Electoral Act), while the 1967 referendum changed sections 51(xxvi) and 127 of the Constitution."
```

Typical and wider steps are extras on the same idea. You do not need them to finish the lesson.
