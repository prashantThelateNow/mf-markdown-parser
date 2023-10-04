/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "mindfire-text-red": "#f00",
        "mindfire-text-black": "#3a3d41",
        "mindfire-footer-border-color": "#eff0f1",
        "mindfire-footer-text-color": "#819198",
        "mindfire-content-p-text-color": "#7f8082",
      },
      fontFamily: {
        "nunito-sans": "Nunito Sans"
      },
      fontSize: {
        "5.5xl": "3.25rem"
      }
    },
  },
  plugins: [],
};
