export const pricingData = {
  disclaimers: [
    "Final pricing depends on your exact project scope and specific requirements.",
    "Domain registration, paid hosting, paid third-party APIs/services, backend development, and extra revision rounds may cost extra.",
    "The complete scope, milestones, and delivery schedule will be formally confirmed before work begins."
  ],
  packages: [
    {
      id: "starter",
      name: "Starter Website",
      startingPrice: "₹3,000",
      numericPrice: 3000,
      badge: "Quick Launch",
      isPopular: false,
      tagline: "Ideal for new businesses, personal brands, and single-product promotions.",
      turnaround: "3 - 5 Days Delivery",
      features: [
        "One-page high-converting responsive website",
        "Hero section with dynamic visual appeal",
        "Services and core offering breakdown",
        "Direct WhatsApp enquiry integration",
        "Contact form with instant messaging link",
        "Basic on-page SEO & meta tags setup",
        "Mobile-first responsive optimization",
        "1 Revision round included"
      ],
      notIncluded: [
        "Multiple internal pages",
        "Advanced interactive filters",
        "Custom animations suite"
      ],
      ctaText: "Get a Quote"
    },
    {
      id: "business",
      name: "Business Website",
      startingPrice: "₹7,000",
      numericPrice: 7000,
      badge: "MOST POPULAR",
      isPopular: true,
      tagline: "The complete digital flagship for local businesses, gyms, clinics & tutors.",
      turnaround: "7 - 10 Days Delivery",
      features: [
        "Up to 5 custom-designed responsive pages",
        "Services, Projects/Gallery & About sections",
        "Interactive UI components & smooth motion",
        "Dual Contact & WhatsApp enquiry CTAs",
        "Google Maps & Local business schema setup",
        "Speed optimized (under 1.5s load target)",
        "Basic on-page SEO setup on all pages",
        "2 Revision rounds included"
      ],
      notIncluded: [
        "Custom web application logic",
        "Database or backend systems"
      ],
      ctaText: "Get a Quote"
    },
    {
      id: "custom",
      name: "Custom Website",
      startingPrice: "₹12,000",
      numericPrice: 12000,
      badge: "Bespoke Scale",
      isPopular: false,
      tagline: "Tailor-made for brands needing unique visual presence and specialized features.",
      turnaround: "2 - 3 Weeks Delivery",
      features: [
        "Custom architectural scope & bespoke layout",
        "Additional pages or complex section interactions",
        "Advanced frontend features & custom calculators/filters",
        "Premium Framer Motion animations & micro-interactions",
        "High-impact graphic components & diagonal design",
        "Comprehensive technical on-page SEO audit",
        "Priority dedicated revision & refinement cycles",
        "Project-specific milestone quotation"
      ],
      notIncluded: [],
      ctaText: "Get a Quote"
    }
  ]
};
