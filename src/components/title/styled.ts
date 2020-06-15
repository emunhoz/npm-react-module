import styled from 'styled-components'

export const Title = styled.h1<{ size?: string; color: string }>`
  font-size: ${({ theme, size }) => size ? `${size}px` : theme.typography.fontSizeXXL};
  line-height: 38px;
  color: ${({ theme, color }) => color ? `${color}` : theme.palette.primary};
`
