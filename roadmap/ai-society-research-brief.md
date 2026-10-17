# Research brief: *Who Does AI Affect?* (18 Oct 2026)

From `roadmap/ai-society-research-handoff.md`. Research only: no lessons designed, no course files. For Matthew to review; course design starts in a new chat from the approved brief.

Every source below was opened on 18 Oct 2026 unless marked **unverified**. "Checked (abstract)" means only the abstract or a summary page was read, not the full paper. Quotes are short and exact; spot-check any quote before it goes on a student slide (pages were read through a fetch tool that can trim text).

## Summary
- **Curriculum fit is indirect.** No Years 7–10 Digital Technologies content description mentions AI, ethics, bias or sustainability. The hooks are "possible future impact" (AC9TDI8P10, AC9TDI10P10) and privacy (P14, already taught in Cyber safety). The strong official anchor is ACARA's **AI curriculum connection** page, which names bias, energy, water, deepfakes and discrimination in recruitment. AI4K12 Big Idea 5 and UNESCO's framework cover topics 1–3 well, topic 4 partly and topic 5 hardly at all.
- **Sources are good for all five topics.** Strongest: the meta-analysis on deepfake detection (topic 2), the Services Australia promotion round and Ofqual 2020 (topic 3), the IEA reports plus a clearly dated range (topic 4), TIME 2023 with Sama's rebuttal (topic 5).
- **Existing resources:** Day of AI (CC BY-NC-SA 4.0) and the Digital Technologies Hub (CC BY 4.0) can be adapted. Experience AI and Code.org videos are no-derivatives (use as-is). Common Sense and Elements of AI are link only. **Gaps:** a hiring case, a lesson centred on data labellers, and reading a real consent screen.
- **Thin parts:** ACARA elaborations (unreachable); full slides behind logins (Day of AI, Common Sense, Experience AI); eSafety pages (blocked); peer-reviewed pay data for AI labelling.

---

## Part 1. Curriculum fit

### ACARA v9 Digital Technologies content descriptions
Source: ACARA, *Years 7–10 achievement standards and aligned content descriptions* (V 9.0), https://www.australiancurriculum.edu.au/media/7736/v9-years-7-10-australian-curriculum-digital-tech.pdf, checked 18 Oct 2026. The year-level pages, the curriculum download and the elaborations were unreachable (pages return an empty shell; the PDF download is blocked by robots.txt). **Elaborations not checked: check by hand.**

