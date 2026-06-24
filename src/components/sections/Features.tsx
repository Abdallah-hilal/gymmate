"use client";

import { motion } from "framer-motion";
import { Magnet, UserCheck, CalendarCheck, Bell, RefreshCw, Send, Database, PieChart, Bot, LayoutDashboard } from "lucide-react";
import { useLang } from "@/lib/i18n";

const categories = [
  {
    id: "acquire",
    en: "ACQUIRE",
    ar: "اكتساب",
    color: "#3B82F6",
    features: [
      { icon: Magnet,      en: "Lead Capture",         ar: "التقاط العملاء",       en_d: "Website, ads & social",      ar_d: "الموقع، الإعلانات، السوشيال" },
      { icon: UserCheck,   en: "Lead Qualification",   ar: "تأهيل العملاء",       en_d: "AI scores every lead",       ar_d: "الذكاء الاصطناعي يُقيّم كل عميل" },
      { icon: CalendarCheck, en: "Appointment Booking", ar: "حجز المواعيد",        en_d: "Automated scheduling",       ar_d: "جدولة آلية بالكامل" },
    ],
  },
  {
    id: "retain",
    en: "RETAIN",
    ar: "احتفاظ",
    color: "#10B981",
    features: [
      { icon: Bell,        en: "Churn Alerts",         ar: "تنبيهات الانسحاب",    en_d: "30-day early warning",       ar_d: "إنذار مبكر قبل 30 يوم" },
      { icon: RefreshCw,   en: "Win-Back Campaigns",   ar: "حملات الاستعادة",     en_d: "Reactivate lapsed members",  ar_d: "إعادة تفعيل الأعضاء الخاملين" },
      { icon: Send,        en: "Automated Follow-Ups", ar: "متابعة آلية",         en_d: "WhatsApp · Email · SMS",     ar_d: "واتساب · بريد · رسائل" },
    ],
  },
  {
    id: "scale",
    en: "SCALE",
    ar: "توسّع",
    color: "#8B5CF6",
    features: [
      { icon: Database,      en: "CRM Automation",     ar: "أتمتة CRM",           en_d: "50+ integrations",           ar_d: "أكثر من 50 تكامل" },
      { icon: PieChart,      en: "Advanced Reporting", ar: "تقارير متقدمة",       en_d: "Revenue & retention KPIs",   ar_d: "مؤشرات الإيرادات والاحتفاظ" },
      { icon: Bot,           en: "AI Support Agent",   ar: "دعم بالذكاء الاصطناعي", en_d: "24/7 member support",     ar_d: "دعم أعضاء 24/7" },
      { icon: LayoutDashboard, en: "Analytics Dashboard", ar: "لوحة التحليلات",  en_d: "All metrics in one view",    ar_d: "كل المقاييس في مكان واحد" },
    ],
  },
];

export default function Features() {
  const { lang } = useLang();
  const ar = lang === "ar";

  return (
    <section id="features" className="bg-[var(--surface-0)] py-24 relative overflow-hidden">
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] rounded-full bg-[#8B5CF6]/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block bg-[#E63946]/12 border border-[#E63946]/20 text-[#E63946] text-xs font-bold px-4 py-2 rounded-full mb-5 tracking-[0.15em] uppercase">
            {ar ? "الميزات" : "Features"}
          </span>
          <h2
            className="text-4xl lg:text-5xl font-bold text-[var(--text-primary)] mb-5"
            style={{ fontFamily: "var(--font-sora)" }}
          >
            {ar ? (
              <>مبني لكل مرحلة<br /><span className="text-[#E63946]">من دورة حياة العضو</span></>
            ) : (
              <>Built for Every Stage of<br /><span className="text-[#E63946]">the Member Lifecycle</span></>
            )}
          </h2>
          <p className="text-[var(--text-secondary)] text-lg max-w-2xl mx-auto">
            {ar
              ? "من أول تفاعل حتى العضوية طويلة الأمد — GymMate يدير كل مرحلة آلياً."
              : "From first touch to long-term membership — GymMate handles every stage automatically."}
          </p>
        </motion.div>

        <div className="space-y-10">
          {categories.map((cat, ci) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: ci * 0.1, duration: 0.55 }}
            >
              {/* category label */}
              <div className="flex items-center gap-4 mb-5">
                <div
                  className="h-px flex-1 max-w-8"
                  style={{ backgroundColor: cat.color }}
                />
                <span
                  className="text-xs font-bold tracking-[0.2em]"
                  style={{ color: cat.color }}
                >
                  {ar ? cat.ar : cat.en}
                </span>
                <div
                  className="h-px flex-1"
                  style={{ backgroundColor: `${cat.color}30` }}
                />
              </div>

              <div className={`grid gap-4 ${cat.features.length === 4 ? "sm:grid-cols-2 lg:grid-cols-4" : "sm:grid-cols-3"}`}>
                {cat.features.map((f, fi) => {
                  const Icon = f.icon;
                  return (
                    <motion.div
                      key={fi}
                      initial={{ opacity: 0, y: 16 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: ci * 0.1 + fi * 0.07, duration: 0.45 }}
                      className="group bg-[var(--surface-1)] rounded-xl p-5 border border-[var(--border-color)] hover:border-white/16 transition-all duration-300 relative overflow-hidden"
                    >
                      <div
                        className="w-10 h-10 rounded-lg flex items-center justify-center mb-4"
                        style={{ backgroundColor: `${cat.color}15` }}
                      >
                        <Icon size={18} style={{ color: cat.color }} />
                      </div>
                      <div
                        className="text-[var(--text-primary)] font-semibold text-[15px] mb-1"
                        style={{ fontFamily: "var(--font-sora)" }}
                      >
                        {ar ? f.ar : f.en}
                      </div>
                      <div className="text-[var(--text-muted)] text-xs">{ar ? f.ar_d : f.en_d}</div>

                      <div
                        className="absolute bottom-0 left-0 right-0 h-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        style={{ backgroundColor: cat.color }}
                      />
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
