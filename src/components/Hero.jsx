import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, GraduationCap, Shield } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative overflow-hidden">
      <div aria-hidden className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_0%,rgba(99,102,241,0.25),transparent_60%)]" />
      <div className="mx-auto max-w-7xl px-6 py-20 sm:py-24">
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="lg:col-span-7"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80">
              <Shield className="h-3.5 w-3.5 text-indigo-300" />
              Industry-led AI education — accessible and rigorous
            </div>
            <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight">
              Build an AI-first career with precision learning
            </h1>
            <p className="mt-4 text-white/80 text-lg max-w-2xl">
              Master AI, data science, and ML engineering through curated courses, hands-on projects, and mentorship from practitioners at top companies.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <a href="#courses" className="inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-indigo-500 via-purple-500 to-blue-600 px-5 py-3 font-medium shadow-[0_0_24px_rgba(99,102,241,0.35)] hover:brightness-110 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400">
                <GraduationCap className="h-5 w-5" />
                Explore Courses
              </a>
              <a href="#admissions" className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/15 bg-white/5 px-5 py-3 font-medium text-white/90 hover:border-white/30 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400">
                Apply Now
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.1 }}
            className="lg:col-span-5"
          >
            <div className="relative">
              <div aria-hidden className="pointer-events-none absolute -inset-1 rounded-3xl bg-gradient-to-tr from-indigo-500/20 via-purple-500/20 to-blue-600/20 blur-2xl" />
              <div className="relative rounded-3xl border border-white/10 bg-white/[0.03] p-6">
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { title: 'Machine Learning', seats: '150+', level: 'Beginner to Advanced' },
                    { title: 'GenAI & LLMs', seats: '120+', level: 'Project-based' },
                    { title: 'Data Engineering', seats: '80+', level: 'Industry-ready' },
                    { title: 'MLOps', seats: '60+', level: 'Practical Labs' },
                  ].map((c) => (
                    <div key={c.title} className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                      <p className="text-sm text-white/70">{c.level}</p>
                      <p className="mt-1 font-semibold">{c.title}</p>
                      <p className="mt-2 text-xs text-white/60">Enrolled: {c.seats}</p>
                    </div>
                  ))}
                </div>
                <p className="mt-5 text-sm text-white/70">Flexible cohorts • Live + async • Certificates • Career support</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      <div aria-hidden className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#07080C] to-transparent" />
    </section>
  );
};

export default Hero;
