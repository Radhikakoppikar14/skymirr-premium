import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import {
  Search,
  ChevronDown,
  Menu,
  X,
  ArrowUpRight,
  Radio,
  Cpu,
  Layers,
  Sparkles,
  Users,
  Building2,
  Newspaper,
  BookOpen,
} from "lucide-react";
import { COMPANY_INFO, PRODUCTS_DATA } from "../data/skymirrData";
import { CATALOG_ITEMS } from "../data/catalog";

/* Mega-menu data: grouped straight from PRODUCTS_DATA (no new product copy). */
const ANTENNA_CATS: { id: string; label: string }[] = [
  { id: "cellular", label: "Cellular 3G/4G/5G" },
  { id: "wifi", label: "Wi-Fi 6E / 7" },
  { id: "fpcb", label: "FPCB Flexible" },
  { id: "embedded", label: "Embedded IoT" },
  { id: "gnss", label: "GNSS & GPS" },
  { id: "customized", label: "Custom Antenna" },
  { id: "chip", label: "Chip Antennas" },
];
const ROUTERS = PRODUCTS_DATA.filter((p) => p.category === "router");
const TRACKERS = PRODUCTS_DATA.filter((p) => p.category === "tracker");

interface NavbarProps {
  currentRoute?: string;
  onNavigate?: (route: string) => void;
  onOpenProductDetail?: (productId: string) => void;
}

type MenuKey = null | "products" | "latest" | "about";

