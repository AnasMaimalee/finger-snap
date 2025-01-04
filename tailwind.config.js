/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#712f19',
        secondary: '#404040',
        dark: '#000000',
      },
      screens: {
        'sm': '402px', // default 'sm'
        'md': '834px', // default 'md'
        'lg': '1080px', // default 'lg'
      },
    },
  },
  plugins: [],
}

