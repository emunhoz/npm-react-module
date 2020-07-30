import createPalette, { Palette, PaletteInput } from './create-palette'
import createAttributes, { Attributes, AttributesInput } from './create-attributes'
import createTypography, { Typography, TypographyInput } from './create-typography'

export interface Theme {
  palette: Palette
  typography: Typography
  attributes: Attributes
}

export interface ThemeInput {
  palette?: PaletteInput
  typography?: TypographyInput
  attributes?: AttributesInput
}

export const createTheme = (options: ThemeInput): Theme => {
  const { palette: paletteInput = {}, typography: typographyInput = {}, attributes: attributesInput = {} } =
    options || {}

  const palette = createPalette(paletteInput)
  const typography = createTypography(typographyInput)
  const attributes = createAttributes(attributesInput)

  return {
    palette,
    typography,
    attributes,
  }
}

export default createTheme({})
export * from './global-styles'
