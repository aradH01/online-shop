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
        'glass-bg' : 'linear-gradient(132.12deg, rgba(255, 255, 255, 0.35) 70%, rgba(255, 255, 255, 0.15) 100%)',
        'light-glass-bg' : 'linear-gradient(132.12deg, rgba(255, 255, 255, 0.35) 40%, rgba(255, 255, 255, 0.15) 20%)',
        'super-light-glass-bg' : 'linear-gradient(180.07deg, rgba(255, 255, 255, 0.1) 0.07%, rgba(255, 255, 255, 0.4) 0.07%, rgba(255, 255, 255, 0.1) 57.61%);',
        'soft-glass-bg' : 'linear-gradient(132.12deg, rgba(255, 255, 255, 0.35) 0%, rgba(255, 255, 255, 0.15) 100%)',
        "green-linear" : "linear-gradient(243.35deg, #34929A 16.71%, #155557 83.29%)",
        "logo-bg" : "url('/public/assets/images/login-bg.jpg')",
      },
      backgroundColor:{
        lightPrimary: "#16625b",
      },
      fontFamily: ({fontFamily}: any) => ({
        ...fontFamily,
        montserrat: ['var(--montserrat-font)'],
        OpenSans: ['var(--OpenSans-font)'],
      }),
      colors:{
        app:{
          lightPrimary: "#16625b",
        }
      },
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
