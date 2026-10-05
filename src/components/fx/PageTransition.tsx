import React from "react";
import { motion } from "motion/react";
import { usePrefersReducedMotion } from "./useReducedMotion";

/**
 * Route change = quick fade + small lift of the new page. No curtain/overlay:
 * the page is never covered, so there is no grey or blank flash between pages.
 */
export const PageTransition: React.FC<{ routeKey: string; children: React.ReactNode }> = ({
  routeKey,
  children,
}) => {
  const reduced = usePrefersReducedMotion();
  return (
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