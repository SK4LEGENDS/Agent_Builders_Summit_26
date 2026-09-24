import React from 'react';
import { motion } from 'framer-motion';
import { UsersRound } from 'lucide-react';
import { speakers, type Speaker } from '../data/speakers';
import { useFlexibleImage } from '../utils/flexibleImage';

const SpeakerCard: React.FC<{ speaker: Speaker; index: number }> = ({ speaker, index }) => {
  const { src, failed, onError } = useFlexibleImage(`/speakers/${speaker.image}`);

  // Get initials for fallback avatar
  const initials = speaker.name
    .split(' ')
    .map(n => n[0])
    .join('')
    .substring(0, 2)
    .toUpperCase();

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, delay: Math.min(index * 0.05, 0.4) }}
      viewport={{ once: true }}
      className="group relative aspect-[4/5] overflow-hidden bg-[#E8EEF1] shadow-[0_8px_28px_rgba(68,127,152,0.12)] ring-1 ring-[#629BB5]/15 rounded-lg"
    >
      {!failed && src ? (
        <img
          src={src}
          alt={speaker.name}
          onError={onError}
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
        />
      ) : (
        <div className="absolute inset-0 bg-gradient-to-br from-[#B9D8E1] via-[#D6EBF3] to-[#DADEE1] flex items-center justify-center pb-20">
          <span className="text-5xl font-display font-bold text-[#629BB5]/40">{initials}</span>
        </div>
      )}

      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

      <div className="absolute bottom-0 left-0 right-0 p-5 flex flex-col justify-end text-white h-full">
        <div className="mt-auto">
          <h3 className="text-xl font-bold font-display leading-snug tracking-tight text-white [text-shadow:0_2px_8px_rgba(0,0,0,0.8)]">
            {speaker.name}
          </h3>
          <p className="mt-1 text-sm text-platinum font-medium">
            {speaker.designation} @ {speaker.company}
          </p>
          <div className="overflow-hidden max-h-0 group-hover:max-h-40 transition-[max-height] duration-500 ease-in-out">
            <p className="mt-3 text-xs text-silver line-clamp-4">
              {speaker.bio}
            </p>
          </div>
        </div>
      </div>
    </motion.article>
  );
};

const Speakers: React.FC = () => {
  return (
    <section
      id="speakers"
      className="relative z-10 min-h-[70vh] py-16 sm:py-20 px-4 sm:px-6 lg:px-8 scroll-mt-24"
    >
      <div className="max-w-screen-2xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-14"
        >
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-[#FFFFFF] border border-[#629BB5]/30 text-[#447F98] text-xs font-mono font-bold tracking-widest uppercase mb-4">
            <UsersRound className="w-3.5 h-3.5 text-[#3A6F86]" aria-hidden />
            <span>SPEAKERS</span>
          </div>
        
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold mb-2 text-black font-display tracking-tight">
            VOICES OF ABS '26
          </h2>
        </motion.div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 sm:gap-8">
          {speakers.slice(0, 5).map((speaker, index) => (
            <SpeakerCard key={index} speaker={speaker} index={index} />
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-sm sm:text-base text-[#3A5566] font-medium italic">
            More speakers will be revealed soon...
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Speakers;
