import React from 'react';
import Header from './Components/Header/Header';
import Hero from './Components/Body/Hero';

import Cart from './Components/Body/Cart/Cart';
import { StyledContainer } from './Styles/Container.styled';
import Footer from './Components/Footer/Footer';
import ContainerSizes from './Hooks/ContainerSizes';
const Container = () => {

const {xlarge} = ContainerSizes();
  
  return (
    
      <StyledContainer $xlarge={xlarge}>
        <Header />
        <Hero />
        <Cart />
        <Footer />
      </StyledContainer>
    
  );
};

export default Container;
