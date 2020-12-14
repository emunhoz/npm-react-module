import React from 'react'
import { addDecorator } from '@storybook/react'
import { withA11y } from '@storybook/addon-a11y'
import createTheme, { GlobalStyles } from '../src/styles'
import { ThemeProvider } from 'styled-components'

const styles = {
  textAlign: 'center',
  padding: '30px',
  display: 'flex',
  justifyContent: 'center',
  margin: '0 auto'
}

addDecorator(withA11y)
addDecorator(storyFn => <ThemeProvider theme={createTheme}><GlobalStyles /><div style={styles}>{storyFn()}</div></ThemeProvider>)