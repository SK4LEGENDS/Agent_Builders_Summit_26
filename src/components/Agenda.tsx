import React from 'react';
import { motion } from 'framer-motion';
import { Calendar } from 'lucide-react';
import { agenda } from '../data/agenda';
import { useDoomProtocol } from '../context/DoomProtocolContext';

const Agenda: React.FC = () => {
  const { active: isDoomActive } = useDoomProtocol();

  return (
    <section
      id="agenda"
      className="relative z-10 scroll-mt-24 min-h-[70vh] py-20 sm:py-28 px-4 sm:px-6 lg:px-8"
    >
      <div className="mx-auto w-full max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-14"
        >
          <div className={`inline-flex items-center space-x-2 px-4 py-1.5 rounded-full border text-xs font-mono font-bold tracking-widest uppercase mb-4 ${
            isDoomActive 
              ? 'bg-white/10 border-white/20 text-white' 
              : 'bg-[#FFFFFF] border-[#629BB5]/30 text-[#447F98]'
          }`}>
            <Calendar className={`w-3.5 h-3.5 ${isDoomActive ? 'text-white' : 'text-[#3A6F86]'}`} aria-hidden />
            <span>AGENDA</span>
          </div>

          <h2 className={`text-3xl sm:text-5xl md:text-6xl font-extrabold mb-4 font-display tracking-tight ${
            isDoomActive ? 'text-white' : 'text-black'
          }`}>
            EVENT SCHEDULE
          </h2>
        </motion.div>

        <div className="space-y-12">
          {agenda.map((day, dayIndex) => (
            <motion.div 
              key={dayIndex}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: dayIndex * 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className={`text-2xl font-bold font-display mb-6 border-b-2 pb-2 ${
                isDoomActive 
                  ? 'text-white border-white/20' 
                  : 'text-[#1A3A4A] border-[#629BB5]/20'
              }`}>
                {day.date}
              </h3>
              <div className="space-y-4">
                {day.items.map((item, itemIndex) => (
                  <div 
                    key={itemIndex}
                    className={`flex flex-col sm:flex-row p-5 rounded-xl transition-all duration-300 ${
                      isDoomActive 
                        ? 'glass-panel bg-white/10 border border-white/10 hover:bg-white/20' 
                        : 'bg-white shadow-[0_4px_20px_rgba(68,127,152,0.08)] ring-1 ring-[#629BB5]/10 hover:shadow-[0_8px_30px_rgba(68,127,152,0.15)]'
                    }`}
                  >
                    <div className="sm:w-1/4 mb-3 sm:mb-0">
                      <span className={`inline-block px-3 py-1 text-sm font-bold font-mono ${
                        isDoomActive 
                          ? 'text-white' 
                          : 'bg-[#DDEBF4] text-[#1A3A4A] rounded-md border border-[#629BB5]/20'
                      }`}>
                        {item.time}
                      </span>
                    </div>
                    <div className={`sm:w-3/4 sm:pl-4 border-l-0 sm:border-l-2 ${
                      isDoomActive ? 'border-white/20' : 'border-[#629BB5]/20'
                    }`}>
                      <h4 className={`text-lg font-bold mb-1 ${
                        isDoomActive ? 'text-white' : 'text-[#1A3A4A]'
                      }`}>
                        {item.title}
                      </h4>
                      {item.speaker && (
                        <p className={`font-medium text-sm ${
                          isDoomActive ? 'text-white/70' : 'text-[#629BB5]'
                        }`}>
                          Speaker: {item.speaker}
                        </p>
                      )}
                      <p className={`text-xs uppercase tracking-widest mt-2 font-semibold opacity-70 ${
                        isDoomActive ? 'text-white' : 'text-[#3A5566]'
                      }`}>
                        {item.type}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Agenda;
