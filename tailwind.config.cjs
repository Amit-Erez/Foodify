module.exports = {
  theme: {
    extend: {
      keyframes: {
        zoomIn: {
          "0%": { transform: "scale(0)" },
          "100%": { transform: "scale(1)" },
        },
        fadeIn: {
          "0%": { transform: "opacity(0)"},
          "100%": { transform: "opacity(1)"},
        }
      },
      animation: {
        "zoom-in-mount": "zoomIn 0.7s ease-out",
        "fade-in": "fadeIn 1s ease-in"
      },
    },
  },
  plugins: [],
};
