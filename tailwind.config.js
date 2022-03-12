module.exports = {
  purge: ['./src/**/*{html,js}'],
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    backdropFilter: {
      blur: 'blur(180px)',
    },

    screens: {
      xs: '480px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },

    extend: {
      animation: {
        blob: 'blob 7s infinite',
      },

      keyframes: {
        blob: {
          '0%': { transform: 'translate(0px, 0px) scale(1)' },
          '33%': { transform: 'translate(30px, -50px) scale(1.1)' },
          '66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
          '100%': { transform: 'translate(0px, 0px) scale(1)' },
        },
      },
      colors: {
        dark: {
          default: '#010101',
          100: '#0a0b1e',
          200: '#16181d',
          500: '#0f1115',
          700: '#202125',
        },
      },
      inset: {
        17: '68px',
        26: '104px',
      },
    },
  },
  plugins: [require('tailwindcss-filters')],
};
