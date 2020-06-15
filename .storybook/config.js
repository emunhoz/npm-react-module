import React from 'react'
import { addDecorator } from '@storybook/react'
import { withA11y } from '@storybook/addon-a11y'
import createTheme, { GlobalStyles } from '../src/theme'
import { ThemeProvider } from 'styled-components';

addDecorator(withA11y)
addDecorator(storyFn => <ThemeProvider theme={createTheme}><GlobalStyles />{storyFn()}</ThemeProvider>)
