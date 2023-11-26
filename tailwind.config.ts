import type { Config } from 'tailwindcss'

import defaultTheme from 'tailwindcss/defaultTheme'

const config: Config = {
  content: [
    './pages/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx, css}',
  ],
  theme: {
    screens: {
      'sm': '640px', // Small screens
      'md': '768px', // Medium screens
      'lg': '1024px', // Large screens
      'xl': '1280px', // Extra-large screens
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        sans: ['Roboto', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

export default config
