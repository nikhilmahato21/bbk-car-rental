/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['Syne', 'sans-serif'],
        heading: ['Outfit', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      colors: {
        night: {
          50:  '#0f172a',
          100: '#1e293b',
          200: '#334155',
          300: '#475569',
          400: '#64748b',
          500: '#94a3b8',
          600: '#cbd5e1',
          700: '#dbeafe',
          800: '#eff6ff',
          900: '#f5f9ff',
          950: '#f0f6ff',
        },
        electric: {
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
        },
        glow: '#1d4ed8',
        neon: '#0ea5e9',
      },
      backgroundImage: {
        'mesh': 'radial-gradient(at 40% 20%, #dbeafe 0px, transparent 50%), radial-gradient(at 80% 0%, #eff6ff 0px, transparent 50%), radial-gradient(at 0% 50%, #bfdbfe 0px, transparent 50%), radial-gradient(at 80% 50%, #f0f6ff 0px, transparent 50%), radial-gradient(at 0% 100%, #dbeafe 0px, transparent 50%)',
        'mesh-hero': 'radial-gradient(ellipse at top left, rgba(59,130,246,0.13) 0%, transparent 55%), radial-gradient(ellipse at bottom right, rgba(29,78,216,0.09) 0%, transparent 55%), linear-gradient(135deg, #f0f6ff 0%, #e8f2ff 50%, #f0f6ff 100%)',
        'glass-border': 'linear-gradient(135deg, rgba(59,130,246,0.2), rgba(59,130,246,0.05))',
      },
      animation: {
        'float': 'float 8s ease-in-out infinite',
        'float-delayed': 'float 8s ease-in-out 2s infinite',
        'pulse-slow': 'pulse 4s ease-in-out infinite',
        'shimmer': 'shimmer 3s ease-in-out infinite',
        'spin-slow': 'spin 20s linear infinite',
        'gradient-shift': 'gradientShift 8s ease infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '33%': { transform: 'translateY(-15px) rotate(1deg)' },
          '66%': { transform: 'translateY(-8px) rotate(-1deg)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-1000px 0' },
          '100%': { backgroundPosition: '1000px 0' },
        },
        gradientShift: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
      boxShadow: {
        'glass': '0 2px 20px rgba(37,99,235,0.07), inset 0 1px 0 rgba(255,255,255,0.9)',
        'glass-lg': '0 8px 40px rgba(37,99,235,0.10), inset 0 1px 0 rgba(255,255,255,0.9)',
        'glow-purple': '0 0 30px rgba(59,130,246,0.30)',
        'glow-cyan': '0 0 30px rgba(14,165,233,0.25)',
        'neon': '0 0 20px rgba(37,99,235,0.30), 0 0 60px rgba(37,99,235,0.10)',
      },
    },
  },
  plugins: [],
}
