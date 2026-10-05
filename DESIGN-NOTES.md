# SkyMirr redesign – design layer notes

**Reference chosen: Taoglas** (antenna-first RF company: dark hero band, light product-led content,
bold uppercase section titles, engineering-grid motif). Closest to SkyMirr's identity.

## What changed (design only)
| Area | Change |
|---|---|
| Palette | Replaced the violet theme with the client palette: white / off-white `#F7F9FC`, navy `#101C35`, charcoal `#1D2638`, blue `#2563EB`, soft blue `#EAF2FF`, subtle indigo accent. Done once in `src/index.css` `@theme`, so every page inherits it. |
| Font | Plus Jakarta Sans (one of the three fonts in the brief). |
| Hero | Animated backdrop (`components/fx/HeroBackdrop`): drifting mesh-network canvas, radiating antenna signal rings, engineering grid; floating 3D wireframe cube, **folding 3-plate panel**, floating hex/ring chips with mouse parallax; slow Ken-Burns on slides. |
| Light sections | `SectionDecor`: soft drifting glows + floating outlined shapes (click-through, aria-hidden). |
| Cards | 3D tilt + cursor spotlight + image sheen (`lib/motion.ts`). |
| Buttons | Magnetic pull on large CTAs, shimmer sweep on gradient buttons. |
| Routes | `PageTransition`: fade / lift / un-blur + top sweep bar on every page change. |
| Accessibility | All animation off under `prefers-reduced-motion`; canvas pauses off-screen/hidden tab; touch devices skip pointer effects. |

New files: `src/components/fx/*`, `src/fx.css`. Edited: `index.css`, `lib/motion.ts`, `Hero.tsx`, `HomePage.tsx`, `App.tsx`, `main.tsx`, plus colour-only edits in `Navbar`, `SignalSection`, `ProductsCatalog`, `SolutionsSection`, `CatalogProductDetailPage`.
**Untouched:** `src/data/*`, `public/images/*`, all page text, links, routes.

Also fixed: `package.json` had `esbuild ^0.25` which conflicts with Vite 8 (`npm install` failed with ERESOLVE) → `^0.27`.

## Content items to review with the client (NOT changed – flagged)
Compared against https://skymirr.com/ on 3 Oct 2026 (homepage only; inner pages not re-verified):
1. **Hero slider images** – live site now uses `antennas-slider.jpeg` / `sky5g-slider.jpeg` (+ mobile versions); repo has older `slider1/2.jpg`.
2. **Text not on the live homepage** (appears added in the repo): the four capability cards with stat pills (`+65% Gain`, `+42% Range`, `>80% Eff.`, `Tier-1 Ready`), eyebrow labels ("RF Connectivity Without Compromise", "Hardware Engineering", "Global Distribution Network", "Mission-Critical Reliability"), the top strip "SkyMirr Technologies · Enterprise RF Engineering & 5G", and section sub-lines under Products / Partners.
3. **Team bios** in `skymirrData.ts` / `TeamPage.tsx` are shortened/reworded versions of the live bios (e.g. David Carrier, Yoshioki Chika, Don Hawley, Donna Hamlin).
4. **YouTube link** – repo `youtube.com/@skymirr`; live `youtube.com/@SkyMirr-r9u`.
5. **"Connect with an Expert" form** (live homepage) not found in the repo.
6. Hero video points at `skymirr.com/wp-content/.../Discover_SkyMirr.mp4` (hot-linked) – copy it into the project before the live site is retired.

## Motion system (Taoglas-style interaction quality, all pages)
One shared layer: `src/lib/motion.ts` (behaviour) + the "MOTION SYSTEM" block at the end of `src/fx.css` (styles).
It tags elements automatically inside `<main>`, so every current and future page behaves the same.

| Area | Behaviour |
|---|---|
| Hero | Slider media reveals (clip + fade-up), ticker follows; slider and backdrop move at slightly different scroll speeds (`data-scroll-speed`); slow Ken-Burns kept. Spinning cube / folding panel removed. |
| Page banners | Slow grid drift, one soft scan line, title + sub-line staggered entrance. |
| Headings / text | Scroll-triggered fade-up (22-28px, 0.7s, expo-out); stagger up to 5 steps x 70ms. |
| Cards / boxes | Staggered entrance; hover = 4px lift + soft shadow (3D tilt, spotlight, sheen and icon spin removed). |
| Images | Soft unveil on entry; large cover images parallax inside their frame; hover zoom; images in cards drift a few px with the cursor. |
| Buttons / icons | 1px lift + 1.5% scale; arrows nudge in their direction (right / left / up-right / down); press = 0.98; text links draw an underline. |
| Navigation | Dropdowns and mobile drawer now open AND close smoothly (opacity/scale/height + item stagger); hover polish. |
| Page transitions | 0.4s fade + 14px lift per route (no blur filter). |
| Performance | Only opacity / transform / translate / scale / clip-path animate; one IntersectionObserver + one rAF scroll handler; hidden states exist only while `html.mv-on` is set by JS, so content cannot stay invisible; failsafe reveals anything in view. |
| Accessibility / devices | Everything off for `prefers-reduced-motion`; pointer effects off on touch; lighter distances on mobile. |

Removed in this pass because they were too flashy: cursor glow, count-up numbers, floating 3D cube/fold panel, rotating chips, magnetic buttons, card tilt.
Unused leftovers (not imported anywhere): `components/fx/HeroFloaters.tsx`, `WireCube`/`FoldingPanel` in `FloatingObjects.tsx`.
Content, data, images and routes are untouched.

