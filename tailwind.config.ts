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
          background: '#2D2E32',
          background2: '#25262A',
          text: '#B3A595',
          buttons: '#f2cdcd',
          highlight: '#33A652'
        },
        light: {
          background: '#eff1f5',
          text: '#000000',
          buttons: '#dd7878',
          highlight: '#f0f0f0'
        }
      },
      backgroundImage: {
        'hero-pattern': "url('/img/hero-pattern.svg')",
        'footer-texture': "url('/img/footer-texture.png')",
      }
    }
  },
  plugins: [],
};

export default config;