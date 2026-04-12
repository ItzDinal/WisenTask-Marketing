import React from "react";
import SectionTitle from "../ui/SectionTitle";

const testimonials = [
  {
    name: "Aman",
    role: "CS Student",
    text: "This actually tells me what to do next. I stopped wasting hours deciding.",
  },
  {
    name: "Nisha",
    role: "Freelancer",
    text: "Feels like having a brain assistant. My productivity doubled.",
  },
  {
    name: "Ravi",
    role: "Developer",
    text: "Finally a task manager that thinks for me instead of just listing tasks.",
  },
];

const Testimonials = () => {
  return (
    <section className="py-24 px-6 bg-[#020617] text-white">

      <SectionTitle
        title="What people are saying"
        subtitle="Early users are already seeing the difference."
      />

      <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">

        {testimonials.map((t, i) => (
          <div
            key={i}
            className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur"
          >
            <p className="text-slate-300">“{t.text}”</p>

            <div className="mt-6">
              <p className="font-semibold">{t.name}</p>
              <p className="text-sm text-slate-400">{t.role}</p>
            </div>
          </div>
        ))}

      </div>
    </section>
  );
};

export default Testimonials;