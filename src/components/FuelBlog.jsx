import React from "react";
import { blogPosts } from "../data/fuelBuiltData";
import { ArrowRight, Clock } from "lucide-react";

export default function FuelBlog({ onOpenBooking }) {
  return (
    <section id="blog" className="py-24 bg-[#050608] border-t border-[#1E2533] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="flex items-center justify-center gap-2 mb-2">
            <span className="w-6 h-[2px] bg-[#E63946]" />
            <span className="text-[#E63946] text-xs font-black uppercase tracking-widest">
              FITKIT TRAINING JOURNAL
            </span>
            <span className="w-6 h-[2px] bg-[#E63946]" />
          </div>
          <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-white">
            Latest News & Articles
          </h2>
          <p className="text-xs sm:text-sm text-[#8F9BB3] mt-2">
            Actionable science on hypertrophy, periodization, and metabolic nutrition.
          </p>
        </div>

        {/* 3 Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {blogPosts.map((post) => (
            <article
              key={post.id}
              className="rounded-2xl bg-[#0E1219] border border-[#1E2533] p-6 flex flex-col justify-between hover:border-[#E63946]/50 transition-all duration-300 group shadow-xl"
            >
              <div>
                <div className="flex items-center justify-between text-[11px] font-bold text-[#E63946] uppercase tracking-wider mb-3">
                  <span>{post.category}</span>
                  <span className="text-[#8F9BB3] flex items-center gap-1">
                    <Clock className="w-3 h-3 text-[#E63946]" /> {post.readTime}
                  </span>
                </div>

                <h3 className="font-heading text-xl font-black text-white uppercase group-hover:text-[#E63946] transition-colors leading-snug mb-3">
                  {post.title}
                </h3>

                <p className="text-xs text-[#8F9BB3] leading-relaxed mb-6">
                  {post.summary}
                </p>
              </div>

              <div className="pt-4 border-t border-[#1E2533] flex items-center justify-between">
                <span className="text-[11px] font-semibold text-slate-400">{post.date}</span>
                <button
                  onClick={onOpenBooking}
                  className="text-xs font-bold text-[#E63946] hover:text-white flex items-center gap-1 group-hover:translate-x-1 transition-all"
                >
                  <span>Read Article</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}
