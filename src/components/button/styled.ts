import styled, { css } from 'styled-components'

const NegativeStyle = css`
  color: ${({ theme }) => theme.palette.darkest};
  background: ${({ theme }) => theme.palette.lightest};
  box-shadow: ${({ theme }) => theme.attributes.boxShadow.small};

  :hover {
    box-shadow: ${({ theme }) => theme.attributes.boxShadow.hover};
  }
`

export const Button = styled.button<{ negative: boolean }>`
  min-width: 320px;
  padding: 24px 40px;
  font-size: ${({ theme }) => theme.typography.size.s3}px;
  font-weight: ${({ theme }) => theme.typography.weight.bold};
  color: ${({ theme }) => theme.palette.lightest};
  cursor: pointer;
  background: ${({ theme }) => theme.palette.primary};
  border: none;
  border-radius: ${({ theme }) => theme.attributes.borderRadius.big}px;
  transition: 0.3s;

  :hover {
    filter: brightness(110%);
  }

  ${({ negative }) => negative && NegativeStyle};
`
