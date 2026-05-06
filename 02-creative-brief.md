# DCC Operating System — Creative Brief

## One-line direction

A small, beautifully made architectural monograph for a luxury retail GC — restrained, confident, built to be returned to.

---

## What this is not

- Not a SaaS dashboard. No app shell, no card grid as the primary layout.
- Not a tech startup landing page. No gradients, no glow, no hero animation.
- Not a typical "values page." Those default to stock photos and pastel rectangles. We're aiming for editorial gravity, not corporate softness.

The site should feel like it could sit on the desk of someone who buys $2,000 chairs and reads books on tectonics. It should not feel like SharePoint with better fonts.

---

## Reference points

- *Apartamento*, *Cabana*, and *Cereal* magazines — print and digital
- Hermès, Loro Piana, Aesop — their **editorial** pages, not e-commerce
- Phaidon and Lars Müller architectural monographs
- Financial Times long-form digital features — visual restraint at scale
- Vitsœ's product pages — discipline as a design principle

What these share: confident typography, generous whitespace, low color saturation, real attention to vertical rhythm, and the absence of decorative noise.

---

## Voice

The two source documents have two registers. The site uses both, on purpose.

| Register | Source | Used for |
|---|---|---|
| **Operational** — matrix, framework, scaling mechanism, RAPID | PPT | Page bodies, tables, diagrams, definitions. Be precise. |
| **Ecological** — ecosystem, root system, prune to grow, plant close together | Preface | Hero passages, transitions, value openings. Used sparingly. Earns its place. |

The home hero is the only mandatory ecological reference: *"Build the forest. Not just the next tree."*

Beyond that, ecology appears at most once per page, in opening passages.

**Avoid:**
- Corporate softness ("we believe," "we're passionate about," "at DCC, we...")
- Mission-statement boilerplate
- Exclamation points
- The word "journey"
- Em-dashes used as decorative pauses (use them only where grammatically tight)
- "Innovative solutions," "world-class," "best-in-class," any phrase a vendor would put on a one-pager

---

## Color

A restrained, warm-neutral palette. Saturation is low everywhere except a single oxblood accent that earns its presence by being the only saturated color on the page.

| Token | Hex | Use |
|---|---|---|
| `ink` | `#1A1816` | Primary text. Near-black with a hint of warmth. Not pure black. |
| `paper` | `#F4EFE7` | Page background. Warm off-white, like uncoated stock. |
| `paper-2` | `#EAE3D6` | Section/card backgrounds where separation is needed. |
| `rule` | `rgba(26,24,22,0.16)` | Hairline rules and borders. |
| `mute` | `#6B6660` | Secondary text, captions, metadata. |
| `accent` | `#6B2335` | Deep oxblood. Used **sparingly**: current rollout milestone, active link state, one underline weight. **Never** as a fill behind text. **Never** on more than ~2% of any view. |

No second accent color. No gradients. If a chart needs more than two values, use weights of `ink` and `mute`, not new hues.

---

## Typography

Pair one editorial serif with one quiet sans.

### Display serif
**Recommended:** Fraunces (free, Google Fonts, self-host) with optical size set to 144 for hero, 72 for section heads. Tight tracking on display sizes (-0.015 to -0.02em).

**Paid alternatives if budget allows:** GT Super Display, Editorial New, GT Sectra.

### Body sans
**Recommended:** Inter (free) at 17px base, line-height 1.6, slightly looser tracking than default.

**Paid alternative:** Söhne, Söhne Buch.

### Monospace (for RAPID-style tables and definitions)
JetBrains Mono or Berkeley Mono.

### Type scale (rem at 16px base)

| Use | Size | Line height | Tracking |
|---|---|---|---|
| Hero display | 5rem | 1.05 | -0.02em |
| Page H1 | 3rem | 1.10 | -0.015em |
| Section H2 | 1.75rem | 1.25 | -0.01em |
| Subsection H3 | 1.25rem | 1.35 | 0 |
| Body | 1.0625rem | 1.60 | 0 |
| Caption / eyebrow | 0.8125rem | 1.40 | 0.04em, uppercase |

---

## Layout & grid

