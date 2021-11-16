const colors = require('tailwindcss/colors');

function withOpacity(variableName) {
  return ({ opacityValue }) => {
    if (opacityValue !== undefined) {
      return `rgba(var(${variableName}), ${opacityValue})`;
    }
    return `rgb(var($)`;
  };
}

module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        white: colors.white,
        black: colors.black,
        amber: colors.amber,
        blue: colors.blue,
        cyan: colors.cyan,
        emerald: colors.emerald,
        fuchsia: colors.fuchsia,
        gray: colors.coolGray,
        green: colors.green,
        indigo: colors.indigo,
        sky: colors.sky,
        lime: colors.lime,
        orange: colors.orange,
        pink: colors.pink,
        purple: colors.purple,
        red: colors.red,
        rose: colors.rose,
        teal: colors.teal,
        violet: colors.violet,
        yellow: colors.yellow,
      },
      fontFamily: {
        square: [
          'rubik',
          'ui-sans-serif',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          '"Helvetica Neue"',
          'Arial',
          '"Noto Sans"',
          'sans-serif',
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
          '"Noto Color Emoji"',
        ],
      },
      spacing: {
        full: '100%',
      },
      keyframes: {
        blob: {
          '0%': {
            transform: 'translate(0px, 0px) scale(1)',
          },
          '33%': {
            transform: 'translate(30px, -50px) scale(1.1)',
          },
          '66%': {
            transform: 'translate(-20px, -20px) scale(0.9)',
          },
          '100%': {
            transform: 'translate(0x, 0px) scale(1)',
          },
        },
        'bg-gradient-tilt': {
          '0%, 50%, 100%': {
            transform: 'rotate(0deg)',
          },
          '25%': {
            transform: 'rotate(1deg)',
          },
          '75%': {
            transform: 'rotate(-1deg)',
          },
        },
        'fade-in': {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        slideIn: {
          '0%': { transform: 'translate(0px, 100px)', opacity: '0' },
          '100%': { transform: 'translate(0px, 0px)', opacity: '1' },
        },
      },
      animation: {
        blob: 'blob 7s infinite',
        'bg-gradient-tilt': 'bg-gradient-tilt 10s infinite linear',
        'fade-in': 'fade-in 1s ease',
        slideIn: 'slideIn 0.75s ease',
      },
      backgroundImage: {
        texture: `url('/img/texture.jpg')`,
        index: `url('/img/wave.svg')`,
      },
      blur: {
        px: '1px',
      },
      transitionTimingFunction: {
        'sick-bloop': 'cubic-bezier(1, -0.65, 0, 2.13)',
      },
      // Theming Example
      textColor: {
        skin: {
          base: 'var(--color-text-base)',
          muted: 'var(--color-text-muted)',
          inverted: 'var(--color-text-inverted)',
        },
      },
      backgroundColor: {
        skin: {
          fill: 'var(--color-fill)',
          'button-accent': 'var(--color-button-accent)',
          'button-accent-hover': 'var(--color-button-accent-hover)',
          'button-muted': withOpacity('--color-button-muted'),
        },
      },
      gradientColorStops: {
        skin: {
          hue: 'var(--color-fill)',
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/forms')],
};
