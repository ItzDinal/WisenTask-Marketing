const Button = ({ children, variant = "primary" }) => {
  const base = "rounded-full px-6 py-3 font-semibold transition";

  const styles = {
    primary:
      "bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-400 hover:scale-105",
    secondary:
      "border border-white/20 text-slate-300 hover:bg-white/10",
  };

  return <button className={`${base} ${styles[variant]}`}>{children}</button>;
};

export default Button;