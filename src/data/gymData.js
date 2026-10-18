export const gymConfig = {
  brandName: "ARMOURED",
  brandSubtitle: "FITNESS CLUB & ATHLETIC LAB",
  tagline: "Get Ready... Get Armoured",
  address: "Plot 42, Sector 18, Cyber City / Elite Fitness Arena, Metro Pillar 140",
  hours: "Monday – Saturday: 5:00 AM – 11:00 PM | Sunday: 6:00 AM – 8:00 PM",
  phone: "+91 98765 43210",
  whatsappNumber: "+91 98765 43210",
  whatsappCleanNumber: "919876543210",
  email: "desk@armouredgym.com",
  instagram: "@armoured",
  
  navLinks: [
    { name: "HOME", href: "#home" },
    { name: "FACTS & REALITY", href: "#facts" },
    { name: "COMMUNITY", href: "#divisions" },
    { name: "WORKING TOGETHER", href: "#consult" },
    { name: "YOUR CHOICE", href: "#pricing" },
  ]
};

// 3 Core Divisions directly matching the 3 framed cards in the reference image
export const divisionsData = [
  {
    id: "mens-army",
    title: "MEN'S",
    subtitle: "Army",
    badge: "HYPERTROPHY & POWER",
    description: "Maximum hypertrophy, heavy compound barbell lifts, tactical powerlifting rigs, and brutal strength conditioning for serious physiques.",
    // Shredded muscular male physique body showcase
    image: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=800&q=85",
    borderTheme: "black",
    features: ["Heavy Free Weight Arena (Dumbbells to 60kg)", "Competition Power Racks & Deadlift Platforms", "Tactical Conditioning & Grip Strength Rig", "Custom Mass-Building Macro Guidance"],
  },
  {
    id: "womens-army",
    title: "WOMEN'S",
    subtitle: "Army",
    badge: "SCULPT & STRENGTH",
    description: "Athletic body sculpting, glute isolation, metabolic burn, and female-specific athletic strength coaching designed to build confidence and lean muscle.",
    // Toned, sculpted female athlete with dumbbells body showcase
    image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=800&q=85",
    borderTheme: "pink",
    features: ["Glute & Hip Thrust Dedicated Stations", "High-Energy Athletic Conditioning & Core Labs", "Certified Female Strength & Posture Coaches", "Biometric InBody Scans & Body Composition"],
  },
  {
    id: "olympics",
    title: "OLYMPICS",
    subtitle: "",
    badge: "ATHLETICS & AGILITY",
    description: "Olympic weightlifting podiums, clean & jerk, snatch technique, turf sled tracks, and explosive plyometrics for peak athletic performance.",
    // Athletic duo / Olympic lifting showcase
    image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=800&q=85",
    borderTheme: "black",
    features: ["IWF Certified Competition Bumper Plates", "Full-Length Indoor Sled & Turf Sprint Track", "Heart-Rate Performance Tracking Tech", "Sport-Specific Conditioning & Plyo Boxes"],
  }
];

export const workoutPrograms = [
  {
    id: "strength",
    title: "STRENGTH & POWER",
    duration: "60 MINS",
    intensity: "HIGH INTENSITY",
    description: "Barbell squats, heavy deadlifts, bench presses, and progressive overload under elite watchful coaches.",
    icon: "Dumbbell",
    tag: "MOST POPULAR",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "metcon",
    title: "COMBAT METCON",
    duration: "45 MINS",
    intensity: "MAX CALORIE BURN",
    description: "Assault bikes, rowing ergs, heavy boxing heavy-bags, and kettlebell flow designed to strip body fat.",
    icon: "Flame",
    tag: "HIGH ENERGY",
    image: "https://images.unsplash.com/photo-1549060279-7e168fcee0c2?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "olympic-lifting",
    title: "OLYMPIC PODIUM",
    duration: "60 MINS",
    intensity: "TECHNICAL POWER",
    description: "Master the Clean & Jerk, Snatch, and explosive hip hinge with certified Olympic lifting coaches.",
    icon: "Trophy",
    tag: "ATHLETE TIER",
    image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "recovery",
    title: "MOBILITY & RECOVERY",
    duration: "50 MINS",
    intensity: "RESTORATION",
    description: "Spinal decompression, deep myofascial release, joint mobility, and cryo-contrast steam therapy.",
    icon: "Activity",
    tag: "LONGEVITY",
    image: "https://images.unsplash.com/photo-1518310383802-640c2de311b2?auto=format&fit=crop&w=600&q=80"
  }
];

export const pricingPlans = [
  {
    id: "monthly",
    name: "1-Month Pass",
    price: "₹1,999",
    billing: "Billed Monthly • No Long-Term Contract",
    badge: "Flexible Starter",
    isPopular: false,
    perks: [
      "Full access to strength floor & cardio arena",
      "Free locker & luxury shower facilities",
      "1 Complimentary InBody composition scan",
      "Access during all operating hours",
      "Armoured workout tracker mobile app"
    ],
    ctaText: "Claim 1-Month Pass"
  },
  {
    id: "quarterly",
    name: "3-Month Pro Athlete",
    price: "₹4,999",
    billing: "Best Value • ₹1,666 / Month",
    badge: "MOST POPULAR",
    isPopular: true,
    perks: [
      "Unlimited floor & Olympic turf track access",
      "2 One-on-one personal training sessions included",
      "Comprehensive body fat & biometric posture analysis",
      "Unlimited entry to all group HIIT & Combat classes",
      "1 Free guest pass every month",
      "Custom high-protein nutrition & meal guidance"
    ],
    ctaText: "Join Pro Athlete"
  },
  {
    id: "annual",
    name: "12-Month Armoured Elite",
    price: "₹14,999",
    billing: "Full 365 Days Access • ₹1,250 / Month",
    badge: "VIP Transformation",
    isPopular: false,
    perks: [
      "Unlimited 24/7 VIP keyless club access",
      "6 Private personal trainer sessions included",
      "Steam & Cryotherapy sauna monthly credits",
      "Permanent dedicated locker & workout laundry service",
      "Exclusive Armoured Athlete training apparel kit",
      "Membership freezing option up to 60 days"
    ],
    ctaText: "Get Elite Membership"
  }
];

// Rich Body Showcase Gallery Photos matching the reference Instagram strip
export const galleryShowcase = [
  {
    // Female athlete floor pose
    src: "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=600&q=85",
    alt: "Female athletic athlete posing",
    label: "ATHLETIC SCULPT"
  },
  {
    // Athletic back / glute muscular showcase
    src: "https://images.unsplash.com/photo-1574680096145-d05b474e2155?auto=format&fit=crop&w=600&q=85",
    alt: "Muscular athlete back and glute conditioning",
    label: "POSTERIOR CHAIN"
  },
  {
    // Center block is Instagram emblem
    isEmblem: true
  },
  {
    // Muscular shredded bodybuilder chest / bicep close-up
    src: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=600&q=85",
    alt: "Shredded bodybuilder chest and biceps",
    label: "PURE HYPERTROPHY"
  },
  {
    // Female athlete workout on bench
    src: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=600&q=85",
    alt: "Athlete core conditioning",
    label: "CORE FORTITUDE"
  }
];

export const galleryImages = galleryShowcase;

