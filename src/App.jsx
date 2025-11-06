import React from 'react';
import Hero from './components/Hero';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import CTA from './components/CTA';

function App() {
  return (
    <div className="min-h-screen bg-[#0b0203] font-inter text-white">
      <Hero />
      <Features />
      <HowItWorks />
      <CTA />
      <footer className="border-t border-white/10 bg-[#0b0203] py-8 text-center text-sm text-rose-100/60">
        © {new Date().getFullYear()} Loveat — Con amore, sempre.
      </footer>
    </div>
  );
}

export default App;
