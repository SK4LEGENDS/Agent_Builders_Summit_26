import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { UsersRound, Linkedin, ChevronLeft, ChevronRight } from 'lucide-react';
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

  const CardComponent = speaker.linkedin ? motion.a : motion.article;
  const linkProps = speaker.linkedin
    ? {
        href: speaker.linkedin,
        target: '_blank',
        rel: 'noopener noreferrer',
        'aria-label': `${speaker.name}'s LinkedIn profile`,
      }
    : {};

  return (
    <CardComponent
      {...linkProps}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, delay: Math.min(index * 0.05, 0.3) }}
      viewport={{ once: true }}
      className={`group relative aspect-[3/4] sm:aspect-[4/5] overflow-hidden bg-[#E8EEF1] shadow-[0_8px_28px_rgba(68,127,152,0.12)] ring-1 ring-[#629BB5]/15 rounded-2xl block w-full select-none ${
        speaker.linkedin ? 'cursor-pointer' : ''
      }`}
    >
      {/* Top-Right LinkedIn Badge on Image */}
      {speaker.linkedin && (
        <div 
          className="absolute top-3.5 right-3.5 z-20 p-2 rounded-full bg-black/45 backdrop-blur-md text-white/90 border border-white/20 group-hover:bg-[#0077B5] group-hover:border-[#0077B5] group-hover:text-white transition-all shadow-md group-hover:scale-105"
          title={`View ${speaker.name}'s LinkedIn profile`}
        >
          <Linkedin className="w-4 h-4" />
        </div>
      )}

      {!failed && src ? (
        <img
          src={src}
          alt={speaker.name}
          onError={onError}
          style={{ objectPosition: speaker.imagePosition || 'center 18%' }}
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
        />
      ) : (
        <div className="absolute inset-0 bg-gradient-to-br from-[#B9D8E1] via-[#D6EBF3] to-[#DADEE1] flex items-center justify-center pb-20">
          <span className="text-5xl font-display font-bold text-[#629BB5]/40">{initials}</span>
        </div>
      )}

      {/* Dark gradient ONLY behind the lower text area so the face remains clear */}
      <div className="absolute bottom-0 left-0 right-0 h-36 sm:h-44 bg-gradient-to-t from-black/90 via-black/55 to-transparent pointer-events-none" />

      {/* Compact information block at the bottom */}
      <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5 flex flex-col justify-end text-white z-10">
        <div className="mt-auto">
          <div className="flex items-center justify-between gap-2">
            <h3 className="text-[15px] sm:text-[17px] font-bold font-display leading-tight text-white break-words">
              {speaker.name}
            </h3>
            {speaker.linkedin && (
              <span
                className="text-white/80 group-hover:text-white group-hover:bg-[#0077B5] transition-colors p-1 bg-white/10 rounded-full flex items-center justify-center flex-shrink-0"
                aria-hidden="true"
              >
                <Linkedin className="w-3.5 h-3.5" />
              </span>
            )}
          </div>
          <p className="mt-1 text-xs text-platinum/90 font-medium leading-snug line-clamp-2">
            {speaker.designation} @ {speaker.company}
          </p>
          <div className="overflow-hidden max-h-0 group-hover:max-h-28 transition-[max-height] duration-500 ease-in-out">
            <p className="mt-2 text-[11px] text-silver/90 line-clamp-3 leading-relaxed">
              {speaker.bio}
            </p>
          </div>
        </div>
      </div>
    </CardComponent>
  );
};

const Speakers: React.FC = () => {
  const [cardsPerView, setCardsPerView] = useState(3);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);

  useEffect(() => {
    const updateCardsPerView = () => {
      if (window.innerWidth < 640) {
        setCardsPerView(1);
      } else if (window.innerWidth < 1024) {
        setCardsPerView(2);
      } else {
        setCardsPerView(3);
      }
    };
    updateCardsPerView();
    window.addEventListener('resize', updateCardsPerView);
    return () => window.removeEventListener('resize', updateCardsPerView);
  }, []);

  const totalSpeakers = speakers.length;
  const maxIndex = Math.max(0, totalSpeakers - cardsPerView);

  useEffect(() => {
    setCurrentIndex(prev => Math.min(prev, maxIndex));
  }, [maxIndex]);

  const handlePrev = () => {
    setCurrentIndex(prev => (prev > 0 ? prev - 1 : maxIndex));
  };

  const handleNext = () => {
    setCurrentIndex(prev => (prev < maxIndex ? prev + 1 : 0));
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (touchStart === null) return;
    const currentTouch = e.targetTouches[0].clientX;
    const diff = touchStart - currentTouch;
    if (diff > 50) {
      handleNext();
      setTouchStart(null);
    } else if (diff < -50) {
      handlePrev();
      setTouchStart(null);
    }
  };

  const handleTouchEnd = () => {
    setTouchStart(null);
  };

  return (
    <section
      id="speakers"
      className="relative z-10 min-h-[70vh] py-16 sm:py-20 px-4 sm:px-6 lg:px-8 scroll-mt-24"
    >
      <div className="max-w-6xl mx-auto w-full">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-10 sm:mb-12"
        >
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-[#FFFFFF] border border-[#629BB5]/30 text-[#447F98] text-xs font-mono font-bold tracking-widest uppercase mb-4">
            <UsersRound className="w-3.5 h-3.5 text-[#3A6F86]" aria-hidden />
            <span>SPEAKERS</span>
          </div>

          <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold mb-2 text-black font-display tracking-tight">
            VOICES OF ABS '26
          </h2>
        </motion.div>

        {/* Carousel Container */}
        <div 
          className="relative px-2 sm:px-4"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {/* Arrow Buttons */}
          <button
            type="button"
            onClick={handlePrev}
            aria-label="Previous speaker"
            className="absolute -left-2 sm:-left-6 top-1/2 -translate-y-1/2 z-30 w-11 h-11 rounded-full glass-panel flex items-center justify-center text-[#1A3A4A] hover:text-[#447F98] hover:border-[#629BB5] transition-all shadow-lg active:scale-95 bg-white/95"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            type="button"
            onClick={handleNext}
            aria-label="Next speaker"
            className="absolute -right-2 sm:-right-6 top-1/2 -translate-y-1/2 z-30 w-11 h-11 rounded-full glass-panel flex items-center justify-center text-[#1A3A4A] hover:text-[#447F98] hover:border-[#629BB5] transition-all shadow-lg active:scale-95 bg-white/95"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Carousel Track Viewport */}
          <div className="overflow-hidden py-3">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{
                transform: `translateX(-${currentIndex * (100 / cardsPerView)}%)`,
              }}
            >
              {speakers.map((speaker, index) => (
                <div
                  key={index}
                  className="px-2.5 sm:px-3 flex-shrink-0"
                  style={{ width: `${100 / cardsPerView}%` }}
                >
                  <SpeakerCard speaker={speaker} index={index} />
                </div>
              ))}
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex items-center justify-center gap-2 mt-6">
            {Array.from({ length: maxIndex + 1 }).map((_, dotIndex) => (
              <button
                key={dotIndex}
                type="button"
                onClick={() => setCurrentIndex(dotIndex)}
                aria-label={`Go to slide ${dotIndex + 1}`}
                className={`h-2 transition-all duration-300 rounded-full ${
                  dotIndex === currentIndex
                    ? 'w-7 bg-[#447F98]'
                    : 'w-2 bg-[#629BB5]/30 hover:bg-[#629BB5]/60'
                }`}
              />
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-10"
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
