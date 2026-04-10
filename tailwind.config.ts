import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
        },
      },
      boxShadow: {
        soft: '0 20px 70px rgba(15, 23, 42, 0.08)',
      },
      animation: {
        spotlight: 'spotlight 1.8s ease-out infinite',
      },
      keyframes: {
        spotlight: {
          '0%, 100%': { opacity: '0.2', transform: 'scale(0.96)' },
          '50%': { opacity: '0.45', transform: 'scale(1)' },
        },
      },
    },
  },
  plugins: [],
}

export default config
