import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'black-100': '#111',
        'black-150': '#161616',
   
      },
      gridTemplateColumns: {
        '25/75': '25% 75%',
        '20/80' : '20% 80%',
        '80/20' : '80% 20%',
        '60/40' : '60% 40%',
        '75/25' : '75% 25%',
        '22/56/22' : 'minmax(auto, 22%) minmax(auto, 56%) minmax(auto, 22%)',
        '25/60/15' : 'minmax(auto, 25%) minmax(auto, 60%) minmax(auto, 15%)',
        '25/25/40/10' : 'minmax(auto, 25%) minmax(auto, 25%) minmax(auto, 40%) minmax(auto, 10%)',
      },
      width:{
        '6/12' : '60%',
        '6.5/12' : '65%',
        '7/12' : '70%',
        '8/12' : '80%',
        '8.3/12' : '83%',
        '8.5/12' : '85%',
        '8.8/12' : '88%',
        '11/12': '90%',
        '11.3/12' : '93%',
        '11.4/12' : '94%',
        '11.5/12': '95%',
        '11.6/12': '96%',
        '11.7/12' : '97%',
        '11.75/12': '97.5%',
        '11.8/12' : '98%'
     },
    },
  },
  plugins: [],
}
export default config
