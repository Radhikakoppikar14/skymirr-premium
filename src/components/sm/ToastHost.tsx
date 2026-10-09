import React, { useEffect, useState } from "react";
import { CheckCircle2 } from "lucide-react";
import { TOAST_EVENT } from "./bus";

interface Toast { id: number; message: string }

/* Bottom-centre toast stack. Listens for `sm:toast` events (see bus.ts). */
export const ToastHost: React.FC = () => {
  const [toasts, setToasts] = useState<Toast[]>([]);

  useEffect(() => {
    let seq = 0;
    const on = (e: Event) => {
      const message = (e as CustomEvent<{ message: string }>).detail?.message;
      if (!message) return;
      const id = ++seq;
      setToasts((t) => [...t.slice(-2), { id, message }]);
      window.setTimeout(() => setToasts((t) => t.filter((x) => x.id !== id)), 3600);
    };
    window.addEventListener(TOAST_EVENT, on);
    return () => window.removeEventListener(TOAST_EVENT, on);
  }, []);

  return (
    <div className="sm-toasts" aria-live="polite" aria-atomic="false">
      {toasts.map((t) => (
        <div key={t.id} className="sm-toast" role="status">
          <CheckCircle2 aria-hidden="true" />
          <span>{t.message}</span>
        </div>
      ))}
    </div>
  );
};
