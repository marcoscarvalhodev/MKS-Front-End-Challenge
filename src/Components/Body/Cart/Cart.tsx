import React from 'react';
import { useCart } from '../../../context/CartContext';
import CartItems from './CartItems';
import { StyledCart } from '../../../Styles/Body/Cart/Cart.styled';
import { StyledTexts } from '../../../Styles/Reusable/Texts.styled';

const Cart = () => {
  const componentRef = React.useRef<HTMLDivElement>(null);
  const {
    quantidadeItems,
    aumentarQuantidadeItems,
    diminuirQuantidadeItems,
    removerItems,
    cartItems,
    cartAberto,
    fecharCart,
    abrirCart,
  } = useCart();

  function assertIsNode(e: EventTarget | null): asserts e is Node {
    if (!e || !('nodeType' in e)) {
      throw new Error(`Node expected`);
    }
  }

  const handleWrapper = ({ target }: React.MouseEvent): void => {
    assertIsNode(target);

    if (!componentRef.current?.contains(target)) {
      fecharCart();
    }
  };

  const handleCross = () => {
    fecharCart();
  };

  return (
    <StyledCart
      className={`cart-wrapper ${cartAberto && 'cart-wrapper-active'}`}
      onClick={handleWrapper}
    >
      <div
        className={`cart-component ${
          cartAberto ? 'cart-component-active' : 'cart-component-inactive'
        }`}
        ref={componentRef}
      >
        <div className='title-flex'>
          <StyledTexts $size='p5'> Carrinho de Compras </StyledTexts>
          <StyledTexts $size='p3' className='cross' onClick={handleCross}>
            X
          </StyledTexts>
        </div>

        {cartItems.map((item) => (
          <CartItems key={item.id} {...item} />
        ))}
      </div>
    </StyledCart>
  );
};

export default Cart;
