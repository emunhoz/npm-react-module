import styled, { css } from 'styled-components'

const NegativeStyle = css`
  color: ${({ theme }) => theme.palette.black};
  background: ${({ theme }) => theme.palette.white};
  box-shadow: 0 0 46px 0 rgba(0, 0, 0, .13);

  :hover {
    box-shadow: 0 0 15px 0 rgba(0, 0, 0, .13);
  }
`

export const Button = styled.button<{ negative: boolean;}>`
  min-width: 320px;
  padding: 24px 40px;
  font-size: ${({ theme }) => theme.typography.fontSizeSM};
  font-weight: ${({ theme }) => theme.typography.fontWeightMedium};
  color: ${({ theme }) => theme.palette.white};
  cursor: pointer;
  background: ${({ theme }) => theme.palette.primary};
  border: none;
  border-radius: ${({ theme }) => theme.attributes.borderRadius};
  transition: .3s;

  :hover {
    filter: brightness(150%);
  }

  ${({ negative }) => negative && NegativeStyle};
`
