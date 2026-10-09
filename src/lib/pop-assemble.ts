/* Scroll-triggered "pop-up assembly": the cards of any [data-pop-grid] fly in from
   different directions, scale up and snap into place one after another (staggered)
   when the grid scrolls into view. Cards added later (e.g. switching category) animate too. */
export function initPopAssemble() {
  if (typeof window === "undefined") return;
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  const io = new IntersectionObserver(
    (entries) => {
      for (const e of entries) {
        if (!e.isIntersecting) continue;
        (e.target as HTMLElement).setAttribute("data-in", "");
        io.unobserve(e.target);
      }
    },
    { threshold: 0, rootMargin: "0px 0px -8% 0px" },
  );

  const index = (grid: Element) =>
    Array.from(grid.children).forEach((c, i) => (c as HTMLElement).style.setProperty("--i", String(i % 9)));

  const scan = () => {
    // inner pages: every card grid in the overlapping content sections assembles too
    document.querySelectorAll<HTMLElement>('main section[class*="-mt-8"], main section[class*="-mt-8"] .grid').forEach((g) => {
      if (g.classList.contains("grid") && g.children.length >= 2) g.setAttribute("data-pop-grid", "");
    });
    document.querySelectorAll<HTMLElement>("[data-pop-grid]").forEach((g) => {
      index(g);
      if (!g.dataset.popSeen) { g.dataset.popSeen = "1"; io.observe(g); }
    });
  };
  scan();
  let t = 0;
  new MutationObserver(() => { clearTimeout(t); t = window.setTimeout(scan, 40); })
    .observe(document.getElementById("root") || document.body, { childList: true, subtree: true });
}