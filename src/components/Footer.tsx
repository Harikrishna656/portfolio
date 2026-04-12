'use client';

import { Mail, Phone, Github, Code2, Heart } from 'lucide-react';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
];

export default function Footer() {
  return (
    <footer className="relative bg-[#080810] border-t border-white/5">
      {/* Top gradient line */}
      <div className="h-px bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent" />

      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-lg bg-indigo-600 flex items-center justify-center">
                <Code2 size={18} className="text-white" />
              </div>
              <span className="font-bold text-lg text-white">HK<span className="text-indigo-400">.</span></span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              Full-stack developer passionate about building scalable and efficient web applications using modern technologies.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-slate-400 hover:text-indigo-400 transition-colors text-sm"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <div className="flex flex-col gap-3">
              <a
                href="mailto:harilook4u@gmail.com"
                className="flex items-center gap-2 text-slate-400 hover:text-indigo-400 transition-colors text-sm"
              >
                <Mail size={14} />
                harilook4u@gmail.com
              </a>
              <a
                href="tel:+919629521559"
                className="flex items-center gap-2 text-slate-400 hover:text-indigo-400 transition-colors text-sm"
              >
                <Phone size={14} />
                +91 9629521559
              </a>
              <a
                href="https://github.com/Harikrishna656"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-slate-400 hover:text-indigo-400 transition-colors text-sm"
              >
                <Github size={14} />
                github.com/Harikrishna656
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-sm text-center sm:text-left">
            © {new Date().getFullYear()} Hari Krishna. All rights reserved.
          </p>
          <p className="text-slate-500 text-sm flex items-center gap-1.5">
            Built with <Heart size={14} className="text-red-400 fill-red-400" /> using Next.js & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
