/** @type {import('tailwindcss').Config} */
import { shadcnPreset } from "./shadcn-preset";
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
    }
  },
  presets: [shadcnPreset],
  plugins: [],
};
