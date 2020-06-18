import createPalette, { Palette, PaletteInput } from './create-palette';
import createTypography, { Typography, TypographyInput } from './create-typography';
import attributes, { Attributes } from './attributes';

export interface Theme {
  palette: Palette;
  typography: Typography;
  attributes: Attributes;
}

export interface ThemeInput {
  palette?: PaletteInput;
  typography?: TypographyInput;
}

export const createTheme = (options: ThemeInput): Theme => {
  const { palette: paletteInput = {}, typography: typographyInput = {} } = options || {};

  const palette = createPalette(paletteInput);
  const typography = createTypography(typographyInput);

  return {
    palette,
    typography,
    attributes
  };
};

export default createTheme({});
export * from './global-styles';
