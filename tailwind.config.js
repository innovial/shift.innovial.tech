/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#0F172A', // Slate 900 - More modern deep dark blue
        'primary-focus': '#1E293B', // Slate 800
        'secondary': '#F1F5F9', // Slate 100
        'accent': '#3B82F6', // Blue 500 - Professional Tech Blue
        'accent-focus': '#2563EB', // Blue 600
        'dark': '#020617', // Slate 950
        'light': '#F8FAFC', // Slate 50
        'white': '#FFFFFF',
      },
      fontFamily: {
        sans: ['var(--font-geist-sans)'],
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
        'fade-in': 'fadeIn 1s ease-out forwards',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
