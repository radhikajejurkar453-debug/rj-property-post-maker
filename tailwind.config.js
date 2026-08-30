/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ivory: "#F7F4EC",
        forest: {
          DEFAULT: "#14342A",
          light: "#1E4B3B",
          dark: "#0C201A",
        },
        brass: {
          DEFAULT: "#C9A227",
          light: "#E4C567",
          dark: "#9C7C17",
        },
        charcoal: "#211E1A",
        sage: "#DCE5DA",
      },
      fontFamily: {
        display: ["Fraunces", "serif"],
        body: ["Inter", "system-ui", "sans-serif"],
        mono: ["'IBM Plex Mono'", "monospace"],
      },
      boxShadow: {
        card: "0 30px 60px -20px rgba(12, 32, 26, 0.45)",
        soft: "0 8px 24px -8px rgba(20, 52, 42, 0.25)",
      },
    },
  },
  plugins: [],
};
