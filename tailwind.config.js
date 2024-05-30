/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        'base-card': '#1E1E1F',
        'card-border': '#444546',
        'info-card': '#333333',
      },
      fontSize: {
        'xxs': ['0.625rem', {
          lineHeight: '0.75rem'
        }],
      }
    }
  },
  plugins: [],
}

