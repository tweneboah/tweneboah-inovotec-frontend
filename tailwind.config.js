module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      extend: {
        backgroundImage: theme => ({
          'hero-pattern':
            "url('https://images.unsplash.com/photo-1611669412381-a5fa6811cfc4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1001&q=80')",
        }),
      },
    },
  },
  variants: {},
  plugins: [],
};
