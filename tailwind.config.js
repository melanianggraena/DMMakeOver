/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'surface-base': '#000000',
        'surface-elevated': '#111111',
        'surface-card': '#181818',
        'surface-interactive': '#222222',
        'border-subtle': '#262626',
        'border-strong': '#3F3F46',
        'text-primary': '#FFFFFF',
        'text-muted': '#A1A1AA',
        'primary-container': '#E6007E',
        'on-primary-container': '#FFFFFF',
        'accent-hover': '#D81B60',
        'primary': '#FFB0C9',
        'on-primary': '#650034',
        'on-surface': '#E2E2E2',
        'on-surface-variant': '#E2BDC7',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Montserrat', 'sans-serif'],
      },
      borderRadius: {
        DEFAULT: '0px',
        'none': '0px',
        'full': '9999px',
      },
    },
  },
  plugins: [],
}
