import * as React from 'react'
import * as S from './styled'

interface ISquareButton {
  children?: React.ReactNode
  onClick: () => void
}

export const SquareButton: React.FC<ISquareButton> = ({ onClick, children }) => <S.SquareButton onClick={onClick}>{children}</S.SquareButton>
