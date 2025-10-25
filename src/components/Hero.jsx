import React from 'react';
import Spline from '@splinetool/react-spline';
import { CheckCircle } from 'lucide-react';

const Bullet = ({ children }) => (
  <div className="flex items-start gap-3">
    <CheckCircle className="h-5 w-5 text-cyan-400 mt-0.5 flex-shrink-0" />
    <p className="text-white/80">{children}</p>
  </div>
);

const Hero = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="relative h-[78vh] min-h-[560px] w-full">
        <Spline
          scene="https://prod.spline.design/qQUip0dJPqrrPryE/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_40%,rgba(56,189,248,0.25),transparent_60%)]" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#05060A] to-transparent" />
      </div>

      <div className="absolute inset-0 flex items-center">
        <div className="mx-auto max-w-7xl px-6 grid md:grid-cols-12 gap-8 w-full">
          <div className="md:col-span-6 lg:col-span-5">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 via-fuchsia-300 to-blue-300">Iridescent Identity</span>
              <br />
              for the Fintech Era
            </h1>
            <p className="mt-4 text-lg text-white/80 max-w-prose">
              Verify, showcase, and protect your digital identity with a holographic profile card and real-time verification. Modern, vibrant, and secure.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <a href="#features" className="inline-flex justify-center items-center px-5 py-3 rounded-lg bg-gradient-to-r from-cyan-500 via-fuchsia-500 to-blue-600 text-white shadow-[0_0_32px_rgba(56,189,248,0.35)] hover:brightness-110 transition">
                Explore Features
              </a>
              <a href="#" className="inline-flex justify-center items-center px-5 py-3 rounded-lg border border-white/15 text-white/90 hover:text-white hover:border-white/30 backdrop-blur-sm transition">
                Live Demo
              </a>
            </div>
            <div className="mt-6 space-y-2">
              <Bullet>Verified blue-check identity with cryptographic signatures.</Bullet>
              <Bullet>Seamless 3D profile card you can embed anywhere.</Bullet>
              <Bullet>Privacy-first controls with granular permissions.</Bullet>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
