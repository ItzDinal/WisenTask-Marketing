import React from "react";
import SectionTitle from "../ui/SectionTitle";

const Solution = () => {
  return (
    <section className="py-24 px-6 bg-[#020617] text-white">

      {/* 🔥 UPDATED: Relief-based headline */}
      <SectionTitle
        title="What if you didn’t have to decide anything?"
        subtitle="WisenTask removes decision fatigue completely."
      />

      {/* 🔥 NEW: Core explanation (Calm-style clarity) */}
      <div className="max-w-3xl mx-auto text-center text-slate-400 text-lg leading-relaxed">
        Instead of manually planning your day, WisenTask uses AI to analyze
        your tasks, priorities, and energy levels — then tells you exactly
        what to do next.
      </div>

      {/* 🔥 NEW: Visual flow (VERY IMPORTANT) */}
      <div className="mt-16 flex flex-col items-center gap-6 text-center">

        {/* Step 1 */}
        <div className="bg-white/5 border border-white/10 rounded-2xl px-6 py-4 max-w-md">
          <p className="text-sm text-slate-400">You add tasks</p>
        </div>

        {/* Arrow */}
        <div className="text-cyan-400 text-xl">↓</div>

        {/* Step 2 */}
        <div className="bg-white/5 border border-white/10 rounded-2xl px-6 py-4 max-w-md">
          <p className="text-sm text-slate-400">
            AI analyzes priority, time & energy
          </p>
        </div>

        {/* Arrow */}
        <div className="text-cyan-400 text-xl">↓</div>

        {/* Step 3 */}
        <div className="bg-white/5 border border-white/10 rounded-2xl px-6 py-4 max-w-md">
          <p className="text-sm text-white font-semibold">
            You get a clear plan for your day
          </p>
        </div>

      </div>

      {/* 🔥 NEW: Closing statement (powerful) */}
      <p className="mt-16 text-center text-slate-300 text-lg max-w-2xl mx-auto">
        No more overthinking. No more wasted time.
        <br />
        Just clarity, focus, and execution.
      </p>

    </section>
  );
};

export default Solution;