module.exports = {
    purge: [],
    darkMode: false, // or 'media' or 'class'
    theme: {
      extend: {
        backgroundColor:{
          'black-t-50': 'rgba(0,0,0,0.5)',
        },
        gridTemplateColumns: {
          'two': 'repeat(8, 40%)',
          'three': 'repeat(8, 30%)',
          'four': 'repeat(8, 22%)',
          'five': 'repeat(8, 18%)',
        }
      },
    },
    variants: {
      extend: {},
    },
    plugins: [],
  }
  