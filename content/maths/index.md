---
title: Maths
group: Core
blurb: "Predict, try, then make your own"
order: 2
map: true
trail: units
summary: Interactive maths lessons. Predict, try it on a board, study a worked example, change one thing at a time, practise, then make your own. One course per strand per year, as the curriculum sets it out (Number, Algebra, Measurement, Space, Statistics, Probability); start with whichever your class is working on. Earlier years stay a click away under What you should already know. Teachers will find a ten-minute tour on the page For maths teachers, under Teachers in the menu.
lookback:
  - { year: 7, courses: [maths/number-7, maths/algebra-7, maths/measurement-7, maths/space-7, maths/statistics-7, maths/probability-7] }
  - { year: 8, courses: [maths/number-8, maths/algebra-8, maths/measurement-8, maths/space-8, maths/statistics-8, maths/probability-8] }
  - { year: 9, courses: [maths/number-9, maths/algebra-9, maths/measurement-9, maths/space-9, maths/statistics-9, maths/probability-9] }
  - { year: 10, courses: [maths/number-10, maths/algebra-10, maths/measurement-10, maths/space-10, maths/statistics-10, maths/probability-10] }
pathways:
  - id: number
    title: Number
    summary: Integers, fractions, decimals and percentages, ratios, powers and the real numbers.
    fit: "Start here for negative numbers, fractions, percentages and powers: the tools every other strand uses."
    about: "One course per year, as the curriculum sets it out. Rates and ratio models are in Measurement, and Year 9 and 10 index laws in Algebra, as the curriculum places them."
    courses:
      - { path: maths/number-7, stage: foundations, tagline: "Integers, powers, fractions, decimals, percentages and ratios." }
      - { path: maths/number-8, stage: foundations, after: [maths/number-7], tagline: "Recurring and irrational numbers, index laws and percentage change." }
      - { path: maths/number-9, stage: extensions, after: [maths/number-8], tagline: "The real numbers: exact or rounded." }
      - { path: maths/number-10, stage: extensions, after: [maths/number-9], tagline: "Approximation and the error it adds." }
  - id: algebra
    title: Algebra
    summary: Expressions and equations, rules and straight-line graphs, then quadratics, exponentials and models.
    fit: "Start here to use letters for numbers, solve equations and turn rules into graphs."
    about: "One course per year, as the curriculum sets it out. Year 9 and 10 index laws are here (the curriculum puts them in Algebra); Year 8 index laws are in Year 8 Number."
    courses:
      - { path: maths/algebra-7, stage: foundations, after: [maths/number-7], tagline: "Letters for numbers, rules and graphs, and equations." }
      - { path: maths/algebra-8, stage: foundations, after: [maths/algebra-7, maths/number-8], tagline: "Brackets, harder equations, inequalities and straight lines." }
      - { path: maths/algebra-9, stage: extensions, after: [maths/algebra-8], tagline: "Index laws, coordinate geometry and quadratics." }
      - { path: maths/algebra-10, stage: extensions, after: [maths/algebra-9], tagline: "Quadratics by hand, two variables, exponentials and models." }
  - id: measurement
    title: Measurement
    summary: Area, volume and circles, angle facts, Pythagoras, rates, then trigonometry, error and scale.
    fit: "Start here to measure angles, areas and volumes, and see why the formulas work."
    about: "One course per year, as the curriculum sets it out. Year 7 angle facts (parallel lines, angle sums) are here; Year 9 trigonometry starts in Year 9 Space (the ratios) and is used here (finding sides and angles)."
    courses:
      - { path: maths/measurement-7, stage: foundations, after: [maths/number-7, maths/algebra-7], tagline: "Area, volume, circles and angle facts." }
      - { path: maths/measurement-8, stage: foundations, after: [maths/measurement-7], tagline: "Composite areas, circles, Pythagoras, time zones and rates." }
      - { path: maths/measurement-9, stage: extensions, after: [maths/measurement-8], tagline: "Scientific notation, surface area, error and trigonometry in use." }
      - { path: maths/measurement-10, stage: extensions, after: [maths/measurement-9], tagline: "Composite solids, trigonometry in practice, error, scale and log scales." }
  - id: space
    title: Space
    summary: Shapes, nets and transformations, congruence and similarity, then the trigonometric ratios, proof and networks.
    fit: "Start here to name and draw shapes, move them around and prove things about them."
    about: "One course per year, as the curriculum sets it out. Year 9 Space introduces sine, cosine and tangent; Year 9 Measurement uses them."
    courses:
      - { path: maths/space-7, stage: foundations, after: [maths/measurement-7], tagline: "Naming shapes, nets, views, transformations and algorithms." }
      - { path: maths/space-8, stage: foundations, after: [maths/space-7], tagline: "Congruence, similarity, quadrilateral proofs and 3D points." }
      - { path: maths/space-9, stage: extensions, after: [maths/space-8], tagline: "The trigonometric ratios, enlargement and geometric algorithms." }
      - { path: maths/space-10, stage: extensions, after: [maths/space-9], tagline: "Proof, networks and spatial algorithms." }
  - id: statistics
    title: Statistics
    summary: Collecting and displaying data, averages and spread, samples, and judging claims made with data.
    fit: "Start here to collect and display data, compare data sets and judge the claims people make with them."
    about: "One course per year, as the curriculum sets it out. **Year 7 Statistics**: kinds of data, mean, median, mode and range, stem-and-leaf plots and a first investigation. **Year 8**: samples, bias and how samples vary. **Year 9**: where data came from, distributions and a whole investigation. **Year 10**: misleading graphs, boxplots, association and two-way tables."
    courses:
      - { path: maths/statistics-7, stage: foundations, tagline: "Kinds of data, averages, displays and comparing." }
      - { path: maths/statistics-8, stage: foundations, after: [maths/statistics-7], tagline: "Samples, bias and how samples vary." }
      - { path: maths/statistics-9, stage: extensions, after: [maths/statistics-8], tagline: "Where data came from, distributions and a whole investigation." }
      - { path: maths/statistics-10, stage: extensions, after: [maths/statistics-9], tagline: "Misleading claims, boxplots, association and two-way tables." }
  - id: probability
    title: Probability
    summary: Sample spaces and experiments, compound events, then conditional chance.
    fit: "Start here to work out how likely things are, then test it with experiments and simulations."
    about: "One course per year, as the curriculum sets it out. **Year 7 Probability**: sample spaces, probabilities and experiments. **Year 8**: complements, Venn diagrams, two-way tables, trees and simulations. **Year 9**: two-step events, with and without replacement, and simulations. **Year 10**: conditional chance and independence."
    courses:
      - { path: maths/probability-7, stage: foundations, after: [maths/number-7], tagline: "Sample spaces, probability and experiments." }
      - { path: maths/probability-8, stage: foundations, after: [maths/probability-7], tagline: "Complements, Venn diagrams, two-way tables and trees." }
      - { path: maths/probability-9, stage: extensions, after: [maths/probability-8], tagline: "Two-step chance, with and without replacement, and simulations." }
      - { path: maths/probability-10, stage: extensions, after: [maths/probability-9], tagline: "Conditional chance: given, independent or not." }
  - id: before-year-7
    title: Before Year 7
    summary: Short catch-up lessons for the ideas Year 7 maths builds on, from tenths to probability.
    fit: "Start here if a Year 7 lesson feels like it skips something. One idea at a time, none of them required."
    about: "Twelve short lessons, one idea and one common mistake each, about 15 to 20 minutes. Most ideas come from Years 4 to 6. Each Year 7 lesson that leans on one lists it under **What you should already know**. They are optional: a Year 7 student can finish every Year 7 course without them."
    courses:
      - { path: maths/before-year-7, stage: foundations, tagline: "One idea at a time, from tenths to probability." }
---
