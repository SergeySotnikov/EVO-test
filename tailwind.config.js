const colors = require ('tailwindcss/colors')
module.exports = {
  purge: {
    mode: 'layers',
    content: ['./public/**/*.html', './src/**/*.vue'],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
   
    extend: {
      colors: {
        emerald: colors.emerald,
        gray:colors.trueGray,
        'widget-bg': '#092740',
        'normal-text':'#6CB5D3',
        'clicked-text':'#ADEBFF',
        'hover-bg':'#093753',
      },
      spacing: {
        '9px': '9px',
        '11px': '11px',
        '13px': '13px',
        '22px': '22px',
        '29px': '29px',
      },
      fontSize: {
        '13px': ['13px'],
      },
      dropShadow: {
        'clicked': '0 4px 4px rgba(0, 0, 0, 0.25)',
      },
    },
  },
  variants: {
    extend: {
      borderRadius: ['hover', 'focus'],
      filter: ['hover', 'focus'],
      dropShadow: ['hover', 'focus'],
    },
  },
  plugins: [],
}
