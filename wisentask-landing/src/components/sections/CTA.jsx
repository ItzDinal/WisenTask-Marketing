import React from "react";
import Button from "../ui/Button";

const CTA = () => {
  return (
    <section className="py-28 px-6 text-center relative overflow-hidden">

      {/* 🔥 NEW: background glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 blur-3xl"></div>

      <div className="relative z-10">

        <h2 className="text-3xl sm:text-5xl font-bold leading-tight">
          Stop thinking. <br />
          <span className="text-cyan-400">Start doing.</span>
        </h2>

        <p className="mt-6 text-slate-400 max-w-xl mx-auto">
          Let WisenTask guide your day with AI-powered decisions.
        </p>

        <div className="mt-10">
          <Button>Get Started</Button>
        </div>

      </div>
    </section>
  );
};

export default CTA;