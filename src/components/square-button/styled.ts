import styled from 'styled-components'

export const SquareButton = styled.button`
  width: 170px;
  height: 60px;
  font-size: ${({ theme }) => theme.typography.fontSizeM};
  color: #fff;
  text-transform: uppercase;
  cursor: pointer;
  background: transparent;
  border: 1px solid #fff;
  border-radius: 9px;
`
