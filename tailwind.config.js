/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        'base-card': '#1E1E1F',
        'card-border': '#444546',
        'dropdown': '#333333',
        'sub-card': '#212123',
        'sub-card-border': '#2b2b2b',
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

