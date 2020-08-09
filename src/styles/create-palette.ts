export interface Palette {
  primary: string
  secondary: string
  tertiary: string

  orange: string
  gold: string
  green: string
  seafoam: string
  purple: string
  ultraviolet: string

  // Monochrome
  lightest: string
  lighter: string
  light: string
  mediumlight: string
  medium: string
  mediumdark: string
  dark: string
  darker: string
  darkest: string

  border: string

  // Status
  positive: string
  negative: string
  warning: string
}

export type PaletteInput = {
  +readonly [K in keyof Palette]+?: Palette[K]
}

const createPalette = ({
  primary = '#7264d6',
  secondary = '#1EA7FD', // ocean
  tertiary = '#DDDDDD',

  orange = '#FC521F',
  gold = '#FFAE00',
  green = '#66BF3C',
  seafoam = '#37D5D3',
  purple = '#6F2CAC',
  ultraviolet = '#2A0481',

  // Monochrome
  lightest = '#FFFFFF',
  lighter = '#F8F8F8',
  light = '#F3F3F3',
  mediumlight = '#EEEEEE',
  medium = '#DDDDDD',
  mediumdark = '#999999',
  dark = '#666666',
  darker = '#444444',
  darkest = '#333333',

  border = 'rgba(0,0,0,.1)',

  // Status
  positive = '#66BF3C',
  negative = '#FF4400',
  warning = '#E69D00',
}: PaletteInput): Palette => {
  return {
    primary,
    secondary,
    tertiary,
    orange,
    gold,
    green,
    seafoam,
    purple,
    ultraviolet,
    lightest,
    lighter,
    light,
    mediumlight,
    medium,
    mediumdark,
    dark,
    darker,
    darkest,
    border,
    positive,
    negative,
    warning,
  }
}

export default createPalette
