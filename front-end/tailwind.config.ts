import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        gradients: {
          orange: {
            start: '#F9423B',
            end: '#FF8A3D',
          },
          green: {
            start: '#00653E',
            end: '#003320',
          },
        },
      },
    },
  },
  plugins: [],
};
export default config;
