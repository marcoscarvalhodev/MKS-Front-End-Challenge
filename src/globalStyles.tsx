import { css, createGlobalStyle } from 'styled-components';
import { useCart } from './context/CartContext';

interface GlobalStyleProps {
  cartAberto: boolean;
}

export const GlobalStyle = createGlobalStyle<GlobalStyleProps>`
  ${({ theme, cartAberto }) => css`
    * {
      font-size: 10px;
      margin: 0px;
      padding: 0px;
      caret-color: transparent;
      box-sizing: border-box;
      text-decoration: none;
      list-style: none;
      border: 0;
    }

    

    .container {
      margin-bottom: 12.6rem;
    }
  `}

  

`;
