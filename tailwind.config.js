// /** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/**/*.{html,js,jsx}",
    // "./node_modules/flowbite/*.{js,jsx,ts,tsx}"
  ],

  theme: {
    extend: {
      animation :{
        "loop-scroll" : "loop-scroll 50s linear infinte",
      },
      keyframes:{
        "loop-scroll":{
          from : {transform: "translateX(0)"},
          to : {transform : "translateX(-50%)"},
        }
      }
    },
  },
  // plugins: [
  //       require('flowbite/plugin')
  //   ],
}

