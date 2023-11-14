import React from 'react';
import { StyledCartItems } from '../../../Styles/Body/Cart/CartItems.styled';
import { useCart } from '../../../context/CartContext';
import dataItems from '../../../dataItems';
import { StyledTexts } from '../../../Styles/Reusable/Texts.styled';

interface CartItemProps {
  id: number;
  quantidade: number;
}

const CartItems = ({ id, quantidade }: CartItemProps) => {
  const item = dataItems().dataFiltered?.products.find(
    (item) => item.id === id
  );

  const {
    removerItems,
    diminuirQuantidadeItems,
    aumentarQuantidadeItems,
    quantidadeItems,
    
  } = useCart();
  const quantidadeProdutos = quantidadeItems(id);
  const [updatedPrice, setUpdatedPrice] = React.useState(0);

  React.useEffect(() => {
    setUpdatedPrice(quantidadeProdutos * Number(item?.price));
  });

  if (item == null) return null;

  return (
    <StyledCartItems>
      <div className='carts-flex-1'>
        <div className='carts-pics-wrapper'>
          <img className='carts-pics' src={item.photo} alt='' />
        </div>
        <div className='carts-name'>
          <StyledTexts $size='p2'>{item.name}</StyledTexts>
        </div>
      </div>

      <div className='carts-qtd-price carts-flex-2'>
        <div className='carts-buttons'>
          <button
            className='button-minus'
            onClick={() => diminuirQuantidadeItems(id)}
          >
            <StyledTexts $size='p2'>-</StyledTexts>
          </button>

          <StyledTexts $size='p6' className='quantidade-items-cart'>{quantidade}</StyledTexts>

          <button
            className='button-plus'
            onClick={() => aumentarQuantidadeItems(id)}
          >
            <StyledTexts $size='p2'>+</StyledTexts>
          </button>
        </div>

        <div >
          <StyledTexts $size='p7'>R$ {updatedPrice}</StyledTexts>
        </div>
      </div>

      <div className='botao-fechar' onClick={() => {removerItems(id)}}><StyledTexts className='botao-fechar-cross' $size='p7'>X</StyledTexts></div>
    </StyledCartItems>
  );
};

export default CartItems;
