"use client";

import { motion } from "framer-motion";
import { ArrowRight, Calendar, Check } from "lucide-react";
import Image from "next/image";
import { useLang } from "@/lib/i18n";
import { CALENDLY_URL } from "@/lib/config";

export default function FinalCTA() {
  const { lang } = useLang();
  const ar = lang === "ar";

  return (
    <section className="bg-[var(--surface-1)] py-24 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full bg-[#E63946]/8 blur-[120px]" />
      </div>
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: "linear-gradient(rgba(255,255,255,.15) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.15) 1px,transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      <div className="max-w-4xl mx-auto px-6 text-center relative">
        <motion.div
          dir={ar ? "rtl" : "ltr"}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          {/* logo mark */}
          <div className="flex justify-center mb-8">
            <Image src="/tile-red.png" alt="GymMate" width={56} height={56} className="rounded-2xl" />
          </div>

          <h2
            className="font-bold text-[var(--text-primary)] leading-tight mb-6"
            style={{ fontFamily: "var(--font-sora)", fontSize: "clamp(36px, 5.5vw, 64px)" }}
          >
            {ar ? (
              <>جاهز توقف <span className="text-[#E63946]">خسارة الأعضاء؟</span></>
            ) : (
              <>Ready To Stop <span className="text-[#E63946]">Losing Members?</span></>
            )}
          </h2>

          <p className="text-[var(--text-secondary)] text-lg max-w-xl mx-auto mb-8">
            {ar
              ? "احصل على تدقيق نمو مجاني لصالتك. سنحدّد لك:"
              : "Get a Free Gym Growth Audit. We'll identify:"}
          </p>

          {/* audit checklist */}
          <div className="flex flex-wrap justify-center gap-3 max-w-2xl mx-auto mb-10">
            {(ar
              ? ["العملاء الضائعون", "مخاطر الانسحاب", "فرص الإيرادات الفائتة", "مكاسب أتمتة سريعة"]
              : ["Lost Leads", "Churn Risks", "Missed Revenue Opportunities", "Quick Automation Wins"]
            ).map((t, i) => (
              <span
                key={i}
                className="inline-flex items-center gap-2 bg-[var(--surface-0)] border border-[var(--border-color)] rounded-full px-4 py-2 text-[var(--text-primary)] text-sm font-medium"
              >
                <Check size={14} className="text-[#10B981] flex-shrink-0" />
                {t}
              </span>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#E63946] hover:bg-[#C62839] text-white font-bold px-8 py-4 text-base rounded-lg shadow-2xl shadow-[#E63946]/30 transition-all duration-200 hover:-translate-y-0.5"
            >
              <Calendar size={16} />
              {ar ? "احجز التدقيق المجاني" : "Book Free Audit"}
            </a>
            <a
              href="#how-it-works"
              className="inline-flex items-center justify-center gap-2 border border-[var(--border-color)] text-[var(--text-primary)] hover:border-[var(--text-secondary)] font-semibold px-8 py-4 text-base rounded-lg transition-all duration-200"
            >
              {ar ? "شاهد كيف يعمل" : "See How It Works"}
              <ArrowRight size={16} />
            </a>
          </div>

          <div className="flex flex-wrap justify-center gap-6 text-[var(--text-muted)] text-sm">
            {(ar
              ? ["✓ تجربة مجانية 14 يوماً", "✓ إعداد في 48 ساعة", "✓ إلغاء في أي وقت", "✓ بدون بطاقة ائتمان"]
              : ["✓ 14-day free trial", "✓ Setup in 48 hours", "✓ Cancel anytime", "✓ No credit card required"]
            ).map((t, i) => (
              <span key={i}>{t}</span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
