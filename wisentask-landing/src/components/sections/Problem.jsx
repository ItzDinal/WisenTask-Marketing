import React from "react";
import SectionTitle from "../ui/SectionTitle";
import Card from "../ui/Card";

const Problem = () => {
  return (
    <section className="py-24 px-6 bg-[#020617] text-white">

      {/* 🔥 UPDATED: Emotional headline */}
      <SectionTitle
        title="Why staying productive feels so hard"
        subtitle="It's not laziness. It's decision fatigue."
      />

      {/* 🔥 NEW: emotional paragraph (Calm-style storytelling) */}
      <div className="max-w-3xl mx-auto text-center text-slate-400 text-lg leading-relaxed">
        Every day starts with good intentions — but quickly turns into
        confusion. Too many tasks. Too many choices. You don’t know where
        to start, so you end up doing nothing… or the wrong thing.
      </div>

      {/* 🔥 UPDATED: Problem cards (stronger + relatable) */}
      <div className="mt-16 grid gap-6 md:grid-cols-3 max-w-5xl mx-auto">

        <Card>
          <h3 className="text-lg font-semibold">Overwhelmed</h3>
          <p className="mt-2 text-slate-400">
            Your to-do list keeps growing, but your focus keeps shrinking.
          </p>
        </Card>

        <Card>
          <h3 className="text-lg font-semibold">Procrastination</h3>
          <p className="mt-2 text-slate-400">
            You delay tasks not because you're lazy — but because choosing
            feels exhausting.
          </p>
        </Card>

        <Card>
          <h3 className="text-lg font-semibold">No Clear Direction</h3>
          <p className="mt-2 text-slate-400">
            You’re busy all day, but still feel like nothing important got done.
          </p>
        </Card>

      </div>

      {/* ✅ NEW: subtle emotional closing line */}
      <p className="mt-16 text-center text-slate-500 italic">
        The problem isn’t you — it’s the way you manage decisions.
      </p>

    </section>
  );
};

export default Problem;