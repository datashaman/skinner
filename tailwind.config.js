module.exports = {
  important: false,
  plugins: [require('tailwindcss-animations')],
  prefix: '',
  purge: false,
  separator: ':',
  theme: {
    animations: {
      spin: {
        from: {
          transform: 'rotate(0deg)',
        },
        to: {
          transform: 'rotate(360deg)',
        },
      },
      jump: {
        '0%': {
          transform: 'translateY(0%)',
        },
        '50%': {
          transform: 'translateY(-100%)',
        },
        '100%': {
          transform: 'translateY(0%)',
        },
      },
    },
    container: {
      center: true,
      padding: '2rem',
    },
    extend: {
      spacing: {
        '72': '18rem',
      },
      transitionDuration: {
        '3000': '3000ms',
      },
    },
    rotate: {
      '-30': '-30deg',
      '-60': '-60deg',
      '30': '30deg',
      '60': '60deg',
    },
  },
  variants: {
    fontSize: ['hover'],
    transitionTimingFunction: ['responsive', 'hover'],
  },
}
