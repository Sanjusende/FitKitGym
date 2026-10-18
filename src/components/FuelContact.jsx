import React, { useState } from "react";
import { fuelBuiltConfig } from "../data/fuelBuiltData";
import { MessageCircle, Phone, Mail, ArrowRight, ShieldCheck, CheckCircle2, Clock } from "lucide-react";

export default function FuelContact({ initialPlan, initialData }) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    goal: initialData?.goal || "Fat Loss",
    message: ""
  });
  const [submitted, setSubmitted] = useState(false);

  const whatsappBaseUrl = `https://wa.me/${fuelBuiltConfig.whatsappCleanNumber}`;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const directWhatsAppUrl = `${whatsappBaseUrl}?text=Hi%20Coach!%20My%20name%20is%20${encodeURIComponent(
    formData.name || "Athlete"
  )}.%20I'm%20interested%20in%20the%20${encodeURIComponent(
    initialPlan?.name || "FuelBuilt Coaching Plan"
  )}%20for%20${encodeURIComponent(formData.goal || "Transformation")}.`;

  return (
    <section id="contact" className="py-24 bg-[#04060A] border-t border-[#1D2638] relative">
      {/* Background Radial Glow */}
      <div className="absolute inset-0 gym-hero-radial pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        
        {/* Urgency Hero Banner */}
        <div className="rounded-3xl bg-gradient-to-r from-[#FF5722] via-[#FF7043] to-[#F4511E] p-8 sm:p-14 text-black mb-16 shadow-[0_0_50px_rgba(255,87,34,0.35)] relative overflow-hidden">
          {/* Subtle diagonal patterns */}
          <div className="absolute -right-16 -bottom-16 w-80 h-80 rounded-full bg-black/10 blur-2xl pointer-events-none" />

          <div className="max-w-3xl">
            <span className="inline-block px-3 py-1 rounded-full bg-black/20 text-black text-xs font-black tracking-widest uppercase mb-4">
              LIMITED INTAKE OPEN
            </span>
            <h2 className="font-heading text-4xl sm:text-6xl font-black uppercase tracking-tight leading-[0.95] mb-4">
              READY TO BUILD YOUR STRONGEST PHYSIQUE YET?
            </h2>
            <p className="text-black/80 text-base sm:text-lg font-semibold max-w-xl mb-8">
              Every month we only accept 10 new 1-on-1 clients to ensure absolute dedication, form audits, and tailored attention. Claim your spot before enrollment closes.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <a
                href={`${whatsappBaseUrl}?text=Hi%20FuelBuilt%20Team!%20I'd%20like%20to%20apply%20for%20the%201-on-1%20Coaching%20Intake.`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 rounded-xl bg-black text-white hover:bg-neutral-900 font-black text-xs sm:text-sm uppercase tracking-wider transition-all flex items-center gap-2 shadow-2xl hover:scale-105"
              >
                <MessageCircle className="w-5 h-5 text-[#25D366] fill-[#25D366]" />
                <span>CHAT DIRECTLY ON WHATSAPP</span>
              </a>
              <span className="text-xs font-extrabold uppercase tracking-wider text-black/70 flex items-center gap-1.5">
                <Clock className="w-4 h-4" /> Average reply in &lt; 15 mins
              </span>
            </div>
          </div>
        </div>

        {/* Form and Contact Info Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left: Contact Info & Value Props */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div>
              <span className="text-xs font-bold text-[#FF5722] uppercase tracking-widest">
                DIRECT COMMUNICATION
              </span>
              <h3 className="font-heading text-3xl sm:text-4xl font-black text-white uppercase mt-1 mb-3">
                LET'S TALK ABOUT YOUR GOALS
              </h3>
              <p className="text-[#8F9BB3] text-sm leading-relaxed">
                Whether you have questions about which plan fits your lifestyle or want to audit your current training split, our doors are open.
              </p>
            </div>

            <div className="space-y-4">
              <a
                href={whatsappBaseUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-5 rounded-2xl bg-[#0D131F] border border-[#1D2638] hover:border-[#25D366]/50 flex items-center gap-4 transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-[#25D366]/10 border border-[#25D366]/30 flex items-center justify-center text-[#25D366] group-hover:scale-110 transition-transform">
                  <MessageCircle className="w-6 h-6 fill-current" />
                </div>
                <div>
                  <p className="text-xs text-[#8F9BB3] font-semibold uppercase tracking-wider">WhatsApp Coach</p>
                  <p className="font-heading text-xl font-black text-white uppercase tracking-wide group-hover:text-[#25D366] transition-colors">
                    {fuelBuiltConfig.whatsappNumber}
                  </p>
                </div>
              </a>

              <div className="p-5 rounded-2xl bg-[#0D131F] border border-[#1D2638] flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#FF5722]/10 border border-[#FF5722]/30 flex items-center justify-center text-[#FF5722]">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs text-[#8F9BB3] font-semibold uppercase tracking-wider">Email Inquiries</p>
                  <p className="font-heading text-xl font-black text-white tracking-wide">
                    coaching@fuelbuilt.com
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-[#0D131F]/50 border border-[#1D2638] text-xs text-[#8F9BB3] space-y-2">
              <p className="flex items-center gap-2 text-white font-bold uppercase tracking-wider">
                <ShieldCheck className="w-4 h-4 text-[#FF5722]" /> No Obligation Guarantee
              </p>
              <p>
                Your strategy call is 100% free with zero pushy sales tactics. You walk away with clarity whether you join our program or not.
              </p>
            </div>
          </div>

          {/* Right: Interactive Application Form */}
          <div className="lg:col-span-7 bg-[#0D131F] border border-[#1D2638] rounded-3xl p-8 sm:p-10 shadow-2xl relative">
            {submitted ? (
              <div className="py-12 text-center flex flex-col items-center justify-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-[#25D366]/20 border border-[#25D366] flex items-center justify-center">
                  <CheckCircle2 className="w-8 h-8 text-[#25D366]" />
                </div>
                <h4 className="font-heading text-3xl font-black text-white uppercase">
                  APPLICATION SUBMITTED!
                </h4>
                <p className="text-sm text-[#8F9BB3] max-w-md">
                  Thank you, <span className="text-white font-bold">{formData.name}</span>! Coach Marcus has received your details and will reach out via WhatsApp / Email within a few hours.
                </p>
                <a
                  href={directWhatsAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 px-6 py-3.5 rounded-xl bg-[#25D366] text-black font-black text-xs uppercase tracking-wider flex items-center gap-2 hover:bg-[#20ba59] transition-all"
                >
                  <MessageCircle className="w-4 h-4 fill-current" />
                  <span>SPEED UP: CONNECT ON WHATSAPP NOW</span>
                </a>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <h4 className="font-heading text-2xl font-black text-white uppercase mb-1">
                    APPLY FOR 1-ON-1 COACHING
                  </h4>
                  <p className="text-xs text-[#8F9BB3]">
                    Fill in your details below and we will tailor your transformation blueprint.
                  </p>
                </div>

                {initialPlan && (
                  <div className="p-3 rounded-xl bg-[#FF5722]/10 border border-[#FF5722]/30 flex items-center justify-between text-xs">
                    <span className="text-[#8F9BB3]">Selected Plan:</span>
                    <span className="font-bold text-[#FF5722] uppercase">{initialPlan.name} ({initialPlan.price})</span>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-[#8F9BB3] uppercase tracking-wider mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Alex Henderson"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-[#070A0F] border border-[#1D2638] rounded-xl px-4 py-3 text-white placeholder-slate-600 focus:outline-none focus:border-[#FF5722] text-sm transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#8F9BB3] uppercase tracking-wider mb-2">
                      WhatsApp / Phone *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+1 (555) 000-0000"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-[#070A0F] border border-[#1D2638] rounded-xl px-4 py-3 text-white placeholder-slate-600 focus:outline-none focus:border-[#FF5722] text-sm transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-[#8F9BB3] uppercase tracking-wider mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="alex@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-[#070A0F] border border-[#1D2638] rounded-xl px-4 py-3 text-white placeholder-slate-600 focus:outline-none focus:border-[#FF5722] text-sm transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#8F9BB3] uppercase tracking-wider mb-2">
                      Primary Target
                    </label>
                    <select
                      value={formData.goal}
                      onChange={(e) => setFormData({ ...formData, goal: e.target.value })}
                      className="w-full bg-[#070A0F] border border-[#1D2638] rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#FF5722] text-sm transition-colors"
                    >
                      <option value="Fat Loss">Drop Body Fat (-15 to 30 lbs)</option>
                      <option value="Muscle Building">Build Dense Muscle Mass</option>
                      <option value="Recomposition">Athletic Recomp & Conditioning</option>
                      <option value="Contest Prep">Contest / Photo Shoot Prep</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#8F9BB3] uppercase tracking-wider mb-2">
                    Current Challenges / Past Injuries (Optional)
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Tell us what has been holding you back, any injuries, or what your dream physique looks like..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-[#070A0F] border border-[#1D2638] rounded-xl px-4 py-3 text-white placeholder-slate-600 focus:outline-none focus:border-[#FF5722] text-sm transition-colors"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-[#FF5722] to-[#F4511E] text-black font-black text-sm uppercase tracking-wider hover:shadow-[0_0_30px_rgba(255,87,34,0.6)] transition-all flex items-center justify-center gap-2 hover:scale-[1.01]"
                >
                  <span>SUBMIT APPLICATION & LOCK IN SPOT</span>
                  <ArrowRight className="w-5 h-5 text-black" />
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}
