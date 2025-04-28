/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    colors: {
      black: '#161620',
      white: '#FFFFF4',
      gray: {
        200: '#BDB9B9',
        300: '#909090',
      },
      green: {
        500: '#95AF88',
      },
      red: '#f43f5e',
      background: '#2E3641',
      slate: '#2E3641',
      gold: {
        500: '#CFB53B',
      },
      blue: {
        300: '#7FD0E1',
      },
    },
    fontSize: {
      /**
       * Headeers
       */
      'lg-h1': [
        '128px',
        {
          lineHeight: '1',
        },
      ],
      'lg-h2': [
        '64px',
        {
          lineHeight: '80px',
        },
      ],
      'lg-h3': [
        '32px',
        {
          lineHeight: '40px',
        },
      ],
      'md-h1': [
        '64px',
        {
          lineHeight: '1',
        },
      ],
      'md-h2': [
        '36px',
        {
          lineHeight: '40px',
        },
      ],
      'md-h3': [
        '16px',
        {
          lineHeight: '20px',
        },
      ],
      'sm-h1': [
        '64px',
        {
          lineHeight: '1',
        },
      ],
      'sm-h2': [
        '36px',
        {
          lineHeight: '40px',
        },
      ],
      'sm-h3': [
        '24px',
        {
          lineHeight: '37px',
        },
      ],

      /**
       * Subheaders
       */
      'lg-h4': '32px',
      'md-h4': '16px',
      'sm-h4': '20px',

      /**
       * Body
       */

      'lg-body': [
        '24px',
        {
          lineHeight: '35px',
        },
      ],
      'lg-body-2': [
        '16px',
        {
          lineHeight: '25px',
        },
      ],
      'lg-chip-lg': [
        '32px',
        {
          lineHeight: '28px',
        },
      ],
      'lg-chip-sm': [
        '14px',
        {
          lineHeight: '20px',
        },
      ],
      'md-body': [
        '13px',
        {
          lineHeight: '20px',
        },
      ],
      'md-chip-lg': [
        '16pxx',
        {
          lineHeight: '15px',
        },
      ],
      'md-chip-sm': [
        '8px',
        {
          lineHeight: '11px',
        },
      ],
      'md-form-title': [
        '8px',
        {
          lineHeight: '9px',
        },
      ],
      'sm-body': [
        '16px',
        {
          lineHeight: '15px',
        },
      ],
      'sm-body-2': [
        '22px',
        {
          lineHeight: 'normal',
        },
      ],
      'sm-chip-lg': [
        '20px',
        {
          lineHeight: '10px',
        },
      ],
      btn: [
        '14px',
        {
          lineHeight: 'normal',
        },
      ],
      'lg-p': [
        '24px',
        {
          lineHeight: '35px',
        },
      ],
      'lg-p-2': [
        '16px',
        {
          lineHeight: '30px',
        },
      ],
      'md-p': [
        '13px',
        {
          lineHeight: '20px',
        },
      ],
      'sm-p': [
        '16px',
        {
          lineHeight: '25px',
        },
      ],
    },
    fontFamily: {
      obvs: ['Obviously', 'sans-serif'],
      sans: ['Neue Haas Grotesk Display Pro', 'sans-serif'],
    },
  },
  plugins: [],
}
