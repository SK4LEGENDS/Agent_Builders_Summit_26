import React, { useState, useEffect, Component, ErrorInfo, ReactNode } from 'react';
import { Canvas } from '@react-three/fiber';
import { ReactorScene } from './ReactorScene';
import ParticleBackground from '../ParticleBackground';

interface Props {
  revealTriggered?: boolean;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

class WebGLErrorBoundary extends Component<{ children: ReactNode; fallback: ReactNode }, ErrorBoundaryState> {
  constructor(props: { children: ReactNode; fallback: ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(): ErrorBoundaryState {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.warn('WebGL Rendering Error caught by boundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback;
    }
    return this.props.children;
  }
}

export const CanvasWrapper: React.FC<Props> = ({ revealTriggered = false }) => {
  const [webglSupported, setWebglSupported] = useState<boolean>(true);
  const [reducedMotion, setReducedMotion] = useState<boolean>(false);

  useEffect(() => {
    // Check WebGL support
    try {
      const canvas = document.createElement('canvas');
      const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
      if (!gl) {
        setWebglSupported(false);
      }
    } catch {
      setWebglSupported(false);
    }


    // Check reduced motion preference
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(mediaQuery.matches);

    const handleMotionChange = (e: MediaQueryListEvent) => {
      setReducedMotion(e.matches);
    };

    mediaQuery.addEventListener('change', handleMotionChange);
    return () => mediaQuery.removeEventListener('change', handleMotionChange);
  }, []);

  if (!webglSupported) {
    return <ParticleBackground />;
  }

  return (
    <WebGLErrorBoundary fallback={<ParticleBackground />}>
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <Canvas
          camera={{ position: [0, 0, 10], fov: 60 }}
          dpr={[1, Math.min(typeof window !== 'undefined' ? window.devicePixelRatio : 1, 2)]}
          gl={{ antialias: true, alpha: true }}
          style={{ background: 'transparent' }}
        >
          <ReactorScene revealTriggered={revealTriggered} reducedMotion={reducedMotion} />
        </Canvas>
      </div>
    </WebGLErrorBoundary>
  );
};
