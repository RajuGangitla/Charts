import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors:{
        cardHover:"#E3E3E3",
        textColor:"#000000",
        activeColor:"#F1F1F1",
        numberColor:"#303030",
        iconColor:"#616161",
        skeletonColor:"#D9D9D9"
      }
    },
  },
  plugins: [],
};
export default config;
