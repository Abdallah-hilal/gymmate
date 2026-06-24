"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { useLang } from "@/lib/i18n";

export default function FAQ() {
  const { lang } = useLang();
  const ar = lang === "ar";
  const [open, setOpen] = useState<number | null>(0);

  const faqs = [
    {
      q: { en: "How quickly can I get GymMate set up?", ar: "كم يستغرق إعداد GymMate؟" },
      a: { en: "Most gyms are fully live within 48 hours. Our onboarding team handles the setup — you just connect your existing tools and we do the rest.", ar: "معظم الصالات تعمل بشكل كامل خلال 48 ساعة. فريق الإعداد لدينا يتولى العملية — أنت فقط تربط أدواتك الحالية ونحن نتولى الباقي." },
    },
    {
      q: { en: "Does it integrate with my existing gym management software?", ar: "هل يتكامل مع برنامج إدارة الصالة الحالي لدي؟" },
      a: { en: "Yes. GymMate integrates with 50+ tools including Mindbody, Zenoti, GymMaster, HubSpot, Mailchimp, and more. If you don't see your tool, ask us — we build custom integrations for Scale plan customers.", ar: "نعم. يتكامل GymMate مع أكثر من 50 أداة منها Mindbody وZenoti وGymMaster وHubSpot وMailchimp وغيرها. إذا لم تجد أداتك، اسألنا — نبني تكاملات مخصصة لعملاء خطة التوسع." },
    },
    {
      q: { en: "What channels does the AI support agent work on?", ar: "ما القنوات التي يعمل عليها مساعد الذكاء الاصطناعي؟" },
      a: { en: "WhatsApp, email, SMS, and your website chat. You can activate all channels or just the ones your members use most.", ar: "واتساب، البريد الإلكتروني، الرسائل القصيرة، ودردشة موقعك الإلكتروني. يمكنك تفعيل جميع القنوات أو القنوات التي يستخدمها أعضاؤك أكثر." },
    },
    {
      q: { en: "How does the churn prediction actually work?", ar: "كيف يعمل التنبؤ بالانسحاب فعلياً؟" },
      a: { en: "GymMate monitors attendance frequency, payment behavior, and engagement signals. When a member's pattern indicates they may be at risk of leaving, you're alerted 30 days in advance so you can act before they cancel.", ar: "يراقب GymMate تكرار الحضور وسلوك الدفع وإشارات التفاعل. عندما يُشير نمط عضو ما إلى احتمال مغادرته، تتلقى تنبيهاً قبل 30 يوماً حتى تتصرف قبل إلغاء الاشتراك." },
    },
    {
      q: { en: "Is there a free trial?", ar: "هل توجد فترة تجريبية مجانية؟" },
      a: { en: "Yes — all plans come with a 14-day free trial, no credit card required. You can cancel anytime during the trial with no charge.", ar: "نعم — جميع الخطط تأتي مع تجربة مجانية 14 يوماً، بدون بطاقة ائتمان. يمكنك الإلغاء في أي وقت خلال الفترة التجريبية دون أي رسوم." },
    },
    {
      q: { en: "Can GymMate work for multi-location chains?", ar: "هل يعمل GymMate مع سلاسل متعددة المواقع؟" },
      a: { en: "Absolutely. Our Scale plan is built for multi-location operators. Each location gets its own dashboard while you maintain a central overview across your entire portfolio.", ar: "بالتأكيد. خطة التوسع مبنية لمشغّلي السلاسل متعددة المواقع. كل موقع يحصل على لوحة تحكمه الخاصة مع إبقائك على نظرة مركزية شاملة." },
    },
  ];

  return (
    <section id="faq" className="bg-[var(--surface-0)] py-24 relative overflow-hidden">
      <div className="max-w-3xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="inline-block bg-[#E63946]/12 border border-[#E63946]/20 text-[#E63946] text-xs font-bold px-4 py-2 rounded-full mb-5 tracking-[0.15em] uppercase">
            {ar ? "الأسئلة الشائعة" : "FAQ"}
          </span>
          <h2
            className="text-4xl font-bold text-[var(--text-primary)]"
            style={{ fontFamily: "var(--font-sora)" }}
          >
            {ar ? "أسئلة يسألها الجميع" : "Questions Everyone Asks"}
          </h2>
        </motion.div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07, duration: 0.45 }}
              className="bg-[var(--surface-1)] rounded-xl border border-[var(--border-color)] overflow-hidden"
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between px-6 py-5 text-left"
              >
                <span
                  className="text-[var(--text-primary)] font-semibold text-[15px] pr-4"
                  style={{ fontFamily: "var(--font-sora)" }}
                >
                  {ar ? faq.q.ar : faq.q.en}
                </span>
                <span className="flex-shrink-0 w-6 h-6 rounded-full border border-[var(--border-color)] flex items-center justify-center">
                  {open === i ? (
                    <Minus size={12} className="text-[#E63946]" />
                  ) : (
                    <Plus size={12} className="text-[var(--text-secondary)]" />
                  )}
                </span>
              </button>

              <AnimatePresence initial={false}>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25, ease: "easeOut" }}
                  >
                    <div className="px-6 pb-5 border-t border-[var(--border-color)] pt-4">
                      <p className="text-[var(--text-secondary)] text-sm leading-relaxed">
                        {ar ? faq.a.ar : faq.a.en}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
