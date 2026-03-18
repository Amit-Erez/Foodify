module.exports = {
  theme: {
    extend: {
      keyframes: {
        zoomIn: {
          "0%": { transform: "scale(0)" },
          "100%": { transform: "scale(1)" },
        },
      },
      animation: {
        "zoom-in-mount": "zoomIn 0.7s ease-out",
      },
    },
  },
  plugins: [],
};
