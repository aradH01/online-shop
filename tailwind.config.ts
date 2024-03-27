import type {Config} from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
            'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: ({fontFamily}: any) => ({
        ...fontFamily,
        montserrat: ['var(--montserrat-font)'],
        OpenSans: ['var(--OpenSans-font)'],
      }),
      screens: {
        mm: '275px',
        base: '370px',
        xsm: '550px',
        sm: '600px',
        md: '768px',
        lt: '868px',
        lg: '976px',
        ipad: '1024px',
        lapmidpad: '1100px',
        mlap: '1200px',
        mdl: '1356px',
        xl: '1440px',
        xxl: '1600px',
        '3xl': '2048px',
        '4k': '2560px',
      },
    },
  },
  plugins: [],
}
export default config
