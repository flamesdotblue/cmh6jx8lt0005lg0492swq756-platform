import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Users, Calendar, Newspaper, HelpCircle, Phone, ArrowRight } from 'lucide-react';

const SectionTitle = ({ id, eyebrow, title, desc }) => (
  <div id={id} className="max-w-3xl">
    <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80">{eyebrow}</div>
    <h2 className="mt-3 text-2xl sm:text-3xl font-bold tracking-tight">{title}</h2>
    <p className="mt-2 text-white/70">{desc}</p>
  </div>
);

const Card = ({ icon: Icon, title, desc, href }) => (
  <motion.a
    href={href}
    whileHover={{ y: -4 }}
    className="group relative rounded-2xl border border-white/10 bg-white/[0.03] p-5 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400"
  >
    <div aria-hidden className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-indigo-500/10 via-purple-500/10 to-blue-600/10 opacity-0 transition-opacity group-hover:opacity-100" />
    <div className="relative z-10">
      <div className="h-11 w-11 grid place-items-center rounded-xl border border-white/10 bg-white/5">
        <Icon className="h-5 w-5 text-indigo-300" />
      </div>
      <h3 className="mt-3 font-semibold">{title}</h3>
      <p className="mt-1 text-sm text-white/70">{desc}</p>
      <span className="mt-3 inline-flex items-center gap-1 text-sm text-indigo-300">Learn more <ArrowRight className="h-3.5 w-3.5" /></span>
    </div>
  </motion.a>
);

