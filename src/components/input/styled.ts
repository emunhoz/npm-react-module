import styled, { css } from 'styled-components'

export const ErrorStyle = css`
  color: ${({ theme }) => theme.palette.lightError};
`

export const InputErrorStyle = css`
  color: ${({ theme }) => theme.palette.error};
  background: #fff2f2;
  border-color: ${({ theme }) => theme.palette.lightError};
`

export const InputWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  text-align: left;
`

export const InputLabel = styled.label<{ error: boolean }>`
  margin-bottom: 8px;
  color: ${({ theme }) => theme.palette.black};

  ${({ error }) => error && ErrorStyle};
`

export const Input = styled.input<{ error: boolean }>`
  width: 100%;
  padding: 16px;
  margin-bottom: 5px;
  font-size: ${({ theme }) => theme.typography.fontSizeM};
  color: ${({ theme }) => theme.palette.black};
  border: 2px solid ${({ theme }) => theme.palette.black};
  border-radius: 6px;

  :focus {
    outline: none;
  }

  :disabled {
    background: ${({ theme }) => theme.palette.lightGray};
  }

  ${({ error }) => error && InputErrorStyle};
`

export const HelpMessage = styled.span<{ error: boolean }>`
  ${({ error }) => error && ErrorStyle};
`
