/**
 * Full Team roster UI (square profiles + Protocol 616 TVA badges).
 * Preserved for reveal day — wire back from Team.tsx when ready:
 *   import TeamRoster from './TeamRoster';
 *   export default TeamRoster;
 */
import React from 'react';
import { motion } from 'framer-motion';
import { UsersRound } from 'lucide-react';
import { teamMembers, type TeamMember } from '../data/team';
import { useFlexibleImage } from '../utils/flexibleImage';
import { useDoomProtocol } from '../context/DoomProtocolContext';
import './TeamTvaCard.css';

function serialLeft(id: string, index: number) {
  const n = String(index + 1).padStart(2, '0');
  return `C2-E-${id.slice(-4).toUpperCase()}-${n}`;
}

function serialRight(index: number) {
  const n = String(index + 1).padStart(2, '0');
  return `ALL-616-ABS-${n}`;
}

/** Normal mode — square profile tiles */
const SquareProfileCard: React.FC<{ member: TeamMember; index: number }> = ({
  member,
  index,
}) => {
  const { src, failed, onError } = useFlexibleImage(member.image);
  const learnMore = member.href ? (
    <a
      href={member.href}
      target={member.href.startsWith('http') ? '_blank' : undefined}
      rel={member.href.startsWith('http') ? 'noopener noreferrer' : undefined}
      className="text-[11px] sm:text-xs font-semibold text-[#1A3A4A] lowercase tracking-tight hover:text-[#447F98] transition-colors"
    >
      learn more
    </a>
  ) : (
    <span className="text-[11px] sm:text-xs font-semibold text-[#1A3A4A]/70 lowercase tracking-tight">
      learn more
    </span>
  );

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, delay: Math.min(index * 0.05, 0.4) }}
      viewport={{ once: true }}
      className="group relative aspect-square overflow-hidden bg-[#E8EEF1] shadow-[0_8px_28px_rgba(68,127,152,0.12)] ring-1 ring-[#629BB5]/15"
    >
      {!failed && src ? (
        <img
          src={src}
          alt=""
          onError={onError}
          className="absolute inset-0 h-full w-full object-cover object-[68%_center] transition-transform duration-500 ease-out group-hover:scale-[1.04]"
        />
      ) : (
        <div
          className="absolute inset-0 bg-gradient-to-br from-[#B9D8E1] via-[#D6EBF3] to-[#DADEE1]"
          aria-hidden
        />
      )}

      <div
        className="absolute inset-0 bg-gradient-to-r from-white via-white/92 to-transparent w-[62%] sm:w-[58%]"
        aria-hidden
      />

      <div className="relative z-10 flex h-full w-[55%] sm:w-[52%] flex-col px-4 py-4 sm:px-5 sm:py-5">
        <p className="text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.14em] text-[#1A3A4A]">
          Profile
        </p>
        <h3 className="mt-2 sm:mt-3 text-base sm:text-lg md:text-xl font-bold text-[#1A3A4A] font-display leading-snug tracking-tight">
          {member.name}
        </h3>
        <p className="mt-1.5 sm:mt-2 text-xs sm:text-sm text-[#3A5566] leading-snug font-normal">
          {member.role}
        </p>
        <div className="mt-auto pt-4">{learnMore}</div>
      </div>
    </motion.article>
  );
};

/** Protocol 616 — TVA yellow/black ID badges */
const TvaIdCard: React.FC<{ member: TeamMember; index: number }> = ({ member, index }) => {
  const { src, failed, onError } = useFlexibleImage(member.image);

  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, delay: Math.min(index * 0.04, 0.36) }}
      viewport={{ once: true }}
      className="tva-card"
      aria-label={`${member.name}, ${member.role}`}
    >
      <div className="tva-card__inner">
        <div className="tva-card__authority">Time Variance Authority</div>

        <div className="tva-card__stripes" aria-hidden>
          <span />
          <span />
        </div>

        <div className="tva-card__logo" aria-hidden>
          <div className="tva-card__logo-mark">
            TV<span className="tva-a">A</span>
          </div>
        </div>

        <div className="tva-card__photo-row">
          <div className="tva-card__rail tva-card__rail--chevrons" aria-hidden>
            <span className="tva-card__serial">{serialLeft(member.id, index)}</span>
          </div>

          <div className="tva-card__frame">
            {!failed && src ? (
              <img src={src} alt="" onError={onError} />
            ) : (
              <div className="tva-card__placeholder">
                <div className="tva-card__placeholder-icon" aria-hidden />
                <span>Photo</span>
              </div>
            )}
          </div>

          <div
            className="tva-card__rail tva-card__rail--chevrons tva-card__rail--right"
            aria-hidden
          >
            <span className="tva-card__serial">{serialRight(index)}</span>
          </div>
        </div>

        <div className="tva-card__identity">
          <h3 className="tva-card__name">{member.name}</h3>
          <p className="tva-card__role">{member.role}</p>
        </div>

        <div className="tva-card__footer">
          <div className="tva-card__latch" aria-hidden />
          <span className="tva-card__protocol">Protocol 616</span>
          <div className="tva-card__latch" aria-hidden />
        </div>
      </div>
    </motion.article>
  );
};

const TeamRoster: React.FC = () => {
  const { active: doomActive } = useDoomProtocol();

  return (
    <section
      id="team"
      className="relative z-10 min-h-[calc(100vh-8rem)] py-16 sm:py-20 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-6xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12 sm:mb-14"
        >
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-[#FFFFFF] border border-[#629BB5]/30 text-[#447F98] text-xs font-mono font-bold tracking-widest uppercase mb-4">
            <UsersRound className="w-3.5 h-3.5 text-[#3A6F86]" aria-hidden />
            <span>{doomActive ? 'THE TEAM · 616' : 'THE TEAM'}</span>
          </div>

          <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold mb-4 text-black font-display tracking-tight">
            MEET THE BUILDERS
          </h2>

          <p className="text-[#3A5566] text-base sm:text-lg max-w-2xl mx-auto font-normal">
            {doomActive
              ? 'Authorized personnel — Protocol 616 credentials are active.'
              : 'The developers, designers, and organizers bringing Agent Builder&apos;s Summit 2026 to life.'}
          </p>
        </motion.div>

        {doomActive ? (
          <>
            <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-7 justify-items-stretch">
              {teamMembers.map((member, index) => (
                <TvaIdCard key={member.id} member={member} index={index} />
              ))}
            </div>
            <p className="mt-10 text-center text-[10px] sm:text-xs font-mono text-[#455A66] tracking-wide">
              Fan homage ID layout · Not affiliated with Marvel Studios or Disney
            </p>
          </>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
            {teamMembers.map((member, index) => (
              <SquareProfileCard key={member.id} member={member} index={index} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default TeamRoster;
