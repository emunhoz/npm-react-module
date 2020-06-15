import styled, { css } from 'styled-components'

const NegativeStyle = css`
  color: #0086FF;
  background: #fff;
  box-shadow: 0 4px 20px rgba(155, 155, 155, .2);

  :hover {
    color: #fff;
    background: #0086FF;
  }
`

export const Button = styled.button<{ negative: boolean;}>`
  box-sizing: border-box;
  width: 348px;
  height: 50px;
  color: #fff;
  text-transform: uppercase;
  cursor: pointer;
  background: ${({ theme }) => theme.palette.primary};
  border: 1px solid #4B83F9;
  border-radius: 25px;
  box-shadow: 0 -2px 15px rgba(0, 115, 219, .2);
  transition: .3s;

  :hover {
    color: #4B83F9;
    background: #fff;
  }

  ${({ negative }) => negative && NegativeStyle};
`
