'use client';

import { GraduationCap, Award } from 'lucide-react';
import { motion, type Variants } from 'framer-motion';

const easeOut: [number, number, number, number] = [0, 0, 0.2, 1];

const education = [
  {
    degree: 'MCA',
    field: 'Master of Computer Applications',
    school: 'Presidency College (Autonomous)',
    year: '2021 – 2023',
    score: '80%',
    grade: 'Distinction',
    icon: '🎓',
    color: 'indigo',
  },
  {
    degree: 'B.Sc.',
    field: 'Bachelor of Science — Computer Science',
    school: "St. John's College",
    year: '2017 – 2020',
    score: '70%',
    grade: 'First Class',
    icon: '📚',
    color: 'purple',
  },
  {
    degree: 'HSC',
    field: 'Higher Secondary Certificate',
    school: 'Palaniappa Higher Secondary School',
    year: '2017',
    score: '80%',
    grade: 'Distinction',
    icon: '🏫',
    color: 'cyan',
  },
  {
    degree: 'SSLC',
    field: 'Secondary School Leaving Certificate',
    school: 'Palaniappa Higher Secondary School',
    year: '2015',
    score: '90%',
    grade: 'Distinction',
    icon: '⭐',
    color: 'green',
  },
];

const colorMap: Record<string, { bg: string; border: string; text: string; bar: string; badge: string }> = {
  indigo: {
    bg: 'bg-indigo-600/10',
    border: 'border-indigo-500/30',
    text: 'text-indigo-400',
    bar: 'bg-gradient-to-r from-indigo-500 to-indigo-700',
    badge: 'bg-indigo-500/10 border-indigo-500/20 text-indigo-400',
  },
  purple: {
    bg: 'bg-purple-600/10',
    border: 'border-purple-500/30',
    text: 'text-purple-400',
    bar: 'bg-gradient-to-r from-purple-500 to-purple-700',
    badge: 'bg-purple-500/10 border-purple-500/20 text-purple-400',
  },
  cyan: {
    bg: 'bg-cyan-600/10',
    border: 'border-cyan-500/30',
    text: 'text-cyan-400',
    bar: 'bg-gradient-to-r from-cyan-500 to-cyan-700',
    badge: 'bg-cyan-500/10 border-cyan-500/20 text-cyan-400',
  },
  green: {
    bg: 'bg-green-600/10',
    border: 'border-green-500/30',
    text: 'text-green-400',
    bar: 'bg-gradient-to-r from-green-500 to-green-700',
    badge: 'bg-green-500/10 border-green-500/20 text-green-400',
  },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: easeOut } },
};

const stagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.14 } },
};

export default function Education() {
  return (
    <section id="education" className="py-24 relative bg-[#0d0d16]">
      {/* Background accents */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-purple-500/30 to-transparent" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-purple-500/30 to-transparent" />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <p className="text-indigo-400 text-sm font-semibold tracking-widest uppercase mb-3">Academic Background</p>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            My <span className="gradient-text">Education</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full mx-auto" />
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Center vertical line */}
          <div className="absolute left-1/2 -translate-x-px top-0 bottom-0 w-px bg-gradient-to-b from-indigo-600 via-purple-600 to-transparent hidden lg:block" />

          <motion.div
            className="flex flex-col gap-8"
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-60px' }}
          >
            {education.map((edu, i) => {
              const c = colorMap[edu.color];
              const isLeft = i % 2 === 0;
              const scoreNum = parseInt(edu.score);

              return (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  className={`lg:flex items-center gap-8 ${isLeft ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}
                >
                  {/* Card */}
                  <div className="flex-1">
                    <div className={`bg-[#0a0a0f] border ${c.border} rounded-2xl p-6 card-hover`}>
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center gap-4">
                          <div className={`w-12 h-12 rounded-2xl ${c.bg} flex items-center justify-center text-2xl`}>
                            {edu.icon}
                          </div>
                          <div>
                            <div className="flex items-center gap-2">
                              <h3 className={`text-xl font-bold ${c.text}`}>{edu.degree}</h3>
                              <span className={`text-xs px-2 py-0.5 rounded-full border ${c.badge}`}>
                                {edu.grade}
                              </span>
                            </div>
                            <p className="text-white font-medium text-sm">{edu.field}</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className={`text-2xl font-black ${c.text}`}>{edu.score}</div>
                          <div className="text-slate-500 text-xs">{edu.year}</div>
                        </div>
                      </div>

                      <div className="flex items-center gap-2 mb-4">
                        <GraduationCap size={14} className="text-slate-500" />
                        <span className="text-slate-400 text-sm">{edu.school}</span>
                      </div>

                      {/* Animated score bar */}
                      <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
                        <motion.div
                          className={`h-full rounded-full ${c.bar}`}
                          initial={{ width: 0 }}
                          whileInView={{ width: `${scoreNum}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.9, delay: i * 0.1, ease: easeOut }}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Center dot */}
                  <div className={`hidden lg:flex w-5 h-5 rounded-full ${c.bar} border-4 border-[#0d0d16] shrink-0 relative z-10`} />

                  {/* Empty space for alternating layout */}
                  <div className="flex-1 hidden lg:block" />
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* Achievement highlight */}
        <motion.div
          className="mt-16 bg-gradient-to-r from-indigo-900/30 via-purple-900/30 to-cyan-900/30 border border-indigo-500/20 rounded-2xl p-8 text-center"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <div className="flex items-center justify-center gap-3 mb-3">
            <Award size={24} className="text-yellow-400" />
            <h3 className="text-xl font-bold text-white">Academic Achievement</h3>
          </div>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Consistently strong academic record —{' '}
            <span className="text-indigo-400 font-semibold">90% in SSLC</span>,{' '}
            <span className="text-indigo-400 font-semibold">80% in both HSC and MCA (Distinction)</span>,
            demonstrating dedication to excellence throughout the academic journey.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
