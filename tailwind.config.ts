import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        cream: '#F8F4EC',
        navy: '#0B0C1A',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'sans-serif'],
        serif: ['var(--font-garamond)', 'serif'],
        'cormorant-garamond': ['var(--font-cormorant-garamond)', 'serif'],
      },
      animation: {
        'fade-in': 'fadeIn 1.6s ease-out',
        'rise-reveal': 'riseReveal 0.6s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' , transform: 'translateY(15px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        riseReveal: {
          '0%': { transform: 'translateY(100%)' },
          '100%': { transform: 'translateY(0)' },
        },
      },
    },
  },
  typography: {
    DEFAULT: {
      css: {
        color: '#0B0C1A',
        a: {
          color: '#0B0C1A',
          '&:hover': {
            textDecoration: 'underline',
          },
        },
        h1: {
          color: '#0B0C1A',
          fontWeight: '700',
          marginTop: '2rem',
          marginBottom: '1rem',
        },
        h2: {
          color: '#0B0C1A',
          fontWeight: '600',
        },
        h3: {
          color: '#0B0C1A',
          fontWeight: '600',
        },
        p: {
          marginTop: '0.5rem',
          marginBottom: '0.5rem',
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography')
  ],
};

export default config;