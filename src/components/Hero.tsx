import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Ticket, Building2 } from 'lucide-react';

/** Only confirmed event facts — no speculative counts */
const stats = [
  { value: '1', label: 'FULL DAY', icon: Calendar },
  { value: 'Offline', label: 'CAMPUS EVENT', icon: Building2 },
  { value: 'Free', label: 'ENTRY', icon: Ticket },
  { value: 'Chennai', label: 'SJCE', icon: MapPin },
];

const Hero: React.FC = () => {
  return (
    <section className="relative z-10 min-h-[100svh] flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-28 sm:pt-32 pb-20 overflow-hidden">
      <div className="max-w-5xl mx-auto w-full text-center relative z-10 flex flex-col items-center">
        {/* Large Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black mb-6 tracking-tight leading-[1.05] font-display"
        >
          <span className="block text-black">AGENT BUILDERS</span>
          <span className="block text-black">
            SUMMIT{' '}
            <span className="emerald-text inline-block drop-shadow-[0_0_25px_rgba(68,127,152,0.35)]">
              &apos;26
            </span>
          </span>
        </motion.h1>

        {/* Subtitle / Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25 }}
          className="text-lg sm:text-2xl text-[#1A3A4A] font-medium max-w-3xl mx-auto leading-relaxed mb-6 font-display"
        >
          Where Builders, Students &amp; Industry Come Together to Shape the Agentic Future.
        </motion.p>

        {/* Focus Areas Pill Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35 }}
          className="inline-flex flex-wrap justify-center items-center gap-2 px-5 py-2.5 rounded-2xl glass-panel text-xs sm:text-sm font-mono font-semibold text-turquoise border border-slate-blue/40 mb-10 shadow-lg"
        >
          <span>AI Agents</span>
          <span className="text-slate-blue">•</span>
          <span>Automation</span>
          <span className="text-slate-blue">•</span>
          <span>Multi-Agent Systems</span>
          <span className="text-slate-blue">•</span>
          <span>Enterprise AI</span>
        </motion.div>

        {/* Impact stats — moved from mid-page Statistics */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45 }}
          className="w-full max-w-4xl grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4"
        >
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.45, delay: 0.5 + index * 0.08 }}
                whileHover={{ y: -4, scale: 1.03 }}
                className="glass-panel p-4 sm:p-5 text-center rounded-2xl border border-[#629BB5]/30 shadow-xl flex flex-col items-center justify-between min-h-[132px] sm:min-h-[148px]"
              >
                <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-white border border-[#629BB5]/40 flex items-center justify-center text-[#629BB5] mb-2 shadow-[0_0_10px_rgba(98,155,181,0.2)]">
                  <Icon className="w-5 h-5" aria-hidden />
                </div>
                <div className="text-xl sm:text-3xl font-extrabold emerald-text mb-1 tracking-tight font-display drop-shadow-[0_0_15px_rgba(98,155,181,0.35)]">
                  {stat.value}
                </div>
                <div className="text-[10px] sm:text-[11px] font-mono font-bold text-[#1A3A4A] tracking-widest uppercase leading-tight px-1">
                  {stat.label}
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Footer Credit Tagline */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="mt-10 sm:mt-12 text-xs font-mono text-[#3A5566] tracking-wider uppercase"
        >
          <span>Presented by RPA Society × UiPath Community</span>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