export const Navbar: React.FC<NavbarProps> = ({
  currentRoute = "home",
  onNavigate,
  onOpenProductDetail,
}) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchOpen, setSearchOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<MenuKey>(null);
  const [accOpen, setAccOpen] = useState<string | null>(null);

  const searchResults = (() => {
    const query = searchQuery.trim().toLowerCase();
    if (!query) return [];

    return PRODUCTS_DATA.filter((product) =>
      [
        product.name,
        product.category,
        product.tagline,
        product.description,
        product.frequencyRange,
        product.dimensions,
        ...product.keyFeatures,
        ...product.applications,
        ...product.specs.flatMap((spec) => [spec.label, spec.value]),
      ]
        .join(" ")
        .toLowerCase()
        .includes(query)
    ).slice(0, 6);
  })();

  const closeSearch = () => {
    setSearchOpen(false);
    setSearchQuery("");
  };

  // Esc closes the search modal, dropdowns and the mobile drawer
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== "Escape") return;
      setSearchOpen(false);
      setSearchQuery("");
      setOpenMenu(null);
      setMobileMenuOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const openProduct = (productId: string) => {
    closeSearch();
    if (productId === "tamp-161") {
      onNavigate?.("tamp-161");
      return;
    }
    onOpenProductDetail?.(productId);
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchResults[0]) openProduct(searchResults[0].id);
  };

  const handleNavClick = (route: string) => {
    setMobileMenuOpen(false);
    setOpenMenu(null);
    onNavigate?.(route);
    window.location.hash = "#/" + (route === "home" ? "" : route);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  /* Antenna category -> products page with that category tab selected */
  const goCategory = (cat: string) => {
    window.history.replaceState({}, "", `${window.location.pathname}?cat=${cat}`);
    handleNavClick("products");
    window.dispatchEvent(new CustomEvent("sm:category", { detail: { cat } }));
  };

  const goProduct = (id: string) => {
    setOpenMenu(null);
    setMobileMenuOpen(false);
    openProduct(id);
  };

  const isActive = (r: string) => currentRoute === r;

  const productsActive =
    isActive("products") ||
    isActive("tamp-161") ||
    isActive("sky5g-router") ||
    isActive("tracker-detail") ||
    isActive("product-detail");
  const latestActive =
    isActive("press-releases") || isActive("blogs") || isActive("the-latest");
  const aboutActive = isActive("about") || isActive("team");

  /* wrapper for a dropdown: hover + keyboard focus both open it */
  const dropdownHandlers = (key: Exclude<MenuKey, null>) => ({
    onMouseEnter: () => setOpenMenu(key),
    onMouseLeave: () => setOpenMenu(null),
    onFocus: () => setOpenMenu(key),
    onBlur: (e: React.FocusEvent<HTMLDivElement>) => {
      if (!e.currentTarget.contains(e.relatedTarget as Node | null)) setOpenMenu(null);
    },
  });

  return (
    <header className="sm-header fixed top-0 inset-x-0 z-50">
      <div className="sm-header-inner">
        {/* Brand */}
        <a
          href="#/"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick("home");
          }}
          className="sm-brand"
          aria-label="SkyMirr Home"
        >
          <img
            src={COMPANY_INFO.logo}
            alt="SkyMirr Technologies"
            className="sm-brand-img"
          />
        </a>

        {/* Primary navigation */}
        <nav className="sm-nav flex items-center space-x-6 text-white" aria-label="Primary">
          <button
            onClick={() => handleNavClick("home")}
            className="sm-link text-white hover:text-cyan-400 transition-colors"
            data-active={isActive("home") || undefined}
          >
            <span>Home</span>
          </button>

          {/* Products - mega menu: columns, sub-links and a featured image card */}
          <div className="sm-dd sm-dd-mega" {...dropdownHandlers("products")}>
            <button
              onClick={() => handleNavClick("products")}
              className="sm-link text-white hover:text-cyan-400 transition-colors flex items-center gap-1"
              data-active={productsActive || undefined}
              aria-haspopup="true"
              aria-expanded={openMenu === "products"}
            >
              <span>Products</span>
              <ChevronDown className="sm-chev" />
            </button>
            <div className="nav-pop sm-pop sm-mega" data-open={openMenu === "products"}>
              <div className="sm-mega-cols">
                <div className="sm-mega-col">
                  <button onClick={() => handleNavClick("products")} className="sm-mega-head">
                    <span className="sm-pop-ico"><Radio /></span>
                    <span className="sm-pop-txt"><b>Antennas</b><small>600–6000 MHz Wideband &amp; MIMO</small></span>
                  </button>
                  <div className="sm-mega-links">
                    {ANTENNA_CATS.map((c) => (
                      <button key={c.id} onClick={() => goCategory(c.id)} className="sm-mega-link">
                        <span>{c.label}</span>
                        <em className="sm-mega-count">{(CATALOG_ITEMS[c.id] ?? []).length}</em>
                      </button>
                    ))}
                  </div>
                </div>
                <div className="sm-mega-stack">
                <div className="sm-mega-col">
                  <button onClick={() => handleNavClick("sky5g-router")} className="sm-mega-head">
                    <span className="sm-pop-ico"><Cpu /></span>
                    <span className="sm-pop-txt"><b>5G Routers</b><small>Sky5G Carrier Certified CPE</small></span>
                  </button>
                  <div className="sm-mega-links">
                    {ROUTERS.map((p) => (
                      <button key={p.id} onClick={() => goProduct(p.id)} className="sm-mega-link">
                        <span>{p.name}</span><ArrowUpRight />
                      </button>
                    ))}
                  </div>
                </div>
                <div className="sm-mega-col">
                  <button onClick={() => handleNavClick("tracker-detail")} className="sm-mega-head">
                    <span className="sm-pop-ico"><Layers /></span>
                    <span className="sm-pop-txt"><b>Asset Trackers</b><small>LIPA122 Real-Time Multi-Sensor</small></span>
                  </button>
                  <div className="sm-mega-links">
                    {TRACKERS.map((p) => (
                      <button key={p.id} onClick={() => goProduct(p.id)} className="sm-mega-link">
                        <span>{p.name}</span><ArrowUpRight />
                      </button>
                    ))}
                  </div>
                </div>
                </div>
              </div>
            </div>
          </div>

          <button
            onClick={() => handleNavClick("technology")}
            className="sm-link text-white hover:text-cyan-400 transition-colors"
            data-active={isActive("technology") || undefined}
          >
            <span>Technology</span>
          </button>

          <button
            onClick={() => handleNavClick("services")}
            className="sm-link text-white hover:text-cyan-400 transition-colors"
            data-active={isActive("services") || undefined}
          >
            <span>Services</span>
          </button>

          {/* The Latest */}
          <div className="sm-dd" {...dropdownHandlers("latest")}>
            <button
              onClick={() => handleNavClick("press-releases")}
              className="sm-link text-white hover:text-cyan-400 transition-colors flex items-center gap-1"
              data-active={latestActive || undefined}
              aria-haspopup="true"
              aria-expanded={openMenu === "latest"}
            >
              <span>The Latest</span>
              <ChevronDown className="sm-chev" />
            </button>
            <div className="nav-pop sm-pop" data-open={openMenu === "latest"}>
              <button onClick={() => handleNavClick("the-latest")} className="sm-pop-item sm-pop-item-sm">
                <span className="sm-pop-ico"><Sparkles /></span>
                <span className="sm-pop-txt"><b>All Dispatches</b></span>
              </button>
              <button onClick={() => handleNavClick("press-releases")} className="sm-pop-item sm-pop-item-sm">
                <span className="sm-pop-ico"><Newspaper /></span>
                <span className="sm-pop-txt"><b>Press Releases</b></span>
              </button>
              <button onClick={() => handleNavClick("blogs")} className="sm-pop-item sm-pop-item-sm">
                <span className="sm-pop-ico"><BookOpen /></span>
                <span className="sm-pop-txt"><b>Technical Blogs</b></span>
              </button>
            </div>
          </div>

          {/* About */}
          <div className="sm-dd" {...dropdownHandlers("about")}>
            <button
              onClick={() => handleNavClick("about")}
              className="sm-link text-white hover:text-cyan-400 transition-colors flex items-center gap-1"
              data-active={aboutActive || undefined}
              aria-haspopup="true"
              aria-expanded={openMenu === "about"}
            >
              <span>About</span>
              <ChevronDown className="sm-chev" />
            </button>
            <div className="nav-pop sm-pop" data-open={openMenu === "about"}>
              <button onClick={() => handleNavClick("about")} className="sm-pop-item sm-pop-item-sm">
                <span className="sm-pop-ico"><Building2 /></span>
                <span className="sm-pop-txt"><b>Company &amp; Facilities</b></span>
              </button>
              <button onClick={() => handleNavClick("team")} className="sm-pop-item sm-pop-item-sm">
                <span className="sm-pop-ico"><Users /></span>
                <span className="sm-pop-txt"><b>Team &amp; Advisors</b></span>
              </button>
            </div>
          </div>
          <button
            onClick={() => handleNavClick("contact")}
            className="sm-link text-white hover:text-cyan-400 transition-colors"
            data-active={isActive("contact") || undefined}
          >
            <span>Contact Us</span>
          </button>
        </nav>

        {/* Utilities */}
        <div className="sm-actions text-white flex items-center gap-3">
          <button
            type="button"
            onClick={() => setSearchOpen(true)}
            className="sm-icon-btn text-white hover:text-cyan-400 transition-colors"
            aria-label="Search"
          >
            <Search />
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="sm-icon-btn sm-burger text-white hover:text-cyan-400 transition-colors"
            aria-label="Toggle Menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <div className="nav-drawer sm-drawer" data-open={mobileMenuOpen}>
        <div>
          <nav className="sm-drawer-list" aria-label="Mobile">
            {([
              { type: "link", route: "home", label: "Home" },
              { type: "group", key: "products", label: "Products", items: [["products", "Products"], ["sky5g-router", "Sky5G Router"], ["tracker-detail", "Asset Trackers"]] },
              { type: "link", route: "technology", label: "Technology (MuLCAT™)" },
              { type: "link", route: "services", label: "Design Services & Consulting" },
              { type: "group", key: "latest", label: "The Latest", items: [["the-latest", "All Dispatches"], ["press-releases", "Press Releases"], ["blogs", "Technical Blogs"]] },
              { type: "group", key: "about", label: "About", items: [["about", "About SkyMirr"], ["team", "Team & Leadership"]] },
              { type: "link", route: "contact", label: "Contact Us" },
            ] as Array<
              | { type: "link"; route: string; label: string }
              | { type: "group"; key: string; label: string; items: string[][] }
            >).map((entry) =>
              entry.type === "link" ? (
                <button
                  key={entry.route}
                  onClick={() => handleNavClick(entry.route)}
                  className="sm-drawer-item text-white"
                  data-active={isActive(entry.route) || undefined}
                  tabIndex={mobileMenuOpen ? 0 : -1}
                >
                  <span>{entry.label}</span>
                  <ArrowUpRight />
                </button>
              ) : (
                <div key={entry.key} className="sm-acc" data-open={accOpen === entry.key || undefined}>
                  <button
                    type="button"
                    className="sm-drawer-item sm-acc-head text-white"
                    aria-expanded={accOpen === entry.key}
                    tabIndex={mobileMenuOpen ? 0 : -1}
                    onClick={() => setAccOpen(accOpen === entry.key ? null : entry.key)}
                  >
                    <span>{entry.label}</span>
                    <ChevronDown />
                  </button>
                  <div className="sm-acc-panel">
                    <div>
                      {entry.items.map(([route, label]) => (
                        <button
                          key={route}
                          onClick={() => handleNavClick(route)}
                          className="sm-drawer-item sm-acc-item text-white"
                          data-active={isActive(route) || undefined}
                          tabIndex={mobileMenuOpen && accOpen === entry.key ? 0 : -1}
                        >
                          <span>{label}</span>
                          <ArrowUpRight />
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              ),
            )}
          </nav>
        </div>
      </div>

      {/* Global search */}
      {searchOpen &&
        createPortal(
          <div
            className="sm-search-overlay"
            onMouseDown={(e) => {
              if (e.target === e.currentTarget) closeSearch();
            }}
          >
            <div className="sm-search" role="dialog" aria-modal="true" aria-label="Search">
              <form onSubmit={handleSearchSubmit} className="sm-search-bar">
                <Search className="sm-search-ico" />
                <input
                  type="text"
                  autoFocus
                  placeholder="Search antennas, frequencies, routers, trackers, patents..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button type="button" onClick={closeSearch} className="sm-search-close" aria-label="Close search">
                  <X />
                </button>
              </form>

              <div className="sm-search-body">
                {searchResults.length > 0 ? (
                  <div className="sm-search-results">
                    {searchResults.map((item) => (
                      <div
                        key={item.id}
                        onClick={() => openProduct(item.id)}
                        className="sm-result"
                      >
                        <div>
                          <div className="sm-result-name">{item.name}</div>
                          <div className="sm-result-tag">{item.tagline}</div>
                          <div className="sm-result-freq">{item.frequencyRange}</div>
                        </div>
                        <ArrowUpRight />
                      </div>
                    ))}
                  </div>
                ) : searchQuery ? (
                  <div className="sm-search-empty">
                    No hardware or specifications matched "{searchQuery}".
                  </div>
                ) : (
                  <div className="sm-search-empty">
                    Type a frequency (e.g. "600 MHz", "Wi-Fi 7", "CPE", "MIMO") to search.
                  </div>
                )}
              </div>
            </div>
          </div>,
          document.body
        )}
    </header>
  );
};