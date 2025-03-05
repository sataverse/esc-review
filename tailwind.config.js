/** @type {import('tailwindcss').Config} */

function getRem(from, to) {
  const rems = {};
  for (i = from; i <= to; i++) {
    rems[`${i}px`] = `${(0.0625 * i).toFixed(3)}rem`;
  }
  return rems;
}

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      spacing: getRem(0, 400),
      borderWidth: getRem(0, 10),
      borderRadius: getRem(0, 20),
      lineHeight: getRem(0, 100),
      fontSize: getRem(0, 100),
    },
  },
  plugins: [],
};
