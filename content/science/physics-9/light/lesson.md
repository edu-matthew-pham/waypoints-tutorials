---
order: 5
node: AC9S9U04 n4
woven: [AC9S9H02, AC9S9H03]
unit: models
title: What is the electromagnetic spectrum?
summary: "Light is a transverse wave, and it is one small part of a family of electromagnetic waves: radio, microwave, infrared, visible light, ultraviolet, X-rays and gamma rays. They all travel at the same speed in a vacuum (300 000 km/s) and differ in frequency and wavelength. Higher frequency means a shorter wavelength and more energy in each packet of light (photon), which decides what each is used for and how careful we must be with it."
language: science
voice: { name: af_heart, speed: 1.1 }
app:
  command: node "$REPO_ROOT/tools/serve.mjs" "$REPO_ROOT/dist/_playground-board" 8292
  url: http://127.0.0.1:8292/index.html
  readySelector: "#gpanel"
  layout: full
explainPicture: { ref: boards.yml#explain, caption: "The electromagnetic spectrum: from radio waves (long, low energy) to gamma rays (short, high energy). Visible light is a narrow band in the middle." }
explainClip:
  query: { code: "@boards.yml#explain", fresh: 1, id: explain }
  caption: "The electromagnetic spectrum"
  say: "Radio waves, light and X-rays are the same kind of wave, with different frequencies."
  clip:
    - caption: { text: "Ultraviolet, one of seven kinds of electromagnetic wave.", say: "Ultraviolet is one of seven kinds of electromagnetic wave." }
    - wait: 2400
    - click: "Radio"
    - caption: { text: "Radio: long waves, low frequency, low energy.", say: "Radio: long waves, low frequency, low energy." }
    - wait: 2800
    - click: "Gamma"
    - caption: { text: "Gamma: short waves, high frequency, high energy.", say: "Gamma: short waves, high frequency, high energy." }
    - wait: 3000
    - caption: { text: "All travel at 300 000 km/s in a vacuum. Visible light is a narrow band in the middle.", say: "All travel equally fast in a vacuum, and light is a narrow band." }
    - wait: 3200
hook: "A sunburn, a microwave oven, a TV remote and a hospital X-ray all use the same kind of wave. What makes them so different?"
---
Sound needed particles to carry it, but light crosses empty space to reach us from the sun, so it needs a different model, and that model covers a whole family of waves.

## Engage: more energy

```step
stage: predict
insight: "Students rank by familiarity or by 'power' (microwaves heat food). Frequency, not the device, sets the energy in each packet of light."
check:
  type: predict
  q: "Microwaves and X-rays are both electromagnetic waves, and both hand over their energy in tiny packets. Which has more energy in each packet?"
  options: ["X-rays: a higher frequency means more energy", "Microwaves: they can cook food", "They are the same, because they travel at the same speed", "You can't compare them"]
  actual: "X-rays. The energy in each packet goes up with frequency, and X-rays have a frequency millions of times higher than microwaves, or more. A microwave oven cooks food because it sends out a huge number of packets, not because each one has a lot of energy."
```

## Explore: the seven bands

```step
stage: run
insight: "Visiting every band and reading wavelength, frequency, use and risk side by side builds the pattern: shorter waves, higher frequency, more energy, more risk."
try: { playground: board, starter: "boards.yml#spectrum", height: 680 }
tasks:
  - starter: "boards.yml#spectrum"
    check: { type: board, text: "Click each of the seven bands, from Radio to Gamma, and read the details.", when: "n = 7" }
  - starter: "boards.yml#spectrum"
    check: { type: board, text: "Find the band that causes sunburn.", when: "b = 4" }
    hint: ["Sunburn is damage to skin cells, so which end of the spectrum has waves carrying enough energy to do that?", "Click through the bands and read the \"Take care\" part of the line under the spectrum for each one."]
  - starter: "boards.yml#spectrum"
    check: { type: board, text: "Find the band used to look at bones.", when: "b = 5" }
    hint: "Click through the bands and read the \"Used for\" part of the line under the spectrum for each one."
```

### Every band

Watch the wave at the bottom change: not to scale, but the pattern is real.

### Sunburn

### Bones

## Explain: the wave model of light

```step
stage: investigate
insight: "Transverse waves, the spectrum as one family at one speed, and the link between frequency, wavelength and energy cover the node's first and third success criteria (bending light covers the second); the uses sort connects the pattern to technologies."
tasks:
  - check:
      type: question
      q: "Light is a transverse wave. What does that mean?"
      options: ["The vibration is at right angles to the direction the wave travels", "The vibration is along the direction of travel, like sound", "The wave needs particles to travel through"]
      answer: 0
      feedback: [null, "That is a longitudinal wave: sound.", "Light needs no medium: it crosses empty space from the Sun."]
      explain: "Transverse: like a rope shaken sideways, the vibration is across the direction of travel. Electromagnetic waves are vibrating electric and magnetic fields, so they need no particles."
    hint: ["Picture shaking a skipping rope up and down: which way does your hand move, and which way does the wave travel along the rope?", "Then think about how sunlight gets to us, and what's in the space between the Sun and the Earth."]
  - check:
      type: question
      q: "Radio waves and gamma rays travel through a vacuum. How do their speeds compare?"
      options: ["They are the same: 300 000 km/s", "Gamma rays are much faster", "Radio waves are faster because they are longer"]
      answer: 0
      feedback: [null, "Speed in a vacuum is the same for every electromagnetic wave.", "Longer waves aren't faster."]
      explain: "All electromagnetic waves travel at the same speed in a vacuum, the speed of light. They differ in frequency and wavelength, not speed."
    hint: "Gamma rays carry more energy in each packet, but is having more energy the same thing as going faster?"
  - check:
      type: question
      q: "Going from radio to gamma, what happens to the wavelength and the energy?"
      options: ["The wavelength gets shorter and the energy greater", "The wavelength gets longer and the energy greater", "The wavelength gets shorter and the energy smaller"]
      answer: 0
      feedback: [null, "Longer wavelength goes with lower frequency and less energy.", "Short wavelength goes with high frequency and high energy."]
      explain: "Speed is fixed, so a higher frequency means a shorter wavelength, and a higher frequency means more energy in each packet the wave hands over."
    hint: ["They all travel at the same speed, so if more waves pass each second, does each one have to be longer or shorter?", "Click Radio, then Gamma, and compare the wave drawn on the board and the wavelength in the line under it."]
  - check:
      type: match
      q: "Match each wave to a use."
      pairs:
        - ["Radio waves", "Broadcasting to radios and TVs"]
        - ["Microwaves", "Cooking food, Wi-Fi and mobile phones"]
        - ["Infrared", "TV remotes and thermal cameras"]
        - ["Ultraviolet", "Sterilising water and checking banknotes"]
        - ["X-rays", "Imaging bones and checking luggage"]
        - ["Gamma rays", "Treating cancer and sterilising equipment"]
  - check:
      type: question
      q: "Why are UV, X-rays and gamma rays more dangerous to living cells than radio waves?"
      options: ["Each packet carries a lot more energy, enough to damage cells", "They are brighter", "They travel faster"]
      answer: 0
      feedback: [null, "Brightness is how much energy arrives in total; the danger comes from the energy in each packet.", "They all travel at the same speed."]
      explain: "High-frequency waves hand over much more energy in each packet, enough to damage the molecules in cells. Low-frequency waves such as radio don't."
  - check: { type: reflect, text: "I can describe light as a transverse wave, and say how wavelength, frequency and energy change across the spectrum." }
```

### Transverse

### Same speed

### Wavelength and energy

Light and the rest of the family hand over their energy in tiny packets called photons, and the higher the frequency, the more energy each packet carries. Ordinary waves don't work like that (a bigger water wave carries more energy whatever its frequency), and Wave or particle? looks at why this needs a particle idea as well.

### Uses

### Danger

### In your own words

In your book: draw a line with the seven bands from radio to gamma. Under it write 'longer wavelength, lower frequency, less energy' at one end and the opposite at the other, then add one use to each band.

## Elaborate: choosing a wave

```step
stage: modify
tier: typical
insight: "Choosing a band for a job from wavelength, frequency and risk applies the pattern to real communication and medical technologies."
try: { playground: board, starter: "boards.yml#spectrum", height: 680 }
tasks:
  - check: { type: board, text: "Find the band with a wavelength of about 12 cm.", when: "b = 1" }
    hint: ["12 cm is a size you could hold in your hand, so is that one of the longer waves or one of the shorter ones?", "Click along from Radio and read the wavelength at the start of the line under the spectrum."]
  - check:
      type: question
      q: "Why does a mobile phone use microwaves and not X-rays?"
      options: ["Microwaves carry information well and are safe at low power, but X-rays would damage cells", "X-rays travel too slowly", "Microwaves are visible"]
      answer: 0
      feedback: [null, "They travel at the same speed.", "Microwaves can't be seen."]
      explain: "A communication technology needs waves that carry signals and are safe to use all around us. High-energy X-rays would be dangerous."
```

### Wavelength 12 cm

### Microwave or X-ray

## Elaborate: sun safety

```step
stage: modify
tier: wider
insight: "Linking the wave model to UV damage explains protective behaviour through the wave property that matters, frequency."
check:
  type: question
  q: "Why does Australian sun safety advice focus on UV, even on cool, cloudy days?"
  options: ["UV has enough energy per packet to damage skin cells, and you can't feel it as heat", "UV is the hottest part of sunlight", "Clouds make UV stronger"]
  answer: 0
  feedback: [null, "Infrared carries most of the heat you feel.", "Clouds don't block all UV."]
  explain: "UV is invisible and not felt as heat, but each packet carries enough energy to damage skin cells. That's why shade, clothing, a hat and sunscreen matter on any bright day."
```

## Elaborate: Slip, Slop, Slap

```step
stage: modify
tier: typical
insight: "Australia's sun-safety campaigns show why some science is taken up by a whole society: strong evidence, simple low-cost actions, trusted messengers and rules that make the habit normal."
tasks:
  - check:
      type: sort
      q: "Did it help Australians take up sun safety?"
      options: ["Helped adoption", "Not a factor"]
      items:
        - ["Strong evidence linking UV exposure to skin cancer", "Helped adoption"]
        - ["A short, catchy message with cheap, easy actions", "Helped adoption"]
        - ["'No hat, no play' rules in schools", "Helped adoption", "Rules turn advice into a habit for a whole generation."]
        - ["The UV Index in daily weather reports", "Helped adoption"]
        - ["UV feeling hot on the skin, so people notice it", "Not a factor", "UV can't be felt as heat: that is exactly why people needed reminders."]
  - check:
      type: question
      q: "Scientists knew UV causes skin cancer well before 1981, but sun-safe habits spread only after the campaigns began. What does that show?"
      options: ["Evidence alone isn't enough: science is taken up when the message is clear, the actions are easy and people keep hearing it from sources they trust", "Sunscreen wasn't on sale in Australia before 1981", "The science changed in 1981", "Campaigns only work when the science is brand new"]
      answer: 0
      feedback: [null, "Sunscreen was sold for decades before; what changed was how many people used it.", "The link between UV and skin cancer was already established.", "The science was decades old: what changed was how it reached people."]
      explain: "Adoption depends on more than evidence: cost, convenience, trust, repetition and rules all matter. Australia still has one of the highest skin cancer rates in the world, so the campaigns continue."
```

### What helped

In 1981 Cancer Council Victoria launched Slip, Slop, Slap: slip on a shirt, slop on sunscreen, slap on a hat. Seek shade and slide on sunglasses were added later.

### Evidence is not enough

## Evaluate: look back

```step
stage: info
check: { type: reflect, text: "I compared my prediction about microwaves and X-rays with what I found." }
```

Write one sentence: "At first I thought… Now I think… because…"

**Revision summary**

- Light is a **transverse wave** and one part of the **electromagnetic spectrum**: radio, microwave, infrared, visible, ultraviolet, X-ray, gamma.
- All travel at the **same speed** in a vacuum (300 000 km/s), with no medium needed.
- Radio to gamma: **shorter wavelength, higher frequency, more energy per packet**.
- Frequency decides use and risk: low-energy waves carry signals; high-energy waves can damage cells.
