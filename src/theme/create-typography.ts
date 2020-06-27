export interface Typography {
  fontSizeXXS: string
  fontSizeXS: string
  fontSizeS: string
  fontSizeSM: string
  fontSizeM: string
  fontSizeML: string
  fontSizeL: string
  fontSizeXL: string
  fontSizeXXL: string
  fontWeightNormal: number
  fontWeightMedium: number
  fontWeightLight: number
  fontWeightBold: number
}

export type TypographyInput = { +readonly [K in keyof Typography]+?: Typography[K] } & {
  fontSize?: number
  htmlFontSize?: number
}

const createTypography = ({
  fontWeightLight = 300,
  fontWeightNormal = 400,
  fontWeightMedium = 600,
  fontWeightBold = 700,
}: TypographyInput): Typography => {
  const px = (size: number) => `${size}px`

  return {
    fontSizeXXL: px(40),
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
  }
}

export default createTypography
