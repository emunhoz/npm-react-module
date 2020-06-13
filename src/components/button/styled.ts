import styled, { css } from 'styled-components'

const NegativeStyle = css`
  background: #fff;
  color: #0086FF;
  box-shadow: 0px 4px 20px rgba(155, 155, 155, 0.2);

  :hover {
    background: #0086FF;
    color: #fff;
  }
`

export const Button = styled.button<{ negative: boolean;}>`
  background: #0086FF;
  border: 1px solid #4B83F9;
  box-sizing: border-box;
  border-radius: 25px;
  width: 348px;
  height: 50px;
  color: #fff;
  cursor: pointer;
  text-transform: uppercase;
  transition: 0.3s;
  box-shadow: 0px -2px 15px rgba(0, 115, 219, 0.2);

  :hover {
    background: #fff;
    color: #4B83F9;
  }

  ${({ negative }) => negative && NegativeStyle};
`
