import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          background: '#1e1e2e',
          text: '#cdd6f4',
          buttons: '#f2cdcd'
        },
        light: {
          background: '#eff1f5',
          text: '#4c4f69',
          buttons: '#dd7878'
        }
      }
    }
  },
  plugins: [],
};

export default config;