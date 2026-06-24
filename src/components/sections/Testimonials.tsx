"use client";

import { motion } from "framer-motion";
import { Clock, UserCheck, Repeat, Heart, Sparkles } from "lucide-react";
import { useLang } from "@/lib/i18n";

const reasons = [
  {
    icon: Clock,
    color: "#3B82F6",
    title: { en: "Faster Response Time", ar: "استجابة أسرع" },
    body: {
      en: "Every lead gets an instant, qualified reply in under 60 seconds — day or night — so no one waits and goes cold.",
      ar: "كل عميل محتمل يحصل على رد فوري ومؤهَّل في أقل من 60 ثانية — ليلًا أو نهارًا — فلا أحد ينتظر ويفتر.",
    },
  },
  {
    icon: UserCheck,
    color: "#E63946",
    title: { en: "Fewer Missed Leads", ar: "عملاء أقل ضياعًا" },
    body: {
      en: "Messages from WhatsApp, Instagram, Facebook and your website all land in one place — nothing slips through.",
      ar: "رسائل واتساب وإنستجرام وفيسبوك وموقعك كلها تصل لمكان واحد — لا شيء يضيع.",
    },
  },
  {
    icon: Heart,
    color: "#10B981",
    title: { en: "Better Retention", ar: "احتفاظ أفضل" },
    body: {
      en: "Onboarding, absence reminders and at-risk alerts keep members engaged before they ever think about leaving.",
      ar: "التأهيل وتذكيرات الغياب وتنبيهات الخطر تُبقي الأعضاء متفاعلين قبل أن يفكّروا في المغادرة.",
    },
  },
  {
    icon: Repeat,
    color: "#F59E0B",
    title: { en: "More Renewals", ar: "تجديدات أكثر" },
    body: {
      en: "Automated renewal reminders go out before memberships lapse — recovering revenue that used to slip away quietly.",
      ar: "تذكيرات التجديد الآلية تُرسَل قبل انتهاء العضوية — لاستعادة إيرادات كانت تضيع بصمت.",
    },
  },
  {
    icon: Sparkles,
    color: "#8B5CF6",
    title: { en: "Less Manual Work", ar: "عمل يدوي أقل" },
    body: {
      en: "Follow-ups, reports and reminders run on their own, so your team spends time on members — not admin.",
      ar: "المتابعات والتقارير والتذكيرات تعمل وحدها، فيقضي فريقك الوقت مع الأعضاء — لا في الإدارة.",
    },
  },
];

export default function Testimonials() {
  const { lang } = useLang();
  const ar = lang === "ar";

  return (
    <section id="testimonials" className="bg-[var(--surface-1)] py-28 relative overflow-hidden">
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] rounded-full bg-[#E63946]/5 blur-[120px] pointer-events-none" />

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
            {ar ? "لماذا GymMate" : "Why GymMate"}
          </span>
          <h2
            className="text-4xl lg:text-6xl font-bold text-[var(--text-primary)] mb-5 leading-tight"
            style={{ fontFamily: "var(--font-sora)" }}
          >
            {ar ? (
              <>لماذا يختار أصحاب الصالات <span className="text-[#E63946]">GymMate</span></>
            ) : (
              <>Why Gym Owners Choose <span className="text-[#E63946]">GymMate</span></>
            )}
          </h2>
          <p className="text-[var(--text-secondary)] text-lg max-w-2xl mx-auto">
            {ar
              ? "النظام مصمَّم حول ما يهمّ صالتك فعلًا — لا حول المميزات التقنية."
              : "The system is built around what actually moves your gym — not technical features."}
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((r, i) => {
            const Icon = r.icon;
            return (
              <motion.div
                key={i}
                dir={ar ? "rtl" : "ltr"}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.55 }}
                className="group bg-[var(--surface-0)] rounded-2xl p-7 border border-[var(--border-color)] hover:border-[#E63946]/30 transition-all duration-300"
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                  style={{ backgroundColor: `${r.color}15` }}
                >
                  <Icon size={22} style={{ color: r.color }} />
                </div>
                <h3
                  className="text-[var(--text-primary)] font-bold text-xl mb-3"
                  style={{ fontFamily: "var(--font-sora)" }}
                >
                  {ar ? r.title.ar : r.title.en}
                </h3>
                <p className="text-[var(--text-secondary)] text-[15px] leading-relaxed">
                  {ar ? r.body.ar : r.body.en}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
