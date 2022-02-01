module.exports = {
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./layouts/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "blue-custom": {
          100: "#0B143A",
          200: "#040714",
        },
      },
      scale: {
        101: "1.01",
      },
    },
  },
};
