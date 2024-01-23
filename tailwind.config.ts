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
        'black-200' : '#1e1e1e'
   
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
     flex: {
      '5': '0 0 5%',
      '7' : '0 0 7%',
      '8' : '0 0 8%',
      '9' : '0 0 9%',
      '10': '0 0 10%',
      '15' : '0 0 15%',
      '17' : '0 0 17%',
      '20': '0 0 20%',
      '23' : '0 0 23%',
      '22' : '0 0 22%',
      '25' : '0 0 25%',
      '30' : '0 0 30%',
      '45' : '0 0 45%',
      '48' : '0 0 48%',
      '50' : '0 0 50%',
      '60'  : '0 0 60%',
      '65'  : '0 0 65%',
      '40' : '0 0 40%',
      '80': '0 0 80%',
      '83': '0 0 83%',
      '85': '0 0 85%',
      '70': '0 0 70%',
      '75': '0 0 75%',
      '90' : '0 0 90%',
      '100' : '0 0 100%'
    },
    },
  },
  plugins: [],
}
export default config
