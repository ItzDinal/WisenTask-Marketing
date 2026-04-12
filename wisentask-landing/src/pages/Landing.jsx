import Navbar from "../components/layout/Navbar";
import Hero from "../components/sections/Hero";
import Trust from "../components/sections/Trust";
import Problem from "../components/sections/Problem";
import Solution from "../components/sections/Solution";
import Features from "../components/sections/Features";
import HowItWorks from "../components/sections/HowItWorks";
import Testimonials from "../components/sections/Testimonials"; 
import CTA from "../components/sections/CTA";
import Footer from "../components/layout/Footer"; 

const Landing = () => {
  return (
    <div className="bg-gradient-to-br from-[#020617] via-[#0f172a] to-[#020617] text-white">
      <Navbar />
      <Hero />
      <Trust />
      <Problem />
      <Solution />
      <Features />
      <HowItWorks />
      <Testimonials /> 
      <CTA />
      <Footer /> 
    </div>
  );
};

export default Landing;
