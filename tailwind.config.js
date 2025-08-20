import { nextui } from "@nextui-org/react";

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      maxWidth: {
        '1440': '1440px',
      },
    },
  },
  plugins: [nextui()],
};
