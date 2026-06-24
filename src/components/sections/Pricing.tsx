"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Check, Zap } from "lucide-react";
import { useLang } from "@/lib/i18n";
import { CALENDLY_URL } from "@/lib/config";

export default function Pricing() {
  const { lang } = useLang();
  const ar = lang === "ar";
  const [annual, setAnnual] = useState(false);

  const plans = [
    {
      name: { en: "Starter", ar: "المبتدئ" },
      price: { monthly: 149, annual: 119 },
      desc: { en: "For single-location gyms getting started with automation", ar: "لصالة موقع واحد تبدأ في الأتمتة" },
      color: "#6B7280",
      features: {
        en: ["AI support agent (up to 500 conversations/mo)", "Lead capture & CRM sync", "Automated follow-up (WhatsApp + Email)", "Basic retention alerts", "1 location", "Email support"],
        ar: ["مساعد ذكاء اصطناعي (حتى 500 محادثة/شهر)", "التقاط العملاء ومزامنة CRM", "متابعة آلية (واتساب + بريد)", "تنبيهات احتفاظ أساسية", "موقع واحد", "دعم عبر البريد"],
      },
    },
    {
      name: { en: "Growth", ar: "النمو" },
      price: { monthly: 299, annual: 239 },
      desc: { en: "For growing gyms ready to systemize retention and revenue", ar: "للصالات النامية الجاهزة لأتمتة الاحتفاظ والإيرادات" },
      color: "#E63946",
      popular: true,
      features: {
        en: ["Everything in Starter", "Unlimited AI conversations", "Advanced churn prediction", "Win-back automation campaigns", "Payment recovery automation", "Up to 3 locations", "WhatsApp Business integration", "Priority support + onboarding call"],
        ar: ["كل ميزات المبتدئ", "محادثات ذكاء اصطناعي غير محدودة", "تنبؤ متقدم بالانسحاب", "حملات استعادة آلية", "أتمتة استرداد المدفوعات", "حتى 3 مواقع", "تكامل واتساب للأعمال", "دعم أولوية + مكالمة تأهيل"],
      },
    },
    {
      name: { en: "Scale", ar: "التوسع" },
      price: { monthly: 599, annual: 479 },
      desc: { en: "For multi-location chains that need enterprise-grade automation", ar: "لسلاسل متعددة المواقع تحتاج أتمتة على مستوى المؤسسات" },
      color: "#8B5CF6",
      features: {
        en: ["Everything in Growth", "Unlimited locations", "Custom AI training on your brand", "Advanced analytics & custom reports", "API access & custom integrations", "Dedicated account manager", "SLA + 24/7 support"],
        ar: ["كل ميزات النمو", "مواقع غير محدودة", "تدريب مخصص للذكاء الاصطناعي على علامتك", "تحليلات متقدمة وتقارير مخصصة", "وصول API وتكاملات مخصصة", "مدير حساب مخصص", "SLA + دعم 24/7"],
      },
    },
  ];

  return (
    <section id="pricing" className="bg-[var(--hero-bg)] py-24 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full bg-[#E63946]/6 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="inline-block bg-[#E63946]/12 border border-[#E63946]/20 text-[#E63946] text-xs font-bold px-4 py-2 rounded-full mb-5 tracking-[0.15em] uppercase">
            {ar ? "الأسعار" : "Pricing"}
          </span>
          <h2
            className="text-4xl lg:text-5xl font-bold text-[var(--text-primary)] mb-5"
            style={{ fontFamily: "var(--font-sora)" }}
          >
            {ar ? (
              <>سعر واحد شفاف<br /><span className="text-[#E63946]">لا رسوم مخفية</span></>
            ) : (
              <>Simple, Transparent Pricing<br /><span className="text-[#E63946]">No Hidden Fees</span></>
            )}
          </h2>

          {/* toggle */}
          <div className="inline-flex items-center gap-3 bg-[var(--surface-1)] border border-[var(--border-color)] rounded-full p-1 mt-6">
            <button
              onClick={() => setAnnual(false)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all ${!annual ? "bg-white text-[#0A0F1C]" : "text-[var(--text-secondary)]"}`}
            >
              {ar ? "شهري" : "Monthly"}
            </button>
            <button
              onClick={() => setAnnual(true)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all flex items-center gap-2 ${annual ? "bg-white text-[#0A0F1C]" : "text-[var(--text-secondary)]"}`}
            >
              {ar ? "سنوي" : "Annual"}
              <span className="bg-[#10B981] text-white text-[10px] font-bold px-2 py-0.5 rounded-full">
                {ar ? "وفّر 20%" : "Save 20%"}
              </span>
            </button>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-6">
          {plans.map((plan, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.55 }}
              className={`relative bg-[var(--surface-1)] rounded-2xl p-8 border transition-all duration-300 flex flex-col ${
                plan.popular ? "border-[#E63946]/50 shadow-xl shadow-[#E63946]/10" : "border-[var(--border-color)]"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                  <span className="bg-[#E63946] text-white text-xs font-bold px-4 py-1.5 rounded-full flex items-center gap-1.5 shadow-lg">
                    <Zap size={11} fill="white" />
                    {ar ? "الأكثر شعبية" : "Most Popular"}
                  </span>
                </div>
              )}

              <div className="mb-6">
                <div
                  className="inline-block text-xs font-bold tracking-[0.15em] uppercase px-3 py-1 rounded-full mb-3"
                  style={{ backgroundColor: `${plan.color}15`, color: plan.color }}
                >
                  {ar ? plan.name.ar : plan.name.en}
                </div>
                <div className="flex items-end gap-1 mb-2">
                  <span className="text-[var(--text-primary)] text-4xl font-bold" style={{ fontFamily: "var(--font-sora)" }}>
                    ${annual ? plan.price.annual : plan.price.monthly}
                  </span>
                  <span className="text-[var(--text-muted)] text-sm mb-1.5">{ar ? "/ شهر" : "/ month"}</span>
                </div>
                <p className="text-[var(--text-muted)] text-sm">{ar ? plan.desc.ar : plan.desc.en}</p>
              </div>

              <div className="space-y-3 flex-1 mb-8">
                {(ar ? plan.features.ar : plan.features.en).map((f, fi) => (
                  <div key={fi} className="flex items-start gap-2.5">
                    <Check size={14} style={{ color: plan.color }} className="mt-0.5 flex-shrink-0" />
                    <span className="text-white/60 text-sm">{f}</span>
                  </div>
                ))}
              </div>

              <a
                href={CALENDLY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-full py-3.5 rounded-lg font-bold text-sm text-center transition-all duration-200 hover:-translate-y-0.5 block ${
                  plan.popular
                    ? "bg-[#E63946] hover:bg-[#C62839] text-white shadow-lg shadow-[#E63946]/30"
                    : "bg-white/8 hover:bg-white/14 text-white border border-[var(--border-color)]"
                }`}
              >
                {ar ? "ابدأ الآن" : "Get Started"}
              </a>
            </motion.div>
          ))}
        </div>

        {/* bottom note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="text-center text-[var(--text-muted)] text-sm mt-10"
        >
          {ar
            ? "جميع الخطط تشمل إعداد مجاني في 48 ساعة، وتجربة 14 يوم مجاناً، وإلغاء في أي وقت."
            : "All plans include free 48hr setup, 14-day free trial, and cancel anytime."}
        </motion.p>
      </div>
    </section>
  );
}
