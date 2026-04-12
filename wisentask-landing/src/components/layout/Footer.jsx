import React from "react";

const Footer = () => {
  return (
    <footer className="py-10 px-6 border-t border-white/10 text-center text-slate-400">

      <p className="text-sm">
        © {new Date().getFullYear()} WisenTask. All rights reserved.
      </p>

      <div className="mt-4 flex justify-center gap-6 text-sm">
        <span className="hover:text-white cursor-pointer">Privacy</span>
        <span className="hover:text-white cursor-pointer">Terms</span>
        <span className="hover:text-white cursor-pointer">Contact</span>
      </div>

    </footer>
  );
};

export default Footer;