import React, { useState } from "react";
import { MessageCircle, Phone, Mail, MapPin, Clock, Send, CheckCircle2, Dumbbell, Calendar, ExternalLink } from "lucide-react";

export default function FitContact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    goal: "Heavy Strength & Muscle Building",
    preferredTime: "Evening Rush (5:00 PM - 10:00 PM)",
    message: ""
  });

  const [submitted, setSubmitted] = useState(false);

  const whatsappBaseUrl = "https://wa.me/918815926552";

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setFormData({
      name: "",
      phone: "",
      email: "",
      goal: "Heavy Strength & Muscle Building",
      preferredTime: "Evening Rush (5:00 PM - 10:00 PM)",
      message: ""
    });
    setSubmitted(false);
  };

  const directWhatsAppUrl = `${whatsappBaseUrl}?text=Hi%20FitKit%20Team!%20My%20name%20is%20${encodeURIComponent(
    formData.name || "Athlete"
  )}.%20I'm%20interested%20in%20${encodeURIComponent(
    formData.goal
  )}%20training%20for%20the%20${encodeURIComponent(formData.preferredTime)}%20slot.`;

  return (
    <section id="contact" className="py-24 bg-[#0a0a0a] relative scroll-mt-20 border-t border-[#1f1f1f] w-full max-w-full overflow-hidden">
      {/* Background glow accents */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 max-w-full h-96 bg-[#FF2E4C]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-flex items-center px-4 py-1 rounded-full border border-[#FF2E4C]/50 bg-[#FF2E4C]/10 text-[#FF2E4C] text-[11px] font-extrabold tracking-widest uppercase mb-4 shadow-[0_0_12px_rgba(255,46,76,0.25)]">
            CONTACT & LOCATION
          </span>
          <h2 className="font-heading text-4xl sm:text-6xl font-black uppercase tracking-tight text-white mb-4">
            START YOUR <span className="text-[#FF2E4C] red-glow">JOURNEY TODAY</span>
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base leading-relaxed font-normal">
            Have questions about our 120+ machines, certified coaches, or membership packages?
            Drop us a message below or connect directly on WhatsApp for an instant response.
          </p>
          <div className="w-12 h-1 bg-[#FF2E4C] rounded-full mt-5 mx-auto shadow-[0_0_10px_#FF2E4C]" />
        </div>

        {/* Contact Container Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Left Column: Direct Contact Details & WhatsApp Card (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-6">
            
            {/* WhatsApp Direct Highlight Box */}
            <div className="p-7 rounded-2xl bg-gradient-to-br from-[#111111] to-[#0d0d0d] border border-[#1f1f1f] shadow-2xl relative overflow-hidden group">
              <div className="absolute -top-12 -right-12 w-32 h-32 bg-[#25D366]/10 rounded-full blur-2xl group-hover:scale-125 transition-transform" />
              
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-[#25D366]/15 border border-[#25D366]/40 flex items-center justify-center text-[#25D366] shrink-0">
                  <MessageCircle className="w-6 h-6 fill-current" />
                </div>
                <div>
                  <span className="text-[11px] font-black uppercase tracking-wider text-[#25D366]">FASTEST RESPONSE</span>
                  <h3 className="font-heading text-xl font-black uppercase text-white">Instant WhatsApp Chat</h3>
                </div>
              </div>

              <p className="text-xs text-neutral-400 mb-5 leading-relaxed">
                Connect directly with our Head Fitness Consultant. Get quick answers on timetable slots, personal training rates, and workout demo passes.
              </p>

              <a
                href={directWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 w-full py-3.5 px-4 rounded-full bg-[#25D366] hover:bg-[#1EBE5D] text-black font-extrabold text-[11px] sm:text-xs uppercase tracking-wider transition-all shadow-[0_0_20px_rgba(37,211,102,0.3)] hover:scale-[1.02] text-center"
              >
                <MessageCircle className="w-4 h-4 fill-black shrink-0" />
                <span>CHAT ON WHATSAPP (+91 8815926552)</span>
              </a>
            </div>

            {/* Contact Info Cards */}
            <div className="space-y-4">
              {/* Phone */}
              <div className="p-5 rounded-2xl bg-[#111111] border border-[#1f1f1f] flex items-center gap-4 hover:border-[#FF2E4C]/50 transition-colors">
                <div className="w-11 h-11 rounded-xl bg-[#161616] border border-[#1f1f1f] flex items-center justify-center text-[#FF2E4C] shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[10px] font-black uppercase tracking-widest text-neutral-500">Hotline Phone</p>
                  <a href="tel:+918815926552" className="font-heading text-lg font-black text-white hover:text-[#FF2E4C] transition-colors">
                    +91 88159 26552
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="p-5 rounded-2xl bg-[#111111] border border-[#1f1f1f] flex items-center gap-4 hover:border-[#FF2E4C]/50 transition-colors">
                <div className="w-11 h-11 rounded-xl bg-[#161616] border border-[#1f1f1f] flex items-center justify-center text-[#FF2E4C] shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[10px] font-black uppercase tracking-widest text-neutral-500">Official Email</p>
                  <a href="mailto:contact@fitkitgym.com" className="font-heading text-base font-black text-white hover:text-[#FF2E4C] transition-colors">
                    contact@fitkitgym.com
                  </a>
                </div>
              </div>

              {/* Location & Hours */}
              <div className="p-5 rounded-2xl bg-[#111111] border border-[#1f1f1f] flex items-start gap-4 hover:border-[#FF2E4C]/50 transition-colors">
                <div className="w-11 h-11 rounded-xl bg-[#161616] border border-[#1f1f1f] flex items-center justify-center text-[#FF2E4C] shrink-0 mt-0.5">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[10px] font-black uppercase tracking-widest text-neutral-500">Bhopal Hub Location</p>
                  <p className="text-sm font-bold text-white mb-1">
                    Near Prabhat Petrol Pump, Raisen Road, Subhash Nagar, Bhopal, MP 462023
                  </p>
                  <p className="text-xs text-neutral-400 flex items-center gap-1.5 font-medium">
                    <Clock className="w-3.5 h-3.5 text-[#FF2E4C]" />
                    Mon - Sun: 5:30 AM – 10:30 PM
                  </p>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Contact & Booking Form (7 cols) */}
          <div className="lg:col-span-7 bg-[#0E1219] border border-[#1E2533] rounded-3xl p-8 sm:p-10 shadow-2xl relative">
            
            {submitted ? (
              <div className="py-12 flex flex-col items-center text-center animate-fadeIn">
                <div className="w-20 h-20 rounded-full bg-[#25D366]/20 border-2 border-[#25D366] flex items-center justify-center text-[#25D366] mb-6 shadow-[0_0_30px_rgba(37,211,102,0.4)]">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <span className="text-xs font-black uppercase tracking-widest text-[#25D366] mb-2">
                  MESSAGE SENT SUCCESSFULLY
                </span>
                <h3 className="font-heading text-3xl font-black text-white uppercase mb-4">
                  WE WILL CONTACT YOU SHORTLY!
                </h3>
                <p className="text-[#8F9BB3] text-sm max-w-md mb-8 leading-relaxed">
                  Thank you, <span className="text-white font-bold">{formData.name || "Athlete"}</span>. Our senior fitness consultant has received your message and will reach out via phone/email to set up your free consultation.
                </p>

                <div className="flex flex-wrap gap-4 justify-center">
                  <button
                    onClick={handleReset}
                    className="px-6 py-3 rounded-xl bg-[#151B26] hover:bg-[#1E2533] border border-white/20 text-white font-black text-xs uppercase tracking-wider transition-all"
                  >
                    SEND ANOTHER MESSAGE
                  </button>
                  <a
                    href={directWhatsAppUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 rounded-xl bg-[#25D366] text-black font-black text-xs uppercase tracking-wider transition-all flex items-center gap-2"
                  >
                    <MessageCircle className="w-4 h-4 fill-black" />
                    <span>OPEN ON WHATSAPP</span>
                  </a>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <h3 className="font-heading text-2xl sm:text-3xl font-black uppercase text-white mb-2">
                    Send Us A Message
                  </h3>
                  <p className="text-xs text-[#8F9BB3]">
                    Fill in your details and our team will get in touch with you within 2-4 hours.
                  </p>
                </div>

                {/* Name & Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] font-black uppercase tracking-wider text-white mb-2">
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. John Doe"
                      className="w-full px-4 py-3.5 rounded-xl bg-[#161616] border border-[#1f1f1f] text-white text-sm focus:outline-none focus:border-[#FF2E4C] transition-colors placeholder:text-neutral-500"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-black uppercase tracking-wider text-white mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 98765 43210"
                      className="w-full px-4 py-3.5 rounded-xl bg-[#161616] border border-[#1f1f1f] text-white text-sm focus:outline-none focus:border-[#FF2E4C] transition-colors placeholder:text-neutral-500"
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label className="block text-[11px] font-black uppercase tracking-wider text-white mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    className="w-full px-4 py-3.5 rounded-xl bg-[#161616] border border-[#1f1f1f] text-white text-sm focus:outline-none focus:border-[#FF2E4C] transition-colors placeholder:text-neutral-500"
                  />
                </div>

                {/* Training Goal & Preferred Time */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] font-black uppercase tracking-wider text-white mb-2">
                      Primary Fitness Goal
                    </label>
                    <select
                      name="goal"
                      value={formData.goal}
                      onChange={handleChange}
                      className="w-full px-4 py-3.5 rounded-xl bg-[#161616] border border-[#1f1f1f] text-white text-sm focus:outline-none focus:border-[#FF2E4C] transition-colors cursor-pointer"
                    >
                      <option value="Heavy Strength & Muscle Building">Heavy Strength & Muscle Building</option>
                      <option value="Weight Loss & Lean Body">Weight Loss & Lean Body</option>
                      <option value="CrossFit & Athletic Conditioning">CrossFit & Athletic Conditioning</option>
                      <option value="1-on-1 Personal Training">1-on-1 Personal Training</option>
                      <option value="General Physical Fitness">General Physical Fitness</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-[11px] font-black uppercase tracking-wider text-white mb-2">
                      Preferred Training Time
                    </label>
                    <select
                      name="preferredTime"
                      value={formData.preferredTime}
                      onChange={handleChange}
                      className="w-full px-4 py-3.5 rounded-xl bg-[#161616] border border-[#1f1f1f] text-white text-sm focus:outline-none focus:border-[#FF2E4C] transition-colors cursor-pointer"
                    >
                      <option value="Early Morning (5:00 AM - 9:00 AM)">Early Morning (5:00 AM - 9:00 AM)</option>
                      <option value="Mid-Day (10:00 AM - 3:00 PM)">Mid-Day (10:00 AM - 3:00 PM)</option>
                      <option value="Evening Rush (5:00 PM - 10:00 PM)">Evening Rush (5:00 PM - 10:00 PM)</option>
                      <option value="Weekend Flexible">Weekend Flexible</option>
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-[11px] font-black uppercase tracking-wider text-white mb-2">
                    Message / Questions (Optional)
                  </label>
                  <textarea
                    rows={4}
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your fitness background, any injuries, or what you'd like to achieve..."
                    className="w-full px-4 py-3 rounded-xl bg-[#161616] border border-[#1f1f1f] text-white text-sm focus:outline-none focus:border-[#FF2E4C] transition-colors placeholder:text-neutral-500 resize-none"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full py-4 px-4 rounded-full bg-gradient-to-r from-[#FF2E4C] to-[#E63946] text-white font-extrabold text-xs sm:text-sm uppercase tracking-wider transition-all duration-300 shadow-[0_0_25px_rgba(255,46,76,0.4)] hover:shadow-[0_0_35px_rgba(255,46,76,0.65)] hover:scale-[1.01] flex items-center justify-center gap-2 group cursor-pointer text-center"
                >
                  <span>SUBMIT MESSAGE / BOOK CONSULTATION</span>
                  <Send className="w-4 h-4 stroke-[2.5] group-hover:translate-x-1 transition-transform shrink-0" />
                </button>
              </form>
            )}

          </div>

        </div>

        {/* 🗺️ Interactive Google Map Embed: Prabhat Petrol Pump, Bhopal */}
        <div className="mt-14 rounded-3xl bg-[#0E1219] border border-[#1E2533] p-5 sm:p-8 shadow-2xl relative overflow-hidden group">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <div className="flex items-center gap-3.5">
              <div className="w-12 h-12 rounded-2xl bg-[#E63946]/10 border border-[#E63946]/30 flex items-center justify-center text-[#E63946] shadow-[0_0_20px_rgba(230,57,70,0.2)]">
                <MapPin className="w-6 h-6 stroke-[2.2]" />
              </div>
              <div>
                <span className="text-[10px] font-black uppercase tracking-widest text-[#E63946]">VISIT US IN PERSON</span>
                <h4 className="font-heading text-2xl font-black uppercase text-white tracking-wide">
                  FITKIT GYM BHOPAL LOCATION
                </h4>
                <p className="text-xs text-[#8F9BB3] mt-0.5">
                  Near Prabhat Petrol Pump, Raisen Road, Subhash Nagar, Bhopal, Madhya Pradesh 462023
                </p>
              </div>
            </div>

            <a
              href="https://www.google.com/maps/search/?api=1&query=Prabhat+Petrol+Pump+Bhopal"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#E63946] hover:bg-[#d62839] text-white text-[11px] sm:text-xs font-black uppercase tracking-wider transition-all duration-200 shadow-[0_0_25px_rgba(230,57,70,0.4)] hover:shadow-[0_0_35px_rgba(230,57,70,0.6)] hover:scale-105 self-stretch sm:self-auto text-center cursor-pointer"
            >
              <span>GET DIRECTIONS ON GOOGLE MAPS</span>
              <ExternalLink className="w-4 h-4 shrink-0" />
            </a>
          </div>

          {/* Google Map Frame */}
          <div className="w-full h-80 sm:h-[420px] rounded-2xl overflow-hidden border border-[#1E2533] shadow-inner relative">
            <iframe
              title="Prabhat Petrol Pump Bhopal Google Map"
              src="https://maps.google.com/maps?q=Prabhat+Petrol+Pump+Raisen+Road+Bhopal+Madhya+Pradesh&t=&z=16&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full"
            />
          </div>
        </div>

      </div>
    </section>
  );
}
