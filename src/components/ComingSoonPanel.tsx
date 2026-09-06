import React from 'react';
import { motion } from 'framer-motion';
import { Lock, Clock } from 'lucide-react';

type ComingSoonPanelProps = {
  title: string;
  eyebrow?: string;
  message?: string;
};

/** Shared “yet to be released” teaser for Agenda / Speakers */
const ComingSoonPanel: React.FC<ComingSoonPanelProps> = ({
  title,
  eyebrow = 'Coming soon',
  message = 'Yet to be released. Stay tuned — details drop closer to summit day.',
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="relative mx-auto max-w-2xl text-center"
    >
      <div className="glass-panel relative overflow-hidden rounded-3xl border border-[#629BB5]/35 px-6 py-12 sm:px-10 sm:py-14 shadow-xl">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              'repeating-linear-gradient(-12deg, transparent, transparent 12px, #447F98 12px, #447F98 13px)',
          }}
          aria-hidden
        />

        <div className="relative z-10 flex flex-col items-center">
          <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl border border-[#629BB5]/40 bg-white text-[#447F98] shadow-[0_0_20px_rgba(98,155,181,0.2)]">
            <Lock className="h-6 w-6" aria-hidden />
          </div>

          <p className="mb-3 inline-flex items-center gap-2 rounded-full border border-[#629BB5]/35 bg-white/80 px-3.5 py-1.5 font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-[#447F98]">
            <Clock className="h-3.5 w-3.5" aria-hidden />
            {eyebrow}
          </p>

          <h2 className="mb-3 text-3xl sm:text-5xl font-extrabold text-black font-display tracking-tight">
            {title}
          </h2>

          <p className="max-w-md text-sm sm:text-base text-[#3A5566] font-normal leading-relaxed">
            {message}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default ComingSoonPanel;
