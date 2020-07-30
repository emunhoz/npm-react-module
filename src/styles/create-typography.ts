export interface Typography {
  type: {
    primary: string
    code: string
  }
  weight: {
    regular: string
    bold: string
    extrabold: string
  }
  size: {
    s1: number
    s2: number
    s3: number
    m1: number
    m2: number
    m3: number
    l1: number
    l2: number
    l3: number
    code: number
  }
}

export type TypographyInput = { +readonly [K in keyof Typography]+?: Typography[K] } & {
  fontSize?: number
  htmlFontSize?: number
}

const createTypography = (typography: TypographyInput): Typography => {
  const {
    type = {
      primary: '"Roboto", "Helvetica Neue", Helvetica, Arial, sans-serif',
      code: '"SFMono-Regular", Consolas, "Liberation Mono", Menlo, Courier, monospace',
    },
    weight = {
      regular: '400',
      bold: '700',
      extrabold: '900',
    },
    size = {
      s1: 12,
      s2: 14,
      s3: 16,
      m1: 20,
      m2: 24,
      m3: 28,
      l1: 32,
      l2: 40,
      l3: 48,
      code: 90,
    },
  } = typography

  return {
    type,
    weight,
    size,
  }
}

export default createTypography
