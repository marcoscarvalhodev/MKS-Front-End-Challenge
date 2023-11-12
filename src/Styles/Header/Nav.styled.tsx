import styled, {css} from 'styled-components';

export const StyledNav = styled.nav`
  ${({theme}) => css`
    .logo {
      position: relative;
      &:after {
      position: absolute;
      content: 'Sistemas';
      font-size: 2rem;
      font-weight: 300;
      bottom: 10px;
      left: calc(100% + 12px);
      
    }
    }

    .nav-flex {
      display: flex;
      justify-content: space-between;
    }

    .cart {
      display: flex;
      align-items: center;
      padding: 1.5rem 2.7rem 1.5rem 1.5rem;
      background: ${theme.colors.white};
      border-radius: 0.8rem;
      gap: 1.6rem;
    }
    
  `}

`
