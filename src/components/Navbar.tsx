import React, { useState, useEffect, useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Menu,
  X,
  Info,
  MapPin,
  Calendar,
  Users,
  Sparkles,
  HelpCircle,
  Ticket,
} from 'lucide-react';
import { useDoomProtocol } from '../context/DoomProtocolContext';
import RegisterButton from './RegisterButton';

/** In-page sections on the home landing page */
const navItems = [
  { name: 'About', href: '#about', icon: Info },
  { name: 'Event', href: '#details', icon: MapPin },
  { name: 'Agenda', href: '#agenda', icon: Calendar },
  { name: 'Speakers', href: '#speakers', icon: Users },
  { name: 'Highlights', href: '#highlights', icon: Sparkles },
  { name: 'Why Attend', href: '#why-attend', icon: HelpCircle },
];

const Navbar: React.FC = () => {
  const { active: doomActive } = useDoomProtocol();
  const location = useLocation();
  const navigate = useNavigate();
  const onTeamPage = location.pathname === '/team';
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [hideForVideo, setHideForVideo] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const [headerHeight, setHeaderHeight] = useState(88);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const measure = () => {
      if (headerRef.current) setHeaderHeight(headerRef.current.offsetHeight);
    };
    measure();
    window.addEventListener('resize', measure);
    return () => window.removeEventListener('resize', measure);
  }, []);

  // Hide header while the Doom stream is in view — main page only (never on /team)
  useEffect(() => {
    if (!doomActive || onTeamPage) {
      setHideForVideo(false);
      return;
    }

    let observer: IntersectionObserver | null = null;
    let tries = 0;
    let cancelled = false;
    let retryTimer = 0;

    const attach = () => {
      if (cancelled) return;
      const el = document.getElementById('doom-countdown');
      if (!el) {
        setHideForVideo(false);
        if (tries++ < 20) {
          retryTimer = window.setTimeout(attach, 50);
        }
        return;
      }
      observer = new IntersectionObserver(
        ([entry]) => {
          const near = entry.isIntersecting && entry.intersectionRatio >= 0.2;
          setHideForVideo(near);
          if (near) setMobileMenuOpen(false);
        },
        { threshold: [0, 0.15, 0.2, 0.35, 0.5, 0.75, 1] }
      );
      observer.observe(el);
    };

    attach();
    return () => {
      cancelled = true;
      window.clearTimeout(retryTimer);
      observer?.disconnect();
      setHideForVideo(false);
    };
  }, [doomActive, onTeamPage]);

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  // Highlight current section while scrolling (probe just below fixed header)
  useEffect(() => {
    if (onTeamPage) {
      setActiveSection('');
      return;
    }

    const onScroll = () => {
      const probe = headerHeight + 24;
      const ids = [...navItems.map((i) => i.href.slice(1)), 'register'];
      let current = '';
      for (const id of ids) {
        const el = document.getElementById(id);
        if (!el) continue;
        if (el.getBoundingClientRect().top <= probe) current = id;
      }
      setActiveSection(current);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [headerHeight, onTeamPage]);

  const scrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const id = href.replace('#', '');

    if (location.pathname !== '/') {
      navigate({ pathname: '/', hash: id });
      return;
    }

    setActiveSection(id);
    const el = document.getElementById(id);
    if (!el) return;
    const top = el.getBoundingClientRect().top + window.scrollY - headerHeight - 16;
    window.scrollTo({ top: Math.max(0, top), behavior: 'smooth' });
    window.history.pushState(null, '', href);
  };

  const goTop = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    setActiveSection('');
    if (location.pathname !== '/') {
      navigate('/');
      return;
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
    window.history.pushState(null, '', '#top');
  };

  return (
    <header
      ref={headerRef}
      className={`fixed top-0 left-0 right-0 z-50 px-3 sm:px-5 lg:px-6 pt-3 sm:pt-4 transition-all duration-300 ease-out ${
        hideForVideo
          ? '-translate-y-[120%] opacity-0 pointer-events-none'
          : 'translate-y-0 opacity-100'
      }`}
    >
      <div
        className={`max-w-7xl mx-auto flex items-center justify-between gap-2 sm:gap-3 px-3 sm:px-4 lg:px-5 py-2.5 sm:py-3 rounded-2xl border transition-all duration-300 ${
          scrolled
            ? 'bg-white/95 border-black/5 shadow-[0_8px_30px_rgba(68,127,152,0.12)] backdrop-blur-xl'
            : 'bg-white/90 border-black/[0.04] shadow-[0_4px_24px_rgba(68,127,152,0.08)] backdrop-blur-md'
        }`}
      >
        <div className="flex items-center gap-3 flex-shrink-0 min-w-0">
          <a
            href="/"
            onClick={goTop}
            className="group min-w-0 text-[14px] sm:text-[15px] font-semibold text-[#1A3A4A] font-display tracking-tight truncate"
            aria-label="ABS '26 home"
          >
            Agent Builder&apos;s <span className="text-turquoise">Summit</span>
          </a>
          <div className="hidden xl:block w-px h-6 bg-platinum" aria-hidden />
        </div>

        <nav
          className="hidden lg:flex items-center justify-center flex-1 gap-0.5 min-w-0"
          aria-label="Primary"
        >
          {navItems.map((item) => {
            const isActive = !onTeamPage && activeSection === item.href.slice(1);
            return (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => scrollTo(e, item.href)}
                className={`px-2 xl:px-2.5 py-1.5 text-[12px] xl:text-[13px] font-medium rounded-lg whitespace-nowrap transition-colors ${
                  isActive
                    ? 'text-turquoise bg-glacier/50'
                    : 'text-[#2F4A58] hover:text-turquoise hover:bg-glacier/30'
                }`}
              >
                {item.name}
              </a>
            );
          })}
        </nav>

        <div className="flex items-center gap-2 flex-shrink-0">
           <RegisterButton
             href="#register"
             onClick={(e) => scrollTo(e, '#register')}
             label="Register →"
             size="sm"
           />

           <button
             type="button"
             onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
             className="lg:hidden p-2 rounded-xl text-[#1A3A4A] hover:bg-glacier/50 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-turquoise"
             aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
             aria-expanded={mobileMenuOpen}
           >
             {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
           </button>
         </div>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.button
              type="button"
              aria-label="Dismiss menu"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40 bg-black/20 backdrop-blur-[2px] lg:hidden"
              onClick={() => setMobileMenuOpen(false)}
            />
            <motion.div
              initial={{ opacity: 0, y: -8, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -8, scale: 0.98 }}
              transition={{ duration: 0.18 }}
              style={{ top: headerHeight + 8 }}
              className="fixed left-3 right-3 sm:left-5 sm:right-5 z-50 lg:hidden"
              role="dialog"
              aria-modal="true"
              aria-label="Mobile navigation"
            >
              <div className="max-w-7xl mx-auto bg-white rounded-2xl border border-platinum shadow-[0_16px_40px_rgba(68,127,152,0.14)] overflow-hidden max-h-[min(70vh,520px)] flex flex-col">
                 <div className="p-3 space-y-0.5 overflow-y-auto">
                   {navItems.map((item) => {
                     const Icon = item.icon;
                     const isActive = !onTeamPage && activeSection === item.href.slice(1);
                     return (
                       <a
                         key={item.name}
                         href={item.href}
                         onClick={(e) => scrollTo(e, item.href)}
                         className={`flex items-center gap-3 px-4 py-3 text-[15px] font-medium rounded-xl transition-colors ${
                           isActive
                             ? 'bg-glacier/60 text-turquoise'
                             : 'text-[#1A3A4A] hover:bg-glacier/40'
                         }`}
                       >
                         <Icon className="w-5 h-5 text-turquoise" aria-hidden />
                         {item.name}
                       </a>
                     );
                   })}
                 </div>
                 <div className="p-3 pt-0 border-t border-platinum flex justify-center">
                   <RegisterButton
                     href="#register"
                     onClick={(e) => scrollTo(e, '#register')}
                     label="Register →"
                     size="md"
                     className="w-full max-w-none justify-center"
                   />
                 </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
