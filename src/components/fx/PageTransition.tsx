import React from "react";
<<<<<<< HEAD
import { motion } from "motion/react";
import { usePrefersReducedMotion } from "./useReducedMotion";

/**
 * Route change = quick fade + small lift of the new page. No curtain/overlay:
 * the page is never covered, so there is no grey or blank flash between pages.
 */
export const PageTransition: React.FC<{ routeKey: string; children: React.ReactNode }> = ({
=======
import { AnimatePresence, motion } from "motion/react";
import { usePrefersReducedMotion } from "./useReducedMotion";

/** Fade transition for route changes. */
export const PageTransition: React.FC<{
  routeKey: string;
  children: React.ReactNode;
}> = ({
>>>>>>> ec859e7 (Update website)
  routeKey,
  children,
}) => {
  const reduced = usePrefersReducedMotion();
  return (
<<<<<<< HEAD
    <motion.div
      key={routeKey}
      initial={reduced ? false : { opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
};
=======
    <AnimatePresence initial={false} mode="wait">
      <motion.div
        key={routeKey}
        className="page-transition-panel"
        variants={{
          enter: { opacity: 0 },
          center: { opacity: 1 },
          exit: { opacity: 0 },
        }}
        initial="enter"
        animate="center"
        exit="exit"
        transition={{ duration: reduced ? 0 : 0.3, ease: "easeOut" }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};
>>>>>>> ec859e7 (Update website)
