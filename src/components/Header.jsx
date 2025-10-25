import React from 'react';
import { Cpu, Menu } from 'lucide-react';

const Header = () => {
  return (
    <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-black/40 bg-black/30 border-b border-white/10">
      <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 rounded-md">
          <span className="relative h-9 w-9 grid place-items-center rounded-xl bg-gradient-to-br from-indigo-500 via-purple-500 to-blue-600 p-[1px]">
            <span className="h-full w-full grid place-items-center rounded-[10px] bg-[#0B0D14]"><Cpu aria-hidden className="h-5 w-5 text-indigo-300" /></span>
          </span>
          <span className="text-lg font-semibold tracking-tight">AI First Academy</span>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm text-white/80">
          <a className="hover:text-white transition focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 rounded" href="#courses">Courses</a>
          <a className="hover:text-white transition focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 rounded" href="#instructors">Instructors</a>
          <a className="hover:text-white transition focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 rounded" href="#admissions">Admissions</a>
          <a className="hover:text-white transition focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 rounded" href="#events">Events</a>
          <a className="hover:text-white transition focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 rounded" href="#blog">Blog</a>
          <a className="hover:text-white transition focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 rounded" href="#faqs">FAQs</a>
          <a className="hover:text-white transition focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 rounded" href="#contact">Contact</a>
        </nav>
        <button aria-label="Open Menu" className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/15 text-white/80 hover:text-white hover:border-white/30 transition">
          <Menu className="h-5 w-5" />
        </button>
      </div>
    </header>
  );
};

export default Header;
