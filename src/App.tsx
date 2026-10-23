<<<<<<< HEAD
import React, { useState, useEffect } from "react";
=======
import React, { useState, useEffect, useRef, useCallback } from "react";
>>>>>>> ec859e7 (Update website)
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
<<<<<<< HEAD
=======
import { ContactPopup } from "./components/ContactPopup";
>>>>>>> ec859e7 (Update website)
import { resolveProduct } from "./data/catalog";
import { ChevronUp } from "lucide-react";
import { PageTransition } from "./components/fx/PageTransition";
import { SectionDecor } from "./components/fx/SectionDecor";
import { IntroLoader } from "./components/sm/IntroLoader";
import { ToastHost } from "./components/sm/ToastHost";
import { CtaBand } from "./components/sm/CtaBand";

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
<<<<<<< HEAD
  const [detailProductId, setDetailProductId] = useState<string | null>(null);
  const [showScrollTop, setShowScrollTop] = useState(false);
=======
  const routeRef = useRef<Route>("home");
  const [detailProductId, setDetailProductId] = useState<string | null>(null);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [contactPopupOpen, setContactPopupOpen] = useState(false);

  const changeRoute = (nextRoute: Route) => {
    const currentRoute = routeRef.current;
    if (currentRoute !== nextRoute) {
      routeRef.current = nextRoute;
      setRoute(nextRoute);
    }
  };
>>>>>>> ec859e7 (Update website)

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
<<<<<<< HEAD
          setRoute("product-detail");
        } else {
          setRoute("home");
=======
          changeRoute("product-detail");
        } else {
          changeRoute("home");
>>>>>>> ec859e7 (Update website)
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
<<<<<<< HEAD
        setRoute(hash as Route);
      } else if (!hash) {
        setDetailProductId(null);
        setRoute("home");
=======
        changeRoute(hash as Route);
      } else if (!hash) {
        setDetailProductId(null);
        changeRoute("home");
>>>>>>> ec859e7 (Update website)
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
<<<<<<< HEAD
    setRoute(targetRoute);
=======
    changeRoute(targetRoute);
>>>>>>> ec859e7 (Update website)
    window.location.hash = "#/" + (targetRoute === "home" ? "" : targetRoute);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleOpenContact = () => {
<<<<<<< HEAD
    navigateTo("contact");
  };

  const handleOpenProductDetail = (productId: string) => {
    setDetailProductId(productId);
    setRoute("product-detail");
=======
    setContactPopupOpen(true);
  };
  const handleCloseContact = useCallback(() => {
    setContactPopupOpen(false);
  }, []);

  const handleOpenProductDetail = (productId: string) => {
    setDetailProductId(productId);
    changeRoute("product-detail");
>>>>>>> ec859e7 (Update website)
    window.location.hash = `#/product-detail/${encodeURIComponent(productId)}`;
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <IntroLoader />
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
<<<<<<< HEAD
      <main className="flex-1">
=======
      <main className="flex-1 page-transition-viewport">
>>>>>>> ec859e7 (Update website)
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
          className="sm-totop"
          aria-label="Back to top"
        >
          <ChevronUp className="w-4 h-4" />
        </button>
      )}

      {route !== "contact" && <CtaBand onContact={handleOpenContact} />}
      <Footer />
      <ToastHost />
<<<<<<< HEAD
    </>
  );
}
=======
      <ContactPopup isOpen={contactPopupOpen} onClose={handleCloseContact} />
    </>
  );
}
>>>>>>> ec859e7 (Update website)
