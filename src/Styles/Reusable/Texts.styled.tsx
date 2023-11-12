import styled, { css } from 'styled-components';

interface StyledTextsProps {
  $size: 'p1' | 'p2' | 'p3';
}

export const StyledTexts = styled.p<StyledTextsProps>`
  ${({ theme, $size }) => css`
    ${$size === 'p1' &&
    css`
      font-size: 1rem;
      line-height: 1.2rem;
      font-weight: 300;
      color: ${theme.colors.black.light_black_1};
    `};

    ${$size === 'p2' &&
    css`
      font-size: 1.2rem;
      line-height: 1.45rem;
      font-weight: 400;
      color: ${theme.colors.black.normal_black};
      
    `}

    ${$size === 'p3' && css`
      font-size: 2rem;
      line-height: 1.9rem;
      font-weight: 300;
      color: ${theme.colors.white};
    `}
  `}
`;
