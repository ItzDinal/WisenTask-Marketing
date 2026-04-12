import React from "react";
import SectionTitle from "../ui/SectionTitle";

const features = [
  {
    title: "AI Scheduling",
    desc: "Automatically plans your day based on priority and time.",
    icon: "⚡",
  },
  {
    title: "Smart Prioritization",
    desc: "Focus on what truly matters instead of guessing.",
    icon: "🎯",
  },
  {
    title: "Focus Mode",
    desc: "Eliminate distractions and follow a clear workflow.",
    icon: "🧠",
  },
  {
    title: "Time Boxing",
    desc: "Allocate time slots for tasks intelligently.",
    icon: "⏳",
  },
];

const Features = () => {
  return (
    <section className="py-24 px-6 bg-[#020617] text-white">

      {/* 🔥 UPDATED: better section header */}
      <SectionTitle
        title="Powerful features. Simple experience."
        subtitle="Everything is designed to remove friction and boost focus."
      />

      {/* 🔥 UPDATED: premium grid layout */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto">

        {features.map((f, i) => (
          <div
            key={i}
            className="group rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur transition hover:bg-white/10 hover:scale-[1.02]"
          >

            {/* ✅ NEW: icon */}
            <div className="text-3xl mb-4">{f.icon}</div>

            {/* title */}
            <h3 className="text-lg font-semibold">{f.title}</h3>

            {/* description */}
            <p className="mt-2 text-slate-400 text-sm leading-relaxed">
              {f.desc}
            </p>

            {/* ✅ NEW: subtle hover effect line */}
            <div className="mt-4 h-[2px] w-0 bg-cyan-400 transition-all group-hover:w-full"></div>
          </div>
        ))}

      </div>
    </section>
  );
};

export default Features;