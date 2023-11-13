import React, { ReactNode, createContext, useContext } from 'react';

type CartProviderProps = {
  children: ReactNode;
};

type CartContext = {
  abrirCart: () => void;
  fecharCart: () => void;
  quantidadeItems: (id: number) => number;
  aumentarQuantidadeItems: (id: number) => void;
  diminuirQuantidadeItems: (id: number) => void;
  removerItems: (id: number) => void;
  cartItems: CartItem[];
  quantidadeCart: number;
  cartAberto: boolean;
};

type CartItem = {
  id: number;
  quantidade: number;
};

const CartContext = createContext({} as CartContext);

export function useCart() {
  return useContext(CartContext);
}

export function CartProvider({ children }: CartProviderProps) {
  const [cartItems, setCartItems] = React.useState<CartItem[]>([]);
  const [cartAberto, setCartAberto] = React.useState(false);
  
  const abrirCart = () => setCartAberto(true);
  const fecharCart = () => setCartAberto(false);

  const quantidadeCart = cartItems.reduce(
    (quantidade, item) => item.quantidade + quantidade,
    0
  );

  function quantidadeItems(id: number) {
    return cartItems.find((item) => item.id === id)?.quantidade || 0;
  }

  function aumentarQuantidadeItems(id: number) {
    setCartItems((items) => {
      if (items?.find((item) => item.id === id) == null) {
        console.log(items);
        return [...items, { id, quantidade: 1 }];
      } else {
        return items.map((item) => {
          if (item.id === id) {
            return { ...item, quantidade: item.quantidade + 1 };
          } else {
            return item;
          }
        });
      }
    });
  }

  function diminuirQuantidadeItems(id: number) {
    setCartItems((items) => {
      if (items?.find((item) => item.id === id)?.quantidade === 1) {
        return items.filter((item) => item.id !== id);
      } else {
        return items.map((item) => {
          if (item.id === id) {
            return { ...item, quantidade: item.quantidade - 1 };
          } else {
            return item;
          }
        });
      }
    });
  }

  function removerItems(id: number) {
    setCartItems((items) => {
      return items.filter((item) => item.id !== id);
    });
  }

  return (
    <CartContext.Provider
      value={{
        abrirCart,
        fecharCart,
        quantidadeCart,
        cartItems,
        quantidadeItems,
        aumentarQuantidadeItems,
        diminuirQuantidadeItems,
        removerItems,
        cartAberto
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
