// tailwind.config.ts
import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
         colors: {
        lightMode: {
          light: '#FFFFFF',
          dark: '#181A1B',
          darklight: '#2A2A2A',
          lightDark: "#E5E7EB",
          colorBlue: "#125DAE",
          colorBlueDark: "#0A4A8B",
          gray: "#3C444F",
        },
        darkMode: {
          light: '#FFFFFF',
          dark: '#111827',
          darklight: '#1f2937',
          lightDark: "#E5E7EB",
          colorBlue: "#125DAE",
          colorBlueDark: "#0A4A8B",
          gray: "#D8D5CF",
        }
      },
    },
  },
  plugins: [],
};

export default config;
