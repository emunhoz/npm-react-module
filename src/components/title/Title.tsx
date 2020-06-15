import * as React from 'react'
import * as S from './styled'

interface ITitle {
  children: React.ReactNode

  /**
   * Set a new fontSize
   *
   * @default 40px
   */
  size?: string

  /**
   * Set a new color
   *
   * @default #4B83F9
   */
  color?: string
}

export const Title: React.FC<ITitle> = ({ children, size, color = '' }) => <S.Title size={size} color={color}>{children}</S.Title>
