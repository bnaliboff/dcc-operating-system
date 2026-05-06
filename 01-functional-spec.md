# DCC Operating System — Functional Specification

**Working title:** DCC Operating System
**Audience:** ~30–60 senior and mid-level managers across Carlsbad, New York, Honolulu
**Primary surface:** 1080p and 1440p+ desktop; mobile is polished but secondary
**Use mode:** Onboarding for new managers; pinned-tab daily reference for active managers

---

## 1. Tech stack

| Layer | Choice | Rationale |
|---|---|---|
| Framework | Next.js 15+, App Router, static export | Content site, no backend, fast SSG |
| Styling | Tailwind CSS with custom design tokens | Tokens defined in creative brief; map directly to Tailwind config |
| Content | MDX in `/content`, one file per section | Easy to edit; no CMS for v1 |
| Type loading | Self-hosted, subset, preloaded | No FOUT, no Google Fonts dependency |
| Search | Pagefind | Static-site compatible, no backend, ~50kb |
| Hosting | Vercel (or static export to S3+CloudFront) | No server requirements |
| Repo | Single repo, monolithic Next.js app | No need for monorepo at this scope |

No backend. No database. No auth for v1.

---

## 2. Information architecture

```
/                          Home — orientation + most-used quick links
/organization              Three-layer model, who's who, decision rights
/values                    Index of the five pivotal values
/values/leadership         Value detail
/values/partnership        Value detail
/values/persistence        Value detail
/values/integrity          Value detail
/values/innovation         Value detail
/operating-rhythm          Three conversations, 360 design, pod practices, failure modes
/roadmap                   Rollout sequence, action items, current milestone
/glossary                  Defined terms, alphabetical
```

Search (Cmd-K / Ctrl-K) overlays the entire site.

Every section in every page has a stable anchor ID. A manager should be able to copy a link to "Persistence — Defining Moment" and paste it into Slack, and the recipient lands at the right scroll position.

---

## 3. Page-by-page spec

### `/` — Home

**Job:** Orient first-time visitors. Surface the four or five things returning visitors actually look up.

**Sections (top to bottom):**

1. **Hero band**
   Single line, large display serif: *"Build the forest. Not just the next tree."*
   Below, smaller: "Dickinson Cameron Construction — Managerial Operating System."
   No image, no animation. Editorial calm.

2. **The five values, horizontal row**
   Each value: name, tagline, one-line behavior summary, link to detail page. This row is the most-used surface of the entire site.

3. **Where you are in the rollout**
   Horizontal timeline (Q2 2026 → 2027). Current milestone visually distinguished using the accent color. Static; updated by editing one MDX value.

4. **Quick reference grid** — six tiles, two rows of three:
   - Decision Rights (RAPID) → `/organization#rapid`
   - 360 Review Cadence → `/operating-rhythm#360`
   - Pod Practices → `/operating-rhythm#pod-practices`
   - Failure Modes → `/operating-rhythm#failure-modes`
   - Org Chart → `/organization#diagram`
   - Glossary → `/glossary`

5. **Footer**
   "Brian Naliboff, President. April 2026."
   Right-aligned: 33 years • 1,500+ projects • 85% repeat clients

---

### `/organization` — The Three Layers

**Job:** Make the matrix legible at a glance. Settle "who owns what."

**Sections:**

1. **The three layers, defined**
   Department (Career Home) / Pod (Cultural Home) / Project Team (Execution Home). One card per layer with role label, definition, examples.

2. **Org diagram** *(custom SVG, not a charting library)*
   Departments across the top with current heads:
   - Back Office — Maryam Samady
   - Management — John Schaub
   - Field Operations — Brian Prescott
   - Coordination — Aramy Kang
   - Pre-Construction — Thomas Smulski

   Three pods in the middle:
   - Pod 01 — Dagata / Iovino
   - Pod 02 — Boulenger / Wagner
   - Pod 03 — Dyson / Powell

   Project team template at the bottom (Executive/SPM/FOM → PM → PC → Super).

   Hover/click a node → small panel with role description.

3. **The two-manager model**
   Two columns. Functional Leader (sets standards, owns career, writes reviews, recommends promotions, hires). Pod Co-Leaders (assigns daily work, coaches execution, manages schedule/budget, builds pod culture, gives operational feedback).

