import React from 'react';
import { StyledNav } from '../../Styles/Header/Nav.styled';
import { StyledHeading } from '../../Styles/Reusable/Headings.styled';
import Cart from '../../assets/Cart.svg?react';
import { StyledTexts } from '../../Styles/Reusable/Texts.styled';
import { useCart } from '../../context/CartContext';

const Nav = () => {
  const {quantidadeCart, abrirCart, fecharCart} = useCart();
  

  const handleCartActive = () => {
    abrirCart();
  }

  return (
    <StyledNav>
      <div className='nav-flex'>
        <StyledHeading className='logo' as='h1' >
          MKS
        </StyledHeading>
        <div className='cart' onClick={handleCartActive}>
          <Cart className='cart-svg'/>
          <StyledTexts $size="p4">{quantidadeCart}</StyledTexts>
        </div>
      </div>
    </StyledNav>
  );
};

export default Nav;
