'use client';

import { useState } from 'react';
import { Mail, Phone, MapPin, Github, Send, CheckCircle } from 'lucide-react';

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'harilook4u@gmail.com',
    href: 'mailto:harilook4u@gmail.com',
    color: 'indigo',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+91 9629521559',
    href: 'tel:+919629521559',
    color: 'purple',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Paruvakkudi, Tamil Nadu, India',
    href: null,
    color: 'cyan',
  },
  {
    icon: Github,
    label: 'GitHub',
    value: 'github.com/Harikrishna656',
    href: 'https://github.com/Harikrishna656',
    color: 'green',
  },
];

const colorMap: Record<string, string> = {
  indigo: 'bg-indigo-600/10 text-indigo-400 border-indigo-500/20',
  purple: 'bg-purple-600/10 text-purple-400 border-purple-500/20',
  cyan: 'bg-cyan-600/10 text-cyan-400 border-cyan-500/20',
  green: 'bg-green-600/10 text-green-400 border-green-500/20',
};

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Build mailto link
    const mailto = `mailto:harilook4u@gmail.com?subject=${encodeURIComponent(form.subject || 'Portfolio Contact')}&body=${encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`
    )}`;
    window.open(mailto, '_blank');
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <section id="contact" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-indigo-400 text-sm font-semibold tracking-widest uppercase mb-3">Get In Touch</p>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Contact <span className="gradient-text">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full mx-auto mb-6" />
          <p className="text-slate-400 max-w-xl mx-auto">
            I&apos;m actively looking for new opportunities. Whether you have a question or just want to say hi,
            my inbox is always open!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Left - Contact Info */}
          <div className="flex flex-col gap-6">
            <div className="bg-[#0f0f1a] border border-white/5 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-white mb-6">Let&apos;s Connect</h3>
              <div className="flex flex-col gap-4">
                {contactInfo.map((info, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <div className={`w-12 h-12 rounded-xl border flex items-center justify-center flex-shrink-0 ${colorMap[info.color]}`}>
                      <info.icon size={20} />
                    </div>
                    <div>
                      <p className="text-slate-500 text-xs uppercase tracking-wide">{info.label}</p>
                      {info.href ? (
                        <a
                          href={info.href}
                          target={info.href.startsWith('http') ? '_blank' : undefined}
                          rel="noopener noreferrer"
                          className="text-white font-medium hover:text-indigo-400 transition-colors text-sm"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-white font-medium text-sm">{info.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Availability card */}
            <div className="animated-border bg-gradient-to-br from-indigo-900/30 via-purple-900/30 to-[#0f0f1a] rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-3">
                <span className="w-3 h-3 rounded-full bg-green-400 animate-pulse" />
                <span className="text-green-400 font-semibold">Available for Work</span>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed">
                Currently open to full-time roles and freelance projects. I specialize in
                <span className="text-indigo-400 font-medium"> Next.js, Nest.js</span>, and full-stack web development.
              </p>
              <a
                href="mailto:harilook4u@gmail.com"
                className="mt-4 inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-semibold transition-all hover:shadow-lg hover:shadow-indigo-500/30"
              >
                <Mail size={16} />
                Email Directly
              </a>
            </div>
          </div>

          {/* Right - Contact Form */}
          <form onSubmit={handleSubmit} className="bg-[#0f0f1a] border border-white/5 rounded-2xl p-8 flex flex-col gap-5">
            <h3 className="text-xl font-bold text-white">Send a Message</h3>

            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-slate-400 text-sm mb-2">Your Name</label>
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="Hari Krishna"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-600 text-sm focus:outline-none focus:border-indigo-500 focus:bg-indigo-500/5 transition-all"
                />
              </div>
              <div>
                <label className="block text-slate-400 text-sm mb-2">Your Email</label>
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="you@example.com"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-600 text-sm focus:outline-none focus:border-indigo-500 focus:bg-indigo-500/5 transition-all"
                />
              </div>
            </div>

            <div>
              <label className="block text-slate-400 text-sm mb-2">Subject</label>
              <input
                type="text"
                value={form.subject}
                onChange={(e) => setForm({ ...form, subject: e.target.value })}
                placeholder="Job Opportunity / Collaboration"
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-600 text-sm focus:outline-none focus:border-indigo-500 focus:bg-indigo-500/5 transition-all"
              />
            </div>

            <div>
              <label className="block text-slate-400 text-sm mb-2">Message</label>
              <textarea
                required
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                placeholder="Hi Hari, I would like to discuss..."
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-600 text-sm focus:outline-none focus:border-indigo-500 focus:bg-indigo-500/5 transition-all resize-none"
              />
            </div>

            <button
              type="submit"
              className={`flex items-center justify-center gap-2 w-full py-3.5 rounded-xl font-semibold text-white transition-all duration-200 ${
                sent
                  ? 'bg-green-600 hover:bg-green-500'
                  : 'bg-indigo-600 hover:bg-indigo-500 hover:shadow-lg hover:shadow-indigo-500/30'
              }`}
            >
              {sent ? (
                <>
                  <CheckCircle size={18} />
                  Message Opened in Email!
                </>
              ) : (
                <>
                  <Send size={18} />
                  Send Message
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
