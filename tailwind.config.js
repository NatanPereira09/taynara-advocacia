/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#5E2129',
          light: '#7D2D37',
          dark: '#4A1A20',
        },
        success: {
          DEFAULT: '#10B981',
          light: '#A7F3D0',
          dark: '#065F46',
        },
        warning: {
          DEFAULT: '#F59E0B',
          light: '#FDE68A',
          dark: '#B45309',
        },
        error: {
          DEFAULT: '#EF4444',
          light: '#FECACA',
          dark: '#B91C1C',
        },
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
      },
      spacing: {
        '128': '32rem',
      },
      boxShadow: {
        'soft': '0 4px 20px rgba(0, 0, 0, 0.05)',
      },
    },
  },
  plugins: [],
};