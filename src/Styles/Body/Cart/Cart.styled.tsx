import styled, {css} from 'styled-components';

export const StyledCart = styled.div`
${({theme}) => css`
overflow: hidden;
  width: 100vw;
  height: 100%;
  position: absolute;
  top: 0; 
  background-color: rgba(0, 0, 0, 0.2);
  

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
    position: absolute;
    right: 0;
    box-shadow: -5px 0px 6px 0px rgba(0, 0, 0, 0.13);

    .title-flex {
      display: flex;
      gap: 30px;
    }

    .cross {
      background: ${theme.colors.black.normal_black};
      padding: 3px 10px;
      border-radius: 50%;
      cursor: pointer;
      display: flex;
      align-items: center;
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
    transform: translate3d(0, 0 , 0);
    transition: 0.7s ease;
  }


  
`}
`