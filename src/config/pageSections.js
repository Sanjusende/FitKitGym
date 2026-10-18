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
    description: "About FitKit and scroll-triggered animated stats counter"
  },
  {
    id: "services",
    name: "Our Services with Background Images",
    pageKey: "ServicesSection",
    enabled: true,
    order: 3,
    description: "Workout Videos, Personal Training, Nutrition, Hypertrophy with background imagery"
  },
  {
    id: "trainers",
    name: "Expert Trainers & Client Transformations",
    pageKey: "TrainersSection",
    enabled: true,
    order: 4,
    description: "Dedicated Trainers page with real before/after client transformations"
  },
  {
    id: "pricing",
    name: "Indian Gym Membership Pricing & Reviews",
    pageKey: "PricingSection",
    enabled: true,
    order: 5,
    description: "Indian gym pricing (₹1499, ₹2499, ₹4999), reviews, and promotional discount banner"
  },
  {
    id: "bmi",
    name: "BMI Health Calculator",
    pageKey: "BmiSection",
    enabled: true,
    order: 6,
    description: "Interactive BMI calculation & fitness chart"
  },
  {
    id: "contact",
    name: "Contact & Consultation Form",
    pageKey: "ContactSection",
    enabled: true,
    order: 7,
    description: "Smooth-scroll contact form and direct WhatsApp chat (+91 8815926552)"
  }
];
