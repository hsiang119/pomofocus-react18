/* eslint-disable @typescript-eslint/no-var-requires */
const plugin = require('tailwindcss/plugin')

/** @type {import('tailwindcss').Config} */

/*eslint-env node*/
module.exports = {
  jit: true,
  content: [
    './public/**/*.html',
    './src/**/*.{js,jsx,ts,tsx,vue}',
  ],
  theme: {
    extend: {
      backgroundColor: {
        'custom-gray': '#1c1c1c' 
      },
      backgroundSize: {
        '0-3': '0 3px',
        'transparent': 'transparent',
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(0deg, transparent, transparent, #45f3ff, #45f3ff, #45f3ff)',
      },
      contrast: {
        20: '20',
      },
      strokeDashoffset: {
        0: '0',
        100: '100',
      },
      colors: {
        background: '#06a4ed',
        primary: "#06b6d4",
        secondary: '#F6FAFB',
        accent: '#F37F15',
        black: '#040F15',
        light: '#45f3ff'
      },
      maxWidth: {
        '1200': '1200px',
        '1000': '1000px',
        '600': '600px',
      },
      animation: {
        fadeIn: 'fadeIn 0.5s ease-in both',
				fadeDownIn: 'fadeDownIn 0.5s ease-in both',
				fadeLeftIn: 'fadeLeftIn 0.5s ease-in both',
        letterMove: 'letterMove 2.5s infinite alternate ease-in-out',
        animate: 'animate 6s linear infinite'
      },
      keyframes: {
        fadeIn: {
					'0%': { opacity: '0' },
					'100%': { opacity: '1' },
				},
				fadeDownIn: {
					'0%': { opacity: '0', transform: 'translateY(100px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' },
				},
				fadeLeftIn: {
					'0%': { opacity: '0', transform: 'translateX(-100px)' },
					'100%': { opacity: '1', transform: 'translateX(0)' },
				},
        letterMove: {
          'from': { letterSpacing: '-0.5rem', filter: 'blur(20px)' },
          'to': { letterSpacing: '0.5rem', filter: 'blur(0)' },
        },
        animate: {
          '0%': { transform: 'rotate(0deg)' },
					'100%': { transform: 'rotate(360deg)' }
        }
      },
      borderRadius: {
        default: '10px'
      },
      boxShadow: {
        'burger' : '0px 2px 5px rgba(255,101,47,.2)',
        'activeButton': '0 0 5px #45f3ff'
      }
    },
  },
  plugins: [
    plugin(({ addUtilities, theme }) => {
      const newUtilities = {
        '.flex-center': {
          'display': 'flex',
          'justify-content': 'center',
          'align-items': 'center',
        },
        '.nav-item': {
          'padding': '10px 20px',
          'background-color': theme('colors.primary'),
          'border': 'none',
          'border-radius': '5px',
          'color': theme('colors.sencondary'),
          'font-size': '16px',
          'box-shadow': '0 2px 5px rgba(0,0,0, 0.2)',
          'cursor:': 'pointer',
        },
        'underline-trigger': {
          'background': 'linear-gradient(90deg, #ff3c41, #fc0, #0ebeff)',
          'backgroundSize': '0 3px',
          'backgroundRepeat': 'no-repeat',
          'backgroundPosition': '0 100%',
          'cursor': 'pointer',
          'transition': '1s all'
        },
        'underline-trigger-hover': {
          'backgroundSize': '100% 3px'
        } 
      };
      addUtilities(newUtilities);
    })
  ],
}