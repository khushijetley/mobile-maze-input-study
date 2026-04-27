# Mobile Maze Navigation: HCI Input Modality Study
### Controlled Empirical Study · Touch vs. Tilt vs. Hybrid Input · ACM-Format Research Paper

![Maze game screenshot](screenshots/maze.png)
*Custom-built maze game developed in GDevelop, used across all three input conditions*

---

## Overview

This repository contains the full materials for a controlled empirical study comparing touch, tilt, and hybrid input modalities in a mobile maze-navigation task. The game was designed and built from scratch in GDevelop and deployed on an Android smartphone. The study used a within-subjects repeated-measures design with 12 participants, producing statistically significant findings on both objective performance and subjective usability measures.

The full research paper is available in ACM conference format in `/paper/`.

---

## Key Findings

| Input Method | Mean Completion Time | Mean Error Score |
|-------------|---------------------|-----------------|
| **Touch** | **11.47s (SD 5.87)** | **322.60 (SD 146.53)** |
| Hybrid | 13.52s (SD 6.41) | 487.21 (SD 366.46) |
| Tilt | 18.96s (SD 10.00) | 568.00 (SD 188.86) |

- Repeated-measures ANOVA: significant main effect of input method on completion time, F(2, 22) = 8.801, **p = .0016**
- Repeated-measures ANOVA: significant main effect on error scores, F(2, 22) = 4.175, **p = .029**
- Bonferroni-corrected post-hoc: Touch significantly faster than Tilt, t(11) = 3.39, **p = .0061**
- Touch significantly fewer errors than Tilt, t(11) = 3.86, **p = .0027**
- Friedman test: significant effect of input method on ease-of-use ratings, χ²(2) = 9.50, **p < .01**
- Wilcoxon signed-rank: Touch rated significantly easier to use than Tilt, W = 0, **p = .004**

---

## Study Design

**Design:** Within-subjects (repeated-measures), input method as independent variable

**Participants:** n = 12, ages 18–30, recruited from university community via convenience sampling. All reported normal or corrected-to-normal vision, no known motor impairments, daily smartphone use.

**Conditions:**
- **Touch** — direct finger drag of player icon
- **Tilt** — accelerometer/gyroscope steering along X–Y axes
- **Hybrid** — both modalities available simultaneously, participant switches freely

**Dependent variables:**
1. Completion time (seconds) — automatically logged by game engine
2. Error score — cumulative wall-collision distance, automatically logged

**Procedure:** 10-second practice trial per condition → formal trial → post-study questionnaire (7-point Likert scales: ease of use, perceived accuracy, physical effort, enjoyment, overall rating). Total session: 10–12 minutes. 36 trials total.

**Counterbalancing:** Condition order counterbalanced across participants to control for learning effects.

---

## The Game

Built independently in **GDevelop** and deployed on Android. Single medium-difficulty maze with narrow corridors, multiple directional turns, and no branching alternatives — deliberately designed to demand continuous micro-adjustments and fine-grained directional control. All visual and functional elements held constant across conditions; only control logic varied. The game's event system automatically recorded timestamped movement and collision-based error scores.

---

## Statistical Analysis

- **Repeated-measures ANOVA** — evaluated mean differences across three input methods
- **Bonferroni-corrected paired t-tests** — post-hoc pairwise comparisons for completion time and error scores
- **Friedman non-parametric test** — evaluated subjective usability ratings (Likert scale data)
- **Wilcoxon signed-rank tests with Bonferroni correction** — post-hoc pairwise comparisons for ease-of-use ratings

---

## Why This Matters for AI Safety Research

This study is directly relevant to questions about how humans interact with and maintain control over AI-assisted systems under varying interface conditions.

**Sensor-based input and cognitive load.** Tilt input — which introduces variability tied to device orientation, grip, and posture — produced significantly worse performance and higher cognitive load than direct touch. This mirrors a core challenge in AI interface design: when the mapping between user intent and system response is indirect or noisy, user control degrades in ways that may not be immediately perceptible to the user.

**Hybrid modalities and false confidence.** The Hybrid condition produced intermediate performance but did not surpass touch — participants struggled to effectively combine modalities and may have experienced a false sense of expanded capability. This is structurally analogous to the problem of AI-assisted decision-making, where hybrid human-AI systems do not always outperform either component alone and can introduce new failure modes.

**Design implications for adaptive AI interfaces.** The findings suggest that for precision-critical tasks — including clinical AI tools, rehabilitation interfaces, and safety-critical decision support systems — direct and predictable input mappings outperform immersive but variable ones. Future work should investigate adaptive interfaces capable of dynamically shifting input modes based on detected user state.

---

## Repository Structure

```
mobile-maze-hci/
  game/
    maze_project/       ← GDevelop project files
  paper/
    hci_paper.pdf       ← Full ACM-format research paper
  screenshots/
    maze.png            ← Game screenshot
    touch_mode.png      ← Touch condition
    tilt_mode.png       ← Tilt condition
  README.md
```

---

## Citation

Jetley, K. (2025). Tilt-based vs. touch-based input for mobile maze navigation. Unpublished manuscript, York University. ACM conference format.

---

## Stack
`GDevelop` `Android` `HCI` `Empirical Research` `Within-Subjects Design` `ANOVA` `Friedman Test` `Bonferroni Correction` `Mobile Usability`

---

*Full paper available in `/paper/`. Game project files available in `/game/`. Part of an ongoing research program in human-computer interaction and adaptive interface design.*
