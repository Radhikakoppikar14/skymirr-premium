/* Fly-in entrance for home-page images and the video: each one slides in from the
   left, right or below (decided by where it sits on screen) as it scrolls into view.
   Works with dynamically rendered content; skipped for reduced motion. */
const SEL = ".sm-home img, .sm-home video, .sm-home iframe";

export function initFlyIn() {
  if (typeof window === "undefined") return;
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  const io = new IntersectionObserver(
    (entries) => {
      for (const e of entries) {
        if (!e.isIntersecting) continue;
        const el = e.target as HTMLElement;
        io.unobserve(el);
        requestAnimationFrame(() => el.classList.add("fly-in"));
        // hand the element back to its normal hover transitions afterwards
        window.setTimeout(() => {
          el.classList.remove("fly", "fly-in");
          delete el.dataset.fly;
        }, 1500);
      }
    },
    { threshold: 0.15, rootMargin: "0px 0px -6% 0px" },
  );

  const prep = (node: Element) => {
    let el = node as HTMLElement;
    if (el.dataset.fly || el.closest(".hz")) return;
    const r = el.getBoundingClientRect();
    if (r.width < 120 || r.height < 80) return; // icons, logos, avatars
    const isMedia = el.tagName === "VIDEO" || el.tagName === "IFRAME";
    // animate the video's rounded frame, not just the bare player
    const p = el.parentElement;
    if (isMedia && p && p.getBoundingClientRect().width <= r.width * 1.15) el = p;
    if (el.dataset.fly) return;
    const cx = r.left + r.width / 2;
    const dir = isMedia ? "up" : cx < innerWidth * 0.42 ? "left" : cx > innerWidth * 0.58 ? "right" : "up";
    el.dataset.fly = dir;
    el.classList.add("fly");
    io.observe(el);
  };

  const scan = () => document.querySelectorAll(SEL).forEach(prep);
  scan();
  let t = 0;
  new MutationObserver(() => { clearTimeout(t); t = window.setTimeout(scan, 80); })
    .observe(document.getElementById("root") || document.body, { childList: true, subtree: true });
}