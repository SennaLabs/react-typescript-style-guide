/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    screens: {
      mobile: { max: "430px" },
      tablet: { min: "431px", max: "1024px" },
      desktop: { min: "1025px" },
      "tablet-mobile": { max: "1024px" },
      "desktop-tablet": { min: "431px" },
    },
    extend: {
      colors: {
        primary: {
          DEFAULT: "#0f172a",
        },
        secondary: {
          DEFAULT: "#f1f5f9",
        },
        gray: {
          DEFAULT: "#f8fafc",
          1: "#e2e8f0",
          2: "#64748b",
          3: "#fafafa",
        },
        red: {
          DEFAULT: "#ff0000",
        },
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
