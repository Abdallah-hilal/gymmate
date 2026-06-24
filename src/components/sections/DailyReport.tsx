"use client";

import { motion } from "framer-motion";
import { MessageCircle, Mail, MessageSquare, AlertCircle, Flame, CalendarCheck, Clock, ListChecks } from "lucide-react";
import { useLang } from "@/lib/i18n";

export default function DailyReport() {
  const { lang } = useLang();
  const ar = lang === "ar";

  const rows = [
    { icon: MessageSquare, color: "#3B82F6", lbl: { en: "Conversations", ar: "المحادثات" }, val: "128" },
    { icon: AlertCircle,   color: "#E63946", lbl: { en: "Unanswered", ar: "بلا رد" }, val: "3" },
    { icon: Flame,         color: "#F59E0B", lbl: { en: "Hot leads", ar: "عملاء مهمّون" }, val: "9" },
    { icon: CalendarCheck, color: "#10B981", lbl: { en: "Trials booked", ar: "تجارب محجوزة" }, val: "5" },
    { icon: Clock,         color: "#8B5CF6", lbl: { en: "Avg. response", ar: "متوسط الرد" }, val: "47s" },
    { icon: ListChecks,    color: "#EC4899", lbl: { en: "Follow-up tasks", ar: "مهام المتابعة" }, val: "6" },
  ];

  const benefits = [
    { en: "Delivered to WhatsApp or email", ar: "يصلك على واتساب أو البريد" },
    { en: "Daily, weekly or monthly", ar: "يوميًا أو أسبوعيًا أو شهريًا" },
    { en: "No dashboards to open or chase", ar: "بدون فتح لوحات أو ملاحقة" },
    { en: "Know exactly what needs action", ar: "تعرف بالضبط ما يحتاج تحرّكًا" },
  ];

  return (
    <section id="daily-report" className="bg-[var(--surface-1)] py-28 relative overflow-hidden">
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[400px] rounded-full bg-[#25D366]/6 blur-[120px] pointer-events-none" />

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
            {ar ? "تقرير يومي" : "Daily Report"}
          </span>
          <h2
            className="text-4xl lg:text-6xl font-bold text-[var(--text-primary)] mb-5 leading-tight"
            style={{ fontFamily: "var(--font-sora)" }}
          >
            {ar ? (
              <>تقرير المحادثات <span className="text-[#E63946]">والعملاء اليومي</span></>
            ) : (
              <>Daily Chat & <span className="text-[#E63946]">Lead Report</span></>
            )}
          </h2>
          <p className="text-[var(--text-secondary)] text-lg max-w-2xl mx-auto">
            {ar
              ? "كل صباح يصلك ملخّص واضح: كم محادثة، أي رسائل بلا رد، العملاء المهمّون، التجارب المحجوزة، زمن الاستجابة، ومهام المتابعة — على واتساب أو البريد."
              : "Every morning you get a clear summary: how many conversations, any unanswered messages, hot leads, booked trials, response time, and follow-up tasks — via WhatsApp or email."}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10 items-center">
          {/* report mockup (WhatsApp-style card) */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-[var(--hero-bg)] rounded-2xl border border-[var(--border-color)] overflow-hidden shadow-2xl max-w-md mx-auto w-full"
          >
            {/* WhatsApp header */}
            <div className="flex items-center gap-3 px-5 py-3.5 bg-[#075E54]">
              <div className="w-9 h-9 rounded-full bg-[#25D366]/20 flex items-center justify-center">
                <MessageCircle size={17} className="text-[#25D366]" />
              </div>
              <div>
                <div className="text-white font-semibold text-sm">GymMate</div>
                <div className="text-white/60 text-[10px]">{ar ? "تقرير آلي" : "Automated report"}</div>
              </div>
            </div>

            {/* message bubble */}
            <div className="p-5 bg-[#0b1f1c]">
              <div dir={ar ? "rtl" : "ltr"} className="bg-[#075E54]/40 border border-[#25D366]/15 rounded-xl rounded-tr-sm p-4">
                <div className="text-white font-bold text-sm mb-3" style={{ fontFamily: "var(--font-sora)" }}>
                  {ar ? "☀️ ملخّص اليوم — صالتك" : "☀️ Today's summary — your gym"}
                </div>
                <div className="space-y-2.5">
                  {rows.map((r, i) => {
                    const Icon = r.icon;
                    return (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 + i * 0.08, duration: 0.4 }}
                        className="flex items-center justify-between gap-3"
                      >
                        <span className="flex items-center gap-2 text-white/75 text-xs">
                          <Icon size={13} style={{ color: r.color }} />
                          {ar ? r.lbl.ar : r.lbl.en}
                        </span>
                        <span className="text-white font-bold text-sm" style={{ fontFamily: "var(--font-sora)" }}>{r.val}</span>
                      </motion.div>
                    );
                  })}
                </div>
                <div className="text-white/35 text-[10px] mt-3 text-right">08:00 ✓✓</div>
              </div>
            </div>
          </motion.div>

          {/* benefits */}
          <motion.div
            dir={ar ? "rtl" : "ltr"}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="text-[var(--text-primary)] font-bold text-2xl mb-6" style={{ fontFamily: "var(--font-sora)" }}>
              {ar ? "كل ما يهمّك — بدون أن تطلبه" : "Everything that matters — without asking for it"}
            </h3>
            <div className="space-y-3 mb-8">
              {benefits.map((b, i) => (
                <div key={i} className="flex items-center gap-3 bg-[var(--surface-0)] border border-[var(--border-color)] rounded-xl px-4 py-3.5">
                  <span className="w-2 h-2 rounded-full bg-[#10B981] flex-shrink-0" />
                  <span className="text-[var(--text-secondary)] text-sm">{ar ? b.ar : b.en}</span>
                </div>
              ))}
            </div>
            <div className="flex items-center gap-3">
              <span className="inline-flex items-center gap-2 text-[var(--text-muted)] text-sm">
                <MessageCircle size={15} className="text-[#25D366]" /> {ar ? "واتساب" : "WhatsApp"}
              </span>
              <span className="text-[var(--text-muted)]">·</span>
              <span className="inline-flex items-center gap-2 text-[var(--text-muted)] text-sm">
                <Mail size={15} className="text-[#F59E0B]" /> {ar ? "البريد" : "Email"}
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
