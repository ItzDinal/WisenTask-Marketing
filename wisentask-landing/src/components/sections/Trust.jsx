import React from "react";

const Trust = () => {
  return (
    <section className="py-16 px-6 text-center bg-[#020617] text-slate-400">

      {/* 🔥 UPDATED: subtle headline */}
      <p className="text-sm uppercase tracking-[0.3em] text-cyan-400">
        Trusted by early users
      </p>

      {/* 🔥 UPDATED: main trust message */}
      <h2 className="mt-4 text-2xl sm:text-3xl font-semibold text-white">
        Built for students, creators & busy minds
      </h2>

      {/* 🔥 UPDATED: logos / placeholders */}
      <div className="mt-10 flex flex-wrap justify-center gap-10 opacity-60 text-lg">
        <span>🚀 Students</span>
        <span>💻 Developers</span>
        <span>🧠 ADHD Users</span>
        <span>📈 Productivity Enthusiasts</span>
      </div>

      {/* ✅ NEW: mini stats (VERY IMPORTANT upgrade) */}
      <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-8 max-w-4xl mx-auto text-white">

        <div>
          <p className="text-2xl font-bold text-cyan-400">AI</p>
          <p className="text-sm text-slate-400">Powered Decisions</p>
        </div>

        <div>
          <p className="text-2xl font-bold text-cyan-400">24/7</p>
          <p className="text-sm text-slate-400">Smart Scheduling</p>
        </div>

        <div>
          <p className="text-2xl font-bold text-cyan-400">100%</p>
          <p className="text-sm text-slate-400">Focus Driven</p>
        </div>

        <div>
          <p className="text-2xl font-bold text-cyan-400">∞</p>
          <p className="text-sm text-slate-400">Better Decisions</p>
        </div>

      </div>
    </section>
  );
};

export default Trust;