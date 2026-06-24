"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Inbox, ArrowRight } from "lucide-react";
import { useLang, useTheme } from "@/lib/i18n";
import {
  WhatsAppLogo, InstagramLogo, FacebookLogo,
  WebsiteLogo, EmailLogo, SmsLogo,
} from "@/components/BrandLogos";

const channels = [
  { Logo: WhatsAppLogo,  en: "WhatsApp",     ar: "واتساب",       live: "12" },
  { Logo: InstagramLogo, en: "Instagram",    ar: "إنستجرام",     live: "5" },
  { Logo: FacebookLogo,  en: "Facebook",     ar: "فيسبوك",       live: "3" },
  { Logo: WebsiteLogo,   en: "Website Chat", ar: "دردشة الموقع", live: "" },
  { Logo: EmailLogo,     en: "Email",        ar: "البريد",       live: "" },
  { Logo: SmsLogo,       en: "SMS",          ar: "SMS",          live: "" },
];

/* Channel → node → single arrow → Inbox funnel */
function ChannelFunnel({ isDark }: { isDark: boolean }) {
  const nodeCore = isDark ? "#111827" : "#ffffff";
  // 6 channel anchor points on the left edge (viewBox 600x360)
  const srcY = [40, 96, 152, 208, 264, 320];
  const node = { x: 300, y: 180 };
  const inboxX = 520;

  return (
    <svg viewBox="0 0 600 360" className="w-full h-full" preserveAspectRatio="xMidYMid meet">
      <defs>
        <radialGradient id="inboxNodeGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#E63946" stopOpacity="0.55" />
          <stop offset="100%" stopColor="#E63946" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="inboxLineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#E63946" stopOpacity="0.06" />
          <stop offset="100%" stopColor="#E63946" stopOpacity="0.6" />
        </linearGradient>
      </defs>

      {/* converging lines: each channel → node (with flowing packets) */}
      {srcY.map((y, i) => {
        const d = `M 64 ${y} C 180 ${y}, ${node.x - 130} ${node.y}, ${node.x} ${node.y}`;
        return (
          <g key={`in-${i}`}>
            <motion.path
              id={`flow-${i}`}
              d={d}
              fill="none"
              stroke="url(#inboxLineGrad)"
              strokeWidth="1.4"
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 + i * 0.08, duration: 0.9, ease: "easeInOut" }}
            />
            {/* moving packet dot travelling toward the node */}
            <circle r="2.6" fill="#E63946">
              <animateMotion
                dur={`${2.4 + (i % 3) * 0.5}s`}
                begin={`${1 + i * 0.35}s`}
                repeatCount="indefinite"
                path={d}
                keyPoints="0;1"
                keyTimes="0;1"
                calcMode="spline"
                keySplines="0.4 0 0.6 1"
              />
              <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.1;0.85;1"
                dur={`${2.4 + (i % 3) * 0.5}s`} begin={`${1 + i * 0.35}s`} repeatCount="indefinite" />
            </circle>
          </g>
        );
      })}

      {/* single line out: node → inbox */}
      <motion.path
        id="flow-out"
        d={`M ${node.x} ${node.y} L ${inboxX - 8} ${node.y}`}
        fill="none"
        stroke="#E63946"
        strokeOpacity="0.7"
        strokeWidth="2.4"
        initial={{ pathLength: 0, opacity: 0 }}
        whileInView={{ pathLength: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.9, duration: 0.6, ease: "easeInOut" }}
      />
      {/* packets flowing out to the inbox */}
      {[0, 1].map((k) => (
        <circle key={`out-${k}`} r="3" fill="#E63946">
          <animateMotion dur="1.6s" begin={`${1.6 + k * 0.8}s`} repeatCount="indefinite"
            path={`M ${node.x} ${node.y} L ${inboxX - 8} ${node.y}`} />
          <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.15;0.8;1"
            dur="1.6s" begin={`${1.6 + k * 0.8}s`} repeatCount="indefinite" />
        </circle>
      ))}
      {/* arrow head */}
      <motion.path
        d={`M ${inboxX - 18} ${node.y - 6} L ${inboxX - 6} ${node.y} L ${inboxX - 18} ${node.y + 6}`}
        fill="none" stroke="#E63946" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"
        initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
        transition={{ delay: 1.4, duration: 0.3 }}
      />

      {/* central node */}
      <circle cx={node.x} cy={node.y} r="64" fill="url(#inboxNodeGlow)" />
      <motion.circle
        cx={node.x} cy={node.y} r="28"
        fill={nodeCore} stroke="#E63946" strokeWidth="1.5"
        initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={{ once: true }}
        transition={{ delay: 0.5, duration: 0.5, type: "spring" }}
      />
      <motion.circle
        cx={node.x} cy={node.y} r="28"
        fill="none" stroke="#E63946" strokeOpacity="0.4"
        initial={{ scale: 1, opacity: 0.6 }}
        animate={{ scale: [1, 1.6], opacity: [0.5, 0] }}
        transition={{ repeat: Infinity, duration: 2.4, ease: "easeOut" }}
      />
    </svg>
  );
}

