import React from 'react';
import ComingSoonPanel from './ComingSoonPanel';

/**
 * Team page teaser. Full square + TVA roster lives in TeamRoster.tsx —
 * swap this file to `export { default } from './TeamRoster'` when revealing.
 */
const Team: React.FC = () => {
  return (
    <section
      id="team"
      className="relative z-10 min-h-[calc(100vh-8rem)] flex items-center justify-center py-16 sm:py-24 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-6xl mx-auto w-full">
        <ComingSoonPanel
          title="The Team"
          eyebrow="Will be revealed soon"
          message="Builder profiles are locked for now. The crew behind ABS '26 will be revealed soon."
        />
      </div>
    </section>
  );
};

export default Team;
