import React from 'react';
import { StyledCartItems } from '../../../Styles/Body/Cart/CartItems.styled';

interface CartItemProps {
  id: number;
  quantidade: number;
}

const CartItems = ({ id, quantidade }: CartItemProps) => {
  return <StyledCartItems>
    
  </StyledCartItems>;
};

export default CartItems;
