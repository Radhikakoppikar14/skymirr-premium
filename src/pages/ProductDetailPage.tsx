import React, { useState } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import { ArrowRight, Percent, Radio, Ruler, ShoppingCart, Signal } from "lucide-react";
import { CATALOG_ITEMS, resolveProduct } from "../data/catalog";
import { products as baseProducts } from "../data/products";
import {
  PRODUCT_DETAILS,
  CATEGORY_DEFAULTS,
  CATEGORY_LABELS,
  norm,
  type Block,
  type ChipKind,
  type Group,
  type Section,
} from "../data/productsDetails";
import { ProductCard } from "../components/products/ProductCard";

const CATALOG_URL = "/catalog/skymirr-product-catalog.pdf";

const card = "rounded-2xl border border-[#DFEAF0] bg-white p-6 shadow-sm";
const heading = "mb-3 text-sm font-bold text-[#087F98]";
const btnPrimary =
  "inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#087F98] to-[#18A6BE] px-4 py-2.5 text-xs font-bold text-white transition-all hover:from-[#075568] hover:to-[#087F98] shadow-xs cursor-pointer";
const btnOutline =
  "inline-flex items-center gap-2 rounded-xl border border-[#DFEAF0] bg-white px-4 py-2.5 text-xs font-bold text-[#152C39] transition-colors hover:border-[#18A6BE] hover:text-[#087F98] shadow-xs cursor-pointer";

const chipIcon: Record<ChipKind, React.ReactNode> = {
  eff: <Percent className="h-3.5 w-3.5" />,
  freq: <Radio className="h-3.5 w-3.5" />,
  size: <Ruler className="h-3.5 w-3.5" />,
  gain: <Signal className="h-3.5 w-3.5" />,
};

function SafeImg({ src, alt, className }: { src: string; alt: string; className?: string }) {
  const [ok, setOk] = useState(true);
  if (!ok) return null;
  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      className={className}
      onError={() => {
        console.warn(`[ProductDetail] image not found: ${src}`);
        setOk(false);
      }}
    />
  );
}

function renderItem(t: string) {
  const m = t.match(/^([^:]{2,45}):\s*(.+)$/);
  if (!m) return t;
  return (
    <>
      <span className="font-semibold text-slate-800">{m[1]}:</span> {m[2]}
    </>
  );
}

