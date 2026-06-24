"use client";

import { motion } from "framer-motion";
import { Clock, ShieldAlert, Repeat, Target } from "lucide-react";
import { useLang } from "@/lib/i18n";

const cases = [
  {
    icon: Clock,
    scenario: { en: "Slow Lead Response", ar: "استجابة بطيئة للعملاء" },
    tag:      { en: "Response Time", ar: "زمن الاستجابة" },
    color:    "#3B82F6",
    result:   { en: "Designed to reply in under 60 seconds", ar: "مصمَّم للرد في أقل من 60 ثانية" },
    body:     {
      en: "Leads from ads and WhatsApp often wait hours for a reply and go cold. The system is built so every lead gets an instant, qualified response — 24/7 — instead of waiting on staff.",
      ar: "العملاء من الإعلانات وواتساب غالبًا ينتظرون ساعات للرد فيفترون. النظام مبني بحيث يحصل كل عميل على رد فوري ومؤهَّل — 24/7 — بدل انتظار الموظفين.",
    },
    stats: [
      { val: "< 60s", lbl: { en: "target response", ar: "زمن مستهدف" } },
      { val: "24/7", lbl: { en: "always on", ar: "دائمًا" } },
      { val: "0", lbl: { en: "missed leads", ar: "عملاء فائتون" } },
    ],
  },
  {
    icon: ShieldAlert,
    scenario: { en: "Silent Member Churn", ar: "انسحاب صامت للأعضاء" },
    tag:      { en: "Retention", ar: "الاحتفاظ" },
    color:    "#E63946",
    result:   { en: "Designed to flag at-risk members early", ar: "مصمَّم لرصد الأعضاء المعرّضين مبكرًا" },
    body:     {
      en: "Members usually leave quietly, weeks before they cancel. The system is designed to spot dropping attendance and trigger a win-back message before they're gone.",
      ar: "عادةً يغادر الأعضاء بهدوء، قبل أسابيع من الإلغاء. النظام مصمَّم لرصد انخفاض الحضور وإطلاق رسالة استعادة قبل أن يغادروا.",
    },
    stats: [
      { val: "30d", lbl: { en: "early warning", ar: "إنذار مبكر" } },
      { val: "Auto", lbl: { en: "win-back", ar: "استعادة آلية" } },
      { val: "Live", lbl: { en: "risk alerts", ar: "تنبيهات الخطر" } },
    ],
  },
  {
    icon: Repeat,
    scenario: { en: "Missed Renewals", ar: "تجديدات فائتة" },
    tag:      { en: "Renewals", ar: "التجديدات" },
    color:    "#10B981",
    result:   { en: "Designed to recover lapsing revenue", ar: "مصمَّم لاستعادة الإيرادات المتسرّبة" },
    body:     {
      en: "Members often lapse simply because no one reminded them to renew. The system sends automated renewal reminders on WhatsApp and email before expiry — so revenue stops slipping away.",
      ar: "كثيرًا ما يترك الأعضاء العضوية لأن أحدًا لم يذكّرهم بالتجديد. النظام يرسل تذكيرات تجديد آلية على واتساب والبريد قبل الانتهاء — فتتوقف الإيرادات عن التسرّب.",
    },
    stats: [
      { val: "Auto", lbl: { en: "reminders", ar: "تذكيرات" } },
      { val: "0", lbl: { en: "manual chasing", ar: "ملاحقة يدوية" } },
      { val: "WA+✉", lbl: { en: "delivery", ar: "التوصيل" } },
    ],
  },
];

export default function CaseStudies() {
  const { lang } = useLang();
  const ar = lang === "ar";

  return (
    <section id="case-studies" className="bg-[var(--surface-0)] py-28 relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-[500px] h-[400px] rounded-full bg-[#10B981]/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        <motion.div
          dir={ar ? "rtl" : "ltr"}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="inline-block bg-[#E63946]/12 border border-[#E63946]/20 text-[#E63946] text-xs font-bold px-4 py-2 rounded-full mb-5 tracking-[0.15em] uppercase">
            {ar ? "ما الذي يحسّنه النظام" : "What This System Improves"}
          </span>
          <h2
            className="text-4xl lg:text-6xl font-bold text-[var(--text-primary)] mb-4"
            style={{ fontFamily: "var(--font-sora)" }}
          >
            {ar ? (
              <>المشاكل التي <span className="text-[#E63946]">صُمّم لحلّها</span></>
            ) : (
              <>The Problems It&apos;s <span className="text-[#E63946]">Built to Solve</span></>
            )}
          </h2>
          <p className="text-[var(--text-muted)] text-sm max-w-xl mx-auto">
            {ar
              ? "أمثلة توضيحية لأهداف التصميم — وليست نتائج عملاء مقيسة."
              : "Illustrative design goals — not measured client results."}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-6">
          {cases.map((c, i) => {
            const Icon = c.icon;
            return (
              <motion.div
                key={i}
                dir={ar ? "rtl" : "ltr"}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.55 }}
                className="group bg-[var(--surface-1)] rounded-2xl border border-[var(--border-color)] hover:border-[#E63946]/25 transition-all duration-300 overflow-hidden flex flex-col"
              >
                {/* header */}
                <div className="px-6 pt-6 pb-5 border-b border-[var(--border-color)]">
                  <div className="flex items-start justify-between mb-3">
                    <span
                      className="text-[10px] font-bold px-3 py-1 rounded-full tracking-wider uppercase"
                      style={{ backgroundColor: `${c.color}15`, color: c.color }}
                    >
                      {ar ? c.tag.ar : c.tag.en}
                    </span>
                    <div className="w-9 h-9 rounded-lg flex items-center justify-center" style={{ backgroundColor: `${c.color}15` }}>
                      <Icon size={16} style={{ color: c.color }} />
                    </div>
                  </div>
                  <h3 className="text-[var(--text-primary)] font-bold text-xl" style={{ fontFamily: "var(--font-sora)" }}>
                    {ar ? c.scenario.ar : c.scenario.en}
                  </h3>
                </div>

                {/* result highlight */}
                <div className="px-6 py-4 border-b border-[var(--border-color)]" style={{ backgroundColor: `${c.color}08` }}>
                  <div className="flex items-center gap-2 text-sm font-semibold" style={{ color: c.color }}>
                    <Target size={14} />
                    {ar ? c.result.ar : c.result.en}
                  </div>
                </div>

                {/* body */}
                <div className="px-6 py-5 flex-1">
                  <p className="text-[var(--text-secondary)] text-sm leading-relaxed">{ar ? c.body.ar : c.body.en}</p>
                </div>

                {/* stats */}
                <div className="grid grid-cols-3 border-t border-[var(--border-color)]">
                  {c.stats.map((s, j) => (
                    <div key={j} className={`px-3 py-4 text-center ${j > 0 ? "border-l border-[var(--border-color)]" : ""}`}>
                      <div className="text-[var(--text-primary)] font-bold text-base" style={{ fontFamily: "var(--font-sora)" }}>{s.val}</div>
                      <div className="text-[var(--text-muted)] text-[10px] mt-0.5">{ar ? s.lbl.ar : s.lbl.en}</div>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
