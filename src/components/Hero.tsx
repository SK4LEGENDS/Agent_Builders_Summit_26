import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Ticket, Building2 } from 'lucide-react';

/** Only confirmed event facts — no speculative counts */
const stats = [
  { value: 'Sep 26', label: '2026', icon: Calendar },
  { value: 'Offline', label: 'CAMPUS EVENT', icon: Building2 },
  { value: 'Free', label: 'ENTRY', icon: Ticket },
  { value: 'Chennai', label: 'SJCE', icon: MapPin },
];

const Hero: React.FC = () => {
  return (
    <section className="relative z-10 min-h-[100svh] flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-24 sm:pt-28 pb-20 overflow-hidden">
      <div className="max-w-5xl mx-auto w-full text-center relative z-10 flex flex-col items-center">
        {/* Large Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-4xl sm:text-6xl md:text-6xl lg:text-7xl font-black mb-4 tracking-tight leading-[1.05] font-display"
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
          className="text-lg sm:text-xl text-[#1A3A4A] font-medium max-w-3xl mx-auto leading-relaxed mb-4 font-display"
        >
          Where Builders, Students &amp; Industry Come Together to Shape the Agentic Future.
        </motion.p>

        {/* Focus Areas Pill Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35 }}
          className="inline-flex flex-wrap justify-center items-center gap-2 px-5 py-2 rounded-2xl glass-panel text-xs sm:text-sm font-mono font-semibold text-turquoise border border-slate-blue/40 mb-8 shadow-lg"
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
                className="glass-panel p-4 sm:p-5 text-center rounded-2xl border border-[#629BB5]/30 shadow-xl flex flex-col items-center justify-between min-h-[120px] sm:min-h-[135px]"
              >
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-white border border-[#629BB5]/40 flex items-center justify-center text-[#629BB5] mb-2 shadow-[0_0_10px_rgba(98,155,181,0.2)]">
                  <Icon className="w-4 h-4 sm:w-5 sm:h-5" aria-hidden />
                </div>
                <div className="text-lg sm:text-2xl font-extrabold emerald-text mb-1 tracking-tight font-display drop-shadow-[0_0_15px_rgba(98,155,181,0.35)]">
                  {stat.value}
                </div>
                <div className="text-[9px] sm:text-[10px] font-mono font-bold text-[#1A3A4A] tracking-widest uppercase leading-tight px-1">
                  {stat.label}
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Partner Logos */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-8 flex items-center justify-center gap-6 sm:gap-10 opacity-80"
        >
          <img 
            src="/logo/rpa-society.png" 
            alt="RPA Society" 
            className="h-12 w-12 sm:h-16 sm:w-16 object-contain"
            onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
          />
          <div className="h-8 w-px bg-platinum" aria-hidden />
          <img 
            src="/logo/uipath-community.png" 
            alt="UiPath Community" 
            className="h-8 sm:h-12 w-auto object-contain filter invert-[48%] sepia-[79%] saturate-[2476%] hue-rotate-[86deg] brightness-[118%] contrast-[119%]"
            onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
          />
        </motion.div>

        {/* Footer Credit Tagline */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.1 }}
          className="mt-4 sm:mt-6 text-xs font-mono text-[#3A5566] tracking-wider uppercase"
        >
          <span>Presented by RPA Society × UiPath Community</span>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
