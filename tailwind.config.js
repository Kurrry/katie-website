/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    'node_modules/flowbite-react/lib/esm/**/*.js',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      backgroundColor: {
        'main': '#C7BEBB',
      },
      margin: {
        '100': '34rem',
      },
      height: {
        '100': '30rem',
      },
      width: {
        '100': '30rem',
        '101': '34rem',
      },
    },
    fontSize: {
      xs: '0.8rem'
    },
  },
  plugins: [
    require('flowbite/plugin'),
  ],
};
