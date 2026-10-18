import React, { useState } from "react";
import { X, Dumbbell, MessageCircle, CheckCircle2, ArrowRight } from "lucide-react";

export default function FuelBookingModal({ isOpen, onClose, selectedPlan, quizData }) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    time: "Morning (9am - 12pm)",
    goal: quizData?.goal ? `Goal: ${quizData.goal}` : "Total Physique Transformation"
  });
  const [confirmed, setConfirmed] = useState(false);

  if (!isOpen) return null;

  const whatsappPhone = "918815926552";
  const whatsappText = `Hi FITKIT Team! I'd like to book a class / consultation for ${encodeURIComponent(
    formData.name || "Athlete"
  )}. Preferred Plan: ${encodeURIComponent(
    selectedPlan?.name || "FITKIT Trial Pass"
  )}. Preferred Time: ${encodeURIComponent(formData.time)}.`;

  const whatsappDirectUrl = `https://wa.me/${whatsappPhone}?text=${whatsappText}`;

  const handleSubmit = (e) => {
    e.preventDefault();
    setConfirmed(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
      <div 
        className="relative w-full max-w-lg bg-[#111111] border border-[#FF2E4C]/50 rounded-2xl shadow-[0_0_60px_rgba(255,46,76,0.25)] p-6 sm:p-8 overflow-hidden text-white"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Glow corner */}
        <div className="absolute top-0 right-0 w-48 h-48 bg-[#FF2E4C]/15 blur-3xl pointer-events-none" />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full text-neutral-400 hover:text-white hover:bg-[#161616] transition-colors cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {!confirmed ? (
          <div>
            {/* Modal Header */}
            <div className="flex items-center gap-3 mb-4">
              <img
                src="/fitkit-logo.png"
                alt="FITKIT Logo"
                className="w-10 h-10 rounded-xl object-cover border border-[#FF2E4C]/50 shadow-[0_0_15px_rgba(255,46,76,0.4)]"
              />
              <div>
                <span className="text-[11px] font-black uppercase tracking-widest text-[#FF2E4C] block leading-none">
                  FITKIT™ TRIAL PASS
                </span>
                <span className="text-[9px] uppercase tracking-wider text-neutral-400 font-bold">
                  Bhopal's Premier Fitness Club
                </span>
              </div>
            </div>
            <h3 className="font-heading text-3xl font-black uppercase tracking-tight text-white mb-2">
              CLAIM YOUR FREE TRIAL PASS
            </h3>
            <p className="text-xs text-neutral-400 mb-6 font-normal">
              Experience our 120+ biomechanical machines, turf area, and expert coaching with a 1-day complimentary guest pass.
            </p>

            {selectedPlan && (
              <div className="mb-4 p-3 rounded-xl bg-[#FF2E4C]/10 border border-[#FF2E4C]/30 flex items-center justify-between text-xs">
                <span className="text-neutral-400">Selected Membership:</span>
                <span className="font-black text-[#FF2E4C] uppercase">{selectedPlan.name} ({selectedPlan.price})</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-neutral-400 uppercase tracking-wider mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Rahul Sharma"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-[#161616] border border-[#1f1f1f] rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#FF2E4C] transition-colors"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-neutral-400 uppercase tracking-wider mb-1">
                    WhatsApp / Phone
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 88159 26552"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-[#161616] border border-[#1f1f1f] rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#FF2E4C] transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-neutral-400 uppercase tracking-wider mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="you@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-[#161616] border border-[#1f1f1f] rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#FF2E4C] transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-neutral-400 uppercase tracking-wider mb-1">
                  Preferred Training Slot
                </label>
                <select
                  value={formData.time}
                  onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                  className="w-full bg-[#161616] border border-[#1f1f1f] rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#FF2E4C] transition-colors cursor-pointer"
                >
                  <option value="Morning (6am - 10am)">Morning (6am - 10am)</option>
                  <option value="Afternoon (12pm - 4pm)">Afternoon (12pm - 4pm)</option>
                  <option value="Evening (5pm - 9pm)">Evening (5pm - 9pm)</option>
                  <option value="Night (9pm - 11pm)">Night (9pm - 11pm)</option>
                </select>
              </div>

              <button
                type="submit"
                className="w-full py-4 rounded-full bg-gradient-to-r from-[#FF2E4C] to-[#E63946] text-white font-extrabold text-xs uppercase tracking-wider shadow-[0_0_20px_rgba(255,46,76,0.45)] hover:shadow-[0_0_30px_rgba(255,46,76,0.7)] transition-all flex items-center justify-center gap-2 mt-4 cursor-pointer"
              >
                <span>CONFIRM FREE PASS REGISTRATION</span>
                <ArrowRight className="w-4 h-4 stroke-[2.5]" />
              </button>
            </form>
          </div>
        ) : (
          <div className="py-8 text-center flex flex-col items-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-[#FF2E4C]/20 border border-[#FF2E4C] flex items-center justify-center">
              <CheckCircle2 className="w-8 h-8 text-[#FF2E4C]" />
            </div>
            <h4 className="font-heading text-3xl font-black text-white uppercase">
              PASS RESERVED!
            </h4>
            <p className="text-xs text-[#8F9BB3] max-w-sm">
              We've confirmed your slot for <span className="text-white font-bold">{formData.time}</span>. You can chat directly with our front desk on WhatsApp right now:
            </p>
            <a
              href={whatsappDirectUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 rounded-xl bg-[#25D366] text-black font-black text-xs uppercase tracking-wider flex items-center gap-2 hover:bg-[#20ba59] transition-all shadow-lg"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>CHAT ON WHATSAPP NOW</span>
            </a>
            <button
              onClick={() => {
                setConfirmed(false);
                onClose();
              }}
              className="text-xs text-[#8F9BB3] hover:text-white underline mt-2 cursor-pointer"
            >
              Done & Close
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
