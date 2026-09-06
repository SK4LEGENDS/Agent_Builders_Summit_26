import React, { useEffect, useRef } from 'react';

/**
 * ABS '26 background — Simple, elegant floating nodes.
 */
const ParticleBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    let reducedMotion = mediaQuery.matches;
    let animId = 0;
    let running = true;

    const colorsNormal = ['#447F98', '#629BB5', '#B9D8E1', '#3A6F86', '#DADEE1'];
    const colorsDoom = ['#4ade80', '#22c55e', '#86efac', '#166534', '#14532d'];

    class Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      color: string;
      size: number;
      baseOpacity: number;
      disruptedUntil: number;

      constructor(x: number, y: number, color: string) {
        this.x = x;
        this.y = y;
        this.vx = (Math.random() - 0.5) * 0.8;
        this.vy = (Math.random() - 0.5) * 0.8;
        this.color = color;
        this.size = Math.random() * 2 + 1;
        this.baseOpacity = Math.random() * 0.5 + 0.2;
        this.disruptedUntil = 0;
      }
    }

    let particles: Particle[] = [];
    const mouse = { x: -9999, y: -9999, speedX: 0, speedY: 0, lastX: -9999, lastY: -9999 };

    const initParticles = () => {
      const isDoom = document.documentElement.dataset.doom === 'on';
      const colors = isDoom ? colorsDoom : colorsNormal;
      // Increased particle count density
      const count = reducedMotion ? 80 : Math.min(300, Math.floor((window.innerWidth * window.innerHeight) / 5000));
      
      particles = [];
      for (let i = 0; i < count; i++) {
        const color = colors[Math.floor(Math.random() * colors.length)];
        particles.push(new Particle(Math.random() * canvas.width, Math.random() * canvas.height, color));
      }
    };

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initParticles();
    };

    const animate = () => {
      if (!running || reducedMotion) return;

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const now = Date.now();

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // Gentle interaction with mouse - break shapes and scatter
        const dxMouse = p.x - mouse.x;
        const dyMouse = p.y - mouse.y;
        const distMouseSq = dxMouse * dxMouse + dyMouse * dyMouse;
        
        if (distMouseSq < 15000) {
           const distMouse = Math.sqrt(distMouseSq);
           // If close to mouse, disrupt the particle for 5-8 seconds
           if (p.disruptedUntil < now) {
             p.disruptedUntil = now + 5000 + Math.random() * 3000;
             // Add a little scatter burst away from mouse
             const force = (1 - distMouse / 122) * 2;
             p.vx += (dxMouse / distMouse) * force + mouse.speedX * 0.1;
             p.vy += (dyMouse / distMouse) * force + mouse.speedY * 0.1;
           }
        }

        // Apply friction if moving fast (from being scattered)
        const speedSq = p.vx * p.vx + p.vy * p.vy;
        if (speedSq > 1) {
          p.vx *= 0.98;
          p.vy *= 0.98;
        } else if (speedSq < 0.1 && p.disruptedUntil < now) {
           // gradually restore normal speed
           p.vx += (Math.random() - 0.5) * 0.05;
           p.vy += (Math.random() - 0.5) * 0.05;
        }

        // Gentle floating movement
        p.x += p.vx;
        p.y += p.vy;

        // Wrap around edges
        if (p.x < -10) p.x = canvas.width + 10;
        if (p.x > canvas.width + 10) p.x = -10;
        if (p.y < -10) p.y = canvas.height + 10;
        if (p.y > canvas.height + 10) p.y = -10;

        // Draw node
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.baseOpacity + 0.2;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();

        const isDisrupted = p.disruptedUntil > now;

        // Connect nearby nodes only if NEITHER is disrupted
        if (!isDisrupted) {
          for (let j = i + 1; j < particles.length; j++) {
            const p2 = particles[j];
            if (p2.disruptedUntil > now) continue;

            const dx = p.x - p2.x;
            const dy = p.y - p2.y;
            const distSq = dx * dx + dy * dy;

            if (distSq < 15000) {
              const distance = Math.sqrt(distSq);
              // Increased line opacity multiplier for darker lines
              ctx.globalAlpha = (1 - distance / 122) * 0.45 * (p.baseOpacity + 0.2);
              ctx.strokeStyle = p.color;
              ctx.lineWidth = 0.8;
              ctx.beginPath();
              ctx.moveTo(p.x, p.y);
              ctx.lineTo(p2.x, p2.y);
              ctx.stroke();
            }
          }
        }
      }

      ctx.globalAlpha = 1;
      animId = requestAnimationFrame(animate);
    };

    const start = () => {
      cancelAnimationFrame(animId);
      resize();
      if (reducedMotion) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        particles.forEach(p => {
          ctx.fillStyle = p.color;
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
          ctx.fill();
        });
      } else {
        animId = requestAnimationFrame(animate);
      }
    };

    const onMotionChange = (e: MediaQueryListEvent) => {
      reducedMotion = e.matches;
      start();
    };

    const onMouseMove = (e: MouseEvent) => {
      mouse.speedX = e.clientX - mouse.lastX;
      mouse.speedY = e.clientY - mouse.lastY;
      mouse.lastX = mouse.x;
      mouse.lastY = mouse.y;
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    const onMouseLeave = () => {
      mouse.x = -9999;
      mouse.y = -9999;
      mouse.lastX = -9999;
      mouse.lastY = -9999;
      mouse.speedX = 0;
      mouse.speedY = 0;
    };

    const syncDoomPalette = () => {
      const isDoom = document.documentElement.dataset.doom === 'on';
      if (isDoom) {
        running = false;
        cancelAnimationFrame(animId);
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        canvas.style.opacity = '0';
      } else {
        running = true;
        canvas.style.opacity = '1';
        start();
      }
    };

    start();
    syncDoomPalette();

    window.addEventListener('resize', resize);
    window.addEventListener('mousemove', onMouseMove, { passive: true });
    document.documentElement.addEventListener('mouseleave', onMouseLeave);
    mediaQuery.addEventListener('change', onMotionChange);

    const doomObserver = new MutationObserver(syncDoomPalette);
    doomObserver.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['data-doom'],
    });

    return () => {
      running = false;
      cancelAnimationFrame(animId);
      doomObserver.disconnect();
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', onMouseMove);
      document.documentElement.removeEventListener('mouseleave', onMouseLeave);
      mediaQuery.removeEventListener('change', onMotionChange);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 transition-opacity duration-700"
      aria-hidden
      style={{ background: 'radial-gradient(circle at 50% 50%, #FFFFFF 0%, #D6EBF3 100%)' }}
    />
  );
};

export default ParticleBackground;
