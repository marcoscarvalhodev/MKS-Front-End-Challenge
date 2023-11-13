import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from './Styles/theme';
import { GlobalStyle } from './globalStyles';
import Container from './Container';
import { useCart } from './context/CartContext';



const App = () => {
  const {cartAberto} = useCart();
  console.log(cartAberto)
  return (
    
    <ThemeProvider theme={theme}>
      <GlobalStyle cartAberto={cartAberto}/>
      <Container />
    </ThemeProvider>
    
  )
}

export default App;