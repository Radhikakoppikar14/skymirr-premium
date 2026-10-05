/**
 * SkyMirr motion system – one small, dependency-free layer used by every page.
 *
 *  1. Progressive scroll reveal  – headings / text / cards / CTAs fade-up with a short stagger;
 *                                  images unveil. Elements are tagged automatically, so every
 *                                  page (current and future) gets the same behaviour.
 *  2. Image parallax              – large cover images drift slowly inside their frame.
 *  3. Pointer-driven image drift  – images inside cards follow the cursor a few pixels.
 *  4. Scroll-linked backdrops     – any [data-scroll-speed] element moves at its own speed.
 *  5. Header state                – adds [data-scrolled] to <header> after 8px of scroll.
 *
 * Rules: only opacity / transform / translate / scale / clip-path are animated (GPU friendly),
 * one IntersectionObserver + one rAF-throttled scroll handler, everything is skipped for
 * prefers-reduced-motion, and nothing is hidden unless this script is running
 * (CSS keys off html.mv-on), so content can never get stuck invisible.
 * It never changes text, data, routes or images.
 */

const EXCLUDE = [
  "header", "nav", ".no-reveal", ".bg-executive-gradient", "[data-no-motion]", "[role='dialog']",
  "[class*='-animate']", "[class*='marquee']", ".no-scrollbar", "[aria-hidden='true']",
  "[class*='opacity-0']", "[class*='fixed']", "[class*='sticky']",
].join(",");

const BLOCK = [
  "h1", "h2", "h3", "h4", "h5", "p", "li", "blockquote", "figcaption", "dt", "dd",
  "figure", "form", "table", "details",
  "[class*='rounded-xl']", "[class*='rounded-2xl']", "[class*='rounded-3xl']",
  "[class*='grid-cols'] > *", ".glass-panel-light", ".card-gradient-hover",
].join(",");

const CTA = "a[class*='rounded-full'], button[class*='rounded-full'], a[class*='bg-blue-600'], button[class*='bg-blue-600']";

