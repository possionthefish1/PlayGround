import fluid, { extract, fontSize } from 'fluid-tailwind';
import reset from 'tw-reset';

/** @type {import('tailwindcss').Config} */
export default {
  presets: [reset],
  plugins: [fluid, require('flowbite/plugin')],
  content: {
    files: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    extract,
  },
  darkMode: 'class',
  theme: {
    /** @type {import('fluid-tailwind').FluidThemeConfig} */
    fluid: ({ theme }) => ({
      defaultScreens: ['20rem', theme('screens.lg')],
      defaultContainers: [, theme('containers.2xl')],
    }),
    fontSize,
    fontFamily: {},
    extend: {},
  },
};
