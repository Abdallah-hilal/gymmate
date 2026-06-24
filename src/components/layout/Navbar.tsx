"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Globe, Sun, Moon } from "lucide-react";
import Image from "next/image";
import { useLang, useTheme } from "@/lib/i18n";
import { CALENDLY_URL } from "@/lib/config";

export default function Navbar() {
  const { lang, setLang, t } = useLang();
  const { toggleTheme, isDark } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = lang === "ar"
    ? [
        { label: "الخدمات",        href: "#solutions" },
        { label: "الأسعار",        href: "#pricing" },
        { label: "دراسات الحالة", href: "#case-studies" },
        { label: "الأسئلة",        href: "#faq" },
      ]
    : [
        { label: "Services",     href: "#solutions" },
        { label: "Pricing",      href: "#pricing" },
        { label: "Case Studies", href: "#case-studies" },
        { label: "FAQ",          href: "#faq" },
      ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggleLang = () => setLang(lang === "en" ? "ar" : "en");

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 pt-4">
      <nav className="max-w-5xl mx-auto">
        {/* Floating dark pill bar */}
        <div
          className={`flex items-center justify-between gap-3 rounded-full pl-2 pr-2 h-14 lg:h-16 border transition-all duration-300 ${
            scrolled
              ? "bg-[#0B0F1A]/95 border-white/10 shadow-2xl shadow-black/40"
              : "bg-[#0B0F1A]/80 border-white/8 shadow-xl shadow-black/30"
          } backdrop-blur-xl`}
        >
          {/* Left: logo mark + name */}
          <a href="#" className="flex items-center gap-2.5 flex-shrink-0 pl-2.5">
            <Image
              src="/gymmate-mark.png"
              alt="GymMate"
              width={34}
              height={34}
              priority
              className="w-8 h-8 lg:w-9 lg:h-9 object-contain flex-shrink-0"
            />
            <span className="hidden sm:inline-block text-white font-bold text-lg tracking-tight" style={{ fontFamily: "var(--font-sora)" }}>
              GymMate
            </span>
          </a>

          {/* Center: nav links */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-white/70 hover:text-white hover:bg-white/8 text-sm font-medium transition-colors duration-200 px-3.5 py-2 rounded-full"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Right: controls + white CTA pill */}
          <div className="hidden lg:flex items-center gap-2 flex-shrink-0">
            {/* Language segmented control */}
            <div className="flex items-center rounded-full p-0.5 border border-white/12 bg-white/[0.06]">
              {(["en", "ar"] as const).map((l) => (
                <button
                  key={l}
                  onClick={() => setLang(l)}
                  className={`px-2.5 py-1 text-xs font-bold rounded-full transition-all duration-200 ${
                    lang === l ? "bg-[#E63946] text-white" : "text-white/55 hover:text-white"
                  }`}
                  aria-label={l === "en" ? "English" : "العربية"}
                  aria-pressed={lang === l}
                >
                  {l === "en" ? "EN" : "ع"}
                </button>
              ))}
            </div>

            {/* Theme segmented control */}
            <div className="flex items-center rounded-full p-0.5 border border-white/12 bg-white/[0.06]">
              <button
                onClick={() => { if (isDark) toggleTheme(); }}
                className={`flex items-center px-2.5 py-1.5 rounded-full transition-all duration-200 ${
                  !isDark ? "bg-[#E63946] text-white" : "text-white/55 hover:text-white"
                }`}
                aria-label="Light mode"
                aria-pressed={!isDark}
              >
                <Sun size={13} />
              </button>
              <button
                onClick={() => { if (!isDark) toggleTheme(); }}
                className={`flex items-center px-2.5 py-1.5 rounded-full transition-all duration-200 ${
                  isDark ? "bg-[#E63946] text-white" : "text-white/55 hover:text-white"
                }`}
                aria-label="Dark mode"
                aria-pressed={isDark}
              >
                <Moon size={13} />
              </button>
            </div>

            {/* White CTA pill */}
            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white hover:bg-white/90 text-[#0B0F1A] rounded-full px-5 py-2.5 text-sm font-bold transition-all duration-200 hover:-translate-y-0.5"
            >
              {t.nav.bookDemo}
            </a>
          </div>

          {/* Mobile controls */}
          <div className="lg:hidden flex items-center gap-1 pr-1">
            <button
              onClick={toggleTheme}
              className="text-white/70 hover:text-white hover:bg-white/10 p-2 rounded-full transition-colors"
              aria-label="Toggle theme"
            >
              {isDark ? <Sun size={15} /> : <Moon size={15} />}
            </button>
            <button
              onClick={toggleLang}
              className="text-white/70 hover:text-white hover:bg-white/10 p-2 rounded-full transition-colors text-xs font-bold flex items-center gap-1"
            >
              <Globe size={13} />
              {lang === "en" ? "ع" : "EN"}
            </button>
            <button
              className="text-white hover:bg-white/10 p-2 rounded-full transition-colors"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu — floating dark pill */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden max-w-5xl mx-auto mt-2 rounded-3xl bg-[#0B0F1A]/95 border border-white/10 shadow-2xl shadow-black/40 backdrop-blur-xl overflow-hidden"
          >
            <div className="px-4 py-4 flex flex-col gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-white/75 hover:text-white hover:bg-white/8 py-2.5 px-3 text-sm font-medium rounded-xl transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <a
                href={CALENDLY_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileOpen(false)}
                className="mt-3 bg-white hover:bg-white/90 text-[#0B0F1A] rounded-full w-full font-bold py-3 text-sm inline-flex items-center justify-center"
              >
                {t.nav.bookDemo}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
