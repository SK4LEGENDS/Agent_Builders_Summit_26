import { useEffect } from 'react';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import { DoomProtocolProvider } from './context/DoomProtocolContext';
import ParticleBackground from './components/ParticleBackground';
import DoomsdayBackdrop from './components/DoomsdayBackdrop';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutSection from './components/AboutSection';
import EventDetails from './components/EventDetails';
import Agenda from './components/Agenda';
import Speakers from './components/Speakers';
import HighlightCards from './components/HighlightCards';
import WhyAttend from './components/WhyAttend';
import Team from './components/Team';
import Registration from './components/Registration';
import DoomsdayCountdown from './components/DoomsdayCountdown';
import Footer from './components/Footer';

const REMOVED_HASHES = new Set(['journey', 'mission', 'stats', 'team']);

function scrollToHash(hash: string, behavior: ScrollBehavior = 'auto') {
  const id = hash.replace(/^#/, '').replace(/^\//, '');
  if (!id || id === 'top') {
    window.scrollTo({ top: 0, behavior });
    return;
  }
  const el = document.getElementById(id);
  if (!el) return;
  const header = document.querySelector('header');
  const headerHeight = header?.getBoundingClientRect().height ?? 88;
  const top = el.getBoundingClientRect().top + window.scrollY - headerHeight - 16;
  window.scrollTo({ top: Math.max(0, top), behavior });
}

function HomePage() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const raw = (location.hash || window.location.hash).replace(/^#/, '');
    const hash = raw.replace(/^\//, '');

    if (hash === 'team') {
      navigate('/team', { replace: true });
      return;
    }

    if (!hash || hash === 'top') {
      if (!location.hash) return;
      window.scrollTo({ top: 0, behavior: 'auto' });
      return;
    }

    if (REMOVED_HASHES.has(hash) || !document.getElementById(hash)) {
      const fallback = hash === 'mission' ? 'about' : 'top';
      window.history.replaceState(null, '', fallback === 'top' ? '/' : `#${fallback}`);
      scrollToHash(fallback === 'top' ? 'top' : fallback, 'auto');
      return;
    }

    if (raw.startsWith('/')) {
      window.history.replaceState(null, '', `#${hash}`);
    }

    requestAnimationFrame(() => scrollToHash(hash, 'auto'));
  }, [location.pathname, location.hash, navigate]);

  return (
    <>
      <main className="relative z-10 w-full">
        <Hero />
        <AboutSection />
        <EventDetails />
        <Agenda />
        <Speakers />
        <HighlightCards />
        <WhyAttend />
        <Registration />
      </main>
      {/* Protocol 616 stream — main page only, not on /team */}
      <DoomsdayCountdown />
    </>
  );
}

function TeamPage() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, []);

  return (
    <main className="relative z-10 w-full pt-24 sm:pt-28">
      <Team />
    </main>
  );
}

function App() {
  return (
    <DoomProtocolProvider>
      <div
        id="top"
        className="relative min-h-screen bg-ice-blue text-[#1A3A4A] overflow-x-hidden selection:bg-slate-blue selection:text-white"
      >
        <ParticleBackground />
        <DoomsdayBackdrop />
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/team" element={<TeamPage />} />
          <Route path="*" element={<HomePage />} />
        </Routes>
        <Footer />
      </div>
    </DoomProtocolProvider>
  );
}

export default App;
