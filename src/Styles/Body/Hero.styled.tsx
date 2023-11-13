import styled, { css } from 'styled-components';

export const StyledHero = styled.section`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0rem 8.8rem;
    .products-wrapper {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr 1fr;
      gap: 2.2rem;
      row-gap: 6rem;
    }

    .products-pics-wrapper {
      width: 200px;
      height: 200px;
    }

    .products-pics {
      width: 100%;
    }

    .products-items {
      border-radius: 0.8rem 0.8rem 0rem 0rem;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;

      box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.14);
    }

    .products-name-price {
      display: flex;
      justify-content: space-between;
      width: 100%;
      padding: 1.2rem 0rem;
      gap: 1.2rem;
    }

    .products-price {
      background: ${theme.colors.black.light_black_1};
      height: max-content;
      padding: 0.4rem 0.6rem;
      border-radius: 0.5rem;
    }

    .comprar-button {
      background-color: ${theme.colors.blue};
      width: 100%;

      border-radius: 0rem 0rem 0.8rem 0.8rem;
      text-align: center;
    }

    .products-characteristics {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      margin: 1.2rem;
    }

    .comprar-button {
      
      cursor: pointer;
      &:hover {
        .bag {
          
        transform: scale(0.95);
        }
        
      }
    }

    .bag {transition: 0.7s ease;
      width: 100%;
      height: 100%;
      padding: 1rem 0rem;
      
    }
  `}
`;
