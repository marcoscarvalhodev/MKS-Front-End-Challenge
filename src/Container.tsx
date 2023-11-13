import React from 'react';
import Header from './Components/Header/Header';
import Hero from './Components/Body/Hero';

import Cart from './Components/Body/Cart/Cart';
import { StyledContainer } from './Styles/Container.styled';

const Container = () => {
  
  return (
    
      <StyledContainer>
        <Header />
        <Hero />
        <Cart />
      </StyledContainer>
    
  );
};

export default Container;
