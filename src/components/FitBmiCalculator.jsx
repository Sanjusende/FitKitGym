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
    <section id="bmi" className="py-24 bg-[#080A0E] border-t border-[#1E2533] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="flex items-center justify-center gap-2 mb-2">
            <span className="w-6 h-[2px] bg-[#E63946]" />
            <span className="text-[#E63946] text-xs font-black uppercase tracking-widest">
              BODY METRICS
            </span>
            <span className="w-6 h-[2px] bg-[#E63946]" />
          </div>
          <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-white">
            Calculate Your BMI
          </h2>
          <p className="text-xs sm:text-sm text-[#8F9BB3] mt-2">
            Determine your baseline body composition and let us design your custom caloric strategy.
          </p>
        </div>

        {/* 2 Column: Calculator & BMI Chart (Exact match to reference) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Interactive Calculator Form */}
          <div className="lg:col-span-7 bg-[#0E1219] border border-[#1E2533] rounded-2xl p-7 sm:p-10 shadow-2xl">
            <div className="flex items-center gap-2 mb-6">
              <Calculator className="w-5 h-5 text-[#E63946]" />
              <h3 className="font-heading text-2xl font-black uppercase text-white">
                Enter Your Biometrics
              </h3>
            </div>

            <form onSubmit={calculateBMI} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-bold text-[#8F9BB3] uppercase tracking-wider mb-2">
                    Height (CM)
                  </label>
                  <input
                    type="number"
                    required
                    placeholder="175"
                    value={height}
                    onChange={(e) => setHeight(e.target.value)}
                    className="w-full bg-[#080A0E] border border-[#1E2533] rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-[#E63946] transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#8F9BB3] uppercase tracking-wider mb-2">
                    Weight (KG)
                  </label>
                  <input
                    type="number"
                    required
                    placeholder="72"
                    value={weight}
                    onChange={(e) => setWeight(e.target.value)}
                    className="w-full bg-[#080A0E] border border-[#1E2533] rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-[#E63946] transition-colors"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-4 rounded-xl bg-[#E63946] hover:bg-[#D62828] text-white font-black text-xs uppercase tracking-wider transition-all shadow-[0_0_20px_rgba(230,57,70,0.4)] flex items-center justify-center gap-2"
              >
                <span>CALCULATE BMI NOW</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>

            {bmi && (
              <div className="mt-8 p-6 rounded-xl bg-[#080A0E] border border-[#E63946]/50 flex flex-col sm:flex-row items-center justify-between gap-4 animate-fadeIn">
                <div>
                  <p className="text-xs font-bold text-[#8F9BB3] uppercase tracking-wider">Your Calculated BMI</p>
                  <p className="font-heading text-4xl font-black text-[#E63946] mt-1">{bmi}</p>
                  <p className="text-xs text-white font-semibold mt-0.5">{status}</p>
                </div>
                <button
                  onClick={onOpenJoin}
                  className="px-5 py-3 rounded-lg bg-white text-black font-black text-xs uppercase tracking-wider hover:bg-slate-200 transition-colors flex-shrink-0"
                >
                  Get Custom Diet Plan
                </button>
              </div>
            )}
          </div>

          {/* Right Column: BMI Reference Table (Exact match to reference) */}
          <div className="lg:col-span-5 bg-[#0E1219] border border-[#1E2533] rounded-2xl p-7 sm:p-10 shadow-2xl">
            <div className="flex items-center gap-2 mb-6">
              <Activity className="w-5 h-5 text-[#E63946]" />
              <h3 className="font-heading text-2xl font-black uppercase text-white">
                BMI Reference Chart
              </h3>
            </div>

            <table className="w-full text-left text-xs sm:text-sm">
              <thead>
                <tr className="border-b border-[#1E2533] text-[#8F9BB3] uppercase tracking-wider font-bold">
                  <th className="py-3 px-2">BMI Category</th>
                  <th className="py-3 px-2 text-right">Weight Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#1E2533]/70 font-medium">
                <tr className="hover:bg-[#151B26]/40 transition-colors">
                  <td className="py-3.5 px-2 text-slate-300">Below 18.5</td>
                  <td className="py-3.5 px-2 text-right text-blue-400 font-bold">Underweight</td>
                </tr>
                <tr className="hover:bg-[#151B26]/40 transition-colors bg-[#E63946]/5">
                  <td className="py-3.5 px-2 text-white font-bold">18.5 - 24.9</td>
                  <td className="py-3.5 px-2 text-right text-[#25D366] font-bold">Healthy / Normal</td>
                </tr>
                <tr className="hover:bg-[#151B26]/40 transition-colors">
                  <td className="py-3.5 px-2 text-slate-300">25.0 - 29.9</td>
                  <td className="py-3.5 px-2 text-right text-amber-400 font-bold">Overweight</td>
                </tr>
                <tr className="hover:bg-[#151B26]/40 transition-colors">
                  <td className="py-3.5 px-2 text-slate-300">30.0 and Above</td>
                  <td className="py-3.5 px-2 text-right text-[#E63946] font-bold">Obese</td>
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
