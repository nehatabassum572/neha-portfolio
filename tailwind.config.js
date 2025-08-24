/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        myfont: ['nasalization', 'sans-serif'], 
        myfont2: ['quentin', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
