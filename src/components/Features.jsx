import React from 'react';
import { Shield, Users, Flame, Sparkles } from 'lucide-react';

const features = [
  {
    icon: <Flame className="h-6 w-6 text-rose-400" />,
    title: 'Match intelligenti',
    desc: 'Algoritmi pensati per farti incontrare persone davvero compatibili con te.',
  },
  {
    icon: <Shield className="h-6 w-6 text-rose-400" />,
    title: 'Sicurezza al centro',
    desc: 'Profilazione attenta, controlli e privacy by design per sentirti al sicuro.',
  },
  {
    icon: <Users className="h-6 w-6 text-rose-400" />,
    title: 'Community autentica',
    desc: 'Un luogo accogliente con persone reali: rispetto, empatia e zero giudizi.',
  },
  {
    icon: <Sparkles className="h-6 w-6 text-rose-400" />,
    title: 'Esperienza premium',
    desc: 'UI immersiva, animazioni fluide e un tocco di magia in ogni interazione.',
  },
];

const Features = () => {
  return (
    <section id="come-funziona" className="relative bg-gradient-to-b from-[#0b0203] to-[#120203] py-20">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(50%_60%_at_50%_0%,rgba(244,63,94,0.12),transparent)]" />
      <div className="relative mx-auto max-w-6xl px-6">
        <h2 className="text-center text-3xl font-bold text-white md:text-4xl">
          Perché scegliere <span className="bg-gradient-to-r from-rose-400 to-rose-600 bg-clip-text text-transparent">Loveat</span>
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-rose-100/70">
          Tutto quello che ti serve per rompere il ghiaccio e creare connessioni vere.
        </p>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f, i) => (
            <div
              key={i}
              className="group rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur transition-all hover:translate-y-[-2px] hover:bg-white/10"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-rose-900/40 ring-1 ring-rose-700/40">
                {f.icon}
              </div>
              <h3 className="mt-4 text-lg font-semibold text-white">{f.title}</h3>
              <p className="mt-2 text-sm text-rose-100/70">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