export default function UnifiedInbox() {
  const { lang } = useLang();
  const { isDark } = useTheme();
  const ar = lang === "ar";

  return (
    <section id="inbox" className="bg-[var(--surface-0)] py-28 relative overflow-hidden">
      <div className="absolute top-0 left-1/4 w-[600px] h-[400px] rounded-full bg-[#25D366]/5 blur-[130px] pointer-events-none" />

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
            {ar ? "صندوق وارد موحّد" : "Unified Inbox"}
          </span>
          <h2
            className="text-4xl lg:text-6xl font-bold text-[var(--text-primary)] mb-5 leading-tight"
            style={{ fontFamily: "var(--font-sora)" }}
          >
            {ar ? (
              <>كل المحادثات <span className="text-[#E63946]">في مكان واحد</span></>
            ) : (
              <>All Conversations <span className="text-[#E63946]">in One Place</span></>
            )}
          </h2>
          <p className="text-[var(--text-secondary)] text-lg max-w-2xl mx-auto">
            {ar
              ? "واتساب وإنستجرام وفيسبوك ودردشة الموقع والبريد والرسائل — كلها تتجمّع في صندوق وارد واحد. لا تطبيقات تتنقّل بينها، ولا رسائل تضيع."
              : "WhatsApp, Instagram, Facebook, website chat, email and SMS — all flow into one inbox. No apps to juggle, no messages slipping through."}
          </p>
        </motion.div>

        {/* funnel: channels → node → arrow → inbox */}
        <div className="relative grid lg:grid-cols-[200px_1fr_220px] gap-4 items-center max-w-5xl mx-auto mb-12">
          {/* left: channel chips */}
          <div className="flex flex-col gap-2.5 order-1">
            {channels.map((c, i) => {
              const Logo = c.Logo;
              return (
                <motion.div
                  key={c.en}
                  dir={ar ? "rtl" : "ltr"}
                  initial={{ opacity: 0, x: ar ? 16 : -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.07, duration: 0.45 }}
                  className="flex items-center gap-2.5 bg-[var(--surface-1)] border border-[var(--border-color)] rounded-xl px-3.5 py-2.5"
                >
                  <Logo size={17} className="flex-shrink-0" />
                  <span className="text-[var(--text-secondary)] text-sm font-medium truncate flex-1">{ar ? c.ar : c.en}</span>
                  {c.live && (
                    <motion.span
                      className="flex-shrink-0 inline-flex items-center justify-center min-w-[18px] h-[18px] px-1 rounded-full bg-[#E63946] text-white text-[10px] font-bold"
                      animate={{ scale: [1, 1.18, 1] }}
                      transition={{ repeat: Infinity, duration: 2, ease: "easeInOut", delay: i * 0.3 }}
                    >
                      {c.live}
                    </motion.span>
                  )}
                </motion.div>
              );
            })}
          </div>

          {/* middle: funnel diagram */}
          <div className="order-2 h-[300px] hidden lg:block">
            <ChannelFunnel isDark={isDark} />
          </div>

          {/* right: inbox box */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 1, duration: 0.5, type: "spring" }}
            className="order-3 bg-[var(--surface-1)] border border-[#E63946]/30 rounded-2xl p-6 text-center red-glow"
          >
            <div className="w-14 h-14 rounded-2xl bg-[#E63946]/15 flex items-center justify-center mx-auto mb-4">
              <Inbox size={26} className="text-[#E63946]" />
            </div>
            <div className="text-[var(--text-primary)] font-bold text-xl mb-1" style={{ fontFamily: "var(--font-sora)" }}>
              {ar ? "صندوق واحد" : "One Inbox"}
            </div>
            <p className="text-[var(--text-muted)] text-xs leading-relaxed">
              {ar ? "كل القنوات في خيط واحد" : "Every channel in one thread"}
            </p>
          </motion.div>
        </div>

        {/* Chatwoot screenshot placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto"
        >
          <div className="flex items-center justify-center gap-2 mb-3">
            <ArrowRight size={14} className="text-[#E63946] rotate-90" />
            <span className="text-[var(--text-muted)] text-xs font-semibold tracking-[0.15em] uppercase">
              {ar ? "معاينة الصندوق الموحّد" : "Unified inbox preview"}
            </span>
          </div>
          <div className="rounded-2xl border border-[var(--border-color)] bg-[var(--surface-1)] overflow-hidden shadow-2xl">
            <Image
              src="/chatwoot.png"
              alt={ar ? "واجهة الصندوق الموحّد Chatwoot" : "Chatwoot unified inbox interface"}
              width={1660}
              height={943}
              className="w-full h-auto"
              priority={false}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
