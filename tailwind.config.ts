import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
          "first-image" : "url('/image/imageone.png')",
          "map-image" : "url('/image/map.jpg')",
          "background-three" : "url('/image/background 3.png')",
          "background-four" : "url('/image/background 4.png')"
      },
    },
  },
  plugins: [],
};
export default config;
