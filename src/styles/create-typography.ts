export interface Typography {
  primary: string
  code: string
}

export type TypographyInput = { +readonly [K in keyof Typography]+?: Typography[K] } & {
  fontFamily?: number
}

const createTypography = ({
  primary = '"Roboto", "Helvetica Neue", Helvetica, Arial, sans-serif',
  code = '"SFMono-Regular", Consolas, "Liberation Mono", Menlo, Courier, monospace',
}: TypographyInput): Typography => {
  return {
    primary,
    code,
  }
}

export default createTypography
