"use client";

import { motion } from "framer-motion";
import { Heart, Zap, Users, BarChart3, MessageSquare, RefreshCw, CheckCircle2, X } from "lucide-react";
import { useLang } from "@/lib/i18n";
import { CALENDLY_URL } from "@/lib/config";

const features = [
  { icon: Heart,         color: "#E63946", en: "Member Retention Workflows",    ar: "مسارات الاحتفاظ بالأعضاء" },
  { icon: Zap,           color: "#F59E0B", en: "Lead Recovery Automation",      ar: "أتمتة استعادة العملاء" },
  { icon: Users,         color: "#3B82F6", en: "Membership Follow-Ups",         ar: "متابعة الاشتراكات" },
  { icon: MessageSquare, color: "#10B981", en: "AI Customer Support",           ar: "دعم العملاء بالذكاء الاصطناعي" },
  { icon: BarChart3,     color: "#8B5CF6", en: "Fitness Business Analytics",    ar: "تحليلات أعمال اللياقة" },
  { icon: RefreshCw,     color: "#EC4899", en: "Automated Engagement Campaigns",ar: "حملات تفاعل آلية" },
];

const rows = [
  { en: "Built for fitness businesses",   ar: "مبني لأعمال اللياقة" },
  { en: "Member lifecycle automations",   ar: "أتمتة دورة حياة الأعضاء" },
  { en: "Fitness CRM workflows",          ar: "مسارات CRM للياقة" },
  { en: "Retention & churn alerts",       ar: "تنبيهات الاحتفاظ والانسحاب" },
  { en: "24/7 AI for member questions",   ar: "ذكاء اصطناعي 24/7 للأسئلة" },
  { en: "Live in 48 hours",               ar: "تشغيل في 48 ساعة" },
];

export default function WhyGymMate() {
  const { lang } = useLang();
  const ar = lang === "ar";

  return (
    <section id="retention" className="bg-[var(--surface-1)] py-24 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[400px] rounded-full bg-[#E63946]/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block bg-[#E63946]/12 border border-[#E63946]/20 text-[#E63946] text-xs font-bold px-4 py-2 rounded-full mb-5 tracking-[0.15em] uppercase">
            {ar ? "لماذا GymMate" : "Why GymMate"}
          </span>
          <h2
            className="text-4xl lg:text-5xl font-bold text-[var(--text-primary)] mb-5"
            style={{ fontFamily: "var(--font-sora)" }}
          >
            {ar ? (
              <>مبني خصيصاً<br /><span className="text-[#E63946]">لأعمال اللياقة البدنية</span></>
            ) : (
              <>Built Specifically For<br /><span className="text-[#E63946]">Fitness Businesses</span></>
            )}
          </h2>
          <p className="text-[var(--text-secondary)] text-lg max-w-2xl mx-auto">
            {ar
              ? "بخلاف أدوات CRM العامة، GymMate صُمّم للصالات الرياضية واستوديوهات اللياقة فقط."
              : "Unlike generic CRM tools, GymMate was designed exclusively for gyms and fitness studios."}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* feature grid */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid sm:grid-cols-2 gap-4"
          >
            {features.map((f, i) => {
              const Icon = f.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.07, duration: 0.45 }}
                  className="flex items-start gap-3 p-4 rounded-xl bg-[var(--surface-1)] border border-[var(--border-color)] hover:border-white/15 transition-all duration-200"
                >
                  <div
                    className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: `${f.color}15` }}
                  >
                    <Icon size={16} style={{ color: f.color }} />
                  </div>
                  <span className="text-[var(--text-secondary)] font-medium text-sm leading-snug mt-1.5">
                    {ar ? f.ar : f.en}
                  </span>
                </motion.div>
              );
            })}
          </motion.div>

          {/* comparison table */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-[var(--surface-1)] rounded-2xl overflow-hidden border border-[var(--border-color)]">
              <div className="grid grid-cols-3 px-6 py-4 border-b border-[var(--border-color)] bg-[var(--hero-card)]">
                <div className="text-[var(--text-muted)] text-xs font-bold tracking-[0.15em] uppercase">
                  {ar ? "الميزة" : "Feature"}
                </div>
                <div className="text-center">
                  <span className="bg-[#E63946] text-white text-xs font-bold px-3 py-1 rounded-full">
                    GymMate
                  </span>
                </div>
                <div className="text-center text-[var(--text-muted)] text-xs font-bold tracking-[0.12em] uppercase">
                  {ar ? "أدوات عامة" : "Generic Tools"}
                </div>
              </div>
              {rows.map((row, i) => (
                <div key={i} className="grid grid-cols-3 px-6 py-3.5 border-b border-white/6 last:border-0">
                  <div className="text-[var(--text-secondary)] text-sm">{ar ? row.ar : row.en}</div>
                  <div className="flex justify-center">
                    <CheckCircle2 size={16} className="text-[#10B981]" />
                  </div>
                  <div className="flex justify-center">
                    <X size={14} className="text-white/20" />
                  </div>
                </div>
              ))}
            </div>

            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center justify-center bg-[#E63946] hover:bg-[#C62839] text-white font-bold px-6 py-3.5 rounded-xl shadow-lg shadow-[#E63946]/25 transition-all duration-200 hover:-translate-y-0.5 w-full text-sm"
            >
              {ar ? "شاهد الفرق — احجز مكالمة مجانية" : "See the Difference — Book a Free Call"}
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
