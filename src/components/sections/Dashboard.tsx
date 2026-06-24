"use client";

import { motion } from "framer-motion";
import { Users, UserPlus, UserMinus, DollarSign, CalendarCheck, RefreshCw, Bell, MessageCircle, CreditCard } from "lucide-react";
import { useLang } from "@/lib/i18n";
import { CALENDLY_URL } from "@/lib/config";

const barData = [45, 52, 48, 61, 57, 68, 63, 72, 69, 80, 76, 88];

export default function Dashboard() {
  const { lang } = useLang();
  const ar = lang === "ar";

  const kpis = [
    { icon: Users,        color: "#3B82F6", val: "42",     change: "+9",   en: "Leads Today",     ar: "عملاء اليوم" },
    { icon: UserPlus,     color: "#10B981", val: "128",    change: "+12%", en: "New Members",     ar: "أعضاء جدد" },
    { icon: DollarSign,   color: "#F59E0B", val: "$48.2k", change: "+22%", en: "Revenue",         ar: "الإيرادات" },
    { icon: UserMinus,    color: "#E63946", val: "38",     change: "−12",  en: "Churn Risk",      ar: "خطر الانسحاب" },
    { icon: CalendarCheck,color: "#8B5CF6", val: "87%",    change: "+4%",  en: "Attendance Rate", ar: "معدل الحضور" },
    { icon: RefreshCw,    color: "#10B981", val: "64",     change: "+18",  en: "Renewals Due",    ar: "تجديدات مستحقة" },
  ];

  const alerts = [
    { icon: Bell,         color: "#F59E0B", en: "15 members at churn risk",          ar: "15 عضواً في خطر الانسحاب",       time: "now" },
    { icon: MessageCircle,color: "#3B82F6", en: "Win-back sequence: 38% reply rate", ar: "معدل رد 38% على حملة الاستعادة", time: "5m" },
    { icon: CreditCard,   color: "#10B981", en: "Payment recovered: $420",            ar: "مدفوعات مستردة: $420",           time: "12m" },
  ];

  return (
    <section id="dashboard" className="bg-[var(--surface-1)] py-28 relative overflow-hidden">
      <div className="absolute top-1/2 right-0 w-[400px] h-[400px] rounded-full bg-[#3B82F6]/5 blur-[120px] pointer-events-none" />

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
            {ar ? "لوحة تجريبية" : "Demo Dashboard"}
          </span>
          <h2
            className="text-4xl lg:text-6xl font-bold text-[var(--text-primary)] mb-5"
            style={{ fontFamily: "var(--font-sora)" }}
          >
            {ar ? (
              <>كل شيء في<br /><span className="text-[#E63946]">مكان واحد</span></>
            ) : (
              <>Everything You Need<br /><span className="text-[#E63946]">in One View</span></>
            )}
          </h2>
          <p className="text-[var(--text-secondary)] text-lg max-w-2xl mx-auto">
            {ar
              ? "لوحة واحدة تجمع كل مقاييس الاحتفاظ والإيرادات والأعضاء — العرض أدناه ببيانات تجريبية."
              : "One dashboard bringing together all your retention, revenue, and member metrics — shown below with sample data."}
          </p>
        </motion.div>

        {/* mock dashboard */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="bg-[var(--surface-1)] rounded-2xl border border-[var(--border-color)] overflow-hidden shadow-2xl"
        >
          {/* title bar */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-[var(--border-color)] bg-[var(--hero-card)]">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-[#E63946]/60" />
              <div className="w-3 h-3 rounded-full bg-[#F59E0B]/60" />
              <div className="w-3 h-3 rounded-full bg-[#10B981]/60" />
              <span className="text-[var(--text-muted)] text-xs ml-3">{ar ? "GymMate · نظرة شاملة" : "GymMate · Overview"}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] animate-pulse" />
              <span className="text-[#10B981] text-xs font-semibold">{ar ? "مباشر" : "Live"}</span>
            </div>
          </div>

          <div className="p-6 grid lg:grid-cols-3 gap-5">
            {/* KPI cards */}
            <div className="lg:col-span-2 grid grid-cols-2 gap-4">
              {kpis.map((kpi, i) => {
                const Icon = kpi.icon;
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08, duration: 0.4 }}
                    className="bg-[var(--hero-bg)] rounded-xl p-4 border border-[var(--border-color)]"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-[var(--text-muted)] text-[11px]">{ar ? kpi.ar : kpi.en}</span>
                      <div className="w-7 h-7 rounded-lg flex items-center justify-center" style={{ backgroundColor: `${kpi.color}20` }}>
                        <Icon size={14} style={{ color: kpi.color }} />
                      </div>
                    </div>
                    <div className="text-[var(--text-primary)] font-bold text-2xl mb-1" style={{ fontFamily: "var(--font-sora)" }}>
                      {kpi.val}
                    </div>
                    <div className="text-xs font-semibold" style={{ color: kpi.color }}>{kpi.change}</div>
                  </motion.div>
                );
              })}

              {/* bar chart */}
              <div className="col-span-2 bg-[var(--hero-bg)] rounded-xl p-5 border border-[var(--border-color)]">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[var(--text-secondary)] text-xs font-medium">{ar ? "نمو الإيرادات الشهرية" : "Monthly Revenue Growth"}</span>
                  <span className="text-[#10B981] text-xs font-bold">+22%</span>
                </div>
                <div className="flex items-end gap-1.5 h-20">
                  {barData.map((h, i) => (
                    <motion.div
                      key={i}
                      className="flex-1 rounded-t-sm"
                      style={{ backgroundColor: i === barData.length - 1 ? "#E63946" : "#E63946" + "35" }}
                      initial={{ height: 0 }}
                      whileInView={{ height: `${h}%` }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.04, duration: 0.4, ease: "easeOut" }}
                    />
                  ))}
                </div>
                <div className="flex justify-between mt-2">
                  <span className="text-white/20 text-[10px]">{ar ? "يناير" : "Jan"}</span>
                  <span className="text-white/20 text-[10px]">{ar ? "ديسمبر" : "Dec"}</span>
                </div>
              </div>
            </div>

            {/* alerts */}
            <div className="bg-[var(--hero-bg)] rounded-xl p-5 border border-[var(--border-color)] flex flex-col">
              <div className="text-[var(--text-muted)] text-xs font-bold tracking-[0.15em] uppercase mb-4">
                {ar ? "تنبيهات مباشرة" : "Live Alerts"}
              </div>
              <div className="space-y-3 flex-1">
                {alerts.map((a, i) => {
                  const Icon = a.icon;
                  return (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: 12 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1, duration: 0.4 }}
                      className="flex items-start gap-3 bg-[var(--surface-1)] rounded-xl p-3.5 border border-white/6"
                    >
                      <div className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0" style={{ backgroundColor: `${a.color}20` }}>
                        <Icon size={13} style={{ color: a.color }} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="text-white/70 text-xs leading-tight">{ar ? a.ar : a.en}</div>
                        <div className="text-white/25 text-[10px] mt-1">{a.time === "now" ? (ar ? "الآن" : "now") : `${a.time} ${ar ? "مضت" : "ago"}`}</div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
              <a
                href={CALENDLY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 block text-center bg-[#E63946]/15 hover:bg-[#E63946]/25 text-[#E63946] font-bold text-xs py-2.5 rounded-lg transition-colors"
              >
                {ar ? "احجز عرضاً" : "Book a Demo"}
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