function SectionBlock({ s }: { s: Section }) {
  return (
    <div>
      <h2 className={heading}>{s.title}</h2>
      {s.text?.map((t) => (
        <p key={t} className="mb-2 text-sm leading-relaxed text-slate-600">
          {t}
        </p>
      ))}
      {s.tags && (
        <p className="text-sm font-semibold text-blue-700">{s.tags.join(", ")}</p>
      )}
      {s.list && (
        <ul className="list-disc space-y-1.5 pl-5 text-sm leading-relaxed text-slate-600">
          {s.list.map((t) => (
            <li key={t}>{renderItem(t)}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

function TableBlock({ b }: { b: Extract<Block, { type: "table" }> }) {
  const cols = Math.max(b.head?.length ?? 0, ...b.rows.map((r) => r.length));
  const span = (len: number) => (len < cols ? cols - len + 1 : 1);
  return (
    <div className={card}>
      {b.title && <h3 className="mb-3 text-center text-sm font-bold text-slate-800">{b.title}</h3>}
      <div className="overflow-x-auto rounded-xl border border-slate-200">
        <table className="w-full min-w-max border-collapse text-center text-xs sm:text-sm">
          {b.head && (
            <thead>
              {b.bands ? (
                <>
                  <tr className="bg-slate-50">
                    <th rowSpan={2} className="border-b border-r border-slate-200 px-3 py-2.5 font-bold text-slate-800">
                      {b.head[0]}
                    </th>
                    {b.bands.map((band) => (
                      <th
                        key={band.label}
                        colSpan={band.span}
                        className="border-b border-l border-slate-200 px-3 py-2 text-xs font-bold text-slate-700"
                      >
                        {band.label}
                      </th>
                    ))}
                  </tr>
                  <tr className="bg-slate-50">
                    {b.head.slice(1).map((c, i) => (
                      <th key={i} className="border-b border-slate-200 px-3 py-2 font-bold text-slate-800">
                        {c}
                      </th>
                    ))}
                  </tr>
                </>
              ) : (
                <tr className="bg-slate-50">
                  {b.head.map((c, i) => (
                    <th
                      key={i}
                      colSpan={i === b.head!.length - 1 ? span(b.head!.length) : 1}
                      className="border-b border-slate-200 px-3 py-2.5 font-bold text-slate-800"
                    >
                      {c}
                    </th>
                  ))}
                </tr>
              )}
            </thead>
          )}
          <tbody>
            {b.rows.map((row, r) => (
              <tr key={r} className="border-b border-slate-100 last:border-0">
                {row.map((c, i) =>
                  i === 0 ? (
                    <th key={i} scope="row" className="bg-slate-50/50 px-3 py-2.5 text-left font-semibold text-slate-800">
                      {c}
                    </th>
                  ) : (
                    <td
                      key={i}
                      colSpan={i === row.length - 1 ? span(row.length) : 1}
                      className="px-3 py-2.5 font-mono text-slate-700"
                    >
                      {c}
                    </td>
                  ),
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {b.note && <p className="mt-2 text-[11px] italic text-slate-500">{b.note}</p>}
    </div>
  );
}

function BlockView({ b }: { b: Block }) {
  if (b.type === "table") return <TableBlock b={b} />;
  if (b.type === "figure")
    return (
      <figure className={card}>
        {b.title && <figcaption className={heading}>{b.title}</figcaption>}
        <SafeImg src={b.src} alt={b.title ?? "Product diagram"} className="mx-auto max-h-96 w-auto max-w-full object-contain" />
      </figure>
    );
  return (
    <div className={`${card} grid items-center gap-6 ${b.src ? "md:grid-cols-2" : ""}`}>
      <div>
        <h3 className={heading}>{b.title}</h3>
        <p className="text-sm leading-relaxed text-slate-600">{b.text}</p>
      </div>
      {b.src && <SafeImg src={b.src} alt={b.title} className="mx-auto max-h-72 w-auto max-w-full object-contain" />}
    </div>
  );
}

const isWide = (b: Block) => ("wide" in b && Boolean((b as any).wide)) || false;

export default function ProductDetailPage({ productId }: { productId?: string }) {
  const params = useParams<{ slug?: string }>();
  const history = useHistory();
  const [heroFailed, setHeroFailed] = useState(false);

  const key = norm(productId ?? params.slug ?? "");

  let catKey: string | undefined;
  let item: (typeof CATALOG_ITEMS)[string][number] | undefined;
  for (const [k, items] of Object.entries(CATALOG_ITEMS)) {
    const f = items.find((i) => norm(i.id) === key || norm(i.name) === key);
    if (f) {
      catKey = k;
      item = f;
      break;
    }
  }

  const spec = resolveProduct(key);
  const extra = baseProducts.find((p) => norm(p.slug) === key);
  const detail = PRODUCT_DETAILS[key];

  if (!item && !spec) {
    return (
      <main className="mx-auto max-w-3xl px-4 pb-24 pt-36 text-center">
        <h1 className="mb-4 text-3xl font-black text-slate-900">Product not found</h1>
        <p className="mb-6 text-slate-600">We couldn’t find “{params.slug ?? productId}”. It may have been renamed or removed.</p>
        <Link to="/products" className={btnPrimary}>
          Back to all antennas
        </Link>
      </main>
    );
  }

  const rawName = item?.name ?? spec?.name ?? "";
  const model = /^[A-Za-z]{3,5}\s?\d{2,4}$/.test(rawName) ? rawName.replace(/\s+/g, "") : rawName;
  const subtitle = item?.subtitle ?? spec?.tagline ?? extra?.title ?? "";
  const image = item?.image ?? spec?.image ?? extra?.image ?? "";
  const catDefault = CATEGORY_DEFAULTS[catKey ?? ""] ?? CATEGORY_DEFAULTS.cellular;
  const intro = catDefault.intro.replace("{model}", model);

  const specDescription = spec && spec.description && spec.description !== subtitle ? spec.description : undefined;
  const description = detail?.description ?? specDescription ?? extra?.overview ?? subtitle;
  const datasheetUrl = detail?.datasheetUrl ?? spec?.datasheetUrl ?? extra?.datasheetUrl;

  let heroChips: { kind: ChipKind; text: string }[] = [];
  if (detail?.chips) {
    heroChips = detail.chips;
  } else if (extra?.keySpecs?.length) {
    heroChips = extra.keySpecs.map((k) => ({
      kind: (/freq/i.test(k.label) ? "freq" : /size|dim/i.test(k.label) ? "size" : "gain") as ChipKind,
      text: k.value,
    }));
  } else {
    if (spec?.frequencyRange) heroChips.push({ kind: "freq", text: spec.frequencyRange });
    if (spec?.dimensions) heroChips.push({ kind: "size", text: spec.dimensions });
  }

  const appText = extra?.applications;
  const appTags = spec?.applications?.length ? spec.applications : catDefault.tags;
  const left: Section[] = detail?.left ?? [
    { title: "Introduction", text: [extra?.overview ?? specDescription ?? intro] },
    appText ? { title: "Application", text: [appText] } : { title: "Application", text: ["Typical uses:"], tags: appTags },
  ];

  const right: Section[] = detail?.right ?? [
    ...(spec?.keyFeatures?.length ? [{ title: "Features and Benefits", list: spec.keyFeatures }] : []),
    ...(spec?.dimensions && !heroChips.some((c) => c.kind === "size")
      ? [{ title: "Physical Characteristics", list: [`Dimensions: ${spec.dimensions}`] }]
      : []),
    ...(extra?.note ? [{ title: "Note", text: [extra.note] }] : []),
  ];

  const specRows = (extra?.specs?.length ? extra.specs : spec?.specs) ?? [];
  const fallbackGroups: Group[] = [];
  if (specRows.length) {
    fallbackGroups.push({
      heading: "Specifications",
      blocks: [
        { type: "table", wide: true, rows: specRows.map((s) => [s.label, s.value]) },
        ...(extra?.performance ?? []).map((p) => ({ type: "figure" as const, title: p.label, src: p.src })),
      ],
    });
  }
  const groups = detail?.groups ?? fallbackGroups;

  const related = (catKey ? CATALOG_ITEMS[catKey] : []).filter((i) => i.id !== item?.id).slice(0, 3);
  const contact = (extraQuery = "") => `/contact?product=${encodeURIComponent(model)}${extraQuery}`;
  const showEmptyNotice = groups.length === 0 && right.length === 0;

  return (
    <main className="min-h-screen bg-[#fdfbf7] pb-24 text-slate-900">
      <section className="bg-[#f3f7fd] pb-10 pt-28 sm:pt-36">
        <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-4 sm:px-6 md:grid-cols-[1.2fr_1fr] lg:px-8">
          <div className="space-y-5">
            <nav className="flex flex-wrap items-center gap-2 text-xs text-slate-500" aria-label="Breadcrumb">
              <Link to="/products" className="text-blue-600 hover:underline">
                Antennas
              </Link>
              {catKey && (
                <>
                  <span aria-hidden="true">/</span>
                  <Link to={`/products?cat=${catKey}`} className="text-blue-600 hover:underline">
                    {CATEGORY_LABELS[catKey] ?? catKey}
                  </Link>
                </>
              )}
            </nav>

            <span className="inline-block rounded-full bg-blue-50 px-3.5 py-1 text-[11px] font-bold text-blue-700 border border-blue-200">
              Now Available
            </span>
            <h1 className="text-4xl font-black tracking-tight text-slate-900 sm:text-5xl">{model}</h1>
            {subtitle && <p className="text-base font-semibold text-slate-800">{subtitle}</p>}
            {description && <p className="max-w-xl text-sm leading-relaxed text-slate-600">{description}</p>}

            {heroChips.length > 0 && (
              <ul className="flex flex-wrap gap-3">
                {heroChips.map((c) => (
                  <li
                    key={c.text}
                    className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3.5 py-1.5 text-xs font-semibold text-slate-700 shadow-2xs"
                  >
                    <span className="text-blue-600">{chipIcon[c.kind]}</span>
                    {c.text}
                  </li>
                ))}
              </ul>
            )}

            <div className="flex flex-wrap items-center gap-3 pt-1">
              <Link to={contact()} className={btnPrimary}>
                Contact Us Now <ArrowRight className="h-3.5 w-3.5" />
              </Link>
              {datasheetUrl && (
                <a href={datasheetUrl} target="_blank" rel="noopener noreferrer" className={btnOutline}>
                  Download Datasheet
                </a>
              )}
              <Link to={contact("&intent=preorder")} className={btnPrimary}>
                Pre-order Now <ArrowRight className="h-3.5 w-3.5" />
              </Link>
              {detail?.buyLinks?.length ? (
                detail.buyLinks.map((l) => (
                  <a key={l.label} href={l.url} target="_blank" rel="noopener noreferrer" className={btnPrimary}>
                    Buy on {l.label} <ShoppingCart className="h-3.5 w-3.5" />
                  </a>
                ))
              ) : (
                detail?.buyUrl && (
                  <a href={detail.buyUrl} target="_blank" rel="noopener noreferrer" className={btnPrimary}>
                    Buy Online <ShoppingCart className="h-3.5 w-3.5" />
                  </a>
                )
              )}
            </div>
          </div>

          <div className="flex min-h-[16rem] items-center justify-center bg-white rounded-3xl p-8 border border-amber-900/10 shadow-sm">
            {heroFailed || !image ? (
              <span className="text-3xl font-black text-blue-600">{model}</span>
            ) : (
              <img
                src={image}
                alt={`${model} antenna`}
                className="max-h-72 w-auto max-w-full object-contain drop-shadow-lg"
                onError={() => setHeroFailed(true)}
              />
            )}
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <section className={`grid grid-cols-1 gap-6 pt-6 ${right.length ? "md:grid-cols-2" : ""}`}>
          <div className={`${card} space-y-5`}>
            {left.map((s) => (
              <SectionBlock key={s.title} s={s} />
            ))}
          </div>
          {right.length > 0 && (
            <div className={`${card} space-y-5`}>
              {right.map((s) => (
                <SectionBlock key={s.title} s={s} />
              ))}
            </div>
          )}
        </section>

        {groups.map((g, gi) => (
          <section key={gi} className="mt-14">
            {g.heading && <h2 className="mb-6 text-center text-3xl font-bold text-slate-900">{g.heading}</h2>}
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {g.blocks.map((b, bi) => (
                <div key={bi} className={isWide(b) ? "md:col-span-2" : ""}>
                  <BlockView b={b} />
                </div>
              ))}
            </div>
          </section>
        ))}

        {showEmptyNotice && (
          <section className={`${card} mt-10 text-center`}>
            <p className="text-sm text-slate-600">
              Full electrical specifications for {model} are available on request.{" "}
              <Link to={contact()} className="font-semibold text-blue-600 hover:underline">
                Contact us
              </Link>{" "}
              for the datasheet.
            </p>
          </section>
        )}

        <section className="mt-14 flex flex-col items-start justify-between gap-4 rounded-2xl border border-amber-900/10 bg-white p-6 sm:flex-row sm:items-center shadow-sm">
          <div>
            <h2 className="text-sm font-bold text-slate-800">Looking for some other Antenna?</h2>
            <p className="mt-1 text-xs text-blue-600 font-medium">Download the Master Product Catalog to see complete Antenna offerings.</p>
          </div>
          <a href={CATALOG_URL} download className={btnPrimary}>
            Download Catalog
          </a>
        </section>

        {related.length > 0 && (
          <section className="mt-14">
            <h2 className="mb-6 text-2xl font-black text-slate-900">
              More {CATEGORY_LABELS[catKey ?? ""] ?? ""} Antennas
            </h2>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((r) => (
                <ProductCard
                  key={r.id}
                  name={r.name}
                  subtitle={r.subtitle}
                  image={r.image}
                  badge={r.badge}
                  onView={() => {
                    history.push(`/products/${r.id}`);
                    window.scrollTo({ top: 0 });
                  }}
                />
              ))}
            </div>
          </section>
        )}
      </div>
    </main>
  );
}