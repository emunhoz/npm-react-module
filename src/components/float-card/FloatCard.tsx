import * as React from 'react'
import * as S from './styled'

interface IFloatCard {
  imgUrl: string
  children: React.ReactNode
  /**
   * Set full width
   *
   * @default false
   */
  block?: boolean
}

export const FloatCard: React.FC<IFloatCard> = ({ imgUrl, children, block = false }) => (
  <S.FloatCard block={block}>
    <S.BoxIcon>
      <img src={imgUrl} alt="icon" />
    </S.BoxIcon>
    {children}
  </S.FloatCard>
)
