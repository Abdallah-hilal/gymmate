"use client";

import { motion } from "framer-motion";
import { TrendingUp, RefreshCw, Clock, DollarSign, Zap, Repeat } from "lucide-react";
import { useLang } from "@/lib/i18n";

export default function ROI() {
  const { lang } = useLang();
  const ar = lang === "ar";

  const stats = [
    { icon: TrendingUp, color: "#3B82F6", val: "+15%", lbl: ar ? "تحويل العملاء" : "Lead Conversion" },
    { icon: RefreshCw,  color: "#10B981", val: "+20%", lbl: ar ? "الاحتفاظ بالأعضاء" : "Member Retention" },
    { icon: Zap,        color: "#F59E0B", val: "+30%", lbl: ar ? "استجابة أسرع" : "Faster Response Time" },
    { icon: Clock,      color: "#8B5CF6", val: "20+ hrs", lbl: ar ? "موفّرة أسبوعيًا" : "Saved Weekly" },
    { icon: Repeat,     color: "#E63946", val: ar ? "أعلى" : "Higher", lbl: ar ? "معدلات التجديد" : "Renewal Rates" },
    { icon: DollarSign, color: "#10B981", val: ar ? "أكثر" : "More", lbl: ar ? "إيرادات" : "Revenue" },
  ];

  return (
    <section id="roi" className="bg-[var(--surface-1)] py-28 relative overflow-hidden">
      <div className="absolute top-0 right-1/4 w-[500px] h-[350px] rounded-full bg-[#10B981]/6 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        <motion.div
          dir={ar ? "rtl" : "ltr"}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block bg-[#E63946]/12 border border-[#E63946]/20 text-[#E63946] text-xs font-bold px-4 py-2 rounded-full mb-5 tracking-[0.15em] uppercase">
            {ar ? "العائد" : "ROI"}
          </span>
          <h2
            className="text-4xl lg:text-6xl font-bold text-[var(--text-primary)] mb-5 leading-tight"
            style={{ fontFamily: "var(--font-sora)" }}
          >
            {ar ? (
              <>ماذا يعني هذا <span className="text-[#E63946]">لصالتك؟</span></>
            ) : (
              <>What Does This Mean <span className="text-[#E63946]">For Your Gym?</span></>
            )}
          </h2>
          <p className="text-[var(--text-secondary)] text-lg max-w-2xl mx-auto">
            {ar
              ? "نتائج ملموسة على ما يهمّك فعلًا: المزيد من الأعضاء، احتفاظ أعلى، ووقت أقل في العمل اليدوي."
              : "Real outcomes on what actually matters: more members, higher retention, and less time on manual work."}
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-px bg-[var(--border-color)] rounded-2xl overflow-hidden border border-[var(--border-color)]">
          {stats.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={i}
                dir={ar ? "rtl" : "ltr"}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="bg-[var(--surface-0)] px-6 py-10 text-center"
              >
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center mx-auto mb-4"
                  style={{ backgroundColor: `${s.color}15` }}
                >
                  <Icon size={20} style={{ color: s.color }} />
                </div>
                <div
                  className="font-bold text-4xl lg:text-5xl leading-none mb-3"
                  style={{ fontFamily: "var(--font-sora)", color: s.color }}
                >
                  {s.val}
                </div>
                <div className="text-[var(--text-muted)] text-sm">{s.lbl}</div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
