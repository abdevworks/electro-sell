module.exports = {
    purge: [],
    darkMode: false, // or 'media' or 'class'
    theme: {
      extend: {
        backgroundColor:{
          'black-t-50': 'rgba(0,0,0,0.5)',
        },
        gridTemplateColumns: {
          'two': 'repeat(3, 40%)',
          'three': 'repeat(4, 30%)',
          'four': 'repeat(5, 22%)',
          'five': 'repeat(6, 18%)',
        }
      },
    },
    variants: {
      extend: {},
    },
    plugins: [],
  }
  