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
        <nav className="sm-nav" aria-label="Primary">
          <button
            onClick={() => handleNavClick("home")}
            className="sm-link"
            data-active={isActive("home") || undefined}
          >
            <span>Home</span>
          </button>

          {/* Products */}
          <div className="sm-dd" {...dropdownHandlers("products")}>
            <button
              onClick={() => handleNavClick("products")}
              className="sm-link"
              data-active={productsActive || undefined}
              aria-haspopup="true"
              aria-expanded={openMenu === "products"}
            >
              <span>Products</span>
              <ChevronDown className="sm-chev" />
            </button>
            <div
              className="nav-pop sm-pop sm-pop-lg"
              data-open={openMenu === "products"}
            >
              <button onClick={() => handleNavClick("products")} className="sm-pop-item">
                <span className="sm-pop-ico"><Radio /></span>
                <span className="sm-pop-txt">
                  <b>Antennas</b>
                  <small>600–6000 MHz Wideband &amp; MIMO</small>
                </span>
                <ArrowUpRight className="sm-pop-go" />
              </button>
              <button onClick={() => handleNavClick("sky5g-router")} className="sm-pop-item">
                <span className="sm-pop-ico"><Cpu /></span>
                <span className="sm-pop-txt">
                  <b>5G Routers</b>
                  <small>Sky5G Carrier Certified CPE</small>
                </span>
                <ArrowUpRight className="sm-pop-go" />
              </button>
              <button onClick={() => handleNavClick("tracker-detail")} className="sm-pop-item">
                <span className="sm-pop-ico"><Layers /></span>
                <span className="sm-pop-txt">
                  <b>Asset Trackers</b>
                  <small>LIPA122 Real-Time Multi-Sensor</small>
                </span>
                <ArrowUpRight className="sm-pop-go" />
              </button>
            </div>
          </div>

          <button
            onClick={() => handleNavClick("technology")}
            className="sm-link"
            data-active={isActive("technology") || undefined}
          >
            <span>Technology</span>
          </button>

          <button
            onClick={() => handleNavClick("services")}
            className="sm-link"
            data-active={isActive("services") || undefined}
          >
            <span>Services</span>
          </button>

          {/* The Latest */}
          <div className="sm-dd" {...dropdownHandlers("latest")}>
            <button
              onClick={() => handleNavClick("press-releases")}
              className="sm-link"
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
              className="sm-link"
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
        </nav>

        {/* Utilities */}
        <div className="sm-actions">
          <button
            type="button"
            onClick={() => setSearchOpen(true)}
            className="sm-icon-btn"
            aria-label="Search"
          >
            <Search />
          </button>

          <button onClick={() => handleNavClick("contact")} className="sm-cta">
            <span>Contact Us</span>
            <i className="sm-cta-arrow"><ArrowUpRight /></i>
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="sm-icon-btn sm-burger"
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
            {[
              ["home", "Home"],
              ["products", "Products"],
              ["sky5g-router", "Sky5G Router"],
              ["tracker-detail", "Asset Trackers"],
              ["technology", "Technology (MuLCAT™)"],
              ["services", "Design Services & Consulting"],
              ["about", "About SkyMirr"],
              ["team", "Team & Leadership"],
              ["press-releases", "Press Releases"],
              ["blogs", "Technical Blogs"],
              ["contact", "Contact Us"],
            ].map(([route, label]) => (
              <button
                key={route}
                onClick={() => handleNavClick(route)}
                className="sm-drawer-item"
                data-active={isActive(route) || undefined}
                tabIndex={mobileMenuOpen ? 0 : -1}
              >
                <span>{label}</span>
                <ArrowUpRight />
              </button>
            ))}
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
