/** @type {import('tailwindcss').Config} */

module.exports = {
  content:{
    relative: true, 
    files: [
    "./assets/**/*.{js,ts,jsx,tsx,mdx,liquid}",
    "./theme/**/*.{js,ts,jsx,tsx,mdx,liquid}", 
    "./sections/**/*.{js,ts,jsx,tsx,mdx,liquid}",
    "./snippets/**/*.{js,ts,jsx,tsx,mdx,liquid}",
    
   
 
  ],},
  theme: {
    extend: {
      colors: {
        c1: "#ececec",
        c2: "#cccccce8",
        c3: "#232323",
        c4: "#ffd501",
      },

      width: {
        'base': '423.875px',
      },

      fontFamily: {
        'sans': ['altB'],
        'serif': ['Times', ],
        'mono': ['ui-monospace'],

      },


      borderRadius:{
        'base': '3px'
      },

      height:{
        'el': '40px'
      },


      aspectRatio: {
        'main': '4 / 5',
      },
    },
  },
  plugins: [],
}

