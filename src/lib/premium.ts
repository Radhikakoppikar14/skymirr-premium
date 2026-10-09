/**
 * SkyMirr enterprise interactions – additive, dependency-free.
 *  1. Scroll variable   – --sy on <html> (banner parallax)
 *  2. Animated counters – existing numeric leaf text (e.g. "65%", "1,200+") counts up once in view,
 *                         then the ORIGINAL text is restored exactly. Never invents numbers.
 *  3. Home section rail – side dots built from [data-rail] sections
 */
const NUM = /^([+>~<]?)(\d{1,3}(?:,\d{3})*|\d+)(\.\d+)?(\s?(?:%|\+|x|X|K|M|dB|GHz|MHz|[A-Za-z]{0,3}\+?))?$/;

export function initPremium() {
  if (typeof window === "undefined") return;
  const root = document.documentElement;
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (!reduced) {
    let ticking = false;
    window.addEventListener("scroll", () => {
      if (ticking) return; ticking = true;
      requestAnimationFrame(() => { root.style.setProperty("--sy", String(Math.min(window.scrollY, 900))); ticking = false; });
    }, { passive: true });
  }

  /* ---- counters ---- */
  const seen = new WeakSet<Element>();
  const cio = reduced ? null : new IntersectionObserver((entries) => {
    entries.forEach((en) => {
      if (!en.isIntersecting) return;
      cio!.unobserve(en.target);
      const el = en.target as HTMLElement, orig = el.textContent || "";
      const m = orig.trim().match(NUM); if (!m) return;
      const [, pre, whole, dec = "", suf = ""] = m;
      const end = parseFloat(whole.replace(/,/g, "")), comma = whole.includes(","), d = dec ? dec.length - 1 : 0;
      const t0 = performance.now(), dur = 1400;
      const tick = (t: number) => {
        const p = Math.min((t - t0) / dur, 1), v = end * (1 - Math.pow(1 - p, 3));
        let s = v.toFixed(d); if (comma) s = Number(s).toLocaleString("en-US", { minimumFractionDigits: d });
        el.textContent = p < 1 ? pre + s + suf : orig;
        if (p < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    });
  }, { threshold: 0.6 });
  const scanCounters = () => {
    if (!cio) return;
    document.querySelectorAll<HTMLElement>("main :is(span,div,p,h3,h4,strong,dd,li)").forEach((el) => {
      if (seen.has(el) || el.children.length || el.closest("[role='dialog'],form")) return;
      const txt = (el.textContent || "").trim();
      if (txt.length > 12 || !NUM.test(txt) || /^\d{4}$/.test(txt) || Number.parseFloat(txt.replace(/[^\d.]/g, "")) < 2) return;
      seen.add(el); el.classList.add("px-count"); cio.observe(el);
    });
  };

  /* ---- section rail ---- */
  const rail = document.createElement("nav");
  rail.className = "px-rail"; rail.setAttribute("aria-label", "Page sections");
  document.body.appendChild(rail);
  let io: IntersectionObserver | null = null;
  const build = () => {
    const secs = Array.from(document.querySelectorAll<HTMLElement>("[data-rail]"));
    io?.disconnect(); rail.innerHTML = "";
    if (secs.length < 2) return;
    const links = secs.map((s) => {
      const a = document.createElement("a");
      a.href = "#" + s.id; a.dataset.label = s.dataset.rail || "";
      a.addEventListener("click", (ev) => { ev.preventDefault(); s.scrollIntoView({ behavior: "smooth", block: "start" }); });
      rail.appendChild(a); return a;
    });
    io = new IntersectionObserver((entries) => {
      entries.forEach((en) => { if (en.isIntersecting) links.forEach((l, i) => l.toggleAttribute("data-active", secs[i] === en.target)); });
    }, { rootMargin: "-45% 0px -45% 0px" });
    secs.forEach((s) => io!.observe(s));
  };
  let t = 0;
  const refresh = () => { build(); scanCounters(); };
  new MutationObserver(() => { clearTimeout(t); t = window.setTimeout(refresh, 200); })
    .observe(document.getElementById("root")!, { childList: true, subtree: true });
  refresh();
}