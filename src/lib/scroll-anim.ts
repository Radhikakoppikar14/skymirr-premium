/* Scroll animations that replay EVERY time content scrolls into view (down or up):
   headings rise + un-blur, paragraphs slide up, cards/figures scale in, with a small
   stagger between siblings. Also drives a light parallax on the hero/page backgrounds.
   Skipped entirely for reduced motion. */
const CANDIDATES = "main h2, main h3, main p, main blockquote, main figure, main [class*='rounded-3xl'], main [class*='rounded-2xl']";
const SKIP = ".hz, [data-pop-grid], .sm-drawer, .sm-search-overlay, .sm-modal, section.isolate[class*='bg-gradient-to-b'], footer";

export function initScrollAnim() {
  if (typeof window === "undefined") return;
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  const timers = new WeakMap<Element, number>();

  const io = new IntersectionObserver(
    (entries) => {
      for (const e of entries) {
        const el = e.target as HTMLElement;
        if (e.isIntersecting) {
          const sibs = el.parentElement ? Array.from(el.parentElement.children).filter((c) => c.classList.contains("sa")) : [];
          const idx = Math.max(0, sibs.indexOf(el));
          el.style.setProperty("--sd", `${Math.min(idx, 6) * 70}ms`);
          requestAnimationFrame(() => el.classList.add("sa-in"));
          window.clearTimeout(timers.get(el));
          timers.set(el, window.setTimeout(() => el.setAttribute("data-sa-done", ""), 1500));
        } else {
          // out of view: reset instantly so it can play again on the next scroll
          window.clearTimeout(timers.get(el));
          el.classList.remove("sa-in");
          el.removeAttribute("data-sa-done");
        }
      }
    },
    { threshold: 0, rootMargin: "-6% 0px -8% 0px" },
  );

  const prep = (el: HTMLElement) => {
    if (el.classList.contains("sa") || el.closest(SKIP) || el.closest(".sa")) return;
    if (el.tagName === "P" && (el.textContent || "").trim().length < 24) return;
    const r = el.getBoundingClientRect();
    if (r.height < 24 || r.width < 80) return;
    const t = el.tagName;
    el.dataset.sa = /^H[1-3]$/.test(t) ? "head" : t === "P" || t === "BLOCKQUOTE" ? "text" : "card";
    el.classList.add("sa");
    io.observe(el);
  };

  const scan = () => document.querySelectorAll<HTMLElement>(CANDIDATES).forEach(prep);
  scan();
  let t = 0;
  new MutationObserver(() => { clearTimeout(t); t = window.setTimeout(scan, 80); })
    .observe(document.getElementById("root") || document.body, { childList: true, subtree: true });

  // light parallax: backgrounds and the hero banner drift as you scroll
  let raf = 0;
  const root = document.documentElement;
  const onScroll = () => {
    if (raf) return;
    raf = requestAnimationFrame(() => { root.style.setProperty("--sy", String(window.scrollY)); raf = 0; });
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
}