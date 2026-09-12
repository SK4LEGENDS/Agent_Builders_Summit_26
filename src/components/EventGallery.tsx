import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Image as ImageIcon } from 'lucide-react';
import s1 from '../assets/s1.jpg';
import s2 from '../assets/s2.jpg';
import s3 from '../assets/s3.jpg';
import s4 from '../assets/s4.jpg';
import s5 from '../assets/s5.jpg';
import s6 from '../assets/s6.jpg';
import s7 from '../assets/s7.jpg';

const images = [s1, s2, s3, s4, s5, s6, s7];

const EventGallery: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="gallery"
      className="relative z-10 py-16 sm:py-20 px-4 sm:px-6 lg:px-8 scroll-mt-24"
    >
      <div className="max-w-6xl mx-auto w-full">
        <div className="text-center mb-12 sm:mb-14">
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-[#FFFFFF] border border-[#629BB5]/30 text-[#447F98] text-xs font-mono font-bold tracking-widest uppercase mb-4">
            <ImageIcon className="w-3.5 h-3.5 text-[#3A6F86]" aria-hidden />
            <span>EVENT GALLERY</span>
          </div>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-black font-display tracking-tight">
            MOMENTS OF INNOVATION
          </h2>
          <p className="text-sm font-mono text-[#629BB5] font-bold tracking-widest uppercase mb-4">
            Visual Journey
          </p>
        </div>

        <div className="relative h-[400px] sm:h-[600px] w-full overflow-hidden rounded-3xl shadow-2xl border border-[#629BB5]/20">
          <AnimatePresence mode="wait">
            <motion.img
              key={currentIndex}
              src={images[currentIndex]}
              alt={`Event gallery slide ${currentIndex + 1}`}
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className="absolute inset-0 w-full h-full object-cover"
            />
          </AnimatePresence>
          
          {/* Overlay Gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />

          {/* Indicator dots */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
            {images.map((_, index) => (
              <div
                key={index}
                className={`h-1.5 transition-all duration-300 rounded-full ${
                  index === currentIndex ? 'w-8 bg-white' : 'w-2 bg-white/50'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventGallery;
