import React, { useState } from "react";
import { Calculator, ArrowRight, Activity } from "lucide-react";

export default function FitBmiCalculator({ onOpenJoin }) {
  const [height, setHeight] = useState("175");
  const [weight, setWeight] = useState("72");
  const [bmi, setBmi] = useState(null);
  const [status, setStatus] = useState("");

  const calculateBMI = (e) => {
    e.preventDefault();
    const h = parseFloat(height) / 100;
    const w = parseFloat(weight);
    if (h > 0 && w > 0) {
      const val = (w / (h * h)).toFixed(1);
      setBmi(val);
      if (val < 18.5) setStatus("Underweight");
      else if (val <= 24.9) setStatus("Healthy / Normal Weight");
      else if (val <= 29.9) setStatus("Overweight (Hypertrophy Target)");
      else setStatus("Obesity (Fat Loss Focus)");
    }
  };

  return (
    <section id="bmi" className="py-24 bg-[#0a0a0a] border-t border-[#1f1f1f] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-flex items-center px-4 py-1 rounded-full border border-[#FF2E4C]/50 bg-[#FF2E4C]/10 text-[#FF2E4C] text-[11px] font-extrabold tracking-widest uppercase mb-4 shadow-[0_0_12px_rgba(255,46,76,0.25)]">
            BODY METRICS
          </span>
          <h2 className="font-heading text-4xl sm:text-6xl font-black uppercase tracking-tight text-white leading-tight">
            CALCULATE YOUR <span className="text-[#FF2E4C] red-glow">BMI</span>
          </h2>
          <p className="text-xs sm:text-sm text-neutral-400 mt-3 font-normal">
            Determine your baseline body composition and let our coaches design your custom caloric strategy.
          </p>
          <div className="w-12 h-1 bg-[#FF2E4C] rounded-full mt-5 mx-auto shadow-[0_0_10px_#FF2E4C]" />
        </div>

        {/* 2 Column: Calculator & BMI Chart */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Interactive Calculator Form */}
          <div className="lg:col-span-7 bg-[#111111] border border-[#1f1f1f] rounded-2xl p-7 sm:p-10 shadow-2xl">
            <div className="flex items-center gap-2 mb-6">
              <Calculator className="w-5 h-5 text-[#FF2E4C]" />
              <h3 className="font-heading text-2xl font-black uppercase text-white">
                Enter Your Biometrics
              </h3>
            </div>

            <form onSubmit={calculateBMI} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-bold text-neutral-400 uppercase tracking-wider mb-2">
                    Height (CM)
                  </label>
                  <input
                    type="number"
                    required
                    placeholder="175"
                    value={height}
                    onChange={(e) => setHeight(e.target.value)}
                    className="w-full bg-[#161616] border border-[#1f1f1f] rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-[#FF2E4C] transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-neutral-400 uppercase tracking-wider mb-2">
                    Weight (KG)
                  </label>
                  <input
                    type="number"
                    required
                    placeholder="72"
                    value={weight}
                    onChange={(e) => setWeight(e.target.value)}
                    className="w-full bg-[#161616] border border-[#1f1f1f] rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-[#FF2E4C] transition-colors"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-4 rounded-full bg-gradient-to-r from-[#FF2E4C] to-[#E63946] text-white font-extrabold text-xs uppercase tracking-wider transition-all duration-300 shadow-[0_0_20px_rgba(255,46,76,0.4)] hover:shadow-[0_0_30px_rgba(255,46,76,0.65)] hover:scale-[1.01] flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>CALCULATE BMI NOW</span>
                <ArrowRight className="w-4 h-4 stroke-[2.5]" />
              </button>
            </form>

            {bmi && (
              <div className="mt-8 p-6 rounded-xl bg-[#161616] border border-[#FF2E4C]/50 flex flex-col sm:flex-row items-center justify-between gap-4 animate-fadeIn">
                <div>
                  <p className="text-xs font-bold text-neutral-400 uppercase tracking-wider">Your Calculated BMI</p>
                  <p className="font-heading text-4xl font-black text-[#FF2E4C] mt-1">{bmi}</p>
                  <p className="text-xs text-white font-semibold mt-0.5">{status}</p>
                </div>
                <button
                  onClick={onOpenJoin}
                  className="px-6 py-3 rounded-full bg-white text-black font-extrabold text-xs uppercase tracking-wider hover:bg-slate-200 transition-colors flex-shrink-0 cursor-pointer"
                >
                  Get Custom Diet Plan
                </button>
              </div>
            )}
          </div>

          {/* Right Column: BMI Reference Table */}
          <div className="lg:col-span-5 bg-[#111111] border border-[#1f1f1f] rounded-2xl p-7 sm:p-10 shadow-2xl">
            <div className="flex items-center gap-2 mb-6">
              <Activity className="w-5 h-5 text-[#FF2E4C]" />
              <h3 className="font-heading text-2xl font-black uppercase text-white">
                BMI Reference Chart
              </h3>
            </div>

            <table className="w-full text-left text-xs sm:text-sm">
              <thead>
                <tr className="border-b border-[#1f1f1f] text-neutral-400 uppercase tracking-wider font-bold">
                  <th className="py-3 px-2">BMI Category</th>
                  <th className="py-3 px-2 text-right">Weight Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#1f1f1f] font-medium">
                <tr className="hover:bg-white/5 transition-colors">
                  <td className="py-3.5 px-2 text-neutral-300">Below 18.5</td>
                  <td className="py-3.5 px-2 text-right text-blue-400 font-bold">Underweight</td>
                </tr>
                <tr className="hover:bg-white/5 transition-colors bg-[#FF2E4C]/10">
                  <td className="py-3.5 px-2 text-white font-bold">18.5 - 24.9</td>
                  <td className="py-3.5 px-2 text-right text-[#FF2E4C] font-bold">Healthy / Normal</td>
                </tr>
                <tr className="hover:bg-white/5 transition-colors">
                  <td className="py-3.5 px-2 text-neutral-300">25.0 - 29.9</td>
                  <td className="py-3.5 px-2 text-right text-amber-400 font-bold">Overweight</td>
                </tr>
                <tr className="hover:bg-white/5 transition-colors">
                  <td className="py-3.5 px-2 text-neutral-300">30.0 and Above</td>
                  <td className="py-3.5 px-2 text-right text-rose-400 font-bold">Obese</td>
                </tr>
              </tbody>
            </table>

            <p className="text-[11px] text-[#8F9BB3] mt-6 leading-relaxed">
              * Note: BMI is an overall screening metric. For athletic bodybuilders with significant dense muscular mass, body fat percentage and waist circumference provide greater diagnostic clarity.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
