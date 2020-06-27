export interface Palette {
  primary: string
  secondary: string
  white: string
  black: string
  lightGray: string
  error: string
  lightError: string
}

export type PaletteInput = {
  +readonly [K in keyof Palette]+?: Palette[K]
}

const createPalette = ({
  primary = '#7264d6',
  secondary = '#dfdded',
  white = '#fff',
  black = '#1f1f25',
  lightGray = '#f4f4f4',
  error = '#ff6e6e',
  lightError = '#ff6e6e',
}: PaletteInput): Palette => ({
  primary,
  secondary,
  white,
  black,
  lightGray,
  error,
  lightError,
})

export default createPalette
