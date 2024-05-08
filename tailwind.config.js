/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        'base-card': '#1E1E1F',
        'info-card': '#333333',
      }
    }
  },
  plugins: [],
}

