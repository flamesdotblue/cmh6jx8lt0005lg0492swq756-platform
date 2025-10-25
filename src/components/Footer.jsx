import React from 'react';

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-16 border-t border-white/10 bg-black/20">
      <div className="mx-auto max-w-7xl px-6 py-10 text-sm text-white/70 grid gap-4 sm:flex sm:items-center sm:justify-between">
        <p>© {year} AI First Academy. All rights reserved.</p>
        <nav className="flex items-center gap-6">
          <a href="#" className="hover:text-white transition">Privacy</a>
          <a href="#" className="hover:text-white transition">Terms</a>
          <a href="#contact" className="hover:text-white transition">Contact</a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
