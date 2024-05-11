/** @type {import('tailwindcss').Config} */
const withMT = require('@material-tailwind/react/utils/withMT');


module.exports = withMT({
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "node_modules/flowbite-react/lib/esm/**/*.js",
  ],
  theme: {
    extend: { colors: { "button-blue": "#155E75", "logo-green" : "#00c46a", "worldwise-bg": "#2d3439", "logo-dark-green": "#7fbd58" } },
  },
  plugins: [require("flowbite/plugin")],
});
