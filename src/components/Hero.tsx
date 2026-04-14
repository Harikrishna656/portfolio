'use client';

import { useEffect, useState } from 'react';
import { Github, Mail, Phone, ChevronDown, FileText, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

const roles = [
  'Web Application Developer',
  'Next.js Developer',
  'Full Stack Developer',
  'Problem Solver',
];

const floatingBadges = [
  { emoji: '⚡', title: 'Next.js', sub: 'Frontend', pos: 'absolute -top-4 -right-4', border: 'border-indigo-500/30' },
  { emoji: '🚀', title: 'Nest.js', sub: 'Backend', pos: 'absolute -bottom-4 -left-4', border: 'border-purple-500/30' },
  { emoji: '🛢️', title: '2+ Yrs', sub: 'Experience', pos: 'absolute top-1/2 -right-10', border: 'border-cyan-500/30' },
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!isDeleting && displayed.length < current.length) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 80);
    } else if (!isDeleting && displayed.length === current.length) {
      timeout = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length - 1)), 40);
    } else {
      setIsDeleting(false);
      setRoleIndex((i) => (i + 1) % roles.length);
    }

    return () => clearTimeout(timeout);
  }, [displayed, isDeleting, roleIndex]);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(rgba(99,102,241,0.15) 1px, transparent 1px),
            linear-gradient(90deg, rgba(99,102,241,0.15) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
        }}
      />

      {/* Glow blobs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-600/20 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-600/20 rounded-full blur-3xl" />
      <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-cyan-600/10 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-24 pb-28 flex flex-col lg:flex-row items-center gap-12">

        {/* Text Content */}
        <motion.div
          className="flex-1 text-center lg:text-left"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          {/* Available badge */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-sm font-medium mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            Available for opportunities
          </motion.div>

          <h1 className="text-5xl lg:text-7xl font-bold text-white mb-4 leading-tight">
            Hi, I&apos;m{' '}
            <span className="gradient-text">Hari Krishna</span>
          </h1>

          {/* Typing Effect */}
          <div className="h-14 flex items-center justify-center lg:justify-start mb-6">
            <span className="text-2xl lg:text-3xl text-slate-300 font-medium">
              {displayed}
              <span className="cursor-blink text-indigo-400 ml-0.5">|</span>
            </span>
          </div>

          <p className="text-slate-400 text-lg leading-relaxed max-w-xl mx-auto lg:mx-0 mb-8">
            Full-stack developer with{' '}
            <span className="text-indigo-400 font-semibold">2+ years of experience</span> building
            scalable web applications. Shipped a production platform used by{' '}
            <span className="text-purple-400 font-semibold">500+ users</span>, cutting load times
            by <span className="text-cyan-400 font-semibold">40%</span> with Next.js &amp; Nest.js.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 justify-center lg:justify-start mb-8">
            <a
              href="#contact"
              className="px-8 py-3.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold transition-all duration-200 hover:shadow-xl hover:shadow-indigo-500/30 hover:-translate-y-0.5"
            >
              Get In Touch
            </a>
            <a
              href="#projects"
              className="px-8 py-3.5 rounded-xl border border-indigo-500/30 bg-indigo-500/10 hover:bg-indigo-500/20 text-indigo-300 font-semibold transition-all duration-200 flex items-center gap-2 hover:-translate-y-0.5"
            >
              <ExternalLink size={18} />
              View Projects
            </a>
            <a
              href="https://github.com/Harikrishna656"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3.5 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 text-white font-semibold transition-all duration-200 flex items-center gap-2 hover:-translate-y-0.5"
            >
              <Github size={18} />
              GitHub
            </a>
          </div>

          {/* Download Resume */}
          <div className="flex items-center gap-4 justify-center lg:justify-start mb-6">
            <a
              href="/hari_resume_software_devolper.html"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-slate-400 hover:text-indigo-400 transition-colors text-sm group"
            >
              <FileText size={15} className="group-hover:scale-110 transition-transform" />
              <span>Download Resume</span>
            </a>
            <span className="text-slate-700">•</span>
            <a
              href="mailto:harilook4u@gmail.com"
              className="flex items-center gap-2 text-slate-400 hover:text-indigo-400 transition-colors text-sm"
            >
              <Mail size={15} />
              harilook4u@gmail.com
            </a>
            <span className="text-slate-700 hidden sm:inline">•</span>
            <a
              href="tel:+919629521559"
              className="hidden sm:flex items-center gap-2 text-slate-400 hover:text-indigo-400 transition-colors text-sm"
            >
              <Phone size={15} />
              +91 9629521559
            </a>
          </div>

          {/* Quick stat pills */}
          <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
            {[
              { label: '2+ Yrs Exp', color: 'bg-indigo-500/10 border-indigo-500/20 text-indigo-300' },
              { label: '500+ Users Served', color: 'bg-purple-500/10 border-purple-500/20 text-purple-300' },
              { label: '40% Faster Load', color: 'bg-cyan-500/10 border-cyan-500/20 text-cyan-300' },
              { label: '10+ Features Shipped', color: 'bg-green-500/10 border-green-500/20 text-green-300' },
            ].map((pill) => (
              <span
                key={pill.label}
                className={`px-3 py-1 rounded-full border text-xs font-medium ${pill.color}`}
              >
                {pill.label}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Avatar */}
        <motion.div
          className="flex-shrink-0 float"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.15 }}
        >
          <div className="relative w-72 h-72 lg:w-80 lg:h-80">
            {/* Outer ring */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-indigo-600 via-purple-600 to-cyan-500 p-1 glow">
              <div className="w-full h-full rounded-full bg-[#0a0a0f] flex items-center justify-center">
                <div className="w-full h-full rounded-full bg-gradient-to-br from-indigo-900/80 to-purple-900/80 flex flex-col items-center justify-center gap-2">
                  <span className="text-7xl font-black gradient-text">HK</span>
                  <span className="text-slate-400 text-sm font-medium tracking-widest uppercase">Developer</span>
                </div>
              </div>
            </div>

            {/* Floating badges */}
            {floatingBadges.map((b) => (
              <div
                key={b.title}
                className={`${b.pos} bg-[#0f0f1a] border ${b.border} rounded-xl px-3 py-2 flex items-center gap-2 shadow-lg`}
              >
                <span className="text-lg">{b.emoji}</span>
                <div>
                  <div className="text-white text-xs font-semibold">{b.title}</div>
                  <div className="text-slate-400 text-[10px]">{b.sub}</div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-500 hover:text-slate-300 transition-colors"
      >
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <ChevronDown size={20} className="animate-bounce" />
      </a>
    </section>
  );
}
