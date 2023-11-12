import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from './Styles/theme';
import { GlobalStyle } from './globalStyles';
import Container from './Container';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Container />
    </ThemeProvider>
  )
}

export default App;