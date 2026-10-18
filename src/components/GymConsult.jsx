import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, CheckCircle, ArrowRight, Calendar, User, Phone } from "lucide-react";
import { Rhombus } from "./GeometricAccents";
import { gymConfig } from "../data/gymData";

export default function GymConsult() {
  const [modalOpen, setModalOpen] = useState(false);
  const [sessionData, setSessionData] = useState({
    name: "",
    phone: "",
    goal: "Fat Loss & Athletic Conditioning",
    division: "Men's Army",
    slot: "Morning (6:00 AM - 9:00 AM)",
  });
  const [booked, setBooked] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!sessionData.name.trim() || !sessionData.phone.trim()) {
      alert("Please enter your name and phone number.");
      return;
    }

    const message = `*ARMOURED GYM - CONSULTATION BOOKING*\n• *Name:* ${sessionData.name}\n• *Phone:* ${sessionData.phone}\n• *Goal:* ${sessionData.goal}\n• *Division:* ${sessionData.division}\n• *Slot:* ${sessionData.slot}`;
    const waUrl = `https://wa.me/${gymConfig.whatsappCleanNumber}?text=${encodeURIComponent(message)}`;

    setBooked(true);
    window.open(waUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <section id="consult" className="py-24 bg-white text-[#09090D] relative overflow-hidden">
      {/* Iconic Floating Rhombus Diamonds from Reference Image */}
      <div className="absolute top-12 left-10 hidden lg:block pointer-events-none">
        <Rhombus size="xl" color="pink" />
      </div>
      <div className="absolute top-20 right-16 hidden lg:block pointer-events-none">
        <Rhombus size="md" color="pink" />
      </div>
      <div className="absolute bottom-16 right-10 hidden xl:block pointer-events-none">
        <Rhombus size="xxl" color="outline-black" />
      </div>
      <div className="absolute bottom-12 left-16 hidden lg:block pointer-events-none">
        <Rhombus size="sm" color="outline-pink" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        {/* Top Eyebrow Flanked by Lines from Reference */}
        <div className="flex items-center justify-center gap-4 mb-4">
          <div className="h-[2px] w-12 sm:w-20 bg-[#09090D]" />
          <span className="font-['Teko'] text-2xl sm:text-3xl font-bold uppercase tracking-[0.2em] text-[#09090D]">
            For Session Booking
          </span>
          <div className="h-[2px] w-12 sm:w-20 bg-[#09090D]" />
        </div>

        {/* Central Composition with Female Fitness Model Body Showcase & Giant Title from Reference */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 sm:gap-10 my-4">
          {/* Female Athlete Body Showcase Cutout from Reference */}
          <div className="relative w-40 sm:w-52 h-56 sm:h-72 overflow-hidden border-2 border-[#09090D] shadow-[8px_8px_0px_#FF1458] shrink-0">
            <img
              src="https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=600&q=85"
              alt="Female Athletic Fitness Model Body Showcase"
              className="w-full h-full object-cover object-top"
            />
            <div className="absolute bottom-2 left-2 right-2 bg-white/90 py-1 text-center font-mono text-[10px] font-bold text-[#09090D]">
              CERTIFIED COACH
            </div>
          </div>

          {/* Giant Headline: BOOK A CONSULT */}
          <div className="text-center md:text-left">
            <h2 className="font-['Teko'] text-6xl sm:text-8xl md:text-9xl lg:text-[130px] font-black uppercase tracking-tight text-[#09090D] leading-[0.85] mb-2">
              BOOK A <span className="text-[#FF1458]">CONSULT</span>
            </h2>

            {/* Subtitle from Reference */}
            <p className="text-base sm:text-xl md:text-2xl text-[#4B5563] max-w-lg font-medium leading-relaxed">
              Connect with customers online, book workouts and classes with ease.
            </p>
          </div>
        </div>

        {/* Pill Button from Reference: "BOOK NOW" */}
        <div className="mt-8">
          <button
            type="button"
            onClick={() => setModalOpen(true)}
            className="px-10 py-3.5 bg-[#09090D] hover:bg-[#FF1458] text-white font-['Teko'] text-2xl uppercase tracking-widest font-bold rounded-full transition-all duration-300 shadow-[0_10px_25px_rgba(0,0,0,0.3)] hover:shadow-[0_10px_30px_rgba(255,20,88,0.5)] cursor-pointer"
          >
            BOOK NOW
          </button>
        </div>
      </div>

      {/* Interactive Booking Modal */}
      <AnimatePresence>
        {modalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setModalOpen(false)}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-lg bg-white border-4 border-[#09090D] p-6 sm:p-8 shadow-[12px_12px_0px_#FF1458] z-10"
            >
              <div className="flex items-center justify-between border-b-2 border-[#09090D] pb-3 mb-6">
                <h3 className="font-['Teko'] text-3xl font-black uppercase text-[#09090D]">
                  SCHEDULE YOUR CONSULT
                </h3>
                <button
                  onClick={() => setModalOpen(false)}
                  className="p-1 hover:text-[#FF1458] text-[#09090D] cursor-pointer"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {booked ? (
                <div className="text-center py-6 space-y-4">
                  <div className="w-14 h-14 bg-[#25D366]/20 border-2 border-[#25D366] text-[#25D366] rounded-full mx-auto flex items-center justify-center">
                    <CheckCircle className="w-8 h-8" />
                  </div>
                  <h4 className="font-['Teko'] text-3xl font-bold uppercase text-[#09090D]">
                    SESSION CONFIRMED!
                  </h4>
                  <p className="text-sm text-[#4B5563]">
                    Your session request is ready and opened on WhatsApp. Our lead trainer will welcome you on the floor.
                  </p>
                  <button
                    onClick={() => {
                      setBooked(false);
                      setModalOpen(false);
                    }}
                    className="px-6 py-2 bg-[#09090D] text-white font-['Teko'] text-xl uppercase font-bold"
                  >
                    Done
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 text-left">
                  <div>
                    <label className="block text-xs font-mono font-bold uppercase text-[#09090D] mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={sessionData.name}
                      onChange={(e) => setSessionData({ ...sessionData, name: e.target.value })}
                      placeholder="e.g. Rahul Sharma"
                      className="w-full px-3.5 py-2.5 bg-[#F4F4F6] border-2 border-[#09090D] text-sm text-[#09090D] focus:outline-none focus:border-[#FF1458]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono font-bold uppercase text-[#09090D] mb-1">
                      WhatsApp Phone *
                    </label>
                    <input
                      type="tel"
                      required
                      value={sessionData.phone}
                      onChange={(e) => setSessionData({ ...sessionData, phone: e.target.value })}
                      placeholder="e.g. +91 98765 43210"
                      className="w-full px-3.5 py-2.5 bg-[#F4F4F6] border-2 border-[#09090D] text-sm text-[#09090D] focus:outline-none focus:border-[#FF1458]"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-mono font-bold uppercase text-[#09090D] mb-1">
                        Division
                      </label>
                      <select
                        value={sessionData.division}
                        onChange={(e) => setSessionData({ ...sessionData, division: e.target.value })}
                        className="w-full px-3 py-2.5 bg-[#F4F4F6] border-2 border-[#09090D] text-xs font-bold text-[#09090D]"
                      >
                        <option value="Men's Army">Men's Army</option>
                        <option value="Women's Army">Women's Army</option>
                        <option value="Olympics Athletics">Olympics Athletics</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-mono font-bold uppercase text-[#09090D] mb-1">
                        Time Slot
                      </label>
                      <select
                        value={sessionData.slot}
                        onChange={(e) => setSessionData({ ...sessionData, slot: e.target.value })}
                        className="w-full px-3 py-2.5 bg-[#F4F4F6] border-2 border-[#09090D] text-xs font-bold text-[#09090D]"
                      >
                        <option value="Morning (6-9 AM)">Morning (6-9 AM)</option>
                        <option value="Afternoon (12-3 PM)">Afternoon (12-3 PM)</option>
                        <option value="Evening (5-9 PM)">Evening (5-9 PM)</option>
                      </select>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full mt-2 py-3.5 bg-[#FF1458] hover:bg-[#E00C4B] text-white font-['Teko'] text-2xl uppercase tracking-widest font-black transition-all shadow-[4px_4px_0px_#09090D] flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>CONFIRM CONSULTATION</span>
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
