import React from 'react';
import { useCart } from '../../../context/CartContext';
import CartItems from './CartItems';
import { StyledCart } from '../../../Styles/Body/Cart/Cart.styled';
import { StyledTexts } from '../../../Styles/Reusable/Texts.styled';
import dataItems from '../../../dataItems';

import ContainerSizes from '../../../Hooks/ContainerSizes';

const Cart = () => {
  const finalizarCompraRef = React.useRef<HTMLDivElement>(null);
  const [finalizarCompraHeight, setFinalizarCompraHeight] = React.useState<
    number | null
  >(null);

  const { xsmall } = ContainerSizes();

  React.useEffect(() => {
    if (finalizarCompraRef.current)
      setFinalizarCompraHeight(finalizarCompraRef.current.offsetHeight);
  });

  const componentRef = React.useRef<HTMLDivElement>(null);
  const { cartItems, cartAberto, fecharCart, quantidadeCart } = useCart();



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
      $xsmall={xsmall}
      $finalizarCompraHeight={finalizarCompraHeight}
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
          <StyledTexts className='carrinho-compras' $size='p5'>
            {' '}
            Carrinho de Compras{' '}
          </StyledTexts>
          <div className='cross' onClick={handleCross}>
            <StyledTexts $size='p3'>X</StyledTexts>
          </div>
        </div>

        
        <div className='cart-flex'>
          {cartItems.map((item) => (
            <CartItems key={item.id} {...item} />
          ))}

          <div className='finalizar-compra-wrapper' ref={finalizarCompraRef}>
            <div className='total-compra'>
              <StyledTexts $size='p5'>Total:</StyledTexts>
              <StyledTexts $size='p5'>
                R$ {dataItems().cartItemsTotal}
              </StyledTexts>
            </div>
            <StyledTexts className='finalizar-compra' $size='p5' as='a' href=''>
              Finalizar Compra
            </StyledTexts>
          </div>
        </div>
        
        
      </div>
    </StyledCart>
  );
};

export default Cart;
