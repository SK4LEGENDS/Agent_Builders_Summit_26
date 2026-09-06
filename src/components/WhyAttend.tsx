import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, UserCheck, Share2, Bot, Users, Sparkles, Compass } from 'lucide-react';

const whyEnterCards = [
  {
    title: 'LEARN AI',
    desc: 'Master cutting-edge AI frameworks, agentic orchestration, and LLM development.',
    icon: Cpu,
  },
  {
    title: 'MEET INDUSTRY EXPERTS',
    desc: 'Interact directly with industry speakers, AI leaders, and senior engineers.',
    icon: UserCheck,
  },
  {
    title: 'BUILD NETWORKS',
    desc: 'Establish lifelong professional connections during interactive sessions.',
    icon: Share2,
  },
  {
    title: 'DISCOVER AGENTIC SYSTEMS',
    desc: 'Uncover autonomous multi-agent architectures shaping modern enterprise technology.',
    icon: Bot,
  },
  {
    title: 'JOIN COMMUNITIES',
    desc: 'Connect with student developer clubs, open source advocates, and active technology circles.',
    icon: Users,
  },
  {
    title: 'CREATE THE FUTURE',
    desc: 'Gain practical builder skills and orchestrate intelligence to become the next builder.',
    icon: Sparkles,
  },
];

const WhyAttend: React.FC = () => {
  return (
    <section id="why-attend" className="relative z-10 min-h-screen flex items-center justify-center py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto w-full">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-[#FFFFFF] border border-[#629BB5]/30 text-[#447F98] text-xs font-mono font-bold tracking-widest uppercase mb-4">
            <Compass className="w-3.5 h-3.5 text-[#3A6F86]" aria-hidden />
            <span>WHY ATTEND</span>
          </div>

          <h2
            className="text-3xl sm:text-5xl md:text-6xl font-extrabold mb-4 text-black font-display tracking-tight"
          >
            WHY ENTER?
          </h2>

          <p className="text-[#3A5566] text-base sm:text-lg max-w-2xl mx-auto font-normal">
            Discover why entering Agent Builder&apos;s Summit 2026 will transform your developer journey.
          </p>
        </motion.div>

        {/* Floating 3D Panels Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {whyEnterCards.map((card, index) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                viewport={{ once: true }}
                whileHover={{ y: -8, transition: { duration: 0.35, ease: [0.19, 1, 0.22, 1] } }}
                className="group p-6 glass-panel rounded-2xl shadow-xl abs-card"
              >
                <div className="abs-card__icon w-12 h-12 rounded-xl bg-[#FFFFFF] border border-[#629BB5]/40 flex items-center justify-center text-[#629BB5] mb-5">
                  <Icon className="w-6 h-6" aria-hidden />
                </div>

                <h3 className="abs-card__title text-lg font-bold text-[#1A3A4A] mb-2 font-display">
                  {card.title}
                </h3>

                <p className="abs-card__body text-xs sm:text-sm text-[#455A66] leading-relaxed font-normal font-sans">
                  {card.desc}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default WhyAttend;