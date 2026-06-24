"use client";

import Image from "next/image";
import { useLang } from "@/lib/i18n";
import { CALENDLY_URL } from "@/lib/config";

export default function Footer() {
  const { lang } = useLang();
  const ar = lang === "ar";

  const links = {
    product: {
      title: { en: "Product", ar: "المنتج" },
      items: [
        { en: "Retention", ar: "الاحتفاظ", href: "#solutions" },
        { en: "AI Support", ar: "دعم الذكاء الاصطناعي", href: "#solutions" },
        { en: "Lead Automation", ar: "أتمتة العملاء", href: "#solutions" },
        { en: "Analytics", ar: "التحليلات", href: "#features" },
        { en: "Unified Inbox", ar: "صندوق موحّد", href: "#inbox" },
      ],
    },
    company: {
      title: { en: "Company", ar: "الشركة" },
      items: [
        { en: "About", ar: "عنّا", href: "#" },
        { en: "Customers", ar: "العملاء", href: "#case-studies" },
        { en: "Blog", ar: "المدونة", href: "#" },
        { en: "Careers", ar: "الوظائف", href: "#" },
      ],
    },
    support: {
      title: { en: "Support", ar: "الدعم" },
      items: [
        { en: "Help Center", ar: "مركز المساعدة", href: "#" },
        { en: "Onboarding", ar: "الإعداد", href: "#" },
        { en: "Book a Call", ar: "احجز مكالمة", href: CALENDLY_URL, external: true },
        { en: "Status", ar: "الحالة", href: "#" },
      ],
    },
    legal: {
      title: { en: "Legal", ar: "قانوني" },
      items: [
        { en: "Privacy Policy", ar: "سياسة الخصوصية", href: "#" },
        { en: "Terms of Service", ar: "شروط الخدمة", href: "#" },
        { en: "Cookie Policy", ar: "سياسة الكوكيز", href: "#" },
      ],
    },
  };

  return (
    <footer className="bg-[var(--hero-bg)] border-t border-[var(--border-color)]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-10">
          {/* brand col */}
          <div className="col-span-2 lg:col-span-1">
            <a href="#" className="inline-block mb-5">
              <Image
                src="/logo-dark.png"
                alt="GymMate"
                width={140}
                height={40}
                className="h-10 w-auto object-contain"
              />
            </a>
            <p className="text-[var(--text-muted)] text-sm leading-relaxed mb-5">
              {ar
                ? "النظام التشغيلي لنمو الصالة الرياضية. أتمتة. احتفاظ. نمو."
                : "The operating system for gym growth. Automate. Retain. Grow."}
            </p>
            <div className="flex items-center gap-1.5 text-[#10B981] text-xs font-semibold">
              <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] animate-pulse" />
              {ar ? "جميع الأنظمة تعمل" : "All systems operational"}
            </div>
          </div>

          {/* link cols */}
          {Object.values(links).map((col, i) => (
            <div key={i}>
              <div className="text-white/25 text-[10px] font-bold tracking-[0.18em] uppercase mb-4">
                {ar ? col.title.ar : col.title.en}
              </div>
              <ul className="space-y-2.5">
                {col.items.map((item, j) => {
                  const external = "external" in item && item.external;
                  return (
                    <li key={j}>
                      <a
                        href={item.href}
                        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                        className="text-[var(--text-secondary)] hover:text-white text-sm transition-colors duration-200"
                      >
                        {ar ? item.ar : item.en}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-[var(--border-color)] mt-14 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/25 text-sm">
            {ar
              ? `© ${new Date().getFullYear()} GymMate. جميع الحقوق محفوظة.`
              : `© ${new Date().getFullYear()} GymMate. All rights reserved.`}
          </p>
          <p className="text-white/20 text-xs">
            {ar ? "صُنع بـ ❤ للياقة البدنية" : "Built with ❤ for fitness"}
          </p>
        </div>
      </div>
    </footer>
  );
}
