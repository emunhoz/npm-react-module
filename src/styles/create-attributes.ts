export interface Attributes {
  borderRadius: {
    small: number
    default: number
    big: number
  }
  boxShadow: {
    small: string
    hover: string
  }
}

export type AttributesInput = {
  +readonly [K in keyof Attributes]+?: Attributes[K]
}

const createAttributes = (attributes: AttributesInput): Attributes => {
  const {
    borderRadius = {
      small: 5,
      default: 10,
      big: 20,
    },
    boxShadow = {
      small: '0 0 46px 0 rgba(0, 0, 0, 0.13)',
      hover: '0 0 15px 0 rgba(0, 0, 0, 0.13)',
    },
  } = attributes

  return {
    borderRadius,
    boxShadow,
  }
}

export default createAttributes
