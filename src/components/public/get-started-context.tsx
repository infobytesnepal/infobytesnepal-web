"use client";

import { createContext, useContext, useMemo, useState } from "react";
import GetStartedModal from "./get-started-modal";

type GetStartedContextValue = {
  open: (interest?: string) => void;
};

const GetStartedContext = createContext<GetStartedContextValue | null>(null);

export function GetStartedProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [interest, setInterest] = useState("");
  const value = useMemo(
    () => ({
      open: (nextInterest?: string) => {
        setInterest(nextInterest || "");
        setIsOpen(true);
      },
    }),
    [],
  );

  return (
    <GetStartedContext.Provider value={value}>
      {children}
      <GetStartedModal isOpen={isOpen} initialInterest={interest} onClose={() => setIsOpen(false)} />
    </GetStartedContext.Provider>
  );
}

export function useGetStarted() {
  const context = useContext(GetStartedContext);
  if (!context) throw new Error("useGetStarted must be used within GetStartedProvider.");
  return context;
}
