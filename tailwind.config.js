/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(circle at 30% 30%, var(--tw-gradient-stops))',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0) scale(1)' },
          '50%': { transform: 'translateY(10px) scale(1.05)' },
        },
        'shadow-pulse': {
          '0%, 100%': {
            transform: 'translateY(0) scale(1)',
            opacity: 0.1
          },
          '50%': {
            transform: 'translateY(2px) scale(1.01)',
            opacity: 0.2
          }
        },
        'text-shine': {
          '0%': {
            'background-size': '200% 100%',
            'background-position': '100% 50%'
          },
          '100%': {
            'background-size': '200% 100%',
            'background-position': '0% 50%'
          }
        }
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
        'float-delay-1': 'float 3s ease-in-out 0.5s infinite',
        'float-delay-2': 'float 3s ease-in-out 1s infinite',
        'float-delay-3': 'float 3s ease-in-out 1.5s infinite',
        'float-delay-4': 'float 3s ease-in-out 2s infinite',
        'float-delay-5': 'float 3s ease-in-out 2.5s infinite',
        'float-delay-6': 'float 3s ease-in-out 3s infinite',
        'shadow-pulse': 'shadow-pulse 3s ease-in-out infinite',
        'text-shine': 'text-shine 4s linear infinite'
      }
    },
  },
  plugins: [],
}

