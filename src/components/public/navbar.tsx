"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import CmsImage from "./cms-image";
import GetStartedButton from "./get-started-button";

const navLinks = [
  { href: "/products", label: "Our Products" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
  { href: "/about", label: "About" },
];

export default function Navbar({ logoUrl }: { logoUrl: string }) {
  const [open, setOpen] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    let lastY = window.scrollY;

    const onScroll = () => {
      const currentY = window.scrollY;
      const delta = currentY - lastY;

      if (currentY < 24) {
        setHidden(false);
      } else if (Math.abs(delta) > 6) {
        setHidden(delta > 0);
      }

      lastY = currentY;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      className="page-x fixed inset-x-0 top-0 z-50 border-b border-primary-blue/10 bg-white/92 py-2 shadow-[0_10px_28px_rgba(4,18,63,0.06)] backdrop-blur-xl"
      animate={{ y: hidden && !open ? "-115%" : "0%" }}
      transition={{ duration: 0.24, ease: "easeOut" }}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between">
        <Link href="/" className="focus-ring flex items-center gap-3 rounded-full" aria-label="InfoBytes Nepal home">
          <CmsImage src={logoUrl} alt="InfoBytes Nepal logo" width={178} height={54} className="h-12 w-auto object-contain" priority />
        </Link>
        <div className="hidden items-center gap-7 md:flex">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="text-sm font-medium text-deep-navy/82 transition hover:text-primary-blue">
              {link.label}
            </Link>
          ))}
          <GetStartedButton />
        </div>
        <button
          type="button"
          className="focus-ring rounded-full border border-primary-blue/15 p-2 text-deep-navy md:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-label="Toggle navigation"
          aria-expanded={open}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>
      <AnimatePresence>
        {open && (
          <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
            className="mt-2 border-t border-primary-blue/10 bg-white/96 p-4 shadow-[0_18px_55px_rgba(4,18,63,0.12)] backdrop-blur-xl md:hidden"
          >
            <div className="grid gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="rounded-2xl px-3 py-3 text-sm font-semibold text-deep-navy hover:bg-soft-blue"
                >
                  {link.label}
                </Link>
              ))}
              <GetStartedButton className="mt-2 w-full" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
