import * as React from 'react'
import * as S from './styled'

interface IButton {
  children?: React.ReactNode
  onClick: () => void

  /**
   * Styles button as negative style
   *
   * @default false
   */
  negative?: boolean
}

export const Button: React.FC<IButton> = ({ children, onClick, negative = false, ...rest }) => (
  <S.Button onClick={onClick} negative={negative} {...rest}>
    {children}
  </S.Button>
)
