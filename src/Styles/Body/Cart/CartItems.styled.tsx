import styled, { css } from 'styled-components';

export const StyledCartItems = styled.div`
  ${({ theme }) => css`
    background: ${theme.colors.white};
    border-radius: 0.8rem;
    box-shadow: -2px 2px 10px 0px rgba(0, 0, 0, 0.05);
    padding: 1.5rem 2rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 0.8rem;
    position: relative;
    margin-top: 1.2rem;
    margin-right: 1.1rem;

    .carts-pics {
      width: 6rem;
    }

    .carts-flex-1 {
      display: flex;
      align-items: center;
      gap: 0.8rem;
      flex: 1;
    }

    .carts-flex-2 {
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex: 1;
    }

    .carts-name {
      max-width: 10rem;
    }

    .carts-buttons {
      border-radius: 0.4rem;
      
      border: 1px solid ${theme.colors.gray};
      display: flex;
      align-items: center;
      justify-content: center;
      

      button {
        flex: 1;
        background-color: transparent;
        cursor: pointer;
        padding: 0.3rem 0.6rem;
      }

      .quantidade-items-cart {
        flex: 1;
        padding: 0.3rem 0.6rem;
        display: flex;
        position: relative;
        height: 100%;
        justify-self: center;
        align-self: center;
        &:after {
          content: '';
          display: block;
          position: absolute;
          width: 1px;
          height: 80%;
          top: 3px;
          right: 0px;
          background: ${theme.colors.gray};
        }

        &:before {
          content: '';
          display: block;
          position: absolute;
          width: 1px;
          height: 80%;
          top: 3px;
          left: 0px;
          background: ${theme.colors.gray};
        }
      }
    }

    .botao-fechar {
      z-index: 999;
      width: 20px;
      height: 20px;
      position: absolute;
      top: -10px;
      right: -10px;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      background: ${theme.colors.black.normal_black};
      transition: 0.7s ease-in-out;
      transform: scale(0.95);
      &:hover {
      transform: scale(1);
      }


      .botao-fechar-cross {
        color: ${theme.colors.white};
        font-weight: 400;
      }

      
    }

  `}
`;