| Code | Wording | Fit |
|---|---|---|
| AC9TDI8P10 | evaluate existing and student solutions against the design criteria, user stories and possible future impact | Main hook for all topics (judge an AI system's impact) |
| AC9TDI10P10 | evaluate existing and student solutions against the design criteria, user stories, possible future impact and opportunities for enterprise | Same, Years 9–10 (wider steps) |
| AC9TDI8P04 | define and decompose real-world problems with design criteria and by creating user stories | Weak: "who is the user, who else is affected" |
| AC9TDI10P04 | define and decompose real-world problems with design criteria and by interviewing stakeholders to create user stories | Stakeholders: fits "who does it affect" |
| AC9TDI8P12 | select and use a range of digital tools efficiently and responsibly to share content online, and plan and manage individual and collaborative agile projects | "responsibly": weak hook for generated media |
| AC9TDI8P14 | investigate and manage the digital footprint existing systems and student solutions collect and assess if the data is essential to their purpose | Topic 1. **Already taught** in Cyber safety › Your digital footprint |
| AC9TDI10P14 | apply the Australian Privacy Principles to critique and manage the digital footprint that existing systems and student solutions collect | Topic 1 wider. **Already taught** in Cyber safety › Australian Privacy Principles |
| AC9TDI8P13, AC9TDI10P13 | MFA, phishing; threat models | Not this course (Cyber safety) |
| AC9TDI8K02, AC9TDI10K01 | data transmitted and secured; hardware and software secure access | Not this course |

AC9TDI8P13 and P14 wording came from a PDF extraction that split lines; one joining word and one comma are inferred. Confirm on the site.

### ACARA's AI curriculum connection (the strongest official anchor)
https://www.australiancurriculum.edu.au/curriculum-information/understand-this-curriculum-connection/artificial-intelligence (checked; no page date). Three aspects: "Understanding how AI works", "Types of AI", "Responsible use and application of AI". It names training-data bias, energy ("AI training models consume vast quantities of energy"), potable water for servers, deepfakes and image-based abuse, discrimination in recruitment, policing and healthcare, job displacement, dark patterns and profiling, copyright of training data, Indigenous data sovereignty and human oversight. It mentions labelling only as a data-quality issue, not as work people do.

General capabilities (checked): **Digital Literacy** › Practising digital safety and wellbeing (manage digital privacy and identity); **Ethical Understanding** › Explore ethical issues, Make and reflect on ethical decisions; **Sustainability** priority: "assess new and emerging technologies from a sustainability perspective". None names AI.

### AI4K12 Big Idea 5: Societal Impact
Big idea page https://ai4k12.org/big-idea-5-societal-impact/ (checked); progression chart https://ai4k12.org/wp-content/uploads/2022/12/AI4K12-Big-Idea-5-Progression-Chart-Working-Draft_v.0.1_12.22.2022.pdf, **still a working draft (v0.1, Dec 2022)**. Grade-band columns for a few items were inferred from flattened PDF text.

| Code | Grades 6–8 | Grades 9–12 |
|---|---|---|
| 5-A-i Disparate impacts | Evaluate how stakeholders' goals and values shape AI design | "Explain how use of AI systems has led to disparate impacts on different groups." |
| 5-A-ii Ethical design criteria | Transparency and explainability | Accountability and respect for privacy |
| 5-B-ii Trust and responsibility | Analyse deepfakes and identify the flaws that reveal them | Critique AI used to surveil or violate privacy; where regulation is appropriate |
| 5-C Economy | Predict how a job might change | Effects on employment |

**Tension to note:** the 6–8 objective asks students to spot deepfake flaws; the research (Part 2, topic 2) shows people detect at about chance and flaw-tips go stale. Design for provenance and checking sources, not spotting glitches.

### UNESCO AI competency framework for students (2024)
UNESCO page https://www.unesco.org/en/articles/ai-competency-framework-students (checked, 8 Aug 2024). UNESDOC record https://unesdoc.unesco.org/ark:/48223/pf0000391105 unreachable; full text read from a mirror (https://raise.mit.edu/wp-content/uploads/2025/04/391105eng.pdf), DOI 10.54675/JKJB9835. Licence **CC BY-SA 3.0 IGO**. About the last 13% was not read.

Four dimensions × three levels (Understand, Apply, Create). At Understand: **Human agency** ("AI is human-led") and **Embodied ethics** (dilemmas, principles such as do no harm, non-discrimination, sustainability, transparency). Mentions consent ("deliberate and informed consent") and carbon emissions; "data workers" only as a life-cycle role; no deepfakes.

### Topic map
| Topic | ACARA content description | ACARA AI connection | AI4K12 BI5 | UNESCO | Fit |
|---|---|---|---|---|---|
| 1. What you give away | P14 (7–8, 9–10), P10 | dark patterns, profiling | 5-B-ii (9–12), 5-A-ii privacy | consent; embodied ethics | **Strong**, but overlaps Cyber safety: link, don't re-teach |
| 2. Generated media | P12 (weak), P10 | deepfakes, image-based abuse | 5-B-ii (6–8) | not named | **Medium** (strong in frameworks, weak in content descriptions) |
| 3. Automated decisions | P10, P04 (stakeholders) | recruitment, policing, healthcare | 5-A-i (both bands) | human agency, non-discrimination | **Strong** |
| 4. Running costs | P10 | energy, potable water | not covered | sustainability, carbon | **Medium** (anchor is the AI connection page and Sustainability priority) |
| 5. Hidden labour | P10 only | labelling as quality, not labour | not covered | "data workers" only | **Weak**: justify through P10 and Ethical Understanding |
| Wider: AI policy | P10 (9–10) | human oversight | 5-B-ii regulation (9–12) | citizenship (Create) | **Medium** |

---

## Part 2. Sources per topic

### 1. What you give away (data, consent screens, training on your chats)
- **OAIC, Australian Community Attitudes to Privacy Survey 2023** (8 Aug 2023): only 21% always or often read privacy policies; 32% feel in control. Australian, recent enough, Year 7 friendly.
- **Obar and Oeldorf-Hirsch (2018), "The biggest lie on the internet"**, *Information, Communication & Society*: 74% of 543 students skipped a fake network's policy; readers spent about 73 seconds on a policy needing about 30 minutes; 98% missed a "gotcha" clause (giving up a first-born child). A great hook. Caveat: US university students. Checked (abstract).
- **OAIC guidance on training generative AI** (21 Oct 2024): quietly updating a privacy policy is generally not enough to start using people's data to train AI. Pair with a company page for the consent screen itself (OpenAI Data Controls FAQ; Anthropic consumer terms update, 28 Aug 2025). These change often: re-check before teaching, and date the screenshot.
- Supporting: Nouwens et al. (CHI 2020) on cookie banners (EU/UK, 2019 data); ACCC Digital Platforms Inquiry (2019) on take-it-or-leave-it clickwrap; FTC staff blog (Feb 2024); ICO statement on Meta pausing training on UK posts (Jun 2024; the later resumption statement is **unverified**).
- **Children's Online Privacy Code** (OAIC page updated 5 Aug 2026): exposure draft 31 Mar 2026, must be registered by 10 Dec 2026; not registered as at 18 Oct 2026. Draft: collect only what is strictly necessary, age-appropriate notices. The OAIC "Short guide" (31 Mar 2026) was co-designed with young people. **Re-check after 10 Dec 2026.**
- Contested: little. Thin: no Australian survey found on young people and chatbot data.

### 2. Spotting generated media
- **Diel et al. (2024), meta-analysis of 56 papers**, *Computers in Human Behavior Reports* 16:100538: pooled human accuracy 55.5% (95% CI 48.9–62.1, which spans chance); images 53%, video 57%, audio 62%; training, feedback or AI help raised it to about 65%. Best single source. Checked (full text via DOAJ).
- **Nightingale and Farid (2022), PNAS**: people sorting real and AI faces averaged 48.2%; with training 59%; AI faces rated slightly more trustworthy. Checked (full text via Europe PMC).
- **C2PA Content Credentials** (c2pa.org; explainer): records where content came from; credentials can be stripped, are optional, and provenance does not show truth. Good for the "what to do instead of spotting glitches" step.
- Supporting: Köbis et al. (2021, iScience): people overrate their own detection, and awareness or money did not help. Mai et al. (2023, PLOS ONE): listeners caught 73% of speech deepfakes. Miller et al. (2023, *Psychological Science*): "AI hyperrealism" in White faces only, a link to bias (**quote not confirmed**). Groh et al. (2022, PNAS): humans and a detector made different mistakes. Blinking cue (Li, Chang and Lyu 2018) then going stale (Lyu, *The Conversation*, 2019): one researcher's account, illustrative only.
- Teacher notes only, not Year 7 student text: eSafety media releases on deepfake image-based abuse in Australian schools (reports more than doubled in 18 months; four in five involved girls; creating such images of under-18s is illegal). **Release dates not on the pages**; probably June 2025 and late 2025.
- Contested: how much training helps (small gains, never reliable); machine detectors are no clear fix; provenance depends on adoption. No systematic study found on how fast tips go stale.

### 3. Automated decisions (who gets the job)
- **Ofqual 2020 A-level grades** (gov.uk, 13 and 17 Aug 2020): a model adjusted teachers' grades, relying more on teacher grades for classes of 15 or fewer; about 39% of grades were lowered (Schools Week, 13 Aug 2020); reversed four days later with an apology. Most relatable to students. Contested: whether private schools gained (FFT Education Datalab calls it a "working hypothesis"; Ofqual later said it found no systematic disadvantage to poorer pupils, **not opened**).
- **Merit Protection Commissioner Annual Report 2021–22** (Oct 2022): a Services Australia promotion round run with AI-assisted and automated tests and no panel; 11 promotions overturned on review (11 of the 12 the MPC overturned across the APS that year). Australian and about jobs. Caveat: the report criticises the process, not the AI part alone.
- **Amazon recruiting tool** (Reuters, Dastin, 10 Oct 2018; read via Euronews's verbatim copy): trained on mostly men's résumés, it penalised the word "women's"; scrapped. Hook only: anonymous sources, recruiters reportedly never relied on it alone.
- Wider (Years 9–10): Obermeyer et al. (2019, *Science*): a health algorithm used cost as a stand-in for illness, so Black patients were sicker at the same score (abstract only). Wilson and Caliskan (2024, AIES): models favoured White-associated names in 85% of simulated résumé rankings (a simulation, not real hiring; abstract only). Robodebt Royal Commission (7 Jul 2023): "a crude and cruel mechanism", automation without AI, so "automated decision" is wider than AI (full report **unverified**; quote from the Minister's release). Gender Shades (2018) for unrepresentative data.

### 4. Running costs (energy, water)
Rule held: dated estimates with ranges, never one number.
- **IEA, *Energy and AI*** (10 Apr 2025): data centres used about 415 TWh in 2024, about 1.5% of world electricity, projected about 945 TWh by 2030; data centres are a smaller share of demand growth than industrial motors, air conditioning or EVs. **IEA, *Key Questions on Energy and AI*** (16 Apr 2026): 485 TWh in 2025 (+17%), about 950 TWh by 2030 (about 3%); AI-focused centres grew 50% in 2025; energy per AI task falls by at least ten times a year. Neither gives AI's share as a number in the text.
- **Per short text prompt, 2025–26 estimates: roughly 0.1–0.5 Wh.** Google (Aug 2025, own measurement, not peer reviewed): median Gemini prompt 0.24 Wh. Epoch AI (Feb 2025, outside estimate): about 0.3 Wh, plausible range 0.1–4 Wh. OpenAI (Altman blog, Jun 2025): 0.34 Wh, no method. The older about 3 Wh (de Vries 2023, via EPRI 2024) assumed older chips and longer answers; now likely too high for short prompts. Long inputs, reasoning models and images cost far more: Luccioni et al. (FAccT 2024): image generation used over 60 times the energy of text generation.
- **Water per prompt: about 0.26 mL to about 50 mL, depending on what is counted.** Google 0.26 mL (on-site cooling only). Li et al., "Making AI Less Thirsty" (CACM 2025): a 500 mL bottle per about 10–50 medium-length GPT-3 responses, including water used at power stations; 7.6–47.5 mL per request by location. Cite the CACM version: the viral 2023 preprint said "20–50 questions" for ChatGPT. Mistral (Jul 2025): 45 mL per response, whole life cycle.
- **Totals still rising:** Google water consumption +34% (2024 to 2025, 2026 report); Microsoft consumption about +22% in FY25 (past years recalculated in its 2026 fact sheet).
- **Australia:** AEMO 2026 ESOO (25 Aug 2026): data centres about 5 TWh in 2025–26 (about 3% of NEM grid supply), forecast 34 TWh by 2035–36 (about 13%). A year earlier AEMO put 34 TWh at 2050: forecasts move fast. Sydney water: Reuters (Sep 2025) reports Sydney Water projections of up to a quarter of available water by 2035; Sydney Water's Paul Higham (AAP, about Jun 2026) said one centre needs about 5 ML a day. The two projections differ (about 135 GL vs about 91 GL a year).
- Contested: company figures can't be independently checked; withdrawal vs consumption and on-site vs power-station water are often mixed up; per-prompt falls while totals rise; small globally, large locally.

### 5. Hidden labour (who labels the data)
- **TIME, Billy Perrigo (18 Jan 2023)**: Sama workers in Nairobi labelled graphic text for ChatGPT's safety filter for about $1.32–$2 an hour take-home; OpenAI paid Sama $12.50 an hour per worker. Teach the rebuttal too: Sama says $1.46–$3.74 after tax, fewer passages per shift, counselling available; Kenya has no single minimum wage (TIME gives $1.52 for a Nairobi receptionist). A good "less than what?" discussion. **Teacher caution:** the material workers labelled was graphic; describe it in general terms only for Year 7.
- **Fairwork Cloudwork Ratings 2025** (Oxford Internet Institute, May 2025): 16 platforms scored out of 10; only 4 met both fair-pay thresholds; Amazon Mechanical Turk 0, Remotasks (Scale AI) 2, Appen 3. Advocacy-research scoring; platforms take part voluntarily.
- Wider: Miceli and Posada (CSCW 2022): 210 instruction documents and 55 interviews in Venezuela and Argentina; clients' instructions shape the labels and precarity makes workers comply (abstract only). ILO (Berg et al., 2018 data from 2017): microtask workers earned US$2–6.50 an hour and spent about 20 minutes of each hour unpaid (dated). Gray and Suri, *Ghost Work* (2019): the term (book itself **unverified**). Kenyan moderator cases against Meta and Sama (content moderation, not AI labelling; unresolved as of Feb 2026).
- Thin: peer-reviewed pay data for AI labelling is sparse and dates quickly; no peer-reviewed study of the Sama contract.

### Wider steps: AI policy at school and in society
- **Australian Framework for Generative AI in Schools**: approved by Education Ministers Oct 2023, in use from Term 1 2024; the **2024 Review** (endorsed June 2025) keeps it and sets annual reviews. A 2025 review was not found (**unverified**).
- **Australia:** National AI Plan (2 Dec 2025) dropped the proposed mandatory guardrails in favour of existing laws plus an AI Safety Institute (read via IAPP; the government page was **unverified**). The Policy for responsible use of AI in government: first new mandatory requirement from 15 Jun 2026 (DTA, 12 Jan 2026).
- **EU AI Act:** AI used to filter job applications is high-risk (Annex III point 4); the Digital Omnibus (Regulation (EU) 2026/1744) delays those duties to 2 Dec 2027. Read on artificialintelligenceact.eu (unofficial mirror): **confirm on EUR-Lex**.
- NYC Local Law 144 (hiring-tool audits): a state audit found 17 likely non-compliant companies where the city found 1 (Dec 2025); Wright et al. (FAccT 2024): 18 of 391 employers posted audits. Shows a rule existing is not the same as it working.

---

## Part 3. Existing resources

Full slides behind free logins (Day of AI, Common Sense, Experience AI) were not opened: quality notes come from public lesson pages.

| Provider | Relevant lessons | Age, format | Licence (checked page) | Can we… |
|---|---|---|---|---|
| **Day of AI** (MIT RAISE) | Grade 7 *Thinking Critically About AI* (incl. "The People Behind the AI": data workers); Grade 8 *AI and Human Oversight* ("The Real Cost of AI", "When Should Humans Override AI?", "Who Gets Left Out By AI?"); *Sounds Like You* (voice cloning); *Truth, Tricks, and AI*; *Student Senate: AI Policy in Schools* | 11–14; 50-min slide lessons, guides; 2026 | **CC BY-NC-SA 4.0** (dayofai.org/terms-of-use). Unit footers also say "All rights reserved": the terms page names the CC licence, so rely on it, but check downloaded decks | **Adapt.** Attribute Day of AI, link licence, say what changed, share alike; remove Day of AI and MIT names and logos |
| **Digital Technologies Hub** (Australian Government) | Data bias in AI (Years 5–8); AI image recognition: limitations and bias (7–8); Systems thinking and AI applications (7–10, Australian cases, stakeholders and impacts); Filter bubbles (9–10) | ACARA-aligned lesson plans; pre-generative AI | **CC BY 4.0** unless indicated | **Adapt.** "Digital Technologies Hub, Australian Government Department of Education, CC BY 4.0" |
| **Code.org** | How AI Works videos ("Ethics & AI: Privacy & the Future of Work", "Equal Access and Algorithmic Bias"); Algorithmic Bias lesson (Twitter image-cropping case); "Our AI Code of Ethics"; "Societal Impact of Generative AI" game | Grades 6–12; short videos, lessons; lengths **unverified** | Curriculum **CC BY-NC-SA 4.0**; videos **CC BY-NC-ND 4.0** (code.org/terms-of-service) | Adapt lesson text; videos as-is (embedded, uncut, credited). Footer now says "CodeAI": attribute with the current name |
| **Experience AI** (Raspberry Pi Foundation, Google DeepMind) | AI Safety 11–14: "Your data and AI", "Media literacy in the age of AI", "Using AI tools responsibly"; Understanding AI: "Bias in, bias out" | 11–14; slides, unplugged; UK | **CC BY-NC-ND 4.0** (read in one educator guide; assumed for the AI Safety unit) | Use as-is or link; **no adaptation** |
| **MIT Media Lab**, Payne (2019) ethics curriculum | Ethical Matrix (who is affected and how), AI Bingo, Algorithms as Opinions | Grades 5–8; unplugged; pre-generative AI | **Conflicting:** PDF says CC BY-NC, project page says CC BY-NC-ND 4.0 | Treat as as-is until resolved |
| **Common Sense Education** | Deepfakes & Consent (Gr 8, 20 min); AI Algorithms: How Well Do They Know You? (Gr 8); Understanding AI Bias; Does Our AI Policy Work for Us? (Gr 9–12) | 20–45-min discussion slides; US-framed, few real cases | Terms forbid modification and redistribution | **Link only** |
| **Elements of AI** (Helsinki) | Ethics chapters | Adult course | All rights reserved | Link only (teacher background) |
| **eSafety Commissioner** | Likely deepfake and image-based abuse resources | — | **Unverified** (site blocked) | Check by hand: likely the most relevant Australian material |
| **Digital Inquiry Group** (Stanford COR) | No AI lesson found; "Intro to Lateral Reading", "Evaluating Videos" as companions | Lessons | Varies per lesson (CC BY 4.0 or CC BY-NC-ND 4.0) | Check each |

**Best existing fit per topic (Year 7):** 1 Experience AI "Your data and AI" (as-is); 2 Day of AI *Sounds Like You* (adapt); 3 Day of AI "When Should Humans Override AI?" (adapt) with the Payne Ethical Matrix as a lens; 4 Day of AI "The Real Cost of AI" (adapt; refresh its figures); 5 Day of AI "The People Behind the AI" (partial); policy: Day of AI *Student Senate* (adapt; re-frame from the US Senate).

**Gaps:** no resource reads a real consent screen; none uses a hiring case; none centres data labellers; none gives dated energy and water ranges like Part 2.

---

## Table of claims

| # | Claim | Source | Quote | Date checked | Status |
|---|---|---|---|---|---|
| 1 | Only about 1 in 5 Australians always or often read privacy policies | OAIC ACAPS 2023, https://www.oaic.gov.au/engage-with-us/research-and-training-resources/research/australian-community-attitudes-to-privacy-survey/australian-community-attitudes-to-privacy-survey-2023 | "Only 21% of Australians always or often read privacy policies" | 18 Oct 2026 | checked |
| 2 | Most students skipped a privacy policy when joining a fake network | Obar & Oeldorf-Hirsch 2018, https://papers.ssrn.com/abstract=2757465 | "Results reveal 74% skipped PP, selecting the 'quick join' clickwrap." | 18 Oct 2026 | checked (abstract) |
| 3 | Quietly updating a privacy policy is generally not enough to train AI on existing data | OAIC GenAI training guidance (21 Oct 2024), https://www.oaic.gov.au/privacy/privacy-guidance-for-organisations-and-government-agencies/guidance-on-privacy-and-developing-and-training-generative-ai-models | "updating a privacy policy or providing notice by themselves will generally not be sufficient" | 18 Oct 2026 | checked |
| 4 | Few cookie banners met EU legal minimums | Nouwens et al. CHI 2020, https://arxiv.org/abs/2001.02479 | "only 11.8% meet the minimal requirements" | 18 Oct 2026 | checked (abstract) |
| 5 | Children's Online Privacy Code must be registered by 10 Dec 2026 | OAIC code page (updated 5 Aug 2026), https://www.oaic.gov.au/privacy/privacy-registers/privacy-codes/childrens-online-privacy-code | "The final Code must be registered by 10 December 2026." | 18 Oct 2026 | checked |
| 6 | Human deepfake detection is not reliably above chance | Diel et al. 2024, https://doaj.org/article/a2803c8a1b9441458f000fd0fe82ea47 | "Overall deepfake detection rates (sensitivity) were not significantly above chance." | 18 Oct 2026 | checked |
| 7 | People sorted real and AI faces at about chance | Nightingale & Farid 2022, https://pmc.ncbi.nlm.nih.gov/articles/PMC8872790/ | "The average accuracy is 48.2%" | 18 Oct 2026 | checked |
| 8 | People overrate their ability to spot deepfakes; awareness did not help | Köbis et al. 2021, https://doi.org/10.1016/j.isci.2021.103364 | "neither raising awareness nor introducing financial incentives improves" | 18 Oct 2026 | checked (abstract) |
| 9 | AI-made White faces were judged human more often than real ones | Miller et al. 2023, https://journals.sagepub.com/doi/10.1177/09567976231207095 | (term) "AI hyperrealism" | 18 Oct 2026 | checked (abstract); exact sentence **unverified** |
| 10 | Provenance doesn't prove content is true | C2PA explainer, https://spec.c2pa.org/specifications/specifications/2.2/explainer/Explainer.html | "provenance information alone cannot tell you whether" content is true | 18 Oct 2026 | checked |
| 11 | Early deepfakes didn't blink; the cue then stopped working | Lyu, The Conversation 2019, https://theconversation.com/detecting-deepfakes-by-looking-closely-reveals-a-way-to-protect-against-them-119218 | "the latest generation of deepfakes has adapted" | 18 Oct 2026 | checked (illustrative, one account) |
| 12 | Reports of altered intimate images of under-18s more than doubled in 18 months (teacher notes only) | eSafety media release (undated page, likely Jun 2025), https://esafety.gov.au/newsroom/media-releases/esafety-urges-schools-to-report-deepfakes-as-numbers-double | (opening of sentence) "reports to eSafety's image-based abuse scheme" | 18 Oct 2026 | checked; release date **unverified** |
| 13 | Ofqual's model leant on teacher grades for small classes | Ofqual guide, 13 Aug 2020, https://www.gov.uk/government/news/guide-to-as-and-a-level-results-for-england-2020 | "we have therefore relied more on the CAGs" | 18 Oct 2026 | checked |
| 14 | Ofqual apologised after reversing the algorithm's grades | Ofqual Chair statement, 17 Aug 2020, https://www.gov.uk/government/news/statement-from-roger-taylor-chair-ofqual | "we are extremely sorry" | 18 Oct 2026 | checked |
| 15 | About 39% of teacher-assessed A-level grades in England were lowered | Schools Week, 13 Aug 2020, https://schoolsweek.co.uk/a-level-results-2020-top-grades-up-by-2-4-percentage-points/ | (figures in a table, no sentence) | 18 Oct 2026 | checked |
| 16 | A Services Australia promotion round used AI-assisted selection; 11 promotions overturned | MPC Annual Report 2021–22, https://www.mpc.gov.au/sites/default/files/2022-10/Annual%20Report%202021-22.pdf | "artificial intelligence–assisted (AI-assisted) and automated selection techniques" | 18 Oct 2026 | checked |
| 17 | Amazon's experimental tool penalised résumés containing "women's" | Reuters (Dastin) 10 Oct 2018, via https://www.euronews.com/2018/10/10/amazon-scraps-secret-ai-recruiting-tool-that-showed-bias-against-women | "It penalized resumes that included the word "women's,"" | 18 Oct 2026 | checked (syndicated copy; anonymous sources) |
| 18 | A health algorithm under-served Black patients by using cost as a stand-in | Obermeyer et al. 2019, https://www.science.org/doi/10.1126/science.aax2342 | "At a given risk score, Black patients are considerably sicker" | 18 Oct 2026 | checked (abstract, Europe PMC) |
| 19 | Language-model résumé screening favoured White-associated names | Wilson & Caliskan 2024, https://ojs.aaai.org/index.php/AIES/article/view/31748 | "significantly favoring White-associated names in 85.1% of cases" | 18 Oct 2026 | checked (abstract) |
| 20 | Robodebt was found unfair and unlawful | Robodebt Royal Commission (7 Jul 2023), quoted in https://ministers.pmc.gov.au/gallagher/2023/final-report-royal-commission-robodebt-scheme | "a crude and cruel mechanism, neither fair nor legal" | 18 Oct 2026 | checked via Minister's release; report itself **unverified** |
| 21 | Data centres used about 1.5% of world electricity in 2024 | IEA Energy and AI (10 Apr 2025), https://www.iea.org/reports/energy-and-ai/executive-summary | "around 1.5% of the world's electricity consumption in 2024" | 18 Oct 2026 | checked |
| 22 | Data-centre electricity projected to roughly double 2025–2030 | IEA Key Questions on Energy and AI (16 Apr 2026), https://www.iea.org/reports/key-questions-on-energy-and-ai/executive-summary | "roughly doubling from 485 TWh in 2025 to 950 TWh in 2030" | 18 Oct 2026 | checked |
| 23 | Median Gemini text prompt: 0.24 Wh (company measurement) | Elsworth et al. (Google), 21 Aug 2025, https://arxiv.org/abs/2508.15734 | "the median Gemini Apps text prompt consumes 0.24 Wh" | 18 Oct 2026 | checked |
| 24 | Typical GPT-4o query about 0.3 Wh (outside estimate, range 0.1–4) | Epoch AI, 7 Feb 2025, https://epoch.ai/gradient-updates/how-much-energy-does-chatgpt-use | "likely consume roughly 0.3 watt-hours" | 18 Oct 2026 | checked |
| 25 | OpenAI says an average query uses 0.34 Wh (no method given) | Altman blog, Jun 2025, https://blog.samaltman.com/the-gentle-singularity | "the average query uses about 0.34 watt-hours" | 18 Oct 2026 | checked (company claim) |
| 26 | Older estimate: about 2.9 Wh per ChatGPT request | EPRI May 2024 (citing de Vries 2023), https://restservice.epri.com/publicdownload/000000003002028905/0/Product | "2.9 watt-hours (Wh) per ChatGPT request" | 18 Oct 2026 | checked (EPRI); de Vries original **unverified** |
| 27 | Image generation uses far more energy than text | Luccioni et al. FAccT 2024, https://arxiv.org/abs/2311.16863 | "over 60 times more energy than text generation" | 18 Oct 2026 | checked |
| 28 | A 500 mL bottle per about 10–50 medium GPT-3 responses (incl. power-station water) | Li et al., CACM 2025, https://arxiv.org/abs/2304.03271 | "a 500ml bottle of water for roughly 10 – 50 medium-length responses" | 18 Oct 2026 | checked |
| 29 | Google's water consumption rose 34% in a year | Google 2026 Environmental Report, https://sustainability.google/files/google-2026-environmental-report.pdf | "increased 34% from 2024 to 2025" | 18 Oct 2026 | checked |
| 30 | Microsoft recalculated past years in its water and energy data | Microsoft 2026 Environmental Data Fact Sheet, https://cdn-dynmedia-1.microsoft.com/is/content/microsoftcorp/microsoft/msc/documents/presentations/CSR/2026-Microsoft-Environmental-Data-Fact-Sheet-PDF.pdf | "Values for all previous fiscal years have been recalculated" | 18 Oct 2026 | checked |
| 31 | NEM data centres forecast to reach 34 TWh by 2035–36 | AEMO 2026 ESOO, 25 Aug 2026, https://www.aemo.com.au/newsroom/media-release/2026-esoo | "to 34 TWh by 2035-36" | 18 Oct 2026 | checked |
| 32 | Data centres could use up to a quarter of Sydney's water by 2035 (one projection) | Reuters, Sep 2025, via https://malaymail.com/news/world/2025/09/15/data-centres-are-booming-in-sydney-but-whos-keeping-track-of-how-much-drinking-water-theyre-using/191230 | "up to a quarter of Sydney's available water by 2035" | 18 Oct 2026 | checked (syndicated copy) |
| 33 | Data centres are a smaller share of demand growth than air conditioning or EVs | IEA Energy and AI, https://www.iea.org/reports/energy-and-ai/executive-summary | "air conditioning in homes and offices, or electric vehicles" | 18 Oct 2026 | checked |
| 34 | Kenyan workers labelling for ChatGPT took home about $1.32–$2 an hour (Sama disputes) | TIME, 18 Jan 2023, https://time.com/6247678/openai-chatgpt-kenya-workers/ | "a take-home wage of between around $1.32 and $2 per hour" | 18 Oct 2026 | checked |
| 35 | Most cloudwork platforms fall short of fair-work standards | Fairwork Cloudwork 2025, https://fair.work/wp-content/uploads/sites/17/2025/05/Fairwork-Cloudwork-Report-2025-FINAL.pdf | "remain far from safeguarding the basic standards of fair work" | 18 Oct 2026 | checked |
| 36 | Precarity makes data workers obey clients' labelling instructions | Miceli & Posada 2022, https://arxiv.org/abs/2205.11963 | "making them obedient to instructions" | 18 Oct 2026 | checked (abstract) |
| 37 | Microtask workers spend about 20 minutes an hour unpaid (2017 data) | ILO (Berg et al.) via VoxEU 2019, https://cepr.org/voxeu/columns/working-conditions-digital-labour-platforms-opportunities-challenges-and-quest-decent | "spent an average of 20 minutes every hour performing unpaid work" | 18 Oct 2026 | checked (column); ILO report **unverified** |
| 38 | ACARA's AI connection names energy use | ACARA AI curriculum connection, https://www.australiancurriculum.edu.au/curriculum-information/understand-this-curriculum-connection/artificial-intelligence | "AI training models consume vast quantities of energy" | 18 Oct 2026 | checked |
| 39 | AI4K12 Grades 9–12 objective on disparate impacts | AI4K12 BI5 progression chart (draft v0.1), https://ai4k12.org/wp-content/uploads/2022/12/AI4K12-Big-Idea-5-Progression-Chart-Working-Draft_v.0.1_12.22.2022.pdf | "disparate impacts on different groups" | 18 Oct 2026 | checked (draft) |
| 40 | UNESCO's student framework: AI is human-led (Understand level) | UNESCO 2024, DOI 10.54675/JKJB9835 (mirror https://raise.mit.edu/wp-content/uploads/2025/04/391105eng.pdf) | "recognize that AI is human-led" | 18 Oct 2026 | checked (mirror); UNESDOC page unreachable |
| 41 | Schools AI framework kept after its 2024 review | 2024 Review, https://www.education.gov.au/download/17416/australian-framework-generative-artificial-intelligence-ai-schools/41436/2024-review-australian-framework-generative-ai-schools/pdf | "evidence-informed, best practice framework" | 18 Oct 2026 | checked |
| 42 | First new mandatory requirement of the government AI policy starts 15 Jun 2026 | DTA, 12 Jan 2026, https://www.dta.gov.au/articles/ai-policy-update-strengthening-responsible-use-across-government | "The first, new, mandatory requirement begins on 15 June 2026." | 18 Oct 2026 | checked |
| 43 | EU AI Act lists job-application filtering as high-risk; duties delayed to 2 Dec 2027 | https://artificialintelligenceact.eu/annex/3/ and …/digital-omnibus/ | "analyse and filter job applications, and to evaluate candidates" | 18 Oct 2026 | checked (unofficial mirror); EUR-Lex **unverified** |
| 44 | Day of AI materials are CC BY-NC-SA 4.0 | https://dayofai.org/terms-of-use | (licence named on page) | 18 Oct 2026 | checked |
| 45 | Common Sense materials may not be modified | https://www.commonsense.org/education/terms-of-use | "Modification of the Materials… is a violation of our copyright" | 18 Oct 2026 | checked |
| 46 | Experience AI is CC BY-NC-ND 4.0 | Educator guide, https://experience-ai.org/en/drive_resources/136.pdf | "Attribution-NonCommercial-NoDerivatives 4.0" | 18 Oct 2026 | checked (one guide) |

### Unverified: links for Matthew to click (PDFs can be uploaded)
- ACARA content elaborations for AC9TDI8P10, 8P14, 10P10, 10P14: https://www.australiancurriculum.edu.au (year-level pages empty to the fetch tool; downloads blocked).
- Robodebt Royal Commission final report: https://robodebt.royalcommission.gov.au/publications
- de Vries (2023), *Joule*: https://doi.org/10.1016/j.joule.2023.09.004
- eSafety deepfakes guide and classroom resources (and licence): https://www.esafety.gov.au/key-topics/esafety-guide/deepfakes
- MPC myth-busting guidance on AI recruitment tools: https://www.mpc.gov.au/resources/guidance/myth-busting-ai-assisted-and-automated-recruitment-tools
- Australia's National AI Plan (primary page, industry.gov.au).
- EU Digital Omnibus on EUR-Lex (Regulation (EU) 2026/1744).
- MIT Payne curriculum licence (the canonical Google Doc, linked from https://ai4k12.org/ai-plus-ethics-for-middle-school/amp/).
- Miller et al. (2023) full text, for a quotable sentence.

---

## Open questions for Matthew
1. **Topic 1 boundary.** Cyber safety already teaches the digital footprint (8P14) and the APPs (10P14). Is topic 1 narrowed to "AI and your data" (training on chats, consent screens, the Children's Online Privacy Code), linking back for the rest?
2. **Topic 5 curriculum fit is weak** (no framework names data workers). Keep it as a core lesson justified by "possible future impact" and Ethical Understanding, or make it a typical/wider step inside topic 3 or 4?
3. **Generated media:** design around "you can't reliably spot it, so check where it came from" (the evidence), even though AI4K12's 6–8 objective asks students to find flaws?
4. **Deepfake image-based abuse** (eSafety): teacher notes only, or a carefully framed student step (harm, law, reporting) at typical or wider width?
5. **Day of AI:** adapt its lessons (CC BY-NC-SA means our adapted lessons must be shared alike and non-commercial, and attributed in each lesson) or only link to them? This affects the site's own licence for those lessons.
6. **Energy and water figures:** accept a re-check date (for example each January) in teacher notes, given how fast IEA, AEMO and company figures move?
7. **Live consent screens** (OpenAI, Anthropic and others) change often and may not suit "platform-agnostic": use a dated screenshot, or a made-up consent screen modelled on real ones (as Cyber safety uses a made-up club app)?
8. **Re-check dates:** Children's Online Privacy Code after 10 Dec 2026; EU Digital Omnibus on EUR-Lex; a 2025 review of the schools AI framework.
