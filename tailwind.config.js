module.exports = {
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  purge: [
    './app/**/*.html',
    './app/**/*.html.erb',
    './app/**/*.rb',
    './app/packs/**/*.js'
  ],
  plugins: [
    require('@tailwindcss/forms'),
  ]
}
