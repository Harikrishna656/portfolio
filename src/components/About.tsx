'use client';

import { User, MapPin, Calendar, GraduationCap, Flag, Github } from 'lucide-react';
import { motion, type Variants } from 'framer-motion';

const easeOut: [number, number, number, number] = [0, 0, 0.2, 1];

const stats = [
  { value: '2+', label: 'Years Experience', color: 'text-indigo-400' },
  { value: '500+', label: 'Users Served', color: 'text-purple-400' },
  { value: '10+', label: 'Features Shipped', color: 'text-cyan-400' },
  { value: '80%', label: 'MCA Score', color: 'text-green-400' },
];

const personalDetails = [
  { icon: Calendar, label: 'Date of Birth', value: '29 December 1999' },
  { icon: GraduationCap, label: 'Qualification', value: 'MCA (Distinction)' },
  { icon: Flag, label: 'Nationality', value: 'Indian' },
  { icon: MapPin, label: 'Location', value: 'Paruvakkudi, Tamil Nadu' },
];

const hobbies = ['🏃 Sports', '🎮 Gaming', '✈️ Traveling', '🎵 Music', '🍳 Cooking'];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: easeOut } },
};

const stagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

export default function About() {
  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <p className="text-indigo-400 text-sm font-semibold tracking-widest uppercase mb-3">Who I Am</p>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full mx-auto" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left – Summary + Stats */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-60px' }}
          >
            <motion.div variants={fadeUp} className="animated-border rounded-2xl bg-[#0f0f1a] p-8 mb-6 card-hover">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-indigo-600/20 flex items-center justify-center">
                  <User size={20} className="text-indigo-400" />
                </div>
                <h3 className="text-xl font-bold text-white">Profile Summary</h3>
              </div>
              <p className="text-slate-400 leading-relaxed">
                Results-driven full-stack developer with{' '}
                <span className="text-indigo-400 font-medium">2+ years</span> of professional experience
                building scalable, production-grade web applications. At Global Software Solutions, shipped the{' '}
                <span className="text-purple-400 font-medium">Torus low-code platform</span> serving{' '}
                <span className="text-indigo-400 font-medium">500+ active users</span>, achieving a{' '}
                <span className="text-cyan-400 font-medium">40% reduction in page load times</span> and{' '}
                <span className="text-cyan-400 font-medium">30% faster database queries</span>. Proficient in
                Next.js, Nest.js, TypeScript, and multi-database architectures. Strong foundation in
                OOP, system design, and clean code principles.
              </p>
            </motion.div>

            {/* Stats */}
            <motion.div variants={stagger} className="grid grid-cols-2 gap-4">
              {stats.map((stat, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  className="bg-[#0f0f1a] border border-white/5 rounded-2xl p-5 text-center card-hover"
                >
                  <div className={`text-3xl font-black mb-1 ${stat.color}`}>{stat.value}</div>
                  <div className="text-slate-400 text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right – Personal Details + Hobbies */}
          <motion.div
            className="flex flex-col gap-6"
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-60px' }}
          >
            {/* Personal Details */}
            <motion.div variants={fadeUp} className="bg-[#0f0f1a] border border-white/5 rounded-2xl p-8 card-hover">
              <h3 className="text-xl font-bold text-white mb-6">Personal Details</h3>
              <div className="flex flex-col gap-4">
                {personalDetails.map((detail, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <div className="w-9 h-9 rounded-lg bg-indigo-600/10 flex items-center justify-center shrink-0">
                      <detail.icon size={16} className="text-indigo-400" />
                    </div>
                    <div>
                      <p className="text-slate-500 text-xs uppercase tracking-wide">{detail.label}</p>
                      <p className="text-white text-sm font-medium">{detail.value}</p>
                    </div>
                  </div>
                ))}

                {/* GitHub row */}
                <div className="flex items-center gap-4">
                  <div className="w-9 h-9 rounded-lg bg-indigo-600/10 flex items-center justify-center shrink-0">
                    <Github size={16} className="text-indigo-400" />
                  </div>
                  <div>
                    <p className="text-slate-500 text-xs uppercase tracking-wide">GitHub</p>
                    <a
                      href="https://github.com/Harikrishna656"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-indigo-400 text-sm font-medium hover:text-indigo-300 transition-colors"
                    >
                      github.com/Harikrishna656
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Hobbies */}
            <motion.div variants={fadeUp} className="bg-[#0f0f1a] border border-white/5 rounded-2xl p-8 card-hover">
              <h3 className="text-xl font-bold text-white mb-5">Hobbies &amp; Interests</h3>
              <div className="flex flex-wrap gap-3">
                {hobbies.map((hobby, i) => (
                  <span
                    key={i}
                    className="px-4 py-2 rounded-full bg-indigo-600/10 border border-indigo-500/20 text-slate-300 text-sm font-medium hover:bg-indigo-600/20 transition-colors cursor-default"
                  >
                    {hobby}
                  </span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
