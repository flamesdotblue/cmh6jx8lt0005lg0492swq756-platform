import React from 'react';

const Footer = () => {
  return (
    <footer className="border-t border-white/10 mt-10">
      <div className="mx-auto max-w-7xl px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-white/60">
        <p>© {new Date().getFullYear()} HoloID. All rights reserved.</p>
        <div className="flex items-center gap-6">
          <a href="#" className="hover:text-white transition">Privacy</a>
          <a href="#" className="hover:text-white transition">Terms</a>
          <a href="#" className="hover:text-white transition">Status</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
