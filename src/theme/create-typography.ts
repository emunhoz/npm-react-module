export interface Typography {
  fontFamily: string;
  fontSizeXXS: string;
  fontSizeXS: string;
  fontSizeS: string;
  fontSizeSM: string;
  fontSizeM: string;
  fontSizeML: string;
  fontSizeL: string;
  fontSizeXL: string;
  fontSizeXXL: string;
  fontWeightNormal: number;
  fontWeightMedium: number;
  fontWeightLight: number;
  fontWeightBold: number;
}

export type TypographyInput = { +readonly [K in keyof Typography]+?: Typography[K] } & {
  fontSize?: number;
  htmlFontSize?: number;
};

const createTypography = (typography: TypographyInput): Typography => {
  const {
    fontFamily = 'HelveticaNeue, "Helvetica Neue", "Open Sans", sansSerif',

    /* weights */
    fontWeightNormal = 400,
    fontWeightMedium = 500,
    fontWeightLight = 300,
    fontWeightBold = 700,
  } = typography;

  const px = (size: number) => `${size}px`;

  return {
    fontFamily,
    fontSizeXXL: px(36),
    fontSizeXL: px(32),
    fontSizeL: px(28),
    fontSizeML: px(24),
    fontSizeM: px(20),
    fontSizeSM: px(18),
    fontSizeS: px(16),
    fontSizeXS: px(14),
    fontSizeXXS: px(12),
    fontWeightNormal,
    fontWeightMedium,
    fontWeightLight,
    fontWeightBold,
  };
};

export default createTypography;
