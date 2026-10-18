import React from "react";
import { clientReviews } from "../data/fuelBuiltData";
import { Star } from "lucide-react";

export default function FuelReviews() {
  return (
    <section id="reviews" className="py-24 bg-[#080A0E] border-t border-[#1E2533] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="flex items-center justify-center gap-2 mb-2">
            <span className="w-6 h-[2px] bg-[#E63946]" />
            <span className="text-[#E63946] text-xs font-black uppercase tracking-widest">
              CLIENT TESTIMONIALS
            </span>
            <span className="w-6 h-[2px] bg-[#E63946]" />
          </div>
          <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-white">
            What Our Athletes Say
          </h2>
          <p className="text-xs sm:text-sm text-[#8F9BB3] mt-2">
            Real feedback from members who shattered their plateau at FitKit.
          </p>
        </div>

        {/* 3 Review Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {clientReviews.map((review) => (
            <div
              key={review.id}
              className="rounded-2xl bg-[#0E1219] border border-[#1E2533] p-7 flex flex-col justify-between hover:border-[#E63946]/50 transition-all duration-300 shadow-xl"
            >
              <div>
                {/* 5 Stars */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(review.stars)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-[#E63946] fill-[#E63946]" />
                  ))}
                </div>

                {/* Quote Icon & Text */}
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6 font-medium italic">
                  "{review.quote}"
                </p>
              </div>

              {/* Author & Avatar */}
              <div className="flex items-center justify-between pt-4 border-t border-[#1E2533]">
                <span className="text-xs font-black uppercase text-white tracking-wider">
                  {review.author}
                </span>
                <img
                  src={review.avatar}
                  alt={review.author}
                  className="w-10 h-10 rounded-full object-cover border-2 border-[#E63946]"
                />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
