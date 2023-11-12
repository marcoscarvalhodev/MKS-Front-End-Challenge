import React from 'react';
import { useQuery } from 'react-query';
import axios from 'axios';
import { StyledHero } from '../../Styles/Body/Hero.styled';
import { StyledHeading } from '../../Styles/Reusable/Headings.styled';
import { StyledTexts } from '../../Styles/Reusable/Texts.styled';
import Bag from '../../assets/Comprar.svg?react';

interface urlTypes {
  page: number;
  rows: number;
  sort: 'id' | 'price' | 'name';
  order: 'DESC' | 'ASC';
}

interface dataTypes {
  count: number;
  products: {
    id: number;
    name: string;
    description: string;
    brand: string;
    createdAt: string;
    photo: string;
    price: string;
    updatedAt: string;
  }[];
}

const Hero = () => {
  const [dataFiltered, setDataFiltered] = React.useState<dataTypes>();

  const challangeData = ({ page, rows, sort, order }: urlTypes) => {
    return `https://mks-frontend-challenge-04811e8151e6.herokuapp.com/api/v1/products?page=${page}&rows=${rows}&sortBy=${sort}&orderBy=${order}`;
  };

  const { data, isLoading, error } = useQuery(
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
    console.log(data);
  }, [data]);
  return (
    <StyledHero className='container'>
      <div className='products-wrapper'>
        {dataFiltered?.products.map(
          ({
            id,
            name,
            description,
            brand,
            createdAt,
            photo,
            price,
            updatedAt,
          }) => {
            return (
              <div className='products-items' key={id}>
                <div className='products-characteristics'><img className='products-pics' src={photo} alt='' />
                <div className='products-name-price'>
                  <StyledHeading as='h2'>{name}</StyledHeading>
                  <StyledHeading className='products-price' as='h3'>
                    R${price}
                  </StyledHeading>
                </div>
                <p>
                  <StyledTexts $size='p1'>{description}</StyledTexts>
                </p>
                </div>
                <div className='comprar-button'>
                  <Bag className='bag'/>
                </div>
              </div>
              
            );
          }
        )}
      </div>
      
    </StyledHero>
  );
};

export default Hero;
