import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#14170F",
        surface: "#1C2016",
        raised: "#242A1C",
        ink: "#E9E4D4",
        muted: "#A8A390",
        brass: "#9C8748",
        oxblood: "#6E2A2A",
        line: "#3A3F2E",
      },
      fontFamily: {
        display: ["var(--font-display)"],
        body: ["var(--font-body)"],
      },
      letterSpacing: {
        widest2: "0.28em",
      },
    },
  },
  plugins: [],
};

export default config;
