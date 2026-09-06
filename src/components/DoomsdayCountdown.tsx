import React, { useState } from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import { useDoomProtocol } from '../context/DoomProtocolContext';

/** Official / fan live countdown stream */
const YOUTUBE_VIDEO_ID = 'f17J3AXVK5w';

function embedUrl(muted: boolean) {
  const params = new URLSearchParams({
    autoplay: '1',
    mute: muted ? '1' : '0',
    playsinline: '1',
    rel: '0',
    modestbranding: '1',
    controls: '1',
  });
  return `https://www.youtube.com/embed/${YOUTUBE_VIDEO_ID}?${params.toString()}`;
}

/** Full-section live stream — no text overlays on the video */
const DoomsdayCountdown: React.FC = () => {
  const { active } = useDoomProtocol();
  const [muted, setMuted] = useState(true);

  if (!active) return null;

  return (
    <section
      id="doom-countdown"
      className="relative z-10 w-full min-h-[100svh] min-h-screen bg-black overflow-hidden"
      aria-label="Avengers Doomsday live countdown"
    >
      <iframe
        key={muted ? 'muted' : 'unmuted'}
        className="absolute inset-0 h-full w-full border-0"
        src={embedUrl(muted)}
        title="Avengers: Doomsday live countdown"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        referrerPolicy="strict-origin-when-cross-origin"
      />

      {/* Icon-only unmute — no labels on the video */}
      <button
        type="button"
        onClick={() => setMuted((m) => !m)}
        aria-label={muted ? 'Unmute stream' : 'Mute stream'}
        className="absolute bottom-5 right-5 z-10 flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-black/60 text-white backdrop-blur-md hover:bg-black/80 transition-colors"
      >
        {muted ? <VolumeX className="w-5 h-5" aria-hidden /> : <Volume2 className="w-5 h-5" aria-hidden />}
      </button>
    </section>
  );
};

export default DoomsdayCountdown;