4. **Decision Rights — RAPID** *(anchor `#rapid`)*
   Definitions of R / A / P / I / D as a small reference legend.
   Then a clean, typographic table of the five example decisions:

   | Decision | Recommend | Agree | Perform | Input | Decide |
   |---|---|---|---|---|---|
   | Hire into discipline | Functional Leader | — | — | — | Executive |
   | Assign to project | — | — | — | — | Pod co-leaders (jointly) |
   | Annual review | — | — | Functional Leader | Pod leaders | Functional Leader |
   | Daily task priority | — | — | — | — | Pod co-leaders |
   | Promotion | Functional Leader | — | — | — | Executive |

---

### `/values` — Index

**Job:** Frame the framework, route to detail pages.

**Sections:**

1. **Pivotal vs. Peripheral**
   Two columns. Tight (pivotal: company-wide, non-negotiable, set by exec) vs. Loose (peripheral: pod-specific, autonomy within boundaries).

2. **Five values, large**
   Each value occupies a horizontal band. Display-size value name, tagline, the two behaviors summarized in one sentence each, "Read full →" link. This page should feel like the table of contents of a serious book — not a card grid.

---

### `/values/[value]` — Value detail

**Job:** The page a manager opens when they need to remember what the value actually requires.

Same structure for all five (Leadership, Partnership, Persistence, Integrity, Innovation):

1. **Header.** Value name + tagline.
2. **Opening passage.** Short prose paragraph in DCC's voice (synthesized from preface + PPT — see creative brief).
3. **Daily Practice block.** Label "The Habit." Behavior name. Description. Example.
4. **Defining Moment block.** Label "When It's Hard." Behavior name. Description. Example.
5. **In the Field / In the Office.** Two side-by-side examples from the PPT.
6. **Cross-link block.** Two related values at the bottom, with a one-line bridge each.

All copy lifts directly from PPT slides 13–17, with light editing for web prose.

---

### `/operating-rhythm`

**Job:** Explain the cadences. Pull-out target for managers asking "when does X happen?"

**Sections:**

1. **Three conversations** *(anchor `#three-conversations`)*
   - Project Check-ins — Pod Co-Leaders, Weekly
   - Functional 1:1 — Department Leader, Monthly
   - 360 Review — All Three Parties, Quarterly

   One card per conversation. Each card: cadence, owner, purpose, what gets discussed.

2. **The dual-layer monthly** *(anchor `#dual-layer`)*
   Skills Feedback (individual development, SMART goals, FeedForward) vs. Team Health Pulse (anonymous, pod-aggregated, ~15–17 questions, ~18 minutes, frequency scales).

3. **The three-step interface** *(anchor `#three-step`)*
   How results flow: Pod Leaders → Dept Head → Quarterly Deep Review. Three sequential steps, not three columns.
   Below the diagram: the warning callout — *"Never tie 360 results to compensation or promotion."*

4. **Rater matrix** *(anchor `#360`)*
   Functional Manager 20% · Pod Co-Leaders 35% · Project Teammates 30% · Self 15%.
   Render as a typographic table, not a donut chart. (If a chart is required, a small horizontal bar in `ink` and `mute` only — no color coding.)

5. **Pod practices** *(anchor `#pod-practices`)*
   Six practices from PPT slide 18, as cards:
   - Phase Completion Celebrations (per milestone)
   - Weekly Pod Huddle (weekly)
   - Pod AAR Process (monthly)
   - Pod Scorecards (monthly)
   - Cross-Project Learning Sessions (monthly)
   - Weekly Recognition Roundtable (weekly)

6. **Designing against failure** *(anchor `#failure-modes`)*
   Five failure modes from PPT slide 23:
   - Lack-of-Action Fatigue
   - Performative Feedback
   - Recency Bias
   - Halo & Leniency Effects
   - Gaming & Retaliation

   Each: the mode, the prevention. Closing line: *"The single strongest protection against system failure: the co-leaders' relationship with each other."*

---

### `/roadmap`

**Job:** Show the plan, what's done, what's next.

**Sections:**

1. **Rollout sequence** — vertical timeline:
   - **Q2 2026 — Design System.** Pod Leader buy-in, Perform Yard onboarding, language introduction. Action items completed.
   - **Q2 2026 — Invest in Pod 1.** Prescott and Schaub push Iovino and Dagata to strengthen relationship. Go-forward plan.
   - **Q3 2026 — Pilot Program.** Three-month sprint, feedback collection, refinement.
   - **Q4 2026 — First Quarterly Deep Review.** Each pod produces Peripheral Value document, reviews Pod Scorecard.
   - **2027 — Launch Annual Cycle.** Formal Employee Review process; structured Pod-Department communication process.

   Current milestone visually distinguished. (As of build, Q2 2026 — Design System is in flight.)

