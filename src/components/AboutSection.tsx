import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Bot, Users, Building2, Share2, Code2, Lightbulb, ShieldAlert } from 'lucide-react';

const focusAreas = [
  { title: 'AI', icon: Cpu, desc: 'Generative AI, Foundation Models & Deep Learning Architectures' },
  { title: 'MULTI-AGENT SYSTEMS', icon: Bot, desc: 'Autonomous Agent Orchestration, Multi-Agent Protocols & Workflows' },
  { title: 'ENTERPRISE AI', icon: Building2, desc: 'Connecting People, Processes & Scalable Business Intelligence' },
  { title: 'MODERN SOFTWARE ENGINEERING', icon: Code2, desc: 'Production System Architecture, Developer Tooling & Full-Stack Mastery' },
  { title: 'DEVELOPER COMMUNITIES', icon: Users, desc: 'Empowering Student Tech Clubs, Open-Source & Collaborative Ecosystems' },
  { title: 'NETWORKING', icon: Share2, desc: 'Direct Collaboration with Industry Leaders & Fellow Builders' },
  { title: 'STUDENT INNOVATION', icon: Lightbulb, desc: 'Showcasing Breakthrough Projects & Next-Gen Student Engineering' },
];

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center max-w-4xl mx-auto mb-16"
        >
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#FFFFFF] border border-[#629BB5]/30 text-[#447F98] text-xs font-mono font-bold tracking-widest uppercase mb-4">
            <ShieldAlert className="w-4 h-4 text-[#3A6F86]" aria-hidden />
            <span>ABOUT THE EVENT</span>
          </div>

          <h2
            className="text-3xl sm:text-5xl md:text-6xl font-extrabold mb-6 text-black font-display"
          >
            WHAT IS ABS '26?
          </h2>

          <div className="glass-panel p-8 rounded-3xl shadow-2xl text-left space-y-4">
            <p className="text-base sm:text-lg text-[#1A3A4A] leading-relaxed font-medium">
              Agent Builder&apos;s Summit &apos;26 is a full-day, offline technology summit hosted at St. Joseph&apos;s College of Engineering, Chennai — designed to bring students, developers, AI practitioners, and industry leaders under one roof.
            </p>
            <p className="text-sm sm:text-base text-[#3A5566] leading-relaxed font-normal">
              The summit features keynote sessions from industry experts, hands-on workshops on AI agents and automation, interactive panel discussions, community-building activities, and networking opportunities with professionals shaping the agentic future.
            </p>
            <p className="text-sm sm:text-base text-[#3A5566] leading-relaxed font-normal">
              Whether you're a first-year student exploring AI or a seasoned developer building multi-agent systems — ABS '26 is built for you. Expect deep-dive technical talks, live demos, quizzes, awards, certificates, and high-tea networking — all completely free of charge.
            </p>
          </div>
        </motion.div>

        {/* Floating 3D Panels Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 [&>*:last-child]:sm:col-span-2 [&>*:last-child]:sm:max-w-md [&>*:last-child]:sm:mx-auto [&>*:last-child]:lg:col-span-1 [&>*:last-child]:lg:max-w-none [&>*:last-child]:lg:col-start-2">
          {focusAreas.map((area, index) => {
            const Icon = area.icon;
            return (
              <motion.div
                key={area.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.08 }}
                viewport={{ once: true }}
                whileHover={{ y: -8, transition: { duration: 0.35, ease: [0.19, 1, 0.22, 1] } }}
                className="group relative p-6 glass-panel rounded-2xl shadow-xl abs-card"
              >
                <div className="abs-card__icon w-12 h-12 rounded-xl bg-[#FFFFFF] border border-[#629BB5]/40 p-0.5 mb-4 flex items-center justify-center text-[#629BB5]">
                  <Icon className="w-6 h-6" aria-hidden />
                </div>
                <h4 className="abs-card__title text-lg font-bold text-[#1A3A4A] mb-2 font-display">
                  {area.title}
                </h4>
                <p className="abs-card__body text-xs sm:text-sm text-[#455A66] leading-relaxed font-normal">
                  {area.desc}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default AboutSection;
