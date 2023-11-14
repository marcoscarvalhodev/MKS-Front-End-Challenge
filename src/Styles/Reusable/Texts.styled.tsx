import styled, { css } from 'styled-components';

interface StyledTextsProps {
  $size: 'p1' | 'p2' | 'p3' | 'p4' | 'p5' | 'p6' | 'p7';
}

export const StyledTexts = styled.p<StyledTextsProps>`
  ${({ theme, $size, as }) => css`



  font-family: 'Montserrat';
    ${$size === 'p1' &&
    css`
      font-size: 1rem;
      
      font-weight: 300;
      color: ${theme.colors.black.light_black_1};
    `};

    ${$size === 'p2' &&
    css`
      font-size: 1.2rem;
      
      font-weight: 400;
      color: ${theme.colors.black.normal_black};
      
    `}

    ${$size === 'p3' && css`
      font-size: 2rem;
      
      font-weight: 300;
      color: ${theme.colors.white};
    `}

    ${$size === 'p4' && css`
      font-size: 1.8rem;
      
      font-weight: 700;
      color: ${theme.colors.black.normal_black};
    `}

    ${$size === 'p5' && css`
    font-size: 2.8rem;
    color: ${theme.colors.white};
    font-weight: 700;
    `}

    ${$size === 'p6' && css`
      
    font-size: 0.8rem;
    color: ${theme.colors.black.normal_black};
    font-weight: 400;
    `}

    ${$size === 'p7' && css`
      
    font-size: 1.4rem;
    color: ${theme.colors.black.normal_black};
    font-weight: 700;
    `}
    
  `}
`;
