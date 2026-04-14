'use client';

import { motion, type Variants } from 'framer-motion';

const easeOut: [number, number, number, number] = [0, 0, 0.2, 1];

const technicalSkills = [
  { name: 'Java', icon: '☕', level: 85, category: 'Language' },
  { name: 'JavaScript', icon: '🟨', level: 90, category: 'Language' },
  { name: 'TypeScript', icon: '🔷', level: 82, category: 'Language' },
  { name: 'Next.js', icon: '▲', level: 88, category: 'Frontend' },
  { name: 'HTML & CSS', icon: '🎨', level: 90, category: 'Frontend' },
  { name: 'Tailwind CSS', icon: '💨', level: 88, category: 'Frontend' },
  { name: 'Nest.js', icon: '🦁', level: 85, category: 'Backend' },
  { name: 'Spring Boot', icon: '🌿', level: 75, category: 'Backend' },
  { name: 'MySQL', icon: '🐬', level: 82, category: 'Database' },
  { name: 'PostgreSQL', icon: '🐘', level: 80, category: 'Database' },
  { name: 'MongoDB', icon: '🍃', level: 78, category: 'Database' },
  { name: 'Redis', icon: '🔴', level: 75, category: 'Database' },
];

const keySkills = [
  { name: 'OOPs', icon: '🧱', desc: 'Object-Oriented Design' },
  { name: 'Debugging', icon: '🐛', desc: 'Root Cause Analysis' },
  { name: 'Analysis', icon: '📊', desc: 'System & Code Analysis' },
  { name: 'Problem Solving', icon: '💡', desc: 'Algorithmic Thinking' },
  { name: 'Adaptability', icon: '🔄', desc: 'Quick Learner' },
  { name: 'Teamwork', icon: '🤝', desc: 'Cross-functional Collab' },
];

const categoryColors: Record<string, string> = {
  Language: 'from-indigo-500 to-indigo-700',
  Frontend: 'from-purple-500 to-purple-700',
  Backend: 'from-cyan-500 to-cyan-700',
  Database: 'from-green-500 to-green-700',
};

const categoryBg: Record<string, string> = {
  Language: 'bg-indigo-500/10 border-indigo-500/20 text-indigo-400',
  Frontend: 'bg-purple-500/10 border-purple-500/20 text-purple-400',
  Backend: 'bg-cyan-500/10 border-cyan-500/20 text-cyan-400',
  Database: 'bg-green-500/10 border-green-500/20 text-green-400',
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: easeOut } },
};

const stagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.06 } },
};

const competencyStagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

export default function Skills() {
  return (
    <section id="skills" className="py-24 relative bg-[#0d0d16]">
      {/* Background accent lines */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-indigo-500/30 to-transparent" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-indigo-500/30 to-transparent" />
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
          <p className="text-indigo-400 text-sm font-semibold tracking-widest uppercase mb-3">What I Know</p>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full mx-auto" />
        </motion.div>

        {/* Technical Skills Grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-16"
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
        >
          {technicalSkills.map((skill, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              className="bg-[#0a0a0f] border border-white/5 rounded-2xl p-5 card-hover group"
            >
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{skill.icon}</span>
                  <div>
                    <h4 className="text-white font-semibold text-sm">{skill.name}</h4>
                    <span className={`text-xs px-2 py-0.5 rounded-full border ${categoryBg[skill.category]}`}>
                      {skill.category}
                    </span>
                  </div>
                </div>
                <span className="text-slate-400 text-sm font-medium">{skill.level}%</span>
              </div>

              {/* Progress bar */}
              <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
                <motion.div
                  className={`h-full rounded-full bg-gradient-to-r ${categoryColors[skill.category]}`}
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.9, delay: i * 0.04, ease: easeOut }}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Key Competencies */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-white mb-8 text-center">
            Key <span className="gradient-text">Competencies</span>
          </h3>
          <motion.div
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4"
            variants={competencyStagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-40px' }}
          >
            {keySkills.map((skill, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className="animated-border bg-[#0a0a0f] rounded-2xl p-5 text-center card-hover flex flex-col items-center gap-3"
              >
                <span className="text-3xl">{skill.icon}</span>
                <div>
                  <h4 className="text-white font-semibold text-sm">{skill.name}</h4>
                  <p className="text-slate-500 text-xs mt-1">{skill.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
