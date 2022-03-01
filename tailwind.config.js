module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: theme =>({
        ...theme('colors'),
        'primary': '#FFE600',
        'gray-3': '#333333',
        'gray-6': '#666666',
        'gray-9': '#999999',
        'gray-e': '#eeeeee',
      }),
    },
  },
  plugins: [],
}
