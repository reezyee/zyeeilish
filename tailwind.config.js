/** @type {import('tailwindcss').Config} */
module.exports = {
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
      fontFamily: {
        oswald : [ "Oswald", 'sans-serif'],
        passion : ["Passion One", 'sans-serif'],
        prompt : ["Prompt", 'sans-serif'],
        playwrite : ["Playwrite AU NSW", 'cursive'],
      },
    },
  },
    plugins: [require('daisyui')],
}