import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import SectionsOverview from './components/SectionsOverview';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[#07080C] text-white antialiased selection:bg-indigo-500/30">
      <Header />
      <main>
        <Hero />
        <SectionsOverview />
      </main>
      <Footer />
    </div>
  );
}

export default App;
