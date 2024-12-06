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
    },
  },
  plugins: [],
};
