export interface Palette {
  primary: string;
  secondary: string;
  white: string;
  black: string;
}

export type PaletteInput = {
  +readonly [K in keyof Palette]+?: Palette[K];
};

const createPalette = ({
  primary = '#7264d6',
  secondary = '#dfdded',
  white = '#fff',
  black = '#1f1f25',
}: PaletteInput): Palette => ({
  primary,
  secondary,
  white,
  black
})

export default createPalette;
