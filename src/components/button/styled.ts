import styled, { css } from 'styled-components'

const NegativeStyle = css`
  color: ${({ theme }) => theme.palette.darkest};
  background: ${({ theme }) => theme.palette.lightest};
  box-shadow: 0 0 46px 0 rgba(0, 0, 0, 0.13);

  :hover {
    box-shadow: 0 0 15px 0 rgba(0, 0, 0, 0.13);
  }
`

export const Button = styled.button<{ negative: boolean }>`
  min-width: 320px;
  padding: 24px 40px;
  font-size: ${({ theme }) => theme.fontSize.s3}px;
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  color: ${({ theme }) => theme.palette.lightest};
  cursor: pointer;
  background: ${({ theme }) => theme.palette.primary};
  border: none;
  border-radius: 20px;
  transition: 0.3s;

  :hover {
    filter: brightness(110%);
  }

  ${({ negative }) => negative && NegativeStyle};
`
