import React from 'react';

import { StyledHeading } from '../../Styles/Reusable/Headings.styled';
import { StyledTexts } from '../../Styles/Reusable/Texts.styled';
import Bag from '../../assets/Comprar.svg?react';




import { useCart } from '../../context/CartContext';

type ItemComprado = {
  id: number;
  name: string;
  description: string;
  brand: string;
  createdAt: string;
  photo: string;
  price: string;
  updatedAt: string;
};

const Products = ({ id, photo, name, description, price }: ItemComprado) => {
  const [idState, setIdState] = React.useState<null | number>(null);

  const {
    quantidadeItems,
    aumentarQuantidadeItems,
    diminuirQuantidadeItems,
    removerItems,
  } = useCart();
  const quantity = quantidadeItems(id);

  const handleBuy: React.MouseEventHandler<SVGSVGElement> = (event) => {
    if (quantity < 1) aumentarQuantidadeItems(id);
  };

  return (
    <>
      <div className='products-characteristics'>
        <div className='products-pics-wrapper'>
          <img className='products-pics' src={photo} alt='' />
        </div>
        <div className='products-name-price'>
          <StyledHeading as='h2'>{name}</StyledHeading>
          <StyledHeading className='products-price' as='h3'>
            R${price}
          </StyledHeading>
        </div>

        <StyledTexts $size='p1'>{description}</StyledTexts>
      </div>
      <div className='comprar-button'>
        <Bag className='bag' id={`product-${id}`} onClick={handleBuy} />
      </div>
    </>
  );
};

export default Products;
