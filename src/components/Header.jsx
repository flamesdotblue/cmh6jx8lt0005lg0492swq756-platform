import React from 'react';
import { Shield, User } from 'lucide-react';

const Header = () => {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-black/30 border-b border-white/10">
      <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 group">
          <div className="relative h-9 w-9 rounded-xl bg-gradient-to-br from-cyan-400 via-fuchsia-400 to-blue-500 p-[1px]">
            <div className="h-full w-full rounded-[10px] bg-[#0A0B10] grid place-items-center">
              <Shield className="h-5 w-5 text-cyan-300" />
            </div>
          </div>
          <span className="text-lg font-semibold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 via-fuchsia-300 to-blue-300">HoloID</span>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm text-white/70">
          <a href="#features" className="hover:text-white transition">Features</a>
          <a href="#security" className="hover:text-white transition">Security</a>
          <a href="#pricing" className="hover:text-white transition">Pricing</a>
        </nav>
        <div className="flex items-center gap-3">
          <button className="hidden sm:inline-flex px-4 py-2 rounded-lg border border-white/15 text-white/80 hover:text-white hover:border-white/30 transition">Log in</button>
          <button className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-cyan-500 via-fuchsia-500 to-blue-600 text-white shadow-[0_0_20px_rgba(56,189,248,0.35)] hover:brightness-110 transition">
            <User className="h-4 w-4" />
            Get Started
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
