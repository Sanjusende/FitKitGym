import React, { useState } from "react";
import { Clock, User, ArrowRight, Calendar } from "lucide-react";

export default function FitClasses({ onOpenJoin }) {
  const [activeDay, setActiveDay] = useState("Monday");

  const classes = [
    {
      id: "class-1",
      title: "Heavy Barbell Deadlift",
      time: "07:00 AM - 08:30 AM",
      trainer: "Marcus Vance",
      level: "Advanced",
      img: "/indian_rahul_after.jpg"
    },
    {
      id: "class-2",
      title: "Metabolic Conditioning & HIIT",
      time: "09:00 AM - 10:00 AM",
      trainer: "Priya Sharma",
      level: "All Levels",
      img: "/indian_priya_after.jpg"
    },
    {
      id: "class-3",
      title: "Chest & Shoulders Hypertrophy",
      time: "05:00 PM - 06:30 PM",
      trainer: "Rohan Kapoor",
      level: "Intermediate",
      img: "/indian_rohan_after.jpg"
    },
    {
      id: "class-4",
      title: "Olympic Powerlifting Mastery",
      time: "07:00 PM - 08:30 PM",
      trainer: "Marcus Vance",
      level: "Advanced",
      img: "/indian_hero_athlete.jpg"
    }
  ];

  const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

  return (
    <section id="classes" className="py-24 bg-[#050608] border-t border-[#1E2533] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="flex items-center justify-center gap-2 mb-2">
            <span className="w-6 h-[2px] bg-[#E63946]" />
            <span className="text-[#E63946] text-xs font-black uppercase tracking-widest">
              GYM & FITNESS TRAINING
            </span>
            <span className="w-6 h-[2px] bg-[#E63946]" />
          </div>
          <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-white">
            Our Upcoming Classes
          </h2>
          <p className="text-xs sm:text-sm text-[#8F9BB3] mt-2">
            World-class strength and conditioning sessions coached by verified elite trainers.
          </p>
        </div>

        {/* 4 Class Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {classes.map((cls) => (
            <div
              key={cls.id}
              className="rounded-2xl bg-[#0E1219] border border-[#1E2533] overflow-hidden flex flex-col justify-between hover:border-[#E63946]/50 transition-all duration-300 group shadow-xl"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-black">
                <img
                  src={cls.img}
                  alt={cls.title}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500 filter contrast-[1.05]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0E1219] via-transparent to-transparent opacity-90" />
                <span className="absolute top-3 right-3 bg-[#E63946] text-white text-[10px] font-black uppercase px-2.5 py-1 rounded shadow-md">
                  {cls.level}
                </span>
              </div>

              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-heading text-xl font-black uppercase text-white mb-2 leading-tight">
                    {cls.title}
                  </h3>
                  <div className="space-y-1.5 text-xs text-[#8F9BB3]">
                    <p className="flex items-center gap-2">
                      <Clock className="w-3.5 h-3.5 text-[#E63946]" />
                      <span>{cls.time}</span>
                    </p>
                    <p className="flex items-center gap-2">
                      <User className="w-3.5 h-3.5 text-[#E63946]" />
                      <span>Coach: {cls.trainer}</span>
                    </p>
                  </div>
                </div>

                <div className="pt-4 mt-4 border-t border-[#1E2533]">
                  <button
                    onClick={onOpenJoin}
                    className="w-full py-2.5 rounded-lg bg-[#151B26] hover:bg-[#E63946] border border-[#1E2533] hover:border-[#E63946] text-white font-black text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-1.5"
                  >
                    <span>JOIN THIS CLASS</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Weekly Timetable Schedule Table (Matching reference image) */}
        <div className="rounded-2xl bg-[#0E1219] border border-[#1E2533] p-6 sm:p-8 shadow-2xl">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-6 pb-6 border-b border-[#1E2533]">
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5 text-[#E63946]" />
              <h3 className="font-heading text-2xl font-black uppercase text-white">
                Training Classes Schedule
              </h3>
            </div>
            
            {/* Days Tabs */}
            <div className="flex flex-wrap gap-1.5 p-1 bg-[#080A0E] rounded-xl border border-[#1E2533]">
              {days.map((day) => (
                <button
                  key={day}
                  onClick={() => setActiveDay(day)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-black uppercase transition-all ${
                    activeDay === day
                      ? "bg-[#E63946] text-white shadow-[0_0_10px_rgba(230,57,70,0.5)]"
                      : "text-[#8F9BB3] hover:text-white"
                  }`}
                >
                  {day.slice(0, 3)}
                </button>
              ))}
            </div>
          </div>

          {/* Timetable Rows */}
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead>
                <tr className="border-b border-[#1E2533] text-[#8F9BB3] uppercase tracking-wider font-bold">
                  <th className="py-3 px-4">Time Slot</th>
                  <th className="py-3 px-4">Session Name</th>
                  <th className="py-3 px-4">Lead Coach</th>
                  <th className="py-3 px-4">Intensity</th>
                  <th className="py-3 px-4 text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#1E2533]/60 font-medium">
                {[
                  { time: "06:00 AM - 07:30 AM", name: "Early Bird Strength & Power", coach: "Marcus Vance", intensity: "High" },
                  { time: "09:00 AM - 10:15 AM", name: "Cardio Conditioning & Core", coach: "Priya Sharma", intensity: "Moderate" },
                  { time: "05:00 PM - 06:30 PM", name: "Hypertrophy Push / Pull", coach: "Rohan Kapoor", intensity: "High" },
                  { time: "07:00 PM - 08:30 PM", name: "Evening Olympic Barbell Lab", coach: "Marcus Vance", intensity: "Maximum" }
                ].map((row, idx) => (
                  <tr key={idx} className="hover:bg-[#151B26]/50 transition-colors">
                    <td className="py-3.5 px-4 text-white font-bold">{row.time}</td>
                    <td className="py-3.5 px-4 text-slate-200 font-semibold">{row.name}</td>
                    <td className="py-3.5 px-4 text-[#8F9BB3]">{row.coach}</td>
                    <td className="py-3.5 px-4">
                      <span className="px-2 py-0.5 rounded text-[10px] font-black uppercase bg-[#E63946]/10 text-[#E63946] border border-[#E63946]/30">
                        {row.intensity}
                      </span>
                    </td>
                    <td className="py-3.5 px-4 text-right">
                      <button
                        onClick={onOpenJoin}
                        className="px-3 py-1.5 rounded bg-[#E63946] hover:bg-[#D62828] text-white font-black text-[11px] uppercase tracking-wider"
                      >
                        Enroll
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </section>
  );
}
