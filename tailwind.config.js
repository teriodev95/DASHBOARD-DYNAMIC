/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{vue,js,ts}', './node_modules/preline/preline.js'],
  theme: {
    extend: {
      colors: {
        primary: '#09354C', // Personaliza el color aquí
        secondary: '#ffed4a', // Personaliza el color aquí
        accent: '#D6B557', // Personaliza el color aquí
        customWhite: '#F0F1F5', // Personaliza el color aquí
        customDark: '#1B1B1B', // Personaliza el color aquí
        customBlue: '#BDE3F2', // Personaliza el color aquí
        customBlueDark: '#073040', // Personaliza el color aquí
      },
    },
  },
  plugins: [
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    require('preline/plugin'),
  ],
}
