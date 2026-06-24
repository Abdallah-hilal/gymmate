"use client";

import { motion } from "framer-motion";
import { Link2, Workflow, TrendingUp } from "lucide-react";
import { useLang } from "@/lib/i18n";

const icons = [Link2, Workflow, TrendingUp];

export default function HowItWorks() {
  const { t } = useLang();
  const h = t.howItWorks;

  return (
    <section id="how-it-works" className="bg-[#0A0F1C] py-24 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] rounded-full bg-[#3B82F6]/5 blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="inline-block bg-[#E63946]/15 text-[#E63946] text-xs font-semibold px-4 py-1.5 rounded-full mb-4 tracking-wider uppercase">
            {h.badge}
          </span>
          <h2
            className="text-4xl lg:text-5xl font-bold text-white mb-4"
            style={{ fontFamily: "var(--font-sora)" }}
          >
            {h.h2a}{" "}
            <span className="gradient-text">{h.h2b}</span>
          </h2>
          <p className="text-white/50 text-lg max-w-2xl mx-auto">
            {h.sub}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 relative">
          <div className="hidden lg:block absolute top-16 left-[calc(33.33%+24px)] right-[calc(33.33%+24px)] h-px bg-gradient-to-r from-[#E63946]/30 via-[#E63946]/60 to-[#E63946]/30" />

          {h.steps.map((step, i) => {
            const Icon = icons[i];
            return (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2, duration: 0.6 }}
                className="relative"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="relative">
                    <div className="w-14 h-14 rounded-2xl bg-[#E63946] flex items-center justify-center shadow-xl shadow-[#E63946]/30">
                      <Icon size={24} className="text-white" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-[#0A0F1C] border-2 border-[#E63946] flex items-center justify-center">
                      <span className="text-[#E63946] text-[9px] font-bold">{i + 1}</span>
                    </div>
                  </div>
                  <span
                    className="text-5xl font-bold text-white/8 select-none"
                    style={{ fontFamily: "var(--font-sora)" }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>

                <h3
                  className="text-xl font-bold text-white mb-3"
                  style={{ fontFamily: "var(--font-sora)" }}
                >
                  {step.title}
                </h3>
                <p className="text-white/50 text-sm leading-relaxed mb-5">
                  {step.description}
                </p>

                <ul className="space-y-2">
                  {step.details.map((detail) => (
                    <li key={detail} className="flex items-center gap-2 text-white/70 text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#E63946] flex-shrink-0" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-16 text-center"
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-[#E63946] hover:bg-[#C62839] text-white font-semibold px-8 py-4 rounded-xl shadow-xl shadow-[#E63946]/25 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[#E63946]/40"
          >
            {h.cta}
            <span>→</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
