/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        slideLeftToCenter: {
          "0%": {
            opacity: "0",
            transform: "translateX(-80px) scale(0.98)",
          },
          "100%": {
            opacity: "1",
            transform: "translateX(0) scale(1)",
          },
        },
      },
      animation: {
        "slide-left": "slideLeftToCenter 0.9s cubic-bezier(.2,.8,.2,1) forwards",
      },
    },
  },
  plugins: [],
};
