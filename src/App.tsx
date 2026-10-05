import React, { useState, useEffect } from "react";
import { ScrollProgressBar } from "./components/ScrollProgressBar";
import { Navbar } from "./components/Navbar";
import { HomePage } from "./pages/HomePage";
import { ProductsPage } from "./pages/ProductsPage";
import { TechnologyPage } from "./pages/TechnologyPage";
import { ServicesPage } from "./pages/ServicesPage";
import { AboutPage } from "./pages/AboutPage";
import { TeamPage } from "./pages/TeamPage";
import { ContactPage } from "./pages/ContactPage";
import { BlogsPage } from "./pages/BlogsPage";
import { PressReleasesPage } from "./pages/PressReleasesPage";
import { TheLatestPage } from "./pages/TheLatestPage";
import { TAMP161DetailPage } from "./pages/TAMP161DetailPage";
import { Sky5GDetailPage } from "./pages/Sky5GDetailPage";
import { SkyTrackerDetailPage } from "./pages/SkyTrackerDetailPage";
import { CatalogProductDetailPage } from "./pages/CatalogProductDetailPage";
import { Footer } from "./components/Footer";
import { resolveProduct } from "./data/catalog";
import { ChevronUp } from "lucide-react";
import { PageTransition } from "./components/fx/PageTransition";
import { SectionDecor } from "./components/fx/SectionDecor";

type Route =
  | "home"
  | "products"
  | "technology"
  | "services"
  | "about"
  | "team"
  | "contact"
  | "blogs"
  | "press-releases"
  | "the-latest"
  | "tamp-161"
  | "sky5g-router"
  | "tracker-detail"
  | "product-detail";

export default function App() {
  const [route, setRoute] = useState<Route>("home");
  const [detailProductId, setDetailProductId] = useState<string | null>(null);
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Monitor scroll for back-to-top button
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Sync hash routing with state
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash
        .replace(/^#\/?/, "")
        .split("?")[0]
        .toLowerCase();
      const productMatch = hash.match(/^product-detail\/([^/]+)$/);
      if (productMatch) {
        const productId = decodeURIComponent(productMatch[1]);
        const productExists = !!resolveProduct(productId);
        if (productExists) {
          setDetailProductId(productId);
          setRoute("product-detail");
        } else {
          setRoute("home");
        }
        window.scrollTo({ top: 0, behavior: "smooth" });
        return;
      }
      const validRoutes: Route[] = [
        "home",
        "products",
        "technology",
        "services",
        "about",
        "team",
        "contact",
        "blogs",
        "press-releases",
        "the-latest",
        "tamp-161",
        "sky5g-router",
        "tracker-detail",
      ];
      if (validRoutes.includes(hash as Route)) {
        setDetailProductId(null);
        setRoute(hash as Route);
      } else if (!hash) {
        setDetailProductId(null);
        setRoute("home");
      }
      window.scrollTo({ top: 0, behavior: "smooth" });
    };

    window.addEventListener("hashchange", handleHashChange);
    handleHashChange();
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  const navigateTo = (newRoute: string) => {
    const validRoutes: Route[] = [
      "home",
      "products",
      "technology",
      "services",
      "about",
      "team",
      "contact",
      "blogs",
      "press-releases",
      "tamp-161",
      "sky5g-router",
      "tracker-detail",
    ];
    const targetRoute = validRoutes.includes(newRoute as Route)
      ? (newRoute as Route)
      : "home";
    setDetailProductId(null);
    setRoute(targetRoute);
    window.location.hash = "#/" + (targetRoute === "home" ? "" : targetRoute);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleOpenContact = () => {
    navigateTo("contact");
  };

  const handleOpenProductDetail = (productId: string) => {
    setDetailProductId(productId);
    setRoute("product-detail");
    window.location.hash = `#/product-detail/${encodeURIComponent(productId)}`;
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <ScrollProgressBar />
      <Navbar
        currentRoute={route}
        onNavigate={navigateTo}
        onOpenProductDetail={(productId) => {
          if (productId === "tamp-161") {
            navigateTo("tamp-161");
          } else if (productId === "sky5g-tcpa117") {
            navigateTo("sky5g-router");
          } else if (productId === "lipa122") {
            navigateTo("tracker-detail");
          } else {
            handleOpenProductDetail(productId);
          }
        }}
      />

      {/* Page Content based on active route */}
      <main className="flex-1">
        <PageTransition routeKey={route + (detailProductId ?? "")}>
        <SectionDecor side={route.length % 2 ? "right" : "left"} className={route === "home" ? "!overflow-visible [&>div[aria-hidden]]:hidden" : "!overflow-visible"}>
        {route === "home" && <HomePage onNavigate={navigateTo} />}
        {route === "products" && (
          <ProductsPage
            onOpenProductDetail={handleOpenProductDetail}
            onContactSales={handleOpenContact}
            onNavigateDetail={(detail) => navigateTo(detail)}
          />
        )}
        {route === "technology" && <TechnologyPage />}
        {route === "services" && <ServicesPage />}
        {route === "about" && <AboutPage />}
        {route === "team" && <TeamPage />}
        {route === "contact" && <ContactPage />}
        {route === "blogs" && <BlogsPage />}
        {route === "press-releases" && (
          <PressReleasesPage onNavigateBlog={() => navigateTo("blogs")} />
        )}
        {route === "the-latest" && <TheLatestPage />}
        {route === "tamp-161" && (
          <TAMP161DetailPage
            onBack={() => navigateTo("products")}
            onContact={handleOpenContact}
          />
        )}
        {route === "sky5g-router" && (
          <Sky5GDetailPage
            onBack={() => navigateTo("products")}
            onContact={handleOpenContact}
          />
        )}
        {route === "tracker-detail" && (
          <SkyTrackerDetailPage
            onBack={() => navigateTo("products")}
            onContact={handleOpenContact}
          />
        )}
        {route === "product-detail" && detailProductId && (
          <CatalogProductDetailPage
            product={
              resolveProduct(detailProductId)!
            }
            onBack={() => navigateTo("products")}
            onContact={handleOpenContact}
          />
        )}
        </SectionDecor>
        </PageTransition>
      </main>

      {/* Back to top */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-40 w-11 h-11 bg-white hover:bg-[#EAF6F9] text-[#152C39] hover:text-[#087F98] border border-[#DFEAF0] hover:border-[#18A6BE] rounded-full flex items-center justify-center shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer"
          aria-label="Back to top"
        >
          <ChevronUp className="w-4 h-4" />
        </button>
      )}

      <Footer />
    </>
  );
}