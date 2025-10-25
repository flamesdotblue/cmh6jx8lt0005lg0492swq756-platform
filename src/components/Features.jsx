import React from 'react';
import { Shield, CreditCard, Zap, Users } from 'lucide-react';

const features = [
  {
    icon: Shield,
    title: 'Bank-grade Security',
    desc: 'Hardware-backed keys, end-to-end encryption, and on-chain attestations keep your identity tamper-proof.'
  },
  {
    icon: CreditCard,
    title: 'Fintech Ready',
    desc: 'KYC-ready identity primitives and seamless payment linking for instant onboarding.'
  },
  {
    icon: Users,
    title: 'Portable Identity',
    desc: 'Use your holographic profile across apps, with consent-based data sharing.'
  },
  {
    icon: Zap,
    title: 'Real-time Verification',
    desc: 'Blue-check verification that updates instantly as your credentials change.'
  }
];

const FeatureCard = ({ Icon, title, desc }) => (
  <div className="relative rounded-2xl border border-white/10 bg-white/[0.02] p-6 hover:border-white/20 transition">
    <div className="absolute inset-0 rounded-2xl pointer-events-none [mask-image:radial-gradient(60%_60%_at_30%_20%,black,transparent)] bg-gradient-to-br from-cyan-500/10 via-fuchsia-500/10 to-blue-600/10" />
    <div className="relative z-10">
      <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-cyan-500/20 via-fuchsia-500/20 to-blue-600/20 border border-white/10 grid place-items-center mb-4">
        <Icon className="h-6 w-6 text-cyan-300" />
      </div>
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="mt-2 text-white/70">{desc}</p>
    </div>
  </div>
);

const Features = () => {
  return (
    <section id="features" className="relative py-20">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(50%_50%_at_50%_20%,rgba(168,85,247,0.12),transparent_60%)]" />
      <div className="mx-auto max-w-7xl px-6 relative">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold">Why HoloID</h2>
          <p className="mt-3 text-white/75">A modern, holographic identity system purpose-built for digital finance and beyond.</p>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f) => (
            <FeatureCard key={f.title} Icon={f.icon} title={f.title} desc={f.desc} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
