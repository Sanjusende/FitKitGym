import React, { useState } from "react";
import { Dumbbell, ShieldCheck, Flame, ArrowRight } from "lucide-react";

export default function MachinesSection({ onOpenJoin }) {
  const [activeTab, setActiveTab] = useState("all");

  const categories = [
    { id: "all", label: "ALL ARSENAL (120+)" },
    { id: "strength", label: "CHEST & UPPER BODY" },
    { id: "legs", label: "LEGS & POSTERIOR" },
    { id: "cables", label: "CABLE & FUNCTIONAL" },
    { id: "cardio", label: "CARDIO LAB" },
  ];

  const machines = [
    {
      id: 1,
      name: "ISO-LATERAL CHEST PRESS",
      brand: "Hammer Strength",
      category: "strength",
      description: "Converging natural arc motion designed for peak pectoral recruitment and zero joint strain.",
      img: "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?w=600&h=450&fit=crop",
      tag: "PLATE LOADED"
    },
    {
      id: 2,
      name: "OLYMPIC SQUAT CAGE & PLATFORM",
      brand: "Eleiko & Rogue",
      category: "legs",
      description: "Hardwood dampening platform with calibrated competition bumper plates and precision knurling.",
      img: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&h=450&fit=crop",
      tag: "POWERLIFTING"
    },
    {
      id: 3,
      name: "PENDULUM SQUAT & HACK PRESS",
      brand: "Prime Fitness",
      category: "legs",
      description: "Biomechanical pendulum arc with adjustable resistance profiles for maximum quadriceps isolation.",
      img: "https://images.unsplash.com/photo-1574680096145-d05b474e2155?w=600&h=450&fit=crop",
      tag: "QUAD SCULPT"
    },
    {
      id: 4,
      name: "DUAL ADJUSTABLE CABLE CROSSOVER",
      brand: "Precor Biomechanics",
      category: "cables",
      description: "Precision ball-bearing pulleys with multi-plane rotation for hundreds of muscle angles.",
      img: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?w=600&h=450&fit=crop",
      tag: "MULTI-PULLEY"
    },
    {
      id: 5,
      name: "CURVED MANUAL MOTORLESS RUNNER",
      brand: "Woodway & Assault",
      category: "cardio",
      description: "Self-powered slatted track that burns 30% more calories while mimicking natural sprint kinetics.",
      img: "https://images.unsplash.com/photo-1576678927484-cc907957088c?w=600&h=450&fit=crop",
      tag: "HIIT CARDIO"
    },
    {
      id: 6,
      name: "HEAVY DUMBBELL ARSENAL (2.5KG – 60KG)",
      brand: "Urethane Solid Steel",
      category: "strength",
      description: "Complete matched dumbbell racks paired with heavy-duty zero-gap incline and flat benches.",
      img: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=600&h=450&fit=crop",
      tag: "FREE WEIGHTS"
    }
  ];

  const filtered = activeTab === "all" 
    ? machines 
    : machines.filter(m => m.category === activeTab);

  return (
    <section id="machines" className="py-24 bg-[#0a0a0a] border-t border-[#1f1f1f] relative overflow-hidden scroll-mt-20">
      
      {/* Background Glow */}
      <div className="absolute top-1/3 right-1/4 w-[500px] h-[300px] bg-[#FF2E4C]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-flex items-center px-4 py-1 rounded-full border border-[#FF2E4C]/50 bg-[#FF2E4C]/10 text-[#FF2E4C] text-[11px] font-extrabold tracking-widest uppercase mb-4 shadow-[0_0_12px_rgba(255,46,76,0.25)]">
            WORLD-CLASS ARSENAL
          </span>
          <h2 className="font-heading text-4xl sm:text-6xl font-black uppercase tracking-tight text-white leading-tight">
            120+ BIOMECHANICAL <span className="text-[#FF2E4C] red-glow">MACHINES</span>
          </h2>
          <p className="text-xs sm:text-sm text-neutral-400 mt-3 font-normal max-w-xl mx-auto leading-relaxed">
            Engineered for pure biomechanics, maximum muscle tension, and safety. Every machine at FITKIT is handpicked to stimulate progressive overload.
          </p>
          <div className="w-12 h-1 bg-[#FF2E4C] rounded-full mt-5 mx-auto shadow-[0_0_10px_#FF2E4C]" />
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
          {categories.map((cat) => {
            const isActive = activeTab === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`px-5 py-2.5 rounded-full text-xs font-extrabold tracking-wider uppercase transition-all duration-200 cursor-pointer ${
                  isActive
                    ? "bg-gradient-to-r from-[#FF2E4C] to-[#E63946] text-white shadow-[0_0_15px_rgba(255,46,76,0.45)]"
                    : "bg-[#111111] text-neutral-400 hover:text-white border border-[#1f1f1f] hover:border-neutral-700"
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Machines Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {filtered.map((item) => (
            <div
              key={item.id}
              className="rounded-2xl bg-[#111111] border border-[#1f1f1f] hover:border-[#FF2E4C]/50 transition-all duration-300 overflow-hidden shadow-2xl flex flex-col justify-between group"
            >
              {/* Image Frame */}
              <div className="relative aspect-[16/10] overflow-hidden bg-black">
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-full h-full object-cover object-center filter brightness-[0.70] contrast-[1.1] group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-transparent to-transparent opacity-80" />

                {/* Top Badge */}
                <div className="absolute top-3 left-3">
                  <span className="text-[9px] font-black uppercase tracking-widest px-2.5 py-1 rounded-full bg-black/60 border border-white/20 text-[#FF2E4C] backdrop-blur-md">
                    {item.tag}
                  </span>
                </div>

                <div className="absolute top-3 right-3">
                  <span className="text-[9px] font-bold uppercase tracking-wider text-neutral-300 px-2 py-0.5 rounded bg-black/50 backdrop-blur-md">
                    {item.brand}
                  </span>
                </div>
              </div>

              {/* Machine Info */}
              <div className="p-6">
                <h3 className="font-heading text-xl font-black uppercase text-white tracking-wide group-hover:text-[#FF2E4C] transition-colors mb-2">
                  {item.name}
                </h3>
                <p className="text-xs text-neutral-400 leading-relaxed font-normal mb-5">
                  {item.description}
                </p>

                <div className="pt-4 border-t border-[#1f1f1f] flex items-center justify-between">
                  <span className="text-[11px] font-bold text-neutral-400 uppercase tracking-wider flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#FF2E4C]" />
                    <span>Certified Biomechanics</span>
                  </span>

                  <button
                    onClick={onOpenJoin}
                    className="text-xs font-black uppercase tracking-wider text-[#FF2E4C] hover:text-[#ff6b81] flex items-center gap-1 transition-colors cursor-pointer"
                  >
                    <span>TRY FREE</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
