import styled, { css } from 'styled-components';

interface StyledCartProps {
  $finalizarCompraHeight: number | null;
  $xsmall: boolean | null;
}

export const StyledCart = styled.div<StyledCartProps>`
  ${({ theme, $finalizarCompraHeight, $xsmall }) => css`
    width: 100vw;
    height: 100vh;
    position: absolute;
    top: 0;
    background-color: rgba(0, 0, 0, 0.2);
    display: flex;
    flex-direction: column;
    opacity: 0;
    pointer-events: none;

    transition: 0.7s ease;

    &.cart-wrapper-active {
      pointer-events: all;
      opacity: 1;
    }

    .cart-component {
      background: ${theme.colors.blue};
      padding: 4.7rem 3.6rem;
      height: 100vh;
      flex: 1;
      position: absolute;
      right: 0;
      top: 0;
      box-shadow: -5px 0px 6px 0px rgba(0, 0, 0, 0.13);
      z-index: 999;
      .title-flex {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 30px;
        ${$xsmall && css`
          gap: 0px;
        ` }
       
      }

      .cross {
        background: ${theme.colors.black.normal_black};
        width: 4rem;
        height: 4rem;
        border-radius: 100%;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: 0.7s ease;

        &:hover {
          opacity: 0.9;
          scale: 1.08;
        }
      }

      
    }

    .cart-component-inactive {
      transform: translate3d(100%, 0, 0);
      transition: 0.7s ease;
    }

    .cart-component-active {
      transform: translate3d(0, 0, 0);
      transition: 0.7s ease;
      
    }

    .cart-flex {
      height: 100%;
      
      ${$finalizarCompraHeight &&
      css`
        max-height: calc(100% - ${$finalizarCompraHeight}px - 10rem);
      `};
      margin-top: 8rem;
      display: flex;
      flex-direction: column;
      gap: 4rem;

      overflow-x: hidden;
      
      overflow-y: scroll;
      &::-webkit-scrollbar {
        display: none;
      }


      

      &::-webkit-scrollbar {
        display: block;
        width: 1.8rem;
        
      }

      &::-webkit-scrollbar-thumb {
        
        background: ${theme.colors.black.light_black_1};
        border-left: 0.7rem solid ${theme.colors.blue};
        border-right: 0.7rem solid ${theme.colors.blue};;
        border-radius: 0.8rem;
      }*/
    }

    .finalizar-compra {
      display: block;
      text-align: center;
      padding: 4rem 0rem;
      background-color: ${theme.colors.black.normal_black};
    }

    .finalizar-compra-wrapper {
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;

      height: max-content;
    }

    .total-compra {
      padding: 3.6rem;
      display: flex;
      justify-content: space-between;
    }
  `}
`;
