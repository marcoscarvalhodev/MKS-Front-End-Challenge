import React from 'react';

import { useQuery } from 'react-query';
import axios from 'axios';
import { useCart } from './context/CartContext';

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

const dataItems = () => {
  const { cartItems } = useCart();

  const [dataFiltered, setDataFiltered] = React.useState<dataTypes>();

   const cartItemsTotal = cartItems.reduce((acc, cartItem) => {
    const item = dataFiltered?.products.find((item) => item.id === cartItem.id);

    return acc + (Number(item?.price) || 0) * cartItem.quantidade;
  }, 0);

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

  return { dataFiltered, cartItemsTotal };
};

export default dataItems;
