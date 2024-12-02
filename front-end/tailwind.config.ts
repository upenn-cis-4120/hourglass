import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontSize: {
        base: '0.875rem', // Default text size
        md: '0.875rem', // Default text size
        lg: '1.125rem',   // Large text size
      },
      fontFamily: {
        sans: ["Nunito Sans", 'sans-serif'], // Default for sans-serif
      },
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
