/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      boxShadow: {
        soft: '0 18px 60px rgba(3, 10, 23, 0.18)',
        glow: '0 0 0 1px rgba(255,255,255,0.08), 0 24px 90px rgba(25, 48, 92, 0.28)'
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' }
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' }
        }
      },
      animation: {
        float: 'float 7s ease-in-out infinite',
        shimmer: 'shimmer 2.8s linear infinite'
      },
      borderRadius: {
        '3xl': '1.75rem'
      }
    }
  },
  plugins: []
};
