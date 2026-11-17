import React, { useEffect } from "react";
import { createPortal } from "react-dom";

interface ModalShellProps {
  onClose: () => void;
  /** Header content (badge/date, role/name ...) */
  header: React.ReactNode;
  /** Text on the close button */
  closeLabel: string;
  /** "md" = 42rem (profiles), "lg" = 48rem (articles) */
  size?: "md" | "lg";
  children: React.ReactNode;
}

/**
 * Viewport-fitted modal rendered through a portal on <body>.
 * - escapes the clipped / stacking-isolated page wrappers (SectionDecor, PageTransition)
 * - panel never taller than the screen; header + footer stay fixed, body scrolls
 * - all text colours are forced dark so nothing is washed out
 */
export const ModalShell: React.FC<ModalShellProps> = ({
  onClose,
  header,
  closeLabel,
  size = "lg",
  children,
}) => {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [onClose]);

  return createPortal(
    <div className="sm-modal-overlay" onClick={onClose} role="dialog" aria-modal="true">
      <div
        className={`sm-modal-panel ${size === "md" ? "sm-modal-md" : "sm-modal-lg"}`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="sm-modal-head">{header}</div>
        <div className="sm-modal-body sm-scroll">{children}</div>
        <div className="sm-modal-foot">
          <button type="button" onClick={onClose} className="sm-modal-close">
            {closeLabel}
          </button>
        </div>
      </div>
    </div>,
    document.body
  );
};