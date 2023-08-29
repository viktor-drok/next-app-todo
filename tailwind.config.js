/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
    colors: {
      "header-bg": "var(--header-bg)",
      "main-bg": "var(--main-bg)",
      "highPrior-bg": "var(--highPrior-bg)",
      "medPrior-bg": "var(--medPrior-bg)",
      "lowPrior-bg": "var(--lowPrior-bg)",
      "footer-bg": "var(--footer-bg)",
      "item-bg": "var(--item-bg)",
      "aside-bg": "var(--aside-bg)",
      "details-bg": "var(--details-bg)",
      "save-bg": "var(--save-bg)",
      "completed-bg": "var(--completed-bg)",
      "done-bg": "var(--done-bg)",
      "delete-bg": "var(--delete-bg)",
      "newItem-bg": "var(--newItem-bg)",
      "footer-bg": "var(--footer-bg)",
    }
  },
  plugins: [],
};