**Validation status:** `npm install` is blocked in the authoring environment (HTTP 403), so `vite build` and a browser test were NOT run. Only a syntax-level TypeScript parse of every `.ts/.tsx` file (0 errors) and a CSS brace check were done. Run `npm install && npm run build` and click through every page before release.

## Round 5 – slider, backgrounds, banners
- **Hero slider:** artwork is now always shown whole (exact 1920:688 frame, blurred copy fills spare space on phones); no Ken-Burns crop, no scroll-shrink. Slides use a soft slide + crossfade. Arrows and dots moved below the image; the active dot is a progress bar that also times the auto-advance (pauses on hover). Slide titles/links now match their images (`slider2.jpg` = antennas, `slider1.jpg` = Sky5G AT&T).
- **Page transition:** removed the dark "curtain" wipe (it caused the grey/blank flash between pages); now a quick fade + lift.
- **Home backgrounds:** hero aurora fields + sweeping light beams + vignette; light sections get a dotted grid and a slow light streak (`SectionDecor`, so every page gets it).
- **Product cards:** images are bottom-anchored and enlarged so the title baked into each photo is out of view; only the live title shows.
- **Banners (all inner pages):** new `components/fx/BannerFX.tsx` + `.page-banner` styles - mesh gradient, grid, drifting orbs, radar sweep, pinging dots, glowing edge, light gradient headline, glass eyebrow pill; banner now sits flush under the header (no white strip).
- Not built/screenshotted here (native build binaries in node_modules are for another OS): `tsc --noEmit` passes. Run `npm install && npm run dev` and click through.
## Round 6 - slider transition, richer backgrounds, Design Services hero
- **Slider transition:** the sideways slide + crossfade is gone. Now a pure crossfade: the incoming slide fades in on top while the outgoing one stays put, then drops out, so there is no dark dip or jump. The image settles from 1.025x to 1x. Artwork is still always shown whole (contain + blurred fill).
- **Home backgrounds:** hero gets a moving perspective grid floor, twinkling stars and occasional shooting signals (`HeroBackdrop`). Applications and Partners sections are now wrapped in `SectionDecor` like the others.
- **Every page:** `SectionDecor` adds a drifting colour wash and a top hairline glow (`.fx-wash`, `.fx-hairline`).
- **Design Services hero:** two-column banner; original eyebrow, title and sub-line (text unchanged) on the left, animated antenna radiation-pattern plot (decorative SVG, no text) on the right, plus a scroll cue. Styles: `.svc-*` in `fx.css`.
- All new motion is disabled under `prefers-reduced-motion`; heavy extras are hidden on phones.
- **Validation:** not built in the authoring sandbox (bundled `node_modules` is Windows-only). Run `npm install && npm run build` and check Home, Design Services and one inner page.

## Round 7 - visible hero effects + body-section innovation
- **Why effects were invisible:** the slider filled the whole hero width, so the backdrop sat hidden behind it. The slider is now a framed panel (max 1680px, side margins) with a rotating glowing border, so aurora, stars, grid floor and shooting signals show around it. Hero also got `isolate` and more top padding (the top of the artwork was hidden under the fixed header).
- **Live effects on the artwork:** slow light sweep, scan band and three glowing sparks (all click-through).
- **Body sections:** Signal and Partners sections made transparent so the page wash shows. Stronger dotted grid and colour wash; drifting signal-wave lines at the bottom of each section; dashed orbit ring with a moving dot; a light pulse that travels along each section divider.
- **Cards on every page:** animated gradient ring on hover, image saturation lift. Targets `main div.group[class*="rounded"]`.
- Reduced motion turns all of it off; orbit and scan hidden on phones.
- Not built or browser-tested here. Run `npm install && npm run build`.

## Round 8 - dots no longer drawn over content
- The dotted grid / wash / waves layer in `SectionDecor` was painted ABOVE page content (z-5), so dots showed on top of cards, diagrams and images. It now sits BEHIND (z-0) and the content is wrapped in `relative z-[1]`.
- Plain `bg-white` page roots (About, Contact, Press, Products, Services, Team, Technology, The Latest) made transparent so the decor still shows behind them.

## Round 9 - premium navbar + home hero (presentation only)
- **New file:** `src/premium-home.css` (imported last in `main.tsx`). Everything is namespaced `sm-*`; home polish is scoped to `.sm-home`.
- **Navbar (`Navbar.tsx`):** same links, labels, dropdown items, routes and search. Now a frosted-white bar with a thin brand-gradient top line that tightens (72 -> 64px) on scroll; text links with a drawn underline instead of pills; dropdowns are soft cards with icon tiles and a hover arrow (open/close uses the existing `.nav-pop`); pill "Contact Us" CTA with arrow disc; round search/burger buttons; mobile drawer is a clean list (existing `.nav-drawer`); search modal restyled. Esc now closes search / menus / drawer, and dropdowns also open on keyboard focus.
- **Hero (`Hero.tsx`):** same copy, specs, images, buttons and routes. Deep-teal layered gradient, engineering grid, softened wave field; sliding segmented tab control; hairline "spec ledger" instead of boxed tiles; white primary button + glass ghost button; product artwork shown WHOLE in a glass frame (blurred fill, viewfinder corners, soft orbit rings). The stage is keyboard-operable (`role="button"`). Own staggered entrance (`.sm-rise`); hero is marked `data-no-motion` so `motion.ts` does not double-animate it.
- **Home sections:** decor dots/waves/orbit/streak and floating chips are hidden on the home page only, cards get a calmer border/shadow, headings a tighter tracking.
- Not run through `vite build` here (no `node_modules`/network). Syntax-checked, and layout checked in headless Chromium against a static copy of the markup + this stylesheet. Fonts there were fallbacks, so title wrapping with Manrope may differ slightly.
