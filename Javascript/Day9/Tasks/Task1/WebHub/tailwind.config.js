module.exports = {
  prefix: 'tw-',
  content: [
    "./*.html",
    "./html/**/*.html",
    "./css/**/*.html",
    "./bootstrap/**/*.html",
    "./tailwind/**/*.html",
    "./examples/**/*.html",
    "./practice/**/*.html",
    "./projects/**/*.html",
    "./articles/**/*.html",
    "./cheat-sheets/**/*.html",
    "./interview/**/*.html",
  ],
  corePlugins: {
    preflight: false,
  },
  theme: {
    extend: {
      colors: {
        brand: {
          slate: '#0f172a',
          indigo: '#6366f1',
          teal: '#14b8a6',
        }
      }
    },
  },
  plugins: [],
}
