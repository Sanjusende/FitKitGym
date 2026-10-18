import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  MessageSquare,
  Phone,
  Send,
  ExternalLink,
  CheckCircle2,
  AlertTriangle,
  Globe,
  Sparkles,
} from "lucide-react";
import { GithubIcon } from "./SocialIcons";
import SectionHeading from "./SectionHeading";
import { siteConfig } from "../data/siteConfig";
import { Rhombus } from "./GeometricAccents";

export default function Contact({ initialPackage, initialService }) {
  const [formData, setFormData] = useState({
    fullName: "",
    businessName: "",
    email: "",
    phone: "",
    service: "business-website",
    budget: "₹7,000 - ₹12,000",
    description: "",
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [generatedWhatsAppLink, setGeneratedWhatsAppLink] = useState("");
  const [generatedMailtoLink, setGeneratedMailtoLink] = useState("");

  // Update form if initialPackage or initialService is passed from other sections
  useEffect(() => {
    if (initialPackage) {
      setFormData((prev) => ({
        ...prev,
        budget:
          initialPackage.id === "starter"
            ? "₹3,000 - ₹5,000"
            : initialPackage.id === "business"
            ? "₹7,000 - ₹12,000"
            : "₹12,000+",
        description: `Hi Sanjay, I am interested in getting a quote for the "${initialPackage.name}" package (${initialPackage.startingPrice}). Here are a few details about my project: `,
      }));
    }
  }, [initialPackage]);

  useEffect(() => {
    if (initialService) {
      setFormData((prev) => ({
        ...prev,
        service: initialService,
      }));
    }
  }, [initialService]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear field error on change
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: null }));
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.fullName.trim() || formData.fullName.trim().length < 2) {
      newErrors.fullName = "Please enter your full name (at least 2 characters).";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email.trim())) {
      newErrors.email = "Please provide a valid email address.";
    }

    if (!formData.description.trim() || formData.description.trim().length < 10) {
      newErrors.description =
        "Please provide a short description of your website requirements (at least 10 characters).";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    // Build the formatted inquiry text
    const messageLines = [
      `*New Project Inquiry for SANJAY.DEV*`,
      `• *Client Name:* ${formData.fullName.trim()}`,
      formData.businessName.trim() ? `• *Business:* ${formData.businessName.trim()}` : null,
      `• *Email:* ${formData.email.trim()}`,
      formData.phone.trim() ? `• *Phone:* ${formData.phone.trim()}` : null,
      `• *Service:* ${formData.service}`,
      `• *Budget Range:* ${formData.budget}`,
      `• *Project Overview:*`,
      formData.description.trim(),
    ].filter(Boolean);

    const fullMessage = messageLines.join("\n");

    const waLink = `https://wa.me/${siteConfig.whatsappCleanNumber}?text=${encodeURIComponent(
      fullMessage
    )}`;

    const mailtoSubject = encodeURIComponent(
      `Project Inquiry from ${formData.fullName.trim()} - SANJAY.DEV`
    );
    const mailtoBody = encodeURIComponent(fullMessage);
    const mailLink = `mailto:${siteConfig.email}?subject=${mailtoSubject}&body=${mailtoBody}`;

    setGeneratedWhatsAppLink(waLink);
    setGeneratedMailtoLink(mailLink);
    setSubmitted(true);

    // Open WhatsApp in a new tab by default
    window.open(waLink, "_blank", "noopener,noreferrer");
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({
      fullName: "",
      businessName: "",
      email: "",
      phone: "",
      service: "business-website",
      budget: "₹7,000 - ₹12,000",
      description: "",
    });
    setErrors({});
  };

  return (
    <section id="contact" className="py-24 bg-[#09090D] relative overflow-hidden">
      {/* Background Decorative Accents */}
      <div className="absolute top-1/3 left-0 w-80 h-80 bg-[#FF1458]/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-80 h-80 bg-[#FF1458]/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="Direct Freelance Inquiry"
          title="LET'S BUILD"
          highlight="SOMETHING GREAT"
          subtitle="Ready to discuss your new website or redesign? Share your project details below and connect directly via WhatsApp or Email."
          align="center"
          theme="dark"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mt-12 items-start">
          {/* Left Column: Direct Contact Channels & Portfolio Link */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-7 sm:p-8 bg-[#121217] border-2 border-[#272733] shadow-xl">
              <h3 className="font-['Teko'] text-3xl font-bold uppercase tracking-wider text-white mb-2">
                Direct Communication
              </h3>
              <p className="text-sm text-[#A1A1AA] leading-relaxed mb-6">
                No tickets, no sales reps. You speak directly with the developer building your site.
              </p>

              <div className="space-y-4">
                {/* WhatsApp Direct Link */}
                <a
                  href={`https://wa.me/${siteConfig.whatsappCleanNumber}?text=${encodeURIComponent(
                    "Hi Sanjay! I'd like to talk about a website project."
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-[#181822] border border-[#272733] hover:border-[#25D366] transition-colors group"
                >
                  <div className="w-11 h-11 bg-[#25D366]/20 border border-[#25D366] text-[#25D366] flex items-center justify-center shrink-0">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-[#A1A1AA]">
                      Instant WhatsApp
                    </span>
                    <span className="text-sm sm:text-base font-bold text-white group-hover:text-[#25D366] transition-colors">
                      {siteConfig.whatsappNumber}
                    </span>
                  </div>
                </a>

                {/* Email Direct Link */}
                <a
                  href={`mailto:${siteConfig.email}?subject=Project%20Inquiry%20from%20Website`}
                  className="flex items-center gap-4 p-4 bg-[#181822] border border-[#272733] hover:border-[#FF1458] transition-colors group"
                >
                  <div className="w-11 h-11 bg-[#FF1458]/20 border border-[#FF1458] text-[#FF1458] flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-[#A1A1AA]">
                      Official Email
                    </span>
                    <span className="text-sm sm:text-base font-bold text-white group-hover:text-[#FF1458] transition-colors">
                      {siteConfig.email}
                    </span>
                  </div>
                </a>

                {/* Live Portfolio Link (From Prompt) */}
                <a
                  href={siteConfig.portfolioUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-[#181822] border border-[#272733] hover:border-[#FF1458] transition-colors group"
                >
                  <div className="w-11 h-11 bg-[#FF1458]/10 border border-[#FF1458]/40 text-[#FF1458] flex items-center justify-center shrink-0">
                    <Globe className="w-5 h-5" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-[#A1A1AA]">
                      Existing Portfolio
                    </span>
                    <span className="text-sm sm:text-base font-bold text-white group-hover:text-[#FF1458] transition-colors flex items-center gap-1.5">
                      <span>sanjay-sportfolio.vercel.app</span>
                      <ExternalLink className="w-3.5 h-3.5 text-[#FF1458]" />
                    </span>
                  </div>
                </a>

                {/* GitHub Link */}
                <a
                  href={siteConfig.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-[#181822] border border-[#272733] hover:border-white transition-colors group"
                >
                  <div className="w-11 h-11 bg-[#20202C] border border-[#2E2E3E] text-white flex items-center justify-center shrink-0">
                    <GithubIcon className="w-5 h-5" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-[#A1A1AA]">
                      Source Repositories
                    </span>
                    <span className="text-sm sm:text-base font-bold text-white group-hover:text-white transition-colors">
                      github.com/sanjay-dev
                    </span>
                  </div>
                </a>
              </div>
            </div>

            {/* Availability Notice */}
            <div className="p-5 bg-[#121217] border border-[#272733] flex items-center gap-3">
              <Rhombus size="xs" color="pink" />
              <p className="text-xs text-[#A1A1AA] leading-relaxed">
                Currently booking clients for this month. Inquiries typically receive a reply within 2 to 4 hours.
              </p>
            </div>
          </div>

          {/* Right Column: Contact Form or Post-Submit Screen */}
          <div className="lg:col-span-7 bg-[#121217] border-2 border-[#272733] p-7 sm:p-10 shadow-xl relative">
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-8 text-center space-y-6"
              >
                <div className="w-16 h-16 bg-[#25D366]/20 border-2 border-[#25D366] text-[#25D366] rounded-full mx-auto flex items-center justify-center">
                  <CheckCircle2 className="w-8 h-8" />
                </div>

                <div>
                  <h3 className="font-['Teko'] text-4xl sm:text-5xl font-bold uppercase text-white leading-none">
                    INQUIRY PREPARED!
                  </h3>
                  <p className="text-sm text-[#A1A1AA] max-w-md mx-auto mt-2">
                    Your project details have been formatted. We attempted to open WhatsApp directly. If it didn't open automatically, use the buttons below:
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 max-w-md mx-auto">
                  <a
                    href={generatedWhatsAppLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto py-3.5 px-6 bg-[#25D366] hover:bg-[#20ba59] text-white font-['Teko'] text-xl uppercase tracking-wider font-bold transition-all flex items-center justify-center gap-2"
                  >
                    <MessageSquare className="w-5 h-5" />
                    <span>Open in WhatsApp</span>
                  </a>

                  <a
                    href={generatedMailtoLink}
                    className="w-full sm:w-auto py-3.5 px-6 bg-[#1B1B26] border border-[#2C2C3D] hover:border-[#FF1458] text-white font-['Teko'] text-xl uppercase tracking-wider font-bold transition-all flex items-center justify-center gap-2"
                  >
                    <Mail className="w-5 h-5 text-[#FF1458]" />
                    <span>Send via Email</span>
                  </a>
                </div>

                <div className="pt-6 border-t border-[#22222F]">
                  <button
                    type="button"
                    onClick={handleReset}
                    className="text-xs uppercase font-mono tracking-widest text-[#A1A1AA] hover:text-[#FF1458] transition-colors cursor-pointer"
                  >
                    ← Edit or Submit Another Inquiry
                  </button>
                </div>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                <div className="border-b border-[#22222F] pb-4 mb-4">
                  <h3 className="font-['Teko'] text-3xl font-bold uppercase tracking-wider text-white">
                    Project Inquiry Form
                  </h3>
                  <p className="text-xs text-[#A1A1AA]">
                    Fill in your details below. No backend database required—this seamlessly generates a direct WhatsApp / Email message.
                  </p>
                </div>

                {/* Row 1: Full Name & Business Name */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="fullName"
                      className="block text-xs font-mono uppercase tracking-wider text-[#E4E4E7] mb-1.5 font-bold"
                    >
                      Full Name <span className="text-[#FF1458]">*</span>
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="e.g. Rahul Sharma"
                      className={`w-full px-4 py-3 bg-[#09090D] border ${
                        errors.fullName ? "border-[#FF1458]" : "border-[#272733]"
                      } text-white text-sm focus:outline-none focus:border-[#FF1458] transition-colors placeholder-[#52525B]`}
                    />
                    {errors.fullName && (
                      <p className="text-[11px] text-[#FF1458] mt-1 flex items-center gap-1">
                        <AlertTriangle className="w-3 h-3" />
                        <span>{errors.fullName}</span>
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="businessName"
                      className="block text-xs font-mono uppercase tracking-wider text-[#A1A1AA] mb-1.5"
                    >
                      Business Name <span className="text-[#71717A]">(Optional)</span>
                    </label>
                    <input
                      type="text"
                      id="businessName"
                      name="businessName"
                      value={formData.businessName}
                      onChange={handleChange}
                      placeholder="e.g. IronPulse Gym / Apex Coaching"
                      className="w-full px-4 py-3 bg-[#09090D] border border-[#272733] text-white text-sm focus:outline-none focus:border-[#FF1458] transition-colors placeholder-[#52525B]"
                    />
                  </div>
                </div>

                {/* Row 2: Email & Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-xs font-mono uppercase tracking-wider text-[#E4E4E7] mb-1.5 font-bold"
                    >
                      Email Address <span className="text-[#FF1458]">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="e.g. rahul@business.com"
                      className={`w-full px-4 py-3 bg-[#09090D] border ${
                        errors.email ? "border-[#FF1458]" : "border-[#272733]"
                      } text-white text-sm focus:outline-none focus:border-[#FF1458] transition-colors placeholder-[#52525B]`}
                    />
                    {errors.email && (
                      <p className="text-[11px] text-[#FF1458] mt-1 flex items-center gap-1">
                        <AlertTriangle className="w-3 h-3" />
                        <span>{errors.email}</span>
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-xs font-mono uppercase tracking-wider text-[#A1A1AA] mb-1.5"
                    >
                      Phone Number <span className="text-[#71717A]">(WhatsApp Preferred)</span>
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="e.g. +91 98765 43210"
                      className="w-full px-4 py-3 bg-[#09090D] border border-[#272733] text-white text-sm focus:outline-none focus:border-[#FF1458] transition-colors placeholder-[#52525B]"
                    />
                  </div>
                </div>

                {/* Row 3: Required Service & Budget Range Dropdowns */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="service"
                      className="block text-xs font-mono uppercase tracking-wider text-[#E4E4E7] mb-1.5 font-bold"
                    >
                      Required Service <span className="text-[#FF1458]">*</span>
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-[#09090D] border border-[#272733] text-white text-sm focus:outline-none focus:border-[#FF1458] transition-colors cursor-pointer"
                    >
                      <option value="business-website">Business Website (Custom Presence)</option>
                      <option value="landing-page">High-Converting Landing Page</option>
                      <option value="website-redesign">Outdated Website Redesign</option>
                      <option value="website-maintenance">Maintenance & Support Retainer</option>
                      <option value="other-consultation">Other / Custom Requirement</option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="budget"
                      className="block text-xs font-mono uppercase tracking-wider text-[#E4E4E7] mb-1.5 font-bold"
                    >
                      Approximate Budget <span className="text-[#FF1458]">*</span>
                    </label>
                    <select
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-[#09090D] border border-[#272733] text-white text-sm focus:outline-none focus:border-[#FF1458] transition-colors cursor-pointer"
                    >
                      <option value="₹3,000 - ₹5,000">₹3,000 - ₹5,000 (Starter Tier)</option>
                      <option value="₹7,000 - ₹12,000">₹7,000 - ₹12,000 (Business Tier)</option>
                      <option value="₹12,000 - ₹25,000">₹12,000 - ₹25,000 (Custom Scope)</option>
                      <option value="₹25,000+">₹25,000+ (Comprehensive Web App)</option>
                      <option value="Undecided">Undecided / Let's Discuss</option>
                    </select>
                  </div>
                </div>

                {/* Row 4: Project Description */}
                <div>
                  <label
                    htmlFor="description"
                    className="block text-xs font-mono uppercase tracking-wider text-[#E4E4E7] mb-1.5 font-bold"
                  >
                    Project Description & Goals <span className="text-[#FF1458]">*</span>
                  </label>
                  <textarea
                    id="description"
                    name="description"
                    rows="4"
                    value={formData.description}
                    onChange={handleChange}
                    placeholder="Briefly describe what your business does, any reference websites you like, and the main pages or features you need..."
                    className={`w-full px-4 py-3 bg-[#09090D] border ${
                      errors.description ? "border-[#FF1458]" : "border-[#272733]"
                    } text-white text-sm focus:outline-none focus:border-[#FF1458] transition-colors placeholder-[#52525B] resize-y`}
                  />
                  {errors.description && (
                    <p className="text-[11px] text-[#FF1458] mt-1 flex items-center gap-1">
                      <AlertTriangle className="w-3 h-3" />
                      <span>{errors.description}</span>
                    </p>
                  )}
                </div>

                {/* Submit Action */}
                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-4 px-6 bg-[#FF1458] hover:bg-[#E00C4B] text-white font-['Teko'] text-2xl uppercase tracking-widest font-bold shadow-[0_0_25px_rgba(255,20,88,0.4)] transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Send className="w-5 h-5" />
                    <span>Submit & Connect on WhatsApp</span>
                  </button>
                  <p className="text-[11px] text-[#A1A1AA] text-center mt-2.5 font-mono">
                    Instant client-side verification • No backend storage • Opens direct chat
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
