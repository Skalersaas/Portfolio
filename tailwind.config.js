/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./*.html", // Match all HTML files in the root directory
    "./src/**/*.{js,jsx,ts,tsx,vue}", // Match source files for dynamic frameworks like Vue or React
  ],
  plugins: [],
  theme: {
    extend: {
      colors: {
        primary: "#0F172A",
        secondary: "#1E293B",
        accent: "#7477FF",
        lightAccent: "#A0AEC0",
      },
    },
    screens: {
      xs: "500px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
  },
};
