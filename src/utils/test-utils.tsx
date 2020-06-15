import React from 'react'
import createTheme, { GlobalStyles } from '../theme'
import { ThemeProvider } from 'styled-components'
import { render } from '@testing-library/react'

const AllTheProviders = ({ children }:any) => {
  return (
    <ThemeProvider theme={createTheme}>
      <GlobalStyles />
      {children}
    </ThemeProvider>
  )
}

const customRender = (ui: any, options?: any) =>
  render(ui, { wrapper: AllTheProviders, ...options })

// re-export everything
export * from '@testing-library/react'

// override render method
export { customRender as render }
