/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        EBGaramond: ["EB Garamond", "serif"],
        Prompt: ["Prompt", "serif"],
        poppins: ["Poppins", "sans-serif"], // Thêm font Poppins
      },
    },
  },
  plugins: [],
};
