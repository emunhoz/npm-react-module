import createPalette, { Palette, PaletteInput } from './create-palette'
import createTypography, { Typography, TypographyInput } from './create-typography'
import fontWeight, { FontWeight } from './weights'
import fontSize, { FontSize } from './sizes'

export interface Theme {
  palette: Palette
  typography: Typography
  fontSize: FontSize
  fontWeight: FontWeight
}

export interface ThemeInput {
  palette?: PaletteInput
  typography?: TypographyInput
}

export const createTheme = (options: ThemeInput): Theme => {
  const { palette: paletteInput = {}, typography: typographyInput = {} } = options || {}

  const palette = createPalette(paletteInput)
  const typography = createTypography(typographyInput)

  return {
    palette,
    fontSize,
    typography,
    fontWeight,
  }
}

export default createTheme({})
export * from './global-styles'
