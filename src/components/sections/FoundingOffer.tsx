"use client";

import { motion } from "framer-motion";
import { Flame, Check, ArrowRight } from "lucide-react";
import { useLang } from "@/lib/i18n";
import { CALENDLY_URL } from "@/lib/config";

/* Founding-member offer: first 5 gyms at a heavily discounted price. */
const TOTAL_SLOTS = 5;
const CLAIMED_SLOTS = 2; // update as gyms sign up

export default function FoundingOffer() {
  const { lang } = useLang();
  const ar = lang === "ar";
  const remaining = TOTAL_SLOTS - CLAIMED_SLOTS;
  const pct = (CLAIMED_SLOTS / TOTAL_SLOTS) * 100;

  const perks = ar
    ? [
        "سعر تأسيسي مخفّض — مثبّت لك للأبد",
        "إعداد وتهيئة كاملة بدون رسوم",
        "أولوية في الدعم والتطوير",
        "كل المزايا القادمة مجانًا",
      ]
    : [
        "Heavily discounted founding price — locked in for life",
        "Full setup & onboarding, free of charge",
        "Priority support & influence on the roadmap",
        "All upcoming features included free",
      ];

  return (
    <section id="pricing" className="bg-[var(--hero-bg)] py-28 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-[#E63946]/10 blur-[140px] pointer-events-none" />

      <div className="max-w-3xl mx-auto px-6 lg:px-8 relative">
        <motion.div
          dir={ar ? "rtl" : "ltr"}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <span className="inline-flex items-center gap-2 bg-[#E63946]/15 border border-[#E63946]/25 text-[#E63946] text-xs font-bold px-4 py-2 rounded-full mb-5 tracking-[0.15em] uppercase">
            <Flame size={13} />
            {ar ? "عرض المؤسّسين" : "Founding Offer"}
          </span>
          <h2
            className="text-4xl lg:text-6xl font-bold text-white mb-5 leading-tight"
            style={{ fontFamily: "var(--font-sora)" }}
          >
            {ar ? (
              <>أول <span className="text-[#E63946]">5 صالات</span> فقط</>
            ) : (
              <>Only the First <span className="text-[#E63946]">5 Gyms</span></>
            )}
          </h2>
          <p className="text-white/55 text-lg max-w-xl mx-auto">
            {ar
              ? "نضمّ حاليًا أول 5 صالات رياضية بسعر تأسيسي مخفّض جدًا — مقابل ملاحظاتهم وشهاداتهم بينما نكبر."
              : "We're onboarding our first 5 gyms at a deeply discounted founding price — in exchange for feedback and testimonials as we grow."}
          </p>
        </motion.div>

        {/* offer card */}
        <motion.div
          dir={ar ? "rtl" : "ltr"}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="bg-[#111827] border border-white/10 rounded-3xl p-8 lg:p-10 shadow-2xl"
        >
          {/* slots progress */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-3">
              <span className="text-white font-bold text-sm" style={{ fontFamily: "var(--font-sora)" }}>
                {ar ? `${CLAIMED_SLOTS} من ${TOTAL_SLOTS} أماكن مُستخدمة` : `${CLAIMED_SLOTS} of ${TOTAL_SLOTS} spots taken`}
              </span>
              <span className="text-[#E63946] font-bold text-sm">
                {remaining > 0
                  ? (ar ? `${remaining} متبقية` : `${remaining} left`)
                  : (ar ? "اكتمل العدد" : "Fully booked")}
              </span>
            </div>
            {/* progress bar */}
            <div className="h-3 rounded-full bg-white/8 overflow-hidden">
              <motion.div
                className="h-full rounded-full bg-gradient-to-r from-[#FF5B47] to-[#C62839]"
                initial={{ width: 0 }}
                whileInView={{ width: `${pct}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
              />
            </div>
            {/* slot pips */}
            <div className="flex gap-2 mt-3">
              {Array.from({ length: TOTAL_SLOTS }).map((_, i) => (
                <div
                  key={i}
                  className={`flex-1 h-1.5 rounded-full ${i < CLAIMED_SLOTS ? "bg-[#E63946]" : "bg-white/12"}`}
                />
              ))}
            </div>
          </div>

          {/* perks */}
          <ul className="space-y-3 mb-8">
            {perks.map((p, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="w-5 h-5 rounded-full bg-[#10B981]/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check size={12} className="text-[#10B981]" />
                </span>
                <span className="text-white/75 text-[15px]">{p}</span>
              </li>
            ))}
          </ul>

          {/* price — hidden for now (revealed on the call) */}
          <div className="rounded-2xl border border-dashed border-white/15 bg-white/[0.03] px-5 py-4 mb-8 text-center">
            <div className="text-white/40 text-xs font-bold tracking-[0.15em] uppercase mb-1">
              {ar ? "السعر التأسيسي" : "Founding price"}
            </div>
            <div className="text-white font-bold text-lg" style={{ fontFamily: "var(--font-sora)" }}>
              {ar ? "يُكشف في المكالمة" : "Revealed on your call"}
            </div>
          </div>

          <a
            href={CALENDLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full inline-flex items-center justify-center gap-2 bg-[#E63946] hover:bg-[#C62839] text-white font-bold px-6 py-4 rounded-full shadow-xl shadow-[#E63946]/30 transition-all duration-200 hover:-translate-y-0.5 text-[15px]"
          >
            {ar ? "احجز مكانك من الـ5" : "Claim Your Spot of 5"}
            <ArrowRight size={16} />
          </a>
          <p className="text-white/35 text-xs text-center mt-4">
            {ar ? "مكالمة قصيرة مجانية · بدون التزام" : "Short free call · no commitment"}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
