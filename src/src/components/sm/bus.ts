/* Tiny event bus so any component can raise a toast without prop-drilling.
   Plain window CustomEvents, no dependencies. */
export const TOAST_EVENT = "sm:toast";

/** Show a short toast notification. */
export const showToast = (message: string) =>
  window.dispatchEvent(new CustomEvent(TOAST_EVENT, { detail: { message } }));
