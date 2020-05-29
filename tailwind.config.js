/*
** TailwindCSS Configuration File
**
** Docs: https://tailwindcss.com/docs/configuration
** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
*/
module.exports = {
  theme: {
    fontFamily: {
      body: ['Inter', 'sans-serif']
    },
    screens: {
      sm: '560px'
    },
    extend: {
      width: {
        128: '32rem'
      }
    }
  },
  variants: {
    zIndex: ['responsive', 'hover', 'focus']
  },
  plugins: []
}
