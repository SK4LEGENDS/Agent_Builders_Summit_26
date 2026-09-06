import React from 'react';
import { motion } from 'framer-motion';
import { Mic, Bot, Users, Sparkles, Share2, Trophy, CheckCircle2 } from 'lucide-react';

const highlights = [
  { title: 'Industry Speakers', icon: Mic },
  { title: 'AI & Agentic Systems', icon: Bot },
  { title: 'Developer Community Sessions', icon: Users },
  { title: 'Interactive Quizzes', icon: Sparkles },
  { title: 'High Tea & Networking', icon: Share2 },
  { title: 'Awards & Recognitions', icon: Trophy },
];

const HighlightCards: React.FC = () => {
  return (
    <section id="highlights" className="relative z-10 min-h-screen flex items-center justify-center py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto w-full">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2
            className="text-3xl sm:text-5xl md:text-6xl font-extrabold mb-4 text-black font-display tracking-tight"
          >
            SUMMIT HIGHLIGHTS
          </h2>
          <p className="text-[#3A5566] text-base sm:text-lg max-w-2xl mx-auto font-normal">
            Everything you will experience at Agent Builder&apos;s Summit 2026.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr">
          {highlights.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.07 }}
                viewport={{ once: true }}
                whileHover={{ y: -8, transition: { duration: 0.35, ease: [0.19, 1, 0.22, 1] } }}
                className="group relative glass-panel p-6 rounded-2xl border border-[#629BB5]/30 shadow-xl h-full min-h-[96px] w-full flex items-center abs-card"
              >
                <div className="flex items-center space-x-4 w-full">
                  <div className="abs-card__icon flex-shrink-0 w-12 h-12 rounded-xl bg-[#FFFFFF] border border-[#629BB5]/40 flex items-center justify-center text-[#629BB5]">
                    <Icon className="w-6 h-6" aria-hidden />
                  </div>
                  <div className="abs-card__body min-w-0 flex-1">
                    <div className="flex items-center space-x-1 mb-1 text-[#447F98] text-[10px] font-mono font-bold">
                      <CheckCircle2 className="w-3 h-3 text-[#3A6F86]" aria-hidden />
                      <span>CONFIRMED</span>
                    </div>
                    <h3 className="abs-card__title text-sm font-bold text-[#1A3A4A] font-display leading-snug">
                      {item.title}
                    </h3>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default HighlightCards;