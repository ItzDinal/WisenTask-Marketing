import logo from "../../assets/logo.png";
import Button from "../ui/Button";

const Navbar = () => {
  return (
     <nav className="backdrop-blur-md bg-white/5 border-b border-white/10">
        <div className="flex h-44 items-center justify-between pl-0 pr-0">

          {/* LEFT: Logo */}
          <div className="flex h-full items-center gap-10">

            <img src={logo} alt="WisenTask logo" className="h-36 w-auto" />

            {/* NEW: Nav Links */}
            <div className="hidden h-full md:flex items-center gap-10 text-base text-gray-300">
              <a href="#" className="rounded-md px-3 py-2 transition hover:text-white">Features</a>
              <a href="#" className="rounded-md px-3 py-2 transition hover:text-white">How it Works</a>
              <a href="#" className="rounded-md px-3 py-2 transition hover:text-white">Pricing</a>
            </div>

          </div>

          {/* RIGHT: CTA */}
          <div className="mr-4 self-center sm:mr-6">
            <Button variant="secondary">Get Started</Button>
          </div>

        </div>
    </nav>
  );
};

export default Navbar;
