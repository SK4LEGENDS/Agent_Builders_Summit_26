import React, { useEffect, useMemo, useState } from 'react';
import { imageCandidates } from '../utils/flexibleImage';

type BrandLogoProps = {
  /** Visual size of the mark */
  size?: 'sm' | 'md' | 'lg';
  /** Show wordmark beside the mark */
  showWordmark?: boolean;
  /** Wordmark visibility breakpoint helper */
  wordmarkClassName?: string;
  className?: string;
};

const sizeMap = {
  sm: 'w-10 h-10',
  md: 'w-14 h-14',
  lg: 'w-16 h-16',
} as const;

const textMap = {
  sm: 'text-[10px]',
  md: 'text-xs',
  lg: 'text-sm',
} as const;

/** Preferred logo filenames under /public/logo/ */
const LOGO_BASES = [
  '/logo/abs-logo',
  '/logo/logo',
  '/logo/rpa-logo',
  '/logo/rpa-society',
];

/**
 * Shared brand mark for header + footer.
 * Drop any common image at public/logo/abs-logo.* (or logo / rpa-logo / rpa-society).
 * Dark logos get a framed tile so they stay readable on the light UI.
 */
const BrandLogo: React.FC<BrandLogoProps> = ({
  size = 'sm',
  showWordmark = false,
  wordmarkClassName = '',
  className = '',
}) => {
  const candidates = useMemo(
    () => LOGO_BASES.flatMap((base) => imageCandidates(base)),
    []
  );
  const [index, setIndex] = useState(0);

  useEffect(() => {
    setIndex(0);
  }, [candidates]);

  const src = index < candidates.length ? candidates[index] : null;
  const failed = !src;

  return (
    <span className={`inline-flex items-center gap-3 min-w-0 ${className}`}>
      <span
        className={`${sizeMap[size]} flex-shrink-0 overflow-hidden rounded-xl border-2 border-[#629BB5]/55 bg-black shadow-[0_2px_12px_rgba(68,127,152,0.22)]`}
      >
        {!failed ? (
          <img
            src={src}
            alt="RP & AI Society"
            className="h-full w-full object-contain object-center"
            onError={() => setIndex((i) => i + 1)}
          />
        ) : (
          <span className="flex h-full w-full items-center justify-center bg-gradient-to-br from-[#447F98] to-[#629BB5]">
            <span
              className={`${textMap[size]} font-extrabold text-white font-display leading-none tracking-tight`}
            >
              SUMMIT
            </span>
          </span>
        )}
      </span>

      {showWordmark && (
        <span
          className={`font-semibold text-[#1A3A4A] font-display tracking-tight truncate ${wordmarkClassName}`}
        >
          Agent Builder&apos;s <span className="text-turquoise">Summit</span>
        </span>
      )}
    </span>
  );
};

export default BrandLogo;
