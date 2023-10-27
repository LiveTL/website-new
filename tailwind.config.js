/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        livetl: {
          primary: '#b30000', // Youtube Red
          secondary: '#394aae', // LiveTL "blue"
          accent: '#00F0D4', // LiveTL logo aqua
          neutral: '#181A2A',
          'base-100': '#FFFFFF',
          info: '#0071C1', // LiveTL logo deep blue
          success: '#36D399',
          warning: '#FBBD23',
          error: '#F87272',
        },
      },
    ],
  },
  plugins: [require('daisyui')],
};
