import styled, { css } from 'styled-components';

interface StyledHeadingsProps {
  as: 'h1' | 'h2' | 'h3';
}

export const StyledHeading = styled.h1<StyledHeadingsProps>`
  ${({ theme, as }) => css`
    font-family: 'Montserrat';
    margin: 0px;

    ${as === 'h1' &&
    css`
      font-size: 4rem;
      
      font-weight: 600;
      color: ${theme.colors.white};
    `};

    ${as === 'h2' &&
    css`
      font-size: 1.6rem;
      
      font-weight: 400;
      color: ${theme.colors.black.light_black_1};
    `}

    ${as === 'h3' &&
    css`
      font-size: 1.5rem;
      
      font-weight: 700;
      color: ${theme.colors.white};
    `}

    
  `}
`;
