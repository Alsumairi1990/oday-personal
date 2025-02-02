import type { Config } from "tailwindcss"
import rtl from 'tailwindcss-rtl'; // Import `rtl` plugin correctly

const config = {
  darkMode: ["class"],
  content: [
    // './pages/**/*.{ts,tsx}',p
    // './components/**/*.{ts,tsx}',
    // './app/**/*.{ts,tsx}',
    // './src/**/*.{ts,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}', // Include .js and .jsx files
    './components/**/*.{js,ts,jsx,tsx}', // Include .js and .jsx files
    './app/**/*.{js,ts,jsx,tsx}', // Include .js and .jsx files
    './src/**/*.{js,ts,jsx,tsx}', // Include .js and .jsx files
	],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
        keyframes: {
        pulsate: {
              '0%': { transform: 'translate(-50%, -50%) scale(0.8)', opacity: '0.7' },
              '100%': { transform: 'translate(-50%, -50%) scale(2)', opacity: '0' },
            },
          },
          animation: {
            pulsate: 'pulsate 2s ease-out infinite',
          },
        
      flex: {
        '5': '0 0 5%',
        '6': '0 0 6%',
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
        '27' : '0 0 27%',
        '30' : '0 0 30%',
        '35' : '0 0 35%',
        '45' : '0 0 45%',
        '48' : '0 0 48%',
        '50' : '0 0 50%',
        '55' : '0 0 55%',
        '60'  : '0 0 60%',
        '63'  : '0 0 63%',
        '65'  : '0 0 65%',
        '67'  : '0 0 67%',
        '40' : '0 0 40%',
        '80': '0 0 80%',
        '83': '0 0 83%',
        '85': '0 0 85%',
        '70': '0 0 70%',
        '75': '0 0 75%',
        '77' : '0 0 77%',
        '90' : '0 0 90%',
        '93' : '0 0 93%',
        '94' : '0 0 94%',
        '100' : '0 0 100%'
      },
      fontSize: {
        md: '15px',
        bxs: '13px',
        x22:'22px'
        
      },
      width:{
        '5.5/12'  : '45%',
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
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        card: "var(--card)",
        cardOnyx : "var(--card-onyx-black)",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        // card: {
        //   DEFAULT: "hsl(var(--card))",
        //   foreground: "hsl(var(--card-foreground))",
        // },
      },
      backgroundImage : {
        subscriptionBg : "linear-gradient(45deg, #2b2c2c 25%, black 25%, #000000cf 75%, #363535db 75%, #464444), linear-gradient(45deg, #080808 25%, transparent 25%, transparent 75%, #f3f3f3 75%, #000000)",

      },
      gridTemplateColumns: {
        // Simple 16 column grid
        '25/75': '25% 75%',
        '20/80' : '20% 80%',
        '80/20' : '80% 20%',
        '60/40' : '60% 40%',
        '63/37' : '63% 37%',
        '75/25' : '75% 25%',
        '22/56/22' : 'minmax(auto, 22%) minmax(auto, 56%) minmax(auto, 22%)',
        '36/36/28' : 'minmax(auto, 36%) minmax(auto, 36%) minmax(auto, 28%)',
        '37/37/26' : 'minmax(auto, 37%) minmax(auto, 37%) minmax(auto, 25%)',
        '25/60/15' : 'minmax(auto, 25%) minmax(auto, 60%) minmax(auto, 15%)',
        '25/25/40/10' : 'minmax(auto, 25%) minmax(auto, 25%) minmax(auto, 40%) minmax(auto, 10%)',
      },
        gridTemplateRows: {
        // Simple 8 row grid
        'auto-fill': 'repeat(auto-fill, minmax(120px, 1fr))',
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        // Add custom font families
        arabic: ['Kufi Arabic', 'sans-serif'], // Custom name for Arabic font
      },
     
      // keyframes: {
      //   "accordion-down": {
      //     from: { height: "0" },
      //     to: { height: "var(--radix-accordion-content-height)" },
      //   },
      //   "accordion-up": {
      //     from: { height: "var(--radix-accordion-content-height)" },
      //     to: { height: "0" },
      //   },
      // },
      // animation: {
      //   "accordion-down": "accordion-down 0.2s ease-out",
      //   "accordion-up": "accordion-up 0.2s ease-out",
      // },
    },
  },
  plugins: [require("tailwindcss-animate"), rtl],
} satisfies Config

export default config