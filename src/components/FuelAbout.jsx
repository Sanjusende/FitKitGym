import React from "react";
import { ShieldCheck, Flame, CheckCircle, XCircle, Award, Target } from "lucide-react";

export default function FuelAbout({ onOpenBooking }) {
  return (
    <section id="about" className="py-24 bg-[#04060A] border-t border-[#1D2638] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Top Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0D131F] border border-[#1D2638] text-xs font-bold uppercase tracking-widest text-[#FF5722] mb-3">
            <Award className="w-3.5 h-3.5 text-[#FF5722]" />
            <span>THE FUELBUILT STANDARD</span>
          </div>
          <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-white mb-4">
            STOP GUESSING. <span className="text-[#FF5722]">START EXECUTING.</span>
          </h2>
          <p className="text-[#8F9BB3] text-base sm:text-lg">
            90% of gym-goers stay stuck in the same physique year after year because they follow random internet routines without progressive overload or bio-individual nutrition.
          </p>
        </div>

        {/* Side-by-Side Comparison: Typical Fitness vs FuelBuilt System */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Left: The Average Gym Trap */}
          <div className="rounded-2xl bg-[#0D131F]/50 border border-red-500/20 p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-red-500/10 border border-red-500/30 flex items-center justify-center">
                  <XCircle className="w-5 h-5 text-red-400" />
                </div>
                <div>
                  <h3 className="font-heading text-2xl font-black text-white uppercase">The Generic Approach</h3>
                  <p className="text-xs text-red-400 font-bold uppercase tracking-wider">Why 90% stall and quit</p>
                </div>
              </div>

              <ul className="space-y-4">
                {[
                  "Cookie-cutter PDF workouts with zero form critique or adjustments",
                  "Extreme crash diets cutting all carbs that crash your thyroid & hormones",
                  "Aimless wandering between machines without progressive overload tracking",
                  "Zero coach accountability—you are left completely on your own",
                  "High injury risk from lifting heavy weights with poor biomechanical setup"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-[#8F9BB3]">
                    <XCircle className="w-4 h-4 text-red-400 flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right: The FuelBuilt High-Performance Protocol */}
          <div className="rounded-2xl bg-[#0D131F] border-2 border-[#FF5722]/60 p-8 shadow-[0_0_40px_rgba(255,87,34,0.15)] flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 w-48 h-48 bg-[#FF5722]/10 blur-3xl pointer-events-none" />

            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-[#FF5722]/15 border border-[#FF5722]/40 flex items-center justify-center">
                  <Flame className="w-5 h-5 text-[#FF5722]" />
                </div>
                <div>
                  <h3 className="font-heading text-2xl font-black text-white uppercase">The FuelBuilt Method</h3>
                  <p className="text-xs text-[#FF5722] font-bold uppercase tracking-wider">Predictable, scientific, lasting</p>
                </div>
              </div>

              <ul className="space-y-4">
                {[
                  "100% custom lifting programs matched to your limb lengths and movement capacity",
                  "Metabolically sustainable macro targets allowing your favorite social foods",
                  "Every single rep and set logged with scheduled deloads to prevent plateaus",
                  "Weekly detailed video feedback auditing form, measurements, and mental habits",
                  "Direct WhatsApp hotline access with your coach for immediate real-time answers"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-slate-200 font-medium">
                    <CheckCircle className="w-4 h-4 text-[#FF5722] flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Coach Ethos / Profile Feature */}
        <div className="rounded-2xl bg-[#0D131F] border border-[#1D2638] p-8 lg:p-12 flex flex-col lg:flex-row items-center gap-10 shadow-xl">
          <div className="w-full lg:w-1/3 flex justify-center">
            <div className="relative rounded-2xl overflow-hidden border border-[#1D2638] max-w-sm w-full aspect-[4/5] shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=700&q=85"
                alt="FuelBuilt Head Coach"
                className="w-full h-full object-cover object-top filter contrast-[1.05]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#070A0F] via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-4 left-4 right-4">
                <p className="font-heading text-2xl font-black text-white uppercase">Marcus Vance</p>
                <p className="text-xs text-[#FF5722] font-bold uppercase tracking-wider">Founder & Head Transformation Coach</p>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-2/3 flex flex-col items-start text-left">
            <span className="text-xs font-bold text-[#FF5722] uppercase tracking-widest mb-2">COACH'S PROMISE</span>
            <h3 className="font-heading text-3xl sm:text-4xl font-black text-white uppercase leading-tight mb-4">
              "MY JOB IS TO MAKE THIS THE LAST TIME YOU EVER HAVE TO 'START OVER'."
            </h3>
            <p className="text-base text-[#8F9BB3] leading-relaxed mb-6">
              I’ve spent the past decade coaching business owners, athletes, and busy professionals who thought they simply didn’t have the genetics or time to get in top shape. The truth is, once you eliminate wasted gym energy and feed your body scientifically, changes happen fast. We take all the guesswork off your plate.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 pt-6 border-t border-[#1D2638] w-full mb-8">
              <div>
                <p className="font-heading text-2xl font-black text-white">CSCS</p>
                <p className="text-xs text-[#8F9BB3]">Strength & Conditioning</p>
              </div>
              <div>
                <p className="font-heading text-2xl font-black text-white">CISSN</p>
                <p className="text-xs text-[#8F9BB3]">Sports Nutritionist</p>
              </div>
              <div>
                <p className="font-heading text-2xl font-black text-[#FF5722]">10+ Yrs</p>
                <p className="text-xs text-[#8F9BB3]">Coaching Experience</p>
              </div>
            </div>

            <button
              onClick={onOpenBooking}
              className="px-8 py-4 rounded-xl bg-[#FF5722] text-black font-extrabold text-xs uppercase tracking-wider hover:bg-[#F4511E] transition-all shadow-[0_0_20px_rgba(255,87,34,0.4)]"
            >
              BOOK YOUR 1-ON-1 INTRO CALL
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
