import React from 'react';
import { StyledNav } from '../../Styles/Header/Nav.styled';
import { StyledHeading } from '../../Styles/Reusable/Headings.styled';
import Cart from '../../assets/Cart.svg?react';
import { StyledTexts } from '../../Styles/Reusable/Texts.styled';

const Nav = () => {
  return (
    <StyledNav>
      <div className='nav-flex'>
        <StyledHeading className='logo' as='h1'>
          MKS
        </StyledHeading>
        <div className='cart'>
          <Cart />
          <StyledTexts $size="p4">0</StyledTexts>
        </div>
      </div>
    </StyledNav>
  );
};

export default Nav;
