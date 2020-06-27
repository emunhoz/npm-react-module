import * as React from 'react'
import * as S from './styled'

export interface IInput {
  id?: string
  /**
   * Input value
   */
  value?: string
  /**
   * Placeholder for input
   */
  placeholder?: string
  /**
   * Label for input
   */
  label?: string
  /**
   * onChange callback
   */
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  /**
   * Text to be displayed to errored input
   */
  error?: string
}

export const Input: React.FC<IInput> = ({ id, value, placeholder, label, error, ...rest }) => (
  <S.InputWrapper>
    <S.InputLabel htmlFor={id} error={!!error}>
      {label}
    </S.InputLabel>
    <S.Input id={id} value={value} placeholder={placeholder} error={!!error} {...rest} />
    <S.HelpMessage error={!!error}>{error}</S.HelpMessage>
  </S.InputWrapper>
)
