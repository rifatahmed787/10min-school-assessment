import type { Config } from "tailwindcss";
import tailwindcssAnimate from "tailwindcss-animate";
import tailwindScrollbarHide from "tailwind-scrollbar-hide";

export default {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
      'gradient-ellipse': 'radial-gradient(ellipse at center, rgba(60,60,60,0.3) 0%, rgba(30,30,30,0.6) 40%, rgba(10,10,10,0.95) 100%)',
      'gradient-circle': 'radial-gradient(circle at center, #2a2a2a 0%, #1a1a1a 40%, #0a0a0a 100%)',
    },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        primary: ["Amiri", "serif"],
        secondary: ["Brandon Grot W01 Light", "sans-serif"],
        italic: ["Didot eText W01 Italic", "serif"],
        card: ["Avenir LT Pro 35 Light", "serif"],
      },
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
      },
      dark: {
        "100": "#121212",
        "200": "#03041C",
        "300": "#020313",
        "400": "#02020E",
        "500": "#010109",
        "600": "#010105",
      },
      boxShadow: {
        "custom": "0 0 10px 5px rgba(0, 0, 0, 0.4)",
        "custom-primary": "0 0 5px 2px rgba(0, 0, 0, 0.4)",
        "custom-secondary":
          "0.3rem 0.3rem 0.6rem #c8d0e7, -0.2rem -0.2rem 0.5rem white",
        "custom-tertiary": "0 0rem 2rem 0 rgba(0, 0, 0, 0.196)",
      },
      animation: {
        "slide-in": "slide-in 0.5s forwards",
        "slide-out": "slide-out 0.5s forwards",
      },
      keyframes: {
        "slide-in": {
          "0%": {
            transform: "translateX(-100%)",
          },
          "100%": {
            transform: "translateX(0)",
          },
        },
        "slide-out": {
          "0%": {
            transform: "translateX(0)",
          },
          "100%": {
            transform: "translateX(-100%)",
          },
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [tailwindcssAnimate, tailwindScrollbarHide],
} satisfies Config;
