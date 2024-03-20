import {
  colors,
  fontSizes,
  fontWeights,
  fonts,
  lineHeights,
  radii,
  space,
} from '@snowfall-ignite-ui/tokens'
import { createStitches, defaultThemeMap } from '@stitches/react'

export const {
  config,
  css,
  createTheme,
  getCssText,
  globalCss,
  keyframes,
  styled,
  theme,
} = createStitches({
  themeMap: {
    ...defaultThemeMap,
    height: 'space',
    width: 'space',
  },
  theme: {
    colors,
    fontSizes,
    fontWeights,
    fonts,
    lineHeights,
    radii,
    space,
  },
})
