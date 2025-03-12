import quillTailwindConfig from './quill-tailwind/tailwind.config'

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
      },
      keyframes: {
        'drop-in': {
          from: {
            transform: 'translateY(-50%)',
          },
          to: {
            transform: 'translateY(0)',
          },
        },
      },
      animation: {
        'drop-in': 'drop-in 160ms cubic-bezier(0.72, 0, 0.24, 1)',
      },
    },
  },
  plugins: [],
  presets: [quillTailwindConfig],
}