2. **Action items, called out as a list:**
   - **AI 01** — RAPID matrix completion (Pod Leaders)
   - **AI 02** — Pod Practices implementation (Pod Co-Leaders, long-term)
   - **AI 03** — Pod Scorecards (Executive)
   - **AI 04** — Team Health Pulse (Executive)
   - **AI 05** — Pod 1 relationship investment (Prescott, Schaub)

3. **Closing**
   The full passage from PPT slide 26, set as a single editorial pull-quote. Ends with the company line: *33 years • 1,500+ projects • 85% repeat clients.*

---

### `/glossary`

**Job:** Look up "what is SBI" without reading a value page.

Single page. Alphabetical. Each entry: term, one-sentence definition, link to where it's used in the site.

Required entries:

360 Review · Action Item · Daily Practice · Defining Moment · Department · FeedForward · Functional Leader · Matrix Organization · Peripheral Value · Pivotal Value · Pod · Pod Co-Leader · Pod Scorecard · Project Team · RAPID · SBI (Situation-Behavior-Impact) · SMART Goal · Team Health Pulse · Two-Manager Model

---

## 4. Components (reusable)

| Component | Where used | Props |
|---|---|---|
| `<ValueCard>` | Home, values index | value, tagline, oneLineBehavior, href |
| `<ValueBand>` | Values index | value, tagline, dailyPractice, definingMoment, href |
| `<BehaviorBlock>` | Value detail | label, behaviorName, description, example |
| `<RoleCard>` | Org page | layer, role, occupant, description |
| `<TimelineItem>` | Home, roadmap | date, title, description, status, isCurrent |
| `<RAPIDRow>` | Org page | decision, recommend, agree, perform, input, decide |
| `<QuotePull>` | Used sparingly across pages | text, attribution |
| `<NavBar>` | Global | — |
| `<SearchOverlay>` | Global, Cmd-K trigger | — |
| `<CrossLink>` | Value detail bottoms | toValue, bridgeText |

---

## 5. Interactions

- **Search:** Cmd-K (Ctrl-K on Windows) opens overlay. Pagefind handles indexing and ranking. Result click navigates and scrolls to anchor.
- **Anchored deep links:** every section has a stable ID. Test by Cmd-clicking section headers — they should copy the anchor URL.
- **Print stylesheet:** Each value page and the org page print clean (B&W, no nav, page break before each value when printing the values index).
- **No client-side state.** No login, no saved preferences, no personalization for v1.
- **Keyboard:** Full tab navigation, visible focus rings (use accent color, not browser default).

---

## 6. Performance budget

| Metric | Target |
|---|---|
| LCP (1080p desktop, Fast 3G) | < 1.2s |
| Total JS (gzipped) | < 80kb |
| Total CSS (gzipped) | < 30kb |
| Cumulative Layout Shift | 0 |
| Fonts | Self-hosted, subset, preloaded |

---

## 7. Accessibility

- WCAG 2.2 AA minimum
- All foreground/background pairs ≥ 4.5:1 contrast
- Full keyboard navigation, visible focus rings
- Semantic HTML: `<article>`, `<section>`, real `<h1>`–`<h3>` hierarchy (no `<div>` headings)
- `prefers-reduced-motion` respected — even the 80ms hover underline becomes instant
- Skip-to-content link
- Search overlay traps focus; Esc closes

---

## 8. Out of scope for v1

Authentication, CMS, personalization ("your pod"), analytics, mobile app, notifications/email, project-data integrations (Procore etc.), commenting/feedback widgets, dark mode.

---

## 9. Content sourcing

All copy already exists in:
- `DCC_Managerial_Handbook_Preface_v2_2.docx` — voice, framing, opening passages
- `DCC_Organization_and_Values.pptx` — structural content, definitions, examples, names

Bridge copy required (estimated < 500 words total):
- Home page hero subline and quick-reference tile labels
- Glossary one-line definitions
- Cross-link bridge sentences on value detail pages
- Navigation labels

The creative brief governs voice for any bridge copy.

---

## 10. Acceptance criteria

A v1 build is complete when:

1. All ten URLs above resolve to fully-styled pages with content
2. Cmd-K search returns results from any page within 200ms of typing
3. Every section in every page has a working anchor link
4. Each value detail page prints to one or two pages of clean B&W output
5. The site loads under the performance budget on a fresh-cache desktop visit
6. Lighthouse Accessibility score ≥ 95
7. The site can be deployed by running `npm run build && deploy`
