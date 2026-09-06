/**
 * Registration component - now redirects to external registration link
 * Preserved local form for reference
 */
import React, { useCallback } from 'react';

const RegistrationForm: React.FC = () => {
  const externalRegistrationUrl = "https://community.uipath.com/events/details/uipath-tamil-nadu-student-developers-presents-agent-builders-summit-26/";

  const handleExternalRegistration = useCallback((e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.open(externalRegistrationUrl, '_blank', 'noopener,noreferrer');
  }, []);

  return (
    <section id="register" className="py-24 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-[#FFFFFF] border border-[#629BB5]/40 text-[#447F98] text-xs font-mono font-bold tracking-widest uppercase mb-6 backdrop-blur-md shadow-lg shadow-[#629BB5]/10">
            <span className="w-4 h-4 flex items-center justify-center text-[#3A6F86]">
              🎟️
            </span>
            <span>FREE REGISTRATION</span>
            <span className="bg-[#447F98] text-black text-[10px] font-extrabold px-2 py-0.5 rounded-full ml-1">
              FREE ENTRY
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold mb-4 text-black font-display tracking-tight">
            REGISTER NOW
          </h2>

          <p className="text-lg sm:text-2xl font-bold text-black font-display max-w-xl mx-auto">
            ARE YOU READY TO BUILD WHAT COMES NEXT?
          </p>
        </div>

        <div className="relative glass-panel rounded-3xl p-6 sm:p-10 border border-[#629BB5]/40 shadow-[0_0_50px_rgba(98,155,181,0.1)] overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#447F98] via-[#629BB5] to-[#B9D8E1]" aria-hidden />

          <div className="space-y-6 font-mono text-center">
            <p className="text-base sm:text-lg text-[#1A3A4A] leading-relaxed font-medium mb-6">
              Click the button below to register for Agent Builder's Summit '26. 
              Registration is free and open to all students and developers.
            </p>
            
            <a
              href={externalRegistrationUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleExternalRegistration}
              className="w-full sm:w-auto px-10 py-4 bg-gradient-to-r from-[#447F98] via-[#629BB5] to-[#B9D8E1] text-black font-display font-extrabold text-sm uppercase tracking-widest rounded-xl shadow-xl shadow-[#629BB5]/20 hover:shadow-[#629BB5]/40 transition-all duration-300 flex items-center justify-center space-x-2 mx-auto"
            >
              <span>REGISTER NOW →</span>
              <span className="w-4 h-4 ml-1">
                🚀
              </span>
            </a>
            
            <p className="mt-6 text-sm text-[#3A5566] leading-relaxed">
              After registering, you'll receive a confirmation email with event details 
              and access information for the summit at St. Joseph's College of Engineering, Chennai.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegistrationForm;
