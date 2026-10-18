import React, { useState } from "react";
import FitNavbar from "./components/FitNavbar";
import FitFooter from "./components/FitFooter";
import FuelBookingModal from "./components/FuelBookingModal";
import HomePage from "./pages/HomePage";

export default function App() {
  const [isJoinOpen, setIsJoinOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState({ name: "FITKIT Pro Athlete Pass", price: "$49/mo" });

  const handleOpenJoin = () => {
    setIsJoinOpen(true);
  };

  const handleSelectPlan = (plan) => {
    setSelectedPlan(plan);
    setIsJoinOpen(true);
  };

  const handleCloseJoin = () => {
    setIsJoinOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white flex flex-col selection:bg-[#FF2E4C] selection:text-white font-sans">
      {/* 1. Header Navigation Bar */}
      <FitNavbar onOpenJoin={handleOpenJoin} />

      {/* 2. Configurable Dynamic Page Layout (Controlled via src/config/pageSections.js) */}
      <main className="flex-1">
        <HomePage onOpenJoin={handleOpenJoin} onSelectPlan={handleSelectPlan} />
      </main>

      {/* 3. Footer with Hotline, Newsletter, and Social Links */}
      <FitFooter />

      {/* 4. Free Class & Consultation Modal */}
      <FuelBookingModal
        isOpen={isJoinOpen}
        onClose={handleCloseJoin}
        selectedPlan={selectedPlan}
      />
    </div>
  );
}
