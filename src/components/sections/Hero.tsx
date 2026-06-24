"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useLang, useTheme } from "@/lib/i18n";
import { CALENDLY_URL } from "@/lib/config";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  }),
};

export default function Hero() {
  const { lang } = useLang();
  const { isDark } = useTheme();
  const ar = lang === "ar";

  const gridLine = isDark ? "rgba(255,255,255,.055)" : "rgba(0,0,0,.05)";
  const headColor = isDark ? "text-white" : "text-[var(--text-primary)]";

  return (
    <section className="relative min-h-screen bg-[var(--bg0)] flex items-center overflow-hidden">
      {/* grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            `linear-gradient(${gridLine} 1px,transparent 1px),linear-gradient(90deg,${gridLine} 1px,transparent 1px)`,
          backgroundSize: "48px 48px",
          maskImage: "radial-gradient(ellipse 80% 60% at 50% 40%, black 40%, transparent 100%)",
          WebkitMaskImage: "radial-gradient(ellipse 80% 60% at 50% 40%, black 40%, transparent 100%)",
        }}
      />
      {/* glows */}
      <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[800px] h-[500px] rounded-full bg-[#E63946]/10 blur-[150px] pointer-events-none" />

      <div className="relative w-full max-w-5xl mx-auto px-6 lg:px-8 pt-24 pb-24 text-center">
        {/* eyebrow pill */}
        <motion.div
          custom={0} variants={fadeUp} initial="hidden" animate="visible"
          className={`inline-flex items-center gap-2 mb-8 rounded-full border px-4 py-1.5 backdrop-blur-sm ${
            isDark ? "border-white/12 bg-white/[0.04]" : "border-black/10 bg-black/[0.03]"
          }`}
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#E63946] opacity-60" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-[#E63946]" />
          </span>
          <span className="text-[#E63946] text-[11px] font-bold tracking-[0.2em] uppercase">
            {ar ? "نظام نمو للصالات الرياضية" : "AI Growth System for Gyms"}
          </span>
        </motion.div>

        {/* headline */}
        <motion.h1
          dir={ar ? "rtl" : "ltr"}
          custom={1} variants={fadeUp} initial="hidden" animate="visible"
          className="font-extrabold leading-[0.95] mb-7 tracking-[-0.02em]"
          style={{ fontFamily: "var(--font-sora)", fontSize: "clamp(52px, 8vw, 96px)" }}
        >
          <span className={`${headColor} block`}>{ar ? "كفايةً خسارة العملاء" : "Stop Losing Leads,"}</span>
          <span className="relative inline-block">
            <span
              className="block bg-clip-text text-transparent"
              style={{ backgroundImage: "linear-gradient(105deg,#FF5B47 0%,#E8341C 50%,#C62839 100%)" }}
            >
              {ar ? "والأعضاء والإيرادات." : "Members & Revenue."}
            </span>
          </span>
        </motion.h1>

        {/* sub */}
        <motion.p
          dir={ar ? "rtl" : "ltr"}
          custom={2} variants={fadeUp} initial="hidden" animate="visible"
          className={`text-xl leading-relaxed mb-10 max-w-[640px] mx-auto ${
            isDark ? "text-white/65" : "text-[var(--text-secondary)]"
          }`}
        >
          {ar
            ? "التقط كل عميل محتمل، وأتمت المتابعات، وقلّل انسحاب الأعضاء، وزِد التجديدات — بأتمتة مدعومة بالذكاء الاصطناعي مبنية خصيصًا للصالات الرياضية."
            : "Capture every lead, automate follow-ups, reduce member churn, and increase renewals with AI-powered automation built specifically for gyms."}
        </motion.p>

        {/* CTAs */}
        <motion.div
          custom={3} variants={fadeUp} initial="hidden" animate="visible"
          className="flex flex-wrap justify-center gap-3"
        >
          <a
            href={CALENDLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#E63946] hover:bg-[#C62839] text-white font-bold px-8 py-4 text-[15px] rounded-full shadow-xl shadow-[#E63946]/30 transition-all duration-200 hover:-translate-y-0.5"
          >
            {ar ? "احجز تدقيق نمو مجاني" : "Book Free Gym Growth Audit"}
            <ArrowRight size={15} />
          </a>
          <a
            href="#how-it-works"
            className={`inline-flex items-center gap-2 border font-semibold px-7 py-4 text-[15px] rounded-full transition-all duration-200 ${
              isDark
                ? "border-white/18 text-white/80 hover:text-white hover:border-white/35"
                : "border-black/15 text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:border-black/30"
            }`}
          >
            {ar ? "شاهد كيف يعمل" : "See How It Works"}
          </a>
        </motion.div>
      </div>
    </section>
  );
}
