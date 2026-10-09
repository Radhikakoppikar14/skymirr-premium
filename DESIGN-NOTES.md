## Round 11 - Enterprise redesign (navy / royal / sky / ice / beige / sand) - presentation only
**Palette (strict):** navy #0B1F3A, royal #1F4FD8, sky #4C8DF6, ice #E8F0FE, white, beige #F6F0E6, sand #E3D4BA, slate #5B6B82, light-on-navy #C9D6EE.
Every hardcoded hex / rgba in `src/**` and `index.html` was remapped to these (cyan, teal, amber, emerald, rose and LinkedIn blue are gone). Tokens are also in `@theme` (`bg-navy`, `text-royal`, `bg-beige` ...). CSS safety net in `sm-theme.css`: sky text turns royal on light backgrounds, royal text turns sky on navy.
**Font:** Space Grotesk (display) + Inter (body); Manrope removed.

**New files**
- `src/sm-theme.css` - theme layer loaded last: navy header + glass-on-scroll, mega-menu, section rhythm (navy > white > beige > navy > white > beige > navy), film grain, grid decor, Ken Burns, spotlight cards, buttons, stats, CTA band, modal, toasts, datasheet list, reduced-motion.
- `src/lib/sm-effects.ts` - cursor spotlight border-glow, 3D tilt (`[data-tilt]`), magnetic buttons (`.sm-magnetic`).
- `src/components/sm/` - AnnouncementBar, IntroLoader (<1.2 s, skippable, once per session), QuoteModal (validated form + success state), ToastHost, FloatingCta ("Talk to Sales"), StatsStrip + CountUp, CtaBand, DatasheetList, `bus.ts` (`openQuote()`, `showToast()`).

**Edited (structure only):** Navbar (mega-menu with featured card, Request a Quote button, accordion drawer; Contact Us is now a nav link), App (shell components, CTA band before footer), HomePage (stats strip), ProductsPage (datasheet list), ProductsCatalog (`data-tilt`).

**Content rule:** no copy, image, route or data file was changed. Stats-strip figures and the announcement text are copied from existing copy (SignalSection / SolutionsSection / LATEST_NEWS). The quote form reuses the Contact page's product options.
**Notes:** the quote form has no backend, so its success state offers a pre-filled mailto to the existing sales address. Datasheet file sizes are not stored in the project, so none are shown. Six `images/tamp161/isolation-*.jpg` files referenced by the TAMP161 page were already missing from `public/`.
**Validation:** esbuild bundle of `src/main.tsx` and `tsc --noEmit` both pass. `vite build` was not run (bundled node_modules are Windows-only) - run `npm install && npm run build`, then check Home, Products and one product page.

## Round 10 (revised) - new colour theme + live animation layer (presentation only)
**Theme: Midnight Navy & Electric Cyan** (replaces the blue / teal-cyan scheme everywhere).
| Role | Old | New |
|---|---|---|
| Page / soft surfaces | `#F8FCFD` / `#EAF6F9` | `#F7FBFF` / `#EAF4FC` |
| Primary accent | `#087F98` | `#0A68A8` deep ocean blue |
| Bright accent | `#18A6BE` | `#0EA5E0` electric cyan |
| Highlight / lines on dark | `#91D6E3` | `#8FD3EC` ice cyan |
| Dark sections | `#073746` / `#102B3B` / `#06242E` | `#0A2A52` / `#061833` / `#04122A` |
| Text / secondary / border | `#152C39` / `#627784` / `#DFEAF0` | `#0B1F3A` / `#55708A` / `#DCE8F2` |
Done once in the `@theme` ramps in `index.css` (blue/sky/cyan/teal/indigo/slate classes) and by remapping every hardcoded hex/rgba in `src/*.css`, `src/**/*.tsx`, `index.html`. LinkedIn brand blue kept.

**Live layer (new, additive):** `src/live.css` + `src/lib/live.ts`, loaded last in `main.tsx`.
- Text: focus-pull (blur to sharp) on scroll reveal; light-sweep across plain h1/h2 headlines; breathing signal dots; slowly drifting cyan-blue gradient on primary buttons; ticker text slides in on change.
- Images: blur-to-sharp entrance; gentle float on large product "contain" artwork; periodic light glide across large image frames.
- Hero slider: on every slide change the new image un-blurs + settles, a light sweep crosses it, and the blurred backdrop drifts.
- Sections: divider line draws in on scroll.
- Animations pause when off-screen; all of it is skipped under `prefers-reduced-motion`. Only classes / CSS variables are added - no text, images, routes or layout are changed.
- Validation: `live.ts` loads under Node type-stripping; all CSS braces balanced. `vite build` / browser not run here (bundled node_modules are Windows-only). Run `npm install && npm run build`, then check Home, one product page and one inner page.

Revision: first pass was violet, which clashed with the blue/cyan banner artwork. Re-mapped to navy + cyan with a small amber accent (`#FFB347`, from the sunset in the artwork) on the slider progress dot.

## Round 12 - 2026 redesign (presentation + structure)
- New `src/modern-2026.css` (loaded last): floating glass header, dark cinematic hero, overlapping stats card, aurora CTA band.
- `Hero.tsx` rebuilt: live canvas backdrop (flowing signal waves, particle network, radar pulses, mouse parallax) + drifting orbs/grid; per-slide word-reveal headline; 3D-tilt banner stage; slider restructured into labelled progress tabs with arrows and swipe.
- Request a Quote removed everywhere (navbar, mobile drawer, floating button, modal, CTA band now just "Contact Us"). AnnouncementBar removed (news ticker lives in the hero chip). Deleted: QuoteModal, FloatingCta, AnnouncementBar.