export function initMotion() {
  if (typeof window === "undefined") return;

  const onScrollHeader = () =>
    document.querySelector("header")?.toggleAttribute("data-scrolled", window.scrollY > 8);
  window.addEventListener("scroll", onScrollHeader, { passive: true });
  onScrollHeader();

  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  document.documentElement.classList.add("mv-on");

  const vh = () => window.innerHeight || 800;

  /* header slides away on scroll-down, returns on scroll-up */
  let lastY = window.scrollY;
  window.addEventListener(
    "scroll",
    () => {
      const h = document.querySelector("header");
      if (!h) return;
      const y = window.scrollY;
      const busy =
        h.matches(":hover") ||
        h.contains(document.activeElement) ||
        !!document.querySelector(".nav-drawer[data-open='true']");
      if (y > 260 && y > lastY + 6 && !busy) h.setAttribute("data-hidden", "");
      else if (y < lastY - 6 || y < 260) h.removeAttribute("data-hidden");
      lastY = y;
    },
    { passive: true },
  );

  /* ---------------------------------------------------------------- reveal */
  const finish = (el: HTMLElement) =>
    window.setTimeout(() => {
      el.classList.remove("mv", "mv-img", "mv-in");
      el.style.removeProperty("transition-delay");
    }, 1500);

  const io = new IntersectionObserver(
    (entries) => {
      const hits = entries
        .filter((e) => e.isIntersecting)
        .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top || a.boundingClientRect.left - b.boundingClientRect.left);
      hits.forEach((e, i) => {
        const el = e.target as HTMLElement;
        io.unobserve(el);
        el.style.transitionDelay = `${Math.min(i, 5) * 70}ms`;
        el.classList.add("mv-in");
        finish(el);
      });
    },
    { threshold: 0, rootMargin: "0px 0px -6% 0px" },
  );

  const hide = (el: HTMLElement, cls: "mv" | "mv-img") => {
    el.dataset.mv = "1";
    el.classList.add(cls);
    io.observe(el);
  };

  /* -------------------------------------------------------------- parallax */
  const live = new Set<HTMLImageElement>();
  const pio = new IntersectionObserver(
    (entries) => {
      for (const e of entries) {
        const img = e.target as HTMLImageElement;
        e.isIntersecting ? live.add(img) : live.delete(img);
      }
      schedule();
    },
    { rootMargin: "20% 0px 20% 0px" },
  );

  let raf = 0;
  const schedule = () => {
    if (!raf) raf = requestAnimationFrame(frame);
  };
  const frame = () => {
    raf = 0;
    const h = vh();
    live.forEach((img) => {
      const box = img.parentElement;
      if (!box) return;
      const r = box.getBoundingClientRect();
      const p = Math.max(-1, Math.min(1, (r.top + r.height / 2 - h / 2) / (h / 2 + r.height / 2)));
      img.style.setProperty("--py", `${(p * -28).toFixed(1)}px`);
    });
    const y = Math.min(window.scrollY, 1200);
    document.querySelectorAll<HTMLElement>("[data-scroll-speed]").forEach((el) => {
      el.style.translate = `0 ${(y * parseFloat(el.dataset.scrollSpeed || "0")).toFixed(1)}px`;
    });
    // hero media eases back and rounds off as you scroll away (Apple/Taoglas-style depth)
    const k = Math.min(window.scrollY / 520, 1);
    document.querySelectorAll<HTMLElement>("[data-scroll-shrink]").forEach((el) => {
      el.style.scale = (1 - k * 0.06).toFixed(4);
      el.style.opacity = (1 - k * 0.25).toFixed(3);
    });
  };
  window.addEventListener("scroll", schedule, { passive: true });
  window.addEventListener("resize", schedule, { passive: true });

  /* ----------------------------------------------------------------- scan */
  const scan = () => {
    document.querySelectorAll<HTMLElement>("main, footer").forEach(scanRoot);
  };
  const scanRoot = (root: HTMLElement) => {
    root.querySelectorAll<HTMLElement>(BLOCK).forEach((el) => {
      if (el.dataset.mv || el.closest(EXCLUDE) || el.matches("[class*='absolute']")) return;
      if (el.parentElement?.closest("[data-mv]")) { el.dataset.mv = "n"; return; } // inside an animated block
      hide(el, "mv");
    });

    root.querySelectorAll<HTMLElement>(CTA).forEach((el) => {
      if (el.dataset.mv || el.closest(EXCLUDE) || el.parentElement?.closest("[data-mv]")) return;
      if (el.offsetWidth > 110 && el.offsetHeight > 32) hide(el, "mv");
    });

    root.querySelectorAll<HTMLImageElement>("img").forEach((img) => {
      if (img.dataset.mvi || img.closest(EXCLUDE)) return;
      img.dataset.mvi = "1";
      hide(img, "mv-img");
      const box = img.parentElement;
      if (box && box.className.includes("overflow-hidden") && img.className.includes("object-cover")) {
        img.classList.add("mv-px");
        pio.observe(img);
      }
    });
  };

  // Scan synchronously inside the mutation callback => runs before the browser paints new content
  new MutationObserver(scan).observe(document.body, { childList: true, subtree: true });
  scan();

  // Failsafe: anything in view that is somehow still hidden is revealed
  window.setInterval(() => {
    document.querySelectorAll<HTMLElement>(".mv:not(.mv-in), .mv-img:not(.mv-in)").forEach((el) => {
      const r = el.getBoundingClientRect();
      if (r.top < vh() && r.bottom > 0) { el.classList.add("mv-in"); finish(el); }
    });
  }, 1500);

  /* ---------------------------------------------- pointer drift on images */
  if (window.matchMedia("(hover: hover) and (pointer: fine)").matches) {
    let box: HTMLElement | null = null;
    let img: HTMLElement | null = null;
    let pending: PointerEvent | null = null;
    let praf = 0;

    const reset = () => {
      img?.style.removeProperty("--ix");
      img?.style.removeProperty("--iy");
      box = img = null;
    };
    const move = () => {
      praf = 0;
      const e = pending;
      if (!e) return;
      const t = e.target as HTMLElement | null;
      const b = t?.closest<HTMLElement>("main .overflow-hidden") ?? null;
      if (b !== box) {
        reset();
        const i = b && !b.closest(".no-reveal, [class*='marquee']") ? b.querySelector<HTMLElement>("img.mv-pan-ok, img") : null;
        if (b && i && b.offsetWidth >= 200) { box = b; img = i; i.classList.add("mv-pan"); }
      }
      if (box && img) {
        const r = box.getBoundingClientRect();
        img.style.setProperty("--ix", `${(-((e.clientX - r.left) / r.width - 0.5) * 12).toFixed(1)}px`);
        img.style.setProperty("--iy", `${(-((e.clientY - r.top) / r.height - 0.5) * 12).toFixed(1)}px`);
      }
    };
    window.addEventListener("pointermove", (e) => { pending = e; if (!praf) praf = requestAnimationFrame(move); }, { passive: true });
    document.addEventListener("pointerleave", reset);
  }
}
