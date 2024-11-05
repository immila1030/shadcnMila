const animate = require('tailwindcss-animate');

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  safelist: ['dark'],
  prefix: '',

  content: [
    './pages/**/*.{ts,tsx,vue}',
    './components/**/*.{ts,tsx,vue}',
    './app/**/*.{ts,tsx,vue}',
    './src/**/*.{ts,tsx,vue}',
  ],

  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
          // 這邊自己多加了主色深色
          deep: 'hsl(var(--primary-deep))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
          deep: 'hsl(var(--secondary-deep))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
      },
      borderRadius: {
        xl: 'calc(var(--radius) + 4px)',
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        'accordion-down': {
          from: { height: 0 },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: 0 },
        },
        'collapsible-down': {
          from: { height: 0 },
          to: { height: 'var(--radix-collapsible-content-height)' },
        },
        'collapsible-up': {
          from: { height: 'var(--radix-collapsible-content-height)' },
          to: { height: 0 },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'collapsible-down': 'collapsible-down 0.2s ease-in-out',
        'collapsible-up': 'collapsible-up 0.2s ease-in-out',
      },
      // 間距大小 (考慮到gap也會使用)
      // 45px 55px 106px (這邊只出現一次 就沒有加進去了!)
      spacing: {
        1: '2px',
        2: '3px',
        3: '4px',
        4: '5px',
        5: '6px',
        6: '8px',
        7: '9px',
        8: '10px',
        9: '11px',
        10: '12px',
        11: '14px',
        12: '15px',
        13: '16px',
        14: '18px',
        15: '20px',
        16: '24px',
        17: '25px',
        18: '30px',
        19: '32px',
      },
      // 文字大小
      fontSize: {
        fz1: '12px',
        fz2: '13px',
        fz3: '14px',
        fz4: '15px',
        fz5: '16px',
        fz6: '17px',
        fz7: '18px',
        fz8: '20px',
        fz9: '22px',
        fz10: '24px',
        fz11: '26px',
        fz12: '28px',
        fz13: '30px',
        fz14: '34px',
        fz15: '36px',
        fz16: '38px',
        fz17: '40px',
        fz18: '45px',
        fz19: '48px',
        fz20: '50px',
        fz21: '60px',
        fz22: '64px',
        fz23: '80px',
      },
      // 圓角
      borderRadius: {
        50: '50px',
      },
    },
  },
  plugins: [animate],
};
