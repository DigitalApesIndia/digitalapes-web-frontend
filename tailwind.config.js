/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1280px",
      // => @media (min-width: 1536px) { ... }
    },

    borderWidth: {
      DEFAULT: "1px",
      0: "0",
      1.5: "1.5px",
      2: "2px",
      3: "3px",
      4: "4px",
      6: "6px",
      8: "8px",
    },

    container: {
      center: true,
      padding: "1rem",
    },

    extend: {
      aspectRatio: {
        "3/2": "3 / 2",
      },

      colors: {
        primary: "#FF9900",
      },

      height: {
        '120': '30rem',
      },

      rotate: {
        '22': '22deg',
      }
    },
  },
  plugins: [],
};
