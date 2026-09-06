import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';

type DoomContextValue = {
  active: boolean;
  toggle: () => void;
  setActive: (v: boolean) => void;
  flash: string | null;
};

const DoomProtocolContext = createContext<DoomContextValue | null>(null);

const STORAGE_KEY = 'abs-doom-protocol';

export const DoomProtocolProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [active, setActiveState] = useState(false);
  const [flash, setFlash] = useState<string | null>(null);

  const goLanding = useCallback(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    window.history.replaceState(null, '', '/');
  }, []);

  const setActive = useCallback((v: boolean) => {
    setActiveState(v);
    document.documentElement.dataset.doom = v ? 'on' : 'off';
    try {
      localStorage.setItem(STORAGE_KEY, v ? '1' : '0');
    } catch {
      /* ignore */
    }
    setFlash(v ? 'DOOM PROTOCOL ENGAGED' : 'DOOM PROTOCOL DISENGAGED');
    window.setTimeout(goLanding, 40);
  }, [goLanding]);

  const toggle = useCallback(() => {
    setActiveState((prev) => {
      const next = !prev;
      document.documentElement.dataset.doom = next ? 'on' : 'off';
      try {
        localStorage.setItem(STORAGE_KEY, next ? '1' : '0');
      } catch {
        /* ignore */
      }
      setFlash(next ? 'DOOM PROTOCOL ENGAGED' : 'DOOM PROTOCOL DISENGAGED');
      window.setTimeout(goLanding, 40);
      return next;
    });
  }, [goLanding]);

  // Restore + clear flash
  useEffect(() => {
    try {
      if (localStorage.getItem(STORAGE_KEY) === '1') {
        setActiveState(true);
        document.documentElement.dataset.doom = 'on';
      } else {
        document.documentElement.dataset.doom = 'off';
      }
    } catch {
      document.documentElement.dataset.doom = 'off';
    }
  }, []);

  useEffect(() => {
    if (!flash) return;
    const t = window.setTimeout(() => setFlash(null), 2200);
    return () => window.clearTimeout(t);
  }, [flash]);

  // Type "616" to toggle (ignored while typing in form fields)
  useEffect(() => {
    let buffer = '';
    let resetTimer = 0;

    const onKeyDown = (e: KeyboardEvent) => {
      const el = e.target as HTMLElement | null;
      if (
        el &&
        (el.tagName === 'INPUT' ||
          el.tagName === 'TEXTAREA' ||
          el.tagName === 'SELECT' ||
          el.isContentEditable)
      ) {
        return;
      }

      if (!/^[0-9]$/.test(e.key)) {
        buffer = '';
        return;
      }

      buffer = (buffer + e.key).slice(-3);
      window.clearTimeout(resetTimer);
      resetTimer = window.setTimeout(() => {
        buffer = '';
      }, 1600);

      if (buffer === '616') {
        buffer = '';
        toggle();
      }
    };

    window.addEventListener('keydown', onKeyDown);
    return () => {
      window.removeEventListener('keydown', onKeyDown);
      window.clearTimeout(resetTimer);
    };
  }, [toggle]);

  const value = useMemo(
    () => ({ active, toggle, setActive, flash }),
    [active, toggle, setActive, flash]
  );

  return (
    <DoomProtocolContext.Provider value={value}>
      {children}
      {flash && (
        <div
          className="fixed top-24 left-1/2 z-[100] -translate-x-1/2 pointer-events-none"
          role="status"
          aria-live="polite"
        >
          <div className="doom-toast px-5 py-2.5 rounded-lg border font-mono text-xs sm:text-sm font-bold tracking-[0.2em] uppercase shadow-2xl">
            {flash}
          </div>
        </div>
      )}
    </DoomProtocolContext.Provider>
  );
};

export function useDoomProtocol() {
  const ctx = useContext(DoomProtocolContext);
  if (!ctx) {
    throw new Error('useDoomProtocol must be used within DoomProtocolProvider');
  }
  return ctx;
}
