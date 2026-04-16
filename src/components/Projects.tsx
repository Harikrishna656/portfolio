'use client';

import { ExternalLink, Github, Users, Zap, Code2, Globe, ArrowRight } from 'lucide-react';
import { motion, type Variants } from 'framer-motion';

// Cubic-bezier equivalent of easeOut — avoids string literal typing issues in FM v12
const easeOut: [number, number, number, number] = [0, 0, 0.2, 1];

const projects = [
  {
    id: 'torus',
    name: 'Torus',
    tagline: 'Low-Code Platform',
    role: 'Developer',
    status: 'Professional',
    statusColor: 'bg-indigo-500/10 border-indigo-500/20 text-indigo-400',
    description:
      'Enterprise-grade drag-and-drop web app builder that enables users to create full-featured web applications without deep coding knowledge. The platform supports dynamic form generation, role-based access control, multi-database connectors, and real-time data rendering — working as a developer on this product at Global Software Solutions.',
    highlights: [
      'Platform serves 500+ active users in production',
      'Contributed to a 40% reduction in page load times via Next.js & TypeScript optimizations',
      'Helped achieve 30% faster database queries through Redis caching integration',
      'Contributed to features that decreased end-user development time by 60%',
      'Worked on 10+ features across 3 product sprints as part of the dev team',
    ],
    metrics: [
      { icon: Users, value: '500+', label: 'Active Users', color: 'text-indigo-400' },
      { icon: Zap, value: '40%', label: 'Faster Load', color: 'text-purple-400' },
      { icon: Code2, value: '60%', label: 'Dev Time Saved', color: 'text-cyan-400' },
    ],
    tech: ['Next.js', 'Nest.js', 'TypeScript', 'PostgreSQL', 'MySQL', 'MongoDB', 'Redis', 'Docker'],
    github: null,
    live: null,
    featured: true,
    accent: {
      gradient: 'from-indigo-600/20 via-purple-600/10 to-transparent',
      border: 'border-indigo-500/20',
      dot: 'bg-indigo-500',
      glow: 'rgba(99,102,241,0.15)',
    },
  },
  {
    id: 'portfolio',
    name: 'Personal Portfolio',
    tagline: 'Developer Showcase',
    role: 'Solo Project',
    status: 'Live',
    statusColor: 'bg-green-500/10 border-green-500/20 text-green-400',
    description:
      'A fully responsive single-page portfolio website with smooth Framer Motion animations, interactive skill proficiency charts, dark theme design, and a working contact form. Continuously deployed to Vercel via GitHub Actions.',
    highlights: [
      'Built with Next.js App Router and TypeScript',
      'Framer Motion scroll-triggered reveal animations',
      'Interactive skill progress bars and section navigation',
      'Mobile-first responsive design with Tailwind CSS',
      'Zero-downtime deployments via Vercel CI/CD',
    ],
    metrics: [
      { icon: Globe, value: 'Live', label: 'Deployed', color: 'text-green-400' },
      { icon: Zap, value: '100%', label: 'Responsive', color: 'text-cyan-400' },
      { icon: Code2, value: 'CI/CD', label: 'Auto Deploy', color: 'text-purple-400' },
    ],
    tech: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Vercel', 'Lucide React'],
    github: 'https://github.com/Harikrishna656',
    live: 'https://myinfo-tau.vercel.app/',
    featured: false,
    accent: {
      gradient: 'from-cyan-600/20 via-indigo-600/10 to-transparent',
      border: 'border-cyan-500/20',
      dot: 'bg-cyan-500',
      glow: 'rgba(6,182,212,0.15)',
    },
  },
];

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.18 } },
};

const cardVariant: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: easeOut } },
};

