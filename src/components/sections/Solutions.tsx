"use client";

import { motion } from "framer-motion";
import { MessageSquare, Heart, ShieldAlert, LayoutDashboard, FileText, CheckCircle2, ArrowRight } from "lucide-react";
import { useLang } from "@/lib/i18n";

export default function Solutions() {
  const { lang } = useLang();
  const ar = lang === "ar";

  const solutions = [
    {
      icon: MessageSquare,
      color: "#3B82F6",
      title: ar ? "روبوت ذكاء اصطناعي مركزي والتقاط العملاء" : "Centralized AI Chatbot & Lead Capture",
      body: ar
        ? "قناة واحدة تجمع كل محادثاتك وتلتقط كل عميل محتمل تلقائيًا من كل مكان."
        : "One hub that unifies every conversation and captures every lead automatically, everywhere.",
      items: ar
        ? ["دردشة الموقع", "واتساب", "إنستجرام", "فيسبوك", "تأهيل العملاء", "حجز التجربة"]
        : ["Website Chat", "WhatsApp", "Instagram", "Facebook", "Lead Qualification", "Trial Booking"],
      outcome: ar ? "لن تخسر عميلًا محتملًا مجددًا." : "Never lose a lead again.",
    },
    {
      icon: Heart,
      color: "#E63946",
      title: ar ? "تأهيل الأعضاء الآلي" : "Automated Member Onboarding",
      body: ar
        ? "رحلة ترحيب آلية تبني العادة وتُبقي العضو متفاعلًا من أول يوم."
        : "An automated welcome journey that builds the habit and keeps members engaged from day one.",
      items: ar
        ? ["رسائل ترحيب", "رسائل تحفيزية", "إنجازات الزيارات", "تذكيرات الغياب"]
        : ["Welcome Messages", "Motivation Messages", "Visit Milestones", "Absence Reminders"],
      outcome: ar ? "ارفع الاحتفاظ من اليوم الأول." : "Increase retention from day one.",
    },
    {
      icon: ShieldAlert,
      color: "#F59E0B",
      title: ar ? "التنبؤ بالانسحاب والاحتفاظ" : "Churn Prediction & Retention",
      body: ar
        ? "يرصد إشارات الانسحاب مبكرًا ويطلق حملات استعادة قبل أن يغادر العضو."
        : "Detects churn signals early and triggers retention campaigns before a member leaves.",
      items: ar
        ? ["تتبع الحضور", "تقييم المخاطر", "حملات الاحتفاظ", "تنبيهات الفريق"]
        : ["Attendance Tracking", "Risk Scoring", "Retention Campaigns", "Staff Alerts"],
      outcome: ar ? "أنقذ الأعضاء قبل أن يغادروا." : "Save members before they leave.",
    },
    {
      icon: LayoutDashboard,
      color: "#10B981",
      title: ar ? "لوحة تحكم تنفيذية" : "Executive Dashboard",
      body: ar
        ? "كل مؤشرات عملك الحيّة في شاشة واحدة — قرارات أسرع وأوضح."
        : "All your live business metrics on one screen — faster, clearer decisions.",
      items: ar
        ? ["العملاء", "الإيرادات", "الحضور", "نمو العضويات", "معدل الانسحاب"]
        : ["Leads", "Revenue", "Attendance", "Membership Growth", "Churn Rate"],
      outcome: ar ? "شاهد العمل كله في مكان واحد." : "See the entire business in one place.",
    },
    {
      icon: FileText,
      color: "#8B5CF6",
      title: ar ? "تقارير آلية" : "Automated Reports",
      body: ar
        ? "تقارير جاهزة تصلك تلقائيًا على واتساب والبريد — بدون أي عمل يدوي."
        : "Ready-made reports delivered automatically to WhatsApp and email — zero manual work.",
      items: ar
        ? ["تقارير يومية", "تقارير أسبوعية", "تقارير شهرية", "توصيل واتساب", "توصيل بريد"]
        : ["Daily Reports", "Weekly Reports", "Monthly Reports", "WhatsApp Delivery", "Email Delivery"],
      outcome: ar ? "لا مزيد من التقارير اليدوية." : "No more manual reporting.",
    },
  ];

  return (
    <section id="solutions" className="bg-[var(--hero-bg)] py-28 relative overflow-hidden">
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[400px] rounded-full bg-[#3B82F6]/5 blur-[120px] pointer-events-none" />

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
            {ar ? "الحلول الخمسة" : "The 5 Solutions"}
          </span>
          <h2
            className="text-4xl lg:text-6xl font-bold text-white mb-5"
            style={{ fontFamily: "var(--font-sora)" }}
          >
            {ar ? (
              <>كل ما تحتاجه صالتك <span className="text-[#E63946]">لتنمو</span></>
            ) : (
              <>Everything Your Gym Needs <span className="text-[#E63946]">to Grow</span></>
            )}
          </h2>
          <p className="text-white/45 text-lg max-w-2xl mx-auto">
            {ar
              ? "خمسة أنظمة متكاملة تحوّل العملاء المحتملين إلى أعضاء، والأعضاء إلى إيرادات متكرّرة."
              : "Five connected systems that turn leads into members, and members into recurring revenue."}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-5">
          {solutions.map((s, i) => {
            const Icon = s.icon;
            const featured = i === solutions.length - 1 && solutions.length % 2 === 1;
            return (
              <motion.div
                key={i}
                dir={ar ? "rtl" : "ltr"}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.55 }}
                className={`group bg-[#111827] rounded-2xl p-7 border border-white/8 hover:border-white/15 transition-all duration-300 relative overflow-hidden flex flex-col ${
                  featured ? "lg:col-span-2" : ""
                }`}
              >
                <div
                  className="absolute top-0 right-0 w-40 h-40 rounded-full blur-[60px] pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ backgroundColor: `${s.color}10` }}
                />

                <div className="flex items-start gap-4 mb-5">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: `${s.color}18` }}
                  >
                    <Icon size={22} style={{ color: s.color }} />
                  </div>
                  <div>
                    <h3
                      className="text-white font-bold text-xl mb-2"
                      style={{ fontFamily: "var(--font-sora)" }}
                    >
                      {s.title}
                    </h3>
                    <p className="text-white/45 text-sm leading-relaxed">{s.body}</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2 mb-5">
                  {s.items.map((item, j) => (
                    <div key={j} className="flex items-center gap-2">
                      <CheckCircle2 size={13} style={{ color: s.color }} className="flex-shrink-0" />
                      <span className="text-white/55 text-xs">{item}</span>
                    </div>
                  ))}
                </div>

                {/* outcome */}
                <div
                  className="mt-auto inline-flex items-center gap-2 rounded-lg px-3.5 py-2.5 text-sm font-semibold w-fit"
                  style={{ backgroundColor: `${s.color}14`, color: s.color }}
                >
                  <ArrowRight size={14} className="flex-shrink-0" />
                  {s.outcome}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
