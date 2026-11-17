import React from "react";
import { AnimatePresence, motion } from "motion/react";
import { usePrefersReducedMotion } from "./useReducedMotion";

/** Fade transition for route changes. */
export const PageTransition: React.FC<{
  routeKey: string;
  children: React.ReactNode;
}> = ({
  routeKey,
  children,
}) => {
  const reduced = usePrefersReducedMotion();
  return (
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
