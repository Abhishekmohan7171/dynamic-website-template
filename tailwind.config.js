module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        background:{
          'primary':'white',
          'secondary':'#c9e8dd',
          'ternary':'black'

          // 'primary':'#1f1f2e',
          // 'secondary':'#b3b3cc',
          // 'ternary':'black'

          // primary:'var(--bg-background-primary)',
          // secondary:'var(--bg-background-secondary)',
          // ternary:'var(--bg-background-ternary)'
        },
        text:{
          'light-grey':'#938888',
        },



        // 'light-grey':'#938888',
      },
    },
  },
  plugins: [],
}
