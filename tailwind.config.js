/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        // ### Primary
        "1-Light-red-CTA-text": "hsl(356, 100%, 66%)",
        "2-Very-light-red-CTA-hover-background": "hsl(355, 100%, 74%)",
        "3-Very-dark-blue-headings": "hsl(208, 49%, 24%)",

        // ### Neutral
        "4-White-text": "hsl(0, 0%, 100%)",
        "5-Grayish-blue-footer-text": "hsl(240, 2%, 79%)",
        "6-Very-dark-grayish-blue-body-copy": "hsl(207, 13%, 34%)",
        "7-Very-dark-black-blue-footer-background": "hsl(240, 10%, 16%)",
      },
      backgroundImage: {
        "small-bg": "url('/images/bg-pattern-intro-mobile.svg')",
        "desktop-bg": "url('/images/bg-pattern-intro-desktop.svg')",
        "editor-mobile": "url('/images/illustration-editor-mobile.svg')",
        "editor-desktop": "url('/images/illustration-editor-desktop.svg')",
      },
    },
  },
  plugins: [],
};
