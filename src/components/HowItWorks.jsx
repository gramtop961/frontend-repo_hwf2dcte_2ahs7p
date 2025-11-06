import React from 'react';
import { StepForward, MessageSquareHeart, Handshake } from 'lucide-react';

const steps = [
  {
    icon: <StepForward className="h-6 w-6" />,
    title: 'Crea il tuo profilo',
    desc: 'Racconta chi sei con foto e passioni. Più dettagli, migliori match.',
  },
  {
    icon: <MessageSquareHeart className="h-6 w-6" />,
    title: 'Scopri e connetti',
    desc: 'Scorri profili, invia like e avvia conversazioni sincere e leggere.',
  },
  {
    icon: <Handshake className="h-6 w-6" />,
    title: 'Incontra dal vivo',
    desc: 'Trasforma i match in appuntamenti. Dall’online al reale con semplicità.',
  },
];

const HowItWorks = () => {
  return (
    <section id="inizia" className="relative bg-gradient-to-b from-[#120203] to-[#1a0507] py-20">
      <div className="relative mx-auto max-w-6xl px-6">
        <h2 className="text-center text-3xl font-bold text-white md:text-4xl">Come funziona</h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-rose-100/70">
          Inizia in pochi passi e lascia che Loveat ti porti persone affini.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {steps.map((s, i) => (
            <div
              key={i}
              className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-white/[0.03] p-6 text-white backdrop-blur"
            >
              <div className="mb-3 inline-flex items-center gap-2 rounded-lg bg-rose-900/40 px-3 py-2 text-rose-200 ring-1 ring-rose-700/40">
                {s.icon}
                <span className="text-sm">Passo {i + 1}</span>
              </div>
              <h3 className="text-lg font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm text-rose-100/70">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
