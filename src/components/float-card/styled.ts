import styled, { css } from 'styled-components'

const BlockStyle = css`
  max-width: 100%
`

export const FloatCard = styled.div<{ block?: boolean }>`
  position: relative;
  display: inline-block;
  width: 100%;
  max-width: 233px;
  padding: 55px 20px 20px;
  font-size: ${({ theme }) => theme.typography.fontSizeSM};
  line-height: 21px;
  color: ${({ theme }) => theme.palette.primary};
  background: #fff;
  border-radius: 9px;
  box-shadow: 1px 5px 20px rgba(0, 0, 0, .2);

  ${({ block }) => block && BlockStyle};
`

export const BoxIcon = styled.div`
  position: absolute;
  top: -40px;
  right: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80px;
  height: 80px;
  margin: 0 auto;
  background: #fff;
  border-radius: 9px;
  box-shadow: 1px 5px 20px rgba(0, 0, 0, .2);
`
