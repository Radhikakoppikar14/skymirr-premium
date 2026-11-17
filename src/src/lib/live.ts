/**
 * SkyMirr "live" layer - tags existing elements so src/live.css can animate them.
 *
 *  - Headlines (h1/h2, plain single-colour only) -> .lv-shine  : light sweep across the lettering
 *  - Large contained product images              -> .lv-float  : gentle floating
 *  - Large image frames                          -> .lv-sheen  : periodic light glide
 *  - Plain-text h1/h2 headlines                  -> words rise in one by one, then the original
 *                                                   text nodes are put back untouched (+ light sweep)
 *  - Cards (div.group)                           -> cursor spotlight follows the pointer
 *  - Sections (.px-band)                         -> .lv-in     : divider draws in
 *  - Everything tagged gets .lv-vis only while on screen, so animations pause off-screen.
 *
 * It only ADDS classes / CSS variables. It never edits text, images, routes or React state,
 * and does nothing under prefers-reduced-motion.
 */
const SKIP = "header, nav, footer, [role='dialog'], [class*='marquee'], .no-reveal, [data-no-motion], a, button";

const parseRGB = (c: string) => {
  const m = c.match(/rgba?\(([\d.]+)[ ,]+([\d.]+)[ ,]+([\d.]+)(?:[ ,/]+([\d.]+))?/);
  return m ? { r: +m[1], g: +m[2], b: +m[3], a: m[4] === undefined ? 1 : +m[4] } : null;
};
const lum = (c: { r: number; g: number; b: number }) => (0.2126 * c.r + 0.7152 * c.g + 0.0722 * c.b) / 255;

export function initLive() {
  if (typeof window === "undefined") return;
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  document.documentElement.classList.add("lv-on");

  const vis = new IntersectionObserver(
    (entries) => entries.forEach((e) => e.target.classList.toggle("lv-vis", e.isIntersecting)),
    { rootMargin: "10% 0px 10% 0px" },
  );
  const bands = new IntersectionObserver(
    (entries) =>
      entries.forEach((e) => {
        if (e.isIntersecting) { e.target.classList.add("lv-in"); bands.unobserve(e.target); }
      }),
    { threshold: 0.12 },
  );

  const seen = new WeakSet<Element>();
  const rnd = (a: number, b: number) => a + Math.random() * (b - a);

  const tagHeading = (h: HTMLElement) => {
    if (h.closest(SKIP) || !h.textContent?.trim()) return;
    const cs = getComputedStyle(h);
    if (cs.backgroundClip === "text" || (cs as any).webkitBackgroundClip === "text") return;
    if (cs.backgroundImage !== "none") return;
    const col = parseRGB(cs.color);
    if (!col || col.a < 0.9) return;
    // plain headings only: every child must share the heading colour and have no gradient text
    for (const k of Array.from(h.querySelectorAll<HTMLElement>("*"))) {
      const ks = getComputedStyle(k);
      if (ks.color !== cs.color || ks.backgroundImage !== "none" || k.tagName === "IMG" || k.tagName === "svg") return;
    }
    const l = lum(col);
    if (l > 0.2 && l < 0.85) return;            // accent-coloured headings stay as designed
    h.style.setProperty("--lv-c", cs.color);
    h.style.setProperty("--lv-delay", `-${rnd(0, 6).toFixed(1)}s`);
    h.classList.add("lv-shine");
    if (l >= 0.85) h.classList.add("lv-light");
    vis.observe(h);
  };

  const tagImage = (img: HTMLImageElement) => {
    if (img.closest(SKIP) || img.closest(".hy-slide")) return;
    const r = img.getBoundingClientRect();
    const cs = getComputedStyle(img);
    // floating: sizeable "contain" artwork (product shots), not logos / photos that fill their frame
    if (cs.objectFit === "contain" && r.width >= 150 && r.height >= 110 && !img.classList.contains("mv-px")) {
      img.style.setProperty("--lv-dur", `${rnd(7, 10).toFixed(1)}s`);
      img.style.setProperty("--lv-delay", `-${rnd(0, 6).toFixed(1)}s`);
      img.classList.add("lv-float");
      vis.observe(img);
    }
    // sheen: big frames that clip their image
    const box = img.parentElement as HTMLElement | null;
    if (!box || seen.has(box)) return;
    seen.add(box);
    const bs = getComputedStyle(box);
    const br = box.getBoundingClientRect();
    if (bs.position === "static" || bs.overflow === "visible" || br.width < 240 || br.height < 140) return;
    if (getComputedStyle(box, "::before").content !== "none") return;
    if (box.matches(SKIP) || box.closest(SKIP)) return;
    box.style.setProperty("--lv-delay", `-${rnd(0, 7).toFixed(1)}s`);
    box.classList.add("lv-sheen");
    vis.observe(box);
  };

  /* ---- headline word-by-word reveal -------------------------------------------------
     Only headings made of plain text. The ORIGINAL child nodes are kept and put back when the
     animation ends, so React's DOM references stay valid and the text is never altered. */
  const splitIO = new IntersectionObserver(
    (entries) =>
      entries.forEach((e) => {
        if (!e.isIntersecting) return;
        const h = e.target as HTMLElement;
        splitIO.unobserve(h);
        playWords(h);
      }),
    { threshold: 0, rootMargin: "0px 0px -6% 0px" },
  );

  const playWords = (h: HTMLElement) => {
    const originals = Array.from(h.childNodes);
    if (!h.isConnected || originals.some((n) => n.nodeType !== 3)) { h.classList.remove("lv-pre"); tagHeading(h); return; }
    const parts = (h.textContent || "").split(/(\s+)/);
    const frag = document.createDocumentFragment();
    let i = 0;
    parts.forEach((w) => {
      if (!w) return;
      if (/^\s+$/.test(w)) { frag.appendChild(document.createTextNode(w)); return; }
      const sp = document.createElement("span");
      sp.className = "lv-w";
      sp.style.setProperty("--i", String(i++));
      sp.textContent = w;
      frag.appendChild(sp);
    });
    h.replaceChildren(frag);
    h.classList.remove("lv-pre");
    window.setTimeout(() => {
      if (!h.isConnected) return;
      try { h.replaceChildren(...originals); } catch { /* heading was re-rendered by React */ }
      tagHeading(h);
    }, i * 80 + 1100);
  };

  const wantsWords = (h: HTMLElement) => {
    if (h.closest(SKIP) || !h.childNodes.length) return false;
    if (Array.from(h.childNodes).some((n) => n.nodeType !== 3)) return false;
    const t = (h.textContent || "").trim();
    if (t.length < 8 || t.length > 140) return false;
    const cs = getComputedStyle(h);
    if (cs.backgroundImage !== "none" || cs.backgroundClip === "text") return false;
    return true;
  };

  /* ---- cursor spotlight on cards ------------------------------------------------------ */
  if (window.matchMedia("(hover: hover) and (pointer: fine)").matches) {
    let sraf = 0;
    let pe: PointerEvent | null = null;
    document.addEventListener(
      "pointermove",
      (ev) => {
        pe = ev;
        if (sraf) return;
        sraf = requestAnimationFrame(() => {
          sraf = 0;
          const card = (pe?.target as HTMLElement | null)?.closest<HTMLElement>("main div.group[class*='rounded']");
          if (!card || !pe) return;
          if (!card.classList.contains("lv-spot")) {
            if (getComputedStyle(card).backgroundImage !== "none") return;
            card.classList.add("lv-spot");
          }
          const r = card.getBoundingClientRect();
          card.style.setProperty("--mx", `${pe.clientX - r.left}px`);
          card.style.setProperty("--my", `${pe.clientY - r.top}px`);
        });
      },
      { passive: true },
    );
  }

  const scan = () => {
    document.querySelectorAll<HTMLElement>("main :is(h1,h2)").forEach((h) => {
      if (seen.has(h)) return;
      seen.add(h);
      if (wantsWords(h)) {
        h.classList.add("lv-pre");
        splitIO.observe(h);
        window.setTimeout(() => { // failsafe: never leave a headline hidden
          if (h.classList.contains("lv-pre")) { h.classList.remove("lv-pre"); splitIO.unobserve(h); tagHeading(h); }
        }, 6000);
      } else tagHeading(h);
    });
    document.querySelectorAll<HTMLImageElement>("main img").forEach((img) => {
      if (seen.has(img)) return;
      seen.add(img);
      tagImage(img);
    });
    document.querySelectorAll<HTMLElement>(".px-band").forEach((b) => {
      if (seen.has(b)) return;
      seen.add(b);
      bands.observe(b);
    });
  };

  let t = 0;
  const later = () => { clearTimeout(t); t = window.setTimeout(scan, 250); };
  new MutationObserver(later).observe(document.getElementById("root") ?? document.body, { childList: true, subtree: true });
  window.addEventListener("load", later);
  later();
}