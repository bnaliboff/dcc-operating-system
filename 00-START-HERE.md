# DCC Operating System — Build Brief

Two documents to feed into Claude Code:

- `01-functional-spec.md` — IA, pages, components, tech stack, data shape
- `02-creative-brief.md` — visual identity, typography, color, motion, references

Suggested Claude Code prompt: *"Build the site described in 01-functional-spec.md following the visual direction in 02-creative-brief.md. Source content is in DCC_Managerial_Handbook_Preface_v2_2.docx and DCC_Organization_and_Values.pptx. Start with the home page and the values index, then build out from there."*

---

## Pushback before development starts

### 1. The word "microsite" is doing too much work
This is a small internal knowledge site, not a microsite. ~6–8 views, deep-linkable sections, search across the whole thing. Built for the hundredth visit, not the first.

### 2. "Visually interesting" + "always on the desktop"
These constraints fight each other if visual interest comes from animation. The spec resolves the tension by leaning on editorial design — type, paper, hairlines, structure — which ages slowly. If you wanted something more obviously kinetic (motion, parallax, on-scroll reveals), redirect the brief before build.

### 3. Two registers in the source content
The preface is *organic* (ecosystem, root, prune). The PPT is *operational* (matrix, framework, RAPID). The site uses the operational register as the structural skeleton and the organic register only at hero/transition moments. If either register should be dropped entirely, decide before build.

---

## Defaults I picked — confirm or override

| Decision | Default | Override if... |
|---|---|---|
| **Access** | Internal-only, no auth, private subdomain | You want password-gated or SSO. Adds ~½ day. |
| **Content updates** | Hardcoded MDX, edited via PR | Managers need to edit themselves. That's a CMS, different scope. |
| **Mobile** | Polished but secondary; desktop-first | Field supers will use this on phones primarily. |
| **Photography** | None for v1; type and structure carry the design | You can supply 8–10 web-ready flagship project photos at the same focal length and treatment. |
| **Search** | Pagefind, Cmd-K overlay, full-text across the site | You don't want it (I'd push back — daily reference without search is annoying within a week). |
| **Analytics** | None for v1 | You want Plausible or similar. ~1 hour. |
| **Hosting** | Vercel static export | Internal IT requires AWS/Azure. Static export is portable, easy to move. |

---

## What's already done vs. what the build does

**Already done (you have it):**
- All copy and structure (preface + PPT)
- All names, decisions, and examples
- The framework is decided

**The build does:**
- Translates slide-format content into web-native paragraphs and components
- Builds the IA, navigation, search, anchors, and print styles
- Defines and ships the visual identity
- Produces a static site that you host

The build does **not** require new writing beyond a small amount of bridge copy on the home page and value index, plus glossary one-liners.
