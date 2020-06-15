export interface Palette {
  primary: string;
  secondary: string;
}

export type PaletteInput = {
  +readonly [K in keyof Palette]+?: Palette[K];
};

const createPalette = ({
  primary = '#4B83F9',
  secondary = '#dfdded',
}: PaletteInput): Palette => ({
  primary,
  secondary,
})

export default createPalette;
