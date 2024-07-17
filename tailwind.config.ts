import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
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
        '45' : '0 0 45%',
        '48' : '0 0 48%',
        '50' : '0 0 50%',
        '55' : '0 0 55%',
        '60'  : '0 0 60%',
        '65'  : '0 0 65%',
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
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
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
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config