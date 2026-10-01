/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        void: '#050508',
        abyss: '#0A0A12',
        'titan-gold': '#FFD700',
        'titan-emerald': '#00FFAA',
        'forge-magma': '#FF4500',
        'forge-ember': '#FF8C00',
        'root-violet': '#8A2BE2',
        'root-bio': '#39FF14',
        'cryo-blue': '#00BFFF',
        'nocturne-ash': '#2F4F4F',
        'aan-white': '#F0F0F0',
        'dreg-rust': '#B87333',
      },
      fontFamily: {
        mono: ['"Share Tech Mono"', 'monospace'],
        display: ['"Orbitron"', 'sans-serif'],
        body: ['"Rajdhani"', 'sans-serif'],
      },
      keyframes: {
        glitch: {
          '0%, 100%': { transform: 'translate(0)' },
          '20%': { transform: 'translate(-1px, 1px)' },
          '40%': { transform: 'translate(-1px, -1px)' },
          '60%': { transform: 'translate(1px, 1px)' },
          '80%': { transform: 'translate(1px, -1px)' },
        },
        'pulse-slow': {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '0.8' },
        },
        flicker: {
          '0%, 100%': { opacity: '1' },
          '5%': { opacity: '0.2' },
          '10%': { opacity: '1' },
          '15%': { opacity: '0.5' },
          '20%': { opacity: '1' },
        },
        'rotate-slow': {
          from: { transform: 'rotate(0deg)' },
          to: { transform: 'rotate(360deg)' },
        },
      },
      animation: {
        glitch: 'glitch 1.2s ease-in-out infinite',
        'pulse-slow': 'pulse-slow 4s ease-in-out infinite',
        flicker: 'flicker 3s linear infinite',
        'rotate-slow': 'rotate-slow 60s linear infinite',
      },
    },
  },
  plugins: [],
}
