import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Send, CheckCircle2, AlertTriangle, MessageSquare } from "lucide-react";
import { gymConfig } from "../data/gymData";
import { Rhombus } from "./GeometricAccents";

export default function GymContact({ initialPlan, initialDivision }) {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    division: "Men's Army",
    plan: "3-Month Pro Athlete",
    notes: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});
  const [generatedWaUrl, setGeneratedWaUrl] = useState("");

  useEffect(() => {
    if (initialPlan) {
      setFormData((prev) => ({
        ...prev,
        plan: initialPlan.name,
        notes: `I want to join the ${initialPlan.name} (${initialPlan.price}) at Armoured Gym!`,
      }));
    }
  }, [initialPlan]);

  useEffect(() => {
    if (initialDivision) {
      setFormData((prev) => ({
        ...prev,
        division: `${initialDivision.title} ${initialDivision.highlight}`,
      }));
    }
  }, [initialDivision]);

  const validate = () => {
    const errs = {};
    if (!formData.fullName.trim()) errs.fullName = "Please enter your name.";
    if (!formData.phone.trim()) errs.phone = "Please enter your WhatsApp phone number.";
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    const message = `*ARMOURED FITNESS - PASS & MEMBERSHIP INQUIRY*\n• *Name:* ${formData.fullName}\n• *Phone:* ${formData.phone}\n• *Email:* ${formData.email || "N/A"}\n• *Division:* ${formData.division}\n• *Selected Plan:* ${formData.plan}\n• *Notes:* ${formData.notes || "Ready for fitness assessment."}`;

    const waUrl = `https://wa.me/${gymConfig.whatsappCleanNumber}?text=${encodeURIComponent(message)}`;
    setGeneratedWaUrl(waUrl);
    setSubmitted(true);
    window.open(waUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <section id="contact" className="py-24 bg-[#09090D] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-3 mb-2">
            <div className="h-[1px] w-12 bg-[#FF1458]" />
            <Rhombus size="xs" color="pink" />
            <span className="text-xs font-mono font-bold uppercase tracking-[0.25em] text-[#FF1458]">
              Join The Club
            </span>
            <Rhombus size="xs" color="pink" />
            <div className="h-[1px] w-12 bg-[#FF1458]" />
          </div>

          <h2 className="font-['Teko'] text-5xl sm:text-7xl md:text-8xl font-black uppercase tracking-tight text-white leading-[0.9] mb-4">
            CLAIM YOUR <span className="text-[#FF1458]">TRIAL PASS</span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-[#A1A1AA] leading-relaxed">
            Experience the atmosphere, world-class equipment, and coaching. Claim a complimentary 1-day pass today.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Gym Location & Contact Channels */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-8 bg-[#121217] border-2 border-[#272733] shadow-xl">
              <h3 className="font-['Teko'] text-3xl font-bold uppercase tracking-wider text-white mb-6">
                CLUB INFORMATION
              </h3>

              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#FF1458]/10 border border-[#FF1458] text-[#FF1458] flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs uppercase font-mono tracking-wider text-[#A1A1AA] block">
                      Location
                    </span>
                    <span className="text-sm font-semibold text-white">
                      {gymConfig.address}
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#FF1458]/10 border border-[#FF1458] text-[#FF1458] flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs uppercase font-mono tracking-wider text-[#A1A1AA] block">
                      Direct WhatsApp / Call
                    </span>
                    <a
                      href={`https://wa.me/${gymConfig.whatsappCleanNumber}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-semibold text-white hover:text-[#FF1458] transition-colors"
                    >
                      {gymConfig.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#FF1458]/10 border border-[#FF1458] text-[#FF1458] flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs uppercase font-mono tracking-wider text-[#A1A1AA] block">
                      Email Desk
                    </span>
                    <span className="text-sm font-semibold text-white">
                      {gymConfig.email}
                    </span>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-[#22222F]">
                <span className="text-xs uppercase font-mono tracking-wider text-[#A1A1AA] block mb-1">
                  Operating Hours
                </span>
                <p className="text-sm text-white font-medium">
                  {gymConfig.hours}
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Pass Request Form */}
          <div className="lg:col-span-7 bg-[#121217] border-2 border-[#272733] p-8 sm:p-10 shadow-xl">
            {submitted ? (
              <div className="text-center py-8 space-y-4">
                <div className="w-16 h-16 bg-[#25D366]/20 border-2 border-[#25D366] text-[#25D366] rounded-full mx-auto flex items-center justify-center">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="font-['Teko'] text-4xl uppercase font-bold text-white">
                  TRIAL PASS CONFIRMED!
                </h3>
                <p className="text-sm text-[#A1A1AA] max-w-md mx-auto">
                  Your pass has been prepared. We opened WhatsApp to connect you directly with the front desk.
                </p>
                <div className="pt-2">
                  <a
                    href={generatedWaUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#25D366] hover:bg-[#20ba59] text-white font-['Teko'] text-xl uppercase tracking-widest font-bold shadow-lg"
                  >
                    <MessageSquare className="w-5 h-5" />
                    <span>Open in WhatsApp</span>
                  </a>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                <div className="border-b border-[#22222F] pb-4 mb-4">
                  <h3 className="font-['Teko'] text-3xl font-bold uppercase tracking-wider text-white">
                    Request 1-Day Free Trial Pass
                  </h3>
                  <p className="text-xs text-[#A1A1AA]">
                    Enter your details to generate your VIP trial pass. No payment required.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-white mb-1.5 font-bold">
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      placeholder="e.g. Karan Patel"
                      className="w-full px-4 py-3 bg-[#09090D] border border-[#272733] text-white text-sm focus:outline-none focus:border-[#FF1458] transition-colors placeholder-[#52525B]"
                    />
                    {errors.fullName && (
                      <p className="text-[11px] text-[#FF1458] mt-1 flex items-center gap-1">
                        <AlertTriangle className="w-3 h-3" />
                        <span>{errors.fullName}</span>
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-white mb-1.5 font-bold">
                      WhatsApp Phone *
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="e.g. +91 98765 43210"
                      className="w-full px-4 py-3 bg-[#09090D] border border-[#272733] text-white text-sm focus:outline-none focus:border-[#FF1458] transition-colors placeholder-[#52525B]"
                    />
                    {errors.phone && (
                      <p className="text-[11px] text-[#FF1458] mt-1 flex items-center gap-1">
                        <AlertTriangle className="w-3 h-3" />
                        <span>{errors.phone}</span>
                      </p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-white mb-1.5 font-bold">
                      Target Division
                    </label>
                    <select
                      value={formData.division}
                      onChange={(e) => setFormData({ ...formData, division: e.target.value })}
                      className="w-full px-4 py-3 bg-[#09090D] border border-[#272733] text-white text-sm focus:outline-none focus:border-[#FF1458] transition-colors cursor-pointer"
                    >
                      <option value="Men's Army">Men's Army (Heavy Lifting)</option>
                      <option value="Women's Army">Women's Army (Sculpt & Conditioning)</option>
                      <option value="Olympics Athletics">Olympics Athletics (Power & Agility)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-white mb-1.5 font-bold">
                      Interested Membership
                    </label>
                    <select
                      value={formData.plan}
                      onChange={(e) => setFormData({ ...formData, plan: e.target.value })}
                      className="w-full px-4 py-3 bg-[#09090D] border border-[#272733] text-white text-sm focus:outline-none focus:border-[#FF1458] transition-colors cursor-pointer"
                    >
                      <option value="1-Month Pass (₹1,999)">1-Month Pass (₹1,999)</option>
                      <option value="3-Month Pro Athlete (₹4,999)">3-Month Pro Athlete (₹4,999)</option>
                      <option value="12-Month Armoured Elite (₹14,999)">12-Month Armoured Elite (₹14,999)</option>
                      <option value="Just 1-Day Trial Pass">Just 1-Day Trial Pass</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-white mb-1.5 font-bold">
                    Fitness Goals or Prior Experience (Optional)
                  </label>
                  <textarea
                    rows="3"
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    placeholder="Tell us about your fitness targets, any injuries, or what you want to achieve..."
                    className="w-full px-4 py-3 bg-[#09090D] border border-[#272733] text-white text-sm focus:outline-none focus:border-[#FF1458] transition-colors placeholder-[#52525B] resize-y"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-4 px-6 bg-[#FF1458] hover:bg-[#E00C4B] text-white font-['Teko'] text-2xl uppercase tracking-widest font-bold shadow-[0_0_25px_rgba(255,20,88,0.4)] transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Send className="w-5 h-5" />
                    <span>CLAIM PASS ON WHATSAPP</span>
                  </button>
                  <p className="text-[11px] text-[#A1A1AA] text-center mt-2.5 font-mono">
                    Instant Pass Generation • No Payment Needed • Free Coach Evaluation
                  </p>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
