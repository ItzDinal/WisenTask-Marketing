import React from "react";
import Button from "../ui/Button";
import heroImg from "../../assets/hero.png"; // ✅ NEW: using your hero image

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-4 text-white">

      {/* ================= BACKGROUND ================= */}
      
      {/* ✅ NEW: Smooth gradient background (Calm-style) */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#020617] via-[#0f172a] to-[#020617]" />

      {/* ✅ NEW: Glow effect */}
      <div className="absolute top-[-150px] left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-cyan-500/20 blur-[120px] rounded-full" />

      {/* ================= CONTENT ================= */}

      <div className="relative z-10 text-center px-6 max-w-5xl">

        {/* ✅ NEW: Tagline */}
        <p className="text-cyan-400 uppercase tracking-[0.3em] text-sm mb-4">
          AI Productivity Assistant
        </p>

        {/* 🔥 UPDATED: Better headline */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight">
          Stop guessing what to do next.
          <br />
          <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Let AI plan your day.
          </span>
        </h1>

        {/* 🔥 UPDATED: Better subtext */}
        <p className="mt-6 text-lg text-slate-300 max-w-2xl mx-auto">
          WisenTask intelligently prioritizes your tasks, manages your time,
          and tells you exactly what to do next.
        </p>

        {/* 🔥 UPDATED: CTA buttons */}
        <div className="mt-10 flex justify-center gap-4 flex-wrap">
          <Button>Get Started</Button>

          <button className="px-6 py-3 rounded-full border border-white/20 text-slate-300 hover:bg-white/10 transition">
            Live Demo
          </button>
        </div>

        {/* ================= HERO IMAGE ================= */}

        {/* ✅ NEW: App preview image (like Calm visual section) */}
        <div className="mt-16 flex justify-center">
          <img
            src={heroImg}
            alt="App Preview"
            className="w-full max-w-3xl rounded-2xl border border-white/10 shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
