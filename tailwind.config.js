/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        turquoise: '#447F98',
        'slate-blue': '#629BB5',
        platinum: '#DADEE1',
        glacier: '#B9D8E1',
        'ice-blue': '#D6EBF3',
        void: '#1A3A4A',
        'forest-dark': '#1A3A4A',
        emerald: {
          DEFAULT: '#447F98',
          neon: '#629BB5',
        },
        teal: {
          arcane: '#629BB5',
          deep: '#447F98',
        },
        silver: '#DADEE1',
        chrome: '#D6EBF3',
        ice: '#D6EBF3',
        sage: '#629BB5',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['Sora', 'Inter', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      animation: {
        'pulse-glow': 'pulseGlow 3s ease-in-out infinite',
        'float-slow': 'floatSlow 6s ease-in-out infinite',
        'spin-slow': 'spin 20s linear infinite',
      },
      keyframes: {
        pulseGlow: {
          '0%, 100%': { opacity: '0.4', filter: 'drop-shadow(0 0 15px rgba(68,127,152,0.35))' },
          '50%': { opacity: '0.8', filter: 'drop-shadow(0 0 28px rgba(98,155,181,0.55))' },
        },
        floatSlow: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
};
