"use client";

import dynamic from "next/dynamic";
import { createContext, useContext, useMemo, useState } from "react";

/**
 * The modal is loaded on first open, not with the page.
 *
 * This provider wraps the whole public site, so a static import put the modal,
 * its form, and the animation library it uses into the bundle of every page —
 * for a dialog most visitors never open. Deferring it is the same treatment
 * `custom-cursor.tsx` already gets, and for the same reason.
 *
 * `ssr: false` because a dialog that is closed on load has nothing to
 * contribute to the server-rendered HTML.
 */
const GetStartedModal = dynamic(() => import("./get-started-modal"), { ssr: false });

type GetStartedContextValue = {
  open: (interest?: string) => void;
};

const GetStartedContext = createContext<GetStartedContextValue | null>(null);

export function GetStartedProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [interest, setInterest] = useState("");
  /* Latches on first open and never unmounts, so reopening is instant and any
     text already typed survives a close. */
  const [everOpened, setEverOpened] = useState(false);

  const value = useMemo(
    () => ({
      open: (nextInterest?: string) => {
        setInterest(nextInterest || "");
        setEverOpened(true);
        setIsOpen(true);
      },
    }),
    [],
  );

  return (
    <GetStartedContext.Provider value={value}>
      {children}
      {everOpened && (
        <GetStartedModal isOpen={isOpen} initialInterest={interest} onClose={() => setIsOpen(false)} />
      )}
    </GetStartedContext.Provider>
  );
}

export function useGetStarted() {
  const context = useContext(GetStartedContext);
  if (!context) throw new Error("useGetStarted must be used within GetStartedProvider.");
  return context;
}
