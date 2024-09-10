/** @type {import('tailwindcss').Config} */

module.exports = {
  content: {
    relative: true,
    files: [
      "./assets/**/*.{js,ts,jsx,tsx,mdx,liquid}",
      "./theme/**/*.{js,ts,jsx,tsx,mdx,liquid}",
      "./sections/**/*.{js,ts,jsx,tsx,mdx,liquid}",
      "./snippets/**/*.{js,ts,jsx,tsx,mdx,liquid}",
      "./templates/**/*.{js,ts,jsx,tsx,mdx,liquid}",



    ],
  },
  theme: {
    extend: {
      colors: {
        c1: "#ececec",
        c2: "#cccccce8",
        c3: "#232323",
        c4: "#ffd501",
        test: "#cdb574",
      },

      width: {
        'base': '423.875px',
      },
      spacing: {
        '1': '20px',
        '2': '30px',
        '3': '40px',
        '4': '60px',
        '5': '72px',
        '6': '90px',
      },

      fontFamily: {
        'sans': ['altB'],
        'serif': ['Times',],
        'mono': ['ui-monospace'],

      },


      borderRadius: {
        'base': '3px'
      },

      height: {
        'el': '40px'
      },


      aspectRatio: {
        'main': '4 / 5',
      },
    },
  },
  plugins: [],
}

