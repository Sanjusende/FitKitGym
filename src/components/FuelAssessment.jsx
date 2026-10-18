import React, { useState } from "react";
import { Sparkles, ArrowRight, CheckCircle2, RotateCcw, Target, Dumbbell, Zap } from "lucide-react";
import { fuelBuiltConfig } from "../data/fuelBuiltData";

export default function FuelAssessment({ onOpenBookingWithData }) {
  const [step, setStep] = useState(1);
  const [goal, setGoal] = useState("fat-loss");
  const [level, setLevel] = useState("intermediate");
  const [days, setDays] = useState("4-5");
  const [calculated, setCalculated] = useState(false);

  const handleCalculate = () => {
    setCalculated(true);
  };

  const resetQuiz = () => {
    setStep(1);
    setCalculated(false);
  };

  // Dynamic recommendation logic
  const getRecommendation = () => {
    if (goal === "fat-loss") {
      return {
        title: "Aggressive Fat Loss & Metabolic Shield",
        estTime: "12 - 16 Weeks",
        strategy: "Moderate caloric deficit (350-500 kcal) with high protein prioritization (1g/lb) and upper/lower strength split to preserve lean muscle tissue while incinerating subcutaneous fat.",
        package: "Performance Plan",
        highlight: "Expected 15-24 lbs fat reduction"
      };
    } else if (goal === "muscle") {
      return {
        title: "Clean Hypertrophy & Progressive Strength",
        estTime: "16 - 20 Weeks",
        strategy: "Slight caloric surplus (250-300 kcal) paired with periodized mesocycles focusing on mechanical tension and compound lifts with custom rest intervals.",
        package: "Performance Plan",
        highlight: "Expected 10-15 lbs dense lean mass"
      };
    } else {
      return {
        title: "Body Recomposition & Peak Athletic Conditioning",
        estTime: "14 - 18 Weeks",
        strategy: "Calorie cycling around training days, high-intensity intervals, and functional mobility work to simultaneously drop body fat percentage and chisel muscular definition.",
        package: "Elite Plan",
        highlight: "Total athletic overhaul & core sculpting"
      };
    }
  };

  const rec = getRecommendation();

  return (
    <section id="assessment" className="py-20 bg-[#070A0F] border-t border-[#1D2638] relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0D131F] border border-[#1D2638] text-xs font-bold uppercase tracking-widest text-[#FF5722] mb-3">
            <Zap className="w-3.5 h-3.5 text-[#FF5722]" />
            <span>INTERACTIVE ASSESSMENT</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-5xl font-black uppercase tracking-tight text-white mb-3">
            CALCULATE YOUR <span className="text-[#FF5722]">TRANSFORMATION ROADMAP</span>
          </h2>
          <p className="text-[#8F9BB3] text-sm sm:text-base">
            Answer 3 quick questions to discover your personalized timeline, training split, and strategy recommendations.
          </p>
        </div>

        {/* Assessment Card Container */}
        <div className="bg-[#0D131F] border border-[#1D2638] rounded-2xl p-6 sm:p-10 shadow-2xl relative overflow-hidden">
          {/* Subtle Orange corner glow */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#FF5722]/10 blur-[80px] rounded-full pointer-events-none" />

          {!calculated ? (
            <div>
              {/* Progress Steps Header */}
              <div className="flex items-center justify-between mb-8 pb-4 border-b border-[#1D2638]">
                <div className="flex items-center gap-2">
                  <span className="w-7 h-7 rounded-full bg-[#FF5722] text-black font-extrabold flex items-center justify-center text-xs">
                    {step}
                  </span>
                  <span className="text-sm font-bold text-white uppercase tracking-wider">
                    {step === 1 && "Select Your Primary Fitness Target"}
                    {step === 2 && "What is Your Current Training Experience?"}
                    {step === 3 && "Weekly Training Availability"}
                  </span>
                </div>
                <span className="text-xs font-semibold text-[#8F9BB3]">Step {step} of 3</span>
              </div>

              {/* Step 1: Goal */}
              {step === 1 && (
                <div className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {[
                      {
                        id: "fat-loss",
                        title: "Drop Body Fat",
                        desc: "Lose 15-30+ lbs of stubborn fat and carve defined abs.",
                        icon: Target
                      },
                      {
                        id: "muscle",
                        title: "Build Dense Muscle",
                        desc: "Add visible size to shoulders, chest, arms & back.",
                        icon: Dumbbell
                      },
                      {
                        id: "recomp",
                        title: "Athletic Recomp",
                        desc: "Get leaner, stronger, faster and injury-proof.",
                        icon: Zap
                      }
                    ].map((item) => {
                      const Icon = item.icon;
                      const isSelected = goal === item.id;
                      return (
                        <button
                          key={item.id}
                          type="button"
                          onClick={() => setGoal(item.id)}
                          className={`p-5 rounded-xl border text-left transition-all ${
                            isSelected
                              ? "bg-[#FF5722]/10 border-[#FF5722] shadow-[0_0_20px_rgba(255,87,34,0.2)]"
                              : "bg-[#070A0F] border-[#1D2638] hover:border-slate-600"
                          }`}
                        >
                          <Icon className={`w-6 h-6 mb-3 ${isSelected ? "text-[#FF5722]" : "text-[#8F9BB3]"}`} />
                          <h4 className="font-heading text-lg font-black text-white uppercase mb-1">
                            {item.title}
                          </h4>
                          <p className="text-xs text-[#8F9BB3] leading-relaxed">{item.desc}</p>
                        </button>
                      );
                    })}
                  </div>
                  <div className="flex justify-end pt-4">
                    <button
                      onClick={() => setStep(2)}
                      className="px-6 py-3 rounded-xl bg-[#FF5722] text-black font-extrabold text-xs uppercase tracking-wider flex items-center gap-2 hover:bg-[#F4511E] transition-all"
                    >
                      <span>Next: Experience Level</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              )}

              {/* Step 2: Experience */}
              {step === 2 && (
                <div className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {[
                      {
                        id: "beginner",
                        title: "Beginner (< 1 Year)",
                        desc: "New to structured lifting or returning after a long layoff."
                      },
                      {
                        id: "intermediate",
                        title: "Intermediate (1 - 3 Yrs)",
                        desc: "Consistent lifting history, but stalled or seeking breakthrough results."
                      },
                      {
                        id: "advanced",
                        title: "Advanced (3+ Yrs)",
                        desc: "Looking for elite biomechanics, peak conditioning, or strict macro protocols."
                      }
                    ].map((item) => {
                      const isSelected = level === item.id;
                      return (
                        <button
                          key={item.id}
                          type="button"
                          onClick={() => setLevel(item.id)}
                          className={`p-5 rounded-xl border text-left transition-all ${
                            isSelected
                              ? "bg-[#FF5722]/10 border-[#FF5722] shadow-[0_0_20px_rgba(255,87,34,0.2)]"
                              : "bg-[#070A0F] border-[#1D2638] hover:border-slate-600"
                          }`}
                        >
                          <h4 className="font-heading text-lg font-black text-white uppercase mb-1">
                            {item.title}
                          </h4>
                          <p className="text-xs text-[#8F9BB3] leading-relaxed">{item.desc}</p>
                        </button>
                      );
                    })}
                  </div>
                  <div className="flex justify-between pt-4">
                    <button
                      onClick={() => setStep(1)}
                      className="px-5 py-3 rounded-xl bg-[#070A0F] text-[#8F9BB3] border border-[#1D2638] font-bold text-xs uppercase tracking-wider hover:text-white"
                    >
                      Back
                    </button>
                    <button
                      onClick={() => setStep(3)}
                      className="px-6 py-3 rounded-xl bg-[#FF5722] text-black font-extrabold text-xs uppercase tracking-wider flex items-center gap-2 hover:bg-[#F4511E] transition-all"
                    >
                      <span>Next: Commitment</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              )}

              {/* Step 3: Commitment */}
              {step === 3 && (
                <div className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {[
                      {
                        id: "3-days",
                        title: "3 Days / Week",
                        desc: "Full-body compound splits. Ideal for busy business executives or parents."
                      },
                      {
                        id: "4-5",
                        title: "4 - 5 Days / Week",
                        desc: "Optimal balance of stimulus, metabolic acceleration, and muscle recovery."
                      },
                      {
                        id: "6-days",
                        title: "6 Days / Week",
                        desc: "Push/Pull/Legs high volume athletic specialization protocol."
                      }
                    ].map((item) => {
                      const isSelected = days === item.id;
                      return (
                        <button
                          key={item.id}
                          type="button"
                          onClick={() => setDays(item.id)}
                          className={`p-5 rounded-xl border text-left transition-all ${
                            isSelected
                              ? "bg-[#FF5722]/10 border-[#FF5722] shadow-[0_0_20px_rgba(255,87,34,0.2)]"
                              : "bg-[#070A0F] border-[#1D2638] hover:border-slate-600"
                          }`}
                        >
                          <h4 className="font-heading text-lg font-black text-white uppercase mb-1">
                            {item.title}
                          </h4>
                          <p className="text-xs text-[#8F9BB3] leading-relaxed">{item.desc}</p>
                        </button>
                      );
                    })}
                  </div>
                  <div className="flex justify-between pt-4">
                    <button
                      onClick={() => setStep(2)}
                      className="px-5 py-3 rounded-xl bg-[#070A0F] text-[#8F9BB3] border border-[#1D2638] font-bold text-xs uppercase tracking-wider hover:text-white"
                    >
                      Back
                    </button>
                    <button
                      onClick={handleCalculate}
                      className="px-8 py-3.5 rounded-xl bg-gradient-to-r from-[#FF5722] to-[#F4511E] text-black font-black text-xs uppercase tracking-wider flex items-center gap-2 hover:shadow-[0_0_25px_rgba(255,87,34,0.6)] transition-all"
                    >
                      <span>GENERATE MY CUSTOM BLUEPRINT</span>
                      <Sparkles className="w-4 h-4 text-black" />
                    </button>
                  </div>
                </div>
              )}
            </div>
          ) : (
            /* Results Screen */
            <div className="space-y-6 animate-fadeIn">
              <div className="flex items-center justify-between pb-4 border-b border-[#1D2638]">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-6 h-6 text-[#25D366]" />
                  <span className="font-heading text-2xl font-black text-white uppercase">
                    YOUR CUSTOM TRANSFORMATION BLUEPRINT
                  </span>
                </div>
                <button
                  onClick={resetQuiz}
                  className="text-xs text-[#8F9BB3] hover:text-white flex items-center gap-1.5 font-semibold"
                >
                  <RotateCcw className="w-3.5 h-3.5" /> Retake
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-4 rounded-xl bg-[#070A0F] border border-[#1D2638]">
                  <p className="text-[11px] font-bold text-[#8F9BB3] uppercase tracking-wider">Estimated Timeline</p>
                  <p className="font-heading text-2xl font-black text-[#FF5722] mt-1">{rec.estTime}</p>
                  <p className="text-xs text-[#8F9BB3] mt-0.5">{rec.highlight}</p>
                </div>
                <div className="p-4 rounded-xl bg-[#070A0F] border border-[#1D2638]">
                  <p className="text-[11px] font-bold text-[#8F9BB3] uppercase tracking-wider">Recommended Plan</p>
                  <p className="font-heading text-2xl font-black text-white mt-1">{rec.package}</p>
                  <p className="text-xs text-[#8F9BB3] mt-0.5">Custom macros & 1-on-1 coaching</p>
                </div>
                <div className="p-4 rounded-xl bg-[#070A0F] border border-[#1D2638]">
                  <p className="text-[11px] font-bold text-[#8F9BB3] uppercase tracking-wider">Weekly Structure</p>
                  <p className="font-heading text-2xl font-black text-white mt-1">{days} Days / Week</p>
                  <p className="text-xs text-[#8F9BB3] mt-0.5">Calorie & recovery synchronized</p>
                </div>
              </div>

              <div className="p-5 rounded-xl bg-[#070A0F]/80 border border-[#FF5722]/30">
                <h4 className="font-heading text-xl font-black text-[#FF5722] uppercase mb-1">
                  {rec.title}
                </h4>
                <p className="text-sm text-[#8F9BB3] leading-relaxed">
                  {rec.strategy}
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
                <p className="text-xs text-[#8F9BB3]">
                  Ready to execute this plan under direct professional guidance?
                </p>
                <button
                  onClick={() => onOpenBookingWithData({ goal, level, days, rec })}
                  className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-[#FF5722] to-[#F4511E] text-black font-black text-xs uppercase tracking-wider hover:shadow-[0_0_25px_rgba(255,87,34,0.5)] transition-all flex items-center justify-center gap-2"
                >
                  <span>CLAIM THIS BLUEPRINT WITH COACH</span>
                  <ArrowRight className="w-4 h-4 text-black" />
                </button>
              </div>
            </div>
          )}

        </div>

      </div>
    </section>
  );
}
