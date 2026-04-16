'use client';

import { Briefcase, Calendar, MapPin, CheckCircle } from 'lucide-react';
import { motion, type Variants } from 'framer-motion';

const experiences = [
  {
    role: 'Web Application Developer',
    company: 'Global Software Solutions',
    location: 'Tirunelveli, Tamil Nadu',
    duration: 'Nov 2023 – Present',
    type: 'Full-time · 2 Years',
    highlights: [
      'Contributed to the full-stack development of Torus, a low-code platform serving 500+ active users, enabling anyone to build web apps via an intuitive drag-and-drop interface.',
      'Developed high-performance UIs with Next.js & TypeScript and RESTful back-end services with Nest.js — helping reduce average page load time by 40%.',
      'Implemented multi-database integrations (MySQL, PostgreSQL, MongoDB, Redis) contributing to a 30% improvement in query response times via in-memory caching and session management.',
      'Collaborated with design, QA, and DevOps teams to deliver 10+ new features across 3 product sprints; participated in CI/CD pipeline improvements.',
      'Participated in code reviews and refactored legacy modules, contributing to a 25% reduction in production bugs over two quarters.',
    ],
    tech: ['Next.js', 'Nest.js', 'TypeScript', 'MySQL', 'PostgreSQL', 'MongoDB', 'Redis', 'Docker'],
    project: 'Torus – Low-Code Platform',
    metrics: [
      { value: '500+', label: 'Users', color: 'text-indigo-400' },
      { value: '40%', label: 'Faster Load', color: 'text-purple-400' },
      { value: '25%', label: 'Fewer Bugs', color: 'text-cyan-400' },
    ],
  },
];

const internships = [
  {
    role: 'Web Development Intern',
    company: 'Tamilnadu Tourism Development Corporation (TTDC)',
    type: 'Government Internship · 2022',
    icon: '🏛️',
    detail: 'Developed and maintained web pages for the TTDC portal using HTML, CSS, and JavaScript.',
  },
  {
    role: 'Online Trainee',
    company: 'Internshala Trainings',
    type: 'Certification Training · 2022',
    icon: '🎓',
    detail: 'Completed structured web development training covering HTML, CSS, JavaScript, and modern frameworks.',
  },
];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0, 0, 0.2, 1] } },
};

export default function Experience() {
  return (
    <section id="experience" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <p className="text-indigo-400 text-sm font-semibold tracking-widest uppercase mb-3">My Journey</p>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full mx-auto" />
        </motion.div>

        {/* Work Experience Timeline */}
        <div className="relative mb-16">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-indigo-600 via-purple-600 to-transparent hidden md:block" />

          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              className="md:pl-20 relative"
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: '-60px' }}
            >
              {/* Timeline dot */}
              <div className="absolute left-5 top-8 w-6 h-6 rounded-full bg-indigo-600 border-4 border-[#0a0a0f] glow hidden md:block" />

              <div className="animated-border bg-[#0f0f1a] rounded-2xl p-8 card-hover">
                {/* Header */}
                <div className="flex flex-wrap gap-4 items-start justify-between mb-6">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-10 h-10 rounded-xl bg-indigo-600/20 flex items-center justify-center">
                        <Briefcase size={20} className="text-indigo-400" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                        <p className="text-indigo-400 font-medium">{exp.company}</p>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-4 text-sm text-slate-400 ml-13">
                      <span className="flex items-center gap-1.5">
                        <Calendar size={14} className="text-slate-500" />
                        {exp.duration}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <MapPin size={14} className="text-slate-500" />
                        {exp.location}
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2 items-end">
                    <span className="px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-xs font-medium">
                      {exp.type}
                    </span>
                    <span className="px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-medium">
                      📦 {exp.project}
                    </span>
                  </div>
                </div>

                {/* Impact Metrics */}
                <div className="grid grid-cols-3 gap-3 mb-6 p-4 bg-white/3 rounded-xl border border-white/5">
                  {exp.metrics.map((m, j) => (
                    <div key={j} className="text-center">
                      <div className={`text-2xl font-black ${m.color}`}>{m.value}</div>
                      <div className="text-slate-500 text-xs">{m.label}</div>
                    </div>
                  ))}
                </div>

                {/* Highlights */}
                <div className="mb-6">
                  <h4 className="text-xs font-semibold text-slate-300 uppercase tracking-widest mb-4">Key Contributions</h4>
                  <ul className="space-y-3">
                    {exp.highlights.map((h, j) => (
                      <li key={j} className="flex items-start gap-3 text-slate-400 text-sm leading-relaxed">
                        <CheckCircle size={16} className="text-indigo-400 shrink-0 mt-0.5" />
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Stack */}
                <div>
                  <h4 className="text-xs font-semibold text-slate-300 uppercase tracking-widest mb-3">Tech Stack</h4>
                  <div className="flex flex-wrap gap-2">
                    {exp.tech.map((t, j) => (
                      <span
                        key={j}
                        className="px-3 py-1.5 rounded-lg bg-indigo-600/10 border border-indigo-500/20 text-indigo-300 text-xs font-medium"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Internships */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
        >
          <h3 className="text-2xl font-bold text-white mb-8 text-center">
            <span className="gradient-text">Internships</span> &amp; Training
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            {internships.map((intern, i) => (
              <div
                key={i}
                className="bg-[#0f0f1a] border border-white/5 rounded-2xl p-6 flex items-start gap-5 card-hover"
              >
                <div className="w-14 h-14 rounded-2xl bg-indigo-600/10 flex items-center justify-center text-3xl shrink-0">
                  {intern.icon}
                </div>
                <div>
                  <h4 className="text-white font-semibold">{intern.role}</h4>
                  <p className="text-indigo-400 text-sm mb-1">{intern.company}</p>
                  <span className="text-slate-500 text-xs block mb-2">{intern.type}</span>
                  <p className="text-slate-400 text-xs leading-relaxed">{intern.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
