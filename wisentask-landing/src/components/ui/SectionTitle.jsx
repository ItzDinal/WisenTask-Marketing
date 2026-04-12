const SectionTitle = ({ title, subtitle }) => {
  return (
    <div className="text-center max-w-2xl mx-auto mb-16">
      <h2 className="text-3xl sm:text-4xl font-bold">{title}</h2>
      <p className="mt-4 text-slate-400">{subtitle}</p>
    </div>
  );
};

export default SectionTitle;