/**
 * 🏋️ Page Sections Layout Configuration
 * -------------------------------------------------------------
 * Yahan se aap aasani se set kar sakte hain:
 * 1. Kaun sa section render hoga ('enabled: true' ya 'false')
 * 2. Kaun sa section kis order me render hoga ('order: 1, 2, 3...')
 * 
 * Notice:
 * - HOME ke theek baad ABOUT section set hai.
 * - TRAINERS page separate hai jismein hi client TRANSFORMATIONS shamil hain.
 * - PRICING me Indian gym ke according ₹ (INR) rates set hain.
 */

export const PAGE_SECTIONS_CONFIG = [
  {
    id: "home",
    name: "Home Video Hero & Ticker",
    pageKey: "HomeSection",
    enabled: true,
    order: 1,
    description: "Hero gym workout video slider and running marquee ticker"
  },
  {
    id: "about",
    name: "About Us & Key Stats Counter",
    pageKey: "AboutSection",
    enabled: true,
    order: 2,
    description: "About FITKIT and scroll-triggered animated stats counter"
  },
  {
    id: "services",
    name: "Our Services Built For Champions",
    pageKey: "ServicesSection",
    enabled: true,
    order: 3,
    description: "Personal Training, Cardio Programs, Weight Training, Diet & Nutrition"
  },
  {
    id: "machines",
    name: "120+ World-Class Machines Arsenal",
    pageKey: "MachinesSection",
    enabled: true,
    order: 4,
    description: "Biomechanical machinery, plate-loaded presses, and Olympic platforms"
  },
  {
    id: "gallery",
    name: "Inside FITKIT Gallery Arena",
    pageKey: "GallerySection",
    enabled: true,
    order: 5,
    description: "Photo tour of the state-of-the-art gym floor and community"
  },
  {
    id: "trainers",
    name: "Expert Trainers & Client Transformations",
    pageKey: "TrainersSection",
    enabled: true,
    order: 6,
    description: "Dedicated Trainers page with real before/after client transformations"
  },
  {
    id: "pricing",
    name: "FITKIT Membership Plans & Reviews",
    pageKey: "PricingSection",
    enabled: true,
    order: 7,
    description: "Ignite Pass, Momentum Pack, Transformation Pack and Member Stories"
  },
  {
    id: "bmi",
    name: "BMI Health Calculator",
    pageKey: "BmiSection",
    enabled: true,
    order: 8,
    description: "Interactive BMI calculation & fitness chart"
  },
  {
    id: "contact",
    name: "Contact & Consultation Form",
    pageKey: "ContactSection",
    enabled: true,
    order: 9,
    description: "Smooth-scroll contact form and direct WhatsApp chat (+91 8815926552)"
  }
];
