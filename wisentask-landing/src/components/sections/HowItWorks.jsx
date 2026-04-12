import React from "react";
import SectionTitle from "../ui/SectionTitle";

const steps = [
  {
    title: "Add your tasks",
    desc: "List everything you need to do without overthinking.",
    icon: "📝",
  },
  {
    title: "AI analyzes everything",
    desc: "WisenTask evaluates priority, time, and energy.",
    icon: "🤖",
  },
  {
    title: "Follow your plan",
    desc: "Get a clear, optimized schedule for your day.",
    icon: "🚀",
  },
];

const HowItWorks = () => {
  return (
    <section className="py-24 px-6 bg-[#020617] text-white">

      {/* 🔥 UPDATED: section header */}
      <SectionTitle
        title="How it works"
        subtitle="Simple steps. Powerful results."
      />

      {/* 🔥 UPDATED: timeline-style layout */}
      <div className="relative max-w-5xl mx-auto mt-16">

        {/* ✅ NEW: vertical line */}
        <div className="absolute left-1/2 top-0 h-full w-[2px] bg-white/10 -translate-x-1/2 hidden md:block"></div>

        <div className="space-y-16">

          {steps.map((step, index) => (
            <div
              key={index}
              className={`flex flex-col md:flex-row items-center gap-8 ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >

              {/* Content */}
              <div
                className={`md:w-1/2 ${
                  index % 2 === 0
                    ? "md:text-right md:pr-12"
                    : "md:text-left md:pl-12"
                }`}
              >                
                <div className="text-3xl mb-3">{step.icon}</div>
                <h3 className="text-xl font-semibold">{step.title}</h3>
                <p className="mt-2 text-slate-400">{step.desc}</p>
              </div>

              {/* Circle indicator */}
              <div className="hidden md:flex items-center justify-center w-10 h-10 rounded-full bg-cyan-400 text-black font-bold z-10">
                {index + 1}
              </div>

              {/* Spacer */}
              <div className="md:w-1/2"></div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default HowItWorks;