const headerVariant: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Projects() {
  return (
    <section id="projects" className="py-24 relative bg-[#0d0d16]">
      {/* Background accents */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-indigo-500/30 to-transparent" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-indigo-500/30 to-transparent" />
        <div className="absolute top-1/3 left-0 w-72 h-72 bg-indigo-600/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-0 w-72 h-72 bg-purple-600/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          variants={headerVariant}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <p className="text-indigo-400 text-sm font-semibold tracking-widest uppercase mb-3">What I've Built</p>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full mx-auto mb-5" />
          <p className="text-slate-400 max-w-xl mx-auto text-sm">
            Projects that reflect real-world impact — built with production-grade tech stacks and shipped to live users.
          </p>
        </motion.div>

        {/* Project Cards */}
        <motion.div
          className="flex flex-col gap-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={cardVariant}
              className={`group relative bg-[#0a0a0f] border ${project.accent.border} rounded-3xl overflow-hidden card-hover`}
              style={{ boxShadow: `0 0 60px ${project.accent.glow}` }}
            >
              {/* Top gradient stripe */}
              <div className={`absolute top-0 left-0 right-0 h-px bg-gradient-to-r ${project.accent.gradient}`} />

              {/* Inner gradient background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${project.accent.gradient} opacity-40 pointer-events-none`} />

              <div className="relative p-8 lg:p-10">
                {/* Header row */}
                <div className="flex flex-wrap gap-4 items-start justify-between mb-6">
                  <div>
                    <div className="flex items-center gap-3 mb-1.5">
                      <div className={`w-2.5 h-2.5 rounded-full ${project.accent.dot} animate-pulse`} />
                      <h3 className="text-2xl lg:text-3xl font-bold text-white">{project.name}</h3>
                      <span className="text-slate-500 text-lg font-light">—</span>
                      <span className="text-slate-400 text-base font-medium">{project.tagline}</span>
                    </div>
                    <p className="text-slate-500 text-xs uppercase tracking-wider ml-6">{project.role}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className={`px-3 py-1 rounded-full border text-xs font-semibold ${project.statusColor}`}>
                      {project.status}
                    </span>
                  </div>
                </div>

                <div className="grid lg:grid-cols-3 gap-8">
                  {/* Left - Description + Highlights */}
                  <div className="lg:col-span-2">
                    <p className="text-slate-400 text-sm leading-relaxed mb-5">{project.description}</p>

                    <h4 className="text-xs font-semibold text-slate-300 uppercase tracking-widest mb-3">Key Achievements</h4>
                    <ul className="space-y-2 mb-6">
                      {project.highlights.map((h, i) => (
                        <li key={i} className="flex items-start gap-2.5 text-slate-400 text-sm">
                          <ArrowRight size={14} className="text-indigo-400 flex-shrink-0 mt-0.5" />
                          {h}
                        </li>
                      ))}
                    </ul>

                    {/* Tech Stack */}
                    <h4 className="text-xs font-semibold text-slate-300 uppercase tracking-widest mb-3">Tech Stack</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((t) => (
                        <span
                          key={t}
                          className="px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-slate-300 text-xs font-medium hover:border-indigo-500/40 hover:text-indigo-300 transition-colors"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Right - Metrics + Links */}
                  <div className="flex flex-col gap-5">
                    {/* Metrics */}
                    <div className="bg-white/3 rounded-2xl p-5 border border-white/5">
                      <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-4">Impact</h4>
                      <div className="flex flex-col gap-4">
                        {project.metrics.map((m, i) => (
                          <div key={i} className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center flex-shrink-0">
                              <m.icon size={16} className={m.color} />
                            </div>
                            <div>
                              <div className={`text-xl font-black ${m.color}`}>{m.value}</div>
                              <div className="text-slate-500 text-xs">{m.label}</div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Links */}
                    <div className="flex flex-col gap-3">
                      {project.live && (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-semibold transition-all hover:shadow-lg hover:shadow-indigo-500/30 hover:-translate-y-0.5"
                        >
                          <ExternalLink size={15} />
                          View Live Site
                        </a>
                      )}
                      {project.github ? (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 text-white text-sm font-semibold transition-all hover:-translate-y-0.5"
                        >
                          <Github size={15} />
                          View on GitHub
                        </a>
                      ) : (
                        <div className="flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl border border-white/5 bg-white/3 text-slate-500 text-sm cursor-default select-none">
                          🏢 Private Company Project
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* GitHub CTA */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <p className="text-slate-500 text-sm mb-4">More projects and contributions on GitHub</p>
          <a
            href="https://github.com/Harikrishna656"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 text-white text-sm font-semibold transition-all hover:-translate-y-0.5"
          >
            <Github size={16} />
            github.com/Harikrishna656
          </a>
        </motion.div>
      </div>
    </section>
  );
}
