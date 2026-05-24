"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { navLinks, personalInfo } from "@/lib/data";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          scrolled
            ? "bg-[#060b14]/80 backdrop-blur-xl border-b border-white/[0.06] shadow-lg shadow-black/20"
            : "bg-transparent"
        )}
      >
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <a href="#hero" className="group flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-orange-500 to-orange-600 text-sm font-bold text-white shadow-lg shadow-orange-500/30">
              RK
            </div>
            <span className="hidden font-semibold text-white sm:block">
              {personalInfo.name.split(" ")[0]}
              <span className="text-orange-400">.</span>
            </span>
          </a>

          <ul className="hidden items-center gap-1 md:flex">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="rounded-lg px-3 py-2 text-sm text-slate-400 transition-colors hover:bg-white/5 hover:text-white"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="hidden md:block">
            <Button href="#contact" size="sm">
              Get in Touch
            </Button>
          </div>

          <button
            type="button"
            aria-label="Toggle menu"
            className="rounded-lg p-2 text-slate-400 hover:bg-white/5 hover:text-white md:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </nav>
      </motion.header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-[#060b14]/95 backdrop-blur-xl md:hidden"
          >
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 28, stiffness: 300 }}
              className="flex h-full flex-col items-center justify-center gap-2 p-8 pt-24"
            >
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  onClick={() => setMobileOpen(false)}
                  className="w-full rounded-xl px-6 py-4 text-center text-lg font-medium text-white hover:bg-white/5"
                >
                  {link.label}
                </motion.a>
              ))}
              <Button href="#contact" className="mt-4 w-full max-w-xs" onClick={() => setMobileOpen(false)}>
                Get in Touch
              </Button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
