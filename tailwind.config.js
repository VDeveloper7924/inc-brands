module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'myriad-pro': ['Myriad Pro Regular'],
        'myriad-pro-light': ['Myriad Pro Light'],
        'myriad-pro-semibold': ['Myriad Pro Semibold'],
        'myriad-pro-bold': ['Myriad Pro Bold'],
        karla: ['Karla Regular'],
        'karla-bold': ['Karla Bold'],
      },
      fontSize: {
        '10xl': '9rem',
      },
      borderWidth: {
        16: '16px',
      },
      height: {
        160: '640px',
      },
      colors: {
        inc_black: '#0b0412',
        inc_light_gray: '#889eae',
        inc_light: '#f5f7ff',
        inc_info: '#19cce6',
        inc_blue: '#0c59db',
        inc_text_primary: '#002249',
        inc_text_secondary: '#60839c',
      },
      screens: {
        xl: '1140px',
        '2xl': '1140px',
      },
      height: {
        400: '400px',
        500: '500px',
        560: '560px',
        600: '600px',
        670: '670px',
        unset: 'unset',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
