/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        //Change the value but DO NOT DELETE
        /*
          Paddings in columns
          Negate Margins for rows
          Paddings in container
        */
        'default': '16px', 
        'section': '40px' //Padding in sections
        //End Default
      },
    },
  },
  plugins: [],
}

