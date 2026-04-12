'use client';

const technicalSkills = [
  { name: 'Java', icon: '☕', level: 85, category: 'Language' },
  { name: 'JavaScript', icon: '🟨', level: 90, category: 'Language' },
  { name: 'Next.js', icon: '▲', level: 88, category: 'Frontend' },
  { name: 'Nest.js', icon: '🦁', level: 85, category: 'Backend' },
  { name: 'Spring Boot', icon: '🌿', level: 75, category: 'Backend' },
  { name: 'HTML & CSS', icon: '🎨', level: 90, category: 'Frontend' },
  { name: 'Tailwind CSS', icon: '💨', level: 88, category: 'Frontend' },
  { name: 'MySQL', icon: '🐬', level: 82, category: 'Database' },
  { name: 'PostgreSQL', icon: '🐘', level: 80, category: 'Database' },
  { name: 'MongoDB', icon: '🍃', level: 78, category: 'Database' },
  { name: 'Redis', icon: '🔴', level: 75, category: 'Database' },
  { name: 'TypeScript', icon: '🔷', level: 82, category: 'Language' },
];

const keySkills = [
  { name: 'OOPs', icon: '🧱', desc: 'Object-Oriented Design' },
  { name: 'Debugging', icon: '🐛', desc: 'Root Cause Analysis' },
  { name: 'Analysis', icon: '📊', desc: 'System & Code Analysis' },
  { name: 'Problem Solving', icon: '💡', desc: 'Algorithmic Thinking' },
  { name: 'Adaptability', icon: '🔄', desc: 'Quick Learner' },
  { name: 'Teamwork', icon: '🤝', desc: 'Cross-functional Collaboration' },
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

export default function Skills() {
  return (
    <section id="skills" className="py-24 relative bg-[#0d0d16]">
      {/* Background accent */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-indigo-500/30 to-transparent" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-indigo-500/30 to-transparent" />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-indigo-400 text-sm font-semibold tracking-widest uppercase mb-3">What I Know</p>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full mx-auto" />
        </div>

        {/* Technical Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-16">
          {technicalSkills.map((skill, i) => (
            <div
              key={i}
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
                <div
                  className={`h-full rounded-full bg-gradient-to-r ${categoryColors[skill.category]} transition-all duration-700 group-hover:opacity-100 opacity-80`}
                  style={{ width: `${skill.level}%` }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Key Soft Skills */}
        <div>
          <h3 className="text-2xl font-bold text-white mb-8 text-center">
            Key <span className="gradient-text">Competencies</span>
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {keySkills.map((skill, i) => (
              <div
                key={i}
                className="animated-border bg-[#0a0a0f] rounded-2xl p-5 text-center card-hover flex flex-col items-center gap-3"
              >
                <span className="text-3xl">{skill.icon}</span>
                <div>
                  <h4 className="text-white font-semibold text-sm">{skill.name}</h4>
                  <p className="text-slate-500 text-xs mt-1">{skill.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
