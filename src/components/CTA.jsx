import React from 'react';
import { ArrowRight, Heart } from 'lucide-react';

const CTA = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#1a0507] to-[#0b0203] py-20">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(80%_80%_at_50%_100%,rgba(225,29,72,0.18),transparent)]" />
      <div className="relative mx-auto max-w-5xl rounded-3xl border border-white/10 bg-gradient-to-r from-rose-700/30 to-rose-900/30 p-10 text-center text-white backdrop-blur">
        <h3 className="text-3xl font-bold md:text-4xl">
          Pronto a incontrare la tua prossima connessione?
        </h3>
        <p className="mx-auto mt-3 max-w-2xl text-rose-100/70">
          Iscriviti gratuitamente e inizia a scoprire persone che condividono i tuoi interessi.
        </p>
        <div className="mt-8 flex items-center justify-center gap-3">
          <a
            href="#"
            className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-rose-600 to-rose-800 px-7 py-3 font-medium text-white shadow-lg shadow-rose-900/40 transition-transform hover:scale-[1.02]"
          >
            <Heart className="h-5 w-5" />
            Crea il tuo account
            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-0.5" />
          </a>
          <a
            href="#"
            className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-7 py-3 text-white backdrop-blur transition-colors hover:bg-white/10"
          >
            Scopri i piani
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTA;
