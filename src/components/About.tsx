'use client';

import { User, MapPin, Calendar, GraduationCap, Flag, Github } from 'lucide-react';

const stats = [
  { value: '2+', label: 'Years Experience' },
  { value: '5+', label: 'Technologies' },
  { value: 'MCA', label: 'Qualification' },
  { value: '80%', label: 'Academic Score' },
];

const personalDetails = [
  { icon: Calendar, label: 'Date of Birth', value: '29 December 1999' },
  { icon: GraduationCap, label: 'Qualification', value: 'MCA' },
  { icon: Flag, label: 'Nationality', value: 'Indian' },
  { icon: MapPin, label: 'Location', value: 'Paruvakkudi, Tamil Nadu' },
];

const hobbies = ['🏃 Sports', '🎮 Gaming', '✈️ Traveling', '🎵 Music', '🍳 Cooking'];

export default function About() {
  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-indigo-400 text-sm font-semibold tracking-widest uppercase mb-3">Who I Am</p>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full mx-auto" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left - Summary */}
          <div>
            <div className="animated-border rounded-2xl bg-[#0f0f1a] p-8 mb-6 card-hover">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-indigo-600/20 flex items-center justify-center">
                  <User size={20} className="text-indigo-400" />
                </div>
                <h3 className="text-xl font-bold text-white">Profile Summary</h3>
              </div>
              <p className="text-slate-400 leading-relaxed">
                Motivated and dedicated developer with a strong foundation in programming principles.
                Skilled in <span className="text-indigo-400 font-medium">Java</span>, JavaScript frameworks like{' '}
                <span className="text-indigo-400 font-medium">Next.js</span> and{' '}
                <span className="text-indigo-400 font-medium">Nest.js</span>. Passionate about creating
                efficient and reliable applications. Strong problem solving and teamwork abilities.
                Eager to contribute to software development projects.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, i) => (
                <div
                  key={i}
                  className="bg-[#0f0f1a] border border-white/5 rounded-2xl p-5 text-center card-hover"
                >
                  <div className="text-3xl font-black gradient-text mb-1">{stat.value}</div>
                  <div className="text-slate-400 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Personal Details + Hobbies */}
          <div className="flex flex-col gap-6">
            {/* Personal Details */}
            <div className="bg-[#0f0f1a] border border-white/5 rounded-2xl p-8 card-hover">
              <h3 className="text-xl font-bold text-white mb-6">Personal Details</h3>
              <div className="flex flex-col gap-4">
                {personalDetails.map((detail, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <div className="w-9 h-9 rounded-lg bg-indigo-600/10 flex items-center justify-center flex-shrink-0">
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
                  <div className="w-9 h-9 rounded-lg bg-indigo-600/10 flex items-center justify-center flex-shrink-0">
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
            </div>

            {/* Hobbies */}
            <div className="bg-[#0f0f1a] border border-white/5 rounded-2xl p-8 card-hover">
              <h3 className="text-xl font-bold text-white mb-5">Hobbies & Interests</h3>
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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
