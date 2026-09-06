import React from 'react';
import { useDoomProtocol } from '../context/DoomProtocolContext';
import { useFlexibleImage } from '../utils/flexibleImage';

/**
 * Full-viewport backdrop for Doom Protocol (616).
 * Place your image at: public/doomsday/bg.jpg
 * (also accepts .png / .webp / .jpeg / etc. with the same base name `bg`)
 */
const DoomsdayBackdrop: React.FC = () => {
  const { active } = useDoomProtocol();
  const { src, failed, onError } = useFlexibleImage('/doomsday/bg');

  if (!active) return null;

  return (
    <div
      className="fixed inset-0 z-0 pointer-events-none"
      aria-hidden
    >
      {!failed && src ? (
        <img
          src={src}
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
          onError={onError}
        />
      ) : (
        <div className="absolute inset-0 bg-[#050805]" />
      )}
      {/* Keep content readable over busy art */}
      <div className="absolute inset-0 bg-black/55" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/70" />
    </div>
  );
};

export default DoomsdayBackdrop;
