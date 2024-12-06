/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        customBrown: {
          100: "#dabba3", // Lightest
          200: "#a57261", // Lighter
          500: "#592804", // Base (Original)
          700: "#451e03", // Darker
          900: "#301502", // Darkest
        },
      },
      fontSize: {
        "2.5xl": "1.75rem", // Example: 1.75rem is between 2xl (1.5rem) and 3xl (1.875rem)
      },
      screens: {
        xs: "320px",
        sm: "480px", // Custom breakpoint for smaller devices
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
    },
  },
  plugins: [],
};
