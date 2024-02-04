/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './public/index.html',
  ],
  darkMode: 'class',
  theme: {
    extend: {
       colors: {
        "dark-background": "var(--dark-background)",
        "dark-secondary-background": "var(--dark-secondary-background)",
        "light-background": "var(--light-background)",
        "light-secondary-background": "var(--light-secondary-background)",
        "dark-text": "var(--dark-text)",
        "light-text": "var(--light-text)",
        "dark-grey-text": "var(--dark-grey-text)",
        "light-grey-text": "var(--light-grey-text)"
      },
    },
     screens: {
      xs: '320px',
      sm: '500px',
      md: '768px',
      lg: '1024px',
      xl: '1200px',
    },
  },
  plugins: [],
}
