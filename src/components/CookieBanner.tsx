import { useEffect, useState } from "react";

const STORAGE_KEY = "edmo:cookies-dismissed";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      const dismissed = localStorage.getItem(STORAGE_KEY);
      if (!dismissed) setVisible(true);
    } catch {
      setVisible(true);
    }
  }, []);

  const dismiss = () => {
    try {
      localStorage.setItem(STORAGE_KEY, "1");
    } catch {
      // ignore
    }
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed inset-x-3 bottom-3 z-50 sm:inset-x-6 sm:bottom-6">
      <div className="mx-auto flex max-w-5xl flex-col items-start gap-4 rounded-2xl bg-brand-dark p-5 text-white shadow-2xl ring-1 ring-white/10 sm:flex-row sm:items-center sm:justify-between sm:p-6">
        <p className="text-sm leading-relaxed text-white/80">
          We use cookies to improve your browsing experience, analyze site
          traffic, and personalize content. By clicking "Accept all", you
          consent to our use of cookies.
        </p>
        <div className="flex items-center gap-3 self-end sm:self-auto">
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              dismiss();
            }}
            className="text-sm font-medium text-white/70 underline-offset-4 hover:text-white hover:underline"
          >
            Read more
          </a>
          <button
            type="button"
            onClick={dismiss}
            className="rounded-full bg-brand-green px-5 py-2.5 text-sm font-semibold text-brand-dark transition-colors hover:bg-brand-green-dark hover:text-white"
          >
            Accept all
          </button>
        </div>
      </div>
    </div>
  );
}
