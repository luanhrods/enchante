// tailwind.config.js

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}', // Diretório para Next.js 13+ com a pasta app
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          400: '#FFD700',
          600: '#FFA500',
          700: '#FF8C00',
        },
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        nunito: ['Nunito Sans', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        'float-delay-1': 'float 6s ease-in-out 1s infinite',
        'float-delay-2': 'float 6s ease-in-out 2s infinite',
        'float-delay-3': 'float 6s ease-in-out 3s infinite',
        'float-delay-4': 'float 6s ease-in-out 4s infinite',
        'float-delay-5': 'float 6s ease-in-out 5s infinite',
        fadeIn: 'fadeIn 1.5s ease-in-out',
        scroll: 'scroll 30s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        scroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
    },
  },
  plugins: [],
};
