/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {},
  plugins: [require('daisyui')],
  daisyui: {
    themes: ['retro', 'cyberpunk', 'coffee',"autumn", "halloween", "synthwave", "valentine", "garden", "forest", "aqua", "lofi", "pastel", "fantastic", "macintosh", "black", "luxury", "dracula", "cmyk", "autumn", "business", "acid", "lemonade", "night", "coffee", "winter"],
  },
};