const SectionsOverview = () => {
  return (
    <section className="relative py-16 sm:py-20">
      <div aria-hidden className="pointer-events-none absolute inset-0 bg-[radial-gradient(45%_45%_at_70%_10%,rgba(37,99,235,0.18),transparent_60%)]" />
      <div className="mx-auto max-w-7xl px-6">
        <SectionTitle
          id="overview"
          eyebrow="Explore AI First Academy"
          title="A complete learning platform for AI careers"
          desc="Navigate through our public pages to discover courses, meet instructors, understand admissions, and engage with events and content."
        />

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <Card icon={BookOpen} title="Courses Listing" desc="Browse all programs across ML, GenAI, Data, and MLOps." href="#courses" />
          <Card icon={Users} title="Instructors" desc="Learn from experienced practitioners and researchers." href="#instructors" />
          <Card icon={Calendar} title="Events & Webinars" desc="Attend live workshops, demos, and info sessions." href="#events" />
          <Card icon={Newspaper} title="Blog" desc="Insights, tutorials, and career guidance from our team." href="#blog" />
          <Card icon={HelpCircle} title="FAQs" desc="Get answers about curriculum, fees, and schedules." href="#faqs" />
          <Card icon={Phone} title="Contact Us" desc="Reach our admissions and support teams." href="#contact" />
        </div>

        {/* Courses Section */}
        <motion.div id="courses" initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.6 }} className="mt-16">
          <SectionTitle eyebrow="Courses" title="Programs designed with industry" desc="Each track blends foundational theory with practical projects and code reviews." />
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { title: 'Foundations of Machine Learning', tag: 'Beginner • 8 weeks' },
              { title: 'Practical GenAI & LLM Engineering', tag: 'Intermediate • 10 weeks' },
              { title: 'Data Engineering for AI', tag: 'Intermediate • 8 weeks' },
              { title: 'MLOps: From Model to Production', tag: 'Advanced • 6 weeks' },
              { title: 'Deep Learning Systems', tag: 'Advanced • 10 weeks' },
              { title: 'Responsible AI & Governance', tag: 'All Levels • 4 weeks' },
            ].map((c) => (
              <article key={c.title} className="relative rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                <h3 className="font-semibold leading-snug">{c.title}</h3>
                <p className="mt-1 text-sm text-white/70">{c.tag}</p>
                <div className="mt-4 flex items-center justify-between">
                  <a href="#course-details" className="text-sm text-indigo-300 inline-flex items-center gap-1 hover:text-indigo-200">View details <ArrowRight className="h-3.5 w-3.5" /></a>
                  <a href="#admissions" className="text-sm text-white/90 hover:text-white">Enroll</a>
                </div>
              </article>
            ))}
          </div>
        </motion.div>

        {/* Course Details Preview */}
        <motion.div id="course-details" initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="mt-16">
          <SectionTitle eyebrow="Course Details" title="Inside the LLM Engineering course" desc="Syllabus highlights, instructor, and outcomes." />
          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
              <h3 className="font-semibold">Syllabus Highlights</h3>
              <ul className="mt-3 space-y-2 text-sm text-white/75">
                <li>• Tokenization, embeddings, and vector search</li>
                <li>• Prompt engineering and evaluation</li>
                <li>• Function calling and tool use</li>
                <li>• Fine-tuning and adapters</li>
                <li>• Guardrails, safety, and observability</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
              <h3 className="font-semibold">Instructor & Outcomes</h3>
              <p className="mt-2 text-sm text-white/75">Led by senior ML engineers. Build a production-ready LLM app, evaluate with benchmarks, and deploy with CI/CD.</p>
              <div className="mt-4 flex gap-3">
                <a href="#admissions" className="inline-flex items-center gap-2 rounded-lg bg-white/10 px-4 py-2 text-sm hover:bg-white/15 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400">Apply for next cohort</a>
                <a href="#contact" className="inline-flex items-center gap-2 rounded-lg border border-white/15 px-4 py-2 text-sm hover:border-white/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400">Talk to advisor</a>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Instructors */}
        <motion.div id="instructors" initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="mt-16">
          <SectionTitle eyebrow="Instructors" title="Learn from leaders" desc="Profiles with hover animations and accessible alt text." />
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { name: 'Dr. Maya Chen', role: 'Research Scientist, LLMs' },
              { name: 'Alex Rivera', role: 'Staff ML Engineer, MLOps' },
              { name: 'Priya Natarajan', role: 'Data Engineer, Streaming' },
              { name: 'Samir Khan', role: 'AI Product Lead' },
            ].map((p) => (
              <motion.div whileHover={{ y: -6 }} key={p.name} className="group rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                <div className="aspect-[16/10] rounded-xl bg-gradient-to-br from-indigo-500/20 via-purple-500/20 to-blue-600/20" role="img" aria-label={`Portrait placeholder for ${p.name}`} />
                <h3 className="mt-3 font-semibold">{p.name}</h3>
                <p className="text-sm text-white/70">{p.role}</p>
                <span className="mt-2 inline-flex items-center gap-1 text-sm text-indigo-300">View profile <ArrowRight className="h-3.5 w-3.5" /></span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Admissions */}
        <motion.div id="admissions" initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="mt-16">
          <SectionTitle eyebrow="Admissions" title="How to apply" desc="Simple, transparent steps with rolling cohorts." />
          <ol className="mt-6 grid gap-4 sm:grid-cols-3">
            {[
              { step: '1. Submit application', desc: 'Tell us about your background and goals.' },
              { step: '2. Take assessment', desc: 'Short skills check to place your level.' },
              { step: '3. Enroll & onboard', desc: 'Secure your seat and start prework.' },
            ].map((s) => (
              <li key={s.step} className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                <p className="font-medium">{s.step}</p>
                <p className="mt-1 text-sm text-white/70">{s.desc}</p>
              </li>
            ))}
          </ol>
          <div className="mt-6 flex gap-3">
            <a href="#contact" className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-indigo-500 via-purple-500 to-blue-600 px-5 py-3 font-medium shadow-[0_0_24px_rgba(99,102,241,0.35)] hover:brightness-110">Apply Now</a>
            <a href="#faqs" className="inline-flex items-center gap-2 rounded-lg border border-white/15 bg-white/5 px-5 py-3 font-medium text-white/90 hover:border-white/30">Admissions FAQs</a>
          </div>
        </motion.div>

        {/* Events */}
        <motion.div id="events" initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="mt-16">
          <SectionTitle eyebrow="Events & Webinars" title="Learn live with the community" desc="Register for upcoming sessions or watch past recordings." />
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { title: 'LLM Tooling Deep Dive', date: 'Apr 22, 7 PM UTC' },
              { title: 'Data Pipelines at Scale', date: 'May 1, 6 PM UTC' },
              { title: 'MLOps Observability', date: 'May 12, 5 PM UTC' },
            ].map((e) => (
              <article key={e.title} className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                <p className="text-sm text-white/70">{e.date}</p>
                <h3 className="mt-1 font-semibold">{e.title}</h3>
                <a href="#contact" className="mt-3 inline-flex items-center gap-1 text-sm text-indigo-300">Register <ArrowRight className="h-3.5 w-3.5" /></a>
              </article>
            ))}
          </div>
        </motion.div>

        {/* Blog */}
        <motion.div id="blog" initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="mt-16">
          <SectionTitle eyebrow="Blog" title="Latest insights" desc="Articles, tutorials, and guides from our team." />
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { title: 'Evaluating RAG Systems', read: '6 min read' },
              { title: 'From Notebook to Product', read: '8 min read' },
              { title: 'Prompt Engineering Myths', read: '5 min read' },
            ].map((b) => (
              <article key={b.title} className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                <div className="aspect-[16/9] rounded-lg bg-white/5" role="img" aria-label={`Cover image placeholder for ${b.title}`} />
                <h3 className="mt-3 font-semibold leading-snug">{b.title}</h3>
                <p className="text-sm text-white/70">{b.read}</p>
                <a href="#" className="mt-2 inline-flex items-center gap-1 text-sm text-indigo-300">Read article <ArrowRight className="h-3.5 w-3.5" /></a>
              </article>
            ))}
          </div>
        </motion.div>

        {/* FAQs */}
        <motion.div id="faqs" initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="mt-16">
          <SectionTitle eyebrow="FAQs" title="Frequently asked questions" desc="Clear answers with accessible accordion semantics." />
          <div className="mt-6 divide-y divide-white/10 rounded-2xl border border-white/10 bg-white/[0.03]">
            {[
              { q: 'Do I need prior coding experience?', a: 'Beginner tracks are designed for newcomers. We provide prework and support to get you ready.' },
              { q: 'Are there scholarships or financing?', a: 'Yes, we offer need-based scholarships and installment plans for eligible learners.' },
              { q: 'What is the weekly time commitment?', a: 'Expect 6–10 hours per week including live sessions, labs, and project work.' },
            ].map((f, idx) => (
              <details key={f.q} className="group p-5 open:bg-white/[0.02]">
                <summary className="cursor-pointer list-none font-medium outline-none">
                  <span className="inline-flex items-center justify-between w-full">
                    {f.q}
                    <span className="ml-4 text-white/50 group-open:rotate-90 transition-transform">›</span>
                  </span>
                </summary>
                <p className="mt-2 text-sm text-white/70" id={`faq-${idx}`}>{f.a}</p>
              </details>
            ))}
          </div>
        </motion.div>

        {/* Contact */}
        <motion.div id="contact" initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="mt-16">
          <SectionTitle eyebrow="Contact" title="We'd love to help" desc="Reach out to admissions or request a curriculum brochure." />
          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            <form className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="grid gap-2 text-sm">
                  <span className="text-white/80">Full name</span>
                  <input aria-label="Full name" required type="text" className="w-full rounded-lg border border-white/15 bg-transparent px-3 py-2 outline-none focus:border-indigo-400" />
                </label>
                <label className="grid gap-2 text-sm">
                  <span className="text-white/80">Email</span>
                  <input aria-label="Email" required type="email" className="w-full rounded-lg border border-white/15 bg-transparent px-3 py-2 outline-none focus:border-indigo-400" />
                </label>
                <label className="sm:col-span-2 grid gap-2 text-sm">
                  <span className="text-white/80">Message</span>
                  <textarea aria-label="Message" rows="4" className="w-full rounded-lg border border-white/15 bg-transparent px-3 py-2 outline-none focus:border-indigo-400" />
                </label>
              </div>
              <button type="submit" className="mt-4 inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-indigo-500 via-purple-500 to-blue-600 px-5 py-3 font-medium hover:brightness-110">
                Send message
              </button>
            </form>
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
              <div className="aspect-[16/10] w-full rounded-xl bg-white/5" role="img" aria-label="Map placeholder of AI First Academy location" />
              <div className="mt-4 text-sm text-white/80">
                <p>Admissions: admissions@aifirst.academy</p>
                <p className="mt-1">Support: support@aifirst.academy</p>
                <p className="mt-1">Office: 123 AI Blvd, Innovation City</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SectionsOverview;
