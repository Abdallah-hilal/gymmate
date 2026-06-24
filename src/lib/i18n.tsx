"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";

export type Lang = "en" | "ar";

export const translations = {
  en: {
    nav: {
      solutions: "Solutions",
      features: "Features",
      integrations: "Integrations",
      pricing: "Pricing",
      caseStudies: "Case Studies",
      signIn: "Sign In",
      bookDemo: "Book a Demo",
    },
    hero: {
      badge: "AI-Powered Fitness Business Platform",
      h1a: "Automate.",
      h1b: "Retain.",
      h1c: "Grow.",
      sub: "AI-powered customer support and retention systems built for fitness businesses. Stop losing members. Start scaling.",
      ctaPrimary: "Book a Demo",
      ctaSecondary: "See How It Works",
      stat1Value: "500+",
      stat1Label: "Fitness Businesses",
      stat2Value: "94%",
      stat2Label: "Retention Rate",
      stat3Value: "3x",
      stat3Label: "Faster Lead Response",
      dashboardTitle: "GymMate Dashboard",
      metricActiveMembers: "Active Members",
      metricRetention: "Retention Rate",
      metricLeads: "New Leads",
      metricRevenue: "Monthly Revenue",
      metricChange: "this month",
      chartLabel: "Revenue Growth",
      chartChange: "+22% this month",
      chartMonthStart: "Jan",
      chartMonthEnd: "Oct",
      activityTitle: "Recent Activity",
      activity1: "New lead qualified",
      activity2: "Member retention alert",
      activity3: "Support ticket resolved",
      activity1Time: "2m ago",
      activity2Time: "15m ago",
      activity3Time: "1h ago",
      floatingBadge1: "+40% Retention ↑",
      floatingBadge2: "AI-Powered ⚡",
    },
    trustedBy: {
      label: "Trusted by growing fitness brands worldwide",
    },
    problems: {
      badge: "The Problem",
      h2a: "Fitness businesses are leaving",
      h2b: "money on the table",
      sub: "Without the right systems, every missed lead and every churned member costs you revenue. Here's what's holding your business back.",
      items: [
        {
          title: "Missed Leads",
          description:
            "Potential members reach out but never hear back. Leads go cold while your team is overwhelmed with manual tasks and follow-ups fall through the cracks.",
          stat: "67%",
          statLabel: "of leads never get followed up",
        },
        {
          title: "Poor Retention",
          description:
            "Members cancel before reaching their goals. Without proactive engagement and timely outreach, churn is silent — and expensive to recover from.",
          stat: "40%",
          statLabel: "avg churn in the fitness industry",
        },
        {
          title: "Manual Work",
          description:
            "Your team spends hours on repetitive tasks — answering the same questions, manually updating CRMs, and chasing no-shows instead of growing the business.",
          stat: "20hrs",
          statLabel: "wasted per week on manual tasks",
        },
      ],
    },
    solutions: {
      badge: "Solutions",
      h2a: "Everything your fitness business",
      h2b: "needs to scale",
      sub: "A complete automation platform purpose-built for gyms, fitness studios, and fitness brands looking to grow without burning out their teams.",
      learnMore: "Learn more",
      tag: "Most Popular",
      items: [
        {
          title: "Customer Support Automation",
          description:
            "Deploy AI-powered chatbots that handle member inquiries 24/7. Answer FAQs, process requests, and escalate complex issues — without a single support ticket going unanswered.",
        },
        {
          title: "Lead Follow-Up",
          description:
            "Automatically nurture and qualify every lead the moment they show interest. Multi-channel sequences via WhatsApp, email, and SMS ensure no opportunity slips through.",
        },
        {
          title: "Member Retention",
          description:
            "Proactively identify at-risk members and trigger personalized re-engagement campaigns. Recover lost revenue before members even consider canceling.",
        },
        {
          title: "CRM Automation",
          description:
            "Sync member data across all your tools automatically. Eliminate manual data entry, reduce errors, and keep your CRM always up to date without lifting a finger.",
        },
        {
          title: "Reporting & Analytics",
          description:
            "Track the metrics that actually matter — retention rates, lead conversion, revenue per member, and churn forecasting — all in one unified dashboard.",
        },
        {
          title: "AI Assistant",
          description:
            "An intelligent assistant that handles scheduling, responds to inquiries, and executes complex workflows across your entire fitness business operation.",
        },
      ],
    },
    howItWorks: {
      badge: "How It Works",
      h2a: "Up and running in",
      h2b: "48 hours",
      sub: "Three simple steps to transform your fitness business from reactive to fully automated.",
      cta: "Start Your Free Trial",
      steps: [
        {
          title: "Connect Your Systems",
          description:
            "Plug GymMate into your existing tools in minutes. Connect your CRM, booking software, payment processor, and communication channels with one-click integrations.",
          details: ["HubSpot, Salesforce, Mindbody", "WhatsApp, Email, SMS", "Stripe, Calendly, Google Sheets"],
        },
        {
          title: "Automate Workflows",
          description:
            "Configure your automation rules once. GymMate handles lead follow-ups, member check-ins, support tickets, and data syncing — all on autopilot.",
          details: ["AI-powered responses 24/7", "Smart lead nurturing sequences", "Automated member engagement"],
        },
        {
          title: "Retain & Grow Members",
          description:
            "Watch your retention rates climb and your pipeline fill up. Get real-time insights into what's working, spot churn risks early, and scale with confidence.",
          details: ["Real-time retention dashboards", "Churn prediction alerts", "Revenue growth tracking"],
        },
      ],
    },
    features: {
      badge: "Features",
      h2a: "Built for the entire",
      h2b: "member lifecycle",
      sub: "From the first inquiry to long-term loyalty, GymMate has every touchpoint covered.",
      items: [
        { title: "AI Chat Support", description: "Instant, intelligent responses to member inquiries around the clock." },
        { title: "Lead Qualification", description: "Automatically score and prioritize leads based on engagement signals." },
        { title: "CRM Integration", description: "Two-way sync with HubSpot, Salesforce, and 50+ other platforms." },
        { title: "Automated Follow-Ups", description: "Multi-channel drip sequences that convert leads on autopilot." },
        { title: "Appointment Booking", description: "AI-assisted scheduling that fills your calendar without back-and-forth." },
        { title: "Retention Campaigns", description: "Smart campaigns that re-engage at-risk members before they churn." },
        { title: "Advanced Reporting", description: "Unified reports on revenue, retention, and team performance." },
        { title: "Multi-Channel Comms", description: "WhatsApp, SMS, email, and in-app — all from one inbox." },
        { title: "Analytics Dashboard", description: "Real-time KPIs with forecasting, trends, and actionable insights." },
      ],
    },
    integrations: {
      badge: "Integrations",
      h2a: "Works with the tools",
      h2b: "you already use",
      sub: "GymMate connects with 50+ platforms out of the box. No custom development. No waiting.",
      cta: "See All Integrations",
    },
    dashboard: {
      badge: "Dashboard",
      h2a: "Everything you need,",
      h2b: "in one place",
      sub: "A unified command center for your entire fitness business — metrics, automations, and insights all in one view.",
    },
    caseStudies: {
      badge: "Case Studies",
      h2a: "Real results from",
      h2b: "real businesses",
      sub: "See how fitness businesses like yours are using GymMate to grow revenue and retain more members.",
      cta: "Read Full Case Study",
    },
    testimonials: {
      badge: "Testimonials",
      h2a: "Loved by fitness",
      h2b: "business owners",
      sub: "Don't take our word for it. Here's what fitness operators are saying about GymMate.",
      items: [
        {
          quote:
            "We were losing members quietly every month and didn't even know why. GymMate's retention alerts helped us identify at-risk members and reach out before it was too late. Churn dropped by nearly half in 90 days.",
          name: "David Okafor",
          role: "Owner",
          company: "IronCore Performance",
        },
        {
          quote:
            "Our sales team used to spend 3 hours a day just following up with leads. Now GymMate handles all of that automatically and our conversion rate has gone up 42%. I wish we had this years ago.",
          name: "Lena Hoffmann",
          role: "Sales Director",
          company: "FitLife Studios",
        },
        {
          quote:
            "The AI support bot alone was worth the investment. It handles 80% of our member questions instantly — scheduling, billing, class info — without our front desk team doing a thing.",
          name: "Carlos Rivera",
          role: "General Manager",
          company: "Pulse Athletic Club",
        },
        {
          quote:
            "Setting up GymMate took less than a day. The HubSpot integration synced perfectly and automation was running within 48 hours. The onboarding team was incredible.",
          name: "Aisha Nwosu",
          role: "Operations Manager",
          company: "CoreFusion Gym",
        },
        {
          quote:
            "We've tried other platforms but nothing came close to the depth of GymMate's automation. The reporting dashboard gives us insights we never had before. Revenue is up 28% this quarter.",
          name: "Tyler Brooks",
          role: "Co-Founder",
          company: "Elevate Fitness",
        },
        {
          quote:
            "GymMate isn't just software — it's like having a whole operations team working 24/7. Our members love the faster responses and our staff loves not drowning in admin work.",
          name: "Yuki Tanaka",
          role: "Studio Director",
          company: "ZenFit Studio",
        },
      ],
    },
    pricing: {
      badge: "Pricing",
      h2a: "Simple, transparent",
      h2b: "pricing",
      sub: "No hidden fees. No per-seat pricing. Pick the plan that fits your business and scale as you grow.",
      monthly: "Monthly",
      yearly: "Yearly",
      save: "Save 20%",
      perMonth: "/month",
      custom: "Custom",
      billedAnnually: "Billed annually · Save $",
      perYear: "/year",
      popularBadge: "Most Popular",
      bottomNote: "All plans include a 14-day free trial. No credit card required.",
      faqLink: "See FAQ for details.",
      plans: [
        {
          name: "Starter",
          description: "Perfect for independent gyms and small fitness studios just getting started with automation.",
          cta: "Start Free Trial",
          features: [
            "Up to 500 active members",
            "AI chat support (business hours)",
            "Lead follow-up automation",
            "Email & SMS campaigns",
            "Basic CRM integration (1 platform)",
            "Standard reports & analytics",
            "Email support",
            "Onboarding call",
          ],
        },
        {
          name: "Growth",
          description: "For growing fitness businesses that need full automation across leads, members, and operations.",
          cta: "Book a Demo",
          features: [
            "Up to 2,000 active members",
            "24/7 AI chat support",
            "Advanced lead nurturing sequences",
            "WhatsApp, email & SMS automation",
            "CRM integrations (unlimited)",
            "Retention campaigns & churn alerts",
            "Advanced analytics & reporting",
            "Priority support + dedicated CSM",
            "Custom workflow builder",
            "Appointment booking automation",
          ],
        },
        {
          name: "Enterprise",
          description: "For multi-location fitness brands and enterprise operators who need custom solutions at scale.",
          cta: "Schedule a Consultation",
          features: [
            "Unlimited members",
            "Multi-location management",
            "Custom AI training on your brand",
            "White-label option",
            "Enterprise CRM & ERP integrations",
            "Custom retention strategy",
            "Dedicated implementation team",
            "SLA & uptime guarantee",
            "Custom reporting & BI dashboards",
            "API access",
          ],
        },
      ],
    },
    faq: {
      badge: "FAQ",
      h2a: "Frequently asked",
      h2b: "questions",
      sub: "Everything you need to know about GymMate. Can't find your answer?",
      subLink: "Talk to our team.",
      items: [
        {
          question: "How long does it take to set up GymMate?",
          answer:
            "Most businesses are fully up and running within 48 hours. Our onboarding team walks you through connecting your existing tools, configuring your automations, and setting up your first workflows. For enterprise clients with complex setups, we offer a dedicated implementation service.",
        },
        {
          question: "What integrations does GymMate support?",
          answer:
            "GymMate integrates with 50+ platforms including HubSpot, Salesforce, Mindbody, Zen Planner, WhatsApp, Gmail, Google Sheets, Calendly, Stripe, Zapier, and n8n. If you need a custom integration, our team can build it — just ask during your demo.",
        },
        {
          question: "How does the pricing work? Are there hidden fees?",
          answer:
            "Our pricing is simple and transparent — a flat monthly or annual fee based on your plan. There are no per-seat costs, no message volume limits on the Growth plan, and no surprise fees. The price you see is the price you pay. Enterprise pricing is custom based on your requirements.",
        },
        {
          question: "Can GymMate handle multi-location businesses?",
          answer:
            "Yes. The Enterprise plan is specifically designed for multi-location fitness brands. You get centralized reporting across all locations, location-specific automation rules, role-based access for managers, and consolidated member data across your entire portfolio.",
        },
        {
          question: "What kind of support do you provide?",
          answer:
            "Starter plans include email support with a 24-hour response time. Growth plans include priority support with a dedicated Customer Success Manager (CSM) who proactively monitors your account and meets with you monthly. Enterprise clients get a dedicated implementation team and SLA-backed support.",
        },
        {
          question: "Can I customize the AI responses to match my brand voice?",
          answer:
            "Absolutely. During onboarding, we train the AI on your brand guidelines, common FAQs, pricing, class schedules, and more. Enterprise clients can do full custom AI training so responses feel entirely on-brand and specific to your business.",
        },
        {
          question: "Is there a free trial? Do I need a credit card?",
          answer:
            "Yes — all plans include a 14-day free trial. No credit card required to start. You'll have full access to your chosen plan during the trial period so you can see real results before committing.",
        },
        {
          question: "How does GymMate protect member data?",
          answer:
            "GymMate is GDPR and CCPA compliant. All data is encrypted in transit and at rest. We never sell or share your member data with third parties. We offer data processing agreements (DPAs) for enterprise clients and maintain SOC 2 Type II certification.",
        },
      ],
    },
    finalCta: {
      badge: "Book a call with our team today",
      h2a: "Ready to automate your",
      h2b: "fitness business?",
      sub: "GymMate helps gyms retain more members, convert more leads, and grow revenue — without adding headcount.",
      cta1: "Book a Demo",
      cta2: "Schedule a Consultation",
      proof1: "14-day free trial",
      proof2: "No credit card required",
      proof3: "Setup in 48 hours",
      proof4: "Cancel anytime",
    },
    footer: {
      tagline: "AI-powered customer support and retention systems built for fitness businesses.",
      bookDemo: "Book a Demo",
      copyright: "© 2025 GymMate. All rights reserved.",
      privacy: "Privacy Policy",
      terms: "Terms of Service",
      contact: "Contact",
      categories: {
        Services: "Services",
        Solutions: "Solutions",
        Integrations: "Integrations",
        Company: "Company",
      },
      links: {
        Services: [
          "Customer Support Automation",
          "Lead Follow-Up",
          "Member Retention",
          "CRM Automation",
          "Reporting & Analytics",
        ],
        Solutions: [
          "Fitness Studios",
          "Gyms & Clubs",
          "Personal Trainers",
          "Multi-Location",
          "Enterprise",
        ],
        Integrations: ["HubSpot", "Salesforce", "WhatsApp", "Zapier", "All Integrations"],
        Company: ["About Us", "Blog", "Careers", "Privacy Policy", "Terms of Service"],
      },
    },
  },
  ar: {
    nav: {
      solutions: "الحلول",
      features: "المميزات",
      integrations: "التكاملات",
      pricing: "الأسعار",
      caseStudies: "دراسات الحالة",
      signIn: "تسجيل الدخول",
      bookDemo: "احجز عرضًا",
    },
    hero: {
      badge: "منصة لياقة بدنية مدعومة بالذكاء الاصطناعي",
      h1a: "أتمتة.",
      h1b: "احتفاظ.",
      h1c: "نمو.",
      sub: "أنظمة دعم عملاء واحتفاظ بالأعضاء مدعومة بالذكاء الاصطناعي مصممة لأعمال اللياقة البدنية. توقف عن خسارة الأعضاء. ابدأ في التوسع.",
      ctaPrimary: "احجز عرضًا",
      ctaSecondary: "شاهد كيف يعمل",
      stat1Value: "+500",
      stat1Label: "شركة لياقة بدنية",
      stat2Value: "94%",
      stat2Label: "معدل الاحتفاظ",
      stat3Value: "3x",
      stat3Label: "استجابة أسرع للعملاء",
      dashboardTitle: "لوحة تحكم GymMate",
      metricActiveMembers: "الأعضاء النشطون",
      metricRetention: "معدل الاحتفاظ",
      metricLeads: "عملاء محتملون جدد",
      metricRevenue: "الإيرادات الشهرية",
      metricChange: "هذا الشهر",
      chartLabel: "نمو الإيرادات",
      chartChange: "+22% هذا الشهر",
      chartMonthStart: "يناير",
      chartMonthEnd: "أكتوبر",
      activityTitle: "النشاط الأخير",
      activity1: "تأهيل عميل محتمل جديد",
      activity2: "تنبيه احتفاظ بعضو",
      activity3: "تم حل تذكرة دعم",
      activity1Time: "منذ دقيقتين",
      activity2Time: "منذ 15 دقيقة",
      activity3Time: "منذ ساعة",
      floatingBadge1: "↑ +40% احتفاظ",
      floatingBadge2: "⚡ مدعوم بالذكاء الاصطناعي",
    },
    trustedBy: {
      label: "موثوق به من قِبل علامات اللياقة البدنية المتنامية حول العالم",
    },
    problems: {
      badge: "المشكلة",
      h2a: "أعمال اللياقة البدنية تخسر",
      h2b: "فرصًا كثيرة",
      sub: "بدون الأنظمة الصحيحة، كل عميل محتمل فائت وكل عضو منسحب يكلفك إيرادات. إليك ما يعيق نمو عملك.",
      items: [
        {
          title: "عملاء محتملون فائتون",
          description:
            "يتواصل الأعضاء المحتملون لكن لا يحصلون على رد. تبرد الفرص بينما فريقك مثقل بالمهام اليدوية والمتابعات تسقط من بين الأصابع.",
          stat: "67%",
          statLabel: "من العملاء المحتملين لا يحصلون على متابعة",
        },
        {
          title: "ضعف الاحتفاظ بالأعضاء",
          description:
            "يلغي الأعضاء اشتراكاتهم قبل تحقيق أهدافهم. بدون تواصل استباقي وتدخل في الوقت المناسب، يصبح الانسحاب صامتًا — ومكلفًا للتعافي منه.",
          stat: "40%",
          statLabel: "متوسط انسحاب في صناعة اللياقة",
        },
        {
          title: "عمل يدوي مرهق",
          description:
            "يقضي فريقك ساعات في مهام متكررة — الإجابة على نفس الأسئلة، وتحديث قواعد بيانات CRM يدويًا، ومطاردة الغائبين بدلًا من تنمية العمل.",
          stat: "20 ساعة",
          statLabel: "تضيع أسبوعيًا في المهام اليدوية",
        },
      ],
    },
    solutions: {
      badge: "الحلول",
      h2a: "كل ما يحتاجه عملك في اللياقة",
      h2b: "للتوسع والنمو",
      sub: "منصة أتمتة شاملة مصممة خصيصًا للصالات الرياضية واستوديوهات اللياقة والعلامات التجارية الراغبة في النمو دون إرهاق فرقها.",
      learnMore: "اعرف أكثر",
      tag: "الأكثر شيوعًا",
      items: [
        {
          title: "أتمتة دعم العملاء",
          description:
            "انشر روبوتات دردشة مدعومة بالذكاء الاصطناعي تتعامل مع استفسارات الأعضاء على مدار الساعة. أجب على الأسئلة الشائعة، وعالج الطلبات، وصعّد القضايا المعقدة — دون أن تبقى أي تذكرة دعم دون رد.",
        },
        {
          title: "متابعة العملاء المحتملين",
          description:
            "رعاية وتأهيل كل عميل محتمل تلقائيًا لحظة إظهاره اهتمامًا. تضمن التسلسلات متعددة القنوات عبر واتساب والبريد الإلكتروني والرسائل القصيرة عدم تفويت أي فرصة.",
        },
        {
          title: "الاحتفاظ بالأعضاء",
          description:
            "تحديد الأعضاء المعرضين للخطر بشكل استباقي وتشغيل حملات إعادة تفاعل مخصصة. استعد الإيرادات المفقودة قبل أن يفكر الأعضاء في الإلغاء.",
        },
        {
          title: "أتمتة CRM",
          description:
            "مزامنة بيانات الأعضاء عبر جميع أدواتك تلقائيًا. تخلص من إدخال البيانات اليدوي، وقلل الأخطاء، واحتفظ بـ CRM محدثًا دائمًا دون رفع إصبع.",
        },
        {
          title: "التقارير والتحليلات",
          description:
            "تتبع المقاييس المهمة فعلًا — معدلات الاحتفاظ، وتحويل العملاء المحتملين، والإيرادات لكل عضو، وتوقعات الانسحاب — كلها في لوحة تحكم موحدة.",
        },
        {
          title: "المساعد الذكي",
          description:
            "مساعد ذكي يتعامل مع الجدولة، ويرد على الاستفسارات، وينفذ سير عمل معقدة عبر عملك في اللياقة البدنية بأكمله.",
        },
      ],
    },
    howItWorks: {
      badge: "كيف يعمل",
      h2a: "جاهز وعامل في",
      h2b: "48 ساعة",
      sub: "ثلاث خطوات بسيطة لتحويل عملك في اللياقة من التفاعلي إلى الآلي الكامل.",
      cta: "ابدأ تجربتك المجانية",
      steps: [
        {
          title: "ربط أنظمتك",
          description:
            "اربط GymMate بأدواتك الحالية في دقائق. اتصل بـ CRM وبرنامج الحجز ومعالج المدفوعات وقنوات الاتصال بتكاملات بنقرة واحدة.",
          details: ["HubSpot وSalesforce وMindbody", "واتساب والبريد الإلكتروني والرسائل القصيرة", "Stripe وCalendly وGoogle Sheets"],
        },
        {
          title: "أتمتة سير العمل",
          description:
            "قم بتهيئة قواعد الأتمتة مرة واحدة. تتولى GymMate متابعة العملاء المحتملين، وتسجيل حضور الأعضاء، وتذاكر الدعم، ومزامنة البيانات — كل ذلك تلقائيًا.",
          details: ["ردود مدعومة بالذكاء الاصطناعي على مدار الساعة", "تسلسلات رعاية عملاء ذكية", "تفاعل آلي مع الأعضاء"],
        },
        {
          title: "الاحتفاظ والنمو بالأعضاء",
          description:
            "شاهد معدلات الاحتفاظ ترتفع وخط أنابيبك يمتلئ. احصل على رؤى في الوقت الفعلي حول ما ينجح، ورصد مخاطر الانسحاب مبكرًا، وتوسع بثقة.",
          details: ["لوحات تتبع الاحتفاظ في الوقت الفعلي", "تنبيهات توقع الانسحاب", "تتبع نمو الإيرادات"],
        },
      ],
    },
    features: {
      badge: "المميزات",
      h2a: "مبني لكامل",
      h2b: "دورة حياة العضو",
      sub: "من الاستفسار الأول إلى الولاء طويل الأمد، يغطي GymMate كل نقطة تواصل.",
      items: [
        { title: "دعم الدردشة بالذكاء الاصطناعي", description: "ردود فورية وذكية على استفسارات الأعضاء على مدار الساعة." },
        { title: "تأهيل العملاء المحتملين", description: "تسجيل العملاء المحتملين وتحديد أولوياتهم تلقائيًا بناءً على إشارات التفاعل." },
        { title: "تكامل CRM", description: "مزامنة ثنائية الاتجاه مع HubSpot وSalesforce وأكثر من 50 منصة أخرى." },
        { title: "المتابعات الآلية", description: "تسلسلات متعددة القنوات تحول العملاء المحتملين تلقائيًا." },
        { title: "حجز المواعيد", description: "جدولة بمساعدة الذكاء الاصطناعي تملأ تقويمك دون ذهاب وإياب." },
        { title: "حملات الاحتفاظ", description: "حملات ذكية تعيد إشراك الأعضاء المعرضين للخطر قبل انسحابهم." },
        { title: "التقارير المتقدمة", description: "تقارير موحدة عن الإيرادات والاحتفاظ وأداء الفريق." },
        { title: "التواصل متعدد القنوات", description: "واتساب والرسائل القصيرة والبريد الإلكتروني وداخل التطبيق — من صندوق وارد واحد." },
        { title: "لوحة التحليلات", description: "مؤشرات أداء رئيسية في الوقت الفعلي مع التنبؤ والاتجاهات والرؤى القابلة للتنفيذ." },
      ],
    },
    integrations: {
      badge: "التكاملات",
      h2a: "يعمل مع الأدوات",
      h2b: "التي تستخدمها بالفعل",
      sub: "تتصل GymMate بأكثر من 50 منصة فور الاستخدام. بدون تطوير مخصص. بدون انتظار.",
      cta: "عرض جميع التكاملات",
    },
    dashboard: {
      badge: "لوحة التحكم",
      h2a: "كل ما تحتاجه،",
      h2b: "في مكان واحد",
      sub: "مركز قيادة موحد لعملك في اللياقة البدنية بأكمله — المقاييس والأتمتة والرؤى في عرض واحد.",
    },
    caseStudies: {
      badge: "دراسات الحالة",
      h2a: "نتائج حقيقية من",
      h2b: "شركات حقيقية",
      sub: "انظر كيف تستخدم شركات اللياقة البدنية مثل شركتك GymMate لزيادة الإيرادات والاحتفاظ بمزيد من الأعضاء.",
      cta: "اقرأ دراسة الحالة كاملة",
    },
    testimonials: {
      badge: "آراء العملاء",
      h2a: "محبوب من أصحاب",
      h2b: "أعمال اللياقة البدنية",
      sub: "لا تأخذ كلامنا على محمل الجد. إليك ما يقوله مشغلو اللياقة البدنية عن GymMate.",
      items: [
        {
          quote:
            "كنا نفقد أعضاء بصمت كل شهر دون أن ندري لماذا. ساعدتنا تنبيهات الاحتفاظ في GymMate على تحديد الأعضاء المعرضين للخطر والتواصل معهم قبل فوات الأوان. انخفض الانسحاب بنحو النصف في 90 يومًا.",
          name: "David Okafor",
          role: "المالك",
          company: "IronCore Performance",
        },
        {
          quote:
            "اعتاد فريق المبيعات لدينا أن يقضي 3 ساعات يوميًا في متابعة العملاء المحتملين. الآن تتعامل GymMate مع كل ذلك تلقائيًا وارتفع معدل التحويل لدينا بنسبة 42٪. أتمنى لو كان هذا متاحًا من سنوات.",
          name: "Lena Hoffmann",
          role: "مدير المبيعات",
          company: "FitLife Studios",
        },
        {
          quote:
            "روبوت الدعم بالذكاء الاصطناعي وحده كان يستحق الاستثمار. يتعامل مع 80٪ من أسئلة أعضائنا فورًا — الجدولة والفواتير ومعلومات الفصل — دون أن يفعل فريق الاستقبال أي شيء.",
          name: "Carlos Rivera",
          role: "المدير العام",
          company: "Pulse Athletic Club",
        },
        {
          quote:
            "استغرق إعداد GymMate أقل من يوم. تزامن تكامل HubSpot بشكل مثالي وكانت الأتمتة تعمل خلال 48 ساعة. كان فريق التأهيل رائعًا.",
          name: "Aisha Nwosu",
          role: "مدير العمليات",
          company: "CoreFusion Gym",
        },
        {
          quote:
            "جربنا منصات أخرى لكن لا شيء يقترب من عمق أتمتة GymMate. تمنحنا لوحة التقارير رؤى لم نكن نمتلكها من قبل. الإيرادات ارتفعت 28٪ هذا الربع.",
          name: "Tyler Brooks",
          role: "المؤسس المشارك",
          company: "Elevate Fitness",
        },
        {
          quote:
            "GymMate ليس مجرد برنامج — إنه مثل امتلاك فريق عمليات كامل يعمل على مدار الساعة. يحب أعضاؤنا الردود الأسرع وموظفونا يحبون عدم الغرق في العمل الإداري.",
          name: "Yuki Tanaka",
          role: "مدير الاستوديو",
          company: "ZenFit Studio",
        },
      ],
    },
    pricing: {
      badge: "الأسعار",
      h2a: "أسعار بسيطة",
      h2b: "وشفافة",
      sub: "لا رسوم خفية. لا تسعير لكل مقعد. اختر الخطة التي تناسب عملك وتوسع مع نموك.",
      monthly: "شهري",
      yearly: "سنوي",
      save: "وفر 20%",
      perMonth: "/شهر",
      custom: "مخصص",
      billedAnnually: "يُدفع سنويًا · وفر $",
      perYear: "/سنة",
      popularBadge: "الأكثر شيوعًا",
      bottomNote: "تشمل جميع الخطط تجربة مجانية لمدة 14 يومًا. لا حاجة لبطاقة ائتمان.",
      faqLink: "راجع الأسئلة الشائعة للتفاصيل.",
      plans: [
        {
          name: "المبتدئ",
          description: "مثالي للصالات الرياضية المستقلة واستوديوهات اللياقة الصغيرة التي بدأت للتو في الأتمتة.",
          cta: "ابدأ تجربة مجانية",
          features: [
            "حتى 500 عضو نشط",
            "دعم الدردشة بالذكاء الاصطناعي (ساعات العمل)",
            "أتمتة متابعة العملاء المحتملين",
            "حملات البريد الإلكتروني والرسائل القصيرة",
            "تكامل CRM أساسي (منصة واحدة)",
            "تقارير وتحليلات قياسية",
            "دعم عبر البريد الإلكتروني",
            "مكالمة تأهيل",
          ],
        },
        {
          name: "النمو",
          description: "لأعمال اللياقة المتنامية التي تحتاج إلى أتمتة كاملة عبر العملاء المحتملين والأعضاء والعمليات.",
          cta: "احجز عرضًا",
          features: [
            "حتى 2,000 عضو نشط",
            "دعم الدردشة بالذكاء الاصطناعي على مدار الساعة",
            "تسلسلات رعاية عملاء محتملين متقدمة",
            "أتمتة واتساب والبريد الإلكتروني والرسائل القصيرة",
            "تكاملات CRM (غير محدودة)",
            "حملات الاحتفاظ وتنبيهات الانسحاب",
            "تحليلات وتقارير متقدمة",
            "دعم ذو أولوية + مدير نجاح مخصص",
            "منشئ سير عمل مخصص",
            "أتمتة حجز المواعيد",
          ],
        },
        {
          name: "المؤسسات",
          description: "للعلامات التجارية للياقة البدنية متعددة المواقع والمشغلين المؤسسيين الذين يحتاجون إلى حلول مخصصة على نطاق واسع.",
          cta: "جدولة استشارة",
          features: [
            "أعضاء غير محدودين",
            "إدارة متعددة المواقع",
            "تدريب ذكاء اصطناعي مخصص على علامتك التجارية",
            "خيار العلامة البيضاء",
            "تكاملات CRM وERP للمؤسسات",
            "استراتيجية احتفاظ مخصصة",
            "فريق تنفيذ مخصص",
            "ضمان SLA والتشغيل المستمر",
            "تقارير مخصصة ولوحات BI",
            "وصول API",
          ],
        },
      ],
    },
    faq: {
      badge: "الأسئلة الشائعة",
      h2a: "أسئلة",
      h2b: "مكررة",
      sub: "كل ما تحتاج معرفته عن GymMate. لا تجد إجابتك؟",
      subLink: "تحدث مع فريقنا.",
      items: [
        {
          question: "كم من الوقت يستغرق إعداد GymMate؟",
          answer:
            "معظم الشركات تكون جاهزة وتعمل بالكامل خلال 48 ساعة. يرشدك فريق التأهيل خلال ربط أدواتك الموجودة وتهيئة الأتمتة وإعداد سير العمل الأولى. للعملاء المؤسسيين ذوي الإعدادات المعقدة، نقدم خدمة تنفيذ مخصصة.",
        },
        {
          question: "ما التكاملات التي تدعمها GymMate؟",
          answer:
            "تتكامل GymMate مع أكثر من 50 منصة بما في ذلك HubSpot وSalesforce وMindbody وZen Planner وواتساب وGmail وGoogle Sheets وCalendly وStripe وZapier وn8n. إذا كنت تحتاج إلى تكامل مخصص، يمكن لفريقنا بناؤه — فقط اسأل خلال العرض التوضيحي.",
        },
        {
          question: "كيف تعمل الأسعار؟ هل هناك رسوم خفية؟",
          answer:
            "أسعارنا بسيطة وشفافة — رسوم شهرية أو سنوية ثابتة بناءً على خطتك. لا توجد تكاليف لكل مقعد، ولا حدود لحجم الرسائل في خطة النمو، ولا رسوم مفاجئة. السعر الذي تراه هو السعر الذي تدفعه. تسعير المؤسسات مخصص بناءً على متطلباتك.",
        },
        {
          question: "هل تستطيع GymMate التعامل مع الشركات متعددة المواقع؟",
          answer:
            "نعم. تم تصميم خطة المؤسسات خصيصًا للعلامات التجارية للياقة البدنية متعددة المواقع. تحصل على تقارير مركزية عبر جميع المواقع، وقواعد أتمتة خاصة بكل موقع، ووصول قائم على الأدوار للمديرين، وبيانات الأعضاء الموحدة عبر محفظتك بأكملها.",
        },
        {
          question: "ما نوع الدعم الذي تقدمونه؟",
          answer:
            "تشمل خطط المبتدئين دعمًا عبر البريد الإلكتروني مع وقت استجابة 24 ساعة. تشمل خطط النمو دعمًا ذا أولوية مع مدير نجاح عملاء مخصص يراقب حسابك بشكل استباقي ويجتمع معك شهريًا. يحصل العملاء المؤسسيون على فريق تنفيذ مخصص ودعم مدعوم باتفاقية مستوى الخدمة.",
        },
        {
          question: "هل يمكنني تخصيص ردود الذكاء الاصطناعي لتتوافق مع أسلوب علامتي التجارية؟",
          answer:
            "بالتأكيد. خلال التأهيل، ندرّب الذكاء الاصطناعي على إرشادات علامتك التجارية والأسئلة الشائعة والأسعار وجداول الدروس والمزيد. يمكن للعملاء المؤسسيين إجراء تدريب ذكاء اصطناعي مخصص كامل حتى تبدو الردود متوافقة تمامًا مع علامتك التجارية ومحددة لأعمالك.",
        },
        {
          question: "هل هناك تجربة مجانية؟ هل أحتاج إلى بطاقة ائتمان؟",
          answer:
            "نعم — تشمل جميع الخطط تجربة مجانية لمدة 14 يومًا. لا حاجة لبطاقة ائتمان للبدء. ستتمتع بوصول كامل إلى خطتك المختارة خلال فترة التجربة حتى تتمكن من رؤية نتائج حقيقية قبل الالتزام.",
        },
        {
          question: "كيف تحمي GymMate بيانات الأعضاء؟",
          answer:
            "GymMate متوافقة مع GDPR وCCPA. جميع البيانات مشفرة أثناء النقل وفي حالة الراحة. نحن لا نبيع بيانات أعضائك أو نشاركها مع أطراف ثالثة. نقدم اتفاقيات معالجة البيانات (DPAs) للعملاء المؤسسيين ونحافظ على شهادة SOC 2 Type II.",
        },
      ],
    },
    finalCta: {
      badge: "احجز مكالمة مع فريقنا اليوم",
      h2a: "مستعد لأتمتة",
      h2b: "أعمالك في اللياقة البدنية؟",
      sub: "انضم إلى أكثر من 500 شركة لياقة تستخدم GymMate للاحتفاظ بمزيد من الأعضاء وتحويل مزيد من العملاء المحتملين وزيادة الإيرادات — دون إضافة موظفين.",
      cta1: "احجز عرضًا",
      cta2: "جدولة استشارة",
      proof1: "تجربة مجانية 14 يومًا",
      proof2: "لا حاجة لبطاقة ائتمان",
      proof3: "إعداد في 48 ساعة",
      proof4: "إلغاء في أي وقت",
    },
    footer: {
      tagline: "أنظمة دعم عملاء واحتفاظ بالأعضاء مدعومة بالذكاء الاصطناعي مصممة لأعمال اللياقة البدنية.",
      bookDemo: "احجز عرضًا",
      copyright: "© 2025 GymMate. جميع الحقوق محفوظة.",
      privacy: "سياسة الخصوصية",
      terms: "شروط الخدمة",
      contact: "تواصل معنا",
      categories: {
        Services: "الخدمات",
        Solutions: "الحلول",
        Integrations: "التكاملات",
        Company: "الشركة",
      },
      links: {
        Services: [
          "أتمتة دعم العملاء",
          "متابعة العملاء المحتملين",
          "الاحتفاظ بالأعضاء",
          "أتمتة CRM",
          "التقارير والتحليلات",
        ],
        Solutions: [
          "استوديوهات اللياقة",
          "الصالات الرياضية والنوادي",
          "المدربون الشخصيون",
          "متعدد المواقع",
          "المؤسسات",
        ],
        Integrations: ["HubSpot", "Salesforce", "واتساب", "Zapier", "جميع التكاملات"],
        Company: ["من نحن", "المدونة", "الوظائف", "سياسة الخصوصية", "شروط الخدمة"],
      },
    },
  },
} as const;

