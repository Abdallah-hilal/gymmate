"use client";

import { motion } from "framer-motion";
import { ArrowDown, Zap } from "lucide-react";
import { useLang } from "@/lib/i18n";
import { CALENDLY_URL } from "@/lib/config";

const steps = {
  en: [
    { label: "Lead",                sub: "From ads, social or website",        color: "#3B82F6" },
    { label: "AI Follow-Up",        sub: "< 60 second response, 24/7",         color: "#E63946" },
    { label: "Trial Booking",       sub: "Auto-scheduled, zero back-and-forth", color: "#8B5CF6" },
    { label: "Membership Purchase", sub: "Booking + payment fully automated",  color: "#F59E0B" },
    { label: "Onboarding",          sub: "Welcome & motivation sequences",     color: "#10B981" },
    { label: "Attendance Tracking", sub: "Visit milestones & absence alerts",  color: "#3B82F6" },
    { label: "Renewal Reminder",    sub: "Automated before membership lapses", color: "#EC4899" },
    { label: "Long-Term Member",    sub: "Higher LTV, lower churn rate",       color: "#10B981" },
  ],
  ar: [
    { label: "عميل محتمل",        sub: "من الإعلانات أو السوشيال أو الموقع", color: "#3B82F6" },
    { label: "متابعة بالذكاء الاصطناعي", sub: "رد في أقل من 60 ثانية، 24/7",  color: "#E63946" },
    { label: "حجز التجربة",        sub: "جدولة آلية بلا أخذ ورد",            color: "#8B5CF6" },
    { label: "شراء العضوية",       sub: "حجز ودفع بالكامل آلياً",            color: "#F59E0B" },
    { label: "التأهيل",            sub: "رسائل ترحيب وتحفيز",                color: "#10B981" },
    { label: "تتبع الحضور",        sub: "إنجازات الزيارات وتنبيهات الغياب",  color: "#3B82F6" },
    { label: "تذكير التجديد",      sub: "آلياً قبل انتهاء العضوية",          color: "#EC4899" },
    { label: "عضو طويل الأمد",     sub: "قيمة عمر أعلى، انسحاب أقل",        color: "#10B981" },
  ],
};

const metrics = [
  { en: "Avg. response time", ar: "متوسط وقت الاستجابة", value: "< 60s",  color: "#3B82F6" },
  { en: "Lead-to-member rate", ar: "معدل تحويل العملاء",  value: "+55%",  color: "#10B981" },
  { en: "Time saved weekly",   ar: "وقت موفر أسبوعياً",  value: "20hrs", color: "#F59E0B" },
  { en: "Retention boost",     ar: "تحسين الاحتفاظ",     value: "+40%",  color: "#E63946" },
];

export default function WorkflowVisualization() {
  const { lang } = useLang();
  const ar = lang === "ar";
  const workflowSteps = ar ? steps.ar : steps.en;

  return (
    <section id="how-it-works" className="bg-[var(--hero-bg)] py-28 relative overflow-hidden">
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
            {ar ? "كيف يعمل" : "How It Works"}
          </span>
          <h2
            className="text-4xl lg:text-5xl font-bold text-white mb-5"
            style={{ fontFamily: "var(--font-sora)" }}
          >
            {ar ? (
              <>من العميل إلى العضو<br /><span className="text-[#E63946]">بالكامل آلياً</span></>
            ) : (
              <>From Lead to Long-Term Member<br /><span className="text-[#E63946]">Fully Automated</span></>
            )}
          </h2>
          <p className="text-white/45 text-lg max-w-2xl mx-auto">
            {ar
              ? "شاهد كيف يحوّل GymMate كل استفسار إلى عضوية وكل عضو إلى وفاء طويل الأمد."
              : "See exactly how GymMate converts every inquiry into a membership and every member into lasting loyalty."}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* workflow steps */}
          <div className="flex flex-col">
            {workflowSteps.map((step, i) => (
              <div key={i} className="flex flex-col items-start">
                <motion.div
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, duration: 0.45 }}
                  className="flex items-center gap-4 w-full max-w-sm"
                >
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center font-bold text-white text-sm flex-shrink-0 shadow-lg"
                    style={{ backgroundColor: step.color, boxShadow: `0 0 16px ${step.color}40` }}
                  >
                    {i === 1 ? <Zap size={16} fill="white" /> : <span style={{ fontFamily: "var(--font-sora)" }}>{i + 1}</span>}
                  </div>
                  <div className="bg-[#111827] rounded-xl px-4 py-3 border border-white/8 flex-1">
                    <div className="text-white font-semibold text-sm" style={{ fontFamily: "var(--font-sora)" }}>
                      {step.label}
                    </div>
                    <div className="text-white/35 text-xs mt-0.5">{step.sub}</div>
                  </div>
                </motion.div>
                {i < workflowSteps.length - 1 && (
                  <div className="flex items-center justify-center w-11 my-1">
                    <ArrowDown size={12} className="text-white/15" />
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* metrics */}
          <div>
            <div className="bg-[#111827] rounded-2xl border border-white/8 overflow-hidden">
              <div className="px-6 py-4 border-b border-white/8 bg-[#0D1117]">
                <span className="text-white font-semibold text-sm">
                  {ar ? "نتائج الأتمتة — الوقت الفعلي" : "Automation Results — Live"}
                </span>
              </div>
              <div className="p-6 grid grid-cols-2 gap-4">
                {metrics.map((m, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1, duration: 0.4 }}
                    className="bg-[#0A0F1C] rounded-xl p-4 border border-white/8"
                  >
                    <div
                      className="text-3xl font-bold mb-1"
                      style={{ color: m.color, fontFamily: "var(--font-sora)" }}
                    >
                      {m.value}
                    </div>
                    <div className="text-white/35 text-xs">{ar ? m.ar : m.en}</div>
                  </motion.div>
                ))}
              </div>

              {/* timeline bar */}
              <div className="px-6 pb-6">
                <div className="bg-[#0A0F1C] rounded-xl p-4 border border-white/8">
                  <div className="text-white/35 text-xs mb-3">
                    {ar ? "مسار العضو النموذجي" : "Typical member journey"}
                  </div>
                  <div className="relative h-2 bg-white/6 rounded-full overflow-hidden">
                    {[
                      { w: "15%", c: "#3B82F6", l: "0%" },
                      { w: "20%", c: "#E63946", l: "15%" },
                      { w: "20%", c: "#8B5CF6", l: "35%" },
                      { w: "25%", c: "#F59E0B", l: "55%" },
                      { w: "20%", c: "#10B981", l: "80%" },
                    ].map((seg, i) => (
                      <motion.div
                        key={i}
                        className="absolute top-0 h-full rounded-sm"
                        style={{ backgroundColor: seg.c, left: seg.l, width: 0 }}
                        whileInView={{ width: seg.w }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.15 + 0.3, duration: 0.5, ease: "easeOut" }}
                      />
                    ))}
                  </div>
                  <div className="flex justify-between mt-2">
                    <span className="text-white/20 text-[10px]">{ar ? "يوم 1" : "Day 1"}</span>
                    <span className="text-[#10B981] text-[10px] font-bold">{ar ? "عضو ✓" : "Member ✓"}</span>
                  </div>
                </div>
              </div>
            </div>

            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center justify-center bg-[#E63946] hover:bg-[#C62839] text-white font-bold px-6 py-3.5 rounded-xl shadow-lg shadow-[#E63946]/25 transition-all duration-200 hover:-translate-y-0.5 w-full text-sm"
            >
              {ar ? "احجز مكالمة مجانية" : "Book a Free Call"}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
