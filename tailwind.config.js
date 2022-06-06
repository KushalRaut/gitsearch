module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        success: '#28a745',
        info: '#17a2b8',
        teal: '#20c997',
        secondary: '#6c757d',
        primary: '#007bff',
        danger: '#dc3545',
        main: '#00a3ff',
      },
      fontFamily: {
        Montserrat: ['Montserrat', 'sans-serif'],
        Poppins: ['Poppins', 'serif'],
        Vollkorn: ['Vollkorn', 'serif'],
      },
      screens: {
        '2xl': '1536px',
        xl: '1280px',
        lg: '1024px',
        md: '768px',
        sm: '640px',
        xs: '425px'
      },
    },
  },
  plugins: [],
}
