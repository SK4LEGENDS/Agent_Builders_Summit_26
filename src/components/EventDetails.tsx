import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Navigation, Clock, ShieldCheck } from 'lucide-react';

const eventDetails = [
  {
    icon: Calendar,
    title: 'EDITION',
    value: '2026',
    subtitle: "Agent Builder's Summit 2026",
  },
  {
    icon: MapPin,
    title: 'VENUE',
    value: "St. Joseph's",
    subtitle: 'College of Engineering',
  },
  {
    icon: Navigation,
    title: 'LOCATION',
    value: 'Chennai',
    subtitle: 'Tamil Nadu, India',
  },
  {
    icon: Clock,
    title: 'DURATION',
    value: 'Full Day',
    subtitle: '09:45 AM – 04:00 PM+',
  },
  {
    icon: ShieldCheck,
    title: 'MODE',
    value: 'Offline',
    subtitle: 'Campus Conference',
  },
];

const EventDetails: React.FC = () => {
  return (
    <section
      id="details"
      className="relative z-10 w-full scroll-mt-24 py-16 sm:py-20 px-4 sm:px-6 lg:px-8"
    >
      <div className="mx-auto w-full max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-8 sm:mb-10 text-center"
        >
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-black font-display tracking-tight">
            EVENT SPECIFICATIONS
          </h2>
        </motion.div>

        {/* Full-width spec strip */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.08 }}
          viewport={{ once: true }}
          className="glass-panel rounded-2xl sm:rounded-3xl border border-[#629BB5]/30 shadow-xl overflow-hidden"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 divide-y sm:divide-y-0 sm:divide-x divide-[#629BB5]/20">
            {eventDetails.map((detail, index) => {
              const Icon = detail.icon;
              return (
                <motion.div
                  key={detail.title}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.05 + index * 0.05 }}
                  viewport={{ once: true }}
                  className="group flex flex-col items-center text-center px-5 py-6 sm:py-7 lg:py-8 hover:bg-[#D6EBF3]/35 transition-colors"
                >
                  <div className="w-10 h-10 mb-3 rounded-xl bg-white border border-[#629BB5]/40 flex items-center justify-center text-[#629BB5] shadow-[0_0_10px_rgba(98,155,181,0.15)] group-hover:scale-105 transition-transform">
                    <Icon className="w-5 h-5" aria-hidden />
                  </div>
                  <p className="text-[10px] font-bold text-[#447F98] uppercase tracking-[0.18em] font-mono mb-1.5">
                    {detail.title}
                  </p>
                  <p className="text-lg sm:text-xl font-bold text-[#1A3A4A] font-display leading-tight">
                    {detail.value}
                  </p>
                  <p className="text-[11px] sm:text-xs text-[#455A66] mt-1.5 font-normal leading-snug max-w-[11rem]">
                    {detail.subtitle}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default EventDetails;
