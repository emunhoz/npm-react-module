import { palette, Palette } from './create-palette'
import { typography, Typography } from './create-typography'
import { attributes, Attributes } from './create-attributes'

export interface Theme {
  palette?: Palette
  typography?: Typography
  attributes?: Attributes
}

const createTheme = ({ palette, typography, attributes }: Theme) => ({ palette, typography, attributes })

export default createTheme({ palette, typography, attributes })
export * from './global-styles'