export type Translations = typeof translations.en;
export type Theme = "dark" | "light";

/* ── Lang context ── */
interface LangContextType {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: Translations;
  isRTL: boolean;
}
const LangContext = createContext<LangContextType | null>(null);

/* ── Theme context ── */
interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
  isDark: boolean;
}
const ThemeContext = createContext<ThemeContextType | null>(null);

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("en");
  const [theme, setTheme] = useState<Theme>("dark");

  /* Apply .dark class to <html> */
  useEffect(() => {
    const html = document.documentElement;
    if (theme === "dark") {
      html.classList.add("dark");
    } else {
      html.classList.remove("dark");
    }
  }, [theme]);

  const toggleTheme = () => setTheme((t) => (t === "dark" ? "light" : "dark"));
  const t = translations[lang] as Translations;
  /* Arabic keeps the same LTR alignment as English — only the text is translated. */
  const isRTL = false;

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, isDark: theme === "dark" }}>
      <LangContext.Provider value={{ lang, setLang, t, isRTL }}>
        <div dir="ltr" lang={lang}>
          {children}
        </div>
      </LangContext.Provider>
    </ThemeContext.Provider>
  );
}

export function useLang() {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error("useLang must be used inside LangProvider");
  return ctx;
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used inside LangProvider");
  return ctx;
}
