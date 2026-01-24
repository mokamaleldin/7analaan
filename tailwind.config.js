/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'arabic': ['ITFQ Qomra Arabic', 'Cairo', 'Tajawal', 'sans-serif'],
        'primary': ['ITFQ Qomra Arabic', 'Cairo', 'Tajawal', 'sans-serif'],
        'sans': ['ITFQ Qomra Arabic', 'Cairo', 'Tajawal', 'sans-serif'],
      },
      fontWeight: {
        'light': '300',
        'normal': '400',
        'regular': '400',
        'medium': '500',
        'semibold': '500',
        'bold': '700',
        'extrabold': '700',
        'black': '900',
      }
    },
  },
  plugins: [],
};