- **12-column grid.** 80px column max, 24px gutter. Used quietly. Most content sits in 6–8 columns.
- **Whitespace is the dominant visual element.** It should feel deliberate, not empty.
- **Max content width:** 1280px. Centered. No edge-to-edge layouts except the home hero band.
- **Vertical rhythm:** all section spacing is a multiple of 8px. Section breaks are 96px or 128px — generous, never 24px.
- **No cards with shadows.** Use hairline rules and `paper-2` backgrounds for separation.
- **Border radius:** 0px on layout containers. 2px maximum on small interactive elements (input fields, search). Nothing rounded.

---

## Motion

Minimal and structural. The site is not trying to impress on first visit; it's trying to be useful on the hundredth.

| Element | Motion |
|---|---|
| Page transitions | None, or near-instant fade (<120ms) |
| Hover on links | 1px underline appears in 80ms, in `accent` |
| Scroll | Native. No parallax. No scroll-jacking. No on-scroll reveals. |
| Cmd-K search overlay | Modal fades in over 100ms; backdrop is `paper` at 92% with backdrop-blur(8px) |
| Reduced motion | Fully respected — even the 80ms hover underline becomes instant |

The Cmd-K modal is the only piece of true UI motion in the site. Everything else is static or reactive to direct input.

---

## Imagery

**For v1, no photography.** The site stands on type, color, structure, and a small set of considered graphics.

- **The org diagram** — custom SVG. Ink hairlines on paper. No fill colors except a single `accent` mark on the layer label. Hand-drawn-feeling line weight, but technically crisp.
- **Material textures (optional, very subtle).** A single full-bleed band on the home hero may carry a 6% opacity overlay of paper grain or marble macro. If it draws attention to itself, it's wrong. If in doubt, leave it off.
- **No icons.** Where you'd reach for an icon library, use a numeric character (1, 2, 3) or a small letter mark in display serif.

**For v2:** brief a photographer to shoot eight to ten flagship project moments at the same focal length, time of day, and color treatment. That becomes the visual library. Do not use stock photography under any circumstances.

---

## Don'ts (worth saying directly)

- No emojis anywhere
- No purple, no neon, no gradients
- No drop shadows, no glassmorphism, no glassy panels
- No "humans in hard hats" stock photos — ever
- No animated counters ("33 years" doesn't need to count up to itself)
- No carousel of testimonials
- No chatbot widget
- No cookie banner unless legal forces it
- No confetti, no easter eggs, no "made with ❤️"

---

## Detail-level direction

A few specific choices that distinguish a competent build from a great one:

**Numerals.** Use old-style figures (lowercase numerals) in body text. Use lining figures only in tables. Both Fraunces and Inter support this via `font-feature-settings` or Tailwind's `font-variant-numeric` utilities.

**Footnotes and citations.** Where a quotation appears (e.g., the Edgar Schein line on culture from PPT slide 7), set the citation as a true footnote, not parenthetical. This is editorial.

**Tables.** No vertical borders. Horizontal hairlines only, between rows. Header row in eyebrow caps, body rows in regular weight. No zebra striping.

**Quotation marks.** Use proper typographic quotes ("" "), not straight quotes (" "). Configure smart quotes in MDX.

**Widows and orphans.** Set `text-wrap: balance` on all H1 and H2 elements. Set `text-wrap: pretty` on body paragraphs.

**The accent color in practice.** Use it for:
- The current rollout milestone (one item)
- The link underline (on hover only)
- A single 1px rule below the page H1 on each page
That's three places, and that should be the entire usage on most pages.

---

## What "good" looks like at the end

A senior PM in Honolulu, three months in, opens the site Tuesday morning. Pinned tab. Cmd-K, types "RAPID." Lands on the row. Two seconds. Closes the tab.

Same PM, six months in, sends a junior the link to `/values/integrity#defining-moment` after a hard client call. The junior reads it once, gets it.

Same PM, two years in, still has the tab pinned. The site has not been redesigned. It still feels right.

If on first review the build feels "calm, structured, a little severe" — that's correct. If it feels "exciting, dynamic, modern" — go back.
