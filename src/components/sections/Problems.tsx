"use client";

import { motion } from "framer-motion";
import { Inbox, UserX, CalendarX, FileSpreadsheet, TrendingDown } from "lucide-react";
import { useLang } from "@/lib/i18n";

export default function Problems() {
  const { lang } = useLang();
  const ar = lang === "ar";

  const problems = [
    {
      icon: Inbox,
      color: "#E63946",
      title: ar ? "عملاء محتملون ضائعون" : "Lost Leads",
      body: ar
        ? "العملاء من فيسبوك وإنستجرام وواتساب والموقع يظلّون بلا رد."
        : "Leads from Facebook, Instagram, WhatsApp and Website go unanswered.",
    },
    {
      icon: UserX,
      color: "#F59E0B",
      title: ar ? "انسحاب الأعضاء" : "Member Churn",
      body: ar
        ? "الأعضاء يختفون بعد الشهر الأول."
        : "Members disappear after the first month.",
    },
    {
      icon: CalendarX,
      color: "#E63946",
      title: ar ? "تجديدات فائتة" : "Missed Renewals",
      body: ar
        ? "الأعضاء ينسون التجديد فتنخفض الإيرادات."
        : "Members forget to renew and revenue drops.",
    },
    {
      icon: FileSpreadsheet,
      color: "#8B5CF6",
      title: ar ? "تقارير يدوية" : "Manual Reporting",
      body: ar
        ? "المدراء يضيّعون ساعات في تجميع التقارير."
        : "Managers waste hours collecting reports.",
    },
  ];

  return (
    <section id="problems" className="bg-[var(--surface-1)] py-28 relative overflow-hidden">
      <div className="absolute top-0 left-1/4 w-[600px] h-[300px] rounded-full bg-[#E63946]/5 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        <motion.div
          dir={ar ? "rtl" : "ltr"}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 bg-[#E63946]/12 border border-[#E63946]/20 text-[#E63946] text-xs font-bold px-4 py-2 rounded-full mb-5 tracking-[0.15em] uppercase">
            <TrendingDown size={12} />
            {ar ? "المشكلة" : "The Problem"}
          </span>
          <h2
            className="text-4xl lg:text-6xl font-bold text-[var(--text-primary)] mb-5 leading-tight"
            style={{ fontFamily: "var(--font-sora)" }}
          >
            {ar ? (
              <>تخسر إيرادات <span className="text-[#E63946]">كل يوم</span></>
            ) : (
              <>You&apos;re Losing Revenue <span className="text-[#E63946]">Every Day</span></>
            )}
          </h2>
          <p className="text-[var(--text-secondary)] text-lg max-w-2xl mx-auto">
            {ar
              ? "بدون الأنظمة الصحيحة، كل عميل محتمل فائت وكل عضو غادر يكلّفك إيرادات حقيقية."
              : "Without the right systems, every missed lead and every churned member is real revenue walking out the door."}
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {problems.map((p, i) => {
            const Icon = p.icon;
            return (
              <motion.div
                key={i}
                dir={ar ? "rtl" : "ltr"}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.55 }}
                className="group relative bg-[var(--surface-0)] rounded-2xl p-7 border border-[var(--border-color)] hover:border-[#E63946]/30 transition-all duration-300"
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                  style={{ backgroundColor: `${p.color}15` }}
                >
                  <Icon size={22} style={{ color: p.color }} />
                </div>

                <h3
                  className="text-[var(--text-primary)] font-bold text-xl mb-3 leading-snug"
                  style={{ fontFamily: "var(--font-sora)" }}
                >
                  {p.title}
                </h3>
                <p className="text-[var(--text-secondary)] text-[15px] leading-relaxed">{p.body}</p>

                <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#E63946]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
