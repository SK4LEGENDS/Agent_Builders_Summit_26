import React from 'react';
import { motion } from 'framer-motion';
import { ShieldAlert, GraduationCap, Code2, Briefcase, Users, BookOpen, Search, Repeat, Network } from 'lucide-react';

const AboutSection: React.FC = () => {
 const targets = [
  { title: 'Students', icon: GraduationCap, desc: 'Exploring AI and building the next generation of systems' },
  { title: 'Aspiring Builders', icon: Code2, desc: 'Building with Agents and mastering agentic workflows' },
  { title: 'Student Developers', icon: Briefcase, desc: 'Implementing Enterprise AI and automation at scale' },
  { title: 'Automation Enthusiasts', icon: Users, desc: 'Contributing to technical ecosystems and open source' },
];

  const goals = [
    { title: 'Learn', icon: BookOpen, desc: 'Learn from builders and industry leaders' },
    { title: 'Explore', icon: Search, desc: 'Explore emerging technologies in Agentic AI' },
    { title: 'Exchange', icon: Repeat, desc: 'Exchange ideas and best practices' },
    { title: 'Connect', icon: Network, desc: 'Connect with a community of innovators' },
  ];

  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center max-w-4xl mx-auto mb-20"
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
              Agent Builders Summit &apos;26 brings together <i className="text-[#447F98]">students, developers, AI enthusiasts, automation professionals, industry leaders, and community builders</i> to explore the evolving world of <i className="text-[#447F98]">AI Agents, Agentic AI, Automation, Multi-Agent Systems, and Enterprise AI</i>.
            </p>
            <p className="text-sm sm:text-base text-[#3A5566] leading-relaxed font-normal">
              The summit creates a space to learn from builders, explore emerging technologies, exchange ideas, and connect with the community shaping the next generation of intelligent systems.
            </p>
          </div>
        </motion.div>

        {/* Who Is It For Grid */}
        <div className="mb-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h3 className="text-2xl sm:text-4xl font-extrabold text-black font-display mb-4 italic">
              Who Is It For?
            </h3>
            <div className="text-lg sm:text-xl font-bold text-[#447F98] tracking-wide italic">
              The Builders of Tomorrow
            </div>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {targets.map((target, index) => {
              const Icon = target.icon;
              return (
                <motion.div
                  key={target.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -8 }}
                  className="p-6 glass-panel rounded-2xl shadow-xl text-center group hover:border-[#629BB5]/50 transition-colors"
                >
                  <div className="w-12 h-12 rounded-xl bg-white border border-[#629BB5]/30 mx-auto mb-4 flex items-center justify-center text-[#629BB5] group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg font-bold text-[#1A3A4A] mb-2 font-display">{target.title}</h4>
                  <p className="text-xs sm:text-sm text-[#455A66] leading-relaxed">{target.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Core Goals Grid */}
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <p className="text-lg sm:text-xl text-[#1A3A4A] font-medium max-w-2xl mx-auto">
              A space to <strong className="text-black">learn, connect, collaborate, and explore</strong> what&apos;s next.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {goals.map((goal, index) => {
              const Icon = goal.icon;
              return (
                <motion.div
                  key={goal.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="p-6 glass-panel rounded-2xl shadow-lg border border-[#629BB5]/20"
                >
                  <Icon className="w-8 h-8 text-[#447F98] mx-auto mb-3" />
                  <h4 className="text-md font-bold text-[#1A3A4A] mb-1 font-display">{goal.title}</h4>
                  <p className="text-xs text-[#455A66]">{goal.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutSection;
