/** @type {import('tailwindcss').Config} */
module.exports = {
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
      },
      paddingClamp: {
        custom:
          "padding-left: clamp(20px, calc(12.95774647887324px + 1.8779342723004695vw), 40px); padding-right: clamp(20px, calc(12.95774647887324px + 1.8779342723004695vw), 40px);",
      },
    },
  },
  plugins: [],
};
