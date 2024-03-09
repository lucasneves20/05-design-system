const {
  colors,
  fontSizes,
  fontWeights,
  fonts,
  lineHeights,
  radii,
  space,
  // eslint-disable-next-line @typescript-eslint/no-var-requires
} = require('@ignite-ui/tokens')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors,
      lineHeight: lineHeights,
      borderRadius: radii,
      fontFamily: fonts,
      fontWeight: fontWeights,
      fontSize: fontSizes,
      spacing: space,
    },
  },
  plugins: [],
}
