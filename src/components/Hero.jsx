import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Sparkles } from 'lucide-react';
import Spline from '@splinetool/react-spline';

const Hero = () => {
  return (
    <section className="relative h-[90vh] w-full overflow-hidden bg-[#0b0203]">
      {/* Spline Background */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/cEecEwR6Ehj4iT8T/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Subtle gradient overlays to enhance red tones without blocking interactions */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-[#120203]/50 to-[#0b0203]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_40%,rgba(255,56,92,0.25),transparent)]" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex h-full max-w-6xl flex-col items-center justify-center px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80 backdrop-blur"
        >
          <Sparkles className="h-4 w-4 text-rose-300" />
          Benvenuto su Loveat — il nuovo modo di incontrarsi
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1 }}
          className="mt-6 bg-gradient-to-b from-rose-200 to-rose-500 bg-clip-text text-5xl font-extrabold leading-tight text-transparent md:text-6xl"
        >
          Incontri che scaldano il cuore
          <br />
          in un click.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="mt-4 max-w-2xl text-lg text-rose-100/80"
        >
          Trova persone affini a te in un ambiente moderno, elegante e sicuro.
          Lasciati guidare da un design immersivo e scopri connessioni autentiche.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3 }}
          className="mt-8 flex flex-col items-center gap-3 sm:flex-row"
        >
          <a
            href="#inizia"
            className="group inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-rose-600 to-rose-800 px-7 py-3 text-white shadow-lg shadow-rose-900/40 transition-transform duration-200 hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-rose-400/50"
          >
            <Heart className="h-5 w-5" />
            Inizia ora
          </a>
          <a
            href="#come-funziona"
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-7 py-3 text-white backdrop-blur transition-colors hover:bg-white/10"
          >
            Scopri di più
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
