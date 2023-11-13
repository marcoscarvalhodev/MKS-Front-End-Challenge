import React from 'react';
import { useQuery } from 'react-query';
import axios from 'axios';
import { StyledHero } from '../../Styles/Body/Hero.styled';
import { StyledHeading } from '../../Styles/Reusable/Headings.styled';
import { StyledTexts } from '../../Styles/Reusable/Texts.styled';

import Cart from './Cart/Cart';
import Products from './Products';

interface urlTypes {
  page: number;
  rows: number;
  sort: 'id' | 'price' | 'name';
  order: 'DESC' | 'ASC';
}

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

interface dataTypes {
  count?: number;
  products: ItemComprado[];
}

const Hero = () => {
  const [dataFiltered, setDataFiltered] = React.useState<dataTypes>();

  const challangeData = ({ page, rows, sort, order }: urlTypes) => {
    return `https://mks-frontend-challenge-04811e8151e6.herokuapp.com/api/v1/products?page=${page}&rows=${rows}&sortBy=${sort}&orderBy=${order}`;
  };

  const { data } = useQuery(
    'products',
    async () => {
      return axios
        .get(challangeData({ page: 1, rows: 8, sort: 'id', order: 'DESC' }))
        .then((response) => response.data);
    },
    { retry: 3 }
  );

  React.useEffect(() => {
    setDataFiltered(data);
  }, [data]);

  return (
    <StyledHero className='container'>
      <div className='products-wrapper'>
        {dataFiltered?.products.map((item) => {
          return (
            <div className='products-items' key={item.id}>
              <Products {...item} />
            </div>
          );
        })}

        
      </div>
    </StyledHero>
  );
};

export default Hero;